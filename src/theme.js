/* ---------- theme control: light / dark / system ---------- */

const themeBtns = document.querySelectorAll("[data-theme-choice]");
const osDark = matchMedia("(prefers-color-scheme: dark)");

function storedTheme() {
    try { return localStorage.getItem("theme"); } catch (e) { return null; }
}

function effectiveTheme() {
    const t = storedTheme();
    if (t === "light" || t === "dark") return t;
    return osDark.matches ? "dark" : "light";
}

function applyTheme() {
    const t = effectiveTheme();
    document.documentElement.setAttribute("data-theme", t);
    themeBtns.forEach(b => {
        const active = b.dataset.themeChoice === (storedTheme() || "system");
        b.setAttribute("aria-pressed", String(active));
    });
}

themeBtns.forEach(b => b.addEventListener("click", () => {
    const choice = b.dataset.themeChoice;
    try {
        if (choice === "system") localStorage.removeItem("theme");
        else localStorage.setItem("theme", choice);
    } catch (e) {}
    applyTheme();
}));

osDark.addEventListener("change", () => {
    if (!storedTheme()) applyTheme();
});

window.addEventListener("storage", e => {
    if (e.key === "theme") applyTheme();
});

applyTheme();
