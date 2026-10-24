"""Translate extracted prose on the GitHub runner; never open or write vault notes."""
import argparse
import gzip
import hashlib
import importlib.metadata
import json
import os
from pathlib import Path
import sys
import time
import urllib.request


def atomic_json_gz(destination, data):
    destination.parent.mkdir(parents=True, exist_ok=True)
    temporary = destination.with_suffix(destination.suffix + ".tmp")
    temporary.write_bytes(gzip.compress(json.dumps(data, ensure_ascii=False, sort_keys=True).encode(), mtime=0))
    temporary.replace(destination)


def fingerprint(file):
    digest = hashlib.sha256()
    with file.open("rb") as stream:
        for block in iter(lambda: stream.read(1024 * 1024), b""):
            digest.update(block)
    return digest.hexdigest()


def main():
    if os.environ.get("GITHUB_ACTIONS") != "true":
        raise SystemExit("Argos translation is restricted to GitHub Actions. Local commands only read existing translations.")
    parser = argparse.ArgumentParser()
    parser.add_argument("--cache", required=True)
    parser.add_argument("--config", required=True)
    args = parser.parse_args()
    cache, config = Path(args.cache).resolve(), Path(args.config).resolve()
    plan = json.loads((cache / "translation-plan.json").read_text())
    lock = json.loads((config / "argos-models.lock.json").read_text())
    glossary = json.loads((config / "glossary.json").read_text())
    if importlib.metadata.version("argostranslate") != lock["engineVersion"]:
        raise SystemExit("Installed Argos version differs from the model lock")

    import argostranslate.package
    import argostranslate.settings
    import argostranslate.translate
    import stanza

    # Tokenizers and their resources are already bundled in the pinned Argos archives.
    original_pipeline = stanza.Pipeline
    def bundled_pipeline(*pipeline_args, **pipeline_kwargs):
        pipeline_kwargs.setdefault("download_method", stanza.DownloadMethod.NONE)
        return original_pipeline(*pipeline_args, **pipeline_kwargs)
    stanza.Pipeline = bundled_pipeline

    # Avoid extra sentence-splitter downloads. Both its runtime and translation models are cached.
    argostranslate.settings.device = "cpu"
    argostranslate.settings.inter_threads = 1
    argostranslate.settings.intra_threads = 2
    model_dir = cache / "argos-models"
    model_dir.mkdir(parents=True, exist_ok=True)
    installed = argostranslate.package.get_installed_packages()
    for model in lock["models"]:
        archive = model_dir / (model["source"] + "-" + model["target"] + ".argosmodel")
        if not archive.exists() or fingerprint(archive) != model["sha256"]:
            temporary = archive.with_suffix(".download")
            request = urllib.request.Request(model["url"], headers={"User-Agent": "Mozilla/5.0 (Argos publication workflow)"})
            for attempt in range(3):
                try:
                    with urllib.request.urlopen(request, timeout=120) as response, temporary.open("wb") as stream:
                        while block := response.read(1024 * 1024):
                            stream.write(block)
                    if fingerprint(temporary) != model["sha256"]:
                        raise RuntimeError("Argos model checksum mismatch: " + model["url"])
                    temporary.replace(archive)
                    break
                except Exception:
                    temporary.unlink(missing_ok=True)
                    if attempt == 2:
                        raise
                    time.sleep(2 ** attempt)
        if not any(p.from_code == model["source"] and p.to_code == model["target"] and str(p.package_version) == model["version"] for p in installed):
            argostranslate.package.install_from_path(archive)
        print("Verified Argos model " + model["source"] + " → " + model["target"], flush=True)

    installed = argostranslate.package.get_installed_packages()
    stats = {}
    for target in plan["targets"]:
        destination = cache / "translation-memory" / "memory" / (target + ".json.gz")
        existing = json.loads(gzip.decompress(destination.read_bytes())) if destination.exists() else {}
        if existing.get("recipe") != plan["recipe"] or os.environ.get("ALGA_RETRANSLATE") == "true":
            existing = {"schema": 1, "recipe": plan["recipe"], "source": "es", "target": target, "entries": {}}
        entries = existing["entries"]
        reused = sum(key in entries for key in plan["segments"])
        translator = argostranslate.translate.get_translation_from_codes("es", target)
        exact = {key.casefold(): value for key, value in glossary["exact"][target].items()}
        fresh = 0
        for key, text in plan["segments"].items():
            if key in entries:
                continue
            translated = exact.get(text.casefold()) or translator.translate(text)
            if not isinstance(translated, str) or not translated.strip():
                raise RuntimeError("Argos returned an empty translation for segment " + key)
            entries[key] = translated.strip()
            fresh += 1
            if fresh % 50 == 0:
                atomic_json_gz(destination, existing)
                print(f"{target}: {fresh} new segments; {reused} reused", flush=True)
        atomic_json_gz(destination, existing)
        stats[target] = {"translated": fresh, "reused": reused, "total": len(plan["segments"])}
        print(f"{target}: finished, {fresh} translated / {reused} reused", flush=True)
    (cache / "translation-stats.json").write_text(json.dumps(stats, indent=2) + "\n")


if __name__ == "__main__":
    try:
        main()
    except Exception as error:
        message = (type(error).__name__ + ": " + str(error)).replace("%", "%25").replace("\r", "%0D").replace("\n", "%0A")
        print("::error title=Argos translation failed::" + message, flush=True)
        raise
