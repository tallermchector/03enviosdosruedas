import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Clock, ShieldCheck, Play, X, UserCheck, ShieldAlert, Award, ChevronRight, Check } from "lucide-react";

export default function Vision() {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => setModalOpen(!modalOpen);

  return (
    <section id="nosotros" className="relative bg-white py-20 border-b border-slate-200 z-10 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)]">
      {/* Dynamic grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text and Metrics Columns (7 cols on large desktop) */}
          <div className="col-span-1 lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-500/10 text-blue-600 rounded-full font-sans text-xs sm:text-sm font-semibold tracking-wider uppercase">
                <Award size={14} /> Partner Logístico Especializado
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-wider uppercase leading-none">
                Nuestra Visión Logística
              </h2>
              <p className="font-sans text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-xl">
                Transformamos la distribución urbana en una ventaja estratégica para tu negocio. Acompañamos tu crecimiento con tarifas transparentes y compromiso diario.
              </p>
            </div>

            {/* Vision Features split layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex gap-4 p-5 bg-white border border-slate-200/80 rounded-xl hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-yellow-500/10 text-yellow-600 rounded-lg flex items-center justify-center shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-display text-lg font-bold text-slate-900 uppercase tracking-widest leading-normal">
                    Entregas a Tiempo
                  </h4>
                  <p className="text-sm text-slate-500 mt-1 font-sans">
                    Puntualidad rigurosa en cada cuadra. Gestionamos franjas horarias adaptadas a agendas exigentes.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-5 bg-white border border-slate-200/80 rounded-xl hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-500/10 text-blue-600 rounded-lg flex items-center justify-center shrink-0">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="font-display text-lg font-bold text-slate-900 uppercase tracking-widest leading-normal">
                    Envíos Seguros
                  </h4>
                  <p className="text-sm text-slate-500 mt-1 font-sans">
                    Protocolos estrictos de resguardo e inspección de bultos con comprobante digital certificado.
                  </p>
                </div>
              </div>
            </div>

            {/* Metrics Dashboard */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-slate-200">
              <div className="space-y-1">
                <div className="font-display text-3xl font-extrabold text-blue-600 leading-none">
                  +5.000
                </div>
                <div className="text-sm font-semibold text-slate-800 uppercase tracking-wider">Clientes Locales</div>
                <p className="text-[11px] text-slate-500 leading-normal">Confianza local de comercios, escribanías y emprendedores.</p>
              </div>

              <div className="space-y-1">
                <div className="font-display text-3xl font-extrabold text-blue-600 leading-none">
                  7 Años
                </div>
                <div className="text-sm font-semibold text-slate-800 uppercase tracking-wider">De Optimización</div>
                <p className="text-[11px] text-slate-500 leading-normal">Siete años conectando compradores e-commerce de última milla.</p>
              </div>

              <div className="space-y-1">
                <div className="font-display text-3xl font-extrabold text-blue-600 leading-none">
                  Flota Propia
                </div>
                <div className="text-sm font-semibold text-slate-800 uppercase tracking-wider">Especializada</div>
                <p className="text-[11px] text-slate-500 leading-normal">Motocicletas exclusivas equipadas para agilidad e impacto.</p>
              </div>
            </div>
          </div>

          {/* Right visual framed route map block (5 cols) */}
          <div className="col-span-1 lg:col-span-5 relative">
            <div className="relative p-3 sm:p-5 bg-white border-2 border-slate-900 rounded-2xl shadow-[10px_10px_0px_#1e3a8a] select-none hover:shadow-[15px_15px_0px_#1e3a8a] hover:-translate-y-1 hover:-translate-x-1 transition-all duration-300">
              {/* Route Map Image Asset */}
              <img 
                src="/mapa_background.jpeg" 
                alt="Mapa Logístico Mar del Plata Envíos DosRuedas" 
                className="w-full h-[320px] sm:h-[420px] object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-500"
                referrerPolicy="no-referrer"
              />

              {/* Glowing play overlay with visual actions */}
              <div className="absolute inset-0 bg-slate-950/25 rounded-2xl flex items-center justify-center transition-colors hover:bg-slate-950/15" />

              <button
                type="button"
                onClick={toggleModal}
                className="absolute left-6 bottom-6 right-6 bg-slate-900 text-white rounded-xl py-4 px-5 shadow-xl border border-slate-700/50 flex items-center justify-between group cursor-pointer"
                id="btn-conocenos"
              >
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 bg-yellow-500 text-slate-950 rounded-full flex items-center justify-center font-bold text-lg shadow-lg animate-pulse shrink-0">
                    <Play size={18} fill="#020617" className="ml-0.5" />
                  </span>
                  <div className="text-left leading-none">
                    <span className="text-xs text-slate-400 font-mono tracking-wider block">INFORMACIÓN DIRECTA</span>
                    <span className="font-display text-sm font-bold tracking-widest text-slate-100 uppercase">Ver video corporativo</span>
                  </div>
                </div>
                <ChevronRight size={18} className="text-yellow-400 transform group-hover:translate-x-1.5 transition-transform" />
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Brand Profile Details Dialogue Modal */}
      <AnimatePresence>
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleModal}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
              id="vision-modal-overlay"
            />

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden text-slate-100 z-10"
              id="vision-modal-content"
            >
              {/* Close Button */}
              <button 
                onClick={toggleModal}
                className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors p-2 rounded-full hover:bg-slate-800/85 z-20"
                aria-label="Cerrar modal"
              >
                <X size={20} />
              </button>

              <div className="p-6 sm:p-8 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-yellow-500/10 text-yellow-500 rounded-lg">
                    <UserCheck size={24} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl font-bold tracking-widest text-white uppercase leading-none">Conocé Envíos DosRuedas</h3>
                    <p className="text-[10px] sm:text-xs text-slate-400 tracking-widest font-mono uppercase mt-1">NUESTRA TRAYECTORIA EN MAR DEL PLATA</p>
                  </div>
                </div>

                {/* Styled informational copy about Envíos DosRuedas */}
                <div className="space-y-4 font-sans text-sm text-slate-300 leading-relaxed overflow-y-auto max-h-[50vh] pr-2">
                  <h4 className="font-bold text-yellow-400 uppercase text-xs tracking-wider font-mono">EL DESAFÍO DE LA ÚLTIMA MILLA</h4>
                  <p>
                    Envíos DosRuedas nació en Mar del Plata con un propósito claro: resolver la incertidumbre de la distribución comercial en nuestra ciudad. Sabemos que detrás de cada venta e-commerce hay un cliente ansioso por recibir su compra y un emprendedor que necesita cuidar su reputación.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
                    <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/40">
                      <div className="font-bold text-yellow-400 text-xs uppercase flex items-center gap-2 mb-1.5 font-mono">
                        <Check size={14} className="text-emerald-400" />
                        PUNTUALIDAD MARPLATENSE
                      </div>
                      <p className="text-xs text-slate-300">Coordinamos recorridos inteligentes que sortean congestiones en horas pico en zonas como el Centro, Güemes o el Puerto.</p>
                    </div>
                    <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/40">
                      <div className="font-bold text-yellow-400 text-xs uppercase flex items-center gap-2 mb-1.5 font-mono">
                        <Check size={14} className="text-emerald-400" />
                        CONFIABILIDAD ABSOLUTA
                      </div>
                      <p className="text-xs text-slate-300">Nos encargamos del manejo de dinero en efectivo de tus ventas, rendimos reembolsos en el acto o realizamos depósitos bancarios de custodia sin demoras.</p>
                    </div>
                  </div>

                  <h4 className="font-bold text-yellow-400 uppercase text-xs tracking-wider font-mono">LA SOLUCIÓN PARA MERCADOLIBRE FLEX</h4>
                  <p>
                    Somos el soporte logístico especializado para las marcas líderes de MDP que venden en MercadoLibre. Entregamos el 100% de la carga del día por la tarde para que tu indicador se mantenga en verde. Con geolocalización, firma digital de quien recibe y aviso automatizado por WhatsApp.
                  </p>
                  
                  <div className="p-4 bg-blue-500/10 rounded-xl border border-blue-500/10 flex gap-3 text-xs leading-normal">
                    <ShieldAlert size={28} className="text-blue-400 shrink-0" />
                    <span><strong>Garantía de Entrega:</strong> Cumplimos estrictamente las directrices Same-Day establecidas para Mar del Plata, garantizando que todos los despachos lleguen a destino sin demoras estacionales ni suspensiones inesperadas.</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 flex justify-end">
                  <button 
                    onClick={toggleModal}
                    className="bg-yellow-500 hover:bg-yellow-400 text-slate-950 font-bold px-5 py-2.5 rounded-xl uppercase text-xs tracking-widest transition-colors cursor-pointer"
                  >
                    Entendido, Cerrar
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
