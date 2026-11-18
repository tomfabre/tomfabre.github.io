/* Cookie consent: Google Analytics (gtag.js) is NOT downloaded until the visitor accepts: before any choice and after "Reject" nothing is requested from Google.
   Only on the production hostname, so previews and tests don't pollute the data. Choice kept in localStorage ("af-consent").
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
  var GA_ID = "G-W3V7MB7SZ7", gaOn = false;
  function loadGA(){
    if (gaOn || !/^(www\.)?tomfabre\.com$/.test(location.hostname)) return;
    gaOn = true; var s = document.createElement("script"); s.async = true; s.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_ID; document.head.appendChild(s);
  }
  function apply(v){
    if (typeof gtag === "function") gtag("consent", "update", { analytics_storage: v === "granted" ? "granted" : "denied" });
    if (v === "granted") loadGA();   /* only now is the Google script requested; consent is already "granted" in the dataLayer */
  }
  function lang(){ var l = (document.documentElement.lang || "es").slice(0,2); return TX[l] ? l : "es"; }
  var box = null;
  function render(){
    if (!box) return; var l = lang(), t = TX[l];
    box.setAttribute("aria-label", t.l);
    box.innerHTML = '<p>' + t.p + ' <a href="' + LEGAL[l] + '">' + t.m + '</a></p><div class="cc-b"><button type="button" data-cc="denied">' + t.r + '</button><button type="button" data-cc="granted">' + t.a + '</button></div>';
  }
  function show(){
    if (!box){ box = document.createElement("div"); box.className = "cc"; box.setAttribute("role", "region"); document.body.appendChild(box);
      box.addEventListener("click", function(e){ var b = e.target.closest && e.target.closest("[data-cc]"); if (!b) return; put(b.dataset.cc); apply(b.dataset.cc); hide(); }); }
    render(); box.hidden = false;
  }
  function hide(){ if (box) box.hidden = true; }
  var saved = get(); if (saved) apply(saved);
  document.addEventListener("DOMContentLoaded", function(){
    if (!saved) show();
    document.addEventListener("click", function(e){ var s = e.target.closest && e.target.closest("[data-cookie-settings]"); if (s){ e.preventDefault(); show(); var f = box.querySelector("button"); if (f) f.focus(); } });
    new MutationObserver(render).observe(document.documentElement, { attributes:true, attributeFilter:["lang"] });
  });
})();
