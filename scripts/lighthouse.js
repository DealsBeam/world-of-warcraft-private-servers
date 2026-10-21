const http = require("http");
const fs = require("fs");
const path = require("path");
const { spawn } = require("child_process");

// Runs Lighthouse against the built site.
//
// The old npm script pointed Lighthouse at http://localhost:8082 and assumed
// a server was already running on that port. Nothing in this repo serves
// 8082, so the script could never work as written, and the committed
// lighthouse-report.json was last taken on 23 August against a different
// site entirely. This wrapper starts a static server for the real build on
// a port it picks, runs Lighthouse, writes the report and shuts down.
//
// Usage: npm run lighthouse [-- http://localhost:PORT/some/page]

const ROOT = path.join(__dirname, "..", "_site");
const PORT = Number(process.env.PORT || 8123);

const TYPES = {
    ".html": "text/html; charset=utf-8",
    ".css": "text/css; charset=utf-8",
    ".js": "text/javascript; charset=utf-8",
    ".json": "application/json; charset=utf-8",
    ".xml": "application/xml; charset=utf-8",
    ".txt": "text/plain; charset=utf-8",
    ".svg": "image/svg+xml",
    ".webp": "image/webp",
    ".jpeg": "image/jpeg",
    ".jpg": "image/jpeg",
    ".png": "image/png",
    ".woff2": "font/woff2",
    ".webmanifest": "application/manifest+json",
    ".ico": "image/x-icon"
};

function serve() {
    return new Promise(resolve => {
        const server = http.createServer((req, res) => {
            let rel = decodeURIComponent(req.url.split("?")[0]);
            if (rel.endsWith("/")) rel += "index.html";
            const file = path.join(ROOT, rel);
            if (!file.startsWith(ROOT) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) {
                const fallback = path.join(ROOT, "404.html");
                res.writeHead(404, { "Content-Type": TYPES[".html"] });
                res.end(fs.existsSync(fallback) ? fs.readFileSync(fallback) : "not found");
                return;
            }
            res.writeHead(200, { "Content-Type": TYPES[path.extname(file)] || "application/octet-stream" });
            res.end(fs.readFileSync(file));
        });
        server.listen(PORT, () => resolve(server));
    });
}

async function main() {
    if (!fs.existsSync(ROOT)) {
        console.error("lighthouse: no _site build found. Run npm run build first.");
        process.exit(1);
    }
    const server = await serve();
    const target = process.argv[2] || `http://localhost:${PORT}/`;
    console.log(`lighthouse: serving ${ROOT} on port ${PORT}, auditing ${target}`);
    const args = [
        "--yes",
        "lighthouse",
        target,
        "--output=json",
        "--output-path=./lighthouse-report.json",
        '--chrome-flags=--headless=new --no-sandbox',
        "--quiet"
    ];
    const child = spawn("npx", args, { stdio: "inherit" });
    child.on("exit", code => {
        server.close();
        if (code === 0) {
            try {
                const report = JSON.parse(fs.readFileSync("lighthouse-report.json", "utf8"));
                for (const [name, cat] of Object.entries(report.categories || {})) {
                    console.log(`  ${name.padEnd(20)} ${cat.score === null ? "n/a" : Math.round(cat.score * 100)}`);
                }
            } catch (e) {
                console.log("lighthouse: report written, could not read it back");
            }
        }
        process.exit(code === null ? 1 : code);
    });
}

main().catch(e => {
    console.error("lighthouse error:", e);
    process.exit(1);
});
