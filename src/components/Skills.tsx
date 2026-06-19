"use client";

import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div
            className="mx-auto h-1 w-20 rounded-full"
            style={{ backgroundColor: "var(--primary)" }}
          />
          <p
            className="mt-4 max-w-xl mx-auto"
            style={{ color: "var(--text-muted)" }}
          >
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="card-hover rounded-xl border p-6"
              style={{
                backgroundColor: "var(--bg-card)",
                borderColor: "var(--border)",
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-semibold text-sm">{skill.name}</span>
                <span
                  className="text-xs font-bold"
                  style={{ color: "var(--primary)" }}
                >
                  {skill.level}%
                </span>
              </div>
              <div
                className="h-2 rounded-full overflow-hidden"
                style={{ backgroundColor: "var(--bg-secondary)" }}
              >
                <div
                  className="skill-bar h-full rounded-full transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
