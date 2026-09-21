// Liveness heartbeat for tracker listings. Report-only: prints a table of
// every servers.js URL's reachability; a human adjudicates status changes.
// Never wired into build or test gates (network flakes must not fail deploys).
// Usage: node scripts/liveness.js [--timeout 8000] [--jobs 8]
const SERVERS = require("../src/_data/servers.js");

const args = process.argv.slice(2);
const opt = (k, d) => {
    const i = args.indexOf(k);
    return i >= 0 && args[i + 1] ? Number(args[i + 1]) : d;
};
const TIMEOUT = opt("--timeout", 8000);
const JOBS = opt("--jobs", 8);

const check = url => new Promise(resolve => {
    const t0 = Date.now();
    const done = (state, extra = "") => resolve({ url, state, ms: Date.now() - t0, extra });
    const timer = setTimeout(() => done("TIMEOUT"), TIMEOUT);
    const finish = (res, method) => {
        clearTimeout(timer);
        if (res.status === 405 && method === "HEAD") return retryGet();
        done(res.status >= 200 && res.status < 400 ? "OK" : `HTTP-${res.status}`);
    };
    const retryGet = () => {
        const t2 = setTimeout(() => done("TIMEOUT"), TIMEOUT);
        fetch(url, { method: "GET", redirect: "manual", signal: AbortSignal.timeout(TIMEOUT) })
            .then(r => { clearTimeout(t2); finish(r, "GET"); })
            .catch(e => { clearTimeout(t2); done("ERROR", String(e.cause || e).slice(0, 60)); });
    };
    fetch(url, { method: "HEAD", redirect: "manual", signal: AbortSignal.timeout(TIMEOUT) })
        .then(r => finish(r, "HEAD"))
        .catch(e => done("ERROR", String(e.cause || e).slice(0, 60)));
});

(async () => {
    const list = SERVERS.filter(s => s.url).map(s => ({ name: s.name, status: s.status, url: s.url }));
    const out = new Array(list.length);
    let next = 0;
    const worker = async () => {
        while (next < list.length) {
            const i = next++;
            out[i] = { ...list[i], ...(await check(list[i].url)) };
            process.stderr.write(`\r${i + 1}/${list.length}`);
        }
    };
    await Promise.all(Array.from({ length: Math.min(JOBS, list.length) }, worker));
    process.stderr.write("\n");
    const rank = { ERROR: 0, TIMEOUT: 1 };
    out.sort((a, b) => (rank[a.state] ?? 2) - (rank[b.state] ?? 2));
    console.log("name | listed | probe | ms | url");
    for (const r of out) console.log(`${r.name} | ${r.status} | ${r.state}${r.extra ? " " + r.extra : ""} | ${r.ms} | ${r.url}`);
    const bad = out.filter(r => r.state === "ERROR" || r.state === "TIMEOUT").length;
    const http = out.filter(r => String(r.state).startsWith("HTTP-")).length;
    console.log(`\n${out.length} checked: ${bad} unreachable, ${http} non-2xx/3xx, rest OK. Adjudicate manually; bot pings are liveness, not playability.`);
})();
