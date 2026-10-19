---
title: "We checked every vanilla-family server on our tracker for the client it actually requires"
date: 2026-10-19
category: analysis
summary: "43 entries carry a Vanilla or Vanilla+ tag. About half state a client version on the pages we could read, and of those, one in five names a 3.3.5a Wrath client. Here is the full result, server by server."
---

After we got a tag wrong this week, we did the obvious thing and checked the rest. If the Vanilla+ label describes the content while the required client is a separate fact, then the only way to know how many of our own entries have that gap is to read every one of them.

So we probed all **43 entries tagged `Vanilla` or `Vanilla+`** that have a live URL. For each we fetched the homepage and the common setup paths (`/downloads`, `/download`, `/how-to-connect`, `/connect`, `/client`, `/get-started`, `/install`, `/faq`, `/about`, `/news`), stripped scripts and styles, and searched the visible text for a client version.

**What this method can and cannot do.** It finds a version when a project writes one down in its page HTML. It reads **nothing** from a project that renders its pages with JavaScript, which is why a quarter of the entries below returned no version at all even where one is likely to exist somewhere. Where we found no version, we recorded **no version**. We did not guess, and we did not download anybody's client.

## The finding: a Wrath client behind a vanilla label

Four vanilla-family entries name a **3.3.5a** client. That is about one in five of the entries that state a client at all.

| Server | Tag | What its own pages say |
|---|---|---|
| [Project Epoch: Reborn](/servers/project-epoch-reborn/) | Vanilla+ | "You need your own **3.3.5a (build 12340)** client" |
| [Frontier](/servers/frontier/) | Vanilla+ | Headline reads **"Vanilla+ on 3.3.5a client"** |
| [Centurion](/servers/centurion/) | Vanilla+ | **Vanilla 1.12 mechanics on a 3.3.5 client** |
| [Conquest of AzerothCore](/servers/conquest-of-azerothcore/) | Vanilla+ | Runs the **AzerothCore** core, which is 3.3.5a |

Project Epoch: Reborn is the cleanest example, because it says both halves in one breath: it is "a custom Classic+ MMORPG" and it runs "on the 3.3.5a client". Frontier is the most honest, because it puts the divergence in its own headline rather than hiding it. Both are vanilla-plus worlds. Both will ask you to install a Wrath client.

## The other half: 1.12.1, and one project that will not budge

Most of the entries that state a client state the original one.

| Server | Tag | Client |
|---|---|---|
| [Evergreen HC](/servers/evergreen-hc/) | Vanilla | Your own unmodified **1.12.1**, no launcher, no patches |
| [Elderhide](/servers/elderhide/) | Vanilla | 1.12.1 |
| [Project Legacy](/servers/project-legacy/) | Vanilla+ | 1.12 |
| [NycterMoon](/servers/nyctermoon/) | Vanilla | 1.12.1 |
| [BasedWoW](/servers/basedwow/) | Vanilla | 1.12.1 |
| [Anachronos](/servers/anachronos/) | Vanilla | 1.12.1 |
| [Origins WoW Asia](/servers/origins-wow-asia/) | Vanilla | 1.12.1 |
| [Emberveil](/servers/emberveil/) | Vanilla | 1.12.1 |
| [SandWorlds](/servers/sandworlds/) | Vanilla | 1.12.1 |
| [Stonetavern](/servers/stonetavern/) | Vanilla | 1.12.1 |
| [Ashen WoW](/servers/ashen-wow/) | Vanilla | 1.12 |

If you want the vanilla client specifically, this is the list to shop from.

## The newer-vanilla group is real too

Three entries name **both** 1.12 and 1.14, which means the modern Classic Era client is now a normal option on the vanilla side rather than an experiment.

| Server | Tag | Clients named |
|---|---|---|
| [Kronos V](/servers/kronos-v/) | Vanilla | 1.12 and 1.14 |
| [SoloCraft](/servers/solocraft/) | Vanilla | 1.12.1 and 1.14 |
| [Luminary](/servers/luminary/) | Vanilla | 1.12 and 1.14 |

[RavenCraft](/servers/ravencraft/) is the one actively migrating: it is moving from its Turtle lineage to a 1.14 client ([full story](/news/ravencraft-1-14-client-move-oct-19/)), and our probe of its site still returns the old client metadata because the switch has not landed.

## The silence is the other story

The largest single group is the entries that **state no client version anywhere on the pages a plain HTTP fetch can read**. In rough order of how confidently we would still expect one to exist:

Octo WoW, Duskhaven, WallCraft, Keldurn, Valanior, Season of the Crusade, Elysium Project, Felskorn, WOW Hardcore, TuWoW, Elwynn Server, Azeroth Idle, ComfyCraft, Greyhaven, GryffinWow, Capybara WoW, Capybara Paradise, Incursion-WoW, LunaticPTR, RetroWoW, Vanilla Plus, Ravencraft.

For some of these we already know the client from earlier first-party reads (Ravencraft is 1.18.1 today, LunaticPTR and Vanilla Plus are long-running 1.12 projects). For others, a JavaScript-rendered site simply hides the answer from this method, and the honest result is **unknown**, not "probably fine".

## Why vanilla projects ship a Wrath client

This is not a scam and it is not even surprising once you know the tooling. The **3.3.5 core and client are the most-maintained, best-documented base** in the open emulation stack ([AzerothCore](/blog/wow-emulator-cores-explained/) and TrinityCore both carry it actively), and the 3.3.5 client is the one modders have the most tooling for. A team that wants to build new zones, classes and systems will often build them where the tools are, then call the result Classic+ because of what the world feels like.

The label describes the design. The client describes the plumbing. The problem is that listings, top lists and even our own tags have historically shown you only the first one.

## What to do with this

Two rules, and they are the same rules we now apply to ourselves:

1. **The tag answers "what is the world like".** It is a content label. Frontier is Vanilla+ because of its world, not because of its client.
2. **The client answers "what do I install".** Read it from the project's own setup and download pages before you commit disk space. Our [60 second check](/blog/classic-plus-is-not-a-client-version-oct-19/) covers where to look.

If a project will not tell you, that silence is worth weighing. Every project in the first table above told us plainly, and that is the behaviour worth rewarding.

## Scope and honesty

This is a snapshot of **43 entries on October 19 2026**. It is limited by the method: JavaScript-rendered sites return nothing, so the "no version stated" group is a limit of the probe as much as a fact about the projects. We recorded mentions, which are usually but not always requirements, and we verified the four 3.3.5a entries by reading the specific sentences quoted above. Where an entry needed a fix, the fix is dated inside that entry, not applied silently.
