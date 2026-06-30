import { useState } from "react";
import { Zap, Clock, Activity, TrendingUp, ChevronRight, Sliders, CheckCircle, Package } from "lucide-react";
import { SERVICES_DATA } from "../../data";
import { useCalculator } from "@/src/context/CalculatorContext";

interface ServicesProps {
  onOpenCalculator?: (serviceId?: string) => void;
}

export default function Services({ onOpenCalculator }: ServicesProps) {
  const { openCalculator } = useCalculator();
  const handleOpenCalc = onOpenCalculator || ((serviceId?: string) => openCalculator(serviceId));

  // Range slider state for Envíos Express (customizable range from 1 to 5 hours)
  const [expressHours, setExpressHours] = useState(2);

  // Simulated Express shipping rate factor based on speed
  const calculatedExpressFactor = (6 - expressHours) * 0.3 + 0.9;

  return (
    <section id="servicios" className="relative bg-blue-100 py-20 border-y border-blue-200/60 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#0636A5]/10 text-[#0636A5] rounded-full font-sans text-xs sm:text-sm font-semibold tracking-wider uppercase border border-[#0636A5]/25">
            Nuestros Despachos
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0636A5] tracking-wider uppercase leading-none">
            Soluciones Logísticas
          </h2>
          <p className="font-sans text-base sm:text-lg text-slate-600 font-normal">
            Infraestructura moderna para negocios que no se detienen. Ofrecemos respuestas inteligentes aplicadas a cada kilómetro recorrido en Mar del Plata.
          </p>
        </div>

        {/* 4-Card Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Card 1: Envíos Express */}
          <div className="bg-white rounded-2xl border-2 border-slate-200 hover:border-yellow-400 p-6 flex flex-col justify-between hover:-translate-y-3 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-yellow-500/5 relative group">
            <span className="absolute top-4 right-4 text-[10px] font-bold text-yellow-600 bg-yellow-400/10 border border-yellow-400/30 px-2 py-0.5 rounded uppercase tracking-wider">
              ALTA PRIORIDAD
            </span>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-yellow-500/10 text-yellow-600 rounded-xl flex items-center justify-center shrink-0">
                <Zap size={26} className="group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 uppercase tracking-widest leading-none">
                  Envíos Express
                </h3>
                <p className="text-xs text-slate-400 font-mono tracking-widest uppercase mt-1">VELOCIDAD CRÍTICA</p>
              </div>
              <p className="font-sans text-sm text-slate-600 leading-relaxed font-normal">
                Urgencias bajo control total. Pensado para tramitaciones contables u operaciones e-commerce de alta criticidad horaria en Mar del Plata.
              </p>

              {/* Express range slider interactive demo */}
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-slate-500 uppercase flex items-center gap-1">
                    <Sliders size={12} /> Margen Horario
                  </span>
                  <span className="font-bold text-slate-900">{expressHours} {expressHours === 1 ? "Hora" : "Horas"}</span>
                </div>
                
                <input 
                  type="range" 
                  min="1" 
                  max="5" 
                  value={expressHours} 
                  onChange={(e) => setExpressHours(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-yellow-500"
                />
                
                <div className="flex justify-between items-center text-[10px] text-slate-500 font-mono border-t border-slate-200/80 pt-2 leading-none">
                  <span>URGENCIA COEF.</span>
                  <span className="font-bold text-yellow-600">x{calculatedExpressFactor.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-100">
              <button
                onClick={() => handleOpenCalc("express")}
                className="w-full text-left font-display text-sm font-bold tracking-widest text-slate-900 group-hover:text-yellow-600 flex items-center justify-between uppercase cursor-pointer"
              >
                Solicitar Express
                <ChevronRight size={16} className="transform group-hover:translate-x-1.5 transition-transform text-slate-400 group-hover:text-yellow-500" />
              </button>
            </div>
          </div>

          {/* Card 2: Envíos LowCost */}
          <div className="bg-white rounded-2xl border border-slate-200 hover:border-blue-500 p-6 flex flex-col justify-between hover:-translate-y-3 transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-blue-500/5 relative group">
            <span className="absolute top-4 right-4 text-[10px] font-bold text-slate-500 bg-slate-100 border border-slate-200/80 px-2 py-0.5 rounded uppercase tracking-wider">
              ECONÓMICO
            </span>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-blue-500/10 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                <Clock size={24} className="group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 uppercase tracking-widest leading-none">
                  Envíos LowCost
                </h3>
                <p className="text-xs text-slate-400 font-mono tracking-widest uppercase mt-1">MÁXIMO AHORRO</p>
              </div>
              <p className="font-sans text-sm text-slate-600 leading-relaxed font-normal">
                Rentabilidad y ruteo masivo de paquetería urbana. Despacha antes de las 13:00 hs y garantizamos la distribución el mismo día por una tarifa plana inigualable.
              </p>

              {/* Decorative detail lines */}
              <ul className="space-y-1.5 text-xs text-slate-500 font-sans pt-1">
                <li className="flex items-center gap-1.5">
                  <div className="w-1 h-1 bg-blue-500 rounded-full" />
                  Punto de corte: 13:00 hs
                </li>
                <li className="flex items-center gap-1.5">
                  <div className="w-1 h-1 bg-blue-500 rounded-full" />
                  Entrega garantizada en la tarde
                </li>
                <li className="flex items-center gap-1.5">
                  <div className="w-1 h-1 bg-blue-500 rounded-full" />
                  Tarifa ideal para envíos de bajo ticket
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-100">
              <button
                onClick={() => handleOpenCalc("lowcost")}
                className="w-full text-left font-display text-sm font-bold tracking-widest text-slate-900 group-hover:text-blue-500 flex items-center justify-between uppercase cursor-pointer"
              >
                Ahorrá con LowCost
                <ChevronRight size={16} className="transform group-hover:translate-x-1.5 transition-transform text-slate-400 group-hover:text-blue-500" />
              </button>
            </div>
          </div>

          {/* Card 3: Envíos Flex */}
          <div className="bg-white rounded-2xl border border-slate-200 hover:border-emerald-500 p-6 flex flex-col justify-between hover:-translate-y-3 transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-emerald-500/5 relative group">
            <span className="absolute top-4 right-4 text-[10px] font-bold text-emerald-600 bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded uppercase tracking-wider font-mono">
              FLEX CONFIABLE
            </span>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-emerald-500/10 text-emerald-600 rounded-xl flex items-center justify-center shrink-0">
                <Activity size={24} className="group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 uppercase tracking-widest leading-none">
                  Envíos Flex
                </h3>
                <p className="text-xs text-slate-400 font-mono tracking-widest uppercase mt-1">MERCADOLIBRE EXPERT</p>
              </div>
              <p className="font-sans text-sm text-slate-600 leading-relaxed font-normal">
                Soporte de alta reputación e-commerce. Cumplimos con tus acuerdos de nivel de servicio (SLAs) Same-Day para mantener tus termómetros comerciales en verde platino.
              </p>

              {/* Flex SLA Performance metric display */}
              <div className="p-3 bg-emerald-500/5 border border-emerald-500/10 rounded-xl flex items-center gap-3">
                <CheckCircle size={18} className="text-emerald-500 shrink-0" />
                <div className="leading-none">
                  <div className="text-[11px] font-bold text-emerald-600 uppercase font-mono">SLA COMPLIANCE</div>
                  <div className="text-xs font-semibold text-slate-700 mt-0.5">99.8% Cumplimiento Total</div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-100">
              <button
                onClick={() => handleOpenCalc("flex")}
                className="w-full text-left font-display text-sm font-bold tracking-widest text-slate-900 group-hover:text-emerald-500 flex items-center justify-between uppercase cursor-pointer"
              >
                Activar Envíos Flex
                <ChevronRight size={16} className="transform group-hover:translate-x-1.5 transition-transform text-slate-400 group-hover:text-emerald-500" />
              </button>
            </div>
          </div>

          {/* Card 4: E-Commerce & 3PL */}
          <div className="bg-white rounded-2xl border border-slate-200 hover:border-slate-800 p-6 flex flex-col justify-between hover:-translate-y-3 transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-slate-500/5 relative group">
            <span className="absolute top-4 right-4 text-[10px] font-bold text-slate-600 bg-slate-100 border border-slate-200/80 px-2 py-0.5 rounded uppercase tracking-wider">
              CORPORATIVO
            </span>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-slate-900/10 text-slate-900 rounded-xl flex items-center justify-center shrink-0">
                <TrendingUp size={24} className="group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 uppercase tracking-widest leading-none">
                  E-Commerce & 3PL
                </h3>
                <p className="text-xs text-slate-400 font-mono tracking-widest uppercase mt-1">SOLUCIONES ESCALABLES</p>
              </div>
              <p className="font-sans text-sm text-slate-600 leading-relaxed font-normal">
                Asistencia de inventarios integrados. Ofrecemos espacio de guardado temporal (3PL), etiquetado, Pick & Pack y facturación mensual de cuenta corriente simplificada.
              </p>

              {/* Decorative icons and data */}
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center gap-3">
                <Package size={18} className="text-slate-500 shrink-0" />
                <div className="leading-none">
                  <div className="text-[11px] font-bold text-slate-500 uppercase font-mono">SERVICIOS DE DEPÓSITO</div>
                  <div className="text-xs font-semibold text-slate-700 mt-0.5">Pick, Pack & Despacho</div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-100">
              <button
                onClick={() => handleOpenCalc("ecommerce_3pl")}
                className="w-full text-left font-display text-sm font-bold tracking-widest text-slate-900 group-hover:text-purple-600 flex items-center justify-between uppercase cursor-pointer"
              >
                Hablar con un asesor
                <ChevronRight size={16} className="transform group-hover:translate-x-1.5 transition-transform text-slate-400 group-hover:text-purple-600" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
