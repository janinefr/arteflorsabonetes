import { useEffect } from "react";
import { Hero } from "@/components/Hero";
import { Catalog } from "@/components/Catalog";
import { Footer } from "@/components/Footer";
import { WhatsAppFloating } from "@/components/WhatsAppButton";

const Index = () => {
  useEffect(() => {
    document.title = "Arte Flor Sabonetes — Catálogo de Sabonetes Artesanais";
    const desc =
      "Catálogo de sabonetes artesanais Arte Flor: rosas, lavanda, jasmim, kits e lembrancinhas. Peça pelo WhatsApp.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);
  }, []);

  return (
    <main className="min-h-screen">
      <Hero />
      <Catalog />
      <Footer />
      <WhatsAppFloating />
    </main>
  );
};

export default Index;
