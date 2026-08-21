---
title: "The Turtle WoW preservation scene, mapped"
date: 2026-08-21
link: "https://github.com/Penqle/tortoise-wow"
---

When Turtle WoW shut down in May, most coverage focused on the servers going dark. What happened next is arguably the more interesting story: the 1.18.x codebase didn't die — it fragmented into a loose federation of preservation projects, each taking a different slice of the problem. After the [source leak](/news/turtle-wow-source-leak/), the knowledge that once lived in one Discord now lives in GitHub repos, Docker scripts and community wikis. Here's the map.

## Open-source cores

**[Tortoise WoW (Penqle)](https://github.com/Penqle/tortoise-wow)** is the anchor: a community restoration of the Turtle WoW 1.18.1 build, with most other tooling orbiting it. **[Shyalya's fork](https://github.com/Shyalya/tortoise-wow)** adds active PlayerBots integration — which matters for preservation because you can populate the world locally instead of needing ten thousand strangers.

## Live continuations

The server-side split we covered in [the successor wave](/news/turtle-wow-successor-wave/) keeps growing. [Capybara WoW](/servers/capybara-wow/) carries the largest ex-Turtle population; [Octo WoW](/servers/octo-wow/) restored the 1.17.2-era core toward 1.18.1 with its own development on top; [RavenCraft](/servers/ravencraft/) is the former-contributors' continuation of 1.18.1; [Caverns of Time](/servers/caverns-of-time/) runs Turtle+; and **[LunaticPTR](https://lunaticptr.com/)** preserves something narrower and stranger — the Level One Lunatic Challenge, a zero-XP endgame with 10-man dungeon raids, restored Frostmane Hollow content and community-designed loot tables, updated as recently as August 18.

## Self-hosting

Two Docker packages make local Tortoise trivially runnable: **[Nescabir's tortoise-docker](https://github.com/Nescabir/tortoise-docker)** wraps Shyalya's PlayerBots fork, and **[kasperfriend's rebuild](https://github.com/kasperfriend/tortoise-docker)** targets any-CPU near-zero-command operation. **[Dad's MMO Lab](https://github.com/DadsMmoLab/dads-mmo-lab)** zooms out to old MMOs generally — automated installers and Docker setups for multiple WoW versions plus RuneScape, MapleStory and more, aimed at Steam Deck, Linux and Windows.

## Tools and documentation

**[Tortoise DB Viewer](https://github.com/Xian55/tortoise-db-viewer)** fronts the database — items, NPCs, drops, quests, crafting. **[Warband](https://github.com/Shyalya/warband)** gives PlayerBots a proper UI instead of chat commands. **[TortoiseGMManager](https://github.com/tortoise-wow-stack/TortoiseGMManager)** wraps GM commands in-game, and the **[TortoiseWoWKnowledgeBase](https://github.com/tortoise-wow-stack/TortoiseWoWKnowledgeBase)** documents how the cores fit together — arguably as important as the source itself, since undocumented code is one maintainer burnout away from being lost again.

## The console frontier

A quieter branch: playing Vanilla-era WoW like a modern console game. **[Ryac's Steamdeck UI](https://github.com/Ryac1/Ryac_TW_Steamdeck_UI)** and **[ConsoleExperienceClassic](https://github.com/pepordev/ConsoleExperienceClassic)** both bring gamepad-friendly Console Port setups to Tortoise-era clients.

## The takeaway

There is no single "Turtle preservation project" anymore — there are at least six live approaches spanning open cores, hosted realms, self-hosting bundles and tooling. That fragmentation looks messy, but it's how preservation actually survives: redundant copies, independent maintainers, and documentation that outlives any single Discord.
