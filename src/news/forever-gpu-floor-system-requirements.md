---
title: "Forever GPU floor and system requirements: GCN 1, Maxwell, Skylake and up"
date: 2026-09-22
game: wow
description: "Blizzard sets the Forever graphics floor at AMD GCN 1, NVIDIA Maxwell and Intel Skylake for RGBA16F UAV compute shaders, with full minimum and recommended specs published."
tags: [wow, blizzcon-2026, classic-plus, beta]
---

September 18, 2026: the one-line GPU floor in the [player workarounds](/news/forever-beta-player-workarounds/) now gets its full table. Per [Mein-MMO](https://mein-mmo.de/en/wow-no-longer-runs-on-your-toaster-with-forever-needs-more-modern-graphics-cards,1588548/) (Karsten Scholz, Sep 18) reading Blizzard's official requirements page, Forever drops older card generations because its graphical enhancements need **RGBA16F UAV support in compute shaders**, a feature introduced around 2012.

The floor, by microarchitecture or newer: **Intel Skylake (2015), AMD Graphics Core Next 1 (2012), NVIDIA Maxwell (2014)**. Compatible examples include Radeon HD 7850, GeForce GTX 750/750 Ti and 9xx series, Intel HD Graphics 530. Incompatible examples: Radeon HD 6950, GeForce GTX 760/770/780 and 8xxM laptop parts, Intel HD Graphics 6000. Note the trap for Kepler owners: some 2014 NVIDIA cards still fail because architecture, not year, decides.

Full specs as published:

- Minimum: Windows 10 64-bit (May 2019 Update or newer); 4 cores at 3.0 GHz (Intel Haswell or AMD Ryzen Zen); DirectX 12 with 4 GB GPU (GeForce GTX 10 series, AMD RDNA 1, or Intel Iris Xe2-LPG Lunar Lake); 8 GB RAM; 128 GB SSD.
- Recommended: Windows 11; 8 cores with 5.2 GHz boost (Intel Core Ultra Series 2 or AMD Ryzen Zen 5); DirectX 12 with 8 GB GPU (GeForce RTX 40 series, AMD RDNA 3, or Intel Arc B-Series); 16 GB RAM; 128 GB SSD.

To check a card: Settings, System, Display, Advanced display; or Device Manager under Graphics cards. Caveat as always with pre-release specs: the floor can move before the November 4 launch, but anyone running recent games clears it easily.

SOURCES: Blizzard system requirements page (via Mein-MMO, Sep 18).
