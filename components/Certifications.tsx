import { Award, ArrowUpRight } from "lucide-react";
import { certifications } from "@/data/portfolio";

export default function Certifications() {
  return (
    <section id="certifications" className="border-t border-border px-6 py-28">
      <div className="mx-auto max-w-content">
        <p className="section-label mb-3">Credentials</p>
        <h2 className="font-display text-3xl font-medium text-ink sm:text-4xl">
          Certifications
        </h2>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert) => {
            const content = (
              <>
                <span className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-ink">
                  <Award size={17} />
                </span>
                <div className="mt-4">
                  <h3 className="font-display text-lg text-ink">{cert.name}</h3>
                  <p className="mt-1 font-mono text-xs text-slate">
                    {cert.issuer}
                    {cert.year ? ` · ${cert.year}` : ""}
                  </p>
                </div>
              </>
            );

            const cardClasses =
              "rounded-lg border border-border bg-surface p-6 transition-colors";

            return cert.credentialUrl ? (
              <a
                key={cert.name}
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`group ${cardClasses} hover:border-ink`}
              >
                {content}
                <span className="mt-4 flex items-center gap-1 font-mono text-xs text-accent">
                  View credential
                  <ArrowUpRight size={13} />
                </span>
              </a>
            ) : (
              <div key={cert.name} className={cardClasses}>
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
