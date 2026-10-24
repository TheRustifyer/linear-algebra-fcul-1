import fs from "node:fs/promises";
import { existsSync, watch } from "node:fs";
import path from "node:path";
import { createHash } from "node:crypto";
import { spawn } from "node:child_process";
import { setDefaultResultOrder } from "node:dns";
import { root, cache, source as stage, editions, engine, output, publicBase } from "./paths.mjs";

setDefaultResultOrder("ipv4first");
const nodeOptions = process.env.NODE_OPTIONS || "";
const childEnv = {...process.env, NODE_OPTIONS: nodeOptions.includes("--dns-result-order") ? nodeOptions : (nodeOptions + " --dns-result-order=ipv4first").trim()};

const flags = new Set(process.argv.slice(2));
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
    if (dir === root && entry.name === "README.md") continue; // Repository introduction; the course index is the website home.
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
      dest: norm(source) === norm(oldIndex + ".md") ? "index.md" : source,
      language: (text && field(text, "language")?.split("-")[0]) || suffix || languages.sourceLanguage,
      key: norm(source) === norm(oldIndex + ".md") ? "home" : (text && field(text, "translationKey")) || source.replace(/\.(en|es|pt)(?=\.md$)/, "").replace(/\.md$/, ""),
    });
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
  function render(entry) {
    const tick = String.fromCharCode(96);
    const unsupported = new RegExp("^[ \\t]*(" + tick + "{3,}|~{3,})(?:dataviewjs|dataview|anki)\\b[^\\n]*\\n[\\s\\S]*?^[ \\t]*\\1[ \\t]*$", "gm");
    let text = entry.text.replace(unsupported, "");
    text = text.replace(/(!?)\[\[([^\]\n]+)\]\]/g, (_, embed, raw) => {
      const split = raw.indexOf("|");
      const target = split >= 0 ? raw.slice(0, split) : raw;
      const label = split >= 0 ? raw.slice(split + 1) : path.posix.basename(target).replace(/\.md$/, "");
      const resolved = resolveTarget(target, entry);
      if (!resolved) { missing.push({source: entry.source, target}); return label; }
      return (embed && path.extname(resolved.entry.dest) !== ".md" ? "!" : "") + "[" + label + "](<" + relative(entry.dest, resolved.entry.dest, resolved.fragment) + ">)";
    });
    text = text.replace(/(!?)\[([^\]\n]*)\]\((<[^>]+>|[^)\n]+)\)/g, (all, embed, label, raw) => {
      const url = raw.replace(/^<|>$/g, "");
      if (/^(https?:|mailto:|data:|#)/i.test(url)) return all;
      const resolved = resolveTarget(url, entry);
      if (!resolved) {
        if (/^(file:|obsidian:)/i.test(url)) { missing.push({source: entry.source, target: url}); return label; }
        return all;
      }
      return embed + "[" + label + "](<" + relative(entry.dest, resolved.entry.dest, resolved.fragment) + ">)";
    });
    if (!field(text, "lang")) {
      text = text.startsWith("---\n") ? text.replace(/^---\n/, "---\nlang: es\n") : "---\nlang: es\n---\n\n" + text;
    }
    return text;
  }
  const produced = new Set();
  for (const entry of entries) {
    produced.add(entry.dest);
    await changedWrite(path.join(stage, entry.dest), entry.text === null ? await fs.readFile(entry.file) : render(entry));
  }
  const manifest = path.join(cache, "source-files.json");
  let previous = [];
  try { previous = JSON.parse(await fs.readFile(manifest, "utf8")); } catch {}
  for (const stale of previous) if (!produced.has(stale) && !stale.split("/").includes("..")) await fs.rm(path.join(stage, stale), {force: true});
  await changedWrite(manifest, JSON.stringify([...produced], null, 2));
  await changedWrite(path.join(cache, "link-report.json"), JSON.stringify(missing, null, 2));
  await changedWrite(path.join(cache, "source-manifest.json"), JSON.stringify({schema: 1, files: entries.map(({source, dest}) => ({source, dest}))}, null, 2));
  console.log("Prepared " + entries.filter((e) => e.text !== null).length + " Markdown pages from the original course folder.");
}
async function syncConfig(code = "en", multilingual = false) {
  let config = await fs.readFile(path.join(root, ".site/quartz.config.yaml"), "utf8");
  const prefix = multilingual ? languages.locales[code].prefix : "";
  const baseUrl = publicBase() + (prefix ? "/" + prefix : "");
  config = config.replace(/^  locale:.*$/m, "  locale: en-US");
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
if (flags.has("--bootstrap")) {
  await ensureEngine();
} else if (flags.has("--prepare")) {
  await prepare();
} else if (flags.has("--multilingual")) {
  await ensureEngine();
  await fs.rm(output, {recursive: true, force: true});
  for (const [code, locale] of Object.entries(languages.locales)) {
    const content = path.join(editions, code);
    if (!existsSync(path.join(content, "index.md"))) throw new Error("Missing prepared edition: " + code);
    await syncConfig(code, true);
    const destination = path.join(output, locale.prefix);
    console.log("Building complete " + code + " edition.");
    await run(process.execPath, ["quartz/bootstrap-cli.mjs", "build", "-d", content, "-o", destination]);
  }
  // Preserve the old English overview URL without publishing another copy of the notes.
  const englishHome = "https://" + publicBase() + "/";
  await changedWrite(path.join(output, "en/index.html"), '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta http-equiv="refresh" content="0;url=' + englishHome + '"><link rel="canonical" href="' + englishHome + '"><title>Linear Algebra and Analytic Geometry</title></head><body><a href="' + englishHome + '">Read the notes in English</a></body></html>');
  console.log("Published English at /, Spanish at /es/, and Portuguese at /pt/.");
} else {
  await prepare();
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
      pending = setTimeout(() => { serial = serial.then(prepare).then(() => syncConfig()).catch(console.error); }, 300);
    });
  }
  try {
    await run(process.execPath, ["quartz/bootstrap-cli.mjs", "build", "-d", stage, "-o", output, ...(flags.has("--serve") ? ["--serve"] : [])]);
  } finally { watcher?.close(); clearTimeout(pending); }
  console.log("Website: " + output);
}
