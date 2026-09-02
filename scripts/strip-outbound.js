const fs = require("fs");
const path = require("path");

const dirs = ["src/news", "src/blog"];
let changed = 0;
let removed = 0;

for (const dir of dirs) {
    const full = path.join(__dirname, "..", dir);
    for (const f of fs.readdirSync(full).filter(n => n.endsWith(".md"))) {
        const p = path.join(full, f);
        const before = fs.readFileSync(p, "utf8");
        let txt = before;
        let n = 0;

        txt = txt.replace(/^link:\s*["']?https?:\/\/[^"'\n]+["']?\s*\n/m, () => { n++; return ""; });
        // keep image/video embeds: ![alt](https://...) and <img src="https://..."> / <iframe src="https://...">
        txt = txt.replace(/\[([^\]]+)\]\(https?:\/\/[^)]+\)/g, (m, t) => {
            if (m.startsWith("![")) return m; // image markdown — keep
            n++; return t;
        });
        txt = txt.replace(/<https?:\/\/[^>]+>/g, () => { n++; return ""; });
        txt = txt.replace(/(^|[\s(])https?:\/\/[\w.\-]+(?:\.[\w.\-]+)+(?:[^\s)\]"]*)?/g, (m, lead) => {
            // keep if inside src="https://..." (image/iframe) — check 5 chars before
            const idx = txt.indexOf(m);
            const ctx = txt.slice(Math.max(0, idx - 12), idx + 6);
            if (/src\s*=\s*["']/.test(ctx)) return m;
            n++; return lead;
        });

        if (txt !== before) {
            fs.writeFileSync(p, txt);
            changed++;
            removed += n;
            console.log(`${f}: -${n}`);
        }
    }
}
console.log(`\nDone. ${changed} files, ${removed} refs removed.`);
