'use client';

import { FormEvent, useState } from 'react';

export default function Contacto() {
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    
    // Simulación de envío (Acá conectarías la URL de tu servicio de formularios)
    const formData = new FormData(form);
    
    // Ejemplo con Formspree (Descomentar cuando tengas tu ID):
    // await fetch('https://formspree.io/f/TU_ID_AQUI', {
    //   method: 'POST',
    //   body: formData,
    //   headers: { 'Accept': 'application/json' }
    // });

    setEnviado(true);
    form.reset();
  };

  return (
    <section id="contacto" className="space-y-8 pb-12">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Hablemos</h2>
        <p className="text-slate-400">
          ¿Tenés una propuesta de trabajo, una consulta o una idea en mente? Escribime.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Información lateral / Redes */}
        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Email</h3>
            <a href="mailto:tu.email@ejemplo.com" className="text-teal-400 hover:underline text-lg break-all">
              jesiagr@gmail.com
            </a>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Redes</h3>
            <div className="flex flex-col gap-2 mt-2">
              <a href="https://linkedin.com/in/tu-usuario" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-teal-400 transition-colors">
                LinkedIn ↗
              </a>
              <a href="https://github.com/tu-usuario" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-teal-400 transition-colors">
                GitHub ↗
              </a>
            </div>
          </div>
        </div>

        {/* Formulario */}
        <div className="md:col-span-2 bg-slate-900/40 border border-slate-800/60 p-6 rounded-xl">
          {enviado ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-3">
              <div className="w-12 h-12 rounded-full bg-teal-500/10 text-teal-400 flex items-center justify-center text-xl font-bold">
                ✓
              </div>
              <h3 className="text-lg font-semibold text-slate-100">¡Mensaje enviado con éxito!</h3>
              <p className="text-sm text-slate-400">Gracias por escribir. Te responderé lo antes posible.</p>
              <button 
                onClick={() => setEnviado(false)} 
                className="text-xs text-teal-400 hover:underline pt-2"
              >
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">Nombre</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-100 focus:outline-none focus:border-teal-500 transition-colors text-sm"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">Correo electrónico</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-100 focus:outline-none focus:border-teal-500 transition-colors text-sm"
                  placeholder="nombre@correo.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1">Mensaje</label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  required
                  className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-100 focus:outline-none focus:border-teal-500 transition-colors text-sm resize-none"
                  placeholder="¿En qué puedo ayudarte?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full md:w-auto px-6 py-3 rounded-lg bg-teal-500 text-slate-950 font-medium hover:bg-teal-400 transition-colors text-sm"
              >
                Enviar mensaje
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}