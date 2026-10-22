import { Toaster } from "@/components/ui/toaster";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { PromoBanner } from "@/components/PromoBanner";
import { TawkToChat } from "@/components/TawkToChat";
import { LanguageProvider } from "@/contexts/LanguageContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <PromoBanner />
      <Component {...pageProps} />
      <Toaster />
      <WhatsAppButton />
      <TawkToChat />
    </LanguageProvider>
  );
}
