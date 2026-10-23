---
title: "Twelve days after the C&D, Ascension's CoA became a self-hosting repack"
date: 2026-10-23
category: news
summary: "The realm shut down Sep 4 after Blizzard's lawsuit. By Sep 16 a community guide on GitHub documented running the repack locally or online, files distributed through Discord, with a bot package alongside."
---

**Conquest of Azeroth**, the Ascension network realm with 21 custom lore-derived classes, shut down on **September 4** in the wake of Blizzard's federal case against the network's operators (No. 8:26-cv-01506, C.D. Cal.). Twelve days later, on **September 16**, a GitHub repository called [CoA-Hosting-Guide](https://github.com/ScikuVRC/CoA-Hosting-Guide) appeared, and it is a complete beginner's walkthrough of running that game world without anyone operating it.

## What the guide actually documents

The repo, six commits by an author going by BZRK and ScikuVRC, describes a **repack**: the server half of Ascension's CoA, bundled with batch files to start and stop everything, an update script, and a configuration path that assumes Windows, Notepad++ and HeidiSQL. The mechanics are the standard AzerothCore shape: `acore_auth` databases, a Worldserver and Authserver whose `BindIP` you flip from `127.0.0.1` to `0.0.0.0` to go online, and a `Manage.py` script that edits the realmlist row directly with a MySQL UPDATE so your friends can point at your public IPv4.

The files themselves are not on GitHub. The guide points to Discord channels inside what is evidently the game's long-running community server, and a [Reddit thread on r/ProjectAscension](https://www.reddit.com/r/ProjectAscension/comments/1wfy7wd/) relays an "open implementation" of an Ascension CoA server posted to RageZone, describing a full client plus repack and noting that the code also exists as open source on GitHub, which is where the separate **Conquest of AzerothCore** project we already track lives, 272 stars and 193 forks as read today.

There is also a **CoA Bots** package with its own installer, so the repack keeps the project's bot integration, and optional database tooling with default credentials copied straight out of the bundled config into the guide's text.

## What it means

The shutdown took the operator, the realms, the launcher and the store. It did not take the artifact. A server binary diffused across a Discord community has no web presence to seize and no single point to shut down, and the guide's own framing is that the whole path from "download repack" to "your realm, run by you" is a beginner task. Preservation projects like the Ascension archive work we have already linked do this deliberately; this one replicates the outcome informally, one household server for friends at a time.

## The caveats, stated plainly

We have not downloaded, run or verified any of these files, and this piece is reporting that the guide exists, not endorsing it. Three things a reader should hold onto. First, the repack's provenance is unverifiable from here: community-distributed binaries from a Discord channel get no signature and no published hash in the guide. Second, the guide publishes **default database credentials in plaintext**, meaning anyone who runs the repack and then opens it to the internet on `0.0.0.0` while following the guide verbatim is serving a database whose password is printed in the manual. Third, the legal picture is unchanged by the shutdown: the C&D concluded in a mutual agreement, the code's licensing status is unclear, and running a repack of a shut-down commercial project carries whatever risk that always carried.

SOURCES: [CoA-Hosting-Guide on GitHub](https://github.com/ScikuVRC/CoA-Hosting-Guide), read in full today including the readme.txt and commit history (initial commit Sep 16 2026, last update Sep 19 2026); the community thread on r/ProjectAscension; the existing coverage of the shutdown in [our tracker entry](/servers/). Related: [the open-source port that became Conquest of AzerothCore](/news/ascension-classes-azerothcore-port/), [the Ascension shutdown itself](/news/ascension-shutdown-sep-4/), and [the grading scale](/grading/).
