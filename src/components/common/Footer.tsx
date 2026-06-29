"use client";

import { MouseEvent } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useCalculator } from "@/src/context/CalculatorContext";
import { MapPin, Phone, Mail, Instagram, Facebook, ShieldCheck, Zap, Globe, Heart, ArrowUp, Send } from "lucide-react";

export default function Footer() {
  const pathname = usePathname();
  const router = useRouter();
  const { openCalculator } = useCalculator();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const handleScrollToSegment = (e: MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    if (pathname !== "/") {
      router.push(`/#${targetId}`);
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        const headerOffset = 90;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  };

  return (
    <footer id="contacto" className="relative bg-[#1E3A8A] text-slate-100 pt-20 pb-8 border-t-4 border-yellow-500 overflow-hidden">
      
      {/* Decorative background logo watermarks */}
      <div className="absolute -bottom-16 -right-16 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* 4-Column Footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-12">
          
          {/* Column 1: Brand details (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-[50px] h-[50px] bg-white rounded-lg overflow-hidden flex items-center justify-center p-1 border border-slate-200 shrink-0">
                <img 
                  src="/logo_envios.webp" 
                  alt="Envíos DosRuedas Logo" 
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-lg font-bold text-slate-100 uppercase tracking-widest leading-none">
                  Envíos DosRuedas
                </span>
                <span className="text-xs text-yellow-400 font-sans tracking-wide lowercase mt-0.5">
                  tu solución confiable
                </span>
              </div>
            </div>

            <p className="font-sans text-sm text-slate-400 leading-relaxed font-normal">
              La mensajería y distribución urbana líder en Mar del Plata. Impulsamos las ventas e-commerce Same-Day de pymes y negocios locales con la mayor tasa de puntualidad.
            </p>

            {/* Quick links */}
            <div className="flex items-center gap-2.5">
              <a 
                href="https://instagram.com/enviosdosruedas" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-900 border border-slate-800 hover:border-pink-500 hover:text-pink-500 rounded-xl flex items-center justify-center transition-all cursor-pointer"
                aria-label="Instagram de Envíos DosRuedas"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://www.facebook.com/enviosdosruedas" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-900 border border-slate-800 hover:border-blue-600 hover:text-blue-500 rounded-xl flex items-center justify-center transition-all cursor-pointer"
                aria-label="Facebook de Envíos DosRuedas"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Nosotros (2 cols) */}
          <div className="lg:col-span-2 space-y-5">
            <h4 className="font-display text-sm font-bold tracking-widest text-yellow-400 uppercase border-b border-slate-900 pb-2">
              Nosotros
            </h4>
            <ul className="space-y-3 font-sans text-sm text-slate-400">
              <li>
                <a 
                  href="#nosotros" 
                  onClick={(e) => handleScrollToSegment(e, "nosotros")}
                  className="hover:text-yellow-400 transition-colors block py-0.5"
                >
                  Nuestra Visión
                </a>
              </li>
              <li>
                <a 
                  href="#faq" 
                  onClick={(e) => handleScrollToSegment(e, "faq")}
                  className="hover:text-yellow-400 transition-colors block py-0.5"
                >
                  Preguntas Frecuentes
                </a>
              </li>
              <li>
                <a 
                  href="#redes" 
                  onClick={(e) => handleScrollToSegment(e, "redes")}
                  className="hover:text-yellow-400 transition-colors block py-0.5"
                >
                  Nuestras Redes
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => openCalculator()}
                  className="hover:text-yellow-400 font-bold transition-colors text-left block py-0.5 uppercase tracking-wide text-xs font-mono cursor-pointer"
                >
                  Calcular Tarifa
                </button>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="hover:text-yellow-400 text-left block py-0.5 transition-colors font-medium"
                >
                  Página de Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Servicios (3 cols) */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="font-display text-sm font-bold tracking-widest text-yellow-400 uppercase border-b border-slate-900 pb-2">
              Servicios
            </h4>
            <ul className="space-y-3 font-sans text-sm text-slate-400">
              <li>
                <a 
                  href="#servicios" 
                  onClick={(e) => handleScrollToSegment(e, "servicios")}
                  className="hover:text-yellow-400 transition-colors block py-0.5"
                >
                  Envíos Express
                </a>
              </li>
              <li>
                <a 
                  href="#servicios" 
                  onClick={(e) => handleScrollToSegment(e, "servicios")}
                  className="hover:text-yellow-400 transition-colors block py-0.5"
                >
                  Envíos LowCost
                </a>
              </li>
              <li>
                <a 
                  href="#servicios" 
                  onClick={(e) => handleScrollToSegment(e, "servicios")}
                  className="hover:text-yellow-400 transition-colors block py-0.5"
                >
                  Envíos Flex MercadoLibre
                </a>
              </li>
              <li>
                <a 
                  href="#servicios" 
                  onClick={(e) => handleScrollToSegment(e, "servicios")}
                  className="hover:text-yellow-400 transition-colors block py-0.5"
                >
                  Logística E-Commerce / 3PL
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contacto & Address Info (3 cols) */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="font-display text-sm font-bold tracking-widest text-yellow-400 uppercase border-b border-slate-900 pb-2">
              Contacto
            </h4>
            <div className="space-y-4 font-sans text-sm text-slate-400">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-yellow-400 shrink-0 mt-0.5" />
                <span>
                  Friuli 1972, Mar del Plata<br />
                  Provincia de Buenos Aires, AR
                </span>
              </div>
              <a 
                href="tel:+542236602699" 
                className="flex items-center gap-3 hover:text-yellow-400 transition-colors"
              >
                <Phone size={18} className="text-yellow-400 shrink-0" />
                <span className="font-mono font-medium">+54 9 223 660-2699</span>
              </a>
              <a 
                href="mailto:matiascejas@enviosdosruedas.com" 
                className="flex items-center gap-3 hover:text-yellow-400 transition-colors break-all"
              >
                <Mail size={18} className="text-yellow-400 shrink-0" />
                <span>matiascejas@enviosdosruedas.com</span>
              </a>
            </div>
          </div>

        </div>

        {/* Inline Trust Banners Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8 border-t border-b border-slate-900 text-center font-mono">
          <div className="p-3 bg-slate-900/40 border border-slate-900/80 rounded-xl flex flex-col sm:flex-row items-center justify-center gap-2">
            <ShieldCheck size={16} className="text-yellow-400" />
            <span className="text-[10px] sm:text-xs font-bold tracking-wider text-slate-300 uppercase">SEGURIDAD CERTIFICADA</span>
          </div>
          <div className="p-3 bg-slate-900/40 border border-slate-900/80 rounded-xl flex flex-col sm:flex-row items-center justify-center gap-2">
            <Zap size={16} className="text-yellow-400" />
            <span className="text-[10px] sm:text-xs font-bold tracking-wider text-slate-300 uppercase">VELOCIDAD MÁXIMA</span>
          </div>
          <div className="p-3 bg-slate-900/40 border border-slate-900/80 rounded-xl flex flex-col sm:flex-row items-center justify-center gap-2">
            <Globe size={16} className="text-yellow-400" />
            <span className="text-[10px] sm:text-xs font-bold tracking-wider text-slate-300 uppercase">COBERTURA DISTRITAL</span>
          </div>
          <div className="p-3 bg-slate-900/40 border border-slate-900/80 rounded-xl flex flex-col sm:flex-row items-center justify-center gap-2">
            <Send size={16} className="text-yellow-400" />
            <span className="text-[10px] sm:text-xs font-bold tracking-wider text-slate-300 uppercase">STATUS ONLINE</span>
          </div>
        </div>

        {/* Copyright & Scroll on Top control */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 text-xs font-mono text-slate-500">
          <p className="text-center sm:text-left">
            &copy; {new Date().getFullYear()} Envíos DosRuedas. Todos los derechos reservados. Mar del Plata, Argentina.
          </p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              Hecho con <Heart size={10} className="text-red-500 fill-red-500 animate-pulse" /> en MDP
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 bg-slate-900 border border-slate-800 hover:border-yellow-500 text-slate-400 hover:text-white rounded-lg transition-all flex items-center gap-1 cursor-pointer select-none"
              aria-label="Volver arriba"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>

      </div>

    </footer>
  );
}
