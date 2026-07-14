'use client';

import { FormEvent, useState } from 'react';

export default function Contacto() {
  const [succeeded, setSucceeded] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    await fetch('https://formspree.io/f/xjgnkykn', {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' },
    });

    setSubmitting(false);
    setSucceeded(true);
    form.reset();
  };

  return (
    <section id="contacto" className="space-y-8 pb-12">
      <div className="animate-fade-in-up">
        <h2 className="text-2xl font-bold tracking-tight">Hablemos</h2>
        <p className="text-slate-400">
          ¿Tenés una propuesta de trabajo, una consulta o una idea en mente? Escribime.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Información lateral / Redes */}
        <div className="animate-fade-in-up delay-100 space-y-6">
          <div>
            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Email</h3>
            <a href="mailto:tu.email@ejemplo.com" className="text-teal-400 transition-[color] duration-150 ease-out motion-safe:hover:text-teal-300 text-lg break-all active:opacity-80">
              jesiagr@gmail.com
            </a>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Redes</h3>
            <div className="flex flex-col gap-2 mt-2">
              <a href="https://www.linkedin.com/in/jesiaguirre/" target="_blank" rel="noreferrer" className="text-slate-300 transition-[color] duration-150 ease-out motion-safe:hover:text-teal-400 inline-flex items-center gap-1 group/link active:scale-[0.97]">
                LinkedIn <span className="inline-block transition-transform duration-150 ease-out motion-safe:group-hover/link:translate-x-0.5 motion-safe:group-hover/link:-translate-y-0.5">↗</span>
              </a>
              <a href="https://github.com/tu-usuario" target="_blank" rel="noreferrer" className="text-slate-300 transition-[color] duration-150 ease-out motion-safe:hover:text-teal-400 inline-flex items-center gap-1 group/link active:scale-[0.97]">
                GitHub <span className="inline-block transition-transform duration-150 ease-out motion-safe:group-hover/link:translate-x-0.5 motion-safe:group-hover/link:-translate-y-0.5">↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* Formulario */}
        <div className="animate-fade-in-up delay-200 md:col-span-2 bg-slate-900/40 border border-slate-800/60 p-6 rounded-xl">
          {succeeded ? (
            <div className="animate-scale-in h-full flex flex-col items-center justify-center text-center p-6 space-y-3">
              <div className="w-12 h-12 rounded-full bg-teal-500/10 text-teal-400 flex items-center justify-center text-xl font-bold">
                ✓
              </div>
              <h3 className="text-lg font-semibold text-slate-100">¡Mensaje enviado con éxito!</h3>
              <p className="text-sm text-slate-400">Gracias por escribir. Te responderé lo antes posible.</p>
              <button 
                type="button"
                className="text-xs text-teal-400 transition-[color] duration-150 ease-out motion-safe:hover:text-teal-300 pt-2 active:scale-[0.97]"
              >
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="group/field">
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1 transition-[color] duration-150 ease-out group-focus-within/field:text-teal-400">Nombre</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-100 outline-none transition-[border-color,box-shadow] duration-150 ease-out focus:border-teal-500 focus:ring-1 focus:ring-teal-500/30 text-sm placeholder:text-slate-700"
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
                  className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-100 outline-none transition-[border-color,box-shadow] duration-150 ease-out focus:border-teal-500 focus:ring-1 focus:ring-teal-500/30 text-sm placeholder:text-slate-700"
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
                  className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-100 outline-none transition-[border-color,box-shadow] duration-150 ease-out focus:border-teal-500 focus:ring-1 focus:ring-teal-500/30 text-sm resize-none placeholder:text-slate-700"
                  placeholder="¿En qué puedo ayudarte?"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full md:w-auto px-6 py-3 rounded-lg bg-teal-500 text-slate-950 font-medium transition-[transform,background,box-shadow] duration-150 ease-out active:scale-[0.97] motion-safe:hover:bg-teal-400 motion-safe:hover:shadow-lg motion-safe:hover:shadow-teal-500/25 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? 'Enviando...' : 'Enviar mensaje'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}