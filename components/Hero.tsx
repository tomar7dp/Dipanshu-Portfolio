export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-4xl px-6 pt-16 pb-20 sm:pt-24">
      <p className="mb-4 text-sm text-muted">
        <span className="text-amber">$</span> whoami --verbose
      </p>
      <h1 className="text-3xl font-semibold leading-tight text-ink sm:text-5xl">
        Your Name
        <span className="text-amber">_</span>
      </h1>
      <p className="mt-4 max-w-xl text-base text-muted sm:text-lg">
        Full-stack developer building fast, reliable products. I write code
        that ships, reads clearly, and doesn&apos;t page me at 3am.
      </p>
      <div className="mt-8 flex flex-wrap gap-3 text-sm">
        <a
          href="#projects"
          className="border border-amber px-4 py-2 text-amber transition-colors hover:bg-amber hover:text-bg"
        >
          view --projects
        </a>
        <a
          href="#contact"
          className="border border-line px-4 py-2 text-muted transition-colors hover:border-cyan hover:text-cyan"
        >
          send --message
        </a>
      </div>
    </section>
  );
}
