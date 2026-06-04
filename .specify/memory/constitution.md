<!--
Sync Impact Report
Version change: template -> 1.0.0
Modified principles:
- Principle slot 1 -> I. Producao Publica Primeiro
- Principle slot 2 -> II. Conteudo, SEO e Contato Confiaveis
- Principle slot 3 -> III. Acessibilidade e Responsividade Obrigatorias
- Principle slot 4 -> IV. Performance e Build Verificaveis
- Principle slot 5 -> V. Mudancas Pequenas, Testadas e Rastreaveis
Added sections:
- Padroes Tecnicos
- Fluxo de Entrega
Removed sections:
- Placeholder section 2
- Placeholder section 3
Templates requiring updates:
- ✅ .specify/templates/plan-template.md
- ✅ .specify/templates/spec-template.md
- ✅ .specify/templates/tasks-template.md
- ⚠ .specify/templates/commands/*.md (not present in this project)
- ✅ README.md
Follow-up TODOs:
- None
-->
# Roldan Eng Software Landing Page Constitution

## Core Principles

### I. Producao Publica Primeiro
The published landing page is the primary product surface. Every change MUST
preserve the public routes, contact paths, metadata, robots, sitemap, and current
deployment assumptions unless the specification explicitly defines the migration.
Broken navigation, missing contact actions, incorrect canonical URLs, or degraded
indexability block release.

Rationale: This project is already in production and represents the public
commercial presence of Roldan Eng Software.

### II. Conteudo, SEO e Contato Confiaveis
User-facing copy, service descriptions, portfolio references, contact links, and
business metadata MUST be accurate before release. SEO-critical artifacts,
including `app/layout.tsx`, `app/sitemap.ts`, `app/robots.ts`, Open Graph image
references, canonical URLs, and JSON-LD, MUST be reviewed whenever content,
routes, branding, or deployment URLs change.

Rationale: A landing page succeeds only when visitors understand the offer and
can reliably contact the business from search engines, social previews, and the
site itself.

### III. Acessibilidade e Responsividade Obrigatorias
All visible changes MUST remain usable on mobile, tablet, and desktop. Interactive
elements MUST be keyboard reachable, have visible focus states, and expose
accessible names when their purpose is not text-visible. Content MUST preserve
semantic heading order, sufficient color contrast, readable text sizes, and
non-overlapping layouts at common viewport widths.

Rationale: The page serves prospective clients across devices and must not trade
visual polish for basic access.

### IV. Performance e Build Verificaveis
Production changes MUST keep the page static-friendly, lightweight, and compatible
with the current Next.js App Router stack unless a feature plan justifies added
runtime complexity. Images and fonts MUST be optimized for perceived loading, and
new third-party scripts MUST be justified by measurable business value.
`npm run lint`, `npm test`, and `npm run build` are the release gates whenever
code, content rendering, metadata, or dependencies change.

Rationale: Fast, stable loading is a core quality attribute for a public landing
page and directly affects conversion and search performance.

### V. Mudancas Pequenas, Testadas e Rastreaveis
Feature work MUST be scoped to independently reviewable changes. New sections,
interactive behavior, analytics changes, or dependency additions MUST include the
smallest useful implementation, an explicit validation path, and updated tests or
documented manual checks. Unrelated refactors, broad style rewrites, and forced
dependency changes are prohibited unless the specification names them as the goal.

Rationale: A production landing page benefits from calm, reversible changes that
are easy to review and hard to accidentally break.

## Padroes Tecnicos

The project uses Next.js 16 with App Router, React 19, TypeScript, Tailwind CSS 4,
Jest, React Testing Library, and ESLint. New code MUST follow the existing
structure unless a plan documents a better fit:

- Route-level composition lives in `app/page.tsx`.
- Home-only sections live in `app/_components/`.
- Shared layout/navigation/footer pieces live in `components/`.
- Site configuration and deploy URL behavior live in `lib/`.
- Static assets live in `public/`.

Dependencies MUST NOT be added for purely decorative or one-off behavior.
Shadcn UI, Radix UI, or similar component libraries SHOULD be introduced only
when an interaction benefits from their accessibility and state-management
patterns. Environment-dependent URLs MUST keep production-safe fallbacks and
trailing-slash behavior consistent with `lib/site.ts`.

## Fluxo de Entrega

Every specification and implementation plan MUST define:

- The public visitor journey affected by the change.
- The SEO, metadata, analytics, and contact-link impact, or state that none
  exists.
- The responsive and accessibility checks required before release.
- The validation commands and any manual production checks needed after deploy.

Before release, run the applicable gates from the README. For content-only
changes that cannot affect rendering, dependencies, or metadata, a reviewer MAY
document why a narrower validation is sufficient. Any failed gate blocks release
until fixed or explicitly waived in the feature plan with owner and rationale.

## Governance

This constitution supersedes conflicting local conventions for this repository.
Feature specs, implementation plans, tasks, reviews, and release decisions MUST
apply these principles. Amendments require a documented constitution change, a
semantic version bump, and synchronization of affected templates and runtime
guidance.

Versioning follows semantic versioning:

- MAJOR for removing or redefining principles in a backward-incompatible way.
- MINOR for adding principles, required sections, or materially expanding gates.
- PATCH for clarifications, wording improvements, or non-semantic corrections.

Compliance is reviewed during planning and again before release. Any violation
MUST be listed in the plan's Complexity Tracking section with why it is necessary
and what simpler alternative was rejected.

**Version**: 1.0.0 | **Ratified**: 2026-06-04 | **Last Amended**: 2026-06-04
