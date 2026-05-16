import { BookingLink } from "@/components/common/BookingLink";
import { SOCIAL_LINKS } from "@/lib/constants/site";

export function ContactSection() {
  return (
    <section id="contacto">
      <div className="container">
        <div className="contact-box reveal">
          <div>
            <span className="section-tag">Contacto</span>
            <h2 className="section-title" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)" }}>
              Hablemos de <span>tu negocio</span>
            </h2>
            <p style={{ margin: "1rem 0 2rem", color: "var(--text-dim)" }}>
              Estamos aquí para ayudarte a construir el motor de ventas que tu empresa merece.
            </p>

            <a href={SOCIAL_LINKS.whatsapp} className="contact-link">
              <div className="contact-link-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.5 14.4c-.3-.2-1.7-.8-2-.9-.3-.1-.4-.1-.6.1l-.8.9c-.1.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.5-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.4.4-.5.1-.2.2-.3.3-.5 0-.2 0-.4 0-.5-.1-.2-.6-1.4-.8-2-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.1 0 1.2.9 2.4 1 2.6.1.2 1.8 2.8 4.4 3.9.6.3 1.1.4 1.5.5.6.2 1.2.2 1.6.1.5-.1 1.4-.6 1.6-1.1.2-.5.2-1 .1-1.1zM12 2C6.5 2 2 6.5 2 12c0 1.7.4 3.3 1.2 4.7L2 22l5.4-1.4c1.4.7 2.9 1.1 4.6 1.1 5.5 0 10-4.5 10-10S17.5 2 12 2z" />
                </svg>
              </div>
              <div>
                <div className="contact-link-label">WhatsApp</div>
                <div className="contact-link-val" translate="no">
                  +52 442 322 4935
                </div>
              </div>
            </a>
            <a href={SOCIAL_LINKS.facebook} className="contact-link">
              <div className="contact-link-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 12c0-5.5-4.5-10-10-10S2 6.5 2 12c0 5 3.7 9.1 8.4 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7c4.7-.7 8.4-4.8 8.4-9.9z" />
                </svg>
              </div>
              <div>
                <div className="contact-link-label">Facebook</div>
                <div className="contact-link-val" translate="no">
                  AI Lead Shield
                </div>
              </div>
            </a>
            <a href="mailto:contact@aileadshield.com.mx" className="contact-link">
              <div className="contact-link-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <div className="contact-link-label">Email</div>
                <div className="contact-link-val" translate="no">
                  contact@aileadshield.com.mx
                </div>
              </div>
            </a>
          </div>
          <div>
            <div className="hours-card">
              <h4>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                Horarios
              </h4>
              <div className="hours-row">
                <span>Lun — Vie</span>
                <span>09:00 — 18:00</span>
              </div>
              <div className="hours-row">
                <span>Sábado</span>
                <span>09:00 — 14:00</span>
              </div>
              <div className="hours-row">
                <span>Domingo</span>
                <span>IA Activa 24/7</span>
              </div>
              <BookingLink className="btn btn-outline" style={{ width: "100%", marginTop: "1.5rem" }}>
                Reservar Lugar
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </BookingLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
