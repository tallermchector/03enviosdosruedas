"use client";

import FAQAccordion from "@/src/components/home/FAQAccordion";
import { HelpCircle } from "lucide-react";

export default function PreguntasFrecuentesPage() {
  return (
    <div className="bg-slate-50 min-h-screen pt-12 pb-24">
      {/* Visual Hero Header */}
      <section className="bg-blue-900 text-white py-16 sm:py-24 border-b-4 border-yellow-500 overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_70%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 rounded-full font-mono text-xs font-bold tracking-widest uppercase">
            CENTRAL DE AYUDA
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight">
            Preguntas <span className="text-yellow-400">Frecuentes</span>
          </h1>
          <p className="font-sans text-base sm:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed">
            Resolvemos tus dudas al instante. Todo lo que necesitás saber sobre zonas, tarifas y modalidades de entrega en Mar del Plata.
          </p>
        </div>
      </section>

      {/* Main content specifications */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <FAQAccordion />
      </section>
    </div>
  );
}
