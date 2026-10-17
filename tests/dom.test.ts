// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import {
  DOM,
  formatActivityDate,
  getStatusBadgeClass,
  getStatusLabel,
  showToastNotification,
  toggleSystemTheme,
  updateThemeIcon,
} from '../src/utils/dom';

describe('getStatusBadgeClass', () => {
  it.each([
    ['stable', 'status-stable'],
    ['BETA', 'status-beta'],
    ['alpha', 'status-alpha'],
    ['paused', 'status-paused'],
    ['archived', 'status-archived'],
  ])('maps %s to %s', (status, expected) => {
    expect(getStatusBadgeClass(status)).toBe(expected);
  });

  it('falls back to the alpha badge for unknown statuses', () => {
    expect(getStatusBadgeClass('prototype')).toBe('status-alpha');
  });
});

describe('getStatusLabel', () => {
  it('returns a human readable label with an indicator', () => {
    expect(getStatusLabel('stable')).toBe('🟢 Stable');
    expect(getStatusLabel('beta')).toBe('🟡 Beta Build');
    expect(getStatusLabel('archived')).toBe('⚫ Archived');
  });

  it('falls back for unknown statuses', () => {
    expect(getStatusLabel('unknown')).toBe('🟠 Development');
  });
});

describe('formatActivityDate', () => {
  it('formats ISO dates for the activity feed', () => {
    expect(formatActivityDate('2026-09-29')).toBe('Sep 29, 2026');
    expect(formatActivityDate('2026-10-16')).toBe('Oct 16, 2026');
  });

  it('accepts full timestamps', () => {
    expect(formatActivityDate('2026-09-29T14:32:00Z')).toBe('Sep 29, 2026');
  });

  it('returns a safe placeholder instead of "Invalid Date"', () => {
    expect(formatActivityDate('')).toBe('Date unavailable');
    expect(formatActivityDate('not-a-date')).toBe('Date unavailable');
  });
});

describe('updateThemeIcon', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <i class="theme-icon-dark"></i>
      <i class="theme-icon-light"></i>
    `;
  });

  it('shows the sun icon for the light theme', () => {
    updateThemeIcon('light');
    const dark = document.querySelector('.theme-icon-dark') as HTMLElement;
    const light = document.querySelector('.theme-icon-light') as HTMLElement;
    expect(dark.style.display).toBe('none');
    expect(light.style.display).toBe('block');
  });

  it('shows the moon icon for the dark theme', () => {
    updateThemeIcon('dark');
    const dark = document.querySelector('.theme-icon-dark') as HTMLElement;
    const light = document.querySelector('.theme-icon-light') as HTMLElement;
    expect(dark.style.display).toBe('block');
    expect(light.style.display).toBe('none');
  });

  it('does nothing when the icons are not mounted', () => {
    document.body.innerHTML = '';
    expect(() => updateThemeIcon('light')).not.toThrow();
  });
});

describe('showToastNotification', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    document.body.innerHTML = `
      <div id="toast"></div>
      <span id="toast-msg"></span>
      <i id="toast-icon"></i>
    `;
    DOM.toast = document.getElementById('toast') as HTMLElement;
    DOM.toastMsg = document.getElementById('toast-msg') as HTMLElement;
    DOM.toastIcon = document.getElementById('toast-icon') as HTMLElement;
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('shows a success toast and hides it after four seconds', () => {
    showToastNotification('Message dispatched');
    expect(DOM.toastMsg.textContent).toBe('Message dispatched');
    expect(DOM.toastIcon.getAttribute('data-lucide')).toBe('check-circle');
    expect(DOM.toast.classList.contains('show')).toBe(true);

    vi.advanceTimersByTime(4000);
    expect(DOM.toast.classList.contains('show')).toBe(false);
  });

  it('uses the error styling for failures', () => {
    showToastNotification('Dispatch failed', 'error');
    expect(DOM.toastIcon.getAttribute('data-lucide')).toBe('alert-circle');
    expect(DOM.toast.style.borderColor).toBe('var(--accent-red)');
  });

  it('bails out safely when the toast markup is missing', () => {
    DOM.toast = null as unknown as HTMLElement;
    expect(() => showToastNotification('ignored')).not.toThrow();
  });
});

describe('toggleSystemTheme', () => {
  beforeEach(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.clear();
    document.body.innerHTML = `
      <i class="theme-icon-dark"></i>
      <i class="theme-icon-light"></i>
    `;
  });

  it('switches dark to light and persists the choice', () => {
    toggleSystemTheme();
    expect(document.documentElement.getAttribute('data-theme')).toBe('light');
    expect(localStorage.getItem('core-theme')).toBe('light');
  });

  it('switches light back to dark', () => {
    document.documentElement.setAttribute('data-theme', 'light');
    toggleSystemTheme();
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
    expect(localStorage.getItem('core-theme')).toBe('dark');
  });
});
