---
title: "Open Vanilla puts a playable Vanilla realm in a browser tab, with guest mode and a public server package"
date: 2026-10-20
category: news
summary: "An alpha project running a from-scratch 1.12.1 client written in Rust and Bevy, playable at play.openvanilla.app without installing anything. Guest play needs no sign-up, the realm itself was offline when we checked, and the main repository carries no licence file."
---

**Open Vanilla** is a free fan project at `openvanilla.app` that runs a Vanilla realm you can open in a browser tab. Its play page, `play.openvanilla.app`, offers three ways in: **Sign in with Discord**, a **username and password** account, or **Play free as a guest**, which the page describes as "No sign-up. Your heroes stay on this device; link Discord any time to keep them everywhere."

The site labels itself **Alpha v0.1.8**, and the repository's `VERSION` file and latest release both read **1.30.8**, so the two numbering schemes do not match. The project's own README is explicit about the stage: "Open Vanilla is in a private alpha with testers from our Discord."

## What it runs on

The browser client is a hardware accelerated WebGPU engine. The desktop launcher runs a native engine built on **[benilla](https://github.com/samwhosung/benilla)**, an Apache-2.0 project described as "A complete World of Warcraft 1.12.1 client, written from scratch in Rust and Bevy", which had **766 stars** when we checked. That is the real basis for the "in Rust" line on the site: the launcher and server tooling are Python, and the Rust component is the client and the Forge creator app.

Nothing has to be installed to play in a browser. The desktop launcher is the opposite: until the project's own rewritten game data ships, it plays from **the player's own Vanilla game files, build 5875**. Its "Get Vanilla Data" button currently reads "coming soon", and the project says it "never ships or changes anyone else's files".

## Guest play, and what the realm stores

Guest mode is confirmed on the play page, and it is the only path that needs no account. The privacy policy (version 4, dated 20 October 2026) is unusually specific for a fan project. It states that the official realm records gameplay **once a minute** while a character is online (level, experience, money, zone, position, whether dead, quest progress), stored under a keyed pseudonym rather than a character or account name, with raw records deleted after **30 days** and only summaries kept longer. It also states that signing in with Discord asks only for the identify permission, and that the server checks Discord roles to decide whether you may play.

## The rest of the package

- **19 built-in addons** per the README, in a suite that replaces Bags, Meters, Quests, Threat, Casting, Plates, Prices and Vendor, plus originals such as Guilds, Raid and Persona roleplay profiles. The site's trailer line says **11 addons**, so the two counts disagree.
- **Workshop**: one-click addon installs, with the site stating that "every package is scanned and checked".
- **Herald**: a Discord bot that runs the World chat bridge, signs in nightly to test each release, and offers an autopilot that can play your character. Its own characters are marked as bots and excluded from rankings, the auction house and achievements.
- **Self-hosting**: `Open Vanilla Server` packages SPP Classics (CMaNGOS with playerbots), a realm website, Server Studio and a GM console, with a Windows host guide and a Linux VPS script in the repository.
- **Realms listed**: Vanilla Remastered (PvE, online), with Warfront (PvP), Moonguard (RP) and Ascension Resurrected (Fun) marked "soon".

## Two claims worth reading carefully

The project is presented as open source, and ten component repositories are public, most of them **MIT** licensed. The main repository, `orionopenwow/OpenVanilla`, has **no licence file** in its root, which GitHub reports as no licence at all. Source available is not the same as open source, and the strongest licence evidence sits in the sub-projects rather than the repository the project points at.

There is also no security audit. `openvanilla.app/security.html` is a **vulnerability disclosure policy**: report privately, we reply within a week, we credit you in the patch notes. The word "scanned" on the site refers to **Workshop packages**, not to the client or the realm.

## Where it stands

The project's public census feed at `play.openvanilla.app/community/feed.json` returned, at **12:03 UTC on 20 October 2026**: `online: false`, `players: 0`, `adventurers: 36`, `today: 48`, `week: 48`, `discord_members: 45`, `discord_online: 10`. The realm was down at that moment, which is normal for an alpha that comes and goes.

We have added [Open Vanilla to the tracker](/servers/open-vanilla/) as **dev**, tagged `Vanilla`, with the band left **unknown** because a counter reading zero is not a population claim. Guest play is real and needs no account, but the realm is not reliably up yet, and the desktop path still needs your own 1.12 files.
