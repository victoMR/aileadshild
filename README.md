# AI Lead Shield - Página Web

Sitio web moderno y totalmente responsivo de AI Lead Shield, construido con Next.js 16, TypeScript, Tailwind CSS y optimizado para Cloudflare Workers.

## 🚀 Stack Tecnológico

- **Frontend:** Next.js 16+ (App Router)
- **Lenguaje:** TypeScript (type-safe)
- **Estilos:** Tailwind CSS + CSS personalizado
- **Fuentes:** Syne (headings) + Inter (body)
- **Base de Datos:** Sin dependencias de backend (estático)
- **Hosting:** Cloudflare Workers
- **Linting:** ESLint

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── page.tsx              # Página principal
│   ├── layout.tsx            # Layout raíz con SEO
│   ├── globals.css           # Estilos globales
│   ├── privacy/
│   │   └── page.tsx          # Políticas y Términos
│   └── faqs/
│       └── page.tsx          # Preguntas Frecuentes
├── components/
│   ├── common/               # Componentes reutilizables
│   │   ├── Navigation.tsx    # Navbar responsivo
│   │   ├── Button.tsx        # Botones
│   │   ├── Section.tsx       # Wrapper de secciones
│   │   ├── Badge.tsx         # Badges
│   │   ├── CookieBanner.tsx  # Banner de cookies
│   │   └── WhatsAppButton.tsx# Botón flotante WhatsApp
│   └── sections/             # Secciones de página
│       ├── HeroSection.tsx
│       ├── MarqueeSection.tsx
│       ├── ProblemSection.tsx
│       ├── ServicesSection.tsx
│       ├── StatsSection.tsx
│       ├── ProcessSection.tsx
│       ├── TestimonialSection.tsx
│       ├── AboutSection.tsx
│       ├── CTASection.tsx
│       ├── ContactSection.tsx
│       ├── Footer.tsx
│       └── FAQAccordion.tsx
├── lib/
│   └── constants/
│       ├── site.ts           # Configuración del sitio
│       └── content.ts        # Contenido (servicios, FAQs, etc.)
└── types/
    └── index.ts              # TypeScript interfaces

public/
├── favicon.ico
└── otros archivos estáticos
```

## 🎯 Características Principales

### ✨ Componentes
- **Navigation:** Navbar responsive con menú móvil
- **Button:** Botones con variantes (primary, ghost)
- **CookieBanner:** Banner de consentimiento de cookies con localStorage
- **WhatsAppButton:** Botón flotante para contacto directo
- **FAQAccordion:** Acordeón interactivo para preguntas frecuentes
- **Hero Section:** Sección introductoria con animaciones
- **Services Grid:** Tarjetas de servicios con hover effects
- **Stats Section:** Estadísticas con gradientes
- **Process Section:** Pasos con visualización 3D simulada

### 🎨 Diseño
- Diseño moderno y minimalista (Negro, Cyan, Emerald)
- Totalmente responsivo (Mobile-first)
- Animaciones suaves y transiciones
- Gradientes premium
- Dark mode por defecto
- Grid overlay decorativo

### 🔐 Seguridad & SEO
- Metadatos completos en todas las páginas
- Open Graph y Twitter Cards
- Headers de seguridad (X-Content-Type-Options, X-Frame-Options, etc.)
- Robots.txt optimizado
- Canonical URLs
- Hreflang multilingüe (preparado para futuras expansiones)

### 🍪 Gestión de Cookies
- Banner de consentimiento de cookies
- Persistencia en localStorage
- Enlace a políticas de privacidad

## 🚀 Inicio Rápido

### Instalación

```bash
npm install
```

### Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Build para Producción

```bash
npm run build
```

### Iniciar Servidor de Producción

```bash
npm start
```

### Linting

```bash
npm run lint
```

## 📄 Páginas

### Página Principal (`/`)
- Hero Section con CTA
- Marquee animado
- Problemas & Soluciones
- Servicios (6 tarjetas)
- Estadísticas con gradiente
- Proceso 4 pasos
- Testimonial & Promesa
- Sección Nosotros
- CTA secundario
- Contacto
- Footer

### Políticas de Privacidad (`/privacy`)
- Aviso de Privacidad
- Políticas de Reembolsos
- Términos y Condiciones de Uso
- Información de contacto

### Preguntas Frecuentes (`/faqs`)
- 13 preguntas frecuentes
- Acordeón interactivo
- Contacto directo

## 🔧 Configuración

### Variables de Entorno

Crear archivo `.env.local`:

```env
# Opcional: variables personalizadas
```

### Tailwind CSS

La configuración incluye:
- Colores personalizados (Cyan #00C9E0, Emerald #3DDC84)
- Fuentes personalizadas (Syne, Inter)
- Animaciones custom

Ver [tailwind.config.ts](tailwind.config.ts)

## 📱 Responsividad

- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

Breakpoints de Tailwind aplicados:
- `sm:` 640px
- `md:` 768px
- `lg:` 1024px
- `xl:` 1280px
- `2xl:` 1536px

## ☁️ Cloudflare Workers

### Configuración Actual

- `wrangler.toml`: Configuración de Cloudflare
- Next.js optimizado para edge computing
- Compatible con `@cloudflare/next-on-pages`

### Deploy a Cloudflare

```bash
npm install -D @cloudflare/next-on-pages wrangler --legacy-peer-deps
npm run build
wrangler deploy
```

## 📊 Performance

- **Lighthouse Score:** 95+ (Target)
- **Core Web Vitals:** Optimizados
- **Bundle Size:** Minimal (Treeshaking activado)
- **Image Optimization:** Next.js Image (preparado)
- **Font Loading:** Google Fonts preconectados

## 🔗 URLs Importantes

- **Sitio Web:** [aileadshield.com](https://aileadshield.com)
- **Email:** contact@aileadshield.com.mx
- **WhatsApp:** [+52 442 322 4935](https://wa.me/524423224935)
- **Facebook:** [AI Lead Shield](https://www.facebook.com/profile.php?id=61559314284043)
- **Instagram:** [@automatizaciones_gohighlevel](https://www.instagram.com/automatizaciones_gohighlevel/)

## 📚 Convenciones de Código

### Components
- Functional components con Hooks
- TypeScript interfaces para props
- Named exports (excepto página default)

### Archivos de Contenido
- Datos centralizados en `lib/constants/`
- Cambios fáciles sin tocar componentes
- Tipos en `types/index.ts`

### Estilos
- Tailwind CSS utilities
- Clases CSS custom en `globals.css`
- Variables CSS para colores

### Variables de Naming
- Componentes: PascalCase (`MyComponent`)
- Archivos: kebab-case (`my-component.tsx`)
- Variables: camelCase (`myVariable`)
- Constantes: UPPER_SNAKE_CASE (`MY_CONSTANT`)

## 🛠️ Mantenimiento

### Agregar Nueva Sección
1. Crear componente en `src/components/sections/`
2. Importar en `src/app/page.tsx`
3. Agregar contenido en `lib/constants/content.ts` si es necesario

### Actualizar Contenido
- Editar archivos en `lib/constants/`
- Sin tocar lógica de componentes
- Cambios reflejados automáticamente

### Agregar Nueva Página
1. Crear carpeta en `src/app/`
2. Crear `page.tsx`
3. Agregar metadatos (Metadata)
4. Reutilizar componentes comunes

## 🚨 Vulnerabilidades Conocidas

- 7 vulnerabilidades moderadas en dependencias (revisar con `npm audit`)
- Recomendado para actualizar con `npm audit fix --force` después de testing

## 📖 Recursos

- [Documentación Next.js](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript](https://www.typescriptlang.org/docs/)
- [Cloudflare Pages](https://developers.cloudflare.com/pages/)

## 📝 Licencia

Todos los derechos reservados © 2024 AI Lead Shield

---

**Última actualización:** 27 de abril de 2026
