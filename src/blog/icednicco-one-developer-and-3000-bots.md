---
title: "IceDNicco: one developer, 3,000 bots, and a shop that sells legendaries"
date: 2026-09-27
category: analysis
heroImage: /images/hero-6.jpeg
summary: "A Ukrainian National Guard serviceman has run this WotLK realm since 2022, with donations split to his unit. Its own dashboard also read 4 real players. Both things belong in the same entry."
---

There is a realm on our tracker whose operator is a serving soldier, who has been running it since 2022, and who splits donations between the server and the National Guard of Ukraine. Its own dashboard, on the day we checked, showed **4 real players** alongside a headline population of **3,027**.

Both facts are first-party. Both belong in the same entry, and that pairing is the most useful thing we can tell you about this server.

It is [IceDNicco](/servers/icednicco/) on our tracker, `playable`, `WotLK`, and as of today its population tier is **`tiny`**, corrected down from `large`. We explain the correction at the bottom of this post because it was our error and the old value stays visible.

## What it actually is

A Ukrainian WotLK 3.3.5a realm on build 12340, with two realms on one account:

- **Wrath 3.3.5a at x10 leveling.** Gold, loot, and profession skill-ups stay at x1 specifically so the economy does not break. Trainer spells learn on level-up, and there are mailbox gifts at levels 20, 40, 60 and 80.
- **The War Within 12.1 at x100**, a separate client realm. This one needs its own launcher, and it has a genuinely odd requirement: you must place "Burralis" in the 12.1 folder next to `.build.info` before playing. A raw `Wow.exe` throws `WOW51900317`.

Levelling is fast, the economy is not, and that split is a deliberate choice stated on the site.

**Free character transfers from any 3.3.5a realm**, announced September 14. You ask the admin on Discord, and the post is explicit about not sending passwords. **Free guild migration with no roster cap**, where the 10/20/100 member tiers unlock Standard, Premium and Giants and the site is careful to say those are not player limits. Every listed level-80 receives a Heroes T7-10 item.

That is an unusually open-handed onboarding policy for a realm this size, and it is worth crediting before the harder parts.

## The bot population, and the number that is not the population

The site says "a living Wrath" with about 3,000 bots in the cities, on the roads, and in the dungeons. The dashboard breaks the figure down rather than just asserting it:

- **Realm population: 3,027**
- **Adventurers: 2,274** (the site's word for its AI-controlled characters)
- **Real players: 4**
- Alliance 1,528, Horde 1,499
- Heroes created: 20,842

The site is straightforward that "realm population includes AI-controlled adventurers that keep Azeroth active." It is not passing bots off as players, and that matters, because a lot of realms do.

The bots also do real work. Bots quest, grind, run dungeons, join battlegrounds and use the random dungeon finder. There is a bot addon, `IceDNiccoBots`, invoked with `/idnbots`.

**Real players leaving at the end of a session is normal here.** Anyone playing a bot-filled Wrath realm is doing that. The number to reason about is 4 at the moment of our check, and whether the queue for anything human ever forms.

## The shop is not a cosmetic shop, and the site does not pretend it is

The site's own words: "The shop sells cosmetics, services, boosts and equipment. The money goes to the National Guard of Ukraine and to hosting, code, and new features."

The shop page is more specific than that, and you should read it before spending anything. There are two currencies, Donation Points and Vote Points, and the categories include Money, Mounts, Transmogrification, and **Instant Boost and Catch-up**. The featured listings include:

- **Shadowmourne**, finished legendary axe, mailed. 2,100 DP. Warrior, Death Knight, Paladin only.
- **Val'anyr, Hammer of Ancient Kings**, finished legendary mace, mailed. 1,900 DP. Healing only.
- **Collector's Bundle**: Invincible, Mini Tyrael and 10,000 gold. 1,400 DP.

Those are completed legendary weapons and a golden bear sold outright for donation points. That is a direct path to Wrath's most powerful item, and no amount of "cosmetics" framing changes what is in the cart. If you are here for the levelling experience and want to arrive at ICC, this is the cheapest route we have seen and also the one that removes the reason to play.

The shop page also carries some genuinely helpful warnings, which is to its credit: items are mailed so you need to re-open mail if online, services often need an offline character, unban and reputation changes go through a staff ticket rather than being automatic, and many gear listings are a single piece rather than a set.

**The VIP tier is the one to understand.** It is described as unlocking control of your own alts as bots, via `.bot add` and `IceDNiccoBots`, where the alts auto-accept and turn in quests alongside you to stay near your level. That is a paid convenience that converts your own unused characters into permanent companions. It is a smart product. It is also pay-to-convenience, and on a realm with 4 real players it is closer to the core value than a side feature.

## The developer

The site states it directly: one developer, a Ukrainian World of Warcraft fan who has served in the National Guard since 2022. He builds the core, the site and the launcher, and the site says updates come "when duty allows, honest, not a content farm."

The output is real. The launcher shipped five releases on September 23 alone, versions 1.7.50 through 1.7.53, all of them HD-graphics work: using the discrete GPU, ignoring Steam, Discord and OBS overlays, adding ReShade looks and frame-gen compatibility, and stopping the HD path from asking WoW for 4 GB of texture memory. That is a developer debugging his own client, not running a content schedule.

The August 19 post is also worth reading as an attitude. Worgen and Goblin were removed from the client entirely because the extra race pack made the world hang on login. The response was to pull it from the core and the launcher and tell people to download 1.5.8 and press Play. Cutting a feature that breaks login is the right call and telling people plainly is rarer than it should be.

**The uptime counter is the number to watch.** It read 5 hours 18 minutes when we looked, and 5 hours 19 minutes on a second look a few minutes later. We could not determine from the page whether that is a rolling restart window, a session lifetime, or an actual measure of recent availability, and we are not going to guess. If you need the realm up for a specific evening, check before you commit to it.

The site also solicits votes on six public toplists, TopG, GTop100, Arena-Top100, MMtop100, BestGames and GameTop. That is standard private-server practice and worth knowing about when you read those rankings.

## The correction

Our entry carried the population tier **`large`**, last checked September 4. That was our error and it was a straightforward one: we took the site's headline figure of 3,027 at face value without reading the breakdown underneath it, and 3,027 is a bot-inclusive number.

The same dashboard that produced our wrong number also produced the evidence that corrected it. On September 27 it read 4 real players, 2,274 adventurers, and 5h19m uptime. Our census defines `tiny` as "sometimes 0-50 online and maintained by a solo developer," which describes this realm exactly. The tier is now `tiny`.

~~Pop: large~~ **Pop: tiny**, corrected September 27, 2026.

Two lessons worth naming, because they are the kind that repeat. First, a headline population figure on a bot realm is never the population. Second, the downgrade is not a criticism of the operator, who has been at this since 2022 and says plainly when he ships and when he cannot.

## Who it suits

**Good fit:** players who want Wrath with a living world and do not mind that the living world is mostly bots. Anyone who wants to support a project with a stated purpose beyond profit, and is comfortable that the money goes where the site says. Players who want fast levelling on a clean x1 economy and a generous transfer policy.

**Poor fit:** if you need real opposition, four concurrent real players is not it. If you want to earn Shadowmourne, buy it instead. If you need the realm reliably up, the uptime counter is not reassuring. If a pay-to-convenience VIP tier bothers you, the shop has finished legendaries regardless.

## The judgement

This is the most honest realm of its size on the tracker, and honesty about a bad number is rarer than a good one. The site tells you the population is bots, tells you the shop sells boosts and equipment, and tells you the developer is on duty. Our tracker was the thing that was wrong, and the correction is above rather than hidden in a changelog.

Whether a 4-real-player Wrath realm with a 3,000-bot world and a legendary-axe shop is worth playing is genuinely a matter of taste. What you can rely on is that you were told.

SOURCES: IceDNicco's own homepage dashboard, news, updates and shop pages, plus its public server, all first-party, read September 27, 2026. Population, uptime, shop contents and the National Guard arrangement are the project's own statements and figures. Our previous entry read `large`, last checked September 4, 2026, and the correction policy is set out in [how this tracker corrects itself](/blog/tracker-correction-policy-explained/). Related: [how we review a private server](/blog/how-we-review-a-private-server/) is the review standard, and [playerbots vs PartyBots vs scaling](/blog/playerbots-vs-partybots-vs-scaling/) covers the bot mechanics involved.
