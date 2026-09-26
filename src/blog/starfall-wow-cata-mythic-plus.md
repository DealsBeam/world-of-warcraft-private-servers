---
title: "Starfall WoW: progressive Cataclysm with a Mythic+ that scales with the patch"
date: 2026-09-26
category: guides
heroImage: /images/hero-7.jpeg
summary: "Fifteen affixes across three pools, keys to +15, and Mythic+ gear that matches the current heroic raid item level and rises with the server. What the four-phase Cataclysm schedule means for when to join."
---

Cataclysm private servers have a structural problem. The expansion is 4.3.4 at both ends, so a realm either launches you in Dragon Soul with nothing to do, or it runs a progression that nobody wants to speed through while waiting for the good part.

Starfall's answer is to give the progression an activity attached to it. Mythic+ here is not a side dish bolted onto a Cataclysm realm, it is the second progression track, and its ceiling is tied to where the realm is.

Single realm, `logon.starfall-wow.com`, build 15595, patch 4.3.4, PvE, no P2W, free, 1x to 5x. It is on our tracker as [Starfall WoW](/servers/starfall-wow/), `playable`, `Cataclysm`, tiny population.

## The four-phase schedule, and why it matters for when you start

Raids and tiers unlock in historical order across four phases:

| Phase | Patch | Content | Heroic ilvl |
| --- | --- | --- | --- |
| Completed | 4.0.6 | Tier 11: Blackwing Descent, Bastion of Twilight, Throne of the Four Winds | 372 |
| **Live now** | **4.1** | Tier 11 continues, plus Zul'Aman and Zul'Gurub, with ZA/ZG heroic 5-mans at **353** | 372 / 353 |
| Upcoming | 4.2 | Firelands | 391 |
| Upcoming | 4.3.4 | Dragon Soul | 410 |

The gap between the current heroic 5-man item level and the completed Tier 11 is deliberately small, 353 against 372, which is a normal 19-level gap. The gap you are actually playing toward is Firelands at 391.

This is the useful part for timing: **the Mythic+ ceiling rises with the patch.** The site states that Mythic+ drops match the current phase's heroic raid item level, and that when the server progresses, the ceiling rises with it. So an M+ player on 4.1 is chasing 372, and an M+ player on 4.2 is chasing 391. Your keystone ladder is not a dead end you finish once. It is re-scaled every patch alongside the raids.

If you join now you play the easiest version of the content and you are not locked out of anything. If you wait for 4.2 you skip nothing that matters because the M+ track moves with you.

## Fifteen affixes, three pools, one rotation

The site's own description: **fifteen affixes, split into Low, Mid and High pools. Each week, one affix from each pool activates.** Three affixes a week, not fifteen, and the pools mean the mix has a shape rather than being a flat random roll.

That is a better design than a flat pool of fifteen, and it is the difference between "the weekly rotation is a spread sheet" and "the weekly rotation is three decisions about whether you can handle the affix you got." If you are the type who checks the affix list before queueing, this system rewards that, and the site publishes all fifteen with an in-combat callout for each.

The ladder is standard in shape: time the dungeon, fail the timer and you lose a level, beat it and your keystone upgrades. Keys go to **+15**.

**Mythic+ gear is a parallel path, not a side grade.** Drops match the current phase's heroic raid item level, same stats, different route. You upgrade them with currency earned from timing higher keys. So there is no such thing as out-geared M+ progression here; the ceiling is the raid ceiling and it moves when the raids move.

## Three seasons across the server's lifespan

Site copy advertises **three seasons**, each with a new affix rotation and a leaderboard reset. The current roadmap labels the state as **Mythic+ Season 1, keys to +15**, which is consistent with three seasons being the plan rather than three being done. Recording the tension rather than resolving it: the total is stated, the current season number is stated, and the seasons that follow are not dated.

A leaderboard reset is a real reset. Whatever season 1 ranking you earn will not exist next season, so if you are the sort of player who plays for the ranking, the ladder has a shelf life.

## The rest of the feature set

The site claims twelve systems. The ones that change how the game plays:

**Solocraft** scales dungeon difficulty so you can run them solo at level, and it is scoped to **dungeons 15 to 79**. **Solo LFG** finds groups for those same leveling dungeons through an in-house tool. Together they cover the part of Cataclysm that is otherwise a wall: the 80 to 85 stretch, which is the least fun part of the expansion, is the part Solocraft is designed around.

**Racial trait swap** lets you adjust racial traits without rerolling. In Cataclysm that is a bigger deal than in Wrath, because the expansion is where the offensive racials got strong and the defensive ones got weak, and every class has a different correct answer.

**Automatic spell learning** means new rank spells are learned as you level, no trainer trips. **AoE loot** takes everything from nearby corpses in one click. **Account-wide mounts and pets**, so collecting once covers every character.

Cosmetic side: full transmogrification including legendary weapons and armor, a persistent wardrobe, and optional Warlords of Draenor character and creature models with the originals kept. Those are the Cata-era HD models, which is a taste question rather than a strength question.

## The addon situation is unusually good

Starfall ships its own addon, self-coded for the server. It does keystone tracking, in-combat affix reminders, automatic run summaries with deaths, interrupts and timer, and syncs your runs to the web leaderboard. No third-party subscription, and no weak-aura import list to maintain.

For a custom Mythic+ system, an in-house addon is not a luxury. An affix you have never seen before, with no documentation, is unlearnable. Callouts turn a wall into a mechanic. This is the piece of Starfall's design that most directly affects whether you enjoy the system, and it is the piece most projects skip.

## Who it suits

**Good fit:** Cataclysm players who want a progressive schedule with a reason to log on between raid nights. Anyone who wants Mythic+ to be the main event rather than an alt. Solo players, because Solocraft and Solo LFG cover the leveling stretch that normally ends Cataclysm realms.

**Poor fit:** if you want Dragon Soul now, this is three phases away and undated beyond the ordering. If you want a large population, it is tagged tiny and the leaderboard will be thin. If you are coming for Cataclysm's Warlords-era narrative, note it is a custom realm with modern systems attached, not a preservation server.

## What to be honest about

The public surface is thin. The changelog page renders empty. The roadmap and the homepage are the only substantive pages, and the bugtracker is a link rather than a readable log.

That is worth weighing against the fact that the system design here is unusually well documented. You will find a lot about how Mythic+ works and very little about how recently anything shipped. If your decision hinges on whether the project is actively maintained right now, the site will not tell you. Check the Discord before committing.

SOURCES: Starfall WoW's own homepage, realms, Mythic+ and roadmap pages, read September 26, 2026. Population is not published as a live figure and is carried on the tracker as tiny. The "three seasons" total is site copy; the roadmap's current-season label is recorded alongside it because the two describe different things. Related: [playerbots vs PartyBots vs scaling](/blog/playerbots-vs-partybots-vs-scaling/) covers the other way a private server solves the empty-group problem, and [Frostbound's Warband guide](/blog/frostbound-warband-guide/) is the player-owned-companion version of the same idea.
