const fs = require("fs"),
    path = require("path");

// Strict scan: any href/src (or markdown link) whose hostname equals a tracked
// private-server host OR is a subdomain of one. Covers built _site and src.
// Usage: node scripts/list-server-links-strict.js [dir]
const dir = process.argv[2] || "_site";
const raw = fs.readFileSync(path.join(__dirname, "..", "src/_data/servers.js"), "utf8");
const hosts = [...new Set(
    [...raw.matchAll(/"url":\s*"(https?:\/\/[^"]+)"/g)]
        .map(m => { try { return new URL(m[1]).hostname.replace(/^www\./, ""); } catch (e) { return null; } })
        .filter(Boolean)
)];
const isTracked = h => hosts.some(base => h === base || h.endsWith("." + base));
const hits = [];
const scan = d => {
    for (const e of fs.readdirSync(d, { withFileTypes: true })) {
        const p = path.join(d, e.name);
        if (e.isDirectory()) { scan(p); continue; }
        const text = fs.readFileSync(p, "utf8");
        for (const m of text.matchAll(/(?:href|src)="(https?:\/\/[^"'#]+)/g)) {
            let h;
            try { h = new URL(m[1]).hostname.replace(/^www\./, ""); } catch (err) { continue; }
            if (isTracked(h)) hits.push(`${p} [html] -> ${m[1]}`);
        }
        if (/\.(md|njk|html)$/.test(e.name)) {
            for (const m of text.matchAll(/\]\((https?:\/\/[^)\s]+)\)/g)) {
                let h;
                try { h = new URL(m[1]).hostname.replace(/^www\./, ""); } catch (err) { continue; }
                if (isTracked(h)) hits.push(`${p} [md] -> ${m[1]}`);
            }
        }
    }
};
scan(dir);
console.log(`STRICT hits: ${hits.length}`);
hits.forEach(h => console.log("  " + h));
