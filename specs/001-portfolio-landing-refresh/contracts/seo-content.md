# Contract: SEO, Metadata and Organic Search Readiness

## Purpose

Define the SEO and content contract for the refreshed production landing page.

## Required Search Signals

- One clear page title focused on fullstack development and service intent.
- One concise meta description written for humans.
- Canonical URL derived from the production site URL helper.
- Index/follow robots behavior unless a deployment-specific reason changes it.
- Sitemap entry for the home page.
- Open Graph and Twitter card metadata with meaningful image.
- Structured data describing the professional service accurately.
- Semantic heading order with one primary H1.

## Required Content Coverage

The page must clearly answer:

- Who provides the service.
- What services are offered.
- Which kinds of clients/projects are a good fit.
- What makes the developer credible and different.
- Which completed works can be inspected.
- How the visitor can start a conversation.
- Where the service is based and whether remote/Brazil-wide work is available.

## Image SEO Requirements

- Portfolio screenshots must support nearby text and not replace it.
- Meaningful images need descriptive alt text.
- Decorative images should be hidden from assistive technology.
- Open Graph image must represent the actual brand/service, not a generic logo
  or text-only placeholder.

## Acceptance Contract

SEO readiness passes when:

- Lighthouse SEO score is 100 in local or preview validation.
- `app/layout.tsx`, `app/sitemap.ts`, `app/robots.ts` and `lib/site.ts` are
  coherent with the production URL.
- Search-facing copy is natural, specific and not keyword-stuffed.
- Google/Bing-oriented crawl basics are present: crawlable links, useful content,
  canonical clarity, sitemap and indexable page content.
