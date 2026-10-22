// Dash gate: the three Unicode dashes (U+2012 figure, U+2013 en, U+2014 em) must
// not appear on added lines of tracked changes or on any line of untracked copy.
// Established (grandfathered) lines are allowed their existing dashes; replacing a
// grandfathered line means its dashes must go, because the replacement is added text.
// Exits 1 on fail so the gate cycle actually stops here.

const cp = require("child_process");
const fs = require("fs");

const DASHES = [
    ["U+2012", "\u2012"],
    ["U+2013", "\u2013"],
    ["U+2014", "\u2014"],
];

const SKIP = /(^\.impeccable|PRODUCT\.md|lighthouse-report\.json|node_modules|\.planning)/;

let hits = 0;

function scanLines(file, lines, tag) {
    lines.forEach((line, i) => {
        for (const [name, ch] of DASHES) {
            if (line.includes(ch)) {
                console.log(`${tag} ${file}:${i + 1} ${name} :: ${line.trim().slice(0, 100)}`);
                hits += 1;
            }
        }
    });
}

const diff = cp.execSync('git diff -U0 -- . ":(exclude)lighthouse-report.json"', {
    encoding: "utf8",
    maxBuffer: 64 * 1024 * 1024,
});
let current = null;
let count = 0;
for (const line of diff.split("\n")) {
    if (line.startsWith("+++ b/")) {
        current = line.slice(6);
        continue;
    }
    if (!line.startsWith("+") || line.startsWith("+++")) continue;
    if (!current || SKIP.test(current)) continue;
    count += 1;
    scanLines(current, [line], "ADDED");
}

const untracked = cp
    .execSync("git ls-files --others --exclude-standard", { encoding: "utf8" })
    .split("\n")
    .filter((f) => /\.(md|js|njk|json|css)$/.test(f) && !SKIP.test(f));

for (const file of untracked) {
    const text = fs.readFileSync(file, "utf8");
    count += text.split("\n").length;
    scanLines(file, text.split("\n"), "NEW");
}

if (hits > 0) {
    console.log(`DASHES FAIL: ${hits} hit(s)`);
    process.exit(1);
}
console.log(`dashes PASS (${hits} hits across ${count} checked lines)`);
