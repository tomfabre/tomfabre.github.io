# Portfolio de Tom Fabre (Álvaro Fabre): código fuente

Web multipágina en es/en/fr (claro/oscuro), juego de hundir la flota y chat Yodis Brownie Jr. Generador estático propio, sin framework.

## Cómo se construye
`python3 build.py --site https://tomfabre.com` genera:
- `index.html` (vista previa de un solo archivo, rutas con `#`, se publica como artefacto de Claude)
- `dist/` (páginas con rutas reales por idioma: `/`, `/en/`, `/fr/`, proyectos, servicios, bio, contacto, páginas legales, más `sitemap.xml`, `llms.txt`, `llms-full.txt`, `portfolio.json` y `404.html`)

Requisitos: Python 3 (Pillow), Node con Playwright (prerender) y esbuild (minificado; variables `NODE_PATH` y `ESBUILD`). Cada ejecución borra y regenera `dist/`. El build se aborta si fallan los validadores (secciones de casos, guiones largos en los casos nuevos, metadatos sociales).

Tests: `python3 -m unittest test_validate_sections`.

## Publicación
El sitio construido se copia a la raíz del repositorio `tomfabre/tomfabre.github.io` (GitHub Pages sirve desde la raíz de `main`). La salida de `dist/` y el código fuente de `src/` conviven en el mismo repositorio.

## Archivos
- `a.html` CSS y cabecera · `b.html` marcado · `c1*.js` textos (i18n), proyectos y casos · `c2.js` lógica y router · `c3.js` SEO y WebMCP · `c4.js` Yodis · `conversations.json` guion de Yodis
- `c1p.js` lista de proyectos y tarjetas · `c1k.js` casos de estudio (`SECTIONS`), cabeceras (`HERO`) y SEO por proyecto
- `img/` imágenes (`<proyecto>-0` miniatura decorativa, `-cover` portada, `-1/-2/-3` galería, `profile-1` foto)
- `fonts/` Outfit autoalojada (latin y latin-ext)
- `legal.py` / `legal.json` páginas legales · `consent.js` consentimiento de analítica
- `cv/` CV en HTML/PDF · `extras/` og-image, LEEME y script de dominio

## Formularios (contacto general y análisis UX/UI del juego)
Textos ES/EN/FR en `c1f.js` (se carga el último y pisa a `c1m.js`/`c1g.js`; los rangos de presupuesto siguen en `c1t.js`). Lógica en `c2.js` (`openForm`, `wireForm`, `openPrize`, `wirePrize`); marcado en `b.html`; estilos compartidos al final del bloque de diálogos de `a.html`.

- **Un solo componente con variantes.** `openForm(ctx)` recibe el contexto desde los `data-*` del botón que lo abre (`data-service`, `data-project`, `data-place`), nunca desde parámetros de la URL: caso de estudio (preselecciona categoría solo si el caso tiene un único servicio), página de servicio (preselecciona ese servicio), Bio/Home/chat (sin preselección). El origen viaja en el envío (`source`, `project`, `service`, `page`, `locale`, `form_type`, `topic_id`).
- **Premio del juego.** `openPrize(won)` abre directamente su formulario (web + email + opcional) y solo si la partida ha terminado. No cambia ninguna regla del juego.
- **Antispam.** Formspree + campo trampa + suma («Una última comprobación: ¿cuánto es X + Y?») + bloqueo de doble envío. Turnstile no se ha integrado: este sitio es estático y no hay servidor donde verificar el token (ver más abajo).
- **Presupuesto.** Rangos existentes (c1t.js). Solo se muestra para Branding, Web, Producto/UX/UI y Otro; oculto y deshabilitado para Colaboración y «Todavía no lo tengo claro», así que nunca bloquea ni se envía.
- **Analítica** (`track`, sin datos personales ni contenido de campos): `contact_form_open|submit|success|error` y `ux_review_form_open|submit|success|error`, con `form_type`, `variant`, `source`, `category`, `locale` y `error_type`/`field` en los errores.
- Si el envío falla, el modal sigue abierto con los datos y un aviso con el correo directo. El modo `mailto:`/copiar solo se usa para el borrador de agentes WebMCP.

## Proyectos ocultos
Figy y Molyb están ocultos. Sus líneas siguen en `c1p.js`, comentadas con el aviso `HIDDEN`; basta descomentarlas en su posición original para volver a incluirlos.

## Lote 2 (rama `lote2`): servicios, Bio v2, contacto, footer

- `c1m.js` (se carga el último entre los datos): copy y SEO de las 3 páginas de servicio, contacto + formulario + FAQ, footer global y Bio v2, en ES/EN/FR. Generado a partir de los `tomfabre_lote2_*.md`; pisa `c1t.js`.
- `c2b.js`: componentes de la Bio (bento, galería accesible, carrusel de obsesiones, juego de memoria). Va **antes** de `c2.js` en `build.py` (el init de `c2.js` ya los usa).
- **Assets pendientes**: se rellenan en `BIO_ASSETS` (`c2b.js`): 7 fotos de ciudades (3:2), 10 de calle (1:1), 4 de cocina (1:1), 5 de obsesiones (4:3), foto opcional del coro, URL de Spotify (`spotify.url`) y restaurantes validados (`places: [{name,url}]`). Mientras `img` sea `null` se pinta un placeholder identificado (`data-pending="..."`). Sin fotos de stock.
- **Hundir la flota** vive en la Home (`#gamesec`), justo después de «Un poco más sobre mí» y antes de las preguntas frecuentes. La lógica (`renderGame`, `newGame`…) no cambió.
- Formulario: ver la sección «Formularios». `TOPIC_IDS` vive ahora en `c2.js` (6 categorías; el premio ya no está en el selector).

## Rendimiento (Fase 2)

- **JS compartido externo con hash.** `build.py` escribe el script de la app (el mismo script clásico de siempre, mismo orden de ejecución, al final del `<body>`) en `/js/app.<hash>.js`. Todas las páginas e idiomas lo comparten, así que el navegador lo cachea entre páginas. Lo único que cambia por idioma, `cvUrl`, se pasa con un mini script en línea (`window.__CV`). `PERF_EXT_JS=0 python3 build.py …` genera el formato anterior (todo en línea) por si hiciera falta comparar.
- **Al desplegar:** `python3 build.py --site https://tomfabre.com && python3 sync_dist.py` (añade `--dry-run` para ver el plan). `sync_dist.py` copia `dist/` a la raíz y poda los `js/app.<hash>.js` antiguos de forma segura: conserva siempre la versión nueva, la que referenciaba la raíz antes de copiar y cualquiera que siga referenciada en `origin/main`; si no puede leer `origin/main`, no borra nada. Solo toca archivos con el patrón exacto `js/app.<10 hex>.js`.
- **Caché:** GitHub Pages ignora `_headers` y sirve todo con `max-age=600`; el hash en el nombre garantiza que nunca se sirva JS obsoleto con HTML nuevo.
- **Probado y descartado:** CSS externo (la primera visita empeora, ver informe de la Fase 2), `preload` del script en `<head>` (sin beneficio medible).
- **Medir:** `e2e/e2e.js` comprueba que el script externo carga, que `cvUrl` es correcto por idioma y que no hay errores.
