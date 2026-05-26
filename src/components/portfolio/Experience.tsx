import { Section } from "./Section";
import { motion } from "motion/react";

const jobs = [
  {
    role: "Junior Backend Developer (Intern)",
    company: "Techwise",
    period: "2025 — Present",
    location: "Kigali",
    points: [
      "Engineered production-grade REST APIs in FastAPI — authentication, role-based access, routing, and core business logic.",
      "Improved database performance by optimising queries and contributing to schema design and normalisation on live systems.",
      "Collaborated with senior engineers in a Git-based workflow, gaining exposure to code review and deployment pipelines.",
    ],
  },
  {
    role: "Freelance Web Developer",
    company: "Self-employed",
    period: "2025 — Present",
    location: "Remote",
    points: [
      "Scoped, built, and deployed websites and backend systems for small businesses, managing the full project lifecycle independently.",
      "Handled client communication, requirement gathering, iterative revisions, and on-time delivery across multiple projects.",
    ],
  },
  {
    role: "IT Support Assistant",
    company: "World Mission High School Lab",
    period: "2024 — 2025",
    location: "Kigali",
    points: [
      "Diagnosed and resolved hardware, software, and network issues across lab equipment used by students and staff.",
      "Maintained infrastructure reliability through proactive setup and routine maintenance, reducing downtime.",
    ],
  },
];

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title={<>Where I've <span className="text-gradient">shipped.</span></>}
    >
      <ol className="relative border-l border-border ml-3">
        {jobs.map((j, i) => (
          <motion.li
            key={j.role}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="pl-8 pb-12 last:pb-0 relative"
          >
            <span className="absolute -left-[7px] top-1.5 size-3.5 rounded-full bg-primary ring-4 ring-background shadow-glow" />
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h3 className="font-display font-semibold text-xl">{j.role}</h3>
              <span className="text-primary">@ {j.company}</span>
            </div>
            <div className="text-xs font-mono text-muted-foreground mt-1">
              {j.period} · {j.location}
            </div>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              {j.points.map((p) => (
                <li key={p} className="flex gap-3">
                  <span className="text-primary mt-2">▹</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </motion.li>
        ))}
      </ol>
    </Section>
  );
}
