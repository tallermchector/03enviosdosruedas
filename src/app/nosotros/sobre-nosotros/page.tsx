import { Users, Truck, Sparkles, MapPin } from "lucide-react";

export default function SobreNosotrosPage() {
  return (
    <div className="bg-slate-50 min-h-screen pt-12 pb-24">
      {/* Decorative Hero Area */}
      <section className="bg-gradient-blue text-white py-16 sm:py-24 border-b-4 border-yellow-500 overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_70%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 rounded-full font-mono text-xs font-bold tracking-widest uppercase">
            DESDE MAR DEL PLATA
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight">
            Sobre <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-300">Nosotros</span>
          </h1>
          <p className="font-sans text-base sm:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed">
            La flota de mensajería urbana más confiable y veloz de la costa. Llevamos tus productos a cada rincón de la ciudad.
          </p>
        </div>
      </section>

      {/* Main Narrative specs */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-blue-900 uppercase tracking-wide leading-tight">
              Nuestra Historia, Valores y Compromiso Local
            </h2>
            <p className="text-slate-600 leading-relaxed font-sans text-sm sm:text-base">
              Fundada en Mar del Plata, nació con la convicción de resolver las ineficiencias de la entrega de última milla para pymes y vendedores electrónicos en la ciudad. Hoy, consolidamos una de las flotas más robustas, optimizadas tecnológicamente para realizar envíos sustentables de alta velocidad.
            </p>
            <p className="text-slate-600 leading-relaxed font-sans text-sm sm:text-base">
              Creemos firmemente en la cercanía, la puntualidad estricta y el trato personalizado con cada uno de los clientes que confían sus ventas digitales en nuestras manos.
            </p>
          </div>

          <div className="space-y-6">
            <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-md flex gap-4">
              <div className="p-3 bg-yellow-400/10 text-yellow-600 rounded-xl shrink-0 h-12 w-12 flex items-center justify-center">
                <Users size={24} />
              </div>
              <div className="space-y-1">
                <h3 className="font-display font-bold text-slate-900 uppercase text-sm tracking-widest">Equipo Calificado</h3>
                <p className="text-xs text-slate-500 font-sans leading-relaxed">Conductores experimentados con absoluto conocimiento de los cuadrantes y atajos viales de Mar del Plata para asegurar puntualidad.</p>
              </div>
            </div>

            <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-md flex gap-4">
              <div className="p-3 bg-blue-500/10 text-blue-600 rounded-xl shrink-0 h-12 w-12 flex items-center justify-center">
                <Truck size={24} />
              </div>
              <div className="space-y-1">
                <h3 className="font-display font-bold text-slate-900 uppercase text-sm tracking-widest">Flota Dedicada</h3>
                <p className="text-xs text-slate-500 font-sans leading-relaxed">Vehículos y motocicletas con mantenimiento riguroso para obviar imprevistos mecánicos y mantener flujos ágiles.</p>
              </div>
            </div>

            <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-md flex gap-4">
              <div className="p-3 bg-emerald-500/10 text-emerald-600 rounded-xl shrink-0 h-12 w-12 flex items-center justify-center">
                <Sparkles size={24} />
              </div>
              <div className="space-y-1">
                <h3 className="font-display font-bold text-slate-900 uppercase text-sm tracking-widest">Innovación Constante</h3>
                <p className="text-xs text-slate-500 font-sans leading-relaxed">Ruteos computados que reducen la huella de carbono y minimizan tiempos de espera del destinatario final.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
