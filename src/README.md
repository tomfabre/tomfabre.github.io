# Portfolio Álvaro Fabre — Versión B (código fuente)

Web multipágina en es/en/fr (claro/oscuro), juego de hundir la flota y chat Yodis Brownie Jr.
La Versión A es otro proyecto y no está aquí.

## Cómo se construye
`python3 build.py --site https://TU-DOMINIO` genera:
- `index.html` (vista previa de un solo archivo, rutas con `#`, se publica como artefacto de Claude)
- `dist/` (48 páginas con rutas reales: `/`, `/en/`, `/fr/`, proyectos, bio, contacto + sitemap, llms.txt, 404...)
Requiere Python 3, Node y Pillow. Cada ejecución borra y regenera `dist/`.

## Archivos
- `a.html` CSS y cabecera · `b.html` marcado · `c1*.js` textos (i18n) y proyectos · `c2.js` lógica y router · `c3.js` SEO y WebMCP · `c4.js` Yodis · `conversations.json` guion de Yodis
- `img/` imágenes (`<proyecto>-0` miniatura, `-cover` portada, `-1/-2/-3` galería, `profile-1` foto)
- `cv/` CV en HTML/PDF · `extras/` og-image, LEEME y script de dominio

## Pendientes
- URL de Formspree en `FORM_ENDPOINT` (c2.js) para que el formulario llegue a alvarofabreg@gmail.com
- Dominio propio · decidir qué hacer con el proyecto Figy (duplica Yaypegs) · imágenes de los otros 5 proyectos
- Repositorio: `tomfabre/tomfabre.github.io` (el sitio construido está en la raíz)
