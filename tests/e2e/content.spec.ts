import { expect, test } from './fixtures';
import { buildGlobalActivityEvents } from '../../src/data/changelog-builder';
import { projects } from '../../src/data/projects';
import { waitForReady } from './helpers';

const expectedEvents = buildGlobalActivityEvents(projects);
const expectedCommitUrls = expectedEvents.map(event => event.commitUrl);

test.describe('"Notes from the build" activity feed', () => {
  test('renders a card for every sourced changelog event', async ({ page }) => {
    await page.goto('./');
    await waitForReady(page);

    const feed = page.locator('#activity-timeline-wrapper');
    await expect(feed.locator('.activity-event')).toHaveCount(expectedEvents.length);
    await expect(feed.locator('.activity-empty-state')).toHaveCount(0);

    const commitLinks = feed.locator('a[href*="/commit/"]');
    await expect(commitLinks).toHaveCount(expectedCommitUrls.length);

    const hrefs = await commitLinks.evaluateAll(links => links.map(link => link.getAttribute('href')));
    expect(hrefs).toEqual(expectedCommitUrls);
  });

  test('sorts entries newest first', async ({ page }) => {
    await page.goto('./');
    await waitForReady(page);

    const dates = await page
      .locator('#activity-timeline-wrapper .activity-date')
      .evaluateAll(nodes => nodes.map(node => node.textContent?.trim() ?? ''));

    expect(dates).toHaveLength(expectedEvents.length);
    const timestamps = dates.map(label => Date.parse(label));
    expect(timestamps.every(value => !Number.isNaN(value))).toBe(true);
    for (let i = 1; i < timestamps.length; i += 1) {
      expect(timestamps[i - 1], `entry ${i} is newer than the one before it`).toBeGreaterThanOrEqual(timestamps[i]);
    }
  });

  test('does not advertise releases that were never published', async ({ page }) => {
    await page.goto('./');
    await waitForReady(page);

    const section = page.locator('#activity');
    await expect(section).not.toContainText('Released on');
    await expect(section.locator('.badge-release')).toHaveCount(0);
  });
});

test.describe('catalogue', () => {
  test('shows the six active projects and hides archived ones', async ({ page }) => {
    await page.goto('./');
    await waitForReady(page);

    await expect(page.locator('.project-card')).toHaveCount(6);
    await expect(page.locator('#projects')).not.toContainText('Master Controller');
  });

  test('filters by search query, status and archived toggle', async ({ page }) => {
    await page.goto('./');
    await waitForReady(page);

    await page.locator('#project-search').fill('axisflow');
    await expect(page.locator('.project-card')).toHaveCount(1);
    await expect(page.locator('.project-card')).toContainText('AxisFlow');

    await page.locator('#project-search').fill('no-such-project');
    await expect(page.locator('.project-card')).toHaveCount(0);
    await expect(page.locator('.empty-state-card')).toBeVisible();

    await page.locator('.empty-state-card button').click();
    await expect(page.locator('.project-card')).toHaveCount(6);

    await page.locator('.filter-btn[data-filter="released"]').click();
    await expect(page.locator('.project-card')).toHaveCount(1);
    await expect(page.locator('.project-card')).toContainText('Released Build');

    await page.locator('.filter-btn[data-filter="archived"]').click();
    await expect(page.locator('.project-card')).toHaveCount(2);
    await expect(page.locator('#projects')).toContainText('Master Controller');
  });

  test('opens a project page with its changelog and commit links', async ({ page }) => {
    await page.goto('./');
    await waitForReady(page);

    await page.locator('#project-card-sarthi a[href="#/project/sarthi"]').first().click();
    await expect(page).toHaveURL(/#\/project\/sarthi$/);
    await expect(page.locator('#project-root')).toBeVisible();
    await expect(page.locator('#homepage-root')).toBeHidden();

    await expect(page.locator('#project-root')).toContainText('Sarthi');
    const commitLinks = page.locator('#project-root a[href*="github.com/Chinmay20-09/Sarthi/commit/"]');
    await expect(commitLinks.first()).toBeVisible();
    expect(await commitLinks.count()).toBeGreaterThan(0);
  });
});

test.describe('contact form', () => {
  test('submits the form and shows the success feedback', async ({ page }) => {
    await page.goto('./');
    await waitForReady(page);

    await page.locator('#contact-name').fill('Browser Test');
    await page.locator('#contact-email').fill('browser-test@example.com');
    await page.locator('#contact-subject').fill('Automated check');
    await page.locator('#contact-message').fill('Verifying the contact form from the browser suite.');

    await page.locator('#form-submit-btn').click();
    await expect(page.locator('#form-feedback')).toBeVisible({ timeout: 8000 });
    await expect(page.locator('#form-feedback')).toHaveClass(/success/);
    await expect(page.locator('#form-feedback')).toContainText('TRANSMISSION SECURE');
  });
});
