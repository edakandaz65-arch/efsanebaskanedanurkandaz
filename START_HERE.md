# START HERE — your No Surrender Studio submission

Everything for the case study lives in this folder (`efsane-baskan-landing`). This page explains each deliverable in plain terms, points to what's already built for it, and gives you the exact steps to submit.

**Deadline:** Monday, 8 June 2026, 23:59.

**What's in the folder**

- `index.html` — the landing page (open it in a browser to see it).
- `SUBMISSION.md` — your hook + process note + the AI-visual tool & prompt, ready to paste into the email.
- `DEPLOY_GUIDE.md` — detailed publish instructions (Netlify / GitHub Pages / Vercel).
- `README.md` — project overview + how to run the Playwright test.
- `tests/landing.spec.js`, `playwright.config.js`, `package.json` — the optional Playwright bonus.

---

## The deliverables, explained

The studio asked for four required things plus a process note, and offered one optional bonus. Here's what each one means and how it's covered.

### 1. A live landing page — REQUIRED
**What they want:** a real, published web page (English, mobile-responsive) that introduces *Legendary Club Owner* to someone who's never heard of it — "Alex," a 24-year-old London football fan — and makes him want to play. They need a public live URL and a link to your code on GitHub.

**What's built:** `index.html` — one self-contained page with a premium dark "matchday" design, an animated cinematic hero (a manager celebrating a title win), the core game loop, the "why it's different" points, a "Build your club" mini-experience, a live season leaderboard, and clear "play free" calls to action. It's responsive (works on phone and desktop).

**Your job:** publish it and grab the URL — Steps A & B below.

### 2. A hook — 2 sentences — REQUIRED (goes in the email body)
**What they want:** a tagline / opening line punchy enough to stop Alex mid-scroll.

**What's built:** written for you at the top of `SUBMISSION.md` (with two alternatives if you prefer a different angle).

**Your job:** paste it into the email.

### 3. At least one AI-generated visual — REQUIRED (disclose the tool + prompt)
**What they want:** at least one visual on the page must be AI-generated, and in your process note you must say which tool you used and what prompt you gave it. (Free tools are fine.)

**What's built:** the animated cinematic hero is AI-generated (authored by Claude as an animated SVG); the club crest and the "how it works" icons are too. The tool and the exact prompt are written out in `SUBMISSION.md`.

**Your job:** nothing required — the tool + prompt note is ready. *Optional:* if you'd rather show a photo-real image from a named free tool (ChatGPT, Adobe Firefly, Microsoft Designer), `SUBMISSION.md` has a ready prompt — generate it, save the file in this folder, and ask me to swap it into the hero. Either version satisfies the requirement.

### 4. One interactive element — REQUIRED (you have two)
**What they want:** one interactive feature that makes the page feel alive (they suggested a quiz, a build-your-club flow, or a leaderboard).

**What's built:** **two**, wired together — a **"Build your club"** flow (name it, pick a city, choose colours → a live crest appears) and a **"Season leaderboard"** (your new club drops into the real-feeling league table, then "Simulate this week" reshuffles the standings). Doing two and connecting them is above the ask, and the *why* is covered in the process note.

**Your job:** nothing — it works in the page.

### 5. Process note — REQUIRED (email body or short attachment)
**What they want:** 4–5 sentences (not an essay) on the tools you used, how AI helped or fell short, which interactive element you chose and why, and what you'd do differently with more time.

**What's built:** written for you in `SUBMISSION.md`.

**Your job:** paste it into the email, or attach `SUBMISSION.md`.

### 6. Playwright test — BONUS (optional, but it counts)
**What they want:** a script that opens your live page and automatically checks the interactive element works, plus a short README explaining it.

**What's built:** `tests/landing.spec.js` drives the whole build-your-club flow, confirms the leaderboard reacts to "Simulate this week," and checks that the club you create shows up in the table — run on both mobile and desktop. `README.md` explains what it tests and how to run it.

**Your job (optional):** run it once to see it pass (Step C), then mention it in your email.

---

## Do this now — step by step

### Step A — Put the page live (~2 minutes)
Fastest option, no account needed to preview:

1. Go to **https://app.netlify.com/drop**
2. Drag the **`efsane-baskan-landing`** folder onto the page.
3. Copy the live URL it gives you (e.g. `https://your-site.netlify.app`). Open it on your phone to confirm it looks right.

(Prefer GitHub Pages or Vercel, or want to rename the site? Full instructions are in `DEPLOY_GUIDE.md`.)

### Step B — Put the code on GitHub (~3 minutes) — they want a repo link
1. On **github.com**, create a new **public** repo, e.g. `legendary-club-owner-landing` (don't add a README — the folder already has one).
2. Open a terminal **inside the `efsane-baskan-landing` folder** and run:

   ```bash
   git init
   git add .
   git commit -m "Legendary Club Owner — launch landing page + Playwright tests"
   git branch -M main
   git remote add origin https://github.com/<your-username>/legendary-club-owner-landing.git
   git push -u origin main
   ```

3. Your repo link is `https://github.com/<your-username>/legendary-club-owner-landing`.

*Tip:* GitHub can also host the live page for free — in the repo go to **Settings → Pages → deploy from `main` / root**. That gives you a second live URL, so one repo covers both required links.

### Step C — (Optional bonus) run the Playwright test
In a terminal inside the folder:

```bash
npm install
npx playwright install
npm test
```

You should see the tests pass on mobile and desktop. To run them against your **live** site instead of a local copy:

```bash
BASE_URL=https://your-live-url npm test
```

### Step D — Send the submission email
Open `SUBMISSION.md`, copy your hook and process note, and send something like this:

```
Subject: Management Associate case study — Edanur Kandaz

Hi [name],

Here's my case study for Legendary Club Owner's international launch.

Live page:  https://your-live-url
GitHub:     https://github.com/your-username/legendary-club-owner-landing

Hook:
You've spent years on the terraces at Selhurst in red and blue — now you're
the one in the dugout. Build your club, out-think thousands of real managers,
and take your South London side all the way to a Premier League final: pure
skill, zero luck, no pay-to-win.

Process note:
[paste the process note from SUBMISSION.md]

(Bonus: the repo also includes a Playwright test that drives the interactive
elements and checks they work across mobile and desktop.)

Thanks for the brief — I really enjoyed it.
Edanur
```

---

## Final check before you hit send

- [ ] Live URL opens and looks right **on your phone**.
- [ ] GitHub repo is **public** and the link works.
- [ ] Hook (2 sentences) is in the email body.
- [ ] Process note is in the email body (or `SUBMISSION.md` is attached).
- [ ] (Bonus) you mentioned the Playwright tests.

That's everything. Good luck!
