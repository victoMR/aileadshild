# Instrucciones para Copilot - Proyecto Next.js AI Lead Shield

## Información del Proyecto

Este es un proyecto **Next.js 16** moderno y totalmente componentizado configurado con:
- TypeScript para type safety
- Tailwind CSS para estilos
- ESLint para code quality
- App Router para enrutamiento moderno
- Optimizado para Cloudflare Workers
- Componentes reutilizables y bien estructurados

## Estructura del Proyecto

```
src/
├── app/                          # App Router - rutas y layouts
│   ├── page.tsx                  # Página principal
│   ├── layout.tsx                # Layout raíz con SEO
│   ├── globals.css               # Estilos globales
│   ├── privacy/
│   │   └── page.tsx              # Políticas y Términos
│   └── faqs/
│       └── page.tsx              # Preguntas Frecuentes
├── components/
│   ├── common/                   # Componentes reutilizables
│   │   ├── Navigation.tsx        # Navegación responsiva
│   │   ├── Button.tsx            # Botones
│   │   ├── Section.tsx           # Wrappers de sección
│   │   ├── Badge.tsx             # Badges
│   │   ├── CookieBanner.tsx      # Banner de cookies
│   │   └── WhatsAppButton.tsx    # Botón flotante WhatsApp
│   └── sections/                 # Secciones de página
│       ├── Hero, Marquee, Problem, Services, Stats
│       ├── Process, Testimonial, About, CTA, Contact
│       ├── Footer, FAQAccordion
│       └── index.ts (exports)
├── lib/
│   └── constants/
│       ├── site.ts               # URLs, navegación, contacto
│       └── content.ts            # Datos (servicios, FAQs, etc.)
└── types/
    └── index.ts                  # TypeScript interfaces

public/                            # Archivos estáticos
```

## Convenciones del Código

- **Componentes**: Functional components con TypeScript
- **Props**: Interfaces explícitas para todos los componentes
- **Estilos**: Tailwind CSS clases directas en JSX
- **Imports**: Usar alias `@/` para rutas relativas
- **Naming**: PascalCase para componentes, camelCase para variables
- **Datos**: Centralizados en `lib/constants/`, nunca en componentes

## Paleta de Colores

```
- Cyan: #00C9E0 (primary)
- Emerald: #3DDC84 (secondary)
- Dark: #000000
- Dark2: #060D14
- Dark3: #0D1F2D
```

## Comandos Disponibles

```bash
npm run dev      # Iniciar servidor de desarrollo (http://localhost:3000)
npm run build    # Compilar para producción
npm start        # Iniciar servidor de producción
npm run lint     # Ejecutar ESLint
```

## Guías de Desarrollo

### Crear un Nuevo Componente

1. Crear archivo en `src/components/common/` o `sections/`
2. Usar TypeScript con tipos explícitos
3. Exportar como named export

```typescript
interface MyComponentProps {
  title: string;
  onClick?: () => void;
}

export function MyComponent({ title, onClick }: MyComponentProps) {
  return (
    <div onClick={onClick} className="p-4">
      <h1>{title}</h1>
    </div>
  );
}
```

### Crear una Nueva Página

1. Crear carpeta en `src/app/`
2. Crear `page.tsx` como Server Component
3. Exportar Metadata explícitamente
4. Next.js maneja el routing automáticamente

```typescript
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mi Página",
  description: "Descripción",
};

export default function MyPage() {
  return <main>Contenido</main>;
}
```

### Añadir Nuevos Datos

1. Abrir `lib/constants/content.ts`
2. Seguir el patrón de arrays y objetos existentes
3. Crear tipos en `types/index.ts` si es necesario
4. Importar y usar en componentes

```typescript
// En content.ts
export const MY_ITEMS = [
  { id: "1", title: "Item 1", ... }
];

// En componente
import { MY_ITEMS } from "@/lib/constants/content";
MY_ITEMS.map(item => ...)
```

### Añadir Estilos

Usar clases Tailwind directamente:

```typescript
<div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-cyan-400 to-emerald-400">
  <h1 className="text-4xl font-bold text-white">Hola</h1>
</div>
```

Para estilos globales, agregar en `src/app/globals.css`:

```css
@layer utilities {
  .my-custom-class {
    @apply p-4 rounded-lg border border-cyan-500/20;
  }
}
```

### Componentes "use client"

Solo marcar como "use client" si necesitan interactividad (hooks):
- CookieBanner (useState para localStorage)
- Navigation (useState para menú móvil)
- FAQAccordion (useState para acordeón)

## Verificación de Código

Antes de hacer commit:

```bash
npm run lint      # Verificar estilos y errores
npm run build     # Verificar que compila correctamente
```

## Recursos Útiles

- [Documentación Next.js](https://nextjs.org/docs)
- [Documentación de App Router](https://nextjs.org/docs/app)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Cloudflare Pages](https://developers.cloudflare.com/pages/)

## Notas Importantes

- El servidor de desarrollo recarga automáticamente cambios
- Turbopack proporciona compilación muy rápida
- Se incluye git repository inicializado
- 7 vulnerabilidades moderadas (revisar con `npm audit` después de testing)
- Cloudflare Ready: usar `@cloudflare/next-on-pages` para deploy
- Totalmente responsivo (Mobile-first)
- SEO optimizado con metadatos completos

## Páginas Disponibles

- `/` - Página principal con todas las secciones
- `/privacy` - Políticas, términos y reembolsos
- `/faqs` - Preguntas frecuentes con acordeón interactivo

## Contacto y Enlaces

- **WhatsApp:** https://api.whatsapp.com/send/?phone=524423224935
- **Email:** contact@aileadshield.com.mx
- **Booking:** https://api.leadconnectorhq.com/widget/booking/l4MFnsp6eATJEWMSqGLJ

---

*Última actualización: 27 de abril de 2026*
