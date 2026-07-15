import TerminalWindow from "./TerminalWindow";

export default function About() {
  return (
    <TerminalWindow id="about" command="whoami">
      <p className="text-sm leading-relaxed text-ink sm:text-base">
        I&apos;m a developer with a background in building web applications
        end-to-end — from database schema to the pixels users click on.
        Over the last few years I&apos;ve worked across startups and larger
        teams, shipping products used by real people and cleaning up the
        occasional production fire along the way. I care about code that&apos;s
        easy to delete, tests that catch real bugs, and interfaces that get
        out of the user&apos;s way.
      </p>
      <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
        Outside of work you&apos;ll find me contributing to open source,
        writing about what I learn, or debugging something that definitely
        worked yesterday.
      </p>
    </TerminalWindow>
  );
}
