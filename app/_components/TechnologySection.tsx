const technologyGroups = [
  {
    title: "Interface e conversão",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Design responsivo"],
    note: "Landing pages, vitrines e experiências rápidas para transformar visita em contato.",
  },
  {
    title: "Fluxos de negócio",
    items: ["Formulários", "WhatsApp", "Uploads", "QR Code", "Cálculos web"],
    note: "Captação de leads, orçamento online, encurtador de links e ferramentas sob medida.",
  },
  {
    title: "Dados e integração",
    items: ["Node.js", "PostgreSQL", "Supabase", "Neon", "APIs"],
    note: "Back-end, persistência e integrações para projetos que precisam continuar crescendo.",
  },
  {
    title: "Publicação e busca",
    items: ["Vercel", "GitHub", "SEO técnico", "Schema.org", "Analytics"],
    note: "Deploy em produção, estrutura para buscadores e acompanhamento de performance.",
  },
];

export default function TechnologySection() {
  return (
    <section id="tech" className="border-b border-border bg-bg-base py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="font-mono text-sm uppercase tracking-[0.18em] text-highlight">
              Stack com propósito
            </p>
            <h2 className="mt-4 text-3xl font-black text-text-primary sm:text-5xl">
              Tecnologia aparece no resultado, não na aparência.
            </h2>
          </div>
          <div className="grid gap-4">
            {technologyGroups.map((group) => (
              <article key={group.title} className="rounded-lg border border-border bg-bg-card p-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-text-primary">{group.title}</h3>
                    <p className="mt-2 text-text-secondary">{group.note}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 sm:justify-end">
                    {group.items.map((tech) => (
                      <span key={tech} className="rounded-full border border-border bg-bg-base px-3 py-1 font-mono text-xs text-text-secondary">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
