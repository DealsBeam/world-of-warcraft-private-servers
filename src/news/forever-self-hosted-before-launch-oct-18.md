---
title: "Forever is already being self-hosted, weeks before launch"
date: 2026-10-18
category: news
summary: "A TrinityCore fork runs the Forever beta client against a VMaNGOS-derived world, and a second packaged stack published today wraps it in Docker with a launcher. The beta gate explains the demand. The terms do not change because the server is small."
---

World of Warcraft: Forever does not launch until **November 4**, and its beta closes **October 21**. Players are already running it anyway. Two public projects now serve Forever clients from private infrastructure, and we read both.

## The TrinityCore fork

The base is a **fork of TrinityCore** at `github.com/advocaite/TrinityCore`, GPL-2.0, with a branch named `forever`. Its README states that the branch runs **TrinityCore master against the WoW Classic beta client 1.60.1.70338** (`_classic_beta_\WowB.exe`), with a **vanilla world converted from VMaNGOS** plus the **Skyborne and Zephras Isle** content, and that preliminary support for the newer **1.60.1.70450** build is documented separately.

The fork ships a Windows repack in its releases so a player can run it without compiling or installing MySQL, a Linux server setup guide, and a "hosting for other players" document. Its own config notes show how tightly the client and server are coupled: the Classic client only accepts **realm 70**, wants `Expansion = 0`, and expects a certificate issued for **`trinity.actual.battle.net`**. A player still has to supply their own matching beta client, because the repository carries no game data.

## The packaged stack published today

A second project, `github.com/jibay442/forever_docker`, GPL-2.0 and created **October 18 2026**, wraps the same idea for people who want less setup. It runs the server in **Docker** with MySQL, a `worldserver`, a `bnetserver` doing Battle.net login over TLS, and a **sign-up website**; players create an account on the site, then download a **launcher for Windows, macOS and Linux** that adds the server to the hosts file, trusts the server's certificate, and logs the player in automatically by placing the server's key into the client **in memory, without modifying the game files**. It requires the client in **exactly build 1.60.1.70450**, and states plainly that it includes **no Blizzard assets** and that the server's game data is extracted from the player's own client.

## Why this is happening now

The demand is easy to explain. Forever's beta is **gated**: access comes with the **Skyborne Epic Pack** and the **Warcraft Forever Collection**, so anyone who did not buy one of those cannot try the game before launch. A self-hosted realm is one of the few ways to see the new content early, and the fork's README says it exists to run the beta with friends.

## What we are reporting, and what we are not

We are describing that these projects exist and what their own documentation says. **We are not publishing setup steps**, and nothing here is an endorsement.

Three things are worth stating clearly:

- **It is against Blizzard's terms**, and the scale does not change that. Blizzard has enforced before: the **Nostalrius cease and desist in 2016**, and in our own record the **Turtle WoW and Stormforge shutdown in May 2026** and the **Ascension network shutdown in September 2026**. Enforcement has historically gone after large public realms rather than one person's laptop, but that is a pattern, not a guarantee.
- **There is a real security cost to the player side.** Both routes involve trusting a certificate authority that the server operator controls. A trusted root CA can sign anything for that machine, and installing the client modifications the projects describe is exactly the kind of change our [client safety note](/blog/the-client-you-did-not-build/) warns about.
- **How much of the new content actually works is unknown.** The forks themselves do not claim parity, and the beta closes on October 21, after which the client this all depends on stops being the current build.

A community account on r/wowservers dated October 14 describes the macOS path in detail, including creating a certificate authority for `trinity.actual.battle.net` and a small injected library that replaced the client's regional key, and it is open that the poster leaned on large language models for the setup work. That account is the poster's own and we have not independently verified it, but it matches the mechanisms the repositories document.

SOURCES: `github.com/advocaite/TrinityCore` branch `forever` (GPL-2.0, 94 stars at our read) and its README, read October 18 2026 for the client build, the VMaNGOS conversion, the Skyborne and Zephras Isle content, the realm and certificate config, and the repack and hosting documents. `github.com/jibay442/forever_docker` (GPL-2.0, created October 18 2026) and its README for the Docker stack, launcher, hosts-file and certificate behaviour, the exact build requirement and the no-assets statement. Blizzard's beta dates, the beta access gate and the November 4 launch come from our [launch calendar](/blog/launch-calendar/) and Blizzard's own posts. The macOS account is from r/wowservers, dated October 14 2026, attributed above and not independently verified. Related: [the Forever stress test and beta window](/news/forever-stress-test-october-21/) and [the tracker](/servers/).
