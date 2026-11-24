import test from "node:test";
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { translationIssue, assertTranslation } from "./quality.mjs";
import fs from "node:fs/promises";
import path from "node:path";
import os from "node:os";
import { gzipSync } from "node:zlib";

const cases = [
  ["Matrices", "mainstre".repeat(255) + "@@", "repetitive translation"],
  ["Operaciones", "the same words ".repeat(12), "repetitive translation"],
  ["Título", "", "empty translation"],
  ["Título", null, "empty translation"],
  ["Título", "ABCDEFGHIJKLMNOPQRSTUVWXYZ".repeat(4), "unbroken word exceeds 99 letters"],
  ["Título", Array.from({ length: 90 }, (_, i) => "word" + i).join(" "), "implausible translation length"],
  [null, "mainstre".repeat(255), "repetitive translation"],
  ["Matrices", "Matrices", null],
  ["Matriz inversa", "Matrix inverse", null],
  ["Filas y columnas", "Linhas e colunas", null],
  ["😀 Matriz inversa", "😀 Matrix inverse", null],
  ["La diagonal contiene ceros.", "The diagonal contains zeros. ".repeat(2), null],
];

test("rejects decoder loops and disproportionate output without rejecting normal prose", () => {
  for (const [source, value, expected] of cases) assert.equal(translationIssue(source, value), expected);
  assert.throws(() => assertTranslation("Matrices", cases[0][1], "en title"), /repetitive translation.*en title/);
});

test("Python writer and JavaScript reader apply the same checks", () => {
  const script = `import json,sys\nfrom quality import translation_issue,clean_memory\ncases=json.load(sys.stdin)\nprint(json.dumps([translation_issue(s,v) for s,v,_ in cases]))\n`;
  const child = spawnSync(process.env.PYTHON || "python3", ["-c", script], {
    cwd: fileURLToPath(new URL(".", import.meta.url)), input: JSON.stringify(cases), encoding: "utf8",
  });
  assert.equal(child.status, 0, child.stderr);
  assert.deepEqual(JSON.parse(child.stdout), cases.map((item) => item[2]));
});

test("migration retains good entries, removes poisoned and retired loops, and refuses unknown recipes", () => {
  const script = `from quality import clean_memory
segments={'good':'Matriz inversa','bad':'Matrices'}
old={'recipe':'legacy','entries':{'good':'Matrix inverse','bad':'mainstre'*255,'retired':'same words '*40}}
entries,removed=clean_memory(old,'current',['legacy'],segments)
assert entries=={'good':'Matrix inverse'} and removed==2
assert clean_memory(old,'current',[],segments)==({},0)
assert clean_memory({'recipe':'current','entries':entries},'current',[],segments)==(entries,0)
`;
  const child = spawnSync(process.env.PYTHON || "python3", ["-c", script], {
    cwd: fileURLToPath(new URL(".", import.meta.url)), encoding: "utf8",
  });
  assert.equal(child.status, 0, child.stderr);
});

test("materialization preserves math and links, and refuses poisoned memory before replacing editions", async () => {
  const cache = await fs.mkdtemp(path.join(os.tmpdir(), "alga-i18n-test-"));
  const root = fileURLToPath(new URL("../../", import.meta.url));
  const filename = "01 Matrices y sistemas/01 Matrices.md";
  const original = "---\ntitle: Matrices\n---\n\n# Matrices\n\nLa identidad $AI=A$ conserva [el enlace](https://example.org/reference).\n\n$$\nA=I_n\n$$\n";
  const run = (mode) => spawnSync(process.execPath, [".site/i18n/documents.mjs", mode], {
    cwd: root, env: { ...process.env, ALGA_SITE_CACHE: cache }, encoding: "utf8",
  });
  try {
    await fs.mkdir(path.join(cache, "source", path.dirname(filename)), { recursive: true });
    await fs.writeFile(path.join(cache, "source", filename), original);
    await fs.writeFile(path.join(cache, "source-manifest.json"), JSON.stringify({ files: [{ dest: filename }] }));
    const extracted = run("extract");
    assert.equal(extracted.status, 0, extracted.stderr);
    const plan = JSON.parse(await fs.readFile(path.join(cache, "translation-plan.json"), "utf8"));
    await fs.mkdir(path.join(cache, "translation-memory/memory"), { recursive: true });
    for (const target of plan.targets) {
      const entries = Object.fromEntries(Object.entries(plan.segments).map(([key, value]) => [key, value]));
      await fs.writeFile(path.join(cache, "translation-memory/memory", target + ".json.gz"), gzipSync(JSON.stringify({ recipe: plan.recipe, entries })));
    }
    await fs.writeFile(path.join(cache, "translation-stats.json"), "{}");
    const assembled = run("materialize");
    assert.equal(assembled.status, 0, assembled.stderr);
    for (const target of ["en", "es", "pt"]) {
      const result = await fs.readFile(path.join(cache, "editions", target, filename), "utf8");
      assert.match(result, /AI=A/);
      assert.match(result, /A=I_n/);
      assert.match(result, /https:\/\/example.org\/reference/);
      assert.doesNotMatch(result, /mainstremainstre/);
    }
    const marker = path.join(cache, "editions", "previous-build.txt");
    await fs.writeFile(marker, "preserve");
    const entries = Object.fromEntries(Object.entries(plan.segments).map(([key, value]) => [key, value]));
    entries[Object.keys(entries)[0]] = "mainstre".repeat(255);
    await fs.writeFile(path.join(cache, "translation-memory/memory/en.json.gz"), gzipSync(JSON.stringify({ recipe: plan.recipe, entries })));
    const rejected = run("materialize");
    assert.notEqual(rejected.status, 0);
    assert.match(rejected.stderr, /repetitive translation/);
    assert.equal(await fs.readFile(marker, "utf8"), "preserve");
    assert.equal(await fs.readFile(path.join(cache, "source", filename), "utf8"), original);
  } finally {
    await fs.rm(cache, { recursive: true, force: true });
  }
});
