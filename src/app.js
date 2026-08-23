const { STATUS, HTYPE, ERA, ERA_ORDER, ICONS, ICONPATHS, ICONVIEW, ERA_ICON, SERVER_ICON, slugify, matches, groupByEra, countByStatus } = VOCAB;

const eraIcon = era => ERA_ICON[era] || "question";
const iconFor = (name, tag) => SERVER_ICON[name] || ERA_ICON[ERA[tag] || "Other"] || "question";

const scr = s => s.replace(/[&<>"']/g, m => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m]));

/* ---------- tabs ---------- */

const tabs = document.querySelectorAll(".tab");
const views = {
    servers: document.getElementById("view-servers"),
    history: document.getElementById("view-history"),
    links: document.getElementById("view-links")
};

function showTab(name) {
    tabs.forEach(t => {
        const on = t.dataset.tab === name;
        t.classList.toggle("active", on);
        t.setAttribute("aria-selected", on);
    });
    Object.entries(views).forEach(([n, el]) => {
        const on = n === name;
        el.classList.toggle("active", on);
        el.hidden = !on;
    });
    if (name === "servers") renderServers();
    history.pushState(null, "", "#" + name);
}

tabs.forEach(t => t.addEventListener("click", () => showTab(t.dataset.tab)));

/* ---------- servers: stat strip, filters, cards ---------- */

const statStrip = document.getElementById("stat-strip");

function renderStats() {
    const counts = { playable: 0, dev: 0, dead: 0 };
    SERVERS.forEach(s => counts[s.status]++);
    const rows = [
        { label: "Tracked servers", n: SERVERS.length, cls: "" },
        { label: "Playable", n: counts.playable, cls: "stat-green" },
        { label: "In development", n: counts.dev, cls: "stat-yellow" },
        { label: "Dead", n: counts.dead, cls: "stat-red" }
    ];
    statStrip.innerHTML = rows.map(r =>
        `<div class="stat${r.cls ? " " + r.cls : ""}"><span class="stat-num">${r.n}</span><span class="stat-label">${r.label}</span></div>`).join("");
}

const tags = [...new Set(SERVERS.map(s => s.tag).filter(Boolean))].sort();
const tagSel = document.getElementById("tag");
if (tagSel.options.length <= 1) {
    for (const t of tags) {
        const opt = document.createElement("option");
        opt.value = opt.textContent = t;
        tagSel.appendChild(opt);
    }
}

let status = "all";
let tag = "all";
let pop = "all";
let search = "";

try {
    const saved = JSON.parse(localStorage.getItem("wowfilters") || "{}");
    status = ["all", "playable", "dev", "dead"].includes(saved.status) ? saved.status : "all";
    tag = saved.tag || "all";
    pop = ["all", "large", "medium", "small", "tiny", "unknown"].includes(saved.pop) ? saved.pop : "all";
    search = saved.search || "";
} catch (e) {}
const saveFilters = () => localStorage.setItem("wowfilters", JSON.stringify({ status, tag, pop, search }));

const cards = document.getElementById("cards");
const empty = document.getElementById("empty");
const count = document.getElementById("count");

const cardHtml = s => {
    const group = s.group && s.name.indexOf(s.group) === -1 ? ` <span class="tag tag-group">${scr(s.group)}</span>` : "";
    const rel = s.release ? ` <span class="tag">Release: ${scr(s.release)}</span>` : "";
    const down = s.shutdown ? ` <span class="tag tag-dead">Down ${scr(s.shutdown)}${s.shutdownReason ? " · " + scr(s.shutdownReason) : ""}</span>` : "";
    const ic = iconFor(s.name, s.tag);
    const vb = ICONVIEW[ic] || "0 0 512 512";
    return `
    <article class="card${s.status === "dead" ? " card-dead" : ""}">
        <div class="card-head">
            <span class="card-head-left">
                <span class="card-emblem emblem-${slugify(ERA[s.tag] || "Other")}" aria-hidden="true"><svg viewBox="${vb}"><path d="${ICONPATHS[ic]}"/></svg></span>
                <span class="server-name"><a class="server-link" href="/servers/${slugify(s.name)}/">${scr(s.name)}</a>${group}</span>
            </span>
            <span class="badge ${STATUS[s.status].cls}">${STATUS[s.status].label}</span>
        </div>
        <div class="card-details">${scr(s.details)}${s.tag ? ` <span class="tag">${scr(s.tag)}</span>` : ""}${rel}${down}</div>
        ${s.url ? `<a class="card-site" href="${scr(s.url)}" target="_blank" rel="noopener">Official site ↗</a>` : ""}
    </article>`;
};

function renderServers() {
    const visible = SERVERS.filter(s => matches(s, { status, tag, pop, search }));
    const groups = {};
    visible.forEach(s => {
        const era = ERA[s.tag] || "Other";
        (groups[era] = groups[era] || []).push(s);
    });
    const order = ERA_ORDER.filter(e => groups[e])
        .concat(Object.keys(groups).filter(e => ERA_ORDER.indexOf(e) === -1));
    cards.innerHTML = order.map(era =>
        `<h2 class="era-title">${scr(era)}<span class="era-count">${groups[era].length}</span></h2>` +
        groups[era].map(cardHtml).join("")
    ).join("");
    empty.hidden = visible.length > 0;
    count.textContent = `${visible.length} of ${SERVERS.length} servers`;
}

document.getElementById("chips").addEventListener("click", e => {
    const btn = e.target.closest(".chip");
    if (!btn) return;
    status = btn.dataset.status;
    document.querySelectorAll("#chips .chip").forEach(c => {
        const on = c === btn;
        c.classList.toggle("active", on);
        c.setAttribute("aria-pressed", on);
    });
    saveFilters();
    renderServers();
});

document.getElementById("search").addEventListener("input", e => {
    search = e.target.value.trim().toLowerCase();
    saveFilters();
    renderServers();
});

tagSel.addEventListener("change", e => {
    tag = e.target.value;
    saveFilters();
    renderServers();
});

const popSel = document.getElementById("pop");
popSel.addEventListener("change", e => {
    pop = e.target.value;
    saveFilters();
    renderServers();
});

/* restore saved filter state into controls */
const chipForStatus = document.querySelector(`#chips .chip[data-status="${status}"]`);
if (chipForStatus) {
    document.querySelectorAll("#chips .chip").forEach(c => {
        const on = c === chipForStatus;
        c.classList.toggle("active", on);
        c.setAttribute("aria-pressed", on);
    });
}
if (tag !== "all" && [...tagSel.options].some(o => o.value === tag)) tagSel.value = tag;
if (pop !== "all") popSel.value = pop;
const searchInput = document.getElementById("search");
if (search) searchInput.value = search;

/* ---------- history timeline ---------- */

const historyTools = document.getElementById("history-filters");
const hCats = [...new Set(HISTORY.map(h => h.category))];
if (!historyTools.querySelector(".chip[data-hcat]")) {
    for (const c of hCats) {
        const btn = document.createElement("button");
        btn.className = "chip";
        btn.dataset.hcat = c;
        btn.setAttribute("aria-pressed", "false");
        btn.textContent = HTYPE[c].label;
        historyTools.appendChild(btn);
    }
}

let hcat = "all";
let hsearch = "";

function renderHistory() {
    const visible = HISTORY.filter(h => {
        if (hcat !== "all" && h.category !== hcat) return false;
        if (hsearch) {
            const hay = (h.title + " " + h.tag + " " + h.paragraphs.join(" ")).toLowerCase();
            if (!hay.includes(hsearch)) return false;
        }
        return true;
    });
    const tl = document.getElementById("timeline");
    const histEmpty = document.getElementById("history-empty");
    tl.innerHTML = visible.map(h => {
        const icon = HTYPE[h.category] ? HTYPE[h.category].icon : "leaf";
        const repo = h.githubRepo ? `<div class="timeline-repo"><a href="https://github.com/${scr(h.githubRepo)}" target="_blank" rel="noopener">${scr(h.githubRepo)}</a></div>` : "";
        return `
        <div class="timeline-item" data-cat="${h.category}">
            <div class="timeline-marker" aria-hidden="true"><svg viewBox="0 0 24 24" width="14" height="14"><path fill="currentColor" d="${ICONS[icon]}"/></svg></div>
            <div class="timeline-body">
                <div class="timeline-date">${scr(h.date)}</div>
                <h3>${scr(h.title)}</h3>
                ${h.tag ? ` <span class="tag">${scr(h.tag)}</span>` : ""}
                ${h.paragraphs.map(p => `<p>${scr(p)}</p>`).join("")}
                ${repo}
            </div>
        </div>`;
    }).join("");
    if (histEmpty) histEmpty.hidden = visible.length > 0;
}

historyTools.addEventListener("click", e => {
    const btn = e.target.closest(".chip[data-hcat]");
    if (!btn) return;
    hcat = btn.dataset.hcat;
    historyTools.querySelectorAll(".chip").forEach(c => {
        const on = c === btn;
        c.classList.toggle("active", on);
        c.setAttribute("aria-pressed", on);
    });
    renderHistory();
});

document.getElementById("history-search").addEventListener("input", e => {
    hsearch = e.target.value.trim().toLowerCase();
    renderHistory();
});

renderStats();
renderHistory();

/* ---------- news / links ---------- */

document.getElementById("news-list").innerHTML = NEWS.map(n =>
    `<li><span class="news-chip" aria-hidden="true"><svg viewBox="0 0 24 24" width="12" height="12"><path fill="currentColor" d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M16 13H8M16 17H8M10 9H8"/></svg></span><a href="${scr(n.url)}">${scr(n.title)}</a>${n.link ? ` <a class="news-original" href="${scr(n.link)}" target="_blank" rel="noopener">original ↗</a>` : ""}</li>`).join("");

document.getElementById("link-list").innerHTML = LINKS.map(l =>
    `<li><a href="${scr(l.url)}" target="_blank" rel="noopener">${scr(l.title)}</a></li>`).join("");

/* ---------- keyboard shortcuts ---------- */

document.addEventListener("keydown", e => {
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    const typing = /^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement.tagName);
    const tabBtns = [...document.querySelectorAll(".tab")];
    const idx = ["1", "2", "3"].indexOf(e.key);
    if (idx !== -1 && !typing) {
        showTab(tabBtns[idx].dataset.tab);
    } else if (e.key === "/" && !typing) {
        e.preventDefault();
        showTab("servers");
        document.getElementById("search").focus();
    } else if ((e.key === "t" || e.key === "T") && !typing) {
        const order = ["light", "system", "dark"];
        const active = [...document.querySelectorAll("[data-theme-choice]")]
            .find(b => b.getAttribute("aria-pressed") === "true");
        const next = order[(order.indexOf(active ? active.dataset.themeChoice : "system") + 1) % order.length];
        document.querySelector(`[data-theme-choice="${next}"]`).click();
    }
});

/* ---------- initial tab + render ---------- */

const initial = location.hash.replace("#", "") || "servers";
const valid = [...tabs].some(t => t.dataset.tab === initial);
if (valid) {
    history.replaceState(null, "", "#" + initial);
    showTab(initial);
} else {
    showTab("servers");
}