"use client";

import { useState, useEffect, MouseEvent } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useCalculator } from "@/src/context/CalculatorContext";
import { 
  Phone, 
  Calculator, 
  ChevronDown, 
  Menu, 
  X, 
  House, 
  Mail,
  Users,
  HelpCircle,
  Award,
  Zap,
  Clock,
  Layers,
  ShieldCheck
} from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const { openCalculator } = useCalculator();
  
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScrollEvent = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScrollEvent);
    return () => window.removeEventListener("scroll", handleScrollEvent);
  }, []);

  const handleHomeClick = (e: MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    router.push("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScrollClick = (e: MouseEvent, targetId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    
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

  const handleServiceClick = (e: MouseEvent, serviceId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    
    if (pathname !== "/") {
      router.push("/");
    }
    
    setTimeout(() => {
      const servicesSection = document.getElementById("servicios");
      if (servicesSection) {
        const headerOffset = 90;
        const elementPosition = servicesSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
      setTimeout(() => {
        openCalculator(serviceId);
      }, 450);
    }, pathname !== "/" ? 350 : 0);
  };

  const handleContactoClick = (e: MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    router.push("/contacto");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-[300] flex items-center transition-all duration-300 bg-gradient-to-r from-[#0636A5]/95 to-[#1E3A8A]/95 backdrop-blur-xl border-b-2 border-yellow-500 h-[90px] ${scrolled ? "shadow-lg" : ""}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-between items-center h-full">
        {/* Logo and Slogan */}
        <Link 
          href="/" 
          onClick={handleHomeClick}
          className="flex items-center gap-3 sm:gap-4 group no-underline shrink-0"
        >
          <div className="relative h-[50px] w-[50px] sm:h-[60px] sm:w-[60px] bg-white rounded-xl flex items-center justify-center p-1 border border-slate-700/30">
            <img
              src="/logo_envios.webp"
              alt="Envíos DosRuedas Logo"
              className="w-full h-full object-contain transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
            />
          </div>
          <div className="flex flex-col brand-text hidden xl:flex">
            <span className="font-display text-2xl text-white leading-none uppercase tracking-wide">
              Envíos DosRuedas
            </span>
            <span className="text-yellow-400 text-xs sm:text-sm font-sans lowercase tracking-[0.5px] mt-0.5 font-medium">
              tu solución confiable
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 h-full">
          {/* Inicio */}
          <div className="relative h-full flex items-center">
            <Link 
              href="/" 
              onClick={handleHomeClick}
              className={`font-subhead text-xl uppercase tracking-wider flex items-center gap-1.5 transition-colors relative py-1.5 after:absolute after:w-full after:h-[2px] after:bottom-0 after:left-0 after:bg-yellow-500 after:origin-left after:transition-transform ${
                pathname === "/" ? "text-yellow-400 after:scale-x-100" : "text-white hover:text-yellow-400 after:scale-x-0 hover:after:scale-x-100"
              }`}
            >
              <House className="w-4.5 h-4.5" /> Inicio
            </Link>
          </div>

          {/* Nosotros Dropdown */}
          <div 
            className="relative h-full flex items-center group"
            onMouseEnter={() => setActiveDropdown("nosotros")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="font-subhead text-xl text-white uppercase tracking-wider flex items-center gap-1 hover:text-yellow-400 transition-colors py-4 focus:outline-none cursor-pointer">
              Nosotros 
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === "nosotros" ? "rotate-180 text-yellow-400" : "text-slate-400"}`} />
            </button>
            <div className={`absolute top-full left-0 bg-gradient-to-b from-[#0636A5] to-[#1E3A8A] min-w-[260px] border-t-2 border-yellow-500 shadow-2xl rounded-b-xl overflow-hidden transition-all duration-350 border border-slate-700/35 ${
              activeDropdown === "nosotros" ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-2 invisible pointer-events-none"
            }`}>
              <a 
                href="#nosotros" 
                onClick={(e) => handleScrollClick(e, "nosotros")}
                className="flex items-center gap-3 px-6 py-4 text-white text-sm hover:text-yellow-400 hover:bg-slate-800/40 transition-all border-b border-white/5 font-semibold"
              >
                <Users size={16} className="text-blue-400 shrink-0" />
                <span>Sobre Nosotros</span>
              </a>
              <a 
                href="#faq" 
                onClick={(e) => handleScrollClick(e, "faq")}
                className="flex items-center gap-3 px-6 py-4 text-white text-sm hover:text-yellow-400 hover:bg-slate-800/40 transition-all border-b border-white/5 font-semibold"
              >
                <HelpCircle size={16} className="text-yellow-500 shrink-0" />
                <span>Preguntas Frecuentes</span>
              </a>
              <a 
                href="#redes" 
                onClick={(e) => handleScrollClick(e, "redes")}
                className="flex items-center gap-3 px-6 py-4 text-white text-sm hover:text-yellow-400 hover:bg-slate-800/40 transition-all font-semibold"
              >
                <Award size={16} className="text-emerald-500 shrink-0" />
                <span>Nuestras Redes</span>
              </a>
            </div>
          </div>

          {/* Servicios Dropdown */}
          <div 
            className="relative h-full flex items-center group"
            onMouseEnter={() => setActiveDropdown("servicios")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="font-subhead text-xl text-white uppercase tracking-wider flex items-center gap-1 hover:text-yellow-400 transition-colors py-4 focus:outline-none cursor-pointer">
              Servicios 
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === "servicios" ? "rotate-180 text-yellow-400" : "text-slate-400"}`} />
            </button>
            <div className={`absolute top-full left-0 bg-gradient-to-b from-[#0636A5] to-[#1E3A8A] min-w-[280px] border-t-2 border-yellow-500 shadow-2xl rounded-b-xl overflow-hidden transition-all duration-350 border border-slate-700/35 ${
              activeDropdown === "servicios" ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-2 invisible pointer-events-none"
            }`}>
              <a 
                href="#servicios" 
                onClick={(e) => handleServiceClick(e, "express")}
                className="flex items-start gap-3.5 px-6 py-4 text-white hover:text-yellow-400 hover:bg-slate-800/40 transition-all border-b border-white/5 group/opt"
              >
                <Zap size={16} className="text-yellow-500 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold">Envíos Express</div>
                  <div className="text-[11px] text-slate-300 group-hover/opt:text-slate-200">Urgencias en menos de 2h</div>
                </div>
              </a>
              <a 
                href="#servicios" 
                onClick={(e) => handleServiceClick(e, "lowcost")}
                className="flex items-start gap-3.5 px-6 py-4 text-white hover:text-yellow-400 hover:bg-slate-800/40 transition-all border-b border-white/5 group/opt"
              >
                <Clock size={16} className="text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold">Envíos LowCost</div>
                  <div className="text-[11px] text-slate-300 group-hover/opt:text-slate-200">En el día, máxima economía</div>
                </div>
              </a>
              <a 
                href="#servicios" 
                onClick={(e) => handleServiceClick(e, "flex")}
                className="flex items-start gap-3.5 px-6 py-4 text-white hover:text-yellow-400 hover:bg-slate-800/40 transition-all border-b border-white/5 group/opt"
              >
                <Layers size={16} className="text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold">Envíos Flex (MeLi)</div>
                  <div className="text-[11px] text-slate-300 group-hover/opt:text-slate-200">Reparto oficial de MercadoLibre</div>
                </div>
              </a>
              <a 
                href="#servicios" 
                onClick={(e) => handleServiceClick(e, "ecommerce_3pl")}
                className="flex items-start gap-3.5 px-6 py-4 text-white hover:text-yellow-400 hover:bg-slate-800/40 transition-all group/opt"
              >
                <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold">E-Commerce & 3PL</div>
                  <div className="text-[11px] text-slate-300 group-hover/opt:text-slate-200">Almacenamiento e integración</div>
                </div>
              </a>
            </div>
          </div>

          {/* Contacto */}
          <div className="relative h-full flex items-center">
            <Link 
              href="/contacto" 
              onClick={handleContactoClick}
              className={`font-subhead text-xl uppercase tracking-wider flex items-center gap-1.5 transition-colors relative py-1.5 after:absolute after:w-full after:h-[2px] after:bottom-0 after:left-0 after:bg-yellow-500 after:origin-left after:transition-transform ${
                pathname === "/contacto" ? "text-yellow-400 after:scale-x-100" : "text-white hover:text-yellow-400 after:scale-x-0 hover:after:scale-x-100"
              }`}
            >
              <Mail className="w-4.5 h-4.5" /> Contacto
            </Link>
          </div>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-4 sm:gap-6 shrink-0">
          {/* Active call indicator */}
          <a 
            href="tel:+5492236602699" 
            className="hidden xl:flex items-center gap-2 text-white font-subhead text-lg tracking-wider hover:text-yellow-400 transition-all hover:scale-105"
          >
            <Phone className="w-5 h-5 text-yellow-400 animate-pulse" /> 
            <span>+54 223 660-2699</span>
          </a>

          {/* Cotizar Envío Button */}
          <button 
            type="button"
            onClick={() => openCalculator()}
            className="bg-yellow-500 hover:bg-yellow-400 active:scale-[0.96] text-slate-950 h-11 flex items-center gap-2 text-xs sm:text-sm font-subhead uppercase tracking-wider px-4 sm:px-5 rounded-xl transition-all shadow-[4px_4px_0px_rgba(0,0,0,0.15)] border border-yellow-600/30 font-bold shrink-0 cursor-pointer"
          >
            <Calculator className="w-4.5 h-4.5" /> 
            <span>Cotizar Envío</span>
          </button>

          {/* Mobile menu hamburger buttons */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white hover:text-yellow-400 transition-colors p-2 rounded-lg border border-slate-700/30 bg-slate-800/20"
            aria-label="Cerrar/Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer screen overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[90px] w-full h-[calc(100vh-90px)] bg-gradient-to-b from-[#0636A5]/98 to-[#172554]/98 backdrop-blur-xl z-[290] flex flex-col p-6 sm:p-8 justify-between gap-6 overflow-y-auto lg:hidden animate-in slide-in-from-right duration-350 border-t border-slate-700/20">
          <div className="space-y-6">
            <Link 
              href="/" 
              onClick={handleHomeClick}
              className={`font-display text-3xl hover:text-yellow-400 block border-b border-white/5 pb-3 font-extrabold tracking-wide ${
                pathname === "/" ? "text-yellow-400" : "text-white"
              }`}
            >
              Inicio
            </Link>
            
            {/* Nosotros sub-options */}
            <div className="space-y-3">
              <p className="font-subhead text-sm text-yellow-400 uppercase tracking-widest font-mono border-b border-white/5 pb-1">Nosotros</p>
              <div className="flex flex-col gap-3 pl-3">
                <a 
                  href="#nosotros" 
                  onClick={(e) => handleScrollClick(e, "nosotros")} 
                  className="font-sans text-base font-bold text-white hover:text-yellow-400 flex items-center gap-2"
                >
                  <Users size={16} className="text-blue-400" />
                  Sobre Nosotros
                </a>
                <a 
                  href="#faq" 
                  onClick={(e) => handleScrollClick(e, "faq")} 
                  className="font-sans text-base font-bold text-white hover:text-yellow-400 flex items-center gap-2"
                >
                  <HelpCircle size={16} className="text-yellow-500" />
                  Preguntas Frecuentes
                </a>
                <a 
                  href="#redes" 
                  onClick={(e) => handleScrollClick(e, "redes")} 
                  className="font-sans text-base font-bold text-white hover:text-yellow-400 flex items-center gap-2"
                >
                  <Award size={16} className="text-emerald-500" />
                  Nuestras Redes
                </a>
              </div>
            </div>

            {/* Servicios sub-options */}
            <div className="space-y-3">
              <p className="font-subhead text-sm text-yellow-400 uppercase tracking-widest font-mono border-b border-white/5 pb-1">Servicios</p>
              <div className="flex flex-col gap-3 pl-3">
                <a 
                  href="#servicios" 
                  onClick={(e) => handleServiceClick(e, "express")} 
                  className="font-sans text-base font-bold text-white hover:text-yellow-400 flex items-center gap-2"
                >
                  <Zap size={16} className="text-yellow-500" />
                  Envíos Express
                </a>
                <a 
                  href="#servicios" 
                  onClick={(e) => handleServiceClick(e, "lowcost")} 
                  className="font-sans text-base font-bold text-white hover:text-yellow-400 flex items-center gap-2"
                >
                  <Clock size={16} className="text-blue-400" />
                  Envíos LowCost
                </a>
                <a 
                  href="#servicios" 
                  onClick={(e) => handleServiceClick(e, "flex")} 
                  className="font-sans text-base font-bold text-white hover:text-yellow-400 flex items-center gap-2"
                >
                  <Layers size={16} className="text-purple-400" />
                  Envíos Flex (MeLi)
                </a>
                <a 
                  href="#servicios" 
                  onClick={(e) => handleServiceClick(e, "ecommerce_3pl")} 
                  className="font-sans text-base font-bold text-white hover:text-yellow-400 flex items-center gap-2"
                >
                  <ShieldCheck size={16} className="text-emerald-500" />
                  E-Commerce & 3PL
                </a>
              </div>
            </div>

            <Link 
              href="/contacto" 
              onClick={handleContactoClick}
              className={`font-display text-3xl hover:text-yellow-400 block border-b border-white/5 pb-3 font-extrabold tracking-wide ${
                pathname === "/contacto" ? "text-yellow-400" : "text-white"
              }`}
            >
              Contacto
            </Link>
          </div>
          
          <div className="pt-6 border-t border-white/10 mt-auto">
             <a 
               href="tel:+5492236602699" 
               className="flex items-center gap-3 text-white text-xl font-subhead tracking-wider hover:text-yellow-400"
             >
               <Phone className="text-yellow-400 w-6 h-6 animate-pulse" /> 
               <span>+54 223 660-2699</span>
             </a>
             <div className="text-[11px] text-slate-400 mt-2 font-mono">
               Envíos DosRuedas &copy; 2026 Mar del Plata, AR.
             </div>
          </div>
        </div>
      )}
    </header>
  );
}
