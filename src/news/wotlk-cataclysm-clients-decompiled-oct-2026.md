---
title: "The WotLK and Cataclysm clients have been decompiled to C++, with the source public"
date: 2026-10-18
category: news
summary: "Two repositories rebuild the 3.3.5a and 4.3.4 game clients as compilable C++ source, with per-function addresses kept for comparison, no game data, and build notes for a 64-bit client. Server emulation has been open source for years. The client was the closed half."
---

The private server scene has had open source servers for years and a closed source client for just as long. That second half changed in mid-October: a developer publishing as **SatyPardus** released C++ **decompilations of two retail clients**, `wowdecomp` for **Wrath of the Lich King 3.3.5a (build 12340, June 2010)** and `wowdecomp15595` for **Cataclysm 4.3.4 (build 15595)**. We read both repositories directly.

These are **reconstructions, not leaks**. Blizzard has never released client source, and neither repository claims otherwise. Each function was rebuilt from the original binaries, so the result approximates the original program without being identical to it.

## Progress as the repositories measure it

The projects count a function as ported when its original address is tagged somewhere in the new source. Both sets of numbers are the projects' own, measured this month.

| Client | Binary | Ported functions | Ported code bytes | Measured |
| --- | --- | --- | --- | --- |
| WotLK 3.3.5a (12340) | x86 | 24,515 of 27,157 (90.3%) | 93.2% | October 15 2026 |
| Cataclysm 4.3.4 (15595) | x86 | 30,790 of 31,300 (98.4%) | 98.2% | October 16 2026 |
| Cataclysm 4.3.4 (15595) | x64 | 26,401 of 38,179 (69.2%) | 79.7% | October 16 2026 |

The Cata README is explicit that its x64 figure reads lower partly because many x64 addresses are still being attached to functions that are already ported, and that these percentages measure **how much of the original binary has a counterpart in the source, not how much of the game works**. The WotLK README goes further and says its client "builds into a complete executable and the game is 100% playable", while still warning that a ported function can behave differently from the original. Treat that as the author's assessment, not a test result.

## How the two projects work

They share a design worth understanding, because it is what makes the output auditable:

- **Every function keeps its origin address** in an `// OFFSET:` tag, so any function can be compared against the original binary. The Cata project extends this with tags for addresses carried over from **4.0.6a (13623)** and **3.3.5a (12340)**, plus an `INLINED` marker for functions the compiler inlined everywhere.
- **The tree mirrors the original client**: engine modules such as Storm, the Direct3D 9 and OpenGL layer, FrameXML and Lua under `Engine/Source`, and game modules for objects, world rendering, networking and the client database under `WoW/Source`.
- **No game data is included.** You supply your own matching client, extract its data, and point the realmlist at a server.
- **Third-party libraries are linked, not decompiled**: FreeType, zlib, PCRE and parts of FMOD Ex come from upstream, which is why the totals exclude them.
- **x64 is the main target** in both. Win32 builds are kept mainly to check 32-bit struct layouts against the originals. The 64-bit WotLK build swaps the original 32-bit `DivxDecoder.dll` for an Xvid-based decoder.
- **Build requirements** are Windows 10 or 11 with Visual Studio 2022 and CMake. The WotLK repository also exposes a CMake option, `WOWDECOMP_DISABLE_SIGNATURE_CHECKS`, that **skips the MPQ and `.toc.sig` signature checks** so modified game data and interface files load, and a `WowClient` build target that adds a crash logger.

Neither repository states a license. `wowdecomp` had 306 stars and `wowdecomp15595` had 27 at our read, and both were pushed the day we looked.

## Why a decompiled client matters

Server frameworks for these exact clients, AzerothCore and TrinityCore among them, are long established. The client was the half you could not modify cleanly. Changing it meant patching bytes, shipping DLL extensions, or reverse engineering one feature at a time. With readable, compilable source, a client change becomes an ordinary code change that goes through a compiler, and a 64-bit client removes the memory ceilings a 32-bit program imposes on things like large addon memory and high resolution asset loading.

Two caveats come straight from the repositories rather than from us. First, **coverage is not parity**: the Cata README says outright that a ported function can still behave differently. Second, the provenance is Blizzard's binaries, so the code is **derived from copyrighted software**, is unlicensed here, and conflicts with Blizzard's terms. Blizzard has enforced against private servers before, most visibly with the **Nostalrius cease and desist in 2016**, and in this project's own record with the **Turtle WoW and Stormforge shutdown in May 2026** and the **Ascension network shutdown in September 2026**. We are not offering a legal opinion on publishing or building either project.

SOURCES: `github.com/SatyPardus/wowdecomp` and `github.com/SatyPardus/wowdecomp15595`, READMEs read October 18 2026 for the progress tables, build requirements, address-tag scheme and the signature-check option. The story surfaced through a Warperia article dated October 16 2026; the numbers, options and repository state above come from the repositories themselves, not the article. Blizzard enforcement dates come from [our own shutdown coverage](/news/ascension-shutdown-sep-4/). Related: [client projects we track](/blog/tracker-census-october-2026/) and [the client you did not build](/blog/the-client-you-did-not-build/).
