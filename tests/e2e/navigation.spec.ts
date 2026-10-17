import { expect, test } from './fixtures';
import { waitForReady } from './helpers';

test.describe('navigation breakpoints', () => {
  test('uses the mobile menu on phones and opens it from the toggle', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('./');
    await waitForReady(page);

    await expect(page.locator('.nav-links')).toBeHidden();
    await expect(page.locator('#mobile-menu-toggle')).toBeVisible();
    await expect(page.locator('#mobile-menu')).toBeHidden();

    await page.locator('#mobile-menu-toggle').click();
    await expect(page.locator('#mobile-menu')).toBeVisible();

    await page.locator('#mobile-menu a[href="#projects"]').click();
    await expect(page.locator('#mobile-menu')).toBeHidden();
    await expect(page).toHaveURL(/#projects$/);
    await expect.poll(() => page.evaluate(() => window.scrollY)).toBeGreaterThan(0);
  });

  test('still uses the mobile menu at 769px', async ({ page }) => {
    await page.setViewportSize({ width: 769, height: 844 });
    await page.goto('./');
    await waitForReady(page);

    await expect(page.locator('.nav-links')).toBeHidden();
    await expect(page.locator('#mobile-menu-toggle')).toBeVisible();
    await expect(page.locator('.key-shortcut')).toBeHidden();
  });

  test('shows the desktop nav and shortcut hint from 1024px', async ({ page }) => {
    await page.setViewportSize({ width: 1024, height: 844 });
    await page.goto('./');
    await waitForReady(page);

    await expect(page.locator('.nav-links')).toBeVisible();
    await expect(page.locator('#mobile-menu-toggle')).toBeHidden();
    await expect(page.locator('.key-shortcut')).toBeVisible();
    await expect(page.locator('.nav-actions')).toBeInViewport();
  });

  test('keeps the navbar controls inside the viewport at 320px', async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 844 });
    await page.goto('./');
    await waitForReady(page);

    const boxes = await page.evaluate(() => {
      const viewport = document.documentElement.clientWidth;
      const badge = document.querySelector('#mobile-menu-toggle')!.getBoundingClientRect();
      const actions = document.querySelector('.nav-actions')!.getBoundingClientRect();
      return {
        viewport,
        menuRight: Math.round(badge.right),
        menuWidth: Math.round(badge.width),
        actionsLeft: Math.round(actions.left),
      };
    });

    expect(boxes.menuRight).toBeLessThanOrEqual(boxes.viewport);
    expect(boxes.menuWidth).toBeGreaterThanOrEqual(40);
    expect(boxes.actionsLeft).toBeGreaterThanOrEqual(0);
  });
});
