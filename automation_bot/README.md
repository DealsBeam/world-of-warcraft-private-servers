# automation_bot — gated news pipeline (no auto-publish, ever)

Two stages. Both stop before publishing. A human voice-passes every draft.

## Run from repo root

```sh
python3 automation_bot/fetch_feeds.py [--days 2]
python3 automation_bot/draft.py --pick N --game sc [--slug my-slug]
```

1. `fetch_feeds.py` polls the 8 checklist feeds (stdlib only), keeps fresh
   items matching the coverage rule, scores them, writes
   `automation_bot/out/candidates.json`. Prints a numbered list.
2. Pick a number, pick a game tag (`wow|sc|diablo|overwatch|other`).
   `draft.py` writes `src/news/<slug>.md` with exact front matter,
   `draft:true`, source named in an HTML comment, TODO voice slots.

## Then (human)

1. Voice-pass every TODO slot in your own words.
2. Verify each claim against a second source. Flag single-source claims.
3. Flip `draft:false`, run `npm test && npm run build`, commit, push.

## Never in this folder

No rewriting engine, no git push, no deploy step — by design.
Auto-publish risks the whole domain (scaled-abuse policy) for filler.
