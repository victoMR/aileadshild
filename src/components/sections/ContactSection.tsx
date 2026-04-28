import { Section, SectionLabel, SectionTitle } from "@/components/common/Section";
import { Button } from "@/components/common/Button";
import { BOOKING_URL, BUSINESS_HOURS, SOCIAL_LINKS, CONTACT_INFO } from "@/lib/constants/site";

export function ContactSection() {
  return (
    <Section id="contacto">
      <SectionLabel text="Contacto" />
      <SectionTitle>
        Hablemos de
        <br />
        <span className="text-cyan-400">tu negocio</span>
      </SectionTitle>

      <div className="grid md:grid-cols-2 gap-12 md:gap-16 mt-12">
        {/* Left: Contact Info */}
        <div>
          <h3 className="text-xl md:text-2xl font-bold mb-4">
            Nos encanta hablar con empresas que quieren crecer.
          </h3>
          <p className="text-white/70 leading-relaxed mb-8">
            Escríbenos, llámanos o agenda una sesión directamente. Estamos aquí
            para ayudarte a construir el sistema de ventas que tu empresa
            merece, sin compromiso.
          </p>

          {/* Contact Details */}
          <div className="space-y-3 mb-8">
            <a
              href={`https://wa.me/524423224935`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 border border-cyan-500/20 rounded-sm p-3 hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all"
            >
              <span className="text-xl">💬</span>
              <div>
                <div className="text-xs text-white/45 uppercase">WhatsApp</div>
                <div className="text-white">+52 442 322 4935</div>
              </div>
            </a>

            <a
              href={SOCIAL_LINKS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 border border-cyan-500/20 rounded-sm p-3 hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all"
            >
              <span className="text-xl">📘</span>
              <div>
                <div className="text-xs text-white/45 uppercase">Facebook</div>
                <div className="text-white">AI Lead Shield</div>
              </div>
            </a>

            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 border border-cyan-500/20 rounded-sm p-3 hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all"
            >
              <span className="text-xl">📸</span>
              <div>
                <div className="text-xs text-white/45 uppercase">Instagram</div>
                <div className="text-white">@automatizaciones_ai</div>
              </div>
            </a>
          </div>
        </div>

        {/* Right: Hours & Booking */}
        <div>
          <h3 className="text-xs uppercase tracking-widest text-cyan-400 font-bold mb-6">
            Horario de Atención
          </h3>

          <table className="w-full text-sm mb-8">
            <tbody>
              {BUSINESS_HOURS.map((hour, idx) => (
                <tr
                  key={idx}
                  className="border-b border-white/10 hover:bg-white/5 transition-colors"
                >
                  <td className="py-3 text-white/70">{hour.day}</td>
                  <td className="text-right py-3 text-white font-medium">
                    {hour.hours}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="border border-cyan-500/20 rounded-sm p-6 bg-black/50 text-center">
            <p className="text-white/60 text-sm mb-4">
              ¿Prefieres agendar directamente en el calendario?
            </p>
            <Button href={BOOKING_URL} target="_blank" className="w-full justify-center">
              Reservar mi lugar →
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
