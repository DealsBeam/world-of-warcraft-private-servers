---
title: "The November 16 hotfixes clean up Windfury and halve group Vampiric Embrace"
date: 2026-11-17
category: news
game: wow
summary: "Blizzard's November 16 pass fixes Windfury Totem's armor bypass, its missing internal cooldown and several stray activation attempts, stops Cleave and Heroic Strike from eating Flurry and Unbridled Wrath, and queues a Vampiric Embrace change that halves group healing while leaving the caster's own healing unchanged. The live client moved to 1.60.1.70959 on November 17."
---

Blizzard published its November 16 hotfix notes at **02:17 UTC on November 17**, which is the evening of November 16 in Pacific time. The pass is mostly repair work on class rotations, with Windfury Totem, Warrior rage and Flurry, and Rogue poison ranks taking several lines each, plus one Priest change that is bracketed for the **scheduled weekly maintenance** rather than shipped with the rest.

The running article was retitled **"WoW: Forever Hotfixes - November 16, 2026"**, and Kaivax's matching forum post carries the same 02:17 timestamp. Our CDN record moved the live `wowf` track from **1.60.1.70938** to **1.60.1.70959** on November 17. That is the first new live build since November 13. Blizzard does not key these notes to a build number, so we are recording the build and the notes side by side rather than treating the build as part of the patch list.

## Vampiric Embrace changes with the weekly reset

The Priest section carries the only line marked for maintenance:

> [With scheduled weekly maintenance] Vampiric Embrace healing is now based on 10% of the Shadow damage done by the casting Priest (was 20%). The casting Priest receives 100% increased healing from this effect.
>
> Developers' notes: This change results in no difference for Priest solo play.

The arithmetic explains the developer note. A 10 percent heal doubled for the caster returns the same amount to the Priest as the old 20 percent did, so solo play is unchanged. In a group, the other party members receive half of what they used to, while the Priest's own share stays where it was. That is a healer-output cut aimed at group utility, not at the Shadow Priest's own sustain.

Blizzard has not published a separate confirmation that the change is live, and we are not inferring one from the build number. It is dated to the November 17 maintenance; our read on November 18 at 00:55 UTC found the note still bracketed the same way.

## The Windfury cleanup

Windfury Totem has now had a fix or a correction in three consecutive rounds. The November 16 pass is the most thorough:

- **Windfury Totem attacks were ignoring armor and had no internal cooldown.** Both are now fixed.
- **Windfury Totem extra attacks did not generate Rage.** They now do.
- **Mutilate and Execute had an extra attempt to activate Windfury Totem.** That attempt is removed.
- **Shield Slam, Shield Bash and Shieldworn empowered Holy Strikes could attempt to activate it.** They no longer do.

Read together with the November 13 note that let Windfury activate from all melee abilities, the sequence is a walk back from the side effects of the November 11 change. On November 11, Windfury Totem started activating from Holy Strike. On November 13, Blizzard widened that to every melee ability, with an explicit exception for off-hand strikes. On November 16, it removed the armor bypass, restored the internal cooldown and trimmed the abilities that should never have been able to roll the proc.

Two Enhancement fixes ride along. **Maelstrom Weapon could benefit two casts**, which is now fixed, and **Thundering Strikes no longer requires a weapon equipped** to grant its critical strike chance.

## Warrior: Flurry, Unbridled Wrath and Reckless Swings

The Fury fixes all point the same direction. **Cleave** and **Heroic Strike** were consuming **Flurry** stacks and were not activating **Unbridled Wrath** or **Reckless Swings**. All three now behave as they should with those abilities. **Reckless Swings** also got a cooldown manager adjustment so it can be tracked.

Outside Fury, **the Revered Champion** now offers **Legacy of Valor** to qualified Warriors. Blizzard says the NPC was failing to do so.

## Druid, Rogue and the rest

- **Druid:** ranks of **Wild Growth** were not going on cooldown, which is fixed. Balance's **Genesis** talent was not increasing the damage of **Pounce's** bleed, also fixed.
- **Rogue:** poison ranks can no longer exceed the maximum rank. Separately, using **Shank** on a target that did not hold your combo points could wipe your combo points on other targets, even without **Boot Knife** talented.
- **Priest:** **Dark Inspiration** was stacking when multiple Shadow Priests were in the same party, which is fixed.
- **Camping:** the **Fishing Rack** now provides lures for everyone, and **Bloated Fish** from the Rack effect drop more often, with loot tables adjusted to match.

## Dungeons, items and PvP

**The Drowned City** gets three fixes: **Captain Dreadrise** is no longer immune to stun, the rare spawn **"Pyromancer" Braxton** now responds to combat instead of ignoring it, and the **Abyssal Bubble** summoned by Dreadrise can no longer block, dodge or parry. In **Sunken Temple**, the **Atal'alarion** serpent statues in the Pit of Refuse no longer lock themselves out if they are activated in the wrong order.

The item pass is short. **Formula: Enchant Boots - Speed** from reputation is now **bind-on-pickup**, which Blizzard calls intended. **Outrider's Gloves** now work correctly. **The Violet Tragan** no longer breaks crowd control effects.

The single PvP line is a bug fix with an odd shape: **dying at the Arathi Basin Gold Mine should no longer port you to a graveyard in Riverglades.** Riverglades is a Forever leveling zone, not a battleground graveyard, so the old behavior was sending players out of the match to a graveyard elsewhere in the world.

## Quests

- **"Blood Red Bandanas":** drop rate increased.
- **"The Talisman of Kazdor":** **Witch Doctor Zum'rah** may now spawn properly.
- **"No Soldier Left Behind":** scout prisoners in **Twilight's Shroud** now grant credit to the whole party.
- **"Screecher Spirits":** the **Vale Screamers** have moved to the **Isle of Dread** coastline.
- **"Water Pouch Bounty":** the repeatable quest no longer grants experience.
- **"The Return of the King?":** fixed an issue that could halt progress on the Theramore quest.

## What is still outstanding

Two items from earlier rounds remain unresolved in the notes:

- **The Auction House changes.** Blizzard pulled the minimum deposit cut to 1 copper, the unread-mail display fix and the mail-delivery timing fix from the November 11 notes and said they would go live with the **November 17** weekly maintenance and "appear again in the hotfixes update thereafter." At our read on November 18 at 00:55 UTC, the running article still carried no Auction House line, so we are not reporting them as shipped. The November 16 notes do not mention them either.
- **Item Restoration.** The November 6 line disabling it while Blizzard investigates a critical bug is still the only note on it. Nothing in the November 13 or November 16 passes says it has returned.

The dungeon experience rule is unchanged in this pass. The **more than 12 levels** threshold from November 14 still governs the nullification, and the November 16 notes do not revisit it.

**Update November 18 2026:** Blizzard published the November 17 hotfix pass at 03:23 UTC today. It still contains no Auction House line and no Item Restoration note, so both items above remain unresolved. The new pass is covered in [the November 17 brief](/news/forever-hotfixes-nov-17/).

**Update November 19 2026:** ForeverDB has now published its extraction for build 1.60.1.70959, dated November 18. The note above about 70938 being its newest extraction was accurate on November 18 and is no longer current. The new diff is covered in [the ForeverDB brief](/news/foreverdb-70959-nov-19/).

SOURCES: Blizzard's running "WoW: Forever Hotfixes" article at worldofwarcraft.blizzard.com/en-us/news/24315281, retitled "WoW: Forever Hotfixes - November 16, 2026", published November 17 2026 at 02:17 UTC and read November 18 2026 at 00:55 UTC; Kaivax's matching forum post, post 11 in the running hotfix thread at us.forums.blizzard.com/en/wow/t/2403040, timestamped November 17 2026 at 02:17 UTC; our own CDN watch for build 1.60.1.70959, first published November 17 2026 at 15:19 UTC; ForeverDB's changelog at foreverdb.net/changelog, read November 18 2026, which still shows build 1.60.1.70938 as its newest extracted build. Related: our [November 13 hotfix brief](/news/forever-hotfixes-nov-13/), [the November 11 brief](/news/forever-hotfixes-nov-11/) for the Auction House delay and the Item Restoration notice, [the 12-level dungeon XP note](/news/forever-dungeon-xp-12-level-gate-nov-15/), [the Forever hub](/forever/) and [the launch calendar](/blog/launch-calendar/).
