# Implementation Plan: Portfolio Landing Refresh

**Branch**: `001-portfolio-landing-refresh` | **Date**: 2026-06-04 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `/specs/001-portfolio-landing-refresh/spec.md`

## Summary

Reformulate the production landing page so it presents Sandro Roldan/Roldan Eng
Software as a creative, modern and efficient fullstack developer, with stronger
visual identity, polished Portuguese copy, organic-search foundations and a real
completed-work area. The implementation will keep the site static-friendly in
Next.js App Router, store portfolio data locally, generate project screenshots as
optimized static assets during maintenance, and validate SEO, accessibility,
responsiveness, links, lint, tests and production build before release.

## Technical Context

**Language/Version**: TypeScript 5, React 19, Next.js 16 App Router

**Primary Dependencies**: Next.js, React, Tailwind CSS 4; proposed dev-only
browser automation for screenshot generation with Playwright

**Storage**: Local TypeScript configuration for portfolio projects and static
image assets under `public/`

**Testing**: Jest, React Testing Library, ESLint, Next.js production build,
manual responsive/accessibility/SEO/link checks, Lighthouse for SEO and Core Web
Vitals review

**Target Platform**: Public web, mobile/tablet/desktop browsers, deployed
static-friendly Next.js site

**Project Type**: Production landing page

**Performance Goals**: Preserve fast perceived loading; keep LCP target below
2.5s and CLS below 0.1; avoid runtime screenshot fetching; keep third-party
scripts limited and justified

**Constraints**: Preserve SEO/indexability, contact paths, accessibility,
responsive layouts, production URL behavior, canonical URL behavior and
static-friendly deployment

**Scale/Scope**: Single public marketing site with home sections, shared layout
components, static portfolio screenshot assets and one data source for project
links

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- Public production surface preserved: current home route remains the primary
  public route; contact actions, metadata, robots, sitemap, canonical URLs and
  deployment assumptions remain in scope.
- Content and SEO impact reviewed: all copy, service claims, portfolio
  references, Open Graph, JSON-LD, analytics and search-facing metadata will be
  revised as part of the feature.
- Accessibility and responsiveness planned: semantic headings, keyboard access,
  focus visibility, contrast and mobile/tablet/desktop layouts are release
  checks.
- Performance and runtime complexity justified: screenshot capture is dev-time
  only because live external-page capture would harm reliability and load time.
- Validation path defined: release requires `npm run lint`, `npm test`,
  `npm run build`, Lighthouse SEO/performance review and manual checks for
  contact/project links, responsive layout and accessibility.

**Initial gate result**: PASS. No constitution violation is required.

## Phase 0: Research

Research output is captured in [research.md](./research.md).

Key decisions:

- Treat search optimization as helpful, reliable, people-first content plus
  technically correct crawl/index signals, aligned with Google Search Central
  and Bing Webmaster Guidelines.
- Generate completed-work thumbnails as static assets from each project URL's
  first page during maintenance, not during visitor requests.
- Keep the current App Router structure and evolve the visual system through
  composition, tokens, copy and project proof rather than adding a large UI
  library.
- Use a distinctive technical/editorial design direction: asymmetric hero,
  concise copy, restrained motion, browser-preview project cards, small
  engineering details and purposeful contrast.

## Phase 1: Design

Design output:

- [data-model.md](./data-model.md)
- [contracts/portfolio-content.md](./contracts/portfolio-content.md)
- [contracts/seo-content.md](./contracts/seo-content.md)
- [quickstart.md](./quickstart.md)

Implementation shape:

- Add a portfolio data module in `lib/` for completed-work entries.
- Add or update project screenshot assets in `public/projects/`.
- Replace the placeholder portfolio section with project cards using the local
  data source and optimized image rendering.
- Refresh the hero, about, services, technology and contact sections around a
  more deliberate narrative: strategy, interface craft, fullstack execution and
  production delivery.
- Update metadata, structured data, sitemap/robots assumptions and Open Graph
  image references to match the revised positioning.
- Add focused tests for portfolio rendering, link presence, accessible labels and
  metadata/site helper behavior.

## Post-Design Constitution Check

- Public production surface preserved: PASS. The home route remains primary and
  URL helpers/metadata remain centralized.
- Content and SEO impact reviewed: PASS. SEO profile and content contracts
  define required updates.
- Accessibility and responsiveness planned: PASS. Quickstart includes viewport,
  keyboard, focus, contrast and layout checks.
- Performance and runtime complexity justified: PASS. Portfolio screenshots are
  static assets; Playwright is dev-only if added.
- Validation path defined: PASS. Quickstart lists command and manual release
  gates.

## Project Structure

### Documentation (this feature)

```text
specs/001-portfolio-landing-refresh/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
│   ├── portfolio-content.md
│   └── seo-content.md
└── tasks.md              # Created by /speckit-tasks
```

### Source Code (repository root)

```text
app/
├── _components/          # Home-only landing page sections
├── __tests__/            # Jest/React Testing Library tests
├── layout.tsx            # Metadata, fonts, JSON-LD, analytics scripts
├── page.tsx              # Landing-page composition
├── robots.ts             # Robots metadata
└── sitemap.ts            # Sitemap metadata

components/               # Shared header/footer and reusable components
lib/                      # Site URL, analytics and portfolio configuration
public/
├── projects/             # Generated portfolio thumbnails
└── og-image.*            # Search/social preview image
scripts/                  # Optional screenshot generation script
```

**Structure Decision**: Keep the existing single-route App Router structure.
Introduce portfolio data and screenshot generation as local, build-time assets so
the public page stays fast, crawlable and reliable.

## Complexity Tracking

No constitution violations. Dev-only browser automation is justified by the
explicit requirement to capture screenshots from completed project home pages and
does not add runtime complexity.
