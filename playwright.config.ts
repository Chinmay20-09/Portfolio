import { defineConfig } from '@playwright/test';

/**
 * Browser tests run against the production build (`vite preview`) so layout
 * assertions cover the same CSS the site ships. The runner uses the locally
 * installed Google Chrome channel, which avoids downloading a browser; set
 * PLAYWRIGHT_CHANNEL=chromium after `npx playwright install chromium` to use
 * Playwright's bundled build instead.
 */
const channel = process.env.PLAYWRIGHT_CHANNEL || 'chrome';
const PORT = Number(process.env.PLAYWRIGHT_PORT || 4173);
const BASE_URL = `http://127.0.0.1:${PORT}/Portfolio/`;

export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 2 : 4,
  reporter: [['list']],
  use: {
    baseURL: BASE_URL,
    channel,
    viewport: { width: 390, height: 844 },
    isMobile: true,
    hasTouch: true,
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
  },
  webServer: {
    command: `npm run build && npx vite preview --port ${PORT} --host 127.0.0.1 --strictPort`,
    url: BASE_URL,
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
    stdout: 'ignore',
    stderr: 'pipe',
  },
});
