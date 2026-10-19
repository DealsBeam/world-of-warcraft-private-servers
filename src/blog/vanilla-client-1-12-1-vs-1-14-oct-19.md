---
title: "1.12.1 or 1.14? The client choice now splitting vanilla private servers"
date: 2026-10-19
category: explainers
summary: "RavenCraft is moving to a 1.14 client. Evergreen HC will only accept an unmodified 1.12.1. Both are vanilla. The difference decides your addons, your launcher, and how heavy the game feels on an old PC."
---

"Vanilla" is no longer one client. On the servers we track it now means at least three things:

- the **original 1.12.1 client**, unchanged since 2006
- **homegrown modernised 1.12 clients**, shipped by projects that want the old game on a newer engine
- the **1.14 Classic Era client**, Blizzard's modern vanilla-era client

Two announcements this month make the split concrete. [RavenCraft](/servers/ravencraft/) is moving to **1.14**. [Evergreen HC](/servers/evergreen-hc/) will only accept **your own unmodified 1.12.1**. Neither project changed what its world is. Both changed, or refused to change, the thing you actually install.

## What RavenCraft is doing

On **October 18 2026** RavenCraft announced a move from its Turtle **1.18.1** base to a **1.14** client. The operator's announcement, cross-posted to r/wowservers, says accounts, characters, quests and every piece of custom Turtle content carry over. It promises enhanced visuals and atmospheric effects with the **original textures intact**, dynamic weather, more memory, a stronger engine and better support for custom content.

It also promises a new **official cross-platform launcher for Windows, Linux and Steam Deck**, running natively with **no Wine required**. That replaces IchaLaunch, the launcher its [starter guide](/guides/ravencraft/) has listed since launch. The move is framed as a release event called **Delving the Core**, with a Gilnean Raven companion and 300 Raven Coins as rewards.

None of it has shipped yet. No date was given, the site still advertises the old client versions, and the old launcher is still the one on the download host. We covered that gap in [the news story](/news/ravencraft-1-14-client-move-oct-19/).

## What Evergreen HC is doing

Evergreen HC went the other direction: it will not use a launcher or a patched client at all. Its Connect page requires the player to supply their **own 1.12.1 client**, edit `realmlist.wtf`, and launch `WoW.exe`. The server's pitch is permanence: one life, no seasons, no wipes, and a hardcore ruleset where death is announced server-wide and resurrection does not work.

That design choice explains the client choice. A permanent 1.12.1 realm has to be reproducible years from now, and "bring your own unmodified client" is the least fragile way to guarantee that. A modern client with a custom launcher is easier to update and harder to keep permanent.

## The middle path

There is a third option that gets less attention: projects that ship a **modernised 1.12 client** rather than moving to 1.14. [OctoWoW](/servers/octo-wow/) is the clearest example we track. Our [setup guide](/guides/octowow/) covers its toolchain, including OctoUpdater and SuperApi, and it exists because a lot of Turtle and Vanilla+ players wanted a maintained 1.12 client without switching eras.

So the real menu is three wide, not two:

| Client | Era | Addons | Launcher | Notes |
|---|---|---|---|---|
| 1.12.1 original | Vanilla | 1.12 addon API | none needed | Runs on almost anything, era-accurate |
| Modernised 1.12 | Vanilla | 1.12 addon API | project launcher | Old game, newer engine |
| 1.14 Classic Era | Vanilla | Classic-era addons | project or Blizzard launcher | Modern renderer, more memory |

## What actually changes for you

**Addons.** This is the biggest practical break. A 1.12.1 client loads 1.12 addons. A 1.14 client loads Classic-era addons. The two ecosystems are not interchangeable, and a project that migrates usually has to tell its players which of their addons still work. If you maintain a UI you like, this is the part to check first.

**Launchers and Linux.** A launcher that handles patching is convenient until it is the only supported path. Native Linux and Steam Deck support is a genuine improvement over running an old client through compatibility layers, which is exactly what RavenCraft is promising. Evergreen HC's no-launcher rule is the opposite trade: fewer moving parts, more manual setup.

**Performance.** A modern client uses more memory and renders more, which is why it can look better and why it is heavier on old hardware. A 1.12.1 client is the lightest way to play the game. If your machine is the constraint, this decision matters more than any graphics setting.

**Moddability.** The 1.12 client has been reverse-engineered for two decades, which is why custom content is so deep there. The 1.14 client is newer to the scene and its tooling is younger. A project moving to it is betting that the engine gains outweigh the maturity it leaves behind.

## How to know which one a project uses

Do not trust the words "vanilla" or "Classic+" on a listing. Read the project's own setup page, downloads page and server info, and search the site for the version number. We wrote a [short checklist](/blog/classic-plus-is-not-a-client-version-oct-19/) after getting two of our own tags wrong, and it takes about a minute.

## There is no universal right answer

A permanent hardcore realm and a custom-content realm want different things from a client. Evergreen HC's 1.12.1 requirement is a feature of its permanence promise, not a failure to modernise. RavenCraft's 1.14 move is a bet on the engine, not a rejection of vanilla. Both are vanilla servers. They will simply ask you to install different games to play them.
