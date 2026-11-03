import LazyHeroGeometry from '@/components/LazyHeroGeometry';
import Reveal from '@/components/Reveal';

export default function Hero() {
  return (
    <section className="relative pt-16 pb-10 flex flex-col items-start gap-6">
      {/* Badge de Disponibilidad */}
      <Reveal>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 text-sm font-medium border border-teal-500/20">
          <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
          Disponible para nuevos proyectos
        </div>
      </Reveal>

      {/* Nombre y Rol */}
      <Reveal delay={100}>
        <div className="space-y-3">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance">
            Jesica Aguirre
          </h1>
          <p className="text-xl md:text-2xl font-medium text-teal-400">
            Desarrolladora Full Stack
          </p>
        </div>
      </Reveal>

      {/* Propuesta de Valor */}
      <Reveal delay={200}>
        <p className="text-slate-300 text-lg md:text-xl max-w-2xl leading-relaxed text-pretty">
          Construyo aplicaciones web que combinan <span className="text-teal-400">código limpio</span> y diseño intuitivo. Especializada en ecosistemas modernos como Next.js, React y Spring Boot.
        </p>
      </Reveal>

      {/* Prueba / Datos rápidos */}
      <Reveal delay={300}>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-300">
          <span><span className="text-slate-200 font-medium">Full Stack</span> · Frontend + Backend</span>
          <span className="hidden sm:inline text-slate-700">/</span>
          <span><span className="text-slate-200 font-medium">3</span> proyectos destacados</span>
          <span className="hidden sm:inline text-slate-700">/</span>
          <span>Trabajo remoto</span>
        </div>
      </Reveal>

      {/* Botones de Acción (CTAs) */}
      <Reveal delay={400}>
        <div className="flex flex-wrap gap-4 mt-2">
          <a href="#proyectos" className="px-6 py-3 rounded-lg bg-teal-500 text-slate-950 font-medium transition-[transform,background,box-shadow] duration-150 ease-out active:scale-[0.97] motion-safe:hover:bg-teal-400 motion-safe:hover:shadow-lg motion-safe:hover:shadow-teal-500/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">
            Ver Proyectos
          </a>
          <a href="#contacto" className="px-6 py-3 rounded-lg bg-slate-900 text-slate-200 font-medium border border-slate-800 transition-[transform,background,border-color] duration-150 ease-out active:scale-[0.97] motion-safe:hover:bg-slate-800 motion-safe:hover:border-teal-500/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">
            Escribime
          </a>
        </div>
      </Reveal>

      <LazyHeroGeometry />
    </section>
  );
}
