---
title: "Forever beta day one: Blizzard's known-issues list — pets, spells, Waylaid crates and UI bugs"
date: 2026-09-17
game: wow
description: "The WoW Forever beta is live after a brief delay, and Blizzard's Kaivax posted the first official known-issues list: Hunter/Warlock pet display bugs, Waylaid crate problems, glancing-blow math, and a cluster of LUA and UI errors — several already fixed for the next build."
tags: [wow, blizzcon-2026, classic-plus, beta]
---

September 17, 2026 — the **WoW Forever beta is live**. Servers opened after the Q&A segment, following a "brief delay in getting players into the servers," and Blizzard's **Kaivax** posted the first official known-issues list the same day — [recapped in full by Warcraft Tavern's Luxrah](https://www.warcrafttavern.com/forever/news/known-issues-for-the-wow-forever-beta-pets-spells-waylaid-crates/), with Icy Veins' Starym posting the same list [independently](https://www.icy-veins.com/wow-forever/news/wow-forever-beta-known-issues-list-september-17th/). The day-one friction itself was visible up front: the majority of players hit a **"Login Servers are Full" message** on the login screen while Blizzard said it was resolving final issues, and real-time comments from leading Classic devs implied the surge was simply demand ([Icy Veins, Tharid](https://www.icy-veins.com/wow-forever/news/wow-forever-beta-faces-launch-issues-blizzard-is-working-on-it/)). Behind that, the list is largely a playability pass: pet and spell-stat display bugs for Hunters and Warlocks, Waylaid crate quirks, and a cluster of UI errors. Several items are already marked "fixed in the next Beta build."

## Pets and pet stats

Warlock pets don't display Mana as a resource on the character sheet and don't mention the scaling from their master; Health-from-Stamina scaling for Warlock pets is wrong; pet hit chance for **both Hunters and Warlocks** doesn't show the master's scaling coefficient; pet Expertise isn't displayed; and pet Movement Speed values are wrong on the sheet. All are flagged "work in progress."

## Combat math

**Glancing Blow** chance for casters is incorrect at all levels, and its damage reduction is also incorrect. For melee, the chance is right at all levels and the equal-level penalty is right, but the **damage-reduction penalty against higher-level targets** is wrong. Because of that, the glancing-blow chances shown on the character sheet aren't accurate — all "work in progress."

## Waylaid crates, spells and quests

**Waylaid Crates** fail on items whose max stack size is smaller than the required quantity, and the **Apprentice Curiosities** crate wrongly rejects Greater Magic Essence while accepting Lesser Magic Essence — both "fixed in the next Beta build," alongside: Night Elf Priest **Starshards** not benefiting from the Twilight Focus talent, Retribution's **Vengeance** triggering off periodic critical strikes, **Holy Strike** ranking-up feel, **Create Firestone** ranks 3-4 tooltips, and **Coldridge Valley** not revealing on the map — Icy's copy of the list adds that this map-reveal issue "may affect multiple areas within the world (unconfirmed; QA test task going in for new maps)." During the Teldrassil quest "Escaping Ban'ethil," Sentinel Lynessa Duskblossom also runs too fast and spams Strike (also fixed next build).

## UI and the rest

Barber chairs throw a LUA error; **character friends are disabled** in beta; the *minimap can render partially off-screen*; the character pane doesn't show Level, Class or Titles yet; opening the **Legacy System** (hotkey "Y") before level 25 causes LUA errors on tabs 1 and 3; and while guild-charter signing is bugged, Blizzard has temporarily made it possible to hand in a charter with no signatures.

## September 18 additions

Kaivax updated the list next day with five new items ([Icy Veins, Starym](https://www.icy-veins.com/wow-forever/news/wow-forever-beta-known-issues-list-september-18th/)): the **Cooldown Manager** is unfinished with implementation varying class to class; **Bear Form** multiplies armor bonuses from consumables and buffs; queueing an on-next-attack ability (Heroic Strike, Cleave, Raptor Strike) disables the spell queue window; taking damage while channeling **Arcane Missiles** fires a full-damage bolt instead of truncated damage; and **resurrection sickness** duration is wrong at lower levels.

## Why launch day buckled

Separately, senior game producer Tom Ellis posted a technical postmortem ([Icy Veins, Tharid](https://www.icy-veins.com/wow-forever/news/what-went-wrong-with-wow-forevers-beta-launch-blizzard-explains-it/)): the login queues and disconnects came from bottlenecks in monitoring, database management and virtual-resource downscaling, not raw player count alone. Rare on-record infra detail; worth keeping next to the demand narrative.

## Where to track it

Kaivax says the list "will be updated as issues are resolved and/or added to this list." Surrounding beta framing stays as [covered at go-live](/news/forever-beta-live-sep-17/): level 20 cap rising to 30, launch wipe, nothing carries over. What this resolves and what it doesn't is tracked on the [verification hit list](/news/forever-beta-verification-hit-list/) and the [hub](/classic-plus/).