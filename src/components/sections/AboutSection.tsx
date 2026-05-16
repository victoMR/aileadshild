export function AboutSection() {
  return (
    <section id="nosotros">
      <div className="container">
        <div className="about-grid reveal">
          <div className="about-visual">
            <div className="sys-label">Fuentes de leads</div>
            <div className="sys-row">
              <div className="sys-node" title="Meta Ads">
                <svg viewBox="0 0 32 32" fill="currentColor">
                  <path d="M16 4C9.4 4 4 9.4 4 16s5.4 12 12 12 12-5.4 12-12S22.6 4 16 4zm3.4 14.5l-.5 3h-2.4v8.4c-.2 0-.4.1-.5.1-6.1 0-11-4.9-11-11s4.9-11 11-11 11 4.9 11 11c0 5.5-4.1 10.1-9.4 10.9V21.5h2.5l.5-3h-3v-2c0-.8.4-1.6 1.7-1.6h1.4v-2.6s-1.3-.2-2.5-.2c-2.6 0-4.2 1.5-4.2 4.3v2.4h-2.8v3h2.8v7.4" />
                </svg>
                META
              </div>
              <div className="sys-node" title="Google Ads">
                <svg viewBox="0 0 32 32" fill="currentColor">
                  <path d="M14 4l-9.5 16.5L8 26h6.5l9.5-16.5L20.5 4H14zm9 24l3 5h6.5l3-5.5L29 13l-3.5 6.5L23 28z" />
                </svg>
                GOOGLE
              </div>
              <div className="sys-node" title="WhatsApp">
                <svg viewBox="0 0 32 32" fill="currentColor">
                  <path d="M16 3C8.8 3 3 8.8 3 16c0 2.3.6 4.5 1.7 6.4L3 29l6.8-1.7c1.8 1 3.9 1.6 6.2 1.6 7.2 0 13-5.8 13-13S23.2 3 16 3zm0 23.6c-2 0-3.9-.5-5.5-1.5l-.4-.2-4 1 1.1-3.9-.3-.4c-1.1-1.7-1.6-3.7-1.6-5.6 0-5.9 4.8-10.7 10.7-10.7s10.7 4.8 10.7 10.7-4.9 10.6-10.7 10.6z" />
                </svg>
                WA
              </div>
              <div className="sys-node" title="Web">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
                WEB
              </div>
            </div>

            <div className="sys-flow" aria-hidden="true" />

            <div className="sys-core">
              <span className="live-dot">
                <span className="dot" />
                ACTIVO
              </span>
              <div className="sys-core-title">AI ENGINE</div>
              <div className="sys-core-sub">Calificación · Scoring · Routing</div>
            </div>

            <div className="sys-flow" aria-hidden="true" />

            <div className="sys-label">Tu stack</div>
            <div className="sys-row out">
              <div className="sys-node" title="CRM">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <ellipse cx="12" cy="5" rx="9" ry="3" />
                  <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                  <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                </svg>
                CRM
              </div>
              <div className="sys-node" title="Calendario">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                CITAS
              </div>
            </div>
          </div>
          <div>
            <span className="section-tag">Nosotros</span>
            <h2 className="section-title">
              Tecnología con <span>Propósito</span>
            </h2>
            <p style={{ color: "var(--text-dim)", marginBottom: "1.2rem", fontSize: "1.05rem" }}>
              Somos un equipo de ingenieros y especialistas en ventas B2B que entendió que el problema no era la falta de
              leads, sino la falta de seguimiento inmediato.
            </p>
            <p style={{ color: "var(--text-dim)", fontSize: "1.05rem" }}>
              Desarrollamos AI Lead Shield para eliminar la fricción entre marketing y ventas, garantizando que cada
              oportunidad sea atendida en menos de 1 minuto, los 365 días del año.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
