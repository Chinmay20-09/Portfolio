import { describe, expect, it } from 'vitest';
import {
  buildGlobalActivityEvents,
  getChangeTypeStyle,
  projectChangelogs,
} from '../src/data/changelog-builder';
import { projects } from '../src/data/projects';

const EXPECTED_COUNTS: Record<string, number> = {
  sarthi: 20,
  eventflow: 21,
  axisflow: 22,
  viewerpal: 5,
  deskbuddy: 4,
  'lakshman-rekha': 1,
  'astral-monitor': 6,
};

const ALLOWED_TYPES = ['feature', 'fix', 'refactor', 'documentation', 'testing', 'maintenance'];

const repoOf = (githubUrl: string) => githubUrl.replace('https://github.com/', '');

describe('changelog source data', () => {
  it('matches the documented event count per project', () => {
    const counts = Object.fromEntries(
      Object.entries(projectChangelogs).map(([id, entries]) => [id, entries.length]),
    );
    expect(counts).toEqual(EXPECTED_COUNTS);
    expect(Object.values(counts).reduce((sum, n) => sum + n, 0)).toBe(79);
  });

  it('only references real project ids', () => {
    const ids = new Set(projects.map(p => p.id));
    for (const id of Object.keys(projectChangelogs)) {
      expect(ids.has(id)).toBe(true);
    }
  });

  it('uses sortable ISO dates on every entry', () => {
    for (const [id, entries] of Object.entries(projectChangelogs)) {
      for (const entry of entries) {
        expect(entry.date, `${id} date`).toMatch(/^\d{4}-\d{2}-\d{2}$/);
        expect(Number.isNaN(Date.parse(entry.date)), `${id} parses ${entry.date}`).toBe(false);
      }
    }
  });

  it('keeps each project history newest-first', () => {
    for (const [id, entries] of Object.entries(projectChangelogs)) {
      const dates = entries.map(e => Date.parse(e.date));
      const sorted = [...dates].sort((a, b) => b - a);
      expect(dates, `${id} ordering`).toEqual(sorted);
    }
  });

  it('links each event to the right repository and full commit SHA', () => {
    for (const project of projects) {
      const entries = projectChangelogs[project.id] ?? [];
      const repo = repoOf(project.githubUrl);
      for (const entry of entries) {
        expect(entry.commitSha, `${project.id} short sha`).toMatch(/^[0-9a-f]{7}$/);
        expect(entry.commitUrl, `${project.id} commit url`).toMatch(
          new RegExp(`^https://github\\.com/${repo.replace('.', '\\.')}/commit/[0-9a-f]{40}$`),
        );
        expect(entry.commitUrl?.split('/commit/')[1].startsWith(entry.commitSha!)).toBe(true);
      }
    }
  });

  it('does not duplicate commits inside a project history', () => {
    for (const [id, entries] of Object.entries(projectChangelogs)) {
      const keys = entries.map(e => e.commitUrl ?? e.commitSha);
      expect(new Set(keys).size, `${id} has duplicate commits`).toBe(keys.length);
    }
  });

  it('never claims a GitHub release that the source does not confirm', () => {
    const types = new Set(Object.values(projectChangelogs).flat().map(e => e.type));
    for (const type of types) {
      expect(ALLOWED_TYPES).toContain(type);
    }
    expect(types.has('release')).toBe(false);
  });

  it('gives every entry a version label and at least one change line', () => {
    for (const [id, entries] of Object.entries(projectChangelogs)) {
      for (const entry of entries) {
        expect(entry.version.trim(), `${id} version`).not.toBe('');
        const lines = [
          ...(entry.added ?? []),
          ...(entry.improved ?? []),
          ...(entry.fixed ?? []),
          ...(entry.changes ?? []),
        ].filter(line => line.trim() !== '');
        expect(lines.length, `${id} ${entry.date} change lines`).toBeGreaterThan(0);
      }
    }
  });
});

describe('buildGlobalActivityEvents', () => {
  const events = buildGlobalActivityEvents(projects);

  it('produces one event per sourced commit', () => {
    expect(events).toHaveLength(79);
  });

  it('orders the feed newest-first', () => {
    const times = events.map(e => Date.parse(e.date));
    expect(times).toEqual([...times].sort((a, b) => b - a));
  });

  it('has unique DOM-safe event keys', () => {
    const keys = events.map(e => e.eventKey);
    expect(new Set(keys).size).toBe(keys.length);
    for (const key of keys) {
      expect(key).toMatch(/^[A-Za-z0-9._:-]+$/);
    }
  });

  it('points every event at a catalogue project', () => {
    const byId = new Map(projects.map(p => [p.id, p]));
    for (const event of events) {
      const project = byId.get(event.projectId);
      expect(project, event.projectId).toBeDefined();
      expect(event.projectName).toBe(project!.name);
      expect(event.slug).toBe(project!.slug);
      expect(event.summary.trim()).not.toBe('');
      expect(event.details.length).toBeGreaterThan(0);
      expect(event.commitUrl).toMatch(/^https:\/\/github\.com\/Chinmay20-09\/[\w.-]+\/commit\/[0-9a-f]{40}$/);
    }
  });

  it('carries the commit type through for badge rendering', () => {
    for (const event of events) {
      expect(ALLOWED_TYPES).toContain(event.changeType);
      expect(event.changeType).not.toBe('release');
    }
  });
});

describe('getChangeTypeStyle', () => {
  it('maps known change types to their badge and node classes', () => {
    expect(getChangeTypeStyle('fix')).toEqual({
      nodeClass: 'node-fix',
      badgeClass: 'badge-fix',
      badgeText: 'Fix',
    });
    expect(getChangeTypeStyle('documentation').badgeText).toBe('Docs');
    expect(getChangeTypeStyle('maintenance').nodeClass).toBe('node-maintenance');
  });

  it('falls back to the feature style for unknown or missing types', () => {
    expect(getChangeTypeStyle(undefined).badgeText).toBe('Feature');
    expect(getChangeTypeStyle('not-a-type').badgeClass).toBe('badge-feature');
  });
});
