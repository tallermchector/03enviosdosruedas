import { ReactNode } from "react";
import "@/src/index.css";
import { CalculatorProvider } from "@/src/context/CalculatorContext";
import Header from "@/src/components/common/Header";
import Footer from "@/src/components/common/Footer";
import InteractiveCalculator from "@/src/components/common/InteractiveCalculator";

export const metadata = {
  title: "Envíos DosRuedas | Mensajería, Logística E-Commerce y Entregas Flex Mar del Plata",
  description: "Plataforma logística, servicio de mensajería y envíos e-commerce en Mar del Plata. Tu solución confiable.",
};

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="es" className="scroll-smooth font-sans">
      <body className="min-h-screen bg-slate-50 flex flex-col text-slate-800 antialiased selection:bg-yellow-400 selection:text-slate-900 overflow-x-hidden">
        <CalculatorProvider>
          {/* Header element at top */}
          <Header />
          
          {/* Page contents dynamically changing */}
          <main className="flex-1 mt-[90px]">
            {children}
          </main>
          
          {/* High utility footer segment */}
          <Footer />
          
          {/* Global floating modal calculator */}
          <InteractiveCalculator />
        </CalculatorProvider>
      </body>
    </html>
  );
}
