---
name: Kolte.dev Portfolio
description: Personal developer portfolio — project catalogue, roadmap, and a changelog-backed activity timeline.
colors:
  bg-primary: "#0D1117"
  surface-card: "rgba(22, 27, 34, 0.7)"
  surface-card-hover: "rgba(30, 36, 44, 0.85)"
  border-subtle: "rgba(240, 246, 252, 0.1)"
  border-hover: "rgba(59, 130, 246, 0.4)"
  text-primary: "#E6EDF3"
  text-secondary: "#C9D1D9"
  text-muted: "#8B949E"
  accent-blue: "#3B82F6"
  accent-blue-hover: "#4B8EF8"
  accent-blue-fill: "#2563EB"
  accent-blue-fill-hover: "#1D4ED8"
  accent-blue-text: "#60A5FA"
  category-purple-text: "#A78BFA"
  status-green: "#22C55E"
  status-orange: "#F59E0B"
  status-red: "#EF4444"
  category-purple: "#8B5CF6"
typography:
  display-1:
    fontFamily: "Bricolage Grotesque, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif"
    fontSize: "clamp(2.5rem, 1.6rem + 3.2vw, 3.75rem)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.035em"
  display-2:
    fontFamily: "Bricolage Grotesque, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.03em"
  heading-3:
    fontFamily: "Bricolage Grotesque, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.02em"
  body:
    fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  meta:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.6
    letterSpacing: "0.08em"
rounded:
  sm: "6px"
  md: "12px"
  lg: "20px"
  xl: "32px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  section: "48px"
components:
  button-primary:
    backgroundColor: "{colors.accent-blue}"
    textColor: "#FFFFFF"
    rounded: "{rounded.sm}"
    padding: "10px 16px"
    height: "44px"
  button-primary-hover:
    backgroundColor: "{colors.accent-blue-hover}"
  button-secondary:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.text-secondary}"
    rounded: "{rounded.sm}"
    padding: "10px 16px"
    height: "44px"
  card-project:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.lg}"
    padding: "24px"
  input-search:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.md}"
    padding: "0 20px"
    height: "52px"
---

## Overview

A dark, near-black portfolio that reads like a well-kept engineering record rather than a marketing page. The surface is flat and quiet; hierarchy comes from type weight, a single blue accent, and generous vertical rhythm. Blue means "you can act here". Green, orange and red are reserved for status meaning and never decorate.

The design's job is to make six real projects, their lifecycle stage, and their recorded history legible at a glance — on a phone first, because that is where a recruiter opens a link from a résumé.

## Colors

- **Ground:** `#0D1117` for page and section ground, flat — not a gradient. Ambient depth comes from `.scroll-bg`, a fixed panel of one flat accent hue revealed through the traced frame sequence in `public/frames/` as the page scrolls, so the page still reads as one light source. It carries no blur and no gradient, and it paints at `z-index: -1` so the artwork never crosses text.
- **Surfaces:** cards use `rgba(22, 27, 34, 0.7)` with a `rgba(240, 246, 252, 0.1)` hairline. Hover raises the border to accent-tinted `rgba(59, 130, 246, 0.4)` and the fill to `rgba(30, 36, 44, 0.85)`.
- **Text:** `#E6EDF3` primary, `#C9D1D9` secondary, `#8B949E` muted. Muted text is used only at metadata sizes where contrast still clears 4.5:1 against the card fill.
- **One accent, split by role (added after the parsed-page contrast scan):** `#3B82F6` is the *structural* accent — borders, underlines, focus rings, node dots. Because it measures only 3.7:1 behind white text and 4.0:1 as small text on a dark card, it is no longer used for either. Filled surfaces carrying white text use `--accent-blue-fill` `#2563EB` (5.2:1, hover `#1D4ED8`); accent-coloured **text** uses `--accent-blue-text` `#60A5FA` (5.6:1). The light theme overrides both with darker steps (`#0969DA` fill, `#0550AE` text).
- **Status only:** `#22C55E` current/stable, `#F59E0B` warning/paused/pending, `#EF4444` archived/error. These never appear as decoration.
- **Category only:** `#8B5CF6` survives in one place — the changelog change-type taxonomy (feature/fix/refactor/documentation/testing/release/maintenance), where seven categories need distinguishable markers. As text on a dark badge it uses `--category-purple-text` `#A78BFA` (5.4:1); `#8B5CF6` alone measured 3.9:1. It is deliberately not part of the interactive palette.
- **Project plates:** each project card's hero plate is a per-project gradient from `src/data/projects.ts`. The original set contained violet, plum and teal-cyan plates (the cyan-on-dark tell); they were replaced with deep-blue, slate, stone and oxblood tonal plates that keep projects distinguishable while staying inside this palette.
- **Light theme** re-maps every token under `[data-theme="light"]` (ground `#F6F8FA`, accent `#0969DA`); components inherit, no component re-declares its own light palette.
- **Banned in this system:** gradient text, two-hue gradient buttons, zero-offset colored glows, and violet/indigo as a second accent hue. All were removed during the redesign.

## Typography

- **Display:** Bricolage Grotesque, self-hosted variable woff2 (`fonts/bricolage-grotesque-latin.woff2`, OFL), weights 400–800. Chosen for ink traps and irregular apertures that hold at 44–64px with −0.035em tracking on a dark ground; a neutral grotesque turns to mush at that size.
- **Body:** the system UI stack at 1rem / 1.6. Body copy stays on the platform face so long text feels native and loads instantly.
- **Meta:** JetBrains Mono for dates, SHAs, versions, counts, file formats and section captions. Monospace is a signal for machine-generated values, never a costume for "technical".
- **Scale:** a single ramp — `--text-2xs` 0.6875rem, `--text-xs` 0.75, `--text-sm` 0.875, `--text-base` 1, `--text-lg` 1.125, `--text-xl` 1.375, `--text-2xl` 1.75, `--text-3xl` 2.25, `--text-4xl` `clamp(2.5rem, 1.6rem + 3.2vw, 3.75rem)`.
- **Rule:** a heading level must outrank the body. `h3` is `--text-xl` (22px) specifically so it never falls below 20px lead paragraphs — the pre-redesign build had `h3` at 18.7px, below body size, and one `h3` tag rendering at two different sizes.
- **Headings** use `text-wrap: balance`; tracking tightens as size grows (−0.02em at `h3`, −0.03em at `h2`, −0.035em at `h1`).

## Layout

- Content column max-width ~1200px with 24px gutters on mobile, wider padding on desktop.
- **Section rhythm:** heading, then a mono caption carrying the section's label, then a 1.125rem description capped at 700px (`max-width: 700px`) so lead copy never spans the full grid. Description bottom margin is 48px before content begins.
- **Labels sit below their heading.** Section labels are captions (`.section-tag`), not eyebrows above the heading. This is a hard rule: the skill bans kickers positioned above headings, and the redesign moved all five from above to below.
- **Catalogue:** 3-column grid ≥1024px, 2-column at tablet, single column on phones; list view switches each card to a horizontal row via `.list-layout`.
- **Breakpoints in use:** 1024px (desktop nav replaces the mobile menu), 1024px (catalogue columns), 768px (two-column blocks stack, contact grid collapses to one column at 768px), 480px (compact controls).
- **Touch:** `--target-min: 44px` is the interaction floor, applied to nav links, icon buttons, filter chips, sort select, search field, footer links, card actions, project-detail actions and expandable history rows.

## Elevation & Depth

- Three neutral shadows only: `--shadow-sm` `0 2px 8px rgba(0,0,0,0.3)`, `--shadow-md` `0 8px 24px rgba(0,0,0,0.4)`, `--shadow-lg` `0 16px 48px rgba(0,0,0,0.5)`. Light theme swaps to neutral grey shadows.
- Shadows always carry an offset and a soft blur; there are no zero-offset colored halos. Colored glow was removed from the primary download button, the status dot and the ambient fields.
- Borders do the separating work on flat surfaces; shadow is reserved for elements that genuinely float (raised cards, modals, the command palette).
- **Motion:** exponential ease-out only — `--transition-fast`/`normal`/`slow` at `cubic-bezier(0.16, 1, 0.3, 1)`, with `--transition-bounce` re-pointed to `cubic-bezier(0.22, 1, 0.36, 1)` (no elastic overshoot).
- `prefers-reduced-motion: reduce` sets `transition: none !important` and `animation: none !important` on every element. The `!important` is required because the universal selector has the lowest specificity.

## Shapes

- Radius scale: 6px (controls, badges), 12px (inputs, icon buttons), 20px (cards), 32px (large panels), full (pills, chips, dots).
- Cards are rectangles with hairlines and generous padding; no thick left-accent bars. The one 5px amber side-tab on the "currently shipping" card was replaced with a 1px border plus an inner hairline.
- No diagonal cuts, no clip-path geometry, no border-radius on type.
- Icons are Lucide, one stroke weight, sized 14–20px, always paired with a text label or `aria-label`.

## Components

- **Primary action** (`.dl-primary`, `.shipping-cta`): solid `#3B82F6` on white text, 44px min-height, 10×16px padding, 6px radius, hover steps to `#4B8EF8`. No gradient.
- **Secondary action** (`.dl-secondary`, `.btn-secondary`): card fill, hairline border, secondary text; hover raises border and text weight, not position.
- **Catalogue card:** hairline card, project title at `--text-xl`, description at `--text-sm`, mono metadata row, action row pinned to the bottom. Hover lifts the border tint and the hero image scale, nothing else moves.
- **Card hero label** (`.card-hero-label`): mono caption at the plate's bottom-left, carrying its **own** `rgba(13, 17, 23, 0.78)` scrim chip. The plate gradient is arbitrary per project, so the caption must not depend on the plate's overlay for contrast.
- **Prose measure:** paragraphs cap at `72ch`; uncapped body copy measured 101–105 characters per line at 1440px.
- **Filter chip:** 44px min-height pill inside a segmented container; active state = page ground + hairline + small shadow.
- **Search field:** the visible box is 52px tall and the `<input>` itself fills it (`min-height: 52px`), because padding around an input is not a tap target.
- **Status badge:** pill with 12% tinted background and the matching status hue as text, mono uppercase label, static dot. No pulse animation — the dot is not live data.
- **Activity timeline:** left rail of 2px line + node dots, one node per project ordered by repository creation date; expanding a node reveals nested commit rows with date, change-type badge, summary, short SHA and commit link.
- **Focus:** a single `*:focus-visible { outline: 2px solid var(--accent-blue); outline-offset: 2px }` — never removed, never replaced per-component.

## Do's and Don'ts

- **Do** keep every visible number, date, SHA and status traceable to `src/data/` or `PROJECT_CHANGELOG_SOURCE.md`.
- **Do** use the type-scale and `--target-min` tokens instead of raw px.
- **Do** style components in `style.css`. **Don't** add Tailwind utility classes to new markup: this build never imports `src/index.css`, so no Tailwind utility is emitted into the bundle (verified: no `--tw-` variables and no `.flex`/`.w-full` rules in `dist/assets/*.css`). Utilities already present in template strings are inert.
- **Do** keep the accent single-hue in interactive contexts; **don't** introduce a second accent hue for visual interest.
- **Don't** place a kicker or eyebrow above a heading; the label belongs below it as a caption.
- **Don't** animate a status indicator to imply live data the product does not have.
- **Don't** remove `!important` from the reduced-motion block or the `forced-colors` download button — both are accessibility overrides, not specificity accidents.
- **Don't** treat the two FAQ disclosure triangles (`border-left` + transparent top/bottom in `style.css`) as card side-tabs; they are CSS triangles and a known detector false positive.
