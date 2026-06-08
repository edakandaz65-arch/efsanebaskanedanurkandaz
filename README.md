# Legendary Club Owner — Landing Page

International-launch landing page for **Legendary Club Owner** (*Efsane Başkan*), a skill-based mobile football management game. Built for the No Surrender Studio case study.

**Target persona:** Alex, 24, London — a casual football-gamer who's never heard of the game and has ~5 seconds to get hooked.

---

## What's in here

| File | Purpose |
|------|---------|
| `index.html` | The entire landing page — HTML, CSS and JS in one self-contained file. No build step. |
| `tests/landing.spec.js` | Playwright tests for the interactive elements (the bonus). |
| `playwright.config.js` | Test config — auto-serves the page locally and runs on **mobile + desktop**. |
| `package.json` | Scripts and the Playwright dev-dependency. |
| `DEPLOY_GUIDE.md` | Step-by-step: go live on Netlify / GitHub Pages / Vercel. |
| `SUBMISSION.md` | The 2-sentence hook + the process note, ready to paste into the email. |

## Highlights

- **Premium dark design** — deep matchday palette, subtle red/blue glows, glassy cards, confetti, animated counters.
- **AI-generated hero key art** — cinematic, Football-Manager-style night-match scene: a lone manager in silhouette on the floodlit touchline, rim-lit in the club's red and blue (built to mirror Alex himself). Details + prompt in `SUBMISSION.md`.
- **Two interactive elements, wired together:**
  1. **Build your club** — name it, pick a city, choose colours → a live, recoloured crest.
  2. **Season leaderboard** — a real-feeling league table with prizes, form and a *Simulate this week* button. **The club you build drops straight into the table, flagged "YOU."**
- **Mobile-responsive** — tested at phone and desktop sizes.

---

## Run it locally

No build step. Either just open `index.html` in a browser, or serve it:

```bash
npm run serve       # serves on http://localhost:8080
```

## Run the tests (the bonus)

```bash
npm install                 # installs @playwright/test
npx playwright install      # downloads the browser binaries (first time only)
npm test                    # auto-serves index.html and runs the suite
```

To run against your **live** URL instead of a local copy:

```bash
BASE_URL=https://your-site.netlify.app npm test
```

### What the tests verify

1. **Build-your-club flow** — fills the club name, clicks through all three steps (name → city → colours), creates the club, and asserts the **crest result appears** with the chosen name.
2. **Leaderboard** — asserts the table renders multiple rows and shows the live badge; clicks **"Simulate this week"** and confirms the table stays populated and points update.
3. **Integration** — builds a club and confirms it **shows up in the leaderboard** flagged as the player's own.

Tests run on both `mobile-chrome` (Pixel 7) and `desktop-chrome`, doubling as a responsiveness check.

---

## Deploy

See **`DEPLOY_GUIDE.md`** — the fastest route is dragging this folder onto [app.netlify.com/drop](https://app.netlify.com/drop) (~60 seconds, no account needed to preview).
