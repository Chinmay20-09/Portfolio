// @vitest-environment jsdom
import { beforeEach, describe, expect, it, vi } from 'vitest';

// Simulate a catalogue with no documented commits.
vi.mock('../src/data/projects', () => ({ projects: [] }));

import { DOM } from '../src/utils/dom';
import { renderGlobalActivityFeed } from '../src/components/activity';

describe('activity feed empty state', () => {
  beforeEach(() => {
    const wrapper = document.createElement('div');
    wrapper.id = 'activity-timeline-wrapper';
    document.body.appendChild(wrapper);
    DOM.activityTimeline = wrapper;
  });

  it('renders a helpful message instead of a blank section', () => {
    renderGlobalActivityFeed();

    const empty = DOM.activityTimeline.querySelector('.activity-empty-state');
    expect(empty).not.toBeNull();
    expect(empty?.textContent).toContain('No recorded changelog events');
    expect(empty?.textContent).toContain('Nothing is fabricated');
    expect(DOM.activityTimeline.querySelector('.activity-event')).toBeNull();
  });
});
