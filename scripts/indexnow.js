// Submit URLs to IndexNow (Bing, Yandex, Naver, Seznam).
// Key file must be live first: https://wowprivateservers.vercel.app/<KEY>.txt
// Usage: node scripts/indexnow.js [url ...]  (defaults: homepage + feed)
const KEY = "82ff48e2b0f1ba3cf1d95140192a5b90";
const HOST = "wowprivateservers.vercel.app";

const urls = process.argv.slice(2);
const urlList = urls.length ? urls : [`https://${HOST}/`, `https://${HOST}/feed.xml`];

fetch("https://api.indexnow.org/IndexNow", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
        host: HOST,
        key: KEY,
        keyLocation: `https://${HOST}/${KEY}.txt`,
        urlList
    })
}).then(async r => {
    console.log(r.status === 200 || r.status === 202 ? `OK: submitted ${urlList.length} URL(s) (HTTP ${r.status})` : `FAILED: HTTP ${r.status} ${await r.text()}`);
    process.exit(r.status === 200 || r.status === 202 ? 0 : 1);
}).catch(e => {
    console.log("FAILED: " + e.message);
    process.exit(1);
});
