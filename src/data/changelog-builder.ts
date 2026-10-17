/* PROJECT_CHANGELOG_SOURCE.md is the single source of truth for changelog events. */
import type { ChangelogItem, Project } from '../types';

/* Per-project historical data derived from the Markdown changelog source. */
export const projectChangelogs: Record<string, ChangelogItem[]> = {
  sarthi: [
    {
      version: '1.0.4 Hyperion',
      date: '2026-09-03',
      changes: [
        'Sandbox was being cleared and changes were implemented, per the latest visible default-branch commit.',
      ],
      commitSha: '5c07544',
      commitUrl: 'https://github.com/Chinmay20-09/Sarthi/commit/5c075446b980b833767abc6c546746df8d98898b',
      type: 'maintenance',
    },
    {
      version: '1.0.4 Hyperion',
      date: '2026-08-31',
      changes: [
        'Bug fixes and UX improvements were committed.',
      ],
      commitSha: '54e74dc',
      commitUrl: 'https://github.com/Chinmay20-09/Sarthi/commit/54e74dcb3946079ec6ea61029b7f3c43ea37003e',
      type: 'fix',
    },
    {
      version: '1.0.4 Hyperion',
      date: '2026-08-31',
      changes: [
        'A baseline for connectors was added.',
      ],
      commitSha: 'a940117',
      commitUrl: 'https://github.com/Chinmay20-09/Sarthi/commit/a9401178a76340752cb451a8fb0a337c600b6dbb',
      type: 'feature',
    },
    {
      version: '1.0.4 Hyperion',
      date: '2026-08-28',
      changes: [
        'CI and maintenance: CI pipeline fixes were committed.',
      ],
      commitSha: '381924d',
      commitUrl: 'https://github.com/Chinmay20-09/Sarthi/commit/381924d819851bad0c3673c2ec1d7f52e4ef9517',
      type: 'maintenance',
    },
    {
      version: '1.0.4 Hyperion',
      date: '2026-08-27',
      changes: [
        'Architecture and test hardening: refactoring and test-hardening changes were committed.',
        'Test hardening: test hardening changes were committed.',
      ],
      commitSha: '529662b',
      commitUrl: 'https://github.com/Chinmay20-09/Sarthi/commit/529662b7882d83f4b15b17204d2260cae6b65eb5',
      type: 'refactor',
    },
    {
      version: '1.0.4 Hyperion',
      date: '2026-08-27',
      changes: [
        'Test hardening: test hardening changes were committed.',
      ],
      commitSha: '0a66ade',
      commitUrl: 'https://github.com/Chinmay20-09/Sarthi/commit/0a66adedc971b8adc8fbe49f80b89c232c3cdaa9',
      type: 'testing',
    },
    {
      version: '1.0.4 Hyperion',
      date: '2026-08-27',
      changes: [
        'A "System Reading" change was committed; the commit message does not describe the specifics.',
      ],
      commitSha: '7c664cc',
      commitUrl: 'https://github.com/Chinmay20-09/Sarthi/commit/7c664cce7c5368607e7f1585abea99db0e6bb93e',
      type: 'feature',
    },
    {
      version: '1.0.4 Hyperion',
      date: '2026-08-18',
      changes: [
        'Integration check: basic running passed an integration test as a developer commit note.',
      ],
      commitSha: '8168657',
      commitUrl: 'https://github.com/Chinmay20-09/Sarthi/commit/8168657f516674745771298298d512b227d6ea9d',
      type: 'testing',
    },
    {
      version: '1.0.4 Hyperion',
      date: '2026-08-16',
      changes: [
        'NLP and memory validation: NLP and persistent-memory testing work was committed.',
      ],
      commitSha: 'febd4c4',
      commitUrl: 'https://github.com/Chinmay20-09/Sarthi/commit/febd4c4f61bb9557d90d0cd9c534af01a948e5fd',
      type: 'testing',
    },
    {
      version: '1.0.4 Hyperion',
      date: '2026-08-16',
      changes: [
        'NLP testing: NLP testing work was committed.',
      ],
      commitSha: 'eeabc71',
      commitUrl: 'https://github.com/Chinmay20-09/Sarthi/commit/eeabc718a9f5e5a6739a23112907319d4de3ddaa',
      type: 'testing',
    },
    {
      version: '1.0.4 Hyperion',
      date: '2026-08-15',
      changes: [
        'Local model provider: a commit records adding the local Ollama provider.',
      ],
      commitSha: '55428d9',
      commitUrl: 'https://github.com/Chinmay20-09/Sarthi/commit/55428d984c4d8d30ab04acce65a7bd67d88c5c97',
      type: 'feature',
    },
    {
      version: '1.0.4 Hyperion',
      date: '2026-08-13',
      changes: [
        'Audit and UI integration: audit commit and a change connecting the chat UI were recorded.',
      ],
      commitSha: 'd7b2f58',
      commitUrl: 'https://github.com/Chinmay20-09/Sarthi/commit/d7b2f582d7aad02aa23d7fe4e358b34d666d6b20',
      type: 'maintenance',
    },
    {
      version: '1.0.4 Hyperion',
      date: '2026-08-13',
      changes: [
        'UI integration: change connecting the chat UI was recorded.',
      ],
      commitSha: '5eb3b81',
      commitUrl: 'https://github.com/Chinmay20-09/Sarthi/commit/5eb3b819bc5fa0ace82ad270f9033a14b2bf6843',
      type: 'feature',
    },
    {
      version: '1.0.4 Hyperion',
      date: '2026-08-12',
      changes: [
        'Voice activation: wake-word function and its test runs succeeded.',
      ],
      commitSha: 'c0fa6b1',
      commitUrl: 'https://github.com/Chinmay20-09/Sarthi/commit/c0fa6b1b32a0ba5f3583593522300c6d06e1ef64',
      type: 'feature',
    },
    {
      version: '1.0.4 Hyperion',
      date: '2026-08-02',
      changes: [
        'Hermes provider layer: OpenRouter cloud communication support was committed.',
      ],
      commitSha: 'ef64cb3',
      commitUrl: 'https://github.com/Chinmay20-09/Sarthi/commit/ef64cb3afe5a20dd778bc5f81ffbff334803eced',
      type: 'feature',
    },
    {
      version: '1.0.4 Hyperion',
      date: '2026-08-01',
      changes: [
        'Browser skill: initial browser-skill structure was committed.',
      ],
      commitSha: 'd0e114f',
      commitUrl: 'https://github.com/Chinmay20-09/Sarthi/commit/d0e114f3eb22b69abe79cfc835158f2a2fedd451',
      type: 'documentation',
    },
    {
      version: '1.0.4 Hyperion',
      date: '2026-07-28',
      changes: [
        'Architecture refactor: Sarthi was redesigned as a modular, evolution-driven system.',
      ],
      commitSha: 'e6a90f4',
      commitUrl: 'https://github.com/Chinmay20-09/Sarthi/commit/e6a90f407d004303db3895d8ede9f840f64faa62',
      type: 'refactor',
    },
    {
      version: '1.0.4 Hyperion',
      date: '2026-07-16',
      changes: [
        'Voice skills and dashboard: voice skill integration and a dynamic skills dashboard were committed.',
      ],
      commitSha: '0384e7d',
      commitUrl: 'https://github.com/Chinmay20-09/Sarthi/commit/0384e7d91d526e8c7364b558b40fbdfb693708ff',
      type: 'feature',
    },
    {
      version: '1.0.4 Hyperion',
      date: '2026-07-12',
      changes: [
        'UI/API wiring: connecting the UI and backend, and wiring application.json, was recorded.',
      ],
      commitSha: '10cab75',
      commitUrl: 'https://github.com/Chinmay20-09/Sarthi/commit/10cab7509d5f70ecd7a22cef365eacfaba78ad48',
      type: 'feature',
    },
    {
      version: '1.0.4 Hyperion',
      date: '2026-07-07',
      changes: [
        'Initial assistant core: initial structure for voice commands and entity resolution was committed.',
      ],
      commitSha: '438fa6f',
      commitUrl: 'https://github.com/Chinmay20-09/Sarthi/commit/438fa6ffa5065bf39170fb163b9ee4e731334bae',
      type: 'feature',
    },
  ],

  eventflow: [
    {
      version: 'Prototype',
      date: '2026-09-29',
      changes: [
        'Testing and structure: testing improvements and a frontend-structure update were committed.',
      ],
      commitSha: 'dd2f59d',
      commitUrl: 'https://github.com/Chinmay20-09/EventFlow/commit/dd2f59d4a969865abaaf09c135377fad2f4e764b',
      type: 'testing',
    },
    {
      version: 'Prototype',
      date: '2026-09-29',
      changes: [
        'Frontend structure: frontend structure update was committed.',
      ],
      commitSha: '187192d',
      commitUrl: 'https://github.com/Chinmay20-09/EventFlow/commit/187192dd7684b217828fb37c4ca4a75ee6f6fcb6',
      type: 'refactor',
    },
    {
      version: 'Prototype',
      date: '2026-09-28',
      changes: [
        'Frontend consolidation: work on the frontend-ideal application was committed.',
      ],
      commitSha: '455ecf8',
      commitUrl: 'https://github.com/Chinmay20-09/EventFlow/commit/455ecf80424928b387dd565d577d3c9cc43ffb4d',
      type: 'feature',
    },
    {
      version: 'Prototype',
      date: '2026-09-27',
      changes: [
        'Frontend/backend integration: frontend and backend connection was committed.',
      ],
      commitSha: 'ba7565d',
      commitUrl: 'https://github.com/Chinmay20-09/EventFlow/commit/ba7565df8c01bad1bdf1c81deec525a4b969d9db',
      type: 'refactor',
    },
    {
      version: 'Prototype',
      date: '2026-09-27',
      changes: [
        'Weather integration: P1/P3 weather API connection and weather twin change were committed.',
      ],
      commitSha: '72deff0',
      commitUrl: 'https://github.com/Chinmay20-09/EventFlow/commit/72deff01ece5a33f8a58168e3d03220b5d43db45',
      type: 'feature',
    },
    {
      version: 'Prototype',
      date: '2026-09-27',
      changes: [
        'Weather twin: weather twin change was committed.',
      ],
      commitSha: '72317ae',
      commitUrl: 'https://github.com/Chinmay20-09/EventFlow/commit/72317aeb6be45337c85fe4615b38d1d268a33b7d',
      type: 'feature',
    },
    {
      version: 'Prototype',
      date: '2026-09-26',
      changes: [
        'Map/live backend contracts: P4 map/live schemas and services were implemented.',
      ],
      commitSha: '148092e',
      commitUrl: 'https://github.com/Chinmay20-09/EventFlow/commit/148092ece191d8c7576229336ffcfcf8ca8aacfc',
      type: 'feature',
    },
    {
      version: 'Prototype',
      date: '2026-09-26',
      changes: [
        'Auth API: auth API work was committed.',
        'JWT v2: JWT token work was committed.',
        'DB v1: database schema and testing steps were committed.',
      ],
      commitSha: '9243bf9',
      commitUrl: 'https://github.com/Chinmay20-09/EventFlow/commit/9243bf96f3ed352315cf64ff147f91fd94aebba4',
      type: 'feature',
    },
    {
      version: 'Prototype',
      date: '2026-09-26',
      changes: [
        'JWT v2: JWT token work was committed.',
      ],
      commitSha: 'e4727ca',
      commitUrl: 'https://github.com/Chinmay20-09/EventFlow/commit/e4727ca50f3a4b49a35d1f639b4d54c3469b0c42',
      type: 'feature',
    },
    {
      version: 'Prototype',
      date: '2026-09-26',
      changes: [
        'DB v1: database schema and testing steps were committed.',
      ],
      commitSha: '55dcc31',
      commitUrl: 'https://github.com/Chinmay20-09/EventFlow/commit/55dcc31435beef4db6fa4658c2589138846bbab6',
      type: 'testing',
    },
    {
      version: 'Prototype',
      date: '2026-09-26',
      changes: [
        'AI strategy layer: Groq integration and initial AI strategy-intelligence foundation were committed.',
      ],
      commitSha: '5009ed4',
      commitUrl: 'https://github.com/Chinmay20-09/EventFlow/commit/5009ed4a58b6a371d4303bebb1b24a00de5bfb65',
      type: 'feature',
    },
    {
      version: 'Prototype',
      date: '2026-09-26',
      changes: [
        'Strategy foundation: initial AI strategy-intelligence foundation was committed.',
      ],
      commitSha: 'e76bde8',
      commitUrl: 'https://github.com/Chinmay20-09/EventFlow/commit/e76bde83b8c78909a7c4431be0de643f3bd3d9dc',
      type: 'feature',
    },
    {
      version: 'Prototype',
      date: '2026-09-25',
      changes: [
        'Engine/backend transport: P1/P3 runtime transport and backend integration work were committed.',
      ],
      commitSha: 'e7f08fe',
      commitUrl: 'https://github.com/Chinmay20-09/EventFlow/commit/e7f08fe7d425451fc33b9a8b1b14c30b53023cba',
      type: 'feature',
    },
    {
      version: 'Prototype',
      date: '2026-09-25',
      changes: [
        'Backend integration: backend integration work was committed.',
      ],
      commitSha: 'a477abe',
      commitUrl: 'https://github.com/Chinmay20-09/EventFlow/commit/a477abe29471fe4c27c8976fd4222c4b989871e3',
      type: 'feature',
    },
    {
      version: 'Prototype',
      date: '2026-09-25',
      changes: [
        'Crowd engine connection: crowd engine connection was committed.',
      ],
      commitSha: 'a82a8cf',
      commitUrl: 'https://github.com/Chinmay20-09/EventFlow/commit/a82a8cf990f4390b6d358f11d75b1d2264e58b6f',
      type: 'feature',
    },
    {
      version: 'Prototype',
      date: '2026-09-24',
      changes: [
        'Command-center APIs and simulation checks: P4 backend integration APIs, simulation testing, and documentation gap cross-referencing were committed.',
      ],
      commitSha: 'f54ca5e',
      commitUrl: 'https://github.com/Chinmay20-09/EventFlow/commit/f54ca5ec5969a503aa6c00214f65fb1b75f722a7',
      type: 'feature',
    },
    {
      version: 'Prototype',
      date: '2026-09-24',
      changes: [
        'Simulation tests: simulation testing was committed.',
      ],
      commitSha: '41d1265',
      commitUrl: 'https://github.com/Chinmay20-09/EventFlow/commit/41d1265b2d29946c8a163582348ff0ff7137b0df',
      type: 'testing',
    },
    {
      version: 'Prototype',
      date: '2026-09-22',
      changes: [
        'AI Command Center UI: commit titled Complete EventFlow AI Command Center frontend.',
      ],
      commitSha: '0e4b0d2',
      commitUrl: 'https://github.com/Chinmay20-09/EventFlow/commit/0e4b0d286186e16554864b8cd3d8c211bf7516aa',
      type: 'feature',
    },
    {
      version: 'Prototype',
      date: '2026-09-21',
      changes: [
        'AI strategy specifications: strategy catalog, model, priority policy, and decision-workflow documentation were added or refined.',
      ],
      commitSha: 'a4f5d8c',
      commitUrl: 'https://github.com/Chinmay20-09/EventFlow/commit/a4f5d8c2de4d448550cf20675e59143c85f6321f',
      type: 'documentation',
    },
    {
      version: 'Prototype',
      date: '2026-09-19',
      changes: [
        'Backend architecture documentation: P3 backend architecture and workflow documentation was added.',
      ],
      commitSha: 'f4aa643',
      commitUrl: 'https://github.com/Chinmay20-09/EventFlow/commit/f4aa643ca56a8e100e38db9214ef09d275526469',
      type: 'documentation',
    },
    {
      version: 'Prototype',
      date: '2026-09-18',
      changes: [
        'Project start: initial repository commits were created.',
      ],
      commitSha: 'a5080f7',
      commitUrl: 'https://github.com/Chinmay20-09/EventFlow/commit/a5080f74e9ebb4d75234e92fccad8ce8f1fa6a18',
      type: 'feature',
    },
  ],

  axisflow: [
    {
      version: 'MVP in progress',
      date: '2026-08-22',
      changes: [
        'CSV and reliability: CSV handling was hardened and an analysis update was committed.',
      ],
      commitSha: '9e962e9',
      commitUrl: 'https://github.com/Chinmay20-09/AxisFlow/commit/9e962e90d71773c5e6aadd0d77d0763c35d3f972',
      type: 'feature',
    },
    {
      version: 'MVP in progress',
      date: '2026-08-06',
      changes: [
        'Refactor and hotfix: refactoring and hotfix pass was committed.',
      ],
      commitSha: 'f9e1f5d',
      commitUrl: 'https://github.com/Chinmay20-09/AxisFlow/commit/f9e1f5d6ffa7e85976c4f5e27a279038e2cc6270',
      type: 'refactor',
    },
    {
      version: 'MVP in progress',
      date: '2026-08-01',
      changes: [
        'Architecture cleanup: multi-step refactor consolidated budget logic, shared widgets, chart components and design-system tokens.',
        'Architecture audit: audit removed dead code and duplicate entry points.',
      ],
      commitSha: '5a3e837',
      commitUrl: 'https://github.com/Chinmay20-09/AxisFlow/commit/5a3e8376267850846310be93eb1dc897bf62006f',
      type: 'refactor',
    },
    {
      version: 'MVP in progress',
      date: '2026-08-01',
      changes: [
        'Budget consolidation: budget logic consolidation was committed.',
      ],
      commitSha: '699e571',
      commitUrl: 'https://github.com/Chinmay20-09/AxisFlow/commit/699e5713a85ec0af234a003fbd90fcd275edcb7f',
      type: 'refactor',
    },
    {
      version: 'MVP in progress',
      date: '2026-08-01',
      changes: [
        'Chart consolidation: chart components consolidation was committed.',
      ],
      commitSha: 'bdf532c',
      commitUrl: 'https://github.com/Chinmay20-09/AxisFlow/commit/bdf532c538f1df02b466ff13369cea7d94702e57',
      type: 'refactor',
    },
    {
      version: 'MVP in progress',
      date: '2026-08-01',
      changes: [
        'Design-system refactor: design-system tokens consolidation was committed.',
      ],
      commitSha: '62607a0',
      commitUrl: 'https://github.com/Chinmay20-09/AxisFlow/commit/62607a07e6cee45f86d030dc60915e7abde01bee',
      type: 'refactor',
    },
    {
      version: 'MVP in progress',
      date: '2026-07-25',
      changes: [
        'Budget planner: daily planner UI and budget configuration were added.',
      ],
      commitSha: '14902ae',
      commitUrl: 'https://github.com/Chinmay20-09/AxisFlow/commit/14902aefa042e33631e0ad4b146fbf5475bde093',
      type: 'feature',
    },
    {
      version: 'MVP in progress',
      date: '2026-07-24',
      changes: [
        'SMS integration: SMS integration reached an end-to-end milestone according to commit messages.',
      ],
      commitSha: '240b0b9',
      commitUrl: 'https://github.com/Chinmay20-09/AxisFlow/commit/240b0b9c4ef64b2867872565f5795f4ec70fac0b',
      type: 'feature',
    },
    {
      version: 'MVP in progress',
      date: '2026-07-22',
      changes: [
        'Android/Flutter bridge: SMS event bridge was committed.',
        'Pipeline: transaction-processing pipeline was committed.',
        'Auto-create: automatic transaction creation was committed.',
      ],
      commitSha: '48a69b8',
      commitUrl: 'https://github.com/Chinmay20-09/AxisFlow/commit/48a69b8b72792488265e09e39ddd893a3a9518e6',
      type: 'feature',
    },
    {
      version: 'MVP in progress',
      date: '2026-07-22',
      changes: [
        'Pipeline: transaction-processing pipeline was committed.',
      ],
      commitSha: 'e14ca56',
      commitUrl: 'https://github.com/Chinmay20-09/AxisFlow/commit/e14ca56c08f8486651bd88357ab15030960d12ec',
      type: 'feature',
    },
    {
      version: 'MVP in progress',
      date: '2026-07-22',
      changes: [
        'Auto-create: automatic transaction creation was committed.',
      ],
      commitSha: '6281855',
      commitUrl: 'https://github.com/Chinmay20-09/AxisFlow/commit/6281855b54add97741d86b2175dd6c4c2309b0bf',
      type: 'feature',
    },
    {
      version: 'MVP in progress',
      date: '2026-07-19',
      changes: [
        'Budget screen: budget screen was live per commit report.',
      ],
      commitSha: '17164b6',
      commitUrl: 'https://github.com/Chinmay20-09/AxisFlow/commit/17164b615fcdaeae9afd633fc48982b139a082bf',
      type: 'feature',
    },
    {
      version: 'MVP in progress',
      date: '2026-07-14',
      changes: [
        'A commit marks the first closed beta build. This is repository commit history, not a verified GitHub Release.',
      ],
      commitSha: '8091b8b',
      commitUrl: 'https://github.com/Chinmay20-09/AxisFlow/commit/8091b8b2c2f47efeae3bf6b2c7fe7c8bd9c875a2',
      type: 'feature',
    },
    {
      version: 'MVP in progress',
      date: '2026-07-14',
      changes: [
        'Appearance settings customization was committed.',
      ],
      commitSha: '157e444',
      commitUrl: 'https://github.com/Chinmay20-09/AxisFlow/commit/157e4441b0030d7108fda7d643acc93a87ba4fb0',
      type: 'feature',
    },
    {
      version: 'MVP in progress',
      date: '2026-06-26',
      changes: [
        'Supabase integration: dependencies were updated and Supabase integration was added.',
      ],
      commitSha: 'ce86ea3',
      commitUrl: 'https://github.com/Chinmay20-09/AxisFlow/commit/ce86ea3c00fdeee0f6c0c92305d313343bc80b7b',
      type: 'feature',
    },
    {
      version: 'MVP in progress',
      date: '2026-06-14',
      changes: [
        'Onboarding and UI: onboarding screen and UI component improvements were committed.',
      ],
      commitSha: '38b8c0b',
      commitUrl: 'https://github.com/Chinmay20-09/AxisFlow/commit/38b8c0b594b3d56b6e19ed967e2f16be93945ecb',
      type: 'feature',
    },
    {
      version: 'MVP in progress',
      date: '2026-06-02',
      changes: [
        'Categories and favorites: category management was refactored and transaction favorites were added.',
      ],
      commitSha: 'eeb98a7',
      commitUrl: 'https://github.com/Chinmay20-09/AxisFlow/commit/eeb98a7fa1a657627c30347467b330c51eb93e00',
      type: 'feature',
    },
    {
      version: 'MVP in progress',
      date: '2026-06-01',
      changes: [
        'CSV import: CSV import with preview and validation was added.',
      ],
      commitSha: 'e8eb48d',
      commitUrl: 'https://github.com/Chinmay20-09/AxisFlow/commit/e8eb48dc0acc0383bf910c53f21c0788e47f95ac',
      type: 'feature',
    },
    {
      version: 'MVP in progress',
      date: '2026-05-31',
      changes: [
        'CSV export and responsive UI: CSV export was implemented, and a separate commit records an overflow fix.',
      ],
      commitSha: '3794607',
      commitUrl: 'https://github.com/Chinmay20-09/AxisFlow/commit/3794607e022ff6a2a3bd728d8895b8a53e62c748',
      type: 'feature',
    },
    {
      version: 'MVP in progress',
      date: '2026-05-29',
      changes: [
        'Chart data: charts were connected to flexible data instead of hard-coded values.',
      ],
      commitSha: '13c6079',
      commitUrl: 'https://github.com/Chinmay20-09/AxisFlow/commit/13c60795aeae5d475ebe4dd1dc61b3ea22bdd226',
      type: 'feature',
    },
    {
      version: 'MVP in progress',
      date: '2026-05-15',
      changes: [
        'Responsive transaction entry: add-transaction sheet was made more flexible across screen sizes.',
      ],
      commitSha: 'c85f7b3',
      commitUrl: 'https://github.com/Chinmay20-09/AxisFlow/commit/c85f7b33f5965d06cb65fe0bdca66f62b3a7e7f4',
      type: 'feature',
    },
    {
      version: 'MVP in progress',
      date: '2026-05-11',
      changes: [
        'Early beta groundwork: early beta app work was committed.',
      ],
      commitSha: '8d695f6',
      commitUrl: 'https://github.com/Chinmay20-09/AxisFlow/commit/8d695f6bdd99b20105af22060a0fd32e234c6f0a',
      type: 'feature',
    },
  ],

  viewerpal: [
    {
      version: 'MVP',
      date: '2026-09-24',
      changes: [
        'Audit and UX: audit work and a UX refinement were committed.',
      ],
      commitSha: '38bbfff',
      commitUrl: 'https://github.com/Chinmay20-09/viewerpal/commit/38bbfff5ac58fb4f1b064b68277ac870ba69ac0a',
      type: 'documentation',
    },
    {
      version: 'MVP',
      date: '2026-09-24',
      changes: [
        'UX refinement: UX refinement was committed.',
      ],
      commitSha: '91219b1',
      commitUrl: 'https://github.com/Chinmay20-09/viewerpal/commit/91219b170e4b56b1e68c6832492404261af3e7b9',
      type: 'feature',
    },
    {
      version: 'MVP',
      date: '2026-09-23',
      changes: [
        'Presentation documents: a commit titled add PPTX text editing and Save As. Verify current code and README before advertising PPTX editing as supported.',
      ],
      commitSha: 'c8a3886',
      commitUrl: 'https://github.com/Chinmay20-09/viewerpal/commit/c8a388686d0a7d818446e868fc20f3cbfa2c0fcf',
      type: 'feature',
    },
    {
      version: 'MVP',
      date: '2026-09-23',
      changes: [
        'PDF tooling: PDF overlay-editor feature was committed. Confirm its current scope and limitations before wording it as a user-facing capability.',
      ],
      commitSha: '813df8e',
      commitUrl: 'https://github.com/Chinmay20-09/viewerpal/commit/813df8e6f64cb50fb9505fe4a2ff236ad8b8181c',
      type: 'feature',
    },
    {
      version: 'MVP',
      date: '2026-09-21',
      changes: [
        'Initial implementation: basic document-environment functionality was committed.',
      ],
      commitSha: 'b310167',
      commitUrl: 'https://github.com/Chinmay20-09/viewerpal/commit/b310167c09ceac5ff2f1e50ca2ef1aec85f46b21',
      type: 'feature',
    },
  ],

  deskbuddy: [
    {
      version: 'In development',
      date: '2026-08-09',
      changes: [
        'Codebase migration: codebase was migrated toward a production-oriented structure.',
      ],
      commitSha: '00728ba',
      commitUrl: 'https://github.com/Chinmay20-09/Deskbuddy/commit/00728badf108645441a98b567e85c07a0c42930a',
      type: 'refactor',
    },
    {
      version: 'In development',
      date: '2026-05-16',
      changes: [
        'A commit message says v0.1 was ready and stable. No GitHub Release or tag was verified for it.',
      ],
      commitSha: '0c16b58',
      commitUrl: 'https://github.com/Chinmay20-09/Deskbuddy/commit/0c16b583b5865c03b6027a19aa270c5c49401964',
      type: 'maintenance',
    },
    {
      version: 'In development',
      date: '2026-05-13',
      changes: [
        'MVP deployment groundwork was committed, followed by a protection change.',
      ],
      commitSha: '21ed53f',
      commitUrl: 'https://github.com/Chinmay20-09/Deskbuddy/commit/21ed53ff5acbf49dd727c1c1d661adedd4a9144c',
      type: 'maintenance',
    },
    {
      version: 'In development',
      date: '2026-05-13',
      changes: [
        'A follow-up protection change was recorded.',
      ],
      commitSha: 'e2b0da9',
      commitUrl: 'https://github.com/Chinmay20-09/Deskbuddy/commit/e2b0da9b98044951bcfa32bbe1be72f42a44c6a8',
      type: 'maintenance',
    },
  ],

  'lakshman-rekha': [
    {
      version: 'Prototype',
      date: '2026-03-01',
      changes: [
        'Repository created: initial commit. There is only one visible commit, so no richer changelog can be substantiated.',
      ],
      commitSha: '3d2258b',
      commitUrl: 'https://github.com/Chinmay20-09/Lakshman-rekha/commit/3d2258b8fda4952c55b3e0102be689cd646f301b',
      type: 'feature',
    },
  ],

  'astral-monitor': [
    {
      version: 'v1.1.0',
      date: '2026-10-06',
      changes: [
        'UI refinement: UI-fixing change was committed.',
      ],
      commitSha: 'eb4bd35',
      commitUrl: 'https://github.com/Chinmay20-09/Astral-Monitor/commit/eb4bd35aca0af5eb1f542ad73bddaada9c329acf',
      type: 'feature',
    },
    {
      version: 'v1.1.0',
      date: '2026-10-06',
      changes: [
        'Service configuration: a port-change commit was recorded.',
      ],
      commitSha: '41e2021',
      commitUrl: 'https://github.com/Chinmay20-09/Astral-Monitor/commit/41e20212b4193d03125f70894b548b026aed5ced',
      type: 'maintenance',
    },
    {
      version: 'v1.1.0',
      date: '2026-10-06',
      changes: [
        'Team documentation: documentation for team workflow was committed.',
      ],
      commitSha: 'd93fc01',
      commitUrl: 'https://github.com/Chinmay20-09/Astral-Monitor/commit/d93fc0111bbf9f3c1b33e631d285482fcc909d7f',
      type: 'documentation',
    },
    {
      version: 'v1.1.0',
      date: '2026-10-06',
      changes: [
        'Pre-test checkpoint: P0 pre-test checkpoint was committed.',
      ],
      commitSha: '5b91523',
      commitUrl: 'https://github.com/Chinmay20-09/Astral-Monitor/commit/5b91523f87a1f228c0ee3ac00dc00f5a74adae91',
      type: 'testing',
    },
    {
      version: 'v1.1.0',
      date: '2026-10-05',
      changes: [
        'Requirements alignment: prerequisite alignment was recorded.',
      ],
      commitSha: 'bd13a0a',
      commitUrl: 'https://github.com/Chinmay20-09/Astral-Monitor/commit/bd13a0af897d3b1e4986740f4a89f9ae747d288d',
      type: 'feature',
    },
    {
      version: 'v1.1.0',
      date: '2026-10-05',
      changes: [
        'Initial project start: initial project commit was recorded.',
      ],
      commitSha: 'c61c973',
      commitUrl: 'https://github.com/Chinmay20-09/Astral-Monitor/commit/c61c973ccbe877c53f726267344a2404f74dbcac',
      type: 'feature',
    },
  ],
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
    for (let i = 0; i < entries.length; i += 1) {
      const entry = entries[i];
      const key = `${project.id}:${entry.commitUrl || entry.commitSha || i}`;
      if (seen.has(key)) continue;
      seen.add(key);

      events.push(buildChangelogEvent(project, entry, i));
    }
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
