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

const technologyGroups = [
  { title: 'Front-end', items: technologies.frontend },
  { title: 'Back-end & Banco de dados', items: technologies.backend },
  { title: 'Infraestrutura & Ferramentas', items: technologies.infra },
];

export default function TechnologySection() {
  return (
    <section id="tech" className="py-20 bg-bg-base">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-12 text-center">
          Tecnologias
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {technologyGroups.map((group) => (
            <div key={group.title} className="bg-bg-card border border-border rounded-xl p-6">
              <h3 className="text-xl font-semibold text-text-primary mb-4">{group.title}</h3>
              <div className="space-y-3">
                {group.items.map((tech) => (
                  <div key={tech.name} className="flex items-center gap-3 bg-bg-surface rounded-lg p-3">
                    <span className="text-2xl">{tech.icon}</span>
                    <span className="text-text-primary font-mono text-sm">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
