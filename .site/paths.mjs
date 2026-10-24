import path from "node:path";
import os from "node:os";
import { fileURLToPath } from "node:url";
import { createHash } from "node:crypto";

export const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
export const rootHash = createHash("sha256").update(root).digest("hex").slice(0, 16);
export const cache = path.resolve(process.env.ALGA_SITE_CACHE || path.join(os.tmpdir(), "alga-site", rootHash));
export const source = path.join(cache, "source");
export const editions = path.join(cache, "editions");
export const engine = path.join(cache, "engine");
export const memory = path.join(cache, "translation-memory");
export const output = path.join(root, ".site/public");
export const sha256 = (value) => createHash("sha256").update(value).digest("hex");

export function publicBase() {
  if (process.env.QUARTZ_BASE_URL) return process.env.QUARTZ_BASE_URL.replace(/^https?:\/\//, "").replace(/\/$/, "");
  const repository = process.env.GITHUB_REPOSITORY;
  if (!repository) return "therustifyer.github.io/linear-algebra-fcul-1";
  const [owner, repo] = repository.split("/");
  return owner.toLowerCase() + ".github.io" + (repo.toLowerCase() === owner.toLowerCase() + ".github.io" ? "" : "/" + repo);
}
