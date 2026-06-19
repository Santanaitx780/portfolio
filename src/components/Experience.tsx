"use client";

import { experiences } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div
            className="mx-auto h-1 w-20 rounded-full"
            style={{ backgroundColor: "var(--primary)" }}
          />
          <p
            className="mt-4 max-w-xl mx-auto"
            style={{ color: "var(--text-muted)" }}
          >
            My professional journey and growth
          </p>
        </div>

        <div className="relative">
          <div
            className="absolute left-[19px] top-0 bottom-0 w-0.5"
            style={{ backgroundColor: "var(--border)" }}
          />

          <div className="space-y-10">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative pl-14">
                <div
                  className="absolute left-3 top-1 h-8 w-8 rounded-full border-4 flex items-center justify-center"
                  style={{
                    backgroundColor: "var(--bg)",
                    borderColor: "var(--primary)",
                  }}
                >
                  <div
                    className="h-2 w-2 rounded-full"
                    style={{ backgroundColor: "var(--primary)" }}
                  />
                </div>

                <div
                  className="card-hover card-border-glow rounded-xl border p-6"
                  style={{
                    backgroundColor: "var(--bg-card)",
                    borderColor: "var(--border)",
                  }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <h3 className="text-lg font-semibold">{exp.role}</h3>
                    <span
                      className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium"
                      style={{
                        backgroundColor: "var(--primary-light)",
                        color: "var(--primary)",
                      }}
                    >
                      {exp.period}
                    </span>
                  </div>
                  <p
                    className="text-sm font-medium mb-3"
                    style={{ color: "var(--primary)" }}
                  >
                    {exp.company}
                  </p>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
