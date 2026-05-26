import { Section } from "./Section";
import { motion } from "motion/react";
import { ArrowUpRight, Github } from "lucide-react";

const projects = [
  {
    title: "Smart Voting System API",
    desc: "Secure FastAPI backend with authentication, role-based access, and concurrent-safe voting logic on a normalised SQL database.",
    tags: ["FastAPI", "Python", "SQL", "JWT"],
    accent: "from-primary/30 to-transparent",
  },
  {
    title: "School Management System",
    desc: "End-to-end SDLC project: student records, course management, and reporting with ER diagrams, OOP architecture, and modular routing.",
    tags: ["Python", "SQL", "OOP", "ER Design"],
    accent: "from-accent/30 to-transparent",
  },
  {
    title: "Movie / Anime Streaming Site",
    desc: "Full-stack streaming discovery platform with search, filtering, and categorisation, powered by external APIs and a responsive React UI.",
    tags: ["React", "REST APIs", "JavaScript"],
    accent: "from-primary/30 to-transparent",
  },
  {
    title: "Weather App",
    desc: "Real-time weather dashboard integrating the OpenWeather API with current conditions and forecasts in a clean, responsive interface.",
    tags: ["JavaScript", "OpenWeather", "HTML/CSS"],
    accent: "from-accent/30 to-transparent",
  },
  {
    title: "Multiplayer Tag Game",
    desc: "Browser-based real-time multiplayer game showcasing event handling, state management, and multi-user interaction design.",
    tags: ["JavaScript", "Realtime", "Game Logic"],
    accent: "from-primary/30 to-transparent",
  },
];

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title={<>Selected <span className="text-gradient">work.</span></>}
    >
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
            className={`group relative overflow-hidden rounded-2xl border border-border bg-surface/60 p-7 shadow-card hover:border-primary/50 hover:-translate-y-1 transition-all ${
              i === 0 ? "md:col-span-2" : ""
            }`}
          >
            <div
              className={`absolute -top-32 -right-32 size-64 rounded-full bg-gradient-to-br ${p.accent} blur-3xl opacity-60 group-hover:opacity-100 transition`}
            />
            <div className="relative">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-xs font-mono text-muted-foreground">
                    0{i + 1} / 0{projects.length}
                  </div>
                  <h3 className="mt-2 font-display font-bold text-2xl sm:text-3xl">
                    {p.title}
                  </h3>
                </div>
                <div className="flex gap-2 shrink-0">
                  <a
                    href="#"
                    aria-label="Repo"
                    className="size-10 grid place-items-center rounded-full border border-border hover:border-primary hover:text-primary transition"
                  >
                    <Github className="size-4" />
                  </a>
                  <a
                    href="#"
                    aria-label="Live"
                    className="size-10 grid place-items-center rounded-full border border-border hover:border-primary hover:text-primary transition"
                  >
                    <ArrowUpRight className="size-4" />
                  </a>
                </div>
              </div>

              <p className="mt-4 text-muted-foreground max-w-2xl leading-relaxed">
                {p.desc}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono px-2.5 py-1 rounded-full border border-border bg-background/40 text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
