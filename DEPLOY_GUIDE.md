# Deploy Guide — go live in minutes

You need two links for your submission: a **live URL** and a **GitHub repo**. Here's the fastest path to both.

---

## ⚡ Fastest: Netlify Drop (live URL in ~60 seconds)

1. Go to **https://app.netlify.com/drop**
2. Drag the **`efsane-baskan-landing`** folder onto the page.
3. Netlify gives you a live URL instantly (e.g. `https://playful-otter-1234.netlify.app`).
4. (Optional) Click **"Site settings → Change site name"** to make it pretty, e.g. `legendary-club-owner.netlify.app`.

> A free Netlify account lets you keep the site and rename it. You can deploy first and sign in after to claim it.

---

## 🐙 GitHub repo (required for the submission link)

From inside the `efsane-baskan-landing` folder:

```bash
git init
git add .
git commit -m "Legendary Club Owner — launch landing page + Playwright tests"
git branch -M main
# create an empty repo on github.com first, then:
git remote add origin https://github.com/<your-username>/legendary-club-owner-landing.git
git push -u origin main
```

Your repo link is then `https://github.com/<your-username>/legendary-club-owner-landing`.

### Bonus: free hosting straight from GitHub (GitHub Pages)

1. Push the repo (above).
2. On GitHub: **Settings → Pages**.
3. Under **Source**, choose **Deploy from a branch**, pick `main` / `/ (root)`, **Save**.
4. Your live URL appears after a minute: `https://<your-username>.github.io/legendary-club-owner-landing/`.

This way one repo gives you *both* required links.

---

## ▲ Alternative: Vercel

1. Push to GitHub (above).
2. Go to **https://vercel.com/new**, import the repo.
3. Framework preset: **Other**. Root directory: `./`. No build command needed.
4. **Deploy** → you get a `*.vercel.app` URL.

---

## After you're live — point the tests at it (optional, nice touch)

```bash
BASE_URL=https://your-live-url npx playwright test
```

Green checks against the *deployed* site are a strong thing to mention in your email.

---

## Submission checklist

- [ ] Live URL works on your phone (open it on mobile to confirm responsiveness).
- [ ] GitHub repo link is public.
- [ ] Hook (2 sentences) pasted into the email body — see `SUBMISSION.md`.
- [ ] Process note pasted into the email body — see `SUBMISSION.md`.
- [ ] (Bonus) Mention the Playwright tests + that they pass.
