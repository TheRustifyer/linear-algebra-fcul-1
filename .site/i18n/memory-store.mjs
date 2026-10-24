import fs from "node:fs/promises";
import path from "node:path";
import { memory, cache, sha256 } from "../paths.mjs";

const branch = "translation-memory";
const repository = process.env.GITHUB_REPOSITORY;
const token = process.env.GITHUB_TOKEN;
if (process.env.GITHUB_ACTIONS !== "true" || !repository || !token) throw new Error("Translation memory persistence only runs in GitHub Actions");
if (process.env.GITHUB_REF !== "refs/heads/main") throw new Error("Only main can update the published translation memory");
const allowed = ["memory/en.json.gz", "memory/pt.json.gz", "manifest.json"];
const apiBase = process.env.GITHUB_API_URL || "https://api.github.com";
async function api(route, body, missing = false) {
  const response = await fetch(apiBase + "/repos/" + repository + route, {
    method: body ? "POST" : "GET",
    headers: { Authorization: "Bearer " + token, Accept: "application/vnd.github+json", "X-GitHub-Api-Version": "2022-11-28", ...(body ? { "Content-Type": "application/json" } : {}) },
    ...(body ? { body: JSON.stringify(body) } : {}),
    signal: AbortSignal.timeout(60000),
  });
  if (missing && response.status === 404) return null;
  if (!response.ok) throw new Error("GitHub memory request failed: " + response.status + " " + route);
  return response.json();
}
async function head() {
  const ref = await api("/git/ref/heads/" + branch, undefined, true);
  if (!ref) return null;
  const commit = await api("/git/commits/" + ref.object.sha);
  return { sha: ref.object.sha, tree: commit.tree.sha };
}
const mode = process.argv[2];
if (mode === "pull") {
  // Branch data is the durable source; an expired Actions cache cannot lose translations.
  await fs.rm(memory, { recursive: true, force: true });
  await fs.mkdir(memory, { recursive: true });
  const current = await head();
  if (!current) console.log("No translation-memory branch yet; this publication will create it.");
  else {
    const tree = await api("/git/trees/" + current.tree + "?recursive=1");
    if (tree.truncated) throw new Error("Translation memory tree is truncated");
    let restored = 0;
    for (const entry of tree.tree.filter((entry) => entry.type === "blob" && allowed.includes(entry.path))) {
      const blob = await api("/git/blobs/" + entry.sha);
      if (blob.encoding !== "base64") throw new Error("Unexpected memory blob encoding");
      const destination = path.join(memory, entry.path);
      await fs.mkdir(path.dirname(destination), { recursive: true });
      await fs.writeFile(destination, Buffer.from(blob.content, "base64"));
      restored++;
    }
    console.log("Restored " + restored + " files from the durable translation-memory branch.");
  }
} else if (mode === "push") {
  const files = [];
  for (const name of allowed) {
    let content;
    try { content = await fs.readFile(path.join(memory, name)); } catch (error) { if (error.code === "ENOENT") continue; throw error; }
    files.push({ name, content });
  }
  if (!files.some((file) => file.name.endsWith(".json.gz"))) console.log("No completed translation segments to persist.");
  else {
    const current = await head();
    const oldTree = current ? (await api("/git/trees/" + current.tree + "?recursive=1")).tree : [];
    const changes = [];
    for (const file of files) {
      const existing = oldTree.find((entry) => entry.path === file.name);
      if (existing) {
        const blob = await api("/git/blobs/" + existing.sha);
        if (sha256(Buffer.from(blob.content, "base64")) === sha256(file.content)) continue;
      }
      const blob = await api("/git/blobs", { content: file.content.toString("base64"), encoding: "base64" });
      changes.push({ path: file.name, mode: "100644", type: "blob", sha: blob.sha });
    }
    if (!changes.length) console.log("Translation memory already up to date.");
    else {
      const tree = await api("/git/trees", { ...(current ? { base_tree: current.tree } : {}), tree: changes });
      const commit = await api("/git/commits", { message: "Preserve Argos translations for " + (process.env.GITHUB_SHA || "publication").slice(0, 12), tree: tree.sha, parents: current ? [current.sha] : [] });
      if (current) {
        const response = await fetch(apiBase + "/repos/" + repository + "/git/refs/heads/" + branch, {
          method: "PATCH", headers: { Authorization: "Bearer " + token, Accept: "application/vnd.github+json", "Content-Type": "application/json" },
          body: JSON.stringify({ sha: commit.sha, force: false }), signal: AbortSignal.timeout(60000),
        });
        if (!response.ok) throw new Error("Could not advance translation memory without overwriting history: " + response.status);
      } else await api("/git/refs", { ref: "refs/heads/" + branch, sha: commit.sha });
      console.log("Preserved translation memory in " + branch + " at " + commit.sha.slice(0, 12));
    }
  }
} else throw new Error("Use pull or push");
