---
title: "WoW Forever beta build guide: class tuning, Campfire QoL, and what to test next"
date: 2026-09-25
updated: 2026-09-26
category: guides
game: wow
summary: "A practical read of Blizzard's September 24 beta notes: stability fixes, class-by-class tuning with exact values, racial and wizarding-item changes, limited Cooldown Manager support, gamepad improvements, and known issues."
---

Blizzard's September 24 development notes are unusually large for an early beta build. They mix bug fixes with class tuning and new interface experiments, so the useful question is not just what changed. It is what a player should retest now.

This guide reflects the current beta. Values and feature coverage can change before launch.

## The short version

- A memory leak causing gradual performance degradation is now listed as fixed.
- Campfire waiting is less restrictive: players can buff, cast, and craft while waiting for the buff, and can take the buff while sitting or sleeping.
- A limited Cooldown Manager is available for five classes, disabled by default.
- Gamepad support gains class flyouts, party-targeting controls, and a Compact Action Bar.
- Three racials changed: Eureka! is a flat 10 percent resource discount, Cultivation gained a character-level gate, and Touch of the Grave no longer breaks crowd control.
- Two caster item rules moved: Wizard Oils reverted to Classic Era values and wands no longer scale with spell damage.
- Class values are moving quickly. Treat every number below as beta data, not launch balance.
- New known issues remain, especially around party composition, pet cooldowns, item enhancements, and the Stormwind minimap. The shortened auto-shot cast is confirmed but not fixed.

## Stability fixes to verify first

Performance deserves the first test slot. Earlier beta reports described frame-rate decay over roughly an hour. Blizzard's new notes now explicitly list a memory-leak fix, so compare a clean session against the same route and time period that produced the old report. Do not treat one smooth test as proof that every hardware configuration is fixed.

Mac players should also retest water rendering and other display artifacts. The same notes fix caster pre-cast animations, Campfire interruptions, mail handling for surnames, incorrect quest reward item levels, and several ammunition and weapon issues. These are small fixes individually, but together they affect the first hour of a new character more than a late-game unlock would.

## Class changes worth testing

### Druid

Wrath base damage is listed as roughly 50 percent higher. Rejuvenation, Tranquility, and Wild Growth can now land critical hits, Thorns now scales with the caster's spell power and reverts to base values if the caster is out of range, and Feral Charge (Cat) can no longer be cast on allies. Feral players should note the Mangle to Primal Bite rename, the removal of the old signature debuff that justified the name, and Primal Fury reverting to the Blood Frenzy name and icon.

### Hunter

Furious Howl's Attack Power bonus is reduced by 40 percent. Lone Wolf no longer applies a negative damage effect while a pet is active after a recent talent change, Bat pets regain Sonic Blast, and Tame Beast no longer works on higher-level Beasts. Lacerating Strikes can now crit, and Strider Kick is listed as 30 percent movement speed for 3 seconds.

### Mage

Arcane Missiles checks line of sight once at the start of the channel instead of on every missile, so a target leaving line of sight mid-channel no longer stops the missiles. Wake of Fire lasts 30 seconds instead of 20, Hot Streak lasts 20 seconds instead of 15, and Ignite no longer double-dips on percentage damage modifiers. The Wake of Fire change is explicitly a leveling fix, not a damage buff.

### Paladin

Holy Strike's weapon damage per rank is listed as 25/29/32/36/39/43/46/50 percent, up from 25/25/30/30/35/35/40/40, so every rank is now an upgrade. Its Holy cooldown drops to 10 seconds from 12 and Improved Holy Strike is removed outright, with Blizzard's stated reason being that shortening a core ability's cooldown that early in a healing tree felt mandatory. Holy Power now adds 15 percent critical strike chance to Holy Strike, and Righteous Fury's Holy threat increase is listed as 60 percent instead of 90 percent.

Retribution gets Vengeance on non-periodic critical strikes with stacks capped at 3 instead of 5, Two-Handed Weapon Specialization reduced to 2/4/6 percent from 3/6/9 percent, Sacred Arbiter at 20 percent instead of 10 percent, and Twist of Light cutting Seal mana cost by 20 percent. Retribution Aura scales with spell power, Echo of Justice no longer procs too often, and several Consecration bugs are fixed, including pulls from directly above or below the caster.

### Priest, Rogue, Warlock and Shaman

Renew and Gnome Contingency Plan can now crit, and Power Word: Shield can always overwrite an existing shield on a target without Weakened Soul. Sap now correctly flags the Rogue for PvP when used on a flagged target. The Life Tap tooltip now states that it scales with Spirit, and Voidwalker Sacrifice correctly scales with 10 percent of the Warlock's spell healing.

Shaman gets the most rules cleanup. Flametongue Totem no longer has a duration, is replaced the moment another totem is placed, and no longer stacks with itself, with Flametongue Weapon, or with Windfury Totem. Tranquil Air, Windfury and Grace of Air no longer stack together even across different Shamans. Lightning Bolt ranks 3 and 4 were buffed so each rank stays an upgrade, Lava Burst ranks 1 and 2 gain about 10 percent base damage, Rage of the Far Seer no longer grants spell casting speed, and Riptide can now crit.

### Warrior

Bloodthrill's activation chance rises to 4/8/12/16/20 percent from 2/4/6/8/10 percent but only triggers off main-hand attacks, which the notes spell out as including Cleave and Heroic Strike. That makes it a main-hand mechanic rather than a general proc, which changes how it interacts with off-hand builds. Slam's cooldown rises to 18 seconds from 15, Improved Slam now cuts it by 1.5 or 3 seconds, and Sunder Armor threat values are corrected with a small Attack Power contribution added. Protection swaps Bastion and Focused Rage so Focused Rage lands sooner while leveling.

### Talent row swaps, and one file-only read

The notes confirm two row swaps: Elemental Fury and Elemental Alacrity exchange rows 3 and 6 so Elemental gets a progression milestone earlier, and Protection's Bastion and Focused Rage exchange rows 5 and 6. Both come with Blizzard explanations about early-level pacing.

One claim is not in the notes. Community talent trackers report that Crusade is missing from the Retribution tree in this build, and that the build's own talent tables still show Bastion and Focused Rage in their pre-swap rows. Treat both as client-file reads until an in-game tooltip or a notes line confirms them.

## Racial and item changes worth retesting

Three racial values changed and two caster item rules moved:

- **Gnome Eureka!** is now a flat 10 percent discount on Mana, Rage or Energy abilities for every class, replacing an earlier class-scaled read. Any damage or cost test written before this build needs rerunning.
- **Tauren Cultivation** now gates each herb behind a character level equal to one fifth of that herb's Herbalism requirement, with herbs above 300 Herbalism unlocking at level 60. This is a real leveling-pacing change for gatherers.
- **Undead Touch of the Grave** no longer breaks crowd control and no longer procs from abilities with no damage component, so Distract, Pick Pocket and Polymorph cannot trigger it. This closes a stealth-pull and CC interaction that mattered to Hardcore-adjacent play.
- **Wizard Oils** revert to Classic Era values: Minor 8 spell power, Lesser 16, Wizard 24, with Brilliant Wizard Oil unchanged.
- **Wands** no longer gain any additional damage from the user's spell damage, so wand damage is now a plain weapon roll instead of scaling with caster stats.

Item-side fixes also cover guns and bows that were not consuming ammunition correctly, several quest rewards moved to the correct item level, and adjustments to a small number of early caster rewards.

## Quest and world changes

Dungeon quests are no longer shareable, closing a loophole where a shared quest handed the receiving player a free quest item. Quest fixes span eleven zones, including faster respawns in Elwynn Forest, Silverpine Forest and Westfall, a rebalanced Gnarlpine Furbolg objective count in Teldrassil, and a redesigned High Order quest on Zephras Isle. Two Elwynn mines had their candles removed because they were "a little more deadly than intended for solo players." Khonsu's Silithus arrival is pulled from the beta phase and will return to Azeroth later.

## A known bug that is not fixed here

The notes do not fix the shortened cast before a Hunter auto-shot or wand use, which Kaivax [confirmed on September 23](/news/forever-beta-auto-shot-bug-sep-23/). While it is live, treat missing auto-attack uptime in beta numbers as a known deviation, not a class buff.

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
4. Re-measure Gnome resource costs and Tauren herb availability before trusting pre-build numbers.
5. Compare wand and Wizard Oil damage against a pre-build baseline, since both rules changed.
6. Enable the Cooldown Manager and record missing ranks, pet cooldowns, and item effects.
7. Try a gamepad class flyout and Compact Action Bar in both normal and Edit Mode sessions.
8. Change party composition and note whether the client moves the character to another world instance.
9. Retest the Stormwind minimap and Personal Resource Display before filing duplicate reports.

## Still unresolved

The build notes do not announce a Server Slam date, a level-30 activation date, or a resolution to the Onyxia launch-date conflict. The Crusade removal reported by community talent trackers is a client-file read, not a notes line, so it stays reported. And none of this turns beta class values into launch guarantees. Keep those claims on the [Forever verification hit list](/news/forever-beta-verification-hit-list/) until Blizzard publishes clearer evidence.

SOURCES: [Kaivax's official September 24 development notes](https://us.forums.blizzard.com/en/wow/t/2360696), [Kaivax's confirmed auto-shot bug post](https://us.forums.blizzard.com/en/wow/t/auto-shoot-bug-and-fix-incoming/2359185), the [short news report](/news/forever-beta-development-notes-sep-25/), and Blizzard's [beta known-issues thread](https://us.forums.blizzard.com/en/wow/t/wow-forever-beta-known-issues-september-18/2352687).
