import { Instagram, Facebook, Phone, Mail, MessageSquare, Send } from "lucide-react";

export default function NuestrasRedesPage() {
  return (
    <div className="bg-slate-50 min-h-screen pt-12 pb-24">
      {/* Visual Hero Header */}
      <section className="bg-gradient-blue text-white py-16 sm:py-24 border-b-4 border-yellow-500 overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_70%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-yellow-500/10 border border-yellow-500/30 text-yellow-500 rounded-full font-mono text-xs font-bold tracking-widest uppercase">
            CONECTÁ CON NOSOTROS
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight">
            Nuestras <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-300">Redes</span>
          </h1>
          <p className="font-sans text-base sm:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed">
            Estamos disponibles en canales virtuales múltiples. Seguinos y comunicate al instante con atención logística personalizada.
          </p>
        </div>
      </section>

      {/* Grid of connects */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          
          {/* Instagram */}
          <a purchase-details="" href="https://instagram.com/enviosdosruedas" target="_blank" rel="noopener noreferrer" className="bg-white border-2 border-slate-200 hover:border-pink-500 rounded-2xl p-8 flex flex-col justify-between hover:-translate-y-2 transition-all shadow-md hover:shadow-xl group cursor-pointer">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-pink-500/10 text-pink-500 rounded-xl flex items-center justify-center shrink-0">
                <Instagram size={24} className="group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="font-display text-lg font-bold text-slate-900 uppercase tracking-widest">Instagram</h3>
              <p className="font-sans text-sm text-slate-500 leading-relaxed">
                Seguinos para enterarte de novedades, tips logísticos para tiendas online, fotos diarias de la flota urbana y avisos de servicio en el acto.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex justify-between items-center text-pink-500 text-xs font-mono font-bold uppercase tracking-wider">
              <span>Visitar Perfil</span>
              <Send size={14} />
            </div>
          </a>

          {/* Facebook */}
          <a href="https://facebook.com/enviosdosruedas" target="_blank" rel="noopener noreferrer" className="bg-white border-2 border-slate-200 hover:border-blue-600 rounded-2xl p-8 flex flex-col justify-between hover:-translate-y-2 transition-all shadow-md hover:shadow-xl group cursor-pointer">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-blue-600/10 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                <Facebook size={24} className="group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="font-display text-lg font-bold text-slate-900 uppercase tracking-widest">Facebook</h3>
              <p className="font-sans text-sm text-slate-500 leading-relaxed">
                Nuestra página institucional. Enterate de las novedades corporativas, calificaciones de clientes satisfechos marplatenses y contactanos directo.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex justify-between items-center text-blue-600 text-xs font-mono font-bold uppercase tracking-wider">
              <span>Visitar Página</span>
              <Send size={14} />
            </div>
          </a>

          {/* WhatsApp Support */}
          <a href="https://wa.me/5492236602699" target="_blank" rel="noopener noreferrer" className="bg-white border-2 border-slate-200 hover:border-emerald-500 rounded-2xl p-8 flex flex-col justify-between hover:-translate-y-2 transition-all shadow-md hover:shadow-xl group cursor-pointer">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-emerald-500/10 text-emerald-500 rounded-xl flex items-center justify-center shrink-0">
                <MessageSquare size={24} className="group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="font-display text-lg font-bold text-slate-900 uppercase tracking-widest">WhatsApp Directo</h3>
              <p className="font-sans text-sm text-slate-500 leading-relaxed">
                Coordiná tus retiros, consultá disponibilidades, gestioná precios especiales para cuentas pyme y chateá con un asistente humano en segundos.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex justify-between items-center text-emerald-500 text-xs font-mono font-bold uppercase tracking-wider">
              <span>Chatear Ahora</span>
              <Send size={14} />
            </div>
          </a>

          {/* Phone Line */}
          <a href="tel:+5492236602699" className="bg-white border-2 border-slate-200 hover:border-yellow-500 rounded-2xl p-8 flex flex-col justify-between hover:-translate-y-2 transition-all shadow-md hover:shadow-xl group cursor-pointer">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-yellow-500/10 text-yellow-600 rounded-xl flex items-center justify-center shrink-0">
                <Phone size={24} className="group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="font-display text-lg font-bold text-slate-900 uppercase tracking-widest">Llamada Telefónica</h3>
              <p className="font-sans text-sm text-slate-500 leading-relaxed">
                Contactanos telefónicamente directo para urgencias extremas, pedidos corporativos complejos u operaciones en el acto sin vueltas.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex justify-between items-center text-yellow-605 text-xs font-mono font-bold uppercase tracking-wider">
              <span>Llamar Directo</span>
              <Send size={14} />
            </div>
          </a>

        </div>
      </section>
    </div>
  );
}
