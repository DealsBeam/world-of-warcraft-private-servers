/* ---------- out of bounds radio ---------- */

(function () {
    const audio = document.getElementById("radio-audio");
    if (!audio) return;

    const buttons = document.querySelectorAll("#radio-btn, [data-radio-toggle]");
    const nows = document.querySelectorAll("#radio-now, [data-radio-now]");
    const statuses = document.querySelectorAll("[data-radio-status]");
    const statusTexts = document.querySelectorAll("[data-radio-status-text]");
    const volume = document.querySelector("[data-radio-volume]");

    const STREAM = "https://radio.outofbounds.live/listen/out_of_bounds/radio.mp3";
    const API = "https://radio.outofbounds.live/api/nowplaying/out_of_bounds";
    const VOL_KEY = "wowps-radio-volume";

    // The station host goes down for maintenance from time to time, and when
    // it does the metadata endpoints stop answering while the audio keeps
    // streaming. So the stream itself is the source of truth for "is this
    // station on air", and the now playing feed is a bonus on top of it.
    let streamOnline = null;

    function setStatus(state, text) {
        statuses.forEach(s => s.setAttribute("data-state", state));
        statusTexts.forEach(t => { t.textContent = text; });
    }

    function setNow(text, off) {
        nows.forEach(n => {
            n.textContent = text;
            n.classList.toggle("off", !!off);
        });
    }

    function setButtons(playing) {
        buttons.forEach(btn => {
            btn.textContent = playing ? "❚❚ Pause" : "▶ Play";
            btn.setAttribute("aria-pressed", playing ? "true" : "false");
        });
    }

    async function probeStream() {
        const controller = new AbortController();
        const timer = setTimeout(() => controller.abort(), 8000);
        try {
            const res = await fetch(STREAM, {
                headers: { Range: "bytes=0-1024" },
                signal: controller.signal
            });
            if (!res.ok && res.status !== 206) throw new Error("status " + res.status);
            const name = res.headers.get("icy-name");
            const desc = res.headers.get("icy-description");
            streamOnline = true;
            setStatus("online", name ? name + " is on air" : "Stream online");
            if (desc) {
                const t = document.createElement("span");
                t.className = "radio-tagline";
                t.textContent = desc;
                setNow("", false);
            }
            return true;
        } catch (e) {
            streamOnline = false;
            setStatus("offline", "Off air, the stream is not answering");
            return false;
        } finally {
            clearTimeout(timer);
        }
    }

    async function pollNowPlaying() {
        try {
            const controller = new AbortController();
            const timer = setTimeout(() => controller.abort(), 8000);
            let res;
            try {
                res = await fetch(API, { signal: controller.signal });
            } finally {
                clearTimeout(timer);
            }
            if (!res.ok) throw new Error("status " + res.status);
            const j = await res.json();
            if (j.is_online === false) {
                setStatus("offline", "Off air, the station reports no broadcast");
                setNow("The station reports that it is not broadcasting", true);
                return;
            }
            const s = j.now_playing && j.now_playing.song;
            if (s) {
                const live = j.live && j.live.is_live;
                setNow((live ? "● LIVE: " : "Now playing: ") + s.artist + " · " + s.title, false);
            }
        } catch (e) {
            if (streamOnline === true) {
                setNow("Stream online, the track feed is not answering right now", false);
            } else if (streamOnline === false) {
                setNow("The station is not answering. The direct stream link above still works in any player", true);
            }
        }
    }

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            if (audio.paused) {
                audio.play().then(() => setButtons(true)).catch(() => {
                    setButtons(false);
                    setNow("Playback was blocked by the browser. Press play again, or use the direct stream link", true);
                });
            } else {
                audio.pause();
                setButtons(false);
            }
        });
    });

    audio.addEventListener("pause", () => setButtons(false));
    audio.addEventListener("playing", () => setButtons(true));
    audio.addEventListener("error", () => {
        setButtons(false);
        setNow("The player could not open the stream. Use the direct stream link above", true);
    });

    // Volume is remembered, because a station that starts shouting every
    // visit is a station you mute forever.
    let stored = 0.9;
    try {
        const raw = localStorage.getItem(VOL_KEY);
        // Number(null) is 0, so a missing value has to be rejected before the
        // range check, otherwise the first visit starts muted.
        if (raw !== null && raw !== "") {
            const saved = Number(raw);
            if (saved >= 0 && saved <= 1) stored = saved;
        }
    } catch (e) {}
    audio.volume = stored;
    if (volume) {
        volume.value = String(Math.round(stored * 100));
        volume.addEventListener("input", () => {
            const v = Number(volume.value) / 100;
            audio.volume = v;
            try { localStorage.setItem(VOL_KEY, String(v)); } catch (e) {}
        });
    }

    setStatus("checking", "Checking the stream…");
    probeStream().then(() => pollNowPlaying());
    setInterval(pollNowPlaying, 15000);
    setInterval(probeStream, 60000);
})();
