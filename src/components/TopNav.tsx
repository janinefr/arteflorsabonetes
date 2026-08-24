import { Link } from "react-router-dom";
import logo from "@/assets/logo-arteflor.png";

export const TopNav = () => (
  <header className="border-b border-border/60 bg-background">
    <div className="container mx-auto grid grid-cols-3 items-center px-6 py-5">
      <nav className="flex items-center gap-8 text-xs uppercase tracking-[0.25em] text-foreground">
        <a href="#catalogo" className="transition-opacity hover:opacity-60">Loja</a>
        <a href="#sobre" className="hidden transition-opacity hover:opacity-60 sm:inline">Sobre</a>
      </nav>

      <Link to="/" className="flex flex-col items-center gap-1">
        <img src={logo} alt="Arte Flor Lembranças" className="h-20 w-20 object-contain md:h-24 md:w-24" />
        <span className="font-serif text-sm italic text-muted-foreground">arte flor</span>
      </Link>

      <div className="flex items-center justify-end gap-8 text-xs uppercase tracking-[0.25em] text-foreground">
        <a
          href="https://www.instagram.com/arteflorlembrancas?igsh=MTNhaXA3N3c5eXRqZA=="
          target="_blank"
          rel="noopener noreferrer"
          className="hidden transition-opacity hover:opacity-60 sm:inline"
        >
          Instagram
        </a>
        <a href="#contato" className="transition-opacity hover:opacity-60">Contato</a>
      </div>
    </div>
  </header>
);
