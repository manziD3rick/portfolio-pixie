import { Section } from "./Section";
import { GraduationCap, Languages } from "lucide-react";

export function Education() {
  return (
    <Section
      id="education"
      eyebrow="Education"
      title={<>Foundations & <span className="text-gradient">languages.</span></>}
    >
      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-border bg-surface/60 p-7 shadow-card">
          <GraduationCap className="size-6 text-primary" />
          <h3 className="mt-4 font-display font-semibold text-xl">
            Level 5 Diploma in Software Development
          </h3>
          <p className="text-primary mt-1 text-sm">
            World Mission High School
          </p>
          <p className="text-xs font-mono text-muted-foreground mt-1">
            2023 — Present · Kigali, Rwanda
          </p>
          <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
            Comprehensive software engineering curriculum covering OOP, SDLC,
            system design, ER modelling, and full-stack development practice.
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-surface/60 p-7 shadow-card">
          <Languages className="size-6 text-accent" />
          <h3 className="mt-4 font-display font-semibold text-xl">Languages</h3>
          <ul className="mt-5 space-y-4">
            <li className="flex justify-between items-baseline border-b border-border pb-3">
              <span className="font-medium">English</span>
              <span className="text-xs font-mono text-muted-foreground">
                Professional working
              </span>
            </li>
            <li className="flex justify-between items-baseline">
              <span className="font-medium">Kinyarwanda</span>
              <span className="text-xs font-mono text-muted-foreground">
                Native
              </span>
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
