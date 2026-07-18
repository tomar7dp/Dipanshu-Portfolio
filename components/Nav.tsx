"use client";

import { profile } from "@/data/portfolio";

const links = [
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 border-b border-border bg-paper/80 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-content items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="font-display text-lg font-medium tracking-tight text-ink"
        >
          {profile.name}
          <span className="text-accent"></span>
        </a>
        <ul className="hidden gap-8 sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-mono text-sm text-slate-light transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={`mailto:${profile.email}`}
          className="hidden rounded-md border border-border px-4 py-1.5 font-mono text-sm text-ink transition-colors hover:border-accent hover:text-accent sm:inline-block"
        >
          Say hi
        </a>
      </nav>
    </header>
  );
}