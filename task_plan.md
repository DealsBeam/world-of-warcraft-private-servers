# Task Plan: Sep 23 tracker and operations close

## Goal
Close daily research, reconciliation, directory, machine-index, live-site, and retrospective work without unverified listings or stale generated data.

## Next Step
Start Sep 24 morning source sweep, then reconcile any first-party additions before publishing.

## Current Phase
Phase 5 complete

## Phases

### Phase 1: Research and reconciliation
- [x] Sweep Warcraft Tavern, Icy Veins, classicwowforever, and community directories
- [x] Verify Freedom WoW against first-party site
- [x] Add three additional first-party-verified servers
- [x] Reject unverified candidates with reasons
- **Status:** complete

### Phase 2: Directory and data integrity
- [x] Build `/servers/` alphabetical directory
- [x] Add search and status filtering
- [x] Compute census era counts from data
- [x] Merge duplicate Freedom WoW display variant
- [x] Add normalized-name regression guard and legacy redirect
- **Status:** complete

### Phase 3: Machine indexes and operations
- [x] Refresh and inspect llms files, feed, sitemaps, API JSON, and manifest
- [x] Add directory to sitemap.md
- [x] Fix fragment URL false negative in smoke link audit
- [x] Run local XML, JSON, and internal-link audits
- **Status:** complete

### Phase 4: Verification gates
- [x] Dash grep added copy
- [x] `npm test`
- [x] `npm run build` with explicit exit capture
- [x] Commit and push
- [x] Submit IndexNow URLs
- [x] Live probe, redirect check, desktop/mobile browser QA
- **Status:** complete

### Phase 5: Delivery and retro
- [x] Record outcomes and source decisions
- [x] Write Sep 24 daily roadmap
- **Status:** complete

### Phase 6: UI surface modes
- [x] Add semantic page modes without replacing shared brand shell
- [x] Fix census metadata rendering
- [x] Fix Classic+ and Music mobile overflow
- [x] Bump stylesheet cache key and verify live deployment
- **Status:** complete

## Decisions Made
| Decision | Rationale |
|----------|-----------|
| Keep official `Freedom WoW` as canonical | Existing `FreedomWoW` entry and new first-party evidence describe same Ukrainian realm |
| Preserve old display value with strike-through and date | Correction remains auditable; no silent data rewrite |
| Use 143-server total | Duplicate was removed after visual browser QA exposed it |
| Keep `release` only on dev entries | Existing semantic rule remains enforced |
| Do not add Amdir, Digital World, Zamolxia, or SKYWOW | No sufficient first-party confirmation in this pass |
| Treat static census guide markup as trusted template HTML | Prevents Nunjucks escaping internal links; no user data enters this mapping |
| Use semantic page modes instead of separate visual worlds | Preserve brand consistency while changing task emphasis |
| Bump stylesheet query version for immutable CSS | Prevent stale responsive rules after UI changes |

## Errors Encountered
| Error | Resolution |
|-------|------------|
| Census live-computed object lookup rendered empty counts | Replaced with direct grouped server counts |
| `merge` filter unavailable in Nunjucks | Added small config filter, then used direct group iteration |
| Smoke regex ignored URLs with fragments | Updated regex and fragment stripping; fixed one real history link |
| Live cache briefly served pre-merge page | Rechecked with cache-busting requests; deployment now serves 143-server data and redirect |
| Census era descriptions rendered as escaped text | Marked static trusted markup safe and verified real links in live output |
| Classic+ and Music mobile overflow | Added min-width and wrapping rules; live 390px QA passed |

## Next Action
Open Sep 24 roadmap and run morning source sweep. Watch Sep 24 beta update, level-cap rise, Server Slam date, bank 48-vs-96, and Tarnished Undermine Reals.
