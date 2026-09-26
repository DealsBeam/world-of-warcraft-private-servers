---
title: "How we review a private server before listing it"
date: 2026-09-26
category: explainers
heroImage: /images/hero-6.jpeg
summary: "The actual checklist behind every tracker entry: what we verify, what we refuse to list without, and how two real candidates turned out on opposite sides of the line."
startingPoint: true
---

Every server on this tracker passed the same gate before it got a page. This is that gate, written out, including the two cases where it produced an uncomfortable answer.

The rule is short: **first-party evidence or nothing.** A server gets listed when we can reach its own site, read its own claims, and confirm its own status. Discord invites, directory blurbs, a friend's recommendation, and a YouTube video are all discovery tools. None of them are evidence.

## What has to be true

| Check | Why it is a gate, not a nicety |
| --- | --- |
| A reachable first-party site | If the project cannot be reached, we cannot date anything it says |
| A dated statement of what it is | Expansion, rates, and population claims must be attributable and checkable |
| A working status signal | Login and world reachability, or an equivalent published feed |
| A security posture we can describe honestly | Including when the answer is bad |
| No duplicate of something already listed | Two pages for one realm splits the authority and confuses readers |

## What we refuse to list without it

- **Directory-only candidates.** Appearing on three toplist sites is not evidence a server exists, still runs, or is what it claims.
- **Discord-only projects.** A Discord invite is not a status page and not a changelog.
- **Unidentified launches.** "New server launching Friday" in a forum post with no realm name, no site, and no client build is a rumour.
- **Anything where the only population number comes from a marketing page.** We will record a self-reported number if we label it self-reported. We will not present it as measured.

## The security review is the part people skip

A server entry is a recommendation. If we cannot describe what runs on a player's machine, we are not making a recommendation, and we should not pretend to.

The questions we ask of any launcher, custom client, or bundled archive:

1. **Is the binary published with a hash, and does the hash match?** Not "the project says it is safe." Download it, hash it, compare it against more than one published value.
2. **Is there a build chain?** A commit reference plus a public CI run lets someone else reproduce the check. A lone `.exe` on a file host does not.
3. **What does the code do?** Read it. If it writes to another process's memory, find out how many bytes, where, and what validates the write.
4. **What else does it talk to?** Enumerate the outbound surface: hosts, protocols, and whether anything downloads and executes.
5. **Is the client self-supplied or bundled?** This is the single biggest risk axis, and it is the one players most often ignore.

That last point deserves its own emphasis, because it inverts the usual assumption.

On an ordinary private server, you bring your own retail client. Blizzard's files are the trusted half of the equation and the server is the untrusted half. On a server that ships a complete modified client, **the executable payload is the untrusted half.** A 27 GB archive delivered from a file-hosting site with no hash, no manifest, and no stated build correspondence is not a client download. It is an unverified installer of a modified game, and it deserves the same suspicion as any other.

## Two real cases

**Classic Forever** is a personal project running the 1.60.1 beta client, access by shared account after approval. The launcher is unsigned and patches the client's heap, which is a process-memory write and exactly the kind of thing antivirus heuristics flag.

What we found when we checked: the project publishes a GitHub Actions build log, the exact source commit, a SHA-256 in the release notes, and a hash sidecar. We downloaded the binary, hashed it, and got a byte-for-byte match against all four published values independently. The patcher source writes exactly 32 bytes, heap-only, with validation before and after the write. Static inspection of the binary and every source file found no network surface beyond the project's own status feed and the server's own ports.

**What we could not verify:** we did not rebuild from source, so source-to-binary correspondence remains unconfirmed. The post says so.

Net result: the provenance story improved materially, the risk profile is unchanged in kind, and the entry stays `dev` and `unknown` population with the unsigned-launcher warning intact. We did not upgrade the listing because the security question got more answerable. The answer did not get better.

**Frostbound** is a Spanish-first WotLK realm with a real population signal, an active community, and a distinctive system. It also ships 17.6 GB and 27 GB complete clients from a third-party file host with no hashes, no manifest, no signature, and no project source repository. A required addon is documented through the original author's third-party wiki rather than a pinned release.

Net result: **listed, with the risk inside the entry.** The realm is real and worth knowing about. The download is not something we will tell anyone to run without independent verification. Both facts live in the same card, not in a footnote.

The difference between those two outcomes is not how dangerous the projects are. It is how much of the risk question each project let us answer. Both got a listing. One got a warning attached to the listing itself, and the other got a full verification write-up. That is the whole method.

## Where we are deliberately not exhaustive

We do not run server binaries. We do not attempt to breach anything. We do not claim a realm is safe, only that we can describe its risk. When a project publishes a hash and a build log, checking it takes minutes and we do it. When a project publishes nothing, we say so and stop there.

We also do not flip statuses on thin evidence. A server that is online for one crawl stays `playable` or `dev` on that basis, and a shutdown requires a stated date and a reason, not a dead site.

SOURCES: Method derived from the tracker's own [correction policy](/blog/tracker-correction-policy-explained/), the [Classic Forever launcher verification](/news/classic-forever-launcher-verifiable-build-sep-26/), and the [Frostbound listing](/news/frostbound-joins-tracker-sep-26/), both September 26, 2026.
