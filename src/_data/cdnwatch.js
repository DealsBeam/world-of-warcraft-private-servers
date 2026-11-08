const BASE = "https://blizztrack.com/api";

// Three tracks carry Forever 1.60 builds, and they are not the same thing.
// wowf is the live player client. wow_classic_beta is the client beta testers
// download. wowdev2 is internal development, usually ahead and occasionally
// different per version number. Until October 7 2026 this watcher read only
// wowdev2, which meant every "latest build" we published was the dev build,
// not the player build. On November 8 2026 the live track was added, because
// after launch the player build is the one readers need first.
const TRACKS = [
    { key: "wowf", tact: "wowf" },
    { key: "beta", tact: "wow_classic_beta" },
    { key: "dev", tact: "wowdev2" },
];

async function get(path) {
    // The build runs this on every deploy, from a datacenter that may have
    // no route to blizztrack at all. Without a deadline the fetch can hang
    // for minutes and the whole deployment times out with it, which is how
    // a push ends up never reaching the site. Twelve seconds is longer than
    // this API needs and short enough to fail fast.
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 12000);
    try {
        const r = await fetch(BASE + path, {
            headers: { "User-Agent": "wowprivateservers/1.0 (+https://wowprivateservers.vercel.app)" },
            signal: controller.signal
        });
        if (!r.ok) throw new Error(`${path} -> ${r.status}`);
        return (await r.json()).result;
    } finally {
        clearTimeout(timer);
    }
}

async function readTrack(tact) {
    const cur = await get(`/manifest/${tact}/versions`);
    // The seqn endpoint returns at most 10 rows and has no offset parameter, but
    // accepts ?page=N. One page can repeat the same build many times, so a quiet
    // track can show only two or three distinct builds in its newest ten
    // sequences. We read two pages back to keep a real build trajectory in view.
    const seqns = [];
    for (const page of [1, 2]) {
        const p = await get(`/manifest/${tact}/seqn/?file=versions&limit=10&page=${page}`);
        if (p && Array.isArray(p.results)) seqns.push(...p.results);
    }
    let history = await Promise.all(seqns.map(async s => {
        const v = await get(`/manifest/${tact}/versions?seqn=${s.seqn}`);
        return { seqn: s.seqn, date: s.created_at.slice(0, 10), version: v.data[0].version_name };
    }));
    // dedupe by version (same build can appear on multiple seqn); the seqn feed is
    // newest-first and we concatenated page 1 then page 2, so kept entries stay in
    // newest-first order. Cap the stored list so the rendered history stays short.
    const seen = new Set();
    history = history.filter(h => !seen.has(h.version) && (seen.add(h.version), true)).slice(0, 12);
    return {
        ok: true,
        tact,
        encrypted: cur.encrypted,
        updated: cur.created_at.slice(0, 10),
        current: cur.data[0].version_name,
        history
    };
}

module.exports = async () => {
    const out = { ok: false, tact: "wowf", updated: null };
    for (const { key, tact } of TRACKS) {
        try {
            const r = await readTrack(tact);
            out[key] = r;
            out.ok = true;
            if (!out.updated || r.updated > out.updated) out.updated = r.updated;
        } catch (e) {
            out[key] = { ok: false, tact, error: String(e.message || e) };
        }
    }
    // Top-level fields mirror the live player track first, then beta, then
    // dev. The player-facing build is what "latest build" means.
    const primary = [out.wowf, out.beta, out.dev].find(t => t && t.ok);
    if (primary) {
        out.current = primary.current;
        out.updated = primary.updated;
        out.history = primary.history;
    }
    return out;
};
