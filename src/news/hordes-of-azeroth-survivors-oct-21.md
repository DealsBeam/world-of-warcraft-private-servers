---
title: "Someone turned vanilla WoW into a survivors game, and it runs entirely on your own PC"
date: 2026-10-21
category: news
summary: "Hordes of Azeroth is a GPL-3.0 survivors mode for 1.12.1: auto-firing spells, a level-up choice, dodgeable boss attacks and an endless horde, on a VMaNGOS server the launcher starts on localhost. Version 0.1.0 shipped yesterday, 0.1.1 today."
---

A survivors game is a specific shape: a horde that never stops, spells that fire without you pressing anything, and a choice every time you level. Somebody has now built that inside World of Warcraft 1.12.1, and the whole thing runs on the player's own machine.

**Hordes of Azeroth** is **GPL-3.0**, was created on **17 October 2026**, and published its first public version, **0.1.0**, on **20 October**. Version **0.1.1** landed on **21 October**. At our read it had **4 stars and 1 fork**, which is the correct scale for a two-day-old early-access fan project, not a red flag.

## What it actually installs

The launcher does more than drop an addon in your folder, and this is the interesting part of the design:

- It makes a **patched copy of the client** called `HordesOfAzeroth.exe`. `WoW.exe` is left untouched, which is why the README insists on a **separate 1.12.1 installation** used only for this.
- It installs a **local server**: a VMaNGOS fork published separately as `hordes-of-azeroth-server`, GPL-2.0, with its own database, login server and world server, all bound to your own machine. The README states the server accepts only local connections.
- It adds an addon, a spell effects patch and a graphics fix alongside the patched client.

You need your own **1.12.1 build 5875 English** client, **Windows 10 or 11 64-bit**, and about **3 GB** free next to the game. Mac and Linux are "planned". Once installed, it plays offline; the launcher only goes online to check for updates.

## What the game mode does

The feature list reads like a genre conversion rather than a server gimmick:

- **Normal, Heroic and Mythic zones**, with more zones planned, plus an **Endless mode** on Mythic that lasts until you die.
- **Challenge mode** inside raids, and **Invasions** that pull raid enemies into the open world.
- **Six of nine classes**, each with its own spells and evolutions. Druid, Paladin and Warlock are still to come.
- **Boss attacks you can see coming**: circles, cones, charges and jumps, with a **dash** that makes you untouchable for a moment, and which can be rebound and upgraded.
- **Loot inside a run**: gear, Darkmoon Cards and Glyphs, with one item extracted per stage.
- **An outpost** that persists between runs with account-wide gold, upgrades, fortunes and class talents.
- **Controller support** for Xbox and PlayStation pads, switching prompts automatically with the last input used.

The horde-chasing behaviour depends on navigation meshes, which is where the 0.1.1 change matters. In 0.1.0 the launcher generated those meshes from your own game files, which the changelog admits meant a long wait at 100% CPU. **0.1.1 downloads them instead, about 330 MB**, and keeps the local build as a fallback, now at lower priority and with a choice between all cores or half. The same meshes are what stop monsters walking through trees and spawning inside rocks.

## The caveats worth stating plainly

**The launcher is unsigned.** Windows will show "Windows protected your PC" on first run, and the README tells you to click through it. That is normal for a new independent executable, and it is also exactly the shape of file you should verify: each release lists a SHA-256 checksum, and the launcher's full source is in the repository. Check the hash.

**Antivirus may flag it**, for the same reason: it downloads files and starts other programs. The project says that is a false positive and asks for an issue report if it happens. Both statements can be true at once, so the checksum is the thing that settles it.

**It is early.** The 0.1.0 notes say balance has had little work, some builds are too strong or too weak, and bugs are expected. Six of nine classes, Windows only, single player only.

**It is an unofficial fan project** and says so: Blizzard "didn't make it, doesn't endorse it, and has no part in it". No game assets ship with it; the launcher builds the patched copy and server data from a client you already own. That keeps it in the same legal grey zone as every private server, with one difference that matters to a player: it never touches the live game or a real server.

## Why this one is worth a look

Most private-server custom content adds systems to the MMO. This replaces the combat loop with another genre's, and it does it by automating what the client can already do rather than by rewriting the engine. The local-server pattern is also spreading: Open Vanilla ships a self-hosted server package, and now a single-player mode ships its own server inside a launcher.

The repositories are in our links list: [the game mode](https://github.com/jonhaldors/hordes-of-azeroth) and [the server fork](https://github.com/jonhaldors/hordes-of-azeroth-server). For the other direction, a client being rebuilt rather than a game mode being bolted on, see [today's piece on the 3.3.5a client written in Rust](/news/benilla-wotlk-client-oct-21/).
