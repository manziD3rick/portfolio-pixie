import { Section } from "./Section";
import { Mail, Phone, Github, MapPin, Send } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title={<>Let's build <span className="text-gradient">something.</span></>}
    >
      <div className="grid md:grid-cols-5 gap-8">
        <div className="md:col-span-2 space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            I'm open to internships, freelance briefs, and collaboration on
            backend-heavy products. The fastest way to reach me:
          </p>
          <ul className="space-y-3">
            <a
              href="mailto:manzi.d3rick@gmail.com"
              className="flex items-center gap-3 rounded-xl border border-border bg-surface/60 p-4 hover:border-primary/60 transition"
            >
              <Mail className="size-4 text-primary" />
              <span className="text-sm">manzi.d3rick@gmail.com</span>
            </a>
            <a
              href="tel:+250795434808"
              className="flex items-center gap-3 rounded-xl border border-border bg-surface/60 p-4 hover:border-primary/60 transition"
            >
              <Phone className="size-4 text-primary" />
              <span className="text-sm">+250 795 434 808</span>
            </a>
            <a
              href="https://github.com/manziD3rick"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-xl border border-border bg-surface/60 p-4 hover:border-primary/60 transition"
            >
              <Github className="size-4 text-primary" />
              <span className="text-sm">github.com/manziD3rick</span>
            </a>
            <div className="flex items-center gap-3 rounded-xl border border-border bg-surface/60 p-4">
              <MapPin className="size-4 text-primary" />
              <span className="text-sm">Kigali, Rwanda</span>
            </div>
          </ul>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="md:col-span-3 rounded-2xl border border-border bg-surface/60 p-7 shadow-card space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Name" name="name" placeholder="Your name" />
            <Field label="Email" name="email" placeholder="you@email.com" type="email" />
          </div>
          <Field label="Subject" name="subject" placeholder="Project, role, or idea" />
          <div>
            <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
              Message
            </label>
            <textarea
              required
              rows={5}
              placeholder="Tell me a bit about it…"
              className="mt-2 w-full rounded-xl bg-background/60 border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary transition resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 font-medium shadow-glow hover:scale-[1.01] transition"
          >
            <Send className="size-4" />
            {sent ? "Message sent — I'll reply soon" : "Send message"}
          </button>
        </form>
      </div>
    </Section>
  );
}

function Field({
  label,
  name,
  placeholder,
  type = "text",
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl bg-background/60 border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary transition"
      />
    </div>
  );
}
