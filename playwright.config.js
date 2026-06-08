// @ts-check
const { defineConfig, devices } = require('@playwright/test');

/**
 * Run against a local copy of the page by default. The config spins up a tiny
 * static server serving index.html on :8080. To test the LIVE deployed site
 * instead, set BASE_URL, e.g.:
 *
 *   BASE_URL=https://your-site.netlify.app npx playwright test
 *
 * When BASE_URL is set, the local web server is skipped.
 */
const BASE_URL = process.env.BASE_URL || 'http://localhost:8080';

module.exports = defineConfig({
  testDir: './tests',
  timeout: 30_000,
  expect: { timeout: 7_000 },
  fullyParallel: true,
  reporter: [['list'], ['html', { open: 'never' }]],
  use: {
    baseURL: BASE_URL,
    trace: 'on-first-retry',
  },
  // Test the same page at a phone size and a desktop size (mobile-responsive check).
  projects: [
    { name: 'mobile-chrome', use: { ...devices['Pixel 7'] } },
    { name: 'desktop-chrome', use: { ...devices['Desktop Chrome'] } },
  ],
  // Only auto-serve locally; if BASE_URL points at a deployed site, skip it.
  webServer: process.env.BASE_URL
    ? undefined
    : {
        command: 'npx --yes http-server . -p 8080 -c-1 --silent',
        url: 'http://localhost:8080',
        reuseExistingServer: true,
        timeout: 60_000,
      },
});
