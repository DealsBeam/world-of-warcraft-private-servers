---
title: "Client tooling update: IchaLaunch launcher for Ravencraft, OpenWoW client milestone"
date: 2026-08-25
---

Two client-side projects updated today — both relevant to servers we track.

## IchaLaunch — Ravencraft / Turtle WoW launcher

brutaliccus/IchaLaunch is a PySide6/Qt launcher for Ravencraft and Turtle WoW with addon and client mod management. It bundles as a standalone executable via PyInstaller. Updated today (pushed 2026-08-25). This is the official launcher for [Ravencraft](/servers/ravencraft/) (tracked: Vanilla+, launched Aug 22).

## OpenWoW — 3.3.5a client reimplementation

rkabachenko/OpenWow-snapshot hit a new milestone: a from-scratch C++20 game client for 3.3.5a (build 12340) that works as a drop-in replacement. Reads existing Data/, Interface/, WTF/ folders. Renderer: bgfx (Vulkan/Metal/DX11/GL). Windowing: SDL2. Video: FFmpeg. Lua 5.1 FrameXML/addon compatibility. Tested against AzerothCore. AGPL-3.0. 23 stars, 7 forks, active (pushed 2026-08-25).

## Why this matters

- **IchaLaunch** gives Ravencraft players a modern, managed client experience — addon updates, mod profiles, one-click launch
- **OpenWoW** proves a clean-room 3.3.5a client is viable; long-term this means players aren't locked to Blizzard's 15-year-old binary
- Both projects are active *today* — not archived, not abandoned

We track [Ravencraft](/servers/ravencraft/) (Vanilla+, 2026-08-22 launch) and maintain a [news entry on OpenWoW](/news/openwow-client-reimplementation/).