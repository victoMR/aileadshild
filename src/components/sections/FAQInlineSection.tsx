function Chevron() {
  return (
    <span className="chev" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </span>
  );
}

export function FAQInlineSection() {
  return (
    <section id="faq">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">Preguntas Frecuentes</span>
          <h2 className="section-title">
            Todo lo que necesitas <span>saber</span>
          </h2>
          <p className="section-desc">
            Si no encuentras tu respuesta, agenda una llamada y resolvemos cualquier duda en persona.
          </p>
        </div>
        <div className="faq-list reveal">
          <details className="faq-item">
            <summary>
              ¿Cuánto tiempo toma implementar el sistema?
              <Chevron />
            </summary>
            <div className="faq-content">
              Implementación completa en menos de 30 días. Esto incluye integración con tus canales actuales (Meta,
              Google, WhatsApp), entrenamiento del modelo con la voz de tu marca, configuración del CRM y pruebas de
              calidad antes de salir en vivo.
            </div>
          </details>
          <details className="faq-item">
            <summary>
              ¿Necesito conocimiento técnico para usarlo?
              <Chevron />
            </summary>
            <div className="faq-content">
              No. Nosotros configuramos todo, te entregamos un dashboard simple y un onboarding personalizado. Tu equipo solo
              ve leads ya calificados y citas agendadas — el resto lo maneja la IA en segundo plano.
            </div>
          </details>
          <details className="faq-item">
            <summary>
              ¿Qué tan rápido responde la IA a un lead nuevo?
              <Chevron />
            </summary>
            <div className="faq-content">
              Menos de 1 minuto garantizado, y normalmente respondemos en segundos. Estudios muestran que responder en los
              primeros 5 minutos aumenta la conversión hasta 9× vs. responder a la hora — nosotros bajamos ese tiempo a
              segundos.
            </div>
          </details>
          <details className="faq-item">
            <summary>
              ¿Mi industria es compatible con esta tecnología?
              <Chevron />
            </summary>
            <div className="faq-content">
              Trabajamos con inmobiliarias, clínicas, escuelas, agencias, e-commerce, servicios B2B y más. Si tu negocio
              depende de captar y cerrar leads, AI Lead Shield se adapta a tu flujo. Agenda una llamada y validamos tu caso en
              15 minutos.
            </div>
          </details>
          <details className="faq-item">
            <summary>
              ¿Cómo se calcula el ROI del sistema?
              <Chevron />
            </summary>
            <div className="faq-content">
              Medimos tres variables: tiempo de respuesta, tasa de conversión de lead a cita, y tasa de cierre. Nuestros
              clientes recuperan la inversión típicamente entre los primeros 30 y 60 días, gracias al aumento promedio de 3×
              en leads calificados.
            </div>
          </details>
          <details className="faq-item">
            <summary>
              ¿Mis datos están seguros?
              <Chevron />
            </summary>
            <div className="faq-content">
              Sí. Toda la infraestructura está cifrada extremo a extremo y cumplimos con las normativas de privacidad
              relevantes. Tus datos nunca se usan para entrenar modelos públicos, y puedes exportar o eliminar todo en
              cualquier momento.
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}
