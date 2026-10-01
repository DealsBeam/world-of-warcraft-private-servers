---
title: "Four entries rated playable with no address at all, and one of them owns the search result"
date: 2026-10-01
category: news
summary: "Thirty tracker entries carried no URL. We located and verified four: Incursion, Eternyum, Warlords of Azeroth and TranscendWoW. Eternyum is at a .ro address because the .com is a domain for sale, and Warlords of Azeroth is running a ruleset we had recorded as unreachable."
---

Thirty of our 147 entries had no URL on file. Thirteen of those are rated `dead`, which is fine, because a shut-down server needs no address. That leaves **13 rated `playable` or `dev` with no source behind them at all**: a rating or a status with nothing a reader could go and check, which is the same shape as every other error in this week's sweep, only harder to defend because there is no site to blame.

We went looking for the addresses tonight. Four confirmed, and the search itself turned up something a name search would have hidden.

## Eternyum is not at eternyum.com, and that domain is for sale

Our entry said "Progressive WotLK 3.3.5a, Romanian" with no address. The obvious guess is the worst one:

| Address | What it actually is |
| --- | --- |
| `eternyum.com` | **"Eternyum.com is for sale - Premium Domain"** |
| `eternyum.ro` | **Eternyum România**, the real project |

The project's actual address is `eternyum.ro`, and it is a substantial site with a live realm feed. Anyone who searches the name, or who tries the obvious `.com`, gets a page for sale. The entry now carries the `.ro` address and says explicitly that the `.com` is not theirs.

**Corrected: pop tiny -> medium.** Its own dashboard, read tonight, read:

- **ONLINE 462**, **PEAK ASTAZI 481**
- **UPTIME 6H 0M**, faction balance **50/50**, **XP RATE X10**
- **Double XP** counting down 1d 6h 59m, **Brewfest** live ending in 4d 6h 59m
- Auction house: **270 listings, 184 on sale, 300,939g**

That is a realm with a few hundred people in it and a working economy, not a `tiny` band. And the news is current rather than dormant: lotteries on 20 September and twice on 27 September, with a **Wooly White Rhino mount draw on 4 October 2026 at 20:00**.

One detail worth having: the weekly vote leader has **66 votes** and the top reward is **10 VP plus 600g**. That is a small number against a small reward, and it tells you more about the size of the project than the player count alone does.

## Warlords of Azeroth is live, and its ruleset is the interesting part

Our entry said **"site unreachable Sep 2026, status under review."** It is not unreachable. It is running one of the more opinionated designs we have seen, and it is worth describing because none of it is standard.

**There are no factions.** Horde and Alliance group, guild, trade and talk together, and everyone is flagged for PvP everywhere outside sanctuaries. Its line is that the only side you have is the people you choose.

**Death drops your gear, in defined territories, and the site tells you which tier you are in by colour every time you cross a border.** Three tiers:

- **Safe**: you drop nothing, and PvP cannot even start. Capitals and starting zones.
- **Dangerous**: die and you drop the gold you are carrying, gear is safe. Most of the levelling world.
- **Highly Dangerous**: die and you drop gold **and gear**, into a chest your killer can loot. Stranglethorn, the Plaguelands, Burning Steppes, Winterspring, Silithus.

The stated purpose is that "nobody loses a bag to a rule they didn't know about", which is the right instinct for a mechanic that punishes this hard.

**PvP gear is crafted rather than earned.** Blacksmiths, leatherworkers and tailors make the Field Marshal sets, one per class, and every piece needs materials from nine trades, so "armies are supplied by people who never fight". No honour grind, no quartermaster. Guilds hold territory by capturing points in the deadliest zones.

Level 60 cap, no Death Knights, no cash shop, no donor perks, realmlist `logon.warlords-of-azeroth.com`.

**We did not give it a population tier.** The site publishes no figure, so `unknown` is the honest answer, where a month ago we had `tiny`.

## Incursion and TranscendWoW: located, and the details check out

**Incursion** is at `incursion-wow.com` and its own description matches what we had recorded almost word for word: *"Incursion is an instant level 60 PvPvE progressive Vanilla -> WotLK experience built around reimagining Vanilla World of Warcraft with modern systems."* It has Mythic+ ranking, PvP and guild leaderboards, an armory and a voting store. The catch is its news: the newest post is **21 March 2026** and the site copyright is 2026, so the content has been quiet for about six months. Left at `tiny` because it publishes no player count.

**TranscendWoW** is at `transcend-wow.com` and is a **Fun 255 Server** on realm **Dagger Spine** with a live status widget reading Online, which is the high-stats fun realm we had described from a Discord count. It advertises custom classes and races, played-time rewards and V.I.P. ranks, and seasonal events with world boss hunts. **Newest news is 13 July 2026**, a mid-summer sale, so roughly eleven weeks quiet.

**We dropped its population to `unknown` rather than carrying the old ~285 Discord figure.** That number was never a population reading, and presenting it as one is the same mistake as the ArgusWoW widget. A Discord member count and a concurrent player count are different quantities and a tracker that mixes them is lying by rounding.

## What the misses were

Four guesses were wrong and worth recording, because two of them were wrong in a way that would have made the entry worse:

- **`atlantiss.com` is a domain for sale.** Phone number and "Buy atlantiss.com as your website name". Our Atlantiss entry already notes that `atlantiss.org` lapsed in May 2026, so this is the same project with a second address gone. It is still rated `playable`/`small` on a Discord count and we could not locate a live site for it tonight.
- **`feenixwow.com`, `galaxyofdrone.com`, `trueazeroth.com`, `thoriumwow.com` and `dragonbornwow.com` do not resolve.** True Azeroth and Feenix already carry unconfirmed-shutdown notes from September, which this supports but does not prove.

One methodological note, because it nearly cost us the whole batch. The first run of the probe returned ERR for **every** candidate, including domains that were live a moment earlier. That was not thirty dead servers, it was the network failing inside the tool. **I re-ran with a control domain and it still failed**, so I moved the probe to the shell, which worked. A batch of uniform failures is a broken instrument until proven otherwise, and the control is what distinguishes the two.

Twenty-six entries still have no URL, and the split matters: **13 are rated `dead`, which is correct because a dead server needs no address**, leaving **6 rated `playable` and 7 rated `dev`** with nothing behind them. Those thirteen are the next batch and the highest-value work on the site.

SOURCES: Incursion, Eternyum, Warlords of Azeroth and TranscendWoW's own sites, read October 1 2026, several of them in a browser because they are JavaScript applications; and the four rejected domains, which were read over HTTP and rejected on what they actually serve. Every player count, uptime, auction total, vote count, realmlist and ruleset description above is quoted or transcribed from those pages. We did not create an account, did not download a launcher, and did not play on any of them. Related: [the Epsilon correction](/news/epsilon-demoted-by-a-data-sweep-sep-30/), [the ArgusWoW correction](/news/stale-sweep-batch-3-arguswow-dead-sep-29/), and [how we review a private server](/blog/how-we-review-a-private-server/).
