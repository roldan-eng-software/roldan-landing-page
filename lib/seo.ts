import { siteUrl } from "@/lib/site";

export const seoProfile = {
  title: "Desenvolvedor Fullstack em São Carlos | Landing Pages, SEO e Sistemas Web",
  description:
    "Desenvolvedor fullstack em São Carlos para landing pages, sites com SEO, formulários de orçamento, vitrines e sistemas web que geram leads.",
  topics: [
    "desenvolvedor fullstack",
    "desenvolvedor fullstack em São Carlos",
    "desenvolvedor web em São Carlos",
    "landing pages",
    "landing page profissional",
    "landing page para negócios locais",
    "landing page para petshop",
    "landing page para semijoias",
    "landing page para móveis planejados",
    "landing page para marcenaria",
    "sistemas web",
    "aplicações web",
    "captação de leads",
    "formulário de orçamento online",
    "site com WhatsApp",
    "site responsivo",
    "SEO técnico",
    "SEO para landing pages",
    "vitrine online",
    "ferramentas web sob medida",
    "encurtador de links",
    "calculadora de rotas",
    "orçamento de móveis planejados online",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Vercel",
    "São Carlos",
    "São Paulo",
    "Brasil",
  ],
  serviceArea: ["São Carlos", "São Paulo", "Brasil"],
  canonicalUrl: siteUrl,
  ogImage: "/og-image.svg",
} as const;

export function buildProfessionalServiceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Roldan Eng Software",
    description:
      "Desenvolvimento fullstack para landing pages, sistemas web, vitrines online e fluxos de captação de leads com foco em design, performance, SEO e conversão.",
    url: siteUrl,
    email: "roldan.eng.software@gmail.com",
    telephone: "+5516981442301",
    areaServed: seoProfile.serviceArea,
    address: {
      "@type": "PostalAddress",
      addressLocality: "São Carlos",
      addressRegion: "SP",
      addressCountry: "BR",
    },
    sameAs: [
      "https://www.linkedin.com/in/sandro-roldan-b8721a3b5/",
      "https://github.com/roldan-eng-software",
      "https://www.instagram.com/roldan.eng.software/",
    ],
    knowsAbout: seoProfile.topics,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Serviços de desenvolvimento web",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Landing pages com SEO para negócios locais",
            serviceType: "Desenvolvimento de landing pages",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Sites comerciais com WhatsApp e captação de leads",
            serviceType: "Criação de sites comerciais",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Formulários de orçamento online",
            serviceType: "Desenvolvimento de fluxos de orçamento",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Aplicações web e ferramentas sob medida",
            serviceType: "Desenvolvimento fullstack",
          },
        },
      ],
    },
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Landing pages profissionais com SEO técnico",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Sistemas e aplicações web fullstack",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Sites para petshop, semijoias, marcenaria e negócios locais",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Captação de leads com WhatsApp e formulários online",
        },
      },
    ],
  };
}
