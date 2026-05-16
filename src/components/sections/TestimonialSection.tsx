function Stars() {
  const star = (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <polygon
        fill="currentColor"
        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
      />
    </svg>
  );
  return (
    <div className="stars" aria-label="5 estrellas">
      {star}
      {star}
      {star}
      {star}
      {star}
    </div>
  );
}

export function TestimonialSection() {
  return (
    <section id="casos-exito" style={{ position: "relative" }}>
      <div className="hero-bg" style={{ opacity: 0.5 }} />
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">Prueba Social</span>
          <h2 className="section-title">
            Resultados <span>Comprobados</span>
          </h2>
          <p className="section-desc">Empresas que ya transformaron su proceso de ventas con nuestra IA.</p>
        </div>
        <div className="grid grid-3 reveal">
          <article className="testimonial-card glow-card">
            <div className="quote-mark" aria-hidden="true">
              &quot;
            </div>
            <Stars />
            <p className="testimonial-text">
              Antes perdíamos docenas de leads los fines de semana. Desde que implementamos AI Lead Shield, nuestra tasa de
              respuesta bajó a segundos y las conversiones aumentaron un 45% en el primer mes.
            </p>
            <div className="testimonial-author">
              <div className="testimonial-avatar">JC</div>
              <div>
                <h4 className="testimonial-name">Juan Carlos M.</h4>
                <div className="testimonial-role">Director Comercial · Inmobiliaria</div>
              </div>
              <div className="testimonial-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                VERIFICADO
              </div>
            </div>
          </article>

          <article className="testimonial-card glow-card">
            <div className="quote-mark" aria-hidden="true">
              &quot;
            </div>
            <Stars />
            <p className="testimonial-text">
              El CRM inteligente y la calificación automática nos ahorran más de 20 horas semanales. Ahora mi equipo solo habla
              con prospectos calificados y listos para comprar.
            </p>
            <div className="testimonial-author">
              <div className="testimonial-avatar" style={{ background: "linear-gradient(135deg, #00FF9D, #00F2FF)" }}>
                AL
              </div>
              <div>
                <h4 className="testimonial-name">Ana Laura T.</h4>
                <div className="testimonial-role">CEO · Servicios B2B</div>
              </div>
              <div className="testimonial-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                VERIFICADO
              </div>
            </div>
          </article>

          <article className="testimonial-card glow-card">
            <div className="quote-mark" aria-hidden="true">
              &quot;
            </div>
            <Stars />
            <p className="testimonial-text">
              Pasamos de responder leads a las dos horas a hacerlo en segundos. El ROI fue evidente en la tercera semana.
              Nuestro ROAS subió un 62% sin tocar el presupuesto.
            </p>
            <div className="testimonial-author">
              <div className="testimonial-avatar" style={{ background: "linear-gradient(135deg, #00F2FF, #ffffff)" }}>
                RV
              </div>
              <div>
                <h4 className="testimonial-name">Roberto Vargas</h4>
                <div className="testimonial-role">Founder · Agencia Digital</div>
              </div>
              <div className="testimonial-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                VERIFICADO
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
