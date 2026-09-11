---
title: "Ascension After the Shutdown: Preservation Stack, DIY Classless, ArdenWoW Alpha"
date: 2026-09-11
category: analysis
summary: "Ascension shut down Sep 4. One week later the community has a full preservation stack, a DIY classless module, a reference database, and a successor alpha opening Sep 13."
---

## TL;DR

- Ascension realms went dark September 4 under a Blizzard C&D. Full story in the [shutdown explainer](/blog/ascension-shutdown-explained/).
- The preservation response splits three ways: run it yourself, archive the data, or play the successor.
- ArdenWoW opens its alpha September 13 with the same 21 custom classes. Tracker entry is live.

Ascension died on September 4. Its community spent the week making sure classless WoW outlives it.

Three independent efforts now cover the three things players actually lost: the server to play on, the data that made it unique, and the knowledge of how it all worked.

## Run it yourself: the preservation stack

The most serious project is a three-repo toolkit for reconstructing Ascension locally on a stock 3.3.5a client with AzerothCore. The core repo holds an authentication gateway, an AzerothCore bridge, cache intake tools, and an offline character importer — the piece that lets old "Bind My Soul" characters come back without the original servers.

Two sibling repos split the concerns cleanly. One maintains recovered datasets with provenance records and SHA-256 manifests: captured cache files, a planner export, and a full mirror of the Conquest of Azeroth database parsed into spells, items, NPCs, quests, and talent trees. The other is a local multi-realm launcher and control panel written in dependency-free Python — start/stop realms, tune rates without hand-editing configs, install addons, run GM commands, and search the whole 3.3.5a database offline.

A community archive portal collects the raw material: players contribute WDB cache and addon-data folders through the browser, privacy-filtered, with private copies expiring after seven days. Only reviewed game data reaches the public dataset.

All seven tools are linked from the [homepage Links tab](/#view-links).

## Know it: the reference layer survives

Ascension's game knowledge was always its moat — 184 Mystic Enchants with exact chest locations, dungeon routes, Mythic+ upgrade costs, affix rotations. That layer survived intact in community hands.

The Worldforged reference database carries the full enchant catalogue plus routes, upgrades, affixes, WeakAuras, and changelogs. A companion app built on top of it adds a classless character builder with real stat formulas, a 200-item gear database, build sharing via export codes, and a lore browser — running as a web app, Android APK, and Linux desktop with all data embedded offline.

## Play it: DIY classless and the successor

For operators, an AzerothCore module recreates the Ascension Classless and Wildcard systems outright on 3.3.5a: every character a Hero, abilities bought with Essence or rolled by the server on the Season 9/10 schedule, plus 33 original Hero-line abilities and elemental variants of physical strikes. It is explicitly experimental — the author warns against adding it to a realm you care about — but it is the only open path to spinning up a new classless realm from scratch.

The faster path for players is the successor. ArdenWoW, built openly as Ascension-inspired with the same 21 custom classes, opens its alpha on September 13 at 6 PM CST with new zones, Mythic+ progression, and a scaled dungeon finder. It is tracked as dev status until the alpha proves itself.

## FAQ

**Is any of this affiliated with Project Ascension or Blizzard?**
No. Every project states independence explicitly. The C&D covered Ascension's operation, not community knowledge or clean-room recreations.

**Can I get my old Ascension character back?**
The offline importer is the path, not a server transfer. No live realm can restore what the shutdown took.

**Which should I follow?**
Players: ArdenWoW alpha. Tinkerers: the preservation stack. Theorycrafters: the reference database. All three are linked, none requires the others.

**Does this affect the tracker's dead Ascension entries?**
No. The five Ascension realm entries stay marked dead with the September 4 shutdown date. Preservations and successors get their own entries.
