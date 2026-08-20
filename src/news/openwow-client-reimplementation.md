---
title: "OpenWoW: from-scratch WotLK client reimplementation"
date: 2026-08-15
link: "https://github.com/rkabachenko/OpenWow-snapshot"
---
OpenWoW is a from-scratch reimplementation of the World of Warcraft 3.3.5a (WotLK) game client in modern C++, built as a drop-in replacement binary: it reads the standard Data/, Interface/ and WTF/ folders and ships no game code or assets. World rendering, the Lua 5.1 interface system (stock FrameXML and addons run unmodified), and the original wire protocol are all working against era servers, tested against AzerothCore. Released under AGPL-3.0 as a single-commit published snapshot with the reverse-engineering research stripped from the tree.