---
title: "Forever beta datamine round one: loot locked behind 8 missing keys, and stats are now server-side"
date: 2026-09-17
game: wow
description: "classicwowforever's six-part read of the Forever beta client (build 1.60.1.69893): items, spells and quests are double-encrypted with all 8 keys withheld from the client, item stats are now stat types plus percentage weights with amounts server-side, 4,862 new items and 3,472 new spells are readable, and boss-drop tables are empty."
tags: [wow, blizzcon-2026, classic-plus, beta, datamine]
---

September 17, 2026 — the Forever beta client (**build 1.60.1.69893**, product `wow_classic_beta`) is dataminable, and classicwowforever published a six-part analysis covering [how Blizzard hid the loot](https://www.classicwowforever.com/guides/forever-beta-datamine-hidden-loot/), [how item stats now work](https://www.classicwowforever.com/guides/forever-beta-datamine-stats-rework/), [4,862 new items](https://www.classicwowforever.com/guides/forever-beta-datamine-new-gear/), [3,472 new spells](https://www.classicwowforever.com/guides/forever-beta-datamine-new-spells/), [what still can't be read](https://www.classicwowforever.com/guides/forever-beta-datamine-loot-limits/) and [how the files were read](https://www.classicwowforever.com/guides/forever-beta-datamine-methodology/). Everything below is pre-release data from an offline, read-only pass — and classicwowforever stamps its own caveat on the series ("data is gathered with AI assistance and may contain inaccuracies"), so treat the numbers as provisional until in-game tooltips confirm them.

## The loot is locked — twice over

Blizzard's surprise-loot promise is enforced in the files. The interesting records sit in encrypted sections inside the database files, and those sections sit inside encrypted containers — both locks use the same **8 keys, and all 8 are withheld from the client** (7 resolve to key slots with no key bytes shipped, 1 is not listed at all), so the game client itself cannot read these records. Sealed and countable: **66 items** (63 in one block, plus IDs 285352–285354), **872 spells**, **90 quests**, **41 item effects**, **2 creatures** and roughly **3,300 fully sealed files**. Filenames are stripped from this build except interface art and fonts.

## Item stats don't exist on the client anymore

Flat stat amounts, weapon damage and resistances are **no longer stored in the item data** — verified byte-exact across all **19,119 readable item records**. In their place: stat *types* plus a per-stat weight in basis points (10,000 = 100%), with the actual +X values computed or supplied by the server. The examples are stored exactly as: **Thunderfury** — 2174 / 3478 / 3478 / 3913 (translated: Agility 17%, Stamina 27%, Fire Resistance 27%, Nature Resistance 30%) — and **Sulfuras** — 2222 / 2222 / 5556 (Strength 22%, Stamina 22%, Fire Resistance 56%). Resistances moved into the stat list (types 51–56) instead of their old separate field, and the per-slot budget formula behind the weights is still unknown.

## 4,862 new items

**551 epics, 1,445 rares, 1,073 uncommons** — the rest common, poor and test items. Headline finds:

- **A complete Premier PvP tier (537 pieces):** 292 epics at level 60 / item level 65, and 245 rares at level 55 / item level 60, across four armor themes — **Magus (cloth), Mortarplate (plate), Dragonhide and Shadowhide (leather)** — spanning the classic ranks from Champion up to High Warlord.
- **A Theramore vs Darkspear faction ladder:** jewelry in lockstep tiers at required levels **28 / 38 / 48 / 58** on both sides, armor at 50 and 60, Basic/Standard/Advanced care packages and a **Darkspear Islands Mark of Honor** — battleground-ready naming, exact acquisition still unconfirmed.
- **48 new item sets:** the **26 rank PvP sets** are fully built at six pieces each; among the rest, only **Teachings of the Furbolgs** (2 pieces) and **The Spiritcaller's Storm** (4 pieces) have items attached so far — most dungeon and crafted sets are still being assembled.
- Four **Watcher's Signets** at item level 68, above every other plausibly real new item — plus flagged curiosities (Reverance, Leafre's Ring of Precise Spell Power, and a legendary literally named "NOT USED") that look like test data.

## 3,472 new spells

Readable out of 13,620 total spell records (872 sealed). The new themes: **Stronghold and City magic** — maximum health, Block chance, Dodge chance and all-magical healing/damage each double inside Strongholds and Cities (Bastion of Tyranny, Stabilized, Toy Soldier, Black Horn Necklace); **terrain and climate** — snow doubling Frost/Shadow damage (Chthonic Power), the Sword of the Still Wind, desert mount speed and the winds of Tanaris, a Mount Hyjal transporter plus a zone-locked flask shared with Hyjal Summit and the Barrow Deeps, and lava immunity (Flame Walker); **pets** — Focused Fire, and Matron's Call letting healers proc an **Onyxia Whelpling**; eight **racial-tagged** spells (Walk on Air, Read Ley Line, Wind Blessed, Will to Survive, Elune's Light, Eureka!) plus sealed mace and Energy passives; and **gatherer camp features** (Gardening, Bait and Tackle, Tanning). The census also counts 10 "Legacy Perks & Boons" spells, 53 "Undead Slayers" and 9 "Raid Attunement" records — and new NPCs named for Skyborne mage/shaman/warrior/druid/hunter plus **Undead Paladin, Dwarf Shaman and Tauren Hunter**. Those are NPCs, not confirmation of playable options.

## What the data can't tell you

Boss loot is server-side, like always: the boss-drop source table (CollectableSourceEncounter) exists but is **completely empty — 208 bytes, zero records**, the vendor-source table holds **4,392 rows of zeroes**, and quest rewards, vendor inventories and creature spawns are server-side too. The series' own verdict: **"no datamining can currently tell you which boss drops which item."**

## Where it lands on the tracker

The [hit list](/news/forever-beta-verification-hit-list/) posts the round-one results — the dungeon roster is mostly resolved ("Excavation Site" for the Whelgar's-site dungeon, Blackmaw Hold at Azshara for the furbolg city). The [instance-map teasers](/news/forever-client-data-instance-map-teases/) post pairs with this for map-level finds — including the "Dalaran City" map, which wowforeverclassic.com reads as the open-world Dalaran city rather than a hidden instance. The [hub](/classic-plus/) updates today in [itemization](/classic-plus/#systems), [PvP](/classic-plus/#pvp) and [zones](/classic-plus/#zones).