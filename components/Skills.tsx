import { Code2, Layers, Database, Server, GitBranch, TerminalSquare, Box, Cloud, LineChart } from "lucide-react";
import { skills } from "@/data/portfolio";

const icons = {
  code: Code2,
  layers: Layers,
  database: Database,
  server: Server,
  git: GitBranch,
  terminal: TerminalSquare,
  box: Box,
  cloud: Cloud,
  chart: LineChart,
};

export default function Skills() {
  return (
    <section id="skills" className="border-t border-border px-6 py-28">
      <div className="mx-auto max-w-content">
        <p className="section-label mb-3">Toolbox</p>
        <h2 className="font-display text-3xl font-medium text-ink sm:text-4xl">
          What I work with
        </h2>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => {
            const Icon = icons[skill.icon as keyof typeof icons] ?? Code2;
            return (
              <div
                key={skill.name}
                className="rounded-lg border border-border bg-surface p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-ink">
                    <Icon size={17} />
                  </span>
                  <span className="font-mono text-xs text-slate">
                    {skill.percent}%
                  </span>
                </div>
                <h3 className="mt-4 font-display text-lg text-ink">
                  {skill.name}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-slate">
                  {skill.description}
                </p>
                <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-surface-2">
                  <div
                    className="h-full rounded-full bg-accent"
                    style={{ width: `${skill.percent}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}