import TerminalWindow from "./TerminalWindow";

const PROJECTS = [
  {
    name: "project-one",
    desc: "A short description of what this project does and the problem it solves for its users.",
    stack: ["Next.js", "TypeScript", "Postgres"],
    href: "#",
  },
  {
    name: "project-two",
    desc: "A short description of what this project does and the problem it solves for its users.",
    stack: ["React", "Node.js", "Redis"],
    href: "#",
  },
  {
    name: "project-three",
    desc: "A short description of what this project does and the problem it solves for its users.",
    stack: ["Python", "FastAPI", "Docker"],
    href: "#",
  },
];

export default function Projects() {
  return (
    <TerminalWindow id="projects" command="ls -la projects/">
      <div className="grid gap-4 sm:grid-cols-2">
        {PROJECTS.map((p) => (
          <a
            key={p.name}
            href={p.href}
            className="group border border-line p-5 transition-colors hover:border-amber"
          >
            <p className="text-sm text-ink">
              <span className="text-cyan">drwxr-xr-x</span> {p.name}/
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {p.desc}
            </p>
            <ul className="mt-4 flex flex-wrap gap-2 text-xs">
              {p.stack.map((s) => (
                <li
                  key={s}
                  className="border border-line px-2 py-1 text-muted group-hover:border-amber/40 group-hover:text-amber"
                >
                  {s}
                </li>
              ))}
            </ul>
          </a>
        ))}
      </div>
    </TerminalWindow>
  );
}
