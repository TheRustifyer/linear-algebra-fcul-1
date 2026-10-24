import fs from "node:fs/promises";
import path from "node:path";
import { gunzipSync } from "node:zlib";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkStringify from "remark-stringify";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
import remarkFrontmatter from "remark-frontmatter";
import GithubSlugger from "github-slugger";
import YAML from "yaml";
import { root, cache, source, editions, memory, sha256, publicBase } from "../paths.mjs";

const processor = unified().use(remarkParse).use(remarkFrontmatter, ["yaml"]).use(remarkMath).use(remarkGfm).use(remarkStringify, { bullet: "-", fences: true });
const languages = JSON.parse(await fs.readFile(path.join(root, ".site/languages.json"), "utf8"));
const targets = Object.keys(languages.locales).filter((code) => code !== languages.sourceLanguage);
const recipeFiles = ["argos.py", "argos-models.lock.json", "glossary.json", "requirements.txt"];
const recipe = sha256(Buffer.concat([Buffer.from("ast-prose-v1\n"), ...await Promise.all(recipeFiles.map((file) => fs.readFile(path.join(root, ".site/i18n", file))))]));
const manifest = JSON.parse(await fs.readFile(path.join(cache, "source-manifest.json"), "utf8"));

const folders = new Set();
for (const file of manifest.files) {
  let directory = path.posix.dirname(file.dest);
  while (directory !== ".") { folders.add(directory); directory = path.posix.dirname(directory); }
}
const folderTitle = (folder) => path.posix.basename(folder) === "ejercicios" ? "Ejercicios y soluciones" : path.posix.basename(folder);

function parts(text) {
  return text.split(/(\[![a-z][\w-]*\][+-]?|==|\^[\w-]+\s*$)/gimu).map((value, index) => ({ value, protected: index % 2 === 1 }));
}
function candidate(text) {
  return /\p{L}.*\p{L}/u.test(text) && !/^(?:https?:\/\/|mailto:)/i.test(text.trim());
}
function walk(node, action) {
  action(node);
  for (const child of node.children || []) walk(child, action);
}
function readable(node) {
  return node.value ?? node.alt ?? (node.children || []).map(readable).join("");
}
function metadata(tree, filename) {
  const raw = tree.children.find((node) => node.type === "yaml")?.value;
  const data = raw ? YAML.parse(raw) : {};
  if (data === null || typeof data !== "object" || Array.isArray(data)) throw new Error("Invalid metadata in " + filename);
  data.title ||= readable(tree.children.find((node) => node.type === "heading") || {}) || path.basename(filename, ".md");
  return data;
}
function protectedData(tree) {
  const records = [];
  walk(tree, (node) => {
    if (["math", "inlineMath", "code", "inlineCode", "html"].includes(node.type)) records.push([node.type, node.value, node.lang]);
    if (["link", "image", "definition"].includes(node.type)) records.push([node.type, node.url, node.identifier]);
    if (["footnoteReference", "footnoteDefinition", "linkReference", "imageReference"].includes(node.type)) records.push([node.type, node.identifier]);
  });
  return sha256(JSON.stringify(records));
}
function eachProse(tree, action) {
  walk(tree, (node) => {
    if (node.type === "text") node.value = action(node.value);
    if (node.type === "image" && node.alt) node.alt = action(node.alt);
    if (["link", "image", "definition"].includes(node.type) && node.title) node.title = action(node.title);
  });
}
function transformText(text, translate) {
  return parts(text).map(({ value, protected: protectedPart }) => {
    const trimmed = value.trim();
    if (protectedPart || !candidate(trimmed)) return value;
    const leading = value.match(/^\s*/)[0], trailing = value.match(/\s*$/)[0];
    return leading + translate(trimmed.normalize("NFC")) + trailing;
  }).join("");
}
function publicSlug(filename) {
  const segments = filename.replace(/\.md$/, "").split("/").map((part) => part.replace(/\s/g, "-").replace(/&/g, "-and-").replace(/%/g, "-percent").replace(/\?/g, "").replace(/#/g, "").replace(/[<>:"|*]/g, "").toLowerCase());
  segments[segments.length - 1] = segments.at(-1).replace(/_index$/, "index");
  if (segments.length >= 2 && segments.at(-1) === segments.at(-2)) segments[segments.length - 1] = "index";
  return segments.join("/");
}
function pageUrl(code, filename) {
  const prefix = languages.locales[code].prefix;
  const slug = filename === "index.md" ? "" : publicSlug(filename) + ".html";
  return "https://" + publicBase() + "/" + [prefix, slug].filter(Boolean).join("/") + (!slug && prefix ? "/" : "");
}
function navigation(code, filename) {
  const selector = Object.entries(languages.locales).map(([language, config]) => language === code ? "**" + config.label + "**" : "[" + config.label + "](" + encodeURI(pageUrl(language, filename)) + ")").join(" · ");
  const labels = { en: ["Exercises and solutions", "Exercise PDF"], es: ["Ejercicios y soluciones", "PDF de ejercicios"], pt: ["Exercícios e resoluções", "PDF de exercícios"] }[code];
  const exercise = "01 Matrices y sistemas/ejercicios/00 Índice de ejercicios.md";
  const pdf = "01 Matrices y sistemas/ejercicios/ALGA - Exercicios 1-34.pdf";
  const links = [];
  if (manifest.files.some((file) => file.dest === exercise)) links.push("[✍️ " + labels[0] + "](" + encodeURI(pageUrl(code, exercise)) + ")");
  if (manifest.files.some((file) => file.dest === pdf)) links.push("[📄 " + labels[1] + "](<" + encodeURI(path.posix.relative(path.posix.dirname(filename), pdf)) + ">)");
  return selector + "\n\n" + links.join(" · ") + "\n\n";
}

const mode = process.argv[2];
if (mode === "extract") {
  const segments = {}, documents = [];
  const register = (text) => { segments[sha256(text)] = text; return text; };
  for (const file of manifest.files.filter((entry) => entry.dest.endsWith(".md"))) {
    const contents = await fs.readFile(path.join(source, file.dest), "utf8");
    const tree = processor.parse(contents), meta = metadata(tree, file.dest);
    eachProse(tree, (text) => transformText(text, register));
    transformText(String(meta.title), register);
    if (typeof meta.description === "string") transformText(meta.description, register);
    documents.push({ path: file.dest, sourceHash: sha256(contents) });
  }
  for (const folder of folders) transformText(folderTitle(folder), register);
  await fs.writeFile(path.join(cache, "translation-plan.json"), JSON.stringify({ schema: 1, recipe, targets, sourceLanguage: languages.sourceLanguage, sourceCommit: process.env.GITHUB_SHA || null, documents, segments }));
  console.log("Extracted " + Object.keys(segments).length + " unique prose segments from " + documents.length + " documents.");
} else if (mode === "materialize") {
  const plan = JSON.parse(await fs.readFile(path.join(cache, "translation-plan.json"), "utf8"));
  if (plan.recipe !== recipe) throw new Error("Translation recipe changed after extraction");
  const memories = {};
  for (const target of targets) {
    memories[target] = JSON.parse(gunzipSync(await fs.readFile(path.join(memory, "memory", target + ".json.gz"))));
    if (memories[target].recipe !== recipe) throw new Error("Stale translation memory for " + target);
  }
  // Generated editions live exclusively in the runner's temporary directory.
  await fs.rm(editions, { recursive: true, force: true });
  for (const [code, locale] of Object.entries(languages.locales)) {
    const destination = path.join(editions, code);
    const titles = new Map();
    const translated = (text) => {
      const result = memories[code]?.entries[sha256(text)];
      if (typeof result !== "string" || !result.trim()) throw new Error("Missing translation in " + code + ": " + sha256(text));
      return result;
    };
    const label = (text) => code === languages.sourceLanguage ? text : transformText(text, translated);
    for (const file of manifest.files) {
      const target = path.join(destination, file.dest);
      await fs.mkdir(path.dirname(target), { recursive: true });
      if (!file.dest.endsWith(".md")) { await fs.copyFile(path.join(source, file.dest), target); continue; }
      const contents = await fs.readFile(path.join(source, file.dest), "utf8");
      if (plan.documents.find((document) => document.path === file.dest)?.sourceHash !== sha256(contents)) throw new Error("Source changed during translation: " + file.dest);
      const tree = processor.parse(contents), meta = metadata(tree, file.dest);
      const before = protectedData(tree);
      const anchors = new Map(), slugger = new GithubSlugger();
      walk(tree, (node) => { if (node.type === "heading") anchors.set(node, slugger.slug(readable(node))); });
      if (code !== languages.sourceLanguage) {
        eachProse(tree, (text) => transformText(text, translated));
        meta.title = transformText(String(meta.title), translated);
        if (typeof meta.description === "string") meta.description = transformText(meta.description, translated);
        delete meta.aliases;
      }
      if (protectedData(tree) !== before) throw new Error("Protected mathematical or link content changed: " + file.dest);
      meta.title = locale.titles?.[file.dest] || meta.title;
      titles.set(file.dest, String(meta.title));
      meta.lang = code;
      meta.language = locale.locale;
      meta.sourceLanguage = languages.sourceLanguage;
      if (code !== languages.sourceLanguage) meta.translationEngine = "Argos Translate";
      const front = tree.children.find((node) => node.type === "yaml");
      if (front) front.value = YAML.stringify(meta).trimEnd();
      else tree.children.unshift({ type: "yaml", value: YAML.stringify(meta).trimEnd() });
      // Original anchor names keep links and citations valid after headings are translated.
      const translatedSlugger = new GithubSlugger();
      const translatedAnchors = new Map();
      walk(tree, (node) => { if (node.type === "heading") translatedAnchors.set(node, translatedSlugger.slug(readable(node))); });
      function preserveAnchors(parent) {
        if (!parent.children) return;
        const children = [];
        for (const node of parent.children) {
          if (code !== languages.sourceLanguage && anchors.has(node) && anchors.get(node) !== translatedAnchors.get(node)) children.push({ type: "html", value: '<span id="' + anchors.get(node).replace(/&/g, "&amp;").replace(/"/g, "&quot;") + '"></span>' });
          preserveAnchors(node);
          children.push(node);
        }
        parent.children = children;
      }
      preserveAnchors(tree);
      let markdown = processor.stringify(tree);
      const end = markdown.match(/^---\n[\s\S]*?\n---\n/)?.[0].length || 0;
      markdown = markdown.slice(0, end) + "\n" + navigation(code, file.dest) + markdown.slice(end);
      await fs.writeFile(target, markdown);
    }
    // Folder landing pages give the explorer translated chapter names and direct access to exercises.
    for (const folder of [...folders].sort()) {
      const filename = folder + "/index.md";
      if (manifest.files.some((file) => file.dest === filename)) continue;
      const title = label(folderTitle(folder));
      const children = [...folders].filter((child) => path.posix.dirname(child) === folder).map((child) => ({ dest: child + "/index.md", title: label(folderTitle(child)) }));
      const files = manifest.files.filter((file) => path.posix.dirname(file.dest) === folder && /\.(md|pdf|tex)$/.test(file.dest)).map((file) => ({ dest: file.dest, title: titles.get(file.dest) || path.posix.basename(file.dest) }));
      const links = [...children, ...files].map((child) => "- [" + child.title.replace(/\[/g, "\\[").replace(/\]/g, "\\]") + "](<" + encodeURI(path.posix.relative(folder, child.dest)) + ">)").join("\n");
      const front = YAML.stringify({ title, lang: code, language: locale.locale }).trimEnd();
      await fs.writeFile(path.join(destination, filename), "---\n" + front + "\n---\n\n" + navigation(code, filename) + "# " + title + "\n\n" + links + "\n");
    }
  }
  const report = { schema: 1, recipe, engine: "Argos Translate", sourceCommit: plan.sourceCommit, documents: plan.documents, stats: JSON.parse(await fs.readFile(path.join(cache, "translation-stats.json"), "utf8")) };
  await fs.writeFile(path.join(memory, "manifest.json"), JSON.stringify(report, null, 2) + "\n");
  await fs.writeFile(path.join(editions, "manifest.json"), JSON.stringify(report, null, 2) + "\n");
  console.log("Prepared complete English, Spanish, and Portuguese editions outside the source vault.");
} else throw new Error("Use extract or materialize");
