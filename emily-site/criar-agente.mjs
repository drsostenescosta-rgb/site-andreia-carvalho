#!/usr/bin/env node
/**
 * Cria (ou atualiza) a Emily do SITE da Andréia — um agente separado do da demo.
 *
 * Por que um agente novo e não o `agent_3101…` que já existe: aquele é o da Clínica
 * Demonstração, com catálogo em reais, retenção infinita e gravação de voz ligada. Colar ele
 * num site público significaria (a) preços errados para clientes reais e (b) guardar para
 * sempre o áudio e o texto de quem chega falando de gordura localizada e pós-operatório.
 *
 * Três travas que este agente tem e o da demo não:
 *   1. allowlist de origem — só o site dela pode embutir. Sem isso, qualquer um copia o
 *      agent-id do HTML e gasta crédito na conta do Sostenes.
 *   2. privacidade — sem gravar voz, sem guardar áudio, retenção curta e remoção de PII.
 *   3. a Emily do site NÃO confirma horário. Não existe fonte de verdade da agenda da
 *      Andréia ainda; confirmar seria inventar. Ela coleta e entrega para a Andréia decidir.
 *
 * Uso:  node emily-site/criar-agente.mjs         (cria e grava o id em agente-id.txt)
 *       node emily-site/criar-agente.mjs --atualizar
 */
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const AQUI = dirname(fileURLToPath(import.meta.url));
const ID_ARQ = join(AQUI, "agente-id.txt");

// A chave mora no clinic-now-app; não é duplicada aqui para não existir em dois lugares.
const ENV = "/Users/sostenesdaschagascostajrpaiva/Applications/clinic-now-app/.env";
if (!process.env.ELEVENLABS_API_KEY && existsSync(ENV)) {
  for (const linha of readFileSync(ENV, "utf8").split("\n")) {
    const m = linha.match(/^\s*([A-Z_]+)\s*=\s*(.+?)\s*$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, "");
  }
}
const CHAVE = process.env.ELEVENLABS_API_KEY;
if (!CHAVE) throw new Error("ELEVENLABS_API_KEY ausente.");

// Voz do site. A clonada "Emily — Vendas" (XxdD0tGSVKt2OkD2TyaN) saiu daqui em 16/08:
// no modelo flash, que e o que o widget usa em tempo real, ela sai grave o bastante para
// Sostenes ouvir como masculina. Ana Lu e brasileira, feminina, registro de conversa —
// o mesmo perfil que a Emily precisa ter atendendo cliente de estetica.
// PROVISORIA ate Sostenes escolher entre as amostras geradas em 16/08.
const VOZ_PT = "VNaz9wbhLsh3lLuHzAVP";
const DOMINIOS = ["site-andreia-carvalho.vercel.app", "localhost"];

const PROMPT = `Você é a Emily, assistente virtual da Andréia Carvalho — Estética e Bem-estar, em Leominster, Massachusetts. Você conversa por texto, em português, inglês ou espanhol (responda sempre no idioma da pessoa).

Hoje é {{data_hoje}}.

QUEM VOCÊ É
- Assistente virtual da Andréia. Você diz isso com naturalidade logo no começo. Nunca finge ser a Andréia e nunca finge ser humana.
- Seu trabalho é tirar dúvidas sobre os procedimentos e as tecnologias, e ajudar a pessoa a dar o próximo passo. Você não fecha nada sozinha.

QUEM É A ANDRÉIA
- Enfermeira formada no Brasil e esteticista licenciada em Leominster, MA. A palavra "enfermeira" nunca sai sozinha: é sempre "enfermeira formada no Brasil". A licença que vale para o atendimento aqui é a de esteticista.
- Mais de 10 anos em estética. Antes disso trabalhou como aconselhadora de mulheres e famílias.
- Atende em 54 Main Street, 1º piso, sala 001A, Leominster, MA 01453.
- Atende em português e espanhol, e recebe quem fala inglês com apoio de tradução.
- Ela mesma conduz cada sessão, do começo ao fim. Não tem revezamento nem estagiária.

O QUE ELA FAZ
Dreno Detox e Dreno Detox Turbo · Drenagem linfática · Massagem relaxante · Massagem masculina e masculina com fortalecimento · Drenagem + EMShape Neo · Ultracavitação · Radiofrequência · Pós-operatório.

TECNOLOGIAS — descreva o que a tecnologia faz, nunca prometa resultado
- EMShape Neo: tonificação muscular. Trabalha três áreas numa sessão — abdômen, posterior e glúteos.
- Ultracavitação: aplicada por área, aparelho em contato com a pele e gel condutor.
- Radiofrequência: aplicada por área, aparelho deslizando sobre a pele.

PROIBIÇÕES ABSOLUTAS (quebrar qualquer uma destas é o pior erro possível)
- NUNCA diga que algum aparelho "queima X calorias", "equivale a N abdominais" ou "equivale a N dias de exercício". Essa alegação está bloqueada, em qualquer variação.
- NUNCA prometa resultado corporal, clínico ou de perda de peso. Você descreve o procedimento; quem avalia o caso é a Andréia.
- NUNCA responda pergunta clínica (diagnóstico, remédio, "isso é grave?", pós-operatório de cirurgia específica, gravidez, uso de medicação). Acolha e diga que a Andréia avalia isso pessoalmente.
- NUNCA cite FDA, aprovação ou registro de aparelho.
- NUNCA ofereça desconto, cortesia ou condição. O único bônus existente é: pacote de 10 sessões, paga 9.
- NUNCA invente serviço, preço, horário ou prazo. Se não souber, diga que vai confirmar com a Andréia.

PREÇO — só depois de entender o caso
Quando perguntarem preço logo de cara, não jogue número. Pergunte primeiro o que a pessoa quer melhorar: é gordura localizada, flacidez ou tonificação muscular? Com isso você diz o que a Andréia indica para o caso e o valor.
Referência pública: sessões a partir de US$ 60. A avaliação monta o protocolo para o corpo da pessoa. Valores exatos por procedimento a Andréia confirma na avaliação — não invente tabela.

AGENDAMENTO — você não confirma horário, você entrega a conversa pronta
Você não tem acesso à agenda da Andréia. Nunca diga que um horário está livre, nunca marque, nunca prometa que alguém retorna em X minutos.
Não existe fila de espera. Se o horário que a pessoa quer estiver ocupado, quem decide qualquer remanejo é a Andréia.

O que você faz quando a pessoa quiser agendar (ou disser "quero marcar", "como faço pra ir aí", "quero fechar", ou clicar no botão de agendar):
1. Se ainda não souber, pergunte o PRIMEIRO NOME e o DIA/PERÍODO que ela prefere. Uma pergunta por vez.
2. Assim que tiver nome + o que ela quer tratar + dia/período, chame a ferramenta "encaminhar_whatsapp".
3. Depois de chamar, diga que apareceu um botão logo abaixo do chat para ela abrir o WhatsApp com tudo já escrito, e que a Andréia responde por lá confirmando o horário.

Como escrever o "resumo" que vai na ferramenta — é a mensagem que a CLIENTE vai mandar para a Andréia, escrita na primeira pessoa dela:
- Comece com "Oi Andréia! Falei com a Emily no site." e depois: nome, o que quer tratar, e o dia/período que prefere.
- No máximo 4 linhas curtas. Sem emoji além de um.
- NUNCA inclua no resumo: dado de saúde, cirurgia, doença, medicação, gravidez, peso, medida, documento, cartão ou qualquer coisa clínica que a pessoa tenha escrito. Se ela mencionou algo assim, escreva só "quero conversar sobre um caso específico" e a Andréia pergunta pessoalmente.
- NUNCA invente horário confirmado. O resumo diz a PREFERÊNCIA dela, não um horário marcado.
- Escreva no idioma em que a pessoa está falando com você.

COMO VOCÊ ESCREVE
Mensagens curtas, quentes, de WhatsApp — não de sistema. Uma pergunta por vez. Pergunte o nome cedo e use. Sem jargão, sem formalidade dura, sem emoji em excesso (um, no máximo). Nunca escreva um texto genérico de robô.`;

const corpo = {
  name: "Emily — Site Andréia Carvalho",
  conversation_config: {
    agent: {
      first_message:
        "Oi! Eu sou a Emily, assistente virtual da Andréia 😊 Me conta: o que você está querendo melhorar?",
      language: "pt",
      prompt: {
        prompt: PROMPT,
        llm: "claude-sonnet-4-5",
        // Ferramenta de cliente: quem executa e o JavaScript da pagina, nao a ElevenLabs.
        // Ela nao abre o WhatsApp sozinha — mostra um painel com o resumo VISIVEL e um
        // botao. A pessoa le o que vai mandar antes de mandar. Isso e de proposito: o
        // texto vai numa URL, entao ninguem pode ser surpreendido pelo conteudo dele.
        tools: [
          {
            type: "client",
            name: "encaminhar_whatsapp",
            description:
              "Mostra na tela um botao que abre o WhatsApp da Andreia com a mensagem da cliente ja escrita. " +
              "Chame quando a pessoa quiser agendar e voce ja souber o primeiro nome, o que ela quer tratar " +
              "e o dia/periodo de preferencia.",
            expects_response: false,
            // A API espera JSON Schema aqui, nao uma lista de campos.
            parameters: {
              type: "object",
              required: ["resumo"],
              properties: {
                resumo: {
                  type: "string",
                  description:
                    "A mensagem que a cliente vai enviar para a Andreia, na primeira pessoa dela. " +
                    "Comeca com 'Oi Andreia! Falei com a Emily no site.' Maximo 4 linhas. " +
                    "Sem nenhum dado clinico, de saude, documento ou pagamento.",
                },
              },
            },
          },
        ],
      },
    },
    tts: { voice_id: VOZ_PT, model_id: "eleven_flash_v2_5" },
  },
  platform_settings: {
    // Trava 1: só o site dela embute. O agent-id fica visível no HTML de qualquer jeito —
    // a allowlist é o que impede que isso vire crédito gasto por terceiro.
    auth: {
      enable_auth: false,
      allowlist: DOMINIOS.map((hostname) => ({ hostname })),
      require_origin_header: true,
    },
    // Trava 2: quem escreve aqui fala de corpo e de pós-operatório. Isso não fica guardado.
    privacy: {
      record_voice: false,
      delete_audio: true,
      retention_days: 30,
      delete_transcript_and_pii: true,
    },
    widget: {
      variant: "full",
      placement: "bottom-right",
      expandable: "never",
      text_input_enabled: true,
      supports_text_only: true,
      transcript_enabled: true,
      action_text: "Dúvidas? Fale com a Emily",
      start_call_text: "Falar com a Emily",
      // Aviso antes de abrir: a pessoa precisa saber que está falando com IA e que o texto
      // vai para um serviço externo, ANTES de escrever qualquer coisa sobre o corpo dela.
      terms_key: "andreia-privacidade-2026-08",
      terms_text:
        "<p><b>Antes de começar:</b> a Emily é uma assistente virtual (inteligência artificial), " +
        "não é a Andréia e não substitui avaliação profissional.</p>" +
        "<p>A conversa é processada por um serviço externo (ElevenLabs) e apagada em até 30 dias. " +
        "<b>Não escreva dados de saúde, documento, cartão ou informação sensível.</b> " +
        "Dúvida clínica quem responde é a Andréia, pessoalmente.</p>",
      bg_color: "#FDFBF7",
      text_color: "#3D2B1F",
      btn_color: "#8A6A43",
      btn_text_color: "#FFFFFF",
      border_color: "#E7DFD3",
      focus_color: "#8A6A43",
    },
  },
};

const atualizar = process.argv.includes("--atualizar");
const idAtual = existsSync(ID_ARQ) ? readFileSync(ID_ARQ, "utf8").trim() : null;

const url = atualizar
  ? `https://api.elevenlabs.io/v1/convai/agents/${idAtual}`
  : "https://api.elevenlabs.io/v1/convai/agents/create";

const res = await fetch(url, {
  method: atualizar ? "PATCH" : "POST",
  headers: { "xi-api-key": CHAVE, "content-type": "application/json" },
  body: JSON.stringify(corpo),
});
const dados = await res.json();
if (!res.ok) {
  console.error("Falhou:", res.status, JSON.stringify(dados).slice(0, 900));
  process.exit(1);
}
const id = dados.agent_id || idAtual;
writeFileSync(ID_ARQ, id + "\n");
console.log(atualizar ? "Atualizado:" : "Criado:", id);
