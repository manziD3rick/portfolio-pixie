import { motion } from "motion/react";
import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: ReactNode;
  children: ReactNode;
}) {
  return (
    <section id={id} className="py-24 sm:py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-primary font-mono">
            <span className="h-px w-8 bg-primary" />
            {eyebrow}
          </div>
          <h2 className="mt-4 font-display font-bold text-4xl sm:text-5xl tracking-tight">
            {title}
          </h2>
        </motion.div>
        {children}
      </div>
    </section>
  );
}
