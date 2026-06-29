import { motion } from "motion/react";
import { Check, Building2, ShoppingBag, Globe, ArrowUpRight } from "lucide-react";
import { CORP_PLANS_DATA } from "../../data";

export default function CorporateSegment() {
  
  const handleRedirect = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <section className="relative py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-500/10 text-blue-600 rounded-full font-sans text-xs sm:text-sm font-semibold tracking-wider uppercase">
            <Building2 size={14} /> Soluciones Corporativas y PYME
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-blue-900 tracking-wider uppercase leading-none">
            Potenciá tu Logística con DosRuedas
          </h2>
          <p className="font-sans text-base sm:text-lg text-slate-600 font-normal">
            Ofrecemos un despliegue de alta precisión para empresas locales que necesitan una flota ágil y eficiente para entregas Same-Day.
          </p>

          <div className="flex items-center justify-center gap-6 text-sm font-semibold font-mono tracking-wider pt-3">
            <span className="flex items-center gap-2 text-slate-700">
              <strong className="text-blue-600 text-2xl font-display leading-none">500+</strong> Empresas locales activas
            </span>
            <span className="w-1.5 h-1.5 bg-slate-300 rounded-full" />
            <span className="flex items-center gap-2 text-slate-700">
              <strong className="text-blue-600 text-2xl font-display leading-none">24/7</strong> Operativa y soporte premium
            </span>
          </div>
        </div>

        {/* 3-Column Corporate Plan Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
          {CORP_PLANS_DATA.map((plan) => (
            <motion.div
              key={plan.id}
              whileHover={{ y: -8 }}
              className="bg-white border border-slate-200 rounded-2xl shadow-md overflow-hidden flex flex-col justify-between group h-full"
            >
              <div>
                {/* Visual Card Image Framed Banner with float overlay icon */}
                <div className="relative h-56 bg-slate-900 overflow-hidden select-none">
                  <img 
                    src={plan.asset} 
                    alt={plan.title}
                    className="w-full h-full object-cover opacity-85 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {/* Floating asset identity indicator */}
                  <div className="absolute bottom-4 right-4 w-12 h-12 bg-yellow-400 text-slate-950 rounded-xl flex items-center justify-center shadow-lg group-hover:bg-slate-950 group-hover:text-yellow-400 transition-colors">
                    {plan.icon === "Briefcase" && <Building2 size={24} />}
                    {plan.icon === "ShoppingBag" && <ShoppingBag size={24} />}
                    {plan.icon === "Globe" && <Globe size={24} />}
                  </div>
                </div>

                {/* Content description list */}
                <div className="p-6 sm:p-8 space-y-5">
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 uppercase tracking-widest leading-none">
                    {plan.title}
                  </h3>
                  
                  <ul className="space-y-3 font-sans text-sm text-slate-600">
                    {plan.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 hover:translate-x-1.5 transition-transform duration-200">
                        <Check size={16} className="text-blue-500 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action slide-up button overlay */}
              <div className="p-6 border-t border-slate-100 bg-slate-50/50">
                <button
                  type="button"
                  onClick={() => handleRedirect(plan.link)}
                  className="w-full bg-slate-900 border border-slate-800 text-slate-100 hover:bg-slate-800 active:bg-slate-900 py-3.5 rounded-xl font-display text-base tracking-widest font-bold uppercase transition-colors flex items-center justify-center gap-2 group cursor-pointer"
                >
                  Conocer Más
                  <ArrowUpRight size={16} className="text-slate-400 group-hover:text-yellow-400 transform group-hover:translate-x-1 duration-200" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
