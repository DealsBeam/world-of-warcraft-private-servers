const fs = require("fs");
const path = require("path");

// Compares what the live site is serving with what this build produced.
// Deployments on this project have silently gone missing twice now: the
// push lands, the site keeps serving the previous build, and every new
// URL 404s while old ones look fine. The symptom is easy to mistake for a
// slow deployment, so this makes the check one command.
//
// Usage: node scripts/check-deploy.js [origin]

const ORIGIN = process.argv[2] || "https://wowprivateservers.vercel.app";

function countItems(file) {
    const raw = JSON.parse(fs.readFileSync(file, "utf8"));
    const arr = Array.isArray(raw) ? raw : raw.items || raw.news || [];
    return arr.length;
}

function countItemsRaw(text) {
    const raw = JSON.parse(text);
    const arr = Array.isArray(raw) ? raw : raw.items || raw.news || [];
    return arr.length;
}

async function liveCount() {
    const r = await fetch(`${ORIGIN}/api/news.json`, { headers: { "User-Agent": "wowprivateservers/1.0" } });
    if (!r.ok) throw new Error(`live /api/news.json -> ${r.status}`);
    return countItemsRaw(await r.text());
}

async function main() {
    let local;
    let live;
    try {
        local = countItems(path.join(__dirname, "..", "_site", "api", "news.json"));
    } catch (e) {
        console.log(`deploy-check: no local build to compare (${e.message})`);
        process.exit(0);
    }
    try {
        live = await liveCount();
    } catch (e) {
        console.log(`deploy-check: live site unreachable (${e.message})`);
        process.exit(0);
    }
    if (live === local) {
        console.log(`deploy-check: live matches build (${live} news items)`);
        process.exit(0);
    }
    console.log(`deploy-check: STALE. live has ${live} news items, this build has ${local}.`);
    console.log("deploy-check: the push did not deploy. Push an empty commit to retrigger:");
    console.log("deploy-check:   git commit --allow-empty -m 'Redeploy trigger' && git push origin main");
}

main().catch(e => {
    console.error("deploy-check error:", e);
    process.exit(0);
});
