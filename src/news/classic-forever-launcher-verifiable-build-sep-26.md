---
title: "Classic Forever launcher ships reproducible builds and a hash I could verify"
date: 2026-09-26
game: wow
description: "The Classic Forever launcher moved to v1.1.2 with GitHub Actions builds, published SHA-256 in release notes and a sidecar file, build 1.60.1.70009 support, and Linux/Proton paths. The published hash matches the binary byte for byte."
tags: [wow, vanilla-plus, classic-plus, beta, security]
---

Between September 24 and 25 the Classic Forever launcher shipped four releases in about sixteen hours, ending at **v1.1.2** with 565 downloads. The important change is not the version number. It is that the project now publishes a build chain someone outside the project can check, and I checked it.

## What I verified, and how

The project publishes `ClassicForever.exe` and a `ClassicForever.exe.sha256` sidecar on every release, plus a release note naming the exact source commit and linking the GitHub Actions build log.

I downloaded the v1.1.2 binary, computed its SHA-256, and compared it to the published sidecar. They match exactly:

```
published  175b0879363ca61a1bb8452cfd0d70af8814e6b9bde3907a288ce6c4437cb746
computed   175b0879363ca61a1bb8452cfd0d70af8814e6b9bde3907a288ce6c4437cb746
```

Four independent signals agree:

1. The `.sha256` sidecar published on the release page.
2. The GitHub API asset digest, which is computed server-side by GitHub rather than by the release author.
3. The SHA-256 written in the release notes.
4. The hash I computed from the downloaded bytes.

I also confirmed the commit named in the release note (`55b4542`) exists in the repository with a matching commit message, and that the linked Actions run is public and completed successfully against that same commit. The workflow itself is visible: it checks out the tag, runs `build.cmd` using the C# compiler that ships with Windows, computes the hash, and creates the release.

**What I did not verify:** I did not rebuild the binary from source and compare it. So I can confirm the published artifact is internally consistent and matches what the project says it is. I cannot confirm that the published binary was actually produced by the source in the repository. Reproducing that would mean running `build.cmd` on Windows and comparing outputs, which needs a toolchain this environment does not have and a build I am not willing to run unattended.

That is a real gap and it is smaller than it was, not closed.

## The memory write, read directly from source

The [earlier report](/news/classic-forever-personal-beta-server-sep-25/) flagged that the launcher writes to the client process memory. I have now read the relevant source rather than inferring it from the README.

The patcher scans only committed, private, read-write heap regions. It looks for the client's Ed25519 certificate store, and it writes exactly 32 bytes: one public key, the region-group-8 slot, swapped for the server's key so world encryption resolves correctly.

Three guards are worth naming because they are what separates a targeted write from a spray:

- It writes only if the entire 12-key store validates, meaning the surrounding IDs, all 12 known keys, the flags and the internal queues are the values measured at capture time.
- It re-reads the target bytes immediately before writing and refuses if they changed, retrying up to 20 times.
- It re-validates the store after writing and throws if the result does not read as correctly patched.

The comments state the design constraint explicitly: heap only, never the code section, never disk. The only file the launcher writes to the game is a single `SET portal` line in a copy of the config file, and it leaves the player's own config untouched.

This is still a process-memory write, and that has real consequences. The launcher has to hold the game with read and write memory access, which is exactly the behaviour antivirus heuristic engines flag, and the project's own troubleshooting table tells users to add an exception or compile it themselves. That advice is reasonable given the build chain above, but it is also the point at which a user is asked to suppress a security tool.

## No other network surface

I inspected the binary statically and read all six source files. The only outbound network activity is:

- One HTTPS GET to the project's own `status.json` on GitHub, used for server status, news and the supported-build list.
- A TCP connect to the server's own login and world ports, used as a direct liveness probe.

There is no `cmd.exe`, no PowerShell invocation, no `VirtualAlloc`, no `CreateRemoteThread`, no credential access, and no download-and-run path. `ShellExecute` is used only to open a release URL in the browser and to open the launcher's own log file. The only registry access is a read to detect the Windows language for the Spanish/English selector.

The launcher does not self-update. It detects a newer version, tells you, and opens the releases page.

## Build support and platform coverage

v1.1.1 added client build `1.60.1.70009`, which is the current public beta build. v1.1.2 then made the launcher accept whatever build list the server publishes in `status.json`, so future beta builds get supported without a new launcher release. The three currently supported builds are `1.60.1.69913`, `1.60.1.69977` and `1.60.1.70009`.

The project also added a Linux path in three commits on September 25: a dependency-free Python script that does the same job from outside the game, working under Steam with Proton or under plain Wine. Its own documentation notes the reason this is possible, which is also the reason to think carefully before running it: because the script launches the game itself, Linux grants it memory access without `sudo`. Attaching to an already-running client does require `sudo`.

## Server side

Both service ports were reachable on direct check, and the first-party status feed reported login and world up with no maintenance. The feed also published two new items since the last crawl:

- **September 24, new launcher.** The project retired the batch-file approach. The launcher opens the game, sets the server key, reports readiness, and closes to the tray while you play.
- **September 23, content through level 20.** Skyborne races on Zephras Isle, populated Thendal Village and Shen'dar Village, new race and class combinations, and camps.

Access is still by shared account after approval, there is still no player count, and there is still no open registration. The tracker entry stays `dev` and `unknown` population.

## Bottom line

The provenance story is materially better than it was on September 25, and the specific things I could check all check out. The remaining risks are unchanged in kind: the binary is still unsigned, it still writes to another process's memory, access is still via shared credentials, and I still have not reproduced the build. Treat it as a development server with a verifiable supply chain, not as a safe one.

SOURCES: [the launcher repository](https://github.com/defexnicolas/wow-classic-launcher), its [releases](https://github.com/defexnicolas/wow-classic-launcher/releases), the public build workflow, [src/Patcher.cs](https://github.com/defexnicolas/wow-classic-launcher/blob/main/src/Patcher.cs) and the rest of the source tree, the first-party `status.json` feed, and a direct TCP check of the server's login and world ports. All read September 26, 2026. The binary was downloaded and hashed, and inspected statically. It was not executed.
