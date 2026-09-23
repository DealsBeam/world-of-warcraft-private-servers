---
title: "Forever beta player workarounds: lighting crash fix, VPN lag fix, and a contested addon claim"
date: 2026-09-19
game: wow
description: "Day-two Forever beta notes from players: a Secondary Lighting workaround for login crashes, VPN-to-US for non-US lag, and a disputed claim that the beta loads old beta addons."
tags: [wow, blizzcon-2026, classic-plus, beta]
---

September 19, 2026: Blizzard's [official known-issues list](/news/forever-beta-live-day-one/) covers the confirmed bugs. Around it, players are trading workarounds for the two biggest day-two complaints: crashes and lag. Both come from Warcraft Tavern's beta desk, and both carry the usual player-fix caveats.

## Login crashes: Secondary Lighting to Fair

Players crashing to desktop on character login (including Tavern's own Passion) report that setting **Secondary Lighting to Fair** from the character-select menu stops the crashes. The trail started in the Tavern comment section: a 9070XT owner flagged that AMD cards crash loading into the game, with secondary lighting to low as the fix.

Caveatsunpacked: one commenter says the lighting change only delayed their crash, and that switching to **DX11** is what actually held, suspecting an AMD driver or shader issue specific to the beta build. Treat the lighting toggle as the first thing to try, DX11 as the second, and neither as official.

## Lag: the beta only has US servers

The lag story has a cleaner diagnosis. The beta runs on **US servers only**, so non-US players get high latency, disconnects back to queue, and in the worst cases an inability to interact with objects or NPCs. Players report that routing through a **VPN with a US endpoint** resolves it: Tavern's Val Hull measured a consistent 100ms from the EU via a New York server. Peak-hour overload lag is separate and no VPN fixes that.

Update (Sep 20): Blizzard has since issued EU routing fixes ([PC Gamer, Sep 18 update](https://www.pcgamer.com/games/world-of-warcraft/wow-forever-lag-how-to-fix/), via BlizzardCSEU): the author reports a clean 100ms without VPN after the fix, with VPN retained as fallback for anyone still affected. Try unprotected first now; keep the VPN ready.

Context for the demand: Holly Longdale posted that the Forever beta is setting records, which matches the day-one login queues.

## Contested: does the beta load your old beta addons

Tavern's Luxrah reports that the Forever beta (built on a modern Midnight-era UI) picks up addons and keybinds from a previous WoW beta install, and advises disabling old beta addons to avoid LUA errors. Two commenters dispute this directly, saying the client did no such thing on their machines. Until a third party reproduces it, file this one as unconfirmed: harmless to check your addon folder either way, but not an established fact.

SOURCES: Warcraft Tavern crash fix (Passion, Sep 18), VPN lag fix (Val Hull, Sep 18), addons claim (Luxrah, Sep 17); Holly Longdale record-beta post (Sep 18). Player comments as noted.

## Mac: crashes on launch, officially addressed in build 69977 (Sep 23)

Separately, macOS players report the beta client crashing on launch ([EU forum thread](https://eu.forums.blizzard.com/en/wow/t/wow-forever-beta-blizzard-should-compensate-macos-users/629316)), flagged via classicwowforever's beta guide. Update (Sep 23): Blizzard's beta build 69977 ships Mac display and stability fixes ([roundup](/news/forever-beta-build-69977-mac-controller/)), and a dev reply credits detailed player repro steps with more Mac analyses underway. Retest on the new build before reaching for workarounds.

## FPS decay and the suspected memory leak (Sep 20)

A second performance thread, compiled by wowforeverclassic's [beta fixes guide](https://wowforeverclassic.com/guides/beta-fixes) (checked Sep 19): high-end PCs running 25 to 50 FPS or losing frames over an hour. Player-reported helps are updating graphics drivers, turning off Target Framerate, deleting the Cache folder inside the beta install, and switching to DirectX 11. Frame rate decaying across an hour points at a memory leak Blizzard has not acknowledged; restarting the client is the only relief reported so far.

## Settings reset on every restart (Sep 20)

Same source: addon settings, keybinds and interface layout reset every time the beta client starts. Saved variables are written but never loaded on a fresh start, affecting addons and some of Blizzard's own settings. No workaround beyond leaving the client running, and it is not on the official Known Issues list yet, so report it on the beta forum if it hits you.

## Install flow and GPU cutoff (Sep 20)

Two practical notes from the same guide: if the Install button is greyed out or the beta is missing from the dropdown, update the Battle.net app and look under In Development (purchased access can take up to 30 minutes to appear; invites arrive in waves). The download runs about 60 GB without retail WoW installed, much less with it since assets are shared. And the hard floor: cards older than AMD GCN 1, NVIDIA Maxwell or Intel Skylake cannot run the new lighting, per the system requirements page.
