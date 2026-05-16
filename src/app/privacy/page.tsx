import { Metadata } from "next";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Políticas de Privacidad y Términos | AI Lead Shield",
  description:
    "Conoce nuestras políticas de privacidad, términos de uso y políticas de reembolso",
};

export default function PrivacyPage() {
  return (
    <article className="legal-doc-page">
      <header className="legal-doc-hero">
        <div className="container">
          <span className="section-tag">Políticas</span>
          <h1 className="legal-doc-title">
            Privacidad y <span>Términos de Uso</span>
          </h1>
          <p className="legal-doc-intro">
            Aquí encontrarás cómo tratamos tus datos, nuestras políticas de reembolso y las condiciones de uso de los
            servicios de AI Lead Shield —redactado para que sea fácil de localizar y leer.
          </p>
        </div>
      </header>

      <section className="legal-doc-section legal-doc-section--band" aria-labelledby="aviso-privacidad">
        <div className="container">
          <div className="legal-prose">
            <h2 id="aviso-privacidad">Aviso de privacidad</h2>

            <div className="legal-callout">
              <p>
                <strong>AI LEAD SHIELD</strong> con domicilio en{" "}
                <strong>
                  Carretera San Juan del Río - Xilitla KM 46.5 S.N. Cadereyta de Montes, Querétaro, México
                </strong>
                . Teléfono{" "}
                <a href="tel:+524423224935">+52 442 322 4935</a>
              </p>
            </div>

            <h3>Datos personales que recaba AI LEAD SHIELD</h3>
            <p>
              Son los datos personales, ya sea de identificación y/o financieros y/o profesionales proporcionados por usted
              de manera directa o por cualquier medio de contacto y/o foro público de conexión en línea relacionados con:
            </p>
            <ul>
              <li>
                Los servicios que presta AI LEAD SHIELD servicios administrativos y diversos en general (en lo sucesivo y
                conjuntamente referidos como los &quot;Servicios&quot;)
              </li>
              <li>Cualesquiera otros datos que se recaben de tiempo en tiempo con motivo de la prestación de los Servicios</li>
            </ul>
            <p>
              <strong>
                AI LEAD SHIELD por ningún motivo hará uso de información sensible de ningún tipo, ya que AI LEAD SHIELD no
                recaba ni trata datos personales sensibles.
              </strong>
            </p>

            <h3>Finalidades primarias</h3>
            <p>
              AI LEAD SHIELD tratará sus datos personales para llevar a cabo alguna o todas las actividades necesarias para el
              cumplimiento de las obligaciones que se originen y deriven de la relación contractual y/o comercial de la
              prestación de los servicios, facturación y cobranza.
            </p>

            <h3>Finalidades secundarias</h3>
            <p>
              AI LEAD SHIELD tratará sus datos personales para llevar a cabo alguna o todas las finalidades secundarias como
              informarle del lanzamiento o cambios de nuevos productos, bienes, servicios, promociones y/u ofertas de acuerdo
              a sus intereses; realizar estudios sobre hábitos de consumo y de mercado, así como para cualquier otra actividad
              tendiente a promover, mantener, mejorar y evaluar los Servicios.
            </p>
            <p>
              Si usted no desea que AI LEAD SHIELD trate sus datos personales para dichas finalidades secundarias por favor
              envíe un correo electrónico a{" "}
              <a href="mailto:contact@aileadshield.com.mx">contact@aileadshield.com.mx</a>. Usted podrá cambiar de opción en
              cualquier momento.
            </p>
          </div>
        </div>
      </section>

      <section className="legal-doc-section" aria-labelledby="reembolsos">
        <div className="container">
          <div className="legal-prose">
            <h2 id="reembolsos">Políticas de reembolsos</h2>

            <p>
              En AI Lead Shield, nos comprometemos a ofrecer soluciones de automatización e inteligencia artificial de alta
              calidad. Para garantizar la transparencia en nuestra relación comercial, establecemos los siguientes lineamientos
              para solicitudes de reembolso:
            </p>

            <div className="legal-stack">
              <div className="legal-panel legal-panel--cyan">
                <h3>1. Reembolso Total (100%)</h3>
                <p>
                  Se otorgará la devolución íntegra del pago inicial siempre y cuando la solicitud de reembolso se realice antes
                  de haber iniciado cualquier proceso de instalación, configuración o despliegue de los servicios contratados
                  en la infraestructura del cliente (compra de APIs (para WhatsApp, META, YouTube, Google, X, LinkedIn,
                  calendarios y/o otros softwares externos necesarios para el funcionamiento de las solicitudes del cliente),
                  creación y/o configuración de agentes IA (de perfilamiento, agendamiento, preguntas frecuentes, human handover,
                  etc), instalación de automatizaciones contratadas, vinculaciones e integraciones con la plataforma y cualquier
                  otro servicio contratado con nosotros.
                </p>
              </div>

              <div className="legal-panel legal-panel--mint">
                <h3>2. Reembolso Parcial (50%)</h3>
                <p>
                  Una vez que nuestro equipo técnico haya iniciado los trabajos de instalación del software o la configuración
                  personalizada de los agentes de IA para el cliente, pero antes de que la plataforma se encuentre en estado
                  operativo, el reembolso será del 50% del pago inicial. Este monto cubre los costos operativos y de horas-hombre
                  invertidos hasta ese momento.
                </p>
              </div>

              <div className="legal-panel legal-panel--neutral">
                <h3>3. Cancelación de Servicio (Sin Reembolso)</h3>
                <p>
                  Cuando la plataforma y las automatizaciones ya se encuentran en funcionamiento y en producción, no se realizarán
                  reembolsos del pago inicial.
                </p>
                <ul>
                  <li>
                    <strong>Continuidad del servicio:</strong> En caso de solicitar la baja en este punto, el servicio se
                    cancelará para el siguiente periodo de facturación.
                  </li>
                  <li>
                    <strong>Acceso:</strong> El cliente mantendrá el acceso y la operatividad de la plataforma por el resto de los
                    días que ya hayan sido cubiertos por el pago actual.
                  </li>
                </ul>
              </div>

              <div className="legal-panel legal-panel--cyan">
                <h3>4. Proceso de Solicitud</h3>
                <p>
                  Para hacer efectiva cualquier solicitud, el cliente deberá enviar un correo electrónico a{" "}
                  <a href="mailto:contact@aileadshield.com.mx">contact@aileadshield.com.mx</a> indicando los motivos. La fecha de
                  recepción de dicho correo será la que determine el porcentaje de reembolso aplicable según los puntos
                  anteriores.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="legal-doc-section legal-doc-section--band" aria-labelledby="terminos">
        <div className="container">
          <div className="legal-prose">
            <h2 id="terminos">Términos y Condiciones de Uso</h2>

            <p>
              Los siguientes Términos y Condiciones rigen el uso de los servicios de automatización e inteligencia artificial
              proporcionados por AI Lead Shield. Al contratar nuestros servicios, el cliente (en adelante, &quot;el Usuario&quot;)
              acepta plenamente estas disposiciones.
            </p>

            <div className="legal-stack">
              <div className="legal-panel legal-panel--neutral">
                <h3>1. Responsabilidad sobre Líneas Telefónicas y Canales de Comunicación</h3>
                <ul>
                  <li>
                    AI Lead Shield recomienda encarecidamente que el Usuario utilice números telefónicos o canales de
                    comunicación exclusivamente dedicados a la plataforma.
                  </li>
                  <li>
                    <strong>Interferencia de la IA:</strong> El Usuario reconoce que, al vincular un número personal o privado a
                    los flujos de trabajo, los asistentes de IA responderán automáticamente a todos los mensajes entrantes.
                  </li>
                  <li>
                    <strong>Deslinde de responsabilidad:</strong> AI Lead Shield no se hace responsable por respuestas generadas
                    por la IA a contactos personales, filtración de información privada en chats automatizados o cualquier
                    inconveniente derivado de no seguir la recomendación de usar líneas dedicadas.
                  </li>
                </ul>
              </div>

              <div className="legal-panel legal-panel--neutral">
                <h3>2. Uso Ético y Prohibiciones (Política de Abuso)</h3>
                <p>El Usuario se compromete a utilizar la plataforma dentro de los límites de la ley. Queda estrictamente prohibido:</p>
                <ul>
                  <li>
                    <strong>Spam y Mensajería Masiva:</strong> El uso de la plataforma para enviar mensajes no deseados (SPAM) o
                    realizar campañas de acoso masivo. El Usuario debe contar con el consentimiento previo de los destinatarios.
                  </li>
                  <li>
                    <strong>Acoso y Contenido Ilícito:</strong> El envío de mensajes que resulten ofensivos, difamatorios, de
                    naturaleza sexual explícita, o que constituyan acoso hacia cualquier individuo.
                  </li>
                  <li>
                    <strong>Violación de Normas de Terceros:</strong> El mal uso de la plataforma que resulte en el baneo o bloqueo
                    de cuentas de terceros (WhatsApp, Facebook, Instagram, etc.).
                  </li>
                </ul>
              </div>

              <div className="legal-panel legal-panel--neutral">
                <h3>3. Propiedad y Uso de la Información (Data Privacy)</h3>
                <p>AI Lead Shield actúa únicamente como el proveedor de la infraestructura y automatización:</p>
                <ul>
                  <li>
                    <strong>No Uso de Datos:</strong> AI Lead Shield no recaba, utiliza, ni comercializa la información de los
                    leads, clientes o contactos que se generan dentro de las subcuentas de los Usuarios.
                  </li>
                  <li>
                    <strong>Propiedad del Usuario:</strong> Toda la información recabada a través de campañas digitales o
                    interacciones de IA es propiedad exclusiva del Usuario.
                  </li>
                  <li>
                    <strong>Cumplimiento:</strong> El Usuario es el único responsable de que la captura y uso de dicha información
                    cumpla con las leyes de protección de datos locales, el Contrato de Prestación de Servicios y el Aviso de
                    Privacidad correspondiente.
                  </li>
                </ul>
              </div>

              <div className="legal-panel legal-panel--neutral">
                <h3>4. Deslinde de Responsabilidad por Mal Uso</h3>
                <p>
                  AI Lead Shield se deslinda de cualquier responsabilidad legal, civil o penal derivada del mal uso que el Usuario
                  haga de la plataforma en contravención a estos términos.
                </p>
                <p>
                  Si se detecta un uso abusivo (Spam masivo, acoso o fraude), AI Lead Shield se reserva el derecho de suspender o
                  rescindir el servicio de forma inmediata sin previo aviso y sin derecho a reembolso.
                </p>
              </div>

              <div className="legal-panel legal-panel--neutral">
                <h3>5. Activación del Servicio y Formulario de Onboarding</h3>
                <ul>
                  <li>
                    Para dar inicio a la configuración personalizada, el Usuario debe completar el formulario de información
                    técnica proporcionado tras el pago.
                  </li>
                  <li>
                    <strong>Plazo de 7 días:</strong> El Usuario cuenta con un máximo de 7 días naturales posteriores a la
                    realización del pago inicial para completar dicho formulario.
                  </li>
                  <li>
                    <strong>Inicio de Vigencia:</strong> Si transcurridos estos 7 días el formulario no ha sido llenado, el tiempo
                    de la mensualidad contratada comenzará a correr automáticamente. Esto se debe a que la infraestructura y los
                    recursos necesarios para el proyecto quedan reservados y asignados al Usuario desde el momento del pago.
                  </li>
                </ul>
              </div>

              <div className="legal-panel legal-panel--neutral">
                <h3>6. Confidencialidad y Propiedad Intelectual</h3>

                <h4>6.1. Protección de la Tecnología de AI Lead Shield</h4>
                <p>
                  Al contratar nuestros servicios, el Usuario/Cliente reconoce que todos los sistemas de automatización,
                  arquitecturas de agentes de IA, flujos de trabajo (workflows), prompts especializados, scripts y metodologías
                  implementadas son propiedad intelectual exclusiva de AI Lead Shield.
                </p>
                <p>Queda estrictamente prohibido:</p>
                <ul>
                  <li>
                    Divulgar o compartir el acceso a nuestras herramientas, lógicas de automatización o agentes con terceros sin
                    nuestra autorización previa y por escrito.
                  </li>
                  <li>Copiar, replicar o realizar ingeniería inversa sobre los sistemas entregados.</li>
                  <li>Comercializar cualquier fragmento de nuestra tecnología como propia.</li>
                </ul>

                <h4>6.2. Privacidad y Datos de la Cuenta del Cliente</h4>
                <p>
                  AI Lead Shield se compromete formalmente a no divulgar, vender ni compartir la información confidencial de la
                  cuenta del Cliente (bases de datos de leads, estrategias comerciales o datos operativos). Toda la información
                  suministrada por el Cliente será tratada bajo estrictos estándares de seguridad y utilizada únicamente para la
                  ejecución técnica de los servicios contratados.
                </p>

                <h4>6.3. Incumplimiento y Penalizaciones</h4>
                <p>
                  El uso indebido o la divulgación no autorizada de nuestra propiedad intelectual constituye un incumplimiento grave
                  de estos términos. En tal caso, AI Lead Shield se reserva el derecho de:
                </p>
                <ul>
                  <li>
                    <strong>Suspensión Inmediata:</strong> Proceder al corte total o limitación técnica de los servicios, accesos
                    y agentes de IA activos, sin previo aviso y sin derecho a reembolso.
                  </li>
                  <li>
                    <strong>Rescisión de Contrato:</strong> Terminar la relación comercial de forma definitiva.
                  </li>
                  <li>
                    <strong>Acciones Legales:</strong> Iniciar los procesos jurídicos correspondientes para la reclamación de
                    daños y perjuicios derivados de la vulneración de secretos comerciales.
                  </li>
                </ul>
              </div>

              <div className="legal-panel legal-panel--neutral">
                <h3>7. Modificaciones</h3>
                <p>
                  Nos reservamos el derecho de actualizar estos términos para adaptarlos a nuevas regulaciones técnicas o legales.
                  La continuidad en el uso del servicio implica la aceptación de las actualizaciones.
                </p>
              </div>
            </div>

            <p className="legal-footer-meta">Última actualización: martes 7 de octubre del año 2025</p>
          </div>
        </div>
      </section>

      <Footer />
    </article>
  );
}
