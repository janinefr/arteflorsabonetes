import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/data/products";

export const WhatsAppFloating = () => (
  <a
    href={whatsappLink()}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Conversar no WhatsApp"
    className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full text-[hsl(var(--whatsapp-foreground))] shadow-elegant transition-transform hover:scale-110 md:h-16 md:w-16"
    style={{ backgroundColor: "hsl(var(--whatsapp))", boxShadow: "var(--shadow-elegant)" }}
  >
    <MessageCircle className="h-7 w-7 md:h-8 md:w-8" fill="currentColor" />
  </a>
);
