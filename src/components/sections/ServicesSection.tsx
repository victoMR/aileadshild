import { Section, SectionLabel, SectionTitle } from "@/components/common/Section";
import { SERVICES } from "@/lib/constants/content";

export function ServicesSection() {
  return (
    <Section id="servicios">
      <SectionLabel text="Nuestras Soluciones" />
      <SectionTitle>
        Software inteligente
        <br />
        <span className="text-cyan-400">que genera resultados</span>
      </SectionTitle>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {SERVICES.map((service) => (
          <div
            key={service.id}
            className="border border-cyan-500/20 rounded-sm p-7 md:p-8 bg-black/50 hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all duration-300 hover:-translate-y-2 group"
          >
            <div className="text-3xl mb-4">{service.icon}</div>
            <h3 className="text-lg font-bold mb-3">{service.title}</h3>
            <p className="text-sm text-white/60 leading-relaxed">
              {service.description}
            </p>
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-emerald-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
          </div>
        ))}
      </div>
    </Section>
  );
}
