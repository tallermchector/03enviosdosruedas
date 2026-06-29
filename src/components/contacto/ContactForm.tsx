import { FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle, MessageSquare, AlertCircle, Send, ShieldCheck, Sparkles } from "lucide-react";

interface ContactFormProps {
  formData: {
    nombre: string;
    email: string;
    telefono: string;
    mensaje: string;
  };
  setFormData: (data: any) => void;
  formStatus: "idle" | "submitting" | "success" | "error";
  setFormStatus: (status: any) => void;
  onSubmit: (e: FormEvent) => void;
}

export default function ContactForm({
  formData,
  setFormData,
  formStatus,
  setFormStatus,
  onSubmit
}: ContactFormProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 70, damping: 15 }}
      className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-500/5 rounded-full blur-2xl pointer-events-none" />
      
      <div className="flex items-center gap-3 mb-2">
        <div className="w-1.5 h-6 bg-egyptian-blue rounded-full" />
        <h3 className="font-display text-2xl font-black text-egyptian-blue uppercase tracking-wide">
          ¿Tenés alguna consulta?
        </h3>
      </div>
      <p className="text-sm text-slate-500 mb-6 font-medium leading-relaxed">
        Completá el siguiente formulario y un asesor logístico de Envíos DosRuedas te responderá a la brevedad.
      </p>

      <AnimatePresence mode="wait">
        {formStatus === "success" ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            className="p-6 md:p-8 bg-gradient-to-br from-emerald-50/50 to-emerald-50/10 border border-emerald-200/80 rounded-2xl space-y-5 text-center shadow-inner relative"
            key="form-success"
          >
            {/* Success confetti sparkle simulation */}
            <div className="absolute top-4 left-6 text-emerald-500/20 animate-bounce">
              <Sparkles size={24} />
            </div>
            
            <motion.div 
              initial={{ scale: 0.6, rotate: -20 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 150, damping: 10, delay: 0.1 }}
              className="w-16 h-16 bg-emerald-100/80 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto shadow-md"
            >
              <CheckCircle size={36} />
            </motion.div>
            
            <div className="space-y-2">
              <h4 className="text-xl font-bold text-emerald-950 font-display uppercase tracking-wider">
                ¡Mensaje Enviado con Éxito!
              </h4>
              <p className="text-sm text-emerald-800 leading-relaxed max-w-md mx-auto">
                Gracias por comunicarte con Envíos DosRuedas, <strong className="text-emerald-950">{formData.nombre}</strong>. Hemos recibido tus datos de forma prioritaria y uno de nuestros operadores te responderá vía e-mail (<em>{formData.email}</em>) o te llamará en minutos.
              </p>
            </div>

            <div className="pt-5 border-t border-emerald-100 max-w-sm mx-auto flex flex-col sm:flex-row justify-center gap-3">
              <button
                type="button"
                onClick={() => {
                  setFormData({ nombre: "", email: "", telefono: "", mensaje: "" });
                  setFormStatus("idle");
                }}
                className="w-full px-5 py-3 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-sm active:scale-95"
              >
                Enviar otro
              </button>
              <a
                href="https://wa.me/5492236602699?text=Hola!%20Acabo%20de%20enviar%20el%20formulario%20de%20contacto.%20Quiero%20consultar%20sobre%20un%2520servicio."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-5 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 shadow-md shadow-emerald-600/15 active:scale-95"
              >
                Avisar por WhatsApp <MessageSquare size={14} />
              </a>
            </div>
          </motion.div>
        ) : (
          <motion.form 
            onSubmit={onSubmit}
            className="space-y-5"
            key="form-fields"
          >
            {formStatus === "error" && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3 bg-rose-50 border border-rose-200 text-rose-700 text-xs sm:text-sm rounded-xl flex items-center gap-2.5"
              >
                <AlertCircle size={16} className="shrink-0 text-rose-500" />
                <span className="font-medium">Por favor, completá los campos obligatorios (*).</span>
              </motion.div>
            )}
            
            {/* Name - Complete */}
            <div className="space-y-1.5">
              <label htmlFor="nombre" className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest block">
                Nombre completo <span className="text-yellow-600 font-bold">*</span>
              </label>
              <input 
                type="text" 
                id="nombre"
                required
                disabled={formStatus === "submitting"}
                className="w-full h-12 px-4 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 focus:bg-white focus:border-egyptian-blue focus:ring-1 focus:ring-egyptian-blue transition-all text-sm outline-none placeholder-slate-400 font-sans shadow-inner font-semibold text-slate-800"
                placeholder="Escribe tu nombre completo"
                value={formData.nombre}
                onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
              />
            </div>

            {/* Email and Phone Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Email */}
              <div className="space-y-1.5">
                <label htmlFor="email" className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest block font-sans">
                  Email <span className="text-yellow-600 font-bold">*</span>
                </label>
                <input 
                  type="email" 
                  id="email"
                  required
                  disabled={formStatus === "submitting"}
                  className="w-full h-12 px-4 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 focus:bg-white focus:border-egyptian-blue focus:ring-1 focus:ring-egyptian-blue transition-all text-sm outline-none placeholder-slate-400 font-sans shadow-inner font-semibold text-slate-800"
                  placeholder="ejemplo@correo.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              {/* Phone */}
              <div className="space-y-1.5">
                <label htmlFor="telefono" className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest block font-sans">
                  Teléfono <span className="text-slate-400 font-normal lowercase">(opcional)</span>
                </label>
                <input 
                  type="tel" 
                  id="telefono"
                  disabled={formStatus === "submitting"}
                  className="w-full h-12 px-4 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 focus:bg-white focus:border-egyptian-blue focus:ring-1 focus:ring-egyptian-blue transition-all text-sm outline-none placeholder-slate-400 font-sans shadow-inner font-semibold text-slate-800"
                  placeholder="+54 223 123-4567"
                  value={formData.telefono}
                  onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                />
              </div>
            </div>

            {/* Message Area */}
            <div className="space-y-1.5">
              <label htmlFor="mensaje" className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest block">
                Mensaje o Requerimiento <span className="text-yellow-600 font-bold">*</span>
              </label>
              <textarea 
                id="mensaje"
                rows={4}
                required
                disabled={formStatus === "submitting"}
                className="w-full p-4 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 focus:bg-white focus:border-egyptian-blue focus:ring-1 focus:ring-egyptian-blue transition-all text-sm outline-none placeholder-slate-400 resize-none font-sans shadow-inner font-semibold text-slate-800"
                placeholder="Escribí aquí tu consulta, destino del envío o requerimiento especial de volumen logístico..."
                value={formData.mensaje}
                onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
              />
            </div>

            {/* CTA Submit Button */}
            <button
              type="submit"
              id="submit-form-button"
              disabled={formStatus === "submitting"}
              className={`w-full py-4 rounded-xl text-slate-950 font-extrabold uppercase tracking-widest text-xs transition-all flex items-center justify-center gap-2.5 shadow-md border focus:outline-none ${
                formStatus === "submitting" 
                  ? "bg-yellow-500/80 pointer-events-none cursor-not-allowed border-yellow-500/50" 
                  : "bg-yellow-500 hover:bg-yellow-400 border-yellow-600/35 cursor-pointer hover:shadow-yellow-500/15 active:scale-[0.98] hover:scale-[1.01]"
              }`}
            >
              {formStatus === "submitting" ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-slate-950" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Procesando envío...</span>
                </>
              ) : (
                <>
                  <Send size={15} />
                  <span>Enviar Formulario</span>
                </>
              )}
            </button>
            
            <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 font-medium py-1">
              <ShieldCheck size={14} className="text-emerald-500" />
              <span>Atención protegida. No compartiremos tus datos con terceros.</span>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
