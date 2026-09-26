---
title: "Playerbots vs PartyBots vs scaling: three ways to fix an empty group"
date: 2026-09-26
category: explainers
heroImage: /images/hero-5.jpeg
summary: "The private-server scene has three genuinely different answers to the same problem, and choosing the wrong one ruins a server. How they differ technically, and which servers on our tracker use which."
startingPoint: true
---

Every small private server eventually hits the same wall. The population that would have been your ten-man raid is now six people with irregular schedules, and the content you built assumes ten.

There are three established fixes. They are not variants of each other, and they fail in different ways.

## PartyBots: the cheapest fix

PartyBots fill empty party slots with AI characters that behave like raidbots: they follow the tank, hold threat, cast rotations, and pick up loose loot. Your real group plays in the same instance alongside them.

The tradeoff is scope. PartyBots exist to fill *positions*, not to simulate a world. They are good at the encounter in front of you and bad at everything around it. A dungeon full of PartyBots is a working dungeon. The Barrens is still empty. There is no bot walking past your camp, no bot in the same zone having a conversation, no bot you might group with in the afternoon.

If your problem is "I need eight more people for Tuesday's raid," this is the right tool and it costs almost nothing.

## Playerbots: a simulated population

Playerbots are AI characters that live in the world between your sessions. They walk paths, level, vendor, group with each other, and fill instances. The same codebase can drive combat behaviour so they are also usable as raid companions.

This is a much larger claim, and it is why the scene treats the technology as a genuine design axis rather than a plugin. We have a [dedicated explainer on the architecture](/blog/playerbot-architecture-explained/) and a [roundup of the realms built this way](/blog/best-wotlk-for-solo/).

What you get is a world that feels inhabited, which is a different problem to solve from having a raid team. What you pay is performance, because a few hundred simulated characters cost real CPU, and a world where bots level faster than you can is a progression problem the project has to answer deliberately. Several tracked realms set random bots to the top of the XP range by default specifically to avoid bots out-leveling players.

## Solo scaling: change the encounter instead

Scaling dungeons and raids read the party and adjust enemy health, damage, and mechanics. Two players can clear content built for ten because the content itself bends.

This is the most elegant answer and the least universal. Scaling has to be authored per instance or it produces the notorious failure mode where a five-player group is easier than a ten-player group because the difficulty curve was fitted to the wrong point. It also cannot help with the open world, and it cannot help with anything that requires other people to *exist* rather than to be present.

Several tracked realms combine scaling with playerbots, which is where the current interesting work is: scaling handles the instance, bots handle the world.

## Which one to pick

| Situation | Answer |
| --- | --- |
| Scheduled raid nights, thin roster | PartyBots |
| You want the world to feel alive, and accept the cost | Playerbots |
| You want old content at 2 or 5 players and do not care about the world | Scaling |
| You want everything and can tolerate CPU load and tuning work | Scaling plus playerbots |

The failure mode to avoid is the reverse of the obvious one. A server that ships scaling and advertises a "full world" is usually running a few bots and calling it a population. A server that ships 750 random bots and no scaling will happily let you five-man an encounter that assumes ten. Check which of the three a realm actually has before you assume it can do the thing you want.

## On the tracker

We tag what a realm actually does rather than what it markets. Servers running bots in-world get described in their [tracker entry](/servers/) with the scale claimed. If you are choosing for solo play, the [best WotLK for solo](/blog/best-wotlk-for-solo/) roundup is the place to start, and it is worth re-reading the entry's `updated` date because these configurations change.

Two live examples that differ usefully: **Warstorm** runs AI playerbots that execute raid strategies, and is described as ICC 25-player hard-core capable, with a dungeon finder and a dungeon-finder-driven auto-grind option. **Frostbound** runs 750 random bots plus Mythic+ and cross-faction, and its [Warband guide](/blog/frostbound-warband-guide/) covers the player-owned-companion model. Same broad category, different bets.

SOURCES: Our [playerbot architecture explainer](/blog/playerbot-architecture-explained/), the [best WotLK for solo roundup](/blog/best-wotlk-for-solo/), the [playerbot design comparison](/blog/playerbots-vs-partybots-vs-scaling/), and current tracker entries for Warstorm and Frostbound, read September 26, 2026. If you would rather run the bot core yourself than trust a realm with one, our [SPP Classics self-host guide](/guides/spp-classics/) covers Vanilla, TBC and WotLK on localhost.
