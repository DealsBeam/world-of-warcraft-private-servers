---
title: "The bot-stack lineage map: who forks what, and why it matters which direction fixes flow"
date: 2026-10-05
category: guides
heroImage: /images/hero-3.jpeg
summary: "AzerothCore sits at the root, mod-playerbots branches off it, and a dozen servers run a dozen different forks. The direction fixes flow tells you which projects will survive their own success."
---

Our architecture post explains how bots work. This one maps **where the code comes from**, because a server running someone else's fork inherits someone else's bugs, and the direction fixes flow is the best predictor of whether a project survives its own growth.

## The root

**AzerothCore**, open-source WotLK 3.3.5a emulation, sits underneath nearly every solo-friendly server we track. On top of it sits **mod-playerbots**: the core module with its playerbots table, chat commands, auction-house bot and random-bot manager.

Everything below branches from those two.

## The three fork strategies

**Upstream everything: ChromieCraft.** Runs AzerothCore, releases content progressively, and pushes all fixes upstream. This is the expensive strategy in the short term and the cheap one in the long term: every fix they write becomes everyone else's fix, including their own future selves when they rebase.

**Fork and maintain: Frozen Throne.** AzerothCore plus community projects plus **maintained custom forks** plus server-specific patches, integrating upstream improvements while keeping custom behavior where it serves the solo design. Their **DungeonClear** fork runs dungeons autonomously with no addon required. This is the capable strategy and the fragile one: every upstream rebase is a merge conflict waiting to happen.

**Consume and customize UI: SoloCraft, Warstorm, the Warband family.** PartyBots and BattleBots AI companions, the Warband roster UI, bots that execute ICC25 HC strategies. These projects innovate at the experience layer on top of shared bot code rather than in the core.

## The outliers that prove the shape

**IceDNicco: ~3,000 living-world bots.** Not a party system but a population simulation: bots questing, grinding, travelling, filling battlegrounds. Different branch of the same tree, solving "the world feels empty" rather than "my group is empty".

**CoRe Legacy: bots that disconnect at peak hours** to cede the stage to real players. A fork with a social policy compiled into it: the bots know when to leave.

**Lighthaven: educational open-source AzerothCore**, strict x1 with opt-in rates. A fork whose purpose is teaching rather than retaining, which inverts every incentive the others have.

**Old Man Warcraft: LLM chat on bots.** The newest branch and the least proven: conversational AI grafted onto game AI, with failure modes nobody has catalogued yet.

## Why direction matters more than depth

A server that **consumes** upstream fixes gets stability for free and pays in sameness. A server that **maintains a fork** gets differentiation and pays in merge debt. A server that **contributes upstream** pays now and gets paid later.

When a solo server dies, the obituary usually names population or money. More often the cause is upstream drift: the core moved, the fork did not follow, and the gap between them became a rewrite nobody had time for. Every maintained fork on this tracker is carrying that debt whether it admits it or not.

The question to ask any bot server is not "how smart are the bots" but **"what happens to your fork when AzerothCore ships a breaking change."** The projects with an answer — upstream everything, or maintain with a rebase discipline — are the ones still here in a year. The ones without one are renting.

## What we cannot tell you

Which forks are actually maintained versus merely claimed. A "maintained custom fork" is a sentence on a website until someone reads the commit history, and commit histories are not published for most of these. We report the claimed architecture and label it as claimed.

SOURCES: our own tracker entries for all named projects, each read first-party with dates recorded. The fork relationships are the projects' own descriptions (Frozen Throne's FAQ names its stack explicitly; ChromieCraft's upstream policy is its own stated position). We have not read any private source code. Related: [the architecture explainer](/blog/playerbot-architecture-explained/), [the solo head-to-head](/blog/solo-wotlk-four-answers-one-problem-oct-5/), and [how we review a private server](/blog/how-we-review-a-private-server/).
