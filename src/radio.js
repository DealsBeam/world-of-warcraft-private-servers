/* ---------- out of bounds radio ---------- */

(function () {
    const audio = document.getElementById("radio-audio");
    if (!audio) return;
    const btn = document.getElementById("radio-btn");
    const now = document.getElementById("radio-now");
    const API = "https://radio.outofbounds.live/api/nowplaying/out_of_bounds";

    btn.addEventListener("click", () => {
        if (audio.paused) {
            audio.play().catch(() => {});
            btn.textContent = "❚❚ Pause";
            btn.setAttribute("aria-pressed", "true");
        } else {
            audio.pause();
            btn.textContent = "▶ Play";
            btn.setAttribute("aria-pressed", "false");
        }
    });
    audio.addEventListener("pause", () => {
        btn.textContent = "▶ Play";
        btn.setAttribute("aria-pressed", "false");
    });

    async function tick() {
        try {
            const res = await fetch(API);
            if (!res.ok) throw new Error();
            const j = await res.json();
            if (!j.is_online) {
                now.textContent = "Off air";
                now.classList.add("off");
                return;
            }
            const s = j.now_playing && j.now_playing.song;
            if (s) {
                now.textContent = (j.live && j.live.is_live ? "● LIVE — " : "Now playing: ") + s.artist + " — " + s.title;
                now.classList.remove("off");
            }
        } catch (e) {
            now.textContent = "Stream link available above";
            now.classList.add("off");
        }
    }
    tick();
    setInterval(tick, 15000);
})();