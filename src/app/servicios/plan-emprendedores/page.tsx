"use client";

import { useCalculator } from "@/src/context/CalculatorContext";
import { Clock, ShieldCheck, MapPin, ArrowRight, Zap, TrendingUp, Heart } from "lucide-react";

export default function PlanEmprendedoresPage() {
  const { openCalculator } = useCalculator();

  return (
    <div className="bg-slate-50 min-h-screen pt-12 pb-24">
      {/* Visual Hero Header */}
      <section className="bg-slate-900 text-white py-16 sm:py-24 border-b-4 border-slate-700 overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_70%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 rounded-full font-mono text-xs font-bold tracking-widest uppercase">
            PLAN CORPORATIVO
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight">
            E-Commerce & <span className="text-yellow-400">3PL</span>
          </h1>
          <p className="font-sans text-base sm:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed">
            Consolidamos el stock, preparación y envíos de tu marca. La solución llave en mano definitiva para tiendas online y PyMEs.
          </p>
        </div>
      </section>

      {/* Main content specifications */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 uppercase tracking-wide leading-tight">
              Tercerizá tu depósito y ahorrá espacio y tiempo
            </h2>
            <p className="text-slate-600 leading-relaxed font-sans text-sm sm:text-base">
              Diseñado para pymes en crecimiento que necesitan delegar la gestión del inventario físico. Nosotros nos encargamos de almacenar tu mercadería de forma segura táctica en nuestra sucursal de Mar del Plata, armar los pedidos (Pick & Pack) bajo tus estrictos requerimientos de embalaje y despacharlos en el día.
            </p>
            <p className="text-slate-600 leading-relaxed font-sans text-sm sm:text-base">
              Perfecto para canalizar ventas masivas de tu e-commerce sin preocuparte por armar los bultos ni esperar al correo mensajero. Facturación en cuenta corriente mensual unificada.
            </p>
          </div>
          <div className="bg-white border-2 border-slate-200 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-2 h-full bg-slate-900" />
            <h3 className="font-display text-lg font-bold text-slate-900 uppercase tracking-widest border-b border-slate-100 pb-3">
              Garantías del Servicio
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <TrendingUp className="text-blue-500 shrink-0 w-5 h-5 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900 uppercase font-sans">Full Pick & Pack</h4>
                  <p className="text-xs text-slate-500">Preparación inmediata de bultos ni bien se concreta la venta digital.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheck className="text-emerald-500 shrink-0 w-5 h-5 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900 uppercase">Seguridad en Depósito</h4>
                  <p className="text-xs text-slate-500">Guardado controlado con circuitos de videovigilancia y control de stock permanente.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="text-yellow-500 shrink-0 w-5 h-5 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900 uppercase font-sans">Control del Inventario</h4>
                  <p className="text-xs text-slate-500">Informes periódicos de stock remanente para prevenir quiebres de mercadería.</p>
                </div>
              </div>
            </div>

            <button
              onClick={() => openCalculator("ecommerce_3pl")}
              className="w-full bg-slate-900 hover:bg-slate-800 text-white font-sans font-bold text-sm uppercase py-3.5 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer mt-4"
            >
              <Zap size={16} className="text-yellow-400" />
              Solicitar Cuenta PyME
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
