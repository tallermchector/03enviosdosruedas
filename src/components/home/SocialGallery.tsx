import { motion } from "motion/react";
import { Instagram, Facebook, Send, Heart, Eye } from "lucide-react";

const CALLOUT_POSTS = [
  { asset: "/delivery_background.jpeg", label: "Trabajo Diario - Embalaje" },
  { asset: "/abstracto_background.jpeg", label: "Tarifas Especiales Pymes" },
  { asset: "/hero_background.jpeg", label: "En Ruta - Seguridad Vial" },
  { asset: "/mapa_background.jpeg", label: "Comunidad DosRuedas MDP" },
  { asset: "/delivery_background.jpeg", label: "Despacho y Preparación" },
];

export default function SocialGallery() {
  
  // Replication of images to simulate infinite loop
  const duplicatedPosts = [...CALLOUT_POSTS, ...CALLOUT_POSTS, ...CALLOUT_POSTS];

  return (
    <section id="redes" className="relative bg-white pt-20 pb-0 overflow-hidden">
      
      {/* Brand CTA Call Connect */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 mb-16">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-pink-500/10 text-pink-600 rounded-full font-sans text-xs sm:text-sm font-semibold tracking-wider uppercase">
          <Heart size={14} fill="currentColor" /> Conecta con Nosotros
        </span>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-blue-900 tracking-wider uppercase leading-none">
          Sigue Nuestro Movimiento
        </h2>
        
        {/* Three highly stylized quick links for Social Networks */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto pt-4">
          
          {/* Instagram Button */}
          <a
            href="https://instagram.com/enviosdosruedas"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 bg-white border border-slate-200 rounded-2xl hover:border-pink-500 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-left group"
          >
            <div className="w-12 h-12 bg-pink-500/10 text-pink-600 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-pink-500 group-hover:text-white transition-colors duration-300">
              <Instagram size={24} />
            </div>
            <div>
              <h4 className="font-sans font-bold text-slate-800 text-sm tracking-wide">Instagram</h4>
              <p className="text-xs text-slate-400 mt-0.5 font-medium leading-none">@enviosdosruedas</p>
            </div>
          </a>

          {/* Facebook Button */}
          <a
            href="https://www.facebook.com/enviosdosruedas"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 bg-white border border-slate-200 rounded-2xl hover:border-blue-600 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-left group"
          >
            <div className="w-12 h-12 bg-blue-600/10 text-blue-600 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
              <Facebook size={24} />
            </div>
            <div>
              <h4 className="font-sans font-bold text-slate-800 text-sm tracking-wide">Facebook</h4>
              <p className="text-xs text-slate-400 mt-0.5 font-medium leading-none">Envios DosRuedas MDP</p>
            </div>
          </a>

          {/* WhatsApp Button */}
          <a
            href="https://api.whatsapp.com/send/?phone=5492236602699"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 bg-white border border-slate-200 rounded-2xl hover:border-emerald-500 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-left group"
          >
            <div className="w-12 h-12 bg-emerald-500/10 text-emerald-600 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300">
              <Send size={24} />
            </div>
            <div>
              <h4 className="font-sans font-bold text-slate-800 text-sm tracking-wide">WhatsApp</h4>
              <p className="text-xs text-slate-400 mt-0.5 font-medium leading-none">Atención Inmediata</p>
            </div>
          </a>

        </div>
      </div>

      {/* Looping Infinity Media Carousel Strip */}
      <div className="w-full bg-slate-950 py-10 relative overflow-hidden flex items-center">
        {/* Soft edge blur guards */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />

        {/* Scrolling track */}
        <div className="flex w-max gap-6 animate-scroll scroll-track-wrapper">
          {duplicatedPosts.map((post, index) => (
            <div
              key={`${post.asset}-${index}`}
              className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] rounded-xl overflow-hidden bg-slate-900 group shrink-0 shadow-lg border border-slate-900"
            >
              <img
                src={post.asset}
                alt={post.label}
                className="w-full h-full object-cover opacity-85 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 select-none pointer-events-none"
                referrerPolicy="no-referrer"
              />
              {/* Interactive post visual Overlay */}
              <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center space-y-3 p-4">
                <div className="w-12 h-12 bg-pink-500 text-white rounded-full flex items-center justify-center shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <Instagram size={22} />
                </div>
                <span className="font-sans font-bold text-white text-xs tracking-widest uppercase">
                  VER POSTEO
                </span>
                <p className="text-[11px] text-slate-300 font-mono tracking-wider max-w-[200px] text-center uppercase leading-none truncate-2-lines">
                  {post.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
