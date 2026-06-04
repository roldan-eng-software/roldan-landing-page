# Tasks: Portfolio Landing Refresh

**Input**: Design documents from `/specs/001-portfolio-landing-refresh/`

**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/, quickstart.md

**Tests**: Automated tests are included because the feature specification requires
release validation, portfolio rendering checks, metadata checks and regression
coverage for contact/project links.

**Organization**: Tasks are grouped by user story to enable independent
implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel because it touches different files and has no
  dependency on incomplete tasks
- **[Story]**: Which user story the task belongs to, only in user story phases
- Include exact file paths in descriptions

## Path Conventions

- **Production landing page**: `app/`, `app/_components/`, `components/`, `lib/`, `public/`
- **Tests**: `app/__tests__/`
- **Static project previews**: `public/projects/`
- **Maintenance scripts**: `scripts/`

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Prepare shared content contracts, screenshot tooling and validation scaffolding.

- [x] T001 Create portfolio data module types and placeholder entries in `lib/portfolio.ts`
- [x] T002 Create SEO profile helper skeleton for search-facing copy in `lib/seo.ts`
- [x] T003 Add project screenshot output directory with keep file in `public/projects/.gitkeep`
- [x] T004 Add screenshot capture script scaffold in `scripts/capture-project-screenshots.ts`
- [x] T005 Add dev-only screenshot tooling script entry in `package.json`
- [x] T006 [P] Create portfolio rendering test scaffold in `app/__tests__/portfolio.test.tsx`
- [x] T007 [P] Create SEO metadata test scaffold in `app/__tests__/seo.test.tsx`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Establish shared visual/content foundations that all user stories depend on.

**CRITICAL**: No user story work can begin until this phase is complete.

- [x] T008 Define final color tokens, typography scale, spacing rhythm and focus states in `app/globals.css`
- [x] T009 Centralize contact channel labels and URLs in `lib/site.ts`
- [x] T010 Define completed-work content contract and validation helpers in `lib/portfolio.ts`
- [x] T011 Define SEO title, description, topics and structured data fields in `lib/seo.ts`
- [x] T012 Update shared header navigation labels and section anchors in `components/Header.tsx`
- [x] T013 Update footer contact/social link usage from centralized site data in `components/Footer.tsx`
- [x] T014 Confirm page section order for hero, about, technology, projects, services and contact in `app/page.tsx`
- [x] T015 Document manual screenshot refresh expectations in `specs/001-portfolio-landing-refresh/quickstart.md`

**Checkpoint**: Foundation ready. User story implementation can now begin in priority order.

---

## Phase 3: User Story 1 - Entender valor do desenvolvedor (Priority: P1) MVP

**Goal**: A first-time visitor understands the fullstack developer positioning,
creative/modern quality and primary contact path within the first seconds.

**Independent Test**: Open the home page on mobile and desktop and verify that
the first viewport communicates fullstack value, trust and a clear contact action
without looking like a generic AI-generated landing page.

### Tests for User Story 1

- [x] T016 [P] [US1] Add hero value proposition and contact action assertions in `app/__tests__/home.test.tsx`
- [x] T017 [P] [US1] Add centralized contact channel assertions in `app/__tests__/home.test.tsx`

### Implementation for User Story 1

- [x] T018 [US1] Redesign hero composition, headline, supporting copy and primary CTAs in `app/_components/HeroSection.tsx`
- [x] T019 [US1] Rewrite about section with a sharper fullstack positioning narrative in `app/_components/AboutSection.tsx`
- [x] T020 [US1] Rewrite services section around business outcomes and delivery clarity in `app/_components/ServicesSection.tsx`
- [x] T021 [US1] Refine technology section to show purposeful stack credibility without emoji-heavy decoration in `app/_components/TechnologySection.tsx`
- [x] T022 [US1] Refine contact section copy and CTA hierarchy for conversion in `app/_components/ContactSection.tsx`
- [x] T023 [US1] Apply responsive layout details, section rhythm and anti-template visual polish in `app/globals.css`
- [x] T024 [US1] Verify visible Portuguese copy for spelling, grammar, tone and non-generic phrasing across `app/_components/HeroSection.tsx`
- [x] T025 [US1] Verify visible Portuguese copy for spelling, grammar, tone and non-generic phrasing across `app/_components/AboutSection.tsx`
- [x] T026 [US1] Verify visible Portuguese copy for spelling, grammar, tone and non-generic phrasing across `app/_components/ServicesSection.tsx`
- [x] T027 [US1] Verify visible Portuguese copy for spelling, grammar, tone and non-generic phrasing across `app/_components/ContactSection.tsx`

**Checkpoint**: MVP complete. Visitor value, trust and contact path work independently before portfolio and SEO refinements.

---

## Phase 4: User Story 2 - Avaliar trabalhos realizados (Priority: P2)

**Goal**: A potential client can inspect completed work through project links and
small first-page screenshots with stable fallback behavior.

**Independent Test**: Add at least one project to the local portfolio data and
confirm the page renders project name, description, link, capture status and
thumbnail or fallback without layout breakage.

### Tests for User Story 2

- [x] T028 [P] [US2] Add portfolio data validation tests for ready and fallback entries in `app/__tests__/portfolio.test.tsx`
- [x] T029 [P] [US2] Add project card rendering tests for names, descriptions, links and image alt text in `app/__tests__/portfolio.test.tsx`
- [x] T030 [P] [US2] Add screenshot script configuration assertions in `app/__tests__/portfolio.test.tsx`

### Implementation for User Story 2

- [x] T031 [US2] Populate initial completed-work entries and fallback examples in `lib/portfolio.ts`
- [x] T032 [US2] Implement screenshot capture script for first-page project thumbnails in `scripts/capture-project-screenshots.ts`
- [x] T033 [US2] Add or generate optimized portfolio screenshot assets and update `public/projects/.gitkeep`
- [x] T034 [US2] Replace placeholder portfolio copy with completed-work grid and fallback states in `app/_components/ProjectsSection.tsx`
- [x] T035 [US2] Render optimized project thumbnails, alt text, tags and external links in `app/_components/ProjectsSection.tsx`
- [x] T036 [US2] Add stable card dimensions, image aspect ratio and fallback styling in `app/globals.css`
- [x] T037 [US2] Add manual project-link and screenshot-refresh instructions in `specs/001-portfolio-landing-refresh/quickstart.md`

**Checkpoint**: Portfolio proof works independently and can be maintained by updating local data and static screenshots.

---

## Phase 5: User Story 3 - Ser encontrado organicamente (Priority: P3)

**Goal**: The landing page is indexable, useful and technically coherent for
organic searches about fullstack development, landing pages and web systems.

**Independent Test**: Inspect metadata, headings, structured data, sitemap,
robots, images and crawlable links; Lighthouse SEO reaches 100 in local or
preview validation.

### Tests for User Story 3

- [x] T038 [P] [US3] Add SEO profile tests for title, description, topics and service area in `app/__tests__/seo.test.tsx`
- [x] T039 [P] [US3] Add metadata and structured data assertions for production URL behavior in `app/__tests__/seo.test.tsx`
- [x] T040 [P] [US3] Add sitemap and robots assertions in `app/__tests__/seo.test.tsx`

### Implementation for User Story 3

- [x] T041 [US3] Update page metadata, Open Graph, Twitter card and robots metadata in `app/layout.tsx`
- [x] T042 [US3] Update ProfessionalService structured data to match final service positioning in `app/layout.tsx`
- [x] T043 [US3] Update sitemap entry and last-modified behavior in `app/sitemap.ts`
- [x] T044 [US3] Update robots behavior and crawler assumptions in `app/robots.ts`
- [x] T045 [US3] Connect SEO profile helper to site URL and metadata expectations in `lib/seo.ts`
- [x] T046 [US3] Update Open Graph image asset or reference for the refreshed brand signal in `public/og-image.svg`
- [x] T047 [US3] Review headings, link text and image alt text for crawl clarity in `app/_components/HeroSection.tsx`
- [x] T048 [US3] Review headings, link text and image alt text for crawl clarity in `app/_components/ProjectsSection.tsx`
- [x] T049 [US3] Review headings, link text and local service-area copy for search usefulness in `app/_components/ServicesSection.tsx`

**Checkpoint**: SEO-facing page structure, metadata and content are coherent and independently inspectable.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Validate the production landing page end to end and clean up any
cross-story quality issues.

- [x] T050 Run `npm run lint` and resolve issues reported against `eslint.config.mjs`
- [x] T051 Run `npm test` and resolve failures in `app/__tests__/home.test.tsx`
- [x] T052 Run `npm test` and resolve failures in `app/__tests__/portfolio.test.tsx`
- [x] T053 Run `npm test` and resolve failures in `app/__tests__/seo.test.tsx`
- [x] T054 Run `npm run build` and resolve production build issues surfaced by `next.config.ts`
- [x] T055 Validate mobile viewport around 390px and record findings in `specs/001-portfolio-landing-refresh/quickstart.md`
- [x] T056 Validate tablet viewport around 768px and record findings in `specs/001-portfolio-landing-refresh/quickstart.md`
- [x] T057 Validate desktop viewport around 1440px and record findings in `specs/001-portfolio-landing-refresh/quickstart.md`
- [x] T058 Validate keyboard navigation, visible focus and accessible labels across `app/page.tsx`
- [x] T059 Validate WhatsApp, email, LinkedIn, GitHub, Instagram and project links from `lib/site.ts`
- [x] T060 Validate Lighthouse SEO score and Core Web Vitals targets from `specs/001-portfolio-landing-refresh/quickstart.md`
- [x] T061 Final Portuguese copy review for visible text in `app/_components/HeroSection.tsx`, `app/_components/AboutSection.tsx`, `app/_components/ServicesSection.tsx`, `app/_components/TechnologySection.tsx`, `app/_components/ProjectsSection.tsx`, and `app/_components/ContactSection.tsx`
- [x] T062 Remove unused placeholder project assets and update `public/projects/.gitkeep`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies.
- **Foundational (Phase 2)**: Depends on Setup completion and blocks all user stories.
- **US1 (Phase 3)**: Depends on Foundational. This is the MVP.
- **US2 (Phase 4)**: Depends on Foundational. Can start after US1 if final visual rhythm is needed for card styling.
- **US3 (Phase 5)**: Depends on Foundational and benefits from final US1/US2 copy/assets.
- **Polish (Phase 6)**: Depends on desired user stories being complete.

### User Story Dependencies

- **US1**: Independent after Foundation; delivers first-viewport positioning and conversion path.
- **US2**: Independent after Foundation; uses shared visual tokens and portfolio data.
- **US3**: Independent after Foundation; final metadata should reflect completed US1/US2 copy.

### Within Each User Story

- Tests before implementation.
- Data/helpers before components.
- Component rendering before final responsive/accessibility checks.
- SEO/contact/accessibility/performance checks before release.

---

## Parallel Opportunities

- T006 and T007 can run in parallel after T001 and T002 are understood.
- T012 and T013 can run in parallel because header and footer are separate files.
- T016 and T017 can run in parallel before US1 implementation.
- T028, T029 and T030 can run in parallel before US2 implementation.
- T038, T039 and T040 can run in parallel before US3 implementation.
- T055, T056 and T057 can run in parallel as viewport validation passes.

---

## Parallel Example: User Story 1

```bash
Task: "T016 [P] [US1] Add hero value proposition and contact action assertions in app/__tests__/home.test.tsx"
Task: "T017 [P] [US1] Add centralized contact channel assertions in app/__tests__/home.test.tsx"
```

## Parallel Example: User Story 2

```bash
Task: "T028 [P] [US2] Add portfolio data validation tests for ready and fallback entries in app/__tests__/portfolio.test.tsx"
Task: "T029 [P] [US2] Add project card rendering tests for names, descriptions, links and image alt text in app/__tests__/portfolio.test.tsx"
Task: "T030 [P] [US2] Add screenshot script configuration assertions in app/__tests__/portfolio.test.tsx"
```

## Parallel Example: User Story 3

```bash
Task: "T038 [P] [US3] Add SEO profile tests for title, description, topics and service area in app/__tests__/seo.test.tsx"
Task: "T039 [P] [US3] Add metadata and structured data assertions for production URL behavior in app/__tests__/seo.test.tsx"
Task: "T040 [P] [US3] Add sitemap and robots assertions in app/__tests__/seo.test.tsx"
```

---

## Implementation Strategy

### MVP First (US1 Only)

1. Complete Phase 1 and Phase 2.
2. Complete Phase 3.
3. Validate first viewport, copy, contact path, mobile/desktop fit and tests.
4. Stop and review before portfolio/SEO expansion.

### Incremental Delivery

1. Foundation gives shared content contracts and visual tokens.
2. US1 makes the public page immediately stronger.
3. US2 adds proof through completed-work cards and screenshots.
4. US3 finalizes organic-search readiness after content/assets settle.
5. Phase 6 confirms production release quality.

### Notes

- Keep changes scoped to the landing-page refresh.
- Do not add a CMS or runtime screenshot fetching in this feature.
- Do not introduce broad UI libraries unless a later task explicitly justifies it.
- Commit after each task or logical group.
