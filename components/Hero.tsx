import Image from "next/image";
import { Github, Linkedin, Code2, Instagram } from "lucide-react";
import { profile } from "@/data/portfolio";

const icons = {
  github: Github,
  linkedin: Linkedin,
  leetcode: Code2,
  instagram: Instagram,
};

function Summary({ text }: { text: string }) {
  const parts = text.split("*");
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <strong key={i} className="font-semibold text-ink">
            {part}
          </strong>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      className="flex min-h-screen flex-col justify-center px-6 pb-16 pt-28"
    >
      <div className="mx-auto w-full max-w-content">
        <div className="grid items-center gap-16 lg:grid-cols-[1.3fr_auto]">
          <div className="animate-fadeUp">
            <p className="section-label mb-5">{profile.role}</p>

            <h1 className="font-display text-5xl font-medium leading-[1.1] text-ink sm:text-6xl">
              Hi, I&apos;m {profile.name}.
            </h1>

            <p className="mt-6 max-w-lg font-body text-base leading-relaxed text-slate-light sm:text-lg">
              <Summary text={profile.summary} />
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-md bg-ink px-6 py-3 font-body text-sm font-medium text-paper transition-opacity hover:opacity-85"
              >
                View projects
              </a>
              <a
                href="#contact"
                className="rounded-md border border-border px-6 py-3 font-body text-sm font-medium text-ink transition-colors hover:border-ink"
              >
                Get in touch
              </a>
            </div>

            <ul className="mt-10 flex gap-3">
              {profile.socials.map((social) => {
                const Icon = icons[social.icon as keyof typeof icons] ?? Github;
                return (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-slate-light transition-colors hover:border-ink hover:text-ink"
                    >
                      <Icon size={17} />
                    </a>
                  </li>
                );
              })}
            </ul>

            <dl className="mt-16 grid max-w-md grid-cols-3 gap-6 border-t border-border pt-8">
              {profile.stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="font-display text-2xl text-ink">
                    {stat.value}
                  </dt>
                  <dd className="mt-1 font-body text-xs text-slate">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* photo */}
          <div className="mx-auto flex flex-col items-center">
            <div className="relative h-52 w-52 overflow-hidden rounded-full border border-border sm:h-64 sm:w-64">
              {/*
                Tuning the photo crop:
                - objectPosition's 2nd value (Y%) moves the photo up/down — lower = more of the top shows
                - scale(...) zooms in — increase for more zoom, decrease for less
                - translateX(...) pans left/right — more negative = subject shifts further left
              */}
              <Image
                src="/profile.jpg"
                alt={profile.name}
                fill
                className="object-cover"
                style={{
                  objectPosition: "center -5%",
                  transform: "scale(1.2) translateX(-1%)",
                }}
                priority
              />
            </div>
            <p className="mt-5 flex items-center gap-2 font-body text-sm text-slate">
              {profile.availableForWork && (
                <span className="h-2 w-2 rounded-full bg-success" />
              )}
              {profile.availableForWork ? "Available for work" : profile.location}
              {profile.availableForWork && ` · ${profile.location}`}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}