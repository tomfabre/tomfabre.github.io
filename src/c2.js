const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const store = { get(k){ try { return localStorage.getItem(k); } catch(e){ return null; } }, set(k,v){ try { localStorage.setItem(k,v); } catch(e){} } };
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const root = document.documentElement;
const EMAIL = "hey@tomfabre.com";
/* Pega aquí tu endpoint de Formspree (https://formspree.io/f/xxxxxxxx) para que el formulario envíe los mensajes a tu email. Vacío = abre el correo del visitante. */
const FORM_ENDPOINT = "https://formspree.io/f/xvkaoqbl";
/* ---------- analytics hook: loads nothing. Fires a DOM event and, only if the owner later defines window.AF_ANALYTICS (after consent), forwards it. Never pass personal data. ---------- */
function track(name, props){
  const detail = Object.assign({ locale: typeof lang === "string" ? lang : "es" }, props || {});
  try { document.dispatchEvent(new CustomEvent("af:track", { detail:{ name, props:detail } })); } catch(e){}
  try { if (typeof gtag === "function") gtag("event", name, detail); } catch(e){}   // GA4 events (no personal data)
  try { if (window.AF_ANALYTICS && typeof window.AF_ANALYTICS.track === "function") window.AF_ANALYTICS.track(name, detail); } catch(e){}
}
document.addEventListener("click", e => { const el = e.target.closest && e.target.closest("[data-ev]"); if (el) track(el.dataset.ev, { page: (typeof route_ === "object" && route_.page) || "home", placement: el.dataset.place || "", service: el.dataset.service || undefined }); });
/* ---------- path routing (real URLs per language) · hash mode in the artifact preview ---------- */
const PATHS = !!document.querySelector('meta[name="af-paths"]');
const SLUG = { es:{projects:"proyectos",services:"servicios",bio:"bio",contact:"contacto"}, en:{projects:"projects",services:"services",bio:"bio",contact:"contact"}, fr:{projects:"projets",services:"services",bio:"bio",contact:"contact"} };
const SSLUG = { es:{branding:"branding",web:"diseno-web",ux:"diseno-ux-ui"}, en:{branding:"branding",web:"web-design",ux:"ux-ui-design"}, fr:{branding:"branding",web:"design-web",ux:"design-ux-ui"} };
const SKEYS = ["branding","web","ux"];
const PFX = { es:"", en:"/en", fr:"/fr" };
function urlFor(r, lg){
  lg = lg || lang; const b = PFX[lg] || "", s = SLUG[lg];
  if (r.page === "project") return b + "/" + s.projects + "/" + r.key + "/";
  if (r.page === "service") return b + "/" + s.services + "/" + SSLUG[lg][r.key] + "/";
  if (r.page === "home") return b + "/";
  return b + "/" + s[r.page] + "/";
}
function parseLoc(pn){
  const seg = pn.split("/").filter(Boolean); let lg = "es";
  if (seg[0] === "en" || seg[0] === "fr") lg = seg.shift();
  const s = SLUG[lg];
  if (!seg.length) return { lg, r:{ page:"home" } };
  if (seg[0] === s.projects){
    if (seg.length === 1) return { lg, r:{ page:"projects" } };
    if (seg.length === 2 && PROJ.some(p => p.key === seg[1])) return { lg, r: PROJ.find(p => p.key === seg[1]).locked ? { page:"projects" } : { page:"project", key:seg[1] } };
    return null;
  }
  if (seg[0] === s.services){
    if (seg.length === 1) return { lg, r:{ page:"services" } };
    const k = SKEYS.find(x => SSLUG[lg][x] === seg[1]);
    if (seg.length === 2 && k) return { lg, r:{ page:"service", key:k } };
    return null;
  }
  if (seg.length === 1 && (seg[0] === "bio" || seg[0] === s.contact)) return { lg, r:{ page: seg[0] === "bio" ? "bio" : "contact" } };
  return null;
}
function parseHashStr(h){
  h = String(h || "").replace(/^#/, "");
  if (h.startsWith("project-")) { const k = h.slice(8); if (PROJ.some(p => p.key === k)) return PROJ.find(p => p.key === k).locked ? { page:"projects" } : { page:"project", key:k }; }
  if (h.startsWith("service-")) { const k = h.slice(8); if (SKEYS.includes(k)) return { page:"service", key:k }; }
  return ["projects","services","bio","contact"].includes(h) ? { page:h } : (h === "home" ? { page:"home" } : null);
}
let lang = store.get("af-lang");
if (!T[lang]) { const n = (navigator.language || "es").slice(0,2); lang = T[n] ? n : "es"; }
if (PATHS){ const pl = parseLoc(location.pathname); lang = pl ? pl.lg : (document.documentElement.lang in T ? document.documentElement.lang : "es"); }
const L = () => T[lang];
const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- artwork (abstract SVG stand-ins, swap for real screenshots) ---------- */
const PAL = ["--coral","--lav","--mustard","--mint"];
const col = (v, i) => `var(${PAL[(i + v) % 4]})`;
const ART = {
  contazara: v => { const h = [90,140,70,170,110,150,60]; let s = ""; for (let i = 0; i < 7; i++) { const hh = h[(i + v * 2) % 7]; s += `<rect x="${36 + i*50}" y="${240 - hh}" width="32" height="${hh}" fill="${col(v, i % 3)}" opacity="${i % 3 === 2 ? .55 : 1}"/>`; } return s + `<circle cx="${310 - v*60}" cy="62" r="26" fill="${col(v,3)}"/><rect x="20" y="240" width="360" height="3" fill="var(--fg)"/>`; },
  healthtech: v => `<circle cx="200" cy="150" r="118" fill="none" stroke="var(--fg)" stroke-width="1.2"/><circle cx="200" cy="150" r="82" fill="none" stroke="var(--fg)" stroke-width="1.2" opacity=".6"/><circle cx="${200 + (v-1)*50}" cy="150" r="52" fill="${col(v,0)}"/><rect x="${186 + (v-1)*50}" y="122" width="28" height="56" fill="var(--bg)"/><rect x="${172 + (v-1)*50}" y="136" width="56" height="28" fill="var(--bg)"/>`,
  "360estudio": v => { let s = ""; for (let i = 1; i < 10; i++) s += `<path d="M${i*40} 0V300M0 ${i*30}H400" stroke="var(--fg)" stroke-width=".6" opacity=".25"/>`; return s + `<rect x="${60 + v*20}" y="60" width="190" height="130" fill="none" stroke="var(--fg)" stroke-width="2"/><rect x="${60 + v*20}" y="60" width="80" height="130" fill="${col(v,0)}"/><path d="M${250 + v*20} 190A60 60 0 0 0 ${190 + v*20} 130" fill="none" stroke="var(--fg)" stroke-width="2"/><rect x="${270 + v*10}" y="200" width="90" height="60" fill="${col(v,2)}" opacity=".9"/>`; },
  freethem: v => `<circle cx="${150 + v*10}" cy="130" r="80" fill="${col(v,0)}" opacity=".85"/><circle cx="${230 - v*10}" cy="130" r="80" fill="${col(v,1)}" opacity=".85"/><circle cx="190" cy="200" r="70" fill="${col(v,3)}" opacity=".8"/><circle cx="190" cy="150" r="5" fill="var(--fg)"/>`,
  apps: v => [0,1,2].map(i => `<rect x="${44 + i*118}" y="${50 + ((i + v) % 3)*14}" width="100" height="190" fill="var(--bg)" stroke="var(--fg)" stroke-width="2"/><rect x="${52 + i*118}" y="${60 + ((i + v) % 3)*14}" width="84" height="56" fill="${col(v,i)}"/><rect x="${52 + i*118}" y="${126 + ((i + v) % 3)*14}" width="60" height="6" fill="var(--fg)" opacity=".7"/><rect x="${52 + i*118}" y="${142 + ((i + v) % 3)*14}" width="76" height="6" fill="var(--fg)" opacity=".35"/>`).join(""),
  codelco: v => [0,1,2,3].map(i => `<path d="M0 ${70 + i*52 + v*8} Q100 ${40 + i*52} 200 ${70 + i*52} T400 ${60 + i*52} V300 H0Z" fill="${col(v,i)}" opacity="${.95 - i*.12}"/>`).join("")
};
Object.assign(ART, {
  "carceral-ecologies": v => ART["360estudio"](v), a2pas: v => ART.freethem(v + 1), happylife: v => ART.healthtech(v), binome: v => ART.codelco(v + 1),
  yaypegs: v => ART.apps(v + 1), figy: v => ART.healthtech(v + 1), "mobile-experiences": v => ART.apps(v), molyb: v => ART.codelco(v)
});
const IMG = window.__IMG || {};
const svgOf = (key, v, hi) => { const m = IMG[key]; if (m && m[v]){ const i = PROJ.findIndex(p => p.key === key), nm = (i < 0) ? "" : (L().projects[i][0] + (L().projects[i][1] ? ": " + L().projects[i][1] : "")); return `<img src="${m[v]}" alt="${esc(nm)}" ${hi ? 'loading="eager" fetchpriority="high"' : 'loading="lazy"'} decoding="async"${(!nm || v === 0) ? ' aria-hidden="true"' : ""}>`; } if (v === "cover") v = 0; return svgOld(key, v); };
const svgOld = (key, v) => `<svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false"><rect width="400" height="300" fill="var(--surface)"/>${ART[key](v)}</svg>`;

/* ---------- small helpers ---------- */
function mono(el, parts){ el.textContent = ""; parts.forEach(p => { const s = document.createElement("span"); s.textContent = p; el.appendChild(s); }); }

/* ---------- theme & language toggles ---------- */
let themePref = store.get("af-theme") || "system";
function applyTheme(){
  const dark = themePref === "dark" || (themePref === "system" && matchMedia("(prefers-color-scheme: dark)").matches);
  if (themePref === "system") root.removeAttribute("data-theme"); else root.setAttribute("data-theme", themePref);
  const t = $("#themeT"); if (t) { t.dataset.on = dark; t.setAttribute("aria-pressed", String(dark)); $("#themeLbl").textContent = dark ? "DARK" : "LIGHT"; }
}
matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => themePref === "system" && applyTheme());
function wireTheme(){
  $("#themeT").addEventListener("click", () => {
    const dark = root.hasAttribute("data-theme") ? root.getAttribute("data-theme") === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
    themePref = dark ? "light" : "dark"; store.set("af-theme", themePref); applyTheme();
  });
}
function wireLang(){
  const btn = $("#langBtn"), pop = $("#langPop");
  function fill(){
    pop.innerHTML = ""; [["es","Español · ES"],["en","English · EN"],["fr","Français · FR"]].forEach(([k, label]) => {
      const b = document.createElement("button"); b.type = "button"; b.setAttribute("role","menuitem"); b.setAttribute("aria-pressed", String(k === lang)); b.textContent = label;
      b.addEventListener("click", () => { store.set("af-lang", k); pop.hidden = true; btn.setAttribute("aria-expanded","false"); setLang(k); });
      pop.appendChild(b);
    });
    $("#langCode").textContent = lang.toUpperCase();
  }
  btn.addEventListener("click", () => { const o = pop.hidden; pop.hidden = !o; btn.setAttribute("aria-expanded", String(o)); if (o) fill(); });
  document.addEventListener("click", e => { if (!pop.hidden && !e.target.closest(".lw")) { pop.hidden = true; btn.setAttribute("aria-expanded","false"); } });
  fill();
}

/* ---------- menu sheet ---------- */
const sheet = () => $("#sheet"), burger = () => $("#burger");
function closeSheet(){ sheet().classList.remove("open"); sheet().setAttribute("aria-hidden","true"); burger().setAttribute("aria-expanded","false"); document.body.style.overflow = ""; }
function openSheet(){ sheet().classList.add("open"); sheet().setAttribute("aria-hidden","false"); burger().setAttribute("aria-expanded","true"); document.body.style.overflow = "hidden"; const first = sheet().querySelector("a"); if (first) setTimeout(() => first.focus(), 120); }
function wireMenu(){
  burger().addEventListener("click", () => sheet().classList.contains("open") ? closeSheet() : openSheet());
  $$("#snav a").forEach(a => a.addEventListener("click", closeSheet));
  document.addEventListener("keydown", e => { if (e.key === "Escape" && sheet().classList.contains("open")) { closeSheet(); burger().focus(); } });
}

/* ---------- home sections ---------- */
/* service <-> project relations come from the "services" column of each project in the repo (single source) */
const PSVC = { contazara:["branding","web"], "carceral-ecologies":["web"], a2pas:["ux","web","branding"], happylife:["ux"], binome:["branding","web","ux"], yaypegs:["ux"], "mobile-experiences":["ux"], "360estudio":["branding","web"], figy:["ux"], apolo:["ux"], appy:["ux"], mood:["ux"], molyb:["ux"] };
const sentence = x => { x = String(x).toLowerCase(); return x.charAt(0).toUpperCase() + x.slice(1); };
const oneLine = x => String(x).replace(/\n/g, " ");
function renderHomeServices(){
  const t = L();
  $("#svc").innerHTML = t.hs_items.map(([n, claim, body, scope, note, cta], i) => `<li><span class="num">0${i+1}</span><h3>${esc(n)}</h3><div><p class="tgl">${esc(claim)}</p><p>${esc(body)}</p>${note ? `<p class="svc-note">${esc(note)}</p>` : ""}<ul class="tagrow">${scope.replace(/\.$/, "").split(" · ").map(x => `<li>${esc(x)}</li>`).join("")}</ul><p class="svc-go"><a class="btn cta" href="#service-${SKEYS[i]}" data-ev="service_cta_click" data-place="home" data-service="${SKEYS[i]}"><span>${esc(cta)}</span><span class="arr" aria-hidden="true">→</span></a></p></div></li>`).join("");
}
function renderFaq(sel, arr, acts){
  const el = $(sel); if (!el) return; const was = [...el.querySelectorAll("details")].map(d => d.open);
  const act = i => { const a = acts && acts[i]; if (!a) return ""; const arrow = `<span class="arr" aria-hidden="true">↗</span>`;
    return a[0] === "form" ? `<button class="btn sm" type="button" data-open-form data-ev="primary_cta_click" data-place="faq"><span>${esc(a[1])}</span>${arrow}</button>` : `<a class="btn sm" href="#${a[0]}" data-ev="faq_link_click" data-place="faq"><span>${esc(a[1])}</span>${arrow}</a>`; };
  el.innerHTML = arr.map(([q, a], i) => `<details class="faq-i"${was[i] ? " open" : ""}><summary><span class="q">${esc(q)}</span><span class="pm" aria-hidden="true"></span></summary><div class="faq-a"><p>${esc(a)}</p>${act(i)}</div></details>`).join("");
}
function renderAboutHome(){ const t = L(); $("#abP").innerHTML = t.ha_p.map(x => `<p>${esc(x)}</p>`).join(""); }
const crumbs = items => `<nav class="crumbs" aria-label="${esc(({es:"Migas de pan",en:"Breadcrumb",fr:"Fil d'Ariane"})[lang])}"><ol>${items.map(([l, h]) => h ? `<li><a href="${h}">${esc(l)}</a></li>` : `<li aria-current="page">${esc(l)}</li>`).join("")}</ol></nav>`;
const lockTx = d => d.locked ? tr(d.locked) : "";   // label of a locked (visible but not clickable) project
function projCard(k, tag){
  const t = L(), i = PROJ.findIndex(p => p.key === k), p = t.projects[i];
  const lock = PROJ[i].locked, inner = `<span class="art">${svgOf(k, 0)}</span><span class="pj-info"><${tag}>${esc(p[0])}</${tag}><span class="tg">${esc(p[6] || "")}</span><span class="meta-row"><span>${esc(p[1])}</span></span>${lock ? `<span class="lock-tag">${esc(lockTx(PROJ[i]))}</span>` : `<span class="go" aria-hidden="true">→</span>`}</span>`;
  return lock ? `<div class="pj-card is-locked" aria-disabled="true">${inner}</div>` : `<a class="pj-card" href="#project-${k}">${inner}</a>`;
}
function renderServicesIndex(){
  const t = L(), sp = t.sp.idx; const el = $("#svIdx"); if (!el) return;
  el.innerHTML = `<section class="sv-hero">${crumbs([[t.n_home, "#home"], [t.n_services, null]])}<p class="sv-eb">${esc(sp.eb)}</p><h1 class="sv-h1">${esc(sp.h1)}</h1><p class="sv-intro">${esc(sp.intro)}</p></section>
  <section aria-label="${esc(t.n_services)}"><ul class="svc-rows">${t.hs_items.map(([n, claim, body, scope, note, cta], i) => `<li><span class="num">0${i+1}</span><h2>${esc(n)}</h2><div><p class="tgl">${esc(claim)}</p><p>${esc(body)}</p>${note ? `<p class="svc-note">${esc(note)}</p>` : ""}<ul class="tagrow">${scope.replace(/\.$/, "").split(" · ").map(x => `<li>${esc(x)}</li>`).join("")}</ul><p class="svc-go"><a class="btn cta" href="#service-${SKEYS[i]}" data-ev="service_cta_click" data-place="services_index" data-service="${SKEYS[i]}"><span>${esc(cta)}</span><span class="arr" aria-hidden="true">→</span></a></p></div></li>`).join("")}</ul></section>
  <section class="sv-team"><span class="blobs" aria-hidden="true"><i class="b1"></i><i class="b2"></i><i class="b3"></i><i class="b4"></i><i class="bm"></i></span><span class="cta-star" aria-hidden="true">✱</span><p class="sv-teamtx">${esc(sp.team)}</p><p><button class="btn solid" type="button" data-open-form data-ev="primary_cta_click" data-place="services_index"><span>${esc(sp.cta)}</span><span class="arr" aria-hidden="true">→</span></button></p></section>`;
}
function renderServicePage(key){
  const t = L(), sp = t.sp[key], idx = SKEYS.indexOf(key), el = $("#svPage"); if (!el || !sp) return;
  const related = PROJ.filter(p => (PSVC[p.key] || []).includes(key)).map(p => p.key);
  el.innerHTML = `<article class="sv">
  <header class="sv-hero">${crumbs([[t.n_home, "#home"], [t.n_services, "#services"], [t.hs_items[idx][0], null]])}${sp.name ? `<h1 class="sv-eb">${esc(sp.name)}</h1><p class="sv-h1">${esc(sp.h1)}</p>` : `<p class="sv-eb">${esc(sp.eb)}</p><h1 class="sv-h1">${esc(sp.h1)}</h1>`}<p class="sv-intro">${esc(sp.intro)}</p>
    <p class="sv-act"><button class="btn cta solid" type="button" data-open-form data-ev="service_cta_click" data-place="service_hero" data-service="${key}"><span>${esc(sp.cta_b)}</span><span class="arr" aria-hidden="true">→</span></button><a class="btn cta" href="#projects"><span>${esc(sp.cta_s || t.h_cta2)}</span><span class="arr" aria-hidden="true">→</span></a></p></header>
  ${sp.blocks.map((b, i) => `<section class="sv-b"><span class="num" aria-hidden="true">0${i+1}</span><h2>${esc(b.h)}</h2><div>${b.sub ? `<p class="sv-sub">${esc(b.sub)}</p>` : ""}${b.t ? `<p>${esc(b.t)}</p>` : ""}${b.list ? `<ul class="sv-list">${b.list.map(x => `<li>${esc(x)}</li>`).join("")}</ul>` : ""}${b.note ? `<p>${esc(b.note)}</p>` : ""}${b.link ? `<p><a class="sv-link" href="${b.link.href}">${esc(b.link.label)} <span aria-hidden="true">→</span></a></p>` : ""}</div></section>`).join("")}
  ${related.length ? `<section class="sv-rel"><h2>${esc(sp.rel_h)}</h2><p>${esc(sp.rel_t)}</p><div class="pj-grid">${related.map(k => projCard(k, "h3")).join("")}</div></section>` : ""}
  <section class="sv-faq"><h2>${esc(sentence(t.hf_lab))}</h2><div class="faq" id="svFaq"></div></section>
  <section class="sv-cta"><span class="blobs" aria-hidden="true"><i class="b1"></i><i class="b2"></i><i class="b3"></i><i class="b4"></i><i class="bm"></i></span><span class="cta-star" aria-hidden="true">✱</span><h2>${esc(sp.cta_h)}</h2>${sp.cta_t ? `<p class="sv-cta-t">${esc(sp.cta_t)}</p>` : ""}<p><button class="btn solid" type="button" data-open-form data-ev="service_cta_click" data-place="service_footer" data-service="${key}"><span>${esc(sp.cta_b2 || sp.cta_b)}</span><span class="arr" aria-hidden="true">→</span></button></p></section>
  <nav class="sv-others" aria-label="${esc(t.n_services)}"><ul>${SKEYS.map((k, i) => k === key ? "" : `<li><a href="#service-${k}">${esc(t.hs_items[i][0])} <span aria-hidden="true">→</span></a></li>`).join("")}<li><a href="#services">${esc(t.sp_back)} <span aria-hidden="true">→</span></a></li></ul></nav></article>`;
  renderFaq("#svFaq", sp.faq);
}
function renderServices(id, arr){ $(id).innerHTML = arr.map(([h, tg, p1, p2, tags], i) => `<li><span class="num">0${i+1}</span><h3>${esc(h)}</h3><div><p class="tgl">${esc(tg)}</p><p>${esc(p1)}</p><p>${esc(p2)}</p><ul class="tagrow">${tags.split(" · ").map(x => `<li>${esc(x)}</li>`).join("")}</ul></div></li>`).join(""); }
function renderCards(id, arr){ $(id).innerHTML = arr.map(([h, p], i) => `<li><span class="num">0${i+1} / 0${arr.length}</span><h3>${esc(h)}</h3><p>${esc(p)}</p></li>`).join(""); }
function renderSvc(id, arr){ $(id).innerHTML = arr.map(([h, p], i) => `<li><span class="num">0${i+1}</span><h3>${esc(h)}</h3><p>${esc(p)}</p></li>`).join(""); }
const workOpen = new Set();
function renderWork(){
  const t = L(); $("#workList").innerHTML = t.projects.slice(0, HOME_PROJECTS).map((p, i) => {
    const k = PROJ[i].key, open = workOpen.has(i);
    return `<li><button class="row" type="button" aria-expanded="${open}" aria-controls="wx${i}"><span class="num">0${i+1}</span><span class="t">${esc(p[0])}</span><span class="cat">${esc(p[1])}</span><span class="pm" aria-hidden="true">+</span></button>
    <div class="px${open ? ' open' : ''}" id="wx${i}" role="region" aria-label="${esc(p[0])}"><div><div class="px-in"><div class="px-tx"><p class="tg">${esc(p[6] || "")}</p><p>${esc(p[3])}</p>${PROJ[i].locked ? `<span class="btn is-locked" aria-disabled="true"><span>${esc(lockTx(PROJ[i]))}</span></span>` : `<a class="btn solid" href="#project-${k}"><span>${esc(t.view_project)}</span><span class="arr" aria-hidden="true">→</span></a>`}</div><div class="px-ims"><span class="art">${svgOf(k,0)}</span><span class="art">${svgOf(k,1)}</span></div></div></div></div></li>`;
  }).join("");
  // wire accordion
  $$("#workList .row").forEach((b, i) => b.addEventListener("click", () => {
    const o = b.getAttribute("aria-expanded") === "true";
    b.setAttribute("aria-expanded", String(!o));
    b.nextElementSibling.classList.toggle("open", !o);
    o ? workOpen.delete(i) : workOpen.add(i);
  }));
}
const R = ["I","II","III","IV","V","VI","VII","VIII","IX","X"];
let gridWired = false;
function renderGrid(){
  const t = L(); const rn = t.projects.length; const pc = $("#pjcount"); if (pc) pc.textContent = "2026";
  $("#grid").innerHTML = t.projects.map((p, i) => {
    const k = PROJ[i].key;
    return projCard(k, "h2");
  }).join("");
  // wire toggle once
  if (!gridWired){
    $$(".view-seg button").forEach(b => b.addEventListener("click", () => {
      const v = b.dataset.view;
      $$(".view-seg button").forEach(x => x.setAttribute("aria-pressed", String(x.dataset.view === v)));
      $("#grid").classList.toggle("list", v === "list");
      store.set("af-view", v);
    }));
    gridWired = true;
    const saved = store.get("af-view");
    if (saved === "list") $('.view-seg button[data-view="list"]').click();
  }
}
/* ---------- case-study sections: optional per project (SECTIONS in c1k.js, validated at build). Reuses .pj-body / .pj-gal / .stats ---------- */
const tr = o => (o && o[lang]) || "";                                              // pick the current language from {es,en,fr}
const rl = d => (d.role && typeof d.role === "object") ? tr(d.role) : d.role;
const yl = d => (d.years && typeof d.years === "object") ? tr(d.years) : d.years;      // period: plain string or {es,en,fr}      // role: plain string or {es,en,fr}
/* Paragraph text with optional inline links: {name} markers in the text map to x.links[name] = {href, t}. Everything is escaped; no raw HTML ever comes from content. */
const rich = x => tr(x).split(/\{([a-z][a-z0-9]*)\}/).map((s, i) => i % 2 ? ((x.links || {})[s] ? `<a href="${esc(x.links[s].href)}" target="_blank" rel="noopener noreferrer" data-ev="project_link_click" data-place="${esc(s)}">${esc(tr(x.links[s].t))}</a>` : "") : esc(s)).join("");
const paras = a => (a || []).filter(x => tr(x)).map(x => x.em ? `<p><strong>${rich(x)}</strong></p>` : `<p>${rich(x)}</p>`).join("");
const secBody = (s, inner) => `<div class="pj-body"><h2 id="s-${s.id}-h">${esc(tr(s.h))}</h2><div>${s.t ? `<h3>${esc(tr(s.t))}</h3>` : ""}${inner}</div></div>`;
const ZOOM_L = { es:"Abrir la imagen ampliada en una pestaña nueva", en:"Open the enlarged image in a new tab", fr:"Ouvrir l'image agrandie dans un nouvel onglet" };
const imgTag = (im, st) => { const u = IMG[im.key][im.v], img = `<img src="${u}" alt="${esc(tr(im.alt))}" loading="lazy" decoding="async">`; return `<div class="art"${st ? ` style="aspect-ratio:${esc(st)}"` : ""}>${im.zoom ? `<a class="zoom" href="${u}" target="_blank" rel="noopener" aria-label="${esc(tr(ZOOM_L))}: ${esc(tr(im.alt))}">${img}</a>` : img}</div>`; };
const imgCap = im => im.cap ? `<p class="pj-cap">${esc(tr(im.cap))}</p>` : "";
const secImg = im => (IMG[im.key] && IMG[im.key][im.v]) ? `<div class="pj-gal">${imgTag(im, im.r)}</div>${imgCap(im)}` : "";
const okImg = im => !!(IMG[im.key] && IMG[im.key][im.v]);
const secFig = im => okImg(im) ? `<div class="pj-body"><span aria-hidden="true"></span><div><div class="pj-gal one">${imgTag(im, im.r)}</div></div></div>` : "";
const secPair = ims => ims.every(okImg) ? `<div class="pj-gal duo">${ims.map(im => imgTag(im)).join("")}</div>` : "";
const secFlow = fl => (fl || []).map(f => f.img ? secImg(f.img) : f.fig ? secFig(f.fig) : f.pair ? secPair(f.pair) : (paras(f.p) ? `<div class="pj-body"><span aria-hidden="true"></span><div>${paras(f.p)}</div></div>` : "")).join("");
const secHasImg = k => !!SECTIONS[k] && SECTIONS[k].some(s => s.img || (s.flow || []).some(f => f.img || f.fig || f.pair));   // case already carries its images inline
/* To add a type: add it here AND to TYPES in validate_sections.py (build fails on unknown types). */
/* chapter: one app inside a multi-app case. layout "right" (text left, images right), "left" (images left, text right) or "wide" (wide image on top, text and figures below). Images that do not exist yet render as neutral placeholders with the right proportion (im.ph). */
const chImg = im => okImg(im) ? imgTag(im, im.r) : `<div class="art ph" style="aspect-ratio:${esc(im.r || "4/3")}" aria-hidden="true"></div>`;
const chLink = x => `<a href="${esc(x.href)}" target="_blank" rel="noopener noreferrer" data-ev="project_link_click" data-place="${esc(x.href.split("/")[2] || "")}">${esc(tr(x.l))}</a>`;
const chapterHtml = s => `<section class="pj-sec ch ch-${s.layout}" id="s-${s.id}" aria-labelledby="s-${s.id}-h"><div class="ch-in"><div class="ch-tx"><div class="ch-main"><h2 id="s-${s.id}-h" class="ch-eb">${esc(tr(s.h))}</h2><h3>${esc(tr(s.t))}</h3>${paras(s.p)}</div><div class="ch-aside">${(s.meta || []).length ? `<dl class="ch-meta">${s.meta.map(m => `<div><dt>${esc(tr(m.l))}</dt><dd>${esc(tr(m.v))}</dd></div>`).join("")}</dl>` : ""}${s.metric ? `<p class="ch-metric"><b>${esc(tr(s.metric.n))}</b><span>${esc(tr(s.metric.l))}</span>${s.metric.note ? `<small>${esc(tr(s.metric.note))}</small>` : ""}</p>` : ""}${(s.links || []).length ? `<p class="ch-links">${s.links.map(chLink).join("")}</p>` : ""}</div></div><div class="ch-media">${(s.media || []).map(chImg).join("")}</div></div></section>`;
const SECTION_RENDER = {
  text: s => `<section class="pj-sec" id="s-${s.id}" aria-labelledby="s-${s.id}-h">${secBody(s, paras(s.p))}${s.img ? secImg(s.img) : ""}${secFlow(s.flow)}</section>`,
  chapter: chapterHtml,
  metrics: s => `<section class="pj-sec" id="s-${s.id}" aria-labelledby="s-${s.id}-h">${secBody(s, paras(s.p))}<ul class="stats pj-stats">${s.items.map(it => `<li class="stat"><b>${esc(tr(it.n))}</b><span>${esc(tr(it.l))}</span></li>`).join("")}</ul>${paras(s.after) ? `<div class="pj-body"><span aria-hidden="true"></span><div>${paras(s.after)}</div></div>` : ""}${secFlow(s.flow)}</section>`
};
const renderSection = s => { const f = SECTION_RENDER[s.type]; if (!f) throw new Error("Unknown section type: " + s.type); return tr(s.h) ? f(s) : ""; };   // sections and paragraphs written for other languages only are skipped (see langs in validate_sections.py)
function renderProject(key){
  const t = L(), i = PROJ.findIndex(p => p.key === key), d = PROJ[i], p = t.projects[i], nx = (() => { let n = (i + 1) % PROJ.length; while (PROJ[n].locked && n !== i) n = (n + 1) % PROJ.length; return n; })();   // next published project
  const num = "0" + (i + 1), hr = (typeof HERO !== "undefined" && HERO[key]) || null;   // optional hero override (HERO in c1k.js)
  $("#pj").innerHTML = `<a class="back-top" href="#projects"><span aria-hidden="true">←</span> ${esc(t.back)}</a>
    <div class="pj-head"><span class="num-big" aria-hidden="true">${num}</span><h1>${esc(p[0])}</h1><p class="pj-tag">${esc(hr ? tr(hr.tag) : (p[6] || ""))}</p><p class="lead">${esc(hr ? tr(hr.lead) : p[3])}</p></div>
    <div class="pj-cover">${hr ? svgOf(key, "cover", true).replace(/alt="[^"]*"/, `alt="${esc(tr(hr.alt))}"`) : svgOf(key, "cover", true)}</div>
    <dl class="pj-facts"><div><dt>${esc(t.role_l2 || "Role")}</dt><dd>${esc(rl(d))}</dd></div><div><dt>${esc(t.ctx_l2 || "Context")}</dt><dd>${esc(p[2])}</dd></div><div><dt>${esc(t.serv_l2 || "Services")}</dt><dd>${esc(p[5])}</dd></div><div><dt>${esc(t.per_l2 || "Period")}</dt><dd>${esc(yl(d))}</dd></div></dl>
    ${SECTIONS[key] ? SECTIONS[key].map(renderSection).join("") : `<div class="pj-body"><h2>${esc(t.did_h2 || "What I did")}</h2><div><p>${esc(p[4])}</p></div></div>`}
    ${secHasImg(key) ? "" : `<div class="pj-gal">${svgWrap(key,1)}${svgWrap(key,2)}${svgWrap(key,3)}</div>`}
    <aside class="pj-more"><span class="blobs" aria-hidden="true"><i class="b1"></i><i class="b2"></i><i class="b3"></i></span><h2>${esc(t.pj_sim_h)}</h2><p><button class="btn solid" type="button" data-open-form data-ev="case_to_contact_click" data-place="project" data-project="${key}"><span>${esc(t.pj_cta || t.cta_talk)}</span><span class="arr" aria-hidden="true">→</span></button>${d.site && tr(d.site.l) ? ` <a class="btn" href="${esc(d.site.href)}" target="_blank" rel="noopener" data-ev="project_cta_click" data-place="project_site"><span>${esc(tr(d.site.l))}</span><span class="arr" aria-hidden="true">↗</span></a>` : ""}</p><ul>${(PSVC[key] || []).map(k => `<li><a href="#service-${k}">${esc(t.hs_items[SKEYS.indexOf(k)][0])} <span aria-hidden="true">→</span></a></li>`).join("")}</ul></aside>
    <a class="pj-next" href="#project-${PROJ[nx].key}"><span class="k"><span>${esc(t.next)}</span><span aria-hidden="true">→</span></span><b>${esc(t.projects[nx][0])}</b></a>`;
  document.title = ((SEO[lang] || {}).proj || {})[key]?.t || (p[0] + " · Tom Fabre");
}
const svgWrap = (k, v) => `<div class="art">${svgOf(k, v)}</div>`;

/* ---------- bio ---------- */
function renderBio(){
  const t = L(); renderQF(); renderBio2();
  $("#biPs").innerHTML = t.bi_ps.map(x => `<p>${esc(x)}</p>`).join("");
  $("#workedP").innerHTML = t.ca_ps.map(x => `<p>${esc(x)}</p>`).join("");
  $("#toolsP").innerHTML = t.to_ps.map(x => `<p>${esc(x)}</p>`).join("");
  $("#worked").innerHTML = t.worked.map(r => `<li><span class="yr">${esc(r[0])}</span><div><b>${esc(r[1])}</b><span>${esc(r[2])} · ${esc(r[3])}</span></div></li>`).join("");
  const TOOLS = [["Figma","Fi","#F24E1E","#fff"],["Webflow","Wf","#146EF5","#fff"],["HTML / CSS","</>","#E34F26","#fff"],["Storybook","Sb","#FF4785","#fff"],["Maze","Mz","#6C5CE7","#fff"],["Hotjar","Hj","#FD3A5C","#fff"],["Notion","No","#000","#fff"],["Jira","Ji","#0052CC","#fff"]];
  const TG = [["Figma"], ["Webflow", "HTML / CSS", "Storybook"], ["Notion", "Jira"], ["Maze", "Hotjar"]];   // design/prototyping · development · product/collab · experimentation (existing tools only)
  $("#tools").innerHTML = TG.map((g, gi) => `<div class="tg"><h3 class="tg-h">${esc(t.bx_ui.tg[gi])}</h3><ul class="tools-grid">${g.map(n => TOOLS.find(x => x[0] === n)).map(([n, m, c, tt]) => `<li class="tool" tabindex="0" style="--tc:${c};--tt:${tt}"><b>${esc(m)}</b><span>${esc(n)}</span></li>`).join("")}</ul></div>`).join("");
  // portrait: abstract typographic composition from AF monogram
  if (BENTO.photo.img) $("#portrait").innerHTML = `<img src="${BENTO.photo.img}" alt="${esc(L().portrait_alt)}" loading="lazy" decoding="async">`; else $("#portrait").innerHTML = `<svg viewBox="0 0 400 400" aria-hidden="true"><rect width="400" height="400" fill="var(--surface)"/><circle cx="110" cy="140" r="90" fill="var(--coral)" opacity=".85"/><circle cx="260" cy="200" r="110" fill="var(--lav)" opacity=".75"/><circle cx="200" cy="320" r="85" fill="var(--mint)" opacity=".8"/><text x="50%" y="56%" text-anchor="middle" fill="var(--fg)" font-family="var(--font)" font-size="180" font-weight="600" letter-spacing="-10">AF</text></svg>`;
}

/* ---------- game ---------- */
const N = 8, MISSES = 20;
const FLEET = [{len:4,c:"--coral"},{len:3,c:"--lav"},{len:3,c:"--mustard"},{len:2,c:"--mint"}];
let G, msgKey = "m_start", msgArg = "", lastShot = -1, endT = 0;
const coord = i => "ABCDEFGH"[i % N] + (Math.floor(i / N) + 1);
function newGame(){
  const occ = Array(N*N).fill(-1);
  const ships = FLEET.map((f, s) => { for (;;) {
    const h = Math.random() < .5, r = Math.floor(Math.random()*N), c = Math.floor(Math.random()*N);
    if ((h ? c : r) + f.len > N) continue;
    const cells = Array.from({length:f.len}, (_, k) => h ? r*N + c + k : (r + k)*N + c);
    if (cells.some(x => occ[x] !== -1)) continue;
    cells.forEach(x => occ[x] = s); return { len:f.len, cells };
  } });
  G = { occ, ships, shot:Array(N*N).fill(0), left:MISSES, hits:FLEET.map(() => 0), over:false, won:false };
  msgKey = "m_start"; msgArg = ""; lastShot = -1; clearTimeout(endT);
}
function buildBoard(){
  const b = $("#board"); b.textContent = ""; b.appendChild(document.createElement("span"));
  for (let c = 0; c < N; c++) { const s = document.createElement("span"); s.className = "lab"; s.setAttribute("aria-hidden","true"); s.textContent = "ABCDEFGH"[c]; b.appendChild(s); }
  for (let r = 0; r < N; r++) {
    const s = document.createElement("span"); s.className = "lab"; s.setAttribute("aria-hidden","true"); s.textContent = r + 1; b.appendChild(s);
    for (let c = 0; c < N; c++) { const i = r*N + c, btn = document.createElement("button");
      btn.type = "button"; btn.className = "c"; btn.dataset.i = i; btn.tabIndex = i === 0 ? 0 : -1;
      btn.addEventListener("click", () => shoot(i)); b.appendChild(btn); }
  }
  b.addEventListener("keydown", e => {
    const d = {ArrowRight:1, ArrowLeft:-1, ArrowDown:N, ArrowUp:-N}[e.key]; if (!d) return; e.preventDefault();
    const cur = Number(document.activeElement.dataset.i); if (isNaN(cur)) return; const nx = cur + d;
    if (nx < 0 || nx >= N*N || (Math.abs(d) === 1 && Math.floor(nx/N) !== Math.floor(cur/N))) return;
    const cells = $$(".c", b); cells.forEach(x => x.tabIndex = -1); cells[nx].tabIndex = 0; cells[nx].focus();
  });
}
function shoot(i){
  if (G.over || G.shot[i]) return; G.shot[i] = 1; const s = G.occ[i];
  lastShot = i; msgArg = "";
  if (s < 0) { G.left--; msgKey = G.left === 1 ? "m_one" : G.left === 5 ? "m_five" : "m_miss"; }
  else { G.hits[s]++; if (G.hits[s] === G.ships[s].len) { const remaining = G.hits.filter((h, k) => h !== G.ships[k].len).length; msgKey = remaining === 1 ? "m_last" : "m_sunk"; msgArg = L().ships[s][0]; } else msgKey = "m_hit"; }
  if (G.hits.every((h, k) => h === G.ships[k].len)) { G.over = true; G.won = true; msgKey = "m_win"; }
  else if (G.left <= 0) { G.over = true; msgKey = "m_lose"; }
  renderGame();
  if (G.over) { clearTimeout(endT); endT = setTimeout(() => { if (G.over) openGameDialog(G.won); }, 500); }
}
function renderGame(){
  const t = L(), link = {};
  G.ships.forEach((sh, k) => { if (G.hits[k] === sh.len) for (let q = 0; q < sh.len - 1; q++) link[sh.cells[q]] = sh.cells[q+1] - sh.cells[q] === 1 ? "h" : "v"; });
  $$("#board .c").forEach(btn => {
    const i = Number(btn.dataset.i), s = G.occ[i]; let st = "";
    if (link[i]) btn.dataset.l = link[i]; else delete btn.dataset.l;
    if (G.shot[i]) st = s < 0 ? "miss" : "hit"; else if (G.over && !G.won && s >= 0) st = "show";
    if (st) btn.dataset.s = st; else delete btn.dataset.s;
    if (s >= 0) btn.style.setProperty("--col", `var(${FLEET[s].c})`); else btn.style.removeProperty("--col");
    btn.setAttribute("aria-label", coord(i) + ", " + (G.shot[i] ? (s < 0 ? t.cs[1] : t.cs[2]) : t.cs[0]));
    btn.disabled = G.over || !!G.shot[i];
  });
  $("#left").textContent = G.left;
  /* partida terminada: el contador de fallos deja paso al resultado (el estado se sigue anunciando a lectores de pantalla) */
  { const over = G.over, sunk = G.hits.filter((h, k) => h === G.ships[k].len).length;
    $(".meter").hidden = over; $("#end").hidden = !over; $("#status").classList.toggle("sr-only", over);
    if (over) { const w = G.won, k = w ? "win" : "lose";
      $("#endK").textContent = (w ? "✦ " : "✕ ") + sunk + " / " + FLEET.length + " " + t.ships_n + " · " + t[w ? "kick_win" : "kick_lose"];
      $("#endH").textContent = t[k + "_h"]; $("#endP").textContent = t[k + "_p"]; $("#endHl").textContent = t[k + "_hl"]; $("#endPrize").textContent = t[k + "_prize"]; $("#endCtaL").textContent = t[w ? "claim" : "write"]; $("#end").dataset.won = w ? "1" : ""; } }
  { const st = $("#status"); st.textContent = t[msgKey].replace("{n}", msgArg);
    /* lectores de pantalla: coordenada disparada y, si se hunde un barco, qué forma de trabajar descubre (no se ve, ya está en la lista) */
    if (lastShot >= 0) { const pre = document.createElement("span"); pre.className = "sr-only"; pre.textContent = coord(lastShot) + ". "; st.prepend(pre); }
    if (msgArg && (msgKey === "m_sunk" || msgKey === "m_last")) { const post = document.createElement("span"); post.className = "sr-only"; post.textContent = " " + msgArg + "."; st.append(post); } }
  const fl = $("#fleet"); fl.textContent = "";
  FLEET.forEach((f, s) => {
    const sunk = G.hits[s] === G.ships[s].len, reveal = sunk || G.over, li = document.createElement("li");
    li.className = sunk ? "" : (G.over ? "miss" : "locked"); li.style.setProperty("--col", `var(${f.c})`);
    let segs = ""; for (let k = 0; k < f.len; k++) segs += `<i${k < G.hits[s] ? ' class="on"' : ""}></i>`;
    li.innerHTML = `<div class="segs" aria-hidden="true">${segs}</div><h3>${esc(reveal ? t.ships[s][0] : t.locked.replace("{n}", f.len))}</h3>` + (reveal ? `<p>${esc(t.ships[s][1])}</p>` : "");
    fl.appendChild(li);
  });
}

/* ---------- form dialog: un solo componente con variantes de contexto (general · caso de estudio · servicio · bio · chat) ---------- */
const TOPIC_IDS = ["brand","web","product","collab","other","unsure"];   /* mismo orden que T.xx.topics */
const BUDGET_TOPICS = ["brand","web","product","other"];                  /* el presupuesto solo se ofrece en solicitudes de servicio */
const SERVICE_TOPIC = { branding:"brand", web:"web", ux:"product" };
const MAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const dlg = () => $("#dlg"); let draft = "";
let qa = 0, qb = 0, sending = false, formCtx = { source:"direct" }, sentSig = "", sentAt = 0;
const qLabel = (a, b) => `${L().d_q} ${a} + ${b}${lang === "fr" ? " ?" : "?"}`;
function newQ(){ qa = 1 + Math.floor(Math.random() * 9); qb = 1 + Math.floor(Math.random() * 9); $("#fq").value = ""; setQ(); }
function setQ(){ $("#fql").textContent = qLabel(qa, qb); }
/* errores en línea: cada campo tiene su <span id="<id>E"> enlazado con aria-describedby */
function fieldErr(el, msg){ const out = document.getElementById(el.id + "E"); if (msg){ el.setAttribute("aria-invalid", "true"); if (out) out.textContent = msg; } else { el.removeAttribute("aria-invalid"); if (out) out.textContent = ""; } }
function clearErrs(ids){ ids.forEach(id => fieldErr($(id), "")); }
const FORM_FIELDS = ["#fn", "#fe", "#ft", "#fm", "#fq", "#fc"], PRIZE_FIELDS = ["#pzW", "#pzE", "#pzQ", "#pzC"];
const FIELD_KEY = { fn:"name", fe:"email", ft:"topic", fm:"message", fq:"check", fc:"consent", pzW:"website", pzE:"email", pzQ:"check", pzC:"consent" };
function setDlgHead(quick){
  const h = $("#dlgT"), s = $("#dlg .sub"), hk = quick ? "dq_h" : "d_h", sk = quick ? "dq_sub" : "d_sub";
  h.hidden = false; s.hidden = false; dlg().setAttribute("aria-labelledby", "dlgT"); h.dataset.i = hk; h.textContent = L()[hk]; s.dataset.i = sk; s.textContent = L()[sk];
  $("#form").classList.toggle("quick", !!quick);
  const sl = $("#form button[type=submit] [data-i]"), bk = quick ? "dq_send" : "d_send"; sl.dataset.i = bk; sl.textContent = L()[bk];
}
/* presupuesto: visible solo con una categoría de servicio; oculto = deshabilitado y sin valor, así nunca bloquea ni se envía */
function syncBudget(){
  const w = $("#fbWrap"), fb = $("#fb"), show = !$("#form").classList.contains("quick") && BUDGET_TOPICS.includes($("#ft").value);
  w.hidden = !show; fb.disabled = !show; if (!show) fb.selectedIndex = 0;
}
/* contexto de entrada: lo deduce el servidor de la propia página (data-*), nunca un parámetro editable de la URL */
function ctxFrom(el){
  const d = el && el.dataset ? el.dataset : {}, place = d.place || "", service = d.service || "", project = d.project || "";
  let topicId = SERVICE_TOPIC[service] || "";
  if (!topicId && project){ const s = (PSVC[project] || []); if (s.length === 1) topicId = SERVICE_TOPIC[s[0]] || ""; }   /* solo si el caso tiene un único servicio: así es seguro */
  const source = project ? "case_study" : service ? "service_page" : place === "bio_close" ? "about" : (place || "direct");
  return { source, place, service, project, topicId, quick: !!(el && el.hasAttribute && el.hasAttribute("data-quick")) };
}
function openForm(c){
  c = Object.assign({ source:"direct", place:"", service:"", project:"", topicId:"", quick:false }, c || {}); formCtx = c;
  setDlgHead(c.quick); $("#form").hidden = false; $("#dres").hidden = true; $("#dsent").hidden = true; $("#ferr").textContent = ""; $("#fstat").textContent = ""; sending = false; clearErrs(FORM_FIELDS); newQ(); closeSheet(); closeChat();
  if (c.topicId && TOPIC_IDS.includes(c.topicId)) $("#ft").value = c.topicId;   /* se puede cambiar; nunca se pisa lo que el visitante ya eligió al reabrir sin contexto */
  syncBudget();
  track("contact_form_open", { form_type:"contact", variant:c.quick ? "quick" : "full", source:c.source, category:$("#ft").value || undefined });
  if (dlg().showModal) dlg().showModal(); else dlg().setAttribute("open","");
  if (matchMedia("(pointer:coarse)").matches){ dlg().tabIndex = -1; dlg().focus({ preventScroll:true }); }   /* touch: sin teclado virtual ni foco parado en el botón de cierre */
  else { const first = FORM_FIELDS.map(s => $(s)).find(el => el && !el.closest("[hidden]") && !el.value && el.type !== "checkbox") || $("#fn"); first.focus({ preventScroll:true }); }   /* escritorio: el foco entra en el primer campo pendiente, no en la ×, así no se pinta su anillo al abrir */
}
function validateContact(t, quick, agent){
  const bad = [], put = (id, msg) => { fieldErr($(id), msg); if (msg) bad.push(id); };
  const n = $("#fn").value.trim(), m = $("#fe").value.trim(), msg = $("#fm").value.trim();
  put("#fn", n ? "" : t.e_name);
  put("#fe", !m ? t.e_mail_empty : (m.length > 254 || !MAIL_RE.test(m) ? t.e_mail : ""));
  put("#ft", quick || $("#ft").value ? "" : t.e_topic);
  put("#fm", !msg ? t.e_msg : (msg.length < 10 ? t.e_msg_short : ""));
  if (!agent){
    put("#fq", !$("#fq").value.trim() ? t.e_q_empty : (parseInt($("#fq").value, 10) !== qa + qb ? t.d_qerr : ""));
    put("#fc", $("#fc").checked ? "" : t.e_consent);
  } else { fieldErr($("#fq"), ""); fieldErr($("#fc"), ""); }
  return bad;
}
function showSent(){
  const t = L(); $("#form").hidden = true; $("#dlgT").hidden = true; $("#dlg .sub").hidden = true; $("#dsent").hidden = false; dlg().setAttribute("aria-labelledby", "dsentT"); $("#dsentT").focus({ preventScroll:true }); $("#fstat").textContent = t.d_sent;
}
function wireForm(){
  document.addEventListener("click", e => { const b = e.target.closest && e.target.closest("[data-open-form]"); if (!b) return; e.preventDefault(); openForm(ctxFrom(b)); });
  const closeDlg = () => { if (!sending) dlg().close(); };
  $("#dclose").addEventListener("click", closeDlg); $("#dDone").addEventListener("click", closeDlg);
  dlg().addEventListener("click", e => { if (e.target === dlg()) closeDlg(); });
  dlg().addEventListener("cancel", e => { if (sending) e.preventDefault(); });   /* Escape no cierra mientras se envía */
  $("#ft").addEventListener("change", () => { fieldErr($("#ft"), ""); syncBudget(); });
  [["#fn", v => v.trim()], ["#fe", v => MAIL_RE.test(v.trim())], ["#fm", v => v.trim().length >= 10], ["#fq", v => parseInt(v, 10) === qa + qb]].forEach(([id, ok]) => $(id).addEventListener("input", () => { if ($(id).getAttribute("aria-invalid") && ok($(id).value)) fieldErr($(id), ""); }));
  $("#fc").addEventListener("change", () => { if ($("#fc").checked) fieldErr($("#fc"), ""); });
  $("#form").addEventListener("submit", e => {
    e.preventDefault(); if (sending) return;
    const t = L(), quick = $("#form").classList.contains("quick"), agent = !!e.agentInvoked && typeof e.respondWith === "function";
    $("#ferr").textContent = "";
    const bad = validateContact(t, quick, agent);
    if (bad.length){
      track("contact_form_error", { form_type:"contact", source:formCtx.source, error_type:"validation", field:FIELD_KEY[bad[0].slice(1)] });
      if (agent) e.respondWith(Promise.resolve({ content:[{ type:"text", text:"Missing or invalid fields: name, a valid email, a topic and a message of at least 10 characters are required." }], isError:true }));
      $(bad[0]).focus(); return;
    }
    const n = $("#fn").value.trim(), m = $("#fe").value.trim(), msg = $("#fm").value.trim(), topicId = quick ? "quick" : $("#ft").value, topic = quick ? t.dq_topic : $("#ft").selectedOptions[0].textContent, budget = !$("#fb").disabled && $("#fb").value ? $("#fb").selectedOptions[0].textContent : "";
    if (agent) e.respondWith(Promise.resolve({ content:[{ type:"text", text:"Draft prepared. The visitor still has to open it in their email app or copy it; nothing was sent automatically." }] }));
    draft = `${msg}\n\n— ${n} (${m})\n${topic}${budget ? "\n" + budget : ""}`;
    const fallback = () => { $("#mailto").href = `mailto:${EMAIL}?subject=${encodeURIComponent(topic + " · " + n)}&body=${encodeURIComponent(draft)}`; $("#form").hidden = true; $("#dres").hidden = false; $("#dcopied").textContent = ""; };
    if (FORM_ENDPOINT && !agent){
      if ($("#fh").value) return;   /* honeypot */
      const sig = m + "|" + msg;
      if (sig === sentSig && Date.now() - sentAt < 600000){ showSent(); return; }   /* mismo mensaje enviado hace un momento: no se duplica */
      const sb = $("#form button[type=submit]"), lab = sb.querySelector("[data-i]"), old = lab.textContent;
      sending = true; sb.disabled = true; sb.setAttribute("aria-busy", "true"); lab.textContent = t.d_sending; $("#fstat").textContent = t.d_sending;
      const evp = { form_type:"contact", variant:quick ? "quick" : "full", source:formCtx.source, category:topicId };
      track("contact_form_submit", evp);
      const fail = kind => { track("contact_form_error", Object.assign({ error_type:kind }, evp)); $("#ferr").innerHTML = `<strong>${esc(t.d_fail_t)}</strong> ` + esc(t.d_fail_b).replace(EMAIL, `<a href="mailto:${EMAIL}">${EMAIL}</a>`); $("#fstat").textContent = ""; };
      fetch(FORM_ENDPOINT, { method:"POST", headers:{ "Content-Type":"application/json", "Accept":"application/json" }, body:JSON.stringify({
        name:n, email:m, topic, topic_id:topicId, budget: budget || undefined, message:msg, form_type:"contact", source:formCtx.source, project:formCtx.project || undefined, service:formCtx.service || undefined, page:location.pathname, locale:lang,
        _replyto:m, _subject:topic + " · " + n + " (portfolio)" }) })
        .then(r => { if (!r.ok){ fail("http_" + r.status); return; }   /* solo se confirma con la respuesta correcta del servidor; si no, el modal sigue abierto con los datos */
          sentSig = sig; sentAt = Date.now(); showSent(); $("#form").reset(); syncBudget(); newQ(); track("contact_form_success", evp); })
        .catch(() => fail("network"))
        .finally(() => { sending = false; sb.disabled = false; sb.removeAttribute("aria-busy"); lab.textContent = old; });
      return;
    }
    fallback();
  });
  $("#dcopy").addEventListener("click", () => { const say = () => { $("#dcopied").textContent = L().d_done; };
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(draft).then(say, say); else say(); });
}

/* ---------- copy email ---------- */
function wireMailPop(){
  const box = $(".mail"), link = $("#mailLink"), img = $("#mailPop");
  if (!box || !link || !img || !matchMedia("(hover:hover)").matches || reduced) return;
  let x = 0, y = 0, tx = 0, ty = 0, raf = 0;
  const draw = () => { raf = 0; x += (tx - x) * .18; y += (ty - y) * .18; img.style.transform = `translate3d(${x}px,${y}px,0)`; if (Math.abs(tx - x) + Math.abs(ty - y) > .4) raf = requestAnimationFrame(draw); };
  const move = e => { const r = box.getBoundingClientRect(), w = img.offsetWidth; tx = Math.min(Math.max(e.clientX - r.left + 24, 0), Math.max(r.width - w, 0)); ty = link.getBoundingClientRect().top - r.top - w - 40; if (!box.classList.contains("pop")){ x = tx; y = ty; } if (!raf) raf = requestAnimationFrame(draw); };
  link.addEventListener("pointerenter", e => { if (!img.getAttribute("src")) img.src = (PATHS ? "/" : "") + img.dataset.src; move(e); box.classList.add("pop"); });
  link.addEventListener("pointermove", move);
  link.addEventListener("pointerleave", () => box.classList.remove("pop"));
}
function wireCopy(){
  wireMailPop();
  const cf = $("#copyFoot"); if (cf) cf.addEventListener("click", () => { const done = () => { const m = L().copied, o = L().copy; cf.textContent = m; $("#copiedFoot").textContent = m; setTimeout(() => { cf.textContent = L().copy; $("#copiedFoot").textContent = ""; }, 2200); };
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(EMAIL).then(done, done); else done(); });
  $("#copy").addEventListener("click", () => { const say = () => { $("#copied").textContent = L().copied; setTimeout(() => $("#copied").textContent = "", 2500); };
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(EMAIL).then(say, say); else say();
  });
}

/* ---------- router ---------- */
let cur = null, route_ = { page:"home" };
function parse(){
  if (PATHS){ const pl = parseLoc(location.pathname); return pl ? pl.r : { page:"home" }; }
  const h = location.hash.slice(1);
  if (h.startsWith("project-")) { const k = h.slice(8); if (PROJ.some(p => p.key === k)) return PROJ.find(p => p.key === k).locked ? { page:"projects" } : { page:"project", key:k }; }
  if (h.startsWith("service-")) { const k = h.slice(8); if (SKEYS.includes(k)) return { page:"service", key:k }; }
  return ["projects","services","bio","contact"].includes(h) ? { page:h } : { page:"home" };
}
const PJ_AUR = { contazara:["#307fe4","#7bb4f0","#f5d90a"], "360estudio":["#c9b36a","#7ba5ca","#f3c63a"], a2pas:["#e23a3a","#f2b8b0","#c9b6e8"], binome:["#e8604c","#d9c3a5","#b8c4d6"], "carceral-ecologies":["#3d4a5a","#8aa0b8","#c9d3e0"], happylife:["#df9483","#89a5c7","#f2d68a"], yaypegs:["#b9215c","#526c8d","#7ec8f0"] };
function setAur(k){ const pg = document.querySelector('.page[data-page="project"]'), c = PJ_AUR[k]; if (!pg) return; if (c) { pg.style.setProperty("--g1", c[0]); pg.style.setProperty("--g2", c[1]); pg.style.setProperty("--g3", c[2]); } else { ["--g1","--g2","--g3"].forEach(v => pg.style.removeProperty(v)); } }
function show(r){
  route_ = r; const nav = r.page === "project" ? "projects" : r.page === "service" ? "services" : r.page;
  $$(".page").forEach(p => { p.hidden = p.dataset.page !== r.page; });
  $$("[data-r]").forEach(a => { if (a.dataset.r === nav) a.setAttribute("aria-current","page"); else a.removeAttribute("aria-current"); });
  if (r.page === "project") { renderProject(r.key); setAur(r.key); } else if (r.page === "service") renderServicePage(r.key); else if (r.page === "services") renderServicesIndex(); else document.title = "Tom Fabre · Portfolio";
  if (r.page === "project") track("project_view", { project_slug:r.key });
  closeSheet(); if (window.__lenis) window.__lenis.scrollTo(0, { immediate:true, force:true }); else window.scrollTo(0, 0);
}
function route(first){
  const r = parse(), key = r.page + (r.key || ""); if (!first && key === cur) return; cur = key;
  show(r);
}
function goRoute(r, replace){
  if (!PATHS){ location.hash = "#" + (r.page === "project" ? "project-" + r.key : r.page === "service" ? "service-" + r.key : r.page); return; }
  const u = urlFor(r); if (u !== location.pathname) history[replace ? "replaceState" : "pushState"](null, "", u);
  route(false);
}
function goHash(h){ const r = parseHashStr(h); if (r) goRoute(r); }
function setLang(k){
  if (!T[k]) return; lang = k; applyLang(); if (qa) setQ(); if (pzA) pzSetQ();
  if (PATHS){ const u = urlFor(route_); if (u !== location.pathname) history.pushState(null, "", u); }
}
function fixLinks(){
  if (!PATHS) return;
  $$('a[href^="#"], a[data-h]').forEach(a => {
    const h = a.dataset.h || a.getAttribute("href"); const r = parseHashStr(h);
    if (!r) return; a.dataset.h = h; const u = urlFor(r); if (a.getAttribute("href") !== u) a.setAttribute("href", u);
  });
}
if (PATHS){
  addEventListener("popstate", () => { const pl = parseLoc(location.pathname); if (pl && pl.lg !== lang){ lang = pl.lg; applyLang(); } route(false); });
  document.addEventListener("click", e => {
    if (e.defaultPrevented || e.button || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    const a = e.target.closest && e.target.closest("a"); if (!a || a.target || a.hasAttribute("download") || a.hasAttribute("data-open-form")) return;   /* los enlaces que abren el formulario no navegan: los gestiona wireForm */
    const dh = a.dataset.h; let pl = null;
    if (dh) pl = { lg:lang, r:parseHashStr(dh) };
    else if (a.origin === location.origin && !a.getAttribute("href").startsWith("#")) pl = parseLoc(a.pathname);
    if (!pl || !pl.r) return;
    e.preventDefault(); if (pl.lg !== lang){ lang = pl.lg; applyLang(); } goRoute(pl.r);
  });
  let fq = 0; new MutationObserver(() => { if (!fq) fq = requestAnimationFrame(() => { fq = 0; fixLinks(); }); }).observe(document.body, { childList:true, subtree:true });
  if (location.hash && !parseLoc(location.pathname)?.r.key){ const hr = parseHashStr(location.hash); if (hr) history.replaceState(null, "", urlFor(hr)); }
  document.addEventListener("DOMContentLoaded", fixLinks); fixLinks();
} else addEventListener("hashchange", () => route(false));

/* ---------- language apply ---------- */
function renderCnext(){
  const t = L(); $("#cnext").innerHTML = t.cn.map(([h, p]) => `<li><h3>${esc(h)}</h3><p>${esc(p)}</p></li>`).join("");
  if (t.ct_faq && $("#ctFaq")) { $("#ctFaqH").textContent = sentence(t.hf_lab); renderFaq("#ctFaq", t.ct_faq); }
}
function renderMarquee(){
  const t = L(), txt = (t.marquee || "").trim();
  if (!txt) return;
  const unit = txt.split("·").map(s => s.trim()).filter(Boolean);
  const html = unit.map(s => `<span>${esc(s)}</span><i aria-hidden="true"></i>`).join("");
  $("#marq").innerHTML = html + html + html + html;
}

/* ---------- stickers (edit glyphs/colors/text here) ---------- */
const STICKER_ALT = { es:"Teckels corriendo por el campo", en:"Dachshunds running through a field", fr:"Teckels courant dans un champ" }, MAIL_ALT = { es:"Buzón de correo animado", en:"Animated mailbox", fr:"Boîte aux lettres animée" };
const STICKERS = { hero:{ glyph:"✺", key:"st_hero" }, bio:{ pic:["img/sticker/teckels-still.webp", "img/sticker/teckel-hills.webm"] } };
function renderStickers(){
  const mp = $("#mailPop"); if (mp) mp.alt = MAIL_ALT[lang] || MAIL_ALT.es;
  $$("[data-sticker]").forEach(el => { const s = STICKERS[el.dataset.sticker]; if (!s) return;
    if (s.pic) { const ab = PATHS ? "/" : ""; el.classList.add("s-pic"); const alt = esc(STICKER_ALT[lang] || STICKER_ALT.es);
      /* WebM real (VP9) con imagen de reserva: el <img> interior se ve si el navegador no reproduce WebM */
      el.innerHTML = `<video muted loop playsinline preload="none" disablepictureinpicture disableremoteplayback tabindex="-1" aria-hidden="true" width="480" height="270" poster="${ab}${s.pic[0]}"><source src="${ab}${s.pic[1]}" type="video/webm"><img src="${ab}${s.pic[0]}" alt="${alt}" draggable="false" width="400" height="225" decoding="async"></video>`; return; }
    el.innerHTML = `<div><b aria-hidden="true">${s.glyph}</b><span>${esc(L()[s.key] || "")}</span></div>`; });
}
function wireStickers(){
  $$("[data-sticker]").forEach(el => {
    let sx, sy, ox, oy, on = false;
    el.addEventListener("pointerdown", e => { on = true; el.setPointerCapture(e.pointerId); el.classList.add("drag"); const p = el.offsetParent.getBoundingClientRect(), r = el.getBoundingClientRect(); ox = r.left - p.left; oy = r.top - p.top; sx = e.clientX; sy = e.clientY; el.style.right = "auto"; el.style.left = ox + "px"; el.style.top = oy + "px"; });
    el.addEventListener("pointermove", e => { if (!on) return; el.style.left = (ox + e.clientX - sx) + "px"; el.style.top = (oy + e.clientY - sy) + "px"; });
    const end = () => { on = false; el.classList.remove("drag"); };
    const vid = el.querySelector("video");
    if (vid && el.classList.contains("s-pic")) {
      /* imagen fija por defecto; se anima solo al pasar el cursor (hover) o al hacer click/tap (alterna).
         Con prefers-reduced-motion se queda siempre en la imagen fija. Arrastrar no cuenta como click. */
      vid.muted = true;
      if (!reduced) {
        const go = () => { const p = vid.play(); if (p && p.catch) p.catch(() => {}); }, stop = () => vid.pause();
        let moved = false, down = null;
        el.addEventListener("pointerenter", e => { if (e.pointerType === "mouse") go(); });
        el.addEventListener("pointerleave", e => { if (e.pointerType === "mouse" && !on) stop(); });
        el.addEventListener("pointerdown", e => { moved = false; down = [e.clientX, e.clientY]; });
        el.addEventListener("pointermove", e => { if (down && Math.abs(e.clientX - down[0]) + Math.abs(e.clientY - down[1]) > 6) moved = true; });
        el.addEventListener("pointerup", e => { if (!down) return; down = null; if (moved) return; if (e.pointerType === "mouse") go(); else if (vid.paused) go(); else stop(); });
        document.addEventListener("visibilitychange", () => { if (document.hidden) stop(); });
      }
    }
    el.addEventListener("pointerup", end); el.addEventListener("pointercancel", end);
    el.addEventListener("pointerdown", () => { el.dataset.moved = "1"; });
  });
  if (!wireStickers.rz) { wireStickers.rz = 1; let t = 0; addEventListener("resize", () => { clearTimeout(t); t = setTimeout(placeBioSticker, 120); }); if (document.fonts && document.fonts.ready) document.fonts.ready.then(placeBioSticker); }
  placeBioSticker();
}
/* BIO hero: el GIF se coloca bajo la 1.ª línea del título, a la derecha de la 2.ª línea y del párrafo, sin taparlos (salvo que el usuario lo arrastre) */
function placeBioSticker(){
  const el = $("#stickerBio"); if (!el || el.dataset.moved === "1") return;
  const sec = el.offsetParent; if (!sec || !sec.offsetWidth || matchMedia("(max-width:40rem)").matches) return;
  const ext = n => { if (!n) return null; const r = document.createRange(); r.selectNodeContents(n); const b = r.getBoundingClientRect(); return b.width ? b : null; };
  const l1 = ext(sec.querySelector(".hm-a .ln:not(.l2)")), l2 = ext(sec.querySelector(".hm-a .l2")), pp = ext(sec.querySelector(".dh-p"));
  if (!l1 || !l2 || !pp) return;
  const pr = sec.getBoundingClientRect(), rem = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16, gap = 1.25 * rem;
  const w = el.offsetWidth, h = el.offsetHeight, dx = 80;
  let left = Math.max(l2.right, pp.right) + gap + dx - pr.left;
  left = Math.min(left, pr.width - w);
  const top = Math.max(l1.bottom, l2.top) + .4 * rem - pr.top;
  el.style.right = "auto"; el.style.left = Math.round(left) + "px"; el.style.top = Math.round(top) + "px";
}
/* hero letters: magnetic stretch, no colour */
function splitHero(){
  $$(".hero .mega").forEach(h => {
    h.setAttribute("aria-label", [...h.querySelectorAll(".m-inner")].map(x => x.textContent).join(" "));
    h.querySelectorAll(".m-inner").forEach(m => { const txt = m.textContent; m.textContent = ""; m.setAttribute("aria-hidden","true");
      txt.split(" ").forEach((word, wi) => { if (wi) m.appendChild(document.createTextNode(" ")); const w = document.createElement("span"); w.className = "w"; [...word].forEach(ch => { const s = document.createElement("span"); s.className = "lt"; s.textContent = ch; w.appendChild(s); }); m.appendChild(w); }); });
  });
}
function wireHeroFx(){
  $$(".hero .mega").forEach(h => {
    h.addEventListener("pointermove", e => { if (e.pointerType !== "mouse") return;
      h.querySelectorAll(".lt").forEach(l => { const r = l.getBoundingClientRect(), d = Math.hypot(e.clientX - (r.left + r.width / 2), (e.clientY - (r.top + r.height / 2)) * .55), k = Math.exp(-Math.pow(d / 170, 2)); l.style.transform = `scaleY(${1 + .34 * k}) scaleX(${1 - .07 * k})`; }); });
    h.addEventListener("pointerleave", () => h.querySelectorAll(".lt").forEach(l => l.style.transform = ""));
  });
}
/* palette-cycling letters for email links */
function wireCyc(){
  $$(".cyc").forEach(a => { const t = a.textContent; if (!a.hasAttribute("aria-label")) a.setAttribute("aria-label", t); a.textContent = ""; [...t].forEach((ch, i) => { const s = document.createElement("span"); s.className = "ch"; s.style.setProperty("--i", i); s.setAttribute("aria-hidden","true"); s.textContent = ch; a.appendChild(s); }); });
}
function applyWhispers(){
  const t = L();
  const set = (sel, arr, up) => $$(sel).forEach((li, i) => { const x = arr && arr[i]; if (x){ li.dataset.w = x; li.tabIndex = 0; if (up) li.classList.add("wup"); } else { li.removeAttribute("data-w"); } });
  set("#svc > li", t.svc_w, true); set("#worked > li", t.worked_w);
}

/* ---------- dual headlines (home, projects, bio, contact) ---------- */
function syncDH(btn){
  const alt = btn.dataset.alt === "1";
  /* the alternate line is painted by CSS (data-t), so it is not in the DOM text: the real headline stays readable in both states */
  btn.querySelector(".hm-b").setAttribute("aria-hidden", "true");
}
function wireHero(){
  const touch = matchMedia("(hover:none)"), rm = matchMedia("(prefers-reduced-motion:reduce)");
  const btns = $$(".hm-btn");
  const io = new IntersectionObserver(es => es.forEach(e => { e.target._vis = e.isIntersecting; }), { threshold: .4 });
  btns.forEach(btn => {
    btn._vis = false; btn._hold = 0; io.observe(btn); syncDH(btn);
    btn.addEventListener("click", e => {
      if (e.detail === 0 || touch.matches){ btn.dataset.alt = btn.dataset.alt === "1" ? "0" : "1"; syncDH(btn); btn._hold = Date.now() + 9000; }
    });
    btn.addEventListener("blur", () => { if (btn.dataset.alt === "1" && !touch.matches){ btn.dataset.alt = "0"; syncDH(btn); } });
  });
  // touch: gentle auto-alternation while the hero is visible; a tap pauses it for a while
  setInterval(() => {
    if (!touch.matches || rm.matches || document.hidden) return;
    btns.forEach(btn => { if (btn._vis && Date.now() > btn._hold){ btn.dataset.alt = btn.dataset.alt === "1" ? "0" : "1"; syncDH(btn); } });
  }, 4500);
  const sh = $("#scrollHint");
  if (sh) sh.addEventListener("click", () => { const next = document.querySelector('[data-page="home"] .hmin').nextElementSibling; if (next) { if (window.__lenis) window.__lenis.scrollTo(next, { duration:1.6 }); else next.scrollIntoView({ behavior: rm.matches ? "auto" : "smooth", block: "start" }); } });
}

/* ---------- bio: quick facts (one at a time) ---------- */
let qfI = 0, qfHold = 0, qfVis = false;
function renderQF(){
  const t = L(), st = $("#qfStage"); if (!st) return;
  st.innerHTML = t.qf.map(([l, v], i) => `<div class="qf-i${i === qfI ? " on" : ""}" aria-hidden="${i === qfI ? "false" : "true"}"><b>${esc(l)}</b><span class="k">${esc(v)}</span></div>`).join("");
  $("#qfN").textContent = String(qfI + 1).padStart(2, "0") + " / " + String(t.qf.length).padStart(2, "0");
}
function qfGo(d, manual){
  const n = L().qf.length; qfI = (qfI + d + n) % n; if (manual) qfHold = Date.now() + 10000;
  $$("#qfStage .qf-i").forEach((el, i) => { el.classList.toggle("on", i === qfI); el.setAttribute("aria-hidden", String(i !== qfI)); });
  $("#qfN").textContent = String(qfI + 1).padStart(2, "0") + " / " + String(n).padStart(2, "0");
}
function wireQF(){
  const q = $("#qf"); if (!q) return;
  $("#qfPrev").addEventListener("click", () => qfGo(-1, true)); $("#qfNext").addEventListener("click", () => qfGo(1, true));
  new IntersectionObserver(es => es.forEach(e => { qfVis = e.isIntersecting; }), { threshold: .4 }).observe(q);
  let inside = false; q.addEventListener("pointerenter", () => inside = true); q.addEventListener("pointerleave", () => inside = false);
  q.addEventListener("focusin", () => inside = true); q.addEventListener("focusout", () => inside = false);
  const rm = matchMedia("(prefers-reduced-motion:reduce)");
  setInterval(() => { if (qfVis && !inside && !rm.matches && !document.hidden && Date.now() > qfHold) qfGo(1, false); }, 5000);
}

/* ---------- bio: bento (resources: set img / url when real ones exist) ---------- */
const BENTO = {
  photo: { img: (window.__IMG && window.__IMG.profile && window.__IMG.profile[1]) || null },   // portrait at the top of the bio
  gallery: Object.entries((window.__IMG && window.__IMG.gallery) || {}).sort((a, b) => a[0] - b[0]).map(e => e[1]),   // placeholders: replace img/gallery-1..6.webp with real photos
  music: { url: null },                          // TODO link to the choir/miniseries music / playlist link
  read:  { url: null },                          // TODO real reading list / articles link
  binome:{ url: "https://binome.xyz" }
};
function renderBento(){
  const t = L(), el = $("#bento"); if (!el) return;
  const pts = [["CO",8,22],["VE",30,12],["CL",16,74],["FR",74,26],["ES",90,40]];
  const map = `<svg viewBox="0 0 100 70" aria-hidden="true" preserveAspectRatio="xMidYMid meet"><path d="M8 22 Q20 4 30 12 T16 74 M30 12 Q55 -6 74 26 L90 40" fill="none" stroke="var(--fg)" stroke-opacity=".35" stroke-width=".4" stroke-dasharray="1.4 1.4" vector-effect="non-scaling-stroke"/>${pts.map(([c,x,y], i) => `<g><circle cx="${x}" cy="${Math.min(y,64)}" r="${c === "ES" ? 2.6 : 1.4}" fill="${c === "ES" ? "var(--coral)" : "var(--fg)"}"/><text x="${x}" y="${Math.min(y,64) + (c === "ES" ? 7 : 5.5)}" text-anchor="middle" font-size="3.4" fill="var(--muted)" letter-spacing=".2">${c}</text></g>`).join("")}</svg>`;
  const soon = BENTO; const tag = u => u ? "" : `<span class="bt-soon">${esc(t.bi_soon)}</span>`;
  const card = (cls, url, inner) => url ? `<a class="bt ${cls}" href="${esc(url)}" target="_blank" rel="noopener">${inner}</a>` : `<div class="bt ${cls}">${inner}</div>`;
  const head = (k, s, u) => `<div class="bt-h"><b>${esc(k)}</b><span>${esc(s)}</span></div>${tag(u)}`;
  el.innerHTML =
    card("bt-map", null, `${map}<div class="bt-h"><b>${esc(t.bt_map)}</b><span>${esc(t.bt_map_s)}</span><span class="bt-geo">Madrid 40.4168 N · 3.7038 W</span></div>`) +
    card("bt-photo", null, (soon.gallery.length ? `<div class="bt-gal" role="img" aria-label="${esc(t.bt_photo)}">${soon.gallery.map((u, i) => `<img src="${esc(u)}" alt="${esc(t.bt_photo)} ${i + 1}" class="${i ? "" : "on"}" loading="lazy" decoding="async">`).join("")}</div>` : `<div class="bt-ph" aria-hidden="true"><span>TF</span></div>`) + `<div class="bt-h"><b>${esc(t.bt_photo)}</b><span>${soon.gallery.length ? "" : esc(t.bt_photo_s)}</span></div>`) +
    card("bt-music", soon.music.url, head(t.bt_music, t.bt_music_s, soon.music.url)) +
    card("bt-binome", soon.binome.url, `<div class="bt-h"><b>${esc(t.bt_binome)}</b><span>${esc(t.bt_binome_s)}</span></div><span class="bt-arr" aria-hidden="true">↗</span>`) +
    card("bt-read", soon.read.url, head(t.bt_read, t.bt_read_s, soon.read.url)) +
    card("bt-int", null, `<div class="bt-h"><b>${esc(t.bt_int)}</b></div><ul class="bt-chips">${t.bt_int_l.map(x => `<li>${esc(x)}</li>`).join("")}</ul>`) +
    card("bt-soc", null, `<div class="bt-h"><b>${esc(t.bt_soc)}</b></div><ul class="bt-links">${SOCIALS.map(([n,,u]) => `<li><a href="${esc(u)}" target="_blank" rel="noopener">${esc(n)} <span aria-hidden="true">↗</span></a></li>`).join("")}</ul>`);
}

/* gallery: crossfade every 3.2 s; paused while hidden, off-screen, hovered or with reduced motion */
let galVis = false, galHover = false;
(function(){
  const rm = window.matchMedia("(prefers-reduced-motion: reduce)");
  setInterval(() => {
    const g = document.querySelector(".bt-gal"); if (!g) return;
    if (!galVis || galHover || rm.matches || document.hidden) return;
    const im = g.querySelectorAll("img"); if (im.length < 2) return;
    let i = [...im].findIndex(x => x.classList.contains("on")); if (i < 0) i = 0;
    im[i].classList.remove("on"); im[(i + 1) % im.length].classList.add("on");
  }, 3200);
  document.addEventListener("mouseover", e => { galHover = !!(e.target.closest && e.target.closest(".bt-photo")); });
  if ("IntersectionObserver" in window) new IntersectionObserver(es => { es.forEach(x => { galVis = x.isIntersecting; }); }).observe(document.body);
  else galVis = true;
  let galTk = false;
  document.addEventListener("scroll", () => {
    if (galTk) return; galTk = true;
    requestAnimationFrame(() => { galTk = false; const g = document.querySelector(".bt-gal"); if (!g) return; const r = g.getBoundingClientRect(); galVis = r.bottom > 0 && r.top < innerHeight; });
  }, { passive:true });
})();

/* ---------- hidden details ---------- */
const CHCOL = ["var(--coral)","var(--lav)","var(--mustard)","var(--mint)"];
function fitFoot(){
  const h = document.querySelector(".bigfoot-h"); if (!h) return;
  h.style.fontSize = ""; const max = h.clientWidth; if (!max) return;
  let widest = 0; h.querySelectorAll(".bw").forEach(w => { widest = Math.max(widest, w.getBoundingClientRect().width); });
  if (widest > max) h.style.fontSize = (parseFloat(getComputedStyle(h).fontSize) * max / widest * .97) + "px";
}
let footFit = false;
function wireChars(){
  const h = document.querySelector(".bigfoot-h"); if (!h) return;
  const txt = L().foot_mega; h.setAttribute("aria-label", txt); h.textContent = ""; let i = 0;
  txt.split(" ").forEach((word, wi) => {
    if (wi) h.appendChild(document.createTextNode(" "));
    const w = document.createElement("span"); w.className = "bw";
    [...word].forEach(ch => { const s = document.createElement("span"); s.className = "ch"; s.setAttribute("aria-hidden","true"); s.style.setProperty("--c", CHCOL[i++ % 4]); s.textContent = ch; w.appendChild(s); });
    h.appendChild(w);
  });
  const tp = document.querySelector(".orb textPath");
  if (tp && L().orb_txt){
    tp.textContent = ""; let k = 0;
    L().orb_txt.split(" ").forEach((w, j) => {
      if (j) tp.appendChild(document.createTextNode(" "));
      if (w === "·"){ tp.appendChild(document.createTextNode(w)); return; }
      const s = document.createElementNS("http://www.w3.org/2000/svg", "tspan"); s.setAttribute("class", "t" + (1 + (k++ % 5))); s.textContent = w; tp.appendChild(s);
    });
  }
  fitFoot();
  if (!footFit) { footFit = true; addEventListener("resize", fitFoot); if (document.fonts && document.fonts.ready) document.fonts.ready.then(fitFoot); }
}
let toastT;
function toast(msg, href){
  let el = $("#toast");
  if (!el){ el = document.createElement("a"); el.id = "toast"; el.className = "toast"; el.setAttribute("role","status"); document.body.appendChild(el); }
  el.textContent = msg; el.href = href || "#contact"; el.classList.add("on"); clearTimeout(toastT); toastT = setTimeout(() => el.classList.remove("on"), 4200);
}
function wireEggs(){
  // logo x3 in 1.4s
  let n = 0, t0 = 0;
  document.querySelector(".brand").addEventListener("click", () => {
    const now = Date.now(); n = now - t0 < 1400 ? n + 1 : 1; t0 = now;
    if (n >= 3){ n = 0; toast(L().egg_logo, "#contact"); fireConfetti2(); }
  });
  // tab title when leaving
  let saved = "", seen = !document.hidden;   // only after the page has been visible (crawlers/headless start hidden and must keep the real title)
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) seen = true;
    if (document.hidden){ if (!seen || saved) return; saved = document.title; document.title = L().away; } else if (saved){ document.title = saved; saved = ""; }
  });
}
function fireConfetti2(){
  const box = document.createElement("div"); box.className = "win-confetti"; box.style.cssText = "position:fixed;inset:0;height:auto;z-index:95;border-radius:0";
  document.body.appendChild(box);
  for (let i = 0; i < 40; i++){ const n = document.createElement("i"); n.style.left = (Math.random() * 100) + "%"; n.style.setProperty("--xd", ((Math.random() - .5) * 8) + "rem"); n.style.background = CHCOL[i % 4]; n.style.animationDelay = (Math.random() * .4) + "s"; box.appendChild(n); }
  setTimeout(() => box.remove(), 2800);
}

/* ---------- socials ---------- */
const SOCIALS = [
  ["Instagram","IG","https://www.instagram.com/tomfabre/"],
  ["LinkedIn","LN","https://www.linkedin.com/in/tomfabreg/"],
  ["Behance","BE","https://www.behance.net/afabre"],
  ["LottieFiles","LF","https://lottiefiles.com/es/tomfabre"],
  ["GitHub","GH","https://github.com/tomfabre"]
];
function renderSocials(){
  $("#socials").innerHTML = SOCIALS.map(([n,,u]) => `<li><a href="${esc(u)}" target="_blank" rel="noopener">${esc(n)} <span class="arr" aria-hidden="true">↗</span></a></li>`).join("");
  const FOOT = [["LinkedIn","https://www.linkedin.com/in/tomfabreg/"],["Instagram","https://www.instagram.com/tomfabre/"],["Binōme","https://binome.xyz"]];
  $("#socialsFoot").innerHTML = FOOT.map(([n,u]) => `<li><a href="${esc(u)}" target="_blank" rel="noopener">${esc(n)} <span aria-hidden="true">↗</span></a></li>`).join("");
}

/* ---------- hide chat near footer ---------- */
function wireChatHide(){
  const bf = document.querySelector(".bigfoot"); if (!bf) return;
  const io = new IntersectionObserver(es => es.forEach(e => {
    $("#chatbtn").classList.toggle("hide", e.isIntersecting);
    if (e.isIntersecting && !$("#chat").hidden) closeChat();
  }), { threshold: .05 });
  io.observe(bf);
}
function cvFile(lg){ return "cv-alvaro-fabre" + (lg && lg !== "es" ? "-" + lg : "") + ".pdf"; }   // CV por idioma: ES sin sufijo, -en, -fr
function applyLang(){
  const t = L(); root.lang = lang; store.set("af-lang", lang);
  $$("[data-i]").forEach(el => { if (t[el.dataset.i] != null) el.textContent = t[el.dataset.i]; });
  $$('a[href$="cv-alvaro-fabre.pdf"], a[href$="cv-alvaro-fabre-en.pdf"], a[href$="cv-alvaro-fabre-fr.pdf"]').forEach(a => a.setAttribute("href", (PATHS ? "/" : "") + cvFile(lang)));
  $$("[data-aria]").forEach(el => el.setAttribute("aria-label", t[el.dataset.aria]));
  $$("[data-ph]").forEach(el => { el.placeholder = t[el.dataset.ph] || ""; });
  { const lb = $("#langBtn"); if (lb) lb.setAttribute("aria-label", document.documentElement.lang.slice(0,2).toUpperCase() + " – " + t.lang_label); }   // accessible name contains the visible text (WCAG 2.5.3)
  // project meta labels
  t.role_l2 = t.role_l2 || ({es:"Rol",en:"Role",fr:"Rôle"})[lang];
  t.ctx_l2 = ({es:"Contexto",en:"Context",fr:"Contexte"})[lang];
  t.serv_l2 = ({es:"Servicios",en:"Services",fr:"Services"})[lang];
  t.per_l2 = ({es:"Periodo",en:"Period",fr:"Période"})[lang];
  t.did_h2 = ({es:"Qué hice",en:"What I did",fr:"Ce que j'ai fait"})[lang];
  renderHomeServices(); renderSvc("#how", t.hp_steps); renderAboutHome(); renderFaq("#faqHome", t.hf_items, [["bio", t.ha_cta1], ["form", t.h_cta1]]); renderWork(); renderGrid(); renderBio(); renderCnext(); renderGame(); renderMarquee(); renderSocials();
  $$("[data-ti]").forEach(el => el.setAttribute("data-t", t[el.dataset.ti] || ""));
  if (route_.page === "services") renderServicesIndex(); if (route_.page === "service") renderServicePage(route_.key);
  armReveal();
  $$("[data-wi]").forEach(el => { el.dataset.w = t[el.dataset.wi] || ""; if (el.classList.contains("wr") || el.classList.contains("wup")) el.classList.add(el.classList.contains("wr") ? "wr" : "wup"); });
  splitHero(); renderStickers(); placeBioSticker(); applyWhispers(); wireChars();
  // dialog topic select
  { const ft = $("#ft"), fb = $("#fb"), tv = ft.value, bv = fb ? fb.selectedIndex : 0;
    ft.innerHTML = `<option value="" disabled selected>${esc(t.d_topic_ph)}</option>` + t.topics.map((x, i) => `<option value="${TOPIC_IDS[i]}">${esc(x)}</option>`).join(""); if (tv) ft.value = tv;
    if (fb){ fb.innerHTML = `<option value="">${esc(t.d_budget_ph)}</option>` + t.budget.map(x => `<option>${esc(x)}</option>`).join(""); if (bv > 0) fb.selectedIndex = bv; }
    syncBudget(); clearErrs(FORM_FIELDS); clearErrs(PRIZE_FIELDS); }
  // language code
  $("#langCode").textContent = lang.toUpperCase();
  $("#howList").innerHTML = (t.game_rules || []).map(x => `<li>${esc(x)}</li>`).join("");
  if (window.yodisRender) yodisRender();
  if (route_.page === "project") renderProject(route_.key);
}

/* ---------- análisis UX/UI (premio del juego): formulario propio, mismo Formspree, honeypot, suma y aviso de privacidad ---------- */
let pzA = 0, pzB = 0, pzSending = false, pzWon = false, pzSig = "", pzAt = 0;
function pzSetQ(){ $("#pzQl").textContent = qLabel(pzA, pzB); }
/* admite "tuweb.com", "www.tuweb.com" o URL completas y devuelve una URL https/http normalizada, o "" si no es segura ni válida:
   rechaza otros protocolos (javascript:, data:, file:, mailto:…), credenciales, localhost, IPs y hosts internos */
function pzUrl(v){
  v = (v || "").trim(); if (!v || v.length > 2048 || /[\s<>"'`\\]/.test(v)) return "";
  const scheme = v.match(/^([a-z][a-z0-9+.-]*):/i);
  if (scheme && !/^https?$/i.test(scheme[1]) && !/^[a-z0-9.-]+:\d+(\/|$)/i.test(v)) return "";   /* "host:puerto" no es un protocolo, pero "javascript:" sí */
  if (!/^https?:\/\//i.test(v)) v = "https://" + v;
  try {
    const u = new URL(v), h = u.hostname.toLowerCase();
    if (!/^https?:$/.test(u.protocol) || u.username || u.password) return "";
    if (h === "localhost" || /\.(local|localhost|internal|lan|home|corp)$/.test(h) || /^\d+(\.\d+){3}$/.test(h) || h.includes(":") || /^\[/.test(h)) return "";
    if (!/^(?=.{4,253}$)([a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,}$/i.test(h.replace(/\.$/, ""))) return "";
    u.hash = ""; return u.href;
  } catch(e){ return ""; }
}
function openPrize(won){
  if (typeof G === "object" && G && G.over === false) return;   /* el premio solo se abre desde el final de la partida; la regla del juego no cambia */
  pzWon = !!won; pzSending = false; formCtx = { source:"game" };
  const d = $("#prizeDlg"); $("#pzForm").hidden = false; $("#pzHead").hidden = false; $("#pzOk").hidden = true; d.setAttribute("aria-labelledby", "pzT"); $("#pzErr").textContent = ""; $("#pzStat").textContent = ""; clearErrs(PRIZE_FIELDS);
  pzA = 1 + Math.floor(Math.random() * 9); pzB = 1 + Math.floor(Math.random() * 9); $("#pzQ").value = ""; pzSetQ();
  track("ux_review_form_open", { form_type:"ux_review", source:"game", game_result: pzWon ? "won" : "lost" });
  const under = $("#gameDlg").open; d.classList.toggle("stacked", under); $("#gameDlg").classList.toggle("under", under);   /* el resultado queda debajo, oculto, para no ver textos fantasma tras el formulario */
  if (d.showModal) d.showModal(); else d.setAttribute("open", "");   /* encima del diálogo del resultado: al cerrarlo, el foco vuelve al botón que lo abrió */
  if (!matchMedia("(pointer:coarse)").matches) (($("#pzW").value ? ($("#pzE").value ? $("#pzM") : $("#pzE")) : $("#pzW"))).focus({ preventScroll:true });
}
function wirePrize(){
  const d = $("#prizeDlg"), closeP = () => { if (!pzSending) d.close(); };
  $("#pzClose").addEventListener("click", closeP);
  d.addEventListener("close", () => { d.classList.remove("stacked"); $("#gameDlg").classList.remove("under"); });
  d.addEventListener("cancel", e => { if (pzSending) e.preventDefault(); });
  $("#pzDone").addEventListener("click", closeP);
  d.addEventListener("click", e => { if (e.target === d) closeP(); });
  $("#pzW").addEventListener("input", () => { if ($("#pzW").getAttribute("aria-invalid") && pzUrl($("#pzW").value)) fieldErr($("#pzW"), ""); });
  $("#pzE").addEventListener("input", () => { if ($("#pzE").getAttribute("aria-invalid") && MAIL_RE.test($("#pzE").value.trim())) fieldErr($("#pzE"), ""); });
  $("#pzQ").addEventListener("input", () => { if ($("#pzQ").getAttribute("aria-invalid") && parseInt($("#pzQ").value, 10) === pzA + pzB) fieldErr($("#pzQ"), ""); });
  $("#pzC").addEventListener("change", () => { if ($("#pzC").checked) fieldErr($("#pzC"), ""); });
  $("#pzForm").addEventListener("submit", e => {
    e.preventDefault(); if (pzSending) return;
    const t = L(), raw = $("#pzW").value.trim(), web = pzUrl(raw), mail = $("#pzE").value.trim(), more = $("#pzM").value.trim(), err = $("#pzErr"), bad = [];
    err.textContent = "";
    const put = (id, msg) => { fieldErr($(id), msg); if (msg) bad.push(id); };
    put("#pzW", !raw ? t.gf_web_empty : (web ? "" : t.gf_web_err));
    put("#pzE", !mail ? t.e_mail_empty : (mail.length > 254 || !MAIL_RE.test(mail) ? t.e_mail : ""));
    put("#pzQ", !$("#pzQ").value.trim() ? t.e_q_empty : (parseInt($("#pzQ").value, 10) !== pzA + pzB ? t.d_qerr : ""));
    put("#pzC", $("#pzC").checked ? "" : t.e_consent);
    if (bad.length){ track("ux_review_form_error", { form_type:"ux_review", source:"game", error_type:"validation", field:FIELD_KEY[bad[0].slice(1)] }); $(bad[0]).focus(); return; }
    if ($("#pzH").value) return;   /* honeypot */
    const sig = web + "|" + mail;
    if (sig === pzSig && Date.now() - pzAt < 600000){ $("#pzForm").hidden = true; $("#pzHead").hidden = true; $("#pzOk").hidden = false; d.setAttribute("aria-labelledby", "pzOkT"); $("#pzOkT").focus(); return; }   /* misma solicitud ya registrada: no se duplica */
    const sb = $("#pzSend"), lab = sb.querySelector("[data-i]"), old = lab.textContent, result = pzWon ? "ganó la partida" : "perdió la partida", evp = { form_type:"ux_review", source:"game", game_result: pzWon ? "won" : "lost" };
    pzSending = true; sb.disabled = true; sb.setAttribute("aria-busy", "true"); lab.textContent = t.gf_sending; $("#pzStat").textContent = t.gf_sending;
    track("ux_review_form_submit", evp);
    const topic = "Análisis UX/UI gratuito (juego)";
    const fail = kind => { track("ux_review_form_error", Object.assign({ error_type:kind }, evp)); err.innerHTML = `<strong>${esc(t.d_fail_t)}</strong> ` + esc(t.d_fail_b).replace(EMAIL, `<a href="mailto:${EMAIL}">${EMAIL}</a>`); $("#pzStat").textContent = ""; };
    fetch(FORM_ENDPOINT, { method:"POST", headers:{ "Content-Type":"application/json", "Accept":"application/json" }, body:JSON.stringify({
      email:mail, topic, form_type:"ux_review", website:web, game_result:pzWon ? "won" : "lost", locale:lang, _replyto:mail, _subject:topic + " · " + web + " (portfolio)",
      message:`Web: ${web}\nResultado del juego: ${result}\nIdioma: ${lang}` + (more ? `\nQuiere mejorar: ${more}` : "") }) })
      .then(r => { if (!r.ok){ fail("http_" + r.status); return; }
        pzSig = sig; pzAt = Date.now(); $("#pzForm").hidden = true; $("#pzHead").hidden = true; $("#pzOk").hidden = false; d.setAttribute("aria-labelledby", "pzOkT"); $("#pzForm").reset(); $("#pzStat").textContent = t.gf_ok_t + " " + t.gf_ok_b1 + " " + t.gf_ok_b2;
        track("ux_review_form_success", evp); $("#pzOkT").focus(); })
      .catch(() => fail("network"))
      .finally(() => { pzSending = false; sb.disabled = false; sb.removeAttribute("aria-busy"); lab.textContent = old; });
  });
}

/* ---------- html.dlg-open: pausa las animaciones decorativas mientras hay un diálogo abierto ---------- */
(function(){
  const root = document.documentElement, sync = () => root.classList.toggle("dlg-open", !!document.querySelector("dialog[open]"));
  document.querySelectorAll("dialog").forEach(d => { new MutationObserver(sync).observe(d, { attributes:true, attributeFilter:["open"] }); d.addEventListener("close", sync); });
})();

/* ---------- game replay + game dialog ---------- */
function restartGame(){ newGame(); renderGame(); try{ $("#gameDlg").close(); }catch(e){} }
function wireGame(){
  $("#again").addEventListener("click", restartGame);
  $("#gameRetry").addEventListener("click", restartGame);
  $("#gameClose").addEventListener("click", () => $("#gameDlg").close());
  $("#gameDlg").addEventListener("click", e => { if (e.target === $("#gameDlg")) $("#gameDlg").close(); });
  $("#gameDlg").addEventListener("close", () => { $("#confetti").innerHTML = ""; if (G.over && !$("#prizeDlg").open) $("#endCta").focus({ preventScroll:true }); });
  $("#endCta").addEventListener("click", () => openPrize($("#end").dataset.won === "1"));
  const hd = $("#howDlg");
  $("#howBtn").addEventListener("click", () => { if (hd.showModal) hd.showModal(); else hd.setAttribute("open", ""); });
  $("#howClose").addEventListener("click", () => hd.close());
  hd.addEventListener("click", e => { if (e.target === hd) hd.close(); });
  $("#gameWrite").addEventListener("click", () => openPrize($("#gameDlg").dataset.won === "1"));
  wirePrize();
}
function fireConfetti(){
  const box = $("#confetti"); if (!box) return; box.innerHTML = "";
  const cols = ["var(--coral)","var(--lav)","var(--mustard)","var(--mint)"];
  for (let i = 0; i < 30; i++){
    const n = document.createElement("i");
    n.style.left = (3 + Math.random() * 94) + "%";
    n.style.setProperty("--xd", ((Math.random() - .5) * 8) + "rem");
    n.style.background = cols[i % 4];
    n.style.animationDelay = (Math.random() * .5) + "s";
    n.style.transform = `rotate(${Math.random() * 180}deg)`;
    box.appendChild(n);
  }
}
function openGameDialog(won){
  const t = L(), d = $("#gameDlg");
  d.dataset.state = won ? "win" : "lose";
  const sunk = G.hits.filter((h, k) => h === G.ships[k].len).length;
  $("#gameKicker").textContent = (won ? "✦ " : "✕ ") + sunk + " / " + FLEET.length + " " + t.ships_n + " · " + t[won ? "kick_win" : "kick_lose"];
  $("#gameWriteL").textContent = won ? t.claim : t.write;
  $("#gamePrize").textContent = won ? t.win_prize : t.lose_prize;
  d.dataset.won = won ? "1" : "";
  $("#gameH").textContent = won ? t.win_h : t.lose_h;
  $("#gameP").textContent = won ? t.win_p : t.lose_p;
  $("#gameHl").textContent = won ? t.win_hl : t.lose_hl;
  if (won && !reduced) fireConfetti(); else $("#confetti").innerHTML = "";
  if (d.showModal) d.showModal(); else d.setAttribute("open","");
}

/* ---------- reveal + stat counter ---------- */
let revealIO;
function armReveal(){
  if (revealIO) revealIO.disconnect();
  /* con motion.js (Lenis + GSAP) las secciones se animan allí; el hero sigue con el IO original */
  const M = window.__motion;
  if (M) { M.reveal($$(".reveal, .reveal-x")); }
  revealIO = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add("in"); if (e.target.classList.contains("hero")) setTimeout(() => e.target.classList.add("done"), 1500); revealIO.unobserve(e.target); }
  }), { threshold: .15, rootMargin: "0px 0px -8% 0px" });
  $$(M ? ".hero" : ".reveal, .reveal-x, .hero").forEach(el => revealIO.observe(el));
}
function animateStats(){
  $$("[data-stat]").forEach(el => {
    const txt = el.dataset.stat, m = txt.match(/(\d+\.?\d*)/);
    if (!m) return;
    const target = parseFloat(m[1]), prefix = txt.slice(0, m.index), suffix = txt.slice(m.index + m[1].length);
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (!e.isIntersecting) return; io.disconnect();
      const dur = 1200, t0 = performance.now();
      function step(t){
        const k = Math.min(1, (t - t0) / dur), e2 = 1 - Math.pow(1 - k, 3);
        const v = Math.round(target * e2 * 10) / 10;
        el.textContent = prefix + (target >= 10 ? Math.round(target * e2) : v) + suffix;
        if (k < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }), { threshold: .3 });
    io.observe(el);
  });
}

/* ---------- init ---------- */
buildBoard(); newGame(); wireGame();
applyTheme(); wireTheme(); wireLang(); wireMenu(); wireForm(); wireCopy(); 
(function(){const h=document.querySelector("header.top");if(h){const set=()=>document.documentElement.style.setProperty("--hh",h.offsetHeight+"px");set();new ResizeObserver(set).observe(h);}})();
applyLang(); route(true); wireChatHide(); wireEggs(); wireCyc(); wireHeroFx(); wireStickers(); wireHero(); wireQF(); wireBio2();

/* animated contact cards: a soft blob follows the pointer with easing (desktop mouse only) */
(function(){
  const st = new WeakMap(); let raf = 0;
  const tick = () => { raf = 0; let more = false;
    document.querySelectorAll(".cta-band, .sv-cta, .sv-team").forEach(card => { const s = st.get(card); if (!s) return; const bm = card.querySelector(".bm"); if (!bm) return;
      s.x += (s.tx - s.x) * .12; s.y += (s.ty - s.y) * .12;
      bm.style.transform = `translate3d(${s.x}px,${s.y}px,0) translate(-50%,-50%)`; card.style.setProperty("--mx", s.x + "px"); card.style.setProperty("--my", s.y + "px"); card.style.setProperty("--dx", (s.x - .72 * s.w) + "px"); card.style.setProperty("--dy", (s.y - .35 * s.h) + "px");
      if (Math.abs(s.tx - s.x) + Math.abs(s.ty - s.y) > .4) more = true; });
    if (more) raf = requestAnimationFrame(tick); };
  document.addEventListener("pointermove", e => {
    if (e.pointerType !== "mouse" || reduced) return;
    const card = e.target.closest && e.target.closest(".cta-band, .sv-cta, .sv-team"); if (!card) return;
    const r = card.getBoundingClientRect(), x = e.clientX - r.left, y = e.clientY - r.top; let s = st.get(card);
    if (!s){ s = { x, y, tx:x, ty:y, w:r.width, h:r.height }; st.set(card, s); } s.tx = x; s.ty = y; s.w = r.width; s.h = r.height; card.classList.add("hot"); if (!raf) raf = requestAnimationFrame(tick);
  }, { passive:true });
  document.addEventListener("pointerout", e => { const card = e.target.closest && e.target.closest(".cta-band, .sv-cta, .sv-team"); if (card && !card.contains(e.relatedTarget)) card.classList.remove("hot"); });
})();

/* rendimiento: pausa las animaciones continuas mientras se hace scroll y las de tarjetas CTA que no están a la vista */
(function(){
  const root = document.documentElement; let t = 0;
  addEventListener("scroll", () => { if (!root.classList.contains("is-scrolling")) root.classList.add("is-scrolling"); clearTimeout(t); t = setTimeout(() => root.classList.remove("is-scrolling"), 160); }, { passive:true });
  if (!("IntersectionObserver" in window)) return;
  const io = new IntersectionObserver(es => es.forEach(e => e.target.classList.toggle("cta-off", !e.isIntersecting)), { rootMargin:"120px 0px" });
  const watch = () => document.querySelectorAll(".cta-band, .sv-cta, .sv-team, .pj-more").forEach(el => { if (!el.__ctaWatched) { el.__ctaWatched = 1; io.observe(el); } });
  watch(); new MutationObserver(watch).observe(document.body, { childList:true, subtree:true });
})();

/* Versión B · hero: parallax suave de la aurora y botones con atracción mínima (solo ratón, sin reduced-motion) */
(() => {
  const hero = document.querySelector(".hmin"); if (!hero) return;
  if (!matchMedia("(hover:hover) and (pointer:fine)").matches || matchMedia("(prefers-reduced-motion:reduce)").matches) return;
  const aur = hero.querySelector(".aur"), btns = [...hero.querySelectorAll(".h-cta .btn")];
  const clamp = (v, m) => Math.max(-m, Math.min(m, v));
  let raf = 0, mx = 0, my = 0, tx = 0, ty = 0;
  const mag = new Map(); btns.forEach(b => mag.set(b, { x:0, y:0, tx:0, ty:0 }));
  const loop = () => {
    raf = 0; let busy = false;
    mx += (tx - mx) * .06; my += (ty - my) * .06;
    if (aur) { aur.style.setProperty("--px", mx.toFixed(1)); aur.style.setProperty("--py", my.toFixed(1)); }
    if (Math.abs(tx - mx) > .2 || Math.abs(ty - my) > .2) busy = true;
    mag.forEach((s, b) => { s.x += (s.tx - s.x) * .14; s.y += (s.ty - s.y) * .14; b.style.translate = s.x.toFixed(2) + "px " + s.y.toFixed(2) + "px";
      if (Math.abs(s.tx - s.x) > .05 || Math.abs(s.ty - s.y) > .05) busy = true; });
    if (busy) raf = requestAnimationFrame(loop);
  };
  const kick = () => { if (!raf) raf = requestAnimationFrame(loop); };
  hero.addEventListener("pointermove", e => {
    const r = hero.getBoundingClientRect();
    tx = ((e.clientX - r.left) / r.width - .5) * 40; ty = ((e.clientY - r.top) / r.height - .5) * 40;
    mag.forEach((s, b) => { const br = b.getBoundingClientRect();
      /* posición de reposo (sin el desplazamiento actual): evita parpadeos en los bordes y realimentación */
      const l = br.left - s.x, t = br.top - s.y, r = l + br.width, bt = t + br.height;
      const inside = e.clientX >= l && e.clientX <= r && e.clientY >= t && e.clientY <= bt;
      if (inside) { s.tx = clamp((e.clientX - (l + br.width / 2)) * .107, 6); s.ty = clamp((e.clientY - (t + br.height / 2)) * .85, 14); }
      else { s.tx = 0; s.ty = 0; } });
    kick();
  }, { passive:true });
  hero.addEventListener("pointerleave", () => { tx = ty = 0; mag.forEach(s => { s.tx = 0; s.ty = 0; }); kick(); });
})();

/* reading progress bar on case-study pages
   (no lee scrollHeight en cada scroll —forzaba un layout síncrono por fotograma—: la altura se cachea con ResizeObserver) */
(function(){
  if (matchMedia("(prefers-reduced-motion:reduce)").matches) return;
  const bar = document.createElement("div"); bar.id = "pjProg"; bar.setAttribute("aria-hidden","true"); document.body.appendChild(bar);
  let tk = false, H = 0, op = "0", sx = -1;
  const meas = () => { H = document.documentElement.scrollHeight - innerHeight; };
  if ("ResizeObserver" in window) new ResizeObserver(meas).observe(document.body); else addEventListener("resize", meas);
  const upd = () => {
    tk = false;
    if (!document.querySelector(".pj-head")) { if (op !== "0") { op = "0"; bar.style.opacity = "0"; } return; }
    if (!H) meas();
    const y = scrollY, o = y > 80 ? "1" : "0", s = H > 0 ? Math.min(1, y / H) : 0;
    if (o !== op) { op = o; bar.style.opacity = o; }
    if (Math.abs(s - sx) > .0005) { sx = s; bar.style.transform = "scaleX(" + s + ")"; }
  };
  addEventListener("scroll", () => { if (!tk) { tk = true; requestAnimationFrame(upd); } }, { passive: true });
  addEventListener("hashchange", () => { meas(); setTimeout(upd, 60); });
})();

/* count-up for numeric stats (visual only; real text is restored at the end and kept for AT) */
(function(){
  if (matchMedia("(prefers-reduced-motion:reduce)").matches || !("IntersectionObserver" in window)) return;
  const done = new WeakSet();
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return; io.unobserve(e.target);
    const el = e.target, m = /^(\D*)(\d{1,6})(\D*)$/.exec(el.textContent.trim());
    if (!m) return;
    const end = +m[2], t0 = performance.now(), dur = 1400;
    el.setAttribute("aria-label", el.textContent.trim());
    const tick = now => {
      const k = Math.min(1, (now - t0) / dur), v = Math.round(end * (1 - Math.pow(1 - k, 4)));
      el.textContent = m[1] + v + m[3];
      if (k < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }), { threshold: .6 });
  const scan = () => document.querySelectorAll(".stat b").forEach(b => { if (!done.has(b)) { done.add(b); io.observe(b); } });
  scan(); addEventListener("hashchange", () => setTimeout(scan, 120)); addEventListener("popstate", () => setTimeout(scan, 120));
  new MutationObserver(() => scan()).observe(document.body, { childList: true, subtree: true });
})();
