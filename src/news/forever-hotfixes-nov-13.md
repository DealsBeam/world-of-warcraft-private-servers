---
title: "The November 13 hotfixes fix stun diminishing returns and make Command melee again"
date: 2026-11-16
category: news
game: wow
summary: "Blizzard's November 13 pass repairs creature-stun diminishing returns in both directions, stops Wild Growth from being cast while moving, raises its healing coefficient, makes Judgement of Command count as melee again, and adds a zero-XP rule for trivial dungeon enemies that Blizzard narrowed the next day."
---

Blizzard published its November 13 hotfix notes at **01:53 UTC on November 14**, under a November 13 heading. The pass covers classes, dungeons, open-world spawns, items, quests, fishing and the user interface. Two stun fixes and a Druid correction sit at the top, and the dungeon section carries the rule Blizzard revised the next day in Pacific time.

Our CDN watch still reads **1.60.1.70938** for the live `wowf` track, updated November 13. These are server-side hotfixes; no newer client build is attached to them in our record.

## Stuns now have diminishing returns in both directions

The first two class lines are a pair:

> Fixed a bug causing players to have no diminishing returns against creature stuns.
>
> Fixed a bug causing players to have no diminishing returns when using stuns against creatures.

Both directions matter. The first covers a creature stunning a player; the second covers a player stunning a creature. Neither line mentions player-versus-player stuns, and we are not extending it to them.

## Druid, Mage and Paladin

**Wild Growth** had two problems, and Blizzard fixed both. The spell could be cast while moving when it should not be, and its healing coefficient was **3.3 percent**. The new coefficient is **6.6 percent**.

**Frost Nova** now breaks correctly when the damage comes from a proc or from **Blizzard**. Before the fix, those two damage sources could leave the root in place.

**Judgement of Command** is melee again. The November 11 notes had made Judgement a ranged attack across the board, removing its melee classification for item and effect procs. The November 13 note carves Command back out:

> Judgement of Command now activates on-hit effects and counts as a melee attack.

Blizzard's developer note says the other judgements remain ranged attacks, and explains why Command is the exception: in original WoW, Command was the only judgement counted as melee, while the other seals were treated as spells. In Forever, the other seals are ranged attacks. If you play Retribution, the November 11 change is still in force for every judgement except Command.

## Shaman, Warrior, Warlock and Priest

- **Shaman:** Windfury Totem now activates from all melee abilities, even when the ability does not use the main-hand weapon. Blizzard's note adds a limit: off-hand strikes from abilities such as Whirlwind or Mutilate do not have a chance to activate Windfury, while the main-hand strike from those abilities still does. This follows the November 11 fix that let Windfury Totem activate from Holy Strike.
- **Warrior:** Berserker Rage now removes Sap. The notes say it was not doing so.
- **Warlock:** Siphon Life **Rank 1** can no longer be cast while silenced. The note names Rank 1 only, so we are not generalizing it to the other ranks.
- **Priest:** the Legacy Perk **The Quick and the Dead** now correctly reduces the Mana cost of Divine Spirit.

## The dungeon rule that changed again

The dungeons section adds the line Blizzard revised the next day in Pacific time:

> Killing enemies in dungeons now awards zero experience to all party members if the level of the enemy is trivial to the level of one or more of the party members.

That is a blunt rule: one high-level player in the group could zero the kill for everyone. Blizzard narrowed it on November 14 in Pacific time, limiting the nullification to a high-level player more than **12 levels** above the enemy. The full sequence, including the exception for runs already underway, is in [our dungeon XP note](/news/forever-dungeon-xp-12-level-gate-nov-15/).

The same section carries three instance fixes:

- **The Deadmines:** Sneed now ejects properly if Sneed's Shredder is stunned when it reaches 0 percent health.
- **The Drowned City:** non-boss enemies respawn after **2 hours** instead of 1.
- **Stratholme:** defeating Balnazzar now counts toward the Legacy Challenge **Master Spelunker**.

## Spawns, guards and cooking supplies

The open-world fixes are mostly about spawn pressure and odd behavior:

- **Gnomeregan:** Techbot's respawn time is shorter for "Save Techbot's Brain!"
- **Badlands:** Lesser Rock Elemental spawns are more frequent.
- **Eastern Plaguelands:** fixed unexpected aggro around Stratholme and the zone, particularly when resurrecting.
- **Mulgore:** Quillboar and Venture Co. spawn rates are lower in the starting area and less aggressive.
- **Blasted Lands:** Nethergarde Keep guards no longer drop loot, bringing them in line with other guards.
- **Stranglethorn Vale:** tiger, panther and raptor spawns are more frequent.
- **Zephras Isle:** Nyalah Brightfire in Valanaar carries a wider range of cooking supplies.

## The item exchange worth knowing

Most of the item section is stat and text cleanup, but one pair matters beyond the tooltip:

- **Blessed Band of Light:** the Hit stat is removed.
- **Channeler's Ring:** now has Spell Power instead of Spirit.

Blizzard says players may exchange a Blessed Band of Light for a Channeler's Ring. Until raids open, the exchange is the first item on **Pix Xizzix's** vendor list for anyone carrying the Band. The exchange cannot be reversed.

The rest of the item list corrects descriptions and stats: Gloves of Holy Might now only activate from harmful damage spells and abilities; the Glimmering Mithril Insignia no longer requires the ability to wear Mail armor; Cloak of the Fleshborer now has a texture; Taran Icebreaker behaves as a two-handed mace instead of a one-handed mace; the Darkspear signet rings match their Alliance equivalents on Mp5; Everstaring Abomination Eye, The Bad Hat and the Souvenir Sea Shell have corrected stats.

## Quests that now share credit

The quest pass is long, and several lines make group play less brittle:

- **Deadwood Key, Drop of Stolen Life, Ring of the Fallen Soldier, Venom-dripping heart and Blackthorne Intelligence** now drop for every party member on the associated quest.
- **A Quick Grocery Run:** everyone can read Skonk's list.
- **Coyote Huntin':** Sootfur's pelt is shared with the party.
- **Yashiro's Windwalk:** healers who assist Yashiro now get Doomguard Xarkul kill credit.
- **The Cook in the Cage:** picking up "Return to the Port" no longer deletes nearby players' quest items.
- **Crate Expectations:** the Unstable Package no longer procs on a taxi, and its misfire damage is lower.
- **Mount Hyjal:** the Crow Effigy is visible when you meet the quest requirements to interact with it.
- **Pix Xizzix's weekly dungeon quests** are removed from the log on weekly reset.

Smaller repairs cover the rogue version of Zul'Farrak for "The Talisman of Kazdor", Jezap Jinglesprocket and the Bloodmaster's Ring in the Riverglades, "Gordunni Cobalt" in Feralas, the required amount for "Gaseous Gold", Riverglades woodpiles that could be looted without the quest, and Owen Thadd and Garion Wendell accepting books in Undercity and Stormwind again.

## Fishing and the action bar

The **Stranglethorn Fishing Extravaganza** now lets many more players per ruleset win. Blizzard says performance problems with the tournament continue and more fixes are coming in the following weeks.

The single user-interface line fixes a bug that reset Action Bar settings every time a player with Secondary Talents logged out.

## Still ahead

The Auction House changes pulled from the November 11 notes are still scheduled for the **November 17** weekly maintenance. We have no note saying they went live early. **Item Restoration** was disabled on November 11 while Blizzard investigated a critical bug; the notes we read do not say it has returned.

SOURCES: Blizzard, "WoW: Forever Hotfixes - November 13, 2026", published November 14 2026 at 01:53 UTC and read November 16 2026 at worldofwarcraft.blizzard.com/en-us/news/24315281/wow-forever-hotfixes-november-13-2026; Kaivax's matching forum post in the running hotfix thread at us.forums.blizzard.com/en/wow/t/2403040, post 10, timestamped November 14 2026 at 01:54 UTC; our [November 11 hotfix brief](/news/forever-hotfixes-nov-11/) for the earlier Judgement and Windfury changes; our [dungeon XP note](/news/forever-dungeon-xp-12-level-gate-nov-15/) for the 12-level refinement; ForeverDB's changelog at foreverdb.net/changelog, read November 16 2026; our own CDN watch for build 1.60.1.70938. Related: [the Forever hub](/forever/) and [the launch calendar](/blog/launch-calendar/).
