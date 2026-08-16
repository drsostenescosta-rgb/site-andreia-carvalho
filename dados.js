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

/**
 * ⚠ IDIOMA — confirmado por Sostenes em 14/08/2026:
 *   FALA e entende: português e espanhol.
 *   NÃO fala: inglês. Atende americanas com apoio de tradução.
 *
 * O site chegou a prometer "atendimento em português e inglês". Promessa que ela não cumpre na
 * sala: a cliente descobre no atendimento, não na página, e o custo é dela.
 *
 * Espanhol é DIFERENTE e é ativo comercial: em Leominster ela atende a comunidade hispânica
 * direto, sem intermediário. A página /es diz isso com todas as letras ("sin intermediarios"),
 * porque é o diferencial dela contra qualquer clínica americana da região.
 *
 * As três páginas continuam existindo. Em inglês, a cliente lê no idioma dela e a conversa se
 * resolve na sala com tradução — e o site avisa isso antes de ela agendar.
 */
export const CLINICA = {
  nome: "Andréia Carvalho",
  papel: { pt: "Especialista em Estética e Bem-estar", en: "Esthetics & Wellness Specialist", es: "Especialista en Estética y Bienestar" },
  cidade: "Leominster, Massachusetts",
  // Endereco completo informado por Sostenes em 15/08/2026. Ate entao so existia "54 Main Street,
  // 1o piso, sala 001A" — sem cidade e sem ZIP, o que aponta para dezenas de lugares em
  // Massachusetts. Aparece no site porque o Google usa a consistencia entre site, perfil e
  // Instagram (o mesmo endereco escrito igual nos tres) para decidir quem mostrar na busca local.
  endereco: "54 Main Street, 1º piso, sala 001A",
  cidadeEstadoZip: "Leominster, MA 01453",
  telefone: "(978) 600-3658",
  whatsapp: "19786003658",
  instagram: "https://www.instagram.com/andreiacarvalhoestetica/",
};

export const TEXTOS = {
  titulo: {
    pt: "Andréia Carvalho · Estética e Bem-estar — Leominster, MA",
    en: "Andréia Carvalho · Esthetics & Wellness — Leominster, MA",
    es: "Andréia Carvalho · Estética y Bienestar — Leominster, MA",
  },
  nav: {
    pt: ["Procedimentos", "Equipamentos", "Benefícios", "Resultados", "Minha história", "Agendar"],
    en: ["Treatments", "Equipment", "Benefits", "Results", "My story", "Book"],
    es: ["Procedimientos", "Equipos", "Beneficios", "Resultados", "Mi historia", "Agendar"],
  },
  selo: { pt: "Esteticista licenciada · Leominster, MA", en: "Licensed esthetician · Leominster, MA", es: "Esteticista licenciada · Leominster, MA" },
  // Tagline dela, do material dela.
  h1: { pt: "Tecnologia, ciência e cuidado", en: "Technology, science and care", es: "Tecnología, ciencia y cuidado" },
  h1s: { pt: "para resultados que você vê e sente.", en: "for results you see and feel.", es: "para resultados que se ven y se sienten." },
  sub: {
    pt: "Drenagem linfática, dreno detox, EMShape Neo e tecnologias corporais — com protocolo montado para o seu corpo. Atendo em português e espanhol, e recebo também quem fala inglês, com apoio de tradução.",
    en: "Lymphatic drainage, detox, EMShape Neo and body technologies — with a protocol built for your body. I speak Portuguese and Spanish, and English-speaking clients are welcome with translation support.",
    es: "Drenaje linfático, drenaje detox, EMShape Neo y tecnologías corporales — con un protocolo hecho para tu cuerpo. Te atiendo en español y en portugués, sin intermediarios.",
  },
  ctaAgendar: { pt: "Agendar avaliação", en: "Book an assessment", es: "Agendar evaluación" },
  // Porta de entrada para QUEM AINDA NAO SABE o que quer. "Agendar" so serve para quem ja decidiu;
  // a maioria chega com duvida, e mandar essa pessoa para "agendar" e pedir compromisso antes da
  // conversa. Esta e a mesma regra de venda que o motor da Emily segue: descobrir antes de fechar.
  ctaDuvida: { pt: "Tirar uma dúvida", en: "Ask a question", es: "Hacer una pregunta" },
  msgDuvida: {
    pt: "Oi, Andréia! Vim pelo site e queria tirar uma dúvida sobre os procedimentos.",
    en: "Hi Andréia! I came from your website and I have a question about the treatments.",
    es: "¡Hola, Andréia! Vengo desde tu sitio y quisiera hacer una pregunta sobre los procedimientos.",
  },
  duvidaAjuda: {
    pt: "Não sabe por onde começar? Me conta o que você quer melhorar que eu te digo o que faz sentido.",
    en: "Not sure where to start? Tell me what you'd like to improve and I'll tell you what makes sense.",
    es: "¿No sabes por dónde empezar? Cuéntame qué quieres mejorar y te digo qué tiene sentido.",
  },
  ctaVer: { pt: "Ver procedimentos", en: "See treatments", es: "Ver procedimientos" },
  rotServicos: { pt: "Procedimentos", en: "Treatments", es: "Procedimientos" },
  h2Servicos: { pt: "Cada corpo pede", en: "Every body asks for", es: "Cada cuerpo pide" },
  h2ServicosScript: { pt: "o seu protocolo.", en: "its own protocol.", es: "su propio protocolo." },
  introServicos: {
    pt: "Toda primeira vez começa por uma avaliação — é nela que a gente decide junto o que faz sentido para você.",
    en: "Every first visit starts with an assessment — that's where we decide together what makes sense for you.",
    es: "Toda primera vez empieza con una evaluación — ahí decidimos juntas qué tiene sentido para ti.",
  },
  th: { pt: ["Procedimento", "O que é", "Duração", "Valor"], en: ["Treatment", "What it is", "Duration", "Price"], es: ["Procedimiento", "Qué es", "Duración", "Precio"] },
  moeda: {
    pt: "Valores em dólar (US$). Atendimento em Leominster, Massachusetts.",
    en: "Prices in US dollars. Served in Leominster, Massachusetts.",
    es: "Precios en dólares (US$). Atención en Leominster, Massachusetts.",
  },
  rotEquip: { pt: "Equipamentos", en: "Equipment", es: "Equipos" },
  h2Equip: { pt: "O que cada aparelho faz", en: "What each device does", es: "Qué hace cada aparato" },
  h2EquipScript: { pt: "e o que você sente.", en: "and what you feel.", es: "y qué se siente." },
  introEquip: {
    pt: "A pergunta que mais chega aqui é \u201Cdói?\u201D. Em vez de responder que não, prefiro te contar exatamente o que acontece — e lembrar que, em qualquer momento, é só você falar que eu ajusto.",
    en: "The question I get the most is \u201Cdoes it hurt?\u201D. Instead of just saying no, I'd rather tell you exactly what happens — and remind you that at any moment you can say so and I'll adjust.",
    es: "La pregunta que más me hacen es \u201C¿duele?\u201D. En vez de responder que no, prefiero contarte exactamente qué pasa — y recordarte que en cualquier momento me dices y lo ajusto.",
  },
  notaEquip: {
    pt: "Qual aparelho faz sentido para você, e se algum não faz, é o que a gente decide junto na avaliação. Isso depende do seu corpo e do seu histórico — não dá para responder por mensagem.",
    en: "Which device makes sense for you — and which doesn't — is what we decide together at the assessment. It depends on your body and your history, and that can't be answered over a message.",
    es: "Qué aparato tiene sentido para ti, y cuál no, es lo que decidimos juntas en la evaluación. Depende de tu cuerpo y de tu historial, y eso no se responde por mensaje.",
  },
  rotBenef: { pt: "Drenagem linfática", en: "Lymphatic drainage", es: "Drenaje linfático" },
  h2Benef: { pt: "Cuidado que dá leveza.", en: "Care that brings lightness.", es: "Cuidado que da ligereza." },
  h2BenefScript: { pt: "Resultados que se veem.", en: "Results you can see.", es: "Resultados que se ven." },
  rotResultados: { pt: "Resultados", en: "Results", es: "Resultados" },
  h2Resultados: { pt: "O que muda", en: "What changes", es: "Lo que cambia" },
  h2ResultadosScript: { pt: "de verdade.", en: "for real.", es: "de verdad." },
  introResultados: {
    pt: "Cada corpo responde de um jeito. O que se repete é a leveza, a medida que cede e a autoestima que volta — e é disso que as clientes mais falam.",
    en: "Every body responds differently. What repeats is the lightness, the measurements coming down and the self-esteem coming back.",
    es: "Cada cuerpo responde a su manera. Lo que se repite es la ligereza, las medidas que bajan y la autoestima que vuelve.",
  },
  rotHistoria: { pt: "Minha história", en: "My story", es: "Mi historia" },
  h2Historia: { pt: "A transformação começa", en: "Transformation starts", es: "La transformación empieza" },
  h2HistoriaScript: { pt: "por dentro.", en: "on the inside.", es: "por dentro." },
  introHistoria: {
    pt: "Eu mostro a minha própria evolução porque foi ela que me ensinou o que faço hoje. Vim do Brasil e construí aqui, do zero, um trabalho que já passou de mil atendimentos.",
    en: "I show my own journey because it taught me what I do today. I came from Brazil and built this practice from nothing — more than a thousand sessions.",
    es: "Muestro mi propia evolución porque fue ella la que me enseñó lo que hago hoy. Vine de Brasil y construí aquí, desde cero, un trabajo que ya pasó de mil atenciones.",
  },
  citacao: {
    pt: "Nem sempre a maior batalha acontece diante dos olhos das pessoas. Entre medos, lágrimas, saudades e recomeços, descobri que a verdadeira força está em não desistir.",
    en: "The hardest battles are not always the ones people see. Between fear, tears, longing and starting over, I learned that real strength is not giving up.",
    es: "No siempre la batalla más grande sucede delante de los ojos de la gente. Entre miedos, lágrimas, nostalgia y volver a empezar, descubrí que la verdadera fuerza está en no rendirse.",
  },
  rotAgendar: { pt: "Agendar", en: "Book", es: "Agendar" },
  h2Agendar: {
    pt: "Agende sua avaliação e descubra<br>o melhor protocolo para você.",
    en: "Book your assessment and find<br>the right protocol for you.",
    es: "Agenda tu evaluación y descubre<br>el mejor protocolo para ti.",
  },
  promessa: { pt: "Seu corpo merece o melhor.", en: "Your body deserves the best.", es: "Tu cuerpo merece lo mejor." },
  ctaZap: { pt: "Chamar no WhatsApp", en: "Message on WhatsApp", es: "Escribir por WhatsApp" },
  ctaInsta: { pt: "Ver o Instagram", en: "See Instagram", es: "Ver el Instagram" },
  msgZap: {
    pt: "Oi, Andréia! Vim pelo site e queria agendar uma avaliação.",
    en: "Hi Andréia! I came from your website and I'd like to book an assessment.",
    es: "¡Hola, Andréia! Vengo desde tu sitio web y quisiera agendar una evaluación.",
  },
  labelZap: { pt: "WhatsApp", en: "WhatsApp", es: "WhatsApp" },
  labelOnde: { pt: "Onde", en: "Where", es: "Dónde" },
  labelIdiomas: { pt: "Idiomas", en: "Languages", es: "Idiomas" },
  valorIdiomas: {
    pt: "Português e espanhol. Inglês com apoio de tradução",
    en: "Portuguese and Spanish. English with translation support",
    es: "Español y portugués. Inglés con apoyo de traducción",
  },
  // Escopo estético dito ONDE as frases dela aparecem, não só no rodapé (achado da auditoria:
  // o aviso ficava a 3.000px das alegações).
  escopo: {
    pt: "Procedimentos estéticos de bem-estar. Não substituem tratamento médico e os resultados variam de pessoa para pessoa.",
    en: "Aesthetic wellness procedures. They do not replace medical treatment and results vary from person to person.",
    es: "Procedimientos estéticos de bienestar. No sustituyen tratamiento médico y los resultados varían de persona a persona.",
  },
  rodape: {
    pt: "Esteticista licenciada. Este site é informativo e não substitui avaliação profissional. Os procedimentos são estéticos, de bem-estar, e não têm finalidade médica. Resultados variam de pessoa para pessoa.",
    en: "Licensed esthetician. This site is informational and does not replace a professional assessment. These are aesthetic wellness procedures with no medical purpose. Results vary from person to person.",
    es: "Esteticista licenciada. Este sitio es informativo y no sustituye una evaluación profesional. Los procedimientos son estéticos, de bienestar, y no tienen finalidad médica. Los resultados varían de persona a persona.",
  },
};

export const PILARES = [
  { pt: ["Tecnologias avançadas", "Equipamentos modernos e seguros."], en: ["Advanced technology", "Modern, safe equipment."], es: ["Tecnologías avanzadas", "Equipos modernos y seguros."] },
  { pt: ["Atendimento personalizado", "Protocolos exclusivos para cada cliente."], en: ["Personalized care", "A protocol built for each client."], es: ["Atención personalizada", "Protocolos exclusivos para cada clienta."] },
  { pt: ["Resultados visíveis", "Mais autoestima, bem-estar e qualidade de vida."], en: ["Visible results", "More self-esteem, wellness and quality of life."], es: ["Resultados visibles", "Más autoestima, bienestar y calidad de vida."] },
  { pt: ["Segurança e conforto", "Procedimentos seguros e sem tempo de parada."], en: ["Safety and comfort", "Safe procedures with no downtime."], es: ["Seguridad y confort", "Procedimientos seguros y sin tiempo de reposo."] },
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
  { pt: ["Dreno Detox", "Estimula o sistema linfático, elimina toxinas, reduz inchaço e melhora a circulação."], en: ["Detox Drainage", "Stimulates the lymphatic system, eliminates toxins, reduces swelling and improves circulation."], es: ["Drenaje Detox", "Estimula el sistema linfático, elimina toxinas, reduce la hinchazón y mejora la circulación."], dur: { pt: "60 min", en: "60 min", es: "60 min" }, p: 60, destaque: true },
  { pt: ["Dreno Detox Turbo", "Potencializa a eliminação de toxinas, reduz medidas e promove leveza e bem-estar."], en: ["Detox Drainage Turbo", "Boosts toxin elimination, reduces measurements and brings lightness and wellness."], es: ["Drenaje Detox Turbo", "Potencia la eliminación de toxinas, reduce medidas y aporta ligereza y bienestar."], dur: { pt: "100 min", en: "100 min", es: "100 min" }, p: 100 },
  { pt: ["Drenagem linfática", "Massagem que estimula o sistema linfático, reduz inchaços e melhora a circulação."], en: ["Lymphatic drainage", "Massage that stimulates the lymphatic system, reduces swelling and improves circulation."], es: ["Drenaje linfático", "Masaje que estimula el sistema linfático, reduce hinchazones y mejora la circulación."], dur: { pt: "60 min", en: "60 min", es: "60 min" }, p: 60, destaque: true },
  { pt: ["Relaxante", "Massagem que alivia tensões, reduz o estresse e promove relaxamento profundo."], en: ["Relaxing massage", "Massage that relieves tension, reduces stress and brings deep relaxation."], es: ["Relajante", "Masaje que alivia tensiones, reduce el estrés y promueve relajación profunda."], dur: { pt: "70 min", en: "70 min", es: "70 min" }, p: 70 },
  { pt: ["Masculina", "Massagem específica para o corpo masculino, ativa a circulação e reduz tensões."], en: ["Men's massage", "Massage designed for the male body, activates circulation and relieves tension."], es: ["Masculino", "Masaje específico para el cuerpo masculino, activa la circulación y reduce tensiones."], dur: { pt: "70 min", en: "70 min", es: "70 min" }, p: 70 },
  { pt: ["Masculina com fortalecimento", "Técnicas avançadas que tonificam, fortalecem e modelam o corpo masculino."], en: ["Men's strengthening massage", "Advanced techniques that tone, strengthen and shape the male body."], es: ["Masculino con fortalecimiento", "Técnicas avanzadas que tonifican, fortalecen y moldean el cuerpo masculino."], dur: { pt: "60 min", en: "60 min", es: "60 min" }, p: 100 },
  { pt: ["Drenagem + EMShape Neo", "Drenagem linfática combinada com a tecnologia EMShape Neo para eliminar líquidos e tonificar."], en: ["Drainage + EMShape Neo", "Lymphatic drainage combined with EMShape Neo technology to reduce fluid and tone."], es: ["Drenaje + EMShape Neo", "Drenaje linfático combinado con la tecnología EMShape Neo para eliminar líquidos y tonificar."], dur: { pt: "60 min", en: "60 min", es: "60 min" }, p: 100, destaque: true },
  { pt: ["Tecnologias", "Sessão personalizada com tecnologias avançadas para tratar, modelar e potencializar resultados."], en: ["Technologies", "Personalized session with advanced technology to treat, shape and enhance results."], es: ["Tecnologías", "Sesión personalizada con tecnologías avanzadas para tratar, moldear y potenciar resultados."], dur: { pt: "60 min", en: "60 min", es: "60 min" }, p: 100 },
  { pt: ["Ultracavitação", "Tecnologia que quebra células de gordura localizada e reduz medidas."], en: ["Ultracavitation", "Technology that breaks down localized fat cells and reduces measurements."], es: ["Ultracavitación", "Tecnología que rompe células de grasa localizada y reduce medidas."], dur: { pt: "por área", en: "per area", es: "por zona" }, p: 50 },
  { pt: ["Radiofrequência", "Estimula o colágeno, melhora a firmeza da pele e reduz flacidez."], en: ["Radiofrequency", "Stimulates collagen, improves skin firmness and reduces sagging."], es: ["Radiofrecuencia", "Estimula el colágeno, mejora la firmeza de la piel y reduce la flacidez."], dur: { pt: "por área", en: "per area", es: "por zona" }, p: 50 },
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
  { pt: "Reduz inchaços e retenção de líquidos", en: "Reduces swelling and fluid retention", es: "Reduce hinchazones y retención de líquidos" },
  { pt: "Elimina toxinas e impurezas do corpo", en: "Eliminates toxins and impurities from the body", es: "Elimina toxinas e impurezas del cuerpo" },
  { pt: "Melhora a circulação e o fluxo linfático", en: "Improves circulation and lymphatic flow", es: "Mejora la circulación y el flujo linfático" },
  { pt: "Fortalece o sistema imunológico", en: "Strengthens the immune system", es: "Fortalece el sistema inmunológico" },
  { pt: "Proporciona leveza, bem-estar e conforto", en: "Brings lightness, wellness and comfort", es: "Proporciona ligereza, bienestar y confort" },
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
  { num: "1.000+", pt: "atendimentos realizados", en: "sessions delivered", es: "atenciones realizadas" },
  { num: "2", pt: "idiomas que eu falo: português e espanhol", en: "languages I speak: Portuguese and Spanish", es: "idiomas que hablo: español y portugués" },
  { num: "0", pt: "tempo de parada nos protocolos", en: "downtime in the protocols", es: "tiempo de reposo en los protocolos" },
];

export const FALAS = [
  { pt: "Renovar a autoestima também está nos pequenos cuidados que temos com nós mesmas.", en: "Renewing your self-esteem also lives in the small ways you care for yourself.", es: "Renovar la autoestima también está en los pequeños cuidados que tenemos con nosotras mismas." },
];

/**
 * Fotos dela na seção "história". Acrescentar foto = acrescentar linha aqui e rodar o build.
 *
 * 14/08/2026 — Sostenes pediu para retirar a foto de Nova York (calça verde, ponte de Manhattan).
 * O arquivo saiu de /img junto, senão continuaria acessível pela URL direta mesmo sem link na
 * página. Recuperável pelo git se ela quiser de volta.
 *
 * Com o array vazio a seção "história" vira uma coluna só (ver `temFotos` no build.mjs), então
 * não fica buraco no layout. Ao repor uma foto, informar `w` e `h` reais — sem eles a imagem
 * estica e distorce o rosto.
 */
export const FOTOS = [
  // Ensaio de branding por Thais Araujo Photo, da galeria da propria Andreia (15/08/2026).
  // Escolhidas do conjunto BRANDING, nao do de dezembro: aquele tem arvore de Natal em todo
  // quadro e envelheceria o site em janeiro. Estas duas sao atemporais — e a do arco conversa
  // com o bege e as curvas que o site ja usa, o que nao e coincidencia: e a mesma direcao de marca.
  { src: "/img/andreia-arco.jpg", pt: "Andréia Carvalho", en: "Andréia Carvalho", es: "Andréia Carvalho", pos: "50% 32%", w: 800, h: 1200 },
  { src: "/img/andreia-terno.jpg", pt: "Andréia Carvalho", en: "Andréia Carvalho", es: "Andréia Carvalho", pos: "50% 22%", w: 800, h: 1200 },
];

/**
 * Equipamentos — o que a tecnologia FAZ e o que a cliente SENTE. Nada além disso.
 *
 * Duas coisas que NÃO entram aqui, e o motivo de cada uma:
 *
 * 1. ALEGAÇÃO DE FDA. Em 16/08 consultei o banco 510(k) pela API da openFDA: "EMShape" não
 *    retorna nada, nem por aparelho nem por fabricante. A API responde (BTL volta com K233849,
 *    K213344), então não é falha de busca. Isso NÃO prova que não existe — a Emsculpt é
 *    registrada como BTL-899A, e não pelo nome comercial. Mas escrever "liberado pela FDA" com
 *    base no site de quem vende o aparelho é alegação regulatória sem fonte, no site de uma
 *    esteticista licenciada em Massachusetts. Entra quando o fornecedor der o número K e eu
 *    confirmar: aí vira "FDA 510(k) K_____", que é mais forte do que qualquer adjetivo.
 *
 * 2. PROMESSA DE RESULTADO. "Sente" é fato do aparelho; "vai ficar" é promessa. A regra é a
 *    mesma que a Emily segue no WhatsApp desde o primeiro dia.
 *
 * O campo `sensacao` é o que mais importa comercialmente: a pergunta nº 1 das clientes é "dói?",
 * e a resposta honesta não é "não dói" — é descrever o que se sente e dizer que ela manda parar.
 */
export const EQUIPAMENTOS = [
  {
    id: "emshape",
    nome: { pt: "EMShape Neo", en: "EMShape Neo", es: "EMShape Neo" },
    tipo: { pt: "Contração muscular", en: "Muscle contraction", es: "Contracción muscular" },
    // Palavras da própria Andréia, resposta 3.5 do questionário. Não reescrever.
    oque: {
      pt: "Máquina de tonificação muscular que trabalha três áreas em uma sessão: abdômen, posterior e glúteos.",
      en: "A muscle toning machine that works three areas in one session: abdomen, back and glutes.",
      es: "Máquina de tonificación muscular que trabaja tres áreas en una sesión: abdomen, posterior y glúteos.",
    },
    como: {
      pt: "Um campo eletromagnético provoca contrações musculares involuntárias — mais profundas do que as que você consegue sozinha, porque não dependem da sua vontade.",
      en: "An electromagnetic field triggers involuntary muscle contractions — deeper than the ones you can produce on your own, because they don't depend on your effort.",
      es: "Un campo electromagnético provoca contracciones musculares involuntarias — más profundas que las que logras por tu cuenta, porque no dependen de tu voluntad.",
    },
    sensacao: {
      pt: "A contração é forte e estranha na primeira vez, mas não é dor. Você fica deitada e a intensidade sobe aos poucos — se incomodar em algum momento, você fala e a Andréia baixa na hora.",
      en: "The contraction feels strong and strange the first time, but it isn't pain. You lie down and the intensity rises gradually — if it bothers you at any point, you say so and Andréia turns it down right away.",
      es: "La contracción se siente fuerte y extraña la primera vez, pero no es dolor. Te acuestas y la intensidad sube poco a poco — si te incomoda en algún momento, se lo dices y Andréia la baja al instante.",
    },
  },
  {
    id: "radiofrequencia",
    nome: { pt: "Radiofrequência", en: "Radiofrequency", es: "Radiofrecuencia" },
    tipo: { pt: "Aquecimento controlado", en: "Controlled heating", es: "Calentamiento controlado" },
    oque: {
      pt: "Aplicada por área, com o aparelho deslizando sobre a pele.",
      en: "Applied by area, with the device gliding over the skin.",
      es: "Aplicada por área, con el aparato deslizando sobre la piel.",
    },
    como: {
      pt: "Ondas de radiofrequência aquecem as camadas mais profundas da pele de forma controlada, sem cortar nem furar nada.",
      en: "Radiofrequency waves heat the deeper layers of the skin in a controlled way, with no cutting and no needles.",
      es: "Ondas de radiofrecuencia calientan las capas más profundas de la piel de forma controlada, sin cortar ni pinchar.",
    },
    sensacao: {
      pt: "Um calor morno que vai subindo, parecido com uma pedra quente que anda. A Andréia acompanha a temperatura o tempo todo — se esquentar demais para você, é só falar.",
      en: "A gentle warmth that builds up, like a warm stone moving over you. Andréia tracks the temperature the whole time — if it gets too warm for you, just say so.",
      es: "Un calor tibio que va subiendo, parecido a una piedra caliente que se mueve. Andréia controla la temperatura todo el tiempo — si te resulta demasiado, solo dilo.",
    },
  },
  {
    id: "ultracavitacao",
    nome: { pt: "Ultracavitação", en: "Ultrasound cavitation", es: "Ultracavitación" },
    tipo: { pt: "Ultrassom", en: "Ultrasound", es: "Ultrasonido" },
    oque: {
      pt: "Aplicada por área, com o aparelho em contato com a pele e um gel condutor.",
      en: "Applied by area, with the device in contact with the skin and a conductive gel.",
      es: "Aplicada por área, con el aparato en contacto con la piel y un gel conductor.",
    },
    como: {
      pt: "Ondas ultrassônicas de baixa frequência aplicadas na região tratada.",
      en: "Low-frequency ultrasound waves applied to the treated area.",
      es: "Ondas ultrasónicas de baja frecuencia aplicadas en la zona tratada.",
    },
    sensacao: {
      pt: "Você vai ouvir um apito agudo durante a aplicação. É normal e não é defeito do aparelho: é a própria frequência do ultrassom chegando ao ouvido pelo osso. Na pele, a sensação é de um aparelho morno deslizando.",
      en: "You'll hear a high-pitched tone during the session. That's normal and not a fault: it's the ultrasound frequency reaching your ear through bone. On the skin it feels like a warm device gliding.",
      es: "Vas a escuchar un pitido agudo durante la aplicación. Es normal y no es una falla: es la propia frecuencia del ultrasonido llegando al oído por el hueso. En la piel se siente como un aparato tibio deslizando.",
    },
  },
];
