import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="border-t border-border px-6 py-28">
      <div className="mx-auto max-w-content">
        <p className="section-label mb-3">Toolbox</p>
        <h2 className="font-display text-3xl font-medium text-paper sm:text-4xl">
          What I work with
        </h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((group) => (
            <div key={group.category}>
              <h3 className="font-mono text-xs uppercase tracking-wide text-slate">
                {group.category}
              </h3>
              <ul className="mt-4 flex flex-col gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="font-body text-sm text-paper"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
