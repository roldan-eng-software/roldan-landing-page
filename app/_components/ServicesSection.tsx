import { contactChannels } from "@/lib/site";

const services = [
  {
    name: "Landing pages autorais",
    description:
      "Páginas para serviços, produtos e campanhas com narrativa clara, design responsivo e estrutura pronta para busca orgânica.",
  },
  {
    name: "Sistemas web fullstack",
    description:
      "Aplicações com autenticação, banco de dados, integrações e fluxos internos pensados para reduzir retrabalho.",
  },
  {
    name: "Interfaces de produto",
    description:
      "Telas que organizam informação, guiam decisões e tornam ações importantes fáceis de encontrar.",
  },
  {
    name: "Integrações e automações",
    description:
      "Conexões com APIs, pagamentos, armazenamento e serviços externos para transformar processo manual em fluxo confiável.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="border-b border-border bg-bg-base py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="font-mono text-sm uppercase tracking-[0.18em] text-highlight">
            Serviços
          </p>
          <h2 className="mt-4 text-3xl font-black text-text-primary sm:text-5xl">
            Do primeiro clique ao sistema rodando.
          </h2>
          <p className="mt-5 text-lg leading-8 text-text-secondary">
            Trabalho em entregas completas: estratégia da página, interface,
            desenvolvimento, integração, SEO técnico e publicação.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {services.map((service, index) => (
            <article key={service.name} className="group rounded-lg border border-border bg-bg-card p-6 transition hover:border-highlight/60">
              <p className="font-mono text-xs text-text-muted">0{index + 1}</p>
              <h3 className="mt-5 text-2xl font-bold text-text-primary">{service.name}</h3>
              <p className="mt-3 leading-7 text-text-secondary">{service.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-10">
          <a
            href={contactChannels.whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center rounded-md bg-highlight px-6 py-3 font-semibold text-bg-base transition hover:bg-highlight-soft"
          >
            Conversar sobre meu projeto
          </a>
        </div>
      </div>
    </section>
  );
}
