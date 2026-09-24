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

# Progress — Sep 17 batch 7 (Icy Veins second-source + launch-issues pass)

- User pointed at icy-veins.com; fetched homepage + 6 Forever articles (GDKP by Neryssa, Addons by Emma, Known Issues by Starym, Launch Issues by Tharid, First Aid potions by Anshlun, Skyborne retail by Tharid). No full Q&A recap exists there — separate topic recaps instead.
- Q&A post updated with second sources: Icy GDKP transcription corroborates Tavern recap + adds gold-laundering quote ("excellent way for bad actors to launder large sums of gold", accounts actioned, "very, very actively" monitoring, SoD economy "settled the way we expected"); Icy addons detail (WoW UI Discord message via WeakAuras: Forever "shares Mainline WoW's UI architecture, including the vast majority of APIs available in 12.1.5"; Game Informer "too much power and control"); Skyborne retail datamine note (race IDs → "TBD NPC Race ID" placeholders in Midnight 12.1.5 ChrRaces, possible NPC race, appended with datamine-not-Q&A flag). Intro reworded: sources = Tavern + Icy, single-source items still flagged, VOD check still pending.
- Day-one post updated: "Login Servers are Full" launch friction (Icy/Tharid), same Kaivax list posted independently by Icy/Starym (second source), Coldridge item gains Icy's parenthetical ("may affect multiple areas within the world (unconfirmed; QA test task going in for new maps)").
- New post forever-first-aid-healing-potions (358w built): First Aid now crafts Minor(55)/Lesser(85)/Healing(135)/Greater(155 Manual)/Superior(215 Manual)/Major(275 Manual) potions, moved out of Alchemy, materials now include Mild/Hot Spices. Single-source flagged (Icy alone; levels look datamined).
- Hub: addon bullet enriched (12.1.5 shared UI architecture, Game Informer goal), GDKP bullet += gold-laundering/actioning cites, First Aid potions bullet under Combat & itemization (links new post), Skyborne paragraph += retail NPC race-ID note, sources list Icy Veins entry extended to September 17 newsroom.
- No hit-list changes this round; links.js untouched (Icy cited inline like Tavern).
- Gates: comment balance OK all files; npm test OK (135/108/109/47/45 — 108 news = +1); build + smoke green; internal links OK; built words qna 999 / day-one 647 / first-aid 358 (qna trimmed twice from 1072 → 999 to stay ≤1000). Pushed 2925a06 (content; .impeccable + PRODUCT.md unstaged after accidental git add -A); IndexNow 4 URLs (classic-plus + 3 posts) HTTP 200.

# Progress — Sep 17 batch 7b (classicwowforever updates page pass)

- User pointed at classicwowforever.com/updates/; fetched page. No Q&A recap there (their latest = the 6 datamine guides, already covered). Two corroborations worth folding in:
- Krol'dok Stronghold: "Blizzard corrects Krol'dok to the 40–45 bracket" (panel & demo coverage, Sept 15) — hub already carried the 40-45 correction (Blizzard's Sept 14 clarification); added "(also noted by classicwowforever, September 15)" to the dungeon intro.
- Beta close date: classicwowforever's access reference independently flags the gap ("Purchase terms say through October 21; the roadmap says October 22. Exact closing time needs clarification") — added to hub beta meta-note (line 86) + roadmap timeline (line 398). Discrepancy stays open (still not resolved; hit list item unchanged).
- Also reconfirms beta needs no game time (classicwowforever explicit) — already attributed on hub; not re-flagged.
- "Dungeon quests reward the first run more heavily" (Sept 15) = dup of hub line 227 (The Sun interview). No new post this round.
- Gates: balance OK, npm test OK (135/108/109/47/45), build + smoke green. Pushed 16c9c61; IndexNow classic-plus URL.

# Progress — Sep 17 batch 8 (wowforeverclassic full-crawl integration)

- Full-site crawl of wowforeverclassic.com completed in plan mode (home, /forever hub, guides, all zones/dungeons/raids/BG, 12 systems, 3 race + 8 class + 8 race pages, 12 professions, methodology, ~95 URLs). Site grades everything Official/Verified/Reported/Unconfirmed. Found: hub already covered boats, zones, Legacy caps (16/65) + Spectral Bear track, most racial redesigns, Paladin deep-dive — crawl mostly corroborates. True deltas integrated:
- Hub dungeons: themes enriched per wfc panel reads (Hall of Thanes = dwarven burial grounds + Dark Iron invaders; Ruins of Lordaeron "above the Undercity" + necromancer final boss (reported); Blackmaw = corrupted furbolg city → mountain tunnels; Drowned City = resurfaced troll+naga ruins off Stranglethorn w/ earlier pirates read kept; Krol'dok = large outdoor ogre stronghold + Twilight's Hammer (reported); Shaper's = untouched Titan facility) + Alcaz Prison bracket 48-53 explicitly flagged reported-only (no Blizzard source) + meta note: no outlet discloses boss lists/Blueprint drops + wfc Krol'dok page stale (pre-correction 40-55 w/ 35-40 conflict) predating Blizzard's Sept 14 fix — 40-45 stands.
- Hub races: extended redesign list ashore -> wfc-grade-per-race (Dwarf/Undead/Troll = Blizzard-confirmed; Human/NE/Gnome/Orc/Tauren = verified; Quickness + Engineering Spec unresolved): exact numbers (Stoneform 10%/8s/3min; WotF 2min breaks-not-immunity; Cannibalize 7% hp+7% mana/2s/10s; Touch of the Grave 5%/5%; Berserking flat 10%/10s) + new racials named (Mace Spec +1% crit, Big Game Hunter +5% beasts, Find Treasure active tracking, Shatter Curse, Eureka!, Escape Artist 5s one-report, Expansive Mind +5% mana/rage/energy, Cultivation herb nodes, War Stomp 2s/5/8yd, Endurance +5%/+1%, Elune's Light 15s, Wisp Spirit +75%).
- Hub classes: Paladin bullet += wfc reads (Templar's Bulwark absorb = 100% max HP @ 21pt; Reckoning rework 40% extra attack per block; Shield Spec 6% mana/block ≤1/3s; Iron Creed +25% HT threat/-10% dmg 6s; Divine Favor → 16pt; Judgment slide 91 mana/10yd/10s/instant; Undead Paladins start at Bandarion Keep w/ own epic mount quest; "Seal of Wrath" naming conflict noted). New "Reported class changes" bullet: Priest Divine Spirit baseline (official) + Fear Ward all-priests (reported) + race-specific priest spells; Warrior Victory Rush baseline/Weaponmaster/Bloodthirst 35%/Enrage any-damage/TBC imports/no shared CDs/Slam 15s/Shield Block 2/Thunder Clap def-stance; Mage Arcane Blast 4-stack/Missile Barrage/Hot Streak verified + Ice Lance 300%/Blast Wave/Pyroblast/Frostfire Bolt reported; Shaman Lava Burst/Rage of the Farseer/Riptide (reported) + Dwarf Shaman & Horde Skyborne Shaman confirmed, no Alliance one; Hunter/Rogue/Warlock = nothing detailed yet.
- Hub systems: combat threat cap 3-4 targets (panel videos); camping named objects (Sharpening Wheel AP20/Anvil 140/Master Forge 300, Faction Banner Spirit, Incense Candle Int, Alchemy Lab flask-crafting (reported), Tanning Rack, First Aid Kit Stamina ≈ PW:F from Linen Bandages + Refreshing Spring Water; /sit 1h buff; 1h object CD; one object/player) — noted BS skills ≠ Legacy challenge milestones, no conflict; transmog += PvP rank requirement + saved outfits multi-piece; graphics += ray-traced GI min-spec + sun/moon + water shader.
- Hub other: Riverglades Official bracket 35-45 (panel videos) alongside Inven 150+; beta section += wfc FAQ independent reads (cap "20→30 after a couple of weeks" reported; progress "most likely not" carry over) — cap/wipe still [NEEDS VERIFICATION] vs official; CE price $150 reported sold-out (wfc); Legacy meta += wfc corroboration (16/65 caps, Spectral Bear track, "7 Professions perks shown so far"); sources entry extended to full-crawl coverage.
- First Aid post updated (594w built): wfc = 2nd source (healing potions = First Aid crafts; "unclear" whether Alchemy can too — removal stays Icy-only, flagged), curatives (Woolen Tourniquet/Simple Poultice/Anti-Venom), First Aid Kit camp object, Field Medicine perk note.
- Hit list: Round 2 block — item 5 name variance documented (wfc "Whelgar's Excavation" vs cwf "Excavation Site", same 24-29 band/location; no boss lists/Blueprint drops disclosed), item 4 caps double-confirmed (16/65 + Spectral Bear + 10 named perks; 17 effects/ranks still wait on Legacy UI); new open: Alcaz 48-53 reported-only; Krol'dok wfc-stale note. Trimmed to 981w ≤1000.
- No new racial post: existing forever-skyborne-racials-class-combos (Sep 13) already covers redesigns; plan default hub-only, grades live on hub.
- Gates: comment balance 0/0; npm test OK (135/108/109/47/45); build + smoke green; internal links OK; built words first-aid 594 / hit-list 981 (≤1000).

# Progress — Sep 17 batch 9a (MMORPG.com / MassivelyOP BlizzCon interview)

- User pointed at MMORPG.com's BlizzCon 2026 interview (Robin Baird, Sep 15) with Senior Game Designer Josh Greenfield + Senior Art Director Jeff Parrott ("Campsites, Horizontal Progression and More"). mmorpg.com is bot-403 (direct fetch failed; read full text via Wayback capture). MassivelyOP's independent recap (Chris Neal, Sep 16) used as second readout.
- Already covered (no dup): item-stats-hidden-until-drop + no Dungeon Journal at launch (hub line 232 + beta day-one post), built-in damage meter/cooldown manager + addon API. True deltas integrated:
- New post forever-interview-campsites-biome-gear (781w built): campsite rules (campfire + fixtures ~10 min, 1h placement cooldown corroborating wfc demo read, no cities + min distance between fires / "shanty towns", base fire 3 fixtures + higher-level hold more, level-restricted, better object replaces weaker / "rinky dink sharpening stone" anti-gatekeeping, "smell an inviting fire" trail buff, dev levers, Duskwood Stitches anecdote); biome-specific gear effects (Whitemane's Chapeau rez-cast speed, dragon-slaying sets, "hundreds" — incremental nominal raid-tier power, blue-beats-epic-for-purpose, epics keep prestige); storage (~96-slot bank "2x/4x as large", bags original size); transmog toggle clarification (hides only others' mogs; your own outfit stays; still no hide-helm/cloak); SoD class-quest carryover + more planned (single-source); additive-not-destructive world changes (Cataclysm caution, Azshara quests, Wetlands lighting); Classic-paced combat (10-15s kills, pull 3 = die); damage meter in / cooldown manager near-future. Grade flags: direct quotes = first-party; "I think" hedged numbers (10 min, 96 slots) = dev estimates; class-quest + pacing = single-source flagged; MassivelyOP corroborates campsites/biome/storage/surprise-loot.
- Hub (classic-plus.njk): camping += placement/duration/1h-CD/replacement/level-restrict/smell-buff bullet; combat & itemization += biome-effects + storage bullets + Classic-paced combat line; transmog += toggle-only-hides-others; progression += class-quest carryover; design pillars += additive-world note; line 232 += MassivelyOP corroboration; line 204 += cooldown-manager "may miss beta" nuance; sources += MMORPG.com + MassivelyOP entries.
- No hit-list changes (nothing beta-verifiable among these claims).
- Gates: comment balance 33/33; npm test OK (135/108/109/47/45); build + smoke green; internal links OK; built words 781 ≤1000.

# Progress — Sep 17 batch 9b (OutlawCraft day-2 live format)

- User pointed at outlawcraft.com. Tracked since earlier today (batch with Azeron, status dev, beta from Sep 16). New: "What does live look like?" post (Sep 17, day 2 of beta) — servers.js details updated + join post extended.
- Monthly full wipes once live (set date each month, all character + base progression, announced in advance) — deliberate answer to survival-loot retention; Kalimdor end-game access an open community question (new tier or Eastern Kingdoms replica w/ Tanaris spawn; Discord poll planned); replayability framed around treks/fortresses/base-raids; beta wiped before launch, launch "probably about a month" (dev-hedged, "I think"-style estimate, subject to feedback).
- Snapshot refresh: 1 online / 18 Discord members (Sep 17 re-read) replacing 4 online / 12 members (Sep 16). popTier stays tiny; status stays dev.
- Sourced: join post SOURCES comment extended; honest flags += monthly-wipe/liveline "intent not commitment" note; "Why both" review date → Sep 16–17.
- Gates: comment balance OK; npm test OK; build + smoke green; join post 604w built (≤1000).
- Pushed: 58d691e (9a) + 6cc421f (9b); IndexNow 4 URLs (classic-plus, interview post, servers/outlawcraft, join post) HTTP 200. .impeccable/ + PRODUCT.md never staged (explicit-path adds only).

# Progress — Sep 17 batch 9c (OutlawCraft Survivor's Handbook full design read)

- User re-pointed at outlawcraft.com; crawled remaining pages: /how_to_play, /guide (the "Survivor's Handbook"), /armory/solo_pvp ladder, the Sep 16 Beta post + re-read homepage/news. Full custom design now documented (all server-reported, single source, flagged "all subject to change").
- New post outlawcraft-survival-handbook (925w built): full-wipe death loop (death sack + Dog Tag, respawn lvl 1, talents wiped), cap 10 + 21 talent points, hunger/thirst/bleeding tables (dehydration kills, starvation can't), 5 zombie tiers south→north (Karazhan Alphas, VanCleef is one, healing zombies, doors stop them), Black Sites (gem-opened 30-min shared maps, 5-min closure, tier ladder Ashen→Sovereign/Karazhan), claims (50yd, 2/clan, 25 pieces/5 doors, 5-day decay) + Gnomish Code Locks (6-digit, jam 1 min @5 wrong, re-key) + sapper-only doors/crowbar-from-inside raiding, 60-yard render cap + proximity voice (anti-ESP, "nothing for a cheat to read"), no general chat/mail, clan-required grouping (4-player squads), rune-gated magic, required custom patch + addon, 1 char/account + 1 login/IP, scrap economy.
- Conflict flagged: guide says level cap 10 but the armory Solo PvP ladder lists a level-40 #1 (0 kills, no guild) — same-site self-contradiction, possibly test data, unverified; 21-character ladder all show one class icon consistent with "every race plays one class: the Outlaw."
- servers.js OutlawCraft details extended to cover the Handbook systems + cap conflict; join post adds cross-link to the new design post.
- Gates: comment balance 33/33; npm test OK (135/110/109/47/45 — 110 news = +1); build + smoke + internal links green; built words 925 ≤1000 (join post ~650).
- Pushed cb7586a; IndexNow 3 URLs (design post, /servers/outlawcraft/, join post) HTTP 200.

# Progress — Sep 17 batch 10 (wowforeverclassic re-check /racials + pricing)

- User re-pointed at wowforeverclassic.com after batch 8's full crawl. Sitemap diff: URL set identical (~95 paths, no new pages). Re-read the highest-delta pages to catch beta-day updates: /forever, /guides/release-date-beta, /guides/dungeons-by-level, /forever/system/{class-changes,items-and-stats,camping}, /forever/race/racial-abilities, /racials. All system/guide pages match batch-8-integrated facts (cap 20→30 reported, 21 Oct close, Krol'dok 40-55 stale page, Alcaz reported-only, camping objects, class reworks). True deltas: the full /racials 40-racial table + the Reported pricing block.
- Hub (classic-plus.njk):
  - Racial meta note aligned + resolved: Command and Diplomacy dropped (wfc /racials table lists neither for any race — 40 racials, 17 new, 15 changed, per-racial grades); Classic weapon-skill specializations → crit-based (Sword +2%, Axe +1%, Mace +1% spell-and-ability crit); NE Quickness + Gnome Engineering Specialization stay two-way conflicts (wfc grades both "unconfirmed").
  - Invite-A-Friend line: single-report code-count conflict flagged — wfc (reported) lists Epic 2 codes / Collection 3 vs Blizzard official 3 for Epic; official count retained.
  - Hardcore: wfc (official) exclusion from account-wide Collections + Legacy Points added to the one-way-transfer bullet.
  - Beta FAQ: beta-ops notes added — client can go offline at any time; no separate beta forums (feedback on the WoW Forever forum), per Blizzard support article via wfc.
  - Sources: wfc entry extended with the Sep 17 re-check (same-day page refresh confirmed on six pages; corroborates integrated facts; adds the IAF code-count conflict).
- Hit list (forever-beta-verification-hit-list.md, 961w built ≤1000): Round 3 block added — item 8 (racial leftovers) resolved on structure; item 7 (Heroic $29.99) corroborated-not-official (wfc reported block: Heroic $30 / Epic $60 / Collection ~$80, 3rd read); new open item: IAF code-count single-report conflict. Minor trims to stay under the cap.
- Unchanged/open: NE Quickness + Gnome Engineering (Unconfirmed two-way); cap 20→30 + wipe (reported); Onyxia Dec 9 (reported); Oct 21 vs 22 close (still open; wfc reaffirms 21).
- Gates: comment balance 33/33; npm test OK (135/110/109/47/45); build + smoke + internal links green; hit list 961w ≤1000.
- Pushed 7627d27; IndexNow 2 URLs (/classic-plus/, hit list) HTTP 200. .impeccable/ + PRODUCT.md never staged (explicit-path adds only).

# Progress - Sep 23 operations close

- Research: Tavern, Icy Veins, classicwowforever, Warperia, Nostalgic.gg, and first-party sites checked. Tavern book-reward item was already covered. Four entries cleared first-party verification: Freedom WoW, Azekai Reincarnated, Elderhide, and Project Rx. Amdir and Digital World held for lack of reachable first-party sites; Zamolxia and SKYWOW held pending corroboration.
- Tracker: added four verified entries, then browser QA found existing `FreedomWoW` and new `Freedom WoW` were same realm. Merged to official `Freedom WoW`, preserved old label as `~~FreedomWoW~~ (Aug 24 listing)` in the server note, added redirect, and final total is 143 servers.
- Directory: built `/servers/` with A-Z rows, search, status filter, era shortcuts, live counts, and undated fallback. Census era counts now derive from `groupByEra` data instead of hardcoded totals.
- Operations: refreshed llms files, sitemap.md, feed, XML, API JSON, manifest, and footer checks. Added directory to sitemap.md. Expanded smoke link audit to inspect fragment URLs; repaired Everlook Radio history link to `/#event-everlook-radio-reborn-2026`.
- Gates: dash grep clean; `npm test` passed at 143 servers, 144 news, 107 links, 49 history events, 45 Classic+ entries; `npm run build` passed with explicit `BUILD_EXIT=0`; local audit passed; commits pushed through `0ba7002`; IndexNow submissions returned HTTP 200.
- Live QA: 19 core URLs returned 200; XML and JSON parsed; `/servers/freedomwow/` returned 308 to canonical `/servers/freedom-wow/`; live directory showed 143 rows, no Invalid Date, and one Freedom record. Desktop and 390px mobile checks showed no horizontal overflow, no broken images, and no console errors on home, directory, hub, news, blog, and census.
- Post-review fix: census era guide descriptions were HTML-escaped in rendered output; static trusted markup now uses `safe`, and live census recheck confirmed real OctoWoW links. Pushed `98000bd`; IndexNow HTTP 200.
- Retro: activated `.planning/2026-09-04-wow-ps`, refreshed root and active task plans, and wrote Sep 24 roadmap. Next watch items: Sep 24 beta update, level-cap rise, Server Slam date, bank 48-vs-96, and Tarnished Undermine Reals.

# Progress - UI mode pass

- Added semantic surface modes: dashboard, reading, reference, media, legal, utility, showcase. Shared header/nav/footer remains intact.
- Legal and utility pages now use narrower reading width and quieter headers. Media pages hide generic metadata and gain task-focused emphasis.
- Fixed census description/subtitle rendering through `eleventyComputed`; added smoke regression for unrendered template expressions.
- Fixed mobile overflow in Classic+ and Music reference/media layouts.
- Bumped stylesheet cache key from `v=4` to `v=5`; Vercel immutable CSS cache initially served stale mobile rules.
- Local desktop/mobile QA passed. Live desktop/mobile QA passed after deployment; CSS v5 confirmed. Detector returned no findings.
- Pushed `282efca` and `8a30aa9`; IndexNow HTTP 200.

# Progress - UX refinement batch

- Classic+ TOC moved before content, made sticky on desktop, responsive on mobile, and given active-section state on scroll and click.
- Radio and Music now have explicit media hierarchy, readable player controls, larger touch targets, and responsive layouts.
- Shop now uses three clear category cards plus explicit affiliate disclosure.
- Contact now uses a compact Shimsha identity card and message checklist while preserving joke tone.
- Detector returned no findings. Local and live desktop/mobile QA passed with no overflow or undersized new controls.
- Vercel immutable CSS cache required another bump, `v=5` to `v=6`; live CSS v6 confirmed.
- Pushed `d71d222`, `f5e9f7e`, `7e66541`, and `165cf3e`; IndexNow HTTP 200.

# Progress - Sep 24 daily operation

- Source sweep: official Blizzard beta page, official Legacy article 24307383, Kaivax weather blue post, Icy Veins, Wowhead, PC Gamer, Warcraft Tavern, Blizzard Watch, MMO-Champion, Quissy.tv, Arctium, GamesRadar, Mein-MMO, Warperia, and Nostalgic.gg checked or indexed. No new private-server candidate cleared first-party verification.
- Published `news/forever-beta-weather-tease-sep-24.md`: Blizzard's Sep 23 weather tease, scoped to selected beta zones, with no invented rollout date or weather toggle claim.
- Corrected `blog/forever-legacy-camping-systems-explained.md` against Blizzard's Sep 23 official article. Preserved the Sep 13 17-perk, level-9 Talented, and unverified-rank claims with dated strike-through. Updated the hub, verification hit list, and designer-interview cross-reference.
- Official Legacy facts now recorded: 65 Challenges, 21 named perks, 16 spendable points per character, up to 29 points on one character, level-25 access for most players, and four launch rewards. Numeric rank curves and reward thresholds remain beta-read data.
- Gates: dash grep clean for new copy; `npm test` passed with 143 servers, 145 news, 107 links, 49 history events, and 45 Classic+ entries; `npm run build` passed with explicit exit 0, 418 files, smoke/internal-link/domain gates green. CDN watcher read live 1.60.1.69963 with 6 bumps.
- Local browser QA: weather post and Legacy guide render at desktop and 390px mobile with no horizontal overflow; official links, three strike-through corrections, and hub correction markup render correctly. Local Vercel Insights 404 is expected from static server.
- Push path: first push was rejected because remote commit `71602c6` auto-refreshed `cdn-last.json` to 1.60.1.69963. Fetched and rebased cleanly; content commit is now `8ee70ca`, pushed to `origin/main`. Pre-push status showed only untracked `.impeccable/` and `PRODUCT.md`, never staged.
- Deployment verified after push: new weather URL, corrected Legacy guide, hub, feed, sitemaps, APIs, llms files, manifest, and legacy redirect all returned expected live responses. Live JSON counts are 145 news and 143 servers; XML parses cleanly. Desktop and 390px mobile checks show no overflow; production browser reports no current console errors. CSS remains `v=6`.
- IndexNow submitted 6 affected URLs, HTTP 200. Sep 24 roadmap closed; Sep 25 preliminary roadmap written at `/home/reps/.opencode/plan/2026-09-25.md`.

# Progress - Sep 25 Forever crawl and correction

- Source sweep covered official Blizzard news and forums, Blizzard China, Arctium, Wowhead, Warcraft Tavern, WOWF.IO, WOW Forever Builds, classicwowforever, wowforeverclassic, Icy Veins, Blizzard Watch, PC Gamer, GamesRadar, MassivelyOP, Mein-MMO, Quissy, Guided.news, and other indexed beta references.
- Retrieved automatic captions for Blizzard's official September 23 video `dvueCoFTkCk` with `yt-dlp`. At 00:03:54 it says the 40-player Onyxia's Lair raid is available at launch. Blizzard's September 12 What's Next recap still says new raids unlock December 9. Preserved both first-party claims and left the date conflict open.
- Published `news/forever-video-onyxia-at-launch-sep-24.md` and added Round 8 to `news/forever-beta-verification-hit-list.md`. No Server Slam date, level-cap activation date, or new weekly patch was verified.
- Published `blog/forever-cozy-sleeping-bag-route.md`, a beta-only guide for the level-14 six-quest route, reported 3 percent rested effect, 8 percent kill-XP total with food, and 12-slot reward. Linked it from the Legacy and Camping guide.
- Other fresh leads remain beta-client or secondary material: bank 48 slots, Coldflame Saber, Partners in Crime rings, Hyjal boss strings, Legendary questline strings, and Hall of Thanes walkthrough. No speculative claims promoted.
- Gates: `npm test` passed with 143 servers, 146 news, 107 links, 49 history events, and 45 Classic+ entries. `npm run build` passed with explicit exit 0, 420 files, smoke/internal-link/domain gates green. CDN watcher read live 1.60.1.69963 with 6 bumps.
- Local browser QA passed for new news, new blog, corrected hit list, and Legacy guide at 390px with no horizontal overflow. Local Vercel Insights 404 is expected from the static server.
- Pre-push status showed only untracked `.impeccable/` and `PRODUCT.md`; neither was staged. Content commit `4f3b111` pushed to `origin/main`.
- IndexNow key returned HTTP 200 and accepted five affected URLs with HTTP 200.
- Live deployment initially showed transient 404s for new routes, then served them after Vercel completed. New news, Cozy guide, corrected hit list, Legacy guide, feed, APIs, sitemaps, llms, and manifest all returned HTTP 200. Live news count is 146 and server count is 143. Freedom WoW legacy URL returns 308 to `/servers/freedom-wow/`.
- Live browser QA passed at 1280px and 390px for both new pages and the corrected hit list with no horizontal overflow. Production console showed no current errors. XML and JSON parse checks passed; feed, sitemap, and llms include both new URLs.
