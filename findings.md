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

## UX refinement findings
- Classic+ benefits from a sticky section index; mobile two-column layout keeps navigation usable without a full-screen menu.
- Radio and Music need explicit player hierarchy and 44px controls; scene selection and radio play/pause continue working.
- Shop improves with three real category cards and explicit affiliate disclosure.
- Contact preserves its joke while giving visitors a concrete correction/tip/takedown checklist.
- A second CSS cache bump to `v=6` was required after this batch; live v6 control sizing passed.

### Oct 24 (sat) - deploy still stuck, work continues
Live site: 266 news / new pages 404. Empty redeploy commits (b2ddc58) did not revive Vercel; no token/CLI. Build passes (741 files, smoke OK), dashes/test OK. Content pushed correctly.
New overnight: "Class Tuning Incoming - October 27" (US 2390748 / EU 637262) overlaps name reservation window. TheWoWDB ruleset feed ([Updated 10/22]) lists all four rulesets; selectable-state confirmation still pending for Oct 27 window.
Tracker sweep backlog (pre-Sep 15 entries) not completed; deploy blockage is priority.

### Nov 2 (mon) - direct-link purge complete, deploy recovered
Removed the last tracked-server hyperlinks: project-epoch.org and chat.project-epoch.org in the Epoch Reborn story, zugcraft.cc/population in the Ravencraft guide. smoke.js now scans every published HTML/XML/text file, matches subdomains of tracked hosts, catches markdown-style and bare URLs in the llms files, and the reference-link check uses the same subdomain rule. Strict scan of src and _site reports 0 hits; live audit of all 726 sitemap URLs plus feed/llms/api/data/app/style reports 0 tracked-host links; api/servers.json has 0 urls across 255 entries.
Deploy: the b2ddc58..39e876b push did trigger Vercel after all (GitHub commit status showed pending then success). check:deploy now reports live matches build at 269 news. IndexNow submitted 5 changed URLs (HTTP 200).
Added wow-projects-hub.github.io to the links directory (44 projects: 20 private servers, 5 emulators, 17 playable projects, 2 misc; repo created Oct 30, last push Oct 31). Sixteen of its 20 private servers are already tracked; four are not: Rising Gods (rising-gods.de), Hyjal (hyjal.gg), Lasthavens (lasthavens.com), Keldurn (keldurn.com). Those are discovery leads only and stay ungraded until first-party reads.

### Nov 4 (wed) - Forever launch day coverage
Published the launch-day brief: Forever opens Nov 4 at 3:00 p.m. PST (23:00 UTC), name reservation closed Nov 3, and the pre-launch maintenance ran that morning (Blizzard Watch, Nov 3). Blizzard's Oct 29 launch article and Nov 3 systems/gamepad articles add Experience Presets (Classic vs Enhanced, presentation only), Advanced options with Cooldown Manager and Damage Meter, four selectable rulesets (Normal, PvP, Roleplay, Roleplay-PvP), and Hardcore "sometime after launch". Gamepad is official but still a functional beta: XInput, Xbox/PS icons, three sets of four bars (84 slots), LB/RB targeting, keyboard still needed for chat. RP-PvP selectable-state is now confirmed by Blizzard's own launch list. Replaced the stale "beta live now" key-dates panel on classic-plus with the launch window and a "Live now" countdown state.
