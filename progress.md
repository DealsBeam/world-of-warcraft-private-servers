# Progress — Sep 11 AM sweep

- 08:00 session start. User URLs: Icy teaser piece + icy-veins, duskforge, wowhead, massivelyop homepages.
- Ran automation_bot/fetch_feeds.py: 13 candidates.
- Fetched: Icy Dark Portal teaser, Icy Warcraft Forever, Duskforge RSS, MOP feed, BlizzPro predictions, Blizzard sponsors page, RDAP record.
- Verified: GIGABYTE sponsor status (official), domain registration (RDAP), teaser discussion (MMO-C thread).
- Dup-check: warcraft-forever-triple-signal.md (Sep 3) covers Forever triple. New post covers teaser only.
- TODO: write post, npm test + build, commit, push, IndexNow.

# Progress — Sep 17 wow-ps batch

- Added Azeron (Legion 7.3.5 open beta, x10/x5, wipe planned, dev/unknown) + OutlawCraft (custom full-death-loot WotLK, DayZ-in-WoW wording, dev/tiny) to tracker; joins-tracker post.
- classicwowforever reference-expands post: 10/20/40 raid tracks, Hardcore Legacy carryover, world-refresh warning, dungeon XP curve (2 sources) — flagged fan-reference.
- Q&A two-segment times linked to Blizzard watch post (24302544) in wow-forever-live-qa-questions.md + classic-plus.njk.
- Gates: comment balance OK, npm test + build green (134 servers / 100 news), built word counts 337/444/315.
- Pushed 1ca170d; IndexNow 4 URLs OK (HTTP 200).

# Progress — Sep 17 batch 2 (Miststorm + Ascension preservation)

- Miststorm (MoP 5.4.8 Plus+, closed alpha, realmlist "not public yet") → tracker dev/MoP/unknown + joins-tracker post.
- Bronzebeard DB mirror (bronzebeard.bendo.lol) new; AscensionDB explorer already covered Sep 15 — added both to links.js + Bronzebeard DB post.
- Gates: comment balance OK, test 135 servers/102 news/108 links, smoke green, words 373/277.
- Pushed 625822d; IndexNow 3 URLs.

# Progress — Sep 17 batch 3 (Forever beta live)

- Duskforge.gg inspected: Diablo IV news site, no WoW PS content — out of scope.
- Icy Veins fetched: Forever beta goes live TODAY after Forever Q&A segment (10:30 PDT, official Reddit via Icy); PvP mega-server one-faction lock (Game Informer); loot stats hidden until first server drop + blank Dungeon Journal early (Greenfield/MMORPG.com).
- Beta-live post (457w) + hub: PvP faction lock, surprise loot, beta start-time resolved (GameSpot "no start time" note replaced).
- Dup-checked: class/race combos + beta access already covered (skyborne-racials post, pre-purchase post) — skipped.
- Gates green (135 servers / 103 news); pushed 6729b51; IndexNow 2 URLs.

# Progress — Sep 17 batch 4 (Icy archive + datamine)

- Icy home + maps article fetched. News list JS-only, WP API/RSS blocked — homepage listing used.
- New: Forever beta-client captures show unannounced instance maps (Dalaran City, Hyjal Crater, Winter WSG, Battle for Gilneas, Azshara Crater, Karazhan Crypts, Half-Pint Tavern, Manor Mistmantle, event-cluster maps); SoD caveat loud.
- Post forever-client-data-instance-map-teases (405w) + hub meta-note; announced nine + five zones cross-checked vs hub table.
- Dup-skipped: login screen, music, mounts wave, race-breakdown video (cosmetic/covered).
- Gates green (135/104); pushed; IndexNow 2 URLs.

# Progress — Sep 17 batch 5 (Blizzard articles + Q&A VOD)

- Fetched 3 Blizzard articles: 24302544 Q&A watch (already covered), 24307305 Midnight S3 dungeon pool (retail, out of scope), 24296142 hotfixes Sep 15 (retail, out of scope).
- User Q&A YouTube link verified: title "World of Warcraft Developer Q&A"; VOD link added to Q&A questions post.
- Icy posted Legacy overview (Emma, 40m) — checked vs hub: FULL DUPLICATE (Reagent Economy, Bountiful Harvest, Well Rested, 16/65 cap, trees, rewards all already on hub from classicwowforever tooltips Sep 13). No new post; added Icy as corroborating source in hub meta.
- No post-Q&A recaps yet from Icy/classicwowforever (classicwowforever last updated Sep 15) — hit list stays open.
- Gates green; pushed; IndexNow 2 URLs.

# Progress — Sep 17 batch 6 (Q&A answers + beta day-one + datamine round one)

- Verified full text: Tavern Q&A recap (Val Hull; panel Jordan/Greenfield/Mills/Jones; Forever at 59:10 in VOD Y5zzSMSVhRo), Tavern known-issues (Luxrah, Kaivax source), all 5 classicwowforever datamine guides (build 1.60.1.69893) + wowforeverclassic homepage/Dalaran/Whelgar's + classicwowforever dungeons-by-level.
- New post forever-qna-answers-sep-17 (781w): GDKP ban, no heroics, no cross-faction, seasonal Honor track/no rated, first-login Classic/Enhanced, Character Transfer, AQ tease, Oceanic AU, addon API + default DPS/cooldown/swing tools, Skyborne/Thunderfury, Quel'Thalas plans, Aggrend podcast. Single-source flagged (Tavern recap only so far).
- New post forever-beta-live-day-one (445w): official Kaivax known-issues — pet sheet bugs (Hunter/Warlock), Waylaid crates (2), glancing-blow math, Starshards/Vengeance/Holy Strike/Firestone, LUA/UI cluster; several fixed next build.
- New post forever-beta-datamine-round-one (860w): 8 keys withheld (7 empty + 1 unlisted); 66 items (63-block + 285352-285354)/872 spells/90 quests/41 effects/2 creatures/~3,300 files sealed, filenames stripped; stats = types + basis-point weights across 19,119 records (Thunderfury 2174/3478/3478/3913, Sulfuras 2222/2222/5556; resists types 51-56); 4,862 items (551 epics/1,445 rares/1,073 uncommons; Premier 537 = 292+245; Theramore/Darkspear 28/38/48/58; 48 sets/26 six-piece; Watcher's Signets iLvl 68; curiosities); 3,472 spells (Stronghold ×4 doublings, terrain/climate, racials ×8, Matron's Call Onyxia Whelpling, gatherer camps; census Legacy 10/Undead Slayers 53/Raid Attunement 9; Skyborne+combo NPCs != playable); loot tables empty (208 bytes / 4,392 zero rows). AI-assisted caveat kept.
- Hub edits: Dalaran zone (bubble gone, interactive city, City of Dalaran 28-33; wowforeverclassic citing panel videos 09-13); "Dalaran City" map read as open-world city; datamine + Stronghold magic under itemization; Premier PvP tier + faction ladder + seasonal Honor in PvP; no heroics/no cross-faction in raids; beta live/known issues/wipe/no raid testing; GDKP ban + group finder + Waylaid/ACA in realmless; Character Transfer/AQ/Oceanic; first-login + addon API in player choice; Tavern Oct 22 close + Onyxia second fan read (wowforeverclassic) on roadmap; sources += Tavern + wowforeverclassic.
- Hit list: Round 1 resolves block — item 5 mostly resolved ("Excavation Site" for Whelgar's-site, furbolg city = Blackmaw Hold Azshara, no Timbermaw record), item 4 partial (10 Legacy Perks & Boons spells in census); items 1/2/3/6/7/8/9/10 still open.
- links.js: + WowForeverClassic. Warcraft Tavern + classicwowforever confirmed NOT in links.js (news outlets, cited inline in posts instead).
- Dup-checked: no existing gdkp/known-issues/waylaid/group-finder/datamine-round-one posts; Tavern Oct 22 + cap second cite only added where discrepancy noted (cap still [NEEDS VERIFICATION]).
- Gates: npm test OK (135/107/109), build + smoke green, internal links OK, words 781/445/860/568. Pushed c7eeba1; IndexNow 5 URLs OK.
