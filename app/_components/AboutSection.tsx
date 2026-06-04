export default function AboutSection() {
  return (
    <section id="about" className="border-b border-border bg-bg-surface py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div>
          <p className="font-mono text-sm uppercase tracking-[0.18em] text-highlight">
            Sobre o trabalho
          </p>
          <h2 className="mt-4 text-3xl font-black text-text-primary sm:text-5xl">
            Fullstack para negócios que precisam parecer tão bons quanto funcionam.
          </h2>
        </div>
        <div className="space-y-6 text-lg leading-8 text-text-secondary">
          <p>
            A Roldan Eng Software é meu estúdio de desenvolvimento web. Eu uno
            olhar de produto, execução visual e engenharia fullstack para tirar
            ideias do briefing e colocá-las em produção com consistência.
          </p>
          <p>
            O objetivo é simples: criar páginas e sistemas que passam confiança,
            carregam bem, são fáceis de usar e continuam claros quando o projeto
            cresce. Nada de vitrine bonita com base frágil, nem sistema correto
            com experiência esquecida.
          </p>
        </div>
      </div>
    </section>
  );
}
