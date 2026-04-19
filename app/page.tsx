import Header from '@/components/Header';
import Footer from '@/components/Footer';

const projects = [
  {
    name: 'Projeto 1',
    description: 'Descrição do projeto em 1-2 frases.',
    technologies: ['Next.js', 'Tailwind CSS', 'PostgreSQL'],
    projectUrl: '#',
    githubUrl: '#',
    image: '/images/projects/projeto-01.webp',
  },
  {
    name: 'Projeto 2',
    description: 'Descrição do projeto em 1-2 frases.',
    technologies: ['React', 'Node.js', 'Supabase'],
    projectUrl: '#',
    githubUrl: '#',
    image: '/images/projects/projeto-02.webp',
  },
  {
    name: 'Projeto 3',
    description: 'Descrição do projeto em 1-2 frases.',
    technologies: ['Next.js', 'TypeScript', 'Neon'],
    projectUrl: '#',
    githubUrl: null,
    image: '/images/projects/projeto-03.webp',
  },
  {
    name: 'Projeto 4',
    description: 'Descrição do projeto em 1-2 frases.',
    technologies: ['React', 'Tailwind CSS', 'PostgreSQL'],
    projectUrl: '#',
    githubUrl: '#',
    image: '/images/projects/projeto-04.webp',
  },
  {
    name: 'Projeto 5',
    description: 'Descrição do projeto em 1-2 frases.',
    technologies: ['Next.js', 'Node.js', 'Docker'],
    projectUrl: '#',
    githubUrl: '#',
    image: '/images/projects/projeto-05.webp',
  },
  {
    name: 'Projeto 6',
    description: 'Descrição do projeto em 1-2 frases.',
    technologies: ['React', 'TypeScript', 'Vercel'],
    projectUrl: '#',
    githubUrl: null,
    image: '/images/projects/projeto-06.webp',
  },
];

const services = [
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

const technologies = {
  frontend: [
    { name: 'HTML5', icon: '🌐' },
    { name: 'CSS', icon: '🎨' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'Tailwind CSS', icon: '💨' },
    { name: 'React.js', icon: '⚛️' },
    { name: 'Next.js', icon: '▲' },
  ],
  backend: [
    { name: 'Node.js', icon: '🟢' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'Supabase', icon: '🟩' },
    { name: 'Neon', icon: '💡' },
  ],
  infra: [
    { name: 'GitHub', icon: '🐙' },
    { name: 'Docker', icon: '🐳' },
    { name: 'Vercel', icon: '▲' },
  ],
};

export default function Home() {
  return (
    <>
      <Header />
      
      <main>
        {/* Hero Section */}
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

        {/* Apresentação Profissional */}
        <section id="about" className="py-20 bg-bg-surface">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-8 text-center">
              Sobre
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-text-secondary leading-relaxed">
                A Roldan Eng Software é um estúdio de desenvolvimento web focado em criar soluções digitais completas — desde landing pages profissionais até sistemas web com lógica, banco de dados e publicação em produção. Atendo pequenas empresas, autônomos e empreendedores que precisam de tecnologia sob medida, com comunicação clara e entregas reais.
              </p>
            </div>
          </div>
        </section>

        {/* Stack Tecnológica */}
        <section id="tech" className="py-20 bg-bg-base">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-12 text-center">
              Tecnologias
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Front-end */}
              <div className="bg-bg-card border border-border rounded-xl p-6">
                <h3 className="text-xl font-semibold text-text-primary mb-4">Front-end</h3>
                <div className="space-y-3">
                  {technologies.frontend.map((tech) => (
                    <div key={tech.name} className="flex items-center gap-3 bg-bg-surface rounded-lg p-3">
                      <span className="text-2xl">{tech.icon}</span>
                      <span className="text-text-primary font-mono text-sm">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Back-end & Banco de dados */}
              <div className="bg-bg-card border border-border rounded-xl p-6">
                <h3 className="text-xl font-semibold text-text-primary mb-4">Back-end & Banco de dados</h3>
                <div className="space-y-3">
                  {technologies.backend.map((tech) => (
                    <div key={tech.name} className="flex items-center gap-3 bg-bg-surface rounded-lg p-3">
                      <span className="text-2xl">{tech.icon}</span>
                      <span className="text-text-primary font-mono text-sm">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Infraestrutura & Ferramentas */}
              <div className="bg-bg-card border border-border rounded-xl p-6">
                <h3 className="text-xl font-semibold text-text-primary mb-4">Infraestrutura & Ferramentas</h3>
                <div className="space-y-3">
                  {technologies.infra.map((tech) => (
                    <div key={tech.name} className="flex items-center gap-3 bg-bg-surface rounded-lg p-3">
                      <span className="text-2xl">{tech.icon}</span>
                      <span className="text-text-primary font-mono text-sm">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projetos em Destaque */}
        <section id="projects" className="py-20 bg-bg-surface">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-12 text-center">
              Projetos em Destaque
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <div key={project.name} className="bg-bg-card border border-border rounded-xl overflow-hidden hover:border-accent/50 transition-all duration-200">
                  <div className="aspect-video bg-bg-surface flex items-center justify-center">
                    <span className="text-text-secondary text-sm">Screenshot do projeto</span>
                  </div>
                  <div className="p-6 flex flex-col h-full">
                    <h3 className="text-xl font-semibold text-text-primary mb-2">{project.name}</h3>
                    <p className="text-text-secondary mb-4 flex-grow">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="bg-bg-surface text-text-secondary px-3 py-1 rounded-full text-xs font-mono">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <a
                        href={project.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-accent hover:bg-accent-hover text-white text-center px-4 py-2 rounded-lg transition-all duration-200 text-sm font-semibold"
                      >
                        Ver projeto ↗
                      </a>
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`GitHub do projeto ${project.name}`}
                          className="bg-bg-surface hover:bg-border text-text-primary px-4 py-2 rounded-lg transition-all duration-200"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 2.614.121.759-.211 1.585-.32 2.39-.326.805.006 1.632.115 2.39.326 1.606-.444 2.606-.122 2.606-.122.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Serviços */}
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

        {/* Contato */}
        <section id="contact" className="py-20 bg-bg-surface">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-6">
              Entre em Contato
            </h2>
            <p className="text-lg text-text-secondary mb-12">
              Tem um projeto em mente? Entre em contato pelo WhatsApp ou e-mail. Respondo rápido e sem enrolação.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5516981442301?text=Ol%C3%A1%2C+gostaria+de+solicitar+um+or%C3%A7amento."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-accent/20 flex items-center justify-center gap-2"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </a>
              <a
                href="mailto:roldan.eng.software@gmail.com?subject=Orçamento%20-%20Projeto%20Web"
                className="bg-bg-card hover:bg-border text-text-primary px-8 py-4 rounded-lg font-semibold border border-border transition-all duration-200 flex items-center justify-center gap-2"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                E-mail
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
