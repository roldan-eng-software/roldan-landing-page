export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-12 text-center">
          Projetos em Destaque
        </h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-text-secondary leading-relaxed mb-8">
            O portfólio público está sendo organizado com cases reais, capturas e links de produção.
            Enquanto isso, posso apresentar referências de trabalhos e formatos de entrega em uma conversa rápida.
          </p>
          <a
            href="https://wa.me/5516981442301?text=Ol%C3%A1%2C+gostaria+de+ver+refer%C3%AAncias+de+projetos."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-accent/20"
          >
            Ver referências por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
