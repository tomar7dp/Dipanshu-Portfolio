"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/portfolio";

const sections = [
  { id: "top", label: "about.tsx" },
  { id: "projects", label: "projects.tsx" },
  { id: "skills", label: "skills.tsx" },
  { id: "experience", label: "experience.tsx" },
  { id: "contact", label: "contact.tsx" },
];

export default function StatusBar() {
  const [active, setActive] = useState("about.tsx");
  const [time, setTime] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const match = sections.find((s) => s.id === entry.target.id);
            if (match) setActive(match.label);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const update = () =>
      setTime(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    update();
    const interval = setInterval(update, 30_000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 hidden border-t border-border bg-surface font-mono text-xs text-slate-light sm:block">
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-1.5">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <span
              className={`h-2 w-2 rounded-full ${
                profile.availableForWork ? "bg-success" : "bg-slate"
              }`}
            />
            {profile.availableForWork ? "available for work" : "not looking"}
          </span>
          <span className="text-border">|</span>
          <span>main</span>
        </div>
        <div className="flex items-center gap-4">
          <span>{active}</span>
          <span className="text-border">|</span>
          <span>{time}</span>
        </div>
      </div>
    </div>
  );
}
