const STATUS = {
    playable: { label: "Playable", cls: "badge-green" },
    dev: { label: "In-Development", cls: "badge-yellow" },
    closed: { label: "Shut Down", cls: "badge-red" }
};

const HTYPE = {
    core: { label: "Core Emulators", icon: "server" },
    web: { label: "Web & Analytics", icon: "globe" },
    tools: { label: "Development Tools", icon: "wrench" }
};

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
    const counts = { playable: 0, dev: 0, closed: 0 };
    SERVERS.forEach(s => counts[s.status]++);
    const rows = [
        { label: "Tracked servers", n: SERVERS.length, cls: "" },
        { label: "Playable", n: counts.playable, cls: "stat-green" },
        { label: "In development", n: counts.dev, cls: "stat-yellow" },
        { label: "Shut down", n: counts.closed, cls: "stat-red" }
    ];
    statStrip.innerHTML = rows.map(r =>
        `<div class="stat${r.cls ? " " + r.cls : ""}"><span class="stat-num">${r.n}</span><span class="stat-label">${r.label}</span></div>`).join("");
}

const tags = [...new Set(SERVERS.map(s => s.tag).filter(Boolean))].sort();
const tagSel = document.getElementById("tag");
for (const t of tags) {
    const opt = document.createElement("option");
    opt.value = opt.textContent = t;
    tagSel.appendChild(opt);
}

let status = "all";
let tag = "all";
let search = "";

function matches(s) {
    if (status !== "all" && s.status !== status) return false;
    if (tag !== "all" && s.tag !== tag) return false;
    if (search) {
        const hay = (s.name + " " + s.details + " " + s.group + " " + s.tag).toLowerCase();
        if (!hay.includes(search)) return false;
    }
    return true;
}

const cards = document.getElementById("cards");
const empty = document.getElementById("empty");
const count = document.getElementById("count");

const nameHtml = s => s.url ? `<a class="server-link" href="${s.url}">${scr(s.name)}</a>` : scr(s.name);

function renderServers() {
    const visible = SERVERS.filter(matches);
    cards.innerHTML = visible.map(s => {
        const group = s.group && s.name.indexOf(s.group) === -1 ? ` <span class="tag tag-group">${scr(s.group)}</span>` : "";
        const rel = s.release ? ` <span class="tag">Release: ${scr(s.release)}</span>` : "";
        return `
        <article class="card">
            <div class="card-head">
                <span class="server-name">${nameHtml(s)}${group}</span>
                <span class="badge ${STATUS[s.status].cls}">${STATUS[s.status].label}</span>
            </div>
            <div class="card-details">${scr(s.details)}${s.tag ? ` <span class="tag">${scr(s.tag)}</span>` : ""}${rel}</div>
        </article>`;
    }).join("");
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
    renderServers();
});

document.getElementById("search").addEventListener("input", e => {
    search = e.target.value.trim().toLowerCase();
    renderServers();
});

tagSel.addEventListener("change", e => {
    tag = e.target.value;
    renderServers();
});

/* ---------- history timeline ---------- */

const historyTools = document.getElementById("history-filters");
const hCats = [...new Set(HISTORY.map(h => h.category))];
for (const c of hCats) {
    const btn = document.createElement("button");
    btn.className = "chip";
    btn.dataset.hcat = c;
    btn.setAttribute("aria-pressed", "false");
    btn.textContent = HTYPE[c].label;
    historyTools.appendChild(btn);
}

const ICONS = {
    server: "M3 3h18v4H3zM3 10h18v4H3zM3 17h18v4H3zM7 5h.01M7 12h.01M7 19h.01",
    globe: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z",
    wrench: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",
    leaf: "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10zM2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"
};

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
    tl.innerHTML = visible.map(h => {
        const icon = HTYPE[h.category] ? HTYPE[h.category].icon : "leaf";
        const repo = h.githubRepo ? `<div class="timeline-repo"><a href="https://github.com/${scr(h.githubRepo)}">${scr(h.githubRepo)}</a></div>` : "";
        return `
        <div class="timeline-item" data-cat="${h.category}">
            <div class="timeline-marker" aria-hidden="true"><svg viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="${ICONS[icon]}"/></svg></div>
            <div class="timeline-body">
                <div class="timeline-date">${scr(h.date)}</div>
                <h3>${scr(h.title)}</h3>
                ${h.tag ? ` <span class="tag">${scr(h.tag)}</span>` : ""}
                ${h.paragraphs.map(p => `<p>${scr(p)}</p>`).join("")}
                ${repo}
            </div>
        </div>`;
    }).join("");
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

/* ---------- news / guilds / links ---------- */

document.getElementById("news-list").innerHTML = NEWS.map(n =>
    `<li><a href="${n.url}">${scr(n.title)}</a></li>`).join("");

document.getElementById("guild-list").innerHTML = GUILDS.map(g =>
    `<li><strong>${scr(g.name)}</strong> — ${scr(g.server)}${g.realm ? `, ${scr(g.realm)}` : ""} · ${scr(g.faction)}</li>`).join("");

document.getElementById("link-list").innerHTML = LINKS.map(l =>
    `<li><a href="${l.url}">${scr(l.title)}</a></li>`).join("");

/* ---------- initial tab + render ---------- */

const initial = location.hash.replace("#", "") || "servers";
const valid = [...tabs].some(t => t.dataset.tab === initial);
if (valid) {
    history.replaceState(null, "", "#" + initial);
    showTab(initial);
} else {
    showTab("servers");
}