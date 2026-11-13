# Cómo poner el portfolio online con tu dominio

**¿Hace falta un hosting especial? No.** Es un sitio estático: sirve cualquier hosting que sirva archivos (Netlify, Cloudflare Pages, Vercel, GitHub Pages, o un hosting clásico con FTP). No necesita servidor, base de datos ni configuración de rutas: cada página es una carpeta con su `index.html`.

**Estructura (48 páginas, una por idioma):**
- Español en la raíz: `/`, `/proyectos/`, `/proyectos/<proyecto>/`, `/bio/`, `/contacto/`
- Inglés: `/en/`, `/en/projects/`, `/en/projects/<proyecto>/`, `/en/bio/`, `/en/contact/`
- Francés: `/fr/`, `/fr/projets/`, `/fr/projets/<proyecto>/`, `/fr/bio/`, `/fr/contact/`
- Cada página trae su título, descripción, canonical y `hreflang` propios; el sitemap las lista todas con sus equivalentes en otros idiomas.

## 1. Pon tu dominio en los archivos (1 minuto)
Los archivos traen un dominio provisional (`https://TU-DOMINIO.com`) en el título social, el sitemap, robots, llms.txt y los datos estructurados.
- Con Python: `python3 poner-dominio.py https://tudominio.com`
- Sin Python: en tu editor (VS Code, etc.) busca y reemplaza `TU-DOMINIO.com` por `tudominio.com` en toda la carpeta.
Usa el dominio final exacto (con o sin `www`, el que vayas a usar de verdad).

## 2. Sube la carpeta a un hosting (elige uno, los tres son gratuitos para esto)
Sube el CONTENIDO de esta carpeta a la raíz del sitio, no la carpeta dentro de otra carpeta. Debe incluir la carpeta oculta `.well-known`.

**A. Netlify (el más fácil):** entra en app.netlify.com → "Add new site" → "Deploy manually" → arrastra la carpeta. Respeta el archivo `_headers`.
**B. Cloudflare Pages:** Workers & Pages → Create → Pages → "Upload assets" → sube la carpeta. También respeta `_headers`.
**C. Vercel o GitHub Pages:** funcionan, pero ignoran `_headers` (no es grave).

## 3. Conecta tu dominio
1. En el hosting: Site settings / Custom domains → "Add custom domain" → escribe tu dominio.
2. En donde compraste el dominio (DNS), crea lo que te indique el hosting. Normalmente:
   - dominio raíz (`tudominio.com`): registro A (o ALIAS/ANAME) hacia el valor que te dan;
   - `www`: registro CNAME hacia el valor que te dan.
   Con Netlify o Cloudflare también puedes cambiar los nameservers a los suyos y ellos lo gestionan todo.
3. Espera entre unos minutos y 24 h. El HTTPS (certificado) se activa solo; actívalo si te lo piden.
4. Elige un solo dominio principal y redirige el otro (`www` → raíz o al revés).

## 4. Comprueba que todo responde (abre estas URLs)
- `https://tudominio.com/` (el portfolio, en claro y oscuro, y el chat Yodis)
- `https://tudominio.com/en/projects/` y `https://tudominio.com/fr/bio/` (versiones por idioma)
- Una URL inexistente (`/xyz`) debe mostrar la página 404 del sitio
- `https://tudominio.com/llms.txt`
- `https://tudominio.com/.well-known/ai-catalog.json`
- `https://tudominio.com/robots.txt` y `/sitemap.xml`
- `https://tudominio.com/cv-alvaro-fabre.pdf`
Si una carpeta como `/en/` da 404, subiste la carpeta dentro de otra: sube el CONTENIDO. Si falla `.well-known`, casi siempre es que la carpeta no se subió (es oculta).

## 5. Después de publicar
1. Google Search Console: añade tu dominio, verifica y envía `https://tudominio.com/sitemap.xml`.
2. Bing Webmaster Tools: importa el sitio desde Search Console.
3. Prueba al compartir el enlace en LinkedIn/WhatsApp para ver la imagen social (`og-image.png`). Si no cambia, usa el depurador de LinkedIn / Facebook para refrescar la caché.
4. Lighthouse en Chrome (modo incógnito): rendimiento, accesibilidad, SEO. Las auditorías "agénticas" necesitan Chrome 150+ con WebMCP activado.

## 6. Cosas pendientes de contenido (no técnicas)
- Textos provisionales de 5 proyectos (Carceral Ecologies, À2pas, Binōme, Yaypegs, Figy).
- Tu foto real y los enlaces de música y lecturas del bloque "Fuera de pantalla".
- En `robots.txt` ahora se permiten todos los bots de IA; cámbialo si no quieres que entrenen con tu contenido.
- WhatsApp en Yodis solo se muestra a visitantes cualificados, pero el número está en el código público del sitio.

## 7. Cómo actualizar el sitio más adelante
Vuelve a subir la carpeta al mismo hosting (Netlify/Cloudflare reemplazan la versión anterior). Si cambias textos o proyectos hay que regenerar las 48 páginas (me lo pides y te doy una carpeta nueva). Los enlaces antiguos con `#` (por ejemplo `/#bio`) redirigen solos a la ruta nueva.

## Sobre Yodis Brownie Jr.
Guía determinista (sin IA ni llamadas externas). Formulario y email siempre disponibles; WhatsApp solo con intención profesional explícita, necesidad definida y inicio en menos de 3 meses. Los botones de correo y WhatsApp solo abren tu app; no confirman envío. El formulario de la web prepara el mensaje y abre tu correo: no hay servidor que lo envíe.
