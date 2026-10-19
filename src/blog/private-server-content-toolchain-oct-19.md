---
title: "Building new Azeroth content in 2026: the two halves fans have to change"
date: 2026-10-19
category: analysis
summary: "A 1.12.1 world editor entered public alpha this week, and two decompiled clients are most of the way to readable source. Custom zones and classes need both halves, and only one of them was ever documented."
---

Every custom private server, whether it advertises new zones, new classes or a rebuilt world, has to change two things at once:

- the **server side**, which is the world data: terrain, creatures, quests, loot, spells, scripted behaviour
- the **client side**, which is what the player installs: models, textures, interface files, database tables and patch archives

The server half has had open tools for years. The client half was closed for most of the game's life. Two releases this month show both halves moving at once, and they explain why "custom content" quality varies so much between projects.

## The server half: cores and scripting

The base layer is the emulator core, which we explain separately in [what a server's core actually is](/blog/wow-emulator-cores-explained/). The short version: [AzerothCore](/blog/wow-emulator-cores-explained/) (GPL-2.0, the 3.3.5 branch, 9,070 stars at our read), TrinityCore (GPL-2.0, 10,837 stars), VMaNGOS (GPL-2.0, 963 stars) and CMaNGOS (GPL-2.0, 1,094 stars) are the maintained foundations.

On top of a core, scripting is how behaviour gets added without changing the engine. **Eluna** is the long-running option: a Lua engine for AzerothCore and TrinityCore, GPL-3.0, 454 stars, with hooks and a script catalogue that other people have already written. If a realm has a custom event, a vendor with unusual rules, or a boss that does something no boss should do, there is a decent chance it is Lua on top of a stock core.

The part that was always hardest on the server side is not scripting. It is **terrain**. Moving a hill, painting a texture, or adding a building means editing the world itself, and the tools for that have historically been old, fragile and passed around as forum attachments.

## Meld: a new 1.12.1 world editor

On **October 11 2026** a project called **Meld** appeared on GitHub, and it entered public alpha this week. Its own description is a world editor for Vanilla WoW 1.12.1: sculpt terrain, paint textures, place models, water and creatures, then export the result straight into a client and server. It names **VMaNGOS** and **Benilla** as its targets.

It is Apache-2.0, built with Wails v2 (Go), Svelte 5 and Three.js, and it published **v0.1.0-alpha.1 on October 18** and **v0.1.0-alpha.2 on October 19**. At our read it had 7 stars and 2 forks, which is what a two-day-old project looks like. Its author is explicit that it is alpha, that many features are untested, and that it should not be run on a live server yet.

That last warning is the honest part, and it is also the interesting part. A terrain editor that exports to both a client and a server is the kind of tool that turns "I have an idea for a zone" into "I have a zone". VMaNGOS and Benilla compatibility means it is aimed at the vanilla side of the scene specifically, not at Wrath.

## The client half: decompiled clients

The client is the half players actually install, and it was the closed half. Two repositories now publish decompilations:

- **`SatyPardus/wowdecomp`** rebuilds the **3.3.5a** client (build 12340, June 2010) as C++ source, with an x64 main target. Its own count was **24,515 of 27,157 functions (90.3%)** and **93.2% of code bytes**, with each function keeping its original address in an `OFFSET` tag. 306 stars, no license stated, no game data included.
- **`SatyPardus/wowdecomp15595`** does the same for **Cataclysm 4.3.4** (build 15595) from both the x86 and x64 originals: **30,790 of 31,300 x86 functions (98.4%)** and **26,401 of 38,179 x64 functions (69.2%)**. 27 stars, no license, no game data.

The projects are careful about what those percentages mean, and so should you. They measure how much of the binary has a **counterpart in source**, not how much of the game works. A function can be present and still not behave correctly. That distinction is the difference between "readable" and "done".

What the decompilations give modders is the ability to read how the client handles formats, patches and signature checks. One of the repositories documents a build switch that skips MPQ and `.toc.sig` verification, and another that controls client crash logging. Those are exactly the hooks a client-side mod depends on, and until recently they were the kind of thing you learned from a forum post that might be wrong.

## Why the two halves matter together

A custom class or zone is not one change. It is a server-side definition plus a client-side presentation, and the two have to agree. A new creature needs a model the client can load and a template the server can spawn. A new zone needs terrain the client can render and map data the server can path through.

That is why projects that ship a lot of custom content tend to be the ones with tooling stories: [Conquest Reborn](/servers/conquest-reborn/) building whole classes and a node-based progression system, [Project Reforged](/servers/project-reforged/) advertising reworked and new zones, or the custom class rosters we have looked at elsewhere. The visible feature is the content. The invisible prerequisite is a pipeline.

It is also why a project that only reskins a stock class can move quickly, and why one that builds a class from scratch takes longer. The tooling gap shows up as a content gap.

## The legal frame, briefly

None of this is a licence to redistribute Blizzard's assets. The decompilers ship **no game data**, Meld is a tool rather than a dataset, and both are aimed at people working with their own client copy. Running a public realm that serves Blizzard's world is the part that attracts cease and desist letters, which we cover in [are private servers legal and safe](/blog/are-private-servers-legal-safe/). The tools are not the risk. Publishing the game is.

## What we verified, and what we did not

We read the repositories, licences, star counts and release dates above at first party. We did **not** install Meld, run either decompiler, or verify that a decompiled client builds and plays. Meld is explicitly alpha, and the decompilers are works in progress. Treat this as a map of what exists, not as a recommendation to build on it today.

What the map does show is a direction. For twenty years the server half was open and the client half was dark. In October 2026 the client half has readable source and the world half has a new editor in alpha. The gap is narrowing, and the projects that learn to use both will be the ones with content nobody else can copy.
