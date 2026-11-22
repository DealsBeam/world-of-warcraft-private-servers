---
title: "ForeverTracker's API notes separate 'exists' from 'works', and that is the right instinct"
date: 2026-11-22
category: news
game: software
summary: "ForeverTracker's public API research classifies every capability as verified, signature-only, requiring live validation or unsupported, and refuses to treat a function existing in the client as proof it works in Forever. The document is dated pre-launch and its team says it ran no live client tests."
---

ForeverTracker has published an API research document that makes an unusually useful distinction: a function existing in the client is not the same as that function working in Forever.

The project's `RESEARCH_FOREVER_API.md` file, compiled **October 26** during the beta and read November 22, says plainly that nothing in it was executed against a running Forever client by the team. Every capability is placed in one of four classes:

| Class | Meaning |
|---|---|
| **V - Verified** | Confirmed by the strongest available evidence |
| **D - Documented** | Signature known from client files, runtime values not observed |
| **L - Requires live validation** | Decides whether a tool works, and no source has measured it in Forever's conditions |
| **U - Unsupported** | Absent, restricted for addons, or excluded by project policy |

That grading is the point. A reader can see at a glance which claims are safe to build on.

## What it records about identity

The document's strongest section is character identity. Forever characters have a first name and a surname, and the second return of `UnitName` is **not** a realm. Code that writes `name, realm = UnitName(unit)` is storing the surname in a variable named realm. Names can appear as `First Surname` or `First-Surname`, and the project warns against parsing the part after the hyphen as a realm.

That warning has gained weight since Blizzard blanked realm-name and realm-ID APIs for addons on November 20. Our [layer API report](/news/forever-layer-addon-api-nov-22/) covers the change itself.

The document also records that Forever's full names must be unique within a region, not within a realm, and cites Blizzard's own product information for that.

## SavedVariables and collector behaviour

On SavedVariables, the notes say writes happen on logout, exit and `/reload` as standard, but flag a load bug on build 69893 where values were written and never read back. They grade later behaviour as documented rather than verified.

On data collection, the project describes inspection as opt-in at the collector level, rate-limited to one request at a time with at least two seconds between, never issued in combat, and only for group members. Those are project policies, not Blizzard rules, and the document says so.

## Why this is worth linking

The site's own header calls this pre-launch research. Forever launched November 4, so the date matters: readers should not assume the grades still hold on build 1.60.1.71037.

What transfers is the method. Our news grading does the same job for reporting: a claim is labelled by what supports it. This document applies that thinking to client behaviour, and addon authors working on Forever can use it as a checklist of what still needs testing.

We have not run any of the project's tests and are reporting its classifications, not endorsing its conclusions.

SOURCES: ForeverTracker's `docs/RESEARCH_FOREVER_API.md` on GitHub, compiled October 26 2026 and read November 22 2026. Related: [the graded addon API comparison](/news/forever-addon-api-research-docs/), [our addon guide](/blog/forever-addons-nov-19/) and [the layer API report](/news/forever-layer-addon-api-nov-22/).
