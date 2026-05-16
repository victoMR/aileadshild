import Link from "next/link";
import { BookingLink } from "@/components/common/BookingLink";
import { SOCIAL_LINKS } from "@/lib/constants/site";

export function Footer() {
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="logo logo--text-only">
              AI LEAD<span>SHIELD</span>
            </Link>
            <p className="footer-tag">Sapere Aude — Atrévete a saber. Ingeniería de ventas con IA empresarial.</p>
            <div className="footer-socials">
              <a href={SOCIAL_LINKS.whatsapp} aria-label="WhatsApp">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.5 14.4c-.3-.2-1.7-.8-2-.9-.3-.1-.4-.1-.6.1l-.8.9c-.1.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.5-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.4.4-.5.1-.2.2-.3.3-.5 0-.2 0-.4 0-.5-.1-.2-.6-1.4-.8-2-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.1 0 1.2.9 2.4 1 2.6.1.2 1.8 2.8 4.4 3.9.6.3 1.1.4 1.5.5.6.2 1.2.2 1.6.1.5-.1 1.4-.6 1.6-1.1.2-.5.2-1 .1-1.1zM12 2C6.5 2 2 6.5 2 12c0 1.7.4 3.3 1.2 4.7L2 22l5.4-1.4c1.4.7 2.9 1.1 4.6 1.1 5.5 0 10-4.5 10-10S17.5 2 12 2z" />
                </svg>
              </a>
              <a href={SOCIAL_LINKS.facebook} aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 12c0-5.5-4.5-10-10-10S2 6.5 2 12c0 5 3.7 9.1 8.4 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7c4.7-.7 8.4-4.8 8.4-9.9z" />
                </svg>
              </a>
              <a href="mailto:contact@aileadshield.com.mx" aria-label="Email">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </a>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zm1.78 13.02H3.56V9h3.56v11.45z" />
                </svg>
              </a>
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>
          <div className="footer-col">
            <h5>Producto</h5>
            <ul>
              <li>
                <Link href="/#soluciones">Soluciones</Link>
              </li>
              <li>
                <Link href="/#proceso">Proceso</Link>
              </li>
              <li>
                <Link href="/#integraciones">Integraciones</Link>
              </li>
              <li>
                <Link href="/#casos-exito">Casos de éxito</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Empresa</h5>
            <ul>
              <li>
                <Link href="/#nosotros">Nosotros</Link>
              </li>
              <li>
                <Link href="/#contacto">Contacto</Link>
              </li>
              <li>
                <Link href="/#faq">FAQ</Link>
              </li>
              <li>
                <BookingLink>Agendar Demo</BookingLink>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Legal</h5>
            <ul>
              <li>
                <Link href="/privacy">Privacidad</Link>
              </li>
              <li>
                <Link href="/privacy#terminos">Términos</Link>
              </li>
              <li>
                <Link href="/privacy#reembolsos">Reembolsos</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>Copyright © {new Date().getFullYear()} AI Lead Shield · Todos los derechos reservados</span>
          <span className="font-mono">v6.0 · Hecho en Querétaro, MX</span>
        </div>
      </div>
    </footer>
  );
}
