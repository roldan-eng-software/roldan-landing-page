import { contactChannels } from "@/lib/site";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-bg-surface py-24">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <p className="font-mono text-sm uppercase tracking-[0.18em] text-highlight">
          Próximo passo
        </p>
        <h2 className="mt-4 text-3xl font-black text-text-primary sm:text-5xl">
          Vamos transformar sua ideia em uma presença digital que sustenta confiança.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-text-secondary">
          Me chame com o contexto do projeto, prazo desejado e o que hoje está
          travando sua presença online. Eu respondo com caminho claro, sem
          enrolação.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href={contactChannels.whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center rounded-md bg-highlight px-6 py-3 font-semibold text-bg-base transition hover:bg-highlight-soft"
          >
            Chamar no WhatsApp
          </a>
          <a
            href={contactChannels.email.href}
            className="inline-flex min-h-12 items-center justify-center rounded-md border border-border bg-bg-card px-6 py-3 font-semibold text-text-primary transition hover:border-highlight/70 hover:text-highlight"
          >
            Enviar briefing por e-mail
          </a>
        </div>
      </div>
    </section>
  );
}
