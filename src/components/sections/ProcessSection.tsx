import { Section, SectionLabel, SectionTitle } from "@/components/common/Section";
import { STEPS } from "@/lib/constants/content";

export function ProcessSection() {
  return (
    <Section id="proceso">
      <SectionLabel text="Cómo Funciona" />
      <SectionTitle>
        De lead a cliente
        <br />
        <span className="text-cyan-400">en piloto automático</span>
      </SectionTitle>

      <div className="grid lg:grid-cols-2 gap-12 md:gap-16 mt-12">
        {/* Steps List */}
        <div className="space-y-8">
          {STEPS.map((step, idx) => (
            <div key={step.id} className="flex gap-6">
              <div className="text-sm font-bold text-white/45 min-w-12 pt-1">
                {step.number}
              </div>
              <div className="flex-1 pb-8 border-b border-white/10 hover:border-cyan-400/50 transition-colors">
                <h3 className="text-lg md:text-xl font-bold mb-2">
                  {step.title}
                </h3>
                <p className="text-white/60 leading-relaxed text-sm md:text-base">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Visual */}
        <div className="hidden lg:flex items-center justify-center">
          <div className="relative w-full aspect-square bg-black/50 border border-cyan-500/20 rounded-lg flex items-center justify-center overflow-hidden">
            {/* Rotating gradients */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-gradient-conic from-cyan-500 to-transparent animate-spin" style={{ animationDuration: "10s" }}></div>
            </div>
            <div className="absolute inset-1/3 opacity-5">
              <div className="absolute inset-0 bg-gradient-conic from-emerald-500 to-transparent animate-spin" style={{ animationDuration: "6s", animationDirection: "reverse" }}></div>
            </div>

            {/* Center content */}
            <div className="relative z-10 text-center">
              <div className="text-7xl md:text-8xl font-black text-cyan-400 mb-2">
                AI
              </div>
              <div className="text-xs uppercase tracking-wider text-white/45 flex items-center justify-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                Engine activo
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
