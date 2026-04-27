import { MessageCircle, Flower2 } from "lucide-react";
import { whatsappLink } from "@/data/products";

export const Footer = () => (
  <footer className="border-t border-border/60 bg-muted/40">
    <div className="container mx-auto flex flex-col items-center gap-6 px-6 py-12 text-center">
      <div className="flex items-center gap-2 font-serif text-2xl">
        <Flower2 className="h-6 w-6 text-primary" />
        Arte Flor Sabonetes
      </div>
      <p className="max-w-md text-sm text-muted-foreground">
        Sabonetes artesanais feitos com amor. Faça seu pedido diretamente pelo
        WhatsApp e receba com todo cuidado.
      </p>
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-[hsl(var(--whatsapp-foreground))]"
        style={{ backgroundColor: "hsl(var(--whatsapp))" }}
      >
        <MessageCircle className="h-4 w-4" fill="currentColor" />
        (83) 9840-9266
      </a>
      <p className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} Arte Flor Sabonetes. Todos os direitos reservados.
      </p>
    </div>
  </footer>
);
