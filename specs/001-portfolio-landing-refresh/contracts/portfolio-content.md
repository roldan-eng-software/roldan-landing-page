# Contract: Portfolio Content and Screenshot Capture

## Purpose

Define the content contract for the completed-work section and the screenshot
capture workflow.

## Portfolio Entry Requirements

Each displayed project must provide:

- Stable `id`
- Project/service `name`
- Public `url`
- Short outcome-oriented `description`
- `serviceType`
- Optional `tags`
- Screenshot metadata or fallback state

## Screenshot Requirements

- Capture the first page of each project URL at a desktop viewport suitable for
  portfolio thumbnails.
- Store generated assets under `public/projects/`.
- Prefer a consistent aspect ratio for all project cards.
- Record capture date and source URL in the portfolio data.
- Provide fallback UI when a screenshot is missing, failed or intentionally
  unavailable.

## Rendering Requirements

- Project cards must include a visible project name, description and link.
- Thumbnail images must not be the only source of project information.
- Card dimensions must stay stable while images load or fail.
- Links must be keyboard reachable and have clear focus states.
- External project links must be safe and manually verified before release.

## Acceptance Contract

A project entry is release-ready when:

- Its URL opens successfully.
- The screenshot or fallback renders without layout shift.
- The card remains readable at mobile, tablet and desktop widths.
- The project can be found by name in automated rendering tests.
