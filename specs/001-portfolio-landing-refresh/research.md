# Research: Portfolio Landing Refresh

## Decision: SEO foundation follows people-first content and crawl clarity

Use useful, specific service content first, then technical search signals:
descriptive title/description, canonical URL, clear headings, sitemap, robots,
Open Graph, JSON-LD, descriptive images and crawlable links.

**Rationale**: Google Search Central emphasizes helpful, reliable, people-first
content and its SEO starter guide prioritizes compelling, useful content,
canonical clarity and understandable page structure. Bing Webmaster Guidelines
also emphasize crawlable links, accurate content and images that support the
primary text rather than replacing it.

**Sources**:

- Google Search Central: https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- Google SEO Starter Guide: https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- Bing Webmaster Guidelines: https://www.bing.com/webmasters/help/webmaster-guidelines-30fba23a

**Alternatives considered**:

- Keyword-stuffed copy: rejected because it reads artificial and weakens trust.
- SEO-only landing sections: rejected because the page must convert humans, not
  only satisfy crawlers.

## Decision: Generate portfolio screenshots as static assets

Capture each completed project's first page during maintenance and store the
result as an optimized image under `public/projects/`.

**Rationale**: The user requires thumbnails pulled from each service link, but
runtime capture would depend on external sites, browsers and network conditions.
Static assets preserve performance, layout stability and crawl reliability while
still making the screenshot source traceable.

**Alternatives considered**:

- Fetch screenshots on every request: rejected for latency, fragility and SEO
  risk.
- Use generic mockups: rejected because the user explicitly wants real project
  pages and because generic imagery would reduce trust.
- Manual screenshots only: acceptable as a fallback, but a repeatable script is
  better for freshness and consistency.

## Decision: Use Next.js Metadata API and metadata file conventions

Keep search/social metadata in App Router conventions: `metadata` in
`app/layout.tsx`, route-level sitemap/robots files and static or generated Open
Graph/Twitter images.

**Rationale**: Official Next.js guidance supports Metadata API, robots metadata,
Open Graph/Twitter metadata files and programmatic OG generation. The existing
project already centralizes metadata in `app/layout.tsx` and URL behavior in
`lib/site.ts`.

**Sources**:

- Next.js docs via Context7 `/vercel/next.js`
- Next.js docs: https://nextjs.org/docs

**Alternatives considered**:

- Manual `<head>` strings spread across components: rejected because it is more
  error-prone and harder to test.
- New SEO library: rejected because App Router already provides the needed
  primitives.

## Decision: Keep typography dependencies stable, improve hierarchy

Keep the current Inter and JetBrains Mono family pairing, but refine scale,
spacing, weight and usage. Use mono accents for technical details, not for large
body copy.

**Rationale**: The existing fonts are production-ready and already configured.
The main issue is not font availability; it is hierarchy, composition and copy.
Avoiding a font change reduces risk while still allowing a more polished identity.

**Alternatives considered**:

- Add another display font: deferred because it may add load cost and does not
  by itself solve generic layout.
- Use only a mono/typewriter style: rejected because it can reduce readability
  and feel gimmicky.

## Decision: Design direction should be technical/editorial, not template-like

Move away from a centered generic hero and repeated simple cards. Use deliberate
section rhythm: asymmetric hero, compact proof points, real project previews,
service narrative, technical stack with purpose, and a direct contact close.

**Rationale**: The desired impression is creative, modern and efficient. That is
better communicated by specificity, real work, precise layout and restrained
details than by decorative gradients or generic AI-style copy.

**Alternatives considered**:

- Large decorative hero with abstract blobs: rejected because it is common in
  generated landing pages.
- Dense dashboard aesthetic: rejected because the page is a public service site,
  not an internal SaaS tool.

## Decision: Use a local portfolio content contract

Represent completed work as typed local data with title, URL, description,
service type, tags, screenshot metadata and fallback state.

**Rationale**: A local contract makes the page easy to update, test and render
without needing a CMS or database for the current scope.

**Alternatives considered**:

- CMS: rejected for this phase because the current need is small and static.
- Hard-coded cards inside JSX: rejected because it mixes content and layout and
  makes screenshot metadata harder to validate.
