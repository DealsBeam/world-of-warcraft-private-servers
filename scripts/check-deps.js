const { execSync } = require("child_process");

// Dependency and runtime check for the site's own toolchain.
//
// Run this before a release cycle rather than discovering an old major or a
// fresh advisory at deploy time. It reports three things: what is out of
// date, what npm audit says, and whether the local Node version still
// matches what the deployment uses.
//
// Usage: node scripts/check-deps.js

function run(cmd) {
    try {
        return execSync(cmd, { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] });
    } catch (e) {
        return (e.stdout || "") + (e.stderr || "");
    }
}

function main() {
    let failed = false;

    const outdated = run("npm outdated --json");
    if (outdated.trim()) {
        try {
            const parsed = JSON.parse(outdated);
            const names = Object.keys(parsed);
            if (names.length) {
                console.log("outdated:");
                for (const n of names) {
                    const p = parsed[n];
                    console.log(`  ${n}: installed ${p.current}, latest ${p.latest}`);
                }
            } else {
                console.log("outdated: nothing");
            }
        } catch (e) {
            console.log("outdated: could not parse npm output");
        }
    } else {
        console.log("outdated: nothing");
    }

    const audit = run("npm audit --json");
    if (audit.trim()) {
        try {
            const parsed = JSON.parse(audit);
            const meta = parsed.metadata && parsed.metadata.vulnerabilities;
            if (meta) {
                const total = meta.total;
                console.log(`audit: ${total} vulnerabilities (${meta.critical} critical, ${meta.high} high, ${meta.moderate} moderate, ${meta.low} low)`);
                if (total > 0) {
                    failed = true;
                    for (const [name, info] of Object.entries(parsed.vulnerabilities || {})) {
                        console.log(`  ${name}: ${info.severity} (${info.isDirect ? "direct" : "transitive"})`);
                    }
                }
            }
        } catch (e) {
            console.log("audit: could not parse npm output");
        }
    }

    const nodeMajor = Number(process.versions.node.split(".")[0]);
    console.log(`node: ${process.versions.node} (major ${nodeMajor})`);
    if (nodeMajor < 20) {
        console.log("node: 20 or newer is required");
        failed = true;
    }

    if (failed) {
        console.log("check-deps: problems found");
        process.exit(1);
    }
    console.log("check-deps: clean");
}

main();
