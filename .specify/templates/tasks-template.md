---

description: "Task list template for feature implementation"
---

# Tasks: [FEATURE NAME]

**Input**: Design documents from `/specs/[###-feature-name]/`

**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: Release-impacting landing-page work requires the applicable validation
tasks from the constitution. Include automated tests when rendering, behavior,
metadata helpers, or regressions can be covered by Jest/React Testing Library.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Single project**: `src/`, `tests/` at repository root
- **Production landing page**: `app/`, `app/_components/`, `components/`, `lib/`, `public/`
- **Web app**: `backend/src/`, `frontend/src/`
- **Mobile**: `api/src/`, `ios/src/` or `android/src/`
- Paths shown below assume single project - adjust based on plan.md structure

<!--
  ============================================================================
  IMPORTANT: The tasks below are SAMPLE TASKS for illustration purposes only.

  The /speckit-tasks command MUST replace these with actual tasks based on:
  - User stories from spec.md (with their priorities P1, P2, P3...)
  - Feature requirements from plan.md
  - Entities from data-model.md
  - Endpoints from contracts/

  Tasks MUST be organized by user story so each story can be:
  - Implemented independently
  - Tested independently
  - Delivered as an MVP increment

  DO NOT keep these sample tasks in the generated tasks.md file.
  ============================================================================
-->

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [ ] T001 Create project structure per implementation plan
- [ ] T002 Initialize [language] project with [framework] dependencies
- [ ] T003 [P] Configure linting and formatting tools

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

Examples of foundational tasks (adjust based on your project):

- [ ] T004 Confirm affected public routes, metadata, contact paths, and deployment URL assumptions
- [ ] T005 [P] Identify required responsive and accessibility checks
- [ ] T006 [P] Identify required SEO, Open Graph, robots, sitemap, JSON-LD, and analytics updates
- [ ] T007 Confirm asset strategy for images, icons, and fonts
- [ ] T008 Confirm validation commands and any manual post-deploy checks
- [ ] T009 Document any constitution violations in plan.md Complexity Tracking

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - [Title] (Priority: P1) 🎯 MVP

**Goal**: [Brief description of what this story delivers]

**Independent Test**: [How to verify this story works on its own]

### Tests for User Story 1 (OPTIONAL - only if tests requested) ⚠️

> **NOTE: Write these tests FIRST, ensure they FAIL before implementation**

- [ ] T010 [P] [US1] Rendering test for [section/component] in app/__tests__/[name].test.tsx
- [ ] T011 [P] [US1] Metadata/helper test for [SEO/contact behavior] in app/__tests__/[name].test.tsx

### Implementation for User Story 1

- [ ] T012 [P] [US1] Update [section/component] in app/_components/[component].tsx
- [ ] T013 [P] [US1] Update shared UI in components/[component].tsx if needed
- [ ] T014 [US1] Compose the story in app/page.tsx
- [ ] T015 [US1] Update metadata or site helpers in app/layout.tsx, app/sitemap.ts, app/robots.ts, or lib/ if needed
- [ ] T016 [US1] Add or update static assets in public/ with optimized dimensions and alt text plan
- [ ] T017 [US1] Verify responsive layout, keyboard access, focus states, and contact links

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently

---

## Phase 4: User Story 2 - [Title] (Priority: P2)

**Goal**: [Brief description of what this story delivers]

**Independent Test**: [How to verify this story works on its own]

### Tests for User Story 2 (OPTIONAL - only if tests requested) ⚠️

- [ ] T018 [P] [US2] Rendering test for [section/component] in app/__tests__/[name].test.tsx
- [ ] T019 [P] [US2] Metadata/helper test for [SEO/contact behavior] in app/__tests__/[name].test.tsx

### Implementation for User Story 2

- [ ] T020 [P] [US2] Update [section/component] in app/_components/[component].tsx
- [ ] T021 [US2] Compose the story in app/page.tsx
- [ ] T022 [US2] Update SEO/contact/assets affected by this story
- [ ] T023 [US2] Integrate with User Story 1 components (if needed)

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently

---

## Phase 5: User Story 3 - [Title] (Priority: P3)

**Goal**: [Brief description of what this story delivers]

**Independent Test**: [How to verify this story works on its own]

### Tests for User Story 3 (OPTIONAL - only if tests requested) ⚠️

- [ ] T024 [P] [US3] Rendering test for [section/component] in app/__tests__/[name].test.tsx
- [ ] T025 [P] [US3] Metadata/helper test for [SEO/contact behavior] in app/__tests__/[name].test.tsx

### Implementation for User Story 3

- [ ] T026 [P] [US3] Update [section/component] in app/_components/[component].tsx
- [ ] T027 [US3] Compose the story in app/page.tsx
- [ ] T028 [US3] Update SEO/contact/assets affected by this story

**Checkpoint**: All user stories should now be independently functional

---

[Add more user story phases as needed, following the same pattern]

---

## Phase N: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [ ] TXXX [P] Documentation updates in docs/
- [ ] TXXX Code cleanup and refactoring
- [ ] TXXX Performance optimization across all stories
- [ ] TXXX [P] Additional unit tests (if requested) in tests/unit/
- [ ] TXXX Security hardening
- [ ] TXXX Run quickstart.md validation
- [ ] TXXX Run `npm run lint`
- [ ] TXXX Run `npm test`
- [ ] TXXX Run `npm run build`
- [ ] TXXX Validate mobile/tablet/desktop rendering for changed sections
- [ ] TXXX Validate SEO metadata, Open Graph, robots, sitemap, JSON-LD, analytics, and contact links as applicable

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3+)**: All depend on Foundational phase completion
  - User stories can then proceed in parallel (if staffed)
  - Or sequentially in priority order (P1 → P2 → P3)
- **Polish (Final Phase)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (P2)**: Can start after Foundational (Phase 2) - May integrate with US1 but should be independently testable
- **User Story 3 (P3)**: Can start after Foundational (Phase 2) - May integrate with US1/US2 but should be independently testable

### Within Each User Story

- Tests (when applicable) MUST be written and FAIL before implementation
- Section/component changes before route composition
- Site helper, metadata, and asset changes before final release checks
- Core implementation before integration
- Story complete before moving to next priority
- SEO/contact/accessibility/performance checks before release

### Parallel Opportunities

- All Setup tasks marked [P] can run in parallel
- All Foundational tasks marked [P] can run in parallel (within Phase 2)
- Once Foundational phase completes, all user stories can start in parallel (if team capacity allows)
- All tests for a user story marked [P] can run in parallel
- Models within a story marked [P] can run in parallel
- Different user stories can be worked on in parallel by different team members

---

## Parallel Example: User Story 1

```bash
# Launch all tests for User Story 1 together (if tests requested):
Task: "Contract test for [endpoint] in tests/contract/test_[name].py"
Task: "Integration test for [user journey] in tests/integration/test_[name].py"

# Launch all models for User Story 1 together:
Task: "Create [Entity1] model in src/models/[entity1].py"
Task: "Create [Entity2] model in src/models/[entity2].py"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL - blocks all stories)
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: Test User Story 1 independently
5. Deploy/demo if ready

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 → Test independently → Deploy/Demo (MVP!)
3. Add User Story 2 → Test independently → Deploy/Demo
4. Add User Story 3 → Test independently → Deploy/Demo
5. Each story adds value without breaking previous stories

### Parallel Team Strategy

With multiple developers:

1. Team completes Setup + Foundational together
2. Once Foundational is done:
   - Developer A: User Story 1
   - Developer B: User Story 2
   - Developer C: User Story 3
3. Stories complete and integrate independently

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Verify tests fail before implementing
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- Keep production landing-page release gates visible: lint, test, build,
  responsive checks, accessibility checks, SEO/contact verification
- Avoid: vague tasks, same file conflicts, cross-story dependencies that break independence
