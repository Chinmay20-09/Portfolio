/* PROJECT_CHANGELOG_SOURCE.md is the single source of truth for changelog events. */
import type { ChangelogItem, Project } from '../types';

/** Commit kinds the activity feed renders; the badge styles below cover the same set. */
type ChangeType = 'feature' | 'fix' | 'refactor' | 'documentation' | 'testing' | 'maintenance';

/**
 * One recorded commit.
 *
 * A changelog entry repeats three things that are not per-commit facts: the project's
 * version label, its repository URL, and the short form of its SHA. Those are supplied
 * once per project (or derived from the SHA) instead of being transcribed onto every
 * record, and the commit link is built from the full SHA rather than hand-copied.
 */
interface CommitRecord {
  /** One or more described changes, in source order. */
  changes: string[];
  /** Full 40-character commit SHA. */
  commitSha: string;
  date: string;
  type: ChangeType;
}

function projectHistory(version: string, repositoryUrl: string, records: CommitRecord[]): ChangelogItem[] {
  return records.map(({ changes, commitSha, date, type }) => ({
    version,
    date,
    changes,
    commitSha: commitSha.slice(0, 7),
    commitUrl: `${repositoryUrl}/commit/${commitSha}`,
    type,
  }));
}

/* Per-project historical data derived from the Markdown changelog source. */
export const projectChangelogs: Record<string, ChangelogItem[]> = {
  sarthi: projectHistory('1.0.4 Hyperion', 'https://github.com/Chinmay20-09/Sarthi', [
    {
      date: '2026-09-03', type: 'maintenance', commitSha: '5c075446b980b833767abc6c546746df8d98898b',
      changes: ['Sandbox was being cleared and changes were implemented, per the latest visible default-branch commit.'],
    },
    {
      date: '2026-08-31', type: 'fix', commitSha: '54e74dcb3946079ec6ea61029b7f3c43ea37003e',
      changes: ['Bug fixes and UX improvements were committed.'],
    },
    {
      date: '2026-08-31', type: 'feature', commitSha: 'a9401178a76340752cb451a8fb0a337c600b6dbb',
      changes: ['A baseline for connectors was added.'],
    },
    {
      date: '2026-08-28', type: 'maintenance', commitSha: '381924d819851bad0c3673c2ec1d7f52e4ef9517',
      changes: ['CI and maintenance: CI pipeline fixes were committed.'],
    },
    {
      date: '2026-08-27', type: 'refactor', commitSha: '529662b7882d83f4b15b17204d2260cae6b65eb5',
      changes: [
        'Architecture and test hardening: refactoring and test-hardening changes were committed.',
        'Test hardening: test hardening changes were committed.',
      ],
    },
    {
      date: '2026-08-27', type: 'testing', commitSha: '0a66adedc971b8adc8fbe49f80b89c232c3cdaa9',
      changes: ['Test hardening: test hardening changes were committed.'],
    },
    {
      date: '2026-08-27', type: 'feature', commitSha: '7c664cce7c5368607e7f1585abea99db0e6bb93e',
      changes: ['A "System Reading" change was committed; the commit message does not describe the specifics.'],
    },
    {
      date: '2026-08-18', type: 'testing', commitSha: '8168657f516674745771298298d512b227d6ea9d',
      changes: ['Integration check: basic running passed an integration test as a developer commit note.'],
    },
    {
      date: '2026-08-16', type: 'testing', commitSha: 'febd4c4f61bb9557d90d0cd9c534af01a948e5fd',
      changes: ['NLP and memory validation: NLP and persistent-memory testing work was committed.'],
    },
    {
      date: '2026-08-16', type: 'testing', commitSha: 'eeabc718a9f5e5a6739a23112907319d4de3ddaa',
      changes: ['NLP testing: NLP testing work was committed.'],
    },
    {
      date: '2026-08-15', type: 'feature', commitSha: '55428d984c4d8d30ab04acce65a7bd67d88c5c97',
      changes: ['Local model provider: a commit records adding the local Ollama provider.'],
    },
    {
      date: '2026-08-13', type: 'maintenance', commitSha: 'd7b2f582d7aad02aa23d7fe4e358b34d666d6b20',
      changes: ['Audit and UI integration: audit commit and a change connecting the chat UI were recorded.'],
    },
    {
      date: '2026-08-13', type: 'feature', commitSha: '5eb3b819bc5fa0ace82ad270f9033a14b2bf6843',
      changes: ['UI integration: change connecting the chat UI was recorded.'],
    },
    {
      date: '2026-08-12', type: 'feature', commitSha: 'c0fa6b1b32a0ba5f3583593522300c6d06e1ef64',
      changes: ['Voice activation: wake-word function and its test runs succeeded.'],
    },
    {
      date: '2026-08-02', type: 'feature', commitSha: 'ef64cb3afe5a20dd778bc5f81ffbff334803eced',
      changes: ['Hermes provider layer: OpenRouter cloud communication support was committed.'],
    },
    {
      date: '2026-08-01', type: 'documentation', commitSha: 'd0e114f3eb22b69abe79cfc835158f2a2fedd451',
      changes: ['Browser skill: initial browser-skill structure was committed.'],
    },
    {
      date: '2026-07-28', type: 'refactor', commitSha: 'e6a90f407d004303db3895d8ede9f840f64faa62',
      changes: ['Architecture refactor: Sarthi was redesigned as a modular, evolution-driven system.'],
    },
    {
      date: '2026-07-16', type: 'feature', commitSha: '0384e7d91d526e8c7364b558b40fbdfb693708ff',
      changes: ['Voice skills and dashboard: voice skill integration and a dynamic skills dashboard were committed.'],
    },
    {
      date: '2026-07-12', type: 'feature', commitSha: '10cab7509d5f70ecd7a22cef365eacfaba78ad48',
      changes: ['UI/API wiring: connecting the UI and backend, and wiring application.json, was recorded.'],
    },
    {
      date: '2026-07-07', type: 'feature', commitSha: '438fa6ffa5065bf39170fb163b9ee4e731334bae',
      changes: ['Initial assistant core: initial structure for voice commands and entity resolution was committed.'],
    },
  ]),

  eventflow: projectHistory('Prototype', 'https://github.com/Chinmay20-09/EventFlow', [
    {
      date: '2026-09-29', type: 'testing', commitSha: 'dd2f59d4a969865abaaf09c135377fad2f4e764b',
      changes: ['Testing and structure: testing improvements and a frontend-structure update were committed.'],
    },
    {
      date: '2026-09-29', type: 'refactor', commitSha: '187192dd7684b217828fb37c4ca4a75ee6f6fcb6',
      changes: ['Frontend structure: frontend structure update was committed.'],
    },
    {
      date: '2026-09-28', type: 'feature', commitSha: '455ecf80424928b387dd565d577d3c9cc43ffb4d',
      changes: ['Frontend consolidation: work on the frontend-ideal application was committed.'],
    },
    {
      date: '2026-09-27', type: 'refactor', commitSha: 'ba7565df8c01bad1bdf1c81deec525a4b969d9db',
      changes: ['Frontend/backend integration: frontend and backend connection was committed.'],
    },
    {
      date: '2026-09-27', type: 'feature', commitSha: '72deff01ece5a33f8a58168e3d03220b5d43db45',
      changes: ['Weather integration: P1/P3 weather API connection and weather twin change were committed.'],
    },
    {
      date: '2026-09-27', type: 'feature', commitSha: '72317aeb6be45337c85fe4615b38d1d268a33b7d',
      changes: ['Weather twin: weather twin change was committed.'],
    },
    {
      date: '2026-09-26', type: 'feature', commitSha: '148092ece191d8c7576229336ffcfcf8ca8aacfc',
      changes: ['Map/live backend contracts: P4 map/live schemas and services were implemented.'],
    },
    {
      date: '2026-09-26', type: 'feature', commitSha: '9243bf96f3ed352315cf64ff147f91fd94aebba4',
      changes: [
        'Auth API: auth API work was committed.',
        'JWT v2: JWT token work was committed.',
        'DB v1: database schema and testing steps were committed.',
      ],
    },
    {
      date: '2026-09-26', type: 'feature', commitSha: 'e4727ca50f3a4b49a35d1f639b4d54c3469b0c42',
      changes: ['JWT v2: JWT token work was committed.'],
    },
    {
      date: '2026-09-26', type: 'testing', commitSha: '55dcc31435beef4db6fa4658c2589138846bbab6',
      changes: ['DB v1: database schema and testing steps were committed.'],
    },
    {
      date: '2026-09-26', type: 'feature', commitSha: '5009ed4a58b6a371d4303bebb1b24a00de5bfb65',
      changes: ['AI strategy layer: Groq integration and initial AI strategy-intelligence foundation were committed.'],
    },
    {
      date: '2026-09-26', type: 'feature', commitSha: 'e76bde83b8c78909a7c4431be0de643f3bd3d9dc',
      changes: ['Strategy foundation: initial AI strategy-intelligence foundation was committed.'],
    },
    {
      date: '2026-09-25', type: 'feature', commitSha: 'e7f08fe7d425451fc33b9a8b1b14c30b53023cba',
      changes: ['Engine/backend transport: P1/P3 runtime transport and backend integration work were committed.'],
    },
    {
      date: '2026-09-25', type: 'feature', commitSha: 'a477abe29471fe4c27c8976fd4222c4b989871e3',
      changes: ['Backend integration: backend integration work was committed.'],
    },
    {
      date: '2026-09-25', type: 'feature', commitSha: 'a82a8cf990f4390b6d358f11d75b1d2264e58b6f',
      changes: ['Crowd engine connection: crowd engine connection was committed.'],
    },
    {
      date: '2026-09-24', type: 'feature', commitSha: 'f54ca5ec5969a503aa6c00214f65fb1b75f722a7',
      changes: ['Command-center APIs and simulation checks: P4 backend integration APIs, simulation testing, and documentation gap cross-referencing were committed.'],
    },
    {
      date: '2026-09-24', type: 'testing', commitSha: '41d1265b2d29946c8a163582348ff0ff7137b0df',
      changes: ['Simulation tests: simulation testing was committed.'],
    },
    {
      date: '2026-09-22', type: 'feature', commitSha: '0e4b0d286186e16554864b8cd3d8c211bf7516aa',
      changes: ['AI Command Center UI: commit titled Complete EventFlow AI Command Center frontend.'],
    },
    {
      date: '2026-09-21', type: 'documentation', commitSha: 'a4f5d8c2de4d448550cf20675e59143c85f6321f',
      changes: ['AI strategy specifications: strategy catalog, model, priority policy, and decision-workflow documentation were added or refined.'],
    },
    {
      date: '2026-09-19', type: 'documentation', commitSha: 'f4aa643ca56a8e100e38db9214ef09d275526469',
      changes: ['Backend architecture documentation: P3 backend architecture and workflow documentation was added.'],
    },
    {
      date: '2026-09-18', type: 'feature', commitSha: 'a5080f74e9ebb4d75234e92fccad8ce8f1fa6a18',
      changes: ['Project start: initial repository commits were created.'],
    },
  ]),

  axisflow: projectHistory('MVP in progress', 'https://github.com/Chinmay20-09/AxisFlow', [
    {
      date: '2026-08-22', type: 'feature', commitSha: '9e962e90d71773c5e6aadd0d77d0763c35d3f972',
      changes: ['CSV and reliability: CSV handling was hardened and an analysis update was committed.'],
    },
    {
      date: '2026-08-06', type: 'refactor', commitSha: 'f9e1f5d6ffa7e85976c4f5e27a279038e2cc6270',
      changes: ['Refactor and hotfix: refactoring and hotfix pass was committed.'],
    },
    {
      date: '2026-08-01', type: 'refactor', commitSha: '5a3e8376267850846310be93eb1dc897bf62006f',
      changes: [
        'Architecture cleanup: multi-step refactor consolidated budget logic, shared widgets, chart components and design-system tokens.',
        'Architecture audit: audit removed dead code and duplicate entry points.',
      ],
    },
    {
      date: '2026-08-01', type: 'refactor', commitSha: '699e5713a85ec0af234a003fbd90fcd275edcb7f',
      changes: ['Budget consolidation: budget logic consolidation was committed.'],
    },
    {
      date: '2026-08-01', type: 'refactor', commitSha: 'bdf532c538f1df02b466ff13369cea7d94702e57',
      changes: ['Chart consolidation: chart components consolidation was committed.'],
    },
    {
      date: '2026-08-01', type: 'refactor', commitSha: '62607a07e6cee45f86d030dc60915e7abde01bee',
      changes: ['Design-system refactor: design-system tokens consolidation was committed.'],
    },
    {
      date: '2026-07-25', type: 'feature', commitSha: '14902aefa042e33631e0ad4b146fbf5475bde093',
      changes: ['Budget planner: daily planner UI and budget configuration were added.'],
    },
    {
      date: '2026-07-24', type: 'feature', commitSha: '240b0b9c4ef64b2867872565f5795f4ec70fac0b',
      changes: ['SMS integration: SMS integration reached an end-to-end milestone according to commit messages.'],
    },
    {
      date: '2026-07-22', type: 'feature', commitSha: '48a69b8b72792488265e09e39ddd893a3a9518e6',
      changes: [
        'Android/Flutter bridge: SMS event bridge was committed.',
        'Pipeline: transaction-processing pipeline was committed.',
        'Auto-create: automatic transaction creation was committed.',
      ],
    },
    {
      date: '2026-07-22', type: 'feature', commitSha: 'e14ca56c08f8486651bd88357ab15030960d12ec',
      changes: ['Pipeline: transaction-processing pipeline was committed.'],
    },
    {
      date: '2026-07-22', type: 'feature', commitSha: '6281855b54add97741d86b2175dd6c4c2309b0bf',
      changes: ['Auto-create: automatic transaction creation was committed.'],
    },
    {
      date: '2026-07-19', type: 'feature', commitSha: '17164b615fcdaeae9afd633fc48982b139a082bf',
      changes: ['Budget screen: budget screen was live per commit report.'],
    },
    {
      date: '2026-07-14', type: 'feature', commitSha: '8091b8b2c2f47efeae3bf6b2c7fe7c8bd9c875a2',
      changes: ['A commit marks the first closed beta build. This is repository commit history, not a verified GitHub Release.'],
    },
    {
      date: '2026-07-14', type: 'feature', commitSha: '157e4441b0030d7108fda7d643acc93a87ba4fb0',
      changes: ['Appearance settings customization was committed.'],
    },
    {
      date: '2026-06-26', type: 'feature', commitSha: 'ce86ea3c00fdeee0f6c0c92305d313343bc80b7b',
      changes: ['Supabase integration: dependencies were updated and Supabase integration was added.'],
    },
    {
      date: '2026-06-14', type: 'feature', commitSha: '38b8c0b594b3d56b6e19ed967e2f16be93945ecb',
      changes: ['Onboarding and UI: onboarding screen and UI component improvements were committed.'],
    },
    {
      date: '2026-06-02', type: 'feature', commitSha: 'eeb98a7fa1a657627c30347467b330c51eb93e00',
      changes: ['Categories and favorites: category management was refactored and transaction favorites were added.'],
    },
    {
      date: '2026-06-01', type: 'feature', commitSha: 'e8eb48dc0acc0383bf910c53f21c0788e47f95ac',
      changes: ['CSV import: CSV import with preview and validation was added.'],
    },
    {
      date: '2026-05-31', type: 'feature', commitSha: '3794607e022ff6a2a3bd728d8895b8a53e62c748',
      changes: ['CSV export and responsive UI: CSV export was implemented, and a separate commit records an overflow fix.'],
    },
    {
      date: '2026-05-29', type: 'feature', commitSha: '13c60795aeae5d475ebe4dd1dc61b3ea22bdd226',
      changes: ['Chart data: charts were connected to flexible data instead of hard-coded values.'],
    },
    {
      date: '2026-05-15', type: 'feature', commitSha: 'c85f7b33f5965d06cb65fe0bdca66f62b3a7e7f4',
      changes: ['Responsive transaction entry: add-transaction sheet was made more flexible across screen sizes.'],
    },
    {
      date: '2026-05-11', type: 'feature', commitSha: '8d695f6bdd99b20105af22060a0fd32e234c6f0a',
      changes: ['Early beta groundwork: early beta app work was committed.'],
    },
  ]),

  viewerpal: projectHistory('MVP', 'https://github.com/Chinmay20-09/viewerpal', [
    {
      date: '2026-09-24', type: 'documentation', commitSha: '38bbfff5ac58fb4f1b064b68277ac870ba69ac0a',
      changes: ['Audit and UX: audit work and a UX refinement were committed.'],
    },
    {
      date: '2026-09-24', type: 'feature', commitSha: '91219b170e4b56b1e68c6832492404261af3e7b9',
      changes: ['UX refinement: UX refinement was committed.'],
    },
    {
      date: '2026-09-23', type: 'feature', commitSha: 'c8a388686d0a7d818446e868fc20f3cbfa2c0fcf',
      changes: ['Presentation documents: a commit titled add PPTX text editing and Save As. Verify current code and README before advertising PPTX editing as supported.'],
    },
    {
      date: '2026-09-23', type: 'feature', commitSha: '813df8e6f64cb50fb9505fe4a2ff236ad8b8181c',
      changes: ['PDF tooling: PDF overlay-editor feature was committed. Confirm its current scope and limitations before wording it as a user-facing capability.'],
    },
    {
      date: '2026-09-21', type: 'feature', commitSha: 'b310167c09ceac5ff2f1e50ca2ef1aec85f46b21',
      changes: ['Initial implementation: basic document-environment functionality was committed.'],
    },
  ]),

  deskbuddy: projectHistory('In development', 'https://github.com/Chinmay20-09/Deskbuddy', [
    {
      date: '2026-08-09', type: 'refactor', commitSha: '00728badf108645441a98b567e85c07a0c42930a',
      changes: ['Codebase migration: codebase was migrated toward a production-oriented structure.'],
    },
    {
      date: '2026-05-16', type: 'maintenance', commitSha: '0c16b583b5865c03b6027a19aa270c5c49401964',
      changes: ['A commit message says v0.1 was ready and stable. No GitHub Release or tag was verified for it.'],
    },
    {
      date: '2026-05-13', type: 'maintenance', commitSha: '21ed53ff5acbf49dd727c1c1d661adedd4a9144c',
      changes: ['MVP deployment groundwork was committed, followed by a protection change.'],
    },
    {
      date: '2026-05-13', type: 'maintenance', commitSha: 'e2b0da9b98044951bcfa32bbe1be72f42a44c6a8',
      changes: ['A follow-up protection change was recorded.'],
    },
  ]),

  'lakshman-rekha': projectHistory('Prototype', 'https://github.com/Chinmay20-09/Lakshman-rekha', [
    {
      date: '2026-03-01', type: 'feature', commitSha: '3d2258b8fda4952c55b3e0102be689cd646f301b',
      changes: ['Repository created: initial commit. There is only one visible commit, so no richer changelog can be substantiated.'],
    },
  ]),

  'astral-monitor': projectHistory('v1.1.0', 'https://github.com/Chinmay20-09/Astral-Monitor', [
    {
      date: '2026-10-06', type: 'feature', commitSha: 'eb4bd35aca0af5eb1f542ad73bddaada9c329acf',
      changes: ['UI refinement: UI-fixing change was committed.'],
    },
    {
      date: '2026-10-06', type: 'maintenance', commitSha: '41e20212b4193d03125f70894b548b026aed5ced',
      changes: ['Service configuration: a port-change commit was recorded.'],
    },
    {
      date: '2026-10-06', type: 'documentation', commitSha: 'd93fc0111bbf9f3c1b33e631d285482fcc909d7f',
      changes: ['Team documentation: documentation for team workflow was committed.'],
    },
    {
      date: '2026-10-06', type: 'testing', commitSha: '5b91523f87a1f228c0ee3ac00dc00f5a74adae91',
      changes: ['Pre-test checkpoint: P0 pre-test checkpoint was committed.'],
    },
    {
      date: '2026-10-05', type: 'feature', commitSha: 'bd13a0af897d3b1e4986740f4a89f9ae747d288d',
      changes: ['Requirements alignment: prerequisite alignment was recorded.'],
    },
    {
      date: '2026-10-05', type: 'feature', commitSha: 'c61c973ccbe877c53f726267344a2404f74dbcac',
      changes: ['Initial project start: initial project commit was recorded.'],
    },
  ]),
};

export interface ChangeTypeStyle {
  nodeClass: string;
  badgeClass: string;
  badgeText: string;
}

const changeTypeStyles: Record<string, ChangeTypeStyle> = {
  feature: { nodeClass: 'node-feature', badgeClass: 'badge-feature', badgeText: 'Feature' },
  fix: { nodeClass: 'node-fix', badgeClass: 'badge-fix', badgeText: 'Fix' },
  refactor: { nodeClass: 'node-refactor', badgeClass: 'badge-refactor', badgeText: 'Refactor' },
  documentation: { nodeClass: 'node-documentation', badgeClass: 'badge-documentation', badgeText: 'Docs' },
  testing: { nodeClass: 'node-testing', badgeClass: 'badge-testing', badgeText: 'Testing' },
  release: { nodeClass: 'node-release', badgeClass: 'badge-release', badgeText: 'Release' },
  maintenance: { nodeClass: 'node-maintenance', badgeClass: 'badge-maintenance', badgeText: 'Maintenance' },
};

export function getChangeTypeStyle(type: string | undefined): ChangeTypeStyle {
  return (type && changeTypeStyles[type]) || changeTypeStyles.feature;
}

function isNonEmptyChangeField(entry: ChangelogItem, field: 'added' | 'improved' | 'fixed' | 'changes'): string[] {
  const value = entry[field];
  return Array.isArray(value) && value.length > 0 ? value : [];
}

export interface ChangelogEvent {
  eventKey: string;
  projectId: string;
  projectName: string;
  slug: string;
  version: string;
  date: string;
  changes: string[];
  changeType: string;
  summary: string;
  details: string[];
  commitSha?: string;
  commitUrl?: string;
}

function buildChangelogEvent(
  project: Pick<Project, 'id' | 'name' | 'slug'>,
  entry: ChangelogItem,
  index: number,
): ChangelogEvent {
  const changes = [
    ...isNonEmptyChangeField(entry, 'added'),
    ...isNonEmptyChangeField(entry, 'improved'),
    ...isNonEmptyChangeField(entry, 'fixed'),
  ];
  if (changes.length === 0) {
    changes.push(...isNonEmptyChangeField(entry, 'changes'));
  }
  if (changes.length === 0) {
    changes.push('Maintenance and stability updates.');
  }

  const summary = changes.length === 1 ? changes[0] : changes.slice(0, 2).join('  •  ');

  return {
    eventKey: entry.commitSha || `${project.id}-${index}`,
    changeType: entry.type || 'maintenance',
    summary,
    details: changes,
    projectId: project.id,
    projectName: project.name,
    slug: project.slug,
    version: entry.version,
    date: entry.date,
    changes: changes,

    commitSha: entry.commitSha,
    commitUrl: entry.commitUrl,
  };
}

export function buildGlobalActivityEvents(projectsData: Project[]): ChangelogEvent[] {
  const events: ChangelogEvent[] = [];
  const seen = new Set<string>();

  for (const project of projectsData) {
    const entries = projectChangelogs[project.id];
    if (!entries || entries.length === 0) continue;
    // Only show the most recent (first) commit per project in the global feed
    const entry = entries[0];
    const key = `${project.id}:${entry.commitUrl || entry.commitSha || 0}`;
    if (seen.has(key)) continue;
    seen.add(key);
    events.push(buildChangelogEvent(project, entry, 0));
  }

  // Newest first. Unparseable dates sort last instead of producing NaN ordering.
  events.sort((a, b) => {
    const aTime = Date.parse(a.date);
    const bTime = Date.parse(b.date);
    if (Number.isNaN(aTime) && Number.isNaN(bTime)) return 0;
    if (Number.isNaN(aTime)) return 1;
    if (Number.isNaN(bTime)) return -1;
    return bTime - aTime;
  });

  return events;
}
