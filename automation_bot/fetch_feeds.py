#!/usr/bin/env python3
"""Poll the tracker's RSS feeds, filter fresh items, score gap-matches.

Gated pipeline stage 1: facts only, no prose, no publish.
Output: automation_bot/out/candidates.json — reviewed by a human.
Usage: python3 automation_bot/fetch_feeds.py [--days N]
Requires: stdlib only. Run from repo root.
"""
import json
import re
import sys
import urllib.request
import xml.etree.ElementTree as ET
from datetime import datetime, timedelta, timezone
from html import unescape
from pathlib import Path

OUT = Path("automation_bot/out/candidates.json")

FEEDS = [
    ("Blizzard Watch", "https://blizzardwatch.com/feed/"),
    ("Icy Veins", "https://www.icy-veins.com/feed.atom"),
    ("BlizzPro", "https://blizzpro.com/feed/"),
    ("MOP", "https://massivelyop.com/category/news/feed/"),
    ("Tavern blue-tracker", "https://blue-tracker.warcrafttavern.com/rss/all"),
    ("MMO-Champion", "https://www.mmo-champion.com/external.php?type=RSS2"),
    ("Duskforge", "https://www.duskforge.gg/rss.xml"),
]

# RaGEZONE polled weekly, not here. Dead feeds stay out (see rss-poll-checklist).

# Coverage rule: preservation / emu / shutdown / tentpole or skip.
HIT = [
    "blizzcon", "classic+", "camelot", "starcraft", "arg", "shutdown",
    "c&d", "takedown", "emulator", "private server", "drop", "twitch",
    "world first", "race", "diablo", "overwatch", "nexon", "leak",
]
MISS = ["giveaway", "podcast", "the queue", "maintenance"]


def fetch(url):
    req = urllib.request.Request(url, headers={"User-Agent": "wowps-poll/1.0"})
    with urllib.request.urlopen(req, timeout=25) as r:
        return r.read()


def items(feed_name, raw):
    try:
        root = ET.fromstring(raw)
    except ET.ParseError as e:
        print(f"WARN {feed_name}: bad XML ({e})", file=sys.stderr)
        return
    for item in root.iter("item"):
        title = (item.findtext("title") or "").strip()
        link = (item.findtext("link") or "").strip()
        pub = (item.findtext("pubDate") or "").strip()
        desc = re.sub(r"<[^>]+>", " ", item.findtext("description") or "")
        desc = unescape(re.sub(r"\s+", " ", desc)).strip()[:300]
        if title and link:
            yield {"feed": feed_name, "title": title, "link": link,
                   "published": pub, "summary": desc}
    for entry in root.iter("{http://www.w3.org/2005/Atom}entry"):
        ns = {"a": "http://www.w3.org/2005/Atom"}
        title = (entry.findtext("a:title", default="", namespaces=ns) or "").strip()
        link_el = entry.find("a:link", namespaces=ns)
        link = (link_el.get("href", "") if link_el is not None else "").strip()
        pub = (entry.findtext("a:published", default="", namespaces=ns)
               or entry.findtext("a:updated", default="", namespaces=ns)).strip()
        if title and link:
            yield {"feed": feed_name, "title": title, "link": link,
                   "published": pub, "summary": ""}


def fresh(pub, days):
    for fmt in ("%a, %d %b %Y %H:%M:%S %z", "%a, %d %b %Y %H:%M:%S %Z",
                "%Y-%m-%dT%H:%M:%S%z", "%Y-%m-%dT%H:%M:%SZ"):
        try:
            dt = datetime.strptime(pub, fmt)
            if dt.tzinfo is None:
                dt = dt.replace(tzinfo=timezone.utc)
            return dt >= datetime.now(timezone.utc) - timedelta(days=days)
        except ValueError:
            continue
    return True  # undated: let the human decide


def score(title):
    t = title.lower()
    if any(m in t for m in MISS):
        return -1, []
    hits = [h for h in HIT if h in t]
    return len(hits), hits


def main():
    days = int(sys.argv[sys.argv.index("--days") + 1]) if "--days" in sys.argv else 2
    seen, out = set(), []
    for name, url in FEEDS:
        try:
            raw = fetch(url)
        except Exception as e:  # noqa: BLE001 — one dead feed must not kill the poll
            print(f"WARN {name}: fetch failed ({e})", file=sys.stderr)
            continue
        for it in items(name, raw):
            if it["link"] in seen or not fresh(it["published"], days):
                continue
            seen.add(it["link"])
            s, hits = score(it["title"])
            if s > 0:
                out.append({**it, "score": s, "hits": hits})
    out.sort(key=lambda c: -c["score"])
    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(json.dumps(out, indent=2, ensure_ascii=False) + "\n")
    for i, c in enumerate(out):
        print(f"[{i}] ({c['score']}) {c['title']}\n    {c['feed']} | {c['published']}\n    {c['link']}")
    print(f"\n{len(out)} candidates -> {OUT}")


if __name__ == "__main__":
    main()
