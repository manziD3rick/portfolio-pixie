import { motion } from "motion/react";
import { ArrowRight, Download, Mail, Github, MapPin } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative pt-36 pb-24 overflow-hidden">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="max-w-6xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 backdrop-blur px-3 py-1 text-xs text-muted-foreground"
        >
          <span className="size-1.5 rounded-full bg-primary animate-pulse" />
          Available for freelance & internships
          <span className="mx-1 text-border">·</span>
          <MapPin className="size-3" /> Kigali, RW
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mt-6 font-display font-bold text-5xl sm:text-7xl md:text-8xl leading-[0.95] tracking-tighter"
        >
          Manzi <span className="text-gradient">Derrick.</span>
          <br />
          <span className="text-muted-foreground">Backend &</span>
          <br />
          Full-Stack Developer.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed"
        >
          I build scalable backends and clean web experiences with{" "}
          <span className="text-foreground">Python · FastAPI · React</span>.
          Currently completing a Level 5 Diploma and shipping production systems
          as a Junior Backend Developer at Techwise.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 font-medium shadow-glow hover:scale-[1.02] transition"
          >
            View Projects
            <ArrowRight className="size-4 group-hover:translate-x-1 transition" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 backdrop-blur px-6 py-3 font-medium hover:bg-surface transition"
          >
            <Mail className="size-4" /> Contact Me
          </a>
          <a
            href="/cv.pdf"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-medium hover:border-primary hover:text-primary transition"
          >
            <Download className="size-4" /> Download CV
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 flex items-center gap-6 text-sm text-muted-foreground"
        >
          <a
            href="https://github.com/manziD3rick"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 hover:text-foreground transition"
          >
            <Github className="size-4" /> github.com/manziD3rick
          </a>
          <span className="hidden sm:inline">·</span>
          <a
            href="mailto:manzi.d3rick@gmail.com"
            className="hidden sm:inline hover:text-foreground transition"
          >
            manzi.d3rick@gmail.com
          </a>
        </motion.div>
      </div>
    </section>
  );
}
