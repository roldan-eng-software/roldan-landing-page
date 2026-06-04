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
    id: "case-sistema-web",
    name: "Sistema web sob curadoria",
    url: "https://wa.me/5516981442301?text=Ol%C3%A1%2C+gostaria+de+ver+refer%C3%AAncias+de+sistemas+web.",
    description:
      "Espaço reservado para um sistema publicado com autenticação, dados e fluxo de negócio demonstrável.",
    serviceType: "Sistema web",
    tags: ["Fullstack", "Banco de dados", "Fluxos internos"],
    screenshot: {
      sourceUrl: "",
      assetPath: "/projects/project-fallback.svg",
      alt: "Espaço reservado para prévia de sistema web concluído",
      width: 1280,
      height: 720,
      capturedAt: "2026-06-04",
      captureStatus: "failed",
      failureReason: "Link público ainda não informado.",
    },
    featured: false,
    status: "draft",
    linkLabel: "Solicitar referência",
  },
  {
    id: "case-landing-page",
    name: "Landing page de cliente",
    url: "https://wa.me/5516981442301?text=Ol%C3%A1%2C+gostaria+de+ver+refer%C3%AAncias+de+landing+pages.",
    description:
      "Slot preparado para exibir uma landing page real com captura automática da primeira dobra publicada.",
    serviceType: "Landing page",
    tags: ["Conversão", "Design responsivo", "Publicação"],
    screenshot: {
      sourceUrl: "",
      assetPath: "/projects/project-fallback.svg",
      alt: "Espaço reservado para prévia de landing page concluída",
      width: 1280,
      height: 720,
      capturedAt: "2026-06-04",
      captureStatus: "failed",
      failureReason: "Link público ainda não informado.",
    },
    featured: false,
    status: "draft",
    linkLabel: "Solicitar referência",
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
