import { Section, SectionLabel, SectionTitle } from "@/components/common/Section";
import { MISSION_VALUES } from "@/lib/constants/content";

export function AboutSection() {
  return (
    <Section id="nosotros">
      <div className="grid lg:grid-cols-2 gap-12 md:gap-16">
        {/* Left: Text Content */}
        <div>
          <SectionLabel text="Nosotros" />
          <SectionTitle>
            Tecnología que
            <br />
            <span className="text-cyan-400">impulsa tu negocio</span>
          </SectionTitle>

          <div className="mt-8 space-y-5 text-white/70 leading-relaxed">
            <p>
              En AI Lead Shield combinamos desarrollo de software de alto nivel
              con estrategia de marketing digital para entregar resultados
              medibles desde el primer mes de trabajo.
            </p>
            <p>
              Somos un equipo apasionado por la tecnología y obsesionado con la
              conversión. Cada herramienta que construimos está diseñada para que
              vendas más, con menos esfuerzo operativo.
            </p>
            <p>
              Contamos con expertos en desarrollo de software, automatización y
              marketing digital, comprometidos con la excelencia en cada
              proyecto y cliente que atendemos.
            </p>
          </div>

          <div className="mt-8 space-y-3">
            {MISSION_VALUES.map((value, idx) => (
              <div
                key={idx}
                className="border-l-2 border-cyan-400 bg-cyan-500/5 p-4 hover:bg-cyan-500/10 transition-colors"
              >
                <h4 className="font-bold mb-1">{value.title}</h4>
                <p className="text-sm text-white/60">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Visual Grid */}
        <div className="grid grid-cols-2 gap-4 lg:gap-6 auto-rows-fr">
          <div className="bg-black/50 border border-cyan-500/20 rounded-sm p-6 text-center hover:border-cyan-500/50 transition-colors flex flex-col items-center justify-center min-h-[150px] md:min-h-[180px]">
            <div className="text-4xl md:text-5xl font-black text-cyan-400 mb-2">
              100%
            </div>
            <p className="text-xs md:text-sm text-white/60">
              Compromiso con cada cliente
            </p>
          </div>
          <div className="bg-black/50 border border-cyan-500/20 rounded-sm p-6 text-center hover:border-cyan-500/50 transition-colors flex flex-col items-center justify-center min-h-[150px] md:min-h-[180px]">
            <div className="text-4xl md:text-5xl font-black text-cyan-400 mb-2">
              5★
            </div>
            <p className="text-xs md:text-sm text-white/60">
              Calidad de servicio
            </p>
          </div>
          <div className="bg-black/50 border border-cyan-500/20 rounded-sm p-6 text-center hover:border-cyan-500/50 transition-colors lg:col-span-2 flex flex-col items-center justify-center min-h-[160px] md:min-h-[200px]">
            <div className="text-3xl md:text-4xl font-black text-cyan-400 mb-2">
              Días
            </div>
            <p className="text-xs md:text-sm text-white/60">
              No meses para implementar
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
