---
title: "A Diablo 3 remake inside WoW, and the dead Conquest of Azeroth that is not dead"
date: 2026-10-01
category: news
summary: "Two servers added from first-party reads. Torment rebuilds WotLK as a full Diablo III action RPG and opened alpha on September 30. Conquest of AzerothCore is the 22-class project running on AzerothCore, and it is a different project from the Conquest of Azeroth we marked dead last month."
---

Two entries added to the tracker today, both from reading the sites rather than from a list. One of them nearly became a duplicate of something we already call dead, which is worth spelling out before anything else.

## Conquest of AzerothCore is not the Conquest of Azeroth we marked dead

On 30 August we set **Conquest of Azeroth** to `dead`, shut down **4 September 2026**, reason C&D, as part of the Ascension network that Blizzard's cease-and-desist took down. That entry is still correct and is still in the tracker.

**Conquest of AzerothCore is a different project and it is live today.** It is the open-source continuation running on the **AzerothCore** emulator core, and its own site is emphatic about the distinction: it describes itself as "a public bug-test realm for the AzerothCore emulator core" that "exists purely to help find and fix bugs before changes ship."

We track it separately for exactly this reason. Two names one letter apart, one shut down by a legal action and one publishing dated changelogs, is the sort of pair a reader will conflate unless we say so on both pages.

**Its own about page is unusually clear about what it is not:** *"it is not a permanent or 'live' server"* and "accounts, characters and progress on this realm can be wiped or reset at any time, without notice, whenever it's useful for testing. Please don't treat anything you build here as permanent." We have recorded it as `dev`, which is the honest status for a test realm that says it is a test realm.

**What is running.** **22 classes** across three specs each, from the familiar five up to Witch Doctor, Chronomancer, Starcaller, Runemaster, Reaper, Bloodmage, Cultist, Venomancer, Tinker and Felsworn. Realmlist `logon.coa-development.org`, launcher **0.6.9 at 158 MB**, account creation behind Cloudflare Turnstile.

**The live feed**, read October 1 and described by the site as updated every minute straight from the game server with bots and game masters excluded: **27 to 29 players online** across three readings, **2,442 characters created**, **32 guilds**, 22 classes to play. The level spread is the interesting part: **11 characters in levels 1-14, 11 in 15-29, 4 in 30-44, none at all between 45 and 59, and 3 at 60.** Almost nobody has levelled past 44, which is what you would expect of a test realm being used to test systems rather than played for progression.

**The changelog is the strongest part of it.** Dated entries with GitHub issue numbers, the kind of detail that makes a project auditable:

- **30 September**: Bloodmage Blood Shards implemented, where "the passive had no proc and its generator was a dummy, so every talent built on Blood Shards was dead"; resting and Well Rested now work inside inns; a large restoration of custom questing, trainers and storylines into every starting zone from Northshire to Tirisfal, with rideable road caravans; a new **CoA Forge** in-game world editor; and a quest-content validator that catches quest givers never spawned, unreachable quests, quests where the required item is in no loot or vendor table, and duplicate spawns stacked on one spot.
- **29 September**: **86 templateless vanity cosmetics** restored, where "86 items in the Vanity Collection had no item template, so they could never be delivered to a player."

The 30 September entry also has a **"Native Server Systems"** section moving several client actions onto native `Extensions.dll` packets instead of workarounds, which is the kind of change that reads as routine and is not.

## Torment is World of Warcraft rebuilt as a Diablo III action RPG

This one is stranger and, on the evidence, better built than a project two weeks into alpha has any right to be.

The site's own description: **"Torment: World of Warcraft 3.3.5a rebuilt as a Diablo-style action RPG."** It runs on **Wrath of the Lich King 3.3.5a build 12340**, so you supply the client, and the install guide gives the realmlist as `set realmlist logon.wow-torment.com`.

What has been ported is not a theme. It is the whole loot and progression layer: **Diablo III stats, damage and mitigation; Loot 2.0 with ground loot and unidentified legendaries; Nephalem Rifts with guardians; account-wide Paragon and stash; Blacksmith, Mystic and Jeweler; Normal through Torment VI difficulty.** You start at **level 70**, parties of four, PvE, account-bound trading.

**The important warning is the site's own, and it is unusually direct:** "Torment is a full rewrite of World of Warcraft to play like Diablo III. Combat, classes, abilities, loot, the inventory and the whole interface are custom, built from the ground up. Because of that, addons you use on other servers may not work properly here. For now, the only addons confirmed to work with Torment are the ones we ship to you." Anyone arriving with a WeakAura or ElvUI setup is going to have a bad time, and the project says so rather than discovering it in a support thread.

**Status and dates, which are recent and specific:**

- **26 September**: first news post, "Welcome to Torment", by Calmoran.
- **29 September**: **Patch 42, The Wizard Arrives**, with full skills, runes and passives at base values and Arcane Power. The patch notes publish exact numbers, for example Arcane Orb at 30 Arcane Power for 435% weapon damage, and Rune Frozen Orb at 950% weapon damage as Cold. The **Barbarian is ported from the Warrior** and the **Wizard from the mage**.
- **30 September**: **Phase Alpha opened.** The post asks testers to log in as a mage or warrior, start at level 70 with 200 Paragon and starter gear, and states plainly that only **regular** Nephalem rifts are open, that the blacksmith "isn't quite ready for crafting and may be a bit buggy, use him for repairs and salvaging only right now", and that the jeweler handles gems.
- **1 October**: a **Bounty Board**, which is the detail we liked most. Testing is organised as claimed tasks: sign in with Discord, claim a bounty which locks for one hour, submit results in `#bounty-submit`, and a bot DMs you when it is reviewed. One bounty at a time, re-claimable up to three times, urgent ones pinned with a red border, and a top-testers leaderboard you can opt out of.

**Four realms are planned and only one exists.** Nephalem (Normal) is online, and Horadrim (Hardcore), Seraphim (Seasonal) and Pandemonium (Seasonal hardcore) are all "Not open yet". The Greater Rift leaderboard reads "No entries yet".

**The roadmap has no dates at all, by choice:** *"No dates. Each phase ships when it plays right."* Alpha is current, Beta adds Greater Rifts, Kanai's Cube, legendary powers and sets, Torment VII to XVI, and Monk, Witch Doctor, Necromancer and Demon Hunter. Release is a level 1 to 70 campaign with Adventure Mode, bounties and Followers.

**Population is the weak number and we have recorded it as such.** The realm feed read **1 playing** and the Discord widget read **5 online of 6 members** on October 1. We have left the tier `unknown` rather than reading a tick of 1 as a population band, and the entry says the figure is provisional. A site can publish a live counter and still be telling you nothing about how many people are actually playing.

**A site can also be nothing but JavaScript.** Torment's server-rendered HTML contains two lines of text and a note that the site needs JavaScript. Over a plain HTTP fetch it looks like an empty shell with a meta description. We would have recorded it as a thin site on the ArgusWoW pattern. It is one of the most substantial projects we have added, and the difference was entirely in which tool we used to read it.

SOURCES: Conquest of AzerothCore's own homepage, `/about`, `/changelog` and bug tracker pages, and Torment's own homepage, `/news`, `/patch-notes`, `/guide`, `/leaderboards` and the individual posts `welcome-to-torment`, `torment-phase-alpha` and `torment-bounty-board`, all first-party, read October 1 2026. Torment and both Conquest sites are JavaScript applications, so every claim above comes from the rendered DOM, not from the raw HTML. Player counts are the servers' own live feeds and are self-reported; CoA's feed moved between 27 and 29 across three readings within minutes. We did not create accounts on either, did not download either launcher, and did not play. Related: [the ArgusWoW correction](/news/stale-sweep-batch-3-arguswow-dead-sep-29/), [the Ascension shutdown](/blog/ascension-shutdown-explained/), and [how we review a private server](/blog/how-we-review-a-private-server/).
