---
title: "A server we called playable has been shut down since 2022, and its page still shows a live player count"
date: 2026-09-29
category: news
summary: "Stale sweep batch 3. ArgusWoW closed four years ago and we had it as playable with medium population. Three tracker entries turned out to be one project under three brands, a TBC tag on a WotLK realm, and a launch we had left in the future that is now live."
---

The worst error of this sweep so far is not a stale population figure. It is a server that **stopped existing four years ago** that we have been listing as playable with a medium population rating, and whose page still displays a live-looking player count.

**ArgusWoW closed on 15 May 2022.** Corrected today: ~~playable, medium~~ **dead**.

## How a dead server scored higher than a live one

ArgusWoW's site is still up. It still renders a status widget. And that widget reads, this morning:

- **Legion x100: 2752**
- **Legion x3: 0**

Those numbers look like a large healthy realm, and that is precisely how the entry survived a month of sweeps. Every automated check we have looks at whether a page responds. This page responds beautifully.

But the numbers are not ArgusWoW's. The newest news item on the site is dated **10.05** and reads, in full: *"We have made the decision to shut closed the Arguswow server. May 15, 2022 servers will be shut down. You can transfer your characters through your personal account to the server uwow Legion x100."*

Those figures belong to **uWoW**, the surviving half of the same operation. The site hands you a transfer path to `cp.uwow.biz` in the shutdown notice itself, which is how you can tell in one click that the live counter and the dead server are the same company.

Underneath that notice the news feed is 2020, then 2019, with a Halloween post about giving free level 110 characters and a coronavirus mask giveaway wearing a Wild West bandit mask. The last thing ArgusWoW ever said was goodbye.

Our entry described a *"Legion 7.3.5 on dedicated German hardware, x100/x3/x1 realms, 5 raid tiers, ~1.9k Discord online"*. None of that is false as history. All of it is four years out of date, and we presented it as current.

**The lesson generalises past this entry:** a live counter on a page does not mean a live server. It means someone left a widget running. Our own tracker has a field for exactly this, and a value of `medium` is a claim that a reader will find people to group with.

## uWoW is the one that is actually alive

Since the shutdown notice hands you off, the interesting question is where the operation went. Answer: **it is doing better than we said.**

uWoW's own counter this morning reads **3,615 total online**, with **Legion x100 at 2,756** and **x5 at 335**. That is a large-tier population on our bands, and our entry carried no population figure at all. Corrected: ~~medium~~ **large**.

It also runs a **WotLK x100 realm** that moved to its fourth progression stage on **24 July 2026**, and it announced on **9 September 2026** that a **Mists of Pandaria x10 realm on the 5.4.8 client opens 16 October 2026 at 19:00 Moscow time**. So the operation that killed ArgusWoW four years ago is now three expansions deep and about to add a fourth. The Nazjkel boss post from 22 September suggests the Pandorean work is already underway.

The uncomfortable part is that the two entries describe one company. ArgusWoW was not a competitor that lost; it was the earlier half of a project that kept going.

## Three entries, one project

Ravencraft, OctoWoW and Capybara Paradise each have their own entry, their own site, their own launcher, their own forum and their own download host. All three carry the same subtitle: **Mysteries of Azeroth**. All three reference **Turtle WoW** in their lineage. Capybara's Chinese title translates to the same phrase.

So they are genuinely separate realms, not one server listed three times. But they are not three independent teams either, and a reader comparing them would reasonably assume they were, including assuming three independent shutdown risks.

The brand split has a cost worth naming. Turtle WoW itself is now marked dead on our tracker, and all three surviving realms are continuations of a project that no longer exists in its original form. If one brand goes, the shared development lineage is a real question, not a rhetorical one.

One correction inside that group: Capybara was rated `large` on a claim of about 10k online that the site no longer displays and we could not re-confirm. It is now `unknown`. An unverified number should not survive as a rating.

## Valanior has no website left, which is not the same as being dead

Our Valanior entry claimed playable, small, about 1.3k Discord online. What we found:

- `valanior.com` returns **Cloudflare 1016**, an origin DNS error. No resolvable host.
- `www.valanior.com` does respond, and every path we probed on it returns the same **stock OVH "Site en construction" page**, complete with seventy placeholder links and a 1999 OVHcloud copyright.

That is a domain that has lapsed to a default host, not a server that went down. There is no project content behind it at all.

We have moved it to `dev` and marked it unverifiable rather than dead, because the community may genuinely be alive on Discord and we cannot see Discord from here. Our previous note already said the origin was down on 6 September; what we had wrong was continuing to rate it `small` and `playable` on that basis.

## Smaller corrections

**Faebright was tagged TBC and is a WotLK realm.** Its own site says *"A faithful 3.3.5a private realm"* and labels its content phase **Wrath of the Lich King**. Its status widget currently reads **REALM UNKNOWN, 0 ONLINE**, so we have replaced our population claim with what the site actually reports.

**Firestorm's BFA: Reforged has launched.** Our entry still described it as pending a 31 August launch, which is the exact stale-future-date failure this sweep exists to catch. It is live: the PTR closed, the official realm opened, **Season 1 begins immediately on release** with **Uldir Mythic one week later**. Reforged starts on **Patch 8.0 content with 8.3.7 class tuning**, everyone starts fresh, Rank 1 Essences are available from the start with later ranks unlocked per season on a schedule they describe as deliberately dynamic. There is a new hub zone, **Plunderforged Bay**, holding all vendors and quests. First-week login rewards are on. Felsong cosmetics can now be merged into a Firestorm account, and cosmetics carry across TWW and BFA.

**Elysium Project's front page is running on Twitter archive data from 2019 and 2021.** Its newest embedded post is *"Arena Tournaments Come to Elysium!"* from September 2021, and the one before it is a Light's Hope closure notice. A tracker reader arriving there sees a server that stopped announcing things five years ago. Worth knowing before treating its silence as evidence of life.

SOURCES: ArgusWoW's own site, its shutdown notice page `/57-server-shutdown.html`, its `lastnews` feed and `rss.xml`, all first-party, read September 29 2026, plus uWoW's own site, index, about and news pages, also first-party the same day. The ArgusWoW shutdown date, the transfer instructions to uwow Legion x100, and every player count are the operators' own statements. We did not create an account and did not play on any of these. Superseded values are struck through above per our [correction policy](/blog/tracker-correction-policy-explained/). Related: [how we review a private server](/blog/how-we-review-a-private-server/), the [grading scale](/grading/), and [batch 2 of this sweep](/news/stale-sweep-batch-2-corrections-sep-29/).
