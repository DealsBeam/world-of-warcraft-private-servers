---
title: "Benilla: from-scratch 1.12.1 client in Rust and Bevy"
date: 2026-09-06
category: guide
summary: "Benilla rebuilds the Vanilla client in Rust: GPU-skinned models, from-scratch FrameXML+Lua (AtlasLoot runs), networked movement. Solo dev, 1.12.1 only, no Warden planned."
---
<!--
SOURCES: Benilla GitHub README (samwhosung, 193 stars, MIT/Apache, solo export repo).
-->

One dev rebuilding the Vanilla client in Rust. No ports, no wrappers — formats, protocol and interface from scratch. That is Benilla.

## TL;DR

Rust + Bevy 1.12.1 client. From-scratch FrameXML+Lua engine (AtlasLoot, Bagnon load). GPU-skinned M2s, particles, ribbons. Tested vs vmangos. Solo project, issues/PRs closed, Discord for bugs. No downloads yet.

## What works

Full asset stack readers (MPQ chain, BLP, DBC, ADT/WDT/WDL, M2, WMO) wired into Bevy. Streamed terrain to horizon, portal-culled WMOs, swimmable liquids, sky/weather, day/night + fog + gamma. Characters end to end (customization, armor composite, sheathing, enchants, shapeshifts, stealth, mounts). WoW-feel movement networked both directions, boats, zeppelins, taxis. SRP6 auth, object mirror ECS, wire coverage movement through honor. Combat on faithful swing law, GCD, combo points, real CC. Audio with interior/underwater transitions and zone reverb.

## The standout: interface from scratch

FrameXML + Lua engine rebuilt, driving login, HUD, guild, macros, keybinds, chat, nameplates, combat text, tooltips. Third-party addons load beside the binary — AtlasLoot and Bagnon already run. That is the hardest part of a client clone, and it works.

## Scope discipline

1.12.1 only. No other expansions, no Warden (anticheat) planned. Done = everything the original client does, same look and feel, download for Win/Linux/Mac. Next: battlegrounds, meeting stones, VanillaFixes-style fixes, playable downloads (Linux first).

## Why it matters here

Two open clients now mapped: WoWee (broad, C++/Vulkan, three expansions, Android) and Benilla (deep, Rust/Bevy, Vanilla-only). Different bets, same direction — the client layer outliving realms. Already in our tools list; this is the guided tour.
