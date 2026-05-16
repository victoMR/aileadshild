import { BookingLink } from "@/components/common/BookingLink";

export function StickyCtaBar() {
  return (
    <div className="sticky-cta" id="stickyCta" role="complementary" aria-label="Llamada a la acción">
      <div className="sticky-cta-text">
        <strong>¿Listo para empezar?</strong>
        Demo gratuita de 15 min
      </div>
      <BookingLink className="btn btn-primary">Agendar</BookingLink>
    </div>
  );
}
