---
title: "CoRe Legacy: what happens when a WotLK realm's bots talk back"
date: 2026-09-27
category: analysis
heroImage: /images/hero-5.jpeg
summary: "Language models wired into party chat, and a bot population that logs off at peak hours to give real players the stage. The most interesting bot design on the tracker, and what to be careful about."
---

Two ideas on this realm are worth separating, because one of them is a genuine design contribution to the scene and the other is a feature that deserves scepticism.

The first is a **bot population that manages itself against the real player count**. The second is **language models wired into the party chat channel**.

CoRe Legacy is a WotLK 3.3.5a realm run by former CoRe staff, Spanish-language, and it is on our tracker as [CoRe Legacy](/servers/core-legacy/), `playable`, `WotLK`, very small population.

## The population management idea is the good part

Most playerbot realms run a fixed bot count. That produces the two failure modes everyone has seen: a world that feels crowded while you are the only human in it, or a world that empties out the moment real players show up, which reads as fake.

CoRe Legacy's stated approach is that bots adapt to how many real players are online. During **peak hours, some bots disconnect automatically to cede the spotlight to the real community.** At night, or in quiet stretches, **more bots join** so the world still feels populated.

That is a small idea with real consequences, and it is not the same thing as hiding bots. A realm that reduces its bot count when humans arrive is making a different claim from one that maintains a number regardless. It says the bots are a floor, not a crowd.

It also has an obvious failure mode, which is that it is only as good as the threshold. Too eager and the world empties every evening. Too timid and it is theatre. We have not played the realm long enough to know which, and the honest position is that the claim is plausible and unverified.

There is a related detail that is easy to miss: **the bots level, quest, farm, trade and use the auction house.** An economy maintained by bots that only stand in cities is a costume. One that vendors and auctions is closer to a real economy, and it is the more expensive thing to build.

## Backfill that prefers humans

The queue design follows the same principle. Queue for random dungeons or a battleground and the system **gathers all available real players first, then uses bots only to cover the remaining empty slots.** The battle starts immediately rather than after a wait.

The bot behaviour is described in more detail than most projects bother with, and the specifics are the interesting part:

- **The bot tank leads.** A new player in a dungeon can let the bot tank pull, and it "will wait automatically until all group members have recovered health, mana or energy before moving on."
- **The bots understand class mechanics.** They are described as performing crowd control, taunting at the right moment, and prioritising heals to avoid wipes, rather than attacking indiscriminately.

Waiting for the group to heal before pulling is the single thing that separates a competent bot from a bad one, and it is also the thing that makes a dungeon forgiving of a new player. If it works as described, the practical effect is that low-level or unfamiliar players get a dungeon that behaves like a patient group.

## The LLM chat, and what to watch

This is the part to be sceptical about, and the reason is not that language models are bad. It is that the feature is unfalsifiable from the outside.

The claim is that language models are integrated into the in-game chat, and that you can talk to your party bots as if they were people. They answer coherently in context. You can ask them about Northrend lore, the Lich King, or their own motivations, and the answers are AI-generated to support roleplay. You can also ask for strategy, ask them to change behaviour in combat, or ask them to share items, all by typing naturally in the group channel.

Every one of those is a reasonable thing to want. Here is what to weigh.

**You are talking to a language model, not a player.** The site says so plainly, which is to its credit. But the value of an LLM party member is almost entirely the illusion of a person, and knowing it is an LLM does not stop the illusion from working on you. If you are using it for flavour, that is fine. If you are using it to make decisions about a dungeon, the advice quality is unconstrained and unreviewed.

**The lore answers are the weakest part.** Any LLM asked about Warcraft lore will produce something confident and plausible. Much of it will be right. Some of it will not be, and nothing in the interface distinguishes the two. Treat "what my companion knows about Northrend" as unreliable.

**The gameplay commands are the interesting claim.** Asking a bot in natural language to change its combat behaviour or hand over an item is a much harder engineering problem than generating flavour text, because it has to map free text onto server state correctly. If that works, it is impressive. It is also the part you should test deliberately rather than assume, since a bot that misunderstands "hold and let me pull first" is worse than one that never listened.

**There is a privacy question nobody is answering.** A feature whose entire premise is that your party chat is being interpreted by a model is sending your conversation somewhere. Whether that is a self-hosted model, a third-party API, or something local is not stated on the site. If you have ever typed anything you would not want logged, that is the question to ask in their Discord before you use it.

Our standard for tracker listings is in [how we review a private server](/blog/how-we-review-a-private-server/), and the review-related point here is narrow: we have not read the bot or chat implementation, so none of the above is verified beyond the project's own description. We did not create an account.

## The rest of what it ships

An **instant level 80 welcome pack** as a free promotional program, for players who have already run Azeroth and want to go straight to Wrath endgame. The stated rationale is respecting your time.

Alongside it: transmog, and a "no-wipe casual progression" structure for a realm whose population is very small. The site positions the realm around not being alone, at three in the afternoon or four in the morning, which given the bot system is a coherent claim rather than a slogan.

It is also a Spanish-language realm, which narrows who it is for and puts it in the same bucket as [Frostbound](/blog/frostbound-warband-guide/), another underserved community served well.

## The honest summary

CoRe Legacy is running a design pattern the rest of the scene has not: a bot population that steps back for real players, and a matchmaker that fills with bots only after it has used every human available. If the threshold tuning is right, that is a better answer to "small realm feels dead" than simply adding more bots.

The LLM chat is the part to try before you believe, and to ask hard questions about.

SOURCES: CoRe Legacy's own homepage, in Spanish, read September 27, 2026, plus our prior tracker check of September 14. We did not create an account, did not play, and did not inspect the bot or chat implementation; all behavioural claims are the project's own. The bot-design context is covered in [playerbots vs PartyBots vs scaling](/blog/playerbots-vs-partybots-vs-scaling/), which is worth reading alongside this because CoRe Legacy is a fourth answer to the same problem.
