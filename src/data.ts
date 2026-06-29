import { Zone, PackageType, DeliveryService, FAQItem, Testimonial, Capability, CorpPlan } from "./types";

export const MAR_DEL_PLATA_ZONES: Zone[] = [
  { id: "centro", name: "Centro / La Perla / Bristol", basePrice: 1200 },
  { id: "playa_grande", name: "Playa Grande / Stella Maris / Los Troncos", basePrice: 1500 },
  { id: "constitucion", name: "Constitución / Parque Luro", basePrice: 1700 },
  { id: "puerto", name: "Puerto / San José / Colinas", basePrice: 1900 },
  { id: "faro_alfar", name: "Alfar / Faro / Punta Mogotes", basePrice: 2400 },
  { id: "batan", name: "Batán (Zona Urbana e Industrial)", basePrice: 3500 },
  { id: "sierra", name: "Sierra de los Padres", basePrice: 4200 },
];

export const PACKAGE_TYPES: PackageType[] = [
  { id: "envelope", label: "Documento / Sobre", multiplier: 0.8, icon: "FileText" },
  { id: "small", label: "Paquete Chico (Hasta 3kg - Mochila)", multiplier: 1.0, icon: "Box" },
  { id: "medium", label: "Paquete Mediano (3kg a 8kg - Caja)", multiplier: 1.4, icon: "Package" },
  { id: "large", label: "Paquete Grande (8kg a 15kg - Valija)", multiplier: 1.9, icon: "Layers" },
];

export const SERVICES_DATA: DeliveryService[] = [
  {
    id: "express",
    name: "Envíos Express",
    badge: "ALTA PRIORIDAD",
    icon: "Zap",
    description: "Prioridad absoluta y certeza total. Diseñado para operaciones de alta criticidad horaria. Vos elegís el rango exacto de entrega con solo 2 horas de anticipación.",
    baseDeliveryFee: 1.5, // multiplier 1.5x
    timeframe: "Menos de 2 horas",
    ctaText: "Solicitar Express",
  },
  {
    id: "lowcost",
    name: "Envíos LowCost",
    icon: "Clock",
    description: "Rentabilidad y ruteo masivo. Variabilizá tus costos logísticos. Ingresá tus pedidos antes de las 13:00 hs y garantizamos la entrega el mismo día.",
    baseDeliveryFee: 0.9, // multiplier 0.9x
    timeframe: "En el día (Mismo día)",
    ctaText: "Ahorrá con LowCost",
  },
  {
    id: "flex",
    name: "Envíos Flex",
    badge: "MERCADOLIBRE EXPERT",
    icon: "Activity",
    description: "Potenciá tu reputación al máximo. Somos expertos en MercadoLibre Flex. Cumplimos tus acuerdos de nivel de servicio (SLAs) Same-Day para mantener tu termómetro en verde.",
    baseDeliveryFee: 1.1, // multiplier 1.1x
    timeframe: "En el día (Rango 15:00 a 21:00 hs)",
    ctaText: "Activar Envíos Flex",
  },
  {
    id: "ecommerce_3pl",
    name: "E-Commerce & 3PL",
    icon: "TrendingUp",
    description: "Tercerización urbana, almacenamiento estratégico y despacho veloz. Soluciones escalables para empresas locales con facturación mensual consolidada.",
    baseDeliveryFee: 1.0, // base rate
    timeframe: "Personalizado / Cuenta Pyme",
    ctaText: "Hablar con un asesor",
  },
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: "coverage",
    question: "¿Cuáles son las zonas de cobertura en Mar del Plata?",
    answer: "Nuestra cobertura principal abarca Mar del Plata urbana de extremo a extremo: desde Parque Camet y Constitución en el norte, hasta el Alfar, Alfar Sur y San Jacinto en el sur, ingresando al oeste hasta Batán, Sierra de los Padres y la amplia zona industrial de la Ruta 88. Realizamos cotizaciones a medida para puntos rurales o interurbanos.",
  },
  {
    id: "flex-operation",
    question: "¿Cómo opera el servicio de MercadoLibre Flex?",
    answer: "Es sumamente sencillo: configuras tu tienda para ofrecer envíos en el día. Nosotros retiramos todos tus paquetes vendidos por la mañana o al mediodía (punto de corte de colectiva), y nuestra flota especializada entrega el 100% de la carga esa misma tarde (rango de 15:00 a 21:00 hs), informando las firmas, geolocalizaciones y recibos digitales directo al panel.",
  },
  {
    id: "payments",
    question: "¿Qué opciones de pago tienen disponibles?",
    answer: "Aceptamos efectivo al momento de retirar o entregar, transferencias bancarias directas, depósitos bancarios y cobros vía MercadoPago (con todas las tarjetas de crédito/débito). Para cuentas corporativas y clientes recurrentes, abrimos cuenta corriente con liquidaciones quincenales o facturación consolidada a mes vencido.",
  },
  {
    id: "business-setup",
    question: "¿Cómo se activa una cuenta corporativa o PyME?",
    answer: "Se activa de forma inmediata sin costo de adhesión ni mínimos de envíos mensuales. Completás una solicitud de alta corporativa, te asignamos un gestor logístico dedicado, habilitás los despachos optimizados y accedés a la tarifa PyME preferencial con cuenta corriente habilitada desde el primer día.",
  },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "t1",
    author: "Karina G. (Mar del Plata)",
    role: "Cliente Satisfecho",
    quote: "Matías de Envíos DosRuedas Mensajería da muchísima tranquilidad contar con alguien tan fiable, resolutivo y buena gente. Gracias, Matías, por hacer posible que un paquete viaje a tiempo. Sin duda, seguiré confiando en ustedes y los recomiendo con los ojos cerrados.",
  },
  {
    id: "t2",
    author: "Estudio Contable MDQ",
    role: "Cliente Comercial",
    quote: "Excelente servicio, atención de primera, rápido, confiable y súper seguro. Nos solucionan el traslado diario de escrituras, firmas y trámites bancarios complejos en menos de una hora.",
  },
  {
    id: "t3",
    author: "Lucas Blanco (CEO Tienda Deco)",
    role: "Socio E-Commerce",
    quote: "Lo usé varias veces para llevar pedidos a nuestros clientes. Impecable el servicio. Además hacen depósitos en cajeros sin problemas, cobran reembolsos y nos rinden el dinero en el acto. ¡Unos genios totales!",
  },
  {
    id: "t4",
    author: "Federico Rossi",
    role: "Usuario Local",
    quote: "Excelente el servicio, rápidos, muy atentos, resolvieron mi problema con la mejor predisposición de Mar del Plata, ¡los recomiendo ampliamente por sobre cualquier app de mensajería tradicional!",
  },
];

export const CAPABILITIES_DATA: Capability[] = [
  {
    id: "ruteo",
    title: "Ruteo Inteligente",
    desc: "Optimización matemática de recorridos basada en el tráfico de Mar del Plata para lograr entregas fluidas.",
    icon: "Navigation",
    metric: "98.7% On-Time",
    detail: "Planificación de rutas dinámicas según volumen y puntos cardinales para lograr el costo por kilómetro más bajo del mercado.",
  },
  {
    id: "api",
    title: "Integración API",
    desc: "Enlazá tu carrito (Tiendanube, Shopify, WooCommerce) para generar órdenes automáticas sin tipeos manuales.",
    icon: "Cpu",
    metric: "100% Automatizado",
    detail: "Sistemas modulares listos para interactuar con tus inventarios, simplificando el flujo desde la compra hasta la moto en la puerta.",
  },
  {
    id: "seguridad",
    title: "Seguridad Extrema",
    desc: "Seguimiento satelital de bultos y custodia activa para productos de alta gama, tecnología o documentación sensible.",
    icon: "ShieldAlert",
    metric: "Soporte Activo",
    detail: "Nuestra flota cuenta con verificación digital y entrega respaldada con firma, DNI e imagen digitalizada del receptor.",
  },
  {
    id: "metricas",
    title: "Métricas en Vivo",
    desc: "Visualizá tu performance diaria, demoras medias y geolocalización en tiempo real desde tu panel corporativo.",
    icon: "BarChart3",
    metric: "Live Dashboard",
    detail: "Rendimientos consolidados por día, semana o mes para auditar la satisfacción de tus clientes y optimizar las franjas de retiro.",
  },
];

export const CORP_PLANS_DATA: CorpPlan[] = [
  {
    id: "corp",
    title: "Planes Corporativos",
    asset: "/delivery_background.jpeg",
    icon: "Briefcase",
    bullets: [
      "Cuenta corriente quincenal con facturas detalladas.",
      "Asignación de chofer exclusivo para reparto de paquetería o cobros.",
      "Depósito, cobros de cheques y trámites en el día.",
      "Descuento volumétrico: a más envíos, menor es la tarifa asignada.",
    ],
    link: "https://api.whatsapp.com/send/?phone=5492236602699&text=Hola!+Quiero+consultar+por+un+Plan+Corporativo+para+mi+empresa.",
  },
  {
    id: "flex_meli",
    title: "MercadoLibre Flex",
    asset: "/hero_background.jpeg",
    icon: "ShoppingBag",
    bullets: [
      "Garantía absoluta de entregas en el mismo día.",
      "Retiro por tu sucursal o domicilio de 11:00 a 13:00 hs.",
      "Entrega unificada de 15:00 a 21:00 hs, reintentos al día siguiente.",
      "Mantené tu reputación e-commerce en color Verde Platino.",
    ],
    link: "https://api.whatsapp.com/send/?phone=5492236602699&text=Hola!+Quiero+asesorarme+para+integrar+Envíos+Flex+con+DosRuedas.",
  },
  {
    id: "ecommerce_log",
    title: "Logística E-Commerce",
    asset: "/abstracto_background.jpeg",
    icon: "Globe",
    bullets: [
      "Almacenamiento temporal (3PL) y preparación de pedidos (Pick & Pack).",
      "Ruteo inteligente de entrega agrupada e interurbana en MDP.",
      "Confirmación digital de recepción mediante firma móvil y foto del bulto.",
      "Gestor de reclamos y soporte inmediato vıa WhatsApp.",
    ],
    link: "https://api.whatsapp.com/send/?phone=5492236602699&text=Hola!+Quiero+conocer+las+soluciones+de+Logística+E-Commerce.",
  },
];
