import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Menu, X } from "lucide-react";
import { products, Product } from "@/data/products";
import { ProductCard } from "./ProductCard";

const categories = [
  "Todos",
  "Sabonetes",
  "Mini sabonetes",
  "Kit mini sabonetes",
  "Kit de Sabonetes",
  "Lembrancinhas",
  "Velas perfumadas",
  "Maternidade",
] as const;

type Category = (typeof categories)[number];

const PER_PAGE = 12;

export const Catalog = () => {
  const [active, setActive] = useState<Category>("Todos");
  const [menuOpen, setMenuOpen] = useState(false);
  const [page, setPage] = useState(1);

  const filtered = useMemo<Product[]>(
    () => (active === "Todos" ? products : products.filter((p) => p.category === active)),
    [active]
  );

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));

  useEffect(() => {
    setPage(1);
  }, [active]);

  const pageItems = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const goToPage = (p: number) => {
    setPage(p);
    document.getElementById("catalogo")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleSelect = (cat: Category) => {
    setActive(cat);
    setMenuOpen(false);
  };

  return (
    <section id="catalogo" className="pb-24">
      <div className="container mx-auto px-6">
        {/* Filtros */}
        <div className="flex flex-col gap-4 border-y border-border/70 py-5 md:flex-row md:items-center md:justify-between md:gap-6">
          {/* Mobile: hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="flex w-full items-center justify-between text-xs uppercase tracking-[0.25em] text-foreground"
              aria-expanded={menuOpen}
              aria-label="Abrir categorias"
            >
              <span>Categorias: {active}</span>
              {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
            {menuOpen && (
              <div className="mt-4 flex flex-col gap-3">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => handleSelect(cat)}
                    className={`text-left text-xs uppercase tracking-[0.25em] transition-colors ${
                      active === cat
                        ? "text-foreground underline underline-offset-[6px] decoration-1"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Desktop: inline */}
          <div className="hidden flex-wrap items-center gap-x-7 gap-y-2 md:flex">
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
