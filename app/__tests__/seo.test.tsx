import robots from '../robots';
import sitemap from '../sitemap';
import { buildProfessionalServiceJsonLd, seoProfile } from '@/lib/seo';
import { siteUrl } from '@/lib/site';

describe('SEO profile', () => {
  it('defines human-readable search metadata for fullstack services', () => {
    expect(seoProfile.title).toMatch(/Desenvolvedor Fullstack/i);
    expect(seoProfile.description).toMatch(/geram leads/i);
    expect(seoProfile.topics).toEqual(
      expect.arrayContaining([
        'desenvolvedor fullstack',
        'landing pages',
        'landing page para petshop',
        'landing page para semijoias',
        'landing page para móveis planejados',
        'formulário de orçamento online',
        'Next.js',
      ]),
    );
    expect(seoProfile.serviceArea).toEqual(expect.arrayContaining(['São Carlos', 'São Paulo', 'Brasil']));
    expect(seoProfile.canonicalUrl).toBe(siteUrl);
  });

  it('builds structured data for the professional service', () => {
    const jsonLd = buildProfessionalServiceJsonLd();

    expect(jsonLd['@type']).toBe('ProfessionalService');
    expect(jsonLd.url).toBe(siteUrl);
    expect(jsonLd.sameAs).toEqual(expect.arrayContaining(['https://github.com/roldan-eng-software']));
    expect(jsonLd.knowsAbout).toEqual(expect.arrayContaining(['React', 'Next.js', 'captação de leads']));
    expect(jsonLd.hasOfferCatalog.itemListElement).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          itemOffered: expect.objectContaining({
            name: 'Landing pages com SEO para negócios locais',
          }),
        }),
      ]),
    );
    expect(jsonLd.makesOffer).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          itemOffered: expect.objectContaining({
            name: 'Captação de leads com WhatsApp e formulários online',
          }),
        }),
      ]),
    );
  });

  it('keeps sitemap and robots coherent with the production URL', () => {
    expect(sitemap()).toEqual([
      expect.objectContaining({
        url: siteUrl,
        priority: 1,
      }),
    ]);

    expect(robots()).toEqual(
      expect.objectContaining({
        sitemap: `${siteUrl}sitemap.xml`,
        rules: expect.objectContaining({
          userAgent: '*',
          allow: '/',
        }),
      }),
    );
  });
});
