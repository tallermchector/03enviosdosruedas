import { Quote, MessageSquare, Star } from "lucide-react";
import { TESTIMONIALS_DATA } from "../../data";

export default function Reviews() {
  return (
    <section id="resenas" className="relative py-20 bg-white border-b border-slate-200 z-10 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-500/10 text-blue-600 rounded-full font-sans text-xs sm:text-sm font-semibold tracking-wider uppercase">
            <MessageSquare size={14} /> Respaldo y Garantía
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-blue-900 tracking-wider uppercase leading-none">
            La Palabra de Nuestros Clientes
          </h2>
          <p className="font-sans text-base sm:text-lg text-slate-600 font-normal">
            El crecimiento de las marcas y pymes locales de Mar del Plata es nuestra mejor métrica de satisfacción.
          </p>
        </div>

        {/* 4-Card structured testimonials layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="relative bg-[#1E3A8A] hover:bg-[#1e3a8a]/95 text-white p-8 rounded-2xl border border-blue-900 flex flex-col justify-between overflow-hidden shadow-xl hover:-translate-y-1.5 hover:shadow-2xl transition-all duration-300 group cursor-default"
            >
              {/* Giant background quotation mark overlay */}
              <div className="absolute top-4 right-4 text-white/5 group-hover:text-yellow-400/10 transition-colors pointer-events-none select-none">
                <Quote size={100} fill="currentColor" />
              </div>

              <div className="space-y-6 relative z-10">
                {/* 5-Star indicator row */}
                <div className="flex items-center gap-1 text-yellow-400">
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                </div>

                {/* Italicized quotation content */}
                <p className="font-sans text-base sm:text-lg italic text-slate-100 leading-relaxed font-normal">
                  "{t.quote}"
                </p>
              </div>

              {/* Author name & title */}
              <div className="pt-6 border-t border-white/10 mt-6 flex items-center justify-between relative z-10">
                <div className="flex flex-col">
                  <span className="font-sans text-sm font-bold text-yellow-400 uppercase tracking-widest leading-none">
                    {t.author}
                  </span>
                  <span className="text-[11px] text-slate-300 uppercase tracking-wider mt-1.5 font-mono">
                    {t.role}
                  </span>
                </div>
                
                {/* Visual authenticity tag */}
                <Star size={16} className="text-yellow-400/60" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
