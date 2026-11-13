/* ---------- YODIS BROWNIE JR. · deterministic conversation guide (no AI, no network) ---------- */
const YCFG = {
  email:YODIS_DATA.config.email,
  whatsapp:YODIS_DATA.config.whatsappE164,   // only ever opened after qualification + explicit click
  contactForm:true,                           // existing #dlg form
  cvUrl:"cv-alvaro-fabre.pdf",
  projects:{ ux:"#projects", web:"#projects", brand:"#projects", all:"#projects" },
  seriesMusicUrl:YODIS_DATA.config.seriesMusicUrl
};
const YCAT = { ux:["happylife","apolo","appy","mood"], web:["contazara","carceral","a2pas"], brand:["contazara","a2pas","360estudio"], all:["contazara","carceral","a2pas"] };
const YSTAGE = ["ux_stage","web_stage","brand_stage","other_stage"];
const YKEY = "yodis-v2", yN = YODIS_DATA.nodes;
const yFreshState = () => ({ node:YODIS_DATA.initialNode, hist:[], seen:[], fact:null });
let Y = yFreshState(), yNote = "";
const yStore = {
  get(){ try { return sessionStorage.getItem(YKEY); } catch(e){ return null; } },
  set(v){ try { sessionStorage.setItem(YKEY, v); } catch(e){} }
};
function yLoad(){
  try {
    const s = JSON.parse(yStore.get() || "null");
    if (s && s.v === 1 && yN[s.node] && Array.isArray(s.hist) && s.hist.every(h => h && yN[h.nodeId] && yN[h.nodeId].options.some(o => o.id === h.optionId)) && Array.isArray(s.seen)) Y = { node:s.node, hist:s.hist, seen:s.seen, fact:s.fact || null };
  } catch(e){ Y = yFreshState(); }
}
const ySave = () => yStore.set(JSON.stringify({ v:1, node:Y.node, hist:Y.hist, seen:Y.seen, fact:Y.fact }));
const yT = k => L()[k] || "";
const yCopy = n => n.copy[lang] || n.copy[YODIS_DATA.defaultLocale];

/* validation (dev) */
(function yValidate(){
  const acts = YODIS_DATA.actions; let bad = 0;
  if (!yN[YODIS_DATA.initialNode]) bad++;
  Object.entries(yN).forEach(([id, n]) => {
    YODIS_DATA.locales.forEach(l => { if (!(n.copy[l] && n.copy[l].message && n.copy[l].question)) { bad++; console.warn("yodis: copy", id, l); } });
    n.options.forEach(o => {
      if (!(o.next.startsWith("@") ? acts[o.next] : yN[o.next])) { bad++; console.warn("yodis: dead end", id, o.id, o.next); }
      YODIS_DATA.locales.forEach(l => { if (!o.label[l]) { bad++; console.warn("yodis: label", id, o.id, l); } });
    });
  });
  window.__yodisValid = bad === 0;
})();

/* answers + qualification are DERIVED from history, so back()/restart()/refresh can never keep stale eligibility */
function yDerive(){
  const a = { service:null, stage:null, timeline:null, budget:null, inquiry:null }, q = { intent:null, need:null, timeline:null };
  Y.hist.forEach(h => {
    const nd = yN[h.nodeId], o = nd && nd.options.find(x => x.id === h.optionId); if (!o) return;
    const v = { n:h.nodeId, o:h.optionId };
    if (o.next === "project_type") { a.service = a.stage = a.timeline = a.budget = a.inquiry = null; q.need = q.timeline = null; }
    if (o.sets && "intent" in o.sets) q.need = q.timeline = null;
    if (o.sets) Object.assign(q, o.sets);
    if (h.nodeId === "project_type") a.service = v;
    else if (YSTAGE.includes(h.nodeId) || h.nodeId === "professional_need") a.stage = v;
    else if (h.nodeId === "timeline" || h.nodeId === "professional_timing") a.timeline = v;
    else if (h.nodeId === "budget") a.budget = v;
    else if (h.nodeId === "professional_intent") a.inquiry = v;
  });
  return { a, q };
}
const yAnswers = () => yDerive().a;
const yEligible = () => { const q = yDerive().q; return ["hire_project", "professional_collaboration"].includes(q.intent) && q.need === "defined" && ["soon", "quarter"].includes(q.timeline); };
const yLabel = v => { if (!v) return null; const o = yN[v.n].options.find(o => o.id === v.o); return o ? o.label[lang] : null; };
function yRows(known){
  const a = yAnswers(), rows = [[yT("y_service"), yLabel(a.service)], [yT("y_stage"), yLabel(a.stage)], [yT("y_time"), yLabel(a.timeline)], [yT("y_budget"), yLabel(a.budget)]];
  if (a.inquiry) rows.unshift([yT("y_inquiry"), yLabel(a.inquiry)]);
  return known ? rows.filter(r => r[1]) : rows.map(([k, v]) => [k, v || yT("y_ns")]);
}
const ySummaryText = known => yT("y_sum_title") + "\n" + yRows(known).map(([k, v]) => "- " + k + ": " + v).join("\n");
function yWaHref(){
  const { a, q } = yDerive(), svc = a.service && a.service.o !== "service_other" ? yLabel(a.service) : null, st = a.stage ? yLabel(a.stage) : null;
  const need = svc ? svc + (st && /^(ux|web|brand)_stage$/.test(a.stage.n) ? " (" + st + ")" : "") : yT(q.intent === "professional_collaboration" ? "y_n_collab" : "y_n_hire");
  const msg = yT("y_wa_msg").replace("{need}", need).replace("{when}", yT("y_w_" + q.timeline));
  return "https://wa.me/" + YCFG.whatsapp + "?text=" + encodeURIComponent(msg);
}

/* options visible given real configuration */
function yOptions(id){
  const seen = new Set(), out = [];
  yN[id].options.forEach(o => {
    const n = o.next;
    if (o.requires && o.requires.qualification === "whatsappEligible" && !yEligible()) return;
    if (n === "@whatsapp" && (!YCFG.whatsapp || !yEligible())) return;
    if (n === "@cv" && !YCFG.cvUrl) return;
    if (n === "@contact_form" && !YCFG.contactForm) return;
    if (n === "@email" && !YCFG.email) return;
    if (/^@projects_/.test(n) && !YCFG.projects[n.slice(10)]) return;
    if (seen.has(o.id)) return; seen.add(o.id); out.push(o);
  });
  return out;
}

/* state transitions */
function yGo(optId){
  const n = yN[Y.node], o = yOptions(Y.node).find(x => x.id === optId); if (!o) return;
  if (o.next.startsWith("@")) return yAction(o.next);
  Y.hist.push({ nodeId:Y.node, optionId:o.id, timestamp:Date.now() });
  Y.node = o.next; if (yN[Y.node].requires && !yEligible()) { Y.node = "contact_choice"; yNote = yT("y_wablock"); } yNote = ""; if (yN[Y.node].kind === "random_fact") Y.fact = null;
  ySave(); yRender(true);
}
function yBack(){ const h = Y.hist.pop(); if (!h) return; Y.node = h.nodeId; yNote = ""; ySave(); yRender(true); }
function yRestart(){ Y = yFreshState(); yNote = ""; ySave(); yRender(true); }

function yPickFact(){
  const facts = yN.surprise_random.media.facts, pool = facts.filter(f => f.id !== Y.fact);
  let fresh = pool.filter(f => !Y.seen.includes(f.id));
  if (!fresh.length) { Y.seen = Y.fact ? [Y.fact] : []; fresh = pool; }
  const f = fresh[Math.floor(Math.random() * fresh.length)]; Y.fact = f.id; Y.seen.push(f.id); return f;
}
const yFact = () => yN.surprise_random.media.facts.find(f => f.id === Y.fact);

function yMailHref(){
  const rows = yRows(true), has = rows.length > 0, a = yAnswers();
  const subj = has && a.service ? yT("y_mail_subj") + ": " + yLabel(a.service) : yT(has ? "y_mail_subj" : "y_mail_subj_gen");
  const body = has ? yT("y_mail_intro") + "\n\n" + rows.map(([k, v]) => k + ": " + v).join("\n") + "\n\n" + yT("y_mail_outro") : yT("y_mail_gen");
  return "mailto:" + YCFG.email + "?subject=" + encodeURIComponent(subj) + "&body=" + encodeURIComponent(body);
}
function yOpenUrl(u){ const w = window.open(u, "_blank", "noopener,noreferrer"); return w; }
function ySay(msg){ const s = $("#ystatus"); if (s) { s.textContent = ""; setTimeout(() => { s.textContent = msg; }, 30); } }
function yShowNote(key){
  yNote = yT(key); const box = $("#ynote"); if (box) { box.textContent = yNote; box.hidden = false; } ySay(yNote);
}
function yAction(a){
  switch (a) {
    case "@random_fact": { yPickFact(); ySave(); const c = $("#yfact"); if (c) { c.replaceWith(yFactCard()); } const f = yFact(); ySay(f.title[lang] + ". " + f.body[lang]); break; }
    case "@whatsapp": if (yEligible() && YCFG.whatsapp) { yOpenUrl(yWaHref()); yShowNote("y_waopen"); } else yShowNote("y_wablock"); break;
    case "@email": if (YCFG.email) { const x = document.createElement("a"); x.href = yMailHref(); document.body.appendChild(x); x.click(); x.remove(); yShowNote("y_mailopen"); } else yShowNote("y_mailnone"); break;
    case "@contact_form": {
      closeChat(); openForm();
      const f = $("#fm"), has = yAnswers().service, rows = yRows(true);
      if (f && rows.length && !f.value.trim()) f.value = ySummaryText(true);
      const map = { service_web:0, service_brand:1, service_ux:2, service_other:4 };
      if (has && map[has.o] != null) $("#ft").selectedIndex = map[has.o]; else if (rows.length) $("#ft").selectedIndex = 4;
      break; }
    case "@copy_summary": yCopySummary(); break;
    case "@cv": yOpenUrl(YCFG.cvUrl); yShowNote("y_cvopen"); break;
    case "@series_music": yOpenUrl(YCFG.seriesMusicUrl); yShowNote("y_ytopen"); break;
    default:
      if (/^@projects_/.test(a)) { const u = YCFG.projects[a.slice(10)]; closeChat(); if (u) goHash(u); }
  }
}
function yCopySummary(){
  const txt = ySummaryText(true), fail = () => {
    yShowNote("y_copyfail"); let ta = $("#ysel");
    if (!ta) { ta = document.createElement("textarea"); ta.id = "ysel"; ta.className = "y-sel"; ta.readOnly = true; ta.rows = 5; ta.setAttribute("aria-label", yT("y_recap")); $("#ynote").after(ta); }
    ta.value = txt; ta.focus(); ta.select();
  };
  if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(txt).then(() => yShowNote("y_copied"), fail); else fail();
}

/* rendering */
const yEl = (tag, cls, text) => { const e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; };
function yFactCard(){
  const f = yFact(), idx = yN.surprise_random.media.facts.findIndex(x => x.id === f.id);
  const c = yEl("div", "y-card fact"); c.id = "yfact"; c.style.setProperty("--c", ["var(--coral)", "var(--lav)", "var(--mustard)", "var(--mint)"][idx % 4]);
  c.append(yEl("span", "y-k", yT("y_fact") + " ✳"), yEl("h3", "", f.title[lang]), yEl("p", "", f.body[lang])); return c;
}
function yMedia(n){
  const m = n.media, out = [];
  if (!m) return out;
  if (m.type === "fact_deck") { if (!yFact()) yPickFact(); ySave(); out.push(yFactCard()); }
  if (m.type === "external_link") {
    const a = yEl("a", "y-card ext"); a.href = YCFG.seriesMusicUrl; a.target = "_blank"; a.rel = "noopener noreferrer";
    a.append(yEl("span", "y-k", "YouTube ↗"), yEl("span", "y-lbl", m.label[lang])); out.push(a);
  }
  return out;
}
function yProjects(id){
  const m = /^work_(ux|web|brand|all)_results$/.exec(id); if (!m) return null;
  const t = L(), box = yEl("div", "y-pjs"); box.setAttribute("role", "group"); box.setAttribute("aria-label", yT("y_projects"));
  YCAT[m[1]].forEach(k => {
    const i = PROJ.findIndex(p => p.key === k); if (i < 0 || PROJ[i].locked) return;   // locked projects are not offered as links
    const a = yEl("a", "y-pj"); a.href = "#project-" + k;
    const art = yEl("span", "art"); art.innerHTML = svgOf(k, 0); art.setAttribute("aria-hidden", "true");
    const tx = yEl("span", "tx"); tx.append(yEl("b", "", t.projects[i][0]), yEl("i", "", t.projects[i][1]));
    a.append(art, tx, yEl("span", "go", yT("y_view") + " →"));
    a.addEventListener("click", () => closeChat()); box.appendChild(a);
  });
  return box;
}
function ySummaryCard(){
  const c = yEl("div", "y-card sum"), dl = yEl("dl");
  c.append(yEl("span", "y-k", yT("y_recap")));
  yRows().forEach(([k, v]) => dl.append(yEl("dt", "", k), yEl("dd", "", v)));
  const b = yEl("button", "y-mini", yT("y_copy")); b.type = "button"; b.addEventListener("click", yCopySummary);
  c.append(dl, b); return c;
}
function yParas(text){
  const sent = text.split(/(?<=[.!?…])\s+/), out = []; let cur = "";
  sent.forEach(x => { if (cur && (cur + " " + x).length > 170) { out.push(cur); cur = x; } else cur = cur ? cur + " " + x : x; });
  if (cur) out.push(cur); return out;
}
function yRender(focus){
  const log = $("#clog"); if (!log) return;
  if (yN[Y.node].requires && !yEligible()) { Y.node = "contact_choice"; ySave(); }
  const n = yN[Y.node], cp = yCopy(n);
  const sub = $("#chatSub"); if (sub) sub.textContent = YODIS_DATA.assistantDescription[lang];
  $("#yback").disabled = !Y.hist.length;
  log.textContent = "";
  const turn = yEl("div", "y-turn"); turn.id = "yturn"; turn.tabIndex = -1;
  yParas(cp.message).forEach(t => turn.append(yEl("p", "y-msg", t)));
  yMedia(n).forEach(x => turn.append(x));
  const pj = yProjects(Y.node); if (pj) turn.append(pj);
  if (Y.node === "project_summary" || Y.node === "review") turn.append(ySummaryCard());
  const q = yEl("p", "y-q", cp.question); q.id = "yq"; turn.append(q);
  const opts = yOptions(Y.node), box = yEl("div", "y-opts" + (opts.length > 4 ? " grid" : "")); box.setAttribute("role", "group"); box.setAttribute("aria-labelledby", "yq");
  let primary = false;
  opts.forEach((o, i) => {
    const ext = /↗/.test(o.label[lang]), cls = ext ? (primary ? " go2" : " go") : ""; if (ext) primary = true;
    const b = yEl("button", "y-opt" + cls, o.label[lang]); b.type = "button"; b.style.setProperty("--i", i);
    b.addEventListener("click", () => yGo(o.id)); box.appendChild(b);
  });
  log.append(turn, box);
  const note = yEl("p", "y-note", yNote); note.id = "ynote"; note.hidden = !yNote; log.append(note);
  if (Y.hist.length) {
    const d = yEl("details", "yhist"), s = yEl("summary", "", yT("y_hist") + " (" + Y.hist.length + ")"), ol = yEl("ol");
    Y.hist.slice(-12).forEach(h => { const nd = yN[h.nodeId], o = nd.options.find(x => x.id === h.optionId); ol.append(yEl("li", "", (yCopy(nd).question) + " → " + (o ? o.label[lang] : ""))); });
    d.append(s, ol); log.append(d);
  }
  log.scrollTop = 0;
  if (focus && $("#chat").classList.contains("open")) turn.focus({ preventScroll:true });
}
window.yodisRender = () => yRender(false);

/* open / close / wiring */
const chatEl = () => $("#chat"), cbtn = () => $("#chatbtn");
function openChat(){ chatEl().classList.add("open"); cbtn().setAttribute("aria-expanded", "true"); setTimeout(() => { const t = $("#yturn"); if (t) t.focus({ preventScroll:true }); }, 180); }
function closeChat(){ const was = chatEl().classList.contains("open"); chatEl().classList.remove("open"); cbtn().setAttribute("aria-expanded", "false"); if (was && chatEl().contains(document.activeElement)) { try { cbtn().focus({ preventScroll:true }); } catch(e){} } }
function wireChat(){
  cbtn().addEventListener("click", () => chatEl().classList.contains("open") ? closeChat() : openChat());
  $("#chatx").addEventListener("click", closeChat);
  $("#yback").addEventListener("click", yBack);
  $("#yrestart").addEventListener("click", yRestart);
  document.addEventListener("keydown", e => { if (e.key === "Escape" && chatEl().classList.contains("open") && !dlg().open) closeChat(); });
  $$(".chat-foot [data-open-form]").forEach(b => b.addEventListener("click", () => { closeChat(); }));
}
yLoad(); wireChat(); yRender(false);
