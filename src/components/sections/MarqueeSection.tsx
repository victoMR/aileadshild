const ITEMS = [
  "Automatización de Leads",
  "CRM Inteligente",
  "Captación 24/7",
  "Calificación Automática",
  "Seguimiento con AI",
  "Conversión Optimizada",
  "Marketing Digital",
  "Integración Total",
];

export function MarqueeSection() {
  const doubled = [...ITEMS, ...ITEMS];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {doubled.map((label, i) => (
          <span key={`${label}-${i}`} className="marquee-item">
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}
