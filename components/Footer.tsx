import { contactChannels } from "@/lib/site";

const socialLinks = [
  contactChannels.linkedin,
  contactChannels.github,
  contactChannels.instagram,
];

const Footer = () => {
  return (
    <footer className="border-t border-border bg-bg-base py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <h3 className="text-xl font-black text-text-primary">
              Roldan Eng Software
            </h3>
            <p className="mt-4 max-w-md leading-7 text-text-secondary">
              Desenvolvimento fullstack para landing pages, sistemas web e
              aplicações que precisam unir bom gosto, clareza e produção.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-text-primary">Contato</h4>
            <div className="mt-4 space-y-3">
              <a
                href={contactChannels.email.href}
                className="block text-text-secondary transition hover:text-highlight"
              >
                roldan.eng.software@gmail.com
              </a>
              <a
                href={contactChannels.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-text-secondary transition hover:text-highlight"
              >
                +55 (16) 98144-2301
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-text-primary">Presença</h4>
            <div className="mt-4 flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.ariaLabel}
                  className="rounded-full border border-border px-3 py-2 text-sm text-text-secondary transition hover:border-highlight/70 hover:text-highlight"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-sm text-text-muted">
          <p>&copy; {new Date().getFullYear()} Roldan Eng Software. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
