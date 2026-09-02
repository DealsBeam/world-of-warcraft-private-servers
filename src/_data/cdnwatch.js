const TACT = "wowdev2";
const BASE = "https://blizztrack.com/api";

const fmt = d => d.toISOString().slice(0, 10);

async function get(path) {
    const r = await fetch(BASE + path, { headers: { "User-Agent": "wowprivateservers/1.0 (+https://wowprivateservers.vercel.app)" } });
    if (!r.ok) throw new Error(`${path} -> ${r.status}`);
    return (await r.json()).result;
}

module.exports = async () => {
    try {
        const cur = await get(`/manifest/${TACT}/versions`);
        const seqns = await get(`/manifest/${TACT}/seqn/?file=versions&limit=9`);
        let history = await Promise.all(seqns.results.map(async s => {
            const v = await get(`/manifest/${TACT}/versions?seqn=${s.seqn}`);
            return { seqn: s.seqn, date: s.created_at.slice(0, 10), version: v.data[0].version_name };
        }));
        // dedupe by version (same build can appear on multiple seqn)
        const seen = new Set();
        history = history.filter(h => !seen.has(h.version) && (seen.add(h.version), true));
        return {
            ok: true,
            tact: TACT,
            encrypted: cur.encrypted,
            updated: cur.created_at.slice(0, 10),
            current: cur.data[0].version_name,
            history
        };
    } catch (e) {
        return { ok: false, tact: TACT, error: String(e.message || e) };
    }
};