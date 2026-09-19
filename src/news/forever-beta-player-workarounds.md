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

Context for the demand: Holly Longdale posted that the Forever beta is setting records, which matches the day-one login queues.

## Contested: does the beta load your old beta addons

Tavern's Luxrah reports that the Forever beta (built on a modern Midnight-era UI) picks up addons and keybinds from a previous WoW beta install, and advises disabling old beta addons to avoid LUA errors. Two commenters dispute this directly, saying the client did no such thing on their machines. Until a third party reproduces it, file this one as unconfirmed: harmless to check your addon folder either way, but not an established fact.

SOURCES: Warcraft Tavern crash fix (Passion, Sep 18), VPN lag fix (Val Hull, Sep 18), addons claim (Luxrah, Sep 17); Holly Longdale record-beta post (Sep 18). Player comments as noted.
