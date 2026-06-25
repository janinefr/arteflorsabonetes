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
import kitRosaCoracaoBorboleta1 from "@/assets/kit-rosa-coracao-borboleta-1.jpg";
import kitRosaCoracaoBorboleta2 from "@/assets/kit-rosa-coracao-borboleta-2.jpg";
import velaFormatosDiversos from "@/assets/vela-formatos-diversos.jpg";
import velaLembrancinhaPersonalizada from "@/assets/vela-lembrancinha-personalizada.jpg";
import velaPotinhoVidroRolha from "@/assets/vela-potinho-vidro-rolha.jpg";
import velaPoteTampaMadeira from "@/assets/vela-pote-tampa-madeira.jpg";
import velaMargarida from "@/assets/vela-margarida.jpg";
import velaLembrancinhaAzul from "@/assets/vela-lembrancinha-azul.jpg";
import velaPavioMadeira from "@/assets/vela-pavio-madeira.jpg";
import velaEstrelaSejaLuz from "@/assets/vela-estrela-seja-luz.jpg";
import maternidadePezinhoRosaLetrinha from "@/assets/maternidade-pezinho-rosa-letrinha.jpg";
import maternidadeChegueiIsabela from "@/assets/maternidade-cheguei-isabela.jpg";
import maternidadeChaRevelacaoCoracao from "@/assets/maternidade-cha-revelacao-coracao.jpg";
import maternidadeUrsinhoPezinhoAntonelly from "@/assets/maternidade-ursinho-pezinho-antonelly.jpg";
import maternidadePezinhoAzul from "@/assets/maternidade-pezinho-azul.jpg";
import maternidadeKitLetrinhasEspalheAmor from "@/assets/maternidade-kit-letrinhas-espalhe-amor.jpg";
import maternidadePezinhoRosa from "@/assets/maternidade-pezinho-rosa.jpg";
import maternidadeKitChaPedroHenrique from "@/assets/maternidade-kit-cha-pedro-henrique.jpg";
import maternidadeKitSafariChegueiGael from "@/assets/maternidade-kit-safari-cheguei-gael.jpg";
import maternidadeSafariAnimais from "@/assets/maternidade-safari-animais.jpg";
import maternidadeCheirinhoHelena from "@/assets/maternidade-cheirinho-helena.jpg";
import maternidadeCheirinhoLuccaLohan from "@/assets/maternidade-cheirinho-lucca-lohan.jpg";
import maternidadeMiniUrsinhoAzul from "@/assets/maternidade-mini-ursinho-azul.jpg";
import maternidadeMiniDinossauros from "@/assets/maternidade-mini-dinossauros.jpg";
import maternidadeVelaMarcusAugusto from "@/assets/maternidade-vela-marcus-augusto.jpg";
import maternidadeChaRifaAgatha from "@/assets/maternidade-cha-rifa-agatha.jpg";
import maternidadeKitCaixinhaAj from "@/assets/maternidade-kit-caixinha-aj.jpg";
import maternidadeSaboneteMonogramaA from "@/assets/maternidade-sabonete-monograma-a.jpg";
import maternidadeLetrinhaLRosa from "@/assets/maternidade-letrinha-l-rosa.jpg";
import maternidadeRBaloes from "@/assets/maternidade-r-baloes.jpg";

export type Product = {
  id: string;
  name: string;
  category: "Sabonetes" | "Mini sabonetes" | "Kit de Sabonetes" | "Lembrancinhas" | "Kit mini sabonetes" | "Velas perfumadas" | "Maternidade";
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
  {
    id: "kit-rosa-classica",
    name: "Kit Rosa Clássica",
    category: "Kit mini sabonetes",
    description: `Kit lembrancinha com sabonete em formato de rosa clássica, embalado em tule e fita de cetim, acompanhado de tag personalizada. Ideal para aniversários, casamentos e eventos especiais. ${MINI_DESC_SUFFIX}`,
    quantity: MINI_QTY,
    price: "R$ 3,50 / unidade",
    image: kitRosaClassica,
  },
  {
    id: "kit-pezinho-bebe-letrinha",
    name: "Kit Pézinho Bebê com Letrinha",
    category: "Kit mini sabonetes",
    description: `Kit lembrancinha com mini sabonete em formato de pézinho de bebê acompanhado de letrinha personalizada (inicial do nome), embalado em tule e fita de cetim com tag temática. Perfeito para chá de bebê, maternidade e batizados. ${MINI_DESC_SUFFIX}`,
    quantity: MINI_QTY,
    price: "R$ 3,00 / unidade",
    image: kitPezinhoLetrinha1,
    images: [kitPezinhoLetrinha1, kitPezinhoLetrinha2],
  },
  {
    id: "kit-rosa-coracao-borboleta",
    name: "Kit Rosa, Coração e Borboleta",
    category: "Kit mini sabonetes",
    description: `Kit lembrancinha sortido com sabonetes em formato de rosa, coração e borboleta, embalado em tule com botão de rosa e tag personalizada. Composição romântica ideal para casamentos, noivados, dia das mães e datas especiais. ${MINI_DESC_SUFFIX}`,
    quantity: "A partir de 20 unidades",
    price: "R$ 6,00 / unidade",
    image: kitRosaCoracaoBorboleta1,
    images: [kitRosaCoracaoBorboleta1, kitRosaCoracaoBorboleta2],
  },
  {
    id: "vela-formatos-diversos",
    name: "Vela Perfumada Formatos Diversos",
    category: "Velas perfumadas",
    description: "Trio de velas perfumadas em potes de cimento pintados em rosa, nos formatos hexagonal, quadrado e coração, decoradas com mini buquês e laço de cetim. Perfume suave e queima limpa, ideais para presentear ou decorar ambientes.",
    quantity: "Unidade",
    price: "R$ 15,00 / unidade",
    image: velaFormatosDiversos,
    highlight: "Novo",
  },
  {
    id: "vela-lembrancinha-personalizada",
    name: "Vela Lembrancinha Personalizada",
    category: "Velas perfumadas",
    description: "Mini vela perfumada embalada em celofane com laço de cetim e tag personalizada com o nome e tema da festa. Perfeita como lembrancinha para chá de bebê, batizados e aniversários infantis.",
    quantity: "Unidade",
    price: "R$ 6,00 / unidade",
    image: velaLembrancinhaPersonalizada,
  },
  {
    id: "vela-potinho-vidro-rolha",
    name: "Vela Potinho de Vidro com Rolha",
    category: "Velas perfumadas",
    description: "Vela perfumada em delicado potinho de vidro com tampa de rolha de cortiça, decorada com mini botões de rosa e laço de cetim. Lembrancinha sofisticada e atemporal para casamentos, noivados e eventos especiais.",
    quantity: "Unidade",
    price: "R$ 15,00 / unidade",
    image: velaPotinhoVidroRolha,
  },
  {
    id: "vela-pote-tampa-madeira",
    name: "Vela Perfumada Pote com Tampa de Madeira",
    category: "Velas perfumadas",
    description: "Vela perfumada em pote de vidro com tampa de madeira natural, opção de aplique decorativo ou rótulo personalizado com mensagem e nome do homenageado. Presente especial para madrinhas, padrinhos, professores e datas comemorativas.",
    quantity: "Unidade",
    price: "R$ 36,00 / unidade",
    image: velaPoteTampaMadeira,
  },
  {
    id: "vela-margarida",
    name: "Vela Margarida",
    category: "Velas perfumadas",
    description: "Mini vela perfumada em formato de margarida, com pétalas delicadamente esculpidas e acabamento aveludado. Perfeita como lembrancinha de casamento, chá de bebê ou para compor centros de mesa românticos.",
    quantity: "Unidade",
    price: "R$ 5,00 / unidade",
    image: velaMargarida,
  },
  {
    id: "vela-lembrancinha-azul",
    name: "Vela Lembrancinha Azul",
    category: "Velas perfumadas",
    description: "Vela perfumada em potinho de vidro com tampa de rolha, laço de cetim azul e mensagem personalizada. Lembrancinha ideal para chá de bebê, batizado de menino e maternidade.",
    quantity: "Unidade",
    price: "R$ 15,00 / unidade",
    image: velaLembrancinhaAzul,
  },
  {
    id: "vela-pavio-madeira",
    name: "Vela Pote de Vidro com Pavio de Madeira",
    category: "Velas perfumadas",
    description: "Vela perfumada artesanal em pote de vidro com pavio de madeira que crepita ao queimar, decorada com mini frutinhas e tampa de pinus com laço de cetim. Experiência sensorial sofisticada para presentear ou perfumar ambientes.",
    quantity: "Unidade",
    price: "R$ 36,00 / unidade",
    image: velaPavioMadeira,
  },
  {
    id: "vela-estrela-seja-luz",
    name: "Vela Estrela Seja Luz",
    category: "Velas perfumadas",
    description: "Vela perfumada em delicado potinho de vidro no formato de estrela, com tampa de rolha, mini rosa branca, laço vermelho e mensagem personalizada \"Seja luz\". Lembrancinha encantadora para casamentos, formaturas e datas especiais.",
    quantity: "Unidade",
    price: "R$ 18,00 / unidade",
    image: velaEstrelaSejaLuz,
  },
  {
    id: "maternidade-pezinho-rosa-letrinha",
    name: "Lembrancinha Pézinho Rosa com Letrinha",
    category: "Maternidade",
    description: "Lembrancinha de maternidade com sabonete em formato de pézinho rosa e letrinha personalizada (inicial do nome do bebê), embalado em tule rosa com fita de cetim e tag com mensagem de agradecimento personalizada. Ideal para chá de bebê e visita à maternidade.",
    quantity: "Unidade",
    price: "R$ 3,00 / unidade",
    image: maternidadePezinhoRosaLetrinha,
    highlight: "Novo",
  },
  {
    id: "maternidade-cheguei-isabela",
    name: "Lembrancinha Cheguei! Pézinho",
    category: "Maternidade",
    description: "Sabonete redondo com mini pézinhos rosa em alto-relevo, embalado em celofane com laço de cetim rosa e tag personalizada \"Cheguei! Obrigada pela visita\" com nome do bebê e data de nascimento. Lembrancinha sofisticada para visitas à maternidade.",
    quantity: "Unidade",
    price: "R$ 6,00 / unidade",
    image: maternidadeChegueiIsabela,
  },
  {
    id: "maternidade-cha-revelacao-coracao",
    name: "Lembrancinha Chá Revelação Coração",
    category: "Maternidade",
    description: "Lembrancinha de chá revelação com sabonetes em formato de coração nas cores rosa, azul e branco, embalados em tule com laço branco e tag personalizada com os nomes do casal de bebês. Combinação perfeita para revelar o sexo do bebê com carinho.",
    quantity: "Unidade",
    price: "R$ 5,00 / unidade",
    image: maternidadeChaRevelacaoCoracao,
  },
  {
    id: "maternidade-ursinho-pezinho-antonelly",
    name: "Lembrancinha Ursinho e Pézinho",
    category: "Maternidade",
    description: "Lembrancinha de maternidade com sabonetes em formato de ursinho rosa e pézinho branco, embalados em celofane com tule rosa, fita de cetim e tag personalizada com mensagem de agradecimento. Tema ursinho fofo e delicado para chá de bebê e maternidade.",
    quantity: "Unidade",
    price: "R$ 4,00 / unidade",
    image: maternidadeUrsinhoPezinhoAntonelly,
  },
  {
    id: "maternidade-pezinho-azul",
    name: "Lembrancinha Pézinho Azul",
    category: "Maternidade",
    description: "Lembrancinha de maternidade com sabonete em formato de pézinho branco, embalado em tule azul com fita de cetim branca e tag redonda personalizada com ilustração de ursinho. Perfeita para chá de bebê e visita à maternidade de menino.",
    quantity: "Unidade",
    price: "R$ 3,00 / unidade",
    image: maternidadePezinhoAzul,
  },
  {
    id: "maternidade-kit-letrinhas-espalhe-amor",
    name: "Kit Letrinhas Espalhe Amor",
    category: "Maternidade",
    description: "Kit lembrancinha com mini sabonetes em formato de cubos com letrinhas personalizadas (nome do bebê), nas cores lilás e branco, embalados em tule com fita de cetim lilás e tag personalizada \"Espalhe amor por onde for\". Perfeito para chá de bebê, batizados e maternidade.",
    quantity: "Unidade",
    price: "R$ 6,00 / unidade",
    image: maternidadeKitLetrinhasEspalheAmor,
    highlight: "Novo",
  },
  {
    id: "maternidade-pezinho-rosa",
    name: "Mini Sabonete Pézinho Rosa",
    category: "Maternidade",
    description: `Mini sabonete em formato de pézinho de bebê na cor rosa, com acabamento brilhante e perfume suave. Ideal para compor lembrancinhas de chá de bebê e maternidade. ${MINI_DESC_SUFFIX}`,
    quantity: MINI_QTY,
    price: "R$ 2,00 / unidade",
    image: maternidadePezinhoRosa,
  },
  {
    id: "maternidade-kit-cha-pedro-henrique",
    name: "Kit Chá do Bebê Letrinhas e Ursinho",
    category: "Maternidade",
    description: "Kit lembrancinha com sabonete em formato de ursinho verde e letrinhas personalizadas (iniciais do nome do bebê) em branco, embalado em tule branco com fita de cetim e tag personalizada com o tema do chá. Ideal para chá de bebê e maternidade.",
    quantity: "Unidade",
    price: "R$ 5,00 / unidade",
    image: maternidadeKitChaPedroHenrique,
  },
  {
    id: "maternidade-kit-safari-cheguei-gael",
    name: "Kit Safari Cheguei!",
    category: "Maternidade",
    description: "Lembrancinha de maternidade no tema safari, com sabonete em formato de animalzinho (leão, girafa, elefante ou hipopótamo) em cores variadas, embalado em tule com fita de cetim branca e tag personalizada \"Cheguei!\" com nome do bebê. Perfeito para visita à maternidade.",
    quantity: "Unidade",
    price: "R$ 3,50 / unidade",
    image: maternidadeKitSafariChegueiGael,
  },
  {
    id: "maternidade-safari-animais",
    name: "Mini Sabonete Safari Animais",
    category: "Maternidade",
    description: `Mini sabonete em formato de animalzinho do safari (leão, elefante, girafa ou hipopótamo) em cores vibrantes, com acabamento brilhante e perfume suave. Ideal para compor lembrancinhas no tema safari. ${MINI_DESC_SUFFIX}`,
    quantity: MINI_QTY,
    price: "R$ 1,00 / unidade",
    image: maternidadeSafariAnimais,
  },
  {
    id: "maternidade-cheirinho-helena",
    name: "Cheirinho Aromatizador Personalizado",
    category: "Maternidade",
    description: "Mini aromatizador de ambiente em frasco de vidro com varetas de bambu, tampa dourada e rótulo personalizado com o nome do bebê. Embalado em celofane com laço de cetim e tag de agradecimento personalizada. Lembrancinha sofisticada e perfumada para chá de bebê, maternidade e batizados.",
    quantity: "Unidade",
    price: "R$ 8,50 / unidade",
    image: maternidadeCheirinhoHelena,
    highlight: "Novo",
  },
  {
    id: "maternidade-cheirinho-lucca-lohan",
    name: "Cheirinho Aromatizador Azul Personalizado",
    category: "Maternidade",
    description: "Mini aromatizador de ambiente em frasco de vidro com essência azul, varetas de bambu, tampa dourada e rótulo personalizado com nome e mensagem do bebê. Embalado em celofane com laço de cetim azul. Lembrancinha perfumada perfeita para chá de bebê e maternidade de menino.",
    quantity: "Unidade",
    price: "R$ 8,50 / unidade",
    image: maternidadeCheirinhoLuccaLohan,
    highlight: "Novo",
  },
  {
    id: "maternidade-mini-ursinho-azul",
    name: "Mini Sabonete Ursinho Azul",
    category: "Maternidade",
    description: `Mini sabonete em formato de ursinho na cor azul, com detalhes em alto-relevo e perfume suave. Ideal para compor lembrancinhas de chá de bebê e maternidade de menino. ${MINI_DESC_SUFFIX}`,
    quantity: MINI_QTY,
    price: "R$ 2,00 / unidade",
    image: maternidadeMiniUrsinhoAzul,
  },
  {
    id: "maternidade-mini-dinossauros",
    name: "Mini Sabonete Dinossauros",
    category: "Maternidade",
    description: `Mini sabonete em formato de dinossauros variados em cores pastéis (rosa, verde, azul, amarelo, laranja e branco), com acabamento brilhante e perfume suave. Ideal para compor lembrancinhas no tema dinossauros. ${MINI_DESC_SUFFIX}`,
    quantity: MINI_QTY,
    price: MINI_PRICE_LOW,
    image: maternidadeMiniDinossauros,
  },
  {
    id: "maternidade-vela-marcus-augusto",
    name: "Vela Latinha Personalizada Anjinho",
    category: "Maternidade",
    description: "Vela perfumada em latinha de alumínio com rótulo personalizado tema anjinho, nome do bebê e mensagem bíblica (Mateus 5:16). Embalada em celofane com laço de cetim azul. Lembrancinha delicada e simbólica para batizados, chá de bebê e maternidade.",
    quantity: "Unidade",
    price: "R$ 6,00 / unidade",
    image: maternidadeVelaMarcusAugusto,
    highlight: "Novo",
  },
];



export const WHATSAPP_NUMBER = "5583987334129";

export function whatsappLink(message?: string) {
  const base = `https://api.whatsapp.com/send/?phone=%2B${WHATSAPP_NUMBER}&type=phone_number&app_absent=0&utm_source=ig`;
  if (!message) return `${base}&text`;
  return `${base}&text=${encodeURIComponent(message)}`;
}
