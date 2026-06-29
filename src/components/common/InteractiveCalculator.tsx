"use client";

import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  X, 
  Calculator, 
  MapPin, 
  Package, 
  Zap, 
  Clock, 
  ArrowRight, 
  CheckCircle, 
  Percent, 
  ShieldCheck, 
  AlertCircle 
} from "lucide-react";
import { MAR_DEL_PLATA_ZONES, PACKAGE_TYPES, SERVICES_DATA } from "../../data";
import { useCalculator } from "@/src/context/CalculatorContext";

export default function InteractiveCalculator() {
  const { isOpen, closeCalculator, preSelectedService } = useCalculator();
  const onClose = closeCalculator;
  
  const [originId, setOriginId] = useState(MAR_DEL_PLATA_ZONES[0].id);
  const [destinationId, setDestinationId] = useState(MAR_DEL_PLATA_ZONES[1].id);
  const [packageId, setPackageId] = useState(PACKAGE_TYPES[1].id);
  const [serviceId, setServiceId] = useState(SERVICES_DATA[1].id);
  const [includeInsurance, setIncludeInsurance] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sync selected service if changes externally
  useEffect(() => {
    if (preSelectedService) {
      setServiceId(preSelectedService);
    }
  }, [preSelectedService]);


  // Selected entities
  const originZone = useMemo(() => MAR_DEL_PLATA_ZONES.find(z => z.id === originId)!, [originId]);
  const destinationZone = useMemo(() => MAR_DEL_PLATA_ZONES.find(z => z.id === destinationId)!, [destinationId]);
  const packageType = useMemo(() => PACKAGE_TYPES.find(p => p.id === packageId)!, [packageId]);
  const serviceType = useMemo(() => SERVICES_DATA.find(s => s.id === serviceId)!, [serviceId]);

  // Pricing calculation math
  const calculation = useMemo(() => {
    // base calculation on zone premiums
    const highestBase = Math.max(originZone.basePrice, destinationZone.basePrice);
    const distancePremium = originId === destinationId ? 1.0 : 1.35;
    const baseCourierPrice = Math.round(highestBase * distancePremium);
    
    // adjust for package volume/weight modifier
    const subtotalWithVolume = Math.round(baseCourierPrice * packageType.multiplier);
    
    // adjust for service priority level
    const finalCourierPrice = Math.round(subtotalWithVolume * serviceType.baseDeliveryFee);
    
    // extra optional secure coverage fee
    const insuranceFee = includeInsurance ? 250 : 0;
    
    const totalPrice = finalCourierPrice + insuranceFee;

    return {
      basePrice: baseCourierPrice,
      packageMultiplier: packageType.multiplier,
      serviceFee: serviceType.baseDeliveryFee,
      insuranceFee,
      totalPrice
    };
  }, [originId, destinationId, packageId, serviceId, includeInsurance]);

  const handleWhatsappRequisition = () => {
    const formattedText = `¡Hola Envíos DosRuedas! 👋 Acabo de cotizar un envío urbano mediante su web y me gustaría programarlo:\n\n` +
      `📍 *Zona de Retiro:* ${originZone.name}\n` +
      `🏁 *Zona de Entrega:* ${destinationZone.name}\n` +
      `📦 *Clase de Paquete:* ${packageType.label}\n` +
      `⚡ *Tipo de Servicio:* ${serviceType.name}\n` +
      `🛡️ *Seguro de Mercancía:* ${includeInsurance ? "Habilitado (cobertura total)" : "Inactivo"}\n\n` +
      `💵 *Tarifa Estimada:* $${calculation.totalPrice.toLocaleString("es-AR")}\n\n` +
      `¿Me podrían confirmar disponibilidad de flota para coordinar por favor? ¡Muchas gracias!`;

    const encodedText = encodeURIComponent(formattedText);
    const whatsappUrl = `https://api.whatsapp.com/send/?phone=5492236602699&text=${encodedText}&app_absent=0`;
    
    window.open(whatsappUrl, "_blank");
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 2500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Overlay background */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
            id="calculator-overlay"
          />

          {/* Modal box */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-4xl bg-slate-900 border border-slate-700/60 rounded-2xl shadow-2xl overflow-hidden text-slate-100 flex flex-col md:flex-row max-h-[90vh] md:max-h-[85vh] z-10"
            id="calculator-modal"
          >
            {/* Close button */}
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors p-2 rounded-full hover:bg-slate-800/80 z-20"
              aria-label="Cerrar modal"
              id="close-calculator"
            >
              <X size={24} />
            </button>

            {/* Left side: Configurator form */}
            <div className="flex-1 p-6 md:p-8 overflow-y-auto border-b md:border-b-0 md:border-r border-slate-700/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-yellow-500/10 rounded-lg text-yellow-500">
                  <Calculator size={26} />
                </div>
                <div>
                  <h3 className="font-display text-2xl tracking-wide text-white font-bold">Cotizador Inteligente</h3>
                  <p className="text-xs text-slate-400 tracking-wider font-mono">TARIFA ESTIMATIVA EN TIEMPO REAL 2026</p>
                </div>
              </div>

              <div className="space-y-5">
                {/* Origin Location */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-slate-300 flex items-center gap-1.5">
                    <MapPin size={14} className="text-emerald-500" />
                    ZONA DE RETIRO (ORIGEN M.D.P.)
                  </label>
                  <select 
                    value={originId}
                    onChange={(e) => setOriginId(e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-slate-100 rounded-lg px-3 py-2.5 text-sm outline-none transition-all cursor-pointer"
                  >
                    {MAR_DEL_PLATA_ZONES.map(zone => (
                      <option key={zone.id} value={zone.id}>
                        {zone.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Destination Location */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-slate-300 flex items-center gap-1.5">
                    <MapPin size={14} className="text-blue-500" />
                    ZONA DE ENTREGA (DESTINO M.D.P.)
                  </label>
                  <select 
                    value={destinationId}
                    onChange={(e) => setDestinationId(e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-slate-100 rounded-lg px-3 py-2.5 text-sm outline-none transition-all cursor-pointer"
                  >
                    {MAR_DEL_PLATA_ZONES.map(zone => (
                      <option key={zone.id} value={zone.id}>
                        {zone.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Package type grid */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-slate-300 flex items-center gap-1.5">
                    <Package size={14} className="text-yellow-500" />
                    TIPO DE PAQUETE / DIMENSIÓN
                  </label>
                  <div className="grid grid-cols-2 gap-2.5">
                    {PACKAGE_TYPES.map(pkg => (
                      <button
                        key={pkg.id}
                        type="button"
                        onClick={() => setPackageId(pkg.id)}
                        className={`flex flex-col items-center justify-center p-3 rounded-lg border text-center transition-all cursor-pointer ${
                          packageId === pkg.id 
                            ? "bg-slate-800 border-yellow-500 text-yellow-500 font-medium" 
                            : "bg-slate-800/40 border-slate-700 text-slate-300 hover:bg-slate-800"
                        }`}
                      >
                        <span className="text-xs font-sans tracking-tight">{pkg.label}</span>
                        <span className="text-[10px] text-slate-400 font-mono mt-1">Multiplicador x{pkg.multiplier}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Delivery Priority Service */}
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase text-slate-300 flex items-center gap-1.5">
                    <Zap size={14} className="text-yellow-500" />
                    MODALIDAD DE ENVÍO
                  </span>
                  <div className="grid grid-cols-2 gap-2.5">
                    {SERVICES_DATA.map(ser => (
                      <button
                        key={ser.id}
                        type="button"
                        onClick={() => setServiceId(ser.id)}
                        className={`flex flex-col items-center justify-center p-3 rounded-lg border text-center transition-all cursor-pointer ${
                          serviceId === ser.id 
                            ? "bg-slate-800 border-blue-500 text-blue-400 font-medium" 
                            : "bg-slate-800/40 border-slate-700 text-slate-300 hover:bg-slate-800"
                        }`}
                      >
                        <span className="text-xs font-sans tracking-tight">{ser.name}</span>
                        <span className="text-[10px] text-slate-400 font-mono mt-1">{ser.timeframe}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Protection Insurance checkbox */}
                <label className="flex items-center gap-3 p-3 bg-slate-800/50 border border-slate-700/60 rounded-lg cursor-pointer hover:bg-slate-800 transition-colors">
                  <input 
                    type="checkbox"
                    checked={includeInsurance}
                    onChange={(e) => setIncludeInsurance(e.target.checked)}
                    className="w-4.5 h-4.5 bg-slate-900 border-slate-700 text-blue-500 focus:ring-0 rounded cursor-pointer"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-1 text-xs font-bold text-slate-100 uppercase">
                      <ShieldCheck size={14} className="text-emerald-500" />
                      SEGURO DE COBERTURA INTEGRAL
                    </div>
                    <p className="text-[11px] text-slate-400 mt-0.5">Respaldar 100% de la mercancía robada o dañada por solo $250 extra.</p>
                  </div>
                </label>
              </div>
            </div>

            {/* Right side: Price output / Invoice card */}
            <div className="w-full md:w-80 bg-slate-950/80 p-6 md:p-8 flex flex-col justify-between overflow-y-auto">
              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">FACTURACIÓN ESTIMADA</h4>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-4xl font-display text-white font-extrabold">$</span>
                    <span className="text-5xl font-display text-yellow-400 font-extrabold tracking-tight">
                      {calculation.totalPrice.toLocaleString("es-AR")}
                    </span>
                    <span className="text-sm font-mono text-slate-400">ARS</span>
                  </div>
                  <p className="text-[11px] text-emerald-400 flex items-center gap-1.5 mt-1">
                    <CheckCircle size={10} /> Entrega final 100% asegurada
                  </p>
                </div>

                {/* Cost breakdown */}
                <div className="border-t border-b border-slate-800 py-4 space-y-3.5">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-400 flex items-center gap-1">Servicio de Base</span>
                    <span className="font-mono text-slate-200">${calculation.basePrice.toLocaleString("es-AR")}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-400">Multiplicador de Paquete</span>
                    <span className="font-mono text-slate-200">x{calculation.packageMultiplier}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-400">Suplemento de Velocidad</span>
                    <span className="font-mono text-slate-200">x{calculation.serviceFee}</span>
                  </div>
                  {calculation.insuranceFee > 0 && (
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-400">Seguro de Paquetería</span>
                      <span className="font-mono text-emerald-400">+${calculation.insuranceFee}</span>
                    </div>
                  )}
                </div>

                {/* Interactive visual details */}
                <div className="p-3 bg-slate-900 border border-slate-800 rounded-lg">
                  <div className="flex gap-2">
                    <Clock size={16} className="text-blue-400 mt-0.5" />
                    <div>
                      <h5 className="text-[11px] font-bold text-blue-400 uppercase">TIEMPO ESTIMADO</h5>
                      <p className="text-xs text-slate-200 font-medium mt-0.5">{serviceType.timeframe}</p>
                    </div>
                  </div>
                </div>

                <div className="text-[10px] text-slate-400 flex items-start gap-1.5 leading-normal">
                  <AlertCircle size={12} className="text-slate-500 mt-0.5 shrink-0" />
                  <span>Este cotizador estima el valor aproximado basado en la ruta óptima urbana de Mar del Plata. Envíos especiales o interurbanos pueden sufrir modificaciones en el despacho.</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="mt-8 space-y-2.5">
                <button
                  type="button"
                  onClick={handleWhatsappRequisition}
                  className="w-full bg-[#25D366] hover:bg-[#20ba59] active:scale-[0.98] text-white py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 font-display text-lg tracking-wide transition-all uppercase font-medium cursor-pointer shadow-lg shadow-[#25D366]/10"
                >
                  Confirmar Tarifa por WhatsApp
                  <ArrowRight size={18} />
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full hover:bg-slate-800 text-slate-400 hover:text-white text-xs text-center py-2 rounded-lg transition-colors cursor-pointer uppercase tracking-wider font-mono"
                >
                  Volver a la Web
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
