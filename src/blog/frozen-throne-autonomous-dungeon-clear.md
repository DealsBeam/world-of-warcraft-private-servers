---
title: "Frozen Throne: a WotLK realm where the dungeon bots clear it themselves"
date: 2026-09-27
category: guides
heroImage: /images/hero-1.jpeg
summary: "Autonomous DungeonClear with no addon, crossfaction random dungeon finder, alt-bot levelling, Mythic+ to +7, and a living auction house. The most complete solo-Wrath feature set we have read."
---

Wrath's endgame problem is arithmetic. Naxxramas is 25, The Obsidian Sanctum is 25, and the people who want to run them are spread across timezones with jobs and children. Every realm has tried to solve this. The approaches differ in how honest they are about the cost.

Frozen Throne's is the most complete answer we have read, and its distinguishing feature is that **the bots can clear a dungeon on their own, with no addon running.** You press a button and the instance gets done while the tank leads.

It is [Frozen Throne](/servers/frozen-throne/) on our tracker, `playable`, `WotLK`, `medium`, self-reporting 1,191 online.

## One detail that verifies the bot claim

Most realms give you a single "players online" number and ask you to trust it. Frozen Throne shows three counters: **1,191 players online, 5,797 characters created, 453,495 quests completed.**

We read that page twice, about a minute apart. The quest counter went from **453,494 to 453,495**.

That is worth pausing on. A quest counter that moves while nobody is looking is a quest counter being driven by something. It does not prove the population is 1,191 humans, and we are not claiming it does. But it is the project volunteering a metric that is checkable and falsifiable, and it checks out as live rather than static. That is a better posture than most, and it is a small thing that tells you something about the operation.

## The feature set, in the order it matters

**Autonomous DungeonClear.** The site describes dungeon bots that "navigate and clear instances largely on their own, with the tank leading the way," and states plainly: **no addon is required.** That is the technical claim to judge, and it is the reason this realm is different. Most bot implementations need an addon polling state. One that works as a server-side behaviour is a different build.

**PlayerBots across the whole game.** Quest, grind, run dungeons, raid, join battlegrounds and use the random dungeon finder. So the bots are not confined to party filler. They level, they queue, they fight each other in battlegrounds.

**Alt Bot Support.** Bring alternate characters along and level or gear them while you play your main. SelfBot is allowed in dungeons. This is the mechanic most solo servers hand-wave, because levelling five characters is the tedious part and having the game do it while you do something else is the actual quality-of-life win.

**Crossfaction RDF.** Horde and Alliance matched together, including bot command support while everyone is in the same party. And the queue works **without average item-level requirements**, which removes the single most annoying gate in Wrath's dungeon finder.

**Mythic+ to +7.** Optional endgame dungeon progression with gold, Emblems of Frost and epic rewards. Seven levels is a modest ceiling compared to some realms, and the site does not inflate it.

**A living Auction House bot.** The site is explicit that this exists because a fully functional auction house keeps the economy useful "even on a smaller population server." That is a real problem being solved rather than a feature being listed.

**Character services for in-game gold.** Customisation, name change, race change and faction change, bought with gold rather than money. On a realm where the auction house is bot-maintained, that matters.

**Account-wide mounts**, so alts do not repeat the riding-skill grind.

The quality-of-life list is long and specific, which is a good sign: AoE loot on nearby corpses, automatic junk selling at vendors, all flight paths unlocked by default, spells learned automatically while levelling, item stacks up to 100, **stackable Warlock Soul Shards**, crossfaction world chat, an optional Death Knight starting-zone skip, a reagents bank, the Dalaran Auction House Engineer available to everyone, and transmogrification in Stormwind, Orgrimmar and presumably the third city.

Stackable soul shards deserves a mention, because in Wrath they are a genuine inventory tax on every warlock for the entire expansion and nobody ever fixed it.

## PvP, and events that are actually a thing

Battlegrounds, arenas and world PvP are supported, with old-school duelling spots around Stormwind, Orgrimmar and the Dark Portal. It also runs **faction raid events**, "For the Horde!" and "For the Alliance!", which bring large-scale PvP into the open world.

That is the answer to the "who do I fight" problem on a bot realm. The bots can queue for battlegrounds, so the alternative to a faction event is playing against AI, and the site offers the other thing instead.

## Under the hood

The stack is described as AzerothCore plus community projects, maintained custom forks, server-specific patches and their own fixes, with regular integration of upstream improvements while keeping custom behaviour where it serves the solo-friendly design.

That is the correct posture for a fork and worth saying, because the failure mode in this scene is a realm that freezes on a snapshot and never takes security fixes. "We regularly integrate upstream improvements" is a claim worth watching rather than one to accept on faith, and you can check it against the AzerothCore project yourself.

## Getting in, and one friction point

You need a standard unpatched WotLK 3.3.5a client. HD patches work. Two options: their recommended client, which arrives with the realmlist already configured so nothing needs changing, or the Warmane 3.3.5a client, which you can use if you prefer it but which needs a realmlist edit. They publish a realmlist download and an addon page with recommended tools.

**The password policy is unusually strict and you will hit it immediately:** at least 8 characters, at least one uppercase letter, at least one number, and at least one special character. The registration form validates each of those live. It is not a complaint, just know it before you pick a password, because an 8-character minimum is longer than many password managers default to for game accounts.

## On the community claims

The site says many features came from community feedback and Discord votes, that players have a real voice in how the server evolves, and that bugs affecting progression or stability are handled with a P1 mindset.

We cannot verify any of that from outside, and a "community-driven" claim is close to unfalsifiable. What we can say is that the stated position is specific rather than generic, and the bot counters at least let you test part of it.

## The honest bit about 1,191

The site calls itself medium-sized. The three counters are server-reported and the quest counter is verifiably live, but "players online" on a realm with 1,191 live questing bots is not 1,191 humans, and the site does not claim to break the two apart the way [IceDNicco does](/blog/icednicco-one-developer-and-3000-bots/). That is not dishonesty. It is a realm that has made its world legible in a different way.

So the honest reading of the number is: this is a well-featured realm where you should expect to be one of relatively few people who are actually people, and the bots will do the lifting when you want it to. If the pitch that matters to you is "the dungeon clears itself," that promise is about the bots, not about finding a group.

## Who it suits

**Good fit:** solo players and small groups who want Wrath progression without scheduling. Anyone for whom the DungeonClear feature is the deciding factor. Players who like a realm that ships real work on alt characters and an auction house rather than more store items. Cross-faction players, since RDF and world chat both work across factions.

**Poor fit:** if you want a large human population in instances, the number does not support that. If you want PvP against real opponents outside scheduled faction events. If you need a battleground queue to fill with humans.

## The judgement

This is the most complete solo-Wrath feature set we have read, and it is a different bet from the one [CoRe Legacy](/blog/corelegacy-llm-bots-and-population-ceiling/) is making. Frozen Throne's pitch is depth: bots that genuinely clear content so your time is not spent waiting. CoRe Legacy's is population management and simulated company. Both are trying to solve the same problem and neither pretends the answer is a populated world.

The thing that would make this realm excellent is a real-player-versus-real-player signal the way IceDNicco provides one, and a way to tell how much of the 1,191 is human. Until then, judge it on DungeonClear, which is the part that has to be true for the rest to matter.

SOURCES: Frozen Throne's own homepage and live dashboard counters, read September 27, 2026, with the quest counter re-read roughly one minute later to confirm it advances. Client version, password rules, feature list, stack description, PvP events and onboarding options are the project's own. We did not create an account, did not play, and did not test DungeonClear. Related: [playerbots vs PartyBots vs scaling](/blog/playerbots-vs-partybots-vs-scaling/) explains the technology underneath, and [best WotLK for solo](/blog/best-wotlk-for-solo/) is where this sits in the wider field.
