"use client";

import { useState } from "react";
import { profile } from "@/data/portfolio";
import { ArrowUpRight } from "lucide-react";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: profile.web3FormsAccessKey,
          name,
          email,
          message,
          subject: `Portfolio message from ${name}`,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="border-t border-border px-6 py-28">
      <div className="mx-auto max-w-content">
        <p className="section-label mb-3">Contact</p>
        <h2 className="max-w-xl font-display text-3xl font-medium text-ink sm:text-4xl">
          Have something worth building? Let&apos;s talk.
        </h2>

        <a
          href={`mailto:${profile.email}`}
          className="mt-6 inline-flex items-center gap-2 font-mono text-lg text-accent transition-opacity hover:opacity-80 sm:text-xl"
        >
          {profile.email}
          <ArrowUpRight size={18} />
        </a>

        <form
          onSubmit={handleSubmit}
          className="mt-10 max-w-xl rounded-lg border border-border bg-surface p-6 sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="font-mono text-xs uppercase tracking-wide text-slate"
              >
                Your name
              </label>
              <input
                id="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Jane Doe"
                className="mt-2 w-full rounded-md border border-border bg-paper px-3 py-2 text-sm text-ink placeholder:text-slate focus:border-ink"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="font-mono text-xs uppercase tracking-wide text-slate"
              >
                Your email
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="jane@email.com"
                className="mt-2 w-full rounded-md border border-border bg-paper px-3 py-2 text-sm text-ink placeholder:text-slate focus:border-ink"
              />
            </div>
          </div>

          <div className="mt-5">
            <label
              htmlFor="message"
              className="font-mono text-xs uppercase tracking-wide text-slate"
            >
              Message
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="What are you looking to build?"
              className="mt-2 w-full resize-none rounded-md border border-border bg-paper px-3 py-2 text-sm text-ink placeholder:text-slate focus:border-ink"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-6 rounded-md bg-ink px-6 py-3 font-body text-sm font-medium text-paper transition-opacity hover:opacity-85 disabled:opacity-50"
          >
            {status === "sending" ? "Sending..." : "Send message"}
          </button>

          {status === "success" && (
            <p className="mt-3 font-mono text-xs text-success">
              Message sent — I&apos;ll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="mt-3 font-mono text-xs text-red-500">
              Something went wrong. Please try again, or email me directly.
            </p>
          )}
        </form>

        <ul className="mt-10 flex flex-wrap gap-6">
          {profile.socials.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm text-slate-light transition-colors hover:text-ink"
              >
                {social.label}
              </a>
            </li>
          ))}
        </ul>

        <p className="mt-16 pb-16 font-mono text-xs text-slate sm:pb-0">
          © {new Date().getFullYear()} {profile.name}. Built with Next.js
          and Tailwind CSS.
        </p>
      </div>
    </section>
  );
}