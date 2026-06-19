"use client";

import { personalInfo } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="section-padding" style={{ backgroundColor: "var(--bg-secondary)" }}>
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div
            className="mx-auto h-1 w-20 rounded-full"
            style={{ backgroundColor: "var(--primary)" }}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div
              className="aspect-square rounded-2xl overflow-hidden relative"
              style={{ backgroundColor: "var(--bg-card)" }}
            >
              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{ color: "var(--primary)" }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
                </svg>
              </div>
            </div>
            <div
              className="absolute -bottom-4 -right-4 rounded-2xl p-6 shadow-lg"
              style={{
                backgroundColor: "var(--primary)",
                color: "white",
              }}
            >
              <div className="text-3xl font-bold">5+</div>
              <div className="text-sm opacity-90">Years Experience</div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Full Stack Developer crafting digital experiences
            </h3>
            <p
              className="mb-6 leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              {personalInfo.bio}
            </p>
            <p
              className="mb-8 leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              I specialize in building full-stack applications with modern
              technologies like React, Next.js, Node.js, and TypeScript. I&apos;m
              passionate about clean code, intuitive design, and creating
              solutions that make a real impact.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Location", value: personalInfo.location },
                { label: "Email", value: personalInfo.email },
                { label: "Freelance", value: "Available" },
                { label: "Languages", value: "English, Kinyarwanda" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl p-4"
                  style={{ backgroundColor: "var(--bg-card)" }}
                >
                  <div className="text-xs font-medium mb-1" style={{ color: "var(--text-muted)" }}>
                    {item.label}
                  </div>
                  <div className="text-sm font-medium" style={{ color: "var(--text)" }}>
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
