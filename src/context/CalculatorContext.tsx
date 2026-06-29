"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface CalculatorContextType {
  isOpen: boolean;
  preSelectedService: string | undefined;
  openCalculator: (serviceId?: string) => void;
  closeCalculator: () => void;
}

const CalculatorContext = createContext<CalculatorContextType | undefined>(undefined);

export function CalculatorProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [preSelectedService, setPreSelectedService] = useState<string | undefined>(undefined);

  const openCalculator = (serviceId?: string) => {
    setPreSelectedService(serviceId);
    setIsOpen(true);
  };

  const closeCalculator = () => {
    setIsOpen(false);
    setPreSelectedService(undefined);
  };

  return (
    <CalculatorContext.Provider value={{ isOpen, preSelectedService, openCalculator, closeCalculator }}>
      {children}
    </CalculatorContext.Provider>
  );
}

export function useCalculator() {
  const context = useContext(CalculatorContext);
  if (!context) {
    throw new Error("useCalculator must be used within a CalculatorProvider");
  }
  return context;
}
