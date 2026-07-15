"use client";

import { useEffect, useState } from "react";

const LINES = [
  "booting profile.sh...",
  "mounting /dev/experience...",
  "resolving dependencies... done",
  "compiling portfolio... 100%",
  "> welcome",
];

export default function BootSequence({
  onDone,
}: {
  onDone: () => void;
}) {
  const [visible, setVisible] = useState<string[]>([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    // Respect reduced-motion: skip straight through.
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      setVisible(LINES);
      setDone(true);
      const t = setTimeout(onDone, 200);
      return () => clearTimeout(t);
    }

    let i = 0;
    const interval = setInterval(() => {
      i += 1;
      setVisible(LINES.slice(0, i));
      if (i >= LINES.length) {
        clearInterval(interval);
        setDone(true);
        setTimeout(onDone, 550);
      }
    }, 260);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-bg transition-opacity duration-500 ${
        done ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="w-full max-w-md px-6 text-sm text-muted">
        {visible.map((line, idx) => (
          <p key={idx} className="animate-fadeUp">
            <span className="text-amber">$</span> {line}
          </p>
        ))}
        <span className="inline-block w-2 h-4 bg-amber align-middle animate-blink ml-1" />
      </div>
    </div>
  );
}
