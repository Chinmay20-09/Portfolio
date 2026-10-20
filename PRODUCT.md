# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Hiring managers and recruiters** evaluating a third-year B.Tech CSE (AI/ML) student's engineering range in a few minutes, usually on a phone, often from a link in a résumé or GitHub profile.
- **Other developers and collaborators** checking whether a project is worth reading the source of, and looking for a live demo or download.
- **The owner (Chinmay Kolte)** keeping a current, accurate public record of what he has built without maintaining a CMS.

## Product Purpose

A single-page developer portfolio for Chinmay Kolte that presents real projects, their current lifecycle stage, and the recorded changelog history behind them. Success means a visitor can name what he builds, see evidence per project, and reach a project page or contact channel without hunting.

## Positioning

The activity feed is built only from commits documented in `PROJECT_CHANGELOG_SOURCE.md`, and the UI labels it as a static snapshot rather than live telemetry. Instead of fake "live" dashboards or invented metrics, the site shows the real recorded history and says plainly when data is unavailable ("commit unavailable", "no verified commit history recorded for this entry"). That restraint is the differentiator a neighbouring portfolio could not truthfully copy without doing the same bookkeeping.

## Operating Context

- Static site deployed to GitHub Pages under the `/Portfolio/` base path; no server, no database, no analytics.
- Visitors arrive at `#/` and navigate sections by hash links; project detail pages are hash routes (`#/project/<id>`).
- A command palette (⌘K / Ctrl K) offers jump-to-section and jump-to-project for keyboard users.
- All project facts, dates, commit SHAs and changelog text come from committed source files, not from a runtime API.

## Capabilities and Constraints

- Catalogue with live search, status filters (Current / Released / Archived), "Active + Released" quick filter, sort control, and grid/list view switching.
- Project roadmap grouped by lifecycle stage; per-project detail pages with changelog, repository telemetry, gallery placeholders, downloads and source links.
- Two-layer activity timeline: one road node per project ordered by `repositoryCreatedAt`, each expanding to its recorded commit history.
- Client-side contact form with inline success feedback; social/channel links.
- Dark theme by default with a light theme toggle, persisted locally.
- Constraint: project copy and commit data are authored by hand in `src/data/`; nothing is fetched live. Missing asset URLs intentionally render disabled or labelled placeholders rather than fabricated links.
- Constraint: no coverage/metrics/uptime data exists for these projects and the UI must not imply any.

## Brand Commitments

- Name and wordmark stay `KOLTE.DEV` with bracket framing.
- Dark, near-black surface (`#0D1117`) with a single blue accent; light theme is a supporting variant, not a separate identity.
- Monospace (`JetBrains Mono`) is reserved for metadata: dates, commit SHAs, versions, file formats, counts.
- Display voice is **Bricolage Grotesque** (self-hosted variable, 400–800), adopted in this redesign; headings no longer use the system stack.
- Tone of voice: first person, technical, understated. No hype, no superlatives, no invented achievements.

## Evidence on Hand

- `src/data/projects.ts`: six active projects plus archived entries, each with real repository creation dates, URLs, assets and changelog entries.
- `dev-docs/PROJECT_CHANGELOG_SOURCE.md` and `src/data/changelog-builder.ts`: the recorded commit history the activity feed renders.
- Public GitHub repositories linked per project.
- **Absences that future work must not fabricate:** no testimonials, no user counts, no benchmarks, no security certifications, no uptime or telemetry figures, no release status beyond what the changelog records.

## Product Principles

1. **Real data or an honest absence.** Never render a metric, status or claim the source files cannot support.
2. **The work leads.** Project evidence outranks chrome; interface detail should not compete with the catalogue.
3. **Scan first, read second.** A recruiter on a phone must be able to identify a project, its stage and its primary action without opening anything.
4. **One accent, semantic elsewhere.** Blue carries interaction; green/orange/red are reserved for status meaning.
5. **Preserve the record.** Routing, changelog wording, dates and commit links are product truth, not styling.

## Accessibility & Inclusion

- Target WCAG 2.2 AA: body text at least 4.5:1, visible focus indicators, semantic landmarks and heading order.
- Interactive targets at least 44×44 CSS px where the element allows it.
- `prefers-reduced-motion` must remove non-essential motion without removing state feedback.
- Keyboard parity for every pointer interaction, including the command palette and expandable project histories.
