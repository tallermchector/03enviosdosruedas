"use client";

import { useState } from "react";
import { MapPin, Clock, ShieldCheck, Bike, Sparkles, ChevronRight, Compass } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ZoneItem {
  id: string;
  name: string;
  time: string;
  description: string;
  color: string;
  coordinates: { x: number; y: number };
}

export default function OperationalZoneMap() {
  const [activeZone, setActiveZone] = useState<string | null>(null);

  const zones: ZoneItem[] = [
    {
      id: "oficina",
      name: "Oficina Central (Friuli 1972)",
      time: "Punto de Despacho",
      description: "Nuestra base operativa. Desde aquí se coordinan los retiros y envíos en dos ruedas con salida inmediata.",
      color: "#FFEC01",
      coordinates: { x: 100, y: 260 },
    },
    {
      id: "centro",
      name: "Zona Microcentro y Chauvín",
      time: "Entrega < 25 min",
      description: "Cobertura ultra rápida de documentación, trámites y paquetería menor en el centro financiero y comercial.",
      color: "#3B82F6",
      coordinates: { x: 220, y: 170 },
    },
    {
      id: "puerto",
      name: "Zona Puerto y Playa Grande",
      time: "Entrega < 35 min",
      description: "Conexión directa con la zona industrial pesquera, polo gastronómico de Alem y oficinas de Playa Grande.",
      color: "#059669",
      coordinates: { x: 260, y: 290 },
    },
    {
      id: "norte",
      name: "Zona Norte (Av. Constitución)",
      time: "Entrega < 40 min",
      description: "Envíos directos al corredor comercial norte de Constitución, La Perla, Parque Luro y Caisamar.",
      color: "#8B5CF6",
      coordinates: { x: 200, y: 75 },
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
      <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 p-6 sm:p-8 md:p-10 relative">
        
        {/* Glowing Decorative Blobs */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#FFEC01]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#0636A5]/5 rounded-full blur-3xl pointer-events-none" />

        {/* Section Header */}
        <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4 border-b border-slate-100 pb-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 bg-[#0636A5]/10 text-[#0636A5] text-[10px] font-mono tracking-widest uppercase font-black rounded-md">
                Logística Local
              </span>
              <span className="flex items-center gap-1 text-xs text-slate-500 font-sans font-semibold">
                <Compass size={13} className="text-yellow-500" />
                Mar del Plata Cobertura Express
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-egyptian-blue uppercase tracking-tight">
              Área de Cobertura <span className="text-yellow-500 font-subhead">Central</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-medium max-w-2xl leading-relaxed">
              Visualizá nuestro mapa operativo. Hemos delimitado y optimizado la zona de mayor demanda en Mar del Plata para ofrecer envíos en moto con tiempos récord de entrega.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0 bg-slate-50 p-3 rounded-2xl border border-slate-100">
            <div className="p-2 bg-yellow-500/10 rounded-xl">
              <Bike className="text-yellow-600 animate-bounce" size={20} />
            </div>
            <div>
              <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Despachos Express</p>
              <p className="text-xs font-sans font-bold text-slate-800">100% en Dos Ruedas</p>
            </div>
          </div>
        </div>

        {/* Main Grid: SVG Map and Interactive Info Card List */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-stretch">
          
          {/* SVG Map Section (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center bg-[#0636A5]/5 rounded-2xl p-4 sm:p-6 border border-slate-100 min-h-[400px] relative overflow-hidden">
            <div className="absolute top-3 left-3 bg-white/80 backdrop-blur-sm px-2.5 py-1 rounded-md text-[10px] font-mono tracking-wider font-bold text-slate-500 uppercase border border-slate-200/50 flex items-center gap-1.5 shadow-xs">
              <Sparkles size={11} className="text-yellow-500 animate-pulse" />
              Esquema Operativo MDP
            </div>

            {/* Custom SVG Coastline & Streets Map of Mar del Plata */}
            <svg 
              viewBox="0 0 360 420" 
              className="w-full max-w-[320px] sm:max-w-[350px] aspect-[6/7] h-auto drop-shadow-lg"
              aria-label="Mapa de Cobertura Mar del Plata"
            >
              <defs>
                {/* Sea Gradient */}
                <linearGradient id="seaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#EFF6FF" />
                  <stop offset="100%" stopColor="#DBEAFE" />
                </linearGradient>
                {/* Zone Highlight Radial Glow */}
                <radialGradient id="centralGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#FFEC01" stopOpacity="0.25" />
                  <stop offset="60%" stopColor="#FFEC01" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#FFEC01" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Sea Area (Coastline Polygon Right Side) */}
              <path 
                d="M 360 0 L 290 0 C 270 50, 240 90, 280 140 C 310 180, 310 210, 275 235 C 260 250, 290 280, 270 310 C 255 330, 230 360, 245 420 L 360 420 Z" 
                fill="url(#seaGradient)" 
                opacity="0.7"
              />
              <text x="315" y="100" fill="#93C5FD" fontSize="10" fontWeight="bold" fontFamily="monospace" letterSpacing="2" transform="rotate(90 315 100)" opacity="0.8">
                OCÉANO ATLÁNTICO
              </text>

              {/* Main Street Grids (Avenues representing MDP layout) */}
              {/* Av. Constitución (Norte) */}
              <line x1="20" y1="75" x2="280" y2="75" stroke="#E2E8F0" strokeWidth="2.5" />
              <text x="40" y="70" fill="#94A3B8" fontSize="8" fontFamily="sans-serif" fontWeight="bold" opacity="0.7">Av. Constitución</text>
              
              {/* Av. Luro (Centro) */}
              <line x1="20" y1="170" x2="295" y2="170" stroke="#E2E8F0" strokeWidth="2" />
              <text x="40" y="165" fill="#94A3B8" fontSize="8" fontFamily="sans-serif" fontWeight="bold" opacity="0.7">Av. Luro</text>

              {/* Av. Juan B. Justo (Puerto/Sur) */}
              <line x1="20" y1="290" x2="275" y2="290" stroke="#E2E8F0" strokeWidth="2.5" />
              <text x="40" y="285" fill="#94A3B8" fontSize="8" fontFamily="sans-serif" fontWeight="bold" opacity="0.7">Av. Juan B. Justo</text>

              {/* Av. Champagnat (Oeste Bound) */}
              <line x1="60" y1="20" x2="60" y2="400" stroke="#CBD5E1" strokeWidth="3" />
              <text x="50" y="380" fill="#94A3B8" fontSize="8" fontFamily="sans-serif" fontWeight="bold" opacity="0.7" transform="rotate(-90 50 380)">Av. Champagnat</text>

              {/* Av. Independencia */}
              <line x1="150" y1="20" x2="150" y2="400" stroke="#E2E8F0" strokeWidth="1.5" />
              <text x="145" y="360" fill="#94A3B8" fontSize="8" fontFamily="sans-serif" fontWeight="bold" opacity="0.7" transform="rotate(-90 145 360)">Av. Independencia</text>

              {/* Central Operational Zone shaded polygon */}
              <polygon 
                points="60,75 280,75 305,170 290,230 275,290 60,290" 
                fill="url(#centralGlow)" 
                stroke="#0636A5" 
                strokeWidth="2" 
                strokeDasharray="5,4"
                className="animate-pulse"
                style={{ animationDuration: "3.5s" }}
              />

              {/* Draw active zone highlights */}
              <AnimatePresence>
                {activeZone && (
                  <motion.circle
                    key={`pulse-${activeZone}`}
                    cx={zones.find(z => z.id === activeZone)?.coordinates.x}
                    cy={zones.find(z => z.id === activeZone)?.coordinates.y}
                    r={28}
                    fill="none"
                    stroke={zones.find(z => z.id === activeZone)?.color}
                    strokeWidth="1.5"
                    initial={{ scale: 0.5, opacity: 0.8 }}
                    animate={{ scale: 1.5, opacity: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeOut" }}
                  />
                )}
              </AnimatePresence>

              {/* Connection paths from Central Office */}
              <path 
                d="M 100 260 Q 150 200, 220 170" 
                fill="none" 
                stroke="#0636A5" 
                strokeWidth="1.5" 
                strokeDasharray="3,3" 
                opacity="0.5" 
              />
              <path 
                d="M 100 260 Q 180 280, 260 290" 
                fill="none" 
                stroke="#0636A5" 
                strokeWidth="1.5" 
                strokeDasharray="3,3" 
                opacity="0.5" 
              />
              <path 
                d="M 100 260 Q 120 150, 200 75" 
                fill="none" 
                stroke="#0636A5" 
                strokeWidth="1.5" 
                strokeDasharray="3,3" 
                opacity="0.5" 
              />

              {/* Render Map Nodes */}
              {zones.map((zone) => {
                const isActive = activeZone === zone.id;
                return (
                  <g 
                    key={zone.id} 
                    className="cursor-pointer group"
                    onMouseEnter={() => setActiveZone(zone.id)}
                    onMouseLeave={() => setActiveZone(null)}
                  >
                    {/* Glowing Aura under nodes */}
                    <circle 
                      cx={zone.coordinates.x} 
                      cy={zone.coordinates.y} 
                      r={isActive ? 14 : 8} 
                      fill={zone.color} 
                      opacity={isActive ? 0.4 : 0.2}
                      className="transition-all duration-300"
                    />
                    
                    {/* Main Node Dot */}
                    <circle 
                      cx={zone.coordinates.x} 
                      cy={zone.coordinates.y} 
                      r={isActive ? 7 : 5} 
                      fill={zone.id === "oficina" ? "#0636A5" : zone.color}
                      stroke={zone.id === "oficina" ? "#FFEC01" : "#FFFFFF"}
                      strokeWidth={isActive ? 2 : 1.5}
                      className="transition-all duration-300"
                    />

                    {/* Node Tooltip Label (Visible on active/hover) */}
                    {(isActive || zone.id === "oficina") && (
                      <g>
                        <rect 
                          x={zone.coordinates.x - 55} 
                          y={zone.coordinates.y - 28} 
                          width="110" 
                          height="18" 
                          rx="4" 
                          fill="#172554" 
                          className="shadow-sm" 
                        />
                        <text 
                          x={zone.coordinates.x} 
                          y={zone.coordinates.y - 16} 
                          fill="#FFFFFF" 
                          fontSize="7" 
                          fontFamily="sans-serif" 
                          fontWeight="bold" 
                          textAnchor="middle"
                        >
                          {zone.name.split(" (")[0]}
                        </text>
                      </g>
                    )}
                  </g>
                );
              })}
            </svg>

            {/* Micro details bar */}
            <div className="mt-4 flex items-center justify-between w-full text-[10px] font-mono text-slate-500 px-2">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-yellow-400" /> Cobertura Inmediata
              </span>
              <span>Zona Central MDP</span>
            </div>
          </div>

          {/* Detailed Zone Card List (7 Columns) */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-4">
            <div className="space-y-3.5">
              {zones.map((zone) => {
                const isActive = activeZone === zone.id;
                const isOficina = zone.id === "oficina";
                
                return (
                  <div
                    key={zone.id}
                    onMouseEnter={() => setActiveZone(zone.id)}
                    onMouseLeave={() => setActiveZone(null)}
                    className={`p-4 rounded-2xl border transition-all duration-300 flex items-start gap-4 cursor-pointer relative ${
                      isActive 
                        ? "bg-[#0636A5]/5 border-[#0636A5]/30 shadow-xs translate-x-1" 
                        : isOficina 
                          ? "bg-slate-50/50 border-yellow-500/30 hover:border-slate-300" 
                          : "bg-white border-slate-100 hover:border-slate-200"
                    }`}
                  >
                    {/* Active highlight color pill */}
                    <div 
                      className="absolute left-0 top-4 bottom-4 w-1 rounded-r-md transition-all duration-300"
                      style={{ 
                        backgroundColor: zone.color,
                        opacity: isActive || isOficina ? 1 : 0 
                      }}
                    />

                    {/* Icon Badge */}
                    <div 
                      className="p-2.5 rounded-xl transition-colors duration-300 shrink-0 mt-0.5"
                      style={{ 
                        backgroundColor: isActive ? `${zone.color}15` : isOficina ? '#FFEC0115' : '#F1F5F9',
                        color: isOficina ? '#D97706' : zone.color 
                      }}
                    >
                      {isOficina ? (
                        <MapPin size={18} className="animate-pulse" />
                      ) : (
                        <Bike size={18} />
                      )}
                    </div>

                    {/* Card Content */}
                    <div className="space-y-1.5 flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-1">
                        <h4 className={`text-sm sm:text-base font-bold font-sans transition-colors duration-200 ${
                          isActive ? "text-[#0636A5]" : "text-slate-800"
                        }`}>
                          {zone.name}
                        </h4>
                        
                        {/* Time badges */}
                        <span className={`text-[10px] sm:text-xs font-mono font-bold tracking-wider uppercase px-2 py-0.5 rounded-md flex items-center gap-1 shrink-0 ${
                          isOficina 
                            ? "bg-yellow-500/15 text-yellow-700 border border-yellow-500/20" 
                            : "bg-[#0636A5]/10 text-[#0636A5]"
                        }`}>
                          <Clock size={11} />
                          {zone.time}
                        </span>
                      </div>
                      
                      <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
                        {zone.description}
                      </p>
                    </div>

                    {/* Chevron Indicator */}
                    <div className="self-center text-slate-300 transition-transform group-hover:translate-x-1 shrink-0 hidden sm:block">
                      <ChevronRight size={16} />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Strategic Summary Banner */}
            <div className="mt-4 p-4 bg-gradient-to-r from-[#0636A5] to-[#1E3A8A] rounded-2xl text-white relative overflow-hidden shadow-sm">
              <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-[radial-gradient(circle_at_right,rgba(255,236,1,0.15),transparent_70%)] pointer-events-none" />
              <div className="flex items-start sm:items-center gap-3 relative z-10">
                <div className="p-2 bg-white/10 rounded-xl shrink-0 mt-1 sm:mt-0">
                  <ShieldCheck size={20} className="text-[#FFEC01]" />
                </div>
                <div className="space-y-0.5">
                  <h5 className="font-sans font-bold text-xs sm:text-sm text-white uppercase tracking-wider flex items-center gap-1.5">
                    Garantía de Entrega DosRuedas
                  </h5>
                  <p className="text-[11px] sm:text-xs text-slate-200 font-medium leading-normal">
                    Si tu destino se encuentra dentro del área delimitada por el mapa, garantizamos retiros en menos de 30 minutos y entregas directas sin desvíos. ¡Confiabilidad total!
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
