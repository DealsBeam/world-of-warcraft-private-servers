---
title: "Blizzard is hiding realm IDs from Forever addons, ending targeted layer swapping"
date: 2026-11-22
category: news
game: wow
summary: "Blizzard engineer Daniel Yates posted addon API changes in the WoWUIDev Discord: realm names and IDs now return empty values in Forever, and realm IDs in GUIDs are obfuscated. Layer Swap can still move you to another layer but can no longer tell you which one. The changes arrived with build 1.60.1.71037."
---

Blizzard has changed what Forever addons can see about layers. The notes were posted to the **WoWUIDev Discord** by Senior Software Engineer **Daniel Yates**, also known as Meorawr, and were relayed with links to the original messages by [Wowhead](https://www.wowhead.com/forever/news/layer-swap-and-other-targeted-layering-addons-will-be-disabled-soon-in-wow-383943) and [Warcraft Tavern](https://www.warcrafttavern.com/forever/news/layer-hopping-functionality-will-be-reduced-for-addons-in-wow-forever/).

We are publishing this as a report of those notes rather than as a Blizzard news post, because the original source is a developer message to addon authors, not a public article.

## What the notes say

Two related changes were described:

**For the Midnight 12.1.7 PTR:**

> The realm ID in creature, vehicle, pet and game object GUIDs is now obfuscated along with the server ID and spawn ID.

The note adds that this will also apply to Forever in an upcoming 1.60.1 hotfix.

**For Forever 1.60.1 specifically:**

> APIs that return realm names or IDs now instead return an empty string or zero in-place of those values.
>
> This includes - but is not limited to - `GetRealmName`, `GetRealmID`, and `C_BattleNet` APIs whose game account returns would include realm information.
>
> This change only applies to WoW Forever.

Wowhead reported on November 20 that the change was already live in the client, and a community post in r/wowaddons reported `GetRealmName()` returning an empty string after the build 71037 patch. We have not run that test ourselves, so treat the live behaviour as reported by those sources.

## What it breaks, and what still works

**Layer Swap** is the addon most affected. It read creature GUIDs to work out which layer a player was on, then let the player request a specific destination. With realm IDs hidden in GUIDs, it can no longer compare layers or name a target.

The addon's developer has already updated it. According to Duskforge's report, you can still request a swap with one click, but the list of available layers and the option to target one are gone.

Layer hopping itself is **not** removed. You can still change layers by joining a group with someone on a different one. What is lost is the ability to know in advance where an invite will take you. For a player trying to escape a crowded area or a PvP camper, that means repeated random swaps rather than a chosen destination.

## Why this is bigger than one addon

The notes also mention that the GUID obfuscation is a Midnight change coming to Forever, and that community and guild invite links with disguised text will be rejected in a future patch. The direction is consistent: Blizzard is closing the data paths addons used to identify players and layers across the modern API, and Forever shares that API.

Our [addon guide](/blog/forever-addons-nov-19/) was published on November 19 and predates this change. It carries a dated note now.

## What we are not claiming

We have not read the Discord messages directly, tested `GetRealmName()` in the live client, or confirmed the exact build in which the change landed. The two relaying sites quote the notes and link to the original messages, and the build number comes from a community test post. We are reporting that chain with its grades intact.

SOURCES: Blizzard engineer Daniel Yates's addon API notes in the WoWUIDev Discord, relayed with direct message links by Wowhead (November 20 2026) and Warcraft Tavern (November 20 2026), both read November 22 2026; Duskforge's report on Layer Swap, published November 21 2026; a community test post in r/wowaddons reporting `GetRealmName()` behaviour after build 71037. Related: [our addon guide](/blog/forever-addons-nov-19/), [the November 20 hotfix brief](/news/forever-hotfixes-nov-20/) and [the Forever hub](/forever/).
