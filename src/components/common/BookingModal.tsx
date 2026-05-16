"use client";

import { useEffect, useRef, useState } from "react";
import { BOOKING_URL } from "@/lib/constants/site";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  const showIframe = isOpen || iframeLoaded;

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("modal-open");
      requestAnimationFrame(() => closeRef.current?.focus());
    } else {
      document.body.classList.remove("modal-open");
    }
    return () => document.body.classList.remove("modal-open");
  }, [isOpen]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [isOpen, onClose]);

  const showSpinner = isOpen && !iframeLoaded;

  return (
    <div
      className={`modal ${isOpen ? "open" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="bookingModalTitle"
      aria-hidden={!isOpen}
    >
      <button type="button" className="modal-backdrop" data-close aria-label="Cerrar diálogo" onClick={onClose} />
      <div className="modal-card">
        <div className="modal-header">
          <div>
            <div className="modal-title" id="bookingModalTitle">
              Agenda tu llamada <span className="live-dot">DEMO GRATIS</span>
            </div>
            <div className="modal-subtitle">15 minutos · Sin compromiso</div>
          </div>
          <button ref={closeRef} type="button" className="modal-close" data-close aria-label="Cerrar" onClick={onClose}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        <div className="modal-body">
          <div className={`modal-loading ${showSpinner ? "" : "hidden"}`}>
            <div className="modal-spinner" />
            <div className="modal-loading-text">Cargando calendario…</div>
          </div>
          {showIframe ? (
            <iframe
              className="modal-iframe"
              title="Calendario de reservaciones"
              loading="lazy"
              allow="payment"
              src={BOOKING_URL}
              onLoad={() => setIframeLoaded(true)}
            />
          ) : null}
        </div>
        <div className="modal-footer">
          <span>Sistema seguro · LeadConnector</span>
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
            Abrir en pestaña nueva
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
