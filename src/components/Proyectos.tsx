import { proyectosDatos } from '@/data/proyectos';

export default function Proyectos() {
  return (
    <section id="proyectos" className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Proyectos Destacados</h2>
        <p className="text-slate-400">Una selección de mis trabajos más recientes y relevantes.</p>
      </div>
      
      {/* Grilla Responsiva */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {proyectosDatos.map((proyecto) => (
          <div 
            key={proyecto.id} 
            className="p-6 rounded-xl bg-slate-900/50 border border-slate-800/60 hover:border-slate-700/80 transition-all group flex flex-col justify-between"
          >
            <div className="space-y-4">
              {/* Título que cambia de color en Hover */}
              <h3 className="text-xl font-semibold text-slate-100 group-hover:text-teal-400 transition-colors">
                {proyecto.titulo}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {proyecto.descripcion}
              </p>
              
              {/* Badges de Tecnologías */}
              <div className="flex flex-wrap gap-2 pt-2">
                {proyecto.tecnologias.map((tech) => (
                  <span 
                    key={tech} 
                    className="px-2.5 py-0.5 rounded text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Links del Proyecto */}
            <div className="flex gap-4 mt-6 pt-4 border-t border-slate-800/60 text-sm font-medium">
              {proyecto.linkDemo && (
                <a href={proyecto.linkDemo} target="_blank" rel="noreferrer" className="text-teal-400 hover:underline">
                  Demo en vivo →
                </a>
              )}
              {proyecto.linkGithub && (
                <a href={proyecto.linkGithub} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-slate-200 transition-colors">
                  GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}