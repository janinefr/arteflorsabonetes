import miniMargaridas from "@/assets/mini-soap-1.jpg";
import miniDalia from "@/assets/mini-soap-2.jpg";
import miniLotus from "@/assets/mini-soap-3.jpg";
import miniRosas from "@/assets/mini-soap-4.jpg";

export type Product = {
  id: string;
  name: string;
  category: "Sabonetes" | "Mini sabonetes" | "Kit de Sabonetes" | "Lembrancinhas";
  description: string;
  quantity: string;
  price?: string;
  image: string;
  highlight?: string;
};

export const products: Product[] = [
  {
    id: "mini-margaridas",
    name: "Mini sabonete Margarida",
    category: "Mini sabonetes",
    description:
      "Mini sabonete em formato de margarida, perfumado e delicado. Sob encomenda, o cliente pode escolher qualquer cor.",
    quantity: "A partir de 40 unidades",
    price: "R$ 1,00 / unidade",
    image: miniMargaridas,
    highlight: "Novo",
  },
  {
    id: "mini-dalia",
    name: "Mini sabonete Dália",
    category: "Mini sabonetes",
    description:
      "Mini sabonete em formato de dália, com acabamento brilhante e aroma suave. Sob encomenda, o cliente pode escolher qualquer cor.",
    quantity: "A partir de 40 unidades",
    price: "R$ 1,00 / unidade",
    image: miniDalia,
  },
  {
    id: "mini-lotus",
    name: "Mini sabonete Flor de Lótus",
    category: "Mini sabonetes",
    description:
      "Mini sabonete em formato de flor de lótus com detalhe perolado no centro. Sob encomenda, o cliente pode escolher qualquer cor.",
    quantity: "A partir de 40 unidades",
    price: "R$ 1,00 / unidade",
    image: miniLotus,
  },
  {
    id: "mini-rosas-charme",
    name: "Mini sabonete Rosa Charme",
    category: "Mini sabonetes",
    description:
      "Mini rosa perfumada com essência floral suave e pérola central. Sob encomenda, o cliente pode escolher qualquer cor.",
    quantity: "A partir de 40 unidades",
    price: "R$ 1,00 / unidade",
    image: miniRosas,
  },
];

export const WHATSAPP_NUMBER = "5583987334129";

export function whatsappLink(message?: string) {
  const base = `https://api.whatsapp.com/send/?phone=%2B${WHATSAPP_NUMBER}&type=phone_number&app_absent=0&utm_source=ig`;
  if (!message) return `${base}&text`;
  return `${base}&text=${encodeURIComponent(message)}`;
}

