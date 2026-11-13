/* VERSION B · project list: 5 on home, all 12 on the Projects page */
PROJ.length = 0;
PROJ.push(
  {key:"contazara", years:"2025 – 2026",
    role:{es:"Dirección creativa · Branding · Estrategia digital", en:"Creative direction · Branding · Digital strategy", fr:"Direction créative · Branding · Stratégie digitale"}},
  {key:"carceral", role:"Product Designer", years:"Web", locked:{es:"En proceso", en:"In progress", fr:"En cours"}},   // locked: visible but not clickable (see projCard in c2.js); remove `locked` to publish
  {key:"a2pas", years:"2023 – 2024", role:{"es": "Product Designer · UX/UI · Branding", "en": "Product Designer · UX/UI · Branding", "fr": "Product Designer · UX/UI · Identité visuelle"}},
  {key:"happylife", role:"Lead Product Designer", years:"2023"},
  {key:"binome", role:{es:"Cofundador · Dirección creativa y diseño", en:"Co-founder · Creative & Product Design", fr:"Cofondateur · Direction créative et design"}, years:{es:"Estudio en activo", en:"Studio in operation", fr:"Studio en activité"}},
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
  ["À2pas", "Product Design · UX/UI · Branding", "Cultura y espectáculos", "Una plataforma participativa que conecta espectadores, artistas y espacios para hacer posibles nuevos espectáculos.", "Investigación de usuarios, personas, user journeys, arquitectura de información, wireframes, UX/UI, prototipos, identidad visual, desarrollo y pruebas.", "Investigación UX · Diseño de producto · Branding · Desarrollo", "La cultura, en manos de quienes la viven."],
  ["HappyLife", "Product Design · UX/UI", "Startup francesa · App social", "Una app para conectar personas a través de actividades reales, con menos clics, mejores filtros y recompensas por participar.", "Estudio UX/UI, investigación y análisis de necesidades, arquitectura de información y recorridos, diseño de interfaces, prototipado y puesta en marcha del MVP.", "UX Research · UX/UI · Prototipado · MVP", "Menos pantalla. Más vida real."],
  ["Binōme Studio", "Branding · Estrategia · Web", "Estudio independiente", "Un estudio independiente nacido de unir experiencias, ideas y disciplinas para crear proyectos con personalidad.", "Cofundación del estudio, estrategia, identidad visual, web, UX/UI y relación con clientes.", "Branding · Web · UX/UI · Estrategia", "Dos caminos. Una forma de hacer las cosas."],
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
  ["À2pas", "Product Design · UX/UI · Branding", "Culture & Live Entertainment", "A participatory platform connecting audiences, artists and venues to make new performances possible.", "User research, personas, user journeys, information architecture, wireframes, UX/UI, prototypes, visual identity, development and testing.", "UX Research · Product Design · Branding · Development", "Putting culture in the hands of its audience."],
  ["HappyLife", "Product Design · UX/UI", "French startup · Social app", "An app bringing people together through real activities, with fewer taps, smarter filters and rewards for taking part.", "UX/UI study, research and needs analysis, information architecture and journeys, interface design, prototyping and MVP launch.", "UX Research · UX/UI · Prototyping · MVP", "Less screen time. More real life."],
  ["Binōme Studio", "Branding · Strategy · Web", "Independent design studio", "An independent studio built on combining experience, ideas and different skills to create thoughtful work.", "Studio co-founding, strategy, visual identity, web, UX/UI and client relationships.", "Branding · Web · UX/UI · Strategy", "Two paths. One way of doing things."],
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
  ["À2pas", "Product Design · UX/UI · Identité visuelle", "Culture et spectacle vivant", "Une plateforme participative qui rapproche publics, artistes et lieux pour faire naître de nouveaux spectacles.", "Recherche utilisateurs, personas, parcours utilisateurs, architecture de l'information, wireframes, UX/UI, prototypes, identité visuelle, développement et tests.", "Recherche UX · Design produit · Identité visuelle · Développement", "La culture entre les mains de son public."],
  ["HappyLife", "Design produit · UX/UI", "Startup française · Application sociale", "Une appli pour rapprocher les gens autour d'activités réelles, avec moins de clics, des filtres pertinents et des récompenses pour participer.", "Étude UX/UI, recherche et analyse des besoins, architecture de l'information et parcours, design d'interfaces, prototypage et mise en œuvre du MVP.", "Recherche UX · UX/UI · Prototypage · MVP", "Moins d'écran. Plus de vraie vie."],
  ["Binōme Studio", "Branding · Stratégie · Web", "Studio de design indépendant", "Un studio indépendant né de la rencontre de deux parcours et de compétences complémentaires.", "Cofondation du studio, stratégie, identité visuelle, web, UX/UI et relation client.", "Branding · Web · UX/UI · Stratégie", "Deux parcours. Une même façon de faire."],
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
