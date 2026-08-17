const fs = require("fs");
const CDNWATCH = require("../src/_data/cdnwatch.js");

const STATE = "cdn-last.json";

async function main() {
    const w = await CDNWATCH();
    if (!w.ok) {
        console.log(`cdn-watch: offline (${w.error}) — leaving state untouched`);
        process.exit(0);
    }
    const prev = JSON.parse(fs.readFileSync(STATE, "utf8"));
    if (prev.current === w.current) {
        console.log(`cdn-watch: unchanged ${w.current}`);
        process.exit(0);
    }
    fs.writeFileSync(STATE, JSON.stringify({ current: w.current, updated: w.updated }, null, 2) + "\n");
    console.log(`cdn-watch: ${prev.current} -> ${w.current}`);
}

main().catch(e => {
    console.error("cdn-watch error:", e);
    process.exit(0);
});