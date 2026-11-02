const fs = require("fs"),
    path = require("path");

// Candidate private-server hosts linked from built pages but absent from the
// tracker host list. Heuristic on name patterns; manual review output.
const dir = process.argv[2] || "_site";
const raw = fs.readFileSync(path.join(__dirname, "..", "src/_data/servers.js"), "utf8");
const tracked = new Set(
    [...raw.matchAll(/"url":\s*"(https?:\/\/[^"]+)"/g)]
        .map(m => { try { return new URL(m[1]).hostname.replace(/^www\./, ""); } catch (e) { return null; } })
        .filter(Boolean)
);
const suspects = new Map();
const scan = d => {
    for (const e of fs.readdirSync(d, { withFileTypes: true })) {
        const p = path.join(d, e.name);
        if (e.isDirectory()) { scan(p); continue; }
        if (e.name !== "index.html") continue;
        const text = fs.readFileSync(p, "utf8");
        for (const m of text.matchAll(/(?:href|src)="https?:\/\/([^"'#\/?]+)/g)) {
            const h = m[1].replace(/^www\./, "");
            if (tracked.has(h)) continue;
            if (/(wow|warcraft|azeroth|vanilla|turtle|craft|reforged|epoch|ascension|warmane|dalaran|stormforge|everlook|elysium|nostalrius)/i.test(h)) {
                if (!suspects.has(h)) suspects.set(h, new Set());
                suspects.get(h).add(p);
            }
        }
    }
};
scan(dir);
for (const [h, files] of suspects) console.log(h, "|", [...files].slice(0, 3).join(" "));
