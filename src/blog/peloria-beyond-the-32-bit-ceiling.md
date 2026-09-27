---
title: "Peloria: the Wrath realm that broke the 32-bit ceiling"
date: 2026-09-27
category: guides
heroImage: /images/hero-7.jpeg
summary: "Stats that read into the trillions, health in the tens of billions, and 100,000 difficulty tiers. What the engineering actually is, why it is interesting, and the unsigned launcher you will be asked to bypass."
---

Every version of World of Warcraft has a wall in it that players never see. It is 2,147,483,647, the largest number a signed 32-bit integer holds, and it sits underneath health, damage, stats and gold. Content stops growing long before you notice, so it goes unnoticed. Then a project decides the interesting thing to do is remove it.

Peloria is a WotLK 3.3.5a realm built around exactly that. Its own site puts the old ceiling against its own ceiling: **2,147,483,647 becomes 50,000,000,000 and up.**

It is on our tracker as [Peloria](/servers/peloria/), `dev`, `WotLK`, in active development. The project says plainly that everything shown is a work in progress and nothing is final.

## Read the download section before anything else

Peloria's install is a single 14.2 MB Windows executable called `WoW-Peloria.exe`, client version 217. You put it next to `Wow.exe` and run it, and it "fetches what it needs, patches the client and starts the game."

Two things follow from that, and both matter more than the numbers below.

**The launcher is not code-signed.** Peloria's own instructions tell you that Windows will show a blue "Windows protected your PC" screen and to choose More info, then Run anyway. That is SmartScreen flagging an unsigned binary, and the project is asking you to override it.

**The launcher self-updates and rewrites your client on every login.** The site describes it as an auto-updating client where the launcher patches itself and the game with no manual downloads. So this is a binary with write access to your game installation that fetches new code from the network without you reviewing it, and it is unsigned.

We apply a written standard to this, and it is in [how we review a private server](/blog/how-we-review-a-private-server/). Applied to Peloria honestly: there is **no published hash for the launcher, no release notes, and no public source**. That is a materially different posture from a project like 19PvP, whose entire stack is on GitHub, or Classic Forever, which publishes a build log and a SHA-256 for its launcher.

None of that makes Peloria malicious. It means the answer to "what exactly am I running" is not available, and the download is a judgement call you have to make yourself. We did not run the launcher.

## The engineering, which is the actual story

The interesting part is not that the numbers are large. It is that four separate systems had to be unpicked for the removal to be real rather than cosmetic.

**Character stats read their true value.** Strength, Spell Power and Attack Power on your sheet go past two billion and into the trillions, rather than saturating or wrapping.

**Combat numbers are unclamped.** Hits, crits and heals show their true size in the combat log and in floating combat text. A lot of custom-core work claims a bigger ceiling while quietly clamping the display, which makes the fiction and the log disagree.

**Health stays meaningful.** Boss and player bars hold values in the tens of billions, with effective health going beyond what a single field can carry. Health that wraps to a small negative-looking number is the classic symptom of a core that only changed the stat math and not the bar math.

**Gold is uncapped.** Peloria states over 2 million gold on hand, past the old 214,748 coin cap, and ships an Uncapped Gold Vault for storing and trading it.

The demonstration numbers on the site are the clearest way to see that all four are real: **a 2.7 Quad damage hit landing on Deadmines enemies holding 7.44 quadrillion health.** That is a 2.7-sextillion-scale encounter on a Wrath client. If the stat math were cosmetic, that enemy could not have a health pool that size and stay coherent.

## Three cross-class pools, five each

Every class spec gets a toggleable **Perk**: a package of custom, spec-defining abilities.

On top of that there are three pools that every class shares, each with up to five active at once:

- **Offensive powers**, cross-class toggles sharing one pool
- **Defensive powers**, damage reduction and survivability, sharing their own pool
- **Utility powers**, movement, crowd control, sustain and threat, a third pool of five

The design consequence is that your bar is a build, not a class. Five of each means a level of loadout variety that a talent tree cannot express, and the pools are separate so you cannot spend your whole budget on one axis. It is a cleaner answer to build variety than talents, and a very different one.

## Mythic to +100,000, and 90 million items to chase

**Set your Mythic level as high as +100,000, and it locks in.** That is a hundred thousand distinct difficulty tiers.

When you lock a level, **everything rescales to level 80 with continuous half-step enemy scaling**, including trash, and drops arrive as wearable WotLK-tier gear whose item level scales with your Mythic level. So the ceiling is a real progression axis rather than a number that inflates.

The collection layer is where this stops being sensible in a good way. **Over 90,000,000 distinct soulbindable items.** Every item in every dungeon and raid can drop at every Mythic level from +1 to +100,000, and the game treats each tier of an item as its own separate collectible. Soulbind items keep their power account-wide and scale up as you progress them, and soulbind progression is the account-level long tail.

There is no version of this that is not a number. The question worth asking is whether you want a chase with no endpoint, and Peloria is openly that.

## Quality of life that is genuinely good

A long list, and most of it is the kind of thing that only matters if you play a lot:

- **Solo Dungeon Finder** queues any five-man dungeon solo, any role, and teleports you in
- **Cross-faction play** for grouping, friends and a shared world
- **One shared neutral auction house with zero fees**
- **Account-wide transmog** with saved sets per spec
- **Account Reagent Bank** that auto-deposits and crafts straight from storage
- **Account-wide loot filter** with auto-sell and auto-disenchant, plus vacuum looting on the move
- **Global combo points** that persist across targets and follow your focus
- **Two-hour buffs**, so you can actually play with them
- Starter mount, all weapon skills, boosted quest drops, shared party loot

Global combo points deserve a second look, because it is the one that changes how the class plays rather than how the log looks. In Wrath, combo points evaporate when your target dies or you switch, so rogues and feral druids play around a mechanic that does not exist in the game fiction. Persisting them across targets is a genuine design improvement, not a convenience.

## Setup, including one trap worth knowing

You need any clean 3.3.5a install, build 12340. The launcher goes next to `Wow.exe`, beside the `Data` folder, and you run it every time you play.

Then the realmlist is one line in `Data\enUS\realmlist.wtf`:

```
set realmlist wow-peloria.com
```

The trap: **if your client has ever connected to another realm, that is not enough.** You also have to open `WTF\Config.wtf` and make sure `SET realmList` points at Peloria. The reason given is that `Config.wtf` is the file the game actually reads once it exists, so a leftover value in it will quietly send you to the old server instead. That failure mode is silent, which is the worst kind, and it is worth checking before you assume a network problem.

## Who it suits

**Good fit:** players who enjoy extreme scaling as a subject rather than as a grind. Anyone who wants to see a 3.3.5a client pushed somewhere it was never meant to go. Solo players, since the Solo Dungeon Finder and cross-faction world are first-class. People who have run out of things to do in Wrath and want a chase that does not end.

**Poor fit:** if you want a blizzlike Wrath experience, this is the opposite of that and does not pretend otherwise. If you need to know what the launcher does before you run it, you cannot find out, and that is a real limit. If you are playing on a machine that is not Windows, the download is Windows-only as stated.

## The judgement

Peloria is the most technically interesting server on our tracker, and it is the one where the security question is least answerable. Both of those are true at once and they are the whole assessment.

The 32-bit work is real, the four systems that had to change are exactly the four you would expect a careless project to miss, and the demonstration numbers are specific enough to be a claim rather than a vibe. What is missing is any way to check the thing you install. If you are comfortable with an unsigned, self-updating patcher on the strength of the project's own word, that is a defensible position for a realm in active development. It is not a verified one, and we will not describe it as verified.

SOURCES: Peloria's own homepage, download and getting-started sections, all first-party, read September 27, 2026. The launcher was not downloaded or executed. Project status, population and the caveat that nothing is final are the project's own statements. Related: [how we review a private server](/blog/how-we-review-a-private-server/) sets out the standard applied here, and [19PvP's guide](/blog/19pvp-level-19-twink-realm/) covers the opposite posture, a realm whose entire stack is auditable.
