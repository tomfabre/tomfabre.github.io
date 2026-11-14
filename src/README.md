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

## Formulario de contacto
Envía los datos por `POST` a Formspree (`FORM_ENDPOINT` en `c2.js`, ya configurado) con comprobación anti-spam sencilla (campo trampa y suma). Si el envío falla, ofrece abrir el correo (`mailto:`) o copiar el mensaje. Bajo los campos hay un aviso con enlace a la política de privacidad; no hay casilla de consentimiento.

## Proyectos ocultos
Figy y Molyb están ocultos. Sus líneas siguen en `c1p.js`, comentadas con el aviso `HIDDEN`; basta descomentarlas en su posición original para volver a incluirlos.
