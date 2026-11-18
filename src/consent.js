/* Cookie consent + Google Analytics gate (GA4 G-W3V7MB7SZ7, Consent Mode v2).
   - gtag.js is NOT downloaded until the visitor accepts: before any choice and after "Reject" nothing is requested from Google.
   - window.gtag is a gate: without consent, "event" commands are dropped (not queued, so nothing is replayed later); with consent they are sent
     with a clean page_location (origin + path, no query or hash) and without values that look like an email or a phone number.
   - Withdrawing consent takes effect at once: events stop, Google's own opt-out flag is raised, consent is updated to "denied" and the _ga cookies of this site are deleted.
   Only on the production hostname is the Google script loaded, so previews and tests don't pollute the data. Choice kept in localStorage ("af-consent").
   Accept and Reject have the same weight. Anyone can reopen it from the footer / legal page ([data-cookie-settings]). */
(function(){
  var KEY = "af-consent";
  var LEGAL = { es:"/legal/#cookies", en:"/en/legal/#cookies", fr:"/fr/mentions-legales/#cookies" };
  var TX = {
    es:{ l:"Cookies", p:"Uso cookies de analítica (Google Analytics) para saber cómo se usa la web, pero solo si lo aceptas. Las necesarias para que la web funcione no requieren consentimiento.", a:"Aceptar", r:"Rechazar", m:"Política de cookies" },
    en:{ l:"Cookies", p:"I use analytics cookies (Google Analytics) to understand how the site is used, but only if you accept. Cookies strictly needed for the site to work don't need consent.", a:"Accept", r:"Reject", m:"Cookie policy" },
    fr:{ l:"Cookies", p:"J'utilise des cookies de mesure d'audience (Google Analytics) pour comprendre l'usage du site, mais seulement si vous acceptez. Les cookies nécessaires au fonctionnement du site ne demandent pas de consentement.", a:"Accepter", r:"Refuser", m:"Politique de cookies" }
  };
  function get(){ try { return localStorage.getItem(KEY); } catch(e){ return null; } }
  function put(v){ try { localStorage.setItem(KEY, v); } catch(e){} }
  var GA_ID = "G-W3V7MB7SZ7", gaOn = false, ok = false, lastPV = "", ref = "";
  var GA_COOKIES = ["_ga", "_ga_W3V7MB7SZ7"];
  window.dataLayer = window.dataLayer || [];
  window["ga-disable-" + GA_ID] = true;   /* Google's own opt-out flag: nothing is measured until consent */
  function push(){ window.dataLayer.push(arguments); }
  function clean(u){ try { var x = new URL(u, location.href); return x.origin + x.pathname; } catch(e){ return ""; } }
  function scrub(v){ return typeof v === "string" ? (/@|\d{7,}/.test(v) ? "[redacted]" : v.slice(0, 100)) : v; }
  window.gtag = function(){
    var a = arguments;
    if (a[0] !== "event"){ window.dataLayer.push(a); return; }
    if (!ok) return;   /* no consent: the event is neither sent nor queued */
    var p = {}, src = a[2] || {}, k, here = clean(location.href);
    for (k in src) if (Object.prototype.hasOwnProperty.call(src, k)) p[k] = scrub(src[k]);
    if (a[1] === "page_view"){ if (here === lastPV) return; lastPV = here; }
    p.page_location = here; if (ref) p.page_referrer = ref;
    push("event", a[1], p);
    if (a[1] === "page_view"){ push("set", { page_location: here, page_referrer: ref || undefined }); ref = here; }
  };
  function delCookie(n){
    var h = location.hostname.split("."), ds = ["", ";domain=" + location.hostname], i;
    for (i = 0; i < h.length - 1; i++) ds.push(";domain=." + h.slice(i).join("."));
    ds.forEach(function(d){ document.cookie = n + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/" + d; });
  }
  function loadGA(){
    if (gaOn || !/^(www\.)?tomfabre\.com$/.test(location.hostname)) return;
    gaOn = true; var s = document.createElement("script"); s.async = true; s.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_ID; document.head.appendChild(s);
  }
  /* live = the visitor has just chosen (not a saved choice read on load) */
  function apply(v, live){
    var g = v === "granted";
    ok = g; window["ga-disable-" + GA_ID] = !g;
    push("consent", "update", { analytics_storage: g ? "granted" : "denied" });
    if (g){
      loadGA();
      if (live) window.gtag("event", "page_view", { page_title: document.title, page_language: document.documentElement.lang });   /* first page view goes out already "granted" */
    } else { lastPV = ""; ref = document.referrer ? clean(document.referrer) : ""; GA_COOKIES.forEach(delCookie); }
  }
  ref = document.referrer ? clean(document.referrer) : "";
  push("consent", "default", { ad_storage:"denied", ad_user_data:"denied", ad_personalization:"denied", analytics_storage:"denied", wait_for_update:500 });
  function lang(){ var l = (document.documentElement.lang || "es").slice(0,2); return TX[l] ? l : "es"; }
  var box = null;
  function render(){
    if (!box) return; var l = lang(), t = TX[l];
    box.setAttribute("aria-label", t.l);
    box.innerHTML = '<p>' + t.p + ' <a href="' + LEGAL[l] + '">' + t.m + '</a></p><div class="cc-b"><button type="button" data-cc="denied">' + t.r + '</button><button type="button" data-cc="granted">' + t.a + '</button></div>';
  }
  function show(){
    if (!box){ box = document.createElement("div"); box.className = "cc"; box.setAttribute("role", "region"); document.body.appendChild(box);
      box.addEventListener("click", function(e){ var b = e.target.closest && e.target.closest("[data-cc]"); if (!b) return; put(b.dataset.cc); apply(b.dataset.cc, true); hide(); }); }
    render(); box.hidden = false;
  }
  function hide(){ if (box) box.hidden = true; }
  var saved = get(); if (saved) apply(saved, false);
  push("js", new Date());
  push("config", GA_ID, { send_page_view:false, allow_google_signals:false, allow_ad_personalization_signals:false, page_location: clean(location.href) });
  window.addEventListener("storage", function(e){ if (e.key === KEY && e.newValue) apply(e.newValue, true); });   /* another tab: same effect at once */
  document.addEventListener("DOMContentLoaded", function(){
    if (!saved) show();
    document.addEventListener("click", function(e){ var s = e.target.closest && e.target.closest("[data-cookie-settings]"); if (s){ e.preventDefault(); show(); var f = box.querySelector("button"); if (f) f.focus(); } });
    new MutationObserver(render).observe(document.documentElement, { attributes:true, attributeFilter:["lang"] });
  });
})();
