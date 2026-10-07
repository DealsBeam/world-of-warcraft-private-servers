const BASE = "https://blizztrack.com/api";

// Two tracks carry Forever 1.60 builds, and they are not the same thing.
// wow_classic_beta is the client beta testers download. wowdev2 is internal
// development, usually ahead and occasionally different per version number.
// Until October 7 2026 this watcher read only wowdev2, which meant every
// "latest build" we published was the dev build, not the player build, and
// three beta builds (70124, 70235, 70245) passed through without us ever
// seeing them. Both tracks are now read.
const TRACKS = [
    { key: "beta", tact: "wow_classic_beta" },
    { key: "dev", tact: "wowdev2" },
];

async function get(path) {
    const r = await fetch(BASE + path, { headers: { "User-Agent": "wowprivateservers/1.0 (+https://wowprivateservers.vercel.app)" } });
    if (!r.ok) throw new Error(`${path} -> ${r.status}`);
    return (await r.json()).result;
}

async function readTrack(tact) {
    const cur = await get(`/manifest/${tact}/versions`);
    const seqns = await get(`/manifest/${tact}/seqn/?file=versions&limit=9`);
    let history = await Promise.all(seqns.results.map(async s => {
        const v = await get(`/manifest/${tact}/versions?seqn=${s.seqn}`);
        return { seqn: s.seqn, date: s.created_at.slice(0, 10), version: v.data[0].version_name };
    }));
    // dedupe by version (same build can appear on multiple seqn)
    const seen = new Set();
    history = history.filter(h => !seen.has(h.version) && (seen.add(h.version), true));
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
    const out = { ok: false, tact: "wowdev2", updated: null };
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
    // Legacy top-level fields mirror the beta track: the player-facing build
    // is what "latest build" means. The dev track lives under `dev`.
    const b = out.beta;
    if (b && b.ok) {
        out.current = b.current;
        out.updated = b.updated;
        out.history = b.history;
    } else if (out.dev && out.dev.ok) {
        out.current = out.dev.current;
        out.updated = out.dev.updated;
        out.history = out.dev.history;
    }
    return out;
};
