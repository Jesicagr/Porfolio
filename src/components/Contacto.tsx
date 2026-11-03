'use client';

import { FormEvent, useState } from 'react';
import Reveal from '@/components/Reveal';

const linkClass =
  'text-slate-300 transition-[color] duration-150 ease-out motion-safe:hover:text-teal-400 inline-flex items-center gap-1 group/link active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500/60 rounded';

export default function Contacto() {
  const [succeeded, setSucceeded] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xjgnkykn', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (!response.ok) {
        throw new Error('No se pudo enviar el mensaje.');
      }

      form.reset();
      setSucceeded(true);
    } catch {
      setError('No pudimos enviar tu mensaje. Intentá de nuevo o escribime por email.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="space-y-8 pb-12">
      <Reveal>
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-teal-400">Contacto</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-balance">Hablemos</h2>
          <p className="mt-2 text-slate-300 text-pretty">
            ¿Tenés una propuesta de trabajo, una consulta o una idea en mente? Escribime.
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Información lateral / Redes */}
        <Reveal delay={100} className="space-y-6">
          <div>
            <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">Email</h3>
            <a href="mailto:jesiagr@gmail.com" className="text-teal-400 transition-[color] duration-150 ease-out motion-safe:hover:text-teal-300 text-lg break-all active:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500/60 rounded">
              jesiagr@gmail.com
            </a>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">Redes</h3>
            <div className="flex flex-col gap-2 mt-2">
              <a href="https://www.linkedin.com/in/jesiaguirre/" target="_blank" rel="noreferrer" className={linkClass}>
                LinkedIn <span className="inline-block transition-transform duration-150 ease-out motion-safe:group-hover/link:translate-x-0.5 motion-safe:group-hover/link:-translate-y-0.5">↗</span>
              </a>
              <a href="https://github.com/Jesicagr" target="_blank" rel="noreferrer" className={linkClass}>
                GitHub <span className="inline-block transition-transform duration-150 ease-out motion-safe:group-hover/link:translate-x-0.5 motion-safe:group-hover/link:-translate-y-0.5">↗</span>
              </a>
            </div>
          </div>
        </Reveal>

        {/* Formulario */}
        <Reveal delay={200} className="md:col-span-2">
          <div className="h-full bg-slate-900/80 border border-slate-800/80 p-6 rounded-xl">
            {succeeded ? (
              <div className="animate-scale-in h-full flex flex-col items-center justify-center text-center p-6 space-y-3" role="status" aria-live="polite">
                <div className="w-12 h-12 rounded-full bg-teal-500/10 text-teal-400 flex items-center justify-center text-xl font-bold">
                  ✓
                </div>
                <h3 className="text-lg font-semibold text-slate-100">¡Mensaje enviado con éxito!</h3>
                <p className="text-sm text-slate-300">Gracias por escribir. Te responderé lo antes posible.</p>
                <button
                  type="button"
                  onClick={() => {
                    setSucceeded(false);
                    setError(null);
                  }}
                  className="text-xs text-teal-400 transition-[color] duration-150 ease-out motion-safe:hover:text-teal-300 pt-2 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500/60 rounded"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="_gotcha"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="hidden"
                />
                <div className="group/field">
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1 transition-[color] duration-150 ease-out group-focus-within/field:text-teal-400">Nombre</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    autoComplete="name"
                    className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-100 outline-none transition-[border-color,box-shadow] duration-150 ease-out focus:border-teal-500 focus:ring-1 focus:ring-teal-500/30 text-sm placeholder:text-slate-500"
                    placeholder="Tu nombre"
                  />
                </div>

                <div className="group/field">
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1 transition-[color] duration-150 ease-out group-focus-within/field:text-teal-400">Correo electrónico</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    autoComplete="email"
                    className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-100 outline-none transition-[border-color,box-shadow] duration-150 ease-out focus:border-teal-500 focus:ring-1 focus:ring-teal-500/30 text-sm placeholder:text-slate-500"
                    placeholder="nombre@correo.com"
                  />
                </div>

                <div className="group/field">
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1 transition-[color] duration-150 ease-out group-focus-within/field:text-teal-400">Mensaje</label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    required
                    className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-100 outline-none transition-[border-color,box-shadow] duration-150 ease-out focus:border-teal-500 focus:ring-1 focus:ring-teal-500/30 text-sm resize-none placeholder:text-slate-500"
                    placeholder="¿En qué puedo ayudarte?"
                  ></textarea>
                </div>

                {error && (
                  <p className="text-sm text-red-400" role="alert">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full md:w-auto px-6 py-3 rounded-lg bg-teal-500 text-slate-950 font-medium transition-[transform,background,box-shadow] duration-150 ease-out active:scale-[0.97] motion-safe:hover:bg-teal-400 motion-safe:hover:shadow-lg motion-safe:hover:shadow-teal-500/25 text-sm disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                >
                  {submitting ? 'Enviando...' : 'Enviar mensaje'}
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
