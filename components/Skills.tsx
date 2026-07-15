import TerminalWindow from "./TerminalWindow";

const SKILLS: Record<string, string[]> = {
  languages: ["TypeScript", "JavaScript", "Python", "SQL"],
  frontend: ["React", "Next.js", "Tailwind CSS"],
  backend: ["Node.js", "Express", "FastAPI"],
  infra: ["Docker", "PostgreSQL", "AWS", "CI/CD"],
};

export default function Skills() {
  const entries = Object.entries(SKILLS);
  return (
    <TerminalWindow id="skills" command="cat skills.json">
      <pre className="overflow-x-auto text-sm leading-relaxed text-ink">
        <code>
          {"{\n"}
          {entries.map(([key, values], i) => (
            <span key={key}>
              {"  "}
              <span className="text-cyan">&quot;{key}&quot;</span>
              {": ["}
              {values.map((v, j) => (
                <span key={v}>
                  <span className="text-amber">&quot;{v}&quot;</span>
                  {j < values.length - 1 ? ", " : ""}
                </span>
              ))}
              {"]"}
              {i < entries.length - 1 ? ",\n" : "\n"}
            </span>
          ))}
          {"}"}
        </code>
      </pre>
    </TerminalWindow>
  );
}
