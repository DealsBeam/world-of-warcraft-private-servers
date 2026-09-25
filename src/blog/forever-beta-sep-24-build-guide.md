---
title: "WoW Forever beta build guide: class tuning, Campfire QoL, and what to test next"
date: 2026-09-25
category: guides
game: wow
summary: "A practical read of Blizzard's September 24 beta notes: stability fixes, class changes, limited Cooldown Manager support, gamepad improvements, and known issues."
---

Blizzard's September 24 development notes are unusually large for an early beta build. They mix bug fixes with class tuning and new interface experiments, so the useful question is not just what changed. It is what a player should retest now.

This guide reflects the current beta. Values and feature coverage can change before launch.

## The short version

- A memory leak causing gradual performance degradation is now listed as fixed.
- Campfire waiting is less restrictive: players can buff, cast, and craft while waiting for the buff.
- A limited Cooldown Manager is available for five classes, disabled by default.
- Gamepad support gains class flyouts, party-targeting controls, and a Compact Action Bar.
- Class values are moving quickly. Treat every number below as beta data, not launch balance.
- New known issues remain, especially around party composition, pet cooldowns, item enhancements, and the Stormwind minimap.

## Stability fixes to verify first

Performance deserves the first test slot. Earlier beta reports described frame-rate decay over roughly an hour. Blizzard's new notes now explicitly list a memory-leak fix, so compare a clean session against the same route and time period that produced the old report. Do not treat one smooth test as proof that every hardware configuration is fixed.

Mac players should also retest water rendering and other display artifacts. The same notes fix caster pre-cast animations, Campfire interruptions, mail handling for surnames, incorrect quest reward item levels, and several ammunition and weapon issues. These are small fixes individually, but together they affect the first hour of a new character more than a late-game unlock would.

## Class changes worth testing

### Druid

Wrath base damage is listed as roughly 50 percent higher. Rejuvenation, Tranquility, and Wild Growth can now land critical hits. Feral players should note the Mangle to Primal Bite rename and the removal of the old signature debuff.

### Hunter

Furious Howl's Attack Power bonus is reduced by 40 percent. Lone Wolf no longer applies a negative damage effect while a pet is active after a recent talent change. Bat pets regain Sonic Blast, and Tame Beast no longer works on higher-level Beasts.

### Mage

Arcane Missiles checks line of sight once at the start of the channel instead of on every missile. Wake of Fire lasts 30 seconds instead of 20, and Hot Streak lasts 20 seconds instead of 15. Ignite no longer double-dips on percentage damage modifiers.

### Paladin

Holy Strike's rank values now rise more smoothly, its Holy cooldown is 10 seconds instead of 12, and the old Improved Holy Strike talent is removed because its behavior is now baseline. Righteous Fury's Holy threat increase is listed as 60 percent instead of 90 percent. Retribution also receives Vengeance, Two-Handed Weapon Specialization, and Sacred Arbiter changes.

### Shaman and Warrior

Shaman Lightning Bolt and Lava Burst receive early-rank changes, while Flametongue Totem changes stacking and duration behavior. Warrior Bloodthrill becomes more likely to activate, Slam's cooldown rises to 18 seconds, and Protection moves Bastion and Focused Rage to different rows.

These changes are not a verdict on class balance. They are a reason to rerun a repeatable test: same level, same target dummy or dummy mob, same talent tree, and same rank. A single beta session cannot separate class changes from gear, consumables, or group composition.

## Cooldown Manager: useful, but partial

The new Cooldown Manager is available for Druid, Mage, Priest, Warrior, and Warlock. It is disabled by default under Gameplay Enhancement and is intended to pull buff or action-bar information into a customizable display.

Current limits matter:

- Spell ranks are not supported yet.
- Pet cooldowns cannot be tracked.
- Item enhancements such as Windfury or Rogue poisons cannot be tracked.
- Healthstone cooldown tracking is listed as a known issue.
- Arcane Blast and Priest spell tracking also have known issues.

For addon users, this is a testable alternative rather than a replacement decision. Check whether the built-in display covers the information you currently rely on before changing your whole UI.

## Gamepad changes

The build adds class-specific action-bar flyouts for Druids, Hunters, Warlocks, Paladins, and Warriors. It also adds Compact Action Bar, explicit party-targeting assignments, revised targeting modifier sides, updated map and quest-log bindings, and hover behavior for point-of-interest pins.

These are meaningful improvements for controller-first players, but the section remains labeled alpha in the beta notes. Test in a clean profile and in Edit Mode, where the notes say a separate layout-application issue was fixed.

## A short test plan

1. Start a fresh character and record baseline frame behavior at fixed points in the world.
2. Run the same Campfire sequence while sitting, crafting, casting, and receiving a buff.
3. Test each changed class spell at consecutive ranks, not only at maximum level.
4. Enable the Cooldown Manager and record missing ranks, pet cooldowns, and item effects.
5. Try a gamepad class flyout and Compact Action Bar in both normal and Edit Mode sessions.
6. Change party composition and note whether the client moves the character to another world instance.
7. Retest the Stormwind minimap and Personal Resource Display before filing duplicate reports.

## Still unresolved

The build notes do not announce a Server Slam date, a level-30 activation date, or a resolution to the Onyxia launch-date conflict. They also do not turn beta class values into launch guarantees. Keep those claims on the [Forever verification hit list](/news/forever-beta-verification-hit-list/) until Blizzard publishes clearer evidence.

SOURCES: [Kaivax's official September 24 development notes](https://us.forums.blizzard.com/en/wow/t/2360696), [the short news report](/news/forever-beta-development-notes-sep-25/), and Blizzard's [beta known-issues discussion](https://us.forums.blizzard.com/en/wow/t/2360696).
