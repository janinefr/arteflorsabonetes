import rosa from "@/assets/soap-rosa.jpg";
import lavanda from "@/assets/soap-lavanda.jpg";
import kit from "@/assets/soap-kit.jpg";
import mel from "@/assets/soap-mel.jpg";
import jasmim from "@/assets/soap-jasmim.jpg";
import hibisco from "@/assets/soap-hibisco.jpg";
import lembranca from "@/assets/soap-lembranca.jpg";
import chaVerde from "@/assets/soap-cha-verde.jpg";

export type Product = {
  id: string;
  name: string;
  category: "Sabonetes" | "Kit de Sabonetes" | "Lembrancinhas";
  description: string;
  quantity: string;
  image: string;
  highlight?: string;
};

export const products: Product[] = [
  {
    id: "rosa-romantica",
    name: "Sabonete Rosa Romântica",
    category: "Sabonetes",
    description:
      "Sabonete artesanal em formato de rosa, perfumado com essência floral suave. Hidrata e perfuma a pele com delicadeza.",
    quantity: "1 unidade · 80g",
    image: rosa,
    highlight: "Mais vendido",
  },
  {
    id: "lavanda-relax",
    name: "Sabonete Lavanda Relaxante",
    category: "Sabonetes",
    description:
      "Feito com óleo essencial de lavanda francesa. Aroma calmante perfeito para o ritual de banho noturno.",
    quantity: "1 unidade · 100g",
    image: lavanda,
  },
  {
    id: "jasmim-puro",
    name: "Sabonete Flor de Jasmim",
    category: "Sabonetes",
    description:
      "Sabonete branco perolado em formato de jasmim, com fragrância delicada e toque amanteigado.",
    quantity: "1 unidade · 80g",
    image: jasmim,
  },
  {
    id: "hibisco-tropical",
    name: "Sabonete Hibisco Tropical",
    category: "Sabonetes",
    description:
      "Vibrante e exótico, com pétalas naturais de hibisco. Esfoliação suave e aroma marcante.",
    quantity: "1 unidade · 100g",
    image: hibisco,
  },
  {
    id: "mel-aveia",
    name: "Sabonete Mel & Aveia",
    category: "Sabonetes",
    description:
      "Combinação clássica de mel puro e aveia em flocos. Ideal para peles sensíveis e ressecadas.",
    quantity: "1 unidade · 110g",
    image: mel,
    highlight: "Pele sensível",
  },
  {
    id: "cha-verde-detox",
    name: "Sabonete Chá Verde Detox",
    category: "Sabonetes",
    description:
      "Antioxidante e revigorante, com extrato de chá verde. Sensação de frescor a cada banho.",
    quantity: "1 unidade · 100g",
    image: chaVerde,
  },
  {
    id: "kit-jardim",
    name: "Kit Jardim Encantado",
    category: "Kit de Sabonetes",
    description:
      "Caixa kraft com 5 mini sabonetes em formatos de flores variadas. Presente perfeito para qualquer ocasião.",
    quantity: "Kit com 5 unidades · 30g cada",
    image: kit,
    highlight: "Presente",
  },
  {
    id: "lembrancinha-flor",
    name: "Lembrancinha Floral em Tule",
    category: "Lembrancinhas",
    description:
      "Mini sabonete em formato de flor embalado em saquinho de tule com fita. Personalizamos para casamentos, chás e maternidades.",
    quantity: "Pedido mínimo: 20 unidades · 15g cada",
    image: lembranca,
    highlight: "Personalizável",
  },
];

export const WHATSAPP_NUMBER = "558398409266";

export function whatsappLink(message?: string) {
  const text = encodeURIComponent(
    message ?? "Olá! Vim pelo catálogo Arte Flor Sabonetes e gostaria de mais informações."
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}
