/* Case-study sections + per-project SEO overrides (optional per project; validated by validate_sections.py at build).
   SECTIONS[projectKey] = [section, ...]. Every visible string is {es, en, fr}.
   Types today: "text" {id,h,t?,p[],img?,flow?[{p[]}|{img}|{fig}]} and "metrics" {id,h,t?,p?[],items[{n,l}],after?[],flow?}.
   A paragraph is {es,en,fr} (+ em:true for a bold line). To add a type: validate_sections.py TYPES + SECTION_RENDER in c2.js.
   Projects without an entry keep the classic layout. */
const SECTIONS = {
  contazara: [
 {
  "type": "text",
  "id": "caso",
  "h": {
   "es": "Contazara",
   "en": "Contazara",
   "fr": "Contazara"
  },
  "t": {
   "es": "Una nueva etapa. Sin olvidar el camino.",
   "en": "A new chapter. Without forgetting the story.",
   "fr": "Une nouvelle étape. Sans oublier le chemin parcouru."
  },
  "p": [
   {
    "es": "Renovar una marca con tanta historia no es simplemente cambiar su aspecto.",
    "en": "Refreshing a brand with this much history takes more than changing how it looks.",
    "fr": "Faire évoluer une marque avec autant d'histoire ne consiste pas simplement à changer son apparence."
   },
   {
    "es": "Había que entender qué representaba Contazara para las personas que llevan años formando parte de ella, qué había cambiado en la empresa y cómo reflejar esa evolución.",
    "en": "We needed to understand what Contazara meant to the people who had been part of it for years, how the business had changed, and how its identity could reflect that evolution.",
    "fr": "Il fallait comprendre ce que Contazara représentait pour les personnes qui la font vivre depuis des années, ce qui avait changé dans l'entreprise et comment traduire cette évolution."
   },
   {
    "es": "La idea era darle una nueva imagen sin perder todo lo que ya la hacía reconocible.",
    "en": "The idea was to give the brand a fresh look without losing what people already recognised.",
    "fr": "L'idée : lui donner une nouvelle image sans perdre ce qui la rendait déjà reconnaissable."
   }
  ]
 },
 {
  "type": "text",
  "id": "reto",
  "h": {
   "es": "01 · El reto",
   "en": "01 · The challenge",
   "fr": "01 · Le défi"
  },
  "t": {
   "es": "40 años de historia. Y mucho por delante.",
   "en": "40 years of history. Plenty more to come.",
   "fr": "40 ans d'histoire. Et encore beaucoup à venir."
  },
  "p": [
   {
    "es": "Contazara lleva décadas desarrollando tecnología para la medición y gestión del agua. Durante ese tiempo, sus productos y su manera de trabajar han evolucionado.",
    "en": "Contazara has spent decades developing technology for water measurement and management. Over that time, its products and ways of working have evolved.",
    "fr": "Depuis des décennies, Contazara développe des technologies pour mesurer et gérer l'eau. Au fil du temps, ses produits et ses méthodes de travail ont évolué."
   },
   {
    "es": "Su identidad visual necesitaba acompañar ese cambio.",
    "en": "Its visual identity needed to keep up.",
    "fr": "Son identité visuelle devait suivre ce mouvement."
   },
   {
    "es": "Pero había algo importante: no queríamos romper con su historia ni dejar atrás aquello con lo que sus equipos se identificaban.",
    "en": "But there was one thing we didn't want to lose: the company's history and the elements its teams still connected with.",
    "fr": "Mais une chose était essentielle : ne pas tourner le dos à son histoire ni à ce dans quoi ses équipes se reconnaissaient."
   },
   {
    "es": "El reto era encontrar un equilibrio entre lo que Contazara había sido y lo que quería ser.",
    "en": "The challenge was to find the right balance between where Contazara had come from and where it wanted to go.",
    "fr": "Tout l'enjeu était de trouver le bon équilibre entre ce que Contazara avait été et ce qu'elle voulait devenir."
   }
  ]
 },
 {
  "type": "text",
  "id": "proceso",
  "h": {
   "es": "02 · El proceso y la identidad",
   "en": "02 · The process and identity",
   "fr": "02 · Le processus et l'identité"
  },
  "t": {
   "es": "Antes de cambiar nada, había que escuchar.",
   "en": "Before changing anything, we needed to listen.",
   "fr": "Avant de changer quoi que ce soit, il fallait écouter."
  },
  "p": [
   {
    "es": "Empezamos hablando con la dirección y con diferentes equipos de Contazara.",
    "en": "We started by talking to Contazara's leadership and teams across the company.",
    "fr": "Nous avons commencé par échanger avec la direction et différentes équipes de Contazara."
   },
   {
    "es": "Queríamos conocer sus puntos de vista, entender qué funcionaba, qué necesitaba cambiar y qué elementos de la marca merecía la pena conservar.",
    "en": "We wanted to hear different perspectives, understand what was working, what needed to change, and which parts of the brand were worth keeping.",
    "fr": "Nous voulions comprendre leurs points de vue, voir ce qui fonctionnait, ce qui devait évoluer et quels éléments de la marque méritaient d'être conservés."
   },
   {
    "es": "Con todo eso sobre la mesa, empezamos a explorar una nueva dirección visual.",
    "en": "With those conversations in mind, we began exploring a new visual direction.",
    "fr": "Avec tout cela en tête, nous avons exploré une nouvelle direction visuelle."
   },
   {
    "es": "El resultado fue una identidad construida alrededor de un símbolo que combina las letras C y Z, utilizando geometría, precisión y movimiento como parte de su lenguaje gráfico.",
    "en": "The result was an identity built around a symbol combining the letters C and Z, using geometry, precision, and movement as part of its visual language.",
    "fr": "Le résultat : une identité construite autour d'un symbole qui associe les lettres C et Z, avec la géométrie, la précision et le mouvement comme éléments du langage graphique."
   }
  ],
  "flow": [
   {
    "fig": {
     "key": "contazara",
     "v": "4",
     "r": "16/7",
     "alt": {
      "es": "Construcción geométrica del isotipo de Contazara sobre su retícula, con la versión horizontal del logotipo y la paleta de color corporativa",
      "en": "Geometric construction of the Contazara symbol on its grid, with the horizontal logo and the corporate colour palette",
      "fr": "Construction géométrique du symbole Contazara sur sa grille, avec la version horizontale du logotype et la palette de couleurs"
     }
    }
   },
   {
    "p": [
     {
      "es": "Pero no queríamos quedarnos en un logotipo.",
      "en": "But we didn't want to stop at a logo.",
      "fr": "Mais il ne s'agissait pas seulement de dessiner un logo."
     },
     {
      "es": "Desarrollamos un sistema visual con sus propios colores, tipografías y aplicaciones, pensado para funcionar en distintos formatos y acompañar a la empresa durante esta nueva etapa.",
      "en": "We developed a visual system with its own colours, typography, and applications, designed to work across different formats and support the company through its next chapter.",
      "fr": "Nous avons créé un système visuel avec ses propres couleurs, typographies et déclinaisons, pensé pour fonctionner sur différents supports et accompagner cette nouvelle étape."
     },
     {
      "es": "Una identidad renovada que los equipos también pudieran reconocer como suya.",
      "en": "A refreshed identity the teams could recognise as their own, too.",
      "fr": "Une identité renouvelée dans laquelle les équipes pouvaient elles aussi se reconnaître."
     }
    ]
   }
  ]
 },
 {
  "type": "text",
  "id": "web",
  "h": {
   "es": "03 · Web y comunicación",
   "en": "03 · Website and communications",
   "fr": "03 · Site web et communication"
  },
  "t": {
   "es": "Una nueva imagen también necesita una nueva forma de contar las cosas.",
   "en": "A new look also needs a new way to tell the story.",
   "fr": "Une nouvelle image appelle aussi une nouvelle façon de raconter les choses."
  },
  "p": [
   {
    "es": "Una vez definida la identidad, tocaba llevarla a los lugares donde las personas se encuentran con Contazara.",
    "en": "Once we'd defined the identity, it was time to bring it into the places where people interact with Contazara.",
    "fr": "Une fois l'identité définie, il fallait lui donner vie là où les gens rencontrent Contazara."
   },
   {
    "es": "Uno de los principales fue {web}.",
    "en": "One of the most important was {web}.",
    "fr": "{web} en était un élément central.",
    "links": {
     "web": {
      "href": "https://www.contazara.es/",
      "t": {
       "es": "su web",
       "en": "its website",
       "fr": "Le site web"
      }
     }
    }
   },
   {
    "es": "Trabajamos en su diseño y desarrollo para organizar mejor la información, facilitar la exploración de sus productos y explicar su tecnología de una manera más clara y accesible.",
    "en": "We worked on the design and development to organise information more clearly, make its products easier to explore, and explain the technology in a more accessible way.",
    "fr": "Nous avons repensé son design et son développement pour mieux organiser les informations, faciliter la découverte des produits et expliquer la technologie de manière plus claire et accessible."
   },
   {
    "es": "También queríamos dar espacio a las personas y a la historia que hay detrás de la empresa.",
    "en": "We also wanted to make room for the people and history behind the business.",
    "fr": "Nous voulions aussi faire une place aux personnes et à l'histoire de l'entreprise."
   }
  ],
  "flow": [
   {
    "p": [
     {
      "es": "En paralelo, desarrollamos su tono de voz y una línea de contenidos para LinkedIn e Instagram.",
      "en": "Alongside the site, we developed its tone of voice and a content direction for LinkedIn and Instagram.",
      "fr": "En parallèle, nous avons travaillé sa tonalité éditoriale et une ligne de contenus pour LinkedIn et Instagram."
     },
     {
      "es": "Tecnología, sostenibilidad, actualidad y personas empezaron a convivir dentro de una comunicación más coherente con la nueva identidad.",
      "en": "Technology, sustainability, company news, and people became part of a more consistent communication style, aligned with the new identity.",
      "fr": "Technologie, développement durable, actualités et vie de l'entreprise se sont ainsi retrouvés dans une communication plus cohérente avec la nouvelle identité."
     }
    ]
   },
   {
    "pair": [
     {
      "key": "contazara",
      "v": "3",
      "alt": {
       "es": "Diseño de la web de Contazara",
       "en": "Contazara website design",
       "fr": "Design du site web de Contazara"
      }
     },
     {
      "key": "contazara",
      "v": "2",
      "alt": {
       "es": "Publicaciones de Contazara en LinkedIn e Instagram",
       "en": "Contazara posts on LinkedIn and Instagram",
       "fr": "Publications de Contazara sur LinkedIn et Instagram"
      }
     }
    ]
   },
   {
    "p": [
     {
      "es": "El objetivo era que Contazara se reconociera igual en su web, en una publicación o en cualquier otro punto de contacto.",
      "en": "The goal was for Contazara to feel like the same brand on its website, in a social post, and everywhere else.",
      "fr": "L'objectif : reconnaître Contazara aussi bien sur son site, dans une publication que sur n'importe quel autre support."
     }
    ]
   }
  ]
 },
 {
  "type": "metrics",
  "id": "resultados",
  "h": {
   "es": "04 · Resultados",
   "en": "04 · Results",
   "fr": "04 · Les résultats"
  },
  "t": {
   "es": "Una identidad que ya forma parte del día a día.",
   "en": "An identity that's become part of everyday life.",
   "fr": "Une identité qui fait déjà partie du quotidien."
  },
  "p": [
   {
    "es": "Lo más interesante de este proyecto es ver cómo la nueva identidad ha empezado a formar parte de la empresa.",
    "en": "What I find most rewarding is seeing how the new identity has become part of the business.",
    "fr": "Ce que je trouve le plus intéressant dans ce projet, c'est de voir comment la nouvelle identité a peu à peu trouvé sa place dans l'entreprise."
   },
   {
    "es": "Hoy está presente en su web, sus materiales corporativos, sus comunicaciones y sus oficinas.",
    "en": "Today, it appears across the website, corporate materials, communications, and offices.",
    "fr": "Elle apparaît aujourd'hui sur le site web, dans les supports institutionnels, les communications et les bureaux."
   },
   {
    "es": "También hemos visto evolucionar su presencia en redes sociales durante el periodo de trabajo.",
    "en": "We've also seen its social media audiences grow over the period we worked together.",
    "fr": "Nous avons également suivi l'évolution de la présence de Contazara sur les réseaux sociaux pendant notre collaboration."
   }
  ],
  "items": [
   {
    "n": {
     "es": "+77,4 %",
     "en": "+77.4%",
     "fr": "+77,4 %"
    },
    "l": {
     "es": "Seguidores en LinkedIn",
     "en": "LinkedIn followers",
     "fr": "Abonnés LinkedIn"
    }
   },
   {
    "n": {
     "es": "+46 %",
     "en": "+46%",
     "fr": "+46 %"
    },
    "l": {
     "es": "Seguidores en Instagram",
     "en": "Instagram followers",
     "fr": "Abonnés Instagram"
    }
   }
  ],
  "after": [
   {
    "es": "Entre septiembre de 2025 y noviembre de 2026, la comunidad de LinkedIn pasó de 930 a 1.650 seguidores, mientras que Instagram pasó de 250 a 366.",
    "en": "Between September 2025 and November 2026, LinkedIn grew from 930 to 1,650 followers, while Instagram went from 250 to 366.",
    "fr": "Entre septembre 2025 et novembre 2026, la communauté LinkedIn est passée de 930 à 1 650 abonnés, et celle d'Instagram de 250 à 366."
   },
   {
    "es": "Son cifras de crecimiento de audiencia durante este periodo, no resultados atribuibles únicamente al cambio de identidad.",
    "en": "These figures show audience growth over that period, not results that can be attributed solely to the rebrand.",
    "fr": "Ces chiffres reflètent la croissance des audiences sur cette période ; ils ne peuvent pas être attribués au seul changement d'identité."
   },
   {
    "es": "Más allá de los números, hay algo que me parece especialmente importante: ver que los equipos utilizan la nueva marca en su trabajo diario.",
    "en": "Beyond the numbers, there's something that matters even more to me: seeing the teams use the new identity in their day-to-day work.",
    "fr": "Au-delà des chiffres, ce qui compte particulièrement pour moi, c'est de voir les équipes utiliser cette nouvelle marque au quotidien."
   }
  ],
  "flow": [
   {
    "img": {
     "key": "contazara",
     "v": "1",
     "alt": {
      "es": "Propuesta de stand de Contazara con la nueva identidad aplicada a paneles, mostrador y mobiliario",
      "en": "Contazara trade-fair stand concept with the new identity applied to panels, counter and furniture",
      "fr": "Proposition de stand Contazara avec la nouvelle identité appliquée aux panneaux, au comptoir et au mobilier"
     }
    }
   }
  ]
 },
 {
  "type": "text",
  "id": "papel",
  "h": {
   "es": "05 · Un trabajo en equipo",
   "en": "05 · A team effort",
   "fr": "05 · Un travail collectif"
  },
  "t": {
   "es": "Muchas conversaciones. Una dirección compartida.",
   "en": "Many conversations. One shared direction.",
   "fr": "Beaucoup d'échanges. Une direction commune."
  },
  "p": [
   {
    "es": "Mi trabajo fue liderar la evolución de la identidad visual, la personalidad de marca y su comunicación digital.",
    "en": "I led the evolution of Contazara's visual identity, brand personality, and digital communications.",
    "fr": "J'ai piloté l'évolution de l'identité visuelle, de la personnalité de marque et de sa communication digitale."
   },
   {
    "es": "Desde las primeras conversaciones con la dirección hasta el desarrollo del nuevo lenguaje gráfico y sus aplicaciones, el proyecto fue tomando forma junto a las personas de Contazara.",
    "en": "From the first conversations with leadership to developing the new visual language and its applications, the project took shape alongside the people at Contazara.",
    "fr": "Des premiers échanges avec la direction à la création du nouveau langage graphique et de ses applications, le projet s'est construit avec les équipes de Contazara."
   },
   {
    "es": "Para las entrevistas con los equipos y el diseño y desarrollo web, trabajé con {binome}, del que soy cofundador.",
    "en": "For the team interviews and the website design and development, I worked with {binome}, which I co-founded.",
    "fr": "Pour les entretiens avec les équipes ainsi que la conception et le développement du site, j'ai travaillé avec {binome}, dont je suis cofondateur.",
    "links": {
     "binome": {
      "href": "https://binome.xyz/",
      "t": {
       "es": "Binōme Studio",
       "en": "Binōme Studio",
       "fr": "Binōme Studio"
      }
     }
    }
   },
   {
    "es": "También colaboramos con {estudio360}, responsable de la arquitectura y construcción de las nuevas oficinas, para integrar la identidad en los espacios físicos.",
    "en": "We also collaborated with {estudio360}, responsible for the architecture and construction of the new offices, to bring the identity into the physical spaces.",
    "fr": "Nous avons aussi collaboré avec {estudio360}, chargé de l'architecture et de la construction des nouveaux bureaux, pour intégrer l'identité aux espaces physiques.",
    "links": {
     "estudio360": {
      "href": "https://www.360estudio.io/",
      "t": {
       "es": "360estudio",
       "en": "360estudio",
       "fr": "360estudio"
      }
     }
    }
   },
   {
    "es": "Fue un proyecto en el que participaron personas de distintas disciplinas, con muchas decisiones compartidas por el camino.",
    "en": "People from different disciplines helped shape this project, with plenty of decisions made together along the way.",
    "fr": "Plusieurs disciplines se sont croisées sur ce projet, avec beaucoup de décisions prises ensemble."
   },
   {
    "es": "Y creo que eso también forma parte del resultado.",
    "en": "And I think that's part of the outcome, too.",
    "fr": "Et je crois que cela fait aussi partie du résultat."
   }
  ]
 },
 {
  "type": "text",
  "id": "cierre",
  "h": {
   "es": "Cierre",
   "en": "Closing",
   "fr": "Conclusion"
  },
  "t": {
   "es": "Una nueva imagen. La misma Contazara.",
   "en": "A fresh look. The same Contazara.",
   "fr": "Une nouvelle image. Toujours Contazara."
  },
  "p": [
   {
    "es": "Cambiar una marca con tanta historia requería entender qué debía evolucionar y qué merecía quedarse.",
    "en": "Refreshing a brand with so much history meant knowing what needed to change and what deserved to stay.",
    "fr": "Faire évoluer une marque aussi ancienne demandait de comprendre ce qui devait changer et ce qui méritait de rester."
   },
   {
    "es": "Hoy Contazara tiene una identidad que refleja mejor su presente, respeta su recorrido y puede acompañarla en lo que viene.",
    "en": "Today, Contazara has an identity that better reflects who it is now, respects its past, and gives it room to grow.",
    "fr": "Aujourd'hui, Contazara possède une identité qui reflète mieux son présent, respecte son parcours et peut l'accompagner dans la suite de son histoire."
   },
   {
    "em": true,
    "es": "¿Tu marca también está cambiando? Hablemos.",
    "en": "Is your brand changing, too? Let's talk.",
    "fr": "Ta marque est en train d'évoluer elle aussi ? Parlons-en."
   }
  ]
 }
],
  a2pas: [
 {
  "type": "text",
  "id": "reto",
  "h": {
   "es": "01 · El reto",
   "en": "01 · The challenge",
   "fr": "01 · Le défi"
  },
  "t": {
   "es": "Tres formas de vivir la cultura. Una misma plataforma.",
   "en": "Three ways to experience culture. One platform.",
   "fr": "Trois façons de vivre la culture. Une seule plateforme."
  },
  "p": [
   {
    "es": "Un espectador quiere descubrir conciertos. Un artista busca nuevos lugares donde actuar. Una sala necesita llenar su programación.",
    "en": "An audience member wants to discover concerts. An artist wants new places to perform. A venue needs to fill its calendar.",
    "fr": "Un spectateur veut découvrir des concerts. Un artiste cherche de nouvelles scènes. Une salle doit construire sa programmation."
   },
   {
    "es": "Los tres tienen algo en común, pero necesitan herramientas muy diferentes.",
    "en": "They have something in common, but they need very different tools.",
    "fr": "Ils ont des intérêts communs, mais des besoins très différents."
   },
   {
    "es": "El reto era diseñar una plataforma donde todos pudieran participar, sin que la complejidad del sistema complicara la experiencia.",
    "en": "The challenge was to create a platform where everyone could take part, without making the experience as complicated as the system behind it.",
    "fr": "Le défi consistait à créer une plateforme où chacun pouvait participer, sans que la complexité du système se retrouve dans l'expérience."
   }
  ]
 },
 {
  "type": "text",
  "id": "concepto",
  "h": {
   "es": "02 · El concepto",
   "en": "02 · The concept",
   "fr": "02 · Le concept"
  },
  "t": {
   "es": "De querer verlo a hacerlo posible.",
   "en": "From wanting to see it to making it happen.",
   "fr": "Passer de « j'aimerais le voir » à « on peut le faire »."
  },
  "p": [
   {
    "es": "Imagina que vives en Aix-en-Provence y descubres un grupo que solo tiene conciertos programados en París.",
    "en": "Imagine you live in Aix-en-Provence and discover a band that's only playing shows in Paris.",
    "fr": "Imagine que tu vis à Aix-en-Provence et que tu découvres un groupe dont les seuls concerts sont prévus à Paris."
   },
   {
    "es": "En lugar de esperar a que algún día llegue a tu ciudad, puedes buscar un espacio, elegir una fecha y proponer el espectáculo.",
    "en": "Instead of waiting for them to visit your city, you can find a venue, choose a date, and suggest a show.",
    "fr": "Au lieu d'attendre qu'il passe un jour dans ta ville, tu peux chercher une salle, proposer une date et lancer l'idée d'un concert."
   },
   {
    "es": "Otras personas pueden apoyar tu propuesta. Si se alcanza el interés necesario, el evento se activa y comienza la venta de entradas.",
    "en": "Other people can support the idea. If there's enough interest, the event goes ahead and ticket sales begin.",
    "fr": "D'autres personnes peuvent soutenir ta proposition. Si l'intérêt est suffisant, l'événement se concrétise et la billetterie ouvre."
   },
   {
    "es": "Así, una idea compartida puede terminar convirtiéndose en un concierto real.",
    "en": "A shared idea can turn into a real concert.",
    "fr": "Une envie partagée peut ainsi devenir un vrai concert."
   }
  ]
 },
 {
  "type": "text",
  "id": "producto",
  "h": {
   "es": "03 · Diseño del producto",
   "en": "03 · Product design",
   "fr": "03 · Le design du produit"
  },
  "t": {
   "es": "Lo complicado tenía que quedarse detrás de la pantalla.",
   "en": "The complexity needed to stay behind the screen.",
   "fr": "La complexité devait rester derrière l'écran."
  },
  "p": [
   {
    "es": "Mi trabajo abarcó desde la investigación y la definición de los recorridos hasta las interfaces, los prototipos y el desarrollo.",
    "en": "My work covered everything from research and user journeys to interfaces, prototypes, and development.",
    "fr": "J'ai travaillé sur l'ensemble du parcours, de la recherche et de la définition des usages aux interfaces, prototypes et développement."
   },
   {
    "es": "Por un lado, diseñé la experiencia del público: descubrir artistas, explorar eventos, hacer propuestas, participar y comprar entradas.",
    "en": "On one side, I designed the audience experience: discovering artists, browsing events, making suggestions, showing interest, and buying tickets.",
    "fr": "D'un côté, j'ai conçu l'expérience du public : découvrir des artistes, explorer les événements, faire une proposition, participer et acheter des billets."
   }
  ],
  "flow": [
   {
    "img": {
     "key": "a2pas",
     "v": "4",
     "alt": {
      "es": "Diagrama de navegación del público en À2pas: búsqueda, filtros por categoría, fichas de evento, artistas y espacios, identificación, pago y factura de compra. Las etiquetas están en francés.",
      "en": "Navigation diagram of the À2pas audience experience: search, category filters, event pages, artists and venues, sign-in, checkout and purchase invoice. Labels are in French.",
      "fr": "Diagramme de navigation du public sur À2pas : recherche, filtres par catégorie, fiches événements, artistes et lieux, identification, paiement et facture d'achat."
     },
     "r": "1440/743",
     "zoom": true,
     "cap": {
      "es": "Recorrido del público: búsqueda, filtros, fichas de evento, identificación, pago y confirmación. Toca la imagen para ampliarla. Etiquetas en francés.",
      "en": "The audience journey: search, filters, event pages, sign-in, checkout and confirmation. Tap the image to enlarge it. Labels are in French.",
      "fr": "Le parcours du public : recherche, filtres, fiches événements, identification, paiement et confirmation. Touche l'image pour l'agrandir."
     }
    }
   },
   {
    "p": [
     {
      "es": "Por otro, los artistas y los espacios necesitaban gestionar sus perfiles, calendarios, propuestas y eventos.",
      "en": "On the other, artists and venues needed to manage profiles, calendars, proposals, and events.",
      "fr": "De l'autre, artistes et salles avaient besoin de gérer leurs profils, calendriers, propositions et événements."
     }
    ]
   },
   {
    "img": {
     "key": "a2pas",
     "v": "5",
     "alt": {
      "es": "Diagrama de los espacios profesionales de À2pas: filtros y fichas de artistas y lugares, identificación, formulario, panel de control, calendario, nuevo evento y perfiles de usuario, artista y sala. Las etiquetas están en francés.",
      "en": "Diagram of the À2pas professional spaces: artist and venue filters and pages, sign-in, form, dashboard, calendar, new event and user, artist and venue profiles. Labels are in French.",
      "fr": "Diagramme des espaces professionnels d'À2pas : filtres et fiches artistes et lieux, identification, formulaire, tableau de bord, calendrier, nouvel événement et profils utilisateur, artiste et salle."
     },
     "r": "1440/750",
     "zoom": true,
     "cap": {
      "es": "Recorridos de artistas y espacios: fichas, identificación, formulario, panel de control, calendario, nuevo evento y perfiles por tipo de usuario. Toca la imagen para ampliarla. Etiquetas en francés.",
      "en": "Artist and venue journeys: pages, sign-in, form, dashboard, calendar, new event and a profile for each type of user. Tap the image to enlarge it. Labels are in French.",
      "fr": "Les parcours des artistes et des lieux : fiches, identification, formulaire, tableau de bord, calendrier, nouvel événement et un profil par type d'utilisateur. Touche l'image pour l'agrandir."
     }
    }
   },
   {
    "p": [
     {
      "es": "No se trataba de poner todas las funciones en un mismo sitio, sino de conseguir que cada persona encontrara lo que necesitaba.",
      "en": "The goal wasn't to put every feature in one place. It was to help each person find what they needed.",
      "fr": "L'idée n'était pas de rassembler toutes les fonctionnalités au même endroit, mais de permettre à chacun de trouver facilement ce dont il avait besoin."
     }
    ]
   }
  ]
 },
 {
  "type": "text",
  "id": "participacion",
  "h": {
   "es": "04 · La experiencia participativa",
   "en": "04 · A participatory experience",
   "fr": "04 · Une expérience participative"
  },
  "t": {
   "es": "El público también podía decidir qué pasaba en el escenario.",
   "en": "The audience had a say in what happened on stage.",
   "fr": "Le public pouvait aussi décider de ce qui se passait sur scène."
  },
  "p": [
   {
    "es": "À2pas proponía otra manera de programar espectáculos.",
    "en": "À2pas offered a different way to programme live events.",
    "fr": "À2pas proposait une autre façon de programmer des spectacles."
   },
   {
    "es": "En lugar de decidir toda la programación de antemano, permitía conocer el interés real de una comunidad antes de organizar un evento.",
    "en": "Instead of planning every show in advance, it helped gauge genuine community interest before organising an event.",
    "fr": "Au lieu de tout décider en amont, la plateforme permettait de mesurer l'intérêt réel d'une communauté avant d'organiser un événement."
   }
  ],
  "flow": [
   {
    "img": {
     "key": "a2pas",
     "v": "1",
     "alt": {
      "es": "Componentes de interfaz de À2pas: perfil de artista, fichas de evento, botones y barras de progreso",
      "en": "À2pas interface components: artist profile, event cards, buttons and progress bars",
      "fr": "Composants d'interface d'À2pas : profil d'artiste, fiches événements, boutons et barres de progression"
     }
    }
   },
   {
    "p": [
     {
      "es": "Los espectadores podían participar en las decisiones. Los artistas encontraban nuevas oportunidades y las salas podían aprovechar fechas disponibles.",
      "en": "Audiences could take part in the decision-making. Artists gained new opportunities, and venues could make use of available dates.",
      "fr": "Les spectateurs participaient aux choix. Les artistes découvraient de nouvelles opportunités et les salles pouvaient valoriser leurs dates disponibles."
     },
     {
      "es": "La plataforma llegó a lanzarse y utilizarse.",
      "en": "The platform was launched and used.",
      "fr": "La plateforme a été lancée et utilisée."
     }
    ]
   }
  ]
 },
 {
  "type": "text",
  "id": "trabajo",
  "h": {
   "es": "05 · Mi trabajo",
   "en": "05 · My role",
   "fr": "05 · Mon rôle"
  },
  "t": {
   "es": "Diseñar mucho más que pantallas.",
   "en": "Designing much more than screens.",
   "fr": "Concevoir bien plus que des écrans."
  },
  "p": [
   {
    "es": "Participé en el proyecto de principio a fin: investigación, arquitectura de información, identidad visual, diseño UX/UI, prototipos, desarrollo y pruebas.",
    "en": "I worked on the project from beginning to end: research, information architecture, visual identity, UX/UI, prototyping, development, and testing.",
    "fr": "J'ai participé au projet de bout en bout : recherche, architecture de l'information, identité visuelle, UX/UI, prototypage, développement et tests."
   },
   {
    "es": "El desafío estaba en hacer que distintas necesidades encajaran dentro de una experiencia sencilla.",
    "en": "The challenge was to bring very different needs together in a simple experience.",
    "fr": "Tout l'enjeu était de faire cohabiter des besoins différents dans une expérience simple."
   }
  ],
  "flow": [
   {
    "pair": [
     {
      "key": "a2pas",
      "v": "2",
      "alt": {
       "es": "Bolsa de tela con el logotipo de À2pas y el lema «Agir à deux pas d'ici»",
       "en": "Tote bag with the À2pas logo and the line “Agir à deux pas d'ici”",
       "fr": "Tote bag avec le logo d'À2pas et la phrase « Agir à deux pas d'ici »"
      }
     },
     {
      "key": "a2pas",
      "v": "3",
      "alt": {
       "es": "Sistema de diseño de À2pas: tipografía, botones, tarjetas, perfiles y uso del logotipo",
       "en": "À2pas design system: typography, buttons, cards, profiles and logo usage",
       "fr": "Système de design d'À2pas : typographie, boutons, cartes, profils et usages du logo"
      }
     }
    ]
   },
   {
    "p": [
     {
      "es": "Cada decisión tenía que ayudar a que espectadores, artistas y espacios pudieran hacer su parte sin complicaciones.",
      "en": "Every decision had to make it easier for audiences, artists, and venues to play their part.",
      "fr": "Chaque décision devait aider spectateurs, artistes et salles à jouer leur rôle sans se compliquer la vie."
     }
    ]
   }
  ]
 },
 {
  "type": "text",
  "id": "cierre",
  "h": {
   "es": "Cierre",
   "en": "Closing",
   "fr": "Conclusion"
  },
  "t": {
   "es": "La cultura también empieza con una buena idea.",
   "en": "Culture can start with a good idea, too.",
   "fr": "La culture aussi commence par une bonne idée."
  },
  "p": [
   {
    "es": "À2pas nació de una pregunta: ¿y si el público pudiera participar en los espectáculos que quiere ver?",
    "en": "À2pas began with a question: what if audiences could help decide which shows they'd like to see?",
    "fr": "À2pas est né d'une question : et si le public pouvait participer à la création des spectacles qu'il a envie de voir ?"
   },
   {
    "es": "Convertir esa idea en una plataforma real implicó entender a personas muy diferentes y diseñar una experiencia que las acercara.",
    "en": "Turning that idea into a real platform meant understanding people with very different needs and designing an experience that brought them together.",
    "fr": "Transformer cette idée en une vraie plateforme a demandé de comprendre des personnes aux attentes très différentes et de concevoir une expérience capable de les rapprocher."
   },
   {
    "em": true,
    "es": "¿Tienes un producto complejo que necesita hacerse más sencillo? Hablemos.",
    "en": "Have a complex product that needs to feel simpler? Let's talk.",
    "fr": "Tu as un produit complexe à rendre plus simple ? Parlons-en."
   }
  ]
 }
]
};

/* Optional hero override per project: tag (headline under the name), lead (intro) and alt of the cover image. The index card keeps using the project's own tagline/summary. */
const HERO = {
 "a2pas": {
  "tag": {
   "es": "¿Y si el próximo espectáculo lo eligiera el público?",
   "en": "What if the audience chose the next show?",
   "fr": "Et si le public choisissait le prochain spectacle ?"
  },
  "lead": {
   "es": "Imagina que descubres un artista que te encanta, pero nunca actúa cerca de ti. À2pas nació para cambiar eso. Una plataforma donde el público podía proponer espectáculos, encontrar a otras personas interesadas y ayudar a hacerlos realidad. Mi trabajo fue diseñar la experiencia completa, conectando espectadores, artistas y espacios culturales dentro de un mismo producto.",
   "en": "Imagine discovering an artist you love, only to find they never perform anywhere near you. À2pas was created to change that. A platform where audiences could suggest shows, find others who wanted to see them, and help make them happen. I designed the experience end to end, bringing audiences, artists, and venues together in one product.",
   "fr": "Imagine que tu découvres un artiste que tu adores, mais qui ne joue jamais près de chez toi. À2pas est né pour changer ça : une plateforme où le public pouvait proposer des spectacles, rencontrer d'autres personnes intéressées et contribuer à leur donner vie. J'ai conçu l'expérience dans son ensemble, en réunissant spectateurs, artistes et salles de spectacle au sein d'un même produit."
  },
  "alt": {
   "es": "Portada del proyecto À2pas: logotipo, interfaz de la plataforma y diagrama de navegación",
   "en": "À2pas project cover: logo, platform interface and navigation diagram",
   "fr": "Couverture du projet À2pas : logo, interface de la plateforme et diagramme de navigation"
  }
 },
 "contazara": {
  "tag": {
   "es": "Cambiar de imagen sin dejar de ser quien eres.",
   "en": "A new look. Still unmistakably you.",
   "fr": "Changer d'image sans perdre ce qui fait son identité."
  },
  "lead": {
   "es": "¿Cómo renuevas una marca que lleva 40 años acompañando a una empresa? En Contazara, todo empezó escuchando a las personas que mejor la conocen. A partir de ahí, trabajamos en una nueva identidad, una web y una forma de comunicar más acorde con la empresa de hoy.",
   "en": "How do you refresh a brand with 40 years of history behind it? With Contazara, everything started by listening to the people who knew the company best. From there, we shaped a new identity, website, and way of communicating that better reflect the company today.",
   "fr": "Comment faire évoluer une marque qui accompagne une entreprise depuis 40 ans ? Chez Contazara, tout a commencé par des échanges avec celles et ceux qui la connaissent le mieux. À partir de là, nous avons travaillé sur une nouvelle identité, un site web et une façon de communiquer plus fidèle à l'entreprise d'aujourd'hui."
  },
  "alt": {
   "es": "Portada del caso Contazara: logotipo y diseño de la nueva web de la marca",
   "en": "Contazara case study cover: logo and design of the brand's new website",
   "fr": "Couverture du cas Contazara : logotype et design du nouveau site web de la marque"
  }
 }
};

/* Per-project SEO (override the generic "name · Tom Fabre · category" pattern). Read by build.py and c3.js.
   t/d  = <title> + description + og:/twitter: title and description.
   og   = specific social image: src = img/<src>.webp (the project cover); build.py derives a 1200x630 JPEG from it
          (centre crop, never stretched) into /img/og/ so the social image always matches the cover. alt is per language. */
SEO.es.proj = { contazara: {
  t:"Contazara: Rebranding, identidad visual y web | Tom Fabre",
  d:"Una nueva identidad, web y comunicación digital para Contazara. Descubre cómo evolucionamos una marca con 40 años de historia junto a su equipo.",
  og:{ src:"contazara-cover", alt:"Portada del caso Contazara: logotipo y diseño de la nueva web de la marca" } } };
SEO.en.proj = { contazara: {
  t:"Contazara: Branding, Visual Identity & Web | Tom Fabre",
  d:"A new identity, website and digital communications for Contazara. Discover how we helped evolve a brand with 40 years of history.",
  og:{ src:"contazara-cover", alt:"Contazara case study cover: logo and design of the brand's new website" } } };
SEO.fr.proj = { contazara: {
  t:"Contazara : Branding, Identité Visuelle & Web | Tom Fabre",
  d:"Une nouvelle identité, un site web et une communication digitale pour Contazara. Découvre comment nous avons fait évoluer 40 ans d'histoire.",
  og:{ src:"contazara-cover", alt:"Couverture du cas Contazara : logotype et design du nouveau site web de la marque" } } };

/* À2pas: own title/description per language; the social image is its cover (automatic, see build.py og_for). */
SEO.es.proj.a2pas = {"t": "À2pas: Diseño UX/UI y producto digital | Tom Fabre", "d": "Diseño de producto, UX/UI y branding para À2pas, una plataforma que conecta artistas, salas y espectadores mediante programación cultural participativa."};
SEO.en.proj.a2pas = {"t": "À2pas: UX/UI & Product Design | Tom Fabre", "d": "Product design, UX/UI and branding for À2pas, a platform connecting artists, venues and audiences through participatory cultural programming."};
SEO.fr.proj.a2pas = {"t": "À2pas : UX/UI & Design Produit | Tom Fabre", "d": "Design produit, UX/UI et identité visuelle pour À2pas, une plateforme qui rapproche artistes, salles et publics grâce à une programmation participative."};

/* HappyLife: case study (sections), hero override and SEO. Copy approved by Tom; no invented metrics. */
SECTIONS.happylife = [
 {
  "type": "text",
  "id": "reto",
  "h": {
   "es": "01 · El reto",
   "en": "01 · The challenge",
   "fr": "01 · Le défi"
  },
  "t": {
   "es": "Diseñar una app para que quieras dejar de usarla.",
   "en": "Designing an app you actually want to put down.",
   "fr": "Concevoir une appli qui donne envie de la refermer."
  },
  "p": [
   {
    "es": "Después de la pandemia, una startup de Lyon llegó con una idea: ayudar a las personas a recuperar el contacto real.",
    "en": "After the pandemic, a startup in Lyon came to us with an idea: help people reconnect in real life.",
    "fr": "Après la pandémie, une start-up lyonnaise est arrivée avec une idée : aider les gens à retrouver des liens dans la vraie vie."
   },
   {
    "es": "Conocer gente nueva no siempre es fácil. Y aunque existen muchas aplicaciones para hacerlo, a veces terminamos pasando más tiempo buscando planes que disfrutándolos.",
    "en": "Meeting new people isn't always easy. And even with so many apps out there, we sometimes spend more time looking for plans than enjoying them.",
    "fr": "Rencontrer de nouvelles personnes n'est pas toujours évident. Et même si les applis ne manquent pas, on finit parfois par passer plus de temps à chercher des sorties qu'à en profiter."
   },
   {
    "es": "El reto era diseñar una experiencia que facilitara esos encuentros sin convertirse en otra aplicación en la que pasar horas.",
    "en": "The challenge was to make those connections easier without creating another app that keeps people scrolling for hours.",
    "fr": "Le défi : faciliter les rencontres sans créer une application de plus sur laquelle passer des heures."
   },
   {
    "es": "Queríamos que el móvil fuera el punto de partida, no el destino.",
    "en": "We wanted the phone to be the starting point, not the destination.",
    "fr": "Nous voulions que le téléphone soit un point de départ, pas une destination."
   }
  ]
 },
 {
  "type": "text",
  "id": "experiencia",
  "h": {
   "es": "02 · La experiencia",
   "en": "02 · The experience",
   "fr": "02 · L'expérience"
  },
  "t": {
   "es": "Menos buscar. Más encontrar.",
   "en": "Less searching. More finding.",
   "fr": "Moins chercher. Plus trouver."
  },
  "p": [
   {
    "es": "Imagina que tienes la tarde libre y te apetece hacer algo, pero no sabes muy bien qué ni con quién.",
    "en": "Imagine you've got a free afternoon and feel like doing something, but you're not quite sure what or who with.",
    "fr": "Imagine que tu as ton après-midi de libre et envie de sortir, mais sans trop savoir quoi faire ni avec qui."
   },
   {
    "es": "En lugar de recorrer una lista interminable de actividades, HappyLife partía de tres cosas: tus intereses, tu disponibilidad y lo que te apetecía hacer.",
    "en": "Instead of endless lists of activities, HappyLife started with three things: your interests, your availability, and what you felt like doing.",
    "fr": "Plutôt que de parcourir une liste interminable d'activités, HappyLife s'appuyait sur trois choses : tes centres d'intérêt, tes disponibilités et tes envies du moment."
   },
   {
    "es": "Con esa información, la aplicación podía mostrar planes que encajaran mejor contigo.",
    "en": "With that information, the app could suggest activities that were a better fit.",
    "fr": "L'application pouvait alors suggérer des activités qui te correspondaient davantage."
   },
   {
    "es": "Trabajamos en una navegación sencilla, filtros útiles y recorridos cortos para que descubrir una actividad no se convirtiera en una tarea más.",
    "en": "We worked on simple navigation, genuinely useful filters, and short journeys so finding an activity wouldn't feel like another chore.",
    "fr": "Nous avons travaillé sur une navigation simple, des filtres utiles et des parcours courts pour que trouver une sortie ne devienne pas une corvée."
   },
   {
    "es": "La idea era dedicar menos tiempo a buscar y más a decidir qué hacer.",
    "en": "The idea was to spend less time searching and more time deciding what to do.",
    "fr": "L'idée : passer moins de temps à chercher et plus de temps à choisir."
   }
  ],
  "flow": [
   {
    "pair": [
     {
      "key": "happylife",
      "v": "2",
      "alt": {
       "es": "Pantalla de inicio de HappyLife en un móvil: próximas actividades, agenda local, categorías y filtro por fecha",
       "en": "HappyLife home screen on a phone: upcoming activities, local agenda, categories and a date filter",
       "fr": "Écran d'accueil de HappyLife sur un téléphone : prochaines activités, agenda local, catégories et filtre par date"
      }
     },
     {
      "key": "happylife",
      "v": "0",
      "alt": {
       "es": "Pantallas de agenda y calendario de HappyLife con actividades del día y de la semana siguiente",
       "en": "HappyLife schedule and calendar screens with today's and next week's activities",
       "fr": "Écrans agenda et calendrier de HappyLife avec les activités du jour et de la semaine suivante"
      }
     }
    ]
   }
  ]
 },
 {
  "type": "text",
  "id": "gamificacion",
  "h": {
   "es": "03 · Gamificación con propósito",
   "en": "03 · Gamification with a purpose",
   "fr": "03 · Une gamification qui a du sens"
  },
  "t": {
   "es": "Los puntos estaban fuera de la pantalla.",
   "en": "The points were earned offline.",
   "fr": "Les points se gagnaient hors écran."
  },
  "p": [
   {
    "es": "HappyLife también incorporaba un sistema de recompensas. Pero había una diferencia importante respecto a muchas otras aplicaciones.",
    "en": "HappyLife also had a rewards system, but with an important difference from many other apps.",
    "fr": "HappyLife proposait aussi un système de récompenses, avec une différence importante par rapport à beaucoup d'autres applis."
   },
   {
    "es": "No queríamos premiar el tiempo que pasabas mirando el móvil.",
    "en": "We didn't want to reward people for spending more time looking at their phones.",
    "fr": "Nous ne voulions pas récompenser le temps passé les yeux sur son téléphone."
   },
   {
    "es": "Los puntos se conseguían participando en actividades, conociendo personas y compartiendo experiencias. Después podían canjearse por bonos y nuevas actividades.",
    "en": "Points were earned by taking part in activities, meeting people, and sharing experiences. They could then be exchanged for vouchers and new activities.",
    "fr": "Les points se gagnaient en participant à des activités, en rencontrant des personnes et en partageant des moments. Ils pouvaient ensuite être échangés contre des avantages et de nouvelles activités."
   },
   {
    "es": "Era una forma de animar a las personas a dar el siguiente paso.",
    "en": "It was a way to encourage people to take that next step.",
    "fr": "Une manière d'encourager les gens à franchir le pas."
   },
   {
    "es": "Porque el objetivo no era que abrieras la aplicación más veces, sino que tuvieras más motivos para salir y hacer cosas.",
    "en": "Because the goal wasn't to get people opening the app more often. It was to give them more reasons to go out and do things.",
    "fr": "Parce que l'objectif n'était pas d'ouvrir l'application plus souvent, mais d'avoir davantage de raisons de sortir."
   }
  ],
  "flow": [
   {
    "img": {
     "key": "happylife",
     "v": "3",
     "alt": {
      "es": "Mosaico de pantallas de HappyLife: puntos acumulados, recompensas, mapa de actividades y pantallas de bienvenida",
      "en": "Mosaic of HappyLife screens: points earned, rewards, activity map and onboarding screens",
      "fr": "Mosaïque d'écrans HappyLife : points gagnés, récompenses, carte des activités et écrans d'accueil"
     },
     "r": "1600/1200"
    }
   }
  ]
 },
 {
  "type": "text",
  "id": "producto",
  "h": {
   "es": "04 · Diseño del producto",
   "en": "04 · Product design",
   "fr": "04 · Le design du produit"
  },
  "t": {
   "es": "Hacerlo fácil también lleva trabajo.",
   "en": "Making things simple takes work, too.",
   "fr": "Faire simple, ça demande aussi du travail."
  },
  "p": [
   {
    "es": "Detrás de una experiencia sencilla suele haber muchas decisiones pequeñas.",
    "en": "Behind a straightforward experience, there are usually lots of small decisions.",
    "fr": "Derrière une expérience simple se cachent souvent beaucoup de petites décisions."
   },
   {
    "es": "¿Qué información necesita alguien antes de apuntarse a una actividad? ¿Qué filtros ayudan de verdad? ¿Cuántos pasos hacen falta para encontrar un plan?",
    "en": "What does someone need to know before signing up for an activity? Which filters actually help? How many steps should it take to find something to do?",
    "fr": "Qu'a-t-on besoin de savoir avant de s'inscrire à une activité ? Quels filtres sont vraiment utiles ? Combien d'étapes faut-il pour trouver une sortie ?"
   },
   {
    "es": "El trabajo de UX/UI se centró en responder a esas preguntas.",
    "en": "The UX/UI work focused on answering questions like these.",
    "fr": "Le travail UX/UI s'est concentré sur ces questions."
   }
  ],
  "flow": [
   {
    "p": [
     {
      "es": "Diseñamos accesos rápidos, recorridos más cortos y una navegación que permitiera encontrar actividades según los intereses y el tiempo disponible.",
      "en": "We designed shortcuts, shorter journeys, and navigation that helped people discover activities based on their interests and available time.",
      "fr": "Nous avons conçu des accès rapides, raccourci les parcours et organisé la navigation autour des intérêts et des disponibilités de chacun."
     },
     {
      "es": "Desde la investigación y los primeros prototipos hasta el desarrollo del MVP, el objetivo fue el mismo: quitar complicaciones y facilitar que las personas llegaran a lo que estaban buscando.",
      "en": "From research and early prototypes through to MVP development, the aim stayed the same: remove friction and help people get where they wanted to go.",
      "fr": "De la recherche aux premiers prototypes, puis au développement du MVP, le cap est resté le même : enlever les obstacles pour aider les gens à trouver ce qu'ils cherchaient."
     }
    ]
   },
   {
    "img": {
     "key": "happylife",
     "v": "1",
     "alt": {
      "es": "Value Proposition Canvas de HappyLife con ganancias, tareas y frustraciones, junto a una ficha de la app en una tienda de aplicaciones",
      "en": "HappyLife Value Proposition Canvas with gains, jobs and pains, next to an app store listing",
      "fr": "Value Proposition Canvas de HappyLife avec gains, tâches et frustrations, à côté d'une fiche d'application sur une boutique d'applications"
     },
     "r": "2400/1050",
     "zoom": true,
     "cap": {
      "es": "Value Proposition Canvas y ficha de la app. Visualización conceptual: las valoraciones y cifras de la ficha forman parte del mockup, no son métricas reales. Toca la imagen para ampliarla.",
      "en": "Value Proposition Canvas and app listing. Conceptual visualisation: the ratings and figures in the listing are part of the mockup, not real metrics. Tap the image to enlarge it.",
      "fr": "Value Proposition Canvas et fiche de l'application. Visualisation conceptuelle : les notes et chiffres de la fiche font partie de la maquette, ce ne sont pas des métriques réelles. Touche l'image pour l'agrandir."
     }
    }
   }
  ]
 },
 {
  "type": "text",
  "id": "trabajo",
  "h": {
   "es": "05 · Mi trabajo",
   "en": "05 · My role",
   "fr": "05 · Mon rôle"
  },
  "t": {
   "es": "Del concepto a una primera versión real.",
   "en": "From an idea to a working first version.",
   "fr": "Du concept à une première version concrète."
  },
  "p": [
   {
    "es": "Participé en la investigación, la definición de la experiencia, el diseño UX/UI y el prototipado del producto.",
    "en": "I worked on the research, experience definition, UX/UI design, and product prototyping.",
    "fr": "J'ai participé à la recherche, à la définition de l'expérience, au design UX/UI et au prototypage du produit."
   },
   {
    "es": "Trabajamos en convertir una idea bastante amplia, ayudar a las personas a conectar en la vida real, en decisiones concretas de diseño.",
    "en": "We turned a broad idea, helping people connect in real life, into practical design decisions.",
    "fr": "Ensemble, nous avons traduit une idée assez large, aider les gens à créer des liens dans la vraie vie, en choix de design concrets."
   },
   {
    "es": "Cómo descubrir actividades, qué información mostrar, cómo organizar los filtros y de qué manera utilizar las recompensas sin desviar la atención de lo importante.",
    "en": "How people discover activities, what information to show, how to organise filters, and how rewards could encourage participation without distracting from the main purpose.",
    "fr": "Comment découvrir des activités, quelles informations afficher, comment organiser les filtres et comment utiliser les récompenses sans perdre de vue l'essentiel."
   },
   {
    "es": "El proyecto avanzó hasta la puesta en marcha de su primera versión funcional, el MVP.",
    "en": "The project reached the launch of its first working version, the MVP.",
    "fr": "Le projet est allé jusqu'au lancement d'une première version fonctionnelle, le MVP."
   },
   {
    "es": "Una aplicación pensada para facilitar encuentros, no para sustituirlos.",
    "en": "An app designed to make real-world connections easier, not replace them.",
    "fr": "Une application pensée pour faciliter les rencontres, pas pour les remplacer."
   }
  ]
 },
 {
  "type": "text",
  "id": "cierre",
  "h": {
   "es": "Cierre",
   "en": "Closing",
   "fr": "Conclusion"
  },
  "t": {
   "es": "La vida pasa fuera de la pantalla.",
   "en": "Life happens away from the screen.",
   "fr": "La vraie vie se passe loin des écrans."
  },
  "p": [
   {
    "es": "HappyLife partía de una idea que me sigue gustando: la tecnología también puede ayudarnos a desconectar de ella.",
    "en": "HappyLife was built around an idea I still love: technology can help us disconnect from technology.",
    "fr": "HappyLife partait d'une idée que j'aime toujours autant : la technologie peut aussi nous aider à nous déconnecter."
   },
   {
    "es": "A veces, una buena experiencia digital es la que consigue que guardes el móvil y disfrutes de lo que viene después.",
    "en": "Sometimes the best digital experience is the one that makes you put your phone away and enjoy what comes next.",
    "fr": "Parfois, une bonne expérience digitale est celle qui nous donne envie de ranger notre téléphone et de profiter de ce qui vient ensuite."
   },
   {
    "em": true,
    "es": "¿Tienes una idea que necesita convertirse en un producto real? Hablemos.",
    "en": "Have an idea you'd like to turn into a real product? Let's talk.",
    "fr": "Tu as une idée à transformer en vrai produit ? Parlons-en."
   }
  ]
 }
];
HERO.happylife = {
 "tag": {
  "es": "Menos pantalla. Más vida real.",
  "en": "Less screen time. More real life.",
  "fr": "Moins d'écran. Plus de vraie vie."
 },
 "lead": {
  "es": "Una app para conocer personas y compartir actividades fuera del móvil. HappyLife nació con una idea sencilla: hacer que encontrar compañía para un plan fuera tan fácil como encontrar el plan en sí. Mi trabajo fue diseñar una experiencia que ayudara a las personas a descubrir actividades, conectar con otras y dar el paso de participar.",
  "en": "An app for meeting people and sharing experiences away from your phone. HappyLife started with a simple idea: finding someone to join you should be as easy as finding something to do. I designed an experience that helped people discover activities, meet others, and actually take part.",
  "fr": "Une appli pour rencontrer du monde et partager des activités loin de son téléphone. HappyLife est parti d'une idée simple : trouver quelqu'un avec qui faire une activité devrait être aussi facile que de trouver l'activité elle-même. J'ai conçu une expérience qui aide à découvrir des sorties, rencontrer d'autres personnes et passer à l'action."
 },
 "alt": {
  "es": "Portada de HappyLife: dos móviles con el logotipo y la pantalla de inicio con actividades locales y categorías",
  "en": "HappyLife cover: two phones showing the logo and the home screen with local activities and categories",
  "fr": "Couverture de HappyLife : deux téléphones avec le logo et l'écran d'accueil avec activités locales et catégories"
 }
};
SEO.es.proj.happylife = {"t": "HappyLife: Diseño UX/UI de una app social | Tom Fabre", "d": "Diseño UX/UI de HappyLife, una app para descubrir actividades, conocer personas y compartir experiencias reales. Del concepto al MVP."};
SEO.en.proj.happylife = {"t": "HappyLife: UX/UI Design for a Social App | Tom Fabre", "d": "UX/UI design for HappyLife, an app for finding activities, meeting people, and sharing real-life experiences. From concept to MVP."};
SEO.fr.proj.happylife = {"t": "HappyLife : design UX/UI d'une appli sociale | Tom Fabre", "d": "Design UX/UI de HappyLife, une appli pour découvrir des activités, rencontrer du monde et partager des moments dans la vraie vie. Du concept au MVP."};

/* Binōme Studio: case study (sections), hero override and SEO. Copy approved by Tom. No founding year is confirmed anywhere: the period is an editorial label. */
SECTIONS.binome = [
 {
  "type": "text",
  "id": "comienzo",
  "h": {
   "es": "01 · El comienzo",
   "en": "01 · The beginning",
   "fr": "01 · Les débuts"
  },
  "t": {
   "es": "Algunas ideas funcionan mejor de a dos.",
   "en": "Some ideas work better as a team of two.",
   "fr": "Certaines idées fonctionnent mieux à deux."
  },
  "p": [
   {
    "es": "Venimos de recorridos diferentes, con experiencias, disciplinas y formas distintas de trabajar.",
    "en": "We come from different backgrounds, with different experiences, disciplines, and ways of working.",
    "fr": "Nous venons d'horizons différents, avec nos propres expériences, disciplines et manières de travailler."
   },
   {
    "es": "Después de pasar por varias empresas, equipos y proyectos, surgió la idea de construir algo juntos.",
    "en": "After spending time in different companies, teams, and projects, we started thinking about building something together.",
    "fr": "Après plusieurs années dans différentes entreprises et équipes, l'idée de construire quelque chose ensemble a fait son chemin."
   },
   {
    "es": "Queríamos tener la libertad de implicarnos en cada proyecto, participar en las decisiones y combinar lo que cada uno sabía hacer.",
    "en": "We wanted the freedom to get involved in every project, take part in decisions, and combine what each of us knows best.",
    "fr": "Nous voulions pouvoir nous investir dans chaque projet, participer aux décisions et combiner nos savoir-faire."
   },
   {
    "es": "No se trataba de crear una agencia grande, sino de encontrar una forma de trabajar que nos representara.",
    "en": "It wasn't about building a big agency. It was about finding a way of working that felt like us.",
    "fr": "Pas pour créer une grosse agence, mais pour trouver une façon de travailler qui nous ressemble."
   },
   {
    "es": "Así empezó Binōme.",
    "en": "That's how Binōme began.",
    "fr": "C'est comme ça que Binōme a commencé."
   }
  ]
 },
 {
  "type": "text",
  "id": "idea",
  "h": {
   "es": "02 · La idea",
   "en": "02 · The idea",
   "fr": "02 · L'idée"
  },
  "t": {
   "es": "Diferentes miradas. Un mismo proyecto.",
   "en": "Different perspectives. One shared project.",
   "fr": "Deux regards. Un projet commun."
  },
  "p": [
   {
    "es": "Una marca, una web o un producto digital pueden necesitar habilidades muy diferentes.",
    "en": "A brand, website, or digital product can call for very different skills.",
    "fr": "Une marque, un site ou un produit digital peuvent demander des compétences très différentes."
   },
   {
    "es": "A veces el reto está en definir una identidad. Otras, en organizar una experiencia, diseñar una interfaz o encontrar la mejor manera de desarrollarla.",
    "en": "Sometimes the challenge is defining an identity. Other times, it's shaping an experience, designing an interface, or finding the right way to build it.",
    "fr": "Parfois, tout se joue dans l'identité. D'autres fois, dans l'expérience, l'interface ou la meilleure façon de développer le produit."
   },
   {
    "es": "Con Binōme queríamos poder abordar esas necesidades de forma conjunta, sin tratar cada disciplina como un proyecto separado.",
    "en": "With Binōme, we wanted to approach those needs together, rather than treating each discipline as a separate project.",
    "fr": "Avec Binōme, nous voulions pouvoir aborder ces besoins ensemble, sans séparer artificiellement chaque discipline."
   },
   {
    "es": "El estudio reúne nuestras experiencias en branding, diseño digital, desarrollo y estrategia.",
    "en": "The studio brings together our experience in branding, digital design, development, and strategy.",
    "fr": "Le studio réunit nos expériences en branding, design digital, développement et stratégie."
   },
   {
    "es": "Y cuando un proyecto necesita otras especialidades, podemos trabajar con profesionales de confianza.",
    "en": "And when a project needs other expertise, we work with people we trust.",
    "fr": "Et quand un projet demande d'autres compétences, nous faisons appel à des professionnels de confiance."
   },
   {
    "es": "La idea es sencilla: reunir a las personas adecuadas alrededor de lo que queremos construir.",
    "en": "The idea is simple: bring the right people together around what we're trying to create.",
    "fr": "L'idée est simple : réunir les bonnes personnes autour de ce que nous voulons créer."
   }
  ],
  "flow": [
   {
    "pair": [
     {
      "key": "binome",
      "v": "0",
      "alt": {
       "es": "Logotipo de Binōme sobre fondo crema, con las cuatro disciplinas del estudio: branding, páginas web, producto digital y estrategia de marca digital",
       "en": "Binōme logo on a cream background, with the studio's four disciplines: branding, websites, digital product and digital brand strategy",
       "fr": "Logo de Binōme sur fond crème, avec les quatre disciplines du studio : branding, sites web, produit digital et stratégie de marque digitale"
      }
     },
     {
      "key": "binome",
      "v": "3",
      "alt": {
       "es": "Paleta de color del sistema de diseño de Binōme: rojo coral, verde, amarillo, violeta y neutros. Los textos de la imagen están en inglés",
       "en": "Color palette of the Binōme design system: coral red, green, yellow, violet and neutrals",
       "fr": "Palette de couleurs du système de design de Binōme : rouge corail, vert, jaune, violet et neutres. Les textes de l'image sont en anglais"
      }
     }
    ]
   }
  ]
 },
 {
  "type": "text",
  "id": "marca",
  "h": {
   "es": "03 · Construir nuestra propia marca",
   "en": "03 · Building our own brand",
   "fr": "03 · Créer notre propre marque"
  },
  "t": {
   "es": "Diseñar para uno mismo tiene su gracia.",
   "en": "Designing for yourself is a funny thing.",
   "fr": "Concevoir pour soi, c'est une autre histoire."
  },
  "p": [
   {
    "es": "Cuando trabajas en la identidad de otra empresa, empiezas haciendo preguntas.",
    "en": "When you're working on someone else's brand, you start by asking questions.",
    "fr": "Quand on travaille sur l'identité d'une entreprise, on commence par poser des questions."
   },
   {
    "es": "¿Quiénes son? ¿Qué hacen? ¿Qué quieren transmitir?",
    "en": "Who are they? What do they do? What do they want to say?",
    "fr": "Qui es-tu ? Que fais-tu ? Qu'as-tu envie de transmettre ?"
   },
   {
    "es": "Con Binōme nos tocó responderlas a nosotros.",
    "en": "With Binōme, we had to answer those questions ourselves.",
    "fr": "Avec Binōme, c'était à nous d'y répondre."
   },
   {
    "es": "Teníamos que encontrar un nombre, una personalidad visual y una manera de presentar el estudio que reflejara cómo queríamos trabajar.",
    "en": "We needed to find a name, visual personality, and way of presenting the studio that reflected how we wanted to work.",
    "fr": "Il fallait trouver un nom, une personnalité visuelle et une façon de présenter le studio fidèle à notre manière de travailler."
   },
   {
    "es": "Desarrollamos la identidad, su lenguaje gráfico y una web donde mostrar nuestros servicios, proyectos y forma de entender el diseño.",
    "en": "We developed the identity, visual language, and website to showcase our services, projects, and approach to design.",
    "fr": "Nous avons créé l'identité, son langage graphique et un site pour montrer nos services, nos projets et notre vision du design."
   },
   {
    "es": "Queríamos una marca con personalidad, flexible y capaz de acompañarnos a medida que el estudio fuera creciendo.",
    "en": "We wanted a brand with character, flexible enough to grow alongside the studio.",
    "fr": "Nous voulions une marque avec du caractère, souple et capable d'évoluer avec le studio."
   },
   {
    "es": "Y, de paso, aprendimos que tomar decisiones sobre tu propia marca puede ser bastante más complicado de lo que parece.",
    "en": "And along the way, we discovered that making decisions about your own brand can be a lot harder than it looks.",
    "fr": "Et nous avons découvert qu'il est parfois bien plus compliqué de prendre des décisions pour sa propre marque que pour celle des autres."
   }
  ],
  "flow": [
   {
    "img": {
     "key": "binome",
     "v": "2",
     "r": "1600/1200",
     "alt": {
      "es": "Sistema de identidad de Binōme aplicado a una bolsa de tela, una bolsa de papel, libretas, papelería, tarjetas y un cartel con el titular «Tu marca al nivel que tu negocio merece»",
      "en": "Binōme identity system applied to a tote bag, paper bag, notebooks, stationery, cards and a poster reading «Tu marca al nivel que tu negocio merece»",
      "fr": "Système d'identité de Binōme décliné sur un tote bag, un sac en papier, des carnets, de la papeterie, des cartes et une affiche « Tu marca al nivel que tu negocio merece »"
     }
    }
   }
  ]
 },
 {
  "type": "text",
  "id": "proyectos",
  "h": {
   "es": "04 · De la idea a los proyectos reales",
   "en": "04 · From an idea to real projects",
   "fr": "04 · De l'idée aux projets concrets"
  },
  "t": {
   "es": "Lo interesante empezó después.",
   "en": "The interesting part came next.",
   "fr": "Le plus intéressant est venu après."
  },
  "p": [
   {
    "es": "Crear la identidad y lanzar la web fue solo el comienzo.",
    "en": "Creating the identity and launching the website was only the beginning.",
    "fr": "Créer l'identité et lancer le site n'était qu'un début."
   },
   {
    "es": "Con el tiempo, Binōme empezó a trabajar con empresas y proyectos de sectores muy distintos.",
    "en": "Over time, Binōme began working with businesses and projects across very different industries.",
    "fr": "Avec le temps, Binōme a commencé à travailler avec des entreprises et des projets de secteurs très différents."
   },
   {
    "es": "Entre ellos, Contazara, donde participamos en la renovación de su identidad, web y comunicación digital; 360estudio, con un proyecto que conectó branding, diseño web y arquitectura; y Yaypegs, donde trabajamos con dirección de arte y animación.",
    "en": "Among them were Contazara, where we helped refresh the identity, website, and digital communications; 360estudio, where branding, web design, and architecture came together; and Yaypegs, where we worked on art direction and animation.",
    "fr": "Parmi eux, Contazara, pour qui nous avons renouvelé l'identité, le site et la communication digitale ; 360estudio, où nous avons fait dialoguer branding, design web et architecture ; et Yaypegs, autour de la direction artistique et de l'animation."
   },
   {
    "es": "Cada uno nos ha permitido explorar nuevas maneras de colaborar y combinar nuestras habilidades.",
    "en": "Each project has given us new ways to collaborate and combine our skills.",
    "fr": "Chaque projet nous a permis d'explorer de nouvelles façons de collaborer et d'associer nos compétences."
   },
   {
    "es": "Porque una cosa es diseñar la identidad de un estudio. Y otra, bastante diferente, es darle vida con proyectos reales.",
    "en": "Because designing a studio's identity is one thing. Bringing it to life through real projects is something else entirely.",
    "fr": "Parce qu'imaginer l'identité d'un studio, c'est une chose. Lui donner vie avec de vrais projets, c'en est une autre."
   }
  ],
  "flow": [
   {
    "img": {
     "key": "binome",
     "v": "1",
     "r": "2400/1050",
     "zoom": true,
     "alt": {
      "es": "Parrilla de publicaciones de Instagram del estudio con piezas editoriales sobre diseño y una hoja con las portadas numeradas",
      "en": "Grid of the studio's Instagram posts with editorial pieces about design, next to a sheet of numbered covers",
      "fr": "Grille de publications Instagram du studio avec des contenus éditoriaux sur le design, à côté d'une planche de couvertures numérotées"
     },
     "cap": {
      "es": "Contenidos y comunicación del estudio",
      "en": "Studio content and communication",
      "fr": "Contenus et communication du studio"
     }
    }
   }
  ]
 },
 {
  "type": "text",
  "id": "papel",
  "h": {
   "es": "05 · Mi papel",
   "en": "05 · My role",
   "fr": "05 · Mon rôle"
  },
  "t": {
   "es": "Diseñar también es saber trabajar con otros.",
   "en": "Design is also about working with people.",
   "fr": "Designer, c'est aussi savoir travailler ensemble."
  },
  "p": [
   {
    "es": "Como cofundador de Binōme, participo en las decisiones creativas y estratégicas del estudio.",
    "en": "As Binōme's co-founder, I'm involved in the studio's creative and strategic decisions.",
    "fr": "En tant que cofondateur de Binōme, je participe aux choix créatifs et stratégiques du studio."
   },
   {
    "es": "Mi trabajo combina branding, diseño digital, producto y desarrollo web, pero también implica hablar con clientes, entender sus necesidades, organizar proyectos y colaborar con otros profesionales.",
    "en": "My work brings together branding, digital design, product, and web development, but it also involves talking with clients, understanding their needs, organising projects, and collaborating with other professionals.",
    "fr": "Mon travail mêle branding, design digital, produit et développement web, mais aussi échanges avec les clients, compréhension des besoins, organisation des projets et collaboration avec d'autres professionnels."
   },
   {
    "es": "Me gusta participar desde las primeras conversaciones hasta los detalles finales.",
    "en": "I like to be involved from the first conversations through to the final details.",
    "fr": "J'aime m'impliquer dès les premières discussions et jusqu'aux derniers détails."
   },
   {
    "es": "Binōme me permite compartir esa responsabilidad, aprender de otras perspectivas y abordar proyectos que se benefician de diferentes maneras de pensar.",
    "en": "Binōme gives me the chance to share that responsibility, learn from different perspectives, and take on projects that benefit from more than one way of thinking.",
    "fr": "Binōme me permet de partager cette responsabilité, d'apprendre d'autres regards et de travailler sur des projets qui gagnent à réunir plusieurs façons de penser."
   },
   {
    "es": "Es una extensión de mi trabajo como diseñador, pero también una forma de construir algo en equipo.",
    "en": "It's an extension of my work as a designer, but also a way to build something together.",
    "fr": "C'est une extension de mon travail de designer, mais aussi une façon de construire quelque chose à plusieurs."
   }
  ]
 },
 {
  "type": "text",
  "id": "cierre",
  "h": {
   "es": "Cierre",
   "en": "Closing",
   "fr": "Conclusion"
  },
  "t": {
   "es": "Lo que empieza entre dos puede llegar más lejos.",
   "en": "What starts with two people can go a lot further.",
   "fr": "Ce qui commence à deux peut aller plus loin."
  },
  "p": [
   {
    "es": "Binōme nació de las ganas de hacer proyectos a nuestra manera.",
    "en": "Binōme started with the desire to work on projects our own way.",
    "fr": "Binōme est né de l'envie de mener des projets à notre manière."
   },
   {
    "es": "Hoy seguimos diseñando marcas, webs y experiencias digitales, trabajando con personas y empresas que confían en nosotros para dar forma a sus ideas.",
    "en": "Today, we continue to design brands, websites, and digital experiences with people and businesses who trust us to bring their ideas to life.",
    "fr": "Aujourd'hui, nous continuons à créer des marques, des sites et des expériences digitales avec des personnes et des entreprises qui nous font confiance pour donner forme à leurs idées."
   },
   {
    "es": "Y lo mejor es que todavía queda mucho por hacer.",
    "en": "And the best part is, there's still plenty more to come.",
    "fr": "Et le plus chouette, c'est qu'il reste encore beaucoup à faire."
   },
   {
    "em": true,
    "es": "¿Tienes un proyecto en mente? Hablemos.",
    "en": "Have a project in mind? Let's talk.",
    "fr": "Tu as un projet en tête ? Parlons-en."
   }
  ]
 }
];
HERO.binome = {
 "tag": {
  "es": "Dos caminos. Una forma de hacer las cosas.",
  "en": "Two paths. One way of doing things.",
  "fr": "Deux parcours. Une même façon de faire."
 },
 "lead": {
  "es": "Después de años trabajando en distintos equipos, empresas y proyectos, decidimos crear un espacio propio donde combinar nuestras experiencias y maneras de entender el diseño. Así nació Binōme, un estudio independiente que reúne branding, diseño web, producto digital y estrategia. Una marca que también tuvimos que pensar, diseñar y construir desde cero.",
  "en": "After years working across different teams, companies, and projects, we decided to create a space of our own where we could bring our experience and different approaches to design together. That's how Binōme started: an independent studio combining branding, web design, digital products, and strategy. A brand we also had to think through, design, and build from the ground up.",
  "fr": "Après des années passées dans différentes équipes, entreprises et projets, nous avons eu envie de créer notre propre espace pour réunir nos expériences et nos façons de penser le design. C'est comme ça qu'est né Binōme, un studio indépendant qui mêle branding, design web, produit digital et stratégie. Une marque qu'il a aussi fallu imaginer, dessiner et construire de zéro."
 },
 "alt": {
  "es": "Portada de Binōme Studio: la web del estudio en un portátil junto a una página de caso, con el titular «Tu marca al nivel que tu negocio merece»",
  "en": "Binōme Studio cover: the studio website on a laptop next to a case study page, with the headline «Tu marca al nivel que tu negocio merece»",
  "fr": "Couverture de Binōme Studio : le site du studio sur un ordinateur portable à côté d'une page d'étude de cas, avec le titre « Tu marca al nivel que tu negocio merece »"
 }
};
SEO.es.proj.binome = {"t": "Binōme Studio: Branding, diseño web y estrategia | Tom Fabre", "d": "La historia de Binōme Studio, un estudio independiente de branding, diseño web y UX/UI. Descubre cómo nació y mi papel como cofundador."};
SEO.en.proj.binome = {"t": "Binōme Studio: Branding, Web Design & Strategy | Tom Fabre", "d": "The story of Binōme Studio, an independent branding, web design, and UX/UI studio. How it started and my role as co-founder."};
SEO.fr.proj.binome = {"t": "Binōme Studio : branding, design web et stratégie | Tom Fabre", "d": "L'histoire de Binōme Studio, un studio indépendant de branding, design web et UX/UI. Découvre comment il est né et mon rôle de cofondateur."};

/* Yaypegs: case study (sections), hero override and SEO. Copy approved by Tom. Period 2022 a 2023 as given; no metrics. */
SECTIONS.yaypegs = [
 {
  "type": "text",
  "id": "comienzo",
  "h": {
   "es": "01 · El comienzo",
   "en": "01 · The beginning",
   "fr": "01 · Les débuts"
  },
  "t": {
   "es": "Todo empezó con un universo de personajes.",
   "en": "It all started with a universe of characters.",
   "fr": "Tout a commencé avec un univers de personnages."
  },
  "p": [
   {
    "es": "Yaypegs era una colección de 10.000 personajes digitales creados a partir de diferentes combinaciones de cuerpos, expresiones, accesorios y fondos.",
    "en": "Yaypegs was a collection of 10,000 digital characters created from different combinations of bodies, expressions, accessories, and backgrounds.",
    "fr": "Yaypegs était une collection de 10 000 personnages digitaux, créés à partir de différentes combinaisons de corps, expressions, accessoires et arrière-plans."
   },
   {
    "es": "Cada personaje tenía su propia apariencia, pero todos compartían un mismo lenguaje visual.",
    "en": "Each character had its own look, but they all shared a recognisable visual language.",
    "fr": "Chaque personnage avait sa propre apparence, mais tous partageaient un même langage visuel."
   },
   {
    "es": "El proyecto ya contaba con una identidad reconocible. El siguiente paso era conseguir que esos personajes también pudieran moverse.",
    "en": "The project already had an established identity. The next step was to make those characters move.",
    "fr": "Le projet possédait déjà une identité reconnaissable. L'étape suivante était de faire bouger ces personnages."
   },
   {
    "es": "Y ahí apareció un desafío bastante particular.",
    "en": "And that's where things got interesting.",
    "fr": "Et c'est là qu'un défi assez particulier est apparu."
   },
   {
    "es": "No bastaba con crear una animación que funcionara bien para un personaje. Tenía que funcionar para miles de combinaciones diferentes.",
    "en": "It wasn't enough to create an animation that worked for one character. It had to work across thousands of different combinations.",
    "fr": "Il ne suffisait pas de créer une animation réussie pour un personnage. Elle devait fonctionner pour des milliers de combinaisons différentes."
   }
  ],
  "flow": [
   {
    "img": {
     "key": "yaypegs",
     "v": "1",
     "r": "2400/1050",
     "zoom": true,
     "alt": {
      "es": "Cuadrícula de personajes pixel art de Yaypegs, cada uno con un disfraz, un fondo y unos accesorios distintos",
      "en": "Grid of Yaypegs pixel art characters, each with a different costume, background and accessories",
      "fr": "Grille de personnages pixel art de Yaypegs, chacun avec un costume, un fond et des accessoires différents"
     }
    }
   }
  ]
 },
 {
  "type": "text",
  "id": "desafio",
  "h": {
   "es": "02 · El desafío",
   "en": "02 · The challenge",
   "fr": "02 · Le défi"
  },
  "t": {
   "es": "Animar uno es fácil. Animar 10.000 es otra historia.",
   "en": "Animating one is one thing. Animating 10,000 is another.",
   "fr": "Animer un personnage, c'est une chose. En animer 10 000, c'en est une autre."
  },
  "p": [
   {
    "es": "Cada personaje estaba construido por capas.",
    "en": "Each character was built from layers.",
    "fr": "Chaque personnage était composé de plusieurs calques."
   },
   {
    "es": "Ojos, bocas, accesorios, prendas y otros elementos podían combinarse de muchas maneras.",
    "en": "Eyes, mouths, accessories, clothing, and other elements could be mixed and matched in countless ways.",
    "fr": "Yeux, bouches, accessoires, vêtements et autres éléments pouvaient s'associer de multiples façons."
   },
   {
    "es": "Eso significaba que un movimiento que funcionaba con un personaje podía generar problemas con otro.",
    "en": "That meant a movement that worked for one character could cause problems for another.",
    "fr": "Un mouvement qui fonctionnait pour un personnage pouvait donc poser problème avec un autre."
   },
   {
    "es": "Una pieza podía tapar otra, cambiar las proporciones o romper la continuidad de la animación.",
    "en": "One part might cover another, change proportions, or interrupt the flow of the animation.",
    "fr": "Un élément pouvait en masquer un autre, changer les proportions ou casser la continuité du mouvement."
   },
   {
    "es": "Hacer una animación independiente para cada personaje no era una opción práctica.",
    "en": "Creating a separate animation for every character wasn't a practical option.",
    "fr": "Créer une animation indépendante pour chaque personnage n'était pas une solution réaliste."
   },
   {
    "es": "Necesitábamos encontrar una manera de trabajar con todos esos elementos sin perder el control sobre el resultado.",
    "en": "We needed a way to work with all these pieces without losing control over the result.",
    "fr": "Nous devions trouver une façon de faire fonctionner tous ces éléments ensemble sans perdre la maîtrise du résultat."
   }
  ]
 },
 {
  "type": "text",
  "id": "sistema",
  "h": {
   "es": "03 · El sistema de animación",
   "en": "03 · The animation system",
   "fr": "03 · Le système d'animation"
  },
  "t": {
   "es": "La solución estaba en las piezas.",
   "en": "The answer was in the pieces.",
   "fr": "Tout se jouait dans les pièces."
  },
  "p": [
   {
    "es": "En lugar de animar personajes completos, trabajamos con los elementos que los componían.",
    "en": "Instead of animating complete characters, we worked with the individual elements that made them up.",
    "fr": "Au lieu d'animer des personnages entiers, nous avons travaillé sur les éléments qui les composaient."
   },
   {
    "es": "Cada capa necesitaba tener su propio movimiento, pero también debía funcionar junto a las demás.",
    "en": "Each layer needed its own movement while still working with everything around it.",
    "fr": "Chaque calque devait avoir son propre mouvement, mais aussi rester compatible avec les autres."
   },
   {
    "es": "Animamos y ajustamos cientos de elementos, teniendo en cuenta sus proporciones, tiempos y posibles combinaciones.",
    "en": "We animated and adjusted hundreds of elements, taking their proportions, timing, and possible combinations into account.",
    "fr": "Nous avons animé et ajusté des centaines d'éléments, en tenant compte des proportions, du rythme et des combinaisons possibles."
   },
   {
    "es": "El desafío estaba en conseguir que un mismo sistema permitiera generar miles de resultados diferentes sin perder la coherencia visual.",
    "en": "The challenge was to build a single system that could produce thousands of different outcomes without losing visual consistency.",
    "fr": "Le défi était de créer un système capable de produire des milliers de résultats différents tout en conservant une cohérence visuelle."
   },
   {
    "es": "Fue un trabajo de detalle, pruebas y muchos ajustes.",
    "en": "It took attention to detail, testing, and a lot of small adjustments.",
    "fr": "Un travail de précision, de tests et de nombreux ajustements."
   },
   {
    "es": "Porque cuando todo se puede combinar, hasta el movimiento más pequeño importa.",
    "en": "Because when everything can be combined, even the smallest movement matters.",
    "fr": "Parce que quand tout peut se combiner, même le plus petit mouvement compte."
   }
  ],
  "flow": [
   {
    "img": {
     "key": "yaypegs",
     "v": "2",
     "r": "1600/1200",
     "alt": {
      "es": "Personaje de Yaypegs en pixel art con disfraz de gato blanco y rostro de calavera, sobre fondo gris claro",
      "en": "Yaypegs pixel art character in a white cat costume with a skull face, on a light grey background",
      "fr": "Personnage Yaypegs en pixel art déguisé en chat blanc, avec un visage de crâne, sur fond gris clair"
     }
    }
   }
  ]
 },
 {
  "type": "text",
  "id": "campanas",
  "h": {
   "es": "04 · Más allá de los personajes",
   "en": "04 · Beyond the characters",
   "fr": "04 · Au-delà des personnages"
  },
  "t": {
   "es": "Un universo que también tenía que comunicar.",
   "en": "A whole universe needs a way to communicate.",
   "fr": "Un univers qui devait aussi communiquer."
  },
  "p": [
   {
    "es": "El trabajo no terminaba con la colección animada.",
    "en": "The work didn't end with the animated collection.",
    "fr": "Le travail ne s'arrêtait pas à la collection animée."
   },
   {
    "es": "Yaypegs también necesitaba piezas para presentar el proyecto, comunicar novedades y acompañar sus campañas.",
    "en": "Yaypegs also needed content to introduce the project, share updates, and support campaigns.",
    "fr": "Yaypegs avait aussi besoin de contenus pour présenter le projet, partager ses actualités et accompagner ses campagnes."
   },
   {
    "es": "Desarrollamos contenidos audiovisuales y animaciones para redes sociales, utilizando el mismo lenguaje visual de los personajes.",
    "en": "We developed audiovisual content and animations for social media, using the same visual language as the characters.",
    "fr": "Nous avons créé des contenus audiovisuels et des animations pour les réseaux sociaux, en utilisant le même langage visuel que celui des personnages."
   },
   {
    "es": "La idea era que todo formara parte de un mismo universo, desde la colección hasta las publicaciones que la acompañaban.",
    "en": "The idea was to make everything feel part of one universe, from the collection itself to the posts surrounding it.",
    "fr": "L'objectif était de garder un univers cohérent, de la collection aux publications qui l'accompagnaient."
   },
   {
    "es": "Así, la animación también se convirtió en una forma de presentar y comunicar el proyecto.",
    "en": "Animation also became a way to introduce and communicate the project.",
    "fr": "L'animation est ainsi devenue une façon de présenter et de raconter le projet."
   }
  ]
 },
 {
  "type": "text",
  "id": "trabajo",
  "h": {
   "es": "05 · Mi trabajo",
   "en": "05 · My role",
   "fr": "05 · Mon rôle"
  },
  "t": {
   "es": "Dirección de arte, animación y muchos detalles.",
   "en": "Art direction, animation, and plenty of details.",
   "fr": "Direction artistique, animation et beaucoup de détails."
  },
  "p": [
   {
    "es": "Participé junto al equipo de Binōme Studio en el trabajo artístico del proyecto, su evolución hacia la animación y la creación de contenidos audiovisuales.",
    "en": "Working with the Binōme Studio team, I took part in the project's art direction, its move into animation, and the creation of audiovisual content.",
    "fr": "Avec l'équipe de Binōme Studio, j'ai participé au travail artistique du projet, à son passage vers l'animation et à la création de contenus audiovisuels."
   },
   {
    "es": "Mi trabajo se centró en la dirección de arte y el motion design, buscando que cada elemento pudiera moverse y combinarse sin perder la identidad visual del conjunto.",
    "en": "My work focused on art direction and motion design, making sure each element could move and combine without losing the overall visual identity.",
    "fr": "Je me suis concentré sur la direction artistique et le motion design, pour que chaque élément puisse bouger et se combiner sans perdre l'identité visuelle de l'ensemble."
   },
   {
    "es": "El mayor reto fue pensar más allá de una animación individual.",
    "en": "The biggest challenge was thinking beyond one individual animation.",
    "fr": "Le vrai défi était de penser au-delà d'une animation isolée."
   },
   {
    "es": "Había que diseñar un sistema que funcionara con miles de combinaciones y que pudiera aplicarse de forma coherente a todo el universo de Yaypegs.",
    "en": "We needed a system that could handle thousands of combinations while remaining consistent across the whole Yaypegs universe.",
    "fr": "Il fallait concevoir un système adapté à des milliers de combinaisons et applicable de manière cohérente à tout l'univers de Yaypegs."
   },
   {
    "es": "Un proyecto donde la creatividad y la precisión tenían que ir de la mano.",
    "en": "A project where creativity and precision had to work hand in hand.",
    "fr": "Un projet où créativité et précision devaient aller de pair."
   }
  ]
 },
 {
  "type": "text",
  "id": "cierre",
  "h": {
   "es": "Cierre",
   "en": "Closing",
   "fr": "Conclusion"
  },
  "t": {
   "es": "Miles de personajes. Un universo en movimiento.",
   "en": "Thousands of characters. One moving universe.",
   "fr": "Des milliers de personnages. Un univers en mouvement."
  },
  "p": [
   {
    "es": "Lo interesante de Yaypegs no fue únicamente conseguir que los personajes se movieran.",
    "en": "What made Yaypegs interesting wasn't just getting the characters to move.",
    "fr": "L'intérêt de Yaypegs ne résidait pas seulement dans le fait de faire bouger les personnages."
   },
   {
    "es": "Fue encontrar una manera de hacerlo a gran escala, sin tener que resolver cada animación desde cero.",
    "en": "It was finding a way to do it at scale, without starting every animation from scratch.",
    "fr": "Il fallait trouver comment le faire à grande échelle, sans reprendre chaque animation de zéro."
   },
   {
    "es": "Un buen ejemplo de cómo un sistema bien pensado puede abrir muchas posibilidades creativas.",
    "en": "A good example of how a well-designed system can open up more creative possibilities.",
    "fr": "Un bon exemple de tout ce qu'un système bien pensé peut rendre possible."
   },
   {
    "em": true,
    "es": "¿Tienes una idea que necesita cobrar vida? Hablemos.",
    "en": "Have an idea you'd like to bring to life? Let's talk.",
    "fr": "Tu as une idée à faire vivre ? Parlons-en."
   }
  ]
 }
];
HERO.yaypegs = {
 "tag": {
  "es": "10.000 personajes. Un mismo sistema de animación.",
  "en": "10,000 characters. One animation system.",
  "fr": "10 000 personnages. Un seul système d'animation."
 },
 "lead": {
  "es": "¿Cómo haces que miles de personajes diferentes cobren vida sin tener que animarlos uno por uno? En Yaypegs trabajamos en un universo de personajes digitales construidos a partir de rasgos y accesorios combinables. El reto fue desarrollar un sistema de animación que funcionara con todas esas variaciones, manteniendo la personalidad de cada personaje.",
  "en": "How do you bring thousands of different characters to life without animating every single one? For Yaypegs, we worked on a universe of digital characters made from mix-and-match features and accessories. The challenge was to create an animation system that worked across all those variations while keeping each character's personality intact.",
  "fr": "Comment donner vie à des milliers de personnages différents sans devoir les animer un par un ? Sur Yaypegs, nous avons travaillé dans un univers de personnages digitaux composés de traits et d'accessoires combinables. Le défi était de créer un système d'animation compatible avec toutes ces variations, sans perdre la personnalité de chacun."
 },
 "alt": {
  "es": "Composición de capas de un personaje de Yaypegs: fondo, cuerpo, ojos, capucha, boca y accesorio se apilan hasta formar el personaje final",
  "en": "Layer composition of a Yaypegs character: background, body, eyes, hood, mouth and accessory stack up into the final character",
  "fr": "Composition en calques d'un personnage Yaypegs : fond, corps, yeux, capuche, bouche et accessoire s'empilent pour former le personnage final"
 }
};
SEO.es.proj.yaypegs = {"t": "Yaypegs: Dirección de arte y Motion Design | Tom Fabre", "d": "Dirección de arte y animación modular para Yaypegs. Descubre cómo diseñamos un sistema de movimiento para una colección de 10.000 personajes digitales."};
SEO.en.proj.yaypegs = {"t": "Yaypegs: Art Direction & Motion Design | Tom Fabre", "d": "Art direction and modular animation for Yaypegs. How we designed a movement system for a collection of 10,000 digital characters."};
SEO.fr.proj.yaypegs = {"t": "Yaypegs : direction artistique et motion design | Tom Fabre", "d": "Direction artistique et animation modulaire pour Yaypegs. Découvre comment nous avons conçu un système de mouvement pour 10 000 personnages digitaux."};

/* 360estudio: case study (sections), hero override and SEO. Copy approved by Tom. Founders' perception only, no metrics. Period 2024 per Binome reference. */
SECTIONS["360estudio"] = [
 {
  "type": "text",
  "id": "reto",
  "h": {
   "es": "01 · El reto",
   "en": "01 · The challenge",
   "fr": "01 · Le défi"
  },
  "t": {
   "es": "Hacer visible lo que ya estaba ahí.",
   "en": "Making visible what was already there.",
   "fr": "Rendre visible ce qui était déjà là."
  },
  "p": [
   {
    "es": "360estudio tenía una trayectoria, un equipo con experiencia y una forma muy particular de abordar sus proyectos.",
    "en": "360estudio had an established track record, an experienced team, and a distinctive approach to its projects.",
    "fr": "360estudio avait déjà son histoire, une équipe expérimentée et une manière bien à elle d'aborder ses projets."
   },
   {
    "es": "Especializado en arquitectura y espacios sanitarios, su trabajo combinaba conocimiento técnico y atención a las personas que utilizan esos lugares.",
    "en": "Specialising in architecture and healthcare spaces, its work brought technical expertise together with care for the people using those places.",
    "fr": "Spécialisée dans l'architecture et les espaces de santé, l'agence associait expertise technique et attention portée aux personnes qui utilisent ces lieux."
   },
   {
    "es": "El reto era trasladar todo eso a una identidad visual.",
    "en": "The challenge was to bring all of that into a visual identity.",
    "fr": "Le défi était de traduire tout cela en une identité visuelle."
   },
   {
    "es": "No necesitábamos inventar una personalidad para la empresa. Necesitábamos encontrar una manera de mostrar la que ya tenía.",
    "en": "We didn't need to invent a personality for the business. We needed to find a way to show the one it already had.",
    "fr": "Nous n'avions pas besoin d'inventer une personnalité à l'entreprise, mais de trouver comment montrer celle qu'elle avait déjà."
   },
   {
    "es": "Una imagen que transmitiera confianza, reflejara su experiencia y funcionara en todos los lugares donde la marca estuviera presente.",
    "en": "An identity that inspired trust, reflected its expertise, and worked everywhere the brand appeared.",
    "fr": "Une image capable d'inspirer confiance, de refléter son expérience et de fonctionner partout où la marque devait apparaître."
   }
  ]
 },
 {
  "type": "text",
  "id": "identidad",
  "h": {
   "es": "02 · La identidad",
   "en": "02 · The identity",
   "fr": "02 · L'identité"
  },
  "t": {
   "es": "Encontrar una dirección. Y darle forma.",
   "en": "Finding a direction. Giving it shape.",
   "fr": "Trouver une direction. Puis lui donner forme."
  },
  "p": [
   {
    "es": "Empezamos por entender cómo trabajaba 360estudio, qué quería comunicar y qué debía transmitir su nueva imagen.",
    "en": "We began by understanding how 360estudio worked, what it wanted to communicate, and what its new identity needed to express.",
    "fr": "Nous avons commencé par comprendre comment travaillait 360estudio, ce qu'elle souhaitait raconter et ce que sa nouvelle image devait exprimer."
   },
   {
    "es": "A partir de ahí, desarrollamos una identidad visual que combinara el carácter técnico de la arquitectura con una expresión más cercana y contemporánea.",
    "en": "From there, we built a visual identity that balanced the technical side of architecture with a warmer, more contemporary feel.",
    "fr": "Nous avons ensuite créé une identité visuelle mêlant la rigueur technique de l'architecture à une expression plus humaine et contemporaine."
   },
   {
    "es": "Trabajamos en el logotipo, los colores, la tipografía y las aplicaciones de marca.",
    "en": "We worked on the logo, colour palette, typography, and brand applications.",
    "fr": "Nous avons travaillé le logo, les couleurs, la typographie et les applications de marque."
   },
   {
    "es": "Cada elemento debía funcionar por separado, pero también formar parte de un conjunto reconocible.",
    "en": "Every element needed to work on its own while still feeling part of a recognisable whole.",
    "fr": "Chaque élément devait fonctionner seul, tout en appartenant à un ensemble reconnaissable."
   },
   {
    "es": "El resultado fue un sistema visual pensado para adaptarse a distintos formatos, desde la papelería corporativa hasta las comunicaciones digitales.",
    "en": "The result was a visual system designed to adapt across formats, from stationery to digital communications.",
    "fr": "Le résultat : un système visuel conçu pour s'adapter à différents supports, de la papeterie aux communications digitales."
   },
   {
    "es": "Una identidad que pudiera acompañar al estudio sin importar dónde apareciera.",
    "en": "An identity that could support the studio wherever it appeared.",
    "fr": "Une identité qui accompagne l'agence, quel que soit le support."
   }
  ],
  "flow": [
   {
    "pair": [
     {
      "key": "360estudio",
      "v": "0",
      "alt": {
       "es": "Logotipo de 360estudio en blanco y gris sobre fondo oscuro, con un punto amarillo sobre la «i»",
       "en": "360estudio logo in white and grey on a dark background, with a yellow dot above the «i»",
       "fr": "Logo de 360estudio en blanc et gris sur fond sombre, avec un point jaune sur le «i»"
      }
     },
     {
      "key": "360estudio",
      "v": "3",
      "alt": {
       "es": "Papelería corporativa de 360estudio: bolsa de tela, carpeta, carta, tarjetas, sobre y perfil en un móvil, en negro, blanco y amarillo",
       "en": "360estudio corporate stationery: tote bag, folder, letter, business cards, envelope and a phone profile, in black, white and yellow",
       "fr": "Papeterie de 360estudio : tote bag, chemise, lettre, cartes, enveloppe et profil sur mobile, en noir, blanc et jaune"
      }
     }
    ]
   }
  ]
 },
 {
  "type": "text",
  "id": "web",
  "h": {
   "es": "03 · Del branding a la web",
   "en": "03 · From branding to the website",
   "fr": "03 · Du branding au site web"
  },
  "t": {
   "es": "La misma identidad, también en pantalla.",
   "en": "The same identity, on screen too.",
   "fr": "La même identité, aussi à l'écran."
  },
  "p": [
   {
    "es": "La web tenía que hacer algo más que mostrar proyectos bonitos.",
    "en": "The website needed to do more than showcase beautiful projects.",
    "fr": "Le site ne devait pas seulement montrer de beaux projets."
   },
   {
    "es": "Necesitábamos explicar qué hace 360estudio, presentar sus servicios y dar protagonismo a su experiencia en arquitectura y espacios sanitarios.",
    "en": "It had to explain what 360estudio does, present its services, and highlight its expertise in architecture and healthcare spaces.",
    "fr": "Il fallait expliquer ce que fait 360estudio, présenter ses services et donner toute sa place à son expertise en architecture et espaces de santé."
   },
   {
    "es": "Diseñamos una estructura que permitiera explorar sus proyectos, conocer sus especialidades y entender mejor su manera de trabajar.",
    "en": "We designed a structure that made it easier to browse projects, explore specialisms, and understand how the studio works.",
    "fr": "Nous avons conçu une structure permettant de parcourir ses réalisations, de découvrir ses spécialités et de mieux comprendre sa façon de travailler."
   },
   {
    "es": "La identidad visual nos dio un punto de partida, pero cada decisión de diseño tenía que responder también a las necesidades de la web.",
    "en": "The visual identity gave us a starting point, but each design decision also needed to serve the website itself.",
    "fr": "L'identité visuelle nous a servi de point de départ, mais chaque décision devait aussi répondre aux besoins du site."
   },
   {
    "es": "Porque una marca puede reconocerse por cómo se ve, pero una buena web también debe ayudar a encontrar lo que buscas.",
    "en": "Because people may recognise a brand by its appearance, but a good website should also help them find what they need.",
    "fr": "Parce qu'une marque se reconnaît à son apparence, mais qu'un bon site doit aussi aider à trouver ce qu'on cherche."
   }
  ]
 },
 {
  "type": "text",
  "id": "espacio",
  "h": {
   "es": "04 · Más allá de lo gráfico",
   "en": "04 · Beyond the screen",
   "fr": "04 · Au-delà du graphisme"
  },
  "t": {
   "es": "Cuando la marca entra en su propio espacio.",
   "en": "When a brand becomes part of its own space.",
   "fr": "Quand la marque entre dans ses propres espaces."
  },
  "p": [
   {
    "es": "Una de las partes más interesantes del proyecto fue llevar la identidad fuera de la pantalla.",
    "en": "One of the most interesting parts of the project was bringing the identity into the physical world.",
    "fr": "L'un des aspects les plus intéressants du projet a été de faire sortir l'identité de l'écran."
   },
   {
    "es": "Mientras trabajábamos en el branding, 360estudio también estaba desarrollando sus propias oficinas.",
    "en": "While we were working on the branding, 360estudio was also developing its own offices.",
    "fr": "Pendant que nous travaillions sur le branding, 360estudio aménageait aussi ses nouveaux bureaux."
   },
   {
    "es": "Eso abrió la posibilidad de aplicar algunos elementos de la nueva identidad al espacio físico.",
    "en": "That created an opportunity to apply elements of the new identity to the space itself.",
    "fr": "C'était l'occasion d'intégrer certains éléments de l'identité dans l'espace physique."
   },
   {
    "es": "Colaboramos en detalles de interiorismo y aplicaciones gráficas, buscando que hubiera una relación entre la marca y el lugar donde trabaja su equipo.",
    "en": "We collaborated on interior details and graphic applications, looking for connections between the brand and the place where the team works.",
    "fr": "Nous avons collaboré sur quelques détails d'aménagement et applications graphiques pour créer un lien entre la marque et le lieu de travail de l'équipe."
   },
   {
    "es": "Fue una oportunidad para conectar dos disciplinas que normalmente vemos por separado: diseño gráfico y arquitectura.",
    "en": "It was a chance to bring two disciplines together that are often treated separately: graphic design and architecture.",
    "fr": "Une belle occasion de rapprocher deux disciplines que l'on sépare souvent : le design graphique et l'architecture."
   },
   {
    "es": "Y para comprobar cómo una identidad puede formar parte de un espacio, no solo aparecer sobre él.",
    "en": "And to see how an identity can become part of a space, rather than simply be displayed in it.",
    "fr": "Et de voir comment une identité peut faire partie d'un lieu, plutôt que simplement s'y afficher."
   }
  ],
  "flow": [
   {
    "img": {
     "key": "360estudio",
     "v": "1",
     "r": "2400/1050",
     "alt": {
      "es": "Señalética exterior de 360estudio junto a un edificio, con el logotipo y un círculo amarillo, y a su derecha el logotipo en blanco sobre fondo oscuro",
      "en": "360estudio outdoor signage beside a building, with the logo and a yellow circle, next to the logo in white on a dark background",
      "fr": "Signalétique extérieure de 360estudio devant un bâtiment, avec le logo et un cercle jaune, à côté du logo en blanc sur fond sombre"
     },
     "zoom": true
    }
   },
   {
    "img": {
     "key": "360estudio",
     "v": "2",
     "r": "1600/1200",
     "alt": {
      "es": "Furgoneta y coche rotulados con la identidad de 360estudio en blanco, negro y amarillo, frente a un edificio de oficinas",
      "en": "Van and car wrapped in the 360estudio identity in white, black and yellow, in front of an office building",
      "fr": "Fourgonnette et voiture habillées de l'identité de 360estudio en blanc, noir et jaune, devant un immeuble de bureaux"
     }
    }
   }
  ]
 },
 {
  "type": "text",
  "id": "impacto",
  "h": {
   "es": "05 · El impacto y mi trabajo",
   "en": "05 · The impact and my role",
   "fr": "05 · L'impact et mon rôle"
  },
  "t": {
   "es": "Una imagen que refleja mejor su trabajo.",
   "en": "An identity that better reflects the work.",
   "fr": "Une image plus fidèle à leur travail."
  },
  "p": [
   {
    "es": "360estudio ya tenía experiencia, proyectos y una forma de trabajar consolidada.",
    "en": "360estudio already had the expertise, the projects, and an established way of working.",
    "fr": "360estudio avait déjà son expérience, ses projets et une manière de travailler bien établie."
   },
   {
    "es": "Nuestra aportación fue desarrollar una identidad que ayudara a comunicar todo eso con más claridad.",
    "en": "Our contribution was to create an identity that helped communicate all of that more clearly.",
    "fr": "Notre contribution a consisté à créer une identité qui permette de mieux raconter tout cela."
   },
   {
    "es": "La nueva imagen se trasladó a su web, sus materiales corporativos y diferentes aplicaciones físicas y digitales.",
    "en": "The new identity was applied to its website, corporate materials, and various physical and digital touchpoints.",
    "fr": "Cette nouvelle image s'est déclinée sur le site, les supports institutionnels et différentes applications physiques et digitales."
   },
   {
    "es": "Sus fundadores también nos han compartido cómo este cambio ha contribuido a reforzar la imagen profesional del estudio.",
    "en": "The founders also shared how the change had helped strengthen the studio's professional image.",
    "fr": "Les fondateurs nous ont aussi expliqué comment ce changement avait contribué à renforcer l'image professionnelle de l'agence."
   },
   {
    "es": "Mi trabajo, junto a Binōme Studio, abarcó la dirección creativa, el desarrollo de la identidad visual, sus aplicaciones, el diseño web y la colaboración en algunos detalles de las oficinas.",
    "en": "Working with Binōme Studio, I contributed to the creative direction, visual identity and its applications, website design, and a few details in the office spaces.",
    "fr": "Avec Binōme Studio, j'ai travaillé sur la direction créative, l'identité visuelle et ses applications, le design web et certains détails des bureaux."
   },
   {
    "es": "Un proyecto en el que pudimos trabajar desde la primera idea hasta ver la identidad aplicada en lugares reales.",
    "en": "A project we could follow from the first ideas to seeing the identity used in real places.",
    "fr": "Un projet que nous avons pu accompagner des premières idées jusqu'aux applications dans de vrais espaces."
   }
  ]
 },
 {
  "type": "text",
  "id": "cierre",
  "h": {
   "es": "Cierre",
   "en": "Closing",
   "fr": "Conclusion"
  },
  "t": {
   "es": "Una marca que también se construye con el tiempo.",
   "en": "A brand takes shape over time, too.",
   "fr": "Une marque se construit aussi avec le temps."
  },
  "p": [
   {
    "es": "Lo que más me gusta de este proyecto es que la identidad no se quedó en una presentación.",
    "en": "What I like most about this project is that the identity didn't stay in a presentation deck.",
    "fr": "Ce que j'aime le plus dans ce projet, c'est que l'identité ne s'est pas arrêtée à une présentation."
   },
   {
    "es": "Hoy forma parte de la comunicación de 360estudio y acompaña a su equipo en diferentes formatos y espacios.",
    "en": "Today, it's part of 360estudio's communications and accompanies the team across different formats and spaces.",
    "fr": "Aujourd'hui, elle fait partie de la communication de 360estudio et accompagne son équipe sur différents supports et dans différents espaces."
   },
   {
    "es": "Porque el trabajo de una empresa ya cuenta mucho sobre ella. A veces, el diseño solo tiene que ayudar a que los demás también lo vean.",
    "en": "Because a company's work already says a lot about who they are. Sometimes design just needs to help other people see it.",
    "fr": "Parce que le travail d'une entreprise raconte déjà beaucoup de choses sur elle. Parfois, le design sert simplement à aider les autres à le voir."
   },
   {
    "em": true,
    "es": "¿Tienes una empresa cuya imagen ya no refleja lo que hace? Hablemos.",
    "en": "Does your company's image no longer reflect what it does? Let's talk.",
    "fr": "L'image de ton entreprise ne reflète plus ce qu'elle fait ? Parlons-en."
   }
  ]
 }
];
HERO["360estudio"] = {
 "tag": {
  "es": "Una identidad. Muchas formas de habitarla.",
  "en": "One identity. So many ways to bring it to life.",
  "fr": "Une identité. Mille façons de l'habiter."
 },
 "lead": {
  "es": "¿Cómo se traduce la experiencia de un estudio de arquitectura en una identidad visual? En 360estudio trabajamos para dar forma a una marca que reflejara su manera de entender los espacios. Desde el branding y la web hasta algunos detalles de sus propias oficinas.",
  "en": "How do you turn an architecture studio's experience into a visual identity? With 360estudio, we set out to create a brand that reflected its approach to spaces. From branding and the website to a few details inside its own offices.",
  "fr": "Comment traduire l'expérience d'une agence d'architecture en identité visuelle ? Avec 360estudio, nous avons imaginé une marque qui reflète sa manière de penser les espaces. Du branding au site web, jusqu'à certains détails de ses propres bureaux."
 },
 "alt": {
  "es": "Portada de 360estudio: la web del estudio en un portátil sobre una mesa, con el titular «Entornos que cuidan, usuarios que prosperan» y dos esferas amarillas",
  "en": "360estudio cover: the studio website on a laptop on a table, with the headline «Entornos que cuidan, usuarios que prosperan» and two yellow spheres",
  "fr": "Couverture de 360estudio : le site du studio sur un ordinateur portable posé sur une table, avec le titre « Entornos que cuidan, usuarios que prosperan » et deux sphères jaunes"
 }
};
SEO.es.proj["360estudio"] = {"t": "360estudio: Branding y diseño web | Tom Fabre", "d": "Identidad visual y diseño web para 360estudio, especializado en arquitectura sanitaria. Un proyecto donde el branding también llegó a los espacios físicos."};
SEO.en.proj["360estudio"] = {"t": "360estudio: Branding & Web Design | Tom Fabre", "d": "Visual identity and web design for 360estudio, a healthcare architecture specialist. A branding project that extended into physical spaces."};
SEO.fr.proj["360estudio"] = {"t": "360estudio : branding et design web | Tom Fabre", "d": "Identité visuelle et design web pour 360estudio, spécialiste de l'architecture de santé. Un projet où le branding s'est aussi invité dans les espaces physiques."};

/* Mobile Experiences: Apolo Launcher, Appy x Jojol and Mood Messenger in one case (chapters). Images: img/mobile-experiences-{0,cover,og,1..8}.webp (1-2 Apolo, 3-5 Appy, 6-8 Mood Messenger). */
SECTIONS["mobile-experiences"] = [
 {
  "type": "index",
  "id": "intro",
  "h": {
   "es": "Los proyectos",
   "en": "The projects",
   "fr": "Les projets"
  },
  "t": {
   "es": "Tres productos. Tres puntos de partida.",
   "en": "Three products. Three starting points.",
   "fr": "Trois produits. Trois points de départ."
  },
  "p": [
   {
    "es": "No es lo mismo construir un producto desde cero que mejorar uno que ya utilizan millones de personas.",
    "en": "Building a product from scratch is not the same as improving one that millions of people already use.",
    "fr": "Construire un produit de zéro n'a rien à voir avec améliorer un produit que des millions de personnes utilisent déjà."
   },
   {
    "es": "Apolo Launcher, Appy y Mood Messenger me permitieron trabajar en diferentes momentos del ciclo de vida de una aplicación: desde definir su estructura y experiencia hasta diseñar nuevas interfaces y participar en su evolución.",
    "en": "Apolo Launcher, Appy and Mood Messenger let me work at different points in an app's life: from defining its structure and experience to designing new interfaces and helping it evolve.",
    "fr": "Apolo Launcher, Appy et Mood Messenger m'ont permis d'intervenir à différents moments de la vie d'une application : de la définition de sa structure et de son expérience jusqu'à la conception de nouvelles interfaces et à son évolution."
   },
   {
    "es": "Estas son tres historias sobre diseño, decisiones y producto.",
    "en": "These are three stories about design, decisions and product.",
    "fr": "Ce sont trois histoires de design, de décisions et de produit."
   }
  ],
  "items": [
   {
    "to": "apolo",
    "n": "01",
    "l": {
     "es": "Apolo Launcher",
     "en": "Apolo Launcher",
     "fr": "Apolo Launcher"
    },
    "tag": {
     "es": "Create",
     "en": "Create",
     "fr": "Create"
    }
   },
   {
    "to": "appy",
    "n": "02",
    "l": {
     "es": "Appy × Jojol",
     "en": "Appy × Jojol",
     "fr": "Appy × Jojol"
    },
    "tag": {
     "es": "Connect",
     "en": "Connect",
     "fr": "Connect"
    }
   },
   {
    "to": "mood",
    "n": "03",
    "l": {
     "es": "Mood Messenger",
     "en": "Mood Messenger",
     "fr": "Mood Messenger"
    },
    "tag": {
     "es": "Evolve",
     "en": "Evolve",
     "fr": "Evolve"
    }
   }
  ]
 },
 {
  "type": "chapter",
  "id": "apolo",
  "layout": "right",
  "eb": {
   "es": "01 / Create",
   "en": "01 / Create",
   "fr": "01 / Create"
  },
  "h": {
   "es": "Apolo Launcher",
   "en": "Apolo Launcher",
   "fr": "Apolo Launcher"
  },
  "t": {
   "es": "Tu Android. Tus reglas.",
   "en": "Your Android. Your rules.",
   "fr": "Ton Android. Tes règles."
  },
  "sub": {
   "es": "Diseñar una nueva forma de interactuar con el teléfono.",
   "en": "Designing a new way to interact with your phone.",
   "fr": "Concevoir une nouvelle façon d'utiliser son téléphone."
  },
  "blocks": [
   {
    "l": {
     "es": "Contexto",
     "en": "Context",
     "fr": "Contexte"
    },
    "p": [
     {
      "es": "Un launcher es mucho más que una pantalla de inicio. Es el punto de partida de casi todo lo que hacemos con nuestro móvil.",
      "en": "A launcher is far more than a home screen. It is the starting point for almost everything we do on our phones.",
      "fr": "Un launcher, c'est bien plus qu'un écran d'accueil. C'est le point de départ de presque tout ce que l'on fait avec son mobile."
     },
     {
      "es": "Apolo Launcher nació para ofrecer una experiencia Android más personalizable, sin renunciar a la claridad y facilidad de uso.",
      "en": "Apolo Launcher was created to offer a more customisable Android experience without giving up clarity and ease of use.",
      "fr": "Apolo Launcher est né pour offrir une expérience Android plus personnalisable, sans sacrifier la clarté ni la simplicité d'usage."
     },
     {
      "es": "Mi trabajo abarcó el diseño integral del producto: desde su concepto y arquitectura hasta la navegación, las funcionalidades y las interfaces finales.",
      "en": "My work covered the end-to-end design of the product: from its concept and architecture to navigation, features and the final interfaces.",
      "fr": "Mon travail a couvert la conception complète du produit : du concept et de l'architecture à la navigation, aux fonctionnalités et aux interfaces finales."
     }
    ]
   },
   {
    "l": {
     "es": "El reto",
     "en": "The challenge",
     "fr": "Le défi"
    },
    "t": {
     "es": "Más posibilidades. Menos complejidad.",
     "en": "More possibilities. Less complexity.",
     "fr": "Plus de possibilités. Moins de complexité."
    },
    "p": [
     {
      "es": "Personalizar una interfaz significa ofrecer opciones. Pero cuantas más opciones existen, más difícil puede resultar encontrar lo que buscamos.",
      "en": "Customising an interface means offering options. But the more options there are, the harder it can be to find what you are looking for.",
      "fr": "Personnaliser une interface, c'est proposer des options. Mais plus il y en a, plus il peut être difficile de trouver ce que l'on cherche."
     },
     {
      "es": "El desafío consistía en equilibrar libertad y simplicidad: permitir que cada persona adaptara su teléfono sin complicar las interacciones cotidianas.",
      "en": "The challenge was balancing freedom and simplicity: letting each person adapt their phone without complicating everyday interactions.",
      "fr": "Le défi : équilibrer liberté et simplicité, pour que chacun adapte son téléphone sans compliquer les gestes du quotidien."
     }
    ]
   },
   {
    "l": {
     "es": "El diseño",
     "en": "The design",
     "fr": "Le design"
    },
    "t": {
     "es": "Del concepto a la interfaz.",
     "en": "From concept to interface.",
     "fr": "Du concept à l'interface."
    },
    "p": [
     {
      "es": "El diseño abarcó diferentes capas de la experiencia: organización de aplicaciones, navegación, personalización visual y acceso a funcionalidades.",
      "en": "The design covered several layers of the experience: app organisation, navigation, visual personalisation and access to features.",
      "fr": "Le design a couvert plusieurs couches de l'expérience : organisation des applications, navigation, personnalisation visuelle et accès aux fonctionnalités."
     },
     {
      "es": "Cada elemento debía formar parte de un sistema coherente, capaz de adaptarse a las preferencias del usuario sin perder consistencia.",
      "en": "Every element had to belong to a coherent system, able to adapt to each user's preferences without losing consistency.",
      "fr": "Chaque élément devait s'intégrer à un système cohérent, capable de s'adapter aux préférences de chacun sans perdre en cohérence."
     }
    ],
    "areas": {
     "es": "Arquitectura de información · User flows · UX/UI · Visual design · Personalización",
     "en": "Information architecture · User flows · UX/UI · Visual design · Personalisation",
     "fr": "Architecture de l'information · User flows · UX/UI · Design visuel · Personnalisation"
    }
   },
   {
    "l": {
     "es": "Resultado",
     "en": "Result",
     "fr": "Résultat"
    },
    "t": {
     "es": "Una experiencia que se adapta a ti.",
     "en": "An experience that adapts to you.",
     "fr": "Une expérience qui s'adapte à toi."
    },
    "p": [
     {
      "es": "Una experiencia Android que combina herramientas de personalización con una interfaz pensada para el uso diario.",
      "en": "An Android experience that pairs personalisation tools with an interface designed for everyday use.",
      "fr": "Une expérience Android qui associe outils de personnalisation et interface pensée pour l'usage quotidien."
     }
    ]
   }
  ],
  "meta": [
   {
    "l": {
     "es": "Mi contribución",
     "en": "My contribution",
     "fr": "Ma contribution"
    },
    "v": {
     "es": "Diseño integral de producto · UX/UI · Diseño visual",
     "en": "End-to-end product design · UX/UI · Visual design",
     "fr": "Conception complète du produit · UX/UI · Design visuel"
    }
   }
  ],
  "links": [
   {
    "href": "https://apolo-launcher.softonic.com/android",
    "l": {
     "es": "Ver Apolo Launcher en Softonic",
     "en": "Apolo Launcher on Softonic",
     "fr": "Voir Apolo Launcher sur Softonic"
    }
   }
  ],
  "kit": {
   "l": {
    "es": "UI Kit",
    "en": "UI Kit",
    "fr": "UI Kit"
   },
   "note": {
    "es": "Recreación editorial del producto a partir de materiales de diseño.",
    "en": "Editorial recreation of the product based on design materials.",
    "fr": "Recréation éditoriale du produit à partir de supports de design."
   },
   "img": {
    "key": "mobile-experiences-kit",
    "v": "apolo",
    "r": "1448/1086",
    "alt": {
     "es": "UI Kit de Apolo Launcher: logotipo, paleta de color, tipografía Inter, temas, fondos de pantalla, componentes de búsqueda y navegación, widgets y tres pantallas móviles",
     "en": "Apolo Launcher UI Kit: logo, colour palette, Inter typeface, themes, wallpapers, search and navigation components, widgets and three mobile screens",
     "fr": "UI Kit d'Apolo Launcher : logotype, palette de couleurs, typographie Inter, thèmes, fonds d'écran, composants de recherche et de navigation, widgets et trois écrans mobiles"
    }
   }
  }
 },
 {
  "type": "chapter",
  "id": "appy",
  "layout": "left",
  "eb": {
   "es": "02 / Connect",
   "en": "02 / Connect",
   "fr": "02 / Connect"
  },
  "h": {
   "es": "Appy × Jojol",
   "en": "Appy × Jojol",
   "fr": "Appy × Jojol"
  },
  "t": {
   "es": "La suerte también necesita UX.",
   "en": "Luck needs UX too.",
   "fr": "Même la chance a besoin d'UX."
  },
  "sub": {
   "es": "De una comunidad digital a una experiencia móvil.",
   "en": "From a digital community to a mobile experience.",
   "fr": "D'une communauté en ligne à une expérience mobile."
  },
  "blocks": [
   {
    "l": {
     "es": "Contexto",
     "en": "Context",
     "fr": "Contexte"
    },
    "p": [
     {
      "es": "¿Cómo transformas la relación entre un creador de contenido y millones de seguidores en un producto que funcione?",
      "en": "How do you turn the relationship between a content creator and millions of followers into a product that works?",
      "fr": "Comment transformer la relation entre un créateur de contenu et des millions d'abonnés en un produit qui fonctionne ?"
     },
     {
      "es": "Appy nació de una colaboración con Jojol, creador tecnológico francés, para acercar concursos y premios a su comunidad.",
      "en": "Appy came out of a collaboration with Jojol, a French tech creator, to bring giveaways and prizes closer to his community.",
      "fr": "Appy est née d'une collaboration avec Jojol, créateur tech français, pour rapprocher jeux-concours et cadeaux de sa communauté."
     },
     {
      "es": "Me encargué del diseño integral de la aplicación para iOS y Android, desde su estructura y recorridos de usuario hasta su identidad visual e interfaces.",
      "en": "I was responsible for the end-to-end design of the app for iOS and Android, from its structure and user journeys to its visual identity and interfaces.",
      "fr": "J'ai pris en charge la conception complète de l'application sur iOS et Android, de sa structure et de ses parcours utilisateur à son identité visuelle et ses interfaces."
     }
    ]
   },
   {
    "l": {
     "es": "El reto",
     "en": "The challenge",
     "fr": "Le défi"
    },
    "t": {
     "es": "Participar debería ser lo más fácil.",
     "en": "Taking part should be the easy part.",
     "fr": "Participer devrait être ce qu'il y a de plus simple."
    },
    "p": [
     {
      "es": "La experiencia tenía que resolver algo fundamental: que cualquier persona pudiera descubrir un concurso, entender cómo participar y seguir sus oportunidades sin confusiones.",
      "en": "The experience had to solve something fundamental: anyone should be able to discover a contest, understand how to take part and follow their chances without confusion.",
      "fr": "L'expérience devait résoudre un point essentiel : permettre à chacun de découvrir un concours, de comprendre comment participer et de suivre ses chances sans se perdre."
     },
     {
      "es": "No se trataba de añadir funciones, sino de organizar correctamente la información y hacer que cada interacción tuviera sentido.",
      "en": "It was not about adding features, but about organising information properly and making every interaction make sense.",
      "fr": "Il ne s'agissait pas d'ajouter des fonctionnalités, mais d'organiser correctement l'information et de donner du sens à chaque interaction."
     }
    ]
   },
   {
    "l": {
     "es": "El diseño",
     "en": "The design",
     "fr": "Le design"
    },
    "t": {
     "es": "Diseñar el recorrido.",
     "en": "Designing the journey.",
     "fr": "Concevoir le parcours."
    },
    "p": [
     {
      "es": "La experiencia se organizó alrededor de las acciones principales del usuario: descubrir concursos, consultar sus condiciones, participar y gestionar sus oportunidades.",
      "en": "The experience was organised around the user's main actions: discovering contests, checking their conditions, taking part and managing their chances.",
      "fr": "L'expérience s'organisait autour des actions principales de l'utilisateur : découvrir des concours, consulter leurs conditions, participer et gérer ses chances."
     },
     {
      "es": "La arquitectura, los flujos y las interfaces debían trabajar juntos para construir una experiencia clara, reconocible y consistente.",
      "en": "Architecture, flows and interfaces had to work together to build an experience that was clear, recognisable and consistent.",
      "fr": "L'architecture, les parcours et les interfaces devaient fonctionner ensemble pour construire une expérience claire, reconnaissable et cohérente."
     }
    ],
    "areas": {
     "es": "Arquitectura de información · User flows · Wireframes · UX/UI · Identidad visual · iOS y Android",
     "en": "Information architecture · User flows · Wireframes · UX/UI · Visual identity · iOS and Android",
     "fr": "Architecture de l'information · User flows · Wireframes · UX/UI · Identité visuelle · iOS et Android"
    }
   },
   {
    "l": {
     "es": "Identidad visual",
     "en": "Visual identity",
     "fr": "Identité visuelle"
    },
    "t": {
     "es": "De la identidad al producto.",
     "en": "From identity to product.",
     "fr": "De l'identité au produit."
    },
    "p": [
     {
      "es": "Appy también necesitaba personalidad.",
      "en": "Appy needed personality too.",
      "fr": "Appy avait aussi besoin de personnalité."
     },
     {
      "es": "La identidad visual, los componentes de interfaz y los elementos gráficos formaron parte de un mismo lenguaje para conectar el universo del creador con la experiencia de la aplicación.",
      "en": "The visual identity, interface components and graphic elements formed one language, connecting the creator's universe with the app experience.",
      "fr": "L'identité visuelle, les composants d'interface et les éléments graphiques formaient un même langage pour relier l'univers du créateur à l'expérience de l'application."
     }
    ]
   }
  ],
  "meta": [
   {
    "l": {
     "es": "Mi contribución",
     "en": "My contribution",
     "fr": "Ma contribution"
    },
    "v": {
     "es": "Diseño integral de producto · UX/UI · Identidad visual · iOS y Android",
     "en": "End-to-end product design · UX/UI · Visual identity · iOS and Android",
     "fr": "Conception complète du produit · UX/UI · Identité visuelle · iOS et Android"
    }
   },
   {
    "l": {
     "es": "Colaboración",
     "en": "Collaboration",
     "fr": "Collaboration"
    },
    "v": {
     "es": "Jojol",
     "en": "Jojol",
     "fr": "Jojol"
    }
   },
   {
    "l": {
     "es": "Contexto",
     "en": "Context",
     "fr": "Pour situer"
    },
    "v": {
     "es": "Canal de Jojol: unos 2,7 M de suscriptores en YouTube (vidIQ, septiembre de 2025). Es un dato de la comunidad del creador, no de descargas ni de usuarios de Appy.",
     "en": "Jojol's channel: around 2.7M YouTube subscribers (vidIQ, September 2025). This is a figure about the creator's community, not about Appy downloads or users.",
     "fr": "Chaîne de Jojol : environ 2,7 M d'abonnés YouTube (vidIQ, septembre 2025). C'est un chiffre sur la communauté du créateur, pas sur les téléchargements ou utilisateurs d'Appy."
    }
   }
  ],
  "links": [
   {
    "href": "https://www.youtube.com/@jojol",
    "l": {
     "es": "Ver canal de Jojol",
     "en": "Jojol's channel",
     "fr": "Voir la chaîne de Jojol"
    }
   },
   {
    "href": "https://gensdinternet.fr/2019/10/28/le-youtubeur-jojol-a-cree-lapplication-appy-qui-propose-un-concours-par-jour/",
    "l": {
     "es": "Conocer la colaboración",
     "en": "About the collaboration",
     "fr": "Découvrir la collaboration"
    }
   },
   {
    "href": "https://vidiq.com/youtube-stats/channel/UCJy0lX8ThZ7lCtst7JnegWQ",
    "l": {
     "es": "Fuente del dato (vidIQ)",
     "en": "Source of the figure (vidIQ)",
     "fr": "Source du chiffre (vidIQ)"
    }
   }
  ],
  "kit": {
   "l": {
    "es": "UI Kit",
    "en": "UI Kit",
    "fr": "UI Kit"
   },
   "note": {
    "es": "Recreación editorial del producto a partir de materiales de diseño.",
    "en": "Editorial recreation of the product based on design materials.",
    "fr": "Recréation éditoriale du produit à partir de supports de design."
   },
   "img": {
    "key": "mobile-experiences-kit",
    "v": "appy",
    "r": "1448/1086",
    "alt": {
     "es": "UI Kit de Appy: logotipo, colores con códigos HEX, tipografía Montserrat, botones, tarjetas de concurso, cartera de tickets, acciones de participación, navegación y tres pantallas móviles",
     "en": "Appy UI Kit: logo, HEX colours, Montserrat typeface, buttons, contest cards, ticket wallet, participation actions, navigation and three mobile screens",
     "fr": "UI Kit d'Appy : logotype, couleurs avec codes HEX, typographie Montserrat, boutons, cartes de concours, portefeuille de tickets, actions de participation, navigation et trois écrans mobiles"
    }
   }
  }
 },
 {
  "type": "chapter",
  "id": "mood",
  "layout": "wide",
  "eb": {
   "es": "03 / Evolve",
   "en": "03 / Evolve",
   "fr": "03 / Evolve"
  },
  "h": {
   "es": "Mood Messenger",
   "en": "Mood Messenger",
   "fr": "Mood Messenger"
  },
  "t": {
   "es": "Los mensajes de siempre. Otra experiencia.",
   "en": "The same messages. A different experience.",
   "fr": "Les mêmes messages. Une autre expérience."
  },
  "sub": {
   "es": "Evolucionar un producto sin perder su esencia.",
   "en": "Evolving a product without losing its essence.",
   "fr": "Faire évoluer un produit sans perdre son essence."
  },
  "blocks": [
   {
    "l": {
     "es": "Contexto",
     "en": "Context",
     "fr": "Contexte"
    },
    "p": [
     {
      "es": "Mood Messenger ofrecía una alternativa a la mensajería SMS y MMS tradicional de Android, incorporando personalización y una experiencia visual diferente.",
      "en": "Mood Messenger offered an alternative to Android's traditional SMS and MMS messaging, adding personalisation and a different visual experience.",
      "fr": "Mood Messenger proposait une alternative à la messagerie SMS et MMS classique d'Android, avec de la personnalisation et une expérience visuelle différente."
     },
     {
      "es": "A diferencia de Apolo y Appy, aquí no partíamos de cero.",
      "en": "Unlike Apolo and Appy, this was not a blank page.",
      "fr": "Contrairement à Apolo et Appy, on ne partait pas de zéro."
     },
     {
      "es": "El producto ya existía, tenía una identidad reconocible y una comunidad de usuarios.",
      "en": "The product already existed, with a recognisable identity and a community of users.",
      "fr": "Le produit existait déjà, avec une identité reconnaissable et une communauté d'utilisateurs."
     },
     {
      "es": "Mi participación se centró en la evolución de la experiencia, el diseño de nuevas interfaces y la colaboración en la estrategia y el relanzamiento de la aplicación.",
      "en": "My involvement focused on evolving the experience, designing new interfaces and collaborating on the app's strategy and relaunch.",
      "fr": "Ma participation s'est concentrée sur l'évolution de l'expérience, la conception de nouvelles interfaces et la collaboration à la stratégie et à la relance de l'application."
     }
    ]
   },
   {
    "l": {
     "es": "El reto",
     "en": "The challenge",
     "fr": "Le défi"
    },
    "t": {
     "es": "Cambiar sin empezar de cero.",
     "en": "Changing without starting over.",
     "fr": "Changer sans repartir de zéro."
    },
    "p": [
     {
      "es": "Diseñar sobre un producto existente implica trabajar con decisiones anteriores, comportamientos conocidos y expectativas que ya forman parte de la experiencia.",
      "en": "Designing on top of an existing product means working with earlier decisions, familiar behaviours and expectations that are already part of the experience.",
      "fr": "Concevoir à partir d'un produit existant, c'est composer avec des décisions passées, des comportements connus et des attentes déjà ancrées dans l'expérience."
     },
     {
      "es": "El desafío era explorar nuevas posibilidades visuales y funcionales respetando la identidad del producto y la familiaridad de sus usuarios.",
      "en": "The challenge was to explore new visual and functional possibilities while respecting the product's identity and its users' familiarity.",
      "fr": "Le défi : explorer de nouvelles pistes visuelles et fonctionnelles en respectant l'identité du produit et les repères de ses utilisateurs."
     }
    ]
   },
   {
    "l": {
     "es": "El diseño",
     "en": "The design",
     "fr": "Le design"
    },
    "t": {
     "es": "Diseñar la evolución.",
     "en": "Designing the evolution.",
     "fr": "Concevoir l'évolution."
    },
    "p": [
     {
      "es": "Mi trabajo incluyó la exploración de interfaces, propuestas de experiencia y colaboración en las decisiones relacionadas con la evolución del producto.",
      "en": "My work included exploring interfaces, proposing experience ideas and collaborating on decisions about the product's evolution.",
      "fr": "Mon travail a inclus l'exploration d'interfaces, des propositions d'expérience et la collaboration aux décisions liées à l'évolution du produit."
     },
     {
      "es": "El objetivo era encontrar un equilibrio entre continuidad y renovación, aportando nuevas soluciones sin perder lo que hacía reconocible a Mood Messenger.",
      "en": "The goal was to find a balance between continuity and renewal, bringing new solutions without losing what made Mood Messenger recognisable.",
      "fr": "L'objectif : trouver l'équilibre entre continuité et renouveau, en apportant de nouvelles solutions sans perdre ce qui rendait Mood Messenger reconnaissable."
     }
    ],
    "areas": {
     "es": "Evolución de producto · Diseño UI · UX · Exploración visual · Estrategia de producto",
     "en": "Product evolution · UI design · UX · Visual exploration · Product strategy",
     "fr": "Évolution produit · Design UI · UX · Exploration visuelle · Stratégie produit"
    }
   },
   {
    "l": {
     "es": "Resultado",
     "en": "Result",
     "fr": "Résultat"
    },
    "t": {
     "es": "Una nueva etapa.",
     "en": "A new chapter.",
     "fr": "Une nouvelle étape."
    },
    "p": [
     {
      "es": "Evolucionar un producto no siempre significa reinventarlo.",
      "en": "Evolving a product doesn't always mean reinventing it.",
      "fr": "Faire évoluer un produit ne veut pas toujours dire le réinventer."
     },
     {
      "es": "A veces consiste en identificar qué debe mantenerse, qué puede mejorar y cómo integrar nuevas propuestas dentro de una experiencia que ya existe.",
      "en": "Sometimes it means identifying what should stay, what can improve and how to fit new ideas into an experience that already exists.",
      "fr": "Parfois, il s'agit d'identifier ce qui doit rester, ce qui peut s'améliorer et comment intégrer de nouvelles idées dans une expérience qui existe déjà."
     }
    ]
   }
  ],
  "meta": [
   {
    "l": {
     "es": "Mi contribución",
     "en": "My contribution",
     "fr": "Ma contribution"
    },
    "v": {
     "es": "Evolución de producto · Diseño de interfaces · Estrategia · Relanzamiento",
     "en": "Product evolution · Interface design · Strategy · Relaunch",
     "fr": "Évolution du produit · Design d'interfaces · Stratégie · Relance"
    }
   }
  ],
  "metric": {
   "n": {
    "es": "+10 millones",
    "en": "10M+",
    "fr": "+10 millions"
   },
   "l": {
    "es": "de descargas en Google Play",
    "en": "downloads on Google Play",
    "fr": "de téléchargements sur Google Play"
   },
   "note": {
    "es": "Cifra del listado público actual de Google Play (consultado en noviembre de 2026). Refleja la trayectoria global del producto, no un resultado atribuible a mi participación.",
    "en": "Figure from the current public Google Play listing (checked in November 2026). It reflects the product's overall history, not a result attributable to my involvement.",
    "fr": "Chiffre de la fiche publique actuelle de Google Play (consultée en novembre 2026). Il reflète l'histoire globale du produit, pas un résultat attribuable à ma participation."
   }
  },
  "links": [
   {
    "href": "https://play.google.com/store/apps/details?id=com.calea.echo",
    "l": {
     "es": "Ver en Google Play",
     "en": "View on Google Play",
     "fr": "Voir sur Google Play"
    }
   },
   {
    "href": "https://www.businesswire.com/news/home/20220307005457/en",
    "l": {
     "es": "Adquisición por Calldorado (2022)",
     "en": "Acquisition by Calldorado (2022)",
     "fr": "Rachat par Calldorado (2022)"
    }
   }
  ],
  "kit": {
   "l": {
    "es": "Exploración visual",
    "en": "Visual Exploration",
    "fr": "Exploration visuelle"
   },
   "note": {
    "es": "Exploración visual retrospectiva. Recreación editorial a partir de materiales de diseño; no son capturas del producto original.",
    "en": "Retrospective visual exploration. Editorial recreation based on design materials; these are not screenshots of the original product.",
    "fr": "Exploration visuelle rétrospective. Recréation éditoriale à partir de supports de design ; ce ne sont pas des captures du produit d'origine."
   },
   "img": {
    "key": "mobile-experiences-kit",
    "v": "mood",
    "r": "1448/1086",
    "alt": {
     "es": "Exploración visual de Mood Messenger: logotipo, paleta de color, tipografía Poppins, componentes de chat, iconografía, stickers y tres pantallas móviles",
     "en": "Mood Messenger visual exploration: logo, colour palette, Poppins typeface, chat components, icon set, stickers and three mobile screens",
     "fr": "Exploration visuelle de Mood Messenger : logotype, palette de couleurs, typographie Poppins, composants de chat, icônes, stickers et trois écrans mobiles"
    }
   }
  }
 },
 {
  "type": "text",
  "id": "cierre",
  "h": {
   "es": "Reflexión final",
   "en": "Final thoughts",
   "fr": "Réflexion finale"
  },
  "t": {
   "es": "Tres proyectos. Una forma de trabajar.",
   "en": "Three projects. One way of working.",
   "fr": "Trois projets. Une façon de travailler."
  },
  "p": [
   {
    "es": "Apolo fue construir. Appy, conectar. Mood, evolucionar.",
    "en": "Apolo was about building. Appy, connecting. Mood, evolving.",
    "fr": "Apolo, c'était construire. Appy, relier. Mood, faire évoluer."
   },
   {
    "es": "Tres contextos diferentes que me permitieron trabajar desde la definición de un producto hasta el diseño de sus interfaces y su evolución.",
    "en": "Three different contexts that let me work from defining a product to designing its interfaces and its evolution.",
    "fr": "Trois contextes différents qui m'ont permis d'intervenir de la définition d'un produit jusqu'à la conception de ses interfaces et à son évolution."
   },
   {
    "es": "Porque diseñar productos digitales no consiste solo en decidir cómo se ven.",
    "en": "Because designing digital products isn't only about deciding how they look.",
    "fr": "Parce que concevoir des produits numériques ne se résume pas à décider de leur apparence."
   },
   {
    "es": "También consiste en entender cómo funcionan, cómo se utilizan y qué merece cambiar.",
    "en": "It's also about understanding how they work, how they're used and what deserves to change.",
    "fr": "C'est aussi comprendre comment ils fonctionnent, comment on les utilise et ce qui mérite de changer."
   }
  ]
 }
];
HERO["mobile-experiences"] = {
 "tag": {
  "es": "Create. Connect. Evolve.",
  "en": "Create. Connect. Evolve.",
  "fr": "Create. Connect. Evolve."
 },
 "eb": {
  "es": "Trabajo seleccionado / Mobile Experiences",
  "en": "Selected work / Mobile Experiences",
  "fr": "Sélection / Mobile Experiences"
 },
 "h1": {
  "es": "Tres apps. Tres formas de pensar producto.",
  "en": "Three apps. Three ways of thinking about product.",
  "fr": "Trois applis. Trois façons de penser produit."
 },
 "lead": {
  "es": "Diseñar un launcher Android desde cero. Convertir una comunidad digital en una aplicación. Evolucionar un producto de mensajería con millones de descargas.",
  "en": "Designing an Android launcher from scratch. Turning a digital community into an app. Evolving a messaging product with millions of downloads.",
  "fr": "Concevoir un launcher Android de zéro. Transformer une communauté en ligne en application. Faire évoluer un produit de messagerie qui compte des millions de téléchargements."
 },
 "lead2": {
  "es": "Tres proyectos, diferentes retos y una misma idea: diseñar tecnología que tenga sentido para quienes la utilizan.",
  "en": "Three projects, different challenges and one idea: designing technology that makes sense to the people who use it.",
  "fr": "Trois projets, des défis différents et une même idée : concevoir une technologie qui a du sens pour celles et ceux qui l'utilisent."
 },
 "facts": [
  {
   "l": {
    "es": "Rol",
    "en": "Role",
    "fr": "Rôle"
   },
   "v": {
    "es": "Product Designer · UX/UI",
    "en": "Product Designer · UX/UI",
    "fr": "Product Designer · UX/UI"
   }
  },
  {
   "l": {
    "es": "Plataformas",
    "en": "Platforms",
    "fr": "Plateformes"
   },
   "v": {
    "es": "Android · iOS",
    "en": "Android · iOS",
    "fr": "Android · iOS"
   }
  },
  {
   "l": {
    "es": "Disciplinas",
    "en": "Disciplines",
    "fr": "Disciplines"
   },
   "v": {
    "es": "Product Design · UX/UI · Visual Design",
    "en": "Product Design · UX/UI · Visual Design",
    "fr": "Product Design · UX/UI · Visual Design"
   }
  },
  {
   "l": {
    "es": "Periodo",
    "en": "Period",
    "fr": "Période"
   },
   "v": {
    "es": "Proyectos anteriores",
    "en": "Earlier projects",
    "fr": "Projets précédents"
   }
  }
 ],
 "cta": {
  "h": {
   "es": "¿Tienes un producto en mente?",
   "en": "Have a product in mind?",
   "fr": "Un produit en tête ?"
  },
  "p": {
   "es": "Desde una primera idea hasta la evolución de una aplicación existente.",
   "en": "From a first idea to the evolution of an existing app.",
   "fr": "D'une première idée à l'évolution d'une application existante."
  },
  "b": {
   "es": "Hablemos",
   "en": "Let's talk",
   "fr": "Parlons-en"
  }
 },
 "alt": {
  "es": "Composición de las tres aplicaciones móviles: Apolo Launcher, Appy y Mood Messenger",
  "en": "Composition of the three mobile apps: Apolo Launcher, Appy and Mood Messenger",
  "fr": "Composition des trois applications mobiles : Apolo Launcher, Appy et Mood Messenger"
 }
};
SEO.es.proj["mobile-experiences"] = {"t": "Diseño de apps móviles y Product Design | Tom Fabre", "d": "Tres proyectos de diseño de aplicaciones móviles: Apolo Launcher, Appy y Mood Messenger. UX/UI, diseño visual y estrategia de producto para Android e iOS.", "og": {"src": "mobile-experiences-og", "alt": "Tres apps móviles diseñadas por Tom Fabre: Mood Messenger, Appy y Apolo Launcher"}};
SEO.en.proj["mobile-experiences"] = {"t": "Mobile App Design & Product Design | Tom Fabre", "d": "Three mobile app design projects: Apolo Launcher, Appy and Mood Messenger. UX/UI, visual design and product strategy for Android and iOS.", "og": {"src": "mobile-experiences-og", "alt": "Three mobile apps designed by Tom Fabre: Mood Messenger, Appy and Apolo Launcher"}};
SEO.fr.proj["mobile-experiences"] = {"t": "Design d'applications mobiles et Product Design | Tom Fabre", "d": "Trois projets de design d'applications mobiles : Apolo Launcher, Appy et Mood Messenger. UX/UI, design visuel et stratégie produit pour Android et iOS.", "og": {"src": "mobile-experiences-og", "alt": "Trois applis mobiles conçues par Tom Fabre : Mood Messenger, Appy et Apolo Launcher"}};

/* Carceral Ecologies: case page prepared, NOT published (PROJ.carceral.locked in c1p.js). Add the images (flow items) and remove `locked` to go live. */
SECTIONS["carceral-ecologies"] = [
 {
  "type": "text",
  "id": "caso",
  "h": {
   "es": "Carceral Ecologies",
   "en": "Carceral Ecologies",
   "fr": "Carceral Ecologies"
  },
  "t": {
   "es": "Mucha investigación. Una web que necesitaba orden.",
   "en": "Years of research. A website in need of structure.",
   "fr": "Beaucoup de recherches. Un site qui avait besoin d'ordre."
  },
  "p": [
   {
    "es": "¿Qué ocurre cuando un proyecto de investigación crece, pero su web no consigue acompañarlo?",
    "en": "What happens when a research project grows, but its website struggles to keep up?",
    "fr": "Que se passe-t-il quand un projet de recherche grandit, mais que son site n'arrive plus à suivre ?"
   },
   {
    "es": "Carceral Ecologies reúne estudios sobre vigilancia policial, muertes bajo custodia, condiciones ambientales en centros de detención y alternativas comunitarias de seguridad.",
    "en": "Carceral Ecologies brings together work on police surveillance, deaths in custody, environmental conditions in detention facilities, and community-led approaches to safety.",
    "fr": "Carceral Ecologies réunit des travaux sur la surveillance policière, les décès en détention, les conditions environnementales dans les centres de détention et les alternatives communautaires en matière de sécurité."
   },
   {
    "es": "Su trabajo combina publicaciones académicas, mapas, bases de datos, entrevistas y materiales audiovisuales.",
    "en": "Its research includes academic papers, maps, datasets, interviews, and audiovisual material.",
    "fr": "Ses travaux mêlent publications scientifiques, cartes, jeux de données, entretiens et ressources audiovisuelles."
   },
   {
    "es": "El problema era que toda esa información estaba repartida entre páginas, apartados y enlaces que no siempre resultaban fáciles de recorrer.",
    "en": "The problem was that all this information was scattered across pages, sections, and links that weren't always easy to navigate.",
    "fr": "Le problème : ces informations étaient réparties entre de nombreuses pages, rubriques et liens qui n'étaient pas toujours faciles à parcourir."
   },
   {
    "es": "Había que encontrar una manera de organizarlo todo sin perder las relaciones entre los distintos proyectos.",
    "en": "We needed to find a way to organise it without losing the connections between different research projects.",
    "fr": "Il fallait trouver comment les organiser sans perdre les liens entre les différents projets."
   }
  ]
 },
 {
  "type": "text",
  "id": "reto",
  "h": {
   "es": "01 · El reto",
   "en": "01 · The challenge",
   "fr": "01 · Le défi"
  },
  "t": {
   "es": "Que nada importante se quede escondido.",
   "en": "Making sure the important work doesn't get buried.",
   "fr": "Ne rien laisser d'important se perdre."
  },
  "p": [
   {
    "es": "La web original funcionaba con WordPress y había ido acumulando contenidos con el tiempo.",
    "en": "The original site ran on WordPress and had grown over time as more material was added.",
    "fr": "Le site d'origine était construit sur WordPress et avait accumulé du contenu au fil des années."
   },
   {
    "es": "Antes de plantear el rediseño, realizamos una auditoría técnica para entender qué estaba pasando.",
    "en": "Before considering the redesign, we carried out a technical audit to understand what was happening.",
    "fr": "Avant de proposer une refonte, nous avons réalisé un audit technique pour comprendre la situation."
   },
   {
    "es": "Encontramos una estructura con páginas duplicadas, contenidos difíciles de localizar y varios problemas de rendimiento y posicionamiento.",
    "en": "We found duplicate pages, hard-to-find content, and a range of performance and search visibility issues.",
    "fr": "Nous avons découvert des pages en double, des contenus difficiles à trouver et plusieurs problèmes de performance et de référencement."
   },
   {
    "es": "De las 77 entradas de contenido inventariadas, solo 44 eran accesibles a través de enlaces internos.",
    "en": "Of the 77 content entries we inventoried, only 44 were reachable through internal links.",
    "fr": "Sur 77 entrées de contenu recensées, seules 44 étaient accessibles par des liens internes."
   },
   {
    "es": "Pero el reto no era únicamente técnico.",
    "en": "But it wasn't just a technical challenge.",
    "fr": "Mais le défi n'était pas seulement technique."
   },
   {
    "es": "Una misma investigación podía incluir publicaciones, conjuntos de datos, entrevistas y noticias relacionadas. Toda esa información debía ser fácil de encontrar, tanto para alguien que conoce el tema como para quien llega por primera vez.",
    "en": "A single research project could include publications, datasets, interviews, and related news coverage. That information needed to be accessible both to people familiar with the subject and those discovering it for the first time.",
    "fr": "Une même recherche pouvait réunir publications, jeux de données, entretiens et articles de presse. Tout devait être facile à retrouver, aussi bien pour les spécialistes que pour les personnes découvrant le sujet."
   },
   {
    "es": "La pregunta era sencilla: ¿cómo organizar un archivo complejo sin convertirlo en un laberinto?",
    "en": "The question was simple: how do you organise a complex archive without turning it into a maze?",
    "fr": "La question était simple : comment organiser une archive complexe sans en faire un labyrinthe ?"
   }
  ]
 },
 {
  "type": "text",
  "id": "estructura",
  "h": {
   "es": "02 · La estructura",
   "en": "02 · The structure",
   "fr": "02 · La structure"
  },
  "t": {
   "es": "Distintos proyectos. Un mismo lugar para explorarlos.",
   "en": "Different projects. One place to explore them.",
   "fr": "Plusieurs projets. Un même espace pour les explorer."
  },
  "p": [
   {
    "es": "Empezamos por replantear cómo se relacionaban los contenidos.",
    "en": "We started by rethinking how the content connected.",
    "fr": "Nous avons commencé par repenser les liens entre les contenus."
   },
   {
    "es": "La propuesta organiza la web alrededor de cuatro líneas de investigación, un archivo común y las personas que forman parte del colectivo.",
    "en": "The proposed site is organised around four research areas, a shared archive, and the people behind the collective.",
    "fr": "La proposition organise le site autour de quatre axes de recherche, d'une archive commune et des personnes qui composent le collectif."
   },
   {
    "es": "Cada proyecto tendría su propio espacio, pero sus publicaciones, datos, entrevistas y noticias también podrían encontrarse desde el archivo general.",
    "en": "Each project would have its own space, while its publications, data, interviews, and news could also be found through the main archive.",
    "fr": "Chaque projet dispose de son propre espace, mais ses publications, données, entretiens et actualités peuvent aussi être retrouvés depuis l'archive générale."
   },
   {
    "es": "Así, una persona podría llegar a una investigación, descubrir sus materiales y continuar explorando otros trabajos relacionados.",
    "en": "Someone could start with one study, explore its resources, and discover related work along the way.",
    "fr": "On peut ainsi découvrir une recherche, consulter ses ressources et poursuivre vers d'autres travaux liés."
   },
   {
    "es": "Para hacerlo posible, planteamos una estructura de contenidos conectados, con categorías y filtros que facilitaran la navegación.",
    "en": "To make that possible, we proposed a connected content structure, with categories and filters to make navigation easier.",
    "fr": "Pour cela, nous avons imaginé une structure de contenus connectés, avec des catégories et des filtres pour faciliter la navigation."
   },
   {
    "es": "También trabajamos en plantillas compartidas para que nuevos estudios y recursos pudieran incorporarse sin tener que diseñar una página diferente cada vez.",
    "en": "We also worked on reusable templates so new studies and resources could be added without designing a new page every time.",
    "fr": "Nous avons également travaillé sur des modèles de pages réutilisables afin d'ajouter de nouvelles recherches sans devoir tout redessiner à chaque fois."
   },
   {
    "es": "Una estructura preparada para crecer con la investigación.",
    "en": "A structure designed to grow with the research.",
    "fr": "Une structure conçue pour évoluer avec la recherche."
   }
  ]
 },
 {
  "type": "text",
  "id": "identidad",
  "h": {
   "es": "03 · La identidad y el diseño",
   "en": "03 · Identity and design",
   "fr": "03 · L'identité et le design"
  },
  "t": {
   "es": "Una identidad que nace de su propia investigación.",
   "en": "A visual identity shaped by the research itself.",
   "fr": "Une identité qui puise dans la recherche elle-même."
  },
  "p": [
   {
    "es": "Carceral Ecologies ya tenía un símbolo con mucho significado: una estructura de barrotes atravesada por elementos vegetales.",
    "en": "Carceral Ecologies already had a meaningful symbol: prison bars intertwined with plant forms.",
    "fr": "Carceral Ecologies possédait déjà un symbole fort : des barreaux traversés par des éléments végétaux."
   },
   {
    "es": "La propuesta de diseño partió de esa idea.",
    "en": "That idea became the starting point for the design exploration.",
    "fr": "La proposition de design est partie de cette idée."
   },
   {
    "es": "En lugar de utilizar recursos gráficos decorativos, exploramos un lenguaje visual relacionado con los propios materiales del colectivo: documentos, registros, mapas, fotografías y datos.",
    "en": "Rather than adding decorative graphics, we explored a visual language rooted in the collective's own material: documents, records, maps, photographs, and data.",
    "fr": "Plutôt que de recourir à des éléments graphiques purement décoratifs, nous avons exploré un langage visuel inspiré des propres matériaux du collectif : documents, archives, cartes, photographies et données."
   },
   {
    "es": "Líneas, puntos, retículas y variaciones de densidad se convirtieron en parte de esa exploración.",
    "en": "Lines, dots, grids, and changes in density all became part of that exploration.",
    "fr": "Lignes, points, grilles et variations de densité sont devenus des éléments de cette exploration."
   },
   {
    "es": "También trabajamos en una evolución del símbolo, buscando una forma más sencilla y adaptable a distintos tamaños y formatos.",
    "en": "We also explored an evolution of the symbol, looking for a simpler form that could work across different sizes and formats.",
    "fr": "Nous avons également travaillé sur une évolution du symbole, vers une forme plus simple et adaptable à différentes tailles et différents usages."
   },
   {
    "es": "La intención era construir un sistema visual capaz de acompañar contenidos muy diferentes, desde un artículo académico hasta una base de datos o una entrevista.",
    "en": "The goal was a flexible visual system that could support very different types of content, from academic papers to datasets and interviews.",
    "fr": "L'objectif était de construire un système visuel capable d'accompagner des contenus très différents, d'un article scientifique à un jeu de données ou à un entretien."
   },
   {
    "es": "Un diseño con personalidad, pero suficientemente flexible para dejar que cada investigación ocupe su lugar.",
    "en": "A design with its own personality, but enough restraint to let each piece of research speak for itself.",
    "fr": "Un design avec du caractère, mais assez souple pour laisser chaque recherche prendre sa place."
   }
  ]
 },
 {
  "type": "text",
  "id": "experiencia",
  "h": {
   "es": "04 · La experiencia digital",
   "en": "04 · The digital experience",
   "fr": "04 · L'expérience digitale"
  },
  "t": {
   "es": "Una manera más sencilla de recorrer la investigación.",
   "en": "A simpler way to explore the research.",
   "fr": "Une manière plus simple de parcourir la recherche."
  },
  "p": [
   {
    "es": "Uno de los principales objetivos era que las personas pudieran explorar el contenido sin perderse entre páginas.",
    "en": "One of our main goals was to help people explore the material without getting lost between pages.",
    "fr": "L'un des principaux objectifs était de permettre aux visiteurs d'explorer les contenus sans se perdre de page en page."
   },
   {
    "es": "Los wireframes plantean una navegación que conecta proyectos, investigadores y recursos.",
    "en": "The wireframes propose navigation that connects projects, researchers, and resources.",
    "fr": "Les wireframes proposent une navigation reliant projets, chercheurs et ressources."
   },
   {
    "es": "El archivo funciona como un punto de encuentro: permite filtrar contenidos y descubrir las relaciones entre distintos materiales.",
    "en": "The archive becomes a central point of access, where visitors can filter material and discover links between different sources.",
    "fr": "L'archive devient un point de rencontre : elle permet de filtrer les contenus et de découvrir leurs liens."
   },
   {
    "es": "También propusimos que publicaciones, entrevistas y bases de datos pudieran consultarse desde una estructura común, con información adaptada a cada formato.",
    "en": "We also proposed a shared structure for publications, interviews, and datasets, with details tailored to each format.",
    "fr": "Nous avons également proposé une structure commune pour consulter publications, entretiens et jeux de données, avec des informations adaptées à chaque format."
   },
   {
    "es": "Por ejemplo, una publicación mostraría sus referencias y el enlace al artículo original. Una entrevista podría incluir audio y transcripción. Y una base de datos tendría una explicación previa antes de acceder a los archivos alojados en UCLA Dataverse.",
    "en": "For example, a publication would show its citation and a link to the original paper. An interview could include audio and a transcript. A dataset would have an introduction before linking to the files hosted on UCLA Dataverse.",
    "fr": "Par exemple, une publication présenterait ses références et le lien vers l'article original. Un entretien pourrait inclure un lecteur audio et une transcription. Un jeu de données serait accompagné d'une présentation avant de renvoyer vers les fichiers hébergés sur UCLA Dataverse."
   },
   {
    "es": "La accesibilidad también forma parte de las decisiones de diseño, con WCAG 2.1 AA como objetivo para la experiencia en ordenador, móvil y tablet.",
    "en": "Accessibility is also part of the design decisions, with WCAG 2.1 AA as the target for desktop, mobile, and tablet experiences.",
    "fr": "L'accessibilité fait aussi partie des décisions de conception, avec les WCAG 2.1 AA comme objectif sur ordinateur, mobile et tablette."
   },
   {
    "es": "El principio era que cada persona pudiera llegar al contenido que buscaba sin tener que entender primero cómo estaba organizada toda la web.",
    "en": "The guiding idea was that people should be able to find what they need without first having to understand the entire website's structure.",
    "fr": "L'idée : permettre à chacun d'accéder au contenu recherché sans devoir d'abord comprendre toute l'organisation du site."
   }
  ]
 },
 {
  "type": "text",
  "id": "desarrollo",
  "h": {
   "es": "05 · El desarrollo y mi trabajo",
   "en": "05 · Development and my role",
   "fr": "05 · Le développement et mon rôle"
  },
  "t": {
   "es": "Del archivo existente a una nueva estructura digital.",
   "en": "From an existing archive to a new digital structure.",
   "fr": "De l'archive existante à une nouvelle structure digitale."
  },
  "p": [
   {
    "es": "Mi participación comenzó con la auditoría técnica de la web y el análisis de su estructura en WordPress.",
    "en": "My involvement began with the technical audit of the website and an analysis of its WordPress structure.",
    "fr": "J'ai commencé par un audit technique du site et l'analyse de son architecture WordPress."
   },
   {
    "es": "Revisé aspectos como rendimiento, enlaces, organización de páginas, SEO y contenidos duplicados para identificar los problemas que debíamos tener en cuenta durante la migración.",
    "en": "I reviewed performance, links, page organisation, SEO, and duplicate content to identify what needed to be addressed during migration.",
    "fr": "J'ai passé en revue les performances, les liens, la structure des pages, le SEO et les contenus dupliqués pour identifier les problèmes à prendre en compte lors de la migration."
   },
   {
    "es": "A partir de ese diagnóstico, planteamos el paso a Webflow y una nueva organización de contenidos que facilitara su mantenimiento.",
    "en": "Based on that assessment, we proposed moving to Webflow and restructuring the content to make ongoing maintenance easier.",
    "fr": "À partir de ce diagnostic, nous avons proposé un passage à Webflow et une nouvelle organisation des contenus pour simplifier leur gestion."
   },
   {
    "es": "El trabajo se desarrolla en colaboración con el equipo de diseño y con las personas responsables de Carceral Ecologies, combinando las necesidades de investigación con las decisiones técnicas y de experiencia de usuario.",
    "en": "The project is being developed in collaboration with the design team and the people behind Carceral Ecologies, balancing research needs with technical and user experience decisions.",
    "fr": "Le projet se construit avec l'équipe design et les responsables de Carceral Ecologies, en faisant dialoguer les besoins de la recherche, les contraintes techniques et l'expérience utilisateur."
   },
   {
    "es": "El diseño UX/UI y la web completa son un trabajo compartido con {daniela}.",
    "en": "The UX/UI design and the full website are shared work with {daniela}.",
    "fr": "Le design UX/UI et l'ensemble du site sont un travail partagé avec {daniela}.",
    "links": {
     "daniela": {
      "href": "https://danielarivillas.com/",
      "t": {
       "es": "Daniela Rivillas",
       "en": "Daniela Rivillas",
       "fr": "Daniela Rivillas"
      }
     }
    }
   },
   {
    "es": "Conoce al colectivo en {carceral}. © Carceral Ecologies.",
    "en": "Learn more about the collective at {carceral}. © Carceral Ecologies.",
    "fr": "Pour en savoir plus sur le collectif : {carceral}. © Carceral Ecologies.",
    "links": {
     "carceral": {
      "href": "https://carceralecologies.org/",
      "t": {
       "es": "carceralecologies.org",
       "en": "carceralecologies.org",
       "fr": "carceralecologies.org"
      }
     }
    }
   },
   {
    "es": "El proyecto continúa en proceso, por lo que la nueva web y sus resultados finales todavía están pendientes.",
    "en": "The project is still in progress, so the new website and its final outcomes are yet to come.",
    "fr": "Le travail est toujours en cours : le nouveau site et ses résultats définitifs restent à venir."
   }
  ]
 },
 {
  "type": "text",
  "id": "cierre",
  "h": {
   "es": "Cierre",
   "en": "Closing",
   "fr": "Conclusion"
  },
  "t": {
   "es": "Hacer que el conocimiento sea más fácil de encontrar.",
   "en": "Making knowledge easier to find.",
   "fr": "Rendre le savoir plus facile à trouver."
  },
  "p": [
   {
    "es": "Carceral Ecologies trabaja con investigaciones que necesitan ser consultadas, compartidas y relacionadas entre sí.",
    "en": "Carceral Ecologies produces research that needs to be explored, shared, and connected.",
    "fr": "Carceral Ecologies produit des recherches qui doivent pouvoir être consultées, partagées et mises en relation."
   },
   {
    "es": "Nuestro trabajo consiste en darles un espacio digital donde puedan hacerlo de una manera más sencilla.",
    "en": "Our work is about giving that research a digital home where all of this becomes easier.",
    "fr": "Notre rôle consiste à leur donner un espace digital où tout cela devient plus simple."
   },
   {
    "es": "Porque una buena web no debería complicar el acceso a lo importante.",
    "en": "Because a good website shouldn't make important information harder to access.",
    "fr": "Parce qu'un bon site ne devrait pas compliquer l'accès à l'essentiel."
   },
   {
    "em": true,
    "es": "¿Tienes un proyecto con mucho contenido y necesitas darle orden? Hablemos.",
    "en": "Have a content-heavy project that needs a clearer structure? Let's talk.",
    "fr": "Tu as un projet riche en contenus qui a besoin d'être mieux organisé ? Parlons-en."
   }
  ]
 }
];
HERO["carceral-ecologies"] = {
 "tag": {
  "es": "Investigar es importante. Poder encontrarlo, también.",
  "en": "Research matters. Being able to find it matters, too.",
  "fr": "Faire de la recherche, c'est essentiel. Pouvoir la retrouver aussi."
 },
 "lead": {
  "es": "Carceral Ecologies es un colectivo de investigación vinculado a UCLA que estudia las consecuencias de los sistemas de encarcelamiento, la vigilancia y la injusticia ambiental. El reto era repensar su web para organizar años de investigaciones, publicaciones, testimonios y datos dentro de una experiencia más clara y fácil de explorar. Un proyecto donde el diseño tenía que ayudar a que el contenido llegara más lejos, sin quitarle protagonismo.",
  "en": "Carceral Ecologies is a research collective connected to UCLA that studies the impacts of incarceration, surveillance, and environmental injustice. The challenge was to rethink its website and organise years of research, publications, testimonies, and data into a clearer, more accessible experience. A project where design needed to help the work reach further, without taking attention away from the research itself.",
  "fr": "Carceral Ecologies est un collectif de recherche lié à UCLA qui étudie les conséquences de l'incarcération, de la surveillance et des injustices environnementales. Le défi consistait à repenser son site pour organiser des années de recherches, de publications, de témoignages et de données dans une expérience plus claire et plus facile à explorer. Un projet où le design devait aider les contenus à toucher davantage de monde, sans leur voler la vedette."
 },
 "alt": {
  "es": "Portada del proyecto Carceral Ecologies",
  "en": "Carceral Ecologies project cover",
  "fr": "Couverture du projet Carceral Ecologies"
 }
};
SEO.es.proj.carceral = {"t":"Carceral Ecologies: Diseño web y UX/UI | Tom Fabre","d":"Rediseño web para Carceral Ecologies, un colectivo de investigación vinculado a UCLA. Arquitectura de información, UX/UI y migración a Webflow."};
SEO.en.proj.carceral = {"t":"Carceral Ecologies: Web Design & UX/UI | Tom Fabre","d":"Website redesign for Carceral Ecologies, a UCLA-connected research collective. Information architecture, UX/UI, and migration to Webflow."};
SEO.fr.proj.carceral = {"t":"Carceral Ecologies : design web et UX/UI | Tom Fabre","d":"Refonte web pour Carceral Ecologies, un collectif de recherche lié à UCLA. Architecture de l'information, UX/UI et migration vers Webflow."};
