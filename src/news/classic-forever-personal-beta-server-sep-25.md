---
title: "Classic Forever 1.60.1 server project reaches the beta, with launcher risk"
date: 2026-09-25
game: wow
description: "A Reddit project maps to a public Classic Forever repository with live status, but access is private and its unsigned launcher patches the beta client. Treat it as a security-sensitive development server."
tags: [wow, vanilla-plus, classic-plus, beta, security]
---

A Reddit post describes a personal **Classic Forever** server running the 1.60.1 beta client. The author says it is capped at level 20, follows the official beta zone-for-zone, has no donations or shop, and gives access through a shared account and launcher after DM approval.

The project has a public first-party repository and status feed. The feed reported both login and world online during this crawl, and a direct port check found both service ports reachable. The repository publishes source, release metadata, SHA-256 files, and supported client builds. It does not publish a player count or open registration.

## Security warning

The launcher is not a normal game installer. Its source says it changes the beta client's configuration and writes a server public key into the client process memory. Releases are unsigned, and the project warns that antivirus software may flag the executable. The Reddit thread also contains reports of an earlier Google Drive batch file, which was not independently verified.

Treat this as a high-risk development server. Use the source repository for review only, verify any binary independently, and do not treat shared credentials or an unsigned launcher as safe by default. Tracker listing stays at `dev` because access is invite-only and the project is still being assembled.

SOURCES: [Reddit discovery thread](https://old.reddit.com/r/wowservers/comments/1wp0aoo/running_my_own_personal_wow_forever_server_1601/) and [public launcher repository](https://github.com/defexnicolas/wow-classic-launcher). The repository links to its first-party status feed.
