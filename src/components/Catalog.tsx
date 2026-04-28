import { useMemo, useState } from "react";
import { products, Product } from "@/data/products";
import { ProductCard } from "./ProductCard";

const categories = [
  "Todos",
  "Sabonetes",
  "Minisabonetes",
  "Kit de Sabonetes",
  "Lembrancinhas",
] as const;
type Category = (typeof categories)[number];

export const Catalog = () => {
  const [active, setActive] = useState<Category>("Todos");

  const filtered = useMemo<Product[]>(
    () => (active === "Todos" ? products : products.filter((p) => p.category === active)),
    [active]
  );

  return (
    <section id="catalogo" className="pb-24">
      <div className="container mx-auto px-6">
        {/* Filtros */}
        <div className="flex flex-col gap-6 border-y border-border/70 py-5 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-x-7 gap-y-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`text-xs uppercase tracking-[0.25em] transition-colors ${
                  active === cat
                    ? "text-foreground underline underline-offset-[6px] decoration-1"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
            {filtered.length} {filtered.length === 1 ? "peça" : "peças"}
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-x-6 gap-y-12 pt-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
};
