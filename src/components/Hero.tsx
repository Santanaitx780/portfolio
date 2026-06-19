"use client";

import { personalInfo } from "@/data/portfolio";
import { TypeAnimation } from "./TypeAnimation";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center section-padding pt-24 overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25px 25px, var(--primary) 2px, transparent 0)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative mx-auto max-w-4xl text-center">
        <div
          className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 mb-8 text-sm"
          style={{
            borderColor: "var(--border)",
            color: "var(--text-secondary)",
            backgroundColor: "var(--bg-secondary)",
          }}
        >
          <span
            className="h-2 w-2 rounded-full animate-pulse"
            style={{ backgroundColor: "var(--primary)" }}
          />
          Available for work
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
          Hi, I&apos;m{" "}
          <span className="gradient-text">{personalInfo.name}</span>
        </h1>

        <div className="text-xl sm:text-2xl lg:text-3xl mb-8" style={{ color: "var(--text-secondary)" }}>
          <TypeAnimation
            strings={[
              "Full Stack Developer",
              "UI/UX Enthusiast",
              "Problem Solver",
              "Open Source Contributor",
            ]}
          />
        </div>

        <p
          className="mx-auto max-w-2xl text-base sm:text-lg mb-10 leading-relaxed"
          style={{ color: "var(--text-muted)" }}
        >
          {personalInfo.bio}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="inline-flex h-12 items-center gap-2 rounded-xl px-8 text-sm font-semibold text-white transition-all hover:scale-105 glow"
            style={{ backgroundColor: "var(--primary)" }}
          >
            Get in Touch
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </a>
          <a
            href="#projects"
            className="inline-flex h-12 items-center gap-2 rounded-xl border px-8 text-sm font-semibold transition-all hover:scale-105"
            style={{
              borderColor: "var(--border)",
              color: "var(--text)",
              backgroundColor: "var(--bg-card)",
            }}
          >
            View Projects
          </a>
        </div>

        <div className="mt-16 flex items-center justify-center gap-8">
          {[
            { label: "Years Exp", value: "5+" },
            { label: "Projects", value: "50+" },
            { label: "Clients", value: "30+" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-2xl sm:text-3xl font-bold"
                style={{ color: "var(--primary)" }}
              >
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm" style={{ color: "var(--text-muted)" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
