---
title: "Blizzard narrows Forever's dungeon XP rule to a 12-level gap"
date: 2026-11-16
category: news
game: wow
summary: "The November 13 notes zeroed dungeon experience whenever an enemy was trivial to any party member. Blizzard then limited the nullification to a high-level player more than 12 levels above the enemy, and said runs already underway would keep the old rule."
---

The dungeon experience rule in Blizzard's November 13 notes lasted about a day in its original form. In a forum post timestamped **01:18 UTC on November 15**, which is the evening of November 14 in Pacific time, Kaivax said Blizzard had deployed a further change: the nullification now applies only when the high-level player is **more than 12 levels above the level of the enemies**.

## The original rule

The November 13 hotfix notes introduced this line:

> Killing enemies in dungeons now awards zero experience to all party members if the level of the enemy is trivial to the level of one or more of the party members.

Read literally, one player high enough to make an enemy trivial could zero that kill for the whole group. The rule did not name a level gap, define "trivial" numerically, or limit itself to the high-level player. That is why the follow-up mattered.

## The refinement

Kaivax's post gives the reason and the new threshold:

> Yesterday, we updated dungeon play so that experience granted by an enemy in an instance is nullified if a high level player is in the group and enemy is trivial to that player. For some dungeons, the new restriction missed the mark because of the overall level range of the enemies in the dungeon. With hotfixes that are now live, we've just deployed a further change to this restriction, making it so that the XP nullification only kicks in when the high-level player is more than 12 levels above the level of the enemies.

He adds one exception: the adjustment does **not** apply in instances that were already underway when it was deployed, which he describes as "a few minutes ago".

The refinement settles three things:

- The trigger is a **level difference**, not an undefined "trivial" state.
- The threshold is **more than 12 levels**, so a gap of exactly 12 does not trigger it.
- The nullification still applies to **all party members**, not only to the player who is above the threshold.

## Why the first rule missed

Blizzard's stated reason is the level range inside a dungeon. A single dungeon can hold enemies across a spread of levels, so a group can include a player who is far above some of those enemies while the rest of the party is still within the range the dungeon is meant to serve. Under the original wording, that one player could switch off experience for the group before the group reached the content Blizzard wanted them to run.

The 12-level gap gives the rule a fixed margin. We are not claiming that 12 levels is the same as the game's grey-con threshold, because Blizzard has not said that. The post gives the number and the reason, not a definition of "trivial" beyond it.

## The context: dungeon XP had just been raised

The anti-boost rule arrived five days after Blizzard raised dungeon kill experience by **50 percent**. In a November 10 clarification, Kaivax put that increase on a measured scale: Forever's dungeon kill XP went from **40 percent of Classic Era values to 60 percent**. The two changes pull in opposite directions. The November 8 change made dungeon kills worth more; the November 13 rule stopped a high-level player from making those kills trivial for the group. The 12-level threshold is the compromise: groups can still bring a higher-level player through content within 12 levels, but a player far above the dungeon's enemies now zeroes the kill for everyone.

## What we do not know

- Blizzard has not said whether the gap is checked against the **highest-level player** only, or against every party member. The post says "the high-level player", singular.
- It has not said whether the check is applied **per enemy** or once per dungeon. The wording says "the level of the enemies", which points to the enemies actually killed, but we are not treating that as a rule Blizzard stated.
- It has not published a client build for either change. Our CDN watch still reads **1.60.1.70938** on the live `wowf` track, updated November 13, so both are server-side hotfixes in our record.

One of the first replies in the thread welcomed the change, arguing that 12 levels was enough to curtail boosting without affecting players who were doing quests in the larger dungeons. That is a player's reading, not Blizzard's.

SOURCES: Kaivax, "Player-Level Dungeon XP Adjustment - November 14", at us.forums.blizzard.com/en/wow/t/2416343, post 1, timestamped November 15 2026 at 01:18 UTC and read November 16 2026; the November 13 hotfix article at worldofwarcraft.blizzard.com/en-us/news/24315281 for the original dungeon line, read November 16 2026; Kaivax's November 10 clarification of the 40 to 60 percent change at us.forums.blizzard.com/en/wow/t/2406555/254, read November 11 2026; our [November 8 dungeon XP brief](/news/forever-dungeon-xp-50-percent-nov-8/) and [November 13 hotfix brief](/news/forever-hotfixes-nov-13/); our own CDN watch for build 1.60.1.70938. Related: [the Forever hub](/forever/) and [the launch calendar](/blog/launch-calendar/).
