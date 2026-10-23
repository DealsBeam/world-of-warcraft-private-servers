---
title: "Self-hosting a WoW repack after a shutdown: what the files are, and what to check before running one"
date: 2026-10-23
category: explainers
game: wow
summary: "When a realm dies, its files usually survive, and community repacks are how. A real example from Ascension's Conquest of Azeroth shows the whole pattern, including the default password printed in the manual. Here is what a repack actually is and the checklist we use before running one."
---

On September 4, Blizzard's legal action put the Ascension network's realms down. On September 16, a GitHub repository appeared that walks any Windows owner through running one of those dead realms themselves, on their own machine, for their friends. This is not an unusual sequence. This piece explains the system underneath it, because the pattern shows up after every shutdown, and it is worth knowing what you are holding.

*Our news coverage of the guide itself is [here](/news/coa-repack-afterlife-oct-23/). This piece is the general explainer with the practical checklist, aimed at people who will actually host something.*

## What a "repack" is

A repack is a pre-built bundle of four things: a **server core** (the emulator, almost always derived from an open-source project such as AzerothCore, TrinityCore, MaNGOS or CMaNGOS), the server's **database** (accounts, characters, items, quests, sometimes years of custom content), the **client patch files and realmlist configuration** that tell the game where to connect, and a handful of convenience scripts, usually `start`, `stop`, `update` and sometimes a bot installer.

The name comes from the packaging, and it matters that a repack is not a project. The project is lineages of code maintained publicly in a git repository, reviewable, with an issue tracker. A repack is somebody's compiled snapshot of that, plus private work nobody can review, handed out as an archive. Some repacks honestly credit the open-source base and publish diffs. Many do not do either.

## The three species you will meet

**The preservation repack**, built to keep a dead realm's content alive: databases extracted from the shutdown, data archives, and the code to run them. The Ascension community's archive work on this fall has been exactly this species, and the CoA-Hosting-Guide example sits in that same wave.

**The convenience repack**, someone's fork packaged because five friends wanted a server tonight. Mostly harmless on a LAN, occasionally the seed of something bigger.

**The trap repack**, which mixes working game code with an added payload, an installer that pulls something at runtime, or a database whose admin account ships with a known password and which the instructions tell you to expose. This is not hypothetical; the darker history of private-server hosting is full of it, and it is the reason our tracker marks entries where a download has no published hash or file manifest.

## A checklist before you run any of it

**One: source provenance.** Where did this archive come from? A project's own repository or a known community archive is one thing. A channel named after a download in a collapsed community's Discord is another; that channel is invisible to search and has no published history. If the repack adds closed changes on top of an open core, look for a written changelog. None? Treat every binary in it as untrusted input.

**Two: hashes.** Does the distributor publish SHA-256 sums, and does your copy match? One realm we track publishes its launcher hash publicly with the stated reason that a code-signing certificate costs more than the project charges. That is the standard. When a repack guide hands you a multi-gigabyte archive from a chat application and a `.bat` file that runs it with nothing to compare against, "verify the download" is on you alone.

**Three: the default credentials.** Bundled configs ship defaults, because every install starts the same. On the emulators this most often means the `acore` MySQL user and a password sitting in the config file in plaintext. The CoA guide we noted last month does not hide this; it prints the default password for its own repack in the text. If the bundle has never been published anywhere except one chat channel, assume that password is known to every other reader of that channel.

**Four: every confinement window.** The universal instructions read `BindIP = 0.0.0.0` so your friends can get in. That flag does not care who your friends are. If you follow it, the server will accept connections from anywhere the internet maps to you, and almost every repack guide pairs it with "remember to open the port". Assume that a listener reachable from the internet is reachable by everyone who read the same instructions. Port forward narrowly, bind only what must be public, and keep the database, and anything with a published plaintext password, on the private side.

**Five: actual updates and actual consequences.** Officially cited realms push fixes because an operator lives there. A repack does not receive updates, and hosting one means being its operator: backups, restarts, restores, and a report to your friends when it breaks. Bugs with published CVEs stay published, and an emulator bug that deletes items when a counter overflows does not care whether your realm is small. The one [AzerothCore outage that wiped inventories on a six-year-old realm](/news/chromiecraft-october-14-outage-post-mortem/) we covered in October is a live example of what running unattended for years looks like.

**Six: what is legal, stated plainly.** The game client is copyrighted software. The server emulator's license, GPL-2.0 or GPL-3.0 in the established projects, gives you rights to the code and expects them respected downstream. But nothing licenses the client, and the distribution of Blizzard's content files you will inevitably find bundled with a repack is not authorized by anyone. A project that met a lawyer like the Ascension network did does not lose those facts when it stops operating; every extra machine running its files is one more publicly visible copy. Risk does not disappear just because you are a private small group. We do not host files or run realms ourselves; we write about the world as it is. Your risk assessment is up to you.

**And after all of this, one useful rule: keep it small and give it a password.** A realm for four friends behind a properly forwarded port with changed default credentials and a backup you have actually tested is doing this hobby's one genuinely good thing: keeping a world playable that nobody else will maintain anymore.

## Why we think this matters in 2026

The graying of the private server scene is also its consolidation: fewer large projects, more operators, and tighter enforcement from the holder of the original copyright. The repack layer is what happens underneath that process, and it is worth understanding, because it is simultaneously the best thing about the scene, that a world people loved does not have to die, and the most dangerous thing about it, that the tools for love and the tools for misuse are the same archive file. Between those two facts sits the habit that separates one from the other, and that habit can be learned entirely from this checklist: know where your files came from, check what is inside, change what was never changed, and share only as much as you choose to share.
