export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/50 bg-slate-950/70 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a
          href="#top"
          className="text-sm font-semibold tracking-tight text-slate-100 transition-colors duration-150 hover:text-teal-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500/60 rounded"
        >
          Jesica Aguirre
        </a>

        <nav aria-label="Navegación principal" className="flex items-center gap-1 text-sm text-slate-300 sm:gap-2">
          <a
            href="#tecnologias"
            className="hidden rounded-md px-2 py-2 transition-colors duration-150 hover:text-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500/60 sm:block sm:px-3"
          >
            Tecnologías
          </a>
          <a
            href="#proyectos"
            className="rounded-md px-2 py-2 transition-colors duration-150 hover:text-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500/60 sm:px-3"
          >
            Proyectos
          </a>
          <a
            href="#contacto"
            className="rounded-md bg-teal-500 px-3 py-2 font-medium text-slate-950 transition-colors duration-150 hover:bg-teal-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            Contacto
          </a>
        </nav>
      </div>
    </header>
  );
}
