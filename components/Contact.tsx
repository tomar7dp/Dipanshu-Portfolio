import TerminalWindow from "./TerminalWindow";

const LINKS = [
  { label: "email", value: "you@example.com", href: "mailto:you@example.com" },
  { label: "github", value: "github.com/yourname", href: "https://github.com/yourname" },
  { label: "linkedin", value: "linkedin.com/in/yourname", href: "https://linkedin.com/in/yourname" },
];

export default function Contact() {
  return (
    <TerminalWindow id="contact" command="./contact.sh --send">
      <p className="text-sm text-muted">
        <span className="text-amber">&gt;</span> Enter a channel to reach me:
      </p>
      <ul className="mt-4 space-y-2 text-sm sm:text-base">
        {LINKS.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="text-ink transition-colors hover:text-amber"
            >
              <span className="text-cyan">{l.label}</span>
              <span className="text-muted"> :: </span>
              {l.value}
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-8 text-xs text-muted">
        © {new Date().getFullYear()} Your Name. Built with Next.js.
      </p>
    </TerminalWindow>
  );
}
