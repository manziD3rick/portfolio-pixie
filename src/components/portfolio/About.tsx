import { Section } from "./Section";
import { motion } from "motion/react";
import { Code2, Database, Rocket, Users } from "lucide-react";

const traits = [
  { icon: Code2, label: "Clean Code", desc: "OOP, modular architecture, readable systems." },
  { icon: Database, label: "Backend Focus", desc: "REST APIs, schema design, normalisation." },
  { icon: Rocket, label: "Ship Fast", desc: "Brief to deployment, end-to-end ownership." },
  { icon: Users, label: "Collaborative", desc: "Git workflows, code review, team delivery." },
];

export function About() {
  return (
    <Section id="about" eyebrow="About" title={<>The story <span className="text-gradient">behind the code.</span></>}>
      <div className="grid md:grid-cols-5 gap-10">
        <div className="md:col-span-3 space-y-5 text-lg text-muted-foreground leading-relaxed">
          <p>
            I'm a motivated software developer completing my{" "}
            <span className="text-foreground">Level 5 Diploma in Software Development</span>{" "}
            at World Mission High School in Kigali, Rwanda. My focus is backend
            engineering — building reliable APIs and well-designed databases
            that actually solve problems.
          </p>
          <p>
            Beyond the classroom, I've shipped production code as an intern at{" "}
            <span className="text-foreground">Techwise</span>, freelanced for small
            businesses, and built a portfolio of side projects ranging from
            secure voting APIs to multiplayer browser games.
          </p>
          <p>
            I care about the fundamentals: REST design, system thinking, and code
            that other developers can pick up and extend.
          </p>

          <div className="pt-4 grid grid-cols-3 gap-4 text-center">
            {[
              { k: "2+", v: "Years coding" },
              { k: "5+", v: "Projects shipped" },
              { k: "4", v: "Languages" },
            ].map((s) => (
              <div key={s.v} className="rounded-xl border border-border bg-surface/40 p-4">
                <div className="font-display text-3xl font-bold text-gradient">{s.k}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.v}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="md:col-span-2 grid grid-cols-2 gap-4">
          {traits.map((t, i) => (
            <motion.div
              key={t.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-xl border border-border bg-surface/60 p-5 hover:border-primary/50 hover:-translate-y-1 transition"
            >
              <t.icon className="size-5 text-primary" />
              <div className="mt-3 font-semibold">{t.label}</div>
              <div className="text-xs text-muted-foreground mt-1">{t.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
