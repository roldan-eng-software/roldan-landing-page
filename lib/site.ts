const githubPagesUrl = "https://roldan-eng-software.github.io/roldan-page/";
const vercelUrl = "https://roldan-landing.vercel.app/";

function withTrailingSlash(url: string) {
  return url.endsWith("/") ? url : `${url}/`;
}

export const siteUrl = withTrailingSlash(
  process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.GITHUB_PAGES === "true" ? githubPagesUrl : vercelUrl)
);

const whatsappMessage = "Olá, gostaria de conversar sobre um projeto web.";

export const contactChannels = {
  whatsapp: {
    label: "WhatsApp",
    href: `https://wa.me/5516981442301?text=${encodeURIComponent(whatsappMessage)}`,
    ariaLabel: "Conversar pelo WhatsApp sobre um projeto web",
  },
  email: {
    label: "E-mail",
    href: "mailto:roldan.eng.software@gmail.com?subject=Orçamento%20-%20Projeto%20Web",
    ariaLabel: "Enviar e-mail para Roldan Eng Software",
  },
  linkedin: {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sandro-roldan-b8721a3b5/",
    ariaLabel: "Abrir LinkedIn de Sandro Roldan",
  },
  github: {
    label: "GitHub",
    href: "https://github.com/roldan-eng-software",
    ariaLabel: "Abrir GitHub da Roldan Eng Software",
  },
  instagram: {
    label: "Instagram",
    href: "https://www.instagram.com/roldan.eng.software/",
    ariaLabel: "Abrir Instagram da Roldan Eng Software",
  },
} as const;
