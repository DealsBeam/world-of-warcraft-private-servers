---
layout: base.njk
permalink: /wow-forever/map/
eleventyExcludeFromCollections: true
title: "WoW Forever Leveling Map: Zones, Dungeons and Raids by Level"
canonical: "https://wowprivateservers.vercel.app/wow-forever/map/"
description: "A schematic, source-graded map of World of Warcraft: Forever. Filter the four new zones, nine dungeons, three raids and confirmed travel routes by level. No client artwork is reused."
---

<p><a href="/forever/">← Forever hub</a></p>

## What this map is

World of Warcraft: Forever adds four new regions, nine new dungeons, three level-60 raids and a set of expanded ship routes to the original world. This is a **schematic atlas** of those additions: it shows which continent each thing is on and roughly where it sits, with a level filter and a source grade on every marker.

It is **not** a geographic reproduction. Marker positions are hand-drawn and not to scale, and we do not reuse Blizzard's extracted map artwork or another site's tile set. If you need exact coordinates, use an in-game map or a client-data map; this page is for planning where to level and what opens at each band.

Type a level from 1 to 60 to see which markers fit, or switch categories on and off. Click any marker for its source grade and the page where we cover it in detail.

**On this page**

1. [The atlas](#the-atlas)
2. [All markers by level](#all-markers-by-level)
3. [How this was built](#how-this-was-built)

<h2 id="the-atlas">The atlas</h2>

<div class="wfmap-controls">
    <label for="wfmap-level">Show level</label>
    <input type="number" id="wfmap-level" min="1" max="60" placeholder="e.g. 42" inputmode="numeric">
    <button type="button" id="wfmap-clear">Show all</button>
    <span class="wfmap-status" id="wfmap-status" aria-live="polite">Showing every marker</span>
</div>
<div class="wfmap-kinds" role="group" aria-label="Filter marker types">
    <button type="button" class="wfmap-kind active" data-kind="zone" aria-pressed="true">New zones</button>
    <button type="button" class="wfmap-kind active" data-kind="dungeon" aria-pressed="true">Dungeons</button>
    <button type="button" class="wfmap-kind active" data-kind="raid" aria-pressed="true">Raids</button>
    <button type="button" class="wfmap-kind active" data-kind="travel" aria-pressed="true">Travel</button>
</div>

<div class="wfmap-canvas">
    <svg class="wfmap-bg" viewBox="0 0 1000 640" preserveAspectRatio="xMidYMid meet" aria-hidden="true" focusable="false">
        <rect x="0" y="0" width="1000" height="640" class="wfmap-sea"></rect>
        <path class="wfmap-land" d="M95 110 L180 80 L280 95 L360 85 L420 120 L445 180 L430 250 L455 310 L420 370 L440 430 L400 490 L330 540 L250 555 L180 520 L120 470 L95 400 L80 320 L90 230 Z"></path>
        <path class="wfmap-land" d="M585 100 L660 75 L750 90 L840 80 L910 130 L935 205 L910 275 L930 350 L890 430 L830 500 L750 545 L680 530 L620 480 L580 410 L560 330 L570 250 L555 180 Z"></path>
        <path class="wfmap-isle" d="M494 96 L536 88 L552 116 L530 146 L494 140 L480 118 Z"></path>
        <path class="wfmap-isle" d="M812 470 L846 462 L862 484 L840 506 L810 498 Z"></path>
        <text x="255" y="590" class="wfmap-continent">Eastern Kingdoms</text>
        <text x="745" y="590" class="wfmap-continent">Kalimdor</text>
        <text x="516" y="170" class="wfmap-continent small">Zephras Isle</text>
        <text x="255" y="600" class="wfmap-note">schematic, not to scale</text>
    </svg>

    <div class="wfmap-markers" id="wfmap-markers">
        <button type="button" class="wfmap-marker k-zone" style="left:43%;top:52%" data-kind="zone" data-min="36" data-max="44" data-name="Riverglades" data-meta="Eastern Kingdoms, level 36-44" data-grade="Band from ForeverChanges, a data site. Zone and travel links confirmed by Blizzard's Found Photos recap." data-note="Mid-level zone the size of Stranglethorn Vale, with more than 200 new quests. Reached by boat to Powderfuse Port or by the Horde and Alliance flight paths." data-link="/classic-plus/#zones" aria-label="Riverglades">Riverglades</button>
        <button type="button" class="wfmap-marker k-zone" style="left:76%;top:28%" data-kind="zone" data-name="Mount Hyjal" data-meta="Kalimdor, endgame" data-grade="Blizzard panel and raid overview" data-note="Post-Archimonde recovery and Darkwhisper Gorge. Home to the 20-player Hyjal Summit raid and the entrances to Barrow Deeps." data-link="/classic-plus/#zones" aria-label="Mount Hyjal">Mount Hyjal</button>
        <button type="button" class="wfmap-marker k-zone" style="left:69%;top:66%" data-kind="zone" data-name="Shen'dralas" data-meta="Kalimdor, between Mulgore and Desolace" data-grade="Blizzard reveal recap" data-note="Hidden zone tied to the Shen'dralar. No Blizzard level band is published, so it is not part of the level filter." data-link="/classic-plus/#zones" aria-label="Shen'dralas">Shen'dralas</button>
        <button type="button" class="wfmap-marker k-zone" style="left:51%;top:18%" data-kind="zone" data-name="Zephras Isle" data-meta="Skyborne starting zone" data-grade="Blizzard pre-purchase announcement" data-note="Starting zone for the Skyborne race. Race access is tied to a paid upgrade pack. Placement on this atlas is schematic." data-link="/classic-plus/#skyborne" aria-label="Zephras Isle">Zephras Isle</button>

        <button type="button" class="wfmap-marker k-dungeon" style="left:25%;top:29%" data-kind="dungeon" data-min="13" data-max="18" data-name="Hall of Thanes" data-meta="13-18, beneath Ironforge" data-grade="Blizzard recap" data-note="Burial grounds of the dwarven monarchs, invaded by Dark Iron dwarves." data-link="/classic-plus/#dungeons" aria-label="Hall of Thanes">Hall of Thanes</button>
        <button type="button" class="wfmap-marker k-dungeon" style="left:30%;top:21%" data-kind="dungeon" data-min="15" data-max="20" data-name="Ruins of Lordaeron" data-meta="15-20, above the Undercity" data-grade="Bracket confirmed; faction and final boss reported" data-note="Scourge and necromancers hold the ruined city. Reported as Horde-side with a necromancer final boss." data-link="/classic-plus/#dungeons" aria-label="Ruins of Lordaeron">Ruins of Lordaeron</button>
        <button type="button" class="wfmap-marker k-dungeon" style="left:31%;top:36%" data-kind="dungeon" data-min="24" data-max="29" data-name="Whelgar's Excavation" data-meta="24-29, the Wetlands" data-grade="Dungeon name is a fan-site read of the site Blizzard named" data-note="A Titan site trapped in time at the excavation. Blizzard's recap names the site rather than the dungeon." data-link="/classic-plus/#dungeons" aria-label="Whelgar's Excavation">Whelgar's Excavation</button>
        <button type="button" class="wfmap-marker k-dungeon" style="left:29%;top:44%" data-kind="dungeon" data-min="28" data-max="33" data-name="City of Dalaran" data-meta="28-33, Alterac Mountains" data-grade="Blizzard panel, bracket from a fan-site read" data-note="The bubble is gone and Dalaran is an interactive city with levelling content." data-link="/classic-plus/#dungeons" aria-label="City of Dalaran">City of Dalaran</button>
        <button type="button" class="wfmap-marker k-dungeon" style="left:40%;top:64%" data-kind="dungeon" data-min="35" data-max="40" data-name="The Drowned City" data-meta="35-40, off Stranglethorn" data-grade="Blizzard panel" data-note="Resurfaced troll and naga ruins off Stranglethorn Vale." data-link="/classic-plus/#dungeons" aria-label="The Drowned City">The Drowned City</button>
        <button type="button" class="wfmap-marker k-dungeon" style="left:45%;top:57%" data-kind="dungeon" data-min="40" data-max="45" data-name="Krol'dok Stronghold" data-meta="40-45, the Riverglades" data-grade="Corrected by Blizzard from an earlier 40-55 range" data-note="Large outdoor ogre stronghold in the Riverglades, with ogres alongside Twilight's Hammer." data-link="/classic-plus/#dungeons" aria-label="Krol'dok Stronghold">Krol'dok Stronghold</button>
        <button type="button" class="wfmap-marker k-dungeon" style="left:84%;top:59%" data-kind="dungeon" data-min="48" data-max="53" data-name="Alcaz Prison" data-meta="48-53, off Dustwallow Marsh" data-grade="Reported, no Blizzard source found for the bracket" data-note="Island prison holding Defias inmates and naga. The bracket is the least certain of the nine." data-link="/classic-plus/#dungeons" aria-label="Alcaz Prison">Alcaz Prison</button>
        <button type="button" class="wfmap-marker k-dungeon" style="left:87%;top:32%" data-kind="dungeon" data-min="55" data-max="60" data-name="Blackmaw Hold" data-meta="55-60, Azshara" data-grade="Named by developers; band from client files" data-note="Corrupted furbolg city behind the Timbermaw gate. Developers described it as bigger than Blackrock Depths and tuned to clear in one long session." data-link="/classic-plus/#dungeons" aria-label="Blackmaw Hold">Blackmaw Hold</button>
        <button type="button" class="wfmap-marker k-dungeon" style="left:71%;top:55%" data-kind="dungeon" data-min="58" data-max="60" data-name="Shaper's Terrace" data-meta="58-60, Un'Goro" data-grade="Blizzard recap" data-note="An untouched Titan facility. Its level band overlaps Blackmaw Hold at the top end." data-link="/classic-plus/#dungeons" aria-label="Shaper's Terrace">Shaper's Terrace</button>

        <button type="button" class="wfmap-marker k-raid" style="left:70%;top:39%" data-kind="raid" data-min="60" data-max="60" data-name="Barrow Deeps" data-meta="Level 60, 10 players" data-grade="Blizzard raid overview, October 19" data-note="The prison vault under Kalimdor where Illidan was held. Multiple entrances connect through Mount Hyjal, Winterspring and Blackmaw Hold. Opens December 9." data-link="/classic-plus/#raids" aria-label="Barrow Deeps">Barrow Deeps</button>
        <button type="button" class="wfmap-marker k-raid" style="left:79%;top:22%" data-kind="raid" data-min="60" data-max="60" data-name="Hyjal Summit" data-meta="Level 60, 20 players" data-grade="Blizzard raid overview, October 19" data-note="At the summit of Mount Hyjal near Nordrassil. Blizzard says 13 bosses. Opens December 9." data-link="/classic-plus/#raids" aria-label="Hyjal Summit">Hyjal Summit</button>
        <button type="button" class="wfmap-marker k-raid" style="left:82%;top:61%" data-kind="raid" data-min="60" data-max="60" data-name="Onyxia's Lair" data-meta="Level 60, 40 players" data-grade="Blizzard raid overview, October 19" data-note="In Dustwallow Marsh. Keeps the Classic attunement chain and the Drakefire Amulet, per character. Opens December 9." data-link="/classic-plus/#raids" aria-label="Onyxia's Lair">Onyxia's Lair</button>

        <button type="button" class="wfmap-marker k-travel" style="left:23%;top:70%" data-kind="travel" data-name="Stormwind Harbor to Auberdine" data-meta="Cross-continent ship" data-grade="Blizzard Found Photos recap" data-note="An early cross-continent path between the Eastern Kingdoms and Kalimdor." data-link="/classic-plus/" aria-label="Stormwind Harbor to Auberdine">Stormwind Harbor</button>
        <button type="button" class="wfmap-marker k-travel" style="left:32%;top:48%" data-kind="travel" data-name="Menethil, Southshore and Auberdine" data-meta="Flexible levelling route" data-grade="Blizzard Found Photos recap" data-note="A more flexible route between the continents while levelling." data-link="/classic-plus/" aria-label="Menethil, Southshore and Auberdine">Menethil route</button>
        <button type="button" class="wfmap-marker k-travel" style="left:79%;top:75%" data-kind="travel" data-name="Steamwheedle Port to Powderfuse Port" data-meta="Tanaris to the Riverglades" data-grade="Blizzard Found Photos recap and Zierhut interview" data-note="The final ship route, from the Steamwheedle Cartel in Tanaris to Powderfuse Port in the Riverglades, with a dock connecting on to Gadgetzan." data-link="/classic-plus/" aria-label="Steamwheedle Port to Powderfuse Port">Powderfuse route</button>
    </div>
</div>

<div class="wfmap-detail" id="wfmap-detail" aria-live="polite">
    <h3 id="wfmap-detail-name">Select a marker</h3>
    <p id="wfmap-detail-meta">Click any marker on the atlas to see its level band, source grade and a link to our full coverage.</p>
    <p id="wfmap-detail-note" hidden></p>
    <p id="wfmap-detail-grade" hidden></p>
    <p id="wfmap-detail-link" hidden></p>
</div>

<p class="meta-info">Markers without a level band stay visible only while the level filter is empty. They are travel routes or zones for which Blizzard has not published a number.</p>

<h2 id="all-markers-by-level">All markers by level</h2>

The same data in text form. Source grades are shown on the markers as well, because a reported bracket should never look like a confirmed one.

| Level | Marker | Type | Grade |
|---|---|---|---|
| 13-18 | Hall of Thanes | Dungeon | Blizzard recap |
| 15-20 | Ruins of Lordaeron | Dungeon | Bracket confirmed, details reported |
| 24-29 | Whelgar's Excavation | Dungeon | Fan-site read |
| 28-33 | City of Dalaran | Dungeon | Blizzard panel, bracket reported |
| 35-40 | The Drowned City | Dungeon | Blizzard panel |
| 36-44 | Riverglades | New zone | Data-site band |
| 40-45 | Krol'dok Stronghold | Dungeon | Blizzard correction |
| 48-53 | Alcaz Prison | Dungeon | Reported |
| 55-60 | Blackmaw Hold | Dungeon | Named by developers, band from files |
| 58-60 | Shaper's Terrace | Dungeon | Blizzard recap |
| 60 | Barrow Deeps, Hyjal Summit, Onyxia's Lair | Raids | Blizzard raid overview |
| no band | Shen'dralas, Zephras Isle, Mount Hyjal | New zones | Blizzard reveal and announcements |
| no band | Three ship and flight routes | Travel | Blizzard Found Photos recap |

<h2 id="how-this-was-built">How this was built</h2>

We drew the base ourselves. The landmasses are simplified shapes in an SVG, not extracted client art, and marker positions are schematic. The data comes from our own sourced reference page and news archive, not from a client data dump. Where a number is reported rather than confirmed, the marker says so.

That is the main difference between this atlas and a client-data map. A client map can tell you exactly where a flight master stands. This one tells you which bracket to run next, which continent it is on, and how certain we are. For exact coordinates, use the game or a client-data map; we are not pretending to be one.

SOURCES: Blizzard's Found Photos recap and panel coverage, the October 19 raid overview, and the BlizzCon reveal recap, all collected on [the Classic+ reference page](/classic-plus/). Level brackets and caveat grades follow the table there. The Riverglades band of 36-44 is from ForeverChanges, a data site, and is labelled as such; it is the only number on this page that is not Blizzard-confirmed or a clearly graded fan-site read. Related: [the Forever hub](/forever/), [the nine dungeons](/news/forever-nine-dungeons-oct-21/), [the raid overview](/news/forever-raid-overview-dec-9-oct-21/) and [the guides index](/guides/).

<style>
.wfmap-controls,.wfmap-kinds{display:flex;flex-wrap:wrap;gap:.6rem;align-items:center;margin:1rem 0}
.wfmap-controls label{font-weight:600}
.wfmap-controls input{width:7rem;padding:.45rem .6rem;border:1px solid var(--line,#889);border-radius:8px;background:var(--panel,#fff);color:inherit}
.wfmap-controls button,.wfmap-kind{padding:.45rem .8rem;border:1px solid var(--line,#889);border-radius:999px;background:transparent;color:inherit;cursor:pointer}
.wfmap-kind.active{background:var(--accent,#345);color:#fff;border-color:var(--accent,#345)}
.wfmap-status{font-size:.9rem;opacity:.85}
.wfmap-canvas{position:relative;width:100%;max-width:1000px;aspect-ratio:1000/640;margin:0 auto;border:1px solid var(--line,#889);border-radius:14px;overflow:hidden;background:#13202b}
.wfmap-bg{display:block;width:100%;height:100%}
.wfmap-sea{fill:#152a38}
.wfmap-land{fill:#3c5a46;stroke:#75977a;stroke-width:2}
.wfmap-isle{fill:#4a6b52;stroke:#75977a;stroke-width:2}
.wfmap-continent{fill:#dce9d8;font:700 22px Sora,sans-serif;text-anchor:middle;letter-spacing:.06em}
.wfmap-continent.small{font-size:15px}
.wfmap-note{fill:#9db3a0;font:12px Sora,sans-serif;text-anchor:middle}
.wfmap-markers{position:absolute;inset:0}
.wfmap-marker{position:absolute;transform:translate(-50%,-50%);font:600 11px/1.2 Sora,sans-serif;padding:.3rem .45rem;border-radius:6px;border:1px solid #0c151c;color:#08131b;cursor:pointer;white-space:nowrap;box-shadow:0 1px 3px #0007}
.wfmap-marker:hover,.wfmap-marker:focus{outline:3px solid #ffd166;z-index:5}
.wfmap-marker.k-zone{background:#ffd166}
.wfmap-marker.k-dungeon{background:#8ecae6}
.wfmap-marker.k-raid{background:#ef8354}
.wfmap-marker.k-travel{background:#c8b6ff}
.wfmap-marker[hidden]{display:none!important}
.wfmap-detail{margin:1rem 0 0;padding:1rem;border:1px solid var(--line,#889);border-radius:12px;background:var(--panel,#f6f6f3)}
.wfmap-detail h3{margin-top:0}
.wfmap-detail p{margin:.45rem 0}
@media(max-width:760px){.wfmap-marker{font-size:9px;padding:.22rem .3rem}.wfmap-continent{font-size:16px}}
</style>
<script>
(function () {
    var level = document.getElementById("wfmap-level");
    var clear = document.getElementById("wfmap-clear");
    var status = document.getElementById("wfmap-status");
    var markers = Array.prototype.slice.call(document.querySelectorAll(".wfmap-marker"));
    var kinds = Array.prototype.slice.call(document.querySelectorAll(".wfmap-kind"));
    var active = { zone: true, dungeon: true, raid: true, travel: true };
    var detailName = document.getElementById("wfmap-detail-name");
    var detailMeta = document.getElementById("wfmap-detail-meta");
    var detailNote = document.getElementById("wfmap-detail-note");
    var detailGrade = document.getElementById("wfmap-detail-grade");
    var detailLink = document.getElementById("wfmap-detail-link");

    function show(m) {
        detailName.textContent = m.dataset.name;
        detailMeta.textContent = m.dataset.meta || "";
        detailNote.textContent = m.dataset.note || "";
        detailNote.hidden = !m.dataset.note;
        detailGrade.textContent = "Source grade: " + (m.dataset.grade || "not recorded");
        detailGrade.hidden = false;
        detailLink.textContent = "";
        if (m.dataset.link) {
            var a = document.createElement("a");
            a.href = m.dataset.link;
            a.textContent = "Read our full coverage";
            detailLink.appendChild(a);
            detailLink.hidden = false;
        } else {
            detailLink.hidden = true;
        }
    }

    function update() {
        var raw = (level.value || "").trim();
        var n = parseInt(raw, 10);
        var hasLevel = raw !== "" && !isNaN(n) && n >= 1 && n <= 60;
        var count = 0;
        markers.forEach(function (m) {
            var kindOn = active[m.dataset.kind] === true;
            var inBand = !hasLevel || (m.dataset.min !== undefined && n >= parseInt(m.dataset.min, 10) && n <= parseInt(m.dataset.max, 10));
            var on = kindOn && inBand;
            m.hidden = !on;
            if (on) count++;
        });
        status.textContent = hasLevel ? ("Level " + n + ": " + count + " matching markers") : ("Showing " + count + " markers");
        if (hasLevel) detailName.textContent = "Level " + n;
    }

    markers.forEach(function (m) { m.addEventListener("click", function () { show(m); }); });
    kinds.forEach(function (b) {
        b.addEventListener("click", function () {
            var k = b.dataset.kind;
            active[k] = !active[k];
            b.classList.toggle("active", active[k]);
            b.setAttribute("aria-pressed", active[k] ? "true" : "false");
            update();
        });
    });
    level.addEventListener("input", update);
    clear.addEventListener("click", function () { level.value = ""; update(); });
    update();
})();
</script>
