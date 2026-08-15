// dados.js — ÚNICA fonte de conteúdo do site.
//
// Fonte: material da própria Andréia (tabela de procedimentos e arte da drenagem, enviadas por
// Sostenes em 14/08/2026) + questionário respondido por ela em 11/08 (ver a migration
// clinic-now-app/supabase/migrations/20260814164906_clinicnow_catalogo_real_*.sql) +
// perfil @andreiacarvalhoestetica.
//
// O site é GERADO deste arquivo por `node build.mjs`. O HTML sai pronto, com todo o conteúdo
// dentro — nada depende de JavaScript para aparecer. Trocar preço, texto ou foto é mexer aqui
// e rodar o build.

export const CLINICA = {
  nome: "Andréia Carvalho",
  papel: { pt: "Especialista em Estética e Bem-estar", en: "Esthetics & Wellness Specialist" },
  cidade: "Leominster, Massachusetts",
  telefone: "(978) 600-3658",
  whatsapp: "19786003658",
  instagram: "https://www.instagram.com/andreiacarvalhoestetica/",
};

export const TEXTOS = {
  titulo: {
    pt: "Andréia Carvalho · Estética e Bem-estar — Leominster, MA",
    en: "Andréia Carvalho · Esthetics & Wellness — Leominster, MA",
  },
  nav: {
    pt: ["Procedimentos", "Benefícios", "Resultados", "Minha história", "Agendar"],
    en: ["Treatments", "Benefits", "Results", "My story", "Book"],
  },
  selo: { pt: "Esteticista licenciada · Leominster, MA", en: "Licensed esthetician · Leominster, MA" },
  // Tagline dela, do material dela.
  h1: { pt: "Tecnologia, ciência e cuidado", en: "Technology, science and care" },
  h1s: { pt: "para resultados que você vê e sente.", en: "for results you see and feel." },
  sub: {
    pt: "Drenagem linfática, dreno detox, EMSzero e tecnologias corporais — com protocolo montado para o seu corpo. Atendimento em português e inglês.",
    en: "Lymphatic drainage, detox, EMSzero and body technologies — with a protocol built for your body. Served in Portuguese and English.",
  },
  ctaAgendar: { pt: "Agendar avaliação", en: "Book an assessment" },
  ctaVer: { pt: "Ver procedimentos", en: "See treatments" },
  rotServicos: { pt: "Procedimentos", en: "Treatments" },
  h2Servicos: { pt: "Cada corpo pede", en: "Every body asks for" },
  h2ServicosScript: { pt: "o seu protocolo.", en: "its own protocol." },
  introServicos: {
    pt: "Toda primeira vez começa por uma avaliação — é nela que a gente decide junto o que faz sentido para você.",
    en: "Every first visit starts with an assessment — that's where we decide together what makes sense for you.",
  },
  th: { pt: ["Procedimento", "O que é", "Duração", "Valor"], en: ["Treatment", "What it is", "Duration", "Price"] },
  moeda: {
    pt: "Valores em dólar (US$). Atendimento em Leominster, Massachusetts.",
    en: "Prices in US dollars. Served in Leominster, Massachusetts.",
  },
  rotBenef: { pt: "Drenagem linfática", en: "Lymphatic drainage" },
  h2Benef: { pt: "Cuidado que dá leveza.", en: "Care that brings lightness." },
  h2BenefScript: { pt: "Resultados que se veem.", en: "Results you can see." },
  rotResultados: { pt: "Resultados", en: "Results" },
  h2Resultados: { pt: "O que muda", en: "What changes" },
  h2ResultadosScript: { pt: "de verdade.", en: "for real." },
  introResultados: {
    pt: "Cada corpo responde de um jeito. O que se repete é a leveza, a medida que cede e a autoestima que volta — e é disso que as clientes mais falam.",
    en: "Every body responds differently. What repeats is the lightness, the measurements coming down and the self-esteem coming back.",
  },
  rotHistoria: { pt: "Minha história", en: "My story" },
  h2Historia: { pt: "A transformação começa", en: "Transformation starts" },
  h2HistoriaScript: { pt: "por dentro.", en: "on the inside." },
  introHistoria: {
    pt: "Eu mostro a minha própria evolução porque foi ela que me ensinou o que faço hoje. Vim do Brasil e construí aqui, do zero, um trabalho que já passou de mil atendimentos.",
    en: "I show my own journey because it taught me what I do today. I came from Brazil and built this practice from nothing — more than a thousand sessions.",
  },
  citacao: {
    pt: "Nem sempre a maior batalha acontece diante dos olhos das pessoas. Entre medos, lágrimas, saudades e recomeços, descobri que a verdadeira força está em não desistir.",
    en: "The hardest battles are not always the ones people see. Between fear, tears, longing and starting over, I learned that real strength is not giving up.",
  },
  rotAgendar: { pt: "Agendar", en: "Book" },
  h2Agendar: {
    pt: "Agende sua avaliação e descubra<br>o melhor protocolo para você.",
    en: "Book your assessment and find<br>the right protocol for you.",
  },
  promessa: { pt: "Seu corpo merece o melhor.", en: "Your body deserves the best." },
  ctaZap: { pt: "Chamar no WhatsApp", en: "Message on WhatsApp" },
  ctaInsta: { pt: "Ver o Instagram", en: "See Instagram" },
  msgZap: {
    pt: "Oi, Andréia! Vim pelo site e queria agendar uma avaliação.",
    en: "Hi Andréia! I came from your website and I'd like to book an assessment.",
  },
  labelZap: { pt: "WhatsApp", en: "WhatsApp" },
  labelOnde: { pt: "Onde", en: "Where" },
  labelIdiomas: { pt: "Idiomas", en: "Languages" },
  valorIdiomas: { pt: "Português e inglês", en: "Portuguese and English" },
  // Escopo estético dito ONDE as frases dela aparecem, não só no rodapé (achado da auditoria:
  // o aviso ficava a 3.000px das alegações).
  escopo: {
    pt: "Procedimentos estéticos de bem-estar. Não substituem tratamento médico e os resultados variam de pessoa para pessoa.",
    en: "Aesthetic wellness procedures. They do not replace medical treatment and results vary from person to person.",
  },
  rodape: {
    pt: "Esteticista licenciada. Este site é informativo e não substitui avaliação profissional. Os procedimentos são estéticos, de bem-estar, e não têm finalidade médica. Resultados variam de pessoa para pessoa.",
    en: "Licensed esthetician. This site is informational and does not replace a professional assessment. These are aesthetic wellness procedures with no medical purpose. Results vary from person to person.",
  },
};

export const PILARES = [
  { pt: ["Tecnologias avançadas", "Equipamentos modernos e seguros."], en: ["Advanced technology", "Modern, safe equipment."] },
  { pt: ["Atendimento personalizado", "Protocolos exclusivos para cada cliente."], en: ["Personalized care", "A protocol built for each client."] },
  { pt: ["Resultados visíveis", "Mais autoestima, bem-estar e qualidade de vida."], en: ["Visible results", "More self-esteem, wellness and quality of life."] },
  { pt: ["Segurança e conforto", "Procedimentos seguros e sem tempo de parada."], en: ["Safety and comfort", "Safe procedures with no downtime."] },
];

/**
 * Cardápio transcrito da tabela dela, conferido item a item.
 *
 * DUAS DIVERGÊNCIAS ABERTAS, que só a Andréia desempata (nenhuma foi resolvida por palpite):
 *  1. A tabela dela imprime "R$"; a arte da drenagem imprime "$60,00" e ela atende em
 *     Massachusetts. Publicado em US$.
 *  2. "Pós-operatório" (US$100 / 80 min) consta no questionário dela de 11/08 e NÃO consta
 *     nesta tabela. FORA do site até ela confirmar — ver AGUARDANDO_CONFIRMACAO abaixo.
 *
 * A regra: publica-se o que ELA publicou. O flyer é a lista de preços que ela mesma divulga;
 * o questionário é documento operacional interno. São coisas diferentes, e a descrição de um
 * serviço de cuidado pós-cirúrgico não pode ser escrita por nós.
 */
export const SERVICOS = [
  { pt: ["Dreno Detox", "Estimula o sistema linfático, elimina toxinas, reduz inchaço e melhora a circulação."], en: ["Detox Drainage", "Stimulates the lymphatic system, eliminates toxins, reduces swelling and improves circulation."], dur: { pt: "60 min", en: "60 min" }, p: 60, destaque: true },
  { pt: ["Dreno Detox Turbo", "Potencializa a eliminação de toxinas, reduz medidas e promove leveza e bem-estar."], en: ["Detox Drainage Turbo", "Boosts toxin elimination, reduces measurements and brings lightness and wellness."], dur: { pt: "100 min", en: "100 min" }, p: 100 },
  { pt: ["Drenagem linfática", "Massagem que estimula o sistema linfático, reduz inchaços e melhora a circulação."], en: ["Lymphatic drainage", "Massage that stimulates the lymphatic system, reduces swelling and improves circulation."], dur: { pt: "60 min", en: "60 min" }, p: 60, destaque: true },
  { pt: ["Relaxante", "Massagem que alivia tensões, reduz o estresse e promove relaxamento profundo."], en: ["Relaxing massage", "Massage that relieves tension, reduces stress and brings deep relaxation."], dur: { pt: "70 min", en: "70 min" }, p: 70 },
  { pt: ["Masculina", "Massagem específica para o corpo masculino, ativa a circulação e reduz tensões."], en: ["Men's massage", "Massage designed for the male body, activates circulation and relieves tension."], dur: { pt: "70 min", en: "70 min" }, p: 70 },
  { pt: ["Masculina com fortalecimento", "Técnicas avançadas que tonificam, fortalecem e modelam o corpo masculino."], en: ["Men's strengthening massage", "Advanced techniques that tone, strengthen and shape the male body."], dur: { pt: "60 min", en: "60 min" }, p: 100 },
  { pt: ["Drenagem + EMSzero", "Drenagem linfática combinada com a tecnologia EMSzero para eliminar líquidos e tonificar."], en: ["Drainage + EMSzero", "Lymphatic drainage combined with EMSzero technology to reduce fluid and tone."], dur: { pt: "60 min", en: "60 min" }, p: 100, destaque: true },
  { pt: ["Tecnologias", "Sessão personalizada com tecnologias avançadas para tratar, modelar e potencializar resultados."], en: ["Technologies", "Personalized session with advanced technology to treat, shape and enhance results."], dur: { pt: "60 min", en: "60 min" }, p: 100 },
  { pt: ["Ultracavitação", "Tecnologia que quebra células de gordura localizada e reduz medidas."], en: ["Ultracavitation", "Technology that breaks down localized fat cells and reduces measurements."], dur: { pt: "por área", en: "per area" }, p: 50 },
  { pt: ["Radiofrequência", "Estimula o colágeno, melhora a firmeza da pele e reduz flacidez."], en: ["Radiofrequency", "Stimulates collagen, improves skin firmness and reduces sagging."], dur: { pt: "por área", en: "per area" }, p: 50 },
];

/**
 * Serviços que existem no questionário dela mas NÃO no material que ela divulga.
 * Não entram no site. Para publicar: confirmar com ela, pegar a descrição NAS PALAVRAS DELA,
 * mover para SERVICOS e tirar o `confirmar`.
 */
export const AGUARDANDO_CONFIRMACAO = [
  { nome: "Pós-operatório", preco: 100, duracao: "80 min", fonte: "questionário de 11/08/2026, item 3.2", confirmar: true },
];

/** Benefícios da drenagem, copiados da arte dela. */
/**
 * PALAVRAS DELA, verbatim. Uma versão anterior suavizou "elimina toxinas" e "fortalece o sistema
 * imunológico" — e revertemos, por dois motivos:
 *   1. a copy de uma profissional licenciada sobre a própria prática regulada é DELA. Vale para
 *      incluir serviço, para preço e para suavizar alegação. Editar sem ela é o mesmo erro que
 *      cometemos ao escrever a descrição do pós-operatório;
 *   2. a suavização era SELETIVA e por isso inútil: "potencializa a eliminação de toxinas" e
 *      "quebra células de gordura localizada" ficaram intactas na mesma página. Três alegações
 *      da mesma família com três forças diferentes não protegem ninguém.
 *
 * A mitigação que vale é o aviso de escopo (TEXTOS.escopo), que aparece a ~200px das frases,
 * nas seções de procedimentos e de benefícios.
 *
 * ⚠ DECISÃO PENDENTE DA ANDRÉIA, as três juntas: "elimina toxinas", "potencializa a eliminação
 * de toxinas" e "quebra células de gordura localizada". Sem qualificação, leem como alegação
 * terapêutica e ficam fora do escopo de esteticista licenciada em Massachusetts. Mantém como
 * ela escreveu, ou suaviza? Quem decide é ela.
 */
export const BENEFICIOS = [
  { pt: "Reduz inchaços e retenção de líquidos", en: "Reduces swelling and fluid retention" },
  { pt: "Elimina toxinas e impurezas do corpo", en: "Eliminates toxins and impurities from the body" },
  { pt: "Melhora a circulação e o fluxo linfático", en: "Improves circulation and lymphatic flow" },
  { pt: "Fortalece o sistema imunológico", en: "Strengthens the immune system" },
  { pt: "Proporciona leveza, bem-estar e conforto", en: "Brings lightness, wellness and comfort" },
];

/**
 * Seção Resultados. Sem foto de cliente.
 * PROCEDÊNCIA de cada número:
 *  - "1.000+": bio pública do @andreiacarvalhoestetica — "+ 1.000 atendimentos".
 *  - "2 idiomas": bio (🇧🇷🇺🇸) e resposta 1.4 do questionário.
 *  - "0 tempo de parada": pilar "Segurança e conforto" da tabela dela ("sem tempo de parada").
 * Número sem procedência não entra aqui.
 */
export const RESULTADOS = [
  { num: "1.000+", pt: "atendimentos realizados", en: "sessions delivered" },
  { num: "2", pt: "idiomas: português e inglês", en: "languages: Portuguese and English" },
  { num: "0", pt: "tempo de parada nos protocolos", en: "downtime in the protocols" },
];

export const FALAS = [
  { pt: "Renovar a autoestima também está nos pequenos cuidados que temos com nós mesmas.", en: "Renewing your self-esteem also lives in the small ways you care for yourself." },
];

/** Fotos dela. Acrescentar foto = acrescentar linha aqui e rodar o build. */
export const FOTOS = [
  { src: "/img/andreia-dumbo.jpg", pt: "Andréia Carvalho em Nova York", en: "Andréia Carvalho in New York", pos: "50% 50%", w: 787, h: 1400 },
];
