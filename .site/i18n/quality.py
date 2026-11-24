"""Structural checks for generated prose, including restored translation memory."""
import re


def translation_issue(source, result):
    if not isinstance(result, str) or not result.strip():
        return "empty translation"
    # Detect character/subword loops as well as repeated multiword phrases.
    for match in re.finditer(r"(.{2,40}?)\1{7,}", result, re.IGNORECASE):
        if len(match.group()) >= 64 and any(c.isalpha() for c in match.group(1)):
            return "repetitive translation"
    if re.search(r"[^\W\d_]{100,}", result, re.UNICODE):
        return "unbroken word exceeds 99 letters"
    if source is not None and len(result) > max(240, len(source) * 6 + 80):
        return "implausible translation length"
    return None


def clean_memory(existing, recipe, compatible_recipes, segments):
    """Migrate only recognized memory and keep structurally sound entries."""
    if existing.get("recipe") not in [recipe, *compatible_recipes]:
        return {}, 0
    entries = existing.get("entries", {})
    if not isinstance(entries, dict):
        raise ValueError("Invalid translation memory entries")
    clean = {
        key: value for key, value in entries.items()
        if translation_issue(segments.get(key), value) is None
    }
    return clean, len(entries) - len(clean)
