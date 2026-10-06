"use client";

import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const phoneNumber = "24174436343";
  const message = "Bonjour SPIDERHOSTER, j'aimerais obtenir des informations sur vos services d'hébergement.";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 group"
      aria-label="Contactez-nous sur WhatsApp"
    >
      <div className="relative">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-green-500/50 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
        
        {/* Button */}
        <div className="relative bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-2xl transition-all transform group-hover:scale-110">
          <MessageCircle className="h-7 w-7" />
        </div>

        {/* Pulse animation ring */}
        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20" />
      </div>

      {/* Tooltip */}
      <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 whitespace-nowrap bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
        Chattez avec nous sur WhatsApp
        <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full border-8 border-transparent border-r-slate-900" />
      </div>
    </a>
  );
}