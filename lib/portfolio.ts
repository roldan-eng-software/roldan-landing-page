export type ProjectStatus = "ready" | "draft" | "unavailable" | "needs-recapture";

export type ScreenshotAsset = {
  sourceUrl: string;
  assetPath: string;
  alt: string;
  width: number;
  height: number;
  capturedAt: string;
  captureStatus: "captured" | "failed" | "manual";
  failureReason?: string;
};

export type PortfolioProject = {
  id: string;
  name: string;
  url: string;
  description: string;
  serviceType: string;
  tags: string[];
  screenshot: ScreenshotAsset;
  featured: boolean;
  status: ProjectStatus;
  linkLabel: string;
};

export const projectScreenshotDefaults = {
  width: 1280,
  height: 720,
  viewportWidth: 1440,
  viewportHeight: 1000,
  outputDir: "public/projects",
  format: "png",
} as const;

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "roldan-eng-software",
    name: "Roldan Eng Software",
    url: "https://roldan-landing.vercel.app/",
    description:
      "Landing page institucional para apresentar serviços fullstack, stack técnica, contato e presença orgânica.",
    serviceType: "Landing page institucional",
    tags: ["Next.js", "React", "SEO", "UI responsiva"],
    screenshot: {
      sourceUrl: "https://roldan-landing.vercel.app/",
      assetPath: "/projects/roldan-eng-software.svg",
      alt: "Prévia da página inicial da Roldan Eng Software",
      width: 1280,
      height: 720,
      capturedAt: "2026-06-04",
      captureStatus: "manual",
    },
    featured: true,
    status: "ready",
    linkLabel: "Abrir projeto",
  },
  {
    id: "urlencurta",
    name: "URLEncurta",
    url: "https://www.urlencurta.com.br/",
    description:
      "Aplicação web para encurtar links, gerar QR Code e organizar compartilhamentos com uma experiência direta.",
    serviceType: "Aplicação web",
    tags: ["Next.js", "Produto web", "UX simples"],
    screenshot: {
      sourceUrl: "https://www.urlencurta.com.br/",
      assetPath: "/projects/urlencurta.png",
      alt: "Prévia da página inicial do URLEncurta",
      width: 1280,
      height: 720,
      capturedAt: "2026-06-04",
      captureStatus: "captured",
    },
    featured: false,
    status: "ready",
    linkLabel: "Abrir projeto",
  },
  {
    id: "rotaboa",
    name: "RotaBoa",
    url: "https://rotaboa.vercel.app/",
    description:
      "Aplicação web para comparar rotas com pedágio, distância, combustível e estimativa de custo de viagem.",
    serviceType: "Aplicação web",
    tags: ["Next.js", "Ferramenta web", "Cálculo de rotas"],
    screenshot: {
      sourceUrl: "https://rotaboa.vercel.app/",
      assetPath: "/projects/rotaboa.png",
      alt: "Prévia da página inicial do RotaBoa",
      width: 1280,
      height: 720,
      capturedAt: "2026-06-04",
      captureStatus: "captured",
    },
    featured: false,
    status: "ready",
    linkLabel: "Abrir projeto",
  },
  {
    id: "roldan-petshop",
    name: "PetCare Prime",
    url: "https://roldan-petshop.vercel.app/",
    description:
      "Landing page para petshop premium em Pinheiros, com apresentação de serviços, produtos, dúvidas e chamada direta para WhatsApp.",
    serviceType: "Landing page comercial",
    tags: ["Next.js", "Petshop", "WhatsApp"],
    screenshot: {
      sourceUrl: "https://roldan-petshop.vercel.app/",
      assetPath: "/projects/roldan-petshop.png",
      alt: "Prévia da página inicial do PetCare Prime",
      width: 1280,
      height: 720,
      capturedAt: "2026-06-04",
      captureStatus: "captured",
    },
    featured: false,
    status: "ready",
    linkLabel: "Abrir projeto",
  },
  {
    id: "semijoias-three",
    name: "Simone Semi Joias",
    url: "https://semijoias-three.vercel.app/",
    description:
      "Landing page de moda e semijoias com vitrine elegante, proposta visual premium, navegação de coleção e foco em conversão.",
    serviceType: "Landing page comercial",
    tags: ["Next.js", "Semijoias", "E-commerce"],
    screenshot: {
      sourceUrl: "https://semijoias-three.vercel.app/",
      assetPath: "/projects/semijoias-three.png",
      alt: "Prévia da página inicial da Simone Semi Joias",
      width: 1280,
      height: 720,
      capturedAt: "2026-06-04",
      captureStatus: "captured",
    },
    featured: false,
    status: "ready",
    linkLabel: "Abrir projeto",
  },
  {
    id: "planejados-online2",
    name: "Roldan Marcenaria",
    url: "https://planejados-online2.vercel.app/",
    description:
      "Landing page para captação de orçamentos de móveis planejados, com formulário guiado, upload de referências e proposta de atendimento rápido.",
    serviceType: "Landing page comercial",
    tags: ["Next.js", "Móveis planejados", "Captação de leads"],
    screenshot: {
      sourceUrl: "https://planejados-online2.vercel.app/",
      assetPath: "/projects/planejados-online2.png",
      alt: "Prévia da página inicial da Roldan Marcenaria",
      width: 1280,
      height: 720,
      capturedAt: "2026-06-04",
      captureStatus: "captured",
    },
    featured: false,
    status: "ready",
    linkLabel: "Abrir projeto",
  },
];

export function isReadyProject(project: PortfolioProject) {
  return project.status === "ready" && project.screenshot.captureStatus !== "failed";
}

export function validatePortfolioProject(project: PortfolioProject) {
  const hasRequiredText =
    Boolean(project.id) &&
    Boolean(project.name) &&
    Boolean(project.url) &&
    Boolean(project.description) &&
    Boolean(project.serviceType);

  const hasHttpsOrContactUrl =
    project.url.startsWith("https://") || project.url.startsWith("mailto:");

  const hasStableScreenshot =
    Boolean(project.screenshot.assetPath) &&
    project.screenshot.width > 0 &&
    project.screenshot.height > 0 &&
    Boolean(project.screenshot.alt);

  return hasRequiredText && hasHttpsOrContactUrl && hasStableScreenshot;
}
