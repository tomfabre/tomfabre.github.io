/* Cookie consent: Google Analytics only after the visitor accepts. Choice kept in localStorage ("af-consent").
   Accept and Reject have the same weight. Anyone can reopen it from the footer / legal page ([data-cookie-settings]). */
(function(){
  var KEY = "af-consent";
  var LEGAL = { es:"/legal/#cookies", en:"/en/legal/#cookies", fr:"/fr/mentions-legales/#cookies" };
  var TX = {
    es:{ l:"Cookies", p:"Uso cookies de analítica (Google Analytics) para saber cómo se usa la web, pero solo si lo aceptas. Las necesarias para que la web funcione no requieren consentimiento.", a:"Aceptar", r:"Rechazar", m:"Más información" },
    en:{ l:"Cookies", p:"I use analytics cookies (Google Analytics) to understand how the site is used, but only if you accept. Cookies strictly needed for the site to work don't need consent.", a:"Accept", r:"Reject", m:"More information" },
    fr:{ l:"Cookies", p:"J'utilise des cookies de mesure d'audience (Google Analytics) pour comprendre l'usage du site, mais seulement si vous acceptez. Les cookies nécessaires au fonctionnement du site ne demandent pas de consentement.", a:"Accepter", r:"Refuser", m:"En savoir plus" }
  };
  function get(){ try { return localStorage.getItem(KEY); } catch(e){ return null; } }
  function put(v){ try { localStorage.setItem(KEY, v); } catch(e){} }
  function apply(v){ if (typeof gtag === "function") gtag("consent", "update", { analytics_storage: v === "granted" ? "granted" : "denied" }); }
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
