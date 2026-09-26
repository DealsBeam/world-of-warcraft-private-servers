---
title: "Two AzerothCore tools ship in a day: a quest authoring app and a texture atlas inspector"
date: 2026-09-26
game: wow
description: "ACORE Quest Creator v0.1.0 turns quest chains, scripting and NPCs into reviewable SQL patches, and Atlas Inspector resolves texture atlases into Lua region tables with an MCP server for agents."
tags: [wow, wotlk, azerothcore, tooling]
---

Two AzerothCore-ecosystem developer tools were created and released within about 24 hours of each other. Neither is a server. Both attack the part of running a core that keeps solo and small-team operators stuck: hand-editing database tables and hand-computing texture coordinates.

## ACORE Quest Creator v0.1.0

DMCK96 published v0.1.0 on September 25 after roughly 250 commits. It is a GPL-3.0-or-later Electron desktop app for Windows, macOS and Linux, and it targets AzerothCore including the Conquest of AzerothCore fork.

The pitch is describing a quest the way a player sees it rather than as a set of SQL rows: who offers it, what they ask for, what the NPC says, where the chest stands, how the boss fights. The app lays quest chains out on a canvas, pulls in existing chains from your database to build on, and covers givers, objectives, rewards, quest scripting as scenes, a combat wizard for NPC fights with phases and adds, new NPCs and objects with looks and factions, readable books and chests with loot, spawn placement on zone art, and patrol routes with per-point actions. It emits the GM commands to reload and test in game.

Two design choices matter more than the feature list. The live world database is only ever read; output is an SQL patch file, or an apply against a separate dev database. And the optional inputs are opt-in, so the server data folder supplies DBC-derived XP values, spell and model name search and ground heights, while the game client folder supplies zone art and minimap imagery for the map.

Caveats worth stating plainly. The installers are not code-signed, and the project's own install guide tells users how to get past the system warning. At release the Windows build had 4 recorded downloads and the repo had 4 stars and 2 forks, so treat this as a first release, not a mature tool. The first-party documentation is unusually complete for a project this new, with 20 pages across getting started, guides and reference.

## Atlas Inspector

PentSec, the author of the DragonUI-CoA interface we already track, pushed a second tool on September 25 and a third commit on September 26. It is a local web app that inspects WoW texture atlases by FileDataID.

Paste a FileDataID, pick a build, and the app resolves the atlas into its region rectangles, drawing every region on the actual sheet, grouping by name prefix with matching highlight colors, filtering as you type, and exporting paste-ready Lua region tables in five formats (`default`, `coords`, `atlasinfo`, `sheetfirst`, `xml`) plus JSON. It also runs the reverse direction: an addon-code scanner detects region tables and `SetTexCoord` calls in dropped `.lua`, `.xml`, `.txt` or `.toc` files, matches them against the current atlas with per-corner pixel exactness, and flags flips, sub-pixel edges and nine-slice margins. A define mode lets you draw regions on your own PNG, with alpha-island auto-detection before you draw anything.

The architectural detail worth flagging is that it ships an MCP server, exposing the same API as `atlas_`-prefixed tools for opencode and Claude Desktop, and it auto-starts the local app on boot if it is not already reachable. It also refuses to download its roughly 146 MB texture-name index behind your back: search returns a degraded state naming the fix, and only an explicit approval call triggers the fetch. Upstream is wago.tools, and the app is read-only toward it with no telemetry.

Caveats: 7 commits, 1 star, 1 fork, no releases or tags yet. The GitHub API reports an MIT license and the repository does contain an MIT LICENSE file, but the README's own License section still says the license is "not yet declared" and asks readers to check with the maintainers. That contradiction is the maintainer's to resolve, so verify before reuse.

## Why this matters for tracked servers

Neither tool changes any realm we list, and neither is a candidate for the tracker. What they signal is that the AzerothCore toolchain is filling in around the core itself. Chromiecraft's argument for upstreaming every fix to [AzerothCore](/blog/chromiecraft-deep-dive/) is that small teams get the benefits of large ones; these are the authoring and asset tools that make a two-person team able to ship custom quests and custom interface art without hand-writing SQL or hand-computing texcoords. A server with custom content ambitions and no dedicated quest scripter is exactly the operator these unblock.

We also keep a [client tooling roundup](/news/client-tooling-update/) for the client side, cover the [open-source core ecosystem](/news/modern-qol-classic-cores/), and track individual AzerothCore realms on the [server directory](/servers/) including solo and playerbot-driven projects.

SOURCES: [DMCK96/acore-quest-creator](https://github.com/DMCK96/acore-quest-creator) repository, its v0.1.0 release, and the first-party [documentation site](https://dmck96.github.io/acore-quest-creator/); [PentSec/atlas-inspector](https://github.com/PentSec/atlas-inspector) repository README, docs, and the GitHub API for commit, star and license metadata. All read September 26, 2026. No binary from either project was downloaded or executed.
