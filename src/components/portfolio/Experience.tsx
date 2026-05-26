import { Section } from "./Section";
import { motion } from "motion/react";

const jobs = [
  {
    role: "Junior Backend Developer (Intern)",
    company: "Techwise",
    period: "2025 — Present",
    location: "Kigali",
    points: [
      "Developed and maintained REST APIs using FastAPI — auth, routing, and business logic.",
      "Optimised database queries and contributed to schema design and normalisation.",
      "Collaborated with senior developers on production systems following Git-based workflows.",
    ],
  },
  {
    role: "Freelance Web Developer",
    company: "Self-employed",
    period: "2025 — Present",
    location: "Remote",
    points: [
      "Designed and delivered websites and backend systems for small businesses and individuals.",
      "Owned client requirements, timelines, and revisions independently from brief to deployment.",
    ],
  },
  {
    role: "IT Support Assistant",
    company: "World Mission High School Lab",
    period: "2024 — 2025",
    location: "Kigali",
    points: [
      "Provided technical support for lab equipment — troubleshooting, setup, routine maintenance.",
      "Supported students and staff with software issues and network connectivity.",
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
