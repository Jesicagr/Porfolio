'use client';

import { useState } from 'react';
import { proyectosDatos } from '@/data/proyectos';

export default function Proyectos() {
  return (
    <section id="proyectos" className="space-y-8">
      <div className="animate-fade-in-up">
        <h2 className="text-2xl font-bold tracking-tight">Proyectos Destacados</h2>
        <p className="text-slate-400">Una selección de mis trabajos más recientes y relevantes.</p>
      </div>
      
      {/* Grilla Responsiva */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {proyectosDatos.map((proyecto, i) => (
          <ProyectoCard key={proyecto.id} proyecto={proyecto} index={i} />
        ))}
      </div>
    </section>
  );
}

function ProyectoCard({ proyecto, index }: { proyecto: typeof proyectosDatos[number]; index: number }) {
  const [stackOpen, setStackOpen] = useState(false);
  const delays = ['delay-100', 'delay-200', 'delay-300', 'delay-400'];

  return (
    <div 
      className={`animate-fade-in-up ${delays[index % delays.length]} p-6 rounded-xl bg-slate-900/50 border border-slate-800/60 transition-[transform,border-color,box-shadow] duration-200 ease-out active:scale-[0.98] motion-safe:hover:border-teal-500/30 motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-lg motion-safe:hover:shadow-teal-500/5 group flex flex-col justify-between`}
    >
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-slate-100 motion-safe:group-hover:text-teal-400 transition-colors duration-200 ease-out">
          {proyecto.titulo}
        </h3>
        <p className="text-sm text-slate-400 leading-relaxed">
          {proyecto.descripcion}
        </p>
        
        {/* Badges de Tecnologías */}
        <div className="flex flex-wrap gap-2 pt-2">
          {proyecto.tecnologias.map((tech, i) => (
            <span 
              key={tech} 
              className="px-2.5 py-0.5 rounded text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700/50 transition-[transform,background,border-color] duration-150 ease-out motion-safe:hover:bg-teal-500/20 motion-safe:hover:text-teal-400 motion-safe:hover:border-teal-500/30 motion-safe:hover:scale-105"
              style={{ transitionDelay: `${i * 30}ms` }}
            >
              {tech}
            </span>
          ))}
        </div>

        {proyecto.stack && (
          <>
            <button
              onClick={() => setStackOpen(!stackOpen)}
              className="flex items-center gap-1.5 text-xs text-teal-400/70 transition-[color] duration-150 ease-out pt-1 active:scale-[0.97] motion-safe:hover:text-teal-400"
            >
              <span className={`transition-transform duration-150 ease-out ${stackOpen ? 'rotate-90' : ''}`}>▸</span>
              Stack completo
            </button>
            <div className={`grid transition-[grid-template-rows,opacity] duration-200 ease-out ${stackOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
              <div className="overflow-hidden">
                <div className="space-y-1.5 pt-2">
                  {Object.entries(proyecto.stack).map(([capa, tecnologia]) => (
                    <div key={capa} className="flex gap-2 text-xs">
                      <span className="text-teal-400/80 font-medium shrink-0 w-28">{capa}</span>
                      <span className="text-slate-400">{tecnologia}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      
      {/* Links del Proyecto */}
      <div className="flex gap-4 mt-6 pt-4 border-t border-slate-800/60 text-sm font-medium">
        {proyecto.linkDemo && (
          <a href={proyecto.linkDemo} target="_blank" rel="noreferrer" className="text-teal-400 transition-[color] duration-150 ease-out motion-safe:hover:text-teal-300 inline-flex items-center gap-1 group/link active:scale-[0.97]">
            Demo en vivo
            <span className="inline-block transition-transform duration-150 ease-out motion-safe:group-hover/link:translate-x-1">→</span>
          </a>
        )}
        {proyecto.linkGithub && (
          <a href={proyecto.linkGithub} target="_blank" rel="noreferrer" className="text-slate-400 transition-[color] duration-150 ease-out motion-safe:hover:text-slate-200 active:scale-[0.97]">
            GitHub
          </a>
        )}
      </div>
    </div>
  );
}