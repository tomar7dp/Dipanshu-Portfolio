"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Github, Linkedin, Code2 } from "lucide-react";
import { profile } from "@/data/portfolio";

const icons = {
  github: Github,
  linkedin: Linkedin,
  leetcode: Code2,
};

function TerminalLine() {
  const [typed, setTyped] = useState("");
  const full = profile.terminalLine;

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) {
      setTyped(full);
      return;
    }
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setTyped(full.slice(0, i));
      if (i >= full.length) clearInterval(interval);
    }, 60);
    return () => clearInterval(interval);
  }, [full]);

  return (
    <div className="flex items-center gap-3 font-mono text-sm">
      <span className="text-accent">&gt;_ &gt;</span>
      <span className="rounded bg-surface-2 px-3 py-1 font-semibold tracking-wide text-paper">
        {typed}
        <span className="ml-0.5 inline-block h-4 w-[2px] translate-y-0.5 animate-blink bg-accent align-middle" />
      </span>
    </div>
  );
}

function HighlightedText({ text }: { text: string }) {
  const parts = text.split("*");
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <strong
            key={i}
            className={
              "font-semibold " + (i % 4 === 1 ? "text-accent" : "text-signal")
            }
          >
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
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pb-16 pt-28"
    >
      {/* subtle grid backdrop */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(#22D3EE 1px, transparent 1px), linear-gradient(90deg, #22D3EE 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative mx-auto w-full max-w-content">
        {/* top status row */}
        <div className="mb-10 flex items-center justify-between">
          <span className="rounded border border-accent/40 px-3 py-1 font-mono text-xs tracking-widest text-accent">
            [{profile.tag}]
          </span>
          <span className="flex items-center gap-2 font-mono text-xs tracking-widest text-success">
            <span className="h-2 w-2 animate-pulse rounded-full bg-success" />
            ONLINE
          </span>
        </div>

        <div className="grid items-center gap-16 lg:grid-cols-[1.3fr_auto]">
          <div className="animate-fadeUp">
            <p className="mb-3 rounded border border-accent/30 inline-block px-3 py-1 font-mono text-xs tracking-widest text-accent">
              // CORE PROTOCOL INITIALIZED &middot; NODE STABLE
            </p>

            <h1 className="font-display text-5xl font-black leading-[1.05] text-paper sm:text-7xl">
              HELLO,
              <br />
              I&apos;M{" "}
              <span className="bg-gradient-to-r from-accent to-signal bg-clip-text text-transparent">
                {profile.name.toUpperCase()}
              </span>
            </h1>

            <div className="mt-8">
              <TerminalLine />
            </div>

            <p className="mt-6 max-w-xl font-body text-base leading-relaxed text-slate-light sm:text-lg">
              <HighlightedText text={profile.heroDescription} />
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-md bg-gradient-to-r from-accent to-signal px-6 py-3 font-mono text-sm font-semibold tracking-wide text-ink transition-transform hover:-translate-y-0.5"
              >
                VIEW MISSIONS
              </a>
              <a
                href="#contact"
                className="rounded-md border border-border px-6 py-3 font-mono text-sm tracking-wide text-paper transition-colors hover:border-accent hover:text-accent"
              >
                INITIATE CONTACT
              </a>
            </div>

            <ul className="mt-10 flex gap-3">
              {profile.socials.map((social) => {
                const Icon = icons[social.icon as keyof typeof icons];
                return (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface text-slate-light transition-colors hover:border-accent hover:text-accent"
                    >
                      <Icon size={18} />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* photo */}
          <div className="mx-auto flex flex-col items-center">
            <div className="relative h-52 w-52 sm:h-64 sm:w-64">
              <div className="absolute inset-0 animate-[spin_18s_linear_infinite] rounded-full border border-dashed border-accent/40" />
              <div className="absolute inset-3 rounded-full border border-signal/30" />
              <div className="absolute inset-6 overflow-hidden rounded-full border-2 border-surface-2 bg-surface">
                <Image
                  src="/profile.jpg"
                  alt={profile.name}
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
            <div className="mt-5 flex gap-4 rounded border border-border bg-surface px-4 py-2 font-mono text-[11px] tracking-wide text-slate-light">
              <span>
                ID: <span className="text-paper">{profile.idCode}</span>
              </span>
              <span>
                ROLE: <span className="text-paper">{profile.roleCode}</span>
              </span>
              <span>
                STATUS: <span className="text-success">{profile.photoStatus}</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <p className="absolute bottom-6 left-6 hidden font-mono text-xs tracking-widest text-signal/70 sm:block">
        // 01 . IDENTITY_LAYER
      </p>
    </section>
  );
}