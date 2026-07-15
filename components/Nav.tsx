"use client";

const LINKS = [
  { href: "#about", label: "whoami" },
  { href: "#projects", label: "ls projects/" },
  { href: "#skills", label: "cat skills.json" },
  { href: "#experience", label: "git log" },
  { href: "#contact", label: "./contact.sh" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/85 backdrop-blur">
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4 text-sm">
        <a href="#top" className="text-ink">
          <span className="text-amber">~</span>/your-name
        </a>
        <ul className="hidden gap-6 sm:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-muted transition-colors hover:text-amber"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
