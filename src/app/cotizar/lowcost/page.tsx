"use client";

import { useEffect } from "react";
import { useCalculator } from "@/src/context/CalculatorContext";
import { Calculator, ArrowRight, Zap, CheckCircle } from "lucide-react";

export default function CotizarLowCostPage() {
  const { openCalculator } = useCalculator();

  useEffect(() => {
    openCalculator("lowcost");
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen pt-12 pb-24 flex flex-col items-center justify-center">
      <div className="max-w-md w-full mx-auto px-4 text-center space-y-6">
        <div className="inline-flex p-4 bg-blue-500/10 text-blue-600 rounded-full animate-bounce">
          <Calculator size={48} />
        </div>
        <div className="space-y-2">
          <h1 className="font-display text-4xl font-extrabold text-blue-900 uppercase tracking-wide">
            Cotizador <span className="text-blue-600">LowCost</span>
          </h1>
          <p className="font-sans text-sm text-slate-500 leading-relaxed">
            Se ha abierto el panel cotizador interactivo. Si no lo visualizas por favor haz click en el botón inferior para abrirlo de forma manual y estimar tus tarifas 2026.
          </p>
        </div>

        <button
          onClick={() => openCalculator("lowcost")}
          className="w-full bg-blue-600 hover:bg-blue-500 text-white font-sans font-bold text-sm uppercase py-4 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
        >
          <Zap size={16} className="text-yellow-400" />
          Abrir Cotizador Manualmente
          <ArrowRight size={14} />
        </button>

        <div className="pt-6 border-t border-slate-200 flex justify-center gap-4 text-xs font-mono text-slate-400 uppercase">
          <span className="flex items-center gap-1"><CheckCircle size={12} className="text-emerald-500" /> Tarifas MDP</span>
          <span className="flex items-center gap-1"><CheckCircle size={12} className="text-emerald-500" /> Seguro Integrado</span>
        </div>
      </div>
    </div>
  );
}
