// Keep the reader's checks aligned with quality.py; quality.test.mjs checks both.
export function translationIssue(source, result) {
  if (typeof result !== "string" || !result.trim()) return "empty translation";
  for (const match of result.matchAll(/(.{2,40}?)\1{7,}/giu)) {
    if ([...match[0]].length >= 64 && /\p{L}/u.test(match[1])) return "repetitive translation";
  }
  if (/\p{L}{100,}/u.test(result)) return "unbroken word exceeds 99 letters";
  if (source != null && [...result].length > Math.max(240, [...source].length * 6 + 80)) return "implausible translation length";
  return null;
}

export function assertTranslation(source, result, context) {
  const issue = translationIssue(source, result);
  if (issue) throw new Error("Invalid translation (" + issue + "): " + context);
  return result;
}
