# Task plan — Sep 11 AM sweep (BlizzCon eve)

Goal: cover fresh Classic+ teaser news without duplicating existing posts.

## Phases
- [x] Phase 1: poll feeds + user URLs (13 candidates; Icy teaser + Forever pieces via direct URL)
- [x] Phase 2: verify claims (sponsor page, RDAP, MMO-C thread; dup-check vs warcraft-forever post)
- [ ] Phase 3: write AORUS teaser news post (draft:false, voice applied, comments balanced)
- [ ] Phase 4: build + smoke + commit + push + IndexNow

## Decisions
- Warcraft Forever triple NOT re-covered (src/blog/warcraft-forever-triple-signal.md, Sep 3). Only new: AORUS teaser + RDAP re-verify + Second War thread.
- Angle: verification ledger + PS read (closed portal = no Outland = TBC-era servers unaffected).
- Deletion claim stays flagged single-source. Interpretation labeled speculation.

## Errors
| Error | Attempt | Resolution |
|-------|---------|------------|
| MOP feed truncated output | 1 | Used automation_bot poll instead; file-backed candidates.json |
| draft.py front matter (summary:) mismatches news layout (description:) | 1 | Write post manually matching hardware-watch format |

## Next Step
Write src/news/aorus-dark-portal-teaser-classic-plus.md, then build-gated commit.
