import { about } from "@/data/portfolio";

const blocks = [
  { label: "Overview", text: about.overview },
  { label: "Current focus", text: about.focus },
  { label: "How I work", text: about.approach },
];

export default function About() {
  return (
    <section id="about" className="border-t border-border px-6 py-28">
      <div className="mx-auto max-w-content">
        <p className="section-label mb-3">About</p>
        <h2 className="font-display text-3xl font-medium text-ink sm:text-4xl">
          A bit about me
        </h2>

        <div className="mt-12 grid gap-5 lg:grid-cols-[1.4fr_1fr]">
          <div className="flex flex-col gap-5">
            {blocks.map((block) => (
              <div
                key={block.label}
                className="rounded-lg border border-border bg-surface p-6"
              >
                <p className="font-mono text-xs uppercase tracking-wide text-slate">
                  {block.label}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-light">
                  {block.text}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-5">
            {about.stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col justify-center rounded-lg border border-border bg-surface p-6"
              >
                <span className="font-display text-3xl text-ink">
                  {stat.value}
                </span>
                <span className="mt-2 font-mono text-xs uppercase tracking-wide text-slate">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
