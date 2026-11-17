/* ============================================================
   LOTE 2 · Bio v2 components
   bento (cities, Spotify, cooking, street, choir) · accessible lightbox ·
   "pequeñas obsesiones" carousel · memory game (6 pairs)
   Depends on helpers from c2.js ($, $$, esc, L, PATHS, reduced, route_).
   ------------------------------------------------------------
   PENDING ASSETS: fill the `img` fields below with real paths (relative to the
   site root, e.g. "img/bio/city-cucuta.webp"). While `img` is null the
   component renders an identified placeholder (data-pending="...").
   No stock photos. Restaurants: add only validated {name, url}.
   ============================================================ */
const BIO_ASSETS = {
  cities: ["cucuta", "san-cristobal", "merida", "santiago", "aix-en-provence", "paris", "madrid"].map(k => ({ k, img: null })),   // 3:2, 7 photos
  street: Array.from({ length: 10 }, () => ({ img: null, alt: "", note: "" })),                                                   // 1:1, exactly 10 photos
  kitchen: Array.from({ length: 4 }, () => ({ img: null, alt: "" })),                                                             // 1:1, 4 photos
  places: [],                                                                                                                       // [{ name, url }] validated restaurants / places only
  spotify: { url: null },                                                                                                          // https://open.spotify.com/playlist/<id>
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
  return BIO_ASSETS.street.map((s, i) => ({ img: s.img, label: String(i + 1).padStart(2, "0"), alt: s.alt || (t.bx_st.h + " " + (i + 1)), cap: s.note || "", ratio: "1-1", kind: "street-" + (i + 1) }));
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
  const cities = `<article class="bx bx-city"><div class="bx-hd"><h3>${esc(c.h)}</h3><p>${esc(c.p)}</p></div><ul class="bx-thumbs bx-r32">${c.items.map(([n, cap], i) => `<li><button type="button" class="bx-th" data-gal="city" data-i="${i}" aria-haspopup="dialog" aria-label="${esc(u.cities_open)}: ${esc(n)}">${bxMedia(A.cities[i], n, n, "city-" + A.cities[i].k)}<span class="bx-cap">${esc(n)}</span></button></li>`).join("")}</ul></article>`;
  const embed = A.spotify.url ? spEmbed(A.spotify.url) : null;
  const spot = `<article class="bx bx-sp"><div class="bx-hd"><h3>${esc(sp.h)}</h3><p>${esc(sp.p)}</p></div><p class="bx-pl"><span aria-hidden="true">♪</span> ${esc(sp.name)}</p>${embed
    ? `<div class="bx-sp-box" id="spBox"><p class="bx-sp-act"><button type="button" class="btn sm" data-sp-load="${esc(embed)}">${esc(u.sp_load)}</button><a class="btn sm ghost" href="${esc(A.spotify.url)}" target="_blank" rel="noopener">${esc(u.sp_open)} <span aria-hidden="true">↗</span></a></p><p class="bx-note">${esc(u.sp_note)}</p></div>`
    : `<span class="bx-ph bx-ph-sp" data-pending="spotify-url" role="img" aria-label="${esc(u.ph + ": Spotify")}"><span>${esc(u.ph)}</span><b>${esc(u.sp_pending)}</b></span>`}</article>`;
  const places = A.places.length
    ? `<ul class="bx-places">${A.places.map(p => `<li><a href="${esc(p.url)}" target="_blank" rel="noopener">${esc(p.name)} <span aria-hidden="true">↗</span></a></li>`).join("")}</ul>`
    : `<p class="bx-places-ph" data-pending="restaurants">${esc(u.places_pending)}</p>`;
  const cook = `<article class="bx bx-ck"><div class="bx-hd"><h3>${esc(ck.h)}</h3><p>${esc(ck.p)}</p></div><ul class="bx-thumbs bx-r11 bx-k4">${A.kitchen.map((k, i) => `<li>${bxMedia(k, u.kitchen_pending + " " + (i + 1), k.alt || ck.home[0], "kitchen-" + (i + 1))}</li>`).join("")}</ul><p class="bx-line"><b>${esc(ck.home[0])}</b> ${esc(ck.home[1])}</p><p class="bx-line"><b>${esc(ck.out[0])}</b> ${esc(ck.out[1])}</p>${places}</article>`;
  const choir = `<figure class="bx bx-ch"><h3>${esc(ch.h)}</h3>${A.choir.img ? `<div class="bx-ch-img bx-r32">${bxMedia(A.choir, ch.h, A.choir.alt || ch.h, "choir")}</div>` : ""}<blockquote><p>${esc(ch.q)}</p></blockquote></figure>`;
  const street = `<article class="bx bx-st"><div class="bx-hd"><h3>${esc(st.h)}</h3><p class="bx-sub">${esc(st.sub)}</p><p>${esc(st.p)}</p></div><ul class="bx-thumbs bx-r11 bx-s10">${A.street.map((s, i) => `<li><button type="button" class="bx-th" data-gal="street" data-i="${i}" aria-haspopup="dialog" aria-label="${esc(u.street_open)} ${i + 1} / ${A.street.length}">${bxMedia(s, u.street_pending + " " + (i + 1), s.alt || (st.h + " " + (i + 1)), "street-" + (i + 1))}</button></li>`).join("")}</ul></article>`;
  el.innerHTML = cities + spot + cook + choir + street;
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
  $("#mmWin").hidden = MM.done.length < 12;
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
    if (s) { const box = $("#spBox"), ifr = document.createElement("iframe"); ifr.src = s.dataset.spLoad; ifr.title = "Spotify"; ifr.loading = "lazy"; ifr.width = "100%"; ifr.height = "152"; ifr.setAttribute("allow", "encrypted-media"); ifr.style.border = "0"; box.insertBefore(ifr, box.firstChild); s.remove(); return; }
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
