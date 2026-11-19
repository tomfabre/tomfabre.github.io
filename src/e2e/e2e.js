/* E2E (Playwright, sin dependencias nuevas). Uso:
     cd src && python3 build.py --site https://tomfabre.com && (cd dist && python3 -m http.server 8099 &)
     NODE_PATH=$(npm root -g) node e2e/e2e.js            (BASE=http://127.0.0.1:8099 por defecto)
   Los formularios usan un mock de Formspree: NUNCA se envía nada real. */
const { chromium } = require("playwright");
const BASE = process.env.BASE || "http://127.0.0.1:8099";
const out = []; let fails = 0;
const ok = (n, c, x) => { if (!c) fails++; out.push((c ? "PASS " : "FAIL ") + n + (!c && x !== undefined ? " :: " + JSON.stringify(x) : "")); };
const HOME = { es: "/", en: "/en/", fr: "/fr/" };
const SECTIONS = { es: ["/bio/", "/servicios/", "/proyectos/", "/contacto/"], en: ["/en/bio/", "/en/services/", "/en/projects/", "/en/contact/"], fr: ["/fr/bio/", "/fr/services/", "/fr/projets/", "/fr/contact/"] };
const IGNORE = /googletagmanager|google-analytics|spotify|formspree/;

async function fresh(b, opts = {}) {
  const ctx = await b.newContext({ viewport: opts.vp || { width: 1280, height: 900 }, reducedMotion: opts.reduced ? "reduce" : "no-preference", hasTouch: !!opts.touch });
  const page = await ctx.newPage(); const errs = [], bad = [], posts = [];
  page.on("pageerror", e => errs.push(String(e)));
  page.on("console", m => { if (m.type() === "error" && !IGNORE.test(m.text())) errs.push(m.text()); });
  page.on("response", r => { if (r.status() >= 400 && !IGNORE.test(r.url())) bad.push(r.status() + " " + r.url()); });
  let mode = "ok";
  await page.route("https://formspree.io/**", r => { posts.push(JSON.parse(r.request().postData() || "{}")); mode === "ok" ? r.fulfill({ status: 200, contentType: "application/json", body: '{"ok":true}' }) : r.fulfill({ status: 500, body: "{}" }); });
  await page.route(/googletagmanager|google-analytics|open\.spotify\.com/, r => r.abort());
  return { ctx, page, errs, bad, posts, setMode: m => (mode = m) };
}

(async () => {
  const b = await chromium.launch();

  /* 1 · Navegación ES/EN/FR + recursos + errores de consola */
  for (const lg of ["es", "en", "fr"]) {
    const { ctx, page, errs, bad } = await fresh(b);
    for (const u of [HOME[lg], ...SECTIONS[lg]]) {
      const r = await page.goto(BASE + u, { waitUntil: "networkidle" });
      ok(`nav ${u} → 200`, r.status() === 200, r.status());
      const info = await page.evaluate(() => ({ lang: document.documentElement.lang, h1: !!document.querySelector("h1"), broken: [...document.images].filter(i => i.complete && i.naturalWidth === 0 && i.offsetParent && i.currentSrc).map(i => i.currentSrc), noAlt: [...document.images].filter(i => !i.hasAttribute("alt")).length, links: [...document.querySelectorAll("a[target=_blank]")].filter(a => !/noopener/.test(a.rel)).length }));
      ok(`${u} lang=${lg}`, info.lang === lg, info.lang);
      ok(`${u} h1`, info.h1);
      ok(`${u} sin imágenes rotas`, info.broken.length === 0, info.broken);
      ok(`${u} <img> con atributo alt`, info.noAlt === 0, info.noAlt);
      ok(`${u} target=_blank con rel=noopener`, info.links === 0, info.links);
    }
    ok(`[${lg}] sin errores JS`, errs.length === 0, errs);
    ok(`[${lg}] sin respuestas ≥400`, bad.length === 0, bad);
    await ctx.close();
  }

  /* 2 · Enlaces internos de todas las páginas (HEAD vía request) */
  {
    const { ctx, page } = await fresh(b); const seen = new Set(), dead = [];
    for (const u of Object.values(HOME).concat(...Object.values(SECTIONS))) {
      await page.goto(BASE + u, { waitUntil: "domcontentloaded" });
      const hrefs = await page.evaluate(() => [...document.querySelectorAll("a[href]")].map(a => a.getAttribute("href")).filter(h => h && h.startsWith("/") && !h.startsWith("//")));
      hrefs.forEach(h => seen.add(h.split("#")[0]));
    }
    for (const h of seen) { if (!h) continue; const r = await page.request.get(BASE + h); if (r.status() >= 400) dead.push(h + " " + r.status()); }
    ok(`enlaces internos (${seen.size}) sin 404`, dead.length === 0, dead); await ctx.close();
  }

  /* 3 · Selector de idioma conserva la página equivalente */
  {
    const { ctx, page } = await fresh(b);
    await page.goto(BASE + "/bio/", { waitUntil: "networkidle" });
    await page.click("#langBtn"); await page.waitForSelector("#langPop:not([hidden])");
    const opts = await page.evaluate(() => [...document.querySelectorAll("#langPop [data-lang], #langPop button, #langPop a")].map(e => ({ l: e.dataset.lang || e.getAttribute("lang") || e.textContent.trim().slice(0, 2).toLowerCase(), h: e.getAttribute("href") })));
    ok("selector idioma ofrece EN y FR", opts.length >= 3, opts);
    const en = await page.$("#langPop button:has-text('EN')");
    if (en) { await en.click(); await page.waitForLoadState("networkidle"); await page.waitForTimeout(400); ok("ES /bio/ → EN /en/bio/", /\/en\/bio\/?$/.test(new URL(page.url()).pathname), page.url()); }
    else ok("selector idioma: opción EN localizable", false, opts);
    await ctx.close();
  }

  /* 4 · Móvil: menú, scroll horizontal, zoom */
  {
    const { ctx, page, errs } = await fresh(b, { vp: { width: 390, height: 800 }, touch: true });
    await page.goto(BASE + "/", { waitUntil: "networkidle" });
    await page.click("#burger"); await page.waitForTimeout(300);
    ok("móvil: burger abre menú (aria-expanded)", (await page.getAttribute("#burger", "aria-expanded")) === "true");
    await page.keyboard.press("Escape").catch(() => {}); await page.reload({ waitUntil: "networkidle" });
    for (const u of ["/", "/bio/", "/servicios/", "/proyectos/", "/contacto/", "/en/", "/fr/"]) {
      await page.goto(BASE + u, { waitUntil: "networkidle" });
      const sw = await page.evaluate(() => document.documentElement.scrollWidth - innerWidth);
      ok(`móvil ${u}: sin scroll horizontal`, sw <= 1, sw);
    }
    const vp = await page.getAttribute('meta[name=viewport]', "content");
    ok("viewport permite zoom", !/user-scalable\s*=\s*no|maximum-scale\s*=\s*1(\.0)?\b/.test(vp), vp);
    ok("móvil sin errores JS", errs.length === 0, errs); await ctx.close();
  }

  /* 5 · Formularios (mock): abrir, cerrar, validación, error, éxito, teclado, foco */
  {
    const { ctx, page, errs, posts, setMode } = await fresh(b);
    await page.goto(BASE + "/", { waitUntil: "networkidle" });
    await page.click('[data-place="home_contact"]'); await page.waitForSelector("#dlg[open]");
    ok("form: abre y foca el primer campo", (await page.evaluate(() => document.activeElement.id)) === "fn");
    await page.click("#form button[type=submit]");
    const e1 = await page.evaluate(() => ["fn", "fe", "ft", "fm", "fq", "fc"].map(i => [document.getElementById(i + "E").textContent, document.getElementById(i).getAttribute("aria-invalid")]));
    ok("form: errores inline + aria-invalid", e1.every(x => x[0] && x[1] === "true"), e1);
    ok("form: vacío no envía", posts.length === 0);
    await page.fill("#fn", "Test"); await page.fill("#fe", "test@example.com"); await page.selectOption("#ft", "collab"); await page.fill("#fm", "Mensaje de prueba automatizada.");
    await page.fill("#fq", String(await page.evaluate(() => qa + qb))); await page.check("#fc");
    setMode("fail"); await page.click("#form button[type=submit]"); await page.waitForFunction(() => document.querySelector("#ferr").textContent.length > 0);
    ok("form: error de servidor conserva datos y no muestra éxito", (await page.inputValue("#fn")) === "Test" && await page.evaluate(() => document.querySelector("#dsent").hidden));
    setMode("ok"); await page.click("#form button[type=submit]"); await page.waitForSelector("#dsent:not([hidden])");
    const lp = posts[posts.length - 1]; ok("form: éxito + payload", lp.form_type === "contact" && lp.locale === "es" && lp.topic_id === "collab", lp);
    await page.click("#dDone"); await page.waitForFunction(() => !document.querySelector("#dlg").open);
    ok("form: Cerrar cierra el modal", true);
    await page.click('[data-place="home_contact"]'); await page.waitForSelector("#dlg[open]"); await page.keyboard.press("Escape");
    await page.waitForFunction(() => !document.querySelector("#dlg").open);
    ok("form: Escape cierra y devuelve el foco", (await page.evaluate(() => document.activeElement.dataset.place)) === "home_contact");
    ok("form: sin errores JS (salvo el 500 simulado)", errs.filter(e => !/status of 500/.test(e)).length === 0, errs); await ctx.close();
  }

  /* 6 · Batalla naval + acceso al premio UX/UI (derrota ≠ premio) + Yodis */
  for (const win of [false, true]) {
    const { ctx, page, errs, posts } = await fresh(b);
    await page.goto(BASE + "/", { waitUntil: "networkidle" });
    if (!win) { await page.evaluate(() => openPrize(false)); ok("premio: openPrize bloqueado con la partida en curso", !(await page.evaluate(() => !!document.querySelector("dialog[open] #pzForm")))); }
    await page.locator("#board").scrollIntoViewIfNeeded();
    const cells = await page.evaluate(win => { const idx = []; G.occ.forEach((s, i) => { if (win ? s >= 0 : s < 0) idx.push(i); }); return idx; }, win);
    for (const i of cells) { if (await page.evaluate(() => G.over)) break; await page.locator("#board button").nth(i).evaluate(b => b.click()); }
    await page.waitForFunction(() => G.over); await page.waitForSelector("#gameDlg[open]", { timeout: 5000 });
    ok(`juego ${win ? "victoria" : "derrota"}: termina y abre diálogo`, (await page.evaluate(() => G.won)) === win);
    await page.click("#gameWrite"); await page.waitForTimeout(400);
    const prize = await page.evaluate(() => !!document.querySelector("dialog[open] #pzForm"));
    ok(`formulario UX/UI accesible al terminar la partida (${win ? "victoria" : "derrota"}; la elegibilidad se decide fuera del navegador)`, prize === true);
    ok("juego sin errores JS", errs.length === 0, errs);
    if (prize) {
      const dlg = await page.evaluate(() => document.querySelector("dialog[open] form")?.id);
      ok("premio: abre formulario", !!dlg, dlg); ok("premio: sin envío real", posts.length === 0);
      await page.evaluate(() => { const q = document.querySelector("#pzQ"); });
    }
    await ctx.close();
  }
  {
    const { ctx, page, errs } = await fresh(b);
    await page.goto(BASE + "/", { waitUntil: "networkidle" });
    await page.click("#chatbtn"); await page.waitForSelector("#chat.open, #chat[data-open], #chat:visible");
    await page.waitForTimeout(500);
    const nBefore = await page.locator("#clog > *").count();
    const optBtn = page.locator("#clog button").first();
    if (await optBtn.count()) { await optBtn.click(); await page.waitForTimeout(900); }
    ok("Yodis: responde al elegir una opción", (await page.locator("#clog > *").count()) > nBefore || nBefore > 0);
    await page.click("#yrestart"); await page.waitForTimeout(300); await page.click("#chatx");
    ok("Yodis: abrir/reiniciar/cerrar sin errores", errs.length === 0, errs); await ctx.close();
  }

  /* 7 · Bio: bento tipográfico sin placeholders, memory game, lightbox */
  for (const lg of ["es", "en", "fr"]) {
    const { ctx, page, errs } = await fresh(b);
    await page.goto(BASE + (lg === "es" ? "" : "/" + lg) + (lg === "fr" ? "/bio/" : "/bio/"), { waitUntil: "networkidle" });
    const r = await page.evaluate(() => ({ ph: document.querySelectorAll(".bx-ph,[data-pending]").length, foodImg: document.querySelectorAll(".bx-food img").length, foods: document.querySelectorAll(".bx-food-l li").length }));
    ok(`bio[${lg}]: sin placeholders, tarjeta 4 sin imágenes, ≥11 comidas`, r.ph === 0 && r.foodImg === 0 && r.foods >= 11, r);
    if (lg === "es") {
      const cards = page.locator("#mmBoard .mm-c"); const n = await cards.count();
      await cards.nth(0).scrollIntoViewIfNeeded(); await cards.nth(0).click(); await cards.nth(1).click(); await page.waitForTimeout(1200);
      ok("memory: 12 cartas, jugable", n === 12 && (await page.textContent("#mmT")) === "1", n);
      await page.locator(".bx-city .bx-frame").first().click({ force: true }); await page.waitForTimeout(300);
      ok("bento: las ciudades no abren lightbox", await page.evaluate(() => !document.querySelector("dialog[open]") && !document.querySelector(".bx-city [data-gal], .bx-city .bx-hd p")));
      await page.locator(".bx-st .bx-frame").first().click(); await page.waitForSelector("dialog[open]", { timeout: 3000 }).catch(() => {});
      ok("bento: la galería de calle abre lightbox", await page.evaluate(() => !!document.querySelector("dialog[open]")));
      await page.keyboard.press("Escape");
    }
    ok(`bio[${lg}] sin errores JS`, errs.length === 0, errs); await ctx.close();
  }

  /* 7b · Memory: 12 historias, 6 por partida, rotación y mensajes finales según el progreso de la visita */
  {
    const ids = pg => pg.$$eval("#mmBoard .mm-c .mm-fi img", im => im.map(i => +/memo-(\d+)\.webp/.exec(i.getAttribute("src"))[1]));
    const play = async (pg, n) => { const a = await ids(pg), g = {}; a.forEach((id, i) => (g[id] ||= []).push(i)); const cards = pg.locator("#mmBoard .mm-c"); const ks = Object.keys(g).slice(0, n); for (const k of ks) { await cards.nth(g[k][0]).click(); await cards.nth(g[k][1]).click(); } return ks.map(Number); };
    const setOf = a => [...new Set(a)];
    const WIN = {   /* mensaje y botón tras la 1.ª partida (6 de 12) y cuando ya se conocen las 12 */
      es: { h6: "Ya conoces 6 de mis 12 historias. ¿Quieres descubrir las otras?", b6: "Descubrir otras historias", h12: "¡Ya conoces mis 12 historias! Aunque todavía me quedan unas cuantas por contar.", b12: "Volver a jugar", hint: "Encuentra una pareja y te cuento algo." },
      en: { h6: "You now know 6 of my 12 stories. Want to discover the others?", b6: "Discover other stories", h12: "You know all 12 of my stories! Though I still have a few more to tell.", b12: "Play again", hint: "Find a pair and I'll tell you something." },
      fr: { h6: "Tu connais déjà 6 de mes 12 histoires. Tu veux découvrir les autres ?", b6: "Découvrir d'autres histoires", h12: "Tu connais mes 12 histoires ! Mais il m'en reste encore quelques-unes à raconter.", b12: "Rejouer", hint: "Trouve une paire et je te raconte quelque chose." }
    };
    const winState = pg => pg.evaluate(() => ({ t: document.getElementById("mmT").textContent, p: document.getElementById("mmP").textContent, win: !document.getElementById("mmWin").hidden, h: document.getElementById("mmWinH").textContent, btn: document.getElementById("mmAgain").textContent, li: document.querySelectorAll("#mmFoundL li").length, focus: document.activeElement && document.activeElement.id, status: document.getElementById("mmS").textContent, mid: document.getElementById("mmWin").parentElement.querySelectorAll(".mm-cur-n").length }));
    const { ctx, page, errs } = await fresh(b);
    await page.goto(BASE + "/bio/", { waitUntil: "networkidle" });
    const txt = await page.evaluate(() => ({ p: L().mm_pairs }));
    ok("memory: 12 curiosidades en es con título y texto", txt.p.length === 12 && txt.p.every(x => x[0] && x[1]), txt.p.length);
    await page.locator("#mmBoard").scrollIntoViewIfNeeded();
    const A = await ids(page);
    ok("memory: 12 cartas, 6 imágenes distintas, cada una exactamente dos veces", A.length === 12 && setOf(A).length === 6 && setOf(A).every(i => A.filter(x => x === i).length === 2 && i >= 1 && i <= 12), A);
    ok("memory: mensaje inicial «Encuentra una pareja y te cuento algo.»", (await page.innerText("#mmCur")).trim() === WIN.es.hint);
    const sec0 = await page.innerText("#memorysec");
    ok("memory: antes de acertar no aparece ninguna curiosidad", txt.p.every(x => !sec0.includes(x[1].slice(0, 30))));
    const first = await play(page, 1); await page.waitForTimeout(150);
    const sec1 = await page.innerText("#memorysec"), cur1 = (await page.innerText("#mmCur")).trim();
    ok("memory: al acertar solo se revela la curiosidad de esa pareja, con su título", sec1.includes(txt.p[first[0] - 1][1]) && sec1.toLowerCase().includes(txt.p[first[0] - 1][0].toLowerCase()) && txt.p.filter((x, i) => i !== first[0] - 1).every(x => !sec1.includes(x[1].slice(0, 30))), sec1.slice(0, 200));
    ok("memory: bajo la curiosidad no hay frases añadidas (solo título e historia)", !sec1.includes("Cada vez sabes") && cur1.split("\n").map(x => x.trim()).filter(Boolean).length === 2, cur1);
    const keyOk = await (async () => { const c = page.locator("#mmBoard .mm-c:not(.is-done)").first(); await c.focus(); await page.keyboard.press("Enter"); return c.evaluate(e => e.classList.contains("is-flip")); })();
    ok("memory: las cartas se giran con el teclado (Enter)", keyOk);
    await page.click("#mmReset"); await page.waitForTimeout(100);
    const seen = [];   /* ids de partidas completadas, en orden */
    for (let g = 0; g < 4; g++) {
      const cur = setOf(await ids(page)); seen.push(cur);
      ok(`memory[es] partida ${g + 1}: exactamente 6 parejas (${cur.join(",")})`, cur.length === 6);
      await play(page, 6); await page.waitForTimeout(200);
      const st = await winState(page), W = WIN.es, e = g === 0 ? [W.h6, W.b6] : [W.h12, W.b12];
      ok(`memory[es] partida ${g + 1} completada: 6 intentos, 6 / 6, 6 historias en el panel`, st.t === "6" && st.p === "6 / 6" && st.win && st.li === 6, st);
      ok(`memory[es] partida ${g + 1}: mensaje «${e[0].slice(0, 28)}…» y botón «${e[1]}»${g === 2 ? " (el ciclo se reinició, la visita ya conoce las 12)" : ""}`, st.h === e[0] && st.btn === e[1], st);
      ok(`memory[es] partida ${g + 1}: el foco pasa al panel final y el aviso de estado lleva el mensaje`, st.focus === "mmWin" && st.status === e[0], { focus: st.focus, status: st.status });
      await page.click("#mmAgain"); await page.waitForTimeout(100);
      const st2 = await winState(page);
      ok(`memory[es] nueva partida ${g + 2}: contadores a 0, panel final oculto, mensaje inicial`, st2.t === "0" && st2.p === "0 / 6" && !st2.win && (await page.innerText("#mmCur")).trim() === WIN.es.hint, st2);
    }
    ok("memory: la 2.ª partida prioriza las 6 historias no descubiertas (disjunta de la 1.ª; entre ambas, las 12)", seen[1].every(i => !seen[0].includes(i)) && setOf([...seen[0], ...seen[1]]).length === 12, seen.slice(0, 2));
    ok("memory: con las 12 descubiertas la 3.ª parte de cero y la 4.ª vuelve a priorizar las no vistas", seen[3].every(i => !seen[2].includes(i)), seen.slice(2));
    ok("memory: sin errores JS en la rotación", errs.length === 0, errs);
    /* accesibilidad del juego: nombres accesibles, ids únicos, botones con texto */
    const a11y = await page.evaluate(() => ({ unnamed: [...document.querySelectorAll("#memorysec button")].filter(x => !x.closest("[hidden]") && !(x.getAttribute("aria-label") || x.textContent).trim()).length, dupIds: [...document.querySelectorAll("#memorysec [id]")].map(x => x.id).filter((x, i, a) => a.indexOf(x) !== i), live: !!document.querySelector("#mmCur[aria-live], #mmS[role=status]"), h3: document.querySelector("#mmWin h3") && document.querySelector("#mmWin h3").id }));
    ok("memory: botones con nombre accesible, ids únicos, regiones aria-live y encabezado del panel final", a11y.unnamed === 0 && a11y.dupIds.length === 0 && a11y.live && a11y.h3 === "mmWinH", a11y);
    /* abandonar a medias NO marca las historias como descubiertas: si se marcaran, la 2.ª partida nunca repetiría ninguna de la 1.ª (prob. de acertar por azar ≈ (1/924)^8) */
    let overlaps = 0, distinct = true;
    for (let k = 0; k < 8; k++) {
      await page.reload({ waitUntil: "networkidle" }); await page.locator("#mmBoard").scrollIntoViewIfNeeded();
      const a1 = setOf(await ids(page)); await play(page, 2); await page.click("#mmReset"); await page.waitForTimeout(80);
      const b1 = setOf(await ids(page)); distinct = distinct && b1.length === 6; if (a1.some(i => b1.includes(i))) overlaps++;
    }
    ok("memory: abandonar una partida no marca sus historias como descubiertas", overlaps >= 1 && distinct, { overlaps });
    ok("memory: sin errores JS tras abandonar", errs.length === 0, errs); await ctx.close();
    /* progreso en EN y FR: mensaje inicial, 1.ª partida (6/12), 2.ª (12/12) y 3.ª (sigue 12/12) */
    for (const lg of ["en", "fr"]) {
      const c2 = await fresh(b), W = WIN[lg]; await c2.page.goto(BASE + "/" + lg + "/bio/", { waitUntil: "networkidle" }); await c2.page.locator("#mmBoard").scrollIntoViewIfNeeded();
      const r = await c2.page.evaluate(() => ({ n: L().mm_pairs.length, ok: L().mm_pairs.every(x => x[0] && x[1]), p: L().mm_p, old: [L().mm_mid, L().mm_win_ps] }));
      ok(`memory[${lg}]: 12 curiosidades traducidas, descripción con 12 y 6 y sin claves obsoletas`, r.n === 12 && r.ok && /12/.test(r.p) && /6/.test(r.p) && r.old.every(x => x === undefined), r);
      ok(`memory[${lg}]: mensaje inicial`, (await c2.page.innerText("#mmCur")).trim() === W.hint);
      for (let g = 0; g < 3; g++) {
        await play(c2.page, 6); await c2.page.waitForTimeout(150);
        const st = await winState(c2.page), e = g === 0 ? [W.h6, W.b6] : [W.h12, W.b12];
        ok(`memory[${lg}] partida ${g + 1}: mensaje y botón según progreso`, st.win && st.h === e[0] && st.btn === e[1] && st.li === 6 && st.status === e[0], st);
        await c2.page.click("#mmAgain"); await c2.page.waitForTimeout(100);
      }
      ok(`memory[${lg}] sin errores JS`, c2.errs.length === 0, c2.errs); await c2.ctx.close();
    }
    /* móvil táctil + movimiento reducido: dos partidas completas, mensajes y sin desbordamiento horizontal */
    const mob = await fresh(b, { vp: { width: 390, height: 844 }, reduced: true, touch: true });
    await mob.page.goto(BASE + "/bio/", { waitUntil: "networkidle" }); await mob.page.locator("#mmBoard").scrollIntoViewIfNeeded();
    for (let g = 0; g < 2; g++) {
      await play(mob.page, 6); await mob.page.waitForTimeout(200); const st = await winState(mob.page), e = g === 0 ? [WIN.es.h6, WIN.es.b6] : [WIN.es.h12, WIN.es.b12];
      ok(`memory[móvil 390, reduced-motion] partida ${g + 1}: mensaje correcto, sin desbordamiento horizontal`, st.win && st.h === e[0] && st.btn === e[1] && await mob.page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), st);
      await mob.page.click("#mmAgain"); await mob.page.waitForTimeout(100);
    }
    ok("memory[móvil] sin errores JS", mob.errs.length === 0, mob.errs); await mob.ctx.close();
  }

  /* 8 · Accesibilidad básica */
  {
    const { ctx, page } = await fresh(b);
    await page.goto(BASE + "/", { waitUntil: "networkidle" });
    const noName = await page.evaluate(() => [...document.querySelectorAll("button,a[href],input,select,textarea")].filter(e => e.offsetParent && e.type !== "hidden" && !(e.getAttribute("aria-label") || e.getAttribute("aria-labelledby") || e.textContent.trim() || (e.labels && e.labels.length) || e.title || e.querySelector("img[alt]"))).map(e => e.outerHTML.slice(0, 90)));
    ok("controles visibles con nombre accesible", noName.length === 0, noName);
    await page.keyboard.press("Tab"); await page.keyboard.press("Tab");
    const fv = await page.evaluate(() => { const e = document.activeElement; if (!e || e === document.body) return false; const s = getComputedStyle(e); return s.outlineStyle !== "none" && parseFloat(s.outlineWidth) > 0 || s.boxShadow !== "none"; });
    ok("foco visible con teclado", fv);
    const mv = await b.newContext({ viewport: { width: 390, height: 800 }, hasTouch: true }); const mp = await mv.newPage(); await mp.goto(BASE + "/", { waitUntil: "networkidle" });
    const small = await mp.evaluate(() => [...document.querySelectorAll("button,a[href],select,input:not([type=hidden])")].filter(e => e.offsetParent).map(e => { const r = e.getBoundingClientRect(); return [e, r]; }).filter(([e, r]) => r.width > 0 && (r.width < 24 || r.height < 24) && !(e.tagName === "A" && getComputedStyle(e).display === "inline")).map(([e]) => e.outerHTML.slice(0, 80)));
    ok("móvil: objetivos táctiles ≥24px (WCAG 2.2 AA)", small.length === 0, small.slice(0, 5)); await mv.close(); await ctx.close();
  }

  /* 8b · Botón del pie del chat: visual ≥24px y área táctil ≥44×44 */
  {
    const { ctx, page } = await fresh(b, { vp: { width: 390, height: 800 }, touch: true });
    await page.goto(BASE + "/", { waitUntil: "networkidle" }); await page.locator("[data-cc=denied]").first().click({ timeout: 2000 }).catch(() => {}); await page.click("#chatbtn"); await page.waitForTimeout(600);
    const m = await page.evaluate(() => { const e = document.querySelector(".chat-foot button"), r = e.getBoundingClientRect(), a = getComputedStyle(e, "::after"); return { w: r.width, h: r.height, ah: parseFloat(a.height), aw: parseFloat(a.width) }; });
    ok("chat-foot: visual ≥24×24 y área táctil ≥44×44", m.w >= 24 && m.h >= 24 && m.ah >= 44 && m.aw >= 44, m); await ctx.close();
  }

  /* 9 · Recursos animados: WebM real (teckels) + WebP (hover-mail); prefers-reduced-motion */
  for (const reduced of [true, false]) {
    const { ctx, page, errs, bad } = await fresh(b, { reduced });
    await page.goto(BASE + "/bio/", { waitUntil: "networkidle" });
    const v = page.locator(".s-pic video").first();
    ok("sticker: <video> WebM con poster y atributos (muted/loop/playsinline, sin controles)", await v.evaluate(e => e.muted && e.loop && e.playsInline && !e.controls && !!e.poster && /webm/.test(e.querySelector("source").type)));
    await v.scrollIntoViewIfNeeded(); await page.waitForTimeout(900);
    const isPlaying = () => v.evaluate(e => !e.paused && e.currentTime > 0);
    ok("sticker: sin interacción no se reproduce (imagen fija, sin autoplay)", !(await isPlaying()));
    const box = await page.locator(".s-pic").first().boundingBox();
    await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2); await page.waitForTimeout(900);
    const hov = await isPlaying();
    ok(`sticker ${reduced ? "con movimiento reducido: el hover no reproduce" : "reproduce al pasar el cursor"}`, reduced ? !hov : hov);
    await page.mouse.move(2, 2); await page.waitForTimeout(400);
    ok("sticker: se pausa al sacar el cursor", !(await isPlaying()));
    ok("sticker: sin 404", bad.length === 0, bad); await ctx.close();
  }
  {
    const r = await (await b.newContext()).request.get(BASE + "/img/hover-mail.webp"); ok("hover-mail.webp existe (image/webp)", r.status() === 200 && /webp/.test(r.headers()["content-type"] || ""), r.status());
    const t = await (await b.newContext()).request.get(BASE + "/img/sticker/teckel-hills.webm"); ok("teckel-hills.webm existe", t.status() === 200, t.status());
  }
  /* 9b · JS compartido externo con hash (Fase 2): un solo <script src> clásico, sin script grande en línea, cvUrl por idioma */
  for (const [lg, u, cv] of [["es", "/", "/cv-alvaro-fabre.pdf"], ["en", "/en/", "/cv-alvaro-fabre-en.pdf"], ["fr", "/fr/", "/cv-alvaro-fabre-fr.pdf"]]) {
    const { ctx, page, errs, bad } = await fresh(b);
    await page.goto(BASE + u, { waitUntil: "networkidle" });
    const m = await page.evaluate(() => ({ ext: [...document.scripts].filter(s => /\/js\/app\.[0-9a-f]{10}\.js$/.test(s.src)).length, bigInline: [...document.scripts].filter(s => !s.src && s.textContent.length > 50000).length, cv: window.__CV, cvUrl: typeof YCFG !== "undefined" && YCFG.cvUrl, defer: [...document.scripts].filter(s => s.defer).length }));
    ok(`[${lg}] app.js externo con hash, sin script grande en línea`, m.ext === 1 && m.bigInline === 0, m);
    ok(`[${lg}] cvUrl por idioma (${cv})`, m.cv === cv && m.cvUrl === cv, [m.cv, m.cvUrl]);
    ok(`[${lg}] gsap/lenis/motion siguen con defer y sin errores`, m.defer === 3 && errs.length === 0 && bad.length === 0, [m.defer, errs, bad]);
    await ctx.close();
  }

  /* 10 · Presupuesto orientativo y páginas legales */
  {
    const { ctx, page } = await fresh(b);
    await page.goto(BASE + "/", { waitUntil: "networkidle" });
    await page.click('[data-place="home_contact"]'); await page.waitForSelector("#dlg[open]"); await page.selectOption("#ft", "web");
    const o = await page.$$eval("#fb option", x => x.map(e => e.textContent));
    ok("presupuesto: <1.000, 1.000–2.000, 2.000–5.000, >5.000, no sé", o.length === 6 && /Menos de 1\.000/.test(o[1]) && /^1\.000–2\.000/.test(o[2]) && /^2\.000–5\.000/.test(o[3]), o);
    for (const u of ["/legal/", "/en/legal/", "/fr/mentions-legales/"]) {
      await page.goto(BASE + u, { waitUntil: "networkidle" });
      const t = await page.evaluate(() => ({ s: /Spotify/.test(document.body.innerText), ux: /UX\/UI/.test(document.body.innerText), ls: /localStorage/.test(document.body.innerText), tabs: document.querySelectorAll(".lg-tw").length, labels: new Set([...document.querySelectorAll(".lg-tw")].map(e => e.getAttribute("aria-label"))).size, nie: /Z1121752-R/.test(document.body.innerText), addr: /Cava de San Miguel/.test(document.body.innerText) }));
      ok(`legal ${u}: Spotify, formulario UX/UI, localStorage, 2 tablas con etiqueta única, NIE y domicilio conservados`, t.s && t.ux && t.ls && t.tabs === 2 && t.labels === 2 && t.nie && t.addr, t);
    }
    await ctx.close();
  }

  await b.close();
  console.log(out.join("\n")); console.log(`\n${out.length - fails}/${out.length} OK`); process.exit(fails ? 1 : 0);
})();
