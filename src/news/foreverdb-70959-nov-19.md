---
title: "ForeverDB publishes its comparison for build 1.60.1.70959"
date: 2026-11-19
category: news
game: wow
summary: "ForeverDB has extracted the live 1.60.1.70959 client. Against 70938 it counts one changed class ability, two changed talents, 60 spells, 226 items and 10 changed armor sets. These are file diffs, not Blizzard notes."
---

ForeverDB has published its client comparison for **1.60.1.70959**, dated **November 18, 2026**. Until yesterday its newest extraction was still 70938, which is why our earlier build note said that. That statement was true on November 18 and is now outdated.

## What the extraction counts

| Category | Change in 70959 |
|---|---|
| Class abilities | 1 changed |
| Talents | 2 changed |
| Spells | 60 total: 10 added, 50 changed |
| Items | 226 total: 117 added, 109 changed |
| Armor sets | 10 changed |

For comparison, ForeverDB's previous extraction, 70938 against 70888, counted 2 changed class abilities, 4 changed talents, 11 changed spells and 135 items, with no armor sets listed. The 70959 diff is much larger on items and armor sets, and it is the first Forever extraction we have recorded with a double-digit armor set count.

## What this does and does not tell us

The live `wowf` track moved to **1.60.1.70959** on November 17, and Blizzard published its November 16 hotfix notes the same UTC day. We record those two facts side by side, because Blizzard does not key hotfix notes to build numbers.

That rule still applies here. The ForeverDB numbers are **client file diffs**. They tell us what changed in the files between 70938 and 70959. They do not tell us which entries correspond to Blizzard's November 16 or November 17 hotfix passes, and we are not pairing individual spells or items with individual notes.

It is also worth keeping the scale in view. Blizzard's November 17 pass contained a long list of profession, quest and UI repairs. A client diff will capture some of that and miss server-side changes entirely, which is why neither source replaces the other.

## Where this leaves the record

- Live build: **1.60.1.70959**, first published November 17, with a fresh CDN manifest on November 18 and another on November 19, all at the same version.
- ForeverDB's newest extraction: **70959**, dated November 18 and read November 19.
- Our earlier note that ForeverDB still showed 70938 was accurate at the time it was written. It now carries a dated update.

SOURCES: ForeverDB's changelog at foreverdb.net/changelog, read November 19 2026, which lists build 1.60.1.70959 dated November 18 with 1 changed class ability, 2 changed talents, 60 spells, 226 items and 10 armor sets; our own CDN watch of the live `wowf` track, read November 19 2026. Related: [the November 16 hotfix brief](/news/forever-hotfixes-nov-16/), [the November 17 hotfix brief](/news/forever-hotfixes-nov-17/), [the Classic+ reference page](/classic-plus/) and [the Forever hub](/forever/).
