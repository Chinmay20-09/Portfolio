import type { Page } from '@playwright/test';

export interface OverflowOffender {
  selector: string;
  left: number;
  right: number;
  width: number;
}

export interface OverflowReport {
  clientWidth: number;
  scrollWidth: number;
  innerWidth: number;
  offenders: OverflowOffender[];
}

/** Measures real document overflow, ignoring intentionally off-canvas fixed UI. */
export async function measureOverflow(page: Page): Promise<OverflowReport> {
  return page.evaluate(() => {
    const doc = document.documentElement;
    const viewport = doc.clientWidth;

    const insideFixed = (el: Element) => {
      for (let node: Element | null = el; node; node = node.parentElement) {
        if (getComputedStyle(node).position === 'fixed') return true;
      }
      return false;
    };

    const insideClipper = (el: Element) => {
      for (let node: Element | null = el.parentElement; node; node = node.parentElement) {
        const overflowX = getComputedStyle(node).overflowX;
        if (overflowX === 'hidden' || overflowX === 'auto' || overflowX === 'scroll' || overflowX === 'clip') {
          return true;
        }
      }
      return false;
    };

    const offenders: OverflowOffender[] = [];
    for (const el of Array.from(document.querySelectorAll('body *'))) {
      const rect = el.getBoundingClientRect();
      if (rect.right <= viewport + 0.5 && rect.left >= -0.5) continue;
      if (insideFixed(el) || insideClipper(el)) continue;
      const className = typeof el.className === 'string' ? el.className.trim().split(/\s+/).join('.') : '';
      offenders.push({
        selector: el.tagName.toLowerCase() + (el.id ? `#${el.id}` : '') + (className ? `.${className}` : ''),
        left: Math.round(rect.left),
        right: Math.round(rect.right),
        width: Math.round(rect.width),
      });
    }

    return {
      clientWidth: viewport,
      scrollWidth: doc.scrollWidth,
      innerWidth: window.innerWidth,
      offenders: offenders.sort((a, b) => b.right - a.right).slice(0, 10),
    };
  });
}

/** Waits until the boot loader is gone and the catalogue has rendered. */
export async function waitForReady(page: Page) {
  await page.locator('#loading-screen').waitFor({ state: 'hidden', timeout: 15000 });
  await page.locator('.project-card').first().waitFor({ state: 'visible', timeout: 15000 });
}
