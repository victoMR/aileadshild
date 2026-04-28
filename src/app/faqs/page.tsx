import { Metadata } from "next";
import { Section, SectionLabel, SectionTitle } from "@/components/common/Section";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Preguntas Frecuentes | AI Lead Shield",
  description:
    "Encuentra respuestas a las preguntas más comunes sobre nuestros servicios",
};

interface FAQ {
  id: string;
  question: string;
  answer: string;
}

const FAQS: FAQ[] = [
  {
    id: "1",
    question: "¿Qué servicios ofrece AI Lead Shield?",
    answer:
      "En AI Lead Shield, ofrecemos una variedad de servicios de software, incluyendo desarrollo de automatizaciones, consultoría de TI, agentes de inteligencia artificial y soluciones personalizadas.",
  },
  {
    id: "2",
    question: "¿Cómo puedo contactar a AI Lead Shield?",
    answer:
      "Puede contactar a AI Lead Shield a través de nuestro formulario en línea o llamándonos al número de atención al cliente disponible en nuestro sitio.",
  },
  {
    id: "3",
    question: "¿Cuál es el tiempo estimado para el desarrollo de un software?",
    answer:
      "El tiempo de desarrollo varía según la complejidad del proyecto. En AI Lead Shield, variando de 5 a 15 días naturales, trabajamos con nuestros clientes para establecer un cronograma realista.",
  },
  {
    id: "4",
    question:
      "¿Cuál es la diferencia real entre un Chatbot clásico y los Agentes de IA que ustedes implementan?",
    answer:
      "La diferencia es la inteligencia y la capacidad de decisión. Un chatbot clásico sigue un guion fijo (si el cliente dice 'A', responde 'B') y suele trabarse si la pregunta es compleja. Nuestros Agentes de IA, en cambio, entienden el contexto, el sentimiento y la intención del usuario. No solo responden dudas, sino que pueden 'actuar': agendar citas en tu calendario, calificar si un prospecto es viable o incluso derivar casos urgentes a un humano, todo conversando de manera natural como si fuera un miembro más de tu equipo.",
  },
  {
    id: "5",
    question:
      "¿La automatización reemplazará a mi equipo de ventas o atención al cliente?",
    answer:
      "No los reemplaza, los potencia. La automatización se encarga del 'trabajo sucio': responder preguntas repetitivas, filtrar curiosos y dar seguimiento inmediato a cualquier hora. Esto libera a tu equipo humano para que se dedique exclusivamente a lo más rentable: cerrar ventas con clientes que ya fueron filtrados y calificados por la IA, o atender casos de soporte complejos que requieren empatía humana.",
  },
  {
    id: "6",
    question:
      "¿Qué pasa si la Inteligencia Artificial da una respuesta incorrecta a un cliente?",
    answer:
      "Es un miedo común, pero tenemos el control. Nuestros agentes de IA se entrenan con una 'Base de Conocimiento' cerrada y específica de tu negocio (tus precios, tus políticas, tu tono de voz). No 'imaginan' respuestas; se basan estrictamente en la información que validamos contigo. Además, configuramos 'candados' para que, si la IA no sabe algo con certeza, pida disculpas y transfiera la conversación a un humano inmediatamente.",
  },
  {
    id: "7",
    question:
      "¿Por qué necesito automatizaciones si ya tengo un Community Manager que responde los mensajes?",
    answer:
      "Porque la velocidad de respuesta es dinero. Un humano necesita dormir, comer y descansar; un lead que escribe a las 2 a.m. y no recibe respuesta hasta las 9 a.m. suele enfriarse o irse con la competencia. Nuestro sistema asegura una respuesta inmediata 24/7 para captar al cliente en su momento de mayor interés, dejando que tu Community Manager se enfoque en crear contenido, estrategia y fidelizar a la comunidad, en lugar de ser un contestador automático.",
  },
  {
    id: "8",
    question:
      "¿En qué se diferencia una página web tradicional de los 'Embudos de Venta' que ustedes crean?",
    answer:
      "Una página web tradicional es como un escaparate: bonita, pero pasiva. Un Embudo de Venta es como un vendedor experto que toma al visitante de la mano y lo guía paso a paso hacia una acción concreta (comprar, agendar o descargar). Diseñamos nuestros embudos en GHL específicamente para convertir visitas en dinero, eliminando distracciones y enfocando todo el diseño en la conversión.",
  },
  {
    id: "9",
    question:
      "Hago campañas en Facebook/Instagram pero los leads no me compran, ¿cómo ayudan ustedes a solucionar esto?",
    answer:
      "El problema suele ser el 'agujero' en el seguimiento. La mayoría de los leads no compran en el primer contacto. Nosotros implementamos el sistema 'Lead Nurturing' (nutrición de prospectos) en GHL. Cuando llega un lead de tus campañas, nuestro sistema inicia automáticamente una secuencia de mensajes (SMS, WhatsApp, Email) diseñada para educar al prospecto, mostrarle testimonios y derribar objeciones durante días o semanas, hasta que esté listo para comprar, sin que tú tengas que mover un dedo.",
  },
  {
    id: "10",
    question:
      "Si contrato una página web con ustedes, ¿incluye el chat automatizado?",
    answer:
      "¡Sí! Esa es nuestra gran ventaja. No entregamos 'webs muertas'. Todos nuestros desarrollos web vienen integrados nativamente con el chat de GHL. Esto significa que cada visita a tu web es una oportunidad de conversación que cae directamente en un CRM (gestor de clientes) centralizado, permitiéndote saber quién visitó tu sitio y retomar la conversación más tarde.",
  },
  {
    id: "11",
    question:
      "¿Necesito ser experto en tecnología para usar el sistema que me entregan?",
    answer:
      "Para nada. Nosotros hacemos toda la 'ingeniería pesada' detrás de escena. Tú y tu equipo solo usarán una aplicación móvil muy sencilla (disponible en iOS y Android) o un panel web intuitivo donde verán las conversaciones, los nuevos clientes y las citas agendadas. Si sabes usar WhatsApp y el correo electrónico, sabes usar nuestro sistema.",
  },
  {
    id: "12",
    question: "¿Puedo conectar mi WhatsApp actual al sistema de automatización?",
    answer:
      "Sí, pero recomendamos usar la API oficial o integraciones estables que ofrece GHL para evitar bloqueos. Nosotros nos encargamos de migrar tu número o configurar uno nuevo para que funcione como una centralita inteligente: múltiples personas de tu equipo podrán contestar el mismo número de WhatsApp desde distintas computadoras, mientras la IA trabaja en paralelo ayudándoles.",
  },
  {
    id: "13",
    question:
      "¿Qué tan rápido veré resultados después de implementar las automatizaciones?",
    answer:
      "La eficiencia es inmediata. Desde el 'Día 1' verás que ningún mensaje se queda sin responder y que tus bases de datos se ordenan solas. En cuanto a ventas, nuestros clientes suelen notar un aumento en la tasa de conversión en el primer mes, simplemente porque dejan de perder oportunidades por falta de seguimiento o demoras en la respuesta.",
  },
];

export default function FAQsPage() {
  return (
    <>
      <Section className="pt-32">
        <SectionLabel text="Dudas" />
        <SectionTitle>
          Preguntas
          <br />
          <span className="text-cyan-400">Frecuentes</span>
        </SectionTitle>

        <p className="text-white/70 text-lg max-w-2xl mt-6 leading-relaxed">
          Comunícate con nosotros al{" "}
          <a
            href="mailto:contact@aileadshield.com.mx"
            className="text-cyan-400 hover:text-cyan-300 font-bold"
          >
            contact@aileadshield.com.mx
          </a>{" "}
          si no puedes encontrar una respuesta a tu pregunta.
        </p>
      </Section>

      <Section>
        <FAQAccordion items={FAQS} />
      </Section>

      <Footer />
    </>
  );
}
