import { describe, expect, it } from 'vitest';
import { projects } from '../src/data/projects';

const VALID_STATUSES = ['stable', 'beta', 'alpha', 'paused', 'archived'];
const VALID_STAGES = ['Ideas', 'Planning', 'Development', 'Testing', 'Released', 'Archived'];
const ARCHIVED_IDS = ['viewerpal', 'master-controller'];

describe('project catalogue data', () => {
  it('contains the eight documented projects', () => {
    expect(projects.map(p => p.id)).toEqual([
      'sarthi',
      'eventflow',
      'axisflow',
      'viewerpal',
      'deskbuddy',
      'lakshman-rekha',
      'astral-monitor',
      'master-controller',
    ]);
  });

  it('has unique ids and slugs', () => {
    const ids = projects.map(p => p.id);
    const slugs = projects.map(p => p.slug);
    expect(new Set(ids).size).toBe(ids.length);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it.each(projects.map(p => [p.id, p] as const))('has complete metadata for %s', (_id, project) => {
    expect(project.name.trim()).not.toBe('');
    expect(project.tagline.trim()).not.toBe('');
    expect(project.description.trim()).not.toBe('');
    expect(project.version.trim()).not.toBe('');
    expect(project.platform.trim()).not.toBe('');
    expect(project.lastUpdated).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    expect(VALID_STATUSES).toContain(project.status);
    expect(VALID_STAGES).toContain(project.roadmapStage);
    expect(Number.isInteger(project.progress)).toBe(true);
    expect(project.progress).toBeGreaterThanOrEqual(0);
    expect(project.progress).toBeLessThanOrEqual(100);
    expect(project.expectedFeatures.length).toBeGreaterThan(0);
    expect(project.techStack.length).toBeGreaterThan(0);
    expect(Array.isArray(project.changelog)).toBe(true);
  });

  it('keeps every repository link on the owner account', () => {
    for (const project of projects) {
      expect(project.githubUrl).toMatch(/^https:\/\/github\.com\/Chinmay20-09\/[\w.-]+$/);
    }
  });

  it('marks exactly ViewerPal and Master Controller as archived', () => {
    const archived = projects.filter(p => p.status === 'archived' || p.roadmapStage === 'Archived');
    expect(archived.map(p => p.id).sort()).toEqual([...ARCHIVED_IDS].sort());
  });

  it('has an empty changelog for Master Controller and populated history elsewhere', () => {
    const master = projects.find(p => p.id === 'master-controller');
    expect(master?.changelog).toEqual([]);

    for (const project of projects.filter(p => p.id !== 'master-controller')) {
      expect(project.changelog.length).toBeGreaterThan(0);
    }
  });
});
