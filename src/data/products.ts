import miniMargaridas from "@/assets/mini-soap-1.jpg";
import miniDalia from "@/assets/mini-soap-2.jpg";
import miniLotus from "@/assets/mini-soap-3.jpg";
import miniRosas from "@/assets/mini-soap-4.jpg";
import miniRosaPink from "@/assets/mini-rosa-pink.jpg";
import miniMargaridaTrio from "@/assets/mini-margarida-trio.jpg";
import miniCrisantemo from "@/assets/mini-crisantemo.jpg";
import miniFlorCampo from "@/assets/mini-flor-campo.jpg";
import miniFlorzinha from "@/assets/mini-florzinha.jpg";
import miniRoseta from "@/assets/mini-roseta.jpg";

import miniFlorCincoPetalas from "@/assets/mini-flor-cinco-petalas.jpg";
import miniRosaClassica from "@/assets/mini-rosa-classica.jpg";
import miniEstrela from "@/assets/mini-estrela.jpg";
import kitMiniRosaBranca from "@/assets/kit-mini-rosa-branca.jpg";
import kitMiniRosaRosa from "@/assets/kit-mini-rosa-rosa.jpg";
import kitRosaClassica from "@/assets/kit-rosa-classica.jpg";
import kitPezinhoLetrinha1 from "@/assets/kit-pezinho-letrinha-1.jpg";
import kitPezinhoLetrinha2 from "@/assets/kit-pezinho-letrinha-2.jpg";

export type Product = {
  id: string;
  name: string;
  category: "Sabonetes" | "Mini sabonetes" | "Kit de Sabonetes" | "Lembrancinhas" | "Kit mini sabonetes";
  description: string;
  quantity: string;
  price?: string;
  image: string;
  images?: string[];
  highlight?: string;
};

const MINI_QTY = "A partir de 40 unidades";
const MINI_PRICE = "R$ 2,00 / unidade";
const MINI_PRICE_LOW = "R$ 1,00 / unidade";
const MINI_DESC_SUFFIX = "Sob encomenda, o cliente pode escolher qualquer cor.";

export const products: Product[] = [
  {
    id: "mini-margaridas",
    name: "Mini sabonete Margarida",
    category: "Mini sabonetes",
    description: `Mini sabonete em formato de margarida, perfumado e delicado. ${MINI_DESC_SUFFIX}`,
    quantity: MINI_QTY,
    price: MINI_PRICE_LOW,
    image: miniMargaridas,
    highlight: "Novo",
  },
  {
    id: "mini-dalia",
    name: "Mini sabonete Dália",
    category: "Mini sabonetes",
    description: `Mini sabonete em formato de dália, com acabamento brilhante e aroma suave. ${MINI_DESC_SUFFIX}`,
    quantity: MINI_QTY,
    price: MINI_PRICE_LOW,
    image: miniDalia,
  },
  {
    id: "mini-lotus",
    name: "Mini sabonete Flor de Lótus",
    category: "Mini sabonetes",
    description: `Mini sabonete em formato de flor de lótus com detalhe perolado no centro. ${MINI_DESC_SUFFIX}`,
    quantity: MINI_QTY,
    price: MINI_PRICE_LOW,
    image: miniLotus,
  },
  {
    id: "mini-rosas-charme",
    name: "Mini sabonete Rosa Charme",
    category: "Mini sabonetes",
    description: `Mini rosa perfumada com essência floral suave e pérola central. ${MINI_DESC_SUFFIX}`,
    quantity: MINI_QTY,
    price: MINI_PRICE_LOW,
    image: miniRosas,
  },
  {
    id: "mini-rosa-pink",
    name: "Mini sabonete Rosa Pink",
    category: "Mini sabonetes",
    description: `Mini rosa em tom rosa intenso, com pétalas esculpidas em alto-relevo. ${MINI_DESC_SUFFIX}`,
    quantity: MINI_QTY,
    price: MINI_PRICE_LOW,
    image: miniRosaPink,
  },
  {
    id: "mini-margarida-trio",
    name: "Mini sabonete Margarida Trio",
    category: "Mini sabonetes",
    description: `Mini margarida em formato delicado, ideal para lembrancinhas e composições florais. ${MINI_DESC_SUFFIX}`,
    quantity: MINI_QTY,
    price: MINI_PRICE_LOW,
    image: miniMargaridaTrio,
  },
  {
    id: "mini-crisantemo",
    name: "Mini sabonete Crisântemo",
    category: "Mini sabonetes",
    description: `Mini sabonete em formato de crisântemo, com acabamento brilhante e textura facetada. ${MINI_DESC_SUFFIX}`,
    quantity: MINI_QTY,
    price: MINI_PRICE_LOW,
    image: miniCrisantemo,
  },
  {
    id: "mini-flor-campo",
    name: "Mini sabonete Flor do Campo",
    category: "Mini sabonetes",
    description: `Mini flor com pétalas suaves e acabamento clássico, perfeita para presentear. ${MINI_DESC_SUFFIX}`,
    quantity: MINI_QTY,
    price: MINI_PRICE_LOW,
    image: miniFlorCampo,
  },
  {
    id: "mini-florzinha",
    name: "Mini sabonete Florzinha",
    category: "Mini sabonetes",
    description: `Mini florzinha delicada com miolo arredondado, ideal para festas infantis e chás. ${MINI_DESC_SUFFIX}`,
    quantity: MINI_QTY,
    price: MINI_PRICE_LOW,
    image: miniFlorzinha,
  },
  {
    id: "mini-roseta",
    name: "Mini sabonete Roseta",
    category: "Mini sabonetes",
    description: `Mini roseta em formato circular com detalhes em espiral, charme atemporal. ${MINI_DESC_SUFFIX}`,
    quantity: MINI_QTY,
    price: MINI_PRICE_LOW,
    image: miniRoseta,
  },
  {
    id: "mini-flor-cinco-petalas",
    name: "Mini sabonete Flor Cinco Pétalas",
    category: "Mini sabonetes",
    description: `Mini flor de cinco pétalas com sulcos detalhados e centro arredondado. ${MINI_DESC_SUFFIX}`,
    quantity: MINI_QTY,
    price: MINI_PRICE,
    image: miniFlorCincoPetalas,
  },
  {
    id: "mini-rosa-classica",
    name: "Mini sabonete Rosa Clássica",
    category: "Mini sabonetes",
    description: `Mini rosa clássica com pétalas em espiral, símbolo de elegância e afeto. ${MINI_DESC_SUFFIX}`,
    quantity: MINI_QTY,
    price: MINI_PRICE,
    image: miniRosaClassica,
  },
  {
    id: "mini-estrela",
    name: "Mini sabonete Flor Estrela",
    category: "Mini sabonetes",
    description: `Mini flor em formato de estrela com pétalas pontiagudas e centro em destaque. ${MINI_DESC_SUFFIX}`,
    quantity: MINI_QTY,
    price: MINI_PRICE,
    image: miniEstrela,
  },
  {
    id: "kit-mini-rosa",
    name: "Kit Mini Sabonete Rosa",
    category: "Kit mini sabonetes",
    description: `Kit lembrancinha com mini sabonete em formato de rosa, embalado em tule e fita de cetim, acompanhado de tag personalizada. Ideal para casamentos, batizados, eventos religiosos e campanhas temáticas. ${MINI_DESC_SUFFIX}`,
    quantity: MINI_QTY,
    price: "R$ 3,00 / unidade",
    image: kitMiniRosaBranca,
    images: [kitMiniRosaBranca, kitMiniRosaRosa],
    highlight: "Novo",
  },
];

export const WHATSAPP_NUMBER = "5583987334129";

export function whatsappLink(message?: string) {
  const base = `https://api.whatsapp.com/send/?phone=%2B${WHATSAPP_NUMBER}&type=phone_number&app_absent=0&utm_source=ig`;
  if (!message) return `${base}&text`;
  return `${base}&text=${encodeURIComponent(message)}`;
}
