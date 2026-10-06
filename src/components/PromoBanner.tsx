"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function PromoBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const dismissed = localStorage.getItem("promoBannerDismissed");
    if (!dismissed) {
      setIsVisible(true);
    }

    const calculateTimeLeft = () => {
      const now = new Date();
      const endDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 3, 23, 59, 59);
      const difference = endDate.getTime() - now.getTime();

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        };
      }
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem("promoBannerDismissed", "true");
  };

  if (!isVisible) return null;

  return (
    <div className="relative z-50">
      <div className="fixed top-0 left-0 right-0 bg-gradient-to-r from-primary via-secondary to-primary animate-gradient-x shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 py-3 md:py-2">
            <div className="flex items-center gap-3 flex-wrap justify-center md:justify-start">
              <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                <Zap className="h-3 w-3 mr-1" />
                OFFRE LIMITÉE
              </Badge>
              
              <span className="text-white font-semibold text-sm md:text-base">
                🎉 <span className="hidden sm:inline">Profitez de </span>30% de réduction sur tous nos hébergements
              </span>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 text-white">
                  <div className="flex flex-col items-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded px-2 py-1 min-w-[40px] text-center">
                      <span className="font-mono font-bold text-sm">{String(timeLeft.days).padStart(2, "0")}</span>
                    </div>
                    <span className="text-[10px] mt-0.5 font-medium">jours</span>
                  </div>
                  <span className="font-bold mx-0.5">:</span>
                  <div className="flex flex-col items-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded px-2 py-1 min-w-[40px] text-center">
                      <span className="font-mono font-bold text-sm">{String(timeLeft.hours).padStart(2, "0")}</span>
                    </div>
                    <span className="text-[10px] mt-0.5 font-medium">heures</span>
                  </div>
                  <span className="font-bold mx-0.5">:</span>
                  <div className="flex flex-col items-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded px-2 py-1 min-w-[40px] text-center">
                      <span className="font-mono font-bold text-sm">{String(timeLeft.minutes).padStart(2, "0")}</span>
                    </div>
                    <span className="text-[10px] mt-0.5 font-medium">min</span>
                  </div>
                  <span className="font-bold mx-0.5">:</span>
                  <div className="flex flex-col items-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded px-2 py-1 min-w-[40px] text-center">
                      <span className="font-mono font-bold text-sm">{String(timeLeft.seconds).padStart(2, "0")}</span>
                    </div>
                    <span className="text-[10px] mt-0.5 font-medium">sec</span>
                  </div>
                </div>
              </div>

              <Button 
                asChild 
                size="sm" 
                className="bg-white text-primary hover:bg-white/90 font-semibold shadow-lg group whitespace-nowrap"
              >
                <Link href="/#offers">
                  Profiter
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>

              <button
                onClick={handleDismiss}
                className="text-white/80 hover:text-white hover:bg-white/10 rounded p-1 transition-all"
                aria-label="Fermer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </div>
  );
}