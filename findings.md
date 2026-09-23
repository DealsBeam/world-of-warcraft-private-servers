# Findings — Sep 11 AM sweep

## AORUS Dark Portal teaser (Icy Veins, Tharid)
- AORUS brand accounts posted Sep 8: darkened/closed Dark Portal, "All Eyes on Azeroth", "something special coming to BlizzCon", official BlizzCon logo.
- Posts deleted shortly after; reason unknown. SINGLE SOURCE (Icy only).
- VERIFIED: GIGABYTE is official BlizzCon 2026 sponsor (news.blizzard.com article 24295384 lists DELL, FANTA, GIGABYTE, MSI, NVIDIA, SECRETLEVEL... actually SECRET LAB). So sponsor-teaser plausible, hardware-promo alternate explanation open.
- Second source (existence/discussion): MMO-C thread Sep 11 "Second War Classic+ fits the AORUS teaser better than Chromie what if" — independent community discussion of same teaser.
- Ironic convergence (do NOT legitimize): banned MMO-C fake leak claimed "dark portal WILL NOT OPEN". Real sponsor art now shows closed portal. Note as coincidence only.

## Warcraft Forever (Icy Veins, Tharid; already covered Sep 3)
- DefaultForeverBindings.wtf + TOGGLELEGACYSYSTEM in 12.1.5 PTR (Stiven; Marlamin listfile commit).
- ResetEra lolilolailo: "Warcraft is Forever."
- RDAP RE-VERIFIED Sep 11: WARCRAFTFOREVER.COM registered 2026-09-02, Cloudflare registrar (IANA 1910), expires 2027-09-02. Blizzard normally uses MarkMonitor — weakens leg. Flagged.
- No re-cover. Only link.

## Tracker data (classicplus.js)
- 1.60.0 build chain (69014→69679) into 1.60.1 lineage; Camelot dev builds 69407→69555; build-69704 post seven-days-out.

## Poll notes
- 13 candidates. Killed: lemon-bars recipe, Bingo board dup (own bingo post exists), staff predictions (no angle), Diablo pieces (non-WoW), Stargate rogue server (covered Sep 10 decision: non-WoW).
- Wowhead homepage returns 200 via urllib (article-level 403s persist per prior sessions).
- BlizzPro JR Cook predictions Sep 11: Last Titan cinematic likely, Camelot reimagined Classic, SC shooter active, Diablo backseat. Prediction roundup, no hard news — no post.

## Sep 23 operations findings
- Canonical tracker total is 143 after browser QA exposed duplicate Freedom WoW labels.
- Freedom WoW first-party site showed 531 online, x5 WotLK 3.3.5a, arena season 8, and smart cross-faction rules. Existing `FreedomWoW` record had matching Ukrainian x5 identity.
- Azekai Reincarnated, Elderhide, and Project Rx had reachable first-party sites and were added. Amdir and Digital World lacked reachable first-party confirmation; Zamolxia and SKYWOW remained uncorroborated.
- Directory output now has 143 rows, no `Invalid Date`, 107 playable, 24 dev, and 12 dead. Search and status filters passed browser evaluation.
- Live deployment passed 19 URL probes, XML/JSON checks, 308 legacy redirect, desktop QA, and 390px mobile QA. No horizontal overflow, broken images, or console errors observed.
- Tomorrow watch list: Sep 24 beta update, level-cap rise, Server Slam date, bank 48-vs-96 resolution, Tarnished Undermine Reals, Tier 7 report card Sep 30, IAF Oct 20, beta close Oct 21/22, name reservation Oct 27, Onyxia Dec 9.

## UI mode findings
- Shared shell remains coherent; legal and utility modes now use narrower content width and quieter headers.
- Census frontmatter interpolation rendered literal template text; `eleventyComputed` fixes description and subtitle.
- Classic+ and Music mobile overflow came from intrinsic grid/code widths; min-width and wrapping rules fix both.
- Vercel immutable CSS cache required stylesheet query bump from `v=4` to `v=5`.
