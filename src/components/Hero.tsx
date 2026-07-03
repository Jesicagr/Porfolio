import Link from 'next/link';

export default function Hero() {
  return (
    <section className="pt-20 pb-10 flex flex-col items-start gap-6">
      {/* Badge de Disponibilidad */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 text-sm font-medium border border-teal-500/20">
        <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
        Disponible para nuevos proyectos
      </div>
      
      {/* Título Principal con Gradiente */}
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl">
        Desarrollo aplicaciones web que combinan <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-sky-400">código limpio</span> y diseño intuitivo.
      </h1>
      
      {/* Breve Bío */}
      <p className="text-slate-400 text-lg md:text-xl max-w-2xl leading-relaxed">
        Hola, soy una desarrolladora de software enfocada en crear soluciones digitales eficientes, escalables y optimizadas. Especializada en ecosistemas modernos como React y Next.js.
      </p>
      
      {/* Botones de Acción (CTAs) */}
      <div className="flex flex-wrap gap-4 mt-4">
        <Link href="#proyectos" className="px-6 py-3 rounded-lg bg-teal-500 text-slate-950 font-medium hover:bg-teal-400 transition-colors">
          Ver Proyectos
        </Link>
        <Link href="#contacto" className="px-6 py-3 rounded-lg bg-slate-900 text-slate-200 font-medium hover:bg-slate-800 border border-slate-800 transition-colors">
          Escribime
        </Link>
      </div>
    </section>
  );
}