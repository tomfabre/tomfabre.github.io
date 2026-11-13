/* VERSION B · project list: 5 on home, all 12 on the Projects page */
PROJ.length = 0;
PROJ.push(
  {key:"contazara", role:"Lead Product Designer", years:"2022 –"},
  {key:"carceral", role:"Product Designer", years:"Web"},
  {key:"a2pas", role:"Product Designer", years:"Brand + web"},
  {key:"happylife", role:"Lead Product Designer", years:"App"},
  {key:"binome", role:"Co-founder & Lead Designer", years:"Studio"},
  {key:"yaypegs", role:"Product Designer", years:"Digital"},
  {key:"360estudio", role:"Lead Product Designer", years:"Binōme"},
  {key:"figy", role:"Product Designer", years:"Digital"},
  {key:"apolo", role:"Senior UX/UI Designer", years:"2018–2022"},
  {key:"appy", role:"Senior UX/UI Designer", years:"2018–2022"},
  {key:"mood", role:"Senior UX/UI Designer", years:"2018–2022"},
  {key:"molyb", role:"UX/UI Designer", years:"2015–2017"}
);
const HOME_PROJECTS = 4;
// [name, category, context, short, long, services, tagline]
const NP = {
es: (() => { const o = T.es.projects; return [
  o[0],
  ["Carceral Ecologies","Diseño web","Proyecto web","Diseño web para Carceral Ecologies: una estructura clara para que el contenido se lea, se explore y se recuerde.","Diseñé la experiencia web: arquitectura de la información, jerarquía de contenidos y una interfaz sobria que pone el foco en lo que hay que contar.","Diseño web · Arquitectura de la información","Un sitio que da espacio a las ideas."],
  ["À2pas","Branding · Diseño web","Marca y web","Identidad y web para À2pas: una marca cercana y reconocible, con una presencia digital coherente.","Construí la identidad visual y el diseño web buscando un lenguaje cercano, claro y coherente entre marca y sitio.","Branding · Diseño web","Una marca cercana, a dos pasos de las personas."],
  ["Happylife","UX/UI · App de salud mental","Salud mental · App","Diseño de la experiencia de una app de salud mental: acompañar con calma, claridad y un tono humano.","Dirigí el UX/UI de una app en fase MVP, coordinando al equipo de producto remoto y a las personas de negocio para que las decisiones de diseño llegaran a desarrollo sin ruido.","UX/UI · Producto · Salud mental","Hacer que cuidarse se sienta sencillo."],
  ["Binōme Studio","Marca · Web","Estudio propio","Identidad y web de Binōme, el estudio de diseño que dirijo en Madrid con mi socia.","Diseñé la marca y la web de nuestro propio estudio: un lugar donde explicar cómo trabajamos y mostrar lo que hacemos, con el mismo criterio que aplicamos a cada cliente.","Branding · Web","El estudio, diseñado con el mismo cuidado que sus clientes."],
  ["Yaypegs","Diseño digital","Proyecto digital","Diseño digital para Yaypegs: una experiencia clara, con personalidad y fácil de usar.","Trabajé la experiencia y la identidad visual cuidando la claridad de uso y la coherencia entre marca y producto.","Diseño digital · UX/UI","Detalles que se notan."],
  o[2],
  ["Figy","Diseño digital","Proyecto digital","Diseño digital para Figy: una experiencia clara y coherente de principio a fin.","Trabajé la experiencia y la interfaz cuidando la claridad, el ritmo y la coherencia visual.","Diseño digital · UX/UI","Una idea, bien resuelta."],
  ["Apolo","App · Launcher Android","Móvil · MadSeven","La interfaz de un launcher Android accesible y muy personalizable, con más de 3M de descargas.","Diseñé la interfaz de un launcher pensado para personalizarse sin perder claridad ni accesibilidad.","Producto móvil · UI · Accesibilidad","Un móvil que se siente tuyo."],
  ["Appy","App · Onboarding","Móvil · MadSeven","Un onboarding más corto que redujo el abandono en más de 500K usuarios.","Simplifiqué el onboarding apoyándome en análisis de comportamiento y pruebas A/B.","Onboarding · UX · A/B","Menos pasos, más gente que llega."],
  ["Mood Messenger","App · Mensajería","Móvil · MadSeven","Flujos de mensajería rediseñados para priorizar personalización y retención, con más de 5M de descargas.","Rediseñé los flujos de mensajería para que personalizar y volver a la app fuese más natural.","Producto móvil · Flujos · Retención","Conversar, a tu manera."],
  ["Molyb","Plataforma educativa","Minería · INGC","Una plataforma educativa interactiva que volvía accesible contenido técnico complejo.","Creé una plataforma educativa para el sector minero: contenido técnico presentado de forma clara e interactiva.","UX/UI · Plataformas · E-learning","Hacer simple lo técnico."]
]; })(),
en: (() => { const o = T.en.projects; return [
  o[0],
  ["Carceral Ecologies","Web design","Web project","Web design for Carceral Ecologies: a clear structure so the content can be read, explored and remembered.","I designed the web experience: information architecture, content hierarchy and a restrained interface that keeps the focus on what needs to be said.","Web design · Information architecture","A site that gives ideas room."],
  ["À2pas","Branding · Web design","Brand and web","Identity and website for À2pas: a close, recognisable brand with a consistent digital presence.","I built the visual identity and web design aiming for a warm, clear language shared between brand and site.","Branding · Web design","A brand within arm's reach."],
  ["Happylife","UX/UI · Mental health app","Mental health · App","Designing the experience of a mental health app: support with calm, clarity and a human tone.","I led the UX/UI of an MVP-stage app, coordinating the remote product team and business stakeholders so design decisions reached development without noise.","UX/UI · Product · Mental health","Making self-care feel simple."],
  ["Binōme Studio","Brand · Web","Own studio","Identity and website for Binōme, the design studio I run in Madrid with my partner.","I designed the brand and website of our own studio: a place to explain how we work and show what we do, with the same care we give every client.","Branding · Web","A studio designed with the care it gives its clients."],
  ["Yaypegs","Digital design","Digital project","Digital design for Yaypegs: a clear experience with personality that's easy to use.","I worked on the experience and visual identity, caring for ease of use and consistency between brand and product.","Digital design · UX/UI","Details you notice."],
  o[2],
  ["Figy","Digital design","Digital project","Digital design for Figy: a clear, consistent experience from start to finish.","I worked on the experience and interface, caring for clarity, rhythm and visual consistency.","Digital design · UX/UI","One idea, well solved."],
  ["Apolo","App · Android launcher","Mobile · MadSeven","The interface of an accessible, highly customisable Android launcher with 3M+ downloads.","I designed the interface of a launcher built to be personalised without losing clarity or accessibility.","Mobile product · UI · Accessibility","A phone that feels like yours."],
  ["Appy","App · Onboarding","Mobile · MadSeven","A shorter onboarding that reduced drop-off for 500K+ users.","I simplified the onboarding using behaviour analytics and A/B testing.","Onboarding · UX · A/B","Fewer steps, more people arriving."],
  ["Mood Messenger","App · Messaging","Mobile · MadSeven","Messaging flows redesigned to prioritise personalisation and retention, with 5M+ downloads.","I redesigned the messaging flows so personalising and coming back felt more natural.","Mobile product · Flows · Retention","Chat, your way."],
  ["Molyb","Educational platform","Mining · INGC","An interactive educational platform that made complex technical content accessible.","I created an educational platform for the mining sector: technical content presented clearly and interactively.","UX/UI · Platforms · E-learning","Making technical simple."]
]; })(),
fr: (() => { const o = T.fr.projects; return [
  o[0],
  ["Carceral Ecologies","Web design","Projet web","Design web pour Carceral Ecologies : une structure claire pour que le contenu se lise, s'explore et se retienne.","J'ai conçu l'expérience web : architecture de l'information, hiérarchie des contenus et interface sobre qui met l'accent sur l'essentiel.","Web design · Architecture de l'information","Un site qui laisse de la place aux idées."],
  ["À2pas","Branding · Web design","Marque et web","Identité et site pour À2pas : une marque proche et reconnaissable, avec une présence digitale cohérente.","J'ai construit l'identité visuelle et le design web avec un langage chaleureux, clair et cohérent entre marque et site.","Branding · Web design","Une marque à deux pas des gens."],
  ["Happylife","UX/UI · App de santé mentale","Santé mentale · App","Conception de l'expérience d'une app de santé mentale : accompagner avec calme, clarté et un ton humain.","J'ai dirigé l'UX/UI d'une app en phase MVP, en coordonnant l'équipe produit à distance et le métier pour que les décisions arrivent au développement sans bruit.","UX/UI · Produit · Santé mentale","Rendre le soin de soi simple."],
  ["Binōme Studio","Marque · Web","Studio propre","Identité et site de Binōme, le studio de design que je dirige à Madrid avec mon associée.","J'ai conçu la marque et le site de notre propre studio : un lieu pour expliquer notre façon de travailler, avec le même soin que pour chaque client.","Branding · Web","Un studio conçu avec le soin qu'il offre à ses clients."],
  ["Yaypegs","Design digital","Projet digital","Design digital pour Yaypegs : une expérience claire, avec de la personnalité et facile à utiliser.","J'ai travaillé l'expérience et l'identité visuelle en soignant la lisibilité d'usage et la cohérence entre marque et produit.","Design digital · UX/UI","Des détails qui se remarquent."],
  o[2],
  ["Figy","Design digital","Projet digital","Design digital pour Figy : une expérience claire et cohérente de bout en bout.","J'ai travaillé l'expérience et l'interface en soignant la clarté, le rythme et la cohérence visuelle.","Design digital · UX/UI","Une idée, bien résolue."],
  ["Apolo","App · Launcher Android","Mobile · MadSeven","L'interface d'un launcher Android accessible et très personnalisable, avec plus de 3M de téléchargements.","J'ai conçu l'interface d'un launcher pensé pour se personnaliser sans perdre en clarté ni en accessibilité.","Produit mobile · UI · Accessibilité","Un mobile qui vous ressemble."],
  ["Appy","App · Onboarding","Mobile · MadSeven","Un onboarding plus court qui a réduit l'abandon pour plus de 500K utilisateurs.","J'ai simplifié l'onboarding à partir de l'analyse des comportements et de tests A/B.","Onboarding · UX · A/B","Moins d'étapes, plus de monde au bout."],
  ["Mood Messenger","App · Messagerie","Mobile · MadSeven","Parcours de messagerie repensés pour favoriser personnalisation et rétention, avec plus de 5M de téléchargements.","J'ai repensé les parcours de messagerie pour que personnaliser et revenir dans l'app soient plus naturels.","Produit mobile · Parcours · Rétention","Discuter, à votre manière."],
  ["Molyb","Plateforme éducative","Mines · INGC","Une plateforme éducative interactive qui rendait accessible un contenu technique complexe.","J'ai créé une plateforme éducative pour le secteur minier : un contenu technique présenté de façon claire et interactive.","UX/UI · Plateformes · E-learning","Rendre le technique simple."]
]; })()
};
Object.keys(NP).forEach(k => { T[k].projects = NP[k]; });
