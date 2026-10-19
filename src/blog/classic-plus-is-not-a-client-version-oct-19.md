---
title: "Classic+ is not a client version: how to tell which game a server actually runs"
date: 2026-10-19
category: analysis
summary: "Two entries on our own tracker were tagged Vanilla+ and turned out to require a Wrath client. The label describes the content. The client decides the era, your addons and your download, and a project's own pages will tell you which one it is."
---

Private server marketing uses the same words for two different things. **Classic+**, **Vanilla+**, **Classic Plus** and **Mysteries of Azeroth** describe what a world *contains*. They say nothing about which **client** you have to install, and the client is what decides your download, your addons, and whether the folder already on your drive can run it.

We got this wrong twice on our own tracker. Both fixes are dated in the entries, and both are worth understanding before you commit an evening to a 20 GB download.

## The two corrections

**[Project Reforged](/servers/project-reforged/)** was published on October 18 tagged `Vanilla+`, described as a Vanilla base with dual 1.12 and 3.3.5 clients. On October 19 its own pages contradicted that three ways:

- Its **How to Connect** article says, in capitals: **"YOU NEED A WRATH OF THE LICH KING 3.3.5a CLIENT TO PLAY ON THIS SERVER!"**
- Its **Downloads** page offers a launcher and a full client, both marked **COMING SOON**, and names only the **3.3.5a** client.
- Its **Realm Statistics** page labels the realm's game version **Wrath of the Lich King**.

A search of its homepage, connect, downloads, rules, roadmap, statistics and register pages found **no occurrence of "1.12" or "vanilla" at all**. The project calls itself Classic+. The client it requires is Wrath.

**[Jankcraft](/servers/jankcraft/)** failed the opposite way in September. The site never states a client version, so we left it `Vanilla+`. Reading the shipped client bundle instead was unambiguous: its asset loader throws unless the manifest describes **WoW 3.3.5a build 12340**. Retagged to `WotLK`.

## The rule we now apply

**The tag follows the client the project requires or ships.** The content label describes the world. The client defines the era, and the era decides which addons load, which launchers work, and which model patches apply.

That also explains why the labels and the clients are not as contradictory as they look:

- **3.3.5a is the Wrath client.** A project built on it is a Wrath project for tagging purposes, even when its world is Azeroth with new zones and no Wrath content.
- **1.12.1 is the original vanilla client.**
- **1.14 is the modern Classic Era client.** It is a new engine, but it is still *vanilla era*, which is why a vanilla project moving to 1.14 does not change era at all.

## Why "Classic+" and a Wrath client coexist

This is not a contradiction the projects are hiding. The **3.3.5 core lineage is the most widely maintained branch of the open emulation stack** ([AzerothCore](/blog/wow-emulator-cores-explained/) and TrinityCore both carry it actively), and the 3.3.5 client is the one modders have the most tooling for. So a team that wants to build **new zones, quests and classes** often builds them on the client and core that are easiest to modify, then calls the result Classic+ because of what the world feels like, not because of what the engine is.

The label describes the design. The engine describes the plumbing. Both can be true.

## The 60 second check

Before you download anything, read four things on the project's own site:

1. **The How to Connect or setup page.** Most projects state the required client somewhere in the setup steps.
2. **The Downloads page.** Note which client is offered. If it says "coming soon," note which version is named anyway.
3. **Realm Statistics or Server Info.** Projects that run server software often publish a version label without realising it.
4. **Search the site for "1.12" and "3.3.5".** If a project ships a 3.3.5 client and never once says 1.12, treat it as Wrath.

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

Both corrections are dated inside the tracker entries rather than quietly edited, under the same policy we explain in [how we review a private server](/blog/how-we-review-a-private-server/) and [our correction policy](/blog/tracker-correction-policy-explained/). A tracker that never admits a wrong tag is not more trustworthy. It is just less checked.

If you are comparing realms and one of them will not tell you which client it needs, that silence is itself information. The projects that make it easy are usually the ones doing the work to keep it running.
