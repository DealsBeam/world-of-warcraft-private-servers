---
title: "We downgraded IceDNicco from large to tiny, and why we were wrong"
date: 2026-09-27
category: news
summary: "Our entry read the realm's headline population figure at face value. That figure counts bots. The same dashboard showed 4 real players. The old value stays on the page with a date."
---

Our tracker listed [IceDNicco](/servers/icednicco/) as `large` population, last checked September 4. It is now `tiny`, corrected September 27, 2026.

~~Pop: large~~ **Pop: tiny**

That was our error, and it was a simple one. The realm's dashboard shows a headline **realm population of 3,027**. We took that at face value. It is a bot-inclusive figure, and the same dashboard breaks it down: **2,274 "adventurers"** (the site's word for its AI-controlled characters) and **4 real players** at the moment we looked. Uptime read 5 hours 19 minutes.

Our own census defines `tiny` as "sometimes 0-50 online and maintained by a solo developer." This realm has 4 concurrent real players and exactly one developer, a serving member of the Ukrainian National Guard, who has run it since 2022 and splits donations between the realm and his unit. The band fits precisely.

## What did not change

Status stays `playable`, and nothing about the operator is in question. The site is unusually straightforward about the bots, plainly states that the population figure includes them, and says outright that its shop sells "cosmetics, services, boosts and equipment." It also shipped five launcher releases on September 23 and removed the Worgen and Goblin race pack in August because it was hanging the world on login.

Nothing in the correction is a criticism of the project. The thing that was wrong was our number.

## The lesson, since it will recur

Two habits on this tracker, both of which this broke:

**A headline population figure on a bot realm is not the population.** If a realm publishes a single "players online" number and does not separate humans from bots, we cannot read it as a human count. It has to be recorded as self-reported and unqualified.

**Good dashboards deserve credit.** IceDNicco is the only realm we have found that breaks its own number down, and it is the reason we caught this. It publishes real players, adventurers, faction split and uptime. That is a realm making itself auditable, and it is the behaviour our [correction policy](/blog/tracker-correction-policy-explained/) depends on.

We have also since read two more realms where the bot split is not published: [Frozen Throne](/blog/frozen-throne-autonomous-dungeon-clear/) reports 1,191 online with 5,797 characters and a quest counter that verifiably advances, and [TheraWoW](/blog/therawow-solo-wotlk-guide/) reports about 1,300. Neither is being called wrong today, because neither is being treated as a human count either.

Full detail is in our [IceDNicco guide](/blog/icednicco-one-developer-and-3000-bots/), including what the shop actually sells and why a paid VIP tier that lets you control your own alts as bots is the feature to read carefully.

SOURCES: IceDNicco's own homepage dashboard and shop pages, first-party, read September 27, 2026. Our previous entry read `large`, last checked September 4, 2026. The band definitions are from our own [census page](/census/).
