"use client";

import { useCalculator } from "@/src/context/CalculatorContext";
import { Zap, Clock, ShieldCheck, MapPin, ArrowRight, Heart } from "lucide-react";

export default function EnviosExpressPage() {
  const { openCalculator } = useCalculator();

  return (
    <div className="bg-slate-50 min-h-screen pt-12 pb-24">
      {/* Visual Hero Header */}
      <section className="bg-gradient-blue text-white py-16 sm:py-24 border-b-4 border-yellow-500 overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_70%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 rounded-full font-mono text-xs font-bold tracking-widest uppercase">
            MÁXIMA PRIORIDAD
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight">
            Envíos <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-300">Express</span>
          </h1>
          <p className="font-sans text-base sm:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed">
            Mensajería inmediata y entregas ultrarrápidas en Mar del Plata. Tu mercadería en destino en menos de 2 horas garantizado.
          </p>
        </div>
      </section>

      {/* Main content specifications */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-blue-900 uppercase tracking-wide leading-tight">
              Velocidad sin precedentes para el día a día
            </h2>
            <p className="text-slate-600 leading-relaxed font-sans text-sm sm:text-base">
              Diseñado exclusivamente para urgencias corporativas, trámites bancarios, firmas de contratos y despachos de última milla que requieren inmediatez absoluta. Al presionar el botón, asignamos un mensajero exclusivo para tu pedido en tiempo real.
            </p>
            <p className="text-slate-600 leading-relaxed font-sans text-sm sm:text-base">
              Toda la flota cuenta con seguimiento digital en vivo y canales de comunicación abiertos permanentes. Todo monitoreado por nuestra central logística para que nada falle.
            </p>
          </div>
          <div className="bg-white border-2 border-slate-200 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-2 h-full bg-yellow-500" />
            <h3 className="font-display text-lg font-bold text-slate-900 uppercase tracking-widest border-b border-slate-100 pb-3">
              Garantías del Servicio
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Clock className="text-yellow-500 shrink-0 w-5 h-5 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900 uppercase">Tiempo Record</h4>
                  <p className="text-xs text-slate-500">Retiro y entrega en menos de 120 minutos dentro de MDP.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheck className="text-emerald-500 shrink-0 w-5 h-5 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900 uppercase">Protección e Inmunidad</h4>
                  <p className="text-xs text-slate-500">Seguro de carga civil integrado contra pérdidas o siniestros.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="text-blue-500 shrink-0 w-5 h-5 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900 uppercase font-sans">Exclusivo MDP</h4>
                  <p className="text-xs text-slate-500">Logística local de cobertura total en áreas urbanas.</p>
                </div>
              </div>
            </div>

            <button
              onClick={() => openCalculator("express")}
              className="w-full bg-yellow-500 hover:bg-yellow-400 active:scale-[0.98] text-slate-950 font-sans font-bold text-sm uppercase py-3.5 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer mt-4"
            >
              <Zap size={16} />
              Cotizar Envío Express
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
