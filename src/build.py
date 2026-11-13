#!/usr/bin/env python3
"""Build preview (index.html) and deploy pack (dist/). Usage: python3 build.py [--site https://tu-dominio.com]"""
import glob, json, subprocess, sys, os, re, shutil, datetime
SITE = "https://TU-DOMINIO.com"
if "--site" in sys.argv: SITE = sys.argv[sys.argv.index("--site")+1].rstrip("/")
DOMAIN = re.sub(r"^https?://", "", SITE)
HERE = os.path.dirname(os.path.abspath(__file__)); os.chdir(HERE)
JS = ["c1.js","c1b.js","c1x.js","c1y.js","c1z.js","c1w.js","c1v.js","c1p.js","c1s.js","c1t.js","c1l.js","c1k.js"]
# 1) data from JS (T, PROJ, SEO)
js = "\n".join(open(f).read() for f in JS) + "\n;globalThis.__out={T,PROJ,SEO,SECTIONS};"
open("/tmp/_d.js","w").write("const fs=require('fs'),vm=require('vm');const ctx={console};vm.createContext(ctx);vm.runInContext(fs.readFileSync('/tmp/_src.js','utf8').replace(/\\bconst /g,'var ').replace(/\\blet /g,'var '),ctx);fs.writeFileSync('/tmp/data.json',JSON.stringify(ctx.__out));")
open("/tmp/_src.js","w").write(js); subprocess.check_call(["node","/tmp/_d.js"])
D = json.load(open("/tmp/data.json")); T, PROJ = D["T"], D["PROJ"]
SECTIONS = D["SECTIONS"]
# strict validation of case-study sections / localized role / site link: any problem aborts the build before anything is written
import validate_sections
_errs = validate_sections.validate(SECTIONS, {p["key"] for p in PROJ}, lambda k, v: os.path.exists(f"img/{k}-{v}.webp"), PROJ)
if _errs: sys.exit("BUILD ABORTED: invalid project sections (c1k.js / c1p.js):\n  - " + "\n  - ".join(_errs))
rl = lambda d, lg: d["role"][lg] if isinstance(d["role"], dict) else d["role"]   # role may be a plain string or {es,en,fr}
SOC = {"Instagram":"https://www.instagram.com/tomfabre/","LinkedIn":"https://www.linkedin.com/in/tomfabreg/","Behance":"https://www.behance.net/afabre","LottieFiles":"https://lottiefiles.com/es/tomfabre","GitHub":"https://github.com/tomfabre"}
EMAIL = "hey@tomfabre.com"
today = datetime.date.today().isoformat()
es, en, fr = T["es"], T["en"], T["fr"]
PFX = {"es":"","en":"/en","fr":"/fr"}
SLG = {"es":{"projects":"proyectos","services":"servicios","bio":"bio","contact":"contacto"},"en":{"projects":"projects","services":"services","bio":"bio","contact":"contact"},"fr":{"projects":"projets","services":"services","bio":"bio","contact":"contact"}}
SSLG = {"es":{"branding":"branding","web":"diseno-web","ux":"diseno-ux-ui"},"en":{"branding":"branding","web":"web-design","ux":"ux-ui-design"},"fr":{"branding":"branding","web":"design-web","ux":"design-ux-ui"}}
SKEYS = ["branding","web","ux"]
PSVC = {"contazara":["branding","web"],"carceral":["web"],"a2pas":["branding","web"],"happylife":["ux"],"binome":["branding","web"],"yaypegs":["ux"],"360estudio":["branding","web"],"figy":["ux"],"apolo":["ux"],"appy":["ux"],"mood":["ux"],"molyb":["ux"]}
def path(lg, page="home", key=None):
    if page == "home": return PFX[lg] + "/"
    if page == "project": return f"{PFX[lg]}/{SLG[lg]['projects']}/{key}/"
    if page == "service": return f"{PFX[lg]}/{SLG[lg]['services']}/{SSLG[lg][key]}/"
    return f"{PFX[lg]}/{SLG[lg][page]}/"
def U(lg, page="home", key=None): return SITE + path(lg, page, key)
def pj(lang, i): p = T[lang]["projects"][i]; d = PROJ[i]; return dict(slug=d["key"], name=p[0], category=p[1], context=p[2], summary=p[3], description=p[4], services=p[5], tagline=p[6] if len(p)>6 else "", role=rl(d, lang), period=d["years"], url=U(lang,"project",d["key"]), **({"story":validate_sections.flatten(SECTIONS[d["key"]], lang)} if d["key"] in SECTIONS else {}))
# 2) JSON-LD (only facts that are visible on the page; nothing invented: no ratings, reviews, employee counts or addresses beyond the city)
HS = lambda lg: T[lg]["hs_items"]
PERSON_ID, ORG_ID, SITE_ID = f"{SITE}/#person", f"{SITE}/#binome", f"{SITE}/#website"
person = {"@type":"Person","@id":PERSON_ID,"name":"Tom Fabre","alternateName":"Álvaro Fabre","jobTitle":"Branding, web and product designer","description":D["SEO"]["en"]["home_d"],"url":f"{SITE}/","email":EMAIL,
  "homeLocation":{"@type":"Place","name":"Madrid, Spain"},"knowsLanguage":["es","en","fr"],
  "knowsAbout":["Branding","Brand identity","Web design","Web development","UX/UI design","Product design","Design systems","Art direction","Webflow"],
  "sameAs":list(SOC.values()),"owns":{"@id":ORG_ID}}
person.pop("owns")
org = {"@type":"Organization","@id":ORG_ID,"name":"Binōme Studio","url":"https://binome.xyz","founder":{"@id":PERSON_ID}}
site = {"@type":"WebSite","@id":SITE_ID,"url":f"{SITE}/","name":"Tom Fabre","inLanguage":["es","en","fr"],"publisher":{"@id":PERSON_ID}}
def svc_node(lg, k):
    i = SKEYS.index(k); n = HS(lg)[i]
    return {"@type":"Service","@id":f"{SITE}/#service-{k}-{lg}","name":n[0],"serviceType":HS("en")[i][0],"description":n[2],"url":U(lg,"service",k),"inLanguage":lg,
            "provider":{"@id":PERSON_ID},"areaServed":"Madrid, Spain (collaboration worldwide, remote)"}
def faq_node(lg, items, url):
    return {"@type":"FAQPage","@id":url+"#faq","url":url,"inLanguage":lg,"mainEntity":[{"@type":"Question","name":q,"acceptedAnswer":{"@type":"Answer","text":a}} for q,a in items]}
def ld(lg, r):
    page, key = r; S = D["SEO"][lg]; t = T[lg]; url = U(lg, page, key)
    title, desc = meta_for(lg, page, key)
    g = [site, person, org]
    if page == "home":
        g.append(faq_node(lg, t["hf_items"], url))
    elif page == "projects":
        its = [{"@type":"ListItem","position":i+1,"url":U(lg,"project",PROJ[i]["key"]),"name":pj(lg,i)["name"]} for i in range(len(PROJ))]
        g.append({"@type":"CollectionPage","@id":url+"#page","url":url,"name":title,"description":desc,"inLanguage":lg,"isPartOf":{"@id":SITE_ID},"mainEntity":{"@type":"ItemList","numberOfItems":len(its),"itemListElement":its}})
    elif page == "services":
        g.append({"@type":"CollectionPage","@id":url+"#page","url":url,"name":title,"description":desc,"inLanguage":lg,"isPartOf":{"@id":SITE_ID},"mainEntity":{"@type":"ItemList","itemListElement":[{"@type":"ListItem","position":i+1,"url":U(lg,"service",k),"name":HS(lg)[i][0]} for i,k in enumerate(SKEYS)]}})
        g += [svc_node(lg,k) for k in SKEYS]
    elif page == "service":
        g.append(svc_node(lg,key)); g.append(faq_node(lg, t["sp"][key]["faq"], url))
    elif page == "bio":
        g.append({"@type":"ProfilePage","@id":url+"#page","url":url,"name":title,"description":desc,"inLanguage":lg,"isPartOf":{"@id":SITE_ID},"mainEntity":{"@id":PERSON_ID}})
    elif page == "contact":
        g.append({"@type":"ContactPage","@id":url+"#page","url":url,"name":title,"description":desc,"inLanguage":lg,"isPartOf":{"@id":SITE_ID},"about":{"@id":PERSON_ID}})
    elif page == "project":
        i = [q["key"] for q in PROJ].index(key); p = pj(lg,i)
        g.append({"@type":"CreativeWork","@id":url+"#work","url":url,"name":p["name"],"description":p["summary"],"genre":p["category"],"inLanguage":lg,"creator":{"@id":PERSON_ID},"isPartOf":{"@id":SITE_ID}})
    if page != "home":
        home = ("Inicio" if lg=="es" else ("Accueil" if lg=="fr" else "Home"))
        crumbs = [(home, U(lg))]
        if page == "project": crumbs += [(t["n_work"], U(lg,"projects")), (pj(lg,[q["key"] for q in PROJ].index(key))["name"], url)]
        elif page == "service": crumbs += [(t["n_services"], U(lg,"services")), (HS(lg)[SKEYS.index(key)][0], url)]
        else: crumbs.append((t["n_"+{"projects":"work","services":"services","bio":"bio","contact":"contact"}[page]], url))
        g.append({"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":k+1,"name":n,"item":u} for k,(n,u) in enumerate(crumbs)]})
    return '<script type="application/ld+json">'+json.dumps({"@context":"https://schema.org","@graph":g},ensure_ascii=False,separators=(",",":"))+'</script>'
ld_tag = '<script type="application/ld+json">{"@context":"https://schema.org","@graph":[]}</script>'  # replaced per page in page_html()
# 3) assemble html
a = open("a.html").read().replace("<!--JSONLD-->", ld_tag).replace("%%SITE%%", SITE)
b = open("b.html").read()
# c1s.js must precede c3; c2 doesn't need SEO
open("yodis-data.js","w").write("const YODIS_DATA = " + json.dumps(json.load(open("conversations.json")), ensure_ascii=False) + ";")
body_js = "\n".join(open(f).read() for f in ["c1.js","c1b.js","c1x.js","c1y.js","c1z.js","c1w.js","c1v.js","c1p.js","c1s.js","c1q.js","c1r.js","c1t.js","c1l.js","c1k.js","yodis-data.js","c2.js","c4.js","c3.js"])
import base64, io
from PIL import Image
def imgjs(mode):
    out = {}
    for f in sorted(glob.glob("img/*.webp")):
        k, v = os.path.basename(f)[:-5].rsplit("-", 1)
        if mode == "url": out.setdefault(k, {})[v] = "/img/" + os.path.basename(f)
        else:
            im = Image.open(f); im.thumbnail((1000 if v == "0" else 1500, 1500)); bio = io.BytesIO(); im.save(bio, "WEBP", quality=72)
            out.setdefault(k, {})[v] = "data:image/webp;base64," + base64.b64encode(bio.getvalue()).decode()
    return "window.__IMG=" + json.dumps(out) + ";\n"
IMGTOKEN = "/*IMG*/"
def _min(src, loader):
    """Minify with esbuild when available (set ESBUILD=/path/to/esbuild); otherwise keep the source as is."""
    exe = os.environ.get("ESBUILD") or shutil.which("esbuild")
    if not exe: return src
    r = subprocess.run([exe, "--minify", "--loader=" + loader], input=src, capture_output=True, text=True)
    return r.stdout if r.returncode == 0 and r.stdout.strip() else src
a = re.sub(r"(<style>)(.*?)(</style>)", lambda m: m.group(1) + _min(m.group(2), "css") + m.group(3), a, flags=re.S)
body_js = _min(body_js, "js")
CONSENT_JS = _min(open("consent.js", encoding="utf8").read(), "js")
a = a.replace("/*CONSENT*/", CONSENT_JS)
html = a + "<!--BODY-->" + b + "<!--/BODY-->" + "<script>\n" + IMGTOKEN + body_js + "\n</script>\n"
open("index.html","w").write(html.replace(IMGTOKEN, imgjs("data")).replace("<!--BODY-->","").replace("<!--/BODY-->",""))
# 4) deploy pack
dist = "dist"; shutil.rmtree(dist, ignore_errors=True); os.makedirs(dist+"/.well-known")
LOCALE = {"es":"es_ES","en":"en_GB","fr":"fr_FR"}
ROUTES = [("home",None),("projects",None),("services",None)] + [("service",k) for k in SKEYS] + [("bio",None),("contact",None)] + [("project",p["key"]) for p in PROJ]
def meta_for(lg, page, key):
    S = D["SEO"][lg]
    if page == "project":
        if key in S.get("proj", {}): return S["proj"][key]["t"], S["proj"][key]["d"]   # explicit per-project override (c1k.js)
        p = T[lg]["projects"][[q["key"] for q in PROJ].index(key)]
        return p[0] + " · " + S["name"] + " · " + p[1], p[3]
    if page == "service": return S["svc_"+key+"_t"], S["svc_"+key+"_d"]
    return S[page+"_t"], S[page+"_d"]
OG_W, OG_H = 1200, 630
# ---- Social images (single source of truth) -------------------------------------------------------------------------
# Priority: 1) explicit image of the page (SEO[lg].proj[key].og = {src, alt})  2) the project's own cover (img/<key>-cover.webp,
# derived to 1200x630 without distortion)  3) language fallback og-default-{lg}.jpg (official files, served untouched from extras/).
# A Spanish image is never used as fallback for an English or French page. New projects get 2) automatically if img/<key>-cover.webp exists.
OG_ALT_COVER = {"es": "Portada del proyecto {n} · {c}", "en": "Cover of the {n} project · {c}", "fr": "Couverture du projet {n} · {c}"}
OG_ALT_DEFAULT = {
    "es": "Tom Fabre · Diseñador de marca y producto digital. Branding, diseño web, UX/UI y estrategia digital",
    "en": "Tom Fabre · Brand & Digital Product Designer. Branding, web design, UX/UI and digital strategy",
    "fr": "Tom Fabre · Designer de marque et de produit digital. Branding, design web, UX/UI et stratégie digitale"}
_ogsz = {}
def _size(fp):
    if fp not in _ogsz: _ogsz[fp] = Image.open(fp).size
    return _ogsz[fp]
def og_variant_ok(src):
    """True if img/<src>.webp exists and opens as an image large enough to derive a 1200x630 variant without upscaling distortion."""
    try: w, h = _size(f"img/{src}.webp") if os.path.exists(f"img/{src}.webp") else (0, 0)
    except Exception: return False
    return w >= 600 and h >= 315
def _proj_idx(key): return [q["key"] for q in PROJ].index(key)
# Projects whose cover must NOT be used as social image (explicit exception; the visible project is untouched). Remove the key once it has a final cover.
OG_FALLBACK_PROJECTS = {"carceral": "provisional cover (\"in progress\"): use the language fallback until a final cover exists"}
import hashlib
def _ver(path, salt=""):
    """Cache-busting version: content hash of the source file. It changes whenever the image changes, so platforms re-fetch it."""
    return hashlib.md5(open(path, "rb").read() + salt.encode()).hexdigest()[:8]
def og_for(lg, page, key=None):
    """-> dict(kind, url, file, alt, w, h). kind: explicit | cover | fallback. url carries ?v=<content hash>."""
    if page == "project":
        o = (D["SEO"][lg].get("proj", {}).get(key) or {}).get("og")
        if o:
            f = f"img/og/{o['src']}-{OG_W}x{OG_H}.jpg"
            return dict(kind="explicit", url=f"{SITE}/{f}?v={_ver('img/' + o['src'] + '.webp', 'og1')}", file=f, alt=o["alt"], w=OG_W, h=OG_H, src=o["src"])
        if key not in OG_FALLBACK_PROJECTS and og_variant_ok(key + "-cover"):
            p = T[lg]["projects"][_proj_idx(key)]; f = f"img/og/{key}-cover-{OG_W}x{OG_H}.jpg"
            return dict(kind="cover", url=f"{SITE}/{f}?v={_ver('img/' + key + '-cover.webp', 'og1')}", file=f,
                        alt=OG_ALT_COVER[lg].format(n=p[0], c=p[1]), w=OG_W, h=OG_H, src=key + "-cover")
    fn = f"og-default-{lg}.jpg"; w, h = _size("extras/" + fn)
    return dict(kind="fallback", url=f"{SITE}/{fn}?v={_ver('extras/' + fn)}", file=fn, alt=OG_ALT_DEFAULT[lg], w=w, h=h)
# Runtime sync (c3.js updateHead): only the data comes from og_for, so the logic stays in one place.
_ogi = {lg: {"fb": [(lambda o: [o["url"], o["alt"], o["w"], o["h"]])(og_for(lg, "home"))],
             "p": {q["key"]: [o["url"], o["alt"], o["w"], o["h"]] for q in PROJ for o in [og_for(lg, "project", q["key"])] if o["kind"] != "fallback"}} for lg in ("es","en","fr")}
for _lg in _ogi: _ogi[_lg]["fb"] = _ogi[_lg]["fb"][0]
_n = 0
for _q in ('"%%OGI%%"', "'%%OGI%%'"):
    _n += html.count(_q); html = html.replace(_q, json.dumps(_ogi, ensure_ascii=False, separators=(",", ":")))
assert _n == 1, "OGI placeholder not found exactly once in the generated script"
def og_tags(o, e=lambda x: x):
    u = o["url"]; mime = "image/jpeg"
    return (f'<meta property="og:image" content="{u}"><meta property="og:image:secure_url" content="{u}"><meta property="og:image:type" content="{mime}">'
            f'<meta property="og:image:width" content="{o["w"]}"><meta property="og:image:height" content="{o["h"]}"><meta property="og:image:alt" content="{e(o["alt"])}">'
            f'<meta name="twitter:image" content="{u}"><meta name="twitter:image:alt" content="{e(o["alt"])}">')
def social_for(lg, page, key, title, desc):
    """Social title/description: the page's own, unless SEO[lg].social["page"] / ["page:key"] = {t, d} overrides them."""
    s = (D["SEO"][lg].get("social") or {}).get(page + (":" + key if key else "")) or {}
    return s.get("t") or title, s.get("d") or desc
def sub1(pat, rep, h): 
    n = re.subn(pat, lambda m: rep, h, count=1); assert n[1] == 1, pat; return n[0]
def page_html(lg, page, key):
    title, desc = meta_for(lg, page, key); e = lambda x: x.replace("&","&amp;").replace('"',"&quot;").replace("<","&lt;")
    h = html.replace(IMGTOKEN, imgjs("url"))
    h = re.sub(r'<script type="application/ld\+json">.*?</script>', lambda m: ld(lg,(page,key)), h, count=1, flags=re.S)
    h = sub1(r"<title>.*?</title>", f"<title>{e(title)}</title>", h)
    h = sub1(r'<meta name="description" content="[^"]*">', f'<meta name="description" content="{e(desc)}">', h)
    st, sd = social_for(lg, page, key, title, desc)
    h = sub1(r'<meta property="og:title" content="[^"]*">', f'<meta property="og:title" content="{e(st)}">', h)
    h = sub1(r'<meta property="og:description" content="[^"]*">', f'<meta property="og:description" content="{e(sd)}">', h)
    h = sub1(r'<meta name="twitter:title" content="[^"]*">', f'<meta name="twitter:title" content="{e(st)}">', h)
    h = sub1(r'<meta name="twitter:description" content="[^"]*">', f'<meta name="twitter:description" content="{e(sd)}">', h)
    h = sub1(r'<meta property="og:url" content="[^"]*">', f'<meta property="og:url" content="{U(lg,page,key)}">', h)
    # every page gets the full image block from og_for (specific > cover > language fallback); the template's fixed Spanish image is always replaced
    h = sub1(r'<meta property="og:image:width" content="[^"]*">\n?', "", h)
    h = sub1(r'<meta property="og:image:height" content="[^"]*">\n?', "", h)
    h = sub1(r'<meta property="og:image:alt" content="[^"]*">\n?', "", h)
    h = sub1(r'<meta name="twitter:image" content="[^"]*">\n?', "", h)
    h = sub1(r'<meta property="og:image" content="[^"]*">', og_tags(og_for(lg, page, key), e), h)
    h = sub1(r'<meta property="og:locale" content="[^"]*">', f'<meta property="og:locale" content="{LOCALE[lg]}">', h)
    h = re.sub(r'<meta property="og:locale:alternate" content="[^"]*">\n?', "", h)
    alts = "".join(f'<meta property="og:locale:alternate" content="{LOCALE[o]}">' for o in ("es","en","fr") if o != lg)
    hre = "".join(f'<link rel="alternate" hreflang="{o}" href="{U(o,page,key)}">' for o in ("es","en","fr")) + f'<link rel="alternate" hreflang="x-default" href="{U("es",page,key)}">'
    h = sub1(r'<link rel="canonical" href="[^"]*">', f'<link rel="canonical" href="{U(lg,page,key)}">{hre}<meta name="af-paths" content="1"><link rel="ard" href="/.well-known/ard.json">{alts}', h)
    h = h.replace('href="cv-alvaro-fabre.pdf"','href="/cv-alvaro-fabre.pdf"').replace('cvUrl:"cv-alvaro-fabre.pdf"','cvUrl:"/cv-alvaro-fabre.pdf"')
    return f'<!doctype html>\n<html lang="{lg}">\n<meta charset="utf-8">\n' + h
npages = 0
for lg in ("es","en","fr"):
    for page, key in ROUTES:
        out = dist + path(lg, page, key) + "index.html"; os.makedirs(os.path.dirname(out), exist_ok=True)
        open(out, "w").write(page_html(lg, page, key)); npages += 1
open(dist+"/404.html","w").write('<!doctype html><html lang="es"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>404 · Tom Fabre</title><style>body{margin:0;min-height:100vh;display:grid;place-items:center;font-family:Outfit,system-ui,sans-serif;background:#FDF9F0;color:#2C2C2C;padding:20px;text-align:center}h1{font-size:clamp(4rem,14vw,9rem);margin:0;font-weight:600;letter-spacing:-.03em}p{font-size:1.1rem;font-weight:300}a{display:inline-block;margin:.4rem .5rem;padding:.8rem 1.4rem;border:1px solid currentColor;border-radius:999px;color:inherit;text-decoration:none}@media(prefers-color-scheme:dark){body{background:#222;color:#FDF9F0}}</style><main><h1>404</h1><p>Esta página no existe · This page does not exist · Cette page n\'existe pas</p><a href="/">Inicio</a><a href="/en/">Home</a><a href="/fr/">Accueil</a></main>')
shutil.copy("cv-alvaro-fabre.pdf", dist+"/cv-alvaro-fabre.pdf")
# portfolio.json
pf = {"name":"Tom Fabre","jobTitle":"Product & Brand Designer","location":"Madrid, Spain","studio":{"name":"Binōme Studio","url":"https://binome.xyz"},"languages":["es","fr","en"],"email":EMAIL,"profiles":[{"name":k,"url":v} for k,v in SOC.items()],"cv":f"{SITE}/cv-alvaro-fabre.pdf","updated":today,
  "services":{l:[{"name":s[0],"tagline":s[1],"summary":s[2],"scope":s[3],"url":U(l,"service",SKEYS[i])} for i,s in enumerate(T[l]["hs_items"])] for l in ("es","en","fr")},
  "faq":{l:[{"question":q,"answer":a} for q,a in T[l]["hf_items"]] for l in ("es","en","fr")},
  "projects":{l:[pj(l,i) for i in range(len(PROJ))] for l in ("es","en","fr")}}
open(dist+"/portfolio.json","w").write(json.dumps(pf,ensure_ascii=False,indent=2))
# llms.txt (llmstxt.org format)
L=[]; L.append("# Tom Fabre"); L.append("")
L.append("> Tom Fabre is a product and brand designer based in Madrid and co-founder of Binōme Studio. He designs brands, websites and digital products (branding, web design, UX/UI, strategy) with more than ten years of experience between Latin America and Europe. He works in Spanish, French and English and is available for new projects.")
L.append(""); L.append("The portfolio has real URLs per language: Spanish at the root, English under /en/ and French under /fr/. Each project below links to its detail page. Full text of every project in all three languages is in llms-full.txt; structured data is in portfolio.json.")
L.append(""); L.append("## About"); L.append("")
L.append(f"- [Bio]({U("en","bio")}): Background, way of working, quick facts and personal links.")
L.append(f"- [Contact]({U("en","contact")}): Email {EMAIL}, contact form and profile links.")
L.append(f"- [CV (PDF)]({SITE}/cv-alvaro-fabre.pdf): Curriculum vitae.")
L.append(""); L.append("## Projects"); L.append("")
for i in range(len(PROJ)):
    p=pj("en",i); L.append(f"- [{p['name']}]({p['url']}): {p['category']}. {p['summary']}")
L.append(""); L.append("## Services"); L.append("")
L.append(f"- [Services overview]({U('en','services')}): {en['sp']['idx']['h1']}")
for i,s in enumerate(en["hs_items"]): L.append(f"- [{s[0]}]({U('en','service',SKEYS[i])}): {s[1]} {s[2]}")
L.append(""); L.append("## Optional"); L.append("")
L.append(f"- [Full content]({SITE}/llms-full.txt): Complete portfolio text in Spanish, English and French.")
L.append(f"- [Portfolio data (JSON)]({SITE}/portfolio.json): Projects, services and profile links as structured data.")
L.append(f"- [AI resource catalog]({SITE}/.well-known/ard.json): Machine-readable index of resources for agents.")
L.append(f"- [Binōme Studio](https://binome.xyz): The design studio Álvaro co-founded in Madrid.")
open(dist+"/llms.txt","w").write("\n".join(L)+"\n")
# llms-full.txt
F=["# Tom Fabre — full portfolio content",""," > Product and brand designer in Madrid, co-founder of Binōme Studio. Spanish, French and English.","",f"Site: {SITE}/ · Email: {EMAIL} · Updated: {today}",""]
names={"es":"Español","en":"English","fr":"Français"}
for l in ("en","es","fr"):
    t=T[l]; F.append(f"## {names[l]}"); F.append("")
    F.append(f"### {t['bi_eyebrow']} — {t['bi_h']}"); F.append(""); F.append(t["bi_p1"]); F.append(""); F.append(t["bi_p2"]); F.append("")
    F.append("### Services" if l!="es" else "### Servicios"); F.append("")
    for i,s in enumerate(t["hs_items"]):
        sp = t["sp"][SKEYS[i]]
        F.append(f"#### {s[0]} — {sp['h1']}"); F.append(f"URL: {U(l,'service',SKEYS[i])}"); F.append(s[1]); F.append(""); F.append(sp["intro"]); F.append("")
        for b in sp["blocks"]:
            F.append(f"##### {b['h']}"); 
            if b.get("t"): F.append(b["t"])
            if b.get("list"): F.append("; ".join(b["list"]) + ".")
            F.append("")
        for q,a in sp["faq"]: F.append(f"Q: {q}"); F.append(f"A: {a}"); F.append("")
    F.append("### FAQ" if l!="fr" else "### FAQ"); F.append("")
    for q,a in t["hf_items"]: F.append(f"Q: {q}"); F.append(f"A: {a}"); F.append("")
    F.append("### Projects" if l!="es" else "### Proyectos"); F.append("")
    for i in range(len(PROJ)):
        p=pj(l,i); F.append(f"#### {p['name']} — {p['category']}"); F.append(f"URL: {p['url']}"); F.append(f"{p['tagline']}"); F.append(""); F.append(f"{p['summary']}"); F.append(""); F.append(p["description"]); F.append(f"Services: {p['services']} · Role: {p['role']} · Context: {p['context']}"); F.append("")
        for sc in p.get("story", []):
            F.append(f"##### {sc['label']} — {sc['heading']}" if sc["heading"] != sc["label"] else f"##### {sc['label']}"); F.append("")
            for tx in sc["text"]: F.append(tx); F.append("")
    F.append(f"### {t['quote'] if 'quote' in t else t['ab_quote']}"); F.append("")
open(dist+"/llms-full.txt","w").write("\n".join(F)+"\n")
# ai-catalog.json
cat = {"specVersion":"1.0","host":{"displayName":"Tom Fabre","identifier":DOMAIN},"entries":[
 {"identifier":f"urn:air:{DOMAIN}:knowledge:llms-txt","displayName":"Tom Fabre — llms.txt","type":"text/plain","url":f"{SITE}/llms.txt","description":"Curated index of Tom Fabre's portfolio for AI agents: profile, projects, services and contact.","representativeQueries":["Who is Tom Fabre and what does he design?","What services does Tom Fabre offer?"]},
 {"identifier":f"urn:air:{DOMAIN}:knowledge:llms-full-txt","displayName":"Tom Fabre — full content","type":"text/plain","url":f"{SITE}/llms-full.txt","description":"Complete portfolio text in Spanish, English and French.","representativeQueries":["Show all of Tom Fabre's projects with details","Tom Fabre portfolio full text in Spanish, English and French"]},
 {"identifier":f"urn:air:{DOMAIN}:data:portfolio","displayName":"Tom Fabre — portfolio data","type":"application/json","url":f"{SITE}/portfolio.json","description":"Structured JSON with profile, services and all projects in three languages.","representativeQueries":["Structured data about Tom Fabre's projects and services","Which projects has Tom Fabre worked on?"]},
 {"identifier":f"urn:air:{DOMAIN}:data:sitemap","displayName":"Sitemap","type":"application/xml","url":f"{SITE}/sitemap.xml","description":"XML sitemap of the site.","representativeQueries":["List every page of tomfabre.com","Which language versions does tomfabre.com have?"]}]}
for _n in ("ard.json","ai-catalog.json"): open(dist+"/.well-known/"+_n,"w").write(json.dumps(cat,ensure_ascii=False,indent=2))
# robots, sitemap, favicon, manifest
bots=["GPTBot","OAI-SearchBot","ChatGPT-User","ClaudeBot","Claude-User","Claude-SearchBot","anthropic-ai","PerplexityBot","Perplexity-User","Google-Extended","Applebot-Extended","Bingbot","Googlebot","CCBot","Amazonbot","Meta-ExternalAgent","DuckAssistBot"]
r="# Tom Fabre — AI and search crawlers are welcome\nUser-agent: *\nAllow: /\n\n"+"".join(f"User-agent: {b}\nAllow: /\n\n" for b in bots)+f"Sitemap: {SITE}/sitemap.xml\n"
open(dist+"/robots.txt","w").write(r)
def sm_url(lg,page,key,pr):
    al = "".join(f'<xhtml:link rel="alternate" hreflang="{o}" href="{U(o,page,key)}"/>' for o in ("es","en","fr")) + f'<xhtml:link rel="alternate" hreflang="x-default" href="{U("es",page,key)}"/>'
    return f"  <url><loc>{U(lg,page,key)}</loc><priority>{pr}</priority>{al}</url>\n"
smx = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n'
for lg in ("es","en","fr"):
    for page, key in ROUTES: smx += sm_url(lg,page,key,{"home":"1.0","projects":"0.9","services":"0.9","service":"0.9","bio":"0.7","contact":"0.7"}.get(page,"0.8"))
import legal
_css = "".join(re.findall(r"<style>(.*?)</style>", html, flags=re.S))
for _lg in ("es","en","fr"):
    _p = dist + "/" + legal.PATHS[_lg]; os.makedirs(_p, exist_ok=True)
    open(_p + "/index.html", "w", encoding="utf8").write(legal.render(_lg, SITE, EMAIL, _css, CONSENT_JS, og_html=og_tags(og_for(_lg, 'legal'), lambda x: x.replace('&','&amp;').replace('"','&quot;').replace('<','&lt;'))))
    _alts = "".join(f'<xhtml:link rel="alternate" hreflang="{o}" href="{SITE}/{legal.PATHS[o]}/"/>' for o in ("es","en","fr")) + f'<xhtml:link rel="alternate" hreflang="x-default" href="{SITE}/{legal.PATHS["es"]}/"/>'
    smx += f"  <url><loc>{SITE}/{legal.PATHS[_lg]}/</loc>{_alts}<priority>0.2</priority></url>\n"
if not legal.CFG["id"]: print("WARNING: legal.json has no ID (NIE) yet: do not publish the legal pages")
for f in ("cv-alvaro-fabre.pdf","llms.txt","portfolio.json"): smx += f"  <url><loc>{SITE}/{f}</loc><priority>0.3</priority></url>\n"
open(dist+"/sitemap.xml","w").write(smx + "</urlset>\n")
open(dist+"/favicon.svg","w").write('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 197 197"><style>.m{fill:#2C2C2C}@media (prefers-color-scheme:dark){.m{fill:#FDF9F0}}</style><g class="m"><path d="M74.4922 143.792L74.4922 196.043H121.542V162.007C121.542 160.627 120.704 159.366 119.375 158.749L80.1675 140.534C77.5602 139.323 74.4922 141.085 74.4922 143.792Z"/><path d="M0 0V43.7115H74.4949V87.539C74.4949 90.2459 77.5629 92.008 80.1702 90.7969L119.378 72.5815C120.706 71.9645 121.544 70.7033 121.544 69.3236V43.7115H196.039V0H0Z"/><path d="M101.893 119.741L158.398 145.993C161.658 147.507 165.493 145.305 165.493 141.92V89.416C165.493 86.0307 161.658 83.8292 158.398 85.3431L101.893 111.595C98.2806 113.273 98.2806 118.063 101.893 119.741Z"/></g></svg>')
open(dist+"/manifest.webmanifest","w").write(json.dumps({"name":"Tom Fabre","short_name":"Tom Fabre","start_url":"/","display":"browser","background_color":"#FDF9F0","theme_color":"#FDF9F0","icons":[{"src":"/favicon.svg","sizes":"any","type":"image/svg+xml"}]},ensure_ascii=False,indent=2))
open(dist+"/_headers","w").write("/*\n  X-Content-Type-Options: nosniff\n  Referrer-Policy: strict-origin-when-cross-origin\n  Permissions-Policy: camera=(), microphone=(), geolocation=()\n\n/llms.txt\n  Content-Type: text/plain; charset=utf-8\n/llms-full.txt\n  Content-Type: text/plain; charset=utf-8\n/.well-known/ai-catalog.json\n  Content-Type: application/json; charset=utf-8\n  Access-Control-Allow-Origin: *\n/portfolio.json\n  Content-Type: application/json; charset=utf-8\n  Access-Control-Allow-Origin: *\n/*.pdf\n  Cache-Control: public, max-age=86400\n")
print("built", SITE, len(html), npages, "pages")

shutil.copytree("img", dist + "/img");
# social images derived from covers / explicit sources: centre-crop to 1200x630 (no stretching), regenerated every build so they cannot drift from the cover
os.makedirs(dist + "/img/og", exist_ok=True)
_srcs = sorted({o["src"] for _lg in ("es","en","fr") for _pg, _k in ROUTES for o in [og_for(_lg, _pg, _k)] if o["kind"] != "fallback"})
for _s in _srcs:
    _im = Image.open(f"img/{_s}.webp").convert("RGB"); _w, _h = _im.size; _r = OG_W / OG_H
    _cw, _ch = (int(round(_h * _r)), _h) if _w / _h > _r else (_w, int(round(_w / _r)))
    _x, _y = (_w - _cw) // 2, (_h - _ch) // 2
    _im.crop((_x, _y, _x + _cw, _y + _ch)).resize((OG_W, OG_H), Image.LANCZOS).save(f"{dist}/img/og/{_s}-{OG_W}x{OG_H}.jpg", "JPEG", quality=88, optimize=True, progressive=True)
for _lg in ("es","en","fr"): shutil.copy(f"extras/og-default-{_lg}.jpg", f"{dist}/og-default-{_lg}.jpg")   # official files, byte-identical

# post-build social-metadata check on EVERY page (app pages + legal): abort (never ship silently) on any mismatch; prints a report
import html as _H
_bad, _rep = [], []
_pages = [(_lg, _pg, _k, dist + path(_lg, _pg, _k) + "index.html", U(_lg, _pg, _k), og_for(_lg, _pg, _k)) for _lg in ("es","en","fr") for _pg, _k in ROUTES]
_pages += [(_lg, "legal", None, dist + "/" + legal.PATHS[_lg] + "/index.html", f"{SITE}/{legal.PATHS[_lg]}/", og_for(_lg, "legal")) for _lg in ("es","en","fr")]
for _lg, _pg, _k, _f, _can_u, _og in _pages:
    if not os.path.exists(_f): _bad.append(f"{_f}: page file missing"); continue
    _t = open(_f, encoding="utf8").read(); _head = _t[:_t.find("<body")]; _u = _og["url"]
    _fp = dist + "/" + _og["file"]
    if not _u.startswith("https://"): _bad.append(f"{_f}: og:image is not an absolute https URL")
    if not re.fullmatch(re.escape(f"{SITE}/{_og['file']}") + r"\?v=[0-9a-f]{8}", _u): _bad.append(f"{_f}: og url must be {SITE}/{_og['file']}?v=<hash>")
    if not os.path.exists(_fp): _bad.append(f"{_f}: image file missing {_fp}")
    else:
        try: _real = Image.open(_fp).size
        except Exception as _x: _bad.append(f"{_f}: image unreadable {_fp}: {_x}"); _real = None
        if _real and _real != (_og["w"], _og["h"]): _bad.append(f"{_f}: declared {_og['w']}x{_og['h']} but file is {_real}")
        if _real and _real != (OG_W, OG_H): _bad.append(f"{_f}: social image must be {OG_W}x{OG_H}, file is {_real}")
    def _one(attr, name):
        m = re.findall(r'<meta %s="%s" content="([^"]*)">' % (attr, re.escape(name)), _head)
        if len(m) != 1: _bad.append(f"{_f}: {name} appears {len(m)} times (expected 1)"); return None
        if not m[0].strip(): _bad.append(f"{_f}: {name} is empty"); return None
        return _H.unescape(m[0])
    _v = {n: _one("property", n) for n in ("og:type","og:site_name","og:title","og:description","og:url","og:image","og:image:secure_url","og:image:width","og:image:height","og:image:alt","og:image:type","og:locale")}
    _v.update({n: _one("name", n) for n in ("twitter:card","twitter:title","twitter:description","twitter:image","twitter:image:alt","description","robots")})
    _can = re.findall(r'<link rel="canonical" href="([^"]*)">', _head); _ti = re.findall(r"<title>(.*?)</title>", _head, re.S)
    if len(_ti) != 1 or not _H.unescape(_ti[0]).strip(): _bad.append(f"{_f}: missing/duplicated/empty <title>")
    if _can != [_can_u]: _bad.append(f"{_f}: canonical {_can} != {_can_u}")
    if _v["og:url"] != _can_u: _bad.append(f"{_f}: og:url differs from canonical")
    if _v["twitter:card"] != "summary_large_image": _bad.append(f"{_f}: twitter:card is {_v['twitter:card']}")
    if _v["og:locale"] != LOCALE[_lg]: _bad.append(f"{_f}: og:locale {_v['og:locale']} != {LOCALE[_lg]}")
    if _v["og:title"] != _v["twitter:title"]: _bad.append(f"{_f}: og:title / twitter:title differ")
    if _v["og:description"] != _v["twitter:description"]: _bad.append(f"{_f}: og:description / twitter:description differ")
    if _pg != "legal" and not (_ti and _H.unescape(_ti[0]) == _v["og:title"] or social_for(_lg, _pg, _k, "", "")[0]): _bad.append(f"{_f}: title / og:title differ")
    if _pg != "legal" and _v["og:description"] != _v["description"] and not social_for(_lg, _pg, _k, "", "")[1]: _bad.append(f"{_f}: description / og:description differ")
    if not (_v["og:image"] == _v["og:image:secure_url"] == _v["twitter:image"] == _u): _bad.append(f"{_f}: og:image / secure_url / twitter:image differ")
    if _v["og:image:alt"] != _v["twitter:image:alt"]: _bad.append(f"{_f}: og/twitter image alt differ")
    if (_v["og:image:width"], _v["og:image:height"]) != (str(_og["w"]), str(_og["h"])): _bad.append(f"{_f}: declared og:image size differs")
    if _og["kind"] == "fallback" and _og["file"] != f"og-default-{_lg}.jpg": _bad.append(f"{_f}: wrong-language fallback image")
    if re.findall(r'<html lang="(\w+)"', _t) != [_lg]: _bad.append(f"{_f}: wrong html lang")
    _hl = dict(re.findall(r'<link rel="alternate" hreflang="(\w[\w-]*)" href="([^"]*)"', _head))
    if _pg == "legal": _exp = {**{o: f"{SITE}/{legal.PATHS[o]}/" for o in ("es","en","fr")}, "x-default": f"{SITE}/{legal.PATHS['es']}/"}
    else: _exp = {**{o: U(o,_pg,_k) for o in ("es","en","fr")}, "x-default": U("es",_pg,_k)}
    if _hl != _exp: _bad.append(f"{_f}: hreflang inconsistent {_hl}")
    _rep.append((_lg, _pg, _k, _og["kind"], _og["file"], _v["og:title"]))
if _bad: sys.exit("BUILD ABORTED: social metadata problems:\n  " + "\n  ".join(_bad))
json.dump([dict(lang=a, page=b, key=c, image_kind=d, image=e_, title=f_) for a, b, c, d, e_, f_ in _rep], open(os.environ.get("OG_REPORT", "/tmp/og-report.json"), "w"), ensure_ascii=False, indent=1)
_cnt = {}
for r in _rep: _cnt[(r[0], r[3])] = _cnt.get((r[0], r[3]), 0) + 1
print("social metadata OK:", len(_rep), "pages |", ", ".join(f"{l}/{k}={n}" for (l, k), n in sorted(_cnt.items())))
shutil.copytree("fonts", dist + "/fonts"); open(dist + "/.nojekyll", "w").close()
if not SITE.endswith("github.io"): open(dist + "/CNAME", "w").write(SITE.split("//")[-1] + "\n")   # GitHub Pages custom domain
for f in glob.glob("extras/*"): shutil.copy(f, dist + "/" + f.split("/")[-1])

# 5) prerender (needs node + playwright). Skip with --no-prerender for quick previews; never deploy a dist without it.
if "--no-prerender" not in sys.argv:
    rep = os.environ.get("PRERENDER_REPORT", "/tmp/prerender-report.json")
    subprocess.check_call(["node", "prerender.js", dist, rep])
