import { motion } from "motion/react";
import { Sparkles, ArrowRight, ShieldCheck, Zap, Globe, PackageCheck, Send, CheckCircle2 } from "lucide-react";
import { useCalculator } from "@/src/context/CalculatorContext";

interface HeroProps {
  onOpenCalculator?: () => void;
}

export default function Hero({ onOpenCalculator }: HeroProps) {
  const { openCalculator } = useCalculator();
  const handleOpenCalc = onOpenCalculator || (() => openCalculator());

  const scrollToServices = () => {
    const servicesSection = document.getElementById("servicios");
    if (servicesSection) {
      const headerOffset = 90;
      const elementPosition = servicesSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="relative min-h-[calc(100vh-90px)] mt-[90px] bg-gradient-to-br from-[#0636A5] via-[#1E3A8A] to-[#172554] flex items-center overflow-hidden py-16 sm:py-24 text-white">
      {/* City Route Network Background and gradient mask */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero_background.jpeg" 
          alt="Envíos DosRuedas Red de Distribución" 
          className="w-full h-full object-cover opacity-15 scale-105 select-none pointer-events-none"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0636A5]/90 via-[#1E3A8A]/95 to-[#172554]/95 z-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text & CTA Container */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6 max-w-2xl">
            {/* Glowing active badge */}
            <motion.div 
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-yellow-500 font-sans text-xs sm:text-sm font-semibold tracking-wider uppercase shadow-lg shadow-yellow-500/5"
            >
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
              </div>
              Tu Solución Confiable
            </motion.div>

            {/* Bold Display Heading */}
            <motion.h1 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-wider leading-[1.05] uppercase"
            >
              Mensajería y Logística <br />
              <span className="relative inline-block text-yellow-400 mt-2">
                E-Commerce en Mar del Plata
                {/* Glow bar highlight under heading */}
                <span className="absolute left-0 bottom-1 sm:bottom-2 w-full h-[3px] bg-blue-500 shadow-md shadow-blue-500/40 rounded" />
              </span>
            </motion.h1>

            {/* Structured description text */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-sans text-base sm:text-lg text-slate-300 leading-relaxed font-normal"
            >
              Optimizamos los tiempos de entrega urbana de tu negocio. Somos especialistas en distribución de última milla, envíos exprés para empresas y logística MercadoLibre Flex. Más velocidad, más seguridad, más ventas.
            </motion.p>

            {/* Direct CTA action buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-2"
            >
              <button
                onClick={() => handleOpenCalc()}
                className="w-full sm:w-auto bg-yellow-500 hover:bg-yellow-400 text-slate-950 font-sans font-bold text-base uppercase py-4 px-8 rounded-xl shadow-xl shadow-yellow-500/10 flex items-center justify-center gap-2.5 transition-all active:scale-[0.98] border border-yellow-600/40 cursor-pointer"
              >
                Solicitar Servicio
                <ArrowRight size={18} className="text-slate-950 hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={scrollToServices}
                className="w-full sm:w-auto bg-slate-900 border border-slate-700/60 text-slate-100 hover:bg-slate-800 font-sans font-bold text-base uppercase py-4 px-8 rounded-xl flex items-center justify-center gap-2.5 transition-all cursor-pointer"
              >
                Ver Servicios
              </button>
            </motion.div>

            {/* Three primary credentials in a row */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-3 gap-3 md:gap-5 w-full pt-8 border-t border-slate-800 mt-6"
            >
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-1 sm:gap-2 text-center sm:text-left">
                <div className="p-1 sm:p-1.5 bg-blue-500/10 rounded text-blue-400 border border-blue-500/10">
                  <ShieldCheck size={16} />
                </div>
                <div>
                  <div className="font-display font-bold text-xs sm:text-sm text-yellow-400 uppercase tracking-widest leading-none">100% SEGURO</div>
                  <div className="text-[10px] text-slate-400 font-semibold uppercase mt-0.5 tracking-wider sm:block hidden">CUSTODIA TOTAL</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-1 sm:gap-2 text-center sm:text-left">
                <div className="p-1 sm:p-1.5 bg-yellow-400/10 rounded text-yellow-400 border border-yellow-400/10">
                  <Zap size={16} />
                </div>
                <div>
                  <div className="font-display font-bold text-xs sm:text-sm text-yellow-400 uppercase tracking-widest leading-none">ULTRA RÁPIDO</div>
                  <div className="text-[10px] text-slate-400 font-semibold uppercase mt-0.5 tracking-wider sm:block hidden">ENTREGA URBANA</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-1 sm:gap-2 text-center sm:text-left">
                <div className="p-1 sm:p-1.5 bg-emerald-500/10 rounded text-emerald-400 border border-emerald-500/10">
                  <Globe size={16} />
                </div>
                <div>
                  <div className="font-display font-bold text-xs sm:text-sm text-yellow-400 uppercase tracking-widest leading-none">COBERTURA TOTAL</div>
                  <div className="text-[10px] text-slate-400 font-semibold uppercase mt-0.5 tracking-wider sm:block hidden">MAR DEL PLATA</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Floating HTML Visual Elements */}
          <div className="hidden lg:col-span-5 lg:flex flex-col items-center justify-center relative min-h-[400px]">
            {/* Ambient decorative lighting */}
            <div className="absolute w-[350px] h-[350px] bg-blue-500/10 rounded-full blur-[80px] -z-10" />
            <div className="absolute w-[200px] h-[200px] bg-yellow-500/10 rounded-full blur-[60px] -z-10" />

            {/* Glowing levitating visual layout elements */}
            <div className="relative w-full max-w-[340px] space-y-6">
              
              {/* Card 1: EN TRÁNSITO */}
              <motion.div 
                animate={{ 
                  y: [0, -12, 0],
                  rotate: [-1, 1, -1]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                className="bg-slate-900/90 border border-slate-700/60 p-5 rounded-2xl shadow-xl backdrop-blur-md flex items-center gap-4 cursor-pointer"
              >
                <div className="w-11 h-11 bg-emerald-500/10 border border-emerald-500/30 rounded-xl flex items-center justify-center text-emerald-400 shrink-0">
                  <PackageCheck size={22} className="animate-pulse" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-sans text-xs font-semibold uppercase text-slate-400 tracking-wider">MOTO Nº 14</span>
                    <div className="flex items-center gap-1.5">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                      </span>
                      <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-widest font-mono">EN TRÁNSITO</span>
                    </div>
                  </div>
                  <h4 className="text-slate-100 font-semibold text-[13px] uppercase mt-1">Paquete E-Commerce - Puerto</h4>
                  <p className="text-[11px] text-slate-400 leading-none mt-1">Estimado 20m • Calle 12 de Octubre</p>
                </div>
              </motion.div>

              {/* Card 2: VERIFICADO */}
              <motion.div 
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [1, -1, 1]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                className="bg-slate-900/90 border border-slate-700/60 p-5 rounded-2xl shadow-xl backdrop-blur-md flex items-center gap-4 cursor-pointer"
              >
                <div className="w-11 h-11 bg-blue-500/10 border border-blue-500/30 rounded-xl flex items-center justify-center text-blue-400 shrink-0">
                  <Send size={20} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-sans text-xs font-semibold uppercase text-slate-400 tracking-wider">COTIZADOR</span>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 size={12} className="text-blue-500" />
                      <span className="text-[11px] font-bold text-blue-400 uppercase tracking-widest font-mono">VERIFICADO</span>
                    </div>
                  </div>
                  <h4 className="text-slate-100 font-semibold text-[13px] uppercase mt-1">Tarifa Plana Inteligente</h4>
                  <p className="text-[11px] text-slate-400 leading-none mt-1">Cálculo al instante • MDP Distrital</p>
                </div>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
