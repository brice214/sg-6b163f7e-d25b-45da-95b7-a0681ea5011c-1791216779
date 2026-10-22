"use client";

import Script from "next/script";
import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

interface RecaptchaProps {
  onChange: (token: string | null) => void;
  className?: string;
}

export interface RecaptchaRef {
  reset: () => void;
}

declare global {
  interface Window {
    grecaptcha?: {
      render: (
        container: HTMLElement,
        parameters: Record<string, unknown>
      ) => number;
      reset: (widgetId: number) => void;
    };
    onRecaptchaLoad?: () => void;
  }
}

export const Recaptcha = forwardRef<RecaptchaRef, RecaptchaProps>(
  function Recaptcha({ onChange, className }, ref) {
    const containerRef = useRef<HTMLDivElement>(null);
    const widgetIdRef = useRef<number | null>(null);
    const [scriptLoaded, setScriptLoaded] = useState(false);
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

    const renderWidget = useCallback(() => {
      if (!containerRef.current || !window.grecaptcha || !siteKey) return;
      if (widgetIdRef.current !== null) return;
      widgetIdRef.current = window.grecaptcha.render(containerRef.current, {
        sitekey: siteKey,
        callback: (token: string) => onChange(token),
        "expired-callback": () => onChange(null),
        "error-callback": () => onChange(null),
      });
    }, [siteKey, onChange]);

    useEffect(() => {
      if (!scriptLoaded) return;
      if (window.grecaptcha && window.grecaptcha.render) {
        renderWidget();
      } else {
        window.onRecaptchaLoad = renderWidget;
      }
    }, [scriptLoaded, renderWidget]);

    useImperativeHandle(ref, () => ({
      reset: () => {
        if (window.grecaptcha && widgetIdRef.current !== null) {
          window.grecaptcha.reset(widgetIdRef.current);
        }
        onChange(null);
      },
    }));

    if (!siteKey) {
      return (
        <div className={className}>
          <p className="text-sm text-destructive">
            Clé reCAPTCHA manquante. Configurez NEXT_PUBLIC_RECAPTCHA_SITE_KEY dans les variables d&apos;environnement.
          </p>
        </div>
      );
    }

    return (
      <>
        <Script
          src="https://www.google.com/recaptcha/api.js?onload=onRecaptchaLoad&render=explicit"
          strategy="afterInteractive"
          onLoad={() => setScriptLoaded(true)}
        />
        <div ref={containerRef} className={className} />
      </>
    );
  }
);