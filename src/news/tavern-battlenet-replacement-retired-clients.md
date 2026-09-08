---
title: "Tavern rebuilds Battle.net login for retired Classic clients"
date: 2026-09-08
summary: "Rust replacement for Blizzard account services keeps retired Classic builds loggable. Three services, explicit scope: dead clients only, never live ones."
---
<!--
SOURCES: wowemulation-dev/tavern README (AGPL, 262 commits, 4 stars).
-->

Someone rebuilt Battle.net login so dead clients keep working. That project is Tavern, and its scope statement is the story.

## TL;DR

Rust account/auth/BGS stack for retired Classic builds (1.13–4.4.2 cutoffs). OAuth, SRP6a, login queues, load-test harness. Explicitly not for live Blizzard services.

## What it provides

Three services, one Postgres: OAuth/OIDC provider, account server (browser + game-client login, registration, dashboard), BGS transport (TCP v1 + WebSocket v2). Wire formats validated against real captures. Load-test clients included.

## The scope line that matters

"Preservation of retired client builds, not circumvention of any active commercial offering." Cutoffs end where live services begin (Era 1.15.x, Titan Reforged, MoP Classic, Anniversary 2.5.5, Midnight excluded by name). Self-limiting preservation — the kind that survives legal daylight.

## Why it matters here

Servers get the headlines; account infrastructure is the quieter half of "will this still log in." Tavern + open clients (WoWee, Benilla, OpenRealm) = full-stack community ownership of the retired game. Already in our tools list; now with context.
