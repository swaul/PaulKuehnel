# Portfolio

Modernes Portfolio-Website — gebaut mit React + Vite.

## 🚀 Setup

```bash
# 1. Dependencies installieren
npm install

# 2. Dev-Server starten
npm run dev

# 3. Für Produktion bauen
npm run build
```

## ✏️ Inhalte anpassen

Alle persönlichen Daten in einer einzigen Datei:

```
src/config.js
```

Dort trägst du ein:
- Name, Rolle, Bio, E-Mail
- Skills / Tech-Stack
- Ausbildung
- Berufserfahrung
- Projekte (Name, Beschreibung, Tags, Links)
- Social Media Links

## 🖼️ Bilder

| Datei | Ablageort |
|-------|-----------|
| Profilbild | `public/profile.jpg` |
| Projektbilder | `public/projects/projektname.jpg` |

Danach in `config.js` den Pfad eintragen, z. B.:
```js
profileImage: "/profile.jpg",
// oder für Projekte:
image: "/projects/mein-projekt.jpg",
```

## ☁️ Deployment

### Vercel (empfohlen)
1. Repo auf GitHub pushen
2. [vercel.com](https://vercel.com) → "New Project" → GitHub-Repo importieren
3. Framework: **Vite** → Deploy ✓

### GitHub Pages
1. In `vite.config.js` die `base` auf deinen Repo-Namen setzen:
   ```js
   base: '/dein-repo-name/',
   ```
2. `npm run build` ausführen
3. Den `dist/`-Ordner auf den Branch `gh-pages` pushen
   (oder GitHub Actions Workflow nutzen)
