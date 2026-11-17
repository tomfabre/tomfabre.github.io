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
  cities: ["cucuta", "san-cristobal", "merida", "santiago", "aix-en-provence", "paris", "madrid"].map(k => ({ k, img: k === "paris" ? null : "img/bio/city-" + k + ".webp" })),   // paris: pending   // 3:2, 7 photos
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
  if (kind === "city") return t.bx_city.items.map(([n, cap], i) => ({ img: (BIO_ASSETS.cities[i] || {}).img, label: n, alt: n, cap: n + " · " + cap, ratio: "3-2", kind: "city-" + ((BIO_ASSETS.cities[i] || {}).k || i) }));
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
  const cities = `<article class="bx bx-city"><div class="bx-hd"><h3>${esc(c.h)}</h3><p>${esc(c.p)}</p></div>${bxMapHTML()}</article>`;
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
  bxStart(); bxMapStart();
}

/* ---------- card 1: mapa esquemático animado (América → Europa), con zoom «ampliado» del clúster Colombia–Venezuela ---------- */
const MAP_GEO = (() => {
  const P = (lon, lat) => [30 + (lon + 100) * 5.4, 20 + (50 - lat) * 4.4];
  const poly = a => "M" + a.map(p => { const q = P(p[0], p[1]); return q[0].toFixed(1) + " " + q[1].toFixed(1); }).join("L") + "Z";
const NA=[[-77.5,8.7],[-80,9.2],[-82.5,9.5],[-83.5,11],[-83.2,14.8],[-84,15.8],[-88.5,16],[-87.5,18],[-87,21.5],[-90.5,21],[-91,18.7],[-94.5,18.2],[-96,19],[-97.2,21.5],[-97.5,25],[-97,27.8],[-94,29.5],[-91,29.2],[-89.5,30.2],[-87,30.4],[-84,30],[-82.8,27.8],[-81.5,25.5],[-80,25.5],[-81,29],[-80.5,32],[-76,35],[-75.5,38],[-74,40.5],[-70,41.7],[-70,43.5],[-65.5,43.5],[-60,46],[-55,50],[-125,50],[-124,46],[-124,40.5],[-122.5,37.5],[-120.5,34.5],[-117,32.5],[-114.8,31.8],[-112.5,29.5],[-109,25.5],[-106,23],[-105.5,20.5],[-102,18],[-98,16.5],[-94,16],[-91,14],[-87.5,13],[-85.7,10],[-82.5,8],[-80,7.3],[-78,7.5]];
const SA=[[-77.3,8.7],[-75,11],[-72,12],[-70,12],[-67,10.7],[-62,10.5],[-60,8],[-57,6],[-52,5],[-50,1],[-48,-1],[-44,-2.5],[-39,-3.5],[-35,-5.5],[-35,-9],[-38,-13],[-39,-18],[-41,-22],[-45,-23.5],[-48.5,-26],[-49,-29],[-53,-33.5],[-57,-35],[-57.5,-38],[-62,-39],[-65,-41],[-64,-43],[-67,-46],[-66,-48],[-69,-51],[-68.5,-53],[-71,-54],[-74,-52],[-75,-47],[-73.5,-42],[-73.5,-37],[-71.5,-32],[-70.5,-25],[-70.2,-18],[-76,-14],[-79,-8],[-81,-5],[-80,-2],[-80,0],[-78.5,2],[-77.5,5]];
const EU=[[-9.3,43.2],[-8,43.7],[-3,43.4],[-1.8,43.4],[-1.2,46],[-4.7,48.4],[-1.5,49.7],[1,50],[15,50],[15,40],[12.5,41.5],[10.5,43.5],[9,44.3],[7.5,43.8],[6,43.1],[3.3,43.2],[3.2,41.9],[0,40.5],[0,38.7],[-2,36.7],[-5.5,36],[-8.9,37],[-9.3,38.8]];
const AF=[[-5.5,35.8],[-2,35.2],[3,36.8],[10,37.3],[11,33.5],[15,32.7],[15,20],[-17,20],[-16.5,24],[-13,27.7],[-9.8,31],[-6.5,34]];
  const land = [NA, SA, EU, AF].map(poly);
  const CL = P(-72.2, 8.2), SCt = P(-70.7, -33.4), AIX = P(5.4, 43.5), MAD = P(-3.7, 40.4);
  const cu = [290, 128], sc = [320, 141], me = [430, 58];
  const D = ["M" + cu[0] + " " + cu[1] + "L" + sc[0] + " " + sc[1], "M" + sc[0] + " " + sc[1] + "L" + me[0] + " " + me[1],
    "M" + CL[0] + " " + CL[1] + "Q" + (CL[0] - 40) + " " + ((CL[1] + SCt[1]) / 2) + " " + SCt[0] + " " + SCt[1],
    "M" + SCt[0] + " " + SCt[1] + "Q330 260 " + AIX[0] + " " + AIX[1], "M" + AIX[0] + " " + AIX[1] + "L" + MAD[0] + " " + MAD[1]];
  const N = [[cu, "cúcuta_co", -6, -12, "start"], [sc, "san cristóbal_ve", 0, 22, "start"], [me, "mérida_ve", 0, -14, "middle"], [SCt, "santiago_cl", 12, 4, "start"], [AIX, "aix-en-provence_fr", 8, -14, "end"], [MAD, "madrid_es", -12, 4, "end"]];
  return { land, CL, D, N };
})();
const MAP_TX = {
  es: { zoom: "ampliado", alt: "Mapa esquemático del recorrido: Cúcuta, San Cristóbal y Mérida (con zoom), Santiago de Chile, Aix-en-Provence y Madrid." },
  en: { zoom: "zoomed in", alt: "Schematic map of the route: Cúcuta, San Cristóbal and Mérida (zoomed in), Santiago de Chile, Aix-en-Provence and Madrid." },
  fr: { zoom: "agrandi", alt: "Carte schématique du parcours : Cúcuta, San Cristóbal et Mérida (agrandi), Santiago du Chili, Aix-en-Provence et Madrid." }
};
function bxMapHTML(){
  const g = MAP_GEO, tx = MAP_TX[lang] || MAP_TX.es, CL = g.CL;
  const leads = [[270, 60], [270, 170]].map(e => `M${CL[0]} ${CL[1]}L${e[0]} ${e[1]}`).join("");
  const nodes = g.N.map(n => `<circle class="mp-n" cx="${n[0][0]}" cy="${n[0][1]}" r="6"/><text x="${n[0][0] + n[2]}" y="${n[0][1] + n[3]}" text-anchor="${n[4]}">${esc(n[1])}</text>`).join("");
  return `<div class="bx-map" data-map role="img" aria-label="${esc(tx.alt)}"><svg viewBox="0 0 680 470" focusable="false" aria-hidden="true">
<defs><clipPath id="mpc"><rect width="680" height="470"/></clipPath></defs>
<g class="mp-land" clip-path="url(#mpc)">${g.land.map(d => `<path d="${d}"/>`).join("")}</g>
<path class="mp-lead" d="${leads}"/><circle class="mp-ring" cx="${CL[0]}" cy="${CL[1]}" r="10"/>
<rect class="mp-box" x="270" y="24" width="220" height="150" rx="8"/><text class="mp-zoom" x="282" y="44">${esc(tx.zoom)}</text>
<path class="mp-base" d="${g.D.join("")}"/>
<g class="mp-live">${g.D.map(d => `<path d="${d}" pathLength="1"/>`).join("")}</g>
<g class="mp-nodes">${nodes}</g><circle class="mp-dot" r="5" cx="0" cy="0"/></svg></div>`;
}
const mapS = { raf: 0, t0: 0, vis: false, io: null, el: null };
function bxMapFrame(t){
  const el = mapS.el; if (!el) return;
  const segs = el.querySelectorAll(".mp-live path"), circ = el.querySelectorAll(".mp-n"), dot = el.querySelector(".mp-dot");
  const DUR = 1400, T = 5 * DUR, ease = p => { p = Math.min(1, Math.max(0, p)); return p < .5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2; };
  segs.forEach((s, i) => { s.style.strokeDasharray = "1"; s.style.strokeDashoffset = String(1 - ease((t - i * DUR) / DUR)); });
  circ.forEach((c, j) => c.classList.toggle("on", t >= (j < 5 ? j * DUR : T)));
  const s = Math.min(4, Math.max(0, Math.floor(t / DUR))), q = ease((t - s * DUR) / DUR), len = segs[s].getTotalLength() || 1, pt = segs[s].getPointAtLength(len * q);
  dot.setAttribute("cx", pt.x); dot.setAttribute("cy", pt.y);
}
function bxMapLoop(now){
  mapS.raf = 0;
  if (!mapS.el || !mapS.el.isConnected) return;
  const T = 5 * 1400, HOLD = 2400, t = (now - mapS.t0) % (T + HOLD);
  bxMapFrame(t);
  if (mapS.vis && !document.hidden && !document.documentElement.classList.contains("dlg-open")) mapS.raf = requestAnimationFrame(bxMapLoop);
  else mapS.paused = true;
}
function bxMapRun(){
  if (reduced || mapS.raf || !mapS.vis) return;
  if (mapS.paused) { mapS.t0 = performance.now() - (mapS.keep || 0); mapS.paused = false; }
  mapS.raf = requestAnimationFrame(bxMapLoop);
}
function bxMapStart(){
  if (mapS.io) mapS.io.disconnect();
  cancelAnimationFrame(mapS.raf); mapS.raf = 0;
  mapS.el = document.querySelector("#bxBento [data-map]"); if (!mapS.el) return;
  mapS.t0 = performance.now(); mapS.paused = false;
  bxMapFrame(5 * 1400); /* estado final (también para «reducir movimiento») */
  if (reduced) return;
  bxMapFrame(0);
  mapS.io = new IntersectionObserver(es => { mapS.vis = es[0].isIntersecting; if (mapS.vis) { mapS.keep = 0; mapS.t0 = performance.now(); mapS.paused = false; bxMapRun(); } }, { threshold: .25 });
  mapS.io.observe(mapS.el);
  if (!mapS.bound) { mapS.bound = true;
    const wake = () => { if (mapS.raf || !mapS.paused) return; mapS.t0 = performance.now(); bxMapRun(); };
    document.addEventListener("visibilitychange", () => { if (!document.hidden) wake(); });
    new MutationObserver(() => { if (!document.documentElement.classList.contains("dlg-open")) wake(); }).observe(document.documentElement, { attributes: true, attributeFilter: ["class"] }); }
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
function obPaint(announce){
  const t = L(), u = t.bx_ui, it = t.ob_items, n = it.length, sl = $("#obSlide"); if (!sl) return;
  const [h, p] = it[obI], a = BIO_ASSETS.obsessions[obI] || {}, num = String(obI + 1).padStart(2, "0"), tot = String(n).padStart(2, "0");
  sl.innerHTML = `<div class="ob-img bx-r43">${bxMedia(a, h, a.alt || h, "obsession-" + (obI + 1))}</div><div class="ob-tx"><h3>${esc(h)}</h3><p>${esc(p)}</p></div>`;
  $("#obN").textContent = num + " / " + tot;
  sl.setAttribute("aria-live", announce ? "polite" : "off");
}
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
