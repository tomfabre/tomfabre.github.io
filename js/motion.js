/* Capa de movimiento (mejora progresiva): Lenis + GSAP.
   Sin estas librerías, o con prefers-reduced-motion, la web usa el sistema CSS original (.reveal / .in).
   Regla de easing: nunca lineal; solo expo.out / power3.out. */
(function () {
  "use strict";
  var root = document.documentElement;
  var done = function () { root.classList.remove("js-mo"); };
  if (matchMedia("(prefers-reduced-motion: reduce)").matches || !window.gsap || !window.Lenis) return done();
  var fine = matchMedia("(hover:hover) and (pointer:fine)").matches;
  var EXPO = "expo.out", P3 = "power3.out";
  root.classList.add("mo");

  /* ---------- Lenis: scroll suave con curva exponencial, sincronizado con el ticker de GSAP ---------- */
  var lenis = !fine ? null : new Lenis({ lerp: 0.085, wheelMultiplier: 0.95, smoothWheel: true, anchors: false });
  if (lenis) window.__lenis = lenis;
  if (lenis) gsap.ticker.add(function (t) { lenis.raf(t * 1000); });
  gsap.ticker.lagSmoothing(0);
  /* los diálogos y el chat tienen su propio scroll: Lenis no debe capturar la rueda dentro */
  function guard() { document.querySelectorAll("dialog, #chat, .sheet, select, textarea").forEach(function (n) { n.setAttribute("data-lenis-prevent", ""); }); }
  guard();
  document.querySelectorAll("dialog").forEach(function (d) {
    new MutationObserver(function () { if (lenis) d.open ? lenis.stop() : lenis.start(); }).observe(d, { attributes: true, attributeFilter: ["open"] });
  });

  /* ---------- Entradas coreografiadas ---------- */
  function clear(el) { gsap.set(el, { clearProps: "opacity,transform,visibility" }); }
  function play(el) {
    if (el.classList.contains("in")) return;
    var head = el.classList.contains("sec-head");
    var kids = el.classList.contains("reveal-x") ? el.children : head ? el.children : null;
    if (el.classList.contains("reveal-x")) {
      gsap.fromTo(kids, { opacity: 0, y: 36 }, { opacity: 1, y: 0, duration: 1.3, ease: EXPO, stagger: 0.09, overwrite: "auto",
        onComplete: function () { el.classList.add("in"); clear(kids); } });
    } else if (head) {
      gsap.set(el, { opacity: 1, y: 0 });
      gsap.fromTo(kids, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1.2, ease: EXPO, stagger: 0.1, overwrite: "auto",
        onComplete: function () { el.classList.add("in"); clear(el); clear(kids); } });
    } else {
      gsap.fromTo(el, { opacity: 0, y: 48 }, { opacity: 1, y: 0, duration: 1.4, ease: EXPO, overwrite: "auto",
        onComplete: function () { el.classList.add("in"); clear(el); } });
    }
  }
  /* IntersectionObserver (no ScrollTrigger): las páginas ocultas no disparan nada hasta que se muestran */
  var io;
  function reveal(list) {
    if (io) io.disconnect();
    io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { io.unobserve(e.target); play(e.target); } });
    }, { threshold: 0.15, rootMargin: "0px 0px -8% 0px" });
    list.forEach(function (el) { if (!el.classList.contains("in")) io.observe(el); });
  }
  window.__motion = { reveal: reveal };

  /* ---------- Hero de la home: entrada en cascada ---------- */
  function heroIntro() {
    var h = document.querySelector('[data-page="home"] .hmin');
    if (!h || h.closest("[hidden]")) return done();
    var parts = [".avail", ".hmega", ".h-h1", ".h-intro", ".h-cta .btn", ".h-ctx", ".scroll-hint"].map(function (s) { return h.querySelectorAll(s); });
    var tl = gsap.timeline({ defaults: { ease: EXPO }, onComplete: function () { parts.forEach(clear); } });
    parts.forEach(function (n, i) { if (n.length) tl.fromTo(n, { opacity: 0, y: i === 1 ? 64 : 28 }, { opacity: 1, y: 0, duration: i === 1 ? 1.5 : 1.15, stagger: 0.08 }, i === 0 ? 0 : 0.12 + i * 0.09); });
    done();
  }

  /* ---------- Botones magnéticos (los principales; el hero conserva su propio efecto) ---------- */
  var MAG = ".btn:not(.sm):not(.is-locked):not(.h-cta .btn), [data-magnetic]";
  var mags = new WeakMap(), cur = null;
  function magFor(el) {
    var m = mags.get(el); if (m) return m;
    var s = { x: 0, y: 0 }, apply = function () { el.style.translate = s.x.toFixed(2) + "px " + s.y.toFixed(2) + "px"; };
    m = { qx: gsap.quickTo(s, "x", { duration: 0.9, ease: EXPO, onUpdate: apply }), qy: gsap.quickTo(s, "y", { duration: 0.9, ease: EXPO, onUpdate: apply }) };
    mags.set(el, m); return m;
  }
  if (fine) {
    document.addEventListener("pointermove", function (e) {
      if (e.pointerType !== "mouse") return;
      var t = e.target.closest ? e.target.closest(MAG) : null;
      if (cur && cur !== t) { var o = magFor(cur); o.qx(0); o.qy(0); cur.classList.remove("is-mag"); cur = null; }
      if (t) {
        var r = t.getBoundingClientRect(), m = magFor(t); cur = t; t.classList.add("is-mag");
        var dx = e.clientX - (r.left + r.width / 2), dy = e.clientY - (r.top + r.height / 2);
        m.qx(Math.max(-10, Math.min(10, dx * 0.22))); m.qy(Math.max(-8, Math.min(8, dy * 0.3)));
      }
    }, { passive: true });
    document.addEventListener("mouseleave", function () { if (cur) { var o = magFor(cur); o.qx(0); o.qy(0); cur.classList.remove("is-mag"); cur = null; } });
  }

  /* ---------- Cambio de ruta: sin salto brusco ---------- */
  window.addEventListener("pagehide", function () { if (lenis) lenis.destroy(); });
  heroIntro();
  if (typeof armReveal === "function") armReveal();
  guard();
})();
