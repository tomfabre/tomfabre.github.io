/* ============================================================
   LOTE 2 · Bio v2 components
   bento (cities, Spotify, cooking, street: auto-galleries; anecdotes: auto-rotating) · accessible lightbox ·
   "pequeñas obsesiones" carousel · memory game (6 pairs)
   Depends on helpers from c2.js ($, $$, esc, L, PATHS, reduced, route_).
   ------------------------------------------------------------
   PENDING ASSETS: fill the `img` fields below with real paths (relative to the
   site root, e.g. "img/bio/city-cucuta.webp"). While `img` is null the
   component renders an identified placeholder (data-pending="...").
   No stock photos. Restaurants: add only validated {name, url}.
   ============================================================ */
const BIO_ASSETS = {
  cities: [["cucuta", "cúcuta_co", "Cúcuta, Colombia"], ["san-cristobal", "san cristóbal_ve", "San Cristóbal, Venezuela"], ["merida", "mérida_ve", "Mérida, Venezuela"], ["santiago", "santiago_cl", "Santiago, Chile"], ["aix-en-provence", "aix-en-provence_fr", "Aix-en-Provence, France"], ["madrid", "madrid_es", "Madrid, España"]].map(([k, tag, name]) => ({ k, tag, name, img: "img/bio/city-" + k + ".webp" })),   // 3:2, 6 photos; tag = lo único que se ve sobre la foto
  street: [   // 1:1, 8 photos (alt per language: descriptive of what is visible)
    ["Retrato a bolígrafo sobre una página de atlas anatómico antiguo", "Pen portrait drawn over a page of an old anatomy atlas", "Portrait au stylo sur une page d'un ancien atlas d'anatomie"],
    ["Pared cilíndrica de radios y casetes antiguos", "Cylindrical wall of old radios and cassette players", "Mur cylindrique de vieilles radios et de lecteurs de cassettes"],
    ["Retrato de un caniche color albaricoque", "Portrait of an apricot-coloured poodle", "Portrait d'un caniche couleur abricot"],
    ["Formas escultóricas claras bajo bóvedas industriales oscuras", "Pale sculptural forms under dark industrial vaults", "Formes sculpturales claires sous de sombres voûtes industrielles"],
    ["Escultura negra de una figura con cabeza de perro", "Black sculpture of a figure with a dog's head", "Sculpture noire d'une figure à tête de chien"],
    ["Escultura de una araña gigante vista desde abajo contra el cielo", "Giant spider sculpture seen from below against the sky", "Sculpture d'une araignée géante vue d'en dessous, sur fond de ciel"],
    ["Busto de mármol con dos rostros de perfil", "Marble bust with two faces in profile", "Buste en marbre à deux visages de profil"],
    ["Larga mesa puesta bajo lámparas de araña en un salón dorado", "Long set table under chandeliers in a gilded hall", "Longue table dressée sous des lustres dans un salon doré"]
  ].map((a, i) => ({ img: "img/bio/look-" + (i + 1) + ".webp", alt: { es: a[0], en: a[1], fr: a[2] }, note: "" })),
  kitchen: Array.from({ length: 4 }, () => ({ img: null, alt: "" })),                                                             // 1:1, 4 photos
  places: [],                                                                                                                       // [{ name, url }] validated restaurants / places only
  spotify: { url: "https://open.spotify.com/playlist/3dyfLnAOgNAX2CSeAhr5bH", embed: "https://open.spotify.com/embed/playlist/3dyfLnAOgNAX2CSeAhr5bH?utm_source=generator&theme=0&si=90d9f237d1c04693" },                                                                                                          // https://open.spotify.com/playlist/<id>
  obsessions: Array.from({ length: 5 }, () => ({ img: null, alt: "" })),                                                           // 4:3, 5 personal photos
  choir: { img: null, alt: "" }                                                                                                    // optional, authorised frame or personal photo
};
const bxUrl = p => (PATHS ? "/" : "") + String(p).replace(/^\//, "");
/* image or identified placeholder */
function bxMedia(item, label, alt, kind){
  const u = L().bx_ui;
  if (item && item.img) return `<img src="${esc(bxUrl(item.img))}" alt="${esc(alt || label)}" loading="lazy" decoding="async">`;
  return `<span class="bx-ph" data-pending="${esc(kind)}" role="img" aria-label="${esc(u.ph + ": " + label)}"><span>${esc(u.ph)}</span><b>${esc(label)}</b></span>`;
}
/* ---------- galleries (cities 3:2, street 1:1) ---------- */
function bxGallery(kind){
  const t = L(), u = t.bx_ui;
  if (kind === "city") return BIO_ASSETS.cities.map(c => ({ img: c.img, label: c.name, alt: c.name, cap: c.tag, ratio: "3-2", kind: "city-" + c.k }));
  if (kind === "kitchen") return BIO_ASSETS.kitchen.map((k, i) => ({ img: k.img, label: t.bx_ck.home[0] + " " + (i + 1), alt: k.alt || t.bx_ck.home[0], cap: t.bx_ck.home[0], ratio: "1-1", kind: "kitchen-" + (i + 1) }));
  return BIO_ASSETS.street.map((s, i) => ({ img: s.img, label: String(i + 1).padStart(2, "0"), alt: (s.alt && typeof s.alt === "object" ? s.alt[lang] : s.alt) || (t.bx_st.h + " " + (i + 1)), cap: s.note || t.bx_st.cap || "", ratio: "1-1", kind: "street-" + (i + 1) }));
}
let LBX = { list: [], i: 0, opener: null };
function lbShow(){
  const it = LBX.list[LBX.i], u = L().bx_ui; if (!it) return;
  $("#lbMedia").className = "lb-media r" + it.ratio;
  $("#lbMedia").innerHTML = it.img ? `<img src="${esc(bxUrl(it.img))}" alt="${esc(it.alt)}">` : `<span class="bx-ph" data-pending="${esc(it.kind)}" role="img" aria-label="${esc(u.ph + ": " + it.label)}"><span>${esc(u.ph)}</span><b>${esc(it.label)}</b></span>`;
  $("#lbCap").textContent = it.cap;
  $("#lbN").textContent = u.lb_count.replace("{n}", LBX.i + 1).replace("{t}", LBX.list.length);
}
function lbOpen(kind, i, opener){
  LBX = { list: bxGallery(kind), i, opener }; lbShow();
  const d = $("#lbDlg"); if (d.showModal) d.showModal(); else d.setAttribute("open", "");
}
function lbStep(d){ const n = LBX.list.length; if (!n) return; LBX.i = (LBX.i + d + n) % n; lbShow(); }
/* ---------- spotify (privacy: iframe only after explicit click, never autoplay) ---------- */
function spEmbed(url){ try { const u = new URL(url); if (u.hostname !== "open.spotify.com") return null; return u.pathname.startsWith("/embed/") ? u.href : "https://open.spotify.com/embed" + u.pathname; } catch (e) { return null; } }
/* ---------- bento ---------- */
function renderBento2(){
  const t = L(), u = t.bx_ui, el = $("#bxBento"); if (!el) return;
  const c = t.bx_city, sp = t.bx_sp, ck = t.bx_ck, st = t.bx_st, ch = t.bx_ch, A = BIO_ASSETS;
  const cities = `<article class="bx bx-city"><div class="bx-hd"><h3>${esc(c.h)}</h3><p>${esc(c.p)}</p></div>${bxViewer("city", 4300)}</article>`;
  const embed = A.spotify.url ? spEmbed(A.spotify.embed || A.spotify.url) : null;
  const spot = `<article class="bx bx-sp"><div class="bx-hd"><h3>${esc(sp.h)}</h3>${sp.p ? `<p>${esc(sp.p)}</p>` : ""}</div>${embed
    ? `<div class="bx-sp-box" id="spBox"><div class="bx-sp-pane"><span class="bx-sp-ico" aria-hidden="true">♪</span><p class="bx-pl">${esc(sp.name)}</p><button type="button" class="btn sm solid" data-sp-load="${esc(embed)}">${esc(u.sp_load)}</button><p class="bx-note">${esc(u.sp_note)}</p></div></div>`
    : `<span class="bx-ph bx-ph-sp" data-pending="spotify-url" role="img" aria-label="${esc(u.ph + ": Spotify")}"><span>${esc(u.ph)}</span><b>${esc(u.sp_pending)}</b></span>`}</article>`;
  const places = A.places.length
    ? `<ul class="bx-places">${A.places.map(p => `<li><a href="${esc(p.url)}" target="_blank" rel="noopener">${esc(p.name)} <span aria-hidden="true">↗</span></a></li>`).join("")}</ul>`
    : `<p class="bx-places-ph" data-pending="restaurants">${esc(u.places_pending)}</p>`;
  const cook = `<article class="bx bx-ck"><div class="bx-hd"><h3>${esc(ck.h)}</h3><p>${esc(ck.p)}</p></div>${places}${bxViewer("kitchen", 5700)}</article>`;
  const choir = bxAnecdotes();
  const street = `<article class="bx bx-st"><div class="bx-hd"><h3>${esc(st.h)}</h3>${st.sub ? `<p class="bx-sub">${esc(st.sub)}</p>` : ""}${st.p ? `<p>${esc(st.p)}</p>` : ""}</div>${bxViewer("street", 3600)}</article>`;
  el.innerHTML = cities + choir + cook + street + spot;
  bxStart();
}

/* ---------- bento: automatic one-frame galleries + rotating anecdotes ---------- */
let bxViews = [], bxIdx = {}, bxTick = 0;
function bxViewer(kind, period){
  const list = bxGallery(kind), t = L(), u = t.bx_ui, n = list.length, i0 = Math.min(bxIdx[kind] || 0, n - 1), ratio = list[0].ratio;
  const group = kind === "city" ? t.bx_city.h : kind === "kitchen" ? t.bx_ck.h : t.bx_st.h;
  const slides = list.map((it, i) => `<span class="bx-sl${i === i0 ? " on" : ""}" data-sl="${i}" aria-hidden="true">${it.img ? `<img src="${esc(bxUrl(it.img))}" alt="" loading="lazy" decoding="async">` : `<span class="bx-ph" data-pending="${esc(it.kind)}"><span>${esc(u.ph)}</span><b>${esc(it.label)}</b></span>`}</span>`).join("");
  return `<div class="bx-view bx-r${ratio}" data-view="${kind}" data-n="${n}" data-period="${period}" role="group" aria-roledescription="carousel" aria-label="${esc(group + " · " + u.v_auto)}">
    <button type="button" class="bx-frame" data-gal="${kind}" data-i="${i0}" aria-haspopup="dialog" aria-label="${esc(u.v_open + ": " + list[i0].alt)}"><span class="bx-slides">${slides}</span></button>
    ${kind === "city" ? `<div class="bx-vc bx-tag"><span class="bx-vcap" aria-hidden="true">${esc(list[i0].cap)}</span></div>` : ""}</div>`;
}
function bxAnecdotes(){
  const t = L(), u = t.bx_ui, ch = t.bx_ch, items = ch.items && ch.items.length ? ch.items : [ch.q], n = items.length, i0 = Math.min(bxIdx.an || 0, n - 1);
  const by = ch.by || [], slides = items.map((q, i) => `<blockquote class="bx-sl bx-qs${i === i0 ? " on" : ""}" data-sl="${i}" aria-hidden="${i === i0 ? "false" : "true"}"><p>${esc(q)}</p>${by[i] ? `<footer><cite>${esc(by[i])}</cite></footer>` : ""}</blockquote>`).join("");
  const ctl = "";
  return `<figure class="bx bx-ch"><h3>${esc(ch.h)}</h3><div class="bx-view bx-an" data-view="an" data-n="${n}" data-period="7300"${n > 1 ? ` role="group" aria-roledescription="carousel" aria-label="${esc(ch.h + " · " + u.v_auto)}"` : ""}><div class="bx-slides bx-qslides">${slides}</div>${ctl}<p class="sr-only" data-vlive aria-live="off"></p></div></figure>`;
}
function bxShow(v, i, manual){
  const kind = v.el.dataset.view, n = v.n; i = (i + n) % n; v.i = i; bxIdx[kind] = i;
  v.el.querySelectorAll(".bx-sl").forEach((s, k) => { s.classList.toggle("on", k === i); if (s.matches(".bx-qs")) s.setAttribute("aria-hidden", String(k !== i)); });
  const vn = v.el.querySelector(".bx-vn"); if (vn) vn.textContent = String(i + 1).padStart(2, "0") + " / " + String(n).padStart(2, "0");
  if (kind !== "an") {
    const it = bxGallery(kind)[i], fr = v.el.querySelector(".bx-frame"), cap = v.el.querySelector(".bx-vcap");
    fr.dataset.i = i; fr.setAttribute("aria-label", L().bx_ui.v_open + ": " + it.alt); if (cap) cap.textContent = it.cap;
  }
  const live = v.el.querySelector("[data-vlive]"); if (live) { live.setAttribute("aria-live", manual ? "polite" : "off"); live.textContent = manual ? (kind === "an" ? v.el.querySelectorAll(".bx-qs")[i].textContent : bxGallery(kind)[i].alt) : ""; }
  v.next = Date.now() + v.period;
}
function bxStart(){
  bxViews.forEach(v => v.io && v.io.disconnect());
    bxViews = [...document.querySelectorAll("#bxBento .bx-view")].map(el => {
    const v = { el, n: +el.dataset.n, period: +el.dataset.period, i: bxIdx[el.dataset.view] || 0, paused: false, hover: false, focus: false, vis: false, next: Date.now() + (+el.dataset.period) };
    /* las galerías siguen solas también con el ratón encima y con «reducir movimiento» (en ese caso el cambio es sin fundido); solo se detienen con el foco del teclado, con un diálogo abierto o fuera de vista */
    el.addEventListener("focusin", () => { v.focus = true; }); el.addEventListener("focusout", () => { v.focus = false; v.next = Date.now() + v.period; });
    el.addEventListener("click", e => {
      const g = e.target.closest("[data-vgo]"), p = e.target.closest("[data-vpp]");
      if (g) bxShow(v, v.i + (+g.dataset.vgo), true);
      if (p) { v.paused = !v.paused; const u = L().bx_ui; p.setAttribute("aria-pressed", String(v.paused)); p.setAttribute("aria-label", v.paused ? u.v_play : u.v_pause); p.firstElementChild.textContent = v.paused ? "▶" : "❚❚"; v.next = Date.now() + v.period; }
    });
    v.io = new IntersectionObserver(es => es.forEach(e => { v.vis = e.isIntersecting; if (e.isIntersecting) v.next = Math.max(v.next, Date.now() + 1200); }), { threshold: .35 }); v.io.observe(el);
    return v;
  });
  if (!bxTick) bxTick = setInterval(() => {
    if (document.hidden || (typeof route_ !== "undefined" && route_.page !== "bio") || document.querySelector("dialog[open]")) return;
    const now = Date.now();
    bxViews.forEach(v => { if (v.n > 1 && !v.paused && !v.hover && !v.focus && v.vis && now >= v.next) bxShow(v, v.i + 1, false); });
  }, 500);
}
/* ---------- obsessions carousel (1 image + 1 text, no autoplay) ---------- */
let obI = 0;
function obTx(i){
  const t = L(), [h, p, kick, by, url] = t.ob_items[i];
  const link = url ? `<a class="ob-lk" href="${esc(url)}" target="_blank" rel="noopener noreferrer">${esc(t.ob_go)} <span aria-hidden="true">↗</span><span class="sr-only"> ${esc(h)} (${esc(t.ob_tab)})</span></a>` : "";
  return `${kick ? `<p class="ob-k">${esc(kick)}</p>` : ""}<h3>${esc(h)}</h3>${by ? `<p class="ob-by">${esc(by)}</p>` : ""}<p>${esc(p)}</p>${link}`;
}
/* altura fija del bloque de texto = la del slide más largo, para que al navegar no se mueva nada */
function obMeasure(){
  const el = $("#ob"), tx = el && el.querySelector(".ob-tx"); if (!tx) return;
  const probe = document.createElement("div"); probe.className = "ob-tx"; probe.style.cssText = "position:absolute;visibility:hidden;pointer-events:none;min-height:0;width:" + tx.getBoundingClientRect().width + "px";
  el.appendChild(probe); let m = 0;
  L().ob_items.forEach((_, i) => { probe.innerHTML = obTx(i); m = Math.max(m, probe.getBoundingClientRect().height); });
  probe.remove(); el.style.setProperty("--obh", Math.ceil(m) + "px");
}
function obPaint(announce){
  const t = L(), it = t.ob_items, n = it.length, sl = $("#obSlide"); if (!sl) return;
  const h = it[obI][0], a = BIO_ASSETS.obsessions[obI] || {}, num = String(obI + 1).padStart(2, "0"), tot = String(n).padStart(2, "0");
  sl.innerHTML = `<div class="ob-img bx-r43">${bxMedia(a, h, a.alt || h, "obsession-" + (obI + 1))}</div><div class="ob-tx">${obTx(obI)}</div>`;
  $("#obN").textContent = num + " / " + tot;
  sl.setAttribute("aria-live", announce ? "polite" : "off");
  if (!announce) obMeasure();
}
let obRz = 0; addEventListener("resize", () => { clearTimeout(obRz); obRz = setTimeout(obMeasure, 150); });
function renderOb(){
  const t = L(), u = t.bx_ui, el = $("#ob"); if (!el) return;
  obI = Math.min(obI, t.ob_items.length - 1);
  el.innerHTML = `<div class="ob-slide" id="obSlide" role="group" aria-roledescription="slide"></div><div class="ob-ctl"><button type="button" id="obPrev" aria-label="${esc(u.ob_prev)}"><span aria-hidden="true">←</span></button><span class="ob-n" id="obN" aria-hidden="true"></span><button type="button" id="obNext" aria-label="${esc(u.ob_next)}"><span aria-hidden="true">→</span></button></div>`;
  obPaint(false);
}
function obGo(d){ const n = L().ob_items.length; obI = (obI + d + n) % n; obPaint(true); }
/* ---------- memory game: 6 pairs, 12 cards ---------- */
const MMC = ["--coral", "--lav", "--mustard", "--mint", "--coral", "--lav"];
let MM = null, mmTimer = 0;
function mmShuffle(a){ for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }   /* Fisher-Yates */
function mmNew(){ clearTimeout(mmTimer); MM = { deck: mmShuffle([0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5]), open: [], done: [], found: [], tries: 0, lock: false }; }
function mmStop(){ clearTimeout(mmTimer); if (MM) { MM.open = []; MM.lock = false; } if ($("#mmBoard")) mmPaint(""); }
function mmBuild(){
  const t = L(), u = t.bx_ui, el = $("#mm"); if (!el) return; if (!MM) mmNew();
  const P = t.mm_pairs;
  el.innerHTML = `<div class="mm-board" id="mmBoard" role="group" aria-label="${esc(u.mm_board)}">${MM.deck.map((p, i) => `<button type="button" class="mm-c" data-i="${i}" style="--mc:var(${MMC[p]})"><span class="mm-in"><span class="mm-b" aria-hidden="true">TF</span><span class="mm-f" aria-hidden="true"><i>${String(p + 1).padStart(2, "0")}</i><b>${esc(P[p][0])}</b></span></span></button>`).join("")}</div>
  <div class="mm-side"><dl class="mm-stats"><div><dt>${esc(u.mm_tries)}</dt><dd id="mmT">0</dd></div><div><dt>${esc(u.mm_pairs)}</dt><dd id="mmP">0 / 6</dd></div></dl>
  <p class="mm-status" id="mmS" role="status" aria-live="polite"></p>
  <p><button type="button" class="btn sm ghost" id="mmReset">${esc(u.mm_reset)}</button></p>
  <div class="mm-win" id="mmWin" hidden tabindex="-1"><h3>${esc(t.mm_win_h)}</h3>${t.mm_win_ps.map(x => `<p>${esc(x)}</p>`).join("")}<p><button type="button" class="btn sm" id="mmAgain">${esc(t.mm_again)}</button></p></div>
  <div class="mm-found" id="mmFound" hidden><h3>${esc(u.mm_found)}</h3><ul id="mmFoundL"></ul></div></div>`;
  mmPaint("");
}
function mmPaint(msg){
  const t = L(), u = t.bx_ui, P = t.mm_pairs; if (!MM || !$("#mmBoard")) return;
  $$("#mmBoard .mm-c").forEach(b => {
    const i = +b.dataset.i, done = MM.done.includes(i), open = done || MM.open.includes(i);
    b.classList.toggle("is-flip", open); b.classList.toggle("is-done", done);
    b.setAttribute("aria-label", open ? P[MM.deck[i]][0] : u.mm_card + " " + (i + 1) + ", " + u.mm_down);
    b.setAttribute("aria-disabled", done ? "true" : "false");
  });
  $("#mmT").textContent = MM.tries; $("#mmP").textContent = MM.found.length + " / 6";
  const fo = $("#mmFound"); fo.hidden = !MM.found.length;
  $("#mmFoundL").innerHTML = MM.found.map(p => `<li><b>${esc(P[p][0])}</b> ${esc(P[p][1])}</li>`).join("");
  const won = MM.done.length >= 12;
  $("#mmWin").hidden = !won;
  /* al ganar solo se ve el panel final: el aviso de estado queda solo para lectores de pantalla y se oculta el botón Reiniciar (el panel trae «Jugar otra vez») */
  $("#mmS").classList.toggle("sr-only", won); const rs = $("#mmReset"); if (rs && rs.parentElement) rs.parentElement.hidden = won;
  if (msg != null) $("#mmS").textContent = msg;
}
function mmPick(i){
  if (!MM || MM.lock || MM.open.includes(i) || MM.done.includes(i)) return;
  const t = L(), u = t.bx_ui, P = t.mm_pairs;
  MM.open.push(i);
  if (MM.open.length < 2) { mmPaint(""); return; }
  MM.tries++; MM.lock = true;
  const [a, b] = MM.open;
  if (MM.deck[a] === MM.deck[b]) {
    const p = MM.deck[a]; MM.done.push(a, b); MM.found.push(p); MM.open = []; MM.lock = false;
    if (MM.done.length === 12) { mmPaint(t.mm_win_h + " " + t.mm_win_ps.join(" ")); const w = $("#mmWin"); w.focus({ preventScroll: false }); }
    else mmPaint(u.mm_ok + " " + P[p][0] + ". " + P[p][1]);
  } else {
    mmPaint(u.mm_no);
    mmTimer = setTimeout(() => { MM.open = []; MM.lock = false; mmPaint(""); }, 900);
  }
}
function mmReset(){ mmNew(); mmBuild(); const f = $("#mmBoard .mm-c"); if (f) f.focus(); }
/* ---------- wiring ---------- */
function renderBio2(){ renderBento2(); renderOb(); mmBuild(); }
function wireBio2(){
  document.addEventListener("click", e => {
    const g = e.target.closest && e.target.closest("[data-gal]"); if (g) { lbOpen(g.dataset.gal, +g.dataset.i, g); return; }
    const s = e.target.closest && e.target.closest("[data-sp-load]");
    if (s) { const pane = $("#spBox .bx-sp-pane"), ifr = document.createElement("iframe"); ifr.src = s.dataset.spLoad; ifr.title = "Spotify"; ifr.loading = "lazy"; ifr.width = "100%"; ifr.height = "352"; ifr.setAttribute("allow", "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"); ifr.setAttribute("allowfullscreen", ""); ifr.style.border = "0"; ifr.style.borderRadius = "0"; pane.replaceWith(ifr); const card = ifr.closest(".bx-sp"); if (card) card.classList.add("is-on"); ifr.focus(); return; }
    if (e.target.closest("#obPrev")) { obGo(-1); return; }
    if (e.target.closest("#obNext")) { obGo(1); return; }
    const c = e.target.closest && e.target.closest("#mmBoard .mm-c"); if (c) { mmPick(+c.dataset.i); return; }
    if (e.target.closest("#mmReset") || e.target.closest("#mmAgain")) mmReset();
  });
  const ob = $("#ob"); if (ob) ob.addEventListener("keydown", e => { if (e.key === "ArrowLeft") { e.preventDefault(); obGo(-1); } else if (e.key === "ArrowRight") { e.preventDefault(); obGo(1); } });
  const d = $("#lbDlg");
  $("#lbClose").addEventListener("click", () => d.close());
  $("#lbPrev").addEventListener("click", () => lbStep(-1)); $("#lbNext").addEventListener("click", () => lbStep(1));
  d.addEventListener("keydown", e => { if (e.key === "ArrowLeft") { e.preventDefault(); lbStep(-1); } else if (e.key === "ArrowRight") { e.preventDefault(); lbStep(1); } });
  d.addEventListener("click", e => { if (e.target === d) d.close(); });
  d.addEventListener("close", () => { if (LBX.opener && document.contains(LBX.opener)) LBX.opener.focus(); });
  addEventListener("hashchange", () => { if (typeof route_ !== "undefined" && route_.page !== "bio") mmStop(); });
  addEventListener("popstate", () => { if (typeof route_ !== "undefined" && route_.page !== "bio") mmStop(); });
  addEventListener("pagehide", () => clearTimeout(mmTimer));
}
