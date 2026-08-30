# BlizzCon 2026 Live — Sep 12-13 Checklist

Opening Ceremony: Sep 12 ~17:00Z (10am PT). Countdown `src/classic-plus.njk:22` = `2026-09-12T17:00:00Z`.

## Pre-show (Sep 11)
- [ ] Verify `cdn-watch.yml` cron 6h and manual `node scripts/check-cdn.js` works; `cdn-last.json` fresh.
- [ ] Pull latest main, `npm run build && npm test` green.

## Day-of flip (within 2h of ceremony)
- [ ] `src/news/blizzcon-2026-classic-plus-reveal.md` — flip `draft: false`, fill title/date/link/body, update `canonical`/`hero`.
- [ ] `src/news/wotlk-anniversary-reveal.md` — same if announced.
- [ ] `src/_data/classicplus.js` — add BlizzCon entries (news/leak/rumor as appropriate), update `latest` auto.
- [ ] `src/classic-plus.njk` — flip Status Snapshot, FAQ JSON-LD, timeline `Aug 28-29` + new `Sep 12` li, countdown threshold.
- [ ] `src/_data/history.js` — add Sep 12 event (category web, tag BlizzCon, relatedServers if any).
- [ ] `src/_data/site.js` — bump `reviewed`/`reviewedIso` to Sep 12/13.
- [ ] `src/_data/servers.js` — reconcile `Vanilla+`/`Classless` tags vs announced features (mass tag review Sep 13).
- [ ] `npm run build && npm test` — verify sitemap lastmod dynamic, 102 pages.
- [ ] Commit `git add` + push; Vercel auto-deploy.

## Fallback if no reveal
- [ ] Keep skeletons `draft: true`, publish `blizzcon-predictions.md` follow-up: "No Classic+ date, window slips to 2027".
- [ ] Update `classic-plus.njk` FAQ: "No release date announced".

## Post-show Sep 13
- [ ] Verify Ascension offline Sep 4 19:00 PT actual; update `history.js` confirm.
- [ ] Purge CDN cache via Vercel.
