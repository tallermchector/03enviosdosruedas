import { motion } from "motion/react";
import { ArrowRight, MapPin, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";

interface ContactHeroProps {
  onBackToHome?: () => void;
}

export default function ContactHero({ onBackToHome }: ContactHeroProps) {
  const router = useRouter();
  const handleBack = onBackToHome || (() => {
    router.push("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Container animation configuration
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      }
    }
  } as any;

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 100, damping: 15 } 
    }
  } as any;

  return (
    <section className="relative bg-egyptian-blue border-b-8 border-yellow-500 overflow-hidden text-white py-20 sm:py-28">
      {/* Dynamic Animated Background Mesh & Gradients */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.3),transparent_50%)]" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(30,58,138,0.45),transparent_40%)]" />
      
      {/* Interactive Floating Logistics Routes (Simulated with Animated Vector Paths) */}
      <svg className="absolute inset-0 w-full h-full opacity-15 pointer-events-none z-0" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="glow-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FBBF24" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
        </defs>
        <motion.path 
          d="M-100,120 Q200,60 500,240 T1100,100 T1700,320" 
          fill="none" 
          stroke="url(#glow-grad)" 
          strokeWidth="2"
          initial={{ strokeDasharray: "10 5", strokeDashoffset: 0 }}
          animate={{ strokeDashoffset: -120 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        <motion.path 
          d="M0,350 Q400,200 900,420 T1800,280" 
          fill="none" 
          stroke="url(#glow-grad)" 
          strokeWidth="1.5"
          initial={{ strokeDasharray: "5 15", strokeDashoffset: 0 }}
          animate={{ strokeDashoffset: 100 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
        {/* Animated pulse delivery nodes */}
        <motion.circle 
          cx="300" cy="140" r="5" 
          fill="#FBBF24" 
          animate={{ r: [5, 10, 5], opacity: [0.7, 1, 0.7] }} 
          transition={{ duration: 3, repeat: Infinity }} 
        />
        <motion.circle 
          cx="820" cy="380" r="6" 
          fill="#3B82F6" 
          animate={{ r: [6, 12, 6], opacity: [0.6, 1, 0.6] }} 
          transition={{ duration: 4, repeat: Infinity, delay: 1 }} 
        />
      </svg>
      
      {/* Floating abstract decorative objects to emphasize premium aesthetic */}
      <div className="absolute top-1/4 right-1/6 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 left-10 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl pointer-events-none" />
      
      {/* Dotted Grid Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {/* Tagline/Location badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/60 border border-slate-700/60 text-yellow-400 text-xs font-mono tracking-widest uppercase shadow-md backdrop-blur-sm"
          >
            <MapPin size={13} className="text-yellow-400 animate-bounce" />
            <span>Mesa de Enlace Mar del Plata</span>
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse ml-1" />
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="font-display text-4xl sm:text-6xl md:text-7xl font-black tracking-tight uppercase leading-none"
            id="contacto-title"
          >
            Ponte en <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500">Contacto</span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="max-w-2xl mx-auto text-base sm:text-xl text-slate-200 font-sans font-normal leading-relaxed text-center"
          >
            Estamos para ayudarte. Ponete en contacto con nuestro equipo de atención al cliente para coordinar envíos, recibir presupuestos a medida o resolver dudas al instante.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4"
          >
            <button
              onClick={handleBack}
              className="w-full sm:w-auto px-8 py-4 bg-slate-900/80 hover:bg-slate-900 text-slate-100 hover:text-white border border-slate-700/80 hover:border-slate-500 rounded-xl text-sm font-bold tracking-wider uppercase transition-all duration-300 inline-flex items-center justify-center gap-2.5 cursor-pointer shadow-lg active:scale-95 hover:shadow-slate-900/30"
            >
              Volver al Inicio
            </button>
            <a
              href="https://wa.me/5492236602699"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-400 hover:to-amber-400 text-egyptian-blue font-extrabold rounded-xl text-sm tracking-wider uppercase transition-all duration-300 shadow-xl shadow-yellow-500/20 inline-flex items-center justify-center gap-2.5 active:scale-95 group hover:scale-[1.02]"
            >
              <span>WhatsApp Directo</span> 
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>

          {/* Quick trust metrics row */}
          <motion.div 
            variants={itemVariants}
            className="pt-8 grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-8 max-w-lg mx-auto border-t border-slate-800/80 text-left"
          >
            <div className="flex items-center gap-2">
              <Sparkles size={16} className="text-yellow-400" />
              <div>
                <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">Atención</p>
                <p className="text-sm font-semibold text-slate-100">Personalizada</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles size={16} className="text-yellow-400" />
              <div>
                <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">Flota</p>
                <p className="text-sm font-semibold text-slate-100">Inmediata</p>
              </div>
            </div>
            <div className="col-span-2 sm:col-span-1 flex items-center justify-center sm:justify-start gap-2">
              <Sparkles size={16} className="text-yellow-400" />
              <div>
                <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">Soporte</p>
                <p className="text-sm font-semibold text-slate-100">PyMEs y Emprendimientos</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

