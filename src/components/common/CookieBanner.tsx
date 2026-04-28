"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Verificar si el usuario ya aceptó cookies
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowBanner(false);
  };

  const handleDeny = () => {
    localStorage.setItem("cookieConsent", "denied");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[35] bg-black/50 backdrop-blur-md border-t border-cyan-500/20 p-4 md:p-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-sm md:text-base text-white/80 mb-2">
            <strong className="text-white">Este sitio web utiliza cookies</strong>
          </p>
          <p className="text-xs md:text-sm text-white/60">
            Usamos cookies para analizar el tráfico del sitio web y optimizar tu
            experiencia en el sitio. Al aceptar nuestro uso de cookies, tus datos
            se agruparán con los datos de todos los demás usuarios.{" "}
            <Link href="/privacy" className="text-cyan-400 hover:text-cyan-300 underline">
              Ver políticas de privacidad
            </Link>
          </p>
        </div>

        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={handleDeny}
            className="px-4 py-2 text-xs md:text-sm uppercase tracking-wider border border-white/20 rounded-sm text-white/70 hover:text-white hover:border-white/50 transition-all font-bold"
          >
            Rechazar
          </button>
          <button
            onClick={handleAccept}
            className="px-4 py-2 text-xs md:text-sm uppercase tracking-wider bg-gradient-to-r from-cyan-400 to-emerald-400 text-black rounded-sm hover:opacity-90 transition-all font-bold"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}
