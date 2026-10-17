---
title: "One client folder per realm: how private server players handle storage"
date: 2026-10-17
category: guides
summary: "Patches from different realms overwrite each other, which is why a shelf of WoW folders is normal here. What the projects themselves say about separating installs, and how to plan the space."
---

*Disclosure: this page contains Amazon affiliate links marked [A]. We earn a commission on qualifying purchases at no cost to you. Products were chosen first for fitting the guide; the links follow. Prices vary by region and change often, so we do not quote them here.*

If you play on more than one private server, you will eventually hit a problem that has nothing to do with the game: **the clients overwrite each other.** Two Wrath realms can ship different patch files, and a patch that a realm requires can break another realm's client. The scene's answer is almost always the same, and it is worth knowing before you lose an evening to a black screen.

## What a project's own setup guide says

This is not folklore. When we read **[lordaeron.eu](/servers/lordaeron/)** for its October 16 opening, its own installation guide stated the rule plainly: keep **one client folder per realm**. It tells players to copy their WoW folder (for example, naming one "WoW Rimeheart") and to put that realm's patch file into that copy only, warning that the other realm's patch must not be present. It also names the cache folders to delete between realms.

That is the pattern across the scene. A private server client is a base game plus that project's patch archives, and the patch is where the conflicts live. Letting two realms share one folder is the most common way to break a working install.

## The launcher era changes some of this

Alternatively, some networks sidestep it with a launcher. **[Whitemane](/servers/whitemane-frostmourne/)** ships a launcher across **Windows, Mac, Linux, and Steam Deck** for its realms, which manages the client for you. Where a project offers one, use it: a launcher is the maintainer doing this folder management on your behalf, and it is the single biggest quality-of-life feature on a multi-realm network.

## Planning the space

Each client copy is a separate install, so the arithmetic is simple: **one folder per realm, per era.** The sizes differ enormously by era, and we deliberately do not print precise gigabytes, because they move with locale files, patches, and what a project ships. The ordering is the useful part:

- A **Vanilla (1.12)** client is the smallest by a wide margin.
- **Wrath (3.3.5a)** is comfortably larger but still modest by modern standards, and it is the era 117 of our tracked entries run.
- **Cataclysm, Mists, Legion and later** clients grow sharply, and a modern client plus a second realm is where a small drive runs out.

If you plan to run three or four realms, buy storage for four installs, not one. That is the single most useful planning rule on this page.

- A roomy internal SSD if you are building or upgrading ([A](https://www.amazon.com/s?k=1tb+nvme+ssd&tag=indkin-20)).
- A budget SATA SSD for an older desktop, which is the one upgrade with a visible effect on zone load times ([A](https://www.amazon.com/s?k=sata+ssd+1tb&tag=indkin-20)).
- A portable SSD if you want the same client copies on a laptop and a desktop ([A](https://www.amazon.com/s?k=portable+ssd+1tb+usb+c&tag=indkin-20)).
- A large microSD card if you are on a handheld, where per-realm folders eat capacity fast ([A](https://www.amazon.com/s?k=microsdxc+1tb+a2+card&tag=indkin-20)).

## Two habits that save real time

1. **Keep one untouched base client.** Instead of copying a folder that is already patched and messy, keep a clean, unpatched copy and duplicate from that. It is the difference between a five-minute setup and an afternoon of troubleshooting.
2. **Name folders for the realm, not the expansion.** "WoW Rimeheart" beats "WoW 3", because in six months you will not remember which one had the working addons.

If a realm ever refuses to launch after another install, the fix is almost always the same: restore the untouched copy, add only that realm's patch, and clear the cache folder. The project's own guide will name the exact files.

## Where this fits with hardware

Storage is the one place where private servers reward spending, and almost nothing else does. Our [hardware floor guide](/blog/hardware-floor-private-servers-oct-9/) makes the case that this workload needs no new CPU, GPU, or RAM, and our [Steam Deck and handheld guide](/blog/wow-private-servers-steam-deck-handhelds/) applies the same logic to portable play. This page is the piece those two assume: the reason a shelf of clients is normal, and how to plan for it.

Current client versions for every realm are on [the tracker](/). Related: [the hardware floor](/blog/hardware-floor-private-servers-oct-9/), [Steam Deck and handhelds](/blog/wow-private-servers-steam-deck-handhelds/), and [the budget laptop and mini PC roundup](/blog/classic-budget-laptop-minipc-oct-12/).
