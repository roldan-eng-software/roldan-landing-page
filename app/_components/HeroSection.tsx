export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-bg-base via-bg-surface to-bg-base">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary mb-6 leading-tight">
          Desenvolvimento fullstack para landing pages, sistemas e aplicações web modernas.
        </h1>
        <p className="text-lg sm:text-xl text-text-secondary mb-8 max-w-3xl mx-auto">
          Do front-end ao back-end, entrego projetos completos com tecnologia moderna e atenção aos detalhes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/5516981442301?text=Ol%C3%A1%2C+gostaria+de+solicitar+um+or%C3%A7amento."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-accent/20"
          >
            Solicitar orçamento
          </a>
          <a
            href="mailto:roldan.eng.software@gmail.com?subject=Orçamento%20-%20Projeto%20Web"
            className="bg-bg-card hover:bg-border text-text-primary px-8 py-4 rounded-lg font-semibold border border-border transition-all duration-200"
          >
            Falar por e-mail
          </a>
        </div>
      </div>
    </section>
  );
}
