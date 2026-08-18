// Gera privacidade.html — página independente, mesmo visual do site.
// Separada do build principal de propósito: ela muda quando a POLÍTICA muda, não quando o
// site muda, e misturar as duas coisas faz a política ficar desatualizada sem ninguém notar.
import { writeFileSync } from "node:fs";
import { POLITICA } from "./privacidade/conteudo.mjs";
import { CLINICA, SITE_URL } from "./dados.js";

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const p = POLITICA.pt;

const html = `<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${esc(p.titulo)} · ${esc(CLINICA.nome)}</title>
<meta name="description" content="Quais dados este site coleta, por quê, por quanto tempo e como pedir para apagar." />
<link rel="canonical" href="${SITE_URL}/privacidade" />
<meta name="robots" content="index,follow" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Jost:wght@300;400;500&display=swap" rel="stylesheet" />
<style>
:root{--creme:#f7f1e8;--papel:#fffdfa;--marrom:#3d2b1f;--suave:#8a8178;--linha:#e7dfd3;--dourado:#8a6a43;
  --serif:"Cormorant Garamond",Georgia,serif;--sans:"Jost",system-ui,sans-serif;--r-s:12px;--r-m:16px}
*{box-sizing:border-box}
body{margin:0;background:var(--creme);color:var(--marrom);font-family:var(--sans);
  font-weight:300;line-height:1.65;-webkit-font-smoothing:antialiased}
.env{max-width:760px;margin:0 auto;padding:0 22px}
header{border-bottom:1px solid var(--linha);background:var(--papel);padding:20px 0}
header .env{display:flex;justify-content:space-between;align-items:center;gap:16px;flex-wrap:wrap}
.marca{font-family:var(--serif);font-size:1.35rem;color:var(--marrom);text-decoration:none}
.voltar{font-size:.9rem;color:var(--dourado);text-decoration:none;border:1px solid var(--linha);
  border-radius:999px;padding:8px 16px}
.voltar:hover{border-color:var(--dourado)}
main{padding:44px 0 64px}
h1{font-family:var(--serif);font-size:2.4rem;font-weight:500;margin:0 0 6px;line-height:1.15}
.data{color:var(--suave);font-size:.9rem;margin:0 0 28px}
.intro{font-size:1.08rem;background:var(--papel);border:1px solid var(--linha);
  border-radius:var(--r-m);padding:20px;margin:0 0 34px}
h2{font-family:var(--serif);font-size:1.5rem;font-weight:500;margin:38px 0 10px;line-height:1.25}
p{margin:0 0 12px}
ul{margin:0 0 12px;padding-left:20px}
li{margin:0 0 8px}
b{font-weight:500;color:var(--marrom)}
.contato{margin:44px 0 0;padding:20px;background:var(--papel);border:1px solid var(--linha);
  border-radius:var(--r-m);font-size:.96rem;color:var(--suave)}
footer{border-top:1px solid var(--linha);padding:22px 0;color:var(--suave);font-size:.86rem;text-align:center}
@media (max-width:600px){h1{font-size:1.9rem}main{padding:30px 0 44px}}
</style>
</head>
<body>
<header><div class="env">
  <a class="marca" href="/">${esc(CLINICA.nome)}</a>
  <a class="voltar" href="/">${esc(p.voltar)}</a>
</div></header>
<main><div class="env">
  <h1>${esc(p.titulo)}</h1>
  <p class="data">${esc(p.atualizado)}</p>
  <p class="intro">${esc(p.intro)}</p>
${p.secoes.map(([t, corpo]) => `  <h2>${esc(t)}</h2>\n  ${corpo}`).join("\n")}
  <div class="contato">${esc(p.contato)}</div>
</div></main>
<footer><div class="env">${esc(CLINICA.nome)} · ${esc(CLINICA.cidade)}</div></footer>
</body>
</html>
`;
writeFileSync("privacidade.html", html);
console.log(`privacidade.html gerado — ${p.secoes.length} seções, ${html.length} bytes`);
