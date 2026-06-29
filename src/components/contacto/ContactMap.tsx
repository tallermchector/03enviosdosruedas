import { MapPin, ExternalLink, Check, Navigation, Sparkles } from "lucide-react";
import { motion } from "motion/react";

interface ContactMapProps {
  copiedField: string | null;
  onCopy: (text: string, label: string) => void;
}

export default function ContactMap({ copiedField, onCopy }: ContactMapProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pb-8">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 60, damping: 15, delay: 0.1 }}
        className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
      >
        {/* Map Header with address bar */}
        <div className="p-6 sm:p-8 bg-slate-50 border-b border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 bg-yellow-500/10 text-yellow-700 text-[10px] font-mono tracking-widest uppercase font-black rounded-md">
                Punto Fijo MDP
              </span>
              <div className="flex items-center gap-1 text-egyptian-blue">
                <Sparkles size={12} className="animate-pulse" />
                <span className="text-xs font-bold uppercase font-sans">Ubicación Estratégica</span>
              </div>
            </div>
            <h3 className="font-display text-2xl font-black text-egyptian-blue uppercase tracking-wide">
              Nuestra Oficina Central
            </h3>
            <p className="text-sm text-slate-500 font-medium max-w-xl leading-relaxed">
              Ubicada estratégicamente en Mar del Plata para garantizar una distribución súper ágil y rápida del correo a toda la ciudad y zonas aledañas.
            </p>
          </div>
          
          {/* Action buttons with enhanced feedback */}
          <div className="flex flex-col sm:flex-row gap-2 shrink-0">
            <a 
              href="https://maps.google.com/?q=Friuli+1972,+Mar+del+Plata" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-5 py-3 bg-white border border-slate-200 hover:border-egyptian-blue hover:bg-egyptian-blue/5 text-slate-700 hover:text-egyptian-blue font-bold text-xs uppercase tracking-wider rounded-xl transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer font-sans shadow-sm"
            >
              <ExternalLink size={14} />
              Abrir Google Maps
            </a>
            <button
              onClick={() => onCopy("Friuli 1972, Mar del Plata", "copiado-mapa")}
              className="px-5 py-3 bg-egyptian-blue hover:bg-egyptian-blue/90 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer font-sans shadow-md hover:scale-[1.01] active:scale-[0.99]"
            >
              {copiedField === "copiado-mapa" ? <Check size={14} className="text-yellow-400" /> : <Navigation size={14} />}
              <span>{copiedField === "copiado-mapa" ? "¡Copiada!" : "Copiar Dirección"}</span>
            </button>
          </div>
        </div>

        {/* Actual Google Maps Iframe, perfectly styled with high contrast borders */}
        <div className="relative w-full h-[400px] sm:h-[480px] bg-slate-100 flex items-center justify-center overflow-hidden">
          <iframe 
            src="https://maps.google.com/maps?q=Friuli%201972,%20Mar%20del%20Plata&t=&z=16&ie=UTF8&iwloc=&output=embed" 
            className="absolute inset-0 w-full h-full border-0 grayscale-[10%] contrast-[105%] scroll-prevent"
            allowFullScreen={true}
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación Oficina Central Envíos DosRuedas"
            id="google-maps-iframe"
          />
          
          {/* Subtle design floating pill detail */}
          <div className="absolute bottom-4 left-4 bg-egyptian-blue text-white px-3 py-1.5 rounded-lg text-[11px] font-mono tracking-widest uppercase flex items-center gap-2 shadow-lg backdrop-blur-sm bg-opacity-95 border border-slate-700">
            <MapPin size={12} className="text-yellow-400" />
            <span>Friuli 1972 • Mar del Plata</span>
          </div>
        </div>
        
        {/* Strategic coverage foot bar */}
        <div className="p-4 bg-egyptian-blue text-slate-200 text-xs text-center font-mono tracking-widest border-t border-yellow-500/30 flex items-center justify-center gap-2 flex-wrap">
          <span className="w-2 h-2 rounded-full bg-yellow-500" />
          <span>COBERTURA ESTRATÉGICA REGIONAL: MDP • PUERTO • CONSTITUCIÓN • CERRITO • ALREDEDORES URBANOS</span>
        </div>
      </motion.div>
    </section>
  );
}
