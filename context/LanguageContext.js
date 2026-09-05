"use client";

import { createContext, useContext, useEffect, useState } from "react";
import en from "@/locales/en";
import es from "@/locales/es";

const LOCALES = { es, en };
const DEFAULT_LANGUAGE = "es";
const STORAGE_KEY = "portfolio-lidia:language";

const LanguageContext = createContext(undefined);

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(DEFAULT_LANGUAGE);

  // Se lee localStorage solo en el cliente, después del primer render
  // (evita desajustes de hidratación entre servidor y navegador): si hay
  // una preferencia guardada, se aplica; si no, se mantiene el idioma
  // por defecto.
  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored && LOCALES[stored]) {
        // Sincroniza el estado con localStorage (sistema externo) justo
        // después del montaje: es la única forma de leerlo sin provocar
        // un mismatch de hidratación entre servidor y cliente (el server
        // no tiene acceso a localStorage).
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setLanguageState(stored);
      }
    } catch {
      // localStorage no disponible (navegación privada, etc.): se sigue
      // con el idioma por defecto sin romper nada.
    }
  }, []);

  function setLanguage(nextLanguage) {
    if (!LOCALES[nextLanguage]) return;
    setLanguageState(nextLanguage);
    try {
      window.localStorage.setItem(STORAGE_KEY, nextLanguage);
    } catch {
      // Si no se puede persistir, el cambio sigue funcionando en la
      // sesión actual, solo no se recuerda la próxima visita.
    }
  }

  const value = {
    language,
    setLanguage,
    t: LOCALES[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage debe usarse dentro de <LanguageProvider>");
  }
  return context;
}
