import { MessageCircle } from "lucide-react";
import heroImg from "@/assets/hero-soaps.jpg";
import logo from "@/assets/logo-arteflor.png";
import { whatsappLink } from "@/data/products";

export const Hero = () => (
  <section className="relative overflow-hidden">
    <div
      className="absolute inset-0 -z-10"
      style={{ background: "var(--gradient-hero)" }}
    />
    <div className="container mx-auto grid gap-12 px-6 py-16 md:grid-cols-2 md:items-center md:py-24">
      <div className="flex flex-col gap-6">
        <img
          src={logo}
          alt="Arte Flor Sabonetes"
          className="h-32 w-32 object-contain md:h-40 md:w-40"
        />
        <h1 className="font-serif text-5xl leading-[1.05] text-foreground md:text-7xl">
          Arte Flor
          <span className="block italic text-primary">Sabonetes</span>
        </h1>
        <p className="max-w-md text-lg leading-relaxed text-muted-foreground">
          Sabonetes feitos à mão com essências naturais, formatos de flores
          e cuidado em cada detalhe. Perfeitos para presentear, lembrancinhas
          e o seu ritual de cuidado diário.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="#catalogo"
            className="inline-flex items-center justify-center rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background transition-transform hover:scale-[1.03]"
          >
            Ver catálogo
          </a>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03]"
            style={{ background: "var(--gradient-primary)" }}
          >
            <MessageCircle className="h-4 w-4" fill="currentColor" />
            Falar conosco
          </a>
        </div>
      </div>

      <div className="relative">
        <div
          className="absolute -inset-4 rounded-[2rem] opacity-60 blur-2xl"
          style={{ background: "var(--gradient-primary)" }}
        />
        <img
          src={heroImg}
          alt="Coleção de sabonetes artesanais em formato de flor da Arte Flor Sabonetes"
          width={1536}
          height={1024}
          className="relative aspect-[4/3] w-full rounded-[2rem] object-cover shadow-elegant"
          style={{ boxShadow: "var(--shadow-elegant)" }}
        />
      </div>
    </div>
  </section>
);
