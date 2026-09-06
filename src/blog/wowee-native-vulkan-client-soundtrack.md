---
title: "WoWee: native Vulkan client for 1.12 through 3.3.5a, plus its own soundtrack"
date: 2026-09-06
category: guide
summary: "WoWee is a C++ Vulkan WoW client for Vanilla, TBC and WotLK — tested against AzerothCore, TrinityCore, MaNGOS and Turtle 1.18, with Android builds and an original 19-track soundtrack."
---
<!--
SOURCES: WoWee GitHub README (Kelsidavis, 695 stars, 8,238 commits, MIT); Bandcamp soundtrack page (19 tracks, 56 min, $9 FLAC, original compositions).
>

A from-scratch native client for old WoW, with Vulkan renderer, Android builds, a world editor — and its own soundtrack. WoWee is the most ambitious client project in the scene.

## TL;DR

C++ Vulkan client for 1.12, 2.4.3, 3.3.5a. Tested vs AzerothCore, TrinityCore, MaNGOS, Turtle 1.18. Linux/macOS/Windows/Android. MIT. 19-track original soundtrack on Bandcamp.

## What it is

World of Warcraft Engine Experiment: custom open-source client, no Blizzard code or assets (bring your own data). SRP6 auth, RC4 encryption, per-expansion packet parsers. Full gameplay surface: combat, spells, talents, quests, loot, mail, auction house, parties, pets, chat. Warden module runs via Unicorn x86 emulation. Experimental world editor with JSON-friendly formats and AzerothCore export.

## Platform reach

x86-64 + ARM64 on Linux, macOS, Windows. Android arm64 (Pixel 9a tested) with touch controls and minimal-data profiles (login-only 787MB up to full 18GB). FSR2/FSR3 frame generation experimental. Signed macOS DMGs, Flatpak + Steam Deck bundles.

## The soundtrack

19 tracks, 56 minutes, original compositions, no Blizzard audio. Login theme, tavern rotations, zone pieces (Elwynn, Barrens, Booty Bay, Lordaeron, Stormwind, Ironforge) plus raid-culture anthems ("Loot the Dogs", "One More Pull"). $9+ lossless FLAC. Debug builds ship it; release builds leave it out.

## Why it matters here

Clients are preservation infrastructure. Servers die; data formats + open clients survive. WoWee sits next to OpenRealm in our tools list — engine reimplementations that outlive any single realm. Already linked there; this post is the guided tour.

## What's next

Try it against your realm's core, report protocol gaps. Custom-zone builders: watch the editor, formats still fluid.
