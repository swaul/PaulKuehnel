# Paul Kühnel — Portfolio

Meine persönliche Portfolio-Website. iOS-Entwickler aus Salzgitter, über 5 Jahre native App-Entwicklung mit Swift — von Banking-Apps für die Erste Bank bis zu Mobilitätslösungen für die Wiener Linien.

🔗 **Live:** _(Link zur Seite hier eintragen)_

---

## Tech-Stack

- **React 18** + **Vite** — schnelles, modernes Frontend-Setup
- **CSS Modules** — komponenten-gekapseltes Styling
- **Zweisprachig** (DE/EN) mit eigenem Language-Context
- **Light-/Dark-Mode** via Theme-Context
- **lucide-react** für Icons
- **Vercel Analytics** & Hosting auf Vercel

---

## Lokal starten

```bash
npm install     # Dependencies installieren
npm run dev     # Dev-Server starten
npm run build   # Production-Build erzeugen
```

---

## Aufbau

Sämtliche Inhalte (Bio, Skills, Werdegang, Projekte, Social Links) liegen zentral in einer Datei — so bleibt der Rest des Codes frei von persönlichen Daten:

```
src/config.js
```

Bilder liegen in `public/` und werden in `config.js` per Pfad referenziert (z. B. `/profile.jpg`, `/wienmobil.png`).

---

<sub>© Paul Kühnel — gebaut mit React + Vite</sub>
