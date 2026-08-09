const STATUS = {
    playable: { label: "Playable", cls: "badge-green" },
    dev: { label: "In-Development", cls: "badge-yellow" },
    closed: { label: "Shut Down", cls: "badge-red" }
};

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

const rows = document.getElementById("rows");
const empty = document.getElementById("empty");
const count = document.getElementById("count");

function render() {
    const visible = SERVERS.filter(matches);
    rows.innerHTML = visible.map(s => `
        <tr>
            <td class="server-name">${s.name}${s.group && s.name.indexOf(s.group) === -1 ? ` <span class="tag-whitemane">${s.group}</span>` : ""}</td>
            <td><span class="badge ${STATUS[s.status].cls}">${STATUS[s.status].label}</span></td>
            <td>${s.details}${s.tag ? ` <span class="tag">${s.tag}</span>` : ""}</td>
        </tr>`).join("");
    empty.hidden = visible.length > 0;
    count.textContent = `${visible.length} of ${SERVERS.length} servers`;
}

document.getElementById("chips").addEventListener("click", e => {
    const btn = e.target.closest(".chip");
    if (!btn) return;
    status = btn.dataset.status;
    document.querySelectorAll(".chip").forEach(c => {
        const on = c === btn;
        c.classList.toggle("active", on);
        c.setAttribute("aria-pressed", on);
    });
    render();
});

document.getElementById("search").addEventListener("input", e => {
    search = e.target.value.trim().toLowerCase();
    render();
});

tagSel.addEventListener("change", e => {
    tag = e.target.value;
    render();
});

render();