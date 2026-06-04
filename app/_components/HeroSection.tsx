import { contactChannels } from "@/lib/site";

const proofPoints = [
  "Front-end que convence",
  "Back-end que sustenta",
  "SEO técnico desde a base",
];

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden border-b border-border pt-28">
      <div className="mx-auto grid min-h-[calc(100svh-4rem)] max-w-6xl items-center gap-12 px-4 pb-20 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8">
        <div>
          <p className="mb-5 inline-flex rounded-full border border-highlight/30 bg-highlight/10 px-4 py-2 font-mono text-xs uppercase tracking-[0.18em] text-highlight">
            Desenvolvedor fullstack em São Carlos, SP
          </p>
          <h1 className="max-w-4xl text-balance text-4xl font-black leading-[1.02] text-text-primary sm:text-6xl lg:text-7xl">
            Interfaces com gosto de produto. Código com cara de produção.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-text-secondary sm:text-xl">
            Eu crio landing pages, sistemas web e aplicações fullstack para quem
            precisa vender melhor, operar com menos atrito e transmitir confiança
            antes mesmo da primeira conversa.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href={contactChannels.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-highlight px-6 py-3 font-semibold text-bg-base transition hover:bg-highlight-soft"
            >
              Solicitar orçamento
            </a>
            <a
              href="#projects"
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-border bg-bg-card px-6 py-3 font-semibold text-text-primary transition hover:border-highlight/70 hover:text-highlight"
            >
              Ver trabalhos
            </a>
          </div>

          <dl className="mt-10 grid gap-3 sm:grid-cols-3">
            {proofPoints.map((item, index) => (
              <div key={item} className="rounded-md border border-border bg-bg-card/70 p-4">
                <dt className="font-mono text-xs text-text-muted">0{index + 1}</dt>
                <dd className="mt-2 text-sm font-semibold text-text-primary">{item}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="rounded-lg border border-border bg-bg-card p-4 shadow-2xl shadow-black/30">
            <div className="mb-4 flex items-center justify-between border-b border-border pb-3">
              <div className="flex gap-2" aria-hidden="true">
                <span className="h-3 w-3 rounded-full bg-orange-400" />
                <span className="h-3 w-3 rounded-full bg-emerald-400" />
                <span className="h-3 w-3 rounded-full bg-sky-400" />
              </div>
              <span className="font-mono text-xs text-text-muted">produção</span>
            </div>
            <div className="space-y-4">
              <div className="rounded-md bg-bg-base p-5">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-highlight">
                  briefing / entrega
                </p>
                <p className="mt-3 text-2xl font-bold text-text-primary">
                  Estratégia, interface, integração e deploy no mesmo fluxo.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-md border border-border p-4">
                  <p className="text-3xl font-black text-text-primary">100%</p>
                  <p className="mt-1 text-sm text-text-secondary">foco em clareza</p>
                </div>
                <div className="rounded-md border border-border p-4">
                  <p className="text-3xl font-black text-text-primary">0</p>
                  <p className="mt-1 text-sm text-text-secondary">layout genérico</p>
                </div>
              </div>
              <div className="rounded-md border border-highlight/20 bg-highlight/10 p-4">
                <p className="text-sm leading-6 text-text-secondary">
                  Uma landing boa não grita tecnologia; ela faz o visitante
                  entender, confiar e agir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
