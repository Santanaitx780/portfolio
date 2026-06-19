export interface Project {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
}

export const personalInfo = {
  name: "UWIMPUHWE Regis",
  role: "Full Stack Developer",
  email: "santanadox349@gmail.com",
  bio: "Passionate full-stack developer with expertise in building modern web applications. I transform ideas into elegant, high-performance digital experiences using cutting-edge technologies.",
  location: "Kigali, Rwanda",
  social: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
};

export const skills: Skill[] = [
  { name: "React / Next.js", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "Node.js / Express", level: 88 },
  { name: "PostgreSQL / SQLite", level: 85 },
  { name: "Tailwind CSS", level: 92 },
  { name: "Python / Django", level: 78 },
  { name: "Docker / DevOps", level: 72 },
  { name: "GraphQL", level: 75 },
];

export const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform with real-time inventory management, payment processing, and admin dashboard.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
    github: "https://github.com",
    link: "https://example.com",
  },
  {
    title: "Real-Time Chat Application",
    description:
      "Scalable chat application with WebSocket support, file sharing, and end-to-end encryption.",
    tech: ["React", "Node.js", "Socket.io", "MongoDB"],
    github: "https://github.com",
  },
  {
    title: "AI Content Generator",
    description:
      "AI-powered content generation tool with customizable templates and multi-language support.",
    tech: ["Next.js", "Python", "OpenAI", "Redis"],
    link: "https://example.com",
  },
  {
    title: "Task Management System",
    description:
      "Kanban-style project management tool with real-time collaboration and analytics.",
    tech: ["React", "TypeScript", "GraphQL", "Prisma"],
    github: "https://github.com",
  },
];

export const experiences: Experience[] = [
  {
    role: "Senior Full Stack Developer",
    company: "Tech Innovators Ltd",
    period: "2023 - Present",
    description:
      "Lead development of microservices architecture serving 100K+ users. Mentored junior developers and established CI/CD pipelines.",
  },
  {
    role: "Full Stack Developer",
    company: "Digital Solutions Inc",
    period: "2021 - 2023",
    description:
      "Built and maintained multiple client-facing web applications. Reduced load times by 40% through optimization.",
  },
  {
    role: "Junior Developer",
    company: "StartupHub",
    period: "2020 - 2021",
    description:
      "Developed RESTful APIs and React components. Collaborated in agile sprints and participated in code reviews.",
  },
];
