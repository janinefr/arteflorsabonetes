import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { MessageCircle, Hammer, Truck, ShieldCheck, HelpCircle } from "lucide-react";
import { products, whatsappLink } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { TopNav } from "@/components/TopNav";
import { Footer } from "@/components/Footer";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);

  useEffect(() => {
    if (product) {
      document.title = `${product.name} — Arte Flor Sabonetes`;
      const desc = product.description.slice(0, 155);
      let meta = document.querySelector('meta[name="description"]');
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", "description");
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", desc);
    }
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [product]);

  if (!product) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center">
        <h1 className="font-serif text-3xl">Produto não encontrado</h1>
        <Link to="/" className="text-primary underline">Voltar ao catálogo</Link>
      </main>
    );
  }

  const message = `Olá! Tenho interesse no produto "${product.name}" (${product.quantity}). Pode me passar mais informações?`;
  const helpMessage = `Olá! Tenho uma dúvida sobre o produto "${product.name}". Pode me ajudar?`;
  const related = products.filter((p) => p.id !== product.id && p.category === product.category).slice(0, 4);
  const fallback = products.filter((p) => p.id !== product.id).slice(0, 4);
  const suggestions = related.length >= 3 ? related : fallback;

  return (
    <main className="min-h-screen bg-background">
      <TopNav />

      {/* Breadcrumb */}
      <div className="container mx-auto px-6 pt-8">
        <nav className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
          <Link to="/" className="transition-opacity hover:opacity-60">‹ Catálogo</Link>
          <span className="mx-2">/</span>
          <span className="transition-opacity hover:opacity-60">{product.category}</span>
          <span className="mx-2">/</span>
          <span className="text-foreground">{product.name}</span>
        </nav>
      </div>

      {/* Produto */}
      <section className="container mx-auto grid gap-10 px-6 py-10 md:grid-cols-[1fr_1fr] md:gap-16 md:py-14">
        {/* Galeria */}
        <div className="flex gap-4">
          <div className="hidden flex-col gap-3 md:flex">
            {[0, 1, 2].map((i) => (
              <button
                key={i}
                className={`h-20 w-20 overflow-hidden border ${i === 0 ? "border-foreground" : "border-border"} bg-muted`}
                aria-label={`Imagem ${i + 1}`}
              >
                <img src={product.image} alt="" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
          <div className="relative flex-1 overflow-hidden bg-muted">
            <img
              src={product.image}
              alt={product.name}
              className="aspect-square w-full object-cover"
            />
            {product.highlight && (
              <span className="absolute right-4 top-4 bg-background/95 px-3 py-1 text-[10px] uppercase tracking-widest text-foreground shadow-sm">
                {product.highlight}
              </span>
            )}
          </div>
        </div>

        {/* Info */}
        <div className="flex flex-col gap-5">
          <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
            {product.category}
          </span>
          <h1 className="font-serif text-4xl leading-tight text-foreground md:text-5xl">
            {product.name}
          </h1>

          <p className="text-[15px] leading-relaxed text-muted-foreground">
            {product.description}
          </p>

          <div className="mt-2 flex items-center gap-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span>Apresentação</span>
            <span className="text-foreground">{product.quantity}</span>
          </div>

          <div className="mt-4 flex flex-col gap-3">
            <a
              href={whatsappLink(message)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 px-6 py-4 text-sm font-medium uppercase tracking-[0.2em] text-[hsl(var(--whatsapp-foreground))] transition-opacity hover:opacity-90"
              style={{ backgroundColor: "hsl(var(--whatsapp))" }}
            >
              <MessageCircle className="h-4 w-4" fill="currentColor" />
              Pedir no WhatsApp
            </a>
            <a
              href={whatsappLink(helpMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 border border-foreground px-6 py-4 text-sm font-medium uppercase tracking-[0.2em] text-foreground transition-colors hover:bg-foreground hover:text-background"
            >
              <HelpCircle className="h-4 w-4" />
              Tirar dúvidas
            </a>
          </div>

          {/* Garantias */}
          <div className="mt-6 grid grid-cols-3 gap-4 border-t border-border pt-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <Hammer className="h-5 w-5 text-foreground" />
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Feito à mão</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Truck className="h-5 w-5 text-foreground" />
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Entrega em todo Brasil</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-foreground" />
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Produto artesanal</span>
            </div>
          </div>

          {/* Tabela de informações */}
          <dl className="mt-6 divide-y divide-border border-t border-border text-sm">
            <div className="flex justify-between py-3">
              <dt className="text-muted-foreground">Categoria</dt>
              <dd className="text-foreground">{product.category}</dd>
            </div>
            <div className="flex justify-between py-3">
              <dt className="text-muted-foreground">Apresentação</dt>
              <dd className="text-foreground">{product.quantity}</dd>
            </div>
            <div className="flex justify-between py-3">
              <dt className="text-muted-foreground">Produção</dt>
              <dd className="text-foreground">Sob encomenda</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Relacionados */}
      {suggestions.length > 0 && (
        <section className="container mx-auto px-6 pb-20">
          <div className="mb-8 flex items-end justify-between">
            <h2 className="font-serif text-3xl italic text-foreground md:text-4xl">
              Você também vai amar
            </h2>
            <Link
              to="/"
              className="text-[11px] uppercase tracking-[0.25em] text-foreground underline-offset-4 hover:underline"
            >
              Ver tudo
            </Link>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {suggestions.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
};

export default ProductDetail;
