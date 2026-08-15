// dados.js — TUDO que é conteúdo mora aqui, separado da página.
//
// Fonte: material de divulgação da própria Andréia (tabela de procedimentos e arte da drenagem,
// enviadas por Sostenes em 14/08/2026) + perfil @andreiacarvalhoestetica.
// Trocar preço, serviço ou foto é mexer SÓ neste arquivo.

export const CLINICA = {
  nome: "Andréia Carvalho",
  assinatura: "Especialista em Estética e Bem-estar",
  cidade: "Leominster, Massachusetts",
  telefone: "(978) 600-3658",
  whatsapp: "19786003658",
  instagram: "https://www.instagram.com/andreiacarvalhoestetica/",
  // Frases dela, do material dela — não foram escritas por nós.
  tagline: "Tecnologia, ciência e cuidado para resultados que <em>você vê e sente.</em>",
  promessa: "Seu corpo merece o melhor.",
  chamada: "Agende sua avaliação e descubra o melhor protocolo para você.",
};

export const PILARES = [
  { t: "Tecnologias avançadas", d: "Equipamentos modernos e seguros." },
  { t: "Atendimento personalizado", d: "Protocolos exclusivos para cada cliente." },
  { t: "Resultados visíveis", d: "Mais autoestima, bem-estar e qualidade de vida." },
  { t: "Segurança e conforto", d: "Procedimentos seguros e sem tempo de parada." },
];

/**
 * Cardápio real, transcrito da tabela dela.
 * ⚠ A tabela dela imprime "R$"; ela atende em Massachusetts e a arte da drenagem usa "$".
 * Adotamos US$ e isso está sinalizado para ela confirmar.
 */
export const SERVICOS = [
  { n: "Dreno Detox", d: "Estimula o sistema linfático, elimina toxinas, reduz inchaço e melhora a circulação.", dur: "60 min", p: 60, destaque: true },
  { n: "Dreno Detox Turbo", d: "Potencializa a eliminação de toxinas, reduz medidas e promove leveza e bem-estar.", dur: "100 min", p: 100 },
  { n: "Drenagem linfática", d: "Massagem que estimula o sistema linfático, reduz inchaços e melhora a circulação.", dur: "60 min", p: 60, destaque: true },
  { n: "Relaxante", d: "Massagem que alivia tensões, reduz o estresse e promove relaxamento profundo.", dur: "70 min", p: 70 },
  { n: "Masculina", d: "Massagem específica para o corpo masculino, ativa a circulação e reduz tensões.", dur: "70 min", p: 70 },
  { n: "Masculina com fortalecimento", d: "Técnicas avançadas que tonificam, fortalecem e modelam o corpo masculino.", dur: "60 min", p: 100 },
  { n: "Drenagem + EMSzero", d: "Drenagem linfática combinada com a tecnologia EMSzero para eliminar líquidos e tonificar.", dur: "60 min", p: 100, destaque: true },
  { n: "Tecnologias", d: "Sessão personalizada com tecnologias avançadas para tratar, modelar e potencializar resultados.", dur: "60 min", p: 100 },
  { n: "Ultracavitação", d: "Tecnologia que quebra células de gordura localizada e reduz medidas.", dur: "por área", p: 50 },
  { n: "Radiofrequência", d: "Estimula o colágeno, melhora a firmeza da pele e reduz flacidez.", dur: "por área", p: 50 },
];

/** Benefícios da drenagem, copiados da arte dela. */
export const BENEFICIOS = [
  "Reduz inchaços e retenção de líquidos",
  "Elimina toxinas e impurezas do corpo",
  "Melhora a circulação e o fluxo linfático",
  "Fortalece o sistema imunológico",
  "Proporciona leveza, bem-estar e conforto",
];

/** Fotos dela. Para publicar mais: põe o arquivo em /img/ e acrescenta uma linha aqui. */
export const FOTOS = [
  { src: "/img/andreia-retrato.jpg", alt: "Andréia Carvalho em estúdio", destaque: true },
  { src: "/img/andreia-dumbo.jpg", alt: "Andréia Carvalho em Nova York" },
];

/** Palavras dela, das legendas do Instagram. */
export const FALAS = [
  "Renovar a autoestima também está nos pequenos cuidados que temos com nós mesmas.",
  "Nem sempre a maior batalha acontece diante dos olhos das pessoas. Entre medos, lágrimas, saudades e recomeços, descobri que a verdadeira força está em não desistir.",
];
