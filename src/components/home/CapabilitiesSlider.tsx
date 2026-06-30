import { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import { Navigation, Cpu, ShieldAlert, BarChart3, ArrowRight, Eye, Smartphone, ServerCrash, CheckSquare } from "lucide-react";
import { CAPABILITIES_DATA } from "../../data";

export default function CapabilitiesSlider() {
  const [activeTab, setActiveTab] = useState<string>(CAPABILITIES_DATA[0].id);
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto scroll capability visual helper
  const handleSelectTab = (id: string) => {
    setActiveTab(id);
    const activeIndex = CAPABILITIES_DATA.findIndex(c => c.id === id);
    if (containerRef.current) {
      const cardWidth = 280; // approximate width of card in mobile
      containerRef.current.scrollTo({
        left: activeIndex * cardWidth,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="relative py-20 bg-blue-100 overflow-hidden text-slate-800 border-y border-blue-200/60" id="capabilities">
      
      {/* Abstract geometric background lines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.01)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute -top-40 right-20 w-[400px] h-[400px] bg-[#0636A5]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-40 left-20 w-[400px] h-[400px] bg-yellow-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-14 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#0636A5]/10 border border-[#0636A5]/20 text-[#0636A5] rounded-full font-sans text-xs sm:text-sm font-semibold uppercase tracking-wider">
            Capacidades Dinámicas
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0636A5] tracking-wider uppercase leading-none">
            Soluciones a Medida
          </h2>
          <p className="font-sans text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Hemos redefinido los estándares de la logística urbana en Mar del Plata para ofrecerte una ventaja comercial real, respaldada por tecnología aplicada.
          </p>
        </div>

        {/* Dual structure layout: Left is selector cards, Right is simulated dashboard monitor */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-4">
          
          {/* Left panel: Sliding Horizontal scroll cards */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div 
              ref={containerRef}
              className="flex lg:grid lg:grid-cols-2 gap-4 overflow-x-auto pb-6 lg:pb-0 scroll-smooth snap-x snap-mandatory scrollbar-none"
              id="slider-container"
            >
              {CAPABILITIES_DATA.map((cap) => {
                const isActive = activeTab === cap.id;
                return (
                  <button
                    key={cap.id}
                    type="button"
                    onClick={() => handleSelectTab(cap.id)}
                    className={`flex-1 min-w-[280px] lg:min-w-0 snap-start text-left p-6 sm:p-7 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between h-full relative group ${
                      isActive 
                        ? "bg-[#0636A5] border-[#0636A5] text-white shadow-xl shadow-[#0636A5]/10" 
                        : "bg-white border-slate-200 text-slate-800 hover:bg-slate-50 hover:border-slate-300"
                    }`}
                  >
                    {/* Visual border highlight */}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-[3px] bg-yellow-400 rounded" />
                    )}

                    <div className="space-y-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                        isActive ? "bg-yellow-400 text-slate-950" : "bg-slate-100 text-[#0636A5] group-hover:scale-105"
                      }`}>
                        {cap.icon === "Navigation" && <Navigation size={22} />}
                        {cap.icon === "Cpu" && <Cpu size={22} />}
                        {cap.icon === "ShieldAlert" && <ShieldAlert size={22} />}
                        {cap.icon === "BarChart3" && <BarChart3 size={22} />}
                      </div>

                      <div className="space-y-1.5">
                        <h3 className={`font-display text-lg font-bold tracking-widest uppercase mt-2 transition-colors ${isActive ? "text-yellow-400" : "text-slate-900"}`}>
                          {cap.title}
                        </h3>
                        <p className={`font-sans text-xs sm:text-sm font-normal leading-relaxed ${isActive ? "text-slate-100" : "text-slate-500"}`}>
                          {cap.desc}
                        </p>
                      </div>
                    </div>

                    <div className={`flex items-center justify-between pt-6 mt-4 border-t text-xs font-mono ${isActive ? "border-white/10" : "border-slate-100"}`}>
                      <span className={isActive ? "text-white/60" : "text-slate-400"}>BENEFICIO</span>
                      <span className={`font-bold uppercase tracking-wider ${isActive ? "text-yellow-400" : "text-[#0636A5]"}`}>
                        {cap.metric}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Hint message for mobile scroll */}
            <div className="flex lg:hidden items-center justify-center gap-2 mt-2 text-xs font-mono text-slate-500 uppercase select-none">
              <span>Deslizar para ver más</span>
              <ArrowRight size={12} className="animate-pulse" />
            </div>
          </div>

          {/* Right panel: High-fidelity Tech Monitor representing visual metrics of active tab */}
          <div className="lg:col-span-5 flex-1 bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
            {/* Monitor glowing status lamp */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-[50px]" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-yellow-500/5 rounded-full blur-[50px]" />

            <div className="space-y-6">
              {/* Monitor Header */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-2">
                  <div className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                  </div>
                  <span className="text-xs font-mono font-bold tracking-widest text-slate-400 uppercase">SYS MONITOR MDP // ACTIVE</span>
                </div>
                <span className="text-[10px] font-mono bg-slate-800 border border-slate-700 text-slate-300 px-2 py-0.5 rounded uppercase">
                  LIVE FEED
                </span>
              </div>

              {/* Dynamic Simulated Dashboard Display */}
              <div className="min-h-[220px] flex flex-col justify-center space-y-4">
                {activeTab === "ruteo" && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-3 text-center">
                      <div className="bg-slate-900 border border-slate-800 p-3 rounded-lg">
                        <div className="text-[10px] uppercase font-mono text-slate-400">Eficiencia Rutero</div>
                        <div className="font-display font-bold text-xl text-yellow-400 mt-1">98.7%</div>
                      </div>
                      <div className="bg-slate-900 border border-slate-800 p-3 rounded-lg">
                        <div className="text-[10px] uppercase font-mono text-slate-400">Tiempos de Desvío</div>
                        <div className="font-display font-bold text-xl text-yellow-400 mt-1">-14m / Prom.</div>
                      </div>
                    </div>
                    <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-lg text-xs leading-relaxed space-y-2">
                      <div className="font-bold text-slate-200 uppercase tracking-widest text-[10px] font-mono flex items-center gap-1.5">
                        <Eye size={12} className="text-blue-400" /> REPORTE DE TRÁFICO URBANO
                      </div>
                      <p className="text-slate-400">Nuestros mensajeros operan con algoritmos que calculan desvíos perimetrales automáticos para sortear incidentes en Av. Constitución, Av Luro e Independencia.</p>
                    </div>
                  </div>
                )}

                {activeTab === "api" && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-3 text-center">
                      <div className="bg-slate-900 border border-slate-800 p-3 rounded-lg">
                        <div className="text-[10px] uppercase font-mono text-slate-400">Sync WooCommerce</div>
                        <div className="font-display font-bold text-xl text-emerald-400 mt-1">ESTABLE</div>
                      </div>
                      <div className="bg-slate-900 border border-slate-800 p-3 rounded-lg">
                        <div className="text-[10px] uppercase font-mono text-slate-400">Sync Tiendanube</div>
                        <div className="font-display font-bold text-xl text-emerald-400 mt-1">ESTABLE</div>
                      </div>
                    </div>
                    <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-lg text-xs leading-relaxed space-y-2">
                      <div className="font-bold text-slate-200 uppercase tracking-widest text-[10px] font-mono flex items-center gap-1.5">
                        <Smartphone size={12} className="text-blue-400" /> INTEGRACIÓN MULTI-TIENDA
                      </div>
                      <p className="text-slate-400">Las ventas e-commerce se consolidan directo en nuestro sistema. El software unifica las órdenes emitiendo las etiquetas de despacho en el acto.</p>
                    </div>
                  </div>
                )}

                {activeTab === "seguridad" && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-3 text-center">
                      <div className="bg-slate-900 border border-slate-800 p-3 rounded-lg">
                        <div className="text-[10px] uppercase font-mono text-slate-400">Custodia Activa</div>
                        <div className="font-display font-bold text-xl text-blue-400 mt-1">100% SECURE</div>
                      </div>
                      <div className="bg-slate-900 border border-slate-800 p-3 rounded-lg">
                        <div className="text-[10px] uppercase font-mono text-slate-400">Póliza General</div>
                        <div className="font-display font-bold text-xl text-blue-400 mt-1">M.D.P. AMPLIA</div>
                      </div>
                    </div>
                    <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-lg text-xs leading-relaxed space-y-2">
                      <div className="font-bold text-slate-200 uppercase tracking-widest text-[10px] font-mono flex items-center gap-1.5">
                        <CheckSquare size={12} className="text-emerald-400" /> PROTOCOLO DE CONCILIACIÓN
                      </div>
                      <p className="text-slate-400">Cada entrega requiere registro de DNI, nombre, firma digitalizada en pantalla y fotografía que demuestre el correcto estado del paquete bulto.</p>
                    </div>
                  </div>
                )}

                {activeTab === "metricas" && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-3 text-center">
                      <div className="bg-slate-900 border border-slate-800 p-3 rounded-lg">
                        <div className="text-[10px] uppercase font-mono text-slate-400">Rendimiento Semanal</div>
                        <div className="font-display font-bold text-xl text-yellow-400 mt-1">99.2%</div>
                      </div>
                      <div className="bg-slate-900 border border-slate-800 p-3 rounded-lg">
                        <div className="text-[10px] uppercase font-mono text-slate-400">Sincronización GPS</div>
                        <div className="font-display font-bold text-xl text-yellow-400 mt-1">ACTIVA</div>
                      </div>
                    </div>
                    <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-lg text-xs leading-relaxed space-y-2">
                      <div className="font-bold text-slate-200 uppercase tracking-widest text-[10px] font-mono flex items-center gap-1.5">
                        <BarChart3 size={12} className="text-blue-400" /> DASHBOARD ANALÍTICO PYME
                      </div>
                      <p className="text-slate-400">Audita tus entregas pendientes, validadas e incidencias de ruteo al instante. Descargá reportes consolidados en formato Excel listos para liquidación.</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Monitor Footer */}
            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500 font-mono">
              <span>SISTEMA LOGISTICO MDQ</span>
              <span className="font-sans font-medium text-slate-300">
                {CAPABILITIES_DATA.find(c => c.id === activeTab)?.detail}
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
