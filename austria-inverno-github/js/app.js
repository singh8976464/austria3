// Tema chiaro/scuro manuale con fallback su preferenze di sistema
const root = document.documentElement;
const themeBtn = document.getElementById("themeBtn");
const savedTheme = localStorage.getItem("austria_theme");

if (savedTheme) {
  root.setAttribute("data-theme", savedTheme);
}

themeBtn.addEventListener("click", () => {
  const isDark =
    root.getAttribute("data-theme") === "dark" ||
    (!root.getAttribute("data-theme") &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);
  const next = isDark ? "light" : "dark";
  root.setAttribute("data-theme", next);
  localStorage.setItem("austria_theme", next);
});

// Checklist interattiva con salvataggio in localStorage
const items = [
  "Documento d’identità valido per l’espatrio",
  "Biglietti treno ÖBB prenotati (tariffe Sparschiene)",
  "Alloggi prenotati (4 notti Vienna + 1 notte Bad Goisern/Ischl)",
  "Tessera sanitaria europea (TEAM) / assicurazione viaggio",
  "Scarponi da trekking impermeabili già rodati",
  "Abbigliamento a strati termici + giacca antivento/antipioggia",
  "Guanti caldi (più paio di ricambio), cappello e occhiali da sole",
  "Ramponcini leggeri da ghiaccio, bastoncini e thermos",
  "Powerbank carico e caricabatterie",
  "Contanti (molti stand ai mercatini non accettano carte) + carta",
  "Controllo meteo, bollettino valanghe e apertura funivie"
];

let store = {};
try {
  store = JSON.parse(localStorage.getItem("ck_austria") || "{}");
} catch (e) {
  store = {};
}

const box = document.getElementById("ck");

function upd() {
  const n = box.querySelectorAll("input:checked").length;
  const pc = Math.round((n / items.length) * 100);
  document.getElementById("p").style.width = pc + "%";
  document.getElementById("pt").textContent = `${n} su ${items.length} (${pc}%)`;
}

function renderList() {
  box.innerHTML = "";
  items.forEach((t, i) => {
    const l = document.createElement("label");
    l.className = "ck" + (store[i] ? " done" : "");

    const c = document.createElement("input");
    c.type = "checkbox";
    c.checked = !!store[i];
    c.onchange = () => {
      store[i] = c.checked;
      l.classList.toggle("done", c.checked);
      try {
        localStorage.setItem("ck_austria", JSON.stringify(store));
      } catch (e) {}
      upd();
    };

    const span = document.createElement("span");
    span.textContent = t;

    l.appendChild(c);
    l.appendChild(span);
    box.appendChild(l);
  });
  upd();
}

document.getElementById("resetBtn").addEventListener("click", () => {
  store = {};
  try {
    localStorage.removeItem("ck_austria");
  } catch (e) {}
  renderList();
});

renderList();
