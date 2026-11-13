/* Prerender: loads every built page in headless Chromium, takes the rendered DOM and writes it back into the static HTML,
   so crawlers and no-JS clients get the real headings, copy and links (one H1 per page). Inactive "pages" are kept in
   <template data-stash> and restored by a tiny inline script before the app script runs, so runtime behaviour is unchanged.
   Usage: node prerender.js <distDir> [reportFile] */
const fs = require("fs"), path = require("path"), http = require("http");
const { chromium } = require("playwright");
const DIST = path.resolve(process.argv[2] || "dist"), REPORT = process.argv[3];
const MIME = { ".html":"text/html; charset=utf-8", ".js":"text/javascript", ".json":"application/json", ".svg":"image/svg+xml", ".webp":"image/webp", ".png":"image/png", ".css":"text/css", ".txt":"text/plain", ".xml":"application/xml", ".pdf":"application/pdf", ".webmanifest":"application/manifest+json" };
function walk(d){ return fs.readdirSync(d, { withFileTypes:true }).flatMap(e => e.isDirectory() ? walk(path.join(d, e.name)) : [path.join(d, e.name)]); }
const pages = walk(DIST).filter(f => f.endsWith("index.html") && !/(\/legal\/|mentions-legales\/)index\.html$/.test(f.split(path.sep).join("/")) && !f.includes(path.sep + "img" + path.sep));
const server = http.createServer((req, res) => {
  let p = decodeURIComponent(req.url.split("?")[0]); if (p.endsWith("/")) p += "index.html";
  const f = path.join(DIST, p); if (!f.startsWith(DIST) || !fs.existsSync(f) || fs.statSync(f).isDirectory()){ res.writeHead(404); return res.end("404"); }
  res.writeHead(200, { "Content-Type": MIME[path.extname(f)] || "application/octet-stream" }); fs.createReadStream(f).pipe(res);
});
const RESTORE = '<script>document.querySelectorAll("template[data-stash]").forEach(function(t){t.replaceWith(t.content)})</script>';
const NOJS = '<noscript><style>.reveal,.reveal-x,.hero{opacity:1!important;transform:none!important}</style></noscript>';
(async () => {
  await new Promise(r => server.listen(0, "127.0.0.1", r)); const port = server.address().port;
  const browser = await chromium.launch(); const ctx = await browser.newContext({ viewport:{ width:1280, height:900 }, colorScheme:"light", reducedMotion:"reduce" });
  await ctx.route("**/*", route => { const u = route.request().url(); if (u.startsWith("http://127.0.0.1:" + port)) route.continue(); else route.abort(); });
  const report = []; let bad = 0;
  for (const file of pages){
    const rel = "/" + path.relative(DIST, file).split(path.sep).join("/"); const url = "http://127.0.0.1:" + port + rel.replace(/index\.html$/, "");
    const page = await ctx.newPage(); const errs = []; page.on("pageerror", e => errs.push(String(e))); page.on("console", m => { if (m.type() === "error" && !/Failed to load resource|net::ERR/.test(m.text())) errs.push(m.text()); });
    await page.goto(url, { waitUntil:"load" }); await page.waitForTimeout(350);
    const out = await page.evaluate(() => {
      const vis = h => !h.closest("template") && !h.closest("[hidden]");
      const hs = [...document.querySelectorAll("h1,h2,h3")].filter(vis);
      const h1 = [...document.querySelectorAll("h1")].filter(vis).map(h => h.textContent.replace(/\s+/g, " ").trim());
      const empty = hs.filter(h => !h.textContent.trim() && !h.getAttribute("aria-label")).map(h => h.tagName + "." + h.className);
      const body = document.body.cloneNode(true);
      body.querySelectorAll("script,#toast,.win-confetti i,#hmHint-x").forEach(n => n.remove());
      body.querySelectorAll(".in,.done,.hot").forEach(n => n.classList.remove("in", "done", "hot"));
      body.querySelectorAll(".cc").forEach(n => n.remove());
      body.querySelectorAll("[data-wired],[data-alt]").forEach(n => { n.removeAttribute("data-wired"); n.removeAttribute("data-alt"); });
      body.querySelectorAll("main > .page[hidden]").forEach(p => { const t = document.createElement("template"); t.setAttribute("data-stash", ""); t.content.appendChild(p.cloneNode(true)); p.replaceWith(t); });
      return { html: body.innerHTML, h1, empty, active: (document.querySelector("main > .page:not([hidden])") || {}).dataset?.page, title: document.title, canon: (document.querySelector('link[rel=canonical]') || {}).href, hre: document.querySelectorAll('link[rel=alternate][hreflang]').length, lang: document.documentElement.lang, links: [...document.querySelectorAll("a[href]")].filter(a => !a.closest("template")).length };
    });
    const src = fs.readFileSync(file, "utf8"); if (!/<!--BODY-->[\s\S]*<!--\/BODY-->/.test(src)) throw new Error("markers missing in " + rel);
    fs.writeFileSync(file, src.replace(/<!--BODY-->[\s\S]*<!--\/BODY-->/, () => NOJS + out.html + RESTORE));
    const ok = out.h1.length === 1 && out.h1[0].length > 3 && !out.empty.length && !errs.length;
    if (!ok) bad++;
    report.push({ page: rel, lang: out.lang, active: out.active, h1: out.h1, emptyHeadings: out.empty, errors: errs, title: out.title, canonical: out.canon, hreflang: out.hre, links: out.links, ok });
    await page.close();
  }
  await browser.close(); server.close();
  if (REPORT) fs.writeFileSync(REPORT, JSON.stringify(report, null, 1));
  console.log(`prerendered ${report.length} pages · ${bad} with problems`);
  report.filter(r => !r.ok).slice(0, 10).forEach(r => console.log("  !", r.page, JSON.stringify({ h1: r.h1, empty: r.emptyHeadings, errors: r.errors })));
  process.exit(bad ? 1 : 0);
})();
