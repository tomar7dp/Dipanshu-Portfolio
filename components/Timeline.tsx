import { experience } from "@/data/portfolio";

export default function Timeline() {
  return (
    <section id="experience" className="border-t border-border px-6 py-28">
      <div className="mx-auto max-w-content">
        <p className="section-label mb-3">Journey</p>
        <h2 className="font-display text-3xl font-medium text-ink sm:text-4xl">
          Where I&apos;ve worked
        </h2>

        <ol className="mt-14 border-l border-border">
          {experience.map((job) => (
            <li key={job.company} className="relative pb-12 pl-8 last:pb-0">
              <span className="absolute -left-[7px] top-1 h-3.5 w-3.5 rounded-full border-2 border-paper bg-accent" />
              <p className="font-mono text-xs text-slate">{job.period}</p>
              <h3 className="mt-1 font-display text-xl text-ink">
                {job.role}
                <span className="text-slate-light"> · {job.company}</span>
              </h3>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-light">
                {job.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}