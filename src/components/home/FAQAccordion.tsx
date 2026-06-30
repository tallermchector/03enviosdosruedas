import { useState } from "react";
import { ChevronDown, HelpCircle, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { FAQ_DATA } from "../../data";

export default function FAQAccordion() {
  const [openId, setOpenId] = useState<string | null>(FAQ_DATA[0].id);

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="relative bg-white py-20 border-b border-slate-200 z-10 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-500/10 text-blue-600 rounded-full font-sans text-xs sm:text-sm font-semibold tracking-wider uppercase">
            <HelpCircle size={14} /> Resolviendo Inquietudes
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-blue-900 tracking-wider uppercase leading-none">
            Preguntas Frecuentes
          </h2>
          <p className="font-sans text-base sm:text-lg text-slate-500 font-normal">
            Respuestas directas sobre el circuito de envíos, cobros, zonas y el funcionamiento especializado para MercadoLibre Flex.
          </p>
        </div>

        {/* Accordion Component List */}
        <div className="space-y-4">
          {FAQ_DATA.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div 
                key={item.id}
                className={`border rounded-xl transition-all duration-300 ${
                  isOpen 
                    ? "bg-slate-50/80 border-blue-500 shadow-md shadow-blue-500/5" 
                    : "bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/30"
                }`}
              >
                {/* Accordion Toggler Trigger Accord */}
                <button
                  type="button"
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full flex items-center justify-between p-5 text-left font-sans text-base sm:text-lg font-bold text-slate-900 focus:outline-none cursor-pointer group"
                >
                  <span className="flex items-center gap-3.5 pr-4">
                    <MessageSquare size={18} className={`shrink-0 transition-colors ${isOpen ? "text-blue-500" : "text-slate-400 group-hover:text-slate-600"}`} />
                    {item.question}
                  </span>
                  <ChevronDown 
                    size={18} 
                    className={`text-slate-400 shrink-0 transform transition-transform duration-300 ${isOpen ? "rotate-180 text-blue-500" : "group-hover:text-slate-600"}`} 
                  />
                </button>

                {/* Animated content box using motion-react */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="p-5 pt-0 border-t border-slate-200/60 font-sans text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
