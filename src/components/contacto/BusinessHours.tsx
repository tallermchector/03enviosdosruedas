import { Clock, ShieldAlert } from "lucide-react";
import { motion } from "motion/react";

interface BusinessHoursProps {
  businessTimeStatus: {
    status: string;
    text: string;
  };
}

export default function BusinessHours({ businessTimeStatus }: BusinessHoursProps) {
  const containerVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        staggerChildren: 0.08
      }
    }
  } as any;

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
  } as any;

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm"
    >
      <div className="flex justify-between items-center border-b border-slate-100 pb-4 gap-3">
        <h3 className="font-display text-xl font-extrabold text-slate-900 uppercase tracking-wider flex items-center gap-2">
          <Clock size={20} className="text-egyptian-blue animate-pulse" /> Horarios
        </h3>
        
        {/* Dynamically calculated status badge with elegant styling */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-100 font-sans shadow-inner">
          <span className={`w-2.5 h-2.5 rounded-full inline-block ${
            businessTimeStatus.status === "open" ? "bg-emerald-500 animate-pulse" : "bg-rose-500"
          }`} />
          <span className={`text-[11px] font-mono font-bold uppercase tracking-widest ${
            businessTimeStatus.status === "open" ? "text-emerald-700" : "text-rose-700"
          }`}>
            {businessTimeStatus.status === "open" ? "Abierto" : "Cerrado"}
          </span>
        </div>
      </div>

      {/* Dynamic open details line with high quality aesthetic container */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="mt-4 p-3 bg-slate-50 border border-slate-200/60 rounded-xl flex items-start gap-2.5"
      >
        <ShieldAlert size={16} className="text-egyptian-blue shrink-0 mt-0.5" />
        <p className="text-xs text-slate-600 font-medium font-sans leading-normal">
          {businessTimeStatus.text}
        </p>
      </motion.div>

      <div className="mt-5 space-y-3 font-sans">
        {/* Monday - Friday */}
        <motion.div 
          variants={itemVariants}
          whileHover={{ x: 2 }}
          className="flex items-center justify-between text-sm py-2 px-1 rounded-lg hover:bg-slate-50 transition-colors border-b border-dashed border-slate-100"
        >
          <span className="font-semibold text-slate-700">Lunes a Viernes</span>
          <span className="font-mono font-bold text-slate-950 bg-slate-100 px-3 py-1 rounded-md text-xs border border-slate-200">
            08:00 - 18:00
          </span>
        </motion.div>

        {/* Saturdays */}
        <motion.div 
          variants={itemVariants}
          whileHover={{ x: 2 }}
          className="flex items-center justify-between text-sm py-2 px-1 rounded-lg hover:bg-slate-50 transition-colors border-b border-dashed border-slate-100"
        >
          <span className="font-semibold text-slate-700">Sábados</span>
          <span className="font-mono font-bold text-slate-900 bg-slate-100 px-3 py-1 rounded-md text-xs border border-slate-200">
            09:00 - 15:00
          </span>
        </motion.div>

        {/* Sundays */}
        <motion.div 
          variants={itemVariants}
          whileHover={{ x: 2 }}
          className="flex items-center justify-between text-sm py-2 px-1 rounded-lg hover:bg-slate-50 transition-colors"
        >
          <span className="font-semibold text-slate-400">Domingos</span>
          <span className="font-mono font-bold text-slate-400 bg-slate-50/50 border border-dotted border-slate-200 px-3 py-1 rounded-md text-xs">
            Cerrado
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
}

