"use client";

import { ReactNode } from "react";
import { BOOKING_URL } from "@/lib/constants/site";

interface BookingDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BookingDrawer({ isOpen, onClose }: BookingDrawerProps) {
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[98] transition-all duration-300 ${
          isOpen ? "bg-black/50 backdrop-blur-sm pointer-events-auto" : "pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed right-0 top-0 bottom-0 z-[99] w-full md:w-96 bg-black border-l border-cyan-500/20 shadow-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-cyan-500/20">
          <h2 className="text-2xl font-black text-white">Agendar Llamada</h2>
          <button
            onClick={onClose}
            className="text-white/45 hover:text-white transition-colors"
            aria-label="Cerrar"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto h-[calc(100vh-100px)]">
          <p className="text-white/75 mb-6">
            Selecciona un horario disponible para agendar tu llamada de consultoría gratis.
          </p>

          {/* Embedding booking iframe */}
          <iframe
            src={BOOKING_URL}
            width="100%"
            height="600"
            frameBorder="0"
            className="rounded-lg"
            title="Agendar Llamada"
          />

          {/* Alternative text if iframe doesn't work */}
          <div className="mt-4 p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-lg">
            <p className="text-sm text-white/75">
              Si no puedes ver el calendario, puedes agendar directamente en:
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 text-sm mt-2 inline-block underline"
            >
              Abrir calendario →
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
