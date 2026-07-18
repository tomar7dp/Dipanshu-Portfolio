import { projects } from "@/data/portfolio";
import { ArrowUpRight, Github } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-28">
      <div className="mx-auto max-w-content">
        <p className="section-label mb-3">Projects</p>
        <h2 className="font-display text-3xl font-medium text-ink sm:text-4xl">
          Things I&apos;ve built
        </h2>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col justify-between rounded-lg border border-border bg-surface p-6 transition-colors hover:border-accent-dim"
            >
              <div>
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-xl text-ink">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <span className="rounded-full border border-border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-slate-light">
                      Featured
                    </span>
                  )}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-light">
                  {project.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded border border-border px-2 py-0.5 font-mono text-xs text-slate"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 flex gap-5 font-mono text-sm">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-accent transition-opacity hover:opacity-80"
                >
                  Live <ArrowUpRight size={14} />
                </a>
                <a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-slate-light transition-colors hover:text-ink"
                >
                  <Github size={14} /> Source
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}