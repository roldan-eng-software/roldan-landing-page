import Image from "next/image";
import { portfolioProjects } from "@/lib/portfolio";

export default function ProjectsSection() {
  return (
    <section id="projects" className="border-b border-border bg-bg-surface py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="font-mono text-sm uppercase tracking-[0.18em] text-highlight">
              Trabalhos realizados
            </p>
            <h2 className="mt-4 text-3xl font-black text-text-primary sm:text-5xl">
              Projetos que mostram gosto, processo e entrega.
            </h2>
            <p className="mt-5 text-lg leading-8 text-text-secondary">
              Cada card foi pensado para receber um link público e uma captura da
              primeira página publicada. Quando o link ainda está em curadoria, o
              fallback mantém a experiência honesta e estável.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {portfolioProjects.map((project) => (
            <article key={project.id} className="project-card overflow-hidden rounded-lg border border-border bg-bg-card">
              <div className="project-preview relative border-b border-border bg-bg-base">
                <Image
                  src={project.screenshot.assetPath}
                  alt={project.screenshot.alt}
                  width={project.screenshot.width}
                  height={project.screenshot.height}
                  className="h-full w-full object-cover"
                  priority={project.featured}
                />
              </div>
              <div className="p-5">
                <div className="mb-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-highlight/10 px-3 py-1 font-mono text-xs text-highlight">
                    {project.serviceType}
                  </span>
                  <span className="rounded-full border border-border px-3 py-1 font-mono text-xs text-text-muted">
                    {project.screenshot.captureStatus === "captured" || project.screenshot.captureStatus === "manual"
                      ? `captura ${project.screenshot.capturedAt}`
                      : "aguardando captura"}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-text-primary">{project.name}</h3>
                <p className="mt-3 leading-7 text-text-secondary">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-border px-3 py-1 text-xs text-text-secondary">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex min-h-11 items-center justify-center rounded-md border border-highlight/50 px-4 py-2 font-semibold text-highlight transition hover:bg-highlight hover:text-bg-base"
                >
                  {project.linkLabel}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
