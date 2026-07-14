export interface Proyecto {
    id: number;
    titulo: string;
    descripcion: string;
    desafio: string;
    solucion: string;
    tecnologias: string[];
    stack?: Record<string, string>;
    linkDemo?: string;
    linkGithub?: string;
  }
  
  export const proyectosDatos: Proyecto[] = [
    {
      id: 1,
      titulo: "INMO — Sistema de Gestión Inmobiliaria",
      descripcion: "Plataforma web full-stack para la administración integral de inmobiliarias con CRM, multitenant y panel de administración.",
      desafio: "Arquitectura multitenant con resolución dinámica por dominio, aislamiento de datos y sincronización B2B.",
      solucion: "Se desarrolló con Next.js 16, React 19, Prisma y PostgreSQL en una VPS con Nginx, integrando Supabase Storage, Cloudflare y PWA.",
      tecnologias: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma", "Supabase", "NextAuth"],
      stack: {
        Frontend: "Next.js 16, React 19, TypeScript, Tailwind CSS 4, shadcn/ui",
        Backend: "API Routes de Next.js, Prisma ORM",
        "Base de datos": "PostgreSQL",
        Almacenamiento: "Supabase Storage",
        Infraestructura: "Hostinger VPS + Nginx + PM2",
        "CDN/Seguridad": "Cloudflare (DNS, proxy, SSL)",
        Autenticación: "NextAuth + bcryptjs",
        Testing: "Playwright, Jest",
        DevOps: "Docker, SSL automatizado (Certbot)"
      },
      linkDemo: "https://dithurbide.org"
    },
    {
      id: 2,
      titulo: "Conectar San José",
      descripcion: "Plataforma digital municipal con sitio público y panel administrativo para gestión de actividades, áreas, contactos de emergencia y turismo.",
      desafio: "Crear un sistema completo con dos caras (público + admin), autenticación JWT por roles, scraping de Instagram y mapas interactivos.",
      solucion: "Backend en Spring Boot 3.5 + JWT + PostgreSQL, frontend en Angular 21 standalone + Tailwind CSS 4, mapas con Leaflet, scraping con Jsoup/Selenium y despliegue con proxy dev.",
      tecnologias: ["Java", "Spring Boot", "Angular", "TypeScript", "Tailwind CSS", "PostgreSQL", "Leaflet"],
      stack: {
        Backend: "Java 21, Spring Boot 3.5, Spring Security + JWT, Spring Data JPA/Hibernate, PostgreSQL, Swagger",
        Frontend: "Angular 21 (standalone), TypeScript 5.9, Tailwind CSS 4.3, Leaflet, RxJS",
        "Base de datos": "PostgreSQL — 11 tablas, ddl-auto=update",
        Autenticación: "JWT (jjwt) — Roles: ADMIN y SUPER_ADMIN",
        Scraping: "Jsoup + Selenium (Instagram)",
        Testing: "Vitest (unit), Playwright (E2E)",
        DevOps: "Git/GitHub, Angular CLI + Vite, proxy localhost:8080"
      },
      linkGithub: "https://github.com/Jesicagr/ConectarSanJose.git"
    },
    {
      id: 3,
      titulo: "RealState Cloud",
      descripcion: "SaaS white-label multi-tenant para inmobiliarias con landing, checkout por suscripción, panel de administración y gestión de propiedades.",
      desafio: "Implementar multi-tenancy con aprovisionamiento automático de tenants, checkout vía Mercado Pago y validación de subdominios en tiempo real.",
      solucion: "Arquitectura SaaS con Next.js 16 App Router, Supabase (PostgreSQL), NextAuth v4, Mercado Pago (subscriptions), Framer Motion, trilingüe (es/ en/pt) y Docker.",
      tecnologias: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Mercado Pago", "NextAuth", "Docker"],
      stack: {
        Frontend: "Next.js 16, React 19, TypeScript, Tailwind CSS 4, Framer Motion, Leaflet, Swiper",
        Backend: "API Routes de Next.js, Supabase (PostgreSQL)",
        Pago: "Mercado Pago (checkout + subscriptions)",
        "Multi-tenant": "Subdominios dinámicos, aprovisionamiento automático",
        "Multi-idioma": "Español, Inglés, Portugués",
        Infra: "Docker, realstate.cloud",
        Testing: "Playwright (E2E), Vitest (unit)",
        Emails: "Resend"
      },
      linkDemo: "https://realstate.cloud"
    }
  ];