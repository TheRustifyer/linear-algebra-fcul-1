import fs from "node:fs/promises";
import path from "node:path";
import { cache } from "../paths.mjs";

let stats = {};
try { stats = JSON.parse(await fs.readFile(path.join(cache, "translation-stats.json"), "utf8")); } catch {}
const plan = JSON.parse(await fs.readFile(path.join(cache, "translation-plan.json"), "utf8"));
let report = "## Argos publication\n\n" + plan.documents.length + " source notes · " + Object.keys(plan.segments).length + " unique prose fragments\n\n";
report += "| Edition | Translated now | Reused |\n| --- | ---: | ---: |\n";
for (const [language, counts] of Object.entries(stats)) report += "| " + language + " | " + counts.translated + " | " + counts.reused + " |\n";
report += "\nTranslation memory is preserved on the `translation-memory` branch. The downloadable artifact contains the prepared Markdown editions, memory, source hashes, and model recipe.\n";
if (process.env.GITHUB_STEP_SUMMARY) await fs.appendFile(process.env.GITHUB_STEP_SUMMARY, report);
else console.log(report);
