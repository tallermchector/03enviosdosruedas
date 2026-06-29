import { motion } from "motion/react";
import { Send, Calculator, ShieldCheck, Zap, Globe } from "lucide-react";
import { useCalculator } from "@/src/context/CalculatorContext";

interface DynamicCTAProps {
  onOpenCalculator?: () => void;
}

export default function DynamicCTA({ onOpenCalculator }: DynamicCTAProps) {
  const { openCalculator } = useCalculator();
  const handleOpenCalc = onOpenCalculator || (() => openCalculator());
  
  const handleWhatsappSupport = () => {
    const formattedText = "¡Hola Envíos DosRuedas! 👋 Los encontré navegando por su sitio web y me gustaría conversar sobre las tarifas logísticas vigentes para mi e-commerce de Mar del Plata.";
    const encodedText = encodeURIComponent(formattedText);
    const whatsappUrl = `https://api.whatsapp.com/send/?phone=5492236602699&text=${encodedText}&app_absent=0`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="relative py-28 bg-blue-900 overflow-hidden text-center text-white" id="cta-dynamic">
      {/* Abstract Glowing Background and contrast tint overlays */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <img 
          src="/abstracto_background.jpeg" 
          alt="Abstract Logística Background" 
          className="w-full h-full object-cover opacity-20 scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-blue-950/90 to-slate-900/90" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-slate-900/80 border border-white/10 rounded-3xl p-8 sm:p-12 md:p-16 backdrop-blur-md shadow-2xl relative overflow-hidden"
        >
          {/* Accent decoration glowing circles */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-yellow-500/10 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl -z-10" />

          <div className="space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 rounded-full font-sans text-xs sm:text-sm font-semibold uppercase tracking-wider">
              ¡Empezá Hoy Mismo!
            </span>
            
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-wider text-white uppercase leading-tight">
              ¿Listo para escalar la logística de tu E-Commerce?
            </h2>
            
            <p className="font-sans text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Olvidate de la gestión de despachos diarios. Dejá la distribución de última milla en manos de expertos puntuales y concentrate exclusivamente en vender más y potenciar tu marca.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                type="button"
                onClick={handleWhatsappSupport}
                className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20ba59] text-white font-sans font-bold text-base uppercase py-4 px-8 rounded-xl flex items-center justify-center gap-2.5 shadow-lg active:scale-[0.98] cursor-pointer"
              >
                <Send size={18} />
                Contactar por WhatsApp
              </button>
              
              <button
                type="button"
                onClick={handleOpenCalc}
                className="w-full sm:w-auto bg-slate-900 border border-slate-700 hover:bg-slate-800 text-slate-100 font-sans font-bold text-base uppercase py-4 px-8 rounded-xl flex items-center justify-center gap-2.5 active:scale-[0.98] cursor-pointer"
              >
                <Calculator size={18} className="text-yellow-400" />
                Calcular Costos 2026
              </button>
            </div>

            {/* Three Pillar Points Row below buttons */}
            <div className="flex flex-wrap justify-center gap-6 pt-9 border-t border-white/5 mt-8 font-mono text-[11px] text-slate-400 uppercase">
              <span className="flex items-center gap-1.5 hover:text-yellow-400 transition-colors cursor-default">
                <ShieldCheck size={14} className="text-yellow-400" /> Confianza local comprobada
              </span>
              <span className="flex items-center gap-1.5 hover:text-yellow-400 transition-colors cursor-default">
                <Zap size={14} className="text-yellow-400" /> Innovación constante en última milla
              </span>
              <span className="flex items-center gap-1.5 hover:text-yellow-400 transition-colors cursor-default">
                <Globe size={14} className="text-yellow-400" /> Flota dedicada para máxima agilidad urbana
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
