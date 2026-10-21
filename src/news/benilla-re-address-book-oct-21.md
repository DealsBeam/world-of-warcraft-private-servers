---
title: "benilla-re publishes the address book for the 1.12.1 client: 37,967 functions, cited by offset"
date: 2026-10-21
category: news
summary: "The reverse engineering behind the Benilla client is public under Apache-2.0 or MIT: a symbol per function, system docs with the bytes that decide each mechanism, exports for Ghidra, IDA, Binary Ninja and x64dbg, and Rust crates tested bit for bit against the client's own code."
---

The Benilla project has spent months building a 1.12.1 client from scratch without saying much about how it knew what the client does. That answer is now a repository: **`samwhosung/benilla-re`**, "the reverse engineering of the World of Warcraft 1.12.1 client (`WoW.exe`, build 5875), read at its bytes and cited by address".

It is **Apache-2.0 or MIT, at your option**, created on **13 October 2026**, with **15 stars and 1 fork** at our read, and it was pushed to today. The browsable site at `samwhosung.github.io/benilla-re` returns a page per function, global, struct, Lua function, event, CVar and opcode, with search and a shortcut that takes an address and lands on whatever holds it.

## What is in it, in numbers

The symbol table is the spine: **37,967 rows**, one per function, global, struct and field, each with a name, owning system, signature, one-line meaning, a confidence of `verified` or `inferred`, and the finding that derives it.

The README is honest about how much of that is nailed down by bytes alone. Of the 37,967 rows, **14,383 have a unique byte pattern** and the matcher finds all 14,383 at their own address. The other 23,584 are indistinguishable by their bytes, which is what you would expect for `jmp` thunks, static initialisers and one-line accessors.

Alongside the symbols:

- **388 opcode rows**, with handlers, send sites and the entries that cover them.
- **1,723 Lua bindings** with argument counts, **420 events** with their fire sites, and **382 CVars** with defaults, flags and help text.
- **DBC schemas**, record layouts and the file-format readers for M2, WMO, ADT and MPQ, as the client itself reads them.
- **System docs** for 38 areas: animation, camera, collision, console, core, cvars, DBC, FFX effects, font, glue, GX, input, lighting, loading screen, Lua, minimap, models, net, object layer, random, sound, spell, spline, storm, terrain, tradeskill, UI, Warden and more.

## Why the exports matter more than the docs

A symbol table is only useful if it lands in the tool you already use. `cargo xtask export` writes:

- **`benilla-re.h`**, a C header of every struct at its table offsets with padding and vtables, compilable as C and C++, plus `BRE_ADDR_` and `BRE_FN_` macros for functions that run in the client's process.
- **Scripts for Ghidra, IDA 9 and Binary Ninja** that create, name, type and comment functions and globals. On a database that already has community names, they keep those and add these as comments.
- **An x64dbg database** of labels and comments for the module.
- **A JSON bundle** of the symbol and table files, so a tool needs no checkout.

The crates are the other half. Each system's computations are reimplemented in Rust and tested **bit for bit** by running the client's own code beside them in an emulator, with a coverage report of which instructions the tests actually exercised. That is a stronger claim than "it looks right".

## It works on other builds, carefully

Every row is keyed to build 5875, but the repository ships masked byte signatures so a matching tool can place names in modified 1.12 clients, 1.12.2 and 1.12.3, and even 1.6 through 1.11. The README scores its own confidence levels: `pattern` is strongest, `call` trusts a found caller's offsets, `order` trusts that the build kept the original layout. Rebased bundles are labelled as matches rather than proof, and rows that conflict are reported and left out rather than guessed.

## The Warden chapter

The systems list includes **`warden`**, the client's anti-cheat channel, documented like everything else: what the client sends, where, and which bytes decide it. That is the kind of documentation server developers have wanted for years, and it is also dual-use: anything that explains an anti-cheat channel to a server operator also explains it to someone writing a bypass.

The repository's framing is that it describes what the client does, not how to defeat anything, and it ships no client code. That is a real distinction and not a complete answer.

## What it is not

It does not include Blizzard's code or assets. The docs, tables, symbol files and site need no executable; only the tests, table generators and disassembly listing read `WoW.exe` from your own 1.12.1.5875 install, and they refuse any other build.

It is also not a legality shield. Reverse engineering for interoperability has a defensible history, and this repository ships derived facts rather than the binary, but Blizzard's EULA and anti-circumvention law do not evaporate because the output is a table of offsets. Anyone using this should understand that the risk sits with them, not with the README.

What it does change is the cost of building a client, a server or an addon tool. Until this week, that knowledge lived in scattered IDA databases and forum posts. Now it is a site with a search box and a stable URL per address.

The 3.3.5a counterpart is a separate project, [Benilla-WotLK](/news/benilla-wotlk-client-oct-21/), which runs the stock Wrath interface and third-party addons but still needs a server with Warden disabled.
