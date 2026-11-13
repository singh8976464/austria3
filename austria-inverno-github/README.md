# 🎄 Austria d’inverno · 12–17 dicembre

Guida interattiva di viaggio per un itinerario invernale di 6 giorni in Austria (Vienna, Alpi viennesi, Semmering, Hallstatt e Salisburgo) interamente in treno.

## 📁 Struttura del repository

```text
austria-inverno/
├── index.html          # Struttura principale della pagina
├── css/
│   └── style.css       # Stili, layout responsive e tema chiaro/scuro
├── js/
│   └── app.js          # Logica tema (dark/light) e checklist con localStorage
├── .gitignore          # File da escludere dal tracciamento Git
└── README.md           # Documentazione del progetto
```

## ✨ Funzionalità

- **Design responsive & mobile-first** con barra di navigazione *sticky*.
- **Tema chiaro/scuro automatico** (rileva le preferenze del sistema operativo) + toggle manuale in alto a destra.
- **Checklist interattiva** con salvataggio automatico dello stato nel browser (`localStorage`) e barra di avanzamento.
- **Zero dipendenze / build step**: HTML, CSS e JavaScript puri, pronti per l'hosting statico.

## 🚀 Pubblicazione con GitHub Pages

1. Carica questi file nella root del tuo repository GitHub.
2. Vai su **Settings** → **Pages**.
3. Sotto **Build and deployment**, seleziona **Deploy from a branch**.
4. Imposta il branch `main` (cartella `/ (root)`) e clicca su **Save**.
5. Dopo qualche istante il sito sarà online all'indirizzo `https://<tuo-username>.github.io/<nome-repo>/`.
