import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, MessageCircle, Flower2 } from "lucide-react";
import { products, whatsappLink } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import logo from "@/assets/logo-arteflor.png";

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
  const related = products.filter((p) => p.id !== product.id && p.category === product.category).slice(0, 4);
  const fallback = products.filter((p) => p.id !== product.id).slice(0, 4);
  const suggestions = related.length >= 3 ? related : fallback;

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/60 bg-card/60 backdrop-blur">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Arte Flor Sabonetes" className="h-12 w-12 rounded-full object-cover" />
            <span className="hidden font-serif text-lg text-foreground sm:inline">Arte Flor Sabonetes</span>
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" /> Voltar ao catálogo
          </Link>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="container mx-auto px-6 pt-6">
        <nav className="text-xs uppercase tracking-widest text-muted-foreground">
          <Link to="/" className="hover:text-primary">Início</Link>
          <span className="mx-2">/</span>
          <span>{product.category}</span>
          <span className="mx-2">/</span>
          <span className="text-foreground">{product.name}</span>
        </nav>
      </div>

      {/* Produto */}
      <section className="container mx-auto grid gap-12 px-6 py-10 md:grid-cols-2 md:py-16">
        <div className="relative">
          <div
            className="absolute -inset-4 rounded-[2rem] opacity-40 blur-2xl"
            style={{ background: "var(--gradient-primary)" }}
          />
          <img
            src={product.image}
            alt={product.name}
            width={768}
            height={768}
            className="relative aspect-square w-full rounded-[2rem] object-cover"
            style={{ boxShadow: "var(--shadow-elegant)" }}
          />
          {product.highlight && (
            <span className="absolute left-6 top-6 rounded-full bg-primary px-4 py-1.5 text-xs font-medium text-primary-foreground">
              {product.highlight}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-6 md:py-6">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">
            {product.category}
          </span>
          <h1 className="font-serif text-4xl leading-tight text-foreground md:text-5xl">
            {product.name}
          </h1>

          <div className="flex items-center gap-2 rounded-full bg-secondary/60 px-4 py-2 text-sm font-medium text-secondary-foreground w-fit">
            <Flower2 className="h-4 w-4" />
            {product.quantity}
          </div>

          <p className="text-base leading-relaxed text-muted-foreground">
            {product.description}
          </p>

          <a
            href={whatsappLink(message)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex w-fit items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-[hsl(var(--whatsapp-foreground))] transition-transform hover:scale-[1.02]"
            style={{ backgroundColor: "hsl(var(--whatsapp))", boxShadow: "var(--shadow-soft)" }}
          >
            <MessageCircle className="h-4 w-4" fill="currentColor" />
            Pedir no WhatsApp
          </a>

          <div className="mt-4 grid gap-3 rounded-2xl border border-border bg-card p-5 text-sm text-muted-foreground">
            <p><strong className="text-foreground">Feito à mão</strong> em pequenos lotes, com essências cuidadosamente selecionadas.</p>
            <p><strong className="text-foreground">Atendimento</strong> personalizado pelo WhatsApp para tirar dúvidas e fechar pedidos.</p>
            <p><strong className="text-foreground">Personalizações</strong> sob encomenda: cores, aromas e embalagens para presentes e eventos.</p>
          </div>
        </div>
      </section>

      {/* Detalhes */}
      <section className="container mx-auto px-6 pb-16">
        <div className="rounded-3xl border border-border bg-card p-8 md:p-12">
          <h2 className="font-serif text-2xl text-foreground md:text-3xl">Informações do produto</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-xs uppercase tracking-widest text-muted-foreground">Categoria</h3>
              <p className="mt-1 text-foreground">{product.category}</p>
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-widest text-muted-foreground">Apresentação</h3>
              <p className="mt-1 text-foreground">{product.quantity}</p>
            </div>
            <div className="md:col-span-2">
              <h3 className="text-xs uppercase tracking-widest text-muted-foreground">Descrição</h3>
              <p className="mt-1 leading-relaxed text-foreground">{product.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Relacionados */}
      {suggestions.length > 0 && (
        <section className="container mx-auto px-6 pb-20">
          <h2 className="mb-8 font-serif text-3xl text-foreground">Você também pode gostar</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {suggestions.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
};

export default ProductDetail;
