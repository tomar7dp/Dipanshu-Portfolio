import { Github, Linkedin, Code2, Instagram, ArrowUpRight } from "lucide-react";
import { profile } from "@/data/portfolio";

const icons = {
  github: Github,
  linkedin: Linkedin,
  leetcode: Code2,
  instagram: Instagram,
};

export default function Channels() {
  return (
    <section id="channels" className="border-t border-border px-6 py-28">
      <div className="mx-auto max-w-content">
        <p className="section-label mb-3">Elsewhere</p>
        <h2 className="font-display text-3xl font-medium text-ink sm:text-4xl">
          Find me around the web
        </h2>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {profile.socials.map((social) => {
            const Icon = icons[social.icon as keyof typeof icons] ?? Github;
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-lg border border-border bg-surface p-5 transition-colors hover:border-ink"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-ink">
                    <Icon size={16} />
                  </span>
                  <div>
                    <p className="font-body text-sm font-medium text-ink">
                      {social.label}
                    </p>
                    <p className="font-mono text-xs text-slate">
                      {social.handle}
                    </p>
                  </div>
                </div>
                <ArrowUpRight
                  size={16}
                  className="text-slate transition-colors group-hover:text-ink"
                />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
