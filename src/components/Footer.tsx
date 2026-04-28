import { MessageCircle, Instagram } from "lucide-react";
import logo from "@/assets/logo-arteflor.png";
import { whatsappLink } from "@/data/products";

export const Footer = () => (
  <footer id="contato" className="border-t border-border/60 bg-background">
    <div className="container mx-auto grid gap-10 px-6 py-16 md:grid-cols-3 md:items-start">
      <div className="flex flex-col gap-3">
        <img src={logo} alt="Arte Flor Sabonetes" className="h-14 w-14 object-contain" />
        <p className="font-serif text-xl italic text-foreground">Arte Flor Sabonetes</p>
        <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
          Sabonetes artesanais feitos com amor. Faça seu pedido diretamente pelo
          WhatsApp e receba com todo cuidado.
        </p>
      </div>

      <div className="flex flex-col gap-3 text-sm">
        <h3 className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Navegar</h3>
        <a href="#catalogo" className="text-foreground transition-opacity hover:opacity-60">Loja</a>
        <a href="#sobre" className="text-foreground transition-opacity hover:opacity-60">Sobre</a>
        <a href="#contato" className="text-foreground transition-opacity hover:opacity-60">Contato</a>
      </div>

      <div className="flex flex-col gap-3 text-sm">
        <h3 className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Contato</h3>
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-foreground transition-opacity hover:opacity-60"
        >
          <MessageCircle className="h-4 w-4" /> (83) 98733-4129
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-foreground transition-opacity hover:opacity-60"
        >
          <Instagram className="h-4 w-4" /> @arteflorsabonetes
        </a>
      </div>
    </div>
    <div className="border-t border-border/60">
      <div className="container mx-auto px-6 py-5 text-center text-xs uppercase tracking-[0.25em] text-muted-foreground">
        © {new Date().getFullYear()} Arte Flor Sabonetes
      </div>
    </div>
  </footer>
);
