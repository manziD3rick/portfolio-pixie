import { Section } from "./Section";
import { motion } from "motion/react";

const groups = [
  {
    title: "Languages",
    items: [
      { name: "Python", level: 90 },
      { name: "JavaScript", level: 82 },
      { name: "PHP", level: 70 },
      { name: "Dart", level: 65 },
    ],
  },
  {
    title: "Frameworks",
    items: [
      { name: "FastAPI", level: 88 },
      { name: "React", level: 80 },
      { name: "Flutter", level: 65 },
    ],
  },
  {
    title: "Data & Web",
    items: [
      { name: "SQL / DB Design", level: 85 },
      { name: "REST APIs", level: 88 },
      { name: "HTML / CSS", level: 85 },
    ],
  },
  {
    title: "Concepts & Tools",
    items: [
      { name: "OOP / SDLC", level: 85 },
      { name: "System Design / ER", level: 78 },
      { name: "Git / VS Code", level: 88 },
    ],
  },
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title={<>What I work <span className="text-gradient">with daily.</span></>}
    >
      <div className="grid sm:grid-cols-2 gap-6">
        {groups.map((g) => (
          <div
            key={g.title}
            className="rounded-2xl border border-border bg-surface/60 p-6 shadow-card"
          >
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-display font-semibold text-lg">{g.title}</h3>
              <span className="text-xs text-muted-foreground font-mono">
                0{groups.indexOf(g) + 1}
              </span>
            </div>
            <ul className="space-y-4">
              {g.items.map((s) => (
                <li key={s.name}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span>{s.name}</span>
                    <span className="text-muted-foreground font-mono text-xs">
                      {s.level}%
                    </span>
                  </div>
                  <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
