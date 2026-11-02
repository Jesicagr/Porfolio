const linkClass =
  'transition-colors duration-150 hover:text-teal-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500/60 rounded';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800/60">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-slate-100">Jesica Aguirre</p>
          <p className="text-sm text-slate-400">Desarrolladora Full Stack</p>
        </div>

        <nav aria-label="Redes y contacto" className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-400">
          <a href="mailto:jesiagr@gmail.com" className={linkClass}>Email</a>
          <a href="https://www.linkedin.com/in/jesiaguirre/" target="_blank" rel="noreferrer" className={linkClass}>LinkedIn</a>
          <a href="https://github.com/Jesicagr" target="_blank" rel="noreferrer" className={linkClass}>GitHub</a>
        </nav>

        <p className="text-xs text-slate-500">© {year} · Hecho con Next.js</p>
      </div>
    </footer>
  );
}
