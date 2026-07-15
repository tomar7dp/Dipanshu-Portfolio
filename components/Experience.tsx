import TerminalWindow from "./TerminalWindow";

const HISTORY = [
  {
    hash: "a1b2c3d",
    date: "2024 — Present",
    role: "Senior Software Engineer, Company Name",
    detail: "Leading development of core product features and mentoring engineers.",
  },
  {
    hash: "e4f5g6h",
    date: "2022 — 2024",
    role: "Software Engineer, Company Name",
    detail: "Built and shipped customer-facing features across the stack.",
  },
  {
    hash: "i7j8k9l",
    date: "2020 — 2022",
    role: "Junior Developer, Company Name",
    detail: "Started my career working on internal tools and API integrations.",
  },
];

export default function Experience() {
  return (
    <TerminalWindow id="experience" command="git log --oneline --graph">
      <ul className="space-y-6">
        {HISTORY.map((h, i) => (
          <li key={h.hash} className="relative pl-6">
            <span className="absolute left-0 top-1.5 h-2 w-2 rounded-full bg-amber" />
            {i < HISTORY.length - 1 && (
              <span className="absolute left-[3px] top-4 h-full w-px bg-line" />
            )}
            <p className="text-sm text-ink">
              <span className="text-cyan">{h.hash}</span>{" "}
              <span className="text-muted">{h.date}</span>
            </p>
            <p className="mt-1 text-sm font-medium text-ink sm:text-base">
              {h.role}
            </p>
            <p className="mt-1 text-sm text-muted">{h.detail}</p>
          </li>
        ))}
      </ul>
    </TerminalWindow>
  );
}
