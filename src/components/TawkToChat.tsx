"use client";

import { useEffect } from "react";

export function TawkToChat() {
  useEffect(() => {
    // Initialiser les variables globales Tawk.to
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    // Configuration Tawk.to
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://embed.tawk.to/6ac4ef54df085134c908c812/1k48kdoth";
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    
    // Insérer le script avant le premier script existant
    const firstScript = document.getElementsByTagName("script")[0];
    if (firstScript && firstScript.parentNode) {
      firstScript.parentNode.insertBefore(script, firstScript);
    } else {
      document.body.appendChild(script);
    }

    // Cleanup au démontage
    return () => {
      // Retirer le script
      if (script.parentNode) {
        script.parentNode.removeChild(script);
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