module.exports = {
    reviewed: "September 23, 2026",
    reviewedIso: "2026-09-23",
    built: new Date().toISOString().slice(0, 10),
    // Bumped whenever a JS or CSS asset changes. The browser cache bug
    // fixed on 21 October 2026 left some visitors holding the old copies
    // of these files for a year, so every asset now carries a version.
    assetVersion: 14
};