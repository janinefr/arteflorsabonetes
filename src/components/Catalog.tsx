import { useMemo, useState } from "react";
import { products, Product } from "@/data/products";
import { ProductCard } from "./ProductCard";

const categories = ["Todos", "Sabonetes", "Kit de Sabonetes", "Lembrancinhas"] as const;
type Category = (typeof categories)[number];

export const Catalog = () => {
  const [active, setActive] = useState<Category>("Todos");

  const filtered = useMemo<Product[]>(
    () => (active === "Todos" ? products : products.filter((p) => p.category === active)),
    [active]
  );

  return (
    <section id="catalogo" className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">
            Catálogo
          </span>
          <h2 className="mt-3 font-serif text-4xl text-foreground md:text-5xl">
            Nossa coleção floral
          </h2>
          <p className="mt-4 text-muted-foreground">
            Cada peça é feita à mão, em pequenos lotes. Escolha seus favoritos
            e finalize o pedido pelo WhatsApp.
          </p>
        </div>

        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full border px-5 py-2 text-sm transition-colors ${
                active === cat
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-foreground hover:border-primary/50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
};
