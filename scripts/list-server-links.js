const fs = require("fs"),
    path = require("path");

// List every occurrence of a direct href/src anchor pointing at a host
// tracked in servers.js, across every file type in _site. Same host-extraction
// rule as scripts/smoke.js. Usage: node scripts/list-server-links.js [dir]
const dir = process.argv[2] || "_site";
const raw = fs.readFileSync(path.join(__dirname, "..", "src/_data/servers.js"), "utf8");
const hosts = new Set(
    [...raw.matchAll(/"url":\s*"(https?:\/\/[^"]+)"/g)]
        .map(m => { try { return new URL(m[1]).hostname.replace(/^www\./, ""); } catch (e) { return null; } })
        .filter(Boolean)
);
const hits = [];
const scan = d => {
    for (const e of fs.readdirSync(d, { withFileTypes: true })) {
        const p = path.join(d, e.name);
        if (e.isDirectory()) { scan(p); continue; }
        if (!/\.(html|xml|json|txt|js|css|webmanifest)$/.test(e.name)) continue;
        const text = fs.readFileSync(p, "utf8");
        for (const m of text.matchAll(/(?:href|src)="(https?:\/\/[^"'#\/?]+)/g)) {
            let h;
            try { h = new URL(m[1]).hostname.replace(/^www\./, ""); } catch (e) { continue; }
            if (hosts.has(h)) hits.push(`${p} -> ${m[1]}`);
        }
    }
};
scan(dir);
console.log(`TOTAL anchor hits: ${hits.length}`);
const byFile = {};
hits.forEach(h => { const f = h.split(" -> ")[0]; byFile[f] = (byFile[f] || 0) + 1; });
Object.entries(byFile).sort((a, b) => b[1] - a[1]).forEach(([f, c]) => console.log(c, f));
hits.forEach(h => console.log("  " + h.replace(/^_site\//, "")));
