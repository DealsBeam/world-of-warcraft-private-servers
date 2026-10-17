---
title: "Conquest of Azeroth: which one? Five projects, one name"
date: 2026-10-17
category: reference
summary: "Conquest of Azeroth, Conquest of AzerothCore, Conquest Reborn, GrimfallWoW's new phase and ArdenWoW all trade on the same idea and a near-identical class count. Here is every project, what it is, and how to tell them apart before you download anything."
---

**Conquest of Azeroth** is the most overloaded name in the private server scene right now. A reader searching it can land on a dead realm, a live bug-test realm, a closed-testing realm, a brand new phase of an unrelated server, or a project that never uses the name at all but ships the same class list. This page is the map, and every entry on [the tracker](/) now states which one it is.

## The five, side by side

| Project | What it is | Status | Class count |
| --- | --- | --- | --- |
| **Conquest of Azeroth** | The Ascension network realm. Shut down 4 September 2026 after a Blizzard cease-and-desist. | `dead` | 21, each with 3 specs |
| **Conquest of AzerothCore** | Open-source continuation on the AzerothCore core. Public bug test realm, not a live server. | `dev`, online | 22 |
| **Conquest Reborn** | Independent, non-commercial WotLK realm with its own roster and a Forging node system. | `dev`, closed testing | Not published as a count |
| **GrimfallWoW: Conquest of Azeroth** | Phase 1 of a new product line on an existing Classless server, cap 20, opened 16 October 2026. | `playable` | 21 |
| **ArdenWoW** | Independent custom realm inspired by Ascension and Conquest of Azeroth. Uses a different name, not this one. | `dev`, closed alpha | 21 |

Five projects, four of them live or in testing, none of which we can show are affiliated with each other.

## What each one actually is

- **[Conquest of Azeroth](/servers/conquest-of-azeroth/)** was Ascension's custom-class realm and part of the wider Ascension network that went dark on 4 September 2026 after a Blizzard C&D. It is the one people mean when they say "the Conquest that died". Our [2026 shutdown roundup](/blog/private-servers-shut-down-2026/) has the network-level story.
- **[Conquest of AzerothCore](/servers/conquest-of-azerothcore/)** is a separate open-source build on the AzerothCore emulator. Its own about page says it exists to find bugs, that progress can be wiped without notice, and that it is not a permanent or live server. It publishes a live player feed and a changelog written automatically from development commits. As of 17 October 2026 it had opened **Manastorm Endless**, an endless dungeon mode, and its changelog page was organising entries by realm kind, listing 1,026 for the Conquest realm against 47 Wildcard, 28 Warcraft Reborn, 14 Freepick and 37 Hero.
- **[Conquest Reborn](/servers/conquest-reborn/)** is the most candid of the group. Its own text is "a free, non-commercial fan realm" and "run by the handful of people who play on it", plus an unusually direct warning to ask on Discord what works before installing. Its **Forging** system replaces talent tabs with a node web, and it is in closed testing.
- **[GrimfallWoW's Conquest of Azeroth](/servers/grimfallwow/)** is not a separate server but a second product line from an existing Classless realm that released 5 September 2026. Phase 1 went live 16 October 2026 with a level 20 cap, 21 new classes, more than 10 new races, scaled Heroic and Mythic dungeons and adapted Cataclysm dungeons. Details are in [today's news post](/news/grimfall-conquest-of-azeroth-phase-1/).
- **[ArdenWoW](/servers/ardenwow/)** does not use the Conquest name. It says it is "inspired by Ascension WoW and Conquest of Azeroth" and lists **21 custom classes**, and it is in closed alpha with applications open.

## The uncomfortable overlap

Here is the part we are careful about. Four separate projects publish a custom class count of 21 or 22, and the named examples recur: the **Necromancer, Chronomancer and Runemaster** appear in GrimfallWoW's Phase 1 announcement, and ArdenWoW's full roster of 21 class names includes all three alongside the same archetypes.

That is a pattern, not proof. Things we can say:

- **We have not verified any shared code, staff, or license.** The projects have separate domains, separate realmlists, separate clients and separate teams as far as any of them state.
- **A shared design space is expected here.** After a high-profile shutdown, the idea of "custom classes on a Wrath client" does not disappear; it gets rebuilt by whoever was already working on it. Our [Ascension shutdown explainer](/blog/ascension-shutdown-explained/) and the [preservation stack piece](/blog/ascension-after-shutdown-preservation-stack/) cover what happened to that ecosystem.
- **A class count is not an identity.** Two projects can both ship 21 classes and share nothing. Verification would mean comparing code, and none of these publish enough to do that from outside.

If any project publishes a statement about lineage, we will record it, dated, in its entry.

## How to tell them apart before you download

1. **Check the domain in the realmlist**, not the name on the banner. Each of these has a different one.
2. **Check the client version.** GrimfallWoW and Conquest Reborn run 3.3.5a. Conquest of AzerothCore publishes its own launcher.
3. **Check the cap.** GrimfallWoW's Phase 1 caps at 20 by design. That is the fastest way to know which product you are looking at.
4. **Check whether progress is permanent.** Conquest of AzerothCore says outright that it can be wiped. That is a test realm, not somewhere to invest a character.
5. **Check the count.** 22 classes points at AzerothCore. 21 points at several others, so treat it as a hint rather than a label.

If you only want the short version: **the one that died was Ascension's, the one that wipes is AzerothCore, the one with a level 20 cap is GrimfallWoW's, and the one that tells you to ask on Discord first is Reborn.**

Related: [three servers called Conquest](/news/conquest-reborn-joins-three-conquest-names/), [GrimfallWoW Phase 1](/news/grimfall-conquest-of-azeroth-phase-1/), [how we review a server](/blog/how-we-review-a-private-server/), and [our correction policy](/blog/tracker-correction-policy-explained/).
