import { expect, test } from './fixtures';
import { measureOverflow, waitForReady } from './helpers';

const PHONE_WIDTHS = [320, 360, 390, 414];
const TABLET_WIDTHS = [768, 769, 900, 992];

test.describe('page width', () => {
  for (const width of [...PHONE_WIDTHS, ...TABLET_WIDTHS]) {
    test(`does not scroll horizontally at ${width}px`, async ({ page }) => {
      await page.setViewportSize({ width, height: 844 });
      await page.goto('./');
      await waitForReady(page);

      // Visit the whole page so scroll-triggered sections finish rendering.
      await page.evaluate(async () => {
        const step = window.innerHeight * 0.8;
        for (let y = 0; y < document.body.scrollHeight; y += step) {
          window.scrollTo(0, y);
          await new Promise(resolve => requestAnimationFrame(resolve));
        }
        window.scrollTo(0, 0);
      });

      const report = await measureOverflow(page);
      expect(
        report.scrollWidth - report.clientWidth,
        `horizontal overflow ${report.scrollWidth}px in ${report.clientWidth}px viewport: ${JSON.stringify(report.offenders)}`,
      ).toBe(0);
      expect(report.offenders).toEqual([]);
    });
  }

  test('keeps the page width stable after opening the project page', async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 844 });
    await page.goto('./#/project/eventflow');
    await page.locator('#project-root').waitFor({ state: 'visible' });

    const report = await measureOverflow(page);
    expect(report.scrollWidth - report.clientWidth, JSON.stringify(report.offenders)).toBe(0);
  });
});

test.describe('contact section', () => {
  for (const width of PHONE_WIDTHS) {
    test(`keeps both cards inside the ${width}px viewport`, async ({ page }) => {
      await page.setViewportSize({ width, height: 844 });
      await page.goto('./');
      await waitForReady(page);

      const layout = await page.evaluate(() => {
        const containerEl = document.querySelector('#contact .container')!;
        const container = containerEl.getBoundingClientRect();
        const style = getComputedStyle(containerEl);
        return {
          viewport: document.documentElement.clientWidth,
          contentLeft: Math.round(container.left + parseFloat(style.paddingLeft)),
          contentRight: Math.round(container.right - parseFloat(style.paddingRight)),
          cards: Array.from(document.querySelectorAll('.contact-card')).map(card => {
            const rect = card.getBoundingClientRect();
            return {
              left: Math.round(rect.left),
              right: Math.round(rect.right),
              clips: card.scrollWidth > card.clientWidth + 1,
            };
          }),
        };
      });

      expect(layout.cards).toHaveLength(2);
      for (const card of layout.cards) {
        expect(card.left).toBe(layout.contentLeft);
        expect(card.right).toBe(layout.contentRight);
        expect(card.right).toBeLessThanOrEqual(layout.viewport);
        expect(card.clips).toBe(false);
      }
    });
  }

  test('wraps long handles and form controls inside the card', async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 844 });
    await page.goto('./');
    await waitForReady(page);

    const result = await page.evaluate(() => {
      const card = document.querySelector('.info-container')!;
      const cardRect = card.getBoundingClientRect();
      const handle = document.querySelector('.channel-handle')!.getBoundingClientRect();
      const input = document.querySelector('#contact-email')!.getBoundingClientRect();
      return {
        cardRight: Math.round(cardRect.right),
        handleRight: Math.round(handle.right),
        inputLeft: Math.round(input.left),
        inputRight: Math.round(input.right),
        formRight: Math.round(document.querySelector('.form-container')!.getBoundingClientRect().right),
      };
    });

    expect(result.handleRight).toBeLessThanOrEqual(result.cardRight);
    expect(result.inputLeft).toBeGreaterThanOrEqual(0);
    expect(result.inputRight).toBeLessThanOrEqual(result.formRight);
  });
});
