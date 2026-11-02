const fs = require("fs"),
    path = require("path");

// Histogram of every external href/src host across built HTML pages.
// Usage: node scripts/host-histogram.js [dir]
const dir = process.argv[2] || "_site";
const counts = new Map();
const scan = d => {
    for (const e of fs.readdirSync(d, { withFileTypes: true })) {
        const p = path.join(d, e.name);
        if (e.isDirectory()) { scan(p); continue; }
        if (e.name !== "index.html") continue;
        const text = fs.readFileSync(p, "utf8");
        for (const m of text.matchAll(/(?:href|src)="https?:\/\/([^"'#\/?]+)/g)) {
            const h = m[1].replace(/^www\./, "");
            counts.set(h, (counts.get(h) || 0) + 1);
        }
    }
};
scan(dir);
for (const [h, c] of [...counts].sort((a, b) => b[1] - a[1])) console.log(c, h);
