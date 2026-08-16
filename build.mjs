#!/usr/bin/env node
// build.mjs — gera index.html (PT) e en.html (EN) a partir de dados.js.
//
// Por que gerar em vez de montar no navegador (achado nº1 da auditoria, 57/100):
//   a versão anterior injetava preços, serviços, telefone e botões por módulo ES. O HTML servido
//   tinha ZERO ocorrências de "US$" e de "978", e os dois CTAs iam ao ar com href="#".
//   Num navegador embutido de WhatsApp — que é por onde a cliente dela vai abrir — um erro de
//   módulo entrega tabela vazia e botão morto.
//   Agora o conteúdo nasce no HTML. O JavaScript da página só abre e fecha o menu.
//
// Duas páginas estáticas em vez de tradução por JS: PT e EN funcionam sem script nenhum,
// cada uma indexa no Google, e o seletor de idioma é um link comum.
//
// Uso: node build.mjs

import { writeFileSync } from "node:fs";
import { CLINICA, TEXTOS, PILARES, SERVICOS, BENEFICIOS, RESULTADOS, FALAS, FOTOS, TECNOLOGIAS } from "./dados.js";

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const t = (o, l) => (o && typeof o === "object" && !Array.isArray(o) && o[l] !== undefined ? o[l] : o);

// Campo não confirmado pela Andréia não sobe calado. Isto é a mesma regra do preflight do
// ClinicNow: item duvidoso derruba o build de propósito, em vez de virar palpite publicado.
const pendentes = SERVICOS.filter((s) => s.confirmar);
if (pendentes.length) {
  console.error(`BUILD RECUSADO: ${pendentes.length} serviço(s) marcados 'confirmar' ainda no cardápio público:`);
  for (const s of pendentes) console.error(`  - ${s.pt[0]} — só entra depois que a Andréia confirmar.`);
  console.error("Confirme com ela e remova a flag, ou tire o serviço de dados.js.");
  process.exit(1);
}

// Três idiomas: ela atende a comunidade brasileira, a americana e a hispânica em Leominster.
const IDIOMAS = [
  { cod: "pt", rotulo: "PT", href: "/", lang: "pt-BR" },
  { cod: "en", rotulo: "EN", href: "/en", lang: "en" },
  { cod: "es", rotulo: "ES", href: "/es", lang: "es" },
];

function pagina(l) {
  const eu = IDIOMAS.find((i) => i.cod === l);
  const zap = `https://wa.me/${CLINICA.whatsapp}?text=${encodeURIComponent(t(TEXTOS.msgZap, l))}`;
  const zapDetox = `https://wa.me/${CLINICA.whatsapp}?text=${encodeURIComponent(t(TEXTOS.msgDetox, l))}`;
  const zapDuvida = `https://wa.me/${CLINICA.whatsapp}?text=${encodeURIComponent(t(TEXTOS.msgDuvida, l))}`;
  const nav = t(TEXTOS.nav, l);

  const linhas = SERVICOS.map((s) => {
    const [nome, desc] = t(s, l);
    return `        <div class="tab-linha">
          <div class="tab-nome">${esc(nome)}${s.destaque ? '<span class="estrela" aria-hidden="true">✦</span>' : ""}</div>
          <div class="tab-desc">${esc(desc)}</div>
          <div class="tab-dur">${esc(t(s.dur, l))}</div>
          <div class="tab-preco">US$ ${s.p}</div>
        </div>`;
  }).join("\n");

  const pilares = PILARES.map((p) => {
    const [tit, des] = t(p, l);
    return `      <div class="pilar rev"><b>${esc(tit)}</b><span>${esc(des)}</span></div>`;
  }).join("\n");

  const benef = BENEFICIOS.map((b) => `          <li>${esc(t(b, l))}</li>`).join("\n");

  const resultados = RESULTADOS.map((r) =>
    `      <div class="res-num rev"><b>${esc(r.num)}</b><span>${esc(t(r, l))}</span></div>`).join("\n");

  const rotEq = {
    pt: ["O que é", "Como funciona", "Para que é usada", "O que você sente", "O que os estudos mostram"],
    en: ["What it is", "How it works", "What it's used for", "What you feel", "What studies show"],
    es: ["Qué es", "Cómo funciona", "Para qué se usa", "Qué se siente", "Qué muestran los estudios"],
  }[l];
  const equipamentos = TECNOLOGIAS.map((e) => `      <article class="eq rev">
        <div class="eq-topo"><h3>${esc(t(e.nome, l))}</h3><span class="eq-tipo">${esc(t(e.tec, l))}</span></div>
        <dl>
          <dt>${esc(rotEq[0])}</dt><dd>${esc(t(e.oque, l))}</dd>
          <dt>${esc(rotEq[1])}</dt><dd>${esc(t(e.como, l))}</dd>
          <dt>${esc(rotEq[2])}</dt><dd>${esc(t(e.paraque, l))}</dd>
          <dt>${esc(rotEq[3])}</dt><dd>${esc(t(e.sensacao, l))}</dd>
        </dl>
        <div class="eq-estudo">
          <b>${esc(rotEq[4])}</b>
          <p>${esc(t(e.estudo, l))}</p>
          <cite>${t(e.fonte, l)}</cite>
        </div>
      </article>`).join("\n");

  // Sem foto, a grade de duas colunas deixaria metade da seção vazia. Vira coluna única.
  const temFotos = FOTOS.length > 0;
  const fotos = FOTOS.map((f) =>
    `      <figure class="gal-item"><img src="${f.src}" alt="${esc(t(f, l))}" loading="lazy"
        width="${f.w || 787}" height="${f.h || 1400}" style="object-position:${f.pos || "50% 50%"}" /></figure>`).join("\n");

  return `<!doctype html>
<html lang="${eu.lang}">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
<title>${esc(t(TEXTOS.titulo, l))}</title>
<meta name="description" content="${esc(t(TEXTOS.sub, l))}" />
<meta property="og:title" content="${esc(CLINICA.nome)} · ${esc(t(CLINICA.papel, l))}" />
<meta property="og:description" content="${esc(t(TEXTOS.sub, l))}" />
<meta property="og:image" content="/img/andreia-retrato.jpg" />
<meta property="og:type" content="website" />
<meta name="theme-color" content="#f7f1e8" />
${IDIOMAS.map((i) => `<link rel="alternate" hreflang="${i.lang}" href="${i.href}" />`).join("\n")}
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Jost:wght@200;300;400;500;600&family=Parisienne&display=swap" rel="stylesheet" />
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' fill='%23f7f1e8'/%3E%3Ctext x='32' y='46' font-family='Georgia,serif' font-size='40' fill='%238a6230' text-anchor='middle'%3EA%3C/text%3E%3C/svg%3E" />
<style>
/* Identidade da Andréia — creme, dourado e marrom, tirados do material dela.
   --dourado corrigido de #9a6f3a para #8a6230: o anterior reprovava no contraste WCAG AA em
   cinco elementos, incluindo o PREÇO e o botão principal. Continua dourado. */
:root{
  --creme:#f7f1e8; --creme-2:#efe5d6; --areia:#e6d7c3; --papel:#fffdfa;
  --marrom:#523a24; --marrom-claro:#7d5c3b; --dourado:#8a6230; --dourado-luz:#b8912f;
  --texto:#3a2b1e; --suave:#6b573f; --linha:#e0d0b9;
  --serif:'Cormorant Garamond',Georgia,'Times New Roman',serif;
  --sans:'Jost',-apple-system,'Segoe UI',Roboto,sans-serif;
  /* Se o Google Fonts cair, Snell/Apple Chancery seguram melhor que "cursive" genérica. */
  --script:'Parisienne','Snell Roundhand','Apple Chancery','Segoe Script',cursive;
  --max:1160px;
}
*{box-sizing:border-box;margin:0}
/* Header fixo de ~86px: sem isto, clicar no menu enfia o título embaixo do cabeçalho. */
html{scroll-behavior:smooth;font-size:17px;scroll-padding-top:96px}
body{background:var(--creme);color:var(--texto);font-family:var(--sans);font-weight:300;
  line-height:1.65;overflow-x:hidden;-webkit-font-smoothing:antialiased}
h1,h2,h3{font-family:var(--serif);font-weight:500;line-height:1.13;color:var(--marrom)}
a{color:inherit}
/* height:auto é obrigatório com atributos width/height no <img>: sem ele a largura escala pelo
   CSS, a altura fica presa no atributo, e a imagem ESTICA. Foi o que deformou o flyer dela. */
img{max-width:100%;height:auto;display:block}
:focus-visible{outline:2px solid var(--dourado);outline-offset:3px;border-radius:3px}
.env{max-width:var(--max);margin:0 auto;padding:0 26px}
.script{font-family:var(--script);color:var(--dourado);font-weight:400}
.pular{position:absolute;left:-9999px}
.pular:focus{left:16px;top:12px;z-index:100;background:var(--papel);padding:10px 16px;border:1px solid var(--dourado)}

header{position:fixed;inset:0 0 auto;z-index:50;background:rgba(247,241,232,.94);
  backdrop-filter:blur(12px);border-bottom:1px solid var(--linha)}
.topo{display:flex;align-items:center;gap:16px;padding:11px 26px;max-width:var(--max);margin:0 auto}
.marca{display:flex;align-items:center;gap:11px;text-decoration:none}
.marca-a{width:42px;height:42px;flex:none}
.marca-txt{display:flex;flex-direction:column;line-height:1.1}
.marca-txt b{font-family:var(--serif);font-weight:500;font-size:1.14rem;color:var(--marrom)}
.marca-txt span{font-size:.55rem;letter-spacing:.24em;text-transform:uppercase;color:var(--dourado)}
nav{margin-left:auto;display:flex;gap:24px;align-items:center}
nav a{text-decoration:none;font-size:.77rem;letter-spacing:.13em;text-transform:uppercase;color:var(--suave);
  padding:12px 2px}
nav a:hover{color:var(--dourado)}
/* Seletor de idioma FORA do nav: no celular o nav some atrás do hambúrguer e metade da
   clientela dela é de língua inglesa. */
.idioma{display:flex;border:1px solid var(--linha);border-radius:999px;background:var(--papel);overflow:hidden;flex:none}
.idioma a,.idioma span{font-size:.68rem;letter-spacing:.08em;padding:9px 13px;text-decoration:none;
  color:var(--suave);min-height:44px;display:flex;align-items:center}
.idioma .ativo{background:var(--dourado);color:#fff;font-weight:500}
.menu-btn{display:none;background:none;border:0;color:var(--dourado);font-size:1.4rem;cursor:pointer;
  min-width:46px;min-height:46px;align-items:center;justify-content:center}

.hero{position:relative;padding:126px 0 66px;overflow:hidden;
  background:radial-gradient(120% 90% at 82% 10%,var(--creme-2),transparent 58%),var(--creme)}
.hero-grade{display:grid;grid-template-columns:1.05fr .95fr;gap:52px;align-items:center}
.selo{display:inline-flex;align-items:center;gap:9px;border:1px solid var(--linha);background:var(--papel);
  border-radius:999px;padding:7px 16px;font-size:.68rem;letter-spacing:.16em;text-transform:uppercase;color:var(--dourado)}
h1{font-size:clamp(2.3rem,5vw,3.7rem);margin:20px 0 4px}
.h1-script{font-family:var(--script);font-size:clamp(2rem,4.4vw,3.2rem);color:var(--dourado);
  line-height:1.08;display:block;margin-top:6px}
.chamada{font-size:1.04rem;color:var(--suave);max-width:33em;margin-top:16px}
.acoes{display:flex;gap:12px;flex-wrap:wrap;margin-top:26px}
.btn{display:inline-flex;align-items:center;gap:9px;padding:16px 28px;text-decoration:none;border-radius:4px;
  font-size:.76rem;letter-spacing:.15em;text-transform:uppercase;transition:.25s;border:1px solid var(--dourado);
  min-height:48px}
.btn-cheio{background:var(--dourado);color:#fff;font-weight:500}
.btn-cheio:hover{background:var(--marrom)}
.btn-vazio{color:var(--dourado);background:var(--papel)}
.btn-vazio:hover{background:var(--creme-2)}

/* Volume em CSS: dois discos em perspectiva atrás do retrato. Sem imagem, sem peso. */
.hero-foto{position:relative;margin:0}
.hero-foto img{border-radius:270px 270px 14px 14px;box-shadow:0 34px 70px -34px rgba(82,58,36,.5);
  /* Sem object-position aqui: a foto é 1:1 numa caixa 4:5 — não há transbordo
   vertical para ancorar, e âncora que não faz nada é ruído. */
  aspect-ratio:4/5;object-fit:cover;width:100%}
.disco{position:absolute;border-radius:50%;border:1px solid #cbb18a;pointer-events:none;z-index:-1;
  transform:rotateX(72deg);animation:girar 34s linear infinite}
.disco.a{inset:auto -8% -6% -8%;aspect-ratio:1;}
.disco.b{inset:auto 6% -2% 6%;aspect-ratio:1;border-color:var(--dourado);opacity:.6;animation-duration:26s;animation-direction:reverse}
@keyframes girar{from{transform:rotateX(72deg) rotate(0)}to{transform:rotateX(72deg) rotate(360deg)}}
@media (prefers-reduced-motion:reduce){.disco{animation:none}}

.pilares{background:var(--papel);border-block:1px solid var(--linha)}
.pilares-grade{display:grid;grid-template-columns:repeat(4,1fr);gap:26px;padding:38px 0}
.pilar b{display:block;font-size:.77rem;letter-spacing:.11em;text-transform:uppercase;color:var(--marrom);
  font-weight:600;margin-bottom:5px}
.pilar span{font-size:.86rem;color:var(--suave)}

section{padding:88px 0;position:relative}
.rotulo{font-size:.66rem;letter-spacing:.28em;text-transform:uppercase;color:var(--dourado);margin-bottom:13px}
h2{font-size:clamp(1.85rem,3.8vw,2.7rem);margin-bottom:15px}
.intro{color:var(--suave);max-width:44em;font-size:1.01rem}

.tabela{margin-top:42px;border:1px solid var(--linha);border-radius:10px;overflow:hidden;background:var(--papel)}
.tab-cab,.tab-linha{display:grid;grid-template-columns:1.2fr 2fr .7fr .7fr;gap:18px;padding:15px 22px;align-items:center}
.tab-cab{background:var(--marrom);color:#fff;font-size:.68rem;letter-spacing:.15em;text-transform:uppercase;font-weight:500}
.tab-linha{border-top:1px solid var(--linha)}
.tab-linha:nth-child(even){background:var(--creme)}
.tab-nome{font-family:var(--serif);font-size:1.2rem;color:var(--marrom);font-weight:500}
.tab-nome .estrela{color:var(--dourado-luz);font-size:.75rem;margin-left:5px}
.tab-desc{font-size:.88rem;color:var(--suave)}
.tab-dur{font-size:.82rem;color:var(--suave);white-space:nowrap}
.tab-preco{font-family:var(--serif);font-size:1.42rem;color:var(--dourado);text-align:right;white-space:nowrap}
.nota-moeda{margin-top:13px;font-size:.8rem;color:var(--suave);font-style:italic}
#equipamentos{padding:74px 0}
.eq-grade{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:20px;margin-top:34px}
.eq{background:var(--papel);border:1px solid var(--linha);border-radius:16px;padding:26px}
.eq-topo{display:flex;align-items:baseline;gap:12px;flex-wrap:wrap;margin-bottom:16px}
.eq-topo h3{font-size:1.42rem}
.eq-tipo{font-size:.66rem;letter-spacing:.14em;text-transform:uppercase;color:var(--dourado);
  border:1px solid var(--linha);border-radius:999px;padding:4px 11px}
.eq dl{margin:0}
.eq dt{font-size:.68rem;letter-spacing:.14em;text-transform:uppercase;color:var(--suave);margin-top:16px}
.eq dt:first-of-type{margin-top:0}
.eq dd{margin:5px 0 0;font-size:.97rem;line-height:1.6}
.eq-nota{margin-top:26px;padding:18px 22px;background:var(--creme-2);border-radius:12px;font-size:.95rem}
.eq-estudo{margin-top:20px;padding-top:16px;border-top:1px solid var(--linha)}
.eq-estudo b{display:block;font-size:.68rem;letter-spacing:.14em;text-transform:uppercase;color:var(--dourado)}
.eq-estudo p{margin:7px 0 0;font-size:.93rem;line-height:1.55}
.eq-estudo cite{display:block;margin-top:9px;font-size:.78rem;font-style:normal;color:var(--suave)}
.eq-aviso{margin-top:14px;font-size:.84rem;color:var(--suave);font-style:italic}
#detox{padding:0 0 74px}
.detox-caixa{background:linear-gradient(160deg,var(--creme-2) 0%,var(--papel) 68%);
  border:1px solid var(--linha);border-radius:22px;padding:48px 44px;max-width:var(--max)}
.ocasioes{list-style:none;padding:0;margin:26px 0 0;display:grid;
  grid-template-columns:repeat(auto-fit,minmax(258px,1fr));gap:12px}
.ocasioes li{background:var(--papel);border:1px solid var(--linha);border-radius:11px;
  padding:14px 18px;font-size:.97rem;display:flex;align-items:center;gap:11px;
  transition:transform .28s cubic-bezier(.22,.61,.36,1),border-color .28s}
.ocasioes li::before{content:"";width:7px;height:7px;border-radius:50%;background:var(--dourado);flex:none}
.ocasioes li:hover{transform:translateX(4px);border-color:var(--dourado)}
.detox-pe{margin-top:30px;display:flex;gap:22px;align-items:center;justify-content:space-between;flex-wrap:wrap}
.detox-pe p{margin:0;max-width:56ch;font-size:.97rem;color:var(--suave)}

/* ---------------------------------------------------------------- movimento
   Sem JavaScript nenhum. E nao e purismo — e uma correcao.

   A primeira versao revelava os blocos com IntersectionObserver: CSS escondia tudo e o script
   mostrava conforme a pessoa rolava. Testado no navegador, o observer NAO disparou, e os doze
   blocos ficaram invisiveis para sempre. A pagina inteira em branco porque uma API nao rodou.

   Aqui a revelacao usa animation-timeline: view(), que e do proprio CSS. A diferenca que importa
   nao e performance: e que este desenho NAO CONSEGUE esconder conteudo. Navegador que nao suporta
   simplesmente ignora o @supports e mostra tudo. Nao existe estado de falha invisivel. */
@supports (animation-timeline: view()) {
  @media (prefers-reduced-motion: no-preference) {
    .rev{animation:surge linear both;animation-timeline:view();animation-range:entry 4% cover 20%}
  }
}
@keyframes surge{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:none}}

/* Inclinacao 3D sutil: 1.4 grau. O suficiente para o cartao parecer ter volume ao passar o dedo,
   longe do exagero que faz um site de estetica parecer landing de curso. */
.eq{transition:transform .4s cubic-bezier(.22,.61,.36,1),box-shadow .4s,border-color .4s;
  transform-style:preserve-3d;will-change:transform}
.eq:hover{transform:perspective(1000px) rotateX(1.4deg) rotateY(-1.4deg) translateY(-7px);
  box-shadow:0 22px 48px -26px rgba(82,58,36,.34);border-color:var(--areia)}
.pilar,.res-num{transition:transform .32s cubic-bezier(.22,.61,.36,1)}
.pilar:hover,.res-num:hover{transform:translateY(-4px)}
.btn{transition:transform .22s cubic-bezier(.22,.61,.36,1),box-shadow .22s,background .22s}
.btn:hover{transform:translateY(-2px);box-shadow:0 12px 26px -14px rgba(82,58,36,.5)}
.btn:active{transform:translateY(0)}
.tab-linha{transition:background .25s}

/* Quem pediu menos movimento no sistema recebe menos movimento. Nao e opcional: enjoo e
   sensibilidade vestibular sao reais, e o publico dela e majoritariamente feminino adulto. */
@media (prefers-reduced-motion: reduce){
  .js .rev,.js .rev.vis{opacity:1;transform:none;transition:none}
  .eq:hover,.pilar:hover,.res-num:hover,.btn:hover,.ocasioes li:hover{transform:none}
  html{scroll-behavior:auto}
}
.duvida{margin-top:30px;padding:24px;border:1px solid var(--linha);border-radius:14px;background:var(--papel);
  display:flex;gap:20px;align-items:center;justify-content:space-between;flex-wrap:wrap}
.duvida p{margin:0;max-width:52ch;font-size:1.02rem;color:var(--texto)}
.duvida .btn{flex:none}
/* O aviso de escopo fica JUNTO das frases, não a 3.000px de distância no rodapé. */
.escopo{margin-top:16px;font-size:.78rem;color:var(--suave);border-left:2px solid var(--areia);padding-left:14px}

.benef{background:var(--papel);border-block:1px solid var(--linha)}
.benef-grade{display:grid;grid-template-columns:1fr 1fr;gap:52px;align-items:center}
.benef ul{list-style:none;padding:0;margin-top:24px;display:grid;gap:12px}
.benef li{display:flex;gap:13px;align-items:flex-start;font-size:1rem}
.benef li::before{content:"";width:23px;height:23px;border-radius:50%;flex:none;margin-top:3px;
  background:var(--creme-2);border:1px solid var(--areia);
  background-image:radial-gradient(circle at 50% 50%,var(--dourado) 0 3px,transparent 3px)}
/* Flyer tem TEXTO: cortar ou esticar torna ilegível. Mostra inteiro. */
.benef-foto{margin:0}
.benef-foto img{width:100%;height:auto;object-fit:contain;border-radius:12px;
  box-shadow:0 26px 56px -30px rgba(82,58,36,.45)}

.res-grade{display:grid;grid-template-columns:repeat(3,1fr);gap:22px;margin-top:44px}
.res-num{text-align:center;padding:32px 20px;border:1px solid var(--linha);border-radius:10px;background:var(--papel)}
.res-num b{display:block;font-family:var(--serif);font-size:3rem;color:var(--dourado);line-height:1}
.res-num span{display:block;font-size:.84rem;color:var(--suave);margin-top:8px}
.fala{margin-top:34px;font-family:var(--serif);font-style:italic;font-size:1.32rem;color:var(--marrom);
  text-align:center;max-width:32em;margin-inline:auto}

.historia-grade{display:grid;grid-template-columns:1.1fr .9fr;gap:52px;align-items:center}
.gal{display:grid;gap:16px}
.gal-item{margin:0;aspect-ratio:4/5;overflow:hidden;border-radius:10px;border:1px solid var(--linha);background:var(--papel)}
.gal-item img{width:100%;height:100%;object-fit:cover}
blockquote{border-left:2px solid var(--dourado);padding-left:22px;margin:22px 0;font-family:var(--serif);
  font-style:italic;font-size:1.26rem;line-height:1.45;color:var(--marrom)}

.agendar{background:linear-gradient(180deg,var(--creme-2),var(--areia));text-align:center}
.promessa{font-family:var(--script);font-size:clamp(1.9rem,4.2vw,2.8rem);color:var(--dourado);margin:8px 0 14px}
.contato{display:flex;gap:30px;justify-content:center;flex-wrap:wrap;margin-top:32px;font-size:.88rem;color:var(--suave)}
.contato b{display:block;font-size:.64rem;letter-spacing:.18em;text-transform:uppercase;color:var(--dourado);
  margin-bottom:3px;font-weight:600}
.contato a{text-decoration:none;color:var(--marrom);font-weight:500;display:inline-flex;align-items:center;min-height:44px}

footer{padding:42px 0;text-align:center;color:var(--suave);font-size:.78rem;background:var(--papel);border-top:1px solid var(--linha)}
.assin{font-family:var(--script);font-size:1.7rem;color:var(--dourado);margin-bottom:5px}
.aviso{margin-top:15px;font-size:.72rem;max-width:46em;margin-inline:auto}

@media (max-width:900px){
  html{font-size:16px}
  .hero{padding:104px 0 52px}
  .hero-grade,.benef-grade,.historia-grade{grid-template-columns:1fr;gap:34px}
  /* A foto NÃO vem antes do texto no celular: com ela em cima, o botão de agendar caía
     150px abaixo da primeira tela. Texto e CTA primeiro; a foto vem logo depois. */
  .hero-foto{max-width:290px;margin:0 auto}
  .pilares-grade,.res-grade{grid-template-columns:repeat(2,1fr);gap:20px}
  .res-grade{grid-template-columns:1fr}
  nav{display:none}
  nav.aberto{display:flex;position:absolute;top:100%;left:0;right:0;flex-direction:column;gap:0;
    background:var(--papel);border-bottom:1px solid var(--linha);padding:6px 0}
  nav.aberto a{padding:14px 26px}
  .menu-btn{display:inline-flex}
  section{padding:60px 0}
  /* Tabela de 4 colunas não se lê no celular: cada linha vira cartão. */
  .tab-cab{display:none}
  .tab-linha{grid-template-columns:1fr auto;gap:5px 14px;padding:18px 20px}
  .tab-nome{grid-column:1}
  .tab-preco{grid-column:2;grid-row:1;font-size:1.28rem}
  .tab-dur{grid-column:1/-1;order:2}
  .tab-desc{grid-column:1/-1;order:3}
}
</style>
</head>
<body>
<a class="pular" href="#conteudo">${({pt:"Ir para o conteúdo",en:"Skip to content",es:"Ir al contenido"})[l]}</a>

<header>
  <div class="topo">
    <a class="marca" href="${eu.href}">
      <svg class="marca-a" viewBox="0 0 64 64" role="img" aria-label="${esc(CLINICA.nome)}">
        <text x="26" y="48" font-family="Cormorant Garamond,Georgia,serif" font-size="52" fill="#8a6230" text-anchor="middle">A</text>
        <path d="M44 16l2.2 5.4L52 23.6l-5.8 2.2L44 31.2l-2.2-5.4L36 23.6l5.8-2.2z" fill="#b8912f"/>
      </svg>
      <span class="marca-txt">
        <b>${esc(CLINICA.nome)}</b>
        <span>${esc(t(CLINICA.papel, l))}</span>
      </span>
    </a>
    <span class="idioma">
      ${IDIOMAS.map((i) => i.cod === l
        ? `<span class="ativo">${i.rotulo}</span>`
        : `<a href="${i.href}" hreflang="${i.lang}">${i.rotulo}</a>`).join("")}
    </span>
    <button class="menu-btn" aria-label="${({pt:"Abrir menu",en:"Open menu",es:"Abrir menú"})[l]}" aria-expanded="false" aria-controls="menu">☰</button>
    <nav id="menu">
      <a href="#servicos">${esc(nav[0])}</a>
      <a href="#equipamentos">${esc(nav[1])}</a>
      <a href="#beneficios">${esc(nav[2])}</a>
      <a href="#resultados">${esc(nav[3])}</a>
      <a href="#historia">${esc(nav[4])}</a>
      <a href="#agendar">${esc(nav[5])}</a>
    </nav>
  </div>
</header>

<main id="conteudo">

<section class="hero">
  <div class="env hero-grade">
    <div>
      <span class="selo">${esc(t(TEXTOS.selo, l))}</span>
      <h1>${esc(t(TEXTOS.h1, l))}</h1>
      <span class="h1-script">${esc(t(TEXTOS.h1s, l))}</span>
      <p class="chamada">${esc(t(TEXTOS.sub, l))}</p>
      <div class="acoes">
        <a class="btn btn-cheio" href="${zap}">${esc(t(TEXTOS.ctaAgendar, l))}</a>
        <a class="btn btn-vazio" href="#servicos">${esc(t(TEXTOS.ctaVer, l))}</a>
      </div>
    </div>
    <figure class="hero-foto">
      <span class="disco a" aria-hidden="true"></span><span class="disco b" aria-hidden="true"></span>
      <img src="/img/andreia-retrato.jpg" width="900" height="900" fetchpriority="high"
           alt="${esc(CLINICA.nome)}, ${esc(t(CLINICA.papel, l))}" />
    </figure>
  </div>
</section>

<div class="pilares">
  <div class="env pilares-grade">
${pilares}
  </div>
</div>

<section id="servicos">
  <div class="env">
    <div class="rotulo">${esc(t(TEXTOS.rotServicos, l))}</div>
    <h2>${esc(t(TEXTOS.h2Servicos, l))} <span class="script">${esc(t(TEXTOS.h2ServicosScript, l))}</span></h2>
    <p class="intro">${esc(t(TEXTOS.introServicos, l))}</p>
    <div class="tabela">
      <div class="tab-cab">
        <div>${esc(t(TEXTOS.th, l)[0])}</div><div>${esc(t(TEXTOS.th, l)[1])}</div>
        <div>${esc(t(TEXTOS.th, l)[2])}</div><div style="text-align:right">${esc(t(TEXTOS.th, l)[3])}</div>
      </div>
${linhas}
    </div>
    <p class="nota-moeda">${esc(t(TEXTOS.moeda, l))}</p>
    <div class="duvida rev">
      <p>${esc(t(TEXTOS.duvidaAjuda, l))}</p>
      <a class="btn btn-1" href="${zapDuvida}" target="_blank" rel="noopener">${esc(t(TEXTOS.ctaDuvida, l))}</a>
    </div>
    <p class="escopo">${esc(t(TEXTOS.escopo, l))}</p>
  </div>
</section>

<section id="equipamentos">
  <div class="env">
    <div class="rotulo">${esc(t(TEXTOS.rotEquip, l))}</div>
    <h2>${esc(t(TEXTOS.h2Equip, l))} <span class="script">${esc(t(TEXTOS.h2EquipScript, l))}</span></h2>
    <p class="intro">${esc(t(TEXTOS.introEquip, l))}</p>
    <div class="eq-grade">
${equipamentos}
    </div>
    <p class="eq-nota">${esc(t(TEXTOS.notaEquip, l))}</p>
    <p class="eq-aviso">${esc(t(TEXTOS.avisoEstudos, l))}</p>
  </div>
</section>

<section id="detox">
  <div class="env detox-caixa rev">
    <div class="rotulo">${esc(t(TEXTOS.rotDetox, l))}</div>
    <h2>${esc(t(TEXTOS.h2Detox, l))} <span class="script">${esc(t(TEXTOS.h2DetoxScript, l))}</span></h2>
    <p class="intro">${esc(t(TEXTOS.introDetox, l))}</p>
    <ul class="ocasioes">
${t(TEXTOS.ocasioes, l).map((o) => `      <li>${esc(o)}</li>`).join("\n")}
    </ul>
    <div class="detox-pe">
      <p>${esc(t(TEXTOS.notaDetox, l))}</p>
      <a class="btn btn-1" href="${zapDetox}" target="_blank" rel="noopener">${esc(t(TEXTOS.ctaDetox, l))}</a>
    </div>
  </div>
</section>

<div class="benef" id="beneficios">
  <section>
    <div class="env benef-grade">
      <div>
        <div class="rotulo">${esc(t(TEXTOS.rotBenef, l))}</div>
        <h2>${esc(t(TEXTOS.h2Benef, l))} <span class="script">${esc(t(TEXTOS.h2BenefScript, l))}</span></h2>
        <ul>
${benef}
        </ul>
        <p class="escopo">${esc(t(TEXTOS.escopo, l))}</p>
      </div>
      <figure class="benef-foto">
        <img src="/img/arte-drenagem.jpg" loading="lazy" width="1119" height="1400"
             alt="${({pt:"Material da Andréia sobre drenagem linfática",en:"Andréia's lymphatic drainage material",es:"Material de Andréia sobre drenaje linfático"})[l]}" />
      </figure>
    </div>
  </section>
</div>

<section id="resultados">
  <div class="env">
    <div class="rotulo">${esc(t(TEXTOS.rotResultados, l))}</div>
    <h2>${esc(t(TEXTOS.h2Resultados, l))} <span class="script">${esc(t(TEXTOS.h2ResultadosScript, l))}</span></h2>
    <p class="intro">${esc(t(TEXTOS.introResultados, l))}</p>
    <div class="res-grade">
${resultados}
    </div>
    <p class="fala">“${esc(t(FALAS[0], l))}”</p>
  </div>
</section>

<section id="historia">
  <div class="env${temFotos ? " historia-grade" : ""}">
    <div>
      <div class="rotulo">${esc(t(TEXTOS.rotHistoria, l))}</div>
      <h2>${esc(t(TEXTOS.h2Historia, l))} <span class="script">${esc(t(TEXTOS.h2HistoriaScript, l))}</span></h2>
      <p class="intro">${esc(t(TEXTOS.introHistoria, l))}</p>
      <blockquote>“${esc(t(TEXTOS.citacao, l))}”</blockquote>
    </div>
${temFotos ? `    <div class="gal">\n${fotos}\n    </div>` : ""}
  </div>
</section>

<section id="agendar" class="agendar">
  <div class="env">
    <div class="rotulo">${esc(t(TEXTOS.rotAgendar, l))}</div>
    <h2>${t(TEXTOS.h2Agendar, l)}</h2>
    <p class="promessa">${esc(t(TEXTOS.promessa, l))}</p>
    <div class="acoes" style="justify-content:center">
      <a class="btn btn-cheio" href="${zap}">${esc(t(TEXTOS.ctaZap, l))}</a>
      <a class="btn btn-vazio" href="${CLINICA.instagram}" target="_blank" rel="noopener">${esc(t(TEXTOS.ctaInsta, l))}</a>
    </div>
    <div class="contato">
      <div><b>${esc(t(TEXTOS.labelZap, l))}</b><a href="${zap}">${esc(CLINICA.telefone)}</a></div>
      <div><b>${esc(t(TEXTOS.labelOnde, l))}</b>${esc(CLINICA.endereco)}<br />${esc(CLINICA.cidadeEstadoZip)}</div>
      <div><b>${esc(t(TEXTOS.labelIdiomas, l))}</b>${esc(t(TEXTOS.valorIdiomas, l))}</div>
    </div>
  </div>
</section>

</main>

<footer>
  <div class="env">
    <div class="assin">${esc(CLINICA.nome)}</div>
    <div>${esc(t(CLINICA.papel, l))} · ${esc(CLINICA.cidade)}</div>
    <div class="aviso">${esc(t(TEXTOS.rodape, l))}</div>
  </div>
</footer>

<script>
// Único script da página: abrir e fechar o menu. Todo o conteúdo já está no HTML.
(function(){
  var b=document.querySelector('.menu-btn'), n=document.getElementById('menu');
  b.addEventListener('click',function(){
    var a=n.classList.toggle('aberto');
    b.setAttribute('aria-expanded',String(a));
  });
  n.addEventListener('click',function(e){ if(e.target.tagName==='A') { n.classList.remove('aberto'); b.setAttribute('aria-expanded','false'); } });
})();
</script>
</body>
</html>
`;
}

// index.html é o PT (raiz); os demais viram <cod>.html e o cleanUrls serve /en e /es.
const gerados = IDIOMAS.map((i) => {
  const arquivo = i.cod === "pt" ? "index.html" : `${i.cod}.html`;
  writeFileSync(new URL(`./${arquivo}`, import.meta.url), pagina(i.cod));
  return arquivo;
});
console.log(`Gerado: ${gerados.join(", ")} — ${SERVICOS.length} procedimentos, ${FOTOS.length} foto(s).`);
