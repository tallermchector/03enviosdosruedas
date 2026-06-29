"use client";

import { useCalculator } from "@/src/context/CalculatorContext";
import { Clock, ShieldCheck, MapPin, ArrowRight, Zap, TrendingDown } from "lucide-react";

export default function EnviosLowCostPage() {
  const { openCalculator } = useCalculator();

  return (
    <div className="bg-slate-50 min-h-screen pt-12 pb-24">
      {/* Visual Hero Header */}
      <section className="bg-blue-900 text-white py-16 sm:py-24 border-b-4 border-blue-500 overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_70%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 rounded-full font-mono text-xs font-bold tracking-widest uppercase">
            MÁXIMO AHORRO
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight">
            Envíos <span className="text-yellow-400">LowCost</span>
          </h1>
          <p className="font-sans text-base sm:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed">
            La tarifa planificada más barata de Mar del Plata. Envíos urbanos consolidados en el mismo día.
          </p>
        </div>
      </section>

      {/* Main content specifications */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-blue-900 uppercase tracking-wide leading-tight">
              Ruteo Urbano Inteligente para Máxima Economía
            </h2>
            <p className="text-slate-600 leading-relaxed font-sans text-sm sm:text-base">
              Ideal para tiendas online, pymes y emprendimientos con volumen diario de paquetería que buscan minimizar el costo unitario de entrega. Mediante la consolidación y el ruteo algorítmico masivo por zonas, logramos tarifas sumamente competitivas sin mermar la calidad de entrega.
            </p>
            <p className="text-slate-600 leading-relaxed font-sans text-sm sm:text-base">
              Solo debes programar tus retiros antes de las 13:00 hs, y garantizamos la distribución de todos tus paquetes durante el transcurso de la tarde.
            </p>
          </div>
          <div className="bg-white border-2 border-slate-200 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-2 h-full bg-blue-500" />
            <h3 className="font-display text-lg font-bold text-slate-900 uppercase tracking-widest border-b border-slate-100 pb-3">
              Garantías del Servicio
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Clock className="text-blue-500 shrink-0 w-5 h-5 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900 uppercase font-sans">Hora de Corte 13:00 hs</h4>
                  <p className="text-xs text-slate-500">Despachá a la mañana y la entrega se concreta en la misma tarde.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <TrendingDown className="text-emerald-500 shrink-0 w-5 h-5 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900 uppercase font-sans">Tarifa Plana Reducida</h4>
                  <p className="text-xs text-slate-500">El costo unitario más conveniente del mercado para múltiples pedidos.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="text-yellow-500 shrink-0 w-5 h-5 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900 uppercase">Zonas Planificadas</h4>
                  <p className="text-xs text-slate-500">Reparto estructurado en todos los cuadrantes de Mar del Plata.</p>
                </div>
              </div>
            </div>

            <button
              onClick={() => openCalculator("lowcost")}
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-sans font-bold text-sm uppercase py-3.5 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer mt-4"
            >
              <Zap size={16} className="text-yellow-400" />
              Cotizar Envío LowCost
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
