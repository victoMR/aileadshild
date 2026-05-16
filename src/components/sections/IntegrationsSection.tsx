import type { ReactNode } from "react";

type IntegrationItem = {
  brand: string;
  label: string;
  icon: ReactNode;
};

const INTEGRATIONS: IntegrationItem[] = [
  {
    brand: "meta",
    label: "Meta Ads",
    icon: (
      <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden>
        <path d="M16 4C9.4 4 4 9.4 4 16s5.4 12 12 12 12-5.4 12-12S22.6 4 16 4zm3.4 14.5l-.5 3h-2.4v8.4c-.2 0-.4.1-.5.1-6.1 0-11-4.9-11-11s4.9-11 11-11 11 4.9 11 11c0 5.5-4.1 10.1-9.4 10.9V21.5h2.5l.5-3h-3v-2c0-.8.4-1.6 1.7-1.6h1.4v-2.6s-1.3-.2-2.5-.2c-2.6 0-4.2 1.5-4.2 4.3v2.4h-2.8v3h2.8v7.4" />
      </svg>
    ),
  },
  {
    brand: "google-ads",
    label: "Google Ads",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" aria-hidden>
        <path
          d="M28.1 16.2c0-.9-.1-1.8-.2-2.7H16v5.1h6.8c-.3 1.6-1.2 3-2.6 3.9v3.2h4.2c2.4-2.2 3.7-5.5 3.7-9.5z"
          fill="#4285F4"
        />
        <path
          d="M16 28c3.5 0 6.4-1.2 8.5-3.1l-4.2-3.2c-1.2.8-2.6 1.2-4.4 1.2-3.4 0-6.2-2.3-7.2-5.3H4.4v3.3C6.6 25.3 11 28 16 28z"
          fill="#34A853"
        />
        <path
          d="M8.8 17.6c-.3-.8-.4-1.7-.4-2.6s.1-1.8.4-2.6V9.1H4.4C3.5 11 3 13.1 3 15c0 1.9.5 4 1.4 5.9l4.4-3.3z"
          fill="#FBBC05"
        />
        <path
          d="M16 7.1c1.9 0 3.6.7 4.9 1.9l3.7-3.7C22.4 3.3 19.5 2 16 2 11 2 6.6 4.7 4.4 9.1l4.4 3.3c1-3 3.8-5.3 7.2-5.3z"
          fill="#EA4335"
        />
      </svg>
    ),
  },
  {
    brand: "whatsapp",
    label: "WhatsApp",
    icon: (
      <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden>
        <path d="M16 3C8.8 3 3 8.8 3 16c0 2.3.6 4.5 1.7 6.4L3 29l6.8-1.7c1.8 1 3.9 1.6 6.2 1.6 7.2 0 13-5.8 13-13S23.2 3 16 3zm0 23.6c-2 0-3.9-.5-5.5-1.5l-.4-.2-4 1 1.1-3.9-.3-.4c-1.1-1.7-1.6-3.7-1.6-5.6 0-5.9 4.8-10.7 10.7-10.7s10.7 4.8 10.7 10.7-4.9 10.6-10.7 10.6zm5.9-8c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2s-.8 1-1 1.2c-.2.2-.4.2-.7.1-.3-.2-1.4-.5-2.6-1.6-1-.9-1.6-1.9-1.8-2.3-.2-.3 0-.5.1-.7.1-.1.3-.4.5-.5.2-.2.2-.3.3-.5.1-.2.1-.4 0-.5-.1-.2-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4s-1.1 1-1.1 2.5 1.1 2.9 1.3 3.1c.2.2 2.2 3.3 5.3 4.7.7.3 1.3.5 1.8.6.7.2 1.4.2 2 .1.6-.1 1.9-.8 2.2-1.5.3-.7.3-1.4.2-1.5-.1-.1-.4-.2-.6-.3z" />
      </svg>
    ),
  },
  {
    brand: "hubspot",
    label: "HubSpot",
    icon: (
      <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden>
        <path d="M22.5 11.4V8.5a2 2 0 1 0-2 0v2.9a8 8 0 0 0-3.8 1.4l-7.4-5.6a2.3 2.3 0 1 0-1.5 1.5l7.4 5.7a8 8 0 0 0 .1 9l-2.3 2.3a2 2 0 1 0 1.4 1.4l2.3-2.3a8 8 0 1 0 5.8-14.4zm-1 12a4.2 4.2 0 1 1 4.2-4.2 4.2 4.2 0 0 1-4.2 4.2z" />
      </svg>
    ),
  },
  {
    brand: "make",
    label: "Make",
    icon: (
      <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden>
        <path d="M9 7l3 18h-3L6 7h3zm7 0l3 18h-3l-3-18h3zm7 0v18h-3V7h3z" />
      </svg>
    ),
  },
  {
    brand: "zapier",
    label: "Zapier",
    icon: (
      <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden>
        <path d="M16 4l3 6 6 3-6 3-3 6-3-6-6-3 6-3 3-6z" />
      </svg>
    ),
  },
  {
    brand: "slack",
    label: "Slack",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" aria-hidden>
        <path d="M9 19a2.5 2.5 0 11-2.5-2.5H9V19z" fill="#E01E5A" />
        <path d="M10.3 19a2.5 2.5 0 115 0v6.3a2.5 2.5 0 11-5 0V19z" fill="#E01E5A" />
        <path d="M12.8 9a2.5 2.5 0 11-2.5-2.5V9h2.5z" fill="#36C5F0" />
        <path d="M12.8 10.3a2.5 2.5 0 110 5H6.5a2.5 2.5 0 110-5h6.3z" fill="#36C5F0" />
        <path d="M22.8 12.8a2.5 2.5 0 112.5 2.5h-2.5v-2.5z" fill="#2EB67D" />
        <path d="M21.5 12.8a2.5 2.5 0 11-5 0V6.5a2.5 2.5 0 115 0v6.3z" fill="#2EB67D" />
        <path d="M19 22.8a2.5 2.5 0 112.5 2.5V22.8H19z" fill="#ECB22E" />
        <path d="M19 21.5a2.5 2.5 0 110-5h6.3a2.5 2.5 0 110 5H19z" fill="#ECB22E" />
      </svg>
    ),
  },
  {
    brand: "calendly",
    label: "Calendly",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <rect x="5" y="6" width="22" height="22" rx="3" />
        <line x1="22" y1="3" x2="22" y2="9" />
        <line x1="10" y1="3" x2="10" y2="9" />
        <line x1="5" y1="14" x2="27" y2="14" />
      </svg>
    ),
  },
  {
    brand: "stripe",
    label: "Stripe",
    icon: (
      <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden>
        <path d="M14.8 12.7c0-.9.7-1.2 1.8-1.2 1.7 0 3.8.5 5.5 1.4V8c-1.8-.7-3.7-1-5.5-1-4.5 0-7.5 2.4-7.5 6.3 0 6.2 8.5 5.2 8.5 7.9 0 1-.9 1.4-2.1 1.4-1.9 0-4.4-.8-6.3-1.9v4.9c2.1.9 4.2 1.3 6.3 1.3 4.6 0 7.7-2.3 7.7-6.2 0-6.7-8.4-5.5-8.4-8z" />
      </svg>
    ),
  },
  {
    brand: "notion",
    label: "Notion",
    icon: (
      <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden>
        <path d="M6 6h6l8 12V6h6v20h-6L12 14v12H6V6z" />
      </svg>
    ),
  },
  {
    brand: "gmail",
    label: "Gmail",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <rect x="3" y="6" width="26" height="20" rx="2" />
        <polyline points="3 8 16 18 29 8" />
      </svg>
    ),
  },
  {
    brand: "salesforce",
    label: "Salesforce",
    icon: (
      <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden>
        <path d="M11 8a5 5 0 0 1 9 2 4 4 0 0 1 5 5 4 4 0 0 1-2 7 5 5 0 0 1-9-2 4 4 0 0 1-5-4 4 4 0 0 1 2-8z" />
      </svg>
    ),
  },
];

export function IntegrationsSection() {
  return (
    <section id="integraciones">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">Integraciones</span>
          <h2 className="section-title">
            Todo lo que ya usas, <span>en un solo flujo</span>
          </h2>
          <p className="section-desc">
            No necesitas cambiar de software. Enlazamos Meta, Google, WhatsApp, formularios y tu CRM para que cada lead
            entre en segundos, quede registrado y siga el camino correcto —sin copiar datos ni perder conversaciones entre
            aplicaciones.
          </p>
        </div>
        <ul className="integrations-grid reveal">
          {INTEGRATIONS.map(({ brand, label, icon }) => (
            <li key={brand} className="integration-tile" data-brand={brand}>
              <div className="integration-icon-wrap">{icon}</div>
              <span className="integration-name">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
