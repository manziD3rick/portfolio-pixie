export function Footer() {
  return (
    <footer className="border-t border-border mt-10">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground font-mono">
        <span>© {new Date().getFullYear()} Manzi Derrick. Built with React & FastAPI energy.</span>
        <span>Designed & coded in Kigali 🇷🇼</span>
      </div>
    </footer>
  );
}
