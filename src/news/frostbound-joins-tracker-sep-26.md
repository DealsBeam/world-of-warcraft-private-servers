---
title: "Frostbound joins the tracker: 650 reported online, Warband AI alts, and a client you should not trust yet"
date: 2026-09-26
game: wow
description: "Frostbound is a Spanish-first custom WotLK realm built on AzerothCore where four player-owned AI alts form a Warband. Its first-party API reports 650 online, but its full clients ship through a third-party file host with no hashes."
tags: [wow, wotlk, private-servers, custom-content]
---

**Frostbound** is now on the [tracker](/servers/frostbound/) as `playable`, WotLK, `medium` population on a self-reported basis. It launched March 30, 2026 and is the most substantial Spanish-first custom realm we have not yet covered.

## What it is

Frostbound runs Wrath of the Lich King `3.3.5a` on AzerothCore with the mod-playerbots module. Its defining system is the **Warband**: you build a group out of your own alternate characters, and four AI companions follow your orders. The pitch is that a solo or two-player player gets a full raid group without forming one.

The surrounding feature list is unusually concrete for a young project:

- 750 random bots in the world, plus your Warband.
- Bot-driven raids, including the Ruby Sanctum, with Magtheridon, Grulloc and Blackrock Spire rewritten.
- Mythic+ with weekly affixes, mythic keystone, timer and a global ranking ladder.
- Full cross-faction, including `/who`, mail, friends and trade.
- Solo-friendly access: instant teleport to dungeons from a guild-house NPC, an optional DK campaign skip, and an NPC that sets your group's experience rate from 1x to 7x.
- Rates listed on the site as `x1-7` experience, `x2` loot, `x2` gold.
- Per-raid tuning changes, including an ICC boss enrage extended from 5 to 6 minutes and a Reflection of the Blood Furnace wave fix.

## Population, honestly

The first-party status endpoint reports **650 online with a daily peak of 687**. That is self-reported by the project through its own API, not measured independently, so it is recorded as `medium` rather than `large` and labelled as a claim wherever it appears. For scale, our `medium` band elsewhere covers verified counts from the low hundreds up.

The most recent substantive development post is dated **July 24**. That is two months old, so the realm is running and populated but not currently shipping visible updates.

## Monetization: read this before you call it no-P2W

The site's own terms describe the project as non-profit and the store page claims "nothing that alters progression" and "the end-game is achieved by playing." The catalogue does not match that framing. It sells:

- Instant level 80 with flying.
- Two professions at level 450.
- 10,000 gold and four 36-slot bags.
- 280% and 310% flying, plus a set of mounts.
- Combat consumable packs, and a named-NPC placement for donations of 500 crystals or more.

The currency is a donation-backed "crystal." The terms state that donations are voluntary and non-refundable, and that purchases do not guarantee irreversible competitive advantage. Fine. But instant level 80 and 450 professions are progression, so the tracker entry records the store plainly and does not carry the site's no-P2W framing. If progression speed is what you care about, this is a gold-selling shop, not a cosmetic shop.

## Security: the reason to read the rest of this

The download page offers complete game clients at **17.6 GB** and **27 GB**, and both buttons point at the same folder on **GoFile**, a third-party file host. Neither the download page nor the terms publish:

- A SHA-256 hash for either archive.
- A file manifest.
- A code signature.
- Any correspondence between a stated build and the archive contents.
- Any Frostbound-specific public source repository.

The terms state the emulator is based on AzerothCore under AGPL v3, which is the standard core many public realms run, but no fork, commit or module set specific to Frostbound has been published. There is also a required addon, **MultiBot**, for driving the Warband, and the documentation for it points at the original author's third-party GitHub wiki rather than a pinned release.

This is a modified game client delivered from a file host with no integrity check. That is a materially worse position than a normal private server, where you supply your own retail client and only the server side is untrusted. Here the executable payload itself is the unverified part.

**Do not download or run either archive without independent verification.** I did not download the clients and did not execute anything. If you do proceed, verify the archive hash against something obtained through a channel other than the download page, scan it, and run it in a sandbox. Treat it as you would any unverified third-party installer.

## What this entry is and is not

The tracker lists realms, and Frostbound has a reachable first-party site, a real population signal, an active Discord, and a distinctive system worth knowing about. That is enough to list it. It is not enough to recommend without the caveat above, so the security warning is part of the entry rather than a footnote.

Related reading: the wider [AzerothCore tooling roundup](/news/azerothcore-quest-and-atlas-tooling-sep-26/) for the ecosystem this realm is built on, and [how we grade tracker entries](/blog/tracker-correction-policy-explained/).

SOURCES: Frostbound's first-party homepage, realm information, downloads, terms, store, changelog, July 24 development post and `api/status/online` endpoint, all read September 26, 2026. No client archive was downloaded and nothing was executed.
