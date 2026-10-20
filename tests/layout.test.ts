import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

const css = readFileSync(new URL('../style.css', import.meta.url), 'utf8').replace(/\r\n/g, '\n');

/**
 * Returns the declaration bodies of every top-level or nested rule that targets
 * `selector` exactly (media-query copies included).
 */
function ruleBlocks(selector: string): string[] {
  const escaped = selector.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const pattern = new RegExp(`(?:^|\\n)[ \\t]*${escaped}[ \\t]*\\{([^}]*)\\}`, 'g');
  return [...css.matchAll(pattern)].map(match => match[1]);
}

const allDeclarations = (selector: string) => ruleBlocks(selector).join('\n').toLowerCase();

describe('mobile horizontal overflow guards', () => {
  it('lets the contact grid tracks shrink below their content width', () => {
    const grid = allDeclarations('.contact-grid');
    expect(grid).toContain('minmax(0, 1.2fr)');
    expect(grid).toContain('minmax(0, 0.8fr)');
  });

  it('keeps contact cards shrinkable grid items', () => {
    expect(allDeclarations('.contact-card')).toContain('min-width: 0');
  });

  it('wraps long social handles instead of widening the card', () => {
    const handle = allDeclarations('.channel-handle');
    expect(handle).toContain('overflow-wrap: anywhere');
    // `word-break: break-word` is deprecated and adds nothing here: it is specified to
    // behave like `word-break: normal` + `overflow-wrap: anywhere`, which is set above.
    // Keeping it out is asserted so it cannot creep back in as a duplicate of that rule.
    expect(handle).not.toContain('word-break: break-word');
  });

  it('does not leave overflow-wrap on the arrow decoration', () => {
    expect(allDeclarations('.channel-card:hover .channel-arrow')).not.toContain('overflow-wrap');
  });

  it('allows the footer link list to wrap on narrow screens', () => {
    expect(allDeclarations('.footer-links')).toContain('flex-wrap: wrap');
  });

  it('allows the status filter row to wrap', () => {
    expect(allDeclarations('.filter-buttons')).toContain('flex-wrap: wrap');
  });

  it('keeps form controls inside their card', () => {
    const controls = allDeclarations('.form-group input, .form-group textarea');
    expect(controls).toContain('width: 100%');
    expect(controls).toContain('min-width: 0');
  });

  it('collapses the command-palette shortcut chip on phones', () => {
    expect(allDeclarations('.key-shortcut')).toContain('display: none');
    expect(allDeclarations('.cmd-palette-trigger')).toContain('width: 40px');
  });

  it('switches to the mobile navbar before the desktop links overflow', () => {
    const tabletBlock = /@media \(max-width: 992px\) \{([\s\S]*?)\n\}/.exec(css)?.[1] ?? '';
    expect(tabletBlock).toContain('.nav-links');
    expect(tabletBlock).toContain('display: none');
    expect(tabletBlock).toContain('.mobile-menu-btn');
    expect(tabletBlock).toContain('display: flex');
  });

  it('does not size full-bleed layout blocks with viewport units', () => {
    expect(css).not.toMatch(/width:\s*100vw/);
  });
});
