import { Shield, FileText } from "lucide-react";

export default function PoliticaDePrivacidadPage() {
  return (
    <div className="bg-slate-50 min-h-screen pt-12 pb-24">
      {/* Decorative Header Area */}
      <section className="bg-slate-900 text-white py-12 sm:py-16 border-b-4 border-slate-700 overflow-hidden relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-800 text-slate-400 rounded-full font-mono text-xs uppercase tracking-wider">
            MAR DEL PLATA • ARGENTINA
          </span>
          <h1 className="font-display text-3xl sm:text-5xl font-extrabold uppercase tracking-tight">
            Política de <span className="text-yellow-400">Privacidad</span>
          </h1>
          <p className="font-sans text-sm sm:text-base text-slate-400 max-w-xl mx-auto leading-relaxed">
            Conozca las normativas de salvaguarda, secreto profesional y protección de datos para remitentes y destinatarios en tránsito.
          </p>
        </div>
      </section>

      {/* Styled legal sheet */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="bg-white border-2 border-slate-200 rounded-2xl p-6 sm:p-10 shadow-md font-sans text-sm text-slate-600 space-y-8 leading-relaxed">
          
          <div className="flex items-center gap-2 pb-4 border-b border-slate-100">
            <Shield className="text-yellow-600 shrink-0" size={20} />
            <span className="font-mono text-xs text-slate-400 font-bold uppercase">CONFORMIDAD CON LA LEY 25.326 • JUNIO 2026</span>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-lg font-bold text-slate-900 uppercase tracking-wide">1. Recolección de Datos de Envíos</h2>
            <p>
              Para planificar y procesar con éxito la logística de sus paquetes en Mar del Plata, <strong>Envíos DosRuedas</strong> recolecta exclusivamente la información indispensable provista por los remitentes: nombres representativos, teléfonos de contacto de origen y destino, direcciones físicas de retiro y entrega, y correos electrónicos de facturación.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-lg font-bold text-slate-900 uppercase tracking-wide">2. Uso Sensato del WhatsApp en Enlace</h2>
            <p>
              Toda la comunicación e-coordination iniciada mediante nuestro Cotizador Inteligente redirige de forma directa a la API segura de WhatsApp. En ningún momento almacenamos los historiales de chat ni compartimos las coordenadas territoriales enviadas para acordar ubicaciones de retiro de mercadería con terceros con fines promocionales.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-lg font-bold text-slate-900 uppercase tracking-wide">3. Secreto Profesional y Confidencialidad</h2>
            <p>
              La custodia de la correspondencia urbana y los paquetes transportados por nuestra flota se rigen bajo el más estricto secreto profesional. Los conductores asignados tienen estrictamente prohibido examinar, revelar o fotografiar el contenido detallado de los empaques, salvo en los casos de requerimiento explícito por orden judicial de autoridad pertinente.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-lg font-bold text-slate-900 uppercase tracking-wide">4. Almacenamiento de Cookies Técnicas</h2>
            <p>
              Nuestra aplicación web recopila cookies meramente analíticas y de persistencia local temporal para recordar sus preferencias elegidas en el Cotizador Automático (por ejemplo, recordar su zona preferente de retiro de Mar del Plata) con el fin de agilizar subsiguientes consultas operativas en su navegador web habitual. No implementamos rastreo publicitario invasivo ni transferimos registros a brokers publicitarios.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-lg font-bold text-slate-900 uppercase tracking-wide">5. Derechos de Acceso y Rectificación</h2>
            <p>
              En pleno cumplimiento de la <strong>Ley de Protección de Datos Personales N° 25.326 de la República Argentina</strong>, toda persona física o jurídica titular de los datos procesados en nuestra plataforma tiene pleno derecho a solicitar el acceso, modificación o revocación total de sus registros de cuenta corriente enviándonos un correo con su personería acreditada.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
