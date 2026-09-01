---
title: "Three Camelot builds in 25 hours + WoW Armory adds Classic — Aug 28-29 surge"
date: 2026-08-29
---

Two infrastructure signals in one window.

## Three encrypted builds in ~25 hours

Algalon (Ghostopheles' Algalon, Enigmatic Observer tracker) logged:

| When (UTC) | Env | Previous | New |
|---|---|---|---|
| Aug 28 01:27 | WoW Dev 2 (1.60.1) | 1.60.1.69407 | **1.60.1.69555** |
| Aug 28 08:15 | WoW Dev 5 (1.60.0) | 1.60.0.69439 | **1.60.0.69606** |
| Aug 29 02:16 | WoW Dev 2 (1.60.1) | 1.60.1.69555 | **1.60.1.69609** |

Result: parallel branches still live — Dev 2 on 1.60.1, Dev 5 on 1.60.0 — advancing twice and once respectively within 25 hours. That is active internal QA (testing, bug fixes, deploy prep) not a single isolated bump. Builds remain encrypted, so no zones, classes, level cap or dates leak, and a higher number doesn't equal a PTR.

Stiven reads the Dev 5 movement as possible BlizzCon show-realm stabilization — plausible near an event, but not confirmed.

## WoW Armory now supports Classic games

Separately, Blizzard's official WoW Armory added Classic game-version support, highlighted Aug 27 by Joardee. The web stack now distinguishes Classic realms/characters instead of routing everything through modern WoW.

Useful on its own for era/anniversary populations. It would also make it easier to add another Classic version later. Blizzard has not tied the change to Project Camelot.

## Observed vs. interpretation vs. unconfirmed

**Observed:** three encrypted updates across two envs in 25h; Armory Classic support live; both 1.60.0 and 1.60.1 still active.

**Interpretation:** Camelot still in active development with parallel branches; team may be hitting an internal milestone; Armory better equipped for multiple Classic products; some activity could be event prep.

**Unconfirmed:** whether Camelot is Classic Plus, whether Armory was built for Camelot, any BlizzCon reveal/demo, any content in the builds, any alpha/beta/release date.

Tracker: [Classic+ hub](/classic-plus/) timeline and Status Snapshot now through Aug 29 (69609). CDN: BlizzTrack wowdev2.
