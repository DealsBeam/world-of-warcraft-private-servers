---
title: "Forever addons in November: what to check before you install one"
date: 2026-11-19
category: guides
game: wow
summary: "Forever runs a modern addon API, so Classic-era addons do not reliably work. A November check of the guide sites gives four practical tests before you trust an addon, plus the built-in tools worth trying first."
---

WoW Forever supports addons, but it runs a **modern addon API**, not the Classic one. Blizzard confirmed that at the September 17 Q&A, alongside its decision to block addons that effectively play the game for the player. The practical consequence is that an addon built for 1.12 or 3.3.5 will often load and then fail at the exact feature you installed it for.

This guide is based on first-party Blizzard statements plus a fan guide last updated November 8. We have not tested individual addons in the live game, so this is about how to check one, not a list of versions to install.

## Why a Classic addon can load and still be broken

Porting is not a version-number bump. The maintainer of one guild addon described moving profession calls to a namespaced trade-skill interface, changing how tooltip callbacks register, and handling restricted chat and unit-identity values. The classic example is a tooltip: the game shows the item correctly, but the addon's old way of adding extra lines no longer runs.

That is why "the addon opens" tells you very little. Test the feature.

## Four checks before you rely on an addon

| Check | What to look for |
|---|---|
| Package target | The release is made for Forever and supports the current client, 1.60.1 |
| Feature behavior | The specific quest, tooltip, profession or combat display you need actually works |
| Persistence | Your settings survive a normal logout and return |
| Isolation | The same behavior with other addons disabled |

Log out normally before checking persistence. A forced exit does not tell you whether SavedVariables were written. Export a profile or copy your SavedVariables before rebuilding a setup you care about.

When you report a bug, give the client build, the addon version, the exact action and the error text. "Opening this profession window gives this error" is actionable; "Forever broke my UI" is not.

## Try the built-in tools first

Blizzard ships several of the things Classic players used addons for:

- **Cooldown Manager** supports all classes, racial abilities and trinkets. It is off by default under Options, Gameplay Enhancement. Blizzard's October 8 notes planned consumable support for a later patch.
- **Combo points** appear on the target frame and the Personal Resource Display, so check those before blaming an addon.
- **Gamepad UI** lives in Edit Mode, which saves layouts separately for keyboard and gamepad. Blizzard's November 2 notes called gamepad support complete and said it now clashes with addons less often.
- **Discord Voice** is under Audio settings. The party leader's choice applies to the group, and Group Finder listings can set a voice mode.
- **View Talents** sits under Inspect in the target frame's menu. Quest types show as text, the tracker shows level requirements, and Character Info shows your level and class.

Add one addon at a time, use the feature you installed it for, then add the next. That makes conflicts obvious instead of cumulative.

## What we are not saying

We are not naming current addon versions. The fan guide's version checks date from October 7, and a version that was current then is not automatically current now. Check the author's page for the supported game version before installing. We also have not run these addons in the live game, so everything above is a testing method rather than a compatibility claim.

SOURCES: Blizzard's September 17 live Q&A, as recorded in [our Q&A brief](/news/forever-qna-answers-sep-17/), for the modern addon API and built-in tools; Blizzard's development notes of October 8 and November 2 for the Cooldown Manager and gamepad details; the Addons and modern API guide at classicwowforever.com, published September 22 and updated November 8, for the porting work and the four checks. Related: [the Forever addon census](/news/forever-addon-ecosystem-census/), [the guides index](/guides/) and [the Forever hub](/forever/).
