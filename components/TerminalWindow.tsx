import { ReactNode } from "react";

export default function TerminalWindow({
  id,
  command,
  children,
}: {
  id: string;
  command: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 mb-16">
      <div className="border border-line bg-panel/60">
        <div className="flex items-center gap-2 border-b border-line px-4 py-2.5 text-xs text-muted">
          <span className="text-cyan">guest</span>
          <span>@</span>
          <span className="text-amber">portfolio</span>
          <span>:~$</span>
          <span className="text-ink">{command}</span>
        </div>
        <div className="p-5 sm:p-8">{children}</div>
      </div>
    </section>
  );
}
