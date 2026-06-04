import { siteUrl } from "@/lib/site";

export const seoProfile = {
  title: "Roldan Eng Software | Desenvolvedor Fullstack para Landing Pages e Sistemas Web",
  description:
    "Desenvolvimento fullstack com design moderno, SEO técnico e sistemas web sob medida para pequenas empresas, autônomos e negócios em crescimento.",
  topics: [
    "desenvolvedor fullstack",
    "landing pages",
    "sistemas web",
    "aplicações web",
    "Next.js",
    "React",
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
      "Desenvolvimento fullstack para landing pages, sistemas web e aplicações modernas com foco em design, performance e SEO.",
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
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Landing pages profissionais",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Sistemas e aplicações web fullstack",
        },
      },
    ],
  };
}
