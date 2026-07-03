export interface Proyecto {
    id: number;
    titulo: string;
    descripcion: string;
    desafio: string;
    solucion: string;
    tecnologias: string[];
    linkDemo?: string;
    linkGithub?: string;
  }
  
  export const proyectosDatos: Proyecto[] = [
    {
      id: 1,
      titulo: "RealState Cloud",
      descripcion: "Dashboard web para gestión inmobiliaria y seguimiento de clientes.",
      desafio: "Centralizar datos complejos y mantener la consistencia del estado en la app.",
      solucion: "Se diseñó una arquitectura desacoplada utilizando patrones limpios e integración de dependencias.",
      tecnologias: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
      linkDemo: "https://realstate.cloud"
    },
    {
      id: 2,
      titulo: "Conectar San José",
      descripcion: "Plataforma municipal para centralizar comunicación y eventos locales.",
      desafio: "Crear una interfaz accesible para ciudadanos con flujos de navegación rápidos.",
      solucion: "Prototipado inicial en Figma y desarrollo con foco en Server-Side Rendering para optimizar la carga.",
      tecnologias: ["Java", "Angular", "PostgreSQL"],
      linkGithub: "https://github.com/Jesicagr/ConectarSanJose.git"
    }
  ];