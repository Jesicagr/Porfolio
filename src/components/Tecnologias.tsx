import { tecnologiasDatos } from '@/data/proyectos';
import Reveal from '@/components/Reveal';

export default function Tecnologias() {
  return (
    <section id="tecnologias" className="space-y-8">
      <Reveal>
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-teal-400">Stack</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-balance">Tecnologías</h2>
          <p className="mt-2 text-slate-300 text-pretty">Las herramientas con las que trabajo día a día.</p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tecnologiasDatos.map((categoria, i) => (
          <Reveal key={categoria.titulo} delay={i * 100} className="h-full">
            <CategoriaCard categoria={categoria} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function CategoriaCard({ categoria }: { categoria: typeof tecnologiasDatos[number] }) {
  return (
    <div className="h-full p-6 rounded-xl bg-slate-900/80 border border-slate-800/80 space-y-4">
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
