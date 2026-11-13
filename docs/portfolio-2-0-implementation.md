# Portfolio 2.0 · notas de implementación

Copy importado de la Brand & Content Bible a `src/c1t.js` (ES/EN/FR). Build: `cd src && python3 build.py --site https://tomfabre.github.io` (genera `dist/` y ejecuta `prerender.js`, que escribe el HTML renderizado de cada página: un H1 por página, sin encabezados vacíos).

## Decisiones
- Titular alterno del hero pintado por CSS (`data-t`): el H1 solo contiene la frase por defecto.
- Home: Hero → Proyectos (4) → Servicios (3, con enlaces) → Proceso → Bio/Binōme → FAQ (details) → Contacto. Testimonios ausentes (no hay reales). Bloque de cifras retirado de la home (sin verificar).
- Servicios: `/servicios/`, `/servicios/branding/`, `/servicios/diseno-web/`, `/servicios/diseno-ux-ui/` (EN: `/en/services/…`, FR: `/fr/services/…`). Proyectos relacionados salen de la columna "servicios" de cada proyecto del repo (`PSVC`).
- Tarjetas de proyecto: se mantienen los textos del repo; el texto de la Bible para Carceral ("proyecto de investigación") no está verificado y no se usa.
- Analítica: `track()` solo emite un evento DOM y reenvía a `window.AF_ANALYTICS` si existe. No carga nada.

## Pendiente de verificar (no inventar)
Texto legal/privacidad y responsable; correo definitivo (`hey@tomfabre.com` vs `alvarofabreg@gmail.com`) y destino de Formspree; testimonios autorizados; cifras (3M+, 500K, 5M+, 12 países); hechos de cada caso (cliente, rol, resultados); ficheros WOFF2 de Galano Grotesque con licencia; fotos reales de la galería; GA4/consentimiento; dominio `tomfabre.com`; capacidades de Binōme.
