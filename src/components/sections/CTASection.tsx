"use client";

import { Section, SectionLabel } from "@/components/common/Section";
import { useBooking } from "@/components/common/BookingContext";

export function CTASection() {
  const { openBooking } = useBooking();
  return (
    <Section className="bg-black/50 relative overflow-hidden text-center">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-500 to-emerald-500 blur-3xl"></div>
      </div>

      <SectionLabel text="¿Listo para crecer?" centered />
      <h2 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-black leading-tight -tracking-wide max-w-4xl mx-auto text-balance">
        Empieza a capturar
        <br />
        <span className="text-cyan-400">cada oportunidad</span>
      </h2>

      <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
        Agenda una llamada de diagnóstico gratuita. Te mostramos exactamente
        cómo la IA puede transformar tu proceso de ventas en menos de 30 días.
      </p>

      <div className="mt-8">
        <button
          onClick={openBooking}
          className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-emerald-400 text-black font-bold rounded-full hover:shadow-lg hover:scale-105 transition-all"
        >
          Agendar Llamada Gratuita
        </button>
      </div>
    </Section>
  );
}
