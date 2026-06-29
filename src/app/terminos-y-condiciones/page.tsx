import { ShieldAlert, CheckCircle, FileText } from "lucide-react";

export default function TerminosYCondicionesPage() {
  return (
    <div className="bg-slate-50 min-h-screen pt-12 pb-24">
      {/* Decorative Header Area */}
      <section className="bg-slate-900 text-white py-12 sm:py-16 border-b-4 border-slate-700 overflow-hidden relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-800 text-slate-400 rounded-full font-mono text-xs uppercase tracking-wider">
            MAR DEL PLATA • ARGENTINA
          </span>
          <h1 className="font-display text-3xl sm:text-5xl font-extrabold uppercase tracking-tight">
            Términos y <span className="text-yellow-400">Condiciones</span>
          </h1>
          <p className="font-sans text-sm sm:text-base text-slate-400 max-w-xl mx-auto leading-relaxed">
            Consulte las pautas de uso, responsabilidades logísticas y coberturas de seguro vigentes para el año en curso.
          </p>
        </div>
      </section>

      {/* Styled legal sheet */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="bg-white border-2 border-slate-200 rounded-2xl p-6 sm:p-10 shadow-md font-sans text-sm text-slate-600 space-y-8 leading-relaxed">
          
          <div className="flex items-center gap-2 pb-4 border-b border-slate-100">
            <FileText className="text-yellow-600 shrink-0" size={20} />
            <span className="font-mono text-xs text-slate-400 font-bold uppercase">ÚLTIMA ACTUALIZACIÓN: JUNIO 2026</span>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-lg font-bold text-slate-900 uppercase tracking-wide">1. Aceptación de los Términos</h2>
            <p>
              Al solicitar, contratar o hacer uso de cualquiera de los servicios logísticos, despachos rápidos o plataformas de cálculo de <strong>Envíos DosRuedas</strong>, usted acepta adherirse de forma incondicional a los presentes Términos y Condiciones generales de contratación.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-lg font-bold text-slate-900 uppercase tracking-wide">2. Ámbito Operativo de Cobertura</h2>
            <p>
              Nuestra flota opera exclusivamente dentro del ejido urbano delimitado de la ciudad de <strong>Mar del Plata, Provincia de Buenos Aires</strong>. Los tiempos de tránsito estimados, incluyendo las promesas de entregas Express de menos de 2 horas o ruteos planificados LowCost, están supeditados a la normalidad del tráfico, situaciones climatológicas de fuerza mayor o cortes de arterias principales.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-lg font-bold text-slate-900 uppercase tracking-wide">3. Responsabilidades de Contenido del Paquete</h2>
            <p>
              El remitente declara y garantiza que el contenido entregado para transporte es lícito, no inflamable, no corrosivo y no viola leyes vigentes de la República Argentina. Queda terminantemente prohibido el envío de sustancias peligrosas, dinero de curso legal en efectivo, joyas u objetos prohibidos por ley. El remitente es exclusivamente responsable del correcto embalaje para evitar roturas accidentales mecánicas durante el traslado en moto.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-lg font-bold text-slate-900 uppercase tracking-wide">4. Seguro de Mercancía y Coincidencia de Valor</h2>
            <p>
              Bajo la opción de <strong>Seguro de Mercancía Habilitado</strong> mediante el pago del adicional indicado en el cotizador, Envíos DosRuedas asume una cobertura total por pérdida, extravío o siniestro vial equivalente al valor declarado neto de costo del producto enviado, con un tope máximo establecido en los límites de pólizas vigentes. En caso de no optar por la cobertura de seguro, la responsabilidad civil de la empresa se limitará a la restitución del valor del servicio de mensajería pactado.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-lg font-bold text-slate-900 uppercase tracking-wide">5. Modificación de Tarifas</h2>
            <p>
              Las tarifas estimadas arrojadas en tiempo real por el Cotizador Inteligente representan estimaciones vigentes de mercado y pueden fluctuar o requerir suplementos adicionales por bultos de sobrepeso extraordinarios, esperas demoradas del conductor en puerta que superen los 15 minutos, o cambios de destino una vez iniciado el trayecto coordinado por WhatsApp.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
