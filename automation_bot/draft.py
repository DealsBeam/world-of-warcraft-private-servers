#!/usr/bin/env python3
"""Scaffold a draft:true news post from a polled candidate. Facts only.

Gated pipeline stage 2: structure, no voice, no publish.
The human voice-passes every TODO slot, then flips draft:false.
Usage: python3 automation_bot/draft.py --pick N --game sc [--slug my-slug]
Requires: automation_bot/out/candidates.json from fetch_feeds.py.
"""
import argparse
import json
import re
from datetime import date
from pathlib import Path

OUT_JSON = Path("automation_bot/out/candidates.json")
NEWS_DIR = Path("src/news")

GAMES = ("wow", "sc", "diablo", "overwatch", "other")


def slugify(title, override):
    if override:
        return override
    s = title.lower()
    s = re.sub(r"[^a-z0-9]+", "-", s).strip("-")
    return s[:60].strip("-")


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--pick", type=int, required=True, help="index from candidates.json")
    ap.add_argument("--game", default="wow", choices=GAMES)
    ap.add_argument("--slug", default="")
    args = ap.parse_args()

    cands = json.loads(OUT_JSON.read_text())
    c = cands[args.pick]
    slug = slugify(c["title"], args.slug)
    path = NEWS_DIR / f"{slug}.md"
    if path.exists():
        raise SystemExit(f"refusing to overwrite {path}")

    # Exact front matter the news layout + collections expect.
    path.write_text(
        "---\n"
        f"title: \"{c['title'].replace(chr(34), chr(39))}\"\n"
        f"date: {date.today().isoformat()}\n"
        "draft: true\n"
        f"game: {args.game}\n"
        f"summary: \"{c['summary'][:150].replace(chr(34), chr(39))}\"\n"
        "---\n"
        "<!--\n"
        f"SOURCE (name only per house rule): {c['feed']} — {c['link']}\n"
        f"POLLED: {c['published']}\n"
        "WATCH: verify every claim against a second source before flipping live.\n"
        "Single-source claims stay flagged. No laundering: facts, not sentences.\n"
        "-->\n"
        "\n"
        "## TL;DR\n"
        "\n"
        "TODO voice: one line, your words.\n"
        "\n"
        "## What happened\n"
        "\n"
        "TODO voice: facts from source above, your words.\n"
        "\n"
        "## Why it matters here\n"
        "\n"
        "TODO voice: preservation / emu / scene angle, or kill the draft.\n"
        "\n"
        "## What's next\n"
        "\n"
        "TODO voice: what confirms it, when.\n"
    )
    print(f"draft -> {path} (draft:true, game:{args.game})")


if __name__ == "__main__":
    main()
