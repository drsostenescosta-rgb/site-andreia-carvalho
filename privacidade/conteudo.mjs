// Política de privacidade — texto por idioma.
//
// Escrita a partir do que o sistema REALMENTE faz, campo por campo. Não é modelo copiado:
// cada linha abaixo corresponde a uma tabela, uma coluna ou uma chamada que existe no código.
// Se o sistema mudar e esta página não mudar junto, ela vira mentira — e política de
// privacidade errada é pior que nenhuma, porque promete o que não se cumpre.
//
// Fontes de verdade:
//   andreia_pedidos_site   — nome, contato, serviço, dia, período, observação  (escrita cega)
//   andreia_depoimentos    — nome, texto, nota, serviço, contato (contato nunca é público)
//   agente ElevenLabs      — retenção 30 dias, sem gravar voz, PII removida
//   andreia_purgar_antigos — purga aos 90 dias
export const POLITICA = {
  pt: {
    titulo: "Política de Privacidade",
    atualizado: "Atualizada em 17 de agosto de 2026",
    intro:
      "Esta página explica, sem rodeio, quais dados este site coleta, por quê, por quanto tempo ficam guardados e como pedir para apagar. Quem responde por eles é Andréia Carvalho, em Leominster, MA.",
    secoes: [
      ["O que é coletado, e só isso",
       "<p>Só existem três lugares onde este site guarda alguma informação sua, e todos dependem de você preencher:</p>" +
       "<ul>" +
       "<li><b>Pedido de horário</b> — primeiro nome, WhatsApp, o procedimento de interesse, o dia e o período que você prefere, e uma observação opcional.</li>" +
       "<li><b>Depoimento</b> — primeiro nome, o texto que você escreve, a nota, o procedimento e, se quiser, um WhatsApp de contato.</li>" +
       "<li><b>Conversa com a Emily</b> — o que você escreve no chat do canto da tela.</li>" +
       "</ul>" +
       "<p>Não há rastreador de publicidade, não há pixel de rede social e não há cookie de análise. Navegar no site sem preencher nada não deixa registro seu.</p>"],
      ["Quem vê o quê",
       "<p><b>Seu WhatsApp nunca aparece no site.</b> No caso do depoimento, isso não é só uma promessa: a permissão de leitura pública do banco de dados não inclui a coluna de contato. Mesmo depois de o depoimento ser publicado, essa coluna continua inacessível para quem visita a página.</p>" +
       "<p>Os pedidos de horário são <i>escrita cega</i>: o site consegue gravar, e não consegue ler. Só quem tem login de operadora — a Andréia — enxerga a lista.</p>" +
       "<p>Nenhum depoimento vai ao ar sozinho. A Andréia lê e publica cada um.</p>"],
      ["Por quanto tempo",
       "<p><b>Pedido de horário: 90 dias</b> a partir do último contato, e depois é apagado. O prazo existe para ela poder retomar o contato com quem não fechou na primeira vez.</p>" +
       "<p><b>Depoimento publicado:</b> fica enquanto estiver no ar. Depoimento recusado é apagado em 90 dias.</p>" +
       "<p><b>Conversa com a Emily: 30 dias</b>, e depois é apagada pelo serviço que a processa.</p>"],
      ["A Emily, e o que ela não é",
       "<p>A Emily é uma assistente virtual — inteligência artificial. Ela não é a Andréia, diz isso logo no início da conversa, e não substitui avaliação profissional.</p>" +
       "<p>A conversa é processada pela <b>ElevenLabs</b>, um serviço externo. Ela é configurada para <b>não gravar voz</b>, apagar o áudio, remover dados pessoais do registro e descartar tudo em 30 dias.</p>" +
       "<p><b>Não escreva dados de saúde para a Emily.</b> O aviso aparece antes de a conversa começar. Dúvida clínica quem responde é a Andréia, pessoalmente, e ela não guarda isso aqui.</p>" +
       "<p>Quando você pede para agendar, a Emily monta um resumo da conversa para você mandar no WhatsApp. Esse resumo aparece na sua tela <b>antes</b> de ser enviado, e você decide se envia. Por regra, ele nunca inclui informação clínica.</p>"],
      ["Onde os dados ficam",
       "<p>Os pedidos e depoimentos ficam no <b>Supabase</b> (banco de dados hospedado). O site é servido pela <b>Vercel</b>. A conversa da Emily passa pela <b>ElevenLabs</b>. Nenhum desses recebe dado de saúde por parte deste site.</p>" +
       "<p>Não vendemos, alugamos nem compartilhamos seus dados com terceiros para publicidade. Nunca.</p>"],
      ["Como apagar, corrigir ou ver o que existe",
       "<p>Manda mensagem no WhatsApp <b>(978) 600-3658</b> pedindo. Não precisa justificar e não precisa de formulário.</p>" +
       "<p>Se você escrever <b>PARAR</b> ou <b>SAIR</b> numa conversa de WhatsApp com a clínica, o registro é apagado antes do prazo e não haverá novo contato. O prazo de 90 dias não autoriza insistir com quem pediu para sair.</p>"],
      ["Crianças",
       "<p>Este site e os atendimentos são para maiores de 18 anos. Não coletamos dados de crianças conscientemente.</p>"],
      ["Mudanças",
       "<p>Se o sistema mudar, esta página muda junto e a data no topo é atualizada. Alterações que afetem o que é coletado ou por quanto tempo serão descritas aqui.</p>"],
    ],
    contato: "Dúvida sobre esta política? WhatsApp (978) 600-3658 · 54 Main Street, 1º piso, sala 001A, Leominster, MA 01453",
    voltar: "Voltar ao site",
  },
};
