---
title: "Forever addon ecosystem: Questie ships, DBM ports, WeakAuras stops, ClassicUI restores"
date: 2026-09-20
updated: 2026-09-25
game: wow
description: "The first Forever addon census, updated with RestedXP v4.11.9: Questie has a Forever release, Details is compatible, DBM is being ported, WeakAuras authors stopped, Blizzard ships built-in meter/cooldown/swing under Midnight API rules, ClassicUI restores the 1.x interface, and RestedXP expands Skyborne routes."
tags: [wow, blizzcon-2026, classic-plus, beta, addons]
---

September 20, 2026: three days into the beta, the addon picture is legible. wowforeverclassic's [addons guide](https://wowforeverclassic.com/guides/addons) (checked Sep 19) plus Warcraft Tavern's ClassicUI report give the first census.

## The rules: Midnight API, built-ins included

Forever runs the retail-era interface code with the Midnight expansion's restrictions: enemy health, damage numbers and threat are hidden from addons, so combat-decision automation cannot exist. Blizzard's answer is bundling: a **built-in damage meter, cooldown manager and swing timer** ship with the game, encounters are designed to be playable without warning addons, and only advantage-granting functions were removed. The Q&A said addons should not be required; the beta tests that claim.

## Status board (all reported unless noted)

- **Questie:** has a Forever release.
- **Details:** listed as compatible, within the API's combat-value limits.
- **Deadly Boss Mods:** being ported.
- **WeakAuras:** does not work, and its authors have stopped porting it. The biggest casualty so far.
- **Classic-era addons generally:** need updates for the changed API; many load but break on combat data or saved settings.
- **Built-in cooldown manager:** official, but incomplete for some classes in beta (on the Known Issues list).

One shared beta bug hits everything: saved settings are written but never loaded on a fresh start, so layouts and keybinds reset. No workaround; not yet on the official list.

## ClassicUI: the first restoration addon

Tavern's Val Hull [reports](https://www.warcrafttavern.com/forever/news/classicui-forever-addon-makes-wow-forever-truly-feel-like-classic/) that `justawower`'s **ClassicUI Forever** ([CurseForge](https://www.curseforge.com/wow/addons/classicui-forever)) is already live: gryphon action bars, old unit frames, round minimap, 1.x bags/loot/merchant/social windows, fully modular per element and integrated into Edit Mode rather than replacing the UI. Beta caveats are what you would expect: settings revert on relog, stealth and druid-form issues, occasional LUA errors. The speed matters more than the polish: a usable Classic restoration on day three signals the addon scene is moving at beta pace, not launch pace.

## RestedXP expands the guide layer

RestedXP's public **v4.11.9** release (September 22) allows `#classic` routing on Forever and expands Skyborne quest routing. It also improves class-training and profession instructions, adds crafting, racial, travel, and deathskip macros, and refreshes waypoints, quest conditions, spell IDs, and guide text. This is a new guide-addon release in the current beta census. It is project evidence, not a Blizzard feature announcement. Full release note: [RestedXP v4.11.9](/news/forever-restedxp-skyborne-guide-sep-25/).

SOURCES: wowforeverclassic addons guide (Sep 19); Warcraft Tavern ClassicUI report (Val Hull, Sep 19); Blizzard Q&A broadcast (Sep 17); [RestedXP v4.11.9 release](https://github.com/RestedXP/RXPGuides/releases/tag/v4.11.9) (Sep 22).
