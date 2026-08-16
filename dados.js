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
    pt: ["Procedimentos", "Tecnologias", "Benefícios", "Resultados", "Minha história", "Agendar"],
    en: ["Treatments", "Technology", "Benefits", "Results", "My story", "Book"],
    es: ["Procedimientos", "Tecnología", "Beneficios", "Resultados", "Mi historia", "Agendar"],
  },
  // Formacao + licenca local, nesta ordem, nas tres linguas. "Enfermeira" sozinha faria a leitora
  // americana presumir licenca de Massachusetts; com "formada no Brasil" ao lado de "esteticista
  // licenciada em Leominster", nao sobra ambiguidade — e o conjunto diz mais do que cada metade.
  selo: { pt: "Enfermeira formada no Brasil · Esteticista licenciada em Leominster, MA", en: "Nursing degree from Brazil · Licensed esthetician in Leominster, MA", es: "Enfermera titulada en Brasil · Esteticista licenciada en Leominster, MA" },
  // Tagline dela, do material dela.
  h1: { pt: "Tecnologia, ciência e cuidado", en: "Technology, science and care", es: "Tecnología, ciencia y cuidado" },
  h1s: { pt: "para resultados que você vê e sente.", en: "for results you see and feel.", es: "para resultados que se ven y se sienten." },
  sub: {
    pt: "Drenagem linfática, dreno detox, EMShape Neo e tecnologias corporais — com protocolo montado para o seu corpo. Atendo em português e espanhol, e recebo também quem fala inglês, com apoio de tradução.",
    en: "Lymphatic drainage, detox, EMShape Neo and body technologies — with a protocol built for your body. I speak Portuguese and Spanish, and English-speaking clients are welcome with translation support.",
    es: "Drenaje linfático, drenaje detox, EMShape Neo y tecnologías corporales — con un protocolo hecho para tu cuerpo. Te atiendo en español y en portugués, sin intermediarios.",
  },
  // ANCORA DE PRECO em vez de tabela na cara. Decisao de Sostenes em 16/08: ela quer subir preco e
  // valorizar o atendimento, e tabela grande no meio da pagina le como promocao.
  // "A partir de" faz tres coisas que tabela nao faz: ancora o piso sem prender o teto, filtra
  // quem nao tem orcamento antes de ocupar a agenda dela, e deixa espaco para ela reajustar sem
  // reescrever o site. Esconder preco por completo seria pior — a pessoa pergunta e some.
  ancoraPreco: {
    pt: "Avaliação e protocolo montado para o seu corpo. Sessões a partir de US$ 60.",
    en: "Assessment and a protocol built for your body. Sessions from US$ 60.",
    es: "Evaluación y protocolo hecho para tu cuerpo. Sesiones desde US$ 60.",
  },
  verValores: { pt: "Ver todos os valores", en: "See all prices", es: "Ver todos los precios" },
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
  rotEquip: { pt: "Tecnologias", en: "Technology", es: "Tecnología" },
  h2Equip: { pt: "O que cada tecnologia faz", en: "What each technology does", es: "Qué hace cada tecnología" },
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
  avisoEstudos: {
    pt: "Os estudos acima foram feitos com equipamentos específicos e em grupos de pessoas. Servem para você entender o que a tecnologia faz — não para prever o seu resultado, que depende do seu corpo, do seu histórico e da constância.",
    en: "The studies above were run with specific devices and on groups of people. They help you understand what the technology does — they don't predict your result, which depends on your body, your history and consistency.",
    es: "Los estudios anteriores se hicieron con equipos específicos y en grupos de personas. Sirven para entender qué hace la tecnología — no para predecir tu resultado, que depende de tu cuerpo, tu historial y la constancia.",
  },
  // DETOX — posicionado por OCASIÃO, não por mecanismo.
  // "Esvaziamento de adipócito" e "secagem" são o que ela fala na sala; no site virariam alegação
  // fisiológica que ninguém pode sustentar. Ocasião não é alegação: é quem procura e quando.
  // E converte mais, porque dá motivo para marcar HOJE em vez de "um dia desses".
  rotDetox: { pt: "Método Detox", en: "Detox Method", es: "Método Detox" },
  h2Detox: { pt: "Quando existe", en: "When there's", es: "Cuando hay" },
  h2DetoxScript: { pt: "uma data marcada.", en: "a date on the calendar.", es: "una fecha marcada." },
  introDetox: {
    pt: "É o que mais me procuram quando o calendário aperta. A gente monta a série contando de trás para frente, a partir do seu dia.",
    en: "It's what people come to me for when the calendar gets tight. We build the series backwards, starting from your day.",
    es: "Es lo que más me buscan cuando el calendario aprieta. Armamos la serie de atrás hacia adelante, desde tu día.",
  },
  ocasioes: {
    pt: ["Casamento — o seu ou o de alguém", "Um evento no fim de semana", "Ensaio fotográfico", "Você treina e quer mostrar o que construiu", "Viagem, praia, verão chegando"],
    en: ["A wedding — yours or someone else's", "An event this weekend", "A photo shoot", "You train and want to show what you built", "A trip, the beach, summer coming"],
    es: ["Una boda — la tuya o la de alguien", "Un evento el fin de semana", "Una sesión de fotos", "Entrenas y quieres mostrar lo que construiste", "Un viaje, la playa, el verano"],
  },
  ctaDetox: { pt: "Tenho uma data", en: "I have a date", es: "Tengo una fecha" },
  msgDetox: {
    pt: "Oi, Andréia! Vim pelo site. Tenho uma data chegando e queria saber como funciona o Detox.",
    en: "Hi Andréia! I came from your website. I have a date coming up and I'd like to know how the Detox works.",
    es: "¡Hola, Andréia! Vengo desde tu sitio. Tengo una fecha próxima y quisiera saber cómo funciona el Detox.",
  },
  notaDetox: {
    pt: "Quanto antes você me chamar, mais a gente consegue montar. Em cima da hora também dá — só muda o que é possível fazer.",
    en: "The earlier you reach out, the more we can build. Last minute works too — it just changes what's possible.",
    es: "Cuanto antes me escribas, más podemos armar. A última hora también se puede — solo cambia lo que es posible hacer.",
  },
  rotAtendimento: { pt: "Quem faz", en: "Who does it", es: "Quién lo hace" },
  atendimentoApoio: {
    pt: "Cada sessão é conduzida por mim, do começo ao fim. Não tem revezamento, não tem estagiária — é a mesma pessoa que te avaliou que está com a mão em você.",
    en: "Every session is run by me, start to finish. No rotation, no assistants — the same person who assessed you is the one working on you.",
    es: "Cada sesión la conduzco yo, de principio a fin. Sin turnos, sin practicantes — la misma persona que te evaluó es la que tiene las manos en ti.",
  },
  legendaAtendimento: {
    pt: "Aparelho é ferramenta. O que decide o resultado é quem está com a mão em você.",
    en: "A device is a tool. What decides the result is whose hands are on you.",
    es: "El aparato es una herramienta. Lo que decide el resultado es quién tiene las manos en ti.",
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
  /**
   * A trajetória real, informada por Sostenes em 16/08. Não é reposicionamento de marketing:
   * enfermagem → aconselhamento de mulheres e famílias → estética há mais de 10 anos.
   *
   * SOBRE "ENFERMEIRA" — a primeira versão escondeu isso no passado e foi cautela no lugar errado.
   * Ela É enfermeira formada no Brasil, e isso não a desqualifica: qualifica. O que cria risco não
   * é o fato, é a palavra SOZINHA — num site em Leominster, "enfermeira" faz a leitora presumir
   * licença de Massachusetts. A regra, então, não é esconder: é nunca separar do país.
   * "Enfermeira formada no Brasil" + "esteticista licenciada em Leominster" dizem a verdade
   * inteira, e o conjunto vale mais do que cada metade. O que continua proibido é o inverso:
   * "enfermeira" sem país, ou perto de preço e serviço como se fosse a credencial do atendimento.
   */
  trajetoria: {
    pt: [
      ["Enfermeira formada no Brasil", "O primeiro lugar onde aprendi a cuidar de gente — e onde aprendi a olhar um corpo inteiro, não só a queixa."],
      ["Aconselhei mulheres e famílias", "Ali entendi que quase todo corpo carrega uma história antes de chegar na maca."],
      ["Estética, há mais de 10 anos", "A mesma coisa de sempre, em outra forma: agora o cuidado passa pelas minhas mãos."],
    ],
    en: [
      ["Nursing degree from Brazil", "The first place where I learned to care for people — and to look at a whole body, not just the complaint."],
      ["I counseled women and families", "That's where I understood that almost every body carries a story before it reaches the table."],
      ["Esthetics, for over 10 years", "The same work as always, in another form: now the care goes through my hands."],
    ],
    es: [
      ["Enfermera titulada en Brasil", "El primer lugar donde aprendí a cuidar de la gente — y donde aprendí a mirar un cuerpo entero, no solo la queja."],
      ["Aconsejé a mujeres y familias", "Ahí entendí que casi todo cuerpo carga una historia antes de llegar a la camilla."],
      ["Estética, hace más de 10 años", "Lo mismo de siempre, en otra forma: ahora el cuidado pasa por mis manos."],
    ],
  },
  fioCondutor: {
    pt: "De fora parecem três carreiras. De dentro é uma só — sempre foi cuidar de mulher.",
    en: "From the outside it looks like three careers. From the inside it's one — it was always caring for women.",
    es: "Desde fuera parecen tres carreras. Desde dentro es una sola — siempre fue cuidar de la mujer.",
  },
  missao: {
    pt: "A minha meta é ajudar mulheres a entrarem na melhor versão delas. É por isso que eu treino todo dia e é por isso que eu falo do meu próprio processo — o que eu peço de você, eu peço de mim primeiro.",
    en: "My goal is to help women step into their best version. That's why I train every day and why I talk about my own process — what I ask of you, I ask of myself first.",
    es: "Mi meta es ayudar a las mujeres a entrar en su mejor versión. Por eso entreno todos los días y por eso hablo de mi propio proceso — lo que te pido, me lo pido a mí primero.",
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
  { pt: ["Tecnologias avançadas", "Tecnologia com estudo por trás, aplicada com segurança."], en: ["Advanced technology", "Technology backed by research, applied safely."], es: ["Tecnologías avanzadas", "Tecnología con estudios detrás, aplicada con seguridad."] },
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
  { src: "/img/andreia-estudio.jpg", pt: "Andréia Carvalho", en: "Andréia Carvalho", es: "Andréia Carvalho", pos: "50% 30%", w: 933, h: 1400 },
  { src: "/img/andreia-clinica.jpg", pt: "Andréia Carvalho na clínica", en: "Andréia Carvalho at the clinic", es: "Andréia Carvalho en la clínica", pos: "50% 26%", w: 933, h: 1400 },
];

/**
 * TECNOLOGIAS — não aparelhos.
 *
 * Decisão de Sostenes em 16/08: só o EMShape Neo é nomeado. Radiofrequência e ultracavitação
 * entram como TECNOLOGIA, sem marca e sem modelo. Isso não é só preferência de marketing — é o
 * que torna possível falar de evidência: tecnologia tem literatura publicada; aparelho genérico
 * importado não tem.
 *
 * REGRA DAS CITAÇÕES, que é o que separa isto de propaganda:
 *   - só entra número que está num estudo publicado, com revista e ano;
 *   - o estudo é da TECNOLOGIA, não do aparelho dela. O estudo de HIFEM foi feito com Emsculpt
 *     (BTL). Escrever o número e deixar a cliente achar que mediram o aparelho da Andréia seria
 *     mentira por omissão — por isso cada card diz com o que o estudo foi feito;
 *   - nenhuma frase promete que ELA vai ter aquele resultado. O aviso de variação individual não
 *     é rodapé jurídico: é o que faz os números serem acreditáveis.
 *
 * FDA continua fora até o fornecedor dar o número K (ver operacao-assistida.json).
 */
export const TECNOLOGIAS = [
  {
    id: "hifem",
    destaque: true,
    // Imagem oficial do fabricante (emshape.shop). Único aparelho nomeado no site — as outras
    // duas tecnologias entram sem marca, sem modelo e sem foto, por decisão de Sostenes.
    foto: "/img/emshape-neo.jpg",
    nome: { pt: "EMShape Neo", en: "EMShape Neo", es: "EMShape Neo" },
    tec: { pt: "Tecnologia HIFEM · contração muscular", en: "HIFEM technology · muscle contraction", es: "Tecnología HIFEM · contracción muscular" },
    oque: {
      pt: "Máquina de tonificação muscular que trabalha três áreas em uma sessão: abdômen, posterior e glúteos.",
      en: "A muscle toning machine that works three areas in one session: abdomen, back and glutes.",
      es: "Máquina de tonificación muscular que trabaja tres áreas en una sesión: abdomen, posterior y glúteos.",
    },
    como: {
      pt: "Um campo eletromagnético de alta intensidade provoca contrações musculares involuntárias — mais profundas do que as que você consegue sozinha, porque não dependem da sua vontade.",
      en: "A high-intensity electromagnetic field triggers involuntary muscle contractions — deeper than the ones you can produce on your own, because they don't depend on your effort.",
      es: "Un campo electromagnético de alta intensidad provoca contracciones musculares involuntarias — más profundas que las que logras por tu cuenta, porque no dependen de tu voluntad.",
    },
    paraque: {
      pt: "Tonificação e definição de abdômen e glúteos. Muito procurada por quem já treina e quer marcar o que construiu.",
      en: "Toning and definition of abdomen and glutes. Popular with people who already train and want to show what they've built.",
      es: "Tonificación y definición de abdomen y glúteos. Muy buscada por quien ya entrena y quiere marcar lo que construyó.",
    },
    sensacao: {
      pt: "A contração é forte e estranha na primeira vez, mas não é dor. Você fica deitada e a intensidade sobe aos poucos — se incomodar em algum momento, você fala e eu baixo na hora.",
      en: "The contraction feels strong and strange the first time, but it isn't pain. You lie down and the intensity rises gradually — if it bothers you, say so and I turn it down right away.",
      es: "La contracción se siente fuerte y extraña la primera vez, pero no es dolor. Te acuestas y la intensidad sube poco a poco — si te incomoda, me dices y la bajo al instante.",
    },
    estudo: {
      pt: "Num estudo com 22 pessoas acompanhado por ressonância magnética, quatro sessões de HIFEM no abdômen mostraram aumento médio de 15% na espessura do músculo reto abdominal e redução média de 18% na gordura da região.",
      en: "In a 22-patient study followed by MRI, four HIFEM abdominal sessions showed an average 15% increase in rectus abdominis thickness and an average 18% reduction in fat in the area.",
      es: "En un estudio con 22 personas seguido por resonancia magnética, cuatro sesiones de HIFEM en el abdomen mostraron un aumento medio del 15% en el grosor del recto abdominal y una reducción media del 18% en la grasa de la zona.",
    },
    fonte: {
      pt: "Kinney &amp; Lozanova, Lasers in Surgery and Medicine, 2019 — estudo feito com equipamento Emsculpt (BTL).",
      en: "Kinney &amp; Lozanova, Lasers in Surgery and Medicine, 2019 — study conducted with Emsculpt (BTL) equipment.",
      es: "Kinney &amp; Lozanova, Lasers in Surgery and Medicine, 2019 — estudio realizado con equipo Emsculpt (BTL).",
    },
  },
  {
    id: "ultracavitacao",
    nome: { pt: "Ultracavitação", en: "Ultrasound cavitation", es: "Ultracavitación" },
    tec: { pt: "Tecnologia de ultrassom", en: "Ultrasound technology", es: "Tecnología de ultrasonido" },
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
    paraque: {
      pt: "Gordura localizada e medidas em pontos específicos — barriga, flancos, culote.",
      en: "Localized fat and measurements in specific spots — belly, flanks, outer thighs.",
      es: "Grasa localizada y medidas en puntos específicos — abdomen, flancos, cartucheras.",
    },
    sensacao: {
      pt: "Você vai ouvir um apito agudo durante a aplicação. É normal e não é defeito do aparelho: é a própria frequência do ultrassom chegando ao ouvido pelo osso. Na pele, a sensação é de um aparelho morno deslizando.",
      en: "You'll hear a high-pitched tone during the session. That's normal and not a fault: it's the ultrasound frequency reaching your ear through bone. On the skin it feels like a warm device gliding.",
      es: "Vas a escuchar un pitido agudo durante la aplicación. Es normal y no es una falla: es la propia frecuencia del ultrasonido llegando al oído por el hueso. En la piel se siente como un aparato tibio deslizando.",
    },
    estudo: {
      pt: "Revisões da literatura descrevem a ultracavitação como procedimento seguro para redução de medidas localizadas, com reduções relatadas na circunferência abdominal na faixa de 2 a 4,6 cm ao longo de uma série de sessões.",
      en: "Literature reviews describe ultrasound cavitation as a safe procedure for reducing localized measurements, with reported abdominal circumference reductions in the 2 to 4.6 cm range over a series of sessions.",
      es: "Las revisiones de la literatura describen la ultracavitación como un procedimiento seguro para reducir medidas localizadas, con reducciones reportadas en la circunferencia abdominal de 2 a 4,6 cm a lo largo de una serie de sesiones.",
    },
    fonte: {
      pt: "Revisões sistemáticas de contorno corporal não invasivo. Os números variam bastante entre estudos e entre pessoas.",
      en: "Systematic reviews of non-invasive body contouring. Figures vary widely between studies and between people.",
      es: "Revisiones sistemáticas de contorno corporal no invasivo. Las cifras varían mucho entre estudios y entre personas.",
    },
  },
  {
    id: "radiofrequencia",
    nome: { pt: "Radiofrequência", en: "Radiofrequency", es: "Radiofrecuencia" },
    tec: { pt: "Tecnologia de aquecimento controlado", en: "Controlled heating technology", es: "Tecnología de calentamiento controlado" },
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
    paraque: {
      pt: "Firmeza e textura da pele. É a tecnologia mais usada em combinação com as outras, e não sozinha.",
      en: "Skin firmness and texture. It's the technology most often used in combination with the others, rather than alone.",
      es: "Firmeza y textura de la piel. Es la tecnología más usada en combinación con las otras, y no sola.",
    },
    sensacao: {
      pt: "Um calor morno que vai subindo, parecido com uma pedra quente que anda. Eu acompanho a temperatura o tempo todo — se esquentar demais para você, é só falar.",
      en: "A gentle warmth that builds up, like a warm stone moving over you. I track the temperature the whole time — if it gets too warm, just say so.",
      es: "Un calor tibio que va subiendo, parecido a una piedra caliente que se mueve. Controlo la temperatura todo el tiempo — si te resulta demasiado, solo dilo.",
    },
    estudo: {
      pt: "A literatura de contorno corporal estuda a radiofrequência principalmente em combinação com outras tecnologias, e não isolada — é assim que ela costuma ser usada na prática.",
      en: "Body-contouring literature studies radiofrequency mainly in combination with other technologies rather than in isolation — which is how it is normally used in practice.",
      es: "La literatura de contorno corporal estudia la radiofrecuencia sobre todo en combinación con otras tecnologías, y no aislada — que es como se usa en la práctica.",
    },
    fonte: {
      pt: "Estudos de combinação de radiofrequência com estimulação muscular e ultrassom.",
      en: "Studies combining radiofrequency with muscle stimulation and ultrasound.",
      es: "Estudios que combinan radiofrecuencia con estimulación muscular y ultrasonido.",
    },
  },
];
