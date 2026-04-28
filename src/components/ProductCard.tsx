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
    <article className="group flex flex-col">
      <Link to={href} className="relative block aspect-square overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={768}
          height={768}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        {product.highlight && (
          <span className="absolute left-3 top-3 rounded-sm bg-background/95 px-3 py-1 text-[10px] uppercase tracking-widest text-foreground shadow-sm">
            {product.highlight}
          </span>
        )}
        <a
          href={whatsappLink(message)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-background/95 px-3 py-1.5 text-[11px] font-medium text-foreground opacity-0 shadow-sm transition-opacity group-hover:opacity-100"
        >
          <MessageCircle className="h-3.5 w-3.5" fill="currentColor" />
          WhatsApp
        </a>
      </Link>

      <div className="flex flex-col gap-1 pt-4">
        <Link
          to={href}
          className="font-serif text-lg leading-tight text-foreground transition-colors hover:text-primary"
        >
          {product.name}
        </Link>
        <span className="text-xs uppercase tracking-widest text-muted-foreground">
          {product.category}
        </span>
      </div>
    </article>
  );
};
