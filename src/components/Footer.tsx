"use client";

import { personalInfo } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer
      className="border-t py-8"
      style={{
        backgroundColor: "var(--bg)",
        borderColor: "var(--border)",
      }}
    >
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span
              className="text-lg font-bold"
              style={{ color: "var(--primary)" }}
            >
              {`<${personalInfo.name.split(" ")[0]} />`}
            </span>
            <span className="text-sm" style={{ color: "var(--text-muted)" }}>
              &copy; {new Date().getFullYear()} All rights reserved.
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-sm transition-colors hover:[color:var(--primary)]"
              style={{ color: "var(--text-muted)" }}
            >
              {personalInfo.email}
            </a>
            <div className="flex gap-3">
              {[
                { label: "G", url: personalInfo.social.github },
                { label: "L", url: personalInfo.social.linkedin },
                { label: "T", url: personalInfo.social.twitter },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm transition-colors hover:[color:var(--primary)]"
                  style={{ color: "var(--text-muted)" }}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
