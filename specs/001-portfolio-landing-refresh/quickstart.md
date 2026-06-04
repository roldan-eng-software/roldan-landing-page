# Quickstart: Portfolio Landing Refresh Validation

## Prerequisites

- Dependencies installed with `npm install`.
- At least one portfolio project URL available for local validation.
- Generated or manually prepared project screenshot assets under
  `public/projects/`.

## Local Validation Flow

1. Start the development server:

   ```bash
   npm run dev
   ```

2. Open the home page and validate the first viewport:

   - The page identifies the fullstack developer/service within 5 seconds.
   - The visual direction feels specific, crafted and non-template-like.
   - Primary contact action is visible and reachable by keyboard.

3. Validate completed-work cards:

   - Each ready project displays name, description, link and thumbnail.
   - Missing/failed screenshots render a professional fallback.
   - Cards do not shift or overflow while images load.

4. Validate responsive layout:

   - Mobile width around 390px.
   - Tablet width around 768px.
   - Desktop width around 1440px.
   - No overlapping text, broken buttons or horizontal scrolling.

5. Validate accessibility:

   - One clear H1 and ordered section headings.
   - Keyboard focus visible on navigation, project links and contact actions.
   - Descriptive link labels and image alt text.
   - Color contrast remains readable in all sections.

6. Validate SEO and content:

   - Title, description, canonical, Open Graph, JSON-LD, robots and sitemap are
     coherent with the production URL.
   - Copy is natural Portuguese, free of known typos and not keyword-stuffed.
   - Lighthouse SEO score reaches 100.

7. Validate contact and project links:

   - WhatsApp opens with expected message.
   - E-mail link opens with expected subject.
   - LinkedIn, GitHub, Instagram and portfolio links resolve.

## Release Gates

Run before release:

```bash
npm run lint
npm test
npm run build
```

Expected result: all commands pass. Any failure blocks release unless documented
in `plan.md` with owner, rationale and remediation.

## Screenshot Refresh Check

When portfolio URLs change or visual previews become stale:

1. Regenerate or manually update screenshots from the first page of each URL.
2. Confirm assets are optimized and stored under `public/projects/`.
3. Update capture dates in the portfolio data.
4. Re-run the completed-work card and build validation.

## Implementation Validation Notes

Validated on 2026-06-04 against the local production server at
`http://localhost:3000`:

- `npm test -- --runInBand`: passed, 3 suites and 8 tests.
- `npm run lint`: passed.
- `npm run build`: passed.
- Playwright screenshots captured for mobile 390px and desktop 1440px.
- Lighthouse production run: SEO 100/100, performance 71/100, LCP 2.1s,
  CLS 0, FCP 1.2s.
- Mobile, tablet and desktop review: no critical text overlap or horizontal
  overflow found in the captured viewports.
- Contact and project links are centralized in `lib/site.ts` and
  `lib/portfolio.ts`; verify any newly added client project URL before release.
