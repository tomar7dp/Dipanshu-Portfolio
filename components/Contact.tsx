import { profile } from "@/data/portfolio";
import { ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-border px-6 py-28">
      <div className="mx-auto max-w-content">
        <p className="section-label mb-3">Contact</p>
        <h2 className="max-w-xl font-display text-3xl font-medium text-paper sm:text-4xl">
          Have something worth building? Let&apos;s talk.
        </h2>

        <a
          href={`mailto:${profile.email}`}
          className="mt-8 inline-flex items-center gap-2 font-mono text-lg text-accent transition-opacity hover:opacity-80 sm:text-2xl"
        >
          {profile.email}
          <ArrowUpRight size={20} />
        </a>

        <ul className="mt-10 flex flex-wrap gap-6">
          {profile.socials.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm text-slate-light transition-colors hover:text-paper"
              >
                {social.label}
              </a>
            </li>
          ))}
        </ul>

        <p className="mt-24 pb-16 font-mono text-xs text-slate sm:pb-0">
          © {new Date().getFullYear()} {profile.name}. Built with Next.js
          and Tailwind CSS.
        </p>
      </div>
    </section>
  );
}
