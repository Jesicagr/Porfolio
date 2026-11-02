'use client';

import { tecnologiasDatos } from '@/data/proyectos';

export default function Tecnologias() {
  return (
    <section id="tecnologias" className="space-y-8">
      <div className="animate-fade-in-up">
        <h2 className="text-2xl font-bold tracking-tight">Tecnologías</h2>
        <p className="text-slate-400">Las herramientas y tecnologías con las que trabajo.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tecnologiasDatos.map((categoria, i) => (
          <CategoriaCard key={categoria.titulo} categoria={categoria} index={i} />
        ))}
      </div>
    </section>
  );
}

function CategoriaCard({ categoria, index }: { categoria: typeof tecnologiasDatos[number]; index: number }) {
  const delays = ['delay-100', 'delay-200'];

  return (
    <div className={`animate-fade-in-up ${delays[index]} p-6 rounded-xl bg-slate-900/50 border border-slate-800/60 space-y-4`}>
      <h3 className="text-lg font-semibold text-teal-400">{categoria.titulo}</h3>
      <div className="flex flex-wrap gap-2">
        {categoria.items.map((tech, i) => (
          <span
            key={tech.nombre}
            className="px-2.5 py-0.5 rounded text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700/50 transition-[transform,background,border-color] duration-150 ease-out motion-safe:hover:bg-teal-500/20 motion-safe:hover:text-teal-400 motion-safe:hover:border-teal-500/30 motion-safe:hover:scale-105"
            style={{ transitionDelay: `${i * 30}ms` }}
          >
            {tech.nombre}
          </span>
        ))}
      </div>
    </div>
  );
}
