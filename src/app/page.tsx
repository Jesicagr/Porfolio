import LazyHeroCanvas from '@/components/LazyHeroCanvas';
import Hero from '@/components/Hero';
import Proyectos from '@/components/Proyectos';
import Contacto from '@/components/Contacto';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-slate-950 text-slate-100">
      <LazyHeroCanvas />
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-12 space-y-24">
        
        <Hero />
        
        <Proyectos />
        
        {/* <Tecnologias /> */}
        <Contacto />
        
      </div>
    </main>
  );
}