import fs from "node:fs/promises";
import { existsSync, watch } from "node:fs";
import path from "node:path";
import os from "node:os";
import { fileURLToPath } from "node:url";
import { createHash } from "node:crypto";
import { spawn } from "node:child_process";
import { setDefaultResultOrder } from "node:dns";

setDefaultResultOrder("ipv4first");
const nodeOptions = process.env.NODE_OPTIONS || "";
const childEnv = {...process.env, NODE_OPTIONS: nodeOptions.includes("--dns-result-order") ? nodeOptions : (nodeOptions + " --dns-result-order=ipv4first").trim()};

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const flags = new Set(process.argv.slice(2));
const rootHash = createHash("sha256").update(root).digest("hex").slice(0, 16);
const cache = process.env.ALGA_SITE_CACHE || path.join(os.tmpdir(), "alga-site", rootHash);
const stage = path.join(cache, "content");
const engine = path.join(cache, "engine");
const output = path.join(root, ".site/public");
const revision = (await fs.readFile(path.join(root, ".site/quartz-revision.txt"), "utf8")).trim();
if (!/^[a-f0-9]{40}$/.test(revision)) throw new Error("Invalid pinned Quartz revision");
const languages = JSON.parse(await fs.readFile(path.join(root, ".site/languages.json"), "utf8"));
const extensions = new Set([".md", ".pdf", ".tex", ".bib", ".png", ".jpg", ".jpeg", ".svg", ".webp", ".gif", ".avif", ".mp3", ".ogg", ".wav", ".mp4", ".webm"]);
const oldIndex = "Álgebra Lineal y Geometría Analítica — índice de contenidos";
const vaultPrefix = "Física/Grado/1º/Álgebra Lineal y Geometría Analítica/";
const posix = (p) => p.split(path.sep).join("/");
const norm = (s) => s.normalize("NFC");
const decode = (s) => { try { return decodeURIComponent(s); } catch { return s; } };
const run = (command, args, cwd = engine) => new Promise((resolve, reject) => {
  const child = spawn(command, args, {cwd, stdio: "inherit", env: childEnv});
  child.on("error", reject);
  child.on("exit", (code, signal) => code === 0 ? resolve() : reject(new Error(command + " failed (" + (code ?? signal) + ")")));
});
async function sources(dir = root) {
  const found = [];
  for (const entry of await fs.readdir(dir, {withFileTypes: true})) {
    if (entry.name.startsWith(".") || ["node_modules", "public"].includes(entry.name)) continue;
    const file = path.join(dir, entry.name);
    if (dir === root && entry.name === "README.md") continue; // Generated GitHub mirror.
    if (entry.isDirectory()) found.push(...await sources(file));
    else if (entry.isFile() && extensions.has(path.extname(entry.name).toLowerCase())) found.push(file);
  }
  return found.sort();
}
function field(text, name) {
  const front = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!front) return null;
  return front[1].match(new RegExp("^" + name + ":\\s*([^\\n]+)", "m"))?.[1].trim().replace(/^["']|["']$/g, "") || null;
}
function relative(from, to, fragment = "") {
  const href = path.posix.relative(path.posix.dirname(from), to) || path.posix.basename(to);
  return encodeURI(href) + fragment;
}
async function changedWrite(destination, value) {
  await fs.mkdir(path.dirname(destination), {recursive: true});
  let current;
  try { current = await fs.readFile(destination, typeof value === "string" ? "utf8" : undefined); } catch {}
  if (typeof value === "string" ? current !== value : !current?.equals(value)) await fs.writeFile(destination, value);
}
async function prepare() {
  await fs.mkdir(stage, {recursive: true});
  const entries = [];
  for (const file of await sources()) {
    const source = posix(path.relative(root, file));
    const markdown = path.extname(file).toLowerCase() === ".md";
    const text = markdown ? await fs.readFile(file, "utf8") : null;
    const suffix = source.match(/\.(en|es|pt)\.md$/)?.[1];
    entries.push({file, source, text,
      dest: source === oldIndex + ".md" ? "index.md" : source,
      language: (text && field(text, "language")?.split("-")[0]) || suffix || languages.default,
      key: source === oldIndex + ".md" ? "home" : (text && field(text, "translationKey")) || source.replace(/\.(en|es|pt)(?=\.md$)/, "").replace(/\.md$/, ""),
    });
  }
  for (const code of ["en", "pt"]) {
    const file = path.join(root, ".site/translations", code + ".md");
    entries.push({file, source: ".site/translations/" + code + ".md", text: await fs.readFile(file, "utf8"), dest: code + "/index.md", language: code, key: "home"});
  }
  const map = new Map(), short = new Map();
  for (const entry of entries) {
    map.set(norm(entry.source), entry);
    map.set(norm(entry.source.replace(/\.md$/, "")), entry);
    const stem = norm(path.posix.basename(entry.source).replace(/\.md$/, ""));
    short.set(stem, [...(short.get(stem) || []), entry]);
  }
  const home = map.get(norm(oldIndex + ".md"));
  if (!home) throw new Error("Missing original curricular index: " + oldIndex + ".md");
  map.set("README.md", home);
  map.set("README", home);
  map.set(norm(oldIndex), home);
  map.set(norm(oldIndex + ".md"), home);
  function resolveTarget(raw, from) {
    let target = decode(raw.trim().replace(/^<|>$/g, "")).replaceAll("\\", "/");
    const hash = target.indexOf("#");
    const fragment = hash >= 0 ? target.slice(hash) : "";
    target = hash >= 0 ? target.slice(0, hash) : target;
    if (!target && fragment) return {entry: from, fragment};
    const prefix = norm(target).indexOf(norm(vaultPrefix));
    if (prefix >= 0) target = norm(target).slice(prefix + norm(vaultPrefix).length);
    target = target.replace(/^\/+/, "");
    const entry = map.get(norm(target)) || map.get(norm(path.posix.normalize(path.posix.join(path.posix.dirname(from.source), target))));
    if (entry) return {entry, fragment};
    if (!target.includes("/") || raw.startsWith("file:") || norm(raw).includes(norm(vaultPrefix)) || (extensions.has(path.posix.extname(target).toLowerCase()) && path.posix.extname(target).toLowerCase() !== ".md")) {
      const candidates = short.get(norm(path.posix.basename(target).replace(/\.md$/, ""))) || [];
      if (candidates.length === 1) return {entry: candidates[0], fragment};
    }
    return null;
  }
  const missing = [];
  function render(entry, {github = false} = {}) {
    const destination = (target) => github ? target.source : target.dest;
    const tick = String.fromCharCode(96);
    const unsupported = new RegExp("^[ \\t]*(" + tick + "{3,}|~{3,})(?:dataviewjs|dataview|anki)\\b[^\\n]*\\n[\\s\\S]*?^[ \\t]*\\1[ \\t]*$", "gm");
    let text = entry.text.replace(unsupported, "");
    text = text.replace(/(!?)\[\[([^\]\n]+)\]\]/g, (_, embed, raw) => {
      const split = raw.indexOf("|");
      const target = split >= 0 ? raw.slice(0, split) : raw;
      const label = split >= 0 ? raw.slice(split + 1) : path.posix.basename(target).replace(/\.md$/, "");
      const resolved = resolveTarget(target, entry);
      if (!resolved) { missing.push({source: entry.source, target}); return label; }
      return (embed && path.extname(resolved.entry.dest) !== ".md" ? "!" : "") + "[" + label + "](<" + relative(entry.dest, destination(resolved.entry), resolved.fragment) + ">)";
    });
    text = text.replace(/(!?)\[([^\]\n]*)\]\((<[^>]+>|[^)\n]+)\)/g, (all, embed, label, raw) => {
      const url = raw.replace(/^<|>$/g, "");
      if (/^(https?:|mailto:|data:|#)/i.test(url)) return all;
      const resolved = resolveTarget(url, entry);
      if (!resolved) {
        if (/^(file:|obsidian:)/i.test(url)) { missing.push({source: entry.source, target: url}); return label; }
        return all;
      }
      return embed + "[" + label + "](<" + relative(entry.dest, destination(resolved.entry), resolved.fragment) + ">)";
    });
    if (github) return text;
    const counterparts = entries.filter((candidate) => candidate.key === entry.key);
    const nav = Object.entries(languages.locales).map(([code, locale]) => {
      const counterpart = counterparts.find((candidate) => candidate.language === code);
      return "[" + locale.label + (counterpart ? "" : " · índice") + "](<" + relative(entry.dest, counterpart?.dest || locale.home) + ">)";
    }).join(" · ");
    const at = text.match(/^---\r?\n[\s\S]*?\r?\n---(?:\r?\n)?/)?.[0].length || 0;
    return text.slice(0, at) + "\n" + nav + "\n\n" + text.slice(at);
  }
  let mirror = render({...home, dest: "README.md"}, {github: true})
    .replace(/^---\r?\n[\s\S]*?\r?\n---\s*/, "")
    .replace(/^> \[!(\w+)\][+-]?(?:[ \t]+([^\n]+))?$/gmi, (_, type, title) => {
      const alert = type.toUpperCase();
      if (["NOTE", "TIP", "IMPORTANT", "WARNING", "CAUTION"].includes(alert)) {
        return "> [!" + alert + "]" + (title ? "\n> **" + title + "**\n>" : "");
      }
      return "> **" + (title || type) + "**\n>";
    })
    .replace(/==([^=\n]+)==/g, "**$1**")
    .replace(/`\/Users\/[^`\n]+`/g, (localPath) => "`" + path.posix.basename(localPath.slice(1, -1)) + "`");
  const sections = [];
  mirror = mirror.replace(/^## (.+)$/gm, (heading, label) => {
    const anchor = "contenido-" + (sections.length + 1);
    sections.push({label, anchor});
    return '<a id="' + anchor + '"></a>\n\n' + heading;
  });
  const overview = "**Faculdade de Ciências · Universidade de Lisboa**\n\n" +
    "[Índice para Obsidian](<" + encodeURI(home.source) + ">)\n\n" +
    "## Contenidos\n\n" + sections.map(({label, anchor}) => "- [" + label + "](#" + anchor + ")").join("\n");
  mirror = mirror.replace(/^(# [^\n]+)\n/, "$1\n\n" + overview + "\n");
  await changedWrite(path.join(root, "README.md"), "<!-- Generated from " + home.source + ". Edit the original; run npm run readme. -->\n\n" + mirror.trim() + "\n");
  console.log("Updated README.md from the original curricular index.");
  if (flags.has("--readme")) return;
  const produced = new Set();
  for (const entry of entries) {
    produced.add(entry.dest);
    await changedWrite(path.join(stage, entry.dest), entry.text === null ? await fs.readFile(entry.file) : render(entry));
  }
  // /es/ uses the original curricular index; this is generated output only.
  const esHome = {...home, dest: "es/index.md"};
  produced.add(esHome.dest);
  await changedWrite(path.join(stage, esHome.dest), render(esHome));
  const manifest = path.join(cache, "manifest.json");
  let previous = [];
  try { previous = JSON.parse(await fs.readFile(manifest, "utf8")); } catch {}
  for (const stale of previous) if (!produced.has(stale) && !stale.split("/").includes("..")) await fs.rm(path.join(stage, stale), {force: true});
  await changedWrite(manifest, JSON.stringify([...produced], null, 2));
  await changedWrite(path.join(cache, "link-report.json"), JSON.stringify(missing, null, 2));
  console.log("Prepared " + entries.filter((e) => e.text !== null).length + " Markdown pages from the original course folder.");
}
async function syncConfig() {
  let config = await fs.readFile(path.join(root, ".site/quartz.config.yaml"), "utf8");
  let baseUrl = process.env.QUARTZ_BASE_URL;
  if (!baseUrl && process.env.GITHUB_REPOSITORY) {
    const [owner, repo] = process.env.GITHUB_REPOSITORY.split("/");
    baseUrl = owner.toLowerCase() + ".github.io" + (repo.toLowerCase() === owner.toLowerCase() + ".github.io" ? "" : "/" + repo);
  }
  if (baseUrl) {
    config = config.replace(/^  baseUrl:.*\n/m, "");
    config = config.replace(/^configuration:\s*$/m, "configuration:\n  baseUrl: " + JSON.stringify(baseUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")));
  }
  await changedWrite(path.join(engine, "quartz.config.yaml"), config);
  return config;
}
async function ensureEngine() {
  let installed;
  try { installed = (await fs.readFile(path.join(engine, ".alga-revision"), "utf8")).trim(); } catch {}
  if (installed !== revision) {
    await fs.rm(engine, {recursive: true, force: true});
    await fs.mkdir(engine, {recursive: true});
    const response = await fetch("https://codeload.github.com/jackyzha0/quartz/tar.gz/" + revision, {signal: AbortSignal.timeout(60000)});
    if (!response.ok) throw new Error("Quartz download failed: " + response.status);
    const archive = path.join(cache, "quartz.tar.gz");
    await fs.writeFile(archive, Buffer.from(await response.arrayBuffer()));
    await run("tar", ["-xzf", archive, "--strip-components=1", "-C", engine], cache);
    await fs.rm(archive);
    await fs.writeFile(path.join(engine, ".alga-revision"), revision + "\n");
  }
  if (!existsSync(path.join(engine, "node_modules/.package-lock.json"))) {
    console.log("Installing pinned Quartz dependencies (first run only).");
    await run(process.platform === "win32" ? "npm.cmd" : "npm", ["ci", "--no-audit", "--no-fund"]);
  }
  const config = await syncConfig();
  const hash = createHash("sha256").update(config).digest("hex");
  const marker = path.join(engine, ".alga-plugins");
  let installedHash;
  try { installedHash = await fs.readFile(marker, "utf8"); } catch {}
  if (installedHash !== hash || !existsSync(path.join(engine, ".quartz/plugins"))) {
    await run(process.execPath, ["quartz/bootstrap-cli.mjs", "plugin", "install", "--from-config"]);
    await fs.writeFile(marker, hash);
  }
}
await prepare();
if (!flags.has("--prepare") && !flags.has("--readme")) {
  await ensureEngine();
  let watcher, pending;
  let serial = Promise.resolve();
  if (flags.has("--serve")) {
    watcher = watch(root, {recursive: true}, (_, filename) => {
      if (!filename) return;
      const parts = filename.split(path.sep);
      if (parts[0] === ".git" || parts[0] === "node_modules" || (parts[0] === ".site" && parts[1] === "public")) return;
      if (parts[0]?.startsWith(".") && parts[0] !== ".site") return;
      if (parts[0] !== ".site" && !extensions.has(path.extname(filename).toLowerCase())) return;
      clearTimeout(pending);
      pending = setTimeout(() => { serial = serial.then(prepare).then(syncConfig).catch(console.error); }, 300);
    });
  }
  try {
    await run(process.execPath, ["quartz/bootstrap-cli.mjs", "build", "-d", stage, "-o", output, ...(flags.has("--serve") ? ["--serve"] : [])]);
  } finally { watcher?.close(); clearTimeout(pending); }
  console.log("Website: " + output);
}
