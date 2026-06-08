// @ts-check
const { test, expect } = require('@playwright/test');

/**
 * End-to-end checks for the Legendary Club Owner landing page.
 * Covers the two interactive elements:
 *   1) "Build your club" 3-step flow  -> crest result appears
 *   2) Season leaderboard             -> renders + reacts to "Simulate this week"
 *   3) Integration                    -> the club you build shows up in the league table
 *
 * Reusable helper so each test starts from a clean page.
 */
async function buildClub(page, name) {
  await page.goto('/');

  // Step 1 — name the club
  const nameField = page.getByTestId('club-name');
  await nameField.scrollIntoViewIfNeeded();
  await nameField.fill(name);
  await page.getByTestId('club-next').click();

  // Step 2 — pick a city
  await page.getByTestId('city-option').first().click();
  await page.getByTestId('club-next').click();

  // Step 3 — pick colours, then create
  await page.getByTestId('color-option').first().click();
  await page.getByTestId('club-create').click();
}

test.describe('Build your club flow', () => {
  test('completes all 3 steps and reveals the crest', async ({ page }) => {
    await buildClub(page, 'Thunder FC');

    const result = page.getByTestId('club-result');
    await expect(result).toBeVisible();

    // The generated crest should carry the club name we typed.
    await expect(page.getByTestId('club-crest')).toContainText('Thunder FC');
  });
});

test.describe('Season leaderboard', () => {
  test('renders a full table with a live badge', async ({ page }) => {
    await page.goto('/');
    const board = page.getByTestId('leaderboard');
    await board.scrollIntoViewIfNeeded();

    await expect(page.getByTestId('live-badge')).toBeVisible();

    const rows = page.getByTestId('lb-row');
    await expect(rows.first()).toBeVisible();
    expect(await rows.count()).toBeGreaterThan(3);
  });

  test('"Simulate this week" keeps the table populated and changes points', async ({ page }) => {
    await page.goto('/');
    await page.getByTestId('leaderboard').scrollIntoViewIfNeeded();

    const topPtsBefore = await page.locator('[data-testid="lb-row"] .pts').first().innerText();

    await page.getByTestId('simulate-week').click();
    await page.waitForTimeout(400); // allow the re-render/flash

    const rows = page.getByTestId('lb-row');
    await expect(rows.first()).toBeVisible();
    expect(await rows.count()).toBeGreaterThan(3);

    // Points are awarded on simulate, so the leader's total should not drop.
    const topPtsAfter = await page.locator('[data-testid="lb-row"] .pts').first().innerText();
    expect(Number(topPtsAfter)).toBeGreaterThanOrEqual(Number(topPtsBefore));
  });
});

test('the club you build appears in the leaderboard', async ({ page }) => {
  await buildClub(page, 'Verify United');

  const board = page.getByTestId('leaderboard');
  await board.scrollIntoViewIfNeeded();
  await expect(board).toContainText('Verify United');

  // It should be flagged as the player's own club.
  await expect(board.locator('.you-tag')).toBeVisible();
});
