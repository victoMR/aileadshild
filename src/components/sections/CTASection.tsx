import { BookingLink } from "@/components/common/BookingLink";

export function CTASection() {
  return (
    <section id="cta" className="cta-section">
      <div className="container reveal">
        <div className="cta-box">
          <div className="badge" style={{ marginBottom: "1.5rem" }}>
            <span className="badge-dot" aria-hidden="true" /> Demo Gratis
          </div>
          <h2 className="section-title">
            ¿Listo para capturar cada <span>oportunidad?</span>
          </h2>
          <p className="section-desc" style={{ margin: "1rem auto 2.5rem" }}>
            Agenda una llamada de diagnóstico de 15 minutos. Implementamos tu sistema en menos de 30 días.
          </p>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5rem" }}>
            <BookingLink className="btn btn-primary" style={{ padding: "1.15rem 3rem", fontSize: "1.05rem" }}>
              Agendar Llamada Gratuita
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </BookingLink>
            <div className="cta-trust">
              <span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>{" "}
                Sin tarjeta
              </span>
              <span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>{" "}
                Demo de 15 min
              </span>
              <span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>{" "}
                Respuesta en 24h
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
