---
title: "Three servers are called Conquest, only one of them is the one people mean"
date: 2026-10-02
category: news
summary: "Conquest Reborn is a third independent Conquest project, unrelated to the Ascension realm that shut down in September or the AzerothCore continuation that is live now. It is in closed testing, and its privacy policy is the most candid thing in this coverage."
---

There are now three servers on our tracker with "Conquest" in the name and they have almost nothing to do with each other. That is a reader's problem before it is ours, so each entry says which is which, and this is the third.

| Entry | What it is | Status |
| --- | --- | --- |
| **Conquest of Azeroth** | The Ascension network realm, shut down 4 Sep 2026 after a Blizzard cease-and-desist | `dead` |
| **Conquest of AzerothCore** | Open-source continuation on the AzerothCore core, 22 classes, public bug-test realm | `dev`, live |
| **Conquest Reborn** | Independent, non-commercial WotLK 3.3.5a realm with its own class roster | `dev`, closed testing |

**Conquest Reborn is not affiliated with either of the others.** Its own words are "A free, non-commercial fan realm" and "Free, nothing sold, run by the handful of people who play on it." It is a separate project with a separate address, a separate client, and a different idea about what progression means.

## Closed testing, and it says so

The status matters more than usual here because the site is unusually direct about it: **"The realm is in closed testing and in active development, make an account and ask us on Discord what is working before you install anything."**

A reader who arrives expecting a finished server will be disappointed, and the project would rather you knew that first. We have recorded it `dev` for the same reason.

The realm status is a JSON feed at `/status/`, which read `online: true` with **7 to 8 players** on 2 October. That is a real published figure, and it is also too small to band, so the tier is `unknown` rather than a rounded-down `tiny`.

## Forging is the part that is actually new

Every classless or custom-class server promises unusual builds. This one describes the mechanism concretely enough to be checkable:

> "Forget three talent tabs and a handful of points. Every class opens into its own web of Forging nodes: a shared core, with deeper branches beyond it, paid for out of a point budget that grows as you level. Thousands of nodes, each with a real cost, a rank and prerequisites, nothing here is a cosmetic tick-box."

And it names the part that cannot be done elsewhere: "That is the part you cannot do on a stock 3.3.5a server: your class is where you start, not where you are stopped." The committed build is saved server-side, so it persists.

On the roster, the site makes a claim and then tells you it has not published the evidence: **"Not reskins. Whole classes with their own resources, their own trees and their own way of fighting, none of them a stock class with a new name on it,"** followed by "Turn on JavaScript to see the archetypes, or just make a character, the full list is on the character-creation screen."

So the full roster is behind an account. **We are not publishing a class count, and we are not rating the design on a marketing line.** What the carousel does expose is that the archetypes are concept-first rather than class-first, described in one sentence each: no armour and no patience, power lent on hard terms by something that wants paying, nothing wasted from what the dead leave, weather and sky called down, your own health as a resource, powder and contraption, bending the rules mid-fight by carving a spell before casting it, and keeping people standing or changing shape.

That reads like a design document with class names bolted on afterwards, which is the reverse of most custom-class servers.

## Dated, and recent

| Date | What shipped |
| --- | --- |
| 6 Sep 2026 | The launcher |
| 8 Sep 2026 | **Forging is live**, build saved on the realm |
| 9 Sep 2026 | Realm online, closed testing starts |
| 10 Sep 2026 | "Closed testing begins. Expect rough edges, that is what closed testing is for" |
| 30 Sep 2026 | Privacy Policy update for the new statistics pages |

Five dated posts in a month, which is a live project rather than an announcement page.

## The privacy policy is the reason to read this one

The 30 September post updates the policy for two new features called **Conquest Logs** and **Meta**, and it describes the data handling in more operational detail than we have seen from any project in this coverage:

- **Per-run performance records.** For every dungeon and raid run the realm records per character: damage, healing, damage taken, deaths and abilities used, visible to **any signed-in player** as run reports, leaderboards and character pages, with character names shown. Account name, email and IP never appear there.
- **A hide switch per character.** A hidden character leaves the Mythic+ score board, shows only as "Hidden", and has no public character page.
- **A web access log**, one line per request with time, IP, page and browser, kept to find faults such as a download that stopped partway, **deleted automatically past 14 days**, holding no account name and excluding what Conquest Logs shows.
- **Nightly backups** of the account, character and website databases, each copy deleted after about two weeks.
- **Password reset links written to a file** on the web server when email cannot be sent, expiring after an hour.
- **Account deletion** removes characters from the game, from Conquest Logs including long-deleted ones, and from developer copies, with deleted characters kept 30 days then erased.

Most of that is ordinary and competently handled. The two things worth a reader's attention are that per-character combat records are **public to any signed-in player by default**, and that the site has thought about deletion hard enough to say what happens to characters deleted long ago.

## The launcher

Download requires an account, so we did not obtain it and did not run it. What the page publishes:

- **Windows, free, one download** that keeps itself up to date, and it installs the game client or brings an existing copy into line, "verified file by file, so every player runs exactly the same client".
- **It is not code-signed, deliberately.** The stated reason: "a certificate costs a few hundred a year and this project charges nothing", so SmartScreen will warn on first run, and the project prefers to say so plainly.
- A **published SHA-256** for the launcher, so you can confirm you got the file they published, with the PowerShell command to check it: `Get-FileHash .\ConquestReborn-Launcher.exe -Algorithm SHA256`, against `ddad89dc9bcd2d9536f8fabf7826f0aa708a7f9f0f0c74b1f80bad6c2438720c`.
- It **asks for administrator rights when you press Play**, stated as being for connecting the game to the realm and nothing else.

Publishing the hash for a binary you cannot inspect is the right instinct and worth crediting on its own. It also asks for admin, and the honest version of that is that a reader has to take the word of whoever signed it.

SOURCES: Conquest Reborn's own homepage, `news.html`, `/downloads/` and `/status/`, read October 2 2026 in a browser, with the status feed read as the JSON document it is. The class-architecture descriptions, the Forging description, the privacy policy detail and the launcher detail are all quoted or transcribed from those pages. We did not create an account, did not download the launcher, and did not play. Related: [Conquest of AzerothCore joining the tracker](/news/torment-and-conquest-of-azerothcore-join-sep-30/), [the Ascension shutdown](/blog/ascension-shutdown-explained/), and [how we review a private server](/blog/how-we-review-a-private-server/).
