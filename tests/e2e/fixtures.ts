import { test as base } from '@playwright/test';

export { expect } from '@playwright/test';

/**
 * The page pulls Lucide and Google Fonts from CDNs. Browser tests must not
 * depend on network availability, so those requests are answered locally.
 * The Lucide stub keeps the same 24px icon footprint the real library uses.
 */
const LUCIDE_STUB = `
window.lucide = {
  createIcons() {
    document.querySelectorAll('i[data-lucide]').forEach(el => {
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('width', '24');
      svg.setAttribute('height', '24');
      svg.setAttribute('viewBox', '0 0 24 24');
      svg.setAttribute('fill', 'none');
      svg.setAttribute('stroke', 'currentColor');
      el.replaceWith(svg);
    });
  }
};
`;

export const test = base.extend({
  page: async ({ page }, use) => {
    await page.route('https://unpkg.com/**', route =>
      route.fulfill({ contentType: 'text/javascript', body: LUCIDE_STUB }),
    );
    await page.route('https://fonts.googleapis.com/**', route =>
      route.fulfill({ contentType: 'text/css', body: '' }),
    );
    await page.route('https://fonts.gstatic.com/**', route => route.abort());
    await use(page);
  },
});
