---
title: "Frostbound Warband guide: running a five-character raid with four AI companions"
date: 2026-09-26
category: guides
summary: "What the Warband system actually does, how MultiBot fits, what the progression looks like, and the download problem you should know about before you install anything."
startingPoint: true
---

Frostbound's pitch is one sentence long: build a raid group out of your own alternate characters. Four AI companions, one player, no pugging.

That idea is not new. Solo-scaling servers have run playerbots for years, and our [best WotLK for solo roundup](/blog/best-wotlk-for-solo/) covers the realms built around it. What is unusual is that Frostbound makes the companions a first-class citizen rather than a fallback, and markets the whole thing in Spanish to a community that is underserved by English-first Wrath projects.

Before the mechanics, one thing that matters more.

## Read this before you download anything

Frostbound ships complete game clients, 17.6 GB and 27 GB, and both download buttons point at the same folder on a third-party file host. There is no published hash, no file manifest, no signature, and no stated correspondence between a build number and the archive contents. There is also no Frostbound-specific public source repository.

This is a different risk shape from most servers on this tracker. Normally you supply your own retail client and only the server side is untrusted. Here the executable is the unverified part. We did not download the clients and did not run anything, and our advice is that you should not either until you have independently verified whatever you download, scanned it, and run it somewhere isolated. The full detail is in the [Frostbound listing](/news/frostbound-joins-tracker-sep-26/) and on its [server page](/servers/frostbound/).

With that out of the way, the rest of this is about the design.

## What the Warband is

Your Warband is your own alternate characters on your own account. You create a main, make alts, and those alts become the companions that follow you into content. Nothing is shared with other players and nothing is rented from a bot farm.

The server documents the flow in four steps: create your main, create your recruits, open MultiBot, and your party assembles beside you and joins your group automatically. From there you direct them.

**MultiBot** is the required addon and the actual interface. It gives you a panel for assigning roles, issuing attack commands, and managing formations. The project credits the original author's third-party wiki for the full UI walkthrough rather than pinning a specific release, which is worth knowing if you are trying to verify what you installed.

The design goal is stated plainly: gear a five-character squad at once. With AoE loot, that is a real progression loop rather than a parade.

## What the bots can and cannot do

The bot behaviour is configurable, which is the difference between this and a raid dummy.

- **Roles are yours to assign.** Tank, healer, and DPS are set per companion rather than inferred.
- **Formations matter.** Circle, line, and arrow formations exist so you can keep a group out of ground effects. This is a real mechanic inherited from the AI playerbot lineage, not a cosmetic option.
- **Loot management is automated.** A panel action sells grey items to the nearest vendor for the whole party.
- **Quest and level syncing exists.** Commands let you copy quests to your alts and level the group together, with a cooldown on the catch-up so it cannot trivially replace leveling.

What you do not get is a bot that plays well for you. You are still the one pulling, buffing, and positioning. The companions reduce the scheduling problem, not the gameplay problem.

## Progression and pacing

Rates are listed as **x1 to x7 experience**, adjustable per character, with **x2 loot** and **x2 gold**. That combination is deliberate. Double loot and gold is the standard lever for making a fresh server feel generous without inflating the level curve past a sensible range.

The level experience itself comes from an in-game NPC that sets the group's rate, and the April implementation notes are explicit that it applies per character rather than server-wide, with random bots defaulting to the top of the range. If you are levelling a Warband deliberately, that NPC matters.

Solo access is handled through convenience rather than gates: a guild-house NPC with dungeon and raid teleports, and a DK campaign skip that marks quests complete, sets your phase, learns spells to your level, and teleports you to your capital.

## Endgame

- **Mythic+** with weekly affixes, mythic keystones, a timer, and a global ranking ladder.
- **Raids with bot support**, including the Ruby Sanctum, with Magtheridon, Grulloc and Blackrock Spire rewritten.
- **750 random bots in the world**, so the zones are not empty even when no human is nearby.
- **Full cross-faction**, including `/who`, mail, friends, and trade, which removes most of the faction friction that normally splits a small realm.
- **Per-raid tuning**, such as an ICC enrage extended from 5 to 6 minutes and a Reflection of the Blood Furnace wave fix.

The core is AzerothCore with the mod-playerbots module, which is the same lineage behind most of the solo servers we track. If you have read our [playerbot architecture explainer](/blog/playerbot-architecture-explained/), Frostbound is a known stack with an unusual amount of polish on the top.

## Monetization, stated plainly

The site describes itself as non-profit and says the end-game is achieved by playing. The store sells instant level 80 with flying, two professions at 450, 10,000 gold, 280% and 310% flying, a set of mounts, and combat consumables, paid for with a donation-backed currency.

That is a gold-and-progression shop. Not a cosmetic shop. If you are the kind of player who wants to earn your level 80, budget for it. If you want to arrive at endgame quickly and then play the game, this is a cheaper path to that than most.

## Who it suits

**Good fit:** solo or duo players who want full raid mechanics without a schedule. Spanish-speaking players, who have fewer high-pop Wrath options. Players who want modern systems, Mythic+ and cross-faction, on a realm that also has bots.

**Poor fit:** anyone who wants a large human population, or a strict blizzlike experience, or a client they can trust without independent verification.

The population claim is the project's own API reporting 650 online with a daily peak of 687. That is self-reported, and we record it that way. The most recent development post is from July 24, so the realm is running and populated but not currently shipping visible updates.

Related: [AzerothCore tooling](/news/azerothcore-quest-and-atlas-tooling-sep-26/) for the ecosystem it is built on, [playerbot architecture](/blog/playerbot-architecture-explained/) for the stack, and [how we review a server](/blog/how-we-review-a-private-server/) for why the download warning is in the entry.

SOURCES: Frostbound's first-party homepage, realm information, downloads, terms, store, changelog, the April and July 2026 development posts, and its first-party status API, all read September 26, 2026. No client was downloaded and nothing was executed.
