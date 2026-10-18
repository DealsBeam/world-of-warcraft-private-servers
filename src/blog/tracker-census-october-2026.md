---
title: "Tracker census, October 2026: 253 realms, 200 playable, and the number nobody publishes"
date: 2026-10-17
category: guides
summary: "Our first monthly census of the whole tracker: 253 entries, 200 playable, 40 in development, 13 dead. WotLK is half the scene, and 135 realms carry no verifiable population at all. Here is what the distribution actually says."
---

This is the first of a monthly census of everything on [the tracker](/servers/), read on **October 17 2026**. The numbers come straight from the dataset that powers the site, and every realm is individually sourced. If you want the raw tables, [the census page](/census/) builds them live.

## The headline numbers

| | Count |
| --- | --- |
| **Tracked realms** | **253** |
| **Playable right now** | **200** |
| **In development** | **40** |
| **Dead** | **13** |

Two things about that. First, **79 percent of everything we track is playable today**, which is a healthier ratio than the "half these servers are dead" reputation suggests. Second, the 40 in development projects are the fastest-growing block, because the announcement-to-launch pipeline is where most of the scene's activity now happens.

## Population bands: the honest gap

| Band | Count |
| --- | --- |
| Large | 11 |
| Medium | 8 |
| Small | 32 |
| Tiny | 67 |
| **Unknown** | **135** |
| **Total banded** | **118 of 253** |

**More than half the tracker, 135 realms, carries no population band at all**, because no first-party number exists to band it. That is not us being coy. It is the central problem of this scene: most operators either do not publish a concurrent count or publish one that contradicts something else on their own site.

The **11 large realms** deserve their own line. We have documented that Whitemane holds several of them, which means the "large" tier is not just rare, it is concentrated. The median tracked realm is not a bustling server; it is a small or tiny one, or one we cannot band at all.

## Client eras: WotLK is half the scene

| Era | Count | Share |
| --- | --- | --- |
| WotLK | 123 | 49% |
| Vanilla (incl. Vanilla+, Classless) | 58 | 23% |
| TBC | 19 | 8% |
| Cataclysm | 14 | 6% |
| Multi | 11 | 4% |
| Legion | 9 | 4% |
| MoP | 8 | 3% |
| Other | 8 | 3% |
| TWW | 3 | 1% |

**The Wrath client is half the entire private server scene.** That has practical consequences for a player: addons, guides and UI work for 3.3.5a are the deepest pool, and hardware requirements are trivial. It also means the average "private server" you find is a WotLK realm, which is why so much of this site's content is WotLK-shaped.

**Vanilla is a strong second at 23 percent** once you fold in the custom Vanilla+ and Classless projects, which is where most of the innovation is: 29 Vanilla+ entries and 6 Classless ones. The expansion ladder above Vanilla thins out fast. Legion and MoP together account for 7 percent of the scene.

## What October actually moved

October 2026 was an **additive month, not a losing one**. As of this snapshot, **we have added no dead entries in October**, and the last recorded death remains September. What arrived instead:

- **A cluster of dated gates opened**: [GrimfallWoW's Conquest of Azeroth Phase 1](/news/grimfall-conquest-of-azeroth-phase-1/) on October 16, Nozdor's DUNE realm, uWoW's Pandaria x10 realm, and lordaeron.eu's Rimeheart.
- **WoW Circle's Legion 7.3.5 x5 realm**, [verified open at source](/news/wow-circle-legion-x5-opens-october-17/) with **1,978 players** three hours in.
- **A batch of catalog names verified** and added, including [ComfyCraft](/servers/comfycraft/) (84 online in open alpha), [Capybara Paradise](/servers/capybara-paradise/) and [Hellfire WoW](/servers/hellfire-wow/).
- **A second survivors roguelite** built on the benilla engine, which is engine news rather than realm news but belongs in the same census.

The gates still ahead of us are dated: **Anachronos on October 22**, **Project Epoch Reborn and Stonetavern's level 60 gate on October 23**.

## Why we publish this monthly

A tracker that only lists realms tells you what exists. A monthly census tells you **which way the scene is moving**: how many projects appeared, how many died, which clients are gaining, and how much of the field is hiding its own numbers. It is also the honest frame for our own coverage, because it shows what we could not verify.

The method is the same one described in [the population band census](/blog/population-bands-2026-which-servers-publish-a-number/): bands come from first-party counters, status pages and update cadence, not from an addon census, and a claim that contradicts itself gets no band. When a realm moves between bands, or a project dies, it gets a dated line rather than a silent edit.

Next census lands in November, and the November 4 Forever launch will be the largest single variable in it.

**Correction, October 18 2026:** the era split above was computed on October 17 and included Jankcraft as Vanilla. We [corrected that entry to WotLK](/servers/jankcraft/) the next day after reading its shipped client bundle, so the current split is **WotLK 124, Vanilla 57**. The October 17 snapshot is left as published.

SOURCES: All counts are computed from `src/_data/servers.js` on October 17 2026 and grouped through the same era mapping the site uses. Gate results and launches named here are our own dated first-party reads recorded in the linked tracker entries and news posts. Related: [the tracker](/servers/), [the census page](/census/), [the quiet servers guide](/blog/quiet-servers-low-population-guide/), and [the launch calendar](/blog/launch-calendar/).
