export function ProcessSection() {
  return (
    <section id="proceso">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">El Proceso</span>
          <h2 className="section-title">
            De lead a cliente en <span>piloto automático</span>
          </h2>
          <p className="section-desc">Tres pasos. Cero fricción. Resultados desde el día uno.</p>
        </div>
        <div className="process-flow reveal">
          <div className="flow-node">
            <div className="flow-num">PASO 01</div>
            <div className="flow-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
              </svg>
            </div>
            <h4>Captación Multicanal</h4>
            <p>Unificamos todas tus fuentes de leads en una sola neurona digital.</p>
          </div>
          <div className="flow-connector" aria-hidden="true">
            <svg viewBox="0 0 72 28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="2" y1="14" x2="58" y2="14" />
              <polyline points="50 8 58 14 50 20" />
            </svg>
          </div>
          <div className="flow-node">
            <div className="flow-num">PASO 02</div>
            <div className="flow-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
                <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
              </svg>
            </div>
            <h4>Calificación AI</h4>
            <p>La IA evalúa interés y capacidad de compra al instante.</p>
          </div>
          <div className="flow-connector" aria-hidden="true">
            <svg viewBox="0 0 72 28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="2" y1="14" x2="58" y2="14" />
              <polyline points="50 8 58 14 50 20" />
            </svg>
          </div>
          <div className="flow-node">
            <div className="flow-num">PASO 03</div>
            <div className="flow-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
                <polyline points="9 16 11 18 15 14" />
              </svg>
            </div>
            <h4>Cierre de Citas</h4>
            <p>Agendamos prospectos listos en tu calendario sin que muevas un dedo.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
