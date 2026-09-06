---
title: "DLSS5 confirmed working on a 3.3.5a client via feeder"
date: 2026-09-06
summary: "DLSS5-Feeder status table lists World of Warcraft 3.3.5a as user-confirmed: 4K via DXVK on RTX 5080/5090. First DLSS-on-WoW data point."
---
<!--
SOURCES: jlrouzies-fr DLSS5-Feeder README status table (WoW 3.3.5a row, issue #15).
-->

DLSS5 runs on a 3.3.5a client. User-confirmed, in the feeder's own status table: World of Warcraft 3.3.5a over DXVK, 4K on RTX 5080/5090.

## TL;DR

Feeder + DXVK + 3.3.5a = neural rendering on a WotLK client. Confirmed by user report (issue #15), not dev-tested. Expect half framerate. dxvk.allowFse = False was the setting that mattered.

## The setup that worked

32-bit Vulkan via DXVK path: ReShade 6.8 x86 as global Vulkan layer, default dxvk.conf, `dxvk.allowFse = False`. DLAA at native size plus the 32→64-bit hop costs roughly half the frame rate. Guild Wars Reforged confirmed the same way on a 4070.

## Honest flags

User-reported, not dev-measured. Half framerate cost. DXVK-only route (no native Vulkan in old clients). HUD processed with scene. Still: first hard data point that neural rendering reaches private-server-era clients.

## Why it matters here

Our [DLSS5 roundup](/blog/dlss5-mod-tools-compared/) parked these tools for lack of a Warcraft hook. This is the hook: Reforged-style HD visuals plus neural rendering on the same 3.3.5a clients our scene runs. Watch for Faebright/Reforged players picking it up — visual mods plus DLSS is how old clients stop looking old.
