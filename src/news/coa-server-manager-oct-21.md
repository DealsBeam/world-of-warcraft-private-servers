---
title: "Conquest of AzerothCore now has a one-click Windows server manager, and it runs the Wildcard realm"
date: 2026-10-21
category: news
summary: "CoA Server Manager is an AGPL-3.0 Tauri app that installs, updates, backs up and launches a Conquest of Azeroth server from signed packages, switches between the CoA and Wildcard realms, spawns bots, and handles friends over LAN, direct IP or Tailscale. The game data it ships is not covered by its licence."
---

A reader pointed us at **`Corfirean/coa-server-manager`**, and it is the most complete attempt yet at making a private server a desktop application rather than a wiki page of steps.

It is a **Windows desktop app**, **AGPL-3.0**, built with **Tauri 2, Rust and React**, created on **30 September 2026**, with **46 stars and 15 forks** at our read and commits pushed today. The current release is **0.6.22**, published **19 October**.

## What it does

**Install.** One click downloads a **signed, verified** server package, resumable and checked file by file, then sets up the database and creates the first account. Or you import a server you already have.

**Run.** A single button starts the database, the auth server and the world server, with live status, uptime and players online. The same button launches the game client with the correct realmlist.

**Keep the client.** Point it at a 3.3.5a client you own, or let it download one, about **43 GB**, resumable with every file verified. A client the Manager watches gets update checks, and files you have changed yourself are never replaced unless you say so.

**Update safely.** It checks for a new server version on start and every five minutes, so the main button turns into UPDATE. Updates are **authenticated with Ed25519**, it backs up first, it keeps the files you changed, and it can roll back.

**Back up.** Characters, accounts and settings, on demand or automatically before every update, with restore from inside the app.

**Play with friends.** It checks whether your server is reachable, opens firewall rules, finds your router through UPnP, and supports LAN, direct and **Tailscale** play, with guides and a package to send to friends.

**Manage the world.** Named realmlists with a drop-down switcher that saves the file it replaces, an account page with password and access-level changes, a modules page for the server's optional extras, and a bug-report form that pre-fills your versions into a GitHub issue. Five languages: English, Russian, German, French, Spanish.

## The part that matters most for a reader here

**CoA and Wildcard realms.** The app lets you choose which realm is active. A **server build with Wildcard support is required**, and the first switch copies world data and creates an empty character database. Accounts are shared, characters and module settings are separate, and only one world runs at a time. Switching a running server saves the characters and restarts it. CoA companions are unavailable on Wildcard, other optional modules are described as experimental, and backups cover both realms.

That connects directly to what the public test realm was doing this morning. The official CoA site's own status feed showed three realms running: **CoA with 27 players online, Wildcard with 1 and Warcraft Reborn with 9**, all three up, with Wildcard known since 2 October and Warcraft Reborn since 19 October. This manager runs the same content on your own machine, and the Wildcard classless-hero mode is the piece people have been asking about since the operators described it as fully online.

**Companions.** The bot system fills the world with level-appropriate companions, shows progress, stops spawning, takes them offline, despawns a number to relieve the server, and lets you choose how many log in at server start.

## The caveats

**Windows only.** The install instructions are PowerShell, the paths are Windows paths, and the test suite drives the real window through WebView2 remote debugging. There is no macOS or Linux build in the repository.

**Licence obligations.** AGPL-3.0 means anyone who offers the software over a network has to offer its source. The repository keeps the licence clean for its own code: the server it installs comes from a public fork of AzerothCore, `Corfirean/azerothcore-wotlk-coa`, with the MaNGOS-derived parts under GPL-2.0-or-later and the AzerothCore-original files under AGPL-3.0, plus a `mod-coa-playerbots` module under AGPL-3.0. The exact commit behind every package is written into the manifest, so the matching source is always available. MySQL keeps its own GPL-2.0 licence.

**The game data is the gap.** The README is direct about it: the `Data` folder contents, `dbc`, `maps`, `vmaps` and `mmaps`, were **extracted from the client of the discontinued Ascension "Conquest of Azeroth" realm and are not covered by this licence**. That is the same data any private server needs and the same unresolved question about it, and it does not become legal because a licence file covers everything around it. Blizzard's enforcement posture towards private servers, including the 2025 cease-and-desist letters, is on the record in [our shutdown timeline](/news/private-server-shutdown-risk/). Anyone running this is making that decision themselves.

**Disk and time.** About 10 GB for the server, 43 GB more if you let it fetch a client, and the first install runs a full package verification.

## How it fits the pattern

This is the same shift we wrote about this afternoon in [the server that moved into the download](/blog/server-in-the-download-oct-21/). The operator is no longer a person with a wiki page and a rented box. It is a signed package, a verified download and a button.

What is genuinely careful here is the update path: Ed25519 signatures, a backup before every change, files you edited left alone, and a rollback. That is the part of running a private server that usually goes wrong, and the Manager treats it as a first-class feature rather than a script.

It is not the official tooling for the public test realm, and the project's own site does not link to it. It is a community project, and it is the most complete one we have seen for running a Conquest of Azeroth server at home.

SOURCES: the repository at github.com/Corfirean/coa-server-manager, read on 21 October 2026, including README, CHANGELOG and the licence section, plus the release list through 0.6.22 of 19 October 2026. Realm population figures are the official CoA status feed at coa-development.org/api/status, read at 11:42 UTC on 21 October 2026.
