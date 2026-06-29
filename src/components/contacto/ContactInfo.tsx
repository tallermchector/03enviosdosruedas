import { motion } from "motion/react";
import { MapPin, MessageSquare, Phone, Mail, Check, Copy, ExternalLink, ArrowRight } from "lucide-react";

interface ContactInfoProps {
  copiedField: string | null;
  onCopy: (text: string, label: string) => void;
}

export default function ContactInfo({ copiedField, onCopy }: ContactInfoProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  } as any;

  const itemVariants = {
    hidden: { opacity: 0, x: -15 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { type: "spring", stiffness: 80, damping: 12 } 
    }
  } as any;

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6"
    >
      <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
        <div className="w-1.5 h-6 bg-yellow-500 rounded-full" />
        <h3 className="font-display text-xl font-extrabold text-slate-900 uppercase tracking-wider">
          Información de Enlace
        </h3>
      </div>
      
      <div className="space-y-6">
        
        {/* Address Item */}
        <motion.div 
          variants={itemVariants}
          whileHover={{ y: -2 }}
          className="flex gap-4 group p-3 rounded-xl hover:bg-slate-50 transition-colors duration-200"
        >
          <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0 border border-blue-100 group-hover:scale-110 transition-transform duration-300 shadow-sm shadow-blue-500/5">
            <MapPin size={22} />
          </div>
          <div className="flex-1 space-y-1">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-widest block font-bold">Dirección Central</span>
            <span className="text-sm sm:text-base text-slate-800 font-bold block leading-tight">
              Friuli 1972, Mar del Plata
            </span>
            <div className="flex items-center gap-4 mt-1.5 label-section">
              <button 
                onClick={() => onCopy("Friuli 1972, Mar del Plata", "dirección")}
                className="text-xs text-slate-500 hover:text-egyptian-blue hover:underline flex items-center gap-1 transition-colors z-10 cursor-pointer font-medium"
                title="Copiar Dirección"
              >
                {copiedField === "dirección" ? <Check size={13} className="text-emerald-600" /> : <Copy size={13} />}
                <span>{copiedField === "dirección" ? "¡Copiado!" : "Copiar dirección"}</span>
              </button>
              <a 
                href="https://maps.google.com/?q=Friuli+1972,+Mar+del+Plata" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-xs text-blue-600 hover:text-blue-800 hover:underline flex items-center gap-1 transition-colors font-semibold cursor-pointer"
              >
                <ExternalLink size={13} />
                Ver Mapa
              </a>
            </div>
          </div>
        </motion.div>

        {/* WhatsApp Card Item (Highlighted Premium Feature) */}
        <motion.div 
          variants={itemVariants}
          whileHover={{ y: -2 }}
          className="flex gap-4 group p-4 rounded-xl bg-emerald-50/50 border border-emerald-100/60 hover:bg-emerald-50 transition-all duration-200 shadow-sm relative overflow-hidden"
        >
          {/* Subtle accent highlight bar */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500" />
          
          <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center shrink-0 border border-emerald-200 group-hover:scale-110 transition-transform duration-300 shadow-sm shadow-emerald-500/10">
            <MessageSquare size={22} />
          </div>
          <div className="flex-1 space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-emerald-700 uppercase tracking-widest block font-bold">WhatsApp Directo</span>
              <span className="px-1.5 py-0.5 bg-emerald-100 text-emerald-800 text-[9px] uppercase font-bold rounded tracking-wide animate-pulse">
                Respuesta Inmediata
              </span>
            </div>
            
            <a 
              href="https://wa.me/5492236602699" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-base sm:text-lg text-slate-900 font-extrabold flex items-center gap-1 hover:text-emerald-600 transition-colors tracking-wide"
            >
              <span>+54 9 223 660-2699</span>
              <ArrowRight size={14} className="text-emerald-500 group-hover:translate-x-1 transition-transform" />
            </a>
            <p className="text-xs text-slate-500 font-normal leading-relaxed">
              Preferido para cotizar fletes rápidos, consultas de mensajería y ruteos corporativos en Mar del Plata.
            </p>
          </div>
        </motion.div>

        {/* Telephone Item */}
        <motion.div 
          variants={itemVariants}
          whileHover={{ y: -2 }}
          className="flex gap-4 group p-3 rounded-xl hover:bg-slate-50 transition-colors duration-200"
        >
          <div className="w-12 h-12 bg-yellow-50 text-yellow-700 rounded-2xl flex items-center justify-center shrink-0 border border-yellow-100 group-hover:scale-110 transition-transform duration-300 shadow-sm">
            <Phone size={22} className="rotate-3" />
          </div>
          <div className="flex-1 space-y-1">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-widest block font-bold">Teléfono de Oficina</span>
            <a 
              href="tel:+542236602699" 
              className="text-base text-slate-900 font-bold block hover:text-yellow-600 transition-colors tracking-wide"
            >
              +54 223 660-2699
            </a>
            <p className="text-xs text-slate-500 font-normal">Contáctate de lunes a sábados en horario laboral.</p>
          </div>
        </motion.div>

        {/* Email Item */}
        <motion.div 
          variants={itemVariants}
          whileHover={{ y: -2 }}
          className="flex gap-4 group p-3 rounded-xl hover:bg-slate-50 transition-colors duration-200"
        >
          <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center shrink-0 border border-purple-100 group-hover:scale-110 transition-transform duration-300 shadow-sm">
            <Mail size={22} />
          </div>
          <div className="flex-1 space-y-1">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-widest block font-bold">Canal de E-mail</span>
            <a 
              href="mailto:matiascejas@enviosdosruedas.com" 
              className="text-sm sm:text-base text-slate-900 font-bold block hover:text-purple-600 transition-colors break-all"
            >
              matiascejas@enviosdosruedas.com
            </a>
            <p className="text-xs text-slate-500 font-normal">Para propuestas a largo plazo y facturación mensual.</p>
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
}
