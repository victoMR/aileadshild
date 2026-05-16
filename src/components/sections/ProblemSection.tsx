export function ProblemSection() {
  return (
    <section id="problema">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">El Desafío</span>
          <h2 className="section-title">
            ¿Por qué pierdes <span>ventas hoy?</span>
          </h2>
          <p className="section-desc">
            El mercado se mueve más rápido que tu equipo humano. Aquí es donde se rompe el proceso.
          </p>
        </div>
        <div className="problem-grid reveal">
          <article className="problem-card glow-card">
            <div className="prob-head">
              <div className="prob-num" aria-hidden="true">
                01
              </div>
              <div className="prob-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
            </div>
            <h3>Seguimiento Tardío</h3>
            <p>El 78% de los leads se enfría en los primeros 5 minutos. Si no respondes ya, la competencia lo hará.</p>
          </article>
          <article className="problem-card glow-card">
            <div className="prob-head">
              <div className="prob-num" aria-hidden="true">
                02
              </div>
              <div className="prob-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
              </div>
            </div>
            <h3>Ruido de Prospectos</h3>
            <p>Tu equipo pierde el 60% de su tiempo con personas que no están listas para comprar. Calificamos por ti.</p>
          </article>
          <article className="problem-card glow-card">
            <div className="prob-head">
              <div className="prob-num" aria-hidden="true">
                03
              </div>
              <div className="prob-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 20h9" />
                  <path d="M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                </svg>
              </div>
            </div>
            <h3>Fricción Manual</h3>
            <p>Capturar datos y enviar correos manualmente mata la productividad. La IA lo hace en milisegundos.</p>
          </article>
          <article className="problem-card glow-card">
            <div className="prob-head">
              <div className="prob-num" aria-hidden="true">
                04
              </div>
              <div className="prob-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
            </div>
            <h3>Puntos Ciegos</h3>
            <p>Sin datos claros del embudo, estás adivinando. Nuestra IA te da visibilidad total del ROI.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
