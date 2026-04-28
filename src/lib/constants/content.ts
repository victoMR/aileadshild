import type { ServiceCard, ProblemCard, StepItem, StatItem, ValueRow } from "@/types";

export const SERVICES: ServiceCard[] = [
  {
    id: "automation",
    icon: "🤖",
    title: "Automatización de Lead Generation",
    description:
      "Capturamos, clasificamos y distribuimos leads automáticamente desde todos tus canales — Facebook, Instagram, Google, tu web — en tiempo real, sin intervención humana.",
  },
  {
    id: "crm-ai",
    icon: "🧠",
    title: "CRM con Inteligencia Artificial",
    description:
      "Un CRM que aprende de tus ventas, prioriza prospectos calientes y automatiza el seguimiento con mensajes personalizados en WhatsApp, email y SMS.",
  },
  {
    id: "analytics",
    icon: "📊",
    title: "Dashboards y Reportes en Tiempo Real",
    description:
      "Visualiza tu embudo completo, tasa de conversión, costo por lead y ROI de cada campaña — todo en un panel que se actualiza automáticamente.",
  },
  {
    id: "chatbots",
    icon: "💬",
    title: "Chatbots y Asistentes de Ventas AI",
    description:
      "Agentes de IA que responden, califican y agendan citas con tus prospectos 24/7, sin costo adicional de nómina, sin descansos ni días de asueto.",
  },
  {
    id: "nurturing",
    icon: "⚡",
    title: "Flujos de Nurturing Automatizados",
    description:
      "Secuencias de seguimiento que se adaptan al comportamiento de cada prospecto, aumentando la probabilidad de cierre en cada punto de contacto clave.",
  },
  {
    id: "marketing",
    icon: "🎯",
    title: "Estrategia de Marketing Digital",
    description:
      "Diseño y gestión de campañas en Meta Ads y Google Ads con optimización continua basada en datos reales para maximizar tu retorno de inversión.",
  },
];

export const PROBLEMS: ProblemCard[] = [
  {
    id: "1",
    number: "01",
    title: "Leads sin seguimiento",
    description:
      "El 78% de los leads se enfría porque nadie los contacta en los primeros 5 minutos. Cada hora sin respuesta es dinero que se va con la competencia.",
  },
  {
    id: "2",
    number: "02",
    title: "Prospectos no calificados",
    description:
      "Tu equipo de ventas pierde horas con prospectos que nunca van a comprar. Sin calificación automática, el costo por venta se dispara y la moral cae.",
  },
  {
    id: "3",
    number: "03",
    title: "Procesos manuales lentos",
    description:
      "Capturar datos, enviar correos, agendar citas, actualizar el CRM... todo manual. Son horas perdidas que podrían estar cerrando ventas reales.",
  },
  {
    id: "4",
    number: "04",
    title: "Sin visibilidad del embudo",
    description:
      "No sabes en qué etapa se pierde cada lead, cuál canal genera más ventas, ni cuánto cuesta cada cliente. Tomas decisiones importantes a ciegas.",
  },
];

export const STEPS: StepItem[] = [
  {
    id: "1",
    number: "01",
    title: "Captación Multicanal",
    description:
      "Conectamos todas tus fuentes de leads — redes sociales, web, formularios, anuncios — en una sola plataforma centralizada e inteligente.",
  },
  {
    id: "2",
    number: "02",
    title: "Calificación Automática con AI",
    description:
      "Nuestra IA evalúa cada prospecto al instante: nivel de interés, capacidad de compra y etapa del embudo — sin ninguna intervención humana.",
  },
  {
    id: "3",
    number: "03",
    title: "Seguimiento Inteligente",
    description:
      "Activamos secuencias de mensajes personalizados por WhatsApp, email y SMS según el comportamiento y perfil específico de cada lead.",
  },
  {
    id: "4",
    number: "04",
    title: "Cierre y Optimización Continua",
    description:
      "Tu equipo recibe los prospectos listos para cerrar, y tú ves en tiempo real qué funciona para optimizar continuamente el sistema.",
  },
];

export const STATS: StatItem[] = [
  { value: "3×", label: "Más leads calificados" },
  { value: "5 min", label: "Tiempo de respuesta automático" },
  { value: "24/7", label: "Operación sin interrupciones" },
  { value: "40%", label: "Aumento en tasa de cierre" },
];

export const MISSION_VALUES: ValueRow[] = [
  {
    title: "Nuestra Misión",
    description:
      "Proporcionar soluciones innovadoras de software que impulsen el crecimiento empresarial, optimizando la generación de leads y mejorando la conversión de ventas.",
  },
  {
    title: "Nuestra Visión",
    description:
      "Ser líderes en software de sales automation para Latinoamérica, haciendo la inteligencia artificial accesible para empresas de cualquier tamaño e industria.",
  },
  {
    title: "Nuestro Equipo",
    description:
      "Especialistas en IA, automatización y marketing digital, unidos por una sola misión: que tus ventas nunca se detengan.",
  },
];

export const MARQUEE_ITEMS = [
  "Automatización de Leads",
  "CRM Inteligente",
  "Captación 24/7",
  "Calificación Automática",
  "Seguimiento con AI",
  "Conversión Optimizada",
  "Marketing Digital",
  "Integración Total",
  "Chatbots de Ventas",
  "Reportes en Tiempo Real",
];
