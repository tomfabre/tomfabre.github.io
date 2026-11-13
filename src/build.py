#!/usr/bin/env python3
"""Build preview (index.html) and deploy pack (dist/). Usage: python3 build.py [--site https://tu-dominio.com]"""
import glob, json, subprocess, sys, os, re, shutil, datetime
SITE = "https://TU-DOMINIO.com"
if "--site" in sys.argv: SITE = sys.argv[sys.argv.index("--site")+1].rstrip("/")
DOMAIN = re.sub(r"^https?://", "", SITE)
HERE = os.path.dirname(os.path.abspath(__file__)); os.chdir(HERE)
JS = ["c1.js","c1b.js","c1x.js","c1y.js","c1z.js","c1w.js","c1v.js","c1p.js","c1s.js"]
# 1) data from JS (T, PROJ, SEO)
js = "\n".join(open(f).read() for f in JS) + "\n;globalThis.__out={T,PROJ,SEO};"
open("/tmp/_d.js","w").write("const fs=require('fs'),vm=require('vm');const ctx={console};vm.createContext(ctx);vm.runInContext(fs.readFileSync('/tmp/_src.js','utf8').replace(/\\bconst /g,'var ').replace(/\\blet /g,'var '),ctx);fs.writeFileSync('/tmp/data.json',JSON.stringify(ctx.__out));")
open("/tmp/_src.js","w").write(js); subprocess.check_call(["node","/tmp/_d.js"])
D = json.load(open("/tmp/data.json")); T, PROJ = D["T"], D["PROJ"]
SOC = {"Instagram":"https://www.instagram.com/tomfabre/","LinkedIn":"https://www.linkedin.com/in/tomfabreg/","Behance":"https://www.behance.net/afabre","LottieFiles":"https://lottiefiles.com/es/tomfabre","GitHub":"https://github.com/tomfabre"}
EMAIL = "hola@tomfabre.com"
today = datetime.date.today().isoformat()
es, en, fr = T["es"], T["en"], T["fr"]
PFX = {"es":"","en":"/en","fr":"/fr"}
SLG = {"es":{"projects":"proyectos","bio":"bio","contact":"contacto"},"en":{"projects":"projects","bio":"bio","contact":"contact"},"fr":{"projects":"projets","bio":"bio","contact":"contact"}}
def path(lg, page="home", key=None):
    if page == "home": return PFX[lg] + "/"
    if page == "project": return f"{PFX[lg]}/{SLG[lg]['projects']}/{key}/"
    return f"{PFX[lg]}/{SLG[lg][page]}/"
def U(lg, page="home", key=None): return SITE + path(lg, page, key)
def pj(lang, i): p = T[lang]["projects"][i]; d = PROJ[i]; return dict(slug=d["key"], name=p[0], category=p[1], context=p[2], summary=p[3], description=p[4], services=p[5], tagline=p[6] if len(p)>6 else "", role=d["role"], period=d["years"], url=U(lang,"project",d["key"]))
# 2) JSON-LD
person = {"@type":"Person","@id":f"{SITE}/#person","name":"Tom Fabre","alternateName":["Tom Fabre","Alvaro Fabre"],"jobTitle":"Product & Brand Designer","description":SEO_ES if (SEO_ES:=D["SEO"]["en"]["home_d"]) else "","url":f"{SITE}/","email":EMAIL,
  "address":{"@type":"PostalAddress","addressLocality":"Madrid","addressCountry":"ES"},"homeLocation":{"@type":"Place","name":"Madrid","geo":{"@type":"GeoCoordinates","latitude":40.4168,"longitude":-3.7038}},
  "worksFor":{"@id":f"{SITE}/#binome"},"knowsLanguage":["es","fr","en"],
  "knowsAbout":["Branding","Brand identity","Web design","UX/UI design","Product design","Design systems","Art direction","Prototyping","Accessibility","Webflow"],
  "sameAs":list(SOC.values())+["https://binome.xyz"],
  "hasOfferCatalog":{"@type":"OfferCatalog","name":"Services","itemListElement":[{"@type":"Offer","itemOffered":{"@type":"Service","name":s[0],"description":s[1]}} for s in en["svc"]]}}
org = {"@type":"Organization","@id":f"{SITE}/#binome","name":"Binōme Studio","url":"https://binome.xyz","founder":{"@id":f"{SITE}/#person"},"address":{"@type":"PostalAddress","addressLocality":"Madrid","addressCountry":"ES"},"description":"Digital design studio in Madrid: web design, branding, UX/UI and motion."}
site = {"@type":"WebSite","@id":f"{SITE}/#website","url":f"{SITE}/","name":"Tom Fabre","inLanguage":["es","en","fr"],"publisher":{"@id":f"{SITE}/#person"}}
prof = {"@type":"ProfilePage","@id":f"{SITE}/#profile","isPartOf":{"@id":f"{SITE}/#website"},"mainEntity":{"@id":f"{SITE}/#person"},"dateModified":today}
def ld(lg, r):
    pr = dict(prof, url=U(lg), inLanguage=lg, name=D["SEO"][lg]["home_t"], description=D["SEO"][lg]["home_d"])
    its = [{"@type":"ListItem","position":i+1,"item":{"@type":"CreativeWork","@id":f"{SITE}/#project-{PROJ[i]['key']}","name":pj(lg,i)["name"],"description":pj(lg,i)["summary"],"url":U(lg,"project",PROJ[i]['key']),"genre":pj(lg,i)["category"],"creator":{"@id":f"{SITE}/#person"},"inLanguage":lg}} for i in range(len(PROJ))]
    pl = {"@type":"ItemList","@id":f"{SITE}/#projects","name":"Projects","numberOfItems":len(its),"itemListElement":its}
    g = [site, person, org, pr, pl]
    if r[0] != "home":
        crumbs = [("Home" if lg!="es" else "Inicio", U(lg))]
        if r[0] == "project": crumbs += [(T[lg]["n_work"], U(lg,"projects")), (T[lg]["projects"][[p["key"] for p in PROJ].index(r[1])][0], U(lg,"project",r[1]))]
        else: crumbs.append((T[lg]["n_"+{"projects":"work","bio":"bio","contact":"contact"}[r[0]]], U(lg,r[0])))
        g.append({"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":k+1,"name":n,"item":u} for k,(n,u) in enumerate(crumbs)]})
    return '<script type="application/ld+json">'+json.dumps({"@context":"https://schema.org","@graph":g},ensure_ascii=False,separators=(",",":"))+'</script>'
ld_tag = ld("es",("home",))
# 3) assemble html
a = open("a.html").read().replace("<!--JSONLD-->", ld_tag).replace("%%SITE%%", SITE)
b = open("b.html").read()
body_js = "\n".join(open(f).read() for f in JS[:-1]) + "\n" + open("c2.js").read() + "\n" + open("c3.js").read()
# c1s.js must precede c3; c2 doesn't need SEO
open("yodis-data.js","w").write("const YODIS_DATA = " + json.dumps(json.load(open("conversations.json")), ensure_ascii=False) + ";")
body_js = "\n".join(open(f).read() for f in ["c1.js","c1b.js","c1x.js","c1y.js","c1z.js","c1w.js","c1v.js","c1p.js","c1s.js","c1q.js","c1r.js","yodis-data.js","c2.js","c4.js","c3.js"])
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
html = a + b + "<script>\n" + IMGTOKEN + body_js + "\n</script>\n"
open("index.html","w").write(html.replace(IMGTOKEN, imgjs("data")))
# 4) deploy pack
dist = "dist"; shutil.rmtree(dist, ignore_errors=True); os.makedirs(dist+"/.well-known")
LOCALE = {"es":"es_ES","en":"en_GB","fr":"fr_FR"}
ROUTES = [("home",None),("projects",None),("bio",None),("contact",None)] + [("project",p["key"]) for p in PROJ]
def meta_for(lg, page, key):
    S = D["SEO"][lg]
    if page == "project":
        p = T[lg]["projects"][[q["key"] for q in PROJ].index(key)]
        return p[0] + " · " + S["name"] + " · " + p[1], p[3]
    return S[page+"_t"], S[page+"_d"]
def sub1(pat, rep, h): 
    n = re.subn(pat, lambda m: rep, h, count=1); assert n[1] == 1, pat; return n[0]
def page_html(lg, page, key):
    title, desc = meta_for(lg, page, key); e = lambda x: x.replace("&","&amp;").replace('"',"&quot;").replace("<","&lt;")
    h = html.replace(IMGTOKEN, imgjs("url"))
    h = re.sub(r'<script type="application/ld\+json">.*?</script>', lambda m: ld(lg,(page,key)), h, count=1, flags=re.S)
    h = sub1(r"<title>.*?</title>", f"<title>{e(title)}</title>", h)
    h = sub1(r'<meta name="description" content="[^"]*">', f'<meta name="description" content="{e(desc)}">', h)
    h = sub1(r'<meta property="og:title" content="[^"]*">', f'<meta property="og:title" content="{e(title)}">', h)
    h = sub1(r'<meta property="og:description" content="[^"]*">', f'<meta property="og:description" content="{e(desc)}">', h)
    h = sub1(r'<meta name="twitter:title" content="[^"]*">', f'<meta name="twitter:title" content="{e(title)}">', h)
    h = sub1(r'<meta name="twitter:description" content="[^"]*">', f'<meta name="twitter:description" content="{e(desc)}">', h)
    h = sub1(r'<meta property="og:url" content="[^"]*">', f'<meta property="og:url" content="{U(lg,page,key)}">', h)
    h = sub1(r'<meta property="og:locale" content="[^"]*">', f'<meta property="og:locale" content="{LOCALE[lg]}">', h)
    h = re.sub(r'<meta property="og:locale:alternate" content="[^"]*">\n?', "", h)
    alts = "".join(f'<meta property="og:locale:alternate" content="{LOCALE[o]}">' for o in ("es","en","fr") if o != lg)
    hre = "".join(f'<link rel="alternate" hreflang="{o}" href="{U(o,page,key)}">' for o in ("es","en","fr")) + f'<link rel="alternate" hreflang="x-default" href="{U("es",page,key)}">'
    h = sub1(r'<link rel="canonical" href="[^"]*">', f'<link rel="canonical" href="{U(lg,page,key)}">{hre}<meta name="af-paths" content="1">{alts}', h)
    h = h.replace('href="cv-alvaro-fabre.pdf"','href="/cv-alvaro-fabre.pdf"').replace('cvUrl:"cv-alvaro-fabre.pdf"','cvUrl:"/cv-alvaro-fabre.pdf"')
    # no-JS content
    t = T[lg]; nav = "".join(f'<li><a href="{path(lg,pg)}">{t[k]}</a></li>' for pg,k in (("home","n_home"),("projects","n_work"),("bio","n_bio"),("contact","n_contact")))
    langs = "".join(f'<li><a href="{path(o,page,key)}" hreflang="{o}" lang="{o}">{ {"es":"Español","en":"English","fr":"Français"}[o] }</a></li>' for o in ("es","en","fr"))
    body = f"<h1>{e(title.split(' · ')[0])}</h1><p>{e(desc)}</p>"
    if page == "project":
        p = t["projects"][[q["key"] for q in PROJ].index(key)]; body += f"<p>{e(p[4])}</p><p>{e(p[5])}</p>"
    if page in ("home","projects"):
        body += "<ul>" + "".join(f'<li><a href="{path(lg,"project",q["key"])}">{e(t["projects"][i][0])}</a> — {e(t["projects"][i][1])}</li>' for i,q in enumerate(PROJ)) + "</ul>"
    body += f'<p><a href="mailto:{EMAIL}">{EMAIL}</a></p>'
    ns = f'<noscript><nav><ul>{nav}</ul><ul>{langs}</ul></nav><main>{body}</main></noscript>'
    h = h.replace('<a class="skip"', ns + '<a class="skip"', 1)
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
  "services":{l:[{"name":s[0],"tagline":s[1],"summary":s[2],"tags":s[4]} for s in T[l]["svc"]] for l in ("es","en","fr")},
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
for s in en["svc"]: L.append(f"- {s[0]}: {s[1]}")
L.append(""); L.append("## Optional"); L.append("")
L.append(f"- [Full content]({SITE}/llms-full.txt): Complete portfolio text in Spanish, English and French.")
L.append(f"- [Portfolio data (JSON)]({SITE}/portfolio.json): Projects, services and profile links as structured data.")
L.append(f"- [AI catalog]({SITE}/.well-known/ai-catalog.json): Machine-readable index of resources for agents.")
L.append(f"- [Binōme Studio](https://binome.xyz): The design studio Álvaro co-founded in Madrid.")
open(dist+"/llms.txt","w").write("\n".join(L)+"\n")
# llms-full.txt
F=["# Tom Fabre — full portfolio content",""," > Product and brand designer in Madrid, co-founder of Binōme Studio. Spanish, French and English.","",f"Site: {SITE}/ · Email: {EMAIL} · Updated: {today}",""]
names={"es":"Español","en":"English","fr":"Français"}
for l in ("en","es","fr"):
    t=T[l]; F.append(f"## {names[l]}"); F.append("")
    F.append(f"### {t['bi_eyebrow']} — {t['bi_h']}"); F.append(""); F.append(t["bi_p1"]); F.append(""); F.append(t["bi_p2"]); F.append("")
    F.append(f"### {t['stats_h'].replace(chr(10),' ')}"); F.append(""); F.append(t["stats_p"]); F.append("")
    for s in t["stats"]: F.append(f"- {s[0]} {s[1]}")
    F.append(""); F.append("### Services" if l=="en" else ("### Servicios" if l=="es" else "### Services")); F.append("")
    for s in t["svc"]: F.append(f"#### {s[0]}"); F.append(f"{s[1]}"); F.append(""); F.append(s[2]); F.append(""); F.append(s[3]); F.append(f"Tags: {s[4]}"); F.append("")
    F.append("### Projects" if l!="es" else "### Proyectos"); F.append("")
    for i in range(len(PROJ)):
        p=pj(l,i); F.append(f"#### {p['name']} — {p['category']}"); F.append(f"URL: {p['url']}"); F.append(f"{p['tagline']}"); F.append(""); F.append(f"{p['summary']}"); F.append(""); F.append(p["description"]); F.append(f"Services: {p['services']} · Role: {p['role']} · Context: {p['context']}"); F.append("")
    F.append(f"### {t['quote'] if 'quote' in t else t['ab_quote']}"); F.append("")
open(dist+"/llms-full.txt","w").write("\n".join(F)+"\n")
# ai-catalog.json
cat = {"specVersion":"1.0","host":{"displayName":"Tom Fabre","identifier":DOMAIN},"entries":[
 {"identifier":f"urn:ai:{DOMAIN}:knowledge:llms-txt","displayName":"Tom Fabre — llms.txt","type":"text/plain","url":f"{SITE}/llms.txt","description":"Curated index of Tom Fabre's portfolio for AI agents: profile, projects, services and contact."},
 {"identifier":f"urn:ai:{DOMAIN}:knowledge:llms-full-txt","displayName":"Tom Fabre — full content","type":"text/plain","url":f"{SITE}/llms-full.txt","description":"Complete portfolio text in Spanish, English and French."},
 {"identifier":f"urn:ai:{DOMAIN}:data:portfolio","displayName":"Tom Fabre — portfolio data","type":"application/json","url":f"{SITE}/portfolio.json","description":"Structured JSON with profile, services and all projects in three languages."},
 {"identifier":f"urn:ai:{DOMAIN}:data:sitemap","displayName":"Sitemap","type":"application/xml","url":f"{SITE}/sitemap.xml","description":"XML sitemap of the site."}]}
open(dist+"/.well-known/ai-catalog.json","w").write(json.dumps(cat,ensure_ascii=False,indent=2))
# robots, sitemap, favicon, manifest
bots=["GPTBot","OAI-SearchBot","ChatGPT-User","ClaudeBot","Claude-User","Claude-SearchBot","anthropic-ai","PerplexityBot","Perplexity-User","Google-Extended","Applebot-Extended","Bingbot","Googlebot","CCBot","Amazonbot","Meta-ExternalAgent","DuckAssistBot"]
r="# Tom Fabre — AI and search crawlers are welcome\nUser-agent: *\nAllow: /\n\n"+"".join(f"User-agent: {b}\nAllow: /\n\n" for b in bots)+f"Sitemap: {SITE}/sitemap.xml\n"
open(dist+"/robots.txt","w").write(r)
def sm_url(lg,page,key,pr):
    al = "".join(f'<xhtml:link rel="alternate" hreflang="{o}" href="{U(o,page,key)}"/>' for o in ("es","en","fr")) + f'<xhtml:link rel="alternate" hreflang="x-default" href="{U("es",page,key)}"/>'
    return f"  <url><loc>{U(lg,page,key)}</loc><lastmod>{today}</lastmod><priority>{pr}</priority>{al}</url>\n"
smx = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n'
for lg in ("es","en","fr"):
    for page, key in ROUTES: smx += sm_url(lg,page,key,{"home":"1.0","projects":"0.9","bio":"0.7","contact":"0.7"}.get(page,"0.8"))
for f in ("cv-alvaro-fabre.pdf","llms.txt","portfolio.json"): smx += f"  <url><loc>{SITE}/{f}</loc><lastmod>{today}</lastmod><priority>0.3</priority></url>\n"
open(dist+"/sitemap.xml","w").write(smx + "</urlset>\n")
open(dist+"/favicon.svg","w").write('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 260"><style>.b{fill:#2C2C2C}.m{fill:#FDF9F0}@media (prefers-color-scheme:dark){.b{fill:#FDF9F0}.m{fill:#2C2C2C}}</style><rect class="b" width="260" height="260" rx="30"/><g class="m"><path d="M106.492 180.792L106.492 233.043H153.542V199.007C153.542 197.627 152.704 196.366 151.375 195.749L112.168 177.534C109.56 176.323 106.492 178.085 106.492 180.792Z"/><path d="M32 37V80.7115H106.495V124.539C106.495 127.246 109.563 129.008 112.17 127.797L151.378 109.581C152.706 108.965 153.544 107.703 153.544 106.324V80.7115H228.039V37H32Z"/><path d="M133.893 156.741L190.398 182.993C193.658 184.507 197.493 182.305 197.493 178.92V126.416C197.493 123.031 193.658 120.829 190.398 122.343L133.893 148.595C130.281 150.273 130.281 155.063 133.893 156.741Z"/></g></svg>')
open(dist+"/manifest.webmanifest","w").write(json.dumps({"name":"Tom Fabre","short_name":"Tom Fabre","start_url":"/","display":"browser","background_color":"#FDF9F0","theme_color":"#FDF9F0","icons":[{"src":"/favicon.svg","sizes":"any","type":"image/svg+xml"}]},ensure_ascii=False,indent=2))
open(dist+"/_headers","w").write("/*\n  X-Content-Type-Options: nosniff\n  Referrer-Policy: strict-origin-when-cross-origin\n  Permissions-Policy: camera=(), microphone=(), geolocation=()\n\n/llms.txt\n  Content-Type: text/plain; charset=utf-8\n/llms-full.txt\n  Content-Type: text/plain; charset=utf-8\n/.well-known/ai-catalog.json\n  Content-Type: application/json; charset=utf-8\n  Access-Control-Allow-Origin: *\n/portfolio.json\n  Content-Type: application/json; charset=utf-8\n  Access-Control-Allow-Origin: *\n/*.pdf\n  Cache-Control: public, max-age=86400\n")
print("built", SITE, len(html), npages, "pages")

shutil.copytree("img", dist + "/img"); open(dist + "/.nojekyll", "w").close()
for f in glob.glob("extras/*"): shutil.copy(f, dist + "/" + f.split("/")[-1])
