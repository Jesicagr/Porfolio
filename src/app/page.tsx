import LazyHeroCanvas from '@/components/LazyHeroCanvas';
import Hero from '@/components/Hero';
import Tecnologias from '@/components/Tecnologias';
import Proyectos from '@/components/Proyectos';
import Contacto from '@/components/Contacto';

export default function Home() {
  return (
    <main className="relative min-h-screen text-slate-100">
      <LazyHeroCanvas />
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-12 space-y-24">
        
        <Hero />
        
        <Tecnologias />
        
        <Proyectos />
        <Contacto />
        
      </div>
    </main>
  );
}