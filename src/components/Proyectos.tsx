'use client';

import Image from 'next/image';
import { useState } from 'react';
import { proyectosDatos } from '@/data/proyectos';
import ProjectScene3D from '@/components/ProjectScene3D';

export default function Proyectos() {
  return (
    <section id="proyectos" className="space-y-8">
      <div className="animate-fade-in-up">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-teal-400">Portfolio</p>
        <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight">Proyectos destacados</h2>
        <p className="mt-2 text-slate-400">Una selección de sistemas reales, del desafío a la solución.</p>
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
    <article
      className={`animate-fade-in-up ${delays[index % delays.length]} group relative flex flex-col overflow-hidden rounded-2xl bg-slate-900/50 border border-slate-800/60 transition-[border-color,box-shadow] duration-200 ease-out motion-safe:hover:border-teal-500/30 motion-safe:hover:shadow-lg motion-safe:hover:shadow-teal-500/5`}
    >
      {/* Vista previa */}
      <div className="relative aspect-[16/10] overflow-hidden border-b border-slate-800/60 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900">
        {proyecto.imagen ? (
          <Image
            src={proyecto.imagen}
            alt={`Captura de ${proyecto.titulo}`}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover object-top transition-transform duration-500 ease-out motion-safe:group-hover:scale-[1.03]"
          />
        ) : (
          <PreviewFallback index={index} />
        )}
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div>
          <h3 className="text-xl font-semibold text-slate-100 transition-colors duration-200 ease-out motion-safe:group-hover:text-teal-400">
            {proyecto.titulo}
          </h3>
          <p className="mt-2 text-sm text-slate-400 leading-relaxed">
            {proyecto.descripcion}
          </p>
        </div>

        {/* Desafío / Solución */}
        <dl className="space-y-3 border-l-2 border-teal-500/30 pl-4">
          <div>
            <dt className="text-[10px] font-semibold uppercase tracking-wider text-teal-400/90">Desafío</dt>
            <dd className="mt-0.5 text-xs text-slate-400 leading-relaxed">{proyecto.desafio}</dd>
          </div>
          <div>
            <dt className="text-[10px] font-semibold uppercase tracking-wider text-teal-400/90">Solución</dt>
            <dd className="mt-0.5 text-xs text-slate-400 leading-relaxed">{proyecto.solucion}</dd>
          </div>
        </dl>

        {/* Badges de Tecnologías */}
        <div className="flex flex-wrap gap-2">
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
              aria-expanded={stackOpen}
              className="flex items-center gap-1.5 self-start text-xs text-teal-400/80 transition-[color] duration-150 ease-out pt-1 active:scale-[0.97] motion-safe:hover:text-teal-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500/60 rounded"
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
      <div className="mt-auto flex gap-4 border-t border-slate-800/60 px-6 py-4 text-sm font-medium">
        {proyecto.linkDemo && (
          <a href={proyecto.linkDemo} target="_blank" rel="noreferrer" className="text-teal-400 transition-[color] duration-150 ease-out motion-safe:hover:text-teal-300 inline-flex items-center gap-1 group/link active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500/60 rounded">
            Demo en vivo
            <span className="inline-block transition-transform duration-150 ease-out motion-safe:group-hover/link:translate-x-1">→</span>
          </a>
        )}
        {proyecto.linkGithub && (
          <a href={proyecto.linkGithub} target="_blank" rel="noreferrer" className="text-slate-400 transition-[color] duration-150 ease-out motion-safe:hover:text-slate-200 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500/60 rounded">
            GitHub
          </a>
        )}
      </div>
    </article>
  );
}

function PreviewFallback({ index }: { index: number }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #2dd4bf 1px, transparent 1px), linear-gradient(to bottom, #2dd4bf 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(45,212,191,0.14),transparent_65%)]" />
      <ProjectScene3D index={index} size={132} className="relative" />
      <span className="absolute bottom-3 left-4 text-[10px] uppercase tracking-[0.2em] text-slate-500">
        Vista previa
      </span>
    </div>
  );
}
