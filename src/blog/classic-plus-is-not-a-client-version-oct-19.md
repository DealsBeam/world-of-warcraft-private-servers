---
title: "Classic+ is not a client version: how to tell which game a server actually runs"
date: 2026-10-19
category: analysis
summary: "Most 'Classic+' and 'Vanilla+' projects on our tracker actually ship a 3.3.5a client. The label describes the content; the client decides your download, your addons and your launcher, and a project's own pages answer it in about a minute."
---

Private server marketing uses the same words for two different things. **Classic+**, **Vanilla+**, **Classic Plus** and **Mysteries of Azeroth** describe what a world *contains*. They say nothing about which **client** you have to install, and the client is what decides your download, your addons, and whether the folder already on your drive can run it.

This trips people up constantly, and it tripped us up on our own tracker inside a single day. The fixes are dated in the entries, and the distinction is worth understanding before you commit an evening to a 20 GB download.

## The two corrections

**[Project Reforged](/servers/project-reforged/)** was published on October 18 tagged `Vanilla+`, described as a Vanilla base with dual 1.12 and 3.3.5 clients. On October 19 its own pages contradicted that three ways:

- Its **How to Connect** article says, in capitals: **"YOU NEED A WRATH OF THE LICH KING 3.3.5a CLIENT TO PLAY ON THIS SERVER!"**
- Its **Downloads** page offers a launcher and a full client, both marked **COMING SOON**, and names only the **3.3.5a** client.
- Its **Realm Statistics** page labels the realm's game version **Wrath of the Lich King**.

A search of its homepage, connect, downloads, rules, roadmap, statistics and register pages found **no occurrence of "1.12" or "vanilla" at all**. So the dual-client claim was withdrawn: the required client is **3.3.5a**. Its content, however, is Classic+ on the vanilla map, so its tag belongs at `Vanilla+` alongside Frontier and Project Epoch: Reborn. We briefly moved it to `WotLK` before working that out, and reverted it the same day. The client facts stayed corrected either way.

**[Jankcraft](/servers/jankcraft/)** is tagged `WotLK`, and for a different reason. The site never states a client version, so we read the shipped client bundle instead: its asset loader throws unless the manifest describes **WoW 3.3.5a build 12340**. It is also a custom class roster rather than a vanilla-plus world, so its tag and its client agree.

## What our tags actually mean

Our tag records the **content era**, not the client. A realm tagged `Vanilla+` is one whose world is vanilla plus additions, and it may still ask you to install a Wrath client. The required client is a separate fact, recorded in the entry text, because it is the one you have to act on.

That is why the same realm can answer two questions differently:

- **Will I enjoy this?** That is the tag. Frontier is `Vanilla+` because its world is vanilla plus custom content.
- **What do I install?** That is the client, and Frontier's own front page reads **"Vanilla+ on 3.3.5a client"**.

Three vanilla-era clients are in play, and they are not interchangeable:

- **1.12.1** is the original vanilla client.
- **1.14** is the modern Classic Era client, a new engine that is still vanilla era, which is why a vanilla project moving to it does not change era at all.
- **3.3.5a** is the Wrath client, and it is the one a surprising number of vanilla-content projects ship, because the 3.3.5 core and client are the easiest base to build custom content on.

## Why "Classic+" and a Wrath client coexist

This is not a contradiction the projects are hiding. The **3.3.5 core lineage is the most widely maintained branch of the open emulation stack** ([AzerothCore](/blog/wow-emulator-cores-explained/) and TrinityCore both carry it actively), and the 3.3.5 client is the one modders have the most tooling for. So a team that wants to build **new zones, quests and classes** often builds them on the client and core that are easiest to modify, then calls the result Classic+ because of what the world feels like, not because of what the engine is.

The label describes the design. The engine describes the plumbing. Both can be true.

## The 60 second check

Before you download anything, read four things on the project's own site:

1. **The How to Connect or setup page.** Most projects state the required client somewhere in the setup steps.
2. **The Downloads page.** Note which client is offered. If it says "coming soon," note which version is named anyway.
3. **Realm Statistics or Server Info.** Projects that run server software often publish a version label without realising it.
4. **Search the site for "1.12" and "3.3.5".** If a project ships a 3.3.5 client and never once says 1.12, plan for a Wrath client no matter what its tag says.

That is the whole check. It takes less time than reading the marketing paragraph that misled you.

## What the difference costs you

- **A Wrath client** means Wrath-era addons and UI mods, and a bigger install.
- **A 1.12.1 client** means the vanilla addon ecosystem, which is its own small world of maintained forks.
- **A 1.14 client** means Classic-era addons, a modern renderer, and, for some projects, a native cross-platform launcher instead of Wine.

If you keep several realms installed, this is also the reason your folder strategy matters at all ([one client folder per realm](/blog/one-client-folder-per-realm/)). You are not just running two servers. You are running two different clients.

## When the label and the client agree

Two clean examples, both read at first party this week:

**[Evergreen HC](/servers/evergreen-hc/)** states its requirement the way every project should. It needs the player's **own unmodified 1.12.1 client**, with **no launcher and no custom client patches**, and it publishes a Connect page that says exactly that. Vanilla label, vanilla client.

**[RavenCraft](/servers/ravencraft/)** announced on October 18 that it is moving from its Turtle **1.18.1** base to a **1.14** client ([full story](/news/ravencraft-1-14-client-move-oct-19/)). Because 1.14 is vanilla era, its `Vanilla+` tag still describes it correctly. The client is changing. The era is not.

## Why we keep the mistakes on the record

Both corrections are dated inside the tracker entries rather than quietly edited, under the same policy we explain in [how we review a private server](/blog/how-we-review-a-private-server/) and [our correction policy](/blog/tracker-correction-policy-explained/). That includes a correction to this page. We first treated the client as the tag and moved Project Reforged to `WotLK`, then reverted it the same day once the rest of the tracker showed the convention is content-based. A tracker that never admits a wrong tag is not more trustworthy. It is just less checked.

If you are comparing realms and one of them will not tell you which client it needs, that silence is itself information. The projects that make it easy are usually the ones doing the work to keep it running.
