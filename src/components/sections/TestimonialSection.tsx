import { Section } from "@/components/common/Section";

export function TestimonialSection() {
  return (
    <Section className="bg-black/50 text-center">
      <div className="max-w-3xl mx-auto">
        <div className="text-xs uppercase tracking-widest text-cyan-400 mb-8 flex items-center justify-center gap-4">
          <span className="w-7 h-px bg-cyan-400"></span>
          Nuestra Promesa
          <span className="w-7 h-px bg-cyan-400"></span>
        </div>

        <p className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-6">
          <span className="text-cyan-400 text-5xl md:text-6xl lg:text-7xl">
            "
          </span>
          Ningún lead se escapa, ninguna venta se pierde
        </p>

        <p className="text-sm uppercase tracking-wider text-white/45">
          — AI Lead Shield · Misión de Empresa
        </p>
      </div>
    </Section>
  );
}
