/* ---------- out of bounds radio ---------- */

(function () {
    const audio = document.getElementById("radio-audio");
    if (!audio) return;
    const buttons = document.querySelectorAll("#radio-btn, [data-radio-toggle]");
    const nows = document.querySelectorAll("#radio-now, [data-radio-now]");
    const API = "https://radio.outofbounds.live/api/nowplaying/out_of_bounds";

    const setButtons = playing => {
        buttons.forEach(btn => {
            btn.textContent = playing ? "❚❚ Pause" : "▶ Play";
            btn.setAttribute("aria-pressed", playing ? "true" : "false");
        });
    };

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            if (audio.paused) {
                audio.play().then(() => setButtons(true)).catch(() => {
                    setButtons(false);
                    nows.forEach(n => { n.textContent = "Playback blocked — tap Play again"; n.classList.add("off"); });
                });
            } else {
                audio.pause();
                setButtons(false);
            }
        });
    });

    audio.addEventListener("pause", () => setButtons(false));
    audio.addEventListener("error", () => {
        setButtons(false);
        nows.forEach(n => { n.textContent = "Stream error — retry Play or use direct link above"; n.classList.add("off"); });
    });

    async function tick() {
        try {
            const res = await fetch(API);
            if (!res.ok) throw new Error();
            const j = await res.json();
            if (!j.is_online) {
                nows.forEach(n => { n.textContent = "Off air"; n.classList.add("off"); });
                return;
            }
            const s = j.now_playing && j.now_playing.song;
            if (s) {
                const text = (j.live && j.live.is_live ? "● LIVE — " : "Now playing: ") + s.artist + " — " + s.title;
                nows.forEach(n => { n.textContent = text; n.classList.remove("off"); });
            }
        } catch (e) {
            nows.forEach(n => { n.textContent = "Stream link available above"; n.classList.add("off"); });
        }
    }
    tick();
    setInterval(tick, 15000);
})();
