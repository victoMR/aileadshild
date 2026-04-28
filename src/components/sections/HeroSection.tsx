"use client";

import { Button } from "@/components/common/Button";
import { HeroBadge } from "@/components/common/Badge";
import { useBooking } from "@/components/common/BookingContext";

export function HeroSection() {
  const { openBooking } = useBooking();
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-20 md:pb-24 px-4 md:px-8 lg:px-12 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-3xl opacity-30 bg-gradient-to-b from-cyan-500/20 to-transparent blur-3xl"></div>
        <div className="absolute top-1/3 right-0 w-96 h-96 opacity-10 bg-gradient-to-br from-emerald-500 to-transparent blur-3xl"></div>
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 -z-[9] opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,201,224,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,201,224,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="text-center max-w-5xl animate-fade-up">
        <HeroBadge>Tecnología de Inteligencia Artificial Empresarial</HeroBadge>

        <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 md:mb-8 leading-tight -tracking-wider">
          Ningún lead
          <br />
          se <span className="text-cyan-400">escapa.</span>
          <br />
          Ninguna venta
          <br />
          se <span className="text-cyan-400">pierde.</span>
        </h1>

        <p className="text-lg md:text-xl text-white/75 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed">
          Automatizamos tu prospección, calificamos tus leads y cerramos más
          ventas — con inteligencia artificial que trabaja 24/7 por tu negocio.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={openBooking}
            className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-emerald-400 text-black font-bold rounded-full hover:shadow-lg hover:scale-105 transition-all"
          >
            Comienza Ahora
          </button>
          <Button href="#servicios" variant="ghost">
            Ver Servicios
          </Button>
        </div>
      </div>
    </section>
  );
}
