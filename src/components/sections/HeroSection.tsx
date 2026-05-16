import Link from "next/link";
import { BookingLink } from "@/components/common/BookingLink";

export function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="hero-grid" />
      <div className="container">
        <div className="hero-inner">
          <div className="hero-copy">
            <h1>
              Ningún lead se <span>escapa.</span>
              <br />
              Ninguna venta se <span>pierde.</span>
            </h1>
            <p>
              Automatizamos tu prospección, calificamos leads y cerramos ventas con inteligencia artificial que trabaja
              por tu negocio mientras tu equipo descansa.
            </p>
            <div className="hero-btns">
              <BookingLink className="btn btn-primary">
                Comenzar Ahora
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </BookingLink>
              <Link href="/#soluciones" className="btn btn-outline">
                Ver Soluciones
              </Link>
            </div>
            <div className="hero-meta">
              <div className="hero-meta-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Setup en 30 días
              </div>
              <div className="hero-meta-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Sin compromiso
              </div>
              <div className="hero-meta-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Demo gratuita
              </div>
            </div>
          </div>

          <div className="hero-preview" aria-hidden="true">
            <div className="preview-card glow-card">
              <div className="preview-head">
                <div className="preview-dots">
                  <span />
                  <span />
                  <span />
                </div>
                <span className="preview-status">
                  <span className="dot" />
                  EN VIVO
                </span>
              </div>
              <div className="lead-row">
                <div className="lead-avatar">MR</div>
                <div className="lead-info">
                  <div className="lead-name">María Rodríguez</div>
                  <div className="lead-meta">Meta Ads · hace 12s</div>
                </div>
              </div>
              <div className="lead-row">
                <div className="lead-avatar" style={{ background: "linear-gradient(135deg, #00FF9D, #00F2FF)" }}>
                  CJ
                </div>
                <div className="lead-info">
                  <div className="lead-name">Carlos Jiménez</div>
                  <div className="lead-meta">WhatsApp · hace 41s</div>
                </div>
              </div>
              <div className="lead-row">
                <div className="lead-avatar" style={{ background: "linear-gradient(135deg, #00F2FF, #00FF9D)" }}>
                  SL
                </div>
                <div className="lead-info">
                  <div className="lead-name">Sofía López</div>
                  <div className="lead-meta">Google Ads · hace 2m</div>
                </div>
              </div>
              <div className="lead-row">
                <div className="lead-avatar" style={{ background: "linear-gradient(135deg, #444, #777)" }}>
                  ER
                </div>
                <div className="lead-info">
                  <div className="lead-name">Eduardo R.</div>
                  <div className="lead-meta">Web Form · hace 5m</div>
                </div>
              </div>
            </div>

            <div className="preview-float float-1">
              <div className="float-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <div className="float-text">
                <strong>Cita agendada</strong>
                <span>Sin intervención humana</span>
              </div>
            </div>
            <div className="preview-float float-2">
              <div className="float-icon" style={{ background: "var(--secondary-soft)", color: "var(--secondary)" }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                  <polyline points="17 6 23 6 23 12" />
                </svg>
              </div>
              <div className="float-text">
                <strong>+40% conversión</strong>
                <span>Primeros 30 días</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
