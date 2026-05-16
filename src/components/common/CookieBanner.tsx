"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";

function subscribeConsent(cb: () => void) {
  window.addEventListener("cookieConsentChange", cb);
  window.addEventListener("storage", cb);
  return () => {
    window.removeEventListener("cookieConsentChange", cb);
    window.removeEventListener("storage", cb);
  };
}

function getConsentSnapshot(): string | null {
  return localStorage.getItem("cookieConsent");
}

function getConsentServerSnapshot(): string | null {
  return null;
}

export function CookieBanner() {
  const consent = useSyncExternalStore(subscribeConsent, getConsentSnapshot, getConsentServerSnapshot);
  const showBanner = consent === null;

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    window.dispatchEvent(new Event("cookieConsentChange"));
  };

  const handleDeny = () => {
    localStorage.setItem("cookieConsent", "denied");
    window.dispatchEvent(new Event("cookieConsentChange"));
  };

  if (!showBanner) return null;

  return (
    <aside suppressHydrationWarning className="cookie-banner" role="dialog" aria-labelledby="cookie-banner-title" aria-describedby="cookie-banner-desc">
      <div className="cookie-banner-inner">
        <div className="cookie-banner-copy">
          <div className="cookie-banner-label">Privacidad</div>
          <h2 id="cookie-banner-title" className="cookie-banner-title">
            Este sitio web utiliza cookies
          </h2>
          <p id="cookie-banner-desc" className="cookie-banner-text">
            Usamos cookies para analizar el tráfico del sitio web y optimizar tu experiencia en el sitio. Al aceptar nuestro uso de cookies, tus datos se
            agruparán con los datos de todos los demás usuarios.{" "}
            <Link href="/privacy">Ver políticas de privacidad</Link>.
          </p>
        </div>
        <div className="cookie-banner-actions">
          <button type="button" className="cookie-banner-btn cookie-banner-btn--outline" onClick={handleDeny}>
            Rechazar
          </button>
          <button type="button" className="cookie-banner-btn cookie-banner-btn--primary" onClick={handleAccept}>
            Aceptar
          </button>
        </div>
      </div>
    </aside>
  );
}
