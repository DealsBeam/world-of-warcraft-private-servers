---
title: "Two addon projects publish graded maps of Forever's API, and they disagree"
date: 2026-11-22
category: news
game: software
summary: "ForeverPlusPlus and ForeverTracker both publish public API research with evidence grades. One records WOW_PROJECT_ID as 18 for Forever after build 70170, the other's notes are marked pre-launch and unverified on several behaviours. Both flag that a surname in UnitName is not a realm."
---

Two open-source projects have published detailed maps of the WoW Forever addon API, and both attach evidence grades to their claims. The documents are worth reading together because they disagree on how much has been verified.

**ForeverPlusPlus's `forever-api.md`** was first written September 25 against build 1.60.1.70009 and has been updated since; its latest Self Test is dated October 14 on build 70338. Every fact carries a tag: `[local]` for a client install, `[in-game]` for a live test, `[dump]` for an API dump, `[addon]` for an inference from installed addons, `[web]` for someone else's report, and `Unverified` where sources disagree.

**ForeverTracker's `RESEARCH_FOREVER_API.md`** is stamped **pre-launch research, compiled October 26** while the beta was offline. Its own header says nothing in the document was executed against a running client by that team. It grades sources S1 to S9, from a local client install down to secondary reporting.

## Where they agree

Both warn against treating Forever as retail or Classic for API purposes.

- ForeverPlusPlus records `WOW_PROJECT_ID` as **WOW_PROJECT_CAMELOT (18)** from build 70170 onward. Before that it was 1, the same as retail.
- Both note that the second value returned by `UnitName` is a **surname**, not a realm. ForeverPlusPlus gives an in-game example from September 25: `UnitName("player")` returned `"Clutch", "Bloodfury"`.
- Both say names can appear as `First Surname` or `First-Surname`, and that parsing the part after the hyphen as a realm is wrong. That matters more now that Blizzard has hidden realm IDs from addons.

ForeverPlusPlus also records that SavedVariables persist again. A load counter reached 7 across sessions on September 25, after an earlier bug where they were written but never read back.

## Where they differ

ForeverPlusPlus marks many behaviours as tested in-game or read from a local client. ForeverTracker marks its equivalent claims as requiring live validation, with a matching test file for each. The documents were written three weeks apart and against different builds.

That is not a contradiction so much as a difference in evidence. A reader should take the in-game-tagged lines from the first document more seriously than the unverified lines in the second, and should not treat either as a warranty after a patch.

## Why we are covering this

Our addon guide and the November 22 layer API story describe what Blizzard changed. These two documents show how addon authors are working out what is actually true in the client, with grades we can quote. They are a useful companion to ForeverChanges' talent and patch-note grading.

We have not run either project's tests. Both documents are open source and dated, and we are reporting their claims with those dates and grades intact.

SOURCES: ForeverPlusPlus's `docs/forever-api.md` on GitHub, read November 22 2026, first written September 25 and last Self Test October 14; ForeverTracker's `docs/RESEARCH_FOREVER_API.md` on GitHub, read November 22 2026, compiled October 26. Related: [our addon guide](/blog/forever-addons-nov-19/) and [the layer API report](/news/forever-layer-addon-api-nov-22/).
