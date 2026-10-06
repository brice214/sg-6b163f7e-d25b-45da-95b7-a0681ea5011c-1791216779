"use client";

import { useEffect } from "react";

export function TawkToChat() {
  useEffect(() => {
    // Configuration Tawk.to
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://embed.tawk.to/YOUR_TAWK_PROPERTY_ID/YOUR_WIDGET_ID";
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    
    // Insérer le script
    document.body.appendChild(script);

    // Cleanup au démontage
    return () => {
      // Retirer le script
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
      
      // Retirer le widget Tawk.to du DOM
      const tawkWidget = document.getElementById("tawk-widget-container");
      if (tawkWidget) {
        tawkWidget.remove();
      }
      
      // Nettoyer les variables globales Tawk
      if (window.Tawk_API) {
        delete window.Tawk_API;
      }
      if (window.Tawk_LoadStart) {
        delete window.Tawk_LoadStart;
      }
    };
  }, []);

  return null;
}

// Déclaration TypeScript pour les globals Tawk.to
declare global {
  interface Window {
    Tawk_API?: {
      maximize?: () => void;
      minimize?: () => void;
      toggle?: () => void;
      showWidget?: () => void;
      hideWidget?: () => void;
    };
    Tawk_LoadStart?: Date;
  }
}