# Data Model: Portfolio Landing Refresh

## PortfolioProject

Represents one completed service shown in the completed-work section.

**Fields**:

- `id`: stable slug used for React keys, image names and tests.
- `name`: public project/service name.
- `url`: public URL to the delivered work.
- `description`: short client-facing description focused on outcome or context.
- `serviceType`: category such as landing page, system, web app or integration.
- `tags`: optional list of technologies, responsibilities or business context.
- `screenshot`: reference to a `ScreenshotAsset`.
- `featured`: whether the project appears in the first visible portfolio group.
- `status`: `ready`, `draft`, `unavailable` or `needs-recapture`.

**Validation rules**:

- `name`, `url`, `description` and `serviceType` are required.
- `url` must be absolute and use `https://` unless a documented exception exists.
- `description` must be concise enough to fit mobile cards without truncation.
- `tags` must be short labels, not paragraphs.
- `ready` projects must have a screenshot asset or a deliberate fallback state.

## ScreenshotAsset

Represents the generated thumbnail for the first page of a portfolio URL.

**Fields**:

- `sourceUrl`: URL captured.
- `assetPath`: public path under `public/projects/`.
- `alt`: descriptive alternative text.
- `width`: intrinsic image width.
- `height`: intrinsic image height.
- `capturedAt`: ISO date or datetime.
- `captureStatus`: `captured`, `failed` or `manual`.
- `failureReason`: optional short reason when capture failed.

**Validation rules**:

- Captured assets should use a web-optimized format and stable aspect ratio.
- `alt` must describe the project preview, not repeat generic text.
- Failed captures must not break the card layout.

## SEOProfile

Represents search-facing content for the landing page.

**Fields**:

- `title`: browser/search title.
- `description`: search/social description.
- `canonicalUrl`: canonical public URL.
- `topics`: search intent topics and service keywords.
- `serviceArea`: São Carlos, São Paulo, Brasil and remote service coverage.
- `openGraphImage`: search/social preview image.
- `structuredData`: ProfessionalService/LocalBusiness-style data.
- `robots`: indexing and following directives.
- `sitemapEntry`: URL and last modified behavior.

**Validation rules**:

- Title and description must be specific, human-readable and non-repetitive.
- Canonical URL must match `lib/site.ts` behavior.
- Structured data must not claim unavailable services, locations or credentials.
- Images used for search/social previews must have meaningful visual content.

## ContactChannel

Represents a link that builds trust or starts a conversation.

**Fields**:

- `id`: stable identifier.
- `label`: visible label.
- `href`: target URL.
- `type`: WhatsApp, email, LinkedIn, GitHub, Instagram or portfolio.
- `ariaLabel`: accessible label when visible text is insufficient.
- `external`: whether the link opens outside the site.

**Validation rules**:

- Contact links must be manually checked before release.
- External links must use safe attributes.
- Labels must clearly state the destination or action.

## Relationships

- A `PortfolioProject` has one `ScreenshotAsset`.
- The completed-work section renders a list of `PortfolioProject` entries.
- The page metadata and structured data are derived from or validated against
  `SEOProfile`.
- Header, hero, footer and contact sections expose `ContactChannel` links.
