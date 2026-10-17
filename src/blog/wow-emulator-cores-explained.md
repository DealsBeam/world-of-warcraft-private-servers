---
title: "AzerothCore, TrinityCore and VMaNGOS: what a server's core actually is"
date: 2026-10-17
category: reference
summary: "The word core shows up in private server descriptions constantly and rarely gets explained. Here is the lineage, what each core is good at, why it decides which features a realm can offer, and how little of it projects actually publish."
---

Read enough private server descriptions and you will notice a pattern: some mention a **core**, most do not, and nobody explains it. The core is the server software, the thing that speaks the client's protocol and implements the game world. It is the difference between a realm that can run Mythic+ and one that cannot, and it is one of the least published facts in the scene. This page explains the names and, honestly, the limits of what we can verify.

## What a core is

A private server has two halves that players see as one thing:

- The **client** is the game you install, and its version fixes the era. A 3.3.5a client is Wrath; a 1.12.1 client is Vanilla.
- The **core** is the emulator running on the operator's machine. It handles logins, movement, combat, loot, quests, instance scripts, and the database behind them.

Changing the client means changing the era. Changing the core means changing what is possible within that era, and how stable it is. Projects that advertise solo play, Mythic+, cross-faction grouping or scripted custom encounters are almost always building those on top of a specific core.

## The lineage, briefly

The modern cores descend from a single open-source project, MaNGOS, which was forked and rebuilt several times. Three descendants matter for the servers we track:

- **VMaNGOS** carries the Vanilla and classic-era torch. It is the core behind several strict Vanilla realms on the tracker, and it is a common choice where the goal is a faithful 1.12.1 experience rather than custom content.
- **TrinityCore** is the long-running general-purpose lineage, historically the backbone for Wrath and later expansions. Much of the scene's scripting knowledge sits in this line.
- **AzerothCore** is a Wrath-focused fork of TrinityCore that distinguished itself with a clean codebase and a large **module** ecosystem, meaning optional add-on codebases that operators bolt on. This is the core you will see named most often on modern custom realms, because modules are how they get solo content, quality-of-life systems and bots.

The general pattern is simple: **Vanilla servers lean on the MaNGOS lineage, and Wrath servers on the TrinityCore and AzerothCore lineage.** Cataclysm and Mists projects sit on their own branches of the same family tree.

## Why the core decides features

Two of the most popular feature categories in this scene are really core questions:

- **Playerbots.** Systems like `mod-playerbots` are modules built for AzerothCore. A realm advertising bots, a solo-friendly world, or AI companions is almost certainly running that combination. Our [playerbot architecture explainer](/blog/playerbot-architecture-explained/) covers how those bots are structured, and the [playerbots versus partybots comparison](/blog/playerbots-vs-partybots-vs-scaling/) covers what they change.
- **Custom and solo content.** Mythic+ dungeons, scaled raids, personal-loot systems and custom class work all depend on scripting support. The cleaner and better-documented the core, the more of that a project can build.

## What our tracker records, and what it does not

Here is the honest part. Across 236 tracked servers, **only 18 entries name AzerothCore in what they publish, 3 name VMaNGOS, and none name TrinityCore**. Most projects simply do not state their core, and we do not guess one because a server looks like it might be using it.

The ones that do publish it tend to be the projects that are proud of their stack, and they illustrate the pattern:

- **[Frostbound](/servers/frostbound/)** states it runs **AzerothCore with mod-playerbots**, and its whole design (a Warband of four player-owned AI alts, 750 world bots, solo and co-op endgame) flows from that choice.
- **[19PvP](/servers/19pvp/)** is **open source on AzerothCore with mod-playerbots and mod-ale**, which is why we can state its stack as a fact rather than a claim.
- **[Lighthaven](/servers/lighthaven/)** is an **open-source AzerothCore** project, so its core is verifiable by inspection, not just by assertion.
- **[NycterMoon](/servers/nyctermoon/)** runs **Vanilla 1.12.1 on VMaNGOS**, which is what lets it offer hireable AI companions without abandoning the Vanilla codebase.
- **[Elderhide](/servers/elderhide/)** and **[Project Legacy](/servers/project-legacy/)** are both **VMaNGOS** Vanilla projects, one strict and one customised.

For a project that publishes nothing about its core, the honest position is that we do not know, and neither do you. What we do know is what the realm does in practice: a server running scaled raids and bots announces it through its feature list, whether or not it names the module.

## Why this matters to a player

1. **It predicts feature ceiling.** If you want bots, Mythic+, or scripted solo content, you want a realm on a core with an active module ecosystem, and AzerothCore is the one those features cluster around today.
2. **It predicts stability and community.** Popular cores have documentation, discords full of people who have hit the same bug, and forks other projects can build on. A bespoke core can be excellent, but you are relying on one team's wiki.
3. **It is not a quality ranking.** A core is not good or bad in the abstract. The strictest, most faithful realms on our tracker run older, plain cores on purpose, and that is a feature for the players who want it.

The short version: **the client chooses your expansion, and the core chooses your options.** If a server's front page names neither, its feature list is your real signal, and the tracker records the features we can verify.

Related reading: [the client you did not build](/blog/the-client-you-did-not-build/), [playerbot architecture](/blog/playerbot-architecture-explained/), [x1 blizzlike picks](/blog/best-x1-blizzlike-private-servers-2026/), and [the glossary](/blog/private-server-glossary/).
