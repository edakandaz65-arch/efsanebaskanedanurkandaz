# Submission — copy/paste into your email

---

## 🎯 The hook (2 sentences)

> **You've spent years on the terraces at Selhurst in red and blue — now you're the one in the dugout.** Build your club, out-think thousands of real managers, and take your South London side all the way to a Premier League final: pure skill, zero luck, no pay-to-win.

*Alternatives if you want a different angle:*

- *"Other football games reward your wallet. This one rewards your brain — build a club, outsmart real managers worldwide, and win actual cash by being the sharpest mind in the league."*
- *"Be the boss, not the bank. Run a real football club, beat thousands of managers on tactics alone, and get paid for finishing top — no luck, no pay-to-win, ever."*

---

## 📝 Process note

I hand-built a single-file HTML/CSS/JS landing page (no framework, no build step) and used **Claude (AI)** as a pair-builder — to draft and tighten the copy for Alex, generate the animated cinematic hero and the spot graphics, and write the Playwright bonus test. AI was strongest at fast iteration on punchy copy and at turning a written art brief into clean, on-brand vector artwork; it was weakest on precise art direction, so I drove the palette, the premium dark "matchday" look, and the deliberate decision to put the player in the frame — a South London gaffer in red and blue celebrating a title win — so the hero mirrors Alex himself rather than a stock executive. I included **two** interactive elements and wired them together: a *Build-your-club* flow (name, city, colours → a live crest) and a *Season leaderboard* that the new club drops straight into, flagged "YOU" — because for someone who's never heard of a management game, the quickest way to "get it" is to feel ownership and then immediately see the competition you'd be playing in. For the bonus I added a Playwright suite that drives the full club-builder, checks the leaderboard reacts to "Simulate this week," and confirms the created club appears in the table, run across mobile and desktop viewports. With more time I'd swap the hand-built hero animation for generated photo-real key art and A/B test which converts faster, add a shareable result card for social, and wire the leaderboard to a real backend.

---

## 🎨 AI-generated visual — tool + prompt

**Tool:** Claude (Anthropic) — generated as an inline **animated SVG** (a looping "winning moment" scene) so it stays razor-sharp at any size, recolours instantly, and needs no video hosting. (The build-your-club crest and the four "how it works" icons are AI-generated the same way.)

**Prompt given:**

> "Create cinematic, looping hero key-art for a football-management game, in the style of Football Manager / World Cup ad campaigns: a manager seen from behind in a navy coat leaping in celebration with a club scarf held overhead, ticker-tape confetti raining in red and blue, a 'FULL-TIME 2–1 / CHAMPIONS' stadium scoreboard, waving flags and pulsing floodlights, inside a packed stadium at dusk with an open steel roof and a glowing green pitch. Deep shadows, light bloom, cinematic vignette; premium and high-contrast."

**If a reviewer prefers a photographic/raster image:** paste the same prompt into a free tool (Microsoft Designer, Adobe Firefly, or ChatGPT image generation), export a PNG, and drop it into the `.hero-art` container in `index.html` — the layout already accommodates it.

---

## 🔗 Links to include

- **Live URL:** _(from Netlify/GitHub Pages — see DEPLOY_GUIDE.md)_
- **GitHub repo:** _(see DEPLOY_GUIDE.md)_
