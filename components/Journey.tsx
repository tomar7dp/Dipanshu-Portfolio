import { journey } from "@/data/portfolio";

export default function Journey() {
  return (
    <section id="journey" className="border-t border-border px-6 py-28">
      <div className="mx-auto max-w-content">
        <p className="section-label mb-3">Growth</p>
        <h2 className="font-display text-3xl font-medium text-ink sm:text-4xl">
          My journey so far
        </h2>

        <ol className="mt-14 border-l border-border">
          {journey.map((entry) => (
            <li key={entry.year} className="relative pb-12 pl-8 last:pb-0">
              <span
                className={
                  "absolute -left-[7px] top-1 h-3.5 w-3.5 rounded-full border-2 border-paper " +
                  (entry.current ? "bg-accent" : "bg-slate")
                }
              />
              <p className="font-mono text-xs text-slate">{entry.year}</p>
              <h3 className="mt-1 font-display text-xl text-ink">
                {entry.title}
              </h3>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-light">
                {entry.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
