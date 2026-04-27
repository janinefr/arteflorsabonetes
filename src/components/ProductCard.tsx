import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import { Product, whatsappLink } from "@/data/products";

interface Props {
  product: Product;
}

export const ProductCard = ({ product }: Props) => {
  const message = `Olá! Tenho interesse no produto "${product.name}" (${product.quantity}). Pode me passar mais informações?`;
  const href = `/produto/${product.id}`;

  return (
    <article className="product-card group flex flex-col">
      <Link to={href} className="img-wrap relative block aspect-square bg-muted">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={768}
          height={768}
          className="h-full w-full object-cover"
        />
        {product.highlight && (
          <span className="absolute left-3 top-3 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground shadow-soft">
            {product.highlight}
          </span>
        )}
      </Link>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <span className="text-xs uppercase tracking-widest text-muted-foreground">
          {product.category}
        </span>
        <Link to={href} className="font-serif text-xl leading-tight text-foreground transition-colors hover:text-primary">
          {product.name}
        </Link>
        <p className="text-sm leading-relaxed text-muted-foreground line-clamp-3">
          {product.description}
        </p>
        <p className="text-sm font-medium text-accent-foreground/80">
          {product.quantity}
        </p>

        <div className="mt-auto flex items-center gap-2">
          <Link
            to={href}
            className="inline-flex flex-1 items-center justify-center rounded-full border border-border px-4 py-2 text-xs font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            Ver detalhes
          </Link>
          <a
            href={whatsappLink(message)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Pedir pelo WhatsApp"
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[hsl(var(--whatsapp-foreground))] transition-transform hover:scale-110"
            style={{ backgroundColor: "hsl(var(--whatsapp))" }}
          >
            <MessageCircle className="h-4 w-4" fill="currentColor" />
          </a>
        </div>
      </div>
    </article>
  );
};
