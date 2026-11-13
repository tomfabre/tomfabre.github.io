/* ---------- SEO: per-route head ---------- */
function setMeta(sel, attr, val){ const el = document.querySelector(sel); if (el) el.setAttribute(attr, val); }
function updateHead(r){
{ const ll = document.getElementById("legalLink"); if (ll) ll.href = LEGAL_URL[lang] || "/legal/"; }
  const s = SEO[lang] || SEO.es, key = r && r.page === "service" ? "svc_" + r.key : (r && r.page || "home");
  let title, desc;
  if (key === "project"){
    const i = PROJ.findIndex(p => p.key === r.key), p = L().projects[i];
    if (p){ title = p[0] + " · " + s.name + " · " + p[1]; desc = p[3]; }
  } else { title = s[key + "_t"]; desc = s[key + "_d"]; }
  if (!title) return;
  document.title = title;
  setMeta('meta[name="description"]', "content", desc);
  setMeta('meta[property="og:title"]', "content", title); setMeta('meta[property="og:description"]', "content", desc);
  setMeta('meta[name="twitter:title"]', "content", title); setMeta('meta[name="twitter:description"]', "content", desc);
  setMeta('meta[property="og:locale"]', "content", s.locale);
  if (PATHS){
    const rr = r || route_, cn = document.querySelector('link[rel="canonical"]'); if (!cn) return;
    const base = new URL(cn.href).origin; cn.href = base + urlFor(rr);
    setMeta('meta[property="og:url"]', "content", base + urlFor(rr));
    document.querySelectorAll('link[rel="alternate"][hreflang]').forEach(l => { const g = l.getAttribute("hreflang"); l.href = base + urlFor(rr, g === "x-default" ? "es" : g); });
  }
}
let _pvUrl = "";
function sendPageView(){ const u = location.origin + location.pathname + location.search; if (u === _pvUrl) return; _pvUrl = u; try { if (typeof gtag === "function") gtag("event", "page_view", { page_location: u, page_title: document.title, page_language: document.documentElement.lang }); } catch(e){} }
function syncH1(){ const act = document.querySelector(".page:not([hidden])"); document.querySelectorAll(".page").forEach(pg => { const on = pg === act; pg.querySelectorAll(on ? "h2[data-h1]" : "h1").forEach(h => { const n = document.createElement(on ? "h1" : "h2"); [...h.attributes].forEach(at => n.setAttribute(at.name, at.value)); n.setAttribute("data-h1", ""); while (h.firstChild) n.appendChild(h.firstChild); h.replaceWith(n); }); }); }
const _show = show; show = function(r){ _show(r); updateHead(r); syncH1(); setTimeout(sendPageView, 0); };
syncH1(); setTimeout(sendPageView, 0);   // first page view of the visit
const LEGAL_URL = { es:"/legal/", en:"/en/legal/", fr:"/fr/mentions-legales/" };
const _applyLang = applyLang; applyLang = function(){ _applyLang.apply(this, arguments); updateHead(route_ || { page:"home" }); };
updateHead(route_ || parse());

/* ---------- WebMCP: imperative tools ---------- */
const TOPIC_IDS = ["brand","web","product","unsure","prize","collab"];
const LANGS = ["es","en","fr"];
const textOut = o => ({ content:[{ type:"text", text: typeof o === "string" ? o : JSON.stringify(o, null, 2) }] });
const pjOut = (i, lg) => { const p = T[lg].projects[i], d = PROJ[i]; return { slug:d.key, url: PATHS ? location.origin + urlFor({page:"project",key:d.key}, lg) : location.origin + location.pathname + "#project-" + d.key, name:p[0], category:p[1], context:p[2], summary:p[3], description:p[4], services:p[5], tagline:p[6] || "", role:d.role, period:d.years }; };
const pickLang = a => (a && LANGS.includes(a.language)) ? a.language : lang;
const WEBMCP_TOOLS = [
  { name:"get_portfolio_overview",
    description:"Get a short factual overview of Tom Fabre: who he is, what he does, where he is based, languages, studio and availability.",
    inputSchema:{ type:"object", properties:{ language:{ type:"string", enum:LANGS, description:"Language of the answer (es, en or fr). Defaults to the current page language." } }, additionalProperties:false },
    annotations:{ readOnlyHint:true },
    execute: a => { const lg = pickLang(a), t = T[lg]; return textOut({ name:"Tom Fabre", role:t.role_l, base:"Madrid, Spain", studio:{ name:"Binōme Studio", url:"https://binome.xyz" }, languages:["Español","Français","English"], availability:t.avail, services:t.hs_items.map(x => x[0]), email:EMAIL, projectsCount:PROJ.length }); } },
  { name:"list_projects",
    description:"List all portfolio projects with slug, name, category and one-line summary.",
    inputSchema:{ type:"object", properties:{ language:{ type:"string", enum:LANGS, description:"Language of the answer. Defaults to the current page language." } }, additionalProperties:false },
    annotations:{ readOnlyHint:true },
    execute: a => { const lg = pickLang(a); return textOut(PROJ.map((_, i) => { const o = pjOut(i, lg); return { slug:o.slug, name:o.name, category:o.category, summary:o.summary, url:o.url }; })); } },
  { name:"get_project",
    description:"Get full details of one portfolio project by slug: category, context, role, services, description and period.",
    inputSchema:{ type:"object", properties:{ slug:{ type:"string", enum:PROJ.map(p => p.key), description:"Project identifier from list_projects." }, language:{ type:"string", enum:LANGS, description:"Language of the answer." } }, required:["slug"], additionalProperties:false },
    annotations:{ readOnlyHint:true },
    execute: a => { const i = PROJ.findIndex(p => p.key === (a && a.slug)); if (i < 0) return { content:[{ type:"text", text:"Unknown project slug." }], isError:true }; return textOut(pjOut(i, pickLang(a))); } },
  { name:"get_contact_info",
    description:"Get the public contact details and profile links of Tom Fabre.",
    inputSchema:{ type:"object", properties:{}, additionalProperties:false },
    annotations:{ readOnlyHint:true },
    execute: () => textOut({ email:EMAIL, location:"Madrid, Spain", studio:"https://binome.xyz", profiles:SOCIALS.map(([n,,u]) => ({ name:n, url:u })) }) },
  { name:"navigate_to",
    description:"Navigate the page to a section of the portfolio or to a specific project.",
    inputSchema:{ type:"object", properties:{ destination:{ type:"string", enum:["home","projects","services","bio","contact"], description:"Section to open." }, project:{ type:"string", enum:PROJ.map(p => p.key), description:"Optional project slug; overrides destination." } }, additionalProperties:false },
    execute: a => { const h = a && a.project ? "project-" + a.project : (a && a.destination) || "home"; goHash(h); return textOut("Navigated to " + location.pathname + location.hash); } },
  { name:"set_language",
    description:"Switch the page language.",
    inputSchema:{ type:"object", properties:{ language:{ type:"string", enum:LANGS, description:"Language code." } }, required:["language"], additionalProperties:false },
    execute: a => { if (!a || !LANGS.includes(a.language)) return { content:[{ type:"text", text:"Unsupported language." }], isError:true }; setLang(a.language); return textOut("Language set to " + a.language); } },
  { name:"set_theme",
    description:"Switch the page color theme.",
    inputSchema:{ type:"object", properties:{ theme:{ type:"string", enum:["light","dark","system"], description:"Theme preference." } }, required:["theme"], additionalProperties:false },
    execute: a => { if (!a || !["light","dark","system"].includes(a.theme)) return { content:[{ type:"text", text:"Unsupported theme." }], isError:true }; themePref = a.theme; store.set("af-theme", themePref); applyTheme(); return textOut("Theme set to " + a.theme); } },
  { name:"prepare_contact_message",
    description:"Open the contact form pre-filled with a message for Tom. The visitor reviews it and sends it themselves; nothing is sent automatically.",
    inputSchema:{ type:"object", properties:{ name:{ type:"string", description:"Sender name." }, email:{ type:"string", description:"Sender email address." }, topic:{ type:"string", enum:TOPIC_IDS, description:"brand = branding & identity, web = web design & development, product = digital product & UX/UI, unsure = not sure yet, collab = collaboration between studios/agencies/teams." }, message:{ type:"string", description:"Message for Tom." } }, required:["message"], additionalProperties:false },
    execute: a => { openForm(); a = a || {}; if (a.name) $("#fn").value = String(a.name).slice(0,120); if (a.email) $("#fe").value = String(a.email).slice(0,160); const ti = TOPIC_IDS.indexOf(a.topic); if (ti >= 0) $("#ft").selectedIndex = ti; if (a.message) $("#fm").value = String(a.message).slice(0,1500); return textOut("Contact form opened with the draft. The visitor must review and send it."); } }
];
function registerWebMCP(){
  const mc = navigator.modelContext; if (!mc || typeof mc.registerTool !== "function") return;
  WEBMCP_TOOLS.forEach(t => { try { mc.registerTool(t); } catch (e) { /* already registered or unsupported */ } });
}
registerWebMCP();
