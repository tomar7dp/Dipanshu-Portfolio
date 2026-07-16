import { profile } from "@/data/portfolio";

export default function Hero() {
  return (
    <section
      id="top"
      className="flex min-h-screen flex-col justify-center px-6 pt-24"
    >
      <div className="mx-auto w-full max-w-content animate-fadeUp">
        <p className="section-label mb-5">{profile.role}</p>
        <h1 className="max-w-3xl font-display text-4xl font-medium leading-[1.15] text-paper sm:text-6xl">
          {profile.tagline}
        </h1>
        <p className="mt-6 max-w-xl font-body text-base text-slate-light sm:text-lg">
          {profile.name} · {profile.location}
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-md bg-accent px-5 py-2.5 font-mono text-sm text-ink transition-transform hover:-translate-y-0.5"
          >
            View projects
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="rounded-md border border-border px-5 py-2.5 font-mono text-sm text-paper transition-colors hover:border-accent hover:text-accent"
          >
            Get in touch
          </a>
        </div>

        <dl className="mt-16 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8">
          {profile.stats.map((stat) => (
            <div key={stat.label}>
              <dt className="font-display text-2xl text-paper sm:text-3xl">
                {stat.value}
              </dt>
              <dd className="mt-1 font-mono text-xs text-slate">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
