"use client";

import { useCalculator } from "@/src/context/CalculatorContext";
import { Clock, ShieldCheck, MapPin, ArrowRight, Zap, Activity } from "lucide-react";

export default function EnviosFlexPage() {
  const { openCalculator } = useCalculator();

  return (
    <div className="bg-slate-50 min-h-screen pt-12 pb-24">
      {/* Visual Hero Header */}
      <section className="bg-emerald-950 text-white py-16 sm:py-24 border-b-4 border-emerald-500 overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.15),transparent_70%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-full font-mono text-xs font-bold tracking-widest uppercase">
            MERCADOLIBRE EXPERT
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight">
            Envíos <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Flex</span>
          </h1>
          <p className="font-sans text-base sm:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed">
            Socio oficial de última milla para vendedores de MercadoLibre en Mar del Plata. Tus SLAs a salvo con nosotros.
          </p>
        </div>
      </section>

      {/* Main content specifications */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-blue-900 uppercase tracking-wide leading-tight">
              Mantené tu reputación platino intacta
            </h2>
            <p className="text-slate-600 leading-relaxed font-sans text-sm sm:text-base">
              Alineamos toda nuestra infraestructura operativa para responder estrictamente a las exigencias horarias de MercadoLibre Flex. Realizamos recolecciones diarias en tu establecimiento o domicilio comercial y procesamos todas tus ventas del día con un cumplimiento superior al 99.8%.
            </p>
            <p className="text-slate-600 leading-relaxed font-sans text-sm sm:text-base">
              Nuestra aplicación de ruteo y conductores experimentados logran que tu termómetro se mantenga consistentemente en verde, atrayendo más visitas y posicionamiento prioritario en el buscador de la plataforma.
            </p>
          </div>
          <div className="bg-white border-2 border-slate-200 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-2 h-full bg-emerald-500" />
            <h3 className="font-display text-lg font-bold text-slate-900 uppercase tracking-widest border-b border-slate-100 pb-3">
              Garantías del Servicio
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Clock className="text-emerald-500 shrink-0 w-5 h-5 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900 uppercase">Cumplimiento del 99.8%</h4>
                  <p className="text-xs text-slate-500">Garantizamos las entregas Same-Day pactadas sin retrasos técnicos.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheck className="text-emerald-500 shrink-0 w-5 h-5 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900 uppercase">Firma Digital de Recepción</h4>
                  <p className="text-xs text-slate-500">Fotografía y geolocalización de cada entrega para prevenir disputas de entrega.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Activity className="text-yellow-500 shrink-0 w-5 h-5 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900 uppercase font-sans">SLA Compliance Sync</h4>
                  <p className="text-xs text-slate-500">Información sincronizada en tiempo real de cada recorrido urbano.</p>
                </div>
              </div>
            </div>

            <button
              onClick={() => openCalculator("flex")}
              className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-sans font-bold text-sm uppercase py-3.5 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer mt-4"
            >
              <Zap size={16} className="text-yellow-400" />
              Cotizar Recorrido Flex
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
