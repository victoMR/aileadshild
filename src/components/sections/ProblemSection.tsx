import { Section, SectionLabel, SectionTitle } from "@/components/common/Section";
import { PROBLEMS } from "@/lib/constants/content";

export function ProblemSection() {
  return (
    <Section id="problema" className="bg-black/50">
      <SectionLabel text="El Problema" />
      <SectionTitle>
        ¿Por qué pierdes
        <br />
        <span className="text-cyan-400">ventas todos los días?</span>
      </SectionTitle>

      <div className="grid md:grid-cols-2 gap-px mt-12 bg-cyan-500/10">
        {PROBLEMS.map((problem) => (
          <div
            key={problem.id}
            className="bg-black/80 p-6 md:p-8 lg:p-10 hover:bg-cyan-500/5 transition-colors"
          >
            <div className="text-7xl md:text-8xl font-black text-cyan-500/10 mb-4 leading-none">
              {problem.number}
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-3">{problem.title}</h3>
            <p className="text-white/60 leading-relaxed">{problem.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
