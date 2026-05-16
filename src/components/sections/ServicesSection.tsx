export function ServicesSection() {
  return (
    <section id="soluciones">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">Soluciones</span>
          <h2 className="section-title">
            Ingeniería de <span>Ventas AI</span>
          </h2>
          <p className="section-desc">
            Combinamos software de alto nivel con estrategias de conversión probadas en cientos de campañas reales.
          </p>
        </div>

        <div className="bento reveal">
          <div className="bento-card bento-feature glow-card">
            <div className="bento-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" />
                <circle cx="12" cy="5" r="2" />
                <path d="M12 7v4" />
                <line x1="8" y1="16" x2="8" y2="16" />
                <line x1="16" y1="16" x2="16" y2="16" />
              </svg>
            </div>
            <h3>Agentes de Ventas AI · Núcleo del Sistema</h3>
            <p>
              Bots que no solo responden. Califican intención, recolectan datos clave y agendan citas reales en tu calendario.
              Operan 24/7 con la voz de tu marca.
            </p>
            <div className="feature-visual">
              <div className="feature-visual-head">
                <span>ACTIVIDAD · HOY</span>
                <span className="live-dot">
                  <span className="dot" />
                  EN VIVO
                </span>
              </div>
              <div className="feature-stats">
                <div className="feature-stat">
                  <div className="feature-stat-val">247</div>
                  <div className="feature-stat-label">Conversaciones</div>
                </div>
                <div className="feature-stat">
                  <div className="feature-stat-val">182</div>
                  <div className="feature-stat-label">Calificados</div>
                </div>
                <div className="feature-stat">
                  <div className="feature-stat-val">24</div>
                  <div className="feature-stat-label">Citas agendadas</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bento-card bento-tall glow-card">
            <div className="bento-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="6" />
                <circle cx="12" cy="12" r="2" />
              </svg>
            </div>
            <h3>Captación Multicanal</h3>
            <p>Conectamos Meta, Google, WhatsApp, formularios web y APIs en un único flujo. Cada lead entra en segundos.</p>
            <div className="terminal">
              <div className="terminal-head">
                <span />
                <span />
                <span />
              </div>
              <div className="terminal-body">
                <div className="terminal-line">
                  <span className="prompt">$</span> lead.capture --source=meta
                </div>
                <div className="terminal-line">
                  <span className="ok">✓</span> lead recibido · 0.4s
                </div>
                <div className="terminal-line">
                  <span className="ok">✓</span> calificado · score 91
                </div>
                <div className="terminal-line">
                  <span className="ok">✓</span> cita agendada
                </div>
              </div>
            </div>
          </div>

          <div className="bento-card bento-wide glow-card">
            <div className="bento-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
            </div>
            <h3>CRM Inteligente</h3>
            <p>Prioriza prospectos calientes y secuencia el seguimiento por WhatsApp y Email automáticamente.</p>
          </div>
          <div className="bento-card bento-wide glow-card">
            <div className="bento-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
            </div>
            <h3>Nurturing Adaptativo</h3>
            <p>Secuencias que mutan según el comportamiento del usuario para maximizar el cierre.</p>
          </div>
          <div className="bento-card bento-wide glow-card">
            <div className="bento-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="20" x2="18" y2="10" />
                <line x1="12" y1="20" x2="12" y2="4" />
                <line x1="6" y1="20" x2="6" y2="14" />
              </svg>
            </div>
            <h3>Dashboards Real-Time</h3>
            <p>Control total del embudo, conversiones y ROAS publicitario en tiempo real.</p>
          </div>
          <div className="bento-card bento-small glow-card">
            <div className="bento-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="6" />
                <circle cx="12" cy="12" r="2" />
              </svg>
            </div>
            <h3>Paid Media Optimizado</h3>
            <p>Campañas en Meta y Google Ads alimentadas por datos de conversión reales.</p>
          </div>
          <div className="bento-card bento-small glow-card">
            <div className="bento-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <h3>Datos Protegidos</h3>
            <p>Infraestructura cifrada y cumplimiento de privacidad de extremo a extremo.</p>
          </div>
          <div className="bento-card bento-small glow-card">
            <div className="bento-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </div>
            <h3>Soporte Dedicado</h3>
            <p>Equipo humano detrás de la IA, disponible cuando tu negocio lo necesita.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
