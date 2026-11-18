"""Legal pages (aviso legal · privacidad · cookies) per language, built as standalone static pages."""
import json, re, os, html as _h

CFG = json.load(open(os.path.join(os.path.dirname(os.path.abspath(__file__)), "legal.json"), encoding="utf8"))
PATHS = {"es": "legal", "en": "en/legal", "fr": "fr/mentions-legales"}
HOME = {"es": "/", "en": "/en/", "fr": "/fr/"}

def txt(lg, email, site):
    AD = CFG["address"]
    N, B, ID, IDL, R, GR = CFG["name"], CFG["brand"], CFG["id"] or "[" + CFG["id_label"] + " PENDIENTE]", CFG["id_label"], CFG["retention_months"], CFG["ga_retention_months"]
    dom = re.sub(r"^https?://", "", site)
    if lg == "es": return dict(
        title="Aviso legal, privacidad y cookies · Tom Fabre", desc="Aviso legal, política de privacidad y política de cookies de tomfabre.com.", back="Volver al inicio", h1="Legal", upd="Última actualización",
        sections=[
        ("aviso-legal","Aviso legal",[
          ("p","En cumplimiento del artículo 10 de la Ley 34/2002, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), estos son los datos del titular de este sitio web:"),
          ("ul",[f"Titular: {N} (nombre profesional: {B})", f"{IDL}: {ID}", "Actividad: servicios de diseño de producto, marca y web, como profesional autónomo", f"Domicilio: {AD}", f"Correo electrónico: {email}", f"Sitio web: {dom}"]),
          ("h3","Propiedad intelectual"),
          ("p","Los contenidos de este sitio (textos, diseños, código, ilustraciones y fotografías) son de su titular o se usan con permiso, salvo que se indique lo contrario. Los nombres y marcas de clientes y proyectos pertenecen a sus respectivos propietarios y se muestran como referencia de trabajo. No se permite su reproducción o uso comercial sin autorización."),
          ("h3","Responsabilidad"),
          ("p","Procuro que la información sea exacta y esté actualizada, pero no garantizo la ausencia de errores ni la disponibilidad ininterrumpida del sitio. Los enlaces a sitios de terceros no suponen responsabilidad sobre su contenido."),
          ("h3","Ley aplicable"),
          ("p","Legislación española. Para cualquier controversia serán competentes los juzgados y tribunales que correspondan conforme a la normativa aplicable.")]),
        ("privacidad","Política de privacidad",[
          ("p","Esta política explica qué datos personales trato a través de este sitio, para qué y qué derechos tienes, conforme al Reglamento (UE) 2016/679 (RGPD) y a la Ley Orgánica 3/2018 (LOPDGDD)."),
          ("h3","Responsable del tratamiento"),
          ("ul",[f"{N} ({B}) · {IDL}: {ID}", f"Domicilio: {AD}", f"Contacto: {email}"]),
          ("h3","Qué datos trato, para qué y con qué base jurídica"),
          ("ul",["Formulario de contacto: nombre, correo electrónico, categoría del proyecto, mensaje y, si lo indicas, un presupuesto orientativo (solo se ofrece en solicitudes de servicios). Consulta rápida: nombre, correo electrónico y mensaje. Finalidad: responder a tu consulta y, si lo pides, preparar una propuesta. Base jurídica: tu consentimiento al enviar el formulario (art. 6.1.a RGPD) y, cuando solicitas una propuesta, la aplicación de medidas precontractuales a petición tuya (art. 6.1.b).",
                 "Formulario de análisis UX/UI (premio del juego): tu correo electrónico, la dirección web que quieres que revise, el resultado de la partida (ganada o perdida) y, si lo indicas, qué te gustaría mejorar. Finalidad: revisar esa web y enviarte por correo tres ideas para mejorarla. Base jurídica: tu consentimiento al enviar el formulario (art. 6.1.a RGPD). No hace falta ganar la partida para usarlo y no se te pide ningún dato adicional.",
                 "Datos técnicos que acompañan a ambos formularios: la ruta de la página desde la que escribes, el botón o sección de origen, el servicio o proyecto relacionado cuando existe (por ejemplo, si llegas desde un caso concreto), el idioma del sitio y el tipo de formulario (completo, rápido o análisis UX/UI). Finalidad: entender a qué te refieres, atender tu solicitud y organizar las respuestas. Base jurídica: el mismo consentimiento o, en su defecto, el interés legítimo en gestionar correctamente tu consulta (art. 6.1.f). Formspree puede registrar además la fecha, la hora y la dirección IP del envío por motivos de seguridad y control del spam.",
                 "Reproductor de Spotify (página Bio): no se carga ni se conecta con Spotify hasta que pulsas el botón de reproducir. Entonces se abre un reproductor incrustado (iframe) de open.spotify.com, sin reproducción automática. En ese momento Spotify recibe tu dirección IP y datos técnicos de tu navegador, y puede usar cookies o tecnologías similares según su propia política. Base jurídica: tu consentimiento al pulsar el botón (art. 6.1.a RGPD).",
                 f"Correo directo a {email}: los datos que incluyas en tu mensaje, con la misma finalidad y base jurídica.",
                 "Analítica web (Google Analytics 4): datos agregados de uso del sitio (páginas vistas y clics en botones). El script de Google solo se descarga después de que aceptes las cookies de analítica: antes de elegir y si las rechazas, este sitio no hace ninguna petición a Google Analytics. Al aceptar, Google recibe tu dirección IP y datos técnicos del navegador, como ocurre con cualquier recurso externo, y establece sus cookies de analítica. Si retiras tu consentimiento, el script no se vuelve a descargar en tus siguientes visitas. Los eventos de los formularios (abrir, enviar, error) no incluyen tus datos ni el contenido del mensaje. Base jurídica de las cookies de analítica: tu consentimiento (art. 6.1.a RGPD).",
                 "Registros técnicos: el servicio de alojamiento puede registrar tu dirección IP por motivos de seguridad y funcionamiento. Base jurídica: interés legítimo (art. 6.1.f).",
                 "Almacenamiento en tu navegador: idioma, tema, vista de proyectos, tu elección sobre las cookies y el estado de la conversación con el asistente Yodis. Se guarda solo en tu dispositivo y no se envía a ningún servidor (detalle en la política de cookies)."]),
          ("p","Facilitar tus datos es voluntario, pero sin los campos obligatorios de cada formulario no puedo atender tu solicitud. Los formularios incluyen una comprobación anti-spam sencilla (una pequeña operación y un campo oculto para detectar robots); no se usa para crear perfiles. No tomo decisiones automatizadas sobre ti ni vendo tus datos."),
          ("h3","Quién más accede a los datos"),
          ("p","Para prestar el servicio utilizo proveedores que actúan como encargados del tratamiento: Formspree, Inc. (recepción de los mensajes del formulario), Cloudflare, Inc. (DNS y reenvío de correo), Google LLC (correo y, si aceptas, Google Analytics) y GitHub, Inc. (alojamiento del sitio). Si cargas el reproductor de Spotify, Spotify AB trata tus datos como responsable de su propio servicio. No cedo tus datos a terceros salvo obligación legal. Las fuentes tipográficas se sirven desde este mismo sitio. Los enlaces a otros servicios (por ejemplo LinkedIn, Instagram, Behance, GitHub, LottieFiles o WhatsApp, que el asistente Yodis puede ofrecerte abrir con un mensaje ya escrito) solo se abren si los pulsas y se rigen por la política de cada servicio."),
          ("h3","Transferencias internacionales"),
          ("p","Algunos de estos proveedores están en Estados Unidos. Las transferencias se amparan en las garantías previstas en el RGPD, como la decisión de adecuación del Marco de Privacidad de Datos UE-EE. UU. o las cláusulas contractuales tipo, según el proveedor."),
          ("h3","Cuánto tiempo conservo los datos"),
          ("ul",[f"Mensajes y consultas (incluidas las del formulario de análisis UX/UI): hasta {R} meses desde el último contacto. Si se inicia una relación profesional, los conservaré durante los plazos que exijan las obligaciones legales aplicables.", f"Datos de analítica: como máximo {GR} meses."]),
          ("h3","Tus derechos"),
          ("p",f"Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad escribiendo a {email}, indicando qué derecho quieres ejercer. Puedes retirar tu consentimiento en cualquier momento (por ejemplo, desde «Cookies» en el pie de página). Si crees que tus datos no se tratan correctamente, puedes presentar una reclamación ante la Agencia Española de Protección de Datos (aepd.es).")]),
        ("cookies","Política de cookies",[
          ("p","Este sitio distingue dos tecnologías. Las cookies son pequeños archivos que el navegador guarda y envía al servidor en cada visita. El almacenamiento local (localStorage y sessionStorage) guarda datos solo en tu navegador y no se envía a ningún servidor."),
          ("h3","Cookies"),
          ("table",["Nombre","Titular","Finalidad","Duración","Tipo"],[
            ["_ga","Google","Distingue usuarios de forma anónima","2 años","Analítica (solo si aceptas)"],
            ["_ga_W3V7MB7SZ7","Google","Mantiene el estado de la sesión","2 años","Analítica (solo si aceptas)"],
            ["Cookies de Spotify","Spotify","Las que Spotify establezca al cargar su reproductor (solo si pulsas el botón de reproducir)","Según Spotify","De terceros (solo si lo cargas)"]]),
          ("h3","Almacenamiento local del navegador"),
          ("table",["Nombre","Titular","Finalidad","Duración","Tipo"],[
            ["af-consent (localStorage)","tomfabre.com","Guarda tu elección sobre las cookies de analítica («granted» o «denied»). Se escribe al pulsar Aceptar o Rechazar","Hasta que la borres","Técnico"],
            ["af-lang (localStorage)","tomfabre.com","Idioma del sitio (es, en o fr). Se escribe al cargar el sitio y al cambiar de idioma","Hasta que la borres","Técnico"],
            ["af-theme (localStorage)","tomfabre.com","Tema claro, oscuro o del sistema. Se escribe cuando cambias el tema","Hasta que la borres","Técnico"],
            ["af-view (localStorage)","tomfabre.com","Vista de proyectos (cuadrícula o lista). Se escribe cuando cambias la vista","Hasta que la borres","Técnico"],
            ["yodis-v2 (sessionStorage)","tomfabre.com","Progreso de la conversación con el asistente (opciones elegidas); no guarda texto que escribas","Hasta cerrar la pestaña","Técnico"]]),
          ("p","El almacenamiento técnico es necesario para que el sitio funcione o para recordar tus ajustes, y no requiere consentimiento. Las cookies de analítica y el script de Google Analytics solo se activan si pulsas «Aceptar» en el aviso de cookies, y el reproductor de Spotify solo se carga si pulsas su botón. No uso cookies de publicidad. Mientras no aceptes las cookies de analítica, el sitio no descarga el script de Google Analytics (googletagmanager.com) ni envía datos a Google Analytics."),
          ("p","Puedes cambiar tu elección cuando quieras con el botón «Cookies» del pie de página, o borrar las cookies y los datos del sitio desde los ajustes de tu navegador."),
          ("p","Google LLC puede tratar estos datos como encargado; más información en la política de privacidad de Google.")])]
        )
    if lg == "en": return dict(
        title="Legal notice, privacy and cookies · Tom Fabre", desc="Legal notice, privacy policy and cookie policy of tomfabre.com.", back="Back to home", h1="Legal", upd="Last updated",
        sections=[
        ("aviso-legal","Legal notice",[
          ("p","In accordance with Article 10 of Spanish Law 34/2002 on Information Society Services and Electronic Commerce (LSSI-CE), these are the details of the owner of this website:"),
          ("ul",[f"Owner: {N} (professional name: {B})", f"{IDL}: {ID}", "Activity: product, brand and web design services, as a self-employed professional", f"Address: {AD}", f"Email: {email}", f"Website: {dom}"]),
          ("h3","Intellectual property"),
          ("p","The contents of this site (text, designs, code, illustrations and photographs) belong to the owner or are used with permission unless stated otherwise. Client and project names and trademarks belong to their respective owners and are shown as a reference of my work. They may not be reproduced or used commercially without authorisation."),
          ("h3","Liability"),
          ("p","I do my best to keep the information accurate and up to date, but I don't guarantee it is free of errors or that the site is always available. Links to third-party sites don't imply responsibility for their content."),
          ("h3","Governing law"),
          ("p","Spanish law. Any dispute will be heard by the courts that have jurisdiction under the applicable rules.")]),
        ("privacidad","Privacy policy",[
          ("p","This policy explains what personal data I process through this site, why, and what rights you have, in line with Regulation (EU) 2016/679 (GDPR) and Spanish Organic Law 3/2018."),
          ("h3","Data controller"),
          ("ul",[f"{N} ({B}) · {IDL}: {ID}", f"Address: {AD}", f"Contact: {email}"]),
          ("h3","What data I process, why and on what legal basis"),
          ("ul",["Contact form: name, email, project category, message and, if you choose, an approximate budget (only offered for service enquiries). Quick enquiry: name, email and message. Purpose: to answer your enquiry and, if you ask for it, prepare a proposal. Legal basis: your consent when you submit the form (Art. 6.1.a GDPR) and, when you ask for a proposal, steps taken at your request before entering a contract (Art. 6.1.b).",
                 "UX/UI review form (game prize): your email, the website address you want me to review, the game result (won or lost) and, if you choose, what you would like to improve. Purpose: to review that website and email you three ideas to improve it. Legal basis: your consent when you submit the form (Art. 6.1.a GDPR). You don't need to win the game to use it and no further data is requested.",
                 "Technical data sent with both forms: the path of the page you are writing from, the button or section it came from, the related service or project when there is one (for example, if you arrive from a specific case study), the site language and the form type (full, quick or UX/UI review). Purpose: to understand what you are referring to, handle your request and organise replies. Legal basis: the same consent or, failing that, my legitimate interest in handling your enquiry properly (Art. 6.1.f). Formspree may also log the date, time and IP address of the submission for security and spam control.",
                 "Spotify player (Bio page): it is not loaded and does not connect to Spotify until you press the play button. It then opens an embedded player (iframe) from open.spotify.com, with no autoplay. At that point Spotify receives your IP address and technical data from your browser, and may use cookies or similar technologies under its own policy. Legal basis: your consent when you press the button (Art. 6.1.a GDPR).",
                 f"Direct email to {email}: the data you include in your message, for the same purpose and on the same legal basis.",
                 "Web analytics (Google Analytics 4): aggregated data about how the site is used (page views and button clicks). Google's script is only downloaded after you accept analytics cookies: before you choose, and if you reject them, this site makes no request to Google Analytics. Once you accept, Google receives your IP address and technical browser data, as with any external resource, and sets its analytics cookies. If you withdraw your consent, the script is not downloaded again on your next visits. Form events (open, submit, error) do not include your data or the content of your message. Legal basis for analytics cookies: your consent (Art. 6.1.a GDPR).",
                 "Technical logs: the hosting service may log your IP address for security and operation. Legal basis: legitimate interest (Art. 6.1.f).",
                 "Storage in your browser: language, theme, project view, your cookie choice and the state of your conversation with the Yodis assistant. It stays on your device only and is not sent to any server (details in the cookie policy)."]),
          ("p","Providing your data is voluntary, but without the required fields of each form I cannot handle your request. The forms include a simple anti-spam check (a small sum and a hidden field to detect bots); it is not used to build profiles. I don't make automated decisions about you and I don't sell your data."),
          ("h3","Who else has access"),
          ("p","To provide the service I use providers acting as data processors: Formspree, Inc. (receiving form messages), Cloudflare, Inc. (DNS and email forwarding), Google LLC (email and, if you accept, Google Analytics) and GitHub, Inc. (site hosting). If you load the Spotify player, Spotify AB processes your data as controller of its own service. I don't share your data with third parties unless required by law. Typefaces are served from this same site. Links to other services (for example LinkedIn, Instagram, Behance, GitHub, LottieFiles or WhatsApp, which the Yodis assistant may offer to open with a ready-written message) only open if you click them and are governed by each service's own policy."),
          ("h3","International transfers"),
          ("p","Some of these providers are based in the United States. Transfers rely on the safeguards provided for in the GDPR, such as the adequacy decision for the EU-US Data Privacy Framework or standard contractual clauses, depending on the provider."),
          ("h3","How long I keep data"),
          ("ul",[f"Messages and enquiries (including those from the UX/UI review form): up to {R} months after the last contact. If a professional relationship starts, I keep them for as long as applicable legal obligations require.", f"Analytics data: {GR} months at most."]),
          ("h3","Your rights"),
          ("p",f"You can exercise your rights of access, rectification, erasure, objection, restriction and portability by writing to {email} and saying which right you want to exercise. You can withdraw your consent at any time (for example from “Cookies” in the footer). If you think your data is not being handled properly, you can lodge a complaint with the Spanish Data Protection Agency (aepd.es).")]),
        ("cookies","Cookie policy",[
          ("p","This site distinguishes two technologies. Cookies are small files your browser stores and sends back to the server on every visit. Local storage (localStorage and sessionStorage) keeps data only in your browser and is not sent to any server."),
          ("h3","Cookies"),
          ("table",["Name","Owner","Purpose","Duration","Type"],[
            ["_ga","Google","Tells users apart anonymously","2 years","Analytics (only if you accept)"],
            ["_ga_W3V7MB7SZ7","Google","Keeps session state","2 years","Analytics (only if you accept)"],
            ["Spotify cookies","Spotify","Whatever Spotify sets when its player loads (only if you press play)","Set by Spotify","Third party (only if you load it)"]]),
          ("h3","Browser local storage"),
          ("table",["Name","Owner","Purpose","Duration","Type"],[
            ["af-consent (localStorage)","tomfabre.com","Stores your choice about analytics cookies (“granted” or “denied”). Written when you press Accept or Reject","Until you clear it","Technical"],
            ["af-lang (localStorage)","tomfabre.com","Site language (es, en or fr). Written when the site loads and when you change language","Until you clear it","Technical"],
            ["af-theme (localStorage)","tomfabre.com","Light, dark or system theme. Written when you change the theme","Until you clear it","Technical"],
            ["af-view (localStorage)","tomfabre.com","Project view (grid or list). Written when you change the view","Until you clear it","Technical"],
            ["yodis-v2 (sessionStorage)","tomfabre.com","Progress of the conversation with the assistant (options chosen); it does not store text you type","Until you close the tab","Technical"]]),
          ("p","Technical storage is needed for the site to work or to remember your settings and doesn't require consent. Analytics cookies and the Google Analytics script only activate if you press “Accept” in the cookie notice, and the Spotify player only loads if you press its button. I don't use advertising cookies. As long as you don't accept analytics cookies, the site does not download the Google Analytics script (googletagmanager.com) or send data to Google Analytics."),
          ("p","You can change your choice at any time with the “Cookies” button in the footer, or clear cookies and site data from your browser settings."),
          ("p","Google LLC may process this data as a processor; see Google's privacy policy for more information.")])]
        )
    return dict(
        title="Mentions légales, confidentialité et cookies · Tom Fabre", desc="Mentions légales, politique de confidentialité et politique de cookies de tomfabre.com.", back="Retour à l'accueil", h1="Mentions légales", upd="Dernière mise à jour",
        sections=[
        ("aviso-legal","Mentions légales",[
          ("p","Conformément à l'article 10 de la loi espagnole 34/2002 sur les services de la société de l'information et le commerce électronique (LSSI-CE), voici les informations sur l'éditeur de ce site :"),
          ("ul",[f"Éditeur : {N} (nom professionnel : {B})", f"{IDL} : {ID}", "Activité : services de design de produit, de marque et de web, en tant que professionnel indépendant", f"Domicile : {AD}", f"Courriel : {email}", f"Site web : {dom}"]),
          ("h3","Propriété intellectuelle"),
          ("p","Les contenus de ce site (textes, designs, code, illustrations et photographies) appartiennent à l'éditeur ou sont utilisés avec autorisation, sauf mention contraire. Les noms et marques de clients et de projets appartiennent à leurs propriétaires respectifs et sont présentés comme références de travail. Leur reproduction ou leur usage commercial sans autorisation est interdit."),
          ("h3","Responsabilité"),
          ("p","Je m'efforce de garder les informations exactes et à jour, mais je ne garantis ni l'absence d'erreurs ni la disponibilité permanente du site. Les liens vers des sites tiers n'engagent pas ma responsabilité quant à leur contenu."),
          ("h3","Droit applicable"),
          ("p","Droit espagnol. Tout litige relèvera des juridictions compétentes selon la réglementation applicable.")]),
        ("privacidad","Politique de confidentialité",[
          ("p","Cette politique explique quelles données personnelles je traite via ce site, pourquoi, et quels sont vos droits, conformément au règlement (UE) 2016/679 (RGPD) et à la loi organique espagnole 3/2018."),
          ("h3","Responsable du traitement"),
          ("ul",[f"{N} ({B}) · {IDL} : {ID}", f"Domicile : {AD}", f"Contact : {email}"]),
          ("h3","Quelles données, pourquoi et sur quelle base juridique"),
          ("ul",["Formulaire de contact : nom, courriel, catégorie du projet, message et, si vous le souhaitez, un budget indicatif (proposé uniquement pour les demandes de services). Demande rapide : nom, courriel et message. Finalité : répondre à votre demande et, si vous le demandez, préparer une proposition. Base juridique : votre consentement lors de l'envoi du formulaire (art. 6.1.a RGPD) et, lorsque vous demandez une proposition, des mesures précontractuelles prises à votre demande (art. 6.1.b).",
                 "Formulaire d'analyse UX/UI (récompense du jeu) : votre courriel, l'adresse du site que vous voulez que j'examine, le résultat de la partie (gagnée ou perdue) et, si vous le souhaitez, ce que vous aimeriez améliorer. Finalité : examiner ce site et vous envoyer par courriel trois idées pour l'améliorer. Base juridique : votre consentement lors de l'envoi du formulaire (art. 6.1.a RGPD). Il n'est pas nécessaire de gagner la partie pour l'utiliser et aucune autre donnée n'est demandée.",
                 "Données techniques jointes aux deux formulaires : le chemin de la page depuis laquelle vous écrivez, le bouton ou la section d'origine, le service ou le projet concerné lorsqu'il existe (par exemple si vous arrivez depuis une étude de cas), la langue du site et le type de formulaire (complet, rapide ou analyse UX/UI). Finalité : comprendre de quoi il s'agit, traiter votre demande et organiser les réponses. Base juridique : le même consentement ou, à défaut, mon intérêt légitime à traiter correctement votre demande (art. 6.1.f). Formspree peut également enregistrer la date, l'heure et l'adresse IP de l'envoi pour des raisons de sécurité et de lutte contre le spam.",
                 "Lecteur Spotify (page Bio) : il n'est ni chargé ni connecté à Spotify tant que vous ne cliquez pas sur le bouton de lecture. Un lecteur intégré (iframe) d'open.spotify.com s'ouvre alors, sans lecture automatique. À ce moment, Spotify reçoit votre adresse IP et des données techniques de votre navigateur, et peut utiliser des cookies ou des technologies similaires selon sa propre politique. Base juridique : votre consentement en cliquant sur le bouton (art. 6.1.a RGPD).",
                 f"Courriel direct à {email} : les données incluses dans votre message, avec la même finalité et la même base juridique.",
                 "Mesure d'audience (Google Analytics 4) : données agrégées sur l'usage du site (pages vues et clics sur les boutons). Le script de Google n'est téléchargé qu'après votre acceptation des cookies de mesure d'audience : avant tout choix, et si vous les refusez, ce site n'envoie aucune requête à Google Analytics. Une fois que vous acceptez, Google reçoit votre adresse IP et des données techniques du navigateur, comme pour toute ressource externe, et dépose ses cookies de mesure d'audience. Si vous retirez votre consentement, le script n'est plus téléchargé lors de vos visites suivantes. Les événements des formulaires (ouverture, envoi, erreur) n'incluent ni vos données ni le contenu du message. Base juridique des cookies de mesure d'audience : votre consentement (art. 6.1.a RGPD).",
                 "Journaux techniques : l'hébergeur peut enregistrer votre adresse IP pour des raisons de sécurité et de fonctionnement. Base juridique : intérêt légitime (art. 6.1.f).",
                 "Stockage dans votre navigateur : langue, thème, affichage des projets, votre choix sur les cookies et l'état de la conversation avec l'assistant Yodis. Ces données restent uniquement sur votre appareil et ne sont envoyées à aucun serveur (détails dans la politique de cookies)."]),
          ("p","Fournir vos données est facultatif, mais sans les champs obligatoires de chaque formulaire je ne peux pas traiter votre demande. Les formulaires comportent un contrôle anti-spam simple (une petite opération et un champ caché pour repérer les robots) ; il n'est pas utilisé pour établir des profils. Je ne prends aucune décision automatisée vous concernant et je ne vends pas vos données."),
          ("h3","Qui d'autre accède aux données"),
          ("p","Pour fournir le service, j'utilise des prestataires agissant comme sous-traitants : Formspree, Inc. (réception des messages du formulaire), Cloudflare, Inc. (DNS et redirection de courriel), Google LLC (courriel et, si vous acceptez, Google Analytics) et GitHub, Inc. (hébergement du site). Si vous chargez le lecteur Spotify, Spotify AB traite vos données en tant que responsable de son propre service. Je ne transmets pas vos données à des tiers, sauf obligation légale. Les polices de caractères sont servies depuis ce même site. Les liens vers d'autres services (par exemple LinkedIn, Instagram, Behance, GitHub, LottieFiles ou WhatsApp, que l'assistant Yodis peut proposer d'ouvrir avec un message déjà rédigé) ne s'ouvrent que si vous cliquez dessus et relèvent de la politique de chaque service."),
          ("h3","Transferts internationaux"),
          ("p","Certains de ces prestataires sont établis aux États-Unis. Les transferts reposent sur les garanties prévues par le RGPD, comme la décision d'adéquation du cadre de protection des données UE-États-Unis ou les clauses contractuelles types, selon le prestataire."),
          ("h3","Durée de conservation"),
          ("ul",[f"Messages et demandes (y compris ceux du formulaire d'analyse UX/UI) :  {R} mois après le dernier contact. Si une relation professionnelle s'engage, je les conserve pendant la durée qu'exigent les obligations légales applicables.", f"Données de mesure d'audience : {GR} mois au maximum."]),
          ("h3","Vos droits"),
          ("p",f"Vous pouvez exercer vos droits d'accès, de rectification, d'effacement, d'opposition, de limitation et de portabilité en écrivant à {email} en précisant le droit concerné. Vous pouvez retirer votre consentement à tout moment (par exemple via « Cookies » en bas de page). Si vous estimez que vos données ne sont pas traitées correctement, vous pouvez déposer une réclamation auprès de l'Agence espagnole de protection des données (aepd.es) ou de la CNIL.")]),
        ("cookies","Politique de cookies",[
          ("p","Ce site distingue deux technologies. Les cookies sont de petits fichiers que votre navigateur enregistre et renvoie au serveur à chaque visite. Le stockage local (localStorage et sessionStorage) conserve des données uniquement dans votre navigateur et n'est envoyé à aucun serveur."),
          ("h3","Cookies"),
          ("table",["Nom","Titulaire","Finalité","Durée","Type"],[
            ["_ga","Google","Distingue les utilisateurs de manière anonyme","2 ans","Mesure d'audience (si vous acceptez)"],
            ["_ga_W3V7MB7SZ7","Google","Conserve l'état de la session","2 ans","Mesure d'audience (si vous acceptez)"],
            ["Cookies Spotify","Spotify","Ceux que Spotify dépose au chargement de son lecteur (uniquement si vous lancez la lecture)","Selon Spotify","Tiers (uniquement si vous le chargez)"]]),
          ("h3","Stockage local du navigateur"),
          ("table",["Nom","Titulaire","Finalité","Durée","Type"],[
            ["af-consent (localStorage)","tomfabre.com","Mémorise votre choix sur les cookies de mesure d'audience (« granted » ou « denied »). Écrit lorsque vous cliquez sur Accepter ou Refuser","Jusqu'à suppression","Technique"],
            ["af-lang (localStorage)","tomfabre.com","Langue du site (es, en ou fr). Écrit au chargement du site et lorsque vous changez de langue","Jusqu'à suppression","Technique"],
            ["af-theme (localStorage)","tomfabre.com","Thème clair, sombre ou du système. Écrit lorsque vous changez de thème","Jusqu'à suppression","Technique"],
            ["af-view (localStorage)","tomfabre.com","Affichage des projets (grille ou liste). Écrit lorsque vous changez d'affichage","Jusqu'à suppression","Technique"],
            ["yodis-v2 (sessionStorage)","tomfabre.com","Progression de la conversation avec l'assistant (options choisies) ; il ne stocke pas le texte que vous saisissez","Jusqu'à la fermeture de l'onglet","Technique"]]),
          ("p","Le stockage technique est nécessaire au fonctionnement du site ou à la mémorisation de vos réglages et ne demande pas de consentement. Les cookies de mesure d'audience et le script de Google Analytics ne s'activent que si vous cliquez sur « Accepter » dans l'avis cookies, et le lecteur Spotify ne se charge que si vous cliquez sur son bouton. Je n'utilise pas de cookies publicitaires. Tant que vous n'acceptez pas les cookies de mesure d'audience, le site ne télécharge pas le script de Google Analytics (googletagmanager.com) et n'envoie aucune donnée à Google Analytics."),
          ("p","Vous pouvez modifier votre choix à tout moment avec le bouton « Cookies » en bas de page, ou supprimer les cookies et les données du site depuis les réglages de votre navigateur."),
          ("p","Google LLC peut traiter ces données en tant que sous-traitant ; voir la politique de confidentialité de Google pour plus d'informations.")])]
        )

def render(lg, site, email, css, consent_js, nav_extra="", og_html=""):
    d = txt(lg, email, site)
    e = lambda s: _h.escape(s, quote=True)
    out = []
    for sid, title, blocks in d["sections"]:
        out.append(f'<section id="{sid}" class="lg-sec"><h2>{e(title)}</h2>')
        last_h3 = ""
        for b in blocks:
            if b[0] == "p": out.append(f"<p>{e(b[1])}</p>")
            elif b[0] == "h3": last_h3 = b[1]; out.append(f"<h3>{e(b[1])}</h3>")
            elif b[0] == "ul": out.append("<ul>" + "".join(f"<li>{e(x)}</li>" for x in b[1]) + "</ul>")
            elif b[0] == "table":
                out.append('<div class="lg-tw" tabindex="0" role="region" aria-label="' + e(last_h3 or b[1][0]) + '"><table><thead><tr>' + "".join(f"<th scope='col'>{e(x)}</th>" for x in b[1]) + "</tr></thead><tbody>" + "".join("<tr>" + "".join(f"<td>{e(c)}</td>" for c in row) + "</tr>" for row in b[2]) + "</tbody></table></div>")
        out.append("</section>")
    toc = "".join(f'<a href="#{sid}">{e(t)}</a>' for sid, t, _ in d["sections"])
    cookies_btn = {"es": "Configurar cookies", "en": "Cookie settings", "fr": "Paramétrer les cookies"}[lg]
    url = lambda l: f"{site}/{PATHS[l]}/"
    hre = "".join(f'<link rel="alternate" hreflang="{l}" href="{url(l)}">' for l in ("es", "en", "fr")) + f'<link rel="alternate" hreflang="x-default" href="{url("es")}">'
    langs = "".join(f'<a href="/{PATHS[l]}/" hreflang="{l}" lang="{l}"{" aria-current=\"page\"" if l == lg else ""}>{l.upper()}</a>' for l in ("es", "en", "fr"))
    LOC = {"es": "es_ES", "en": "en_GB", "fr": "fr_FR"}
    page_css = """
.lg-page{max-width:48rem;margin-inline:auto;padding:var(--s8) 0 var(--s16)}
.lg-top{display:flex;justify-content:space-between;align-items:center;gap:var(--s5);padding:var(--s6) 0;flex-wrap:wrap}
.lg-top a{text-decoration:none}.lg-top .lg-back{text-decoration:underline;text-underline-offset:.25em}
.lg-langs{display:flex;gap:.9rem;font-size:.8rem;letter-spacing:.1em}.lg-langs a[aria-current]{text-decoration:underline;text-underline-offset:.3em}
.lg-page h1{font-size:var(--h1,clamp(2.4rem,6vw,4rem));line-height:1;letter-spacing:-.03em;margin:var(--s8) 0 var(--s4)}
.lg-toc{display:flex;flex-wrap:wrap;gap:.4rem 1.4rem;margin-bottom:var(--s10);color:var(--muted)}.lg-toc a{text-decoration:underline;text-underline-offset:.25em}
.lg-sec{border-top:1px solid var(--line2);padding-block:var(--s10)}
.lg-sec h2{font-size:clamp(1.6rem,3vw,2.2rem);line-height:1.1;letter-spacing:-.02em;margin-bottom:var(--s5)}
.lg-sec h3{font-size:1.05rem;margin:var(--s6) 0 var(--s2)}
.lg-sec p,.lg-sec li{color:var(--muted);line-height:1.65;max-width:none}.lg-sec p{margin-bottom:var(--s3)}
.lg-sec ul{padding-left:1.2rem;display:grid;gap:.5rem;list-style:disc}
.lg-tw{overflow-x:auto;margin-bottom:var(--s4)}.lg-sec table{width:100%;border-collapse:collapse;font-size:.88rem;min-width:36rem}
.lg-sec th,.lg-sec td{text-align:left;padding:.7rem .8rem;border-bottom:1px solid var(--line2);vertical-align:top}.lg-sec th{color:var(--fg);font-weight:500}.lg-sec td{color:var(--muted)}
.lg-btn{margin-top:var(--s4);background:none;border:1px solid var(--fg);border-radius:var(--pill);padding:.6rem 1.2rem;font:inherit;cursor:pointer}
.lg-btn:hover{background:var(--fg);color:var(--bg)}
.lg-upd{color:var(--muted);font-size:.85rem}
"""
    return f"""<!doctype html>
<html lang="{lg}">
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<title>{e(d['title'])}</title>
<meta name="description" content="{e(d['desc'])}">
<meta name="robots" content="index,follow">
<link rel="canonical" href="{url(lg)}">{hre}
<meta property="og:title" content="{e(d['title'])}"><meta property="og:description" content="{e(d['desc'])}"><meta property="og:type" content="website"><meta property="og:url" content="{url(lg)}"><meta property="og:locale" content="{LOC[lg]}"><meta property="og:site_name" content="Tom Fabre">{og_html}<meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="{e(d['title'])}"><meta name="twitter:description" content="{e(d['desc'])}">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<script>try{{var t=localStorage.getItem("af-theme");if(t==="dark"||t==="light")document.documentElement.dataset.theme=t}}catch(e){{}}</script>
<script>
window.dataLayer = window.dataLayer || [];
function gtag(){{ dataLayer.push(arguments); }}
gtag("consent", "default", {{ ad_storage:"denied", ad_user_data:"denied", ad_personalization:"denied", analytics_storage:"denied", wait_for_update:500 }});
{consent_js}
gtag("js", new Date());
gtag("config", "G-W3V7MB7SZ7", {{ send_page_view:false, allow_google_signals:false, allow_ad_personalization_signals:false }});
if (/^(www\\.)?tomfabre\\.com$/.test(location.hostname)) {{ gtag("event", "page_view", {{ page_location: location.origin + location.pathname, page_title: document.title, page_language: document.documentElement.lang }}); }}
</script>
<style>{css}{page_css}</style>
<body>
<div class="wrap lg-page">
  <header class="lg-top"><a class="lg-back" href="{HOME[lg]}">← {e(d['back'])}</a><nav class="lg-langs" aria-label="Language">{langs}</nav></header>
  <main>
    <h1>{e(d['h1'])}</h1>
    <p class="lg-upd">{e(d['upd'])}: {CFG['updated']}</p>
    <nav class="lg-toc" aria-label="{e(d['h1'])}">{toc}</nav>
    {''.join(out)}
    <button type="button" class="lg-btn" data-cookie-settings>{e(cookies_btn)}</button>
  </main>
</div>
</body>
</html>
"""
