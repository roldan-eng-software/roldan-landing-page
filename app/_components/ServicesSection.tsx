import type { ReactNode } from 'react';

type Service = {
  name: string;
  description: string;
  icon: ReactNode;
};

const services: Service[] = [
  {
    name: 'Landing pages',
    description: 'Páginas profissionais para produtos, serviços e negócios',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    name: 'Sistemas web',
    description: 'Aplicações com autenticação, banco de dados e lógica de negócio',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    name: 'Aplicações fullstack',
    description: 'Projetos completos do front ao back, com deploy em produção',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    name: 'Interfaces modernas',
    description: 'UI limpa, responsiva e focada em usabilidade',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    name: 'Integrações',
    description: 'APIs externas, pagamentos, banco de dados e serviços de nuvem',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-bg-base">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-12 text-center">
          Serviços
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service) => (
            <div key={service.name} className="bg-bg-card border border-border rounded-xl p-6 hover:border-accent/50 transition-all duration-200">
              <div className="text-accent mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-text-primary mb-2">{service.name}</h3>
              <p className="text-text-secondary">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <a
            href="https://wa.me/5516981442301?text=Ol%C3%A1%2C+gostaria+de+solicitar+um+or%C3%A7amento."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-accent/20"
          >
            Solicitar orçamento
          </a>
        </div>
      </div>
    </section>
  );
}
