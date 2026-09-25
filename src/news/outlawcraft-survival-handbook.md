---
title: "OutlawCraft's Survival Handbook: full-death zombies, Black Sites and a 60-yard render cap"
date: 2026-09-17
updated: 2026-09-25
game: wow
summary: "OutlawCraft's survival guide, updated with the September 23 changelog: full-wipe death, hunger and thirst, five zombie tiers, timed Black Sites, claims and code locks, vehicles, and a 60-yard render cap."
---

September 17, 2026 — OutlawCraft's day-two documentation drop is a full design document, not a reskin. The solo developer's **"Survivor's Handbook"** game guide opens with "OutlawCraft: Survive is not the World of Warcraft you know. Every system on this realm is custom," then details a zombie-outbreak survival realm on a WotLK 3.3.5a base: "when you die, you lose everything." Everything below is the server's own documentation, read September 17 — single source, server-reported, and the guide's own FAQ closes with "all subject to change."

## The survival loop

- Account rules: **one character per account, one login per IP**, and the level cap is **10** — with **21 talent points** at cap and one cheap capstone per tree.
- **Death is a full wipe.** Everything you carry drops into a death sack anyone can loot for 30 minutes, holding a readable **Dog Tag** (name, level, date). You respawn at level 1 with talents wiped; the Shorewarden on the Westfall Longshore revives you, or wakes you at your named Bedroll.
- **Hunger and thirst** ~~run 0-100 with regen tiers (normal above 50, none at 10 and below)~~ now run 0-200 with banked surplus. Hunger and thirst reduce stamina regeneration, starvation cannot kill, and dehydration drains health and kills. Bleeding: any gunshot/arrow bleeds every hit, blades about 1-in-7, maces never, zombies 1-in-8 - roughly 4 damage every 3 seconds for 30 seconds, stopped by any medical item with no cooldown (Surgeon's Kit channels in 1 second, crafted bandages 6-8).

## The Infected world

- Almost every hostile is one of **five zombie tiers** (Shambler → Runner → Brute → Mutant → Alpha), scaling south to north: Westfall, Duskwood and Stranglethorn are tier 1, Elwynn tier 2, the northern zones tier 4. **Karazhan's Alphas** are tier 5, and VanCleef at the end of the Deadmines is an Alpha.
- Noise — shooting, aiming, sprinting, casting runes, mining, even yelling in voice — draws Runners. Zombies **heal**: hurt one and leave for a minute and it returns at full health 30 seconds later. A shut door makes them give up.

## Black Sites: the dungeons

- Classic dungeons are now shared, instance-free maps tuned for levels 1-10. ~~They opened for everyone for 30 minutes, then closed for 5 minutes.~~ The current changelog sets the normal window to **10 minutes**, the lockout to **2 minutes**, and Karazhan to **60 minutes**. Anyone walks in free during the window; the end-of-site Cache holds the next tier's gem, one per opening. Some sites are full of Blight/Choking Gas needing a Sealed Respirator, and logging out inside a closing site wakes you outside the site.

## Claims & raiding

- A Claim Flag stakes a **50-yard radius** (2 claims per clan, 200 yards apart, Officer rank to plant, renewed every 5 days or the base decays). Claims ~~hold 25 pieces, max 5 doors~~ now hold **150 pieces**, with a maximum of **8 doors**, and block zombie and crate respawns.
- **Gnomish Code Locks** take a 6-digit code, remember you, jam for a minute after 5 wrong guesses, and don't auto-admit your clan — re-key to lock old members out.
- Breaking in: doors and gates yield **only to Sapper Charges**; walls and windows take a Heavy Crowbar but only from inside, within 10 minutes of a charge breaching a door in that claim. Destroy the Claim Flag and the base is unclaimed and falls apart. Spilled loot is never deleted.

## PvP and anti-cheat

- The whole world is open PvP with XP for kills, Booty Bay a ceasefire zone. The standout: a **60-yard render cap — players beyond 60 yards or behind walls aren't sent to your client at all**, so no nameplate, no target, "nothing for a cheat to read" (squadmates always visible).
- No general/trade channels and no mail; you need a **clan to group** (4-player squads). **Proximity voice**: whisper ~20 yards silent, normal ~50 (draws zombies from ~15), yell ~175 (draws ~60).
- Magic is rune-gated: three spells (Ember Bolt, Rime Shard, Arcane Lance) each consume a rune bound at a Workbench; Talents die with you.

## September 23 changelog addendum

The latest first-party changelog changes the day-two guide in several places:

- **Black Sites:** normal runs are now 10 minutes, followed by a 2-minute lockout; Karazhan runs for 60 minutes.
- **Survival:** hunger and thirst now affect stamina regeneration, thirst can kill, and ten minutes of inactivity logs the character out normally.
- **Content:** champion zombies, boats, a rotor, a six-tier gear ladder, building limits, a one-hour "I'm stuck" recovery cast, and a revised Who panel are now documented.
- **Economy:** crafted items no longer sell to vendors for more than their materials, and some utility items cannot be vendor-sold at all.
- **Operations:** the server says a VPN tunnel restart caused 49 disconnects in 24 hours. Realm traffic is now separated from website, database, and Discord traffic, with background tunnel renewal. This is server-reported, not independent uptime evidence.

The handbook remains a beta design document. Current client patch and launcher files are still required after updates.

## Client reality and conflict flags

- Requires a real WotLK 3.3.5a (build 12340) client; a custom patch **and** addon are both mandatory (no patch = red question marks and dead buildings; no addon = no clan founding, no container windows, no build menu). Trading runs on scrap, not gold.

Two conflicts to flag honestly: the guide says the cap is 10, but the public Solo PvP ladder lists a **level-40** character first (0 kills, no guild) - a same-site self-contradiction, possibly test data, unverified. And the 21-character ladder shows every entry with the same class icon, consistent with the guide's "every race plays one class: the Outlaw."

Context: OutlawCraft joined the tracker on day one ([Azeron and OutlawCraft join the tracker](/news/azeron-outlawcraft-join-tracker/); [server page](/servers/outlawcraft/)); the tracker lists this realm for the design, not the population.

SOURCES: OutlawCraft game guide, developer update, public changelog, download page, and armory solo-PvP ladder - all first-party and read September 25, 2026; server-reported, no independent verification. The [OutlawCraft server page](/servers/outlawcraft/) remains the tracker entry.