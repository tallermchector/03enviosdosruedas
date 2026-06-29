import { useState, FormEvent, useEffect } from "react";
import ContactHero from "./ContactHero";
import ContactInfo from "./ContactInfo";
import BusinessHours from "./BusinessHours";
import ContactForm from "./ContactForm";
import ContactMap from "./ContactMap";
import OperationalZoneMap from "./OperationalZoneMap";

interface ContactPageProps {
  onBackToHome?: () => void;
}

export default function ContactPage({ onBackToHome }: ContactPageProps) {
  // SEO Metadata side effects
  useEffect(() => {
    // Save original values
    const originalTitle = document.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    const originalDesc = metaDesc ? metaDesc.getAttribute("content") : "";

    // Set SEO title and description
    document.title = "Contacto | WhatsApp y Atención Logística en Mar del Plata";
    if (metaDesc) {
      metaDesc.setAttribute("content", "Contactanos por WhatsApp o visitanos en Friuli 1972, Mar del Plata. Atención personalizada en logística y mensajería para PyMEs y emprendedores.");
    } else {
      const newMeta = document.createElement("meta");
      newMeta.name = "description";
      newMeta.content = "Contactanos por WhatsApp o visitanos en Friuli 1972, Mar del Plata. Atención personalizada en logística y mensajería para PyMEs y emprendedores.";
      document.head.appendChild(newMeta);
    }

    // Scroll to top
    window.scrollTo({ top: 0 });

    // Restore on unmount
    return () => {
      document.title = originalTitle;
      if (metaDesc && originalDesc) {
        metaDesc.setAttribute("content", originalDesc);
      }
    };
  }, []);

  // Form State
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: ""
  });
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [copiedField, setCopiedField] = useState<string | null>(null);

  // Business Hours status helper
  const [businessTimeStatus, setBusinessTimeStatus] = useState<{ status: string; text: string }>({
    status: "unknown",
    text: "Cargando horario..."
  });

  useEffect(() => {
    const checkStatus = () => {
      try {
        const d = new Date();
        const options = { timeZone: "America/Argentina/Buenos_Aires", hour12: false };
        const argDateStr = d.toLocaleDateString("en-US", options);
        const argTimeStr = d.toLocaleTimeString("en-US", options);
        
        const argDay = new Date(argDateStr).getDay(); // 0 = Sun, 1 = Mon, ..., 6 = Sat
        const [hour, minute] = argTimeStr.split(":").map(Number);
        const currentMinutes = hour * 60 + minute;

        if (argDay === 0) {
          setBusinessTimeStatus({ status: "closed", text: "Cerrado ahora • Abre el Lunes a las 08:00" });
        } else if (argDay === 6) { // Saturday 9:00 to 15:00
          const start = 9 * 60;
          const end = 15 * 60;
          if (currentMinutes >= start && currentMinutes < end) {
            setBusinessTimeStatus({ status: "open", text: `Abierto ahora • Cierra a las 15:00` });
          } else if (currentMinutes < start) {
            setBusinessTimeStatus({ status: "closed", text: "Cerrado ahora • Abre hoy a las 09:00" });
          } else {
            setBusinessTimeStatus({ status: "closed", text: "Cerrado ahora • Abre el Lunes a las 08:00" });
          }
        } else { // Monday to Friday 8:00 to 18:00
          const start = 8 * 60;
          const end = 18 * 60;
          if (currentMinutes >= start && currentMinutes < end) {
            setBusinessTimeStatus({ status: "open", text: `Abierto ahora • Cierra a las 18:00` });
          } else if (currentMinutes < start) {
            setBusinessTimeStatus({ status: "closed", text: "Cerrado ahora • Abre hoy a las 08:00" });
          } else {
            const nextDayOpenText = argDay === 5 ? "Abre el Sábado a las 09:00" : "Abre mañana a las 08:00";
            setBusinessTimeStatus({ status: "closed", text: `Cerrado ahora • ${nextDayOpenText}` });
          }
        }
      } catch (err) {
        setBusinessTimeStatus({ status: "unknown", text: "Lunes a Viernes: 08:00 - 18:00 | Sábado: 09:00 - 15:00" });
      }
    };

    checkStatus();
    const interval = setInterval(checkStatus, 60000); // Check once a minute
    return () => clearInterval(interval);
  }, []);

  // Handle Form Submission
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.nombre || !formData.email || !formData.mensaje) {
      setFormStatus("error");
      return;
    }

    setFormStatus("submitting");

    // Simulate sending network request
    setTimeout(() => {
      setFormStatus("success");
    }, 1200);
  };

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    setTimeout(() => setCopiedField(null), 2500);
  };

  return (
    <div className="pt-[100px] pb-16 bg-slate-50 min-h-screen">
      
      {/* 1. ContactHero Component */}
      <ContactHero onBackToHome={onBackToHome} />

      {/* Main Grid Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
          
          {/* Left Column: Info & Hours (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            {/* 2. ContactInfo Component */}
            <ContactInfo copiedField={copiedField} onCopy={handleCopy} />

            {/* 3. BusinessHours Component */}
            <BusinessHours businessTimeStatus={businessTimeStatus} />
          </div>

          {/* Right Column: ContactForm (7 cols) */}
          <div className="lg:col-span-7">
            {/* 4. ContactForm Component */}
            <ContactForm 
              formData={formData}
              setFormData={setFormData}
              formStatus={formStatus}
              setFormStatus={setFormStatus}
              onSubmit={handleSubmit}
            />
          </div>

        </div>
      </section>

      {/* 5. OperationalZoneMap Component */}
      <OperationalZoneMap />

      {/* 6. ContactMap Component */}
      <ContactMap copiedField={copiedField} onCopy={handleCopy} />

    </div>
  );
}
