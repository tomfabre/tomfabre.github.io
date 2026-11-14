/* Case-study sections + per-project SEO overrides (optional per project; validated by validate_sections.py at build).
   SECTIONS[projectKey] = [section, ...]. Every visible string is {es, en, fr}.
   Types today: "text" {id,h,t?,p[],img?,flow?[{p[]}|{img}|{fig}]} and "metrics" {id,h,t?,p?[],items[{n,l}],after?[],flow?}.
   A paragraph is {es,en,fr} (+ em:true for a bold line). To add a type: validate_sections.py TYPES + SECTION_RENDER in c2.js.
   Projects without an entry keep the classic layout. */
const SECTIONS = {
  contazara: [
    { type:"text", id:"caso",
      h:{es:"Contazara", en:"Contazara", fr:"Contazara"},
      t:{es:"Cambiar de imagen. Sin perder quién eres.", en:"A new look. The same identity at heart.", fr:"Changer d'image. Sans perdre son identité."},
      p:[{
        es:"¿Cómo renuevas la identidad de una empresa después de 40 años sin perder lo que la hace única? Escuchando, compartiendo ideas y construyendo el cambio con las personas que forman parte de ella.",
        en:"How do you refresh a company's identity after 40 years without losing what makes it unique? By listening, sharing ideas, and building the change together with the people who are part of it.",
        fr:"Comment renouveler l'identité d'une entreprise après 40 ans sans perdre ce qui la rend unique ? En écoutant, en partageant des idées et en construisant le changement avec les personnes qui la font vivre."
      }] },

    { type:"text", id:"reto",
      h:{es:"01 · El reto", en:"01 · The challenge", fr:"01 · Le défi"},
      t:{es:"40 años de historia. Y mucho que conservar.", en:"40 years of history. A lot worth keeping.", fr:"40 ans d'histoire. Et beaucoup à préserver."},
      p:[{
        es:"Contazara llevaba décadas innovando en tecnología para la medición del agua. Su identidad, sin embargo, necesitaba acompañar esa evolución. Puedes ver el resultado en {web}.",
        en:"Contazara had been innovating in water-measurement technology for decades. Its identity, though, needed to keep pace with that evolution. You can see the result on {web}.",
        fr:"Depuis des décennies, Contazara innove dans les technologies de mesure de l'eau. Son identité, elle, devait accompagner cette évolution. Vous pouvez voir le résultat sur {web}.",
        links:{ web:{ href:"https://www.contazara.es/", t:{es:"la web de Contazara", en:"Contazara's website", fr:"le site web de Contazara"} } }
      },{
        es:"Cambiar una marca tan presente en la historia de una empresa no era una decisión sencilla. Había dudas, recuerdos y mucho que respetar.",
        en:"Changing a brand so present in a company's history wasn't a simple decision. There were doubts, memories, and a lot to respect.",
        fr:"Changer une marque aussi présente dans l'histoire d'une entreprise n'avait rien d'évident. Il y avait des doutes, des souvenirs et beaucoup à respecter."
      },{ em:true,
        es:"El reto no era empezar de cero. Era evolucionar sin dejar de ser Contazara.",
        en:"The challenge wasn't starting from scratch. It was evolving without ceasing to be Contazara.",
        fr:"Le défi n'était pas de repartir de zéro. C'était d'évoluer sans cesser d'être Contazara."
      }] },

    { type:"text", id:"proceso",
      h:{es:"02 · El proceso y la identidad", en:"02 · Process and identity", fr:"02 · La démarche et l'identité"},
      t:{es:"Antes de diseñar, había que escuchar.", en:"Before designing, we had to listen.", fr:"Avant de dessiner, il fallait écouter."},
      p:[{
        es:"Empezamos conversando con dirección y con los equipos. Queríamos entender qué debía cambiar, qué merecía quedarse y cómo hacer que todos se sintieran parte del proceso.",
        en:"We started by talking with management and the teams. We wanted to understand what had to change, what deserved to stay, and how to make everyone feel part of the process.",
        fr:"Nous avons commencé par échanger avec la direction et les équipes. Nous voulions comprendre ce qui devait changer, ce qui méritait de rester et comment faire en sorte que chacun se sente partie prenante."
      },{
        es:"De ahí nació una nueva identidad, construida alrededor de un símbolo que une la C y la Z mediante geometría, precisión y movimiento.",
        en:"A new identity came out of it, built around a symbol that joins the C and the Z through geometry, precision, and movement.",
        fr:"Une nouvelle identité en est née, construite autour d'un symbole qui unit le C et le Z par la géométrie, la précision et le mouvement."
      }],
      flow:[
        { fig:{ key:"contazara", v:"4", r:"16/7", alt:{
            es:"Construcción geométrica del isotipo de Contazara sobre su retícula, con la versión horizontal del logotipo y la paleta de color corporativa",
            en:"Geometric construction of the Contazara symbol on its grid, with the horizontal logo and the corporate colour palette",
            fr:"Construction géométrique du symbole Contazara sur sa grille, avec la version horizontale du logotype et la palette de couleurs" } } },
        { p:[{
            es:"Pero el resultado fue mucho más que un logo: un lenguaje visual con sus propias reglas, colores, tipografías y aplicaciones.",
            en:"But the result was much more than a logo: a visual language with its own rules, colours, typefaces, and applications.",
            fr:"Mais le résultat dépasse largement le logo : un langage visuel avec ses propres règles, couleurs, typographies et applications."
          },{ em:true,
            es:"Una identidad que no solo los representa. También la sienten suya.",
            en:"An identity that doesn't just represent them. They feel it's theirs.",
            fr:"Une identité qui ne fait pas que les représenter. Ils se la sont appropriée."
          }] }
      ] },

    { type:"text", id:"web",
      h:{es:"03 · Web y comunicación", en:"03 · Web and communication", fr:"03 · Web et communication"},
      t:{es:"Una marca que funciona dentro y fuera de la pantalla.", en:"A brand that works on and off the screen.", fr:"Une marque qui vit dans et hors de l'écran."},
      p:[{
        es:"Llevamos la nueva identidad a {web}, creando una experiencia más clara para explorar sus productos, comprender su tecnología y descubrir a las personas detrás de la empresa.",
        en:"We brought the new identity to {web}, creating a clearer experience for exploring its products, understanding its technology, and meeting the people behind the company.",
        fr:"Nous avons porté la nouvelle identité sur {web}, avec une expérience plus claire pour explorer ses produits, comprendre sa technologie et découvrir les personnes derrière l'entreprise.",
        links:{ web:{ href:"https://www.contazara.es/", t:{es:"la web de Contazara", en:"Contazara's website", fr:"le site web de Contazara"} } }
      }],
      flow:[
        { p:[{
            es:"También desarrollamos su tono de voz y una línea editorial para LinkedIn e Instagram, combinando innovación, sostenibilidad, datos, actualidad y personas.",
            en:"We also developed their tone of voice and an editorial line for LinkedIn and Instagram, combining innovation, sustainability, data, current affairs, and people.",
            fr:"Nous avons aussi développé leur ton de voix et une ligne éditoriale pour LinkedIn et Instagram, mêlant innovation, durabilité, données, actualité et humain."
          }] },
        { pair:[
          { key:"contazara", v:"3", alt:{es:"Diseño de la web de Contazara", en:"Contazara website design", fr:"Design du site web de Contazara"} },
          { key:"contazara", v:"2", alt:{es:"Publicaciones de Contazara en LinkedIn e Instagram", en:"Contazara posts on LinkedIn and Instagram", fr:"Publications de Contazara sur LinkedIn et Instagram"} }] },
        { p:[{ em:true,
            es:"Porque una marca no se construye solo con lo que muestra. También con lo que cuenta.",
            en:"Because a brand isn't built only with what it shows. Also with what it tells.",
            fr:"Car une marque ne se construit pas seulement avec ce qu'elle montre. Mais aussi avec ce qu'elle raconte."
          }] }
      ] },

    { type:"metrics", id:"resultados",
      h:{es:"04 · Resultados", en:"04 · Results", fr:"04 · Résultats"},
      t:{es:"El cambio se ve. Y también se siente.", en:"The change shows. And it's felt.", fr:"Le changement se voit. Et se ressent."},
      items:[
        { n:{es:"+77,2 %", en:"+77.2%", fr:"+77,2 %"}, l:{es:"seguidores en LinkedIn", en:"LinkedIn followers", fr:"abonnés sur LinkedIn"} },
        { n:{es:"+46 %",   en:"+46%",   fr:"+46 %"},   l:{es:"seguidores en Instagram", en:"Instagram followers", fr:"abonnés sur Instagram"} }
      ],
      after:[{
        es:"Entre septiembre de 2025 y noviembre de 2026, Contazara pasó de 930 a 1.648 seguidores en LinkedIn y de 250 a 365 en Instagram.",
        en:"Between September 2025 and November 2026, Contazara went from 930 to 1,648 followers on LinkedIn and from 250 to 365 on Instagram.",
        fr:"Entre septembre 2025 et novembre 2026, Contazara est passée de 930 à 1 648 abonnés sur LinkedIn et de 250 à 365 sur Instagram."
      },{
        es:"La nueva identidad se ha extendido a la comunicación, los materiales corporativos, la web y los espacios de la empresa. Un sistema que sigue creciendo y que sus equipos han hecho suyo.",
        en:"The new identity has spread across communications, corporate materials, the website, and the company's spaces. A system that keeps growing and that their teams have made their own.",
        fr:"La nouvelle identité s'est étendue à la communication, aux supports corporatifs, au site web et aux espaces de l'entreprise. Un système qui continue de grandir et que les équipes se sont approprié."
      }],
      flow:[
        { img:{ key:"contazara", v:"1", alt:{
            es:"Propuesta de stand de Contazara con la nueva identidad aplicada a paneles, mostrador y mobiliario",
            en:"Contazara trade-fair stand concept with the new identity applied to panels, counter and furniture",
            fr:"Proposition de stand Contazara avec la nouvelle identité appliquée aux panneaux, au comptoir et au mobilier" } } }
      ] },

    { type:"text", id:"papel",
      h:{es:"05 · Un trabajo en equipo", en:"05 · Teamwork", fr:"05 · Un travail d'équipe"},
      t:{es:"De la primera conversación al último detalle.", en:"From the first conversation to the last detail.", fr:"De la première conversation au dernier détail."},
      p:[{
        es:"Lideré la evolución de la identidad visual, la personalidad de marca y la comunicación digital de Contazara. Un trabajo que comenzó escuchando las inquietudes de su equipo directivo y que fue tomando forma en cada punto de contacto de la marca.",
        en:"I led the evolution of Contazara's visual identity, brand personality and digital communication. The work began by listening to the concerns of its management team and took shape at every touchpoint of the brand.",
        fr:"J'ai piloté l'évolution de l'identité visuelle, de la personnalité de marque et de la communication digitale de Contazara. Un travail qui a commencé par l'écoute des préoccupations de sa direction et qui a pris forme à chaque point de contact de la marque."
      },{
        es:"Para las entrevistas con los equipos y el diseño y desarrollo web conté con la colaboración de {binome}. En paralelo, {estudio360} se encargó de la arquitectura y construcción de las nuevas oficinas, donde también trabajamos juntos para integrar la nueva identidad en los espacios.",
        en:"For the team interviews and the web design and development I had the collaboration of {binome}. In parallel, {estudio360} took care of the architecture and construction of the new offices, where we also worked together to bring the new identity into the spaces.",
        fr:"Pour les entretiens avec les équipes et la conception et le développement web, j'ai pu compter sur la collaboration de {binome}. En parallèle, {estudio360} s'est chargé de l'architecture et de la construction des nouveaux bureaux, où nous avons aussi travaillé ensemble pour intégrer la nouvelle identité dans les espaces.",
        links:{
          binome:{ href:"https://binome.xyz/", t:{es:"Binōme Studio", en:"Binōme Studio", fr:"Binōme Studio"} },
          estudio360:{ href:"https://www.360estudio.io/", t:{es:"360estudio", en:"360estudio", fr:"360estudio"} } }
      },{ em:true,
        es:"Distintas disciplinas. Una misma visión.",
        en:"Different disciplines. One shared vision.",
        fr:"Des disciplines différentes. Une même vision."
      }] },

    { type:"text", id:"cierre",
      h:{es:"Cierre", en:"Closing", fr:"Conclusion"},
      t:{es:"Una nueva identidad. La misma esencia.", en:"A new identity. The same essence.", fr:"Une nouvelle identité. La même essence."},
      p:[{
        es:"No se trataba de cambiar quiénes eran, sino de encontrar una nueva manera de contarlo.",
        en:"It was never about changing who they were, but about finding a new way to tell it.",
        fr:"Il ne s'agissait pas de changer ce qu'ils étaient, mais de trouver une nouvelle façon de le raconter."
      },{ em:true,
        es:"¿Tu marca también está lista para su próxima etapa? Hablemos.",
        en:"Is your brand ready for its next chapter? Let's talk.",
        fr:"Votre marque est-elle prête pour sa prochaine étape ? Parlons-en."
      }] }
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
     "es": "Muchos protagonistas. Una misma experiencia.",
     "en": "Different people. One connected experience.",
     "fr": "Plusieurs acteurs. Une seule expérience."
    },
    "p": [
     {
      "es": "¿Cómo conectas a alguien que quiere ver un concierto, un artista que busca nuevos escenarios y un teatro con fechas disponibles?",
      "en": "How do you connect someone who wants to see a concert, an artist looking for new audiences and a venue with available dates?",
      "fr": "Comment faire se rencontrer quelqu'un qui rêve d'assister à un concert, un artiste qui cherche de nouvelles scènes et une salle avec des dates disponibles ?"
     },
     {
      "es": "Ese era uno de los grandes retos de A2PAS: diseñar una plataforma para dos grandes ecosistemas de usuarios, cada uno con sus propias necesidades.",
      "en": "That was one of the main challenges behind A2PAS: designing a platform for two very different user ecosystems.",
      "fr": "C'était l'un des grands défis d'A2PAS : concevoir une plateforme réunissant deux grands univers d'utilisateurs aux besoins très différents."
     },
     {
      "es": "Por un lado, espectadores que querían descubrir, proponer, apoyar y comprar entradas. Por otro, artistas, productores y espacios culturales que necesitaban gestionar oportunidades, disponibilidad y eventos desde paneles con funciones y permisos específicos.",
      "en": "On one side, audiences discovering, suggesting, supporting and booking shows. On the other, artists, producers and venues managing opportunities, availability and events through dedicated dashboards, each with its own features and permissions.",
      "fr": "D'un côté, les spectateurs qui découvrent, proposent, soutiennent et réservent des spectacles. De l'autre, les artistes, producteurs et lieux culturels qui gèrent les opportunités, les disponibilités et les événements depuis des espaces dédiés, avec des fonctionnalités et des droits adaptés à leur profil."
     },
     {
      "em": true,
      "es": "Diferentes necesidades. Una experiencia que debía tener sentido para todos.",
      "en": "Different needs. One experience that had to work for everyone.",
      "fr": "Des besoins différents. Une expérience qui devait fonctionner pour tous."
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
     "fr": "De l'envie d'y aller à la possibilité de le faire."
    },
    "p": [
     {
      "es": "Imagina que vives en Aix-en-Provence y descubres un grupo emergente que actúa en París.",
      "en": "Imagine living in Aix-en-Provence and discovering an emerging band playing in Paris.",
      "fr": "Imaginez que vous habitez à Aix-en-Provence et que vous découvrez un groupe émergent qui se produit à Paris."
     },
     {
      "es": "Te gustaría verlo cerca de casa, pero quizá nunca llegue a tu ciudad.",
      "en": "You'd love to see them closer to home, but they might never make it to your city.",
      "fr": "Vous aimeriez le voir près de chez vous, mais il ne passera peut-être jamais dans votre ville."
     },
     {
      "es": "Con A2PAS podías buscar un espacio disponible, elegir una fecha y proponer el espectáculo. Otras personas de Aix y alrededores podían apoyar la iniciativa con sus votos.",
      "en": "With A2PAS, you could find an available venue, choose a date and propose a show. Other people in Aix and nearby towns could vote to support the idea.",
      "fr": "Avec A2PAS, vous pouviez chercher une salle disponible, choisir une date et proposer d'y faire venir le groupe. Les habitants d'Aix et des environs pouvaient ensuite soutenir cette proposition en votant."
     },
     {
      "es": "Cuando el interés alcanzaba el umbral establecido, entre el 75 % y el 80 % de la capacidad del espacio, el evento se activaba automáticamente y comenzaba la venta de entradas.",
      "en": "Once the proposal reached the required level of interest, between 75% and 80% of the venue's capacity, the event was automatically activated and ticket sales could begin.",
      "fr": "Lorsque le niveau d'intérêt atteignait le seuil prévu, entre 75 % et 80 % de la capacité du lieu, l'événement était automatiquement activé et la billetterie pouvait ouvrir."
     },
     {
      "es": "Quienes habían apoyado la propuesta desde el principio podían acceder a descuentos como recompensa por participar.",
      "en": "Early supporters could benefit from discounted tickets as a reward for getting involved.",
      "fr": "Les premiers participants pouvaient bénéficier de tarifs préférentiels pour avoir contribué au lancement du projet."
     },
     {
      "em": true,
      "es": "Una idea compartida podía convertirse en una fecha en el calendario.",
      "en": "A shared idea could become an actual date on the calendar.",
      "fr": "Une envie partagée pouvait devenir une vraie date de spectacle."
     }
    ]
   },
   {
    "type": "text",
    "id": "producto",
    "h": {
     "es": "03 · Diseño del producto",
     "en": "03 · Product design",
     "fr": "03 · Le design produit"
    },
    "t": {
     "es": "Complejo por dentro. Sencillo por fuera.",
     "en": "Complex behind the scenes. Simple on the surface.",
     "fr": "Complexe en coulisses. Simple côté utilisateur."
    },
    "p": [
     {
      "es": "Mi trabajo abarcó todo el proceso: investigación, entrevistas, definición de personas, user journeys, arquitectura de información, wireframes, UX/UI, prototipos, identidad visual, desarrollo y pruebas.",
      "en": "My work covered the full process: research, interviews, user personas, journeys, information architecture, wireframes, UX/UI, prototypes, visual identity, development and testing.",
      "fr": "J'ai travaillé sur l'ensemble du processus : recherche, entretiens, personas, parcours utilisateurs, architecture de l'information, wireframes, UX/UI, prototypes, identité visuelle, développement et tests."
     },
     {
      "es": "El mayor desafío fue conectar recorridos muy diferentes dentro de un mismo producto.",
      "en": "The biggest challenge was bringing very different user journeys together within one product.",
      "fr": "Le plus grand défi consistait à faire cohabiter des parcours très différents au sein d'un même produit."
     },
     {
      "es": "Diseñé la experiencia del público, desde la búsqueda y los filtros hasta las fichas de eventos, la identificación, el pago y la confirmación de compra.",
      "en": "I designed the audience experience, from searching and filtering to event pages, sign-in, checkout and purchase confirmation.",
      "fr": "J'ai conçu l'expérience des spectateurs, de la recherche et des filtres jusqu'aux fiches événements, à l'identification, au paiement et à la confirmation d'achat."
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
        "fr": "Le parcours du public : recherche, filtres, fiches événements, identification, paiement et confirmation. Touchez l'image pour l'agrandir."
       }
      }
     },
     {
      "p": [
       {
        "es": "En paralelo, los perfiles profesionales necesitaban gestionar su actividad desde espacios diferenciados, con funcionalidades y permisos adaptados a su papel.",
        "en": "At the same time, professional users needed dedicated spaces to manage their activities, with features and permissions tailored to their roles.",
        "fr": "En parallèle, les professionnels disposaient d'espaces dédiés pour gérer leur activité, avec des fonctionnalités et des droits adaptés à leurs rôles."
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
        "fr": "Les parcours des artistes et des lieux : fiches, identification, formulaire, tableau de bord, calendrier, nouvel événement et un profil par type d'utilisateur. Touchez l'image pour l'agrandir."
       }
      }
     },
     {
      "p": [
       {
        "es": "El objetivo era que cada persona entendiera qué podía hacer, qué ocurría después y cómo su participación contribuía a que la cultura llegara más lejos.",
        "en": "The aim was to help everyone understand what they could do, what would happen next and how their participation could help bring culture closer.",
        "fr": "L'objectif : permettre à chacun de comprendre ce qu'il pouvait faire, ce qui allait se passer ensuite et comment sa participation pouvait faire avancer un projet culturel."
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
     "en": "04 · The participatory experience",
     "fr": "04 · L'expérience participative"
    },
    "t": {
     "es": "Primero la comunidad. Después el escenario.",
     "en": "Community first. Stage second.",
     "fr": "D'abord le public. Ensuite la scène."
    },
    "p": [
     {
      "es": "A2PAS proponía cambiar la manera habitual de programar espectáculos.",
      "en": "A2PAS challenged part of the traditional approach to cultural programming.",
      "fr": "A2PAS proposait une autre manière de penser la programmation culturelle."
     },
     {
      "es": "En lugar de depender únicamente de una programación decidida de antemano, permitía identificar el interés de una comunidad antes de activar un evento.",
      "en": "Instead of relying only on events planned in advance, it made it possible to measure local interest before activating a performance.",
      "fr": "Plutôt que de s'appuyer uniquement sur des spectacles programmés à l'avance, la plateforme permettait de mesurer l'intérêt local avant de déclencher un événement."
     },
     {
      "es": "Los espectadores participaban en la programación, los artistas emergentes encontraban nuevas oportunidades y los espacios podían aprovechar fechas que de otro modo quedarían libres.",
      "en": "Audiences could help shape the programme, emerging artists could find new opportunities and venues could make better use of available dates.",
      "fr": "Le public participait à la programmation, les artistes émergents découvraient de nouvelles opportunités et les lieux pouvaient mieux valoriser leurs dates disponibles."
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
        "es": "Diseñamos y probamos estos recorridos para que descubrir, proponer, votar y comprar formaran parte de una experiencia conectada.",
        "en": "We designed and tested the journeys to make discovering, proposing, voting and buying tickets feel like parts of one connected experience.",
        "fr": "Nous avons conçu et testé ces parcours pour relier naturellement découverte, proposition, vote et achat de billets."
       },
       {
        "es": "La plataforma llegó a lanzarse y utilizarse.",
        "en": "The platform was launched and used.",
        "fr": "La plateforme a été lancée et utilisée."
       },
       {
        "em": true,
        "es": "Más que vender entradas, se trataba de crear oportunidades para que la cultura sucediera.",
        "en": "It wasn't just about selling tickets. It was about creating more opportunities for culture to happen.",
        "fr": "Il ne s'agissait pas seulement de vendre des billets. Mais de créer de nouvelles occasions de faire vivre la culture."
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
     "es": "Diseñar conexiones, no solo pantallas.",
     "en": "Designing connections, not just screens.",
     "fr": "Créer des liens, pas seulement des écrans."
    },
    "p": [
     {
      "es": "Participé en todo el ciclo del producto, desde comprender a los usuarios y ordenar sus necesidades hasta diseñar, desarrollar y probar la experiencia.",
      "en": "I worked across the entire product lifecycle, from understanding users and organising their needs to designing, developing and testing the experience.",
      "fr": "J'ai participé à tout le cycle du produit, de la compréhension des utilisateurs et de leurs besoins jusqu'au design, au développement et aux tests."
     },
     {
      "es": "El branding debía transmitir la misma idea que la plataforma: cercanía, participación y cultura compartida.",
      "en": "The brand identity needed to reflect the same values as the platform: accessibility, participation and shared culture.",
      "fr": "L'identité visuelle devait porter les mêmes valeurs que la plateforme : proximité, participation et culture partagée."
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
        "es": "Y el diseño digital tenía que hacerla funcionar para públicos muy distintos, sin que la complejidad del sistema terminara siendo una complicación para las personas.",
        "en": "And the digital experience had to make it work for very different audiences, without passing the system's complexity on to the people using it.",
        "fr": "Et l'expérience digitale devait rendre tout cela accessible à des publics très différents, sans leur faire subir la complexité du système."
       },
       {
        "em": true,
        "es": "Dos grandes ecosistemas. Muchos recorridos. Una misma idea: acercar la cultura.",
        "en": "Two user ecosystems. Many journeys. One idea: bringing culture closer.",
        "fr": "Deux grands univers. De nombreux parcours. Une même idée : rapprocher la culture."
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
     "es": "La cultura empieza mucho antes de subir al escenario.",
     "en": "Culture starts long before the curtain rises.",
     "fr": "La culture commence bien avant le lever de rideau."
    },
    "p": [
     {
      "es": "Empieza cuando alguien descubre un artista, propone una idea y encuentra a otras personas que quieren hacerla realidad.",
      "en": "It starts when someone discovers an artist, shares an idea and finds others who want to make it happen.",
      "fr": "Elle commence quand quelqu'un découvre un artiste, propose une idée et rencontre d'autres personnes qui ont envie de la concrétiser."
     },
     {
      "em": true,
      "es": "¿Tienes un producto complejo que necesita una experiencia sencilla? Hablemos.",
      "en": "Have a complex product that needs a simpler experience? Let's talk.",
      "fr": "Vous avez un produit complexe à rendre plus simple ? Parlons-en."
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
   "en": "What if audiences could choose the next show?",
   "fr": "Et si le public choisissait le prochain spectacle ?"
  },
  "lead": {
   "es": "Una plataforma participativa que conecta artistas, espacios y espectadores para llevar la cultura allí donde las personas quieren vivirla.",
   "en": "A participatory platform connecting artists, venues and audiences to bring live culture closer to the people who want to experience it.",
   "fr": "Une plateforme participative qui rapproche artistes, lieux et spectateurs pour faire vivre la culture là où les gens ont envie de la retrouver."
  },
  "alt": {
   "es": "Portada del proyecto À2pas: logotipo, interfaz de la plataforma y diagrama de navegación",
   "en": "À2pas project cover: logo, platform interface and navigation diagram",
   "fr": "Couverture du projet À2pas : logo, interface de la plateforme et diagramme de navigation"
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
  d:"Une nouvelle identité, un site web et une communication digitale pour Contazara. Découvrez comment nous avons fait évoluer 40 ans d'histoire.",
  og:{ src:"contazara-cover", alt:"Couverture du cas Contazara : logotype et design du nouveau site web de la marque" } } };

/* A2PAS: own title/description per language; the social image is its cover (automatic, see build.py og_for). */
SEO.es.proj.a2pas = {"t": "À2pas: Diseño UX/UI y producto digital | Tom Fabre", "d": "Diseño de producto, UX/UI y branding para A2PAS, una plataforma que conecta artistas, salas y espectadores mediante programación cultural participativa."};
SEO.en.proj.a2pas = {"t": "À2pas: UX/UI & Product Design | Tom Fabre", "d": "Product design, UX/UI and branding for A2PAS, a platform connecting artists, venues and audiences through participatory cultural programming."};
SEO.fr.proj.a2pas = {"t": "À2pas : UX/UI & Design Produit | Tom Fabre", "d": "Design produit, UX/UI et identité visuelle pour A2PAS, une plateforme qui rapproche artistes, salles et publics grâce à une programmation participative."};

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
   "en": "Designing an app people would want to put down.",
   "fr": "Concevoir une appli qu'on a envie de quitter."
  },
  "p": [
   {
    "es": "Después de la pandemia, una startup francesa de Lyon llegó con una idea: ayudar a las personas a recuperar el contacto real.",
    "en": "After the pandemic, a French startup from Lyon came to us with an idea: help people reconnect in real life.",
    "fr": "Après la pandémie, une startup lyonnaise est venue avec une idée : aider les gens à retrouver le plaisir de se rencontrer dans la vraie vie."
   },
   {
    "es": "La soledad no era algo nuevo. Ni tampoco esa costumbre de pasar horas mirando una pantalla mientras la vida sigue fuera de ella.",
    "en": "Loneliness wasn't new. Neither was spending hours looking at a screen while life happened somewhere else.",
    "fr": "La solitude n'avait pas attendu le Covid pour exister. Et cette habitude de passer des heures devant un écran non plus."
   },
   {
    "es": "El desafío tenía algo de contradictorio. ¿Cómo diseñar una aplicación que acerque a las personas sin hacerlas más dependientes del móvil?",
    "en": "The challenge came with a contradiction. How do you design an app that brings people closer without making them more dependent on their phones?",
    "fr": "Le défi était presque paradoxal. Comment créer une application qui rapproche les personnes sans les rendre encore plus dépendantes de leur téléphone ?"
   },
   {
    "em": true,
    "es": "La respuesta no estaba en añadir funcionalidades, sino en eliminar todo lo que sobraba.",
    "en": "The answer wasn't adding more features. It was removing what got in the way.",
    "fr": "La réponse n'était pas d'ajouter des fonctionnalités, mais d'enlever tout ce qui compliquait les choses."
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
    "es": "Queríamos evitar la típica experiencia de deslizar sin parar, recorrer cientos de opciones y terminar sin decidir nada.",
    "en": "We wanted to avoid endless scrolling, hundreds of choices and the familiar feeling of closing an app without having decided anything.",
    "fr": "Nous voulions éviter le scroll sans fin, les centaines de propositions et ce moment où l'on ferme une appli sans avoir rien décidé."
   },
   {
    "es": "HappyLife partía de algo mucho más sencillo: qué te gusta, cuándo tienes tiempo y qué te apetece compartir.",
    "en": "HappyLife started with three simple things: what you enjoy, when you're free and what you'd like to share with others.",
    "fr": "HappyLife partait de trois choses simples : ce qu'on aime, quand on est disponible et ce qu'on a envie de partager."
   },
   {
    "es": "A partir de esos intereses y horarios, la app podía mostrar actividades relevantes sin obligarte a pasar por un catálogo interminable.",
    "en": "Based on interests and availability, the app could surface relevant activities without making people browse through an endless catalogue.",
    "fr": "À partir des centres d'intérêt et des créneaux libres, l'application pouvait proposer des activités pertinentes sans obliger à parcourir un catalogue interminable."
   },
   {
    "es": "El trabajo estaba en hacer que esa selección sucediera detrás de la interfaz, para que la persona solo tuviera que ocuparse de lo importante.",
    "en": "The complexity belonged behind the interface, leaving people free to focus on what mattered.",
    "fr": "La complexité devait rester en coulisses, pour que l'utilisateur puisse se concentrer sur l'essentiel."
   },
   {
    "em": true,
    "es": "Encontrar un buen plan debería ser fácil. Vivirlo, todavía más.",
    "en": "Finding a good plan should be easy. Enjoying it should be even easier.",
    "fr": "Trouver une bonne sortie devrait être simple. En profiter, encore plus."
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
   "en": "03 · Gamification with purpose",
   "fr": "03 · Une gamification qui a du sens"
  },
  "t": {
   "es": "Los puntos estaban fuera de la pantalla.",
   "en": "The rewards were waiting offline.",
   "fr": "Les récompenses étaient dans la vraie vie."
  },
  "p": [
   {
    "es": "HappyLife incorporaba un sistema de recompensas para motivar la participación.",
    "en": "HappyLife included a rewards system designed to encourage real participation.",
    "fr": "HappyLife intégrait un système de points pour encourager la participation."
   },
   {
    "es": "Conocer personas, compartir actividades y participar en encuentros permitía acumular puntos que podían canjearse por bonos y nuevas experiencias.",
    "en": "Meeting people, joining activities and sharing experiences could earn points, redeemable for vouchers and new experiences.",
    "fr": "Rencontrer des personnes, prendre part à des activités et partager des moments permettait de gagner des points, échangeables contre des bons et de nouvelles expériences."
   },
   {
    "es": "La idea no era premiar el tiempo dentro de la app, sino lo que ocurría después de utilizarla.",
    "en": "The goal wasn't to reward time spent using the app, but what happened after putting the phone away.",
    "fr": "L'idée n'était pas de récompenser le temps passé dans l'application, mais ce qui se passait une fois le téléphone rangé."
   },
   {
    "es": "Una pequeña diferencia que cambiaba toda la lógica del producto.",
    "en": "A small distinction that changed the logic of the product.",
    "fr": "Une nuance qui changeait toute la logique du produit."
   },
   {
    "em": true,
    "es": "Menos recompensas por mirar. Más razones para participar.",
    "en": "Less reward for scrolling. More reasons to show up.",
    "fr": "Moins de récompenses pour scroller. Plus de raisons de sortir."
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
   "fr": "04 · Le design produit"
  },
  "t": {
   "es": "Pocos clics. Más tiempo para las personas.",
   "en": "Fewer taps. More time for people.",
   "fr": "Quelques clics. Et place aux rencontres."
  },
  "p": [
   {
    "es": "El trabajo de UX/UI se centró en simplificar cada decisión.",
    "en": "Our UX/UI approach focused on making every decision simpler.",
    "fr": "Notre travail UX/UI visait à simplifier chaque décision."
   },
   {
    "es": "Accesos rápidos, filtros útiles y recorridos cortos para descubrir una actividad, valorar si encajaba con tus intereses y encontrar un momento para participar.",
    "en": "Quick access, useful filters and short journeys helped people discover activities that matched their interests and free time.",
    "fr": "Des accès rapides, des filtres utiles et des parcours courts pour découvrir des activités adaptées à ses envies et à ses disponibilités."
   },
   {
    "es": "En lugar de presentar todas las posibilidades, buscamos acercar a cada persona las opciones que tenían sentido para ella.",
    "en": "Instead of showing every possible option, we focused on making the relevant ones easier to find.",
    "fr": "Plutôt que de multiplier les choix, nous voulions aider chacun à trouver ceux qui comptaient vraiment."
   },
   {
    "es": "La complejidad debía resolverse dentro del producto, no trasladarse a quien lo utilizaba.",
    "en": "The product had to handle the complexity, not pass it on to the people using it.",
    "fr": "La complexité devait être gérée par le produit, pas par les personnes qui l'utilisaient."
   }
  ],
  "flow": [
   {
    "p": [
     {
      "es": "Desde el estudio UX/UI y los prototipos hasta la puesta en marcha del MVP, mantuvimos el mismo principio: facilitar que las personas llegaran antes a lo que buscaban.",
      "en": "From UX/UI research and prototypes through to bringing the MVP into operation, we kept the same principle: help people find what they needed with less effort.",
      "fr": "De la recherche UX/UI aux prototypes, puis à la mise en œuvre du MVP, nous avons gardé le même principe : aider les gens à trouver ce dont ils avaient besoin avec le moins d'effort possible."
     },
     {
      "em": true,
      "es": "No necesitábamos que las personas hicieran más cosas en la app. Necesitábamos que pudieran hacer más cosas fuera de ella.",
      "en": "We didn't need people to do more inside the app. We wanted them to do more outside it.",
      "fr": "L'objectif n'était pas de faire passer plus de temps dans l'appli, mais d'en libérer pour les autres."
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
      "fr": "Value Proposition Canvas et fiche de l'application. Visualisation conceptuelle : les notes et chiffres de la fiche font partie de la maquette, ce ne sont pas des métriques réelles. Touchez l'image pour l'agrandir."
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
   "en": "05 · My work",
   "fr": "05 · Mon travail"
  },
  "t": {
   "es": "Diseñar para lo que pasa después del clic.",
   "en": "Designing for what happens after the tap.",
   "fr": "Penser à ce qui se passe après le clic."
  },
  "p": [
   {
    "es": "Trabajamos en la investigación, definición de experiencia, diseño UX/UI y prototipado de una aplicación cuyo objetivo era facilitar encuentros reales.",
    "en": "We worked on research, experience definition, UX/UI design and prototyping for an app created to make real connections easier.",
    "fr": "Nous avons travaillé sur la recherche, la définition de l'expérience, le design UX/UI et le prototypage d'une application destinée à faciliter les rencontres réelles."
   },
   {
    "es": "El proyecto avanzó hasta la puesta en marcha del MVP, trasladando las decisiones de diseño a una primera versión funcional del producto.",
    "en": "The project progressed to the MVP implementation stage, bringing design decisions into the first functional version of the product.",
    "fr": "Le projet est allé jusqu'à la mise en œuvre du MVP, en traduisant les choix de design dans une première version fonctionnelle."
   },
   {
    "es": "El desafío consistía en convertir una idea social en decisiones concretas: cómo filtrar, qué información mostrar, cuándo proponer una actividad y cómo motivar la participación sin crear dependencia ni fricción.",
    "en": "The challenge was to turn a social idea into practical product decisions: how to filter activities, what information to show, when to surface relevant opportunities and how to encourage participation without unnecessary friction or dependence.",
    "fr": "Le défi consistait à transformer une idée sociale en choix concrets de produit : comment filtrer, quelles informations présenter, quand proposer une activité et comment encourager la participation sans créer de friction inutile ni de dépendance."
   },
   {
    "es": "Una experiencia pensada para que la tecnología acompañara a las personas y supiera cuándo hacerse a un lado.",
    "en": "An experience built around technology knowing when to step aside.",
    "fr": "Une expérience pensée pour que la technologie sache aussi s'effacer."
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
   "en": "Life happens beyond the screen.",
   "fr": "La vraie vie n'attend pas derrière un écran."
  },
  "p": [
   {
    "es": "HappyLife partía de una idea sencilla: siempre puede haber alguien cerca con ganas de compartir un momento.",
    "en": "HappyLife was built around a simple idea: there might always be someone nearby who'd love to share a moment.",
    "fr": "HappyLife reposait sur une idée simple : il y a peut-être quelqu'un tout près qui aimerait partager un moment."
   },
   {
    "es": "El diseño debía ayudar a que esas personas se encontraran.",
    "en": "Design could help those people find each other.",
    "fr": "Le design devait aider ces personnes à se trouver."
   },
   {
    "em": true,
    "es": "¿Tienes una idea que necesita una experiencia más humana? Hablemos.",
    "en": "Have an idea that needs a more human experience? Let's talk.",
    "fr": "Vous avez une idée qui mérite une expérience plus humaine ? Parlons-en."
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
  "es": "Una app diseñada para conectar personas a través de actividades compartidas. Porque a veces lo que necesitamos no es otra aplicación, sino alguien con quien hacer planes.",
  "en": "An app designed to bring people together through shared activities. Because sometimes what we need isn't another app, but someone to make plans with.",
  "fr": "Une application pensée pour rapprocher les gens autour d'activités à partager. Parce que parfois, ce dont on a besoin, ce n'est pas d'une appli de plus, mais de quelqu'un avec qui faire quelque chose."
 },
 "alt": {
  "es": "Portada de HappyLife: dos móviles con el logotipo y la pantalla de inicio con actividades locales y categorías",
  "en": "HappyLife cover: two phones showing the logo and the home screen with local activities and categories",
  "fr": "Couverture de HappyLife : deux téléphones avec le logo et l'écran d'accueil avec activités locales et catégories"
 }
};
SEO.es.proj.happylife = {"t": "HappyLife: UX/UI y diseño de app social | Tom Fabre", "d": "Diseño UX/UI de HappyLife, una app pensada para conectar personas mediante actividades reales, filtros inteligentes y gamificación con propósito."};
SEO.en.proj.happylife = {"t": "HappyLife: Social App UX/UI & Product Design | Tom Fabre", "d": "UX/UI design for HappyLife, a social app created to bring people together through real activities, thoughtful filtering and meaningful rewards."};
SEO.fr.proj.happylife = {"t": "HappyLife : UX/UI et design d'application sociale | Tom Fabre", "d": "Design UX/UI de HappyLife, une application pensée pour favoriser les rencontres réelles grâce aux activités, aux filtres pertinents et à la gamification."};

/* Binōme Studio: case study (sections), hero override and SEO. Copy approved by Tom. No founding year is confirmed anywhere: the period is an editorial label. */
SECTIONS.binome = [
 {
  "type": "text",
  "id": "comienzo",
  "h": {
   "es": "01 · El comienzo",
   "en": "01 · The beginning",
   "fr": "01 · Le début"
  },
  "t": {
   "es": "Algunas ideas funcionan mejor de a dos.",
   "en": "Some ideas are better together.",
   "fr": "Certaines idées fonctionnent mieux à deux."
  },
  "p": [
   {
    "es": "Cada uno venía de su propio recorrido, con experiencias, disciplinas y formas distintas de entender el diseño.",
    "en": "We each came from different backgrounds, with our own experiences, disciplines and ways of looking at design.",
    "fr": "Nous venions chacun de parcours différents, avec nos expériences, nos disciplines et nos façons de voir le design."
   },
   {
    "es": "Después de pasar por diferentes oficinas, proyectos y equipos, sentimos que era el momento de construir algo juntos.",
    "en": "After years of working with different teams and companies, we felt it was time to create something together.",
    "fr": "Après plusieurs années de projets, d'équipes et de bureaux différents, nous avons eu envie de construire quelque chose ensemble."
   },
   {
    "es": "No queríamos simplemente trabajar por nuestra cuenta. Queríamos crear un espacio donde combinar conocimientos, compartir decisiones y tener la libertad de abordar cada proyecto desde una perspectiva más amplia.",
    "en": "We didn't just want to work independently. We wanted the freedom to combine our skills, share decisions and approach projects from a broader perspective.",
    "fr": "Pas simplement travailler à notre compte. Créer un espace où partager nos compétences, prendre des décisions ensemble et aborder les projets avec une vision plus large."
   },
   {
    "em": true,
    "es": "Dos trayectorias distintas. Una ambición compartida.",
    "en": "Different journeys. A shared ambition.",
    "fr": "Deux parcours différents. Une ambition commune."
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
   "es": "Uno más uno puede llegar mucho más lejos.",
   "en": "One plus one can go a lot further.",
   "fr": "À deux, on peut aller beaucoup plus loin."
  },
  "p": [
   {
    "es": "{web} nació de algo sencillo: cuando se combinan distintas habilidades, las posibilidades crecen.",
    "en": "{web} started with a simple belief: combining different skills opens up more possibilities.",
    "fr": "{web} est né d'une conviction simple : en réunissant des compétences différentes, on ouvre davantage de possibilités.",
    "links": {
     "web": {
      "href": "https://binome.xyz/",
      "t": {
       "es": "Binōme",
       "en": "Binōme",
       "fr": "Binōme"
      }
     }
    }
   },
   {
    "es": "Branding, diseño digital, experiencia de usuario, desarrollo web y estrategia se encuentran en un mismo lugar, sin necesidad de tratar cada disciplina como un mundo separado.",
    "en": "Branding, digital design, user experience, web development and strategy all come together without being treated as separate worlds.",
    "fr": "Branding, design digital, expérience utilisateur, développement web et stratégie se retrouvent au même endroit, sans avoir besoin de séparer chaque discipline."
   },
   {
    "es": "Nos gusta pensar los proyectos en conjunto, desde las primeras preguntas hasta los detalles que hacen que todo funcione.",
    "en": "We like looking at the whole picture, from the first questions to the details that make everything work.",
    "fr": "Nous aimons penser les projets dans leur ensemble, des premières questions jusqu'aux détails qui font la différence."
   },
   {
    "es": "Porque una buena idea gana fuerza cuando encuentra a las personas adecuadas para desarrollarla.",
    "en": "Because good ideas become stronger when the right people work on them together.",
    "fr": "Parce qu'une bonne idée prend une autre dimension lorsqu'elle rencontre les bonnes personnes."
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
   "es": "Diseñarnos también fue parte del reto.",
   "en": "Designing for ourselves was part of the challenge.",
   "fr": "Se designer soi-même, tout un exercice."
  },
  "p": [
   {
    "es": "Crear la identidad de nuestro propio estudio significaba responder a las mismas preguntas que hacemos a nuestros clientes.",
    "en": "Creating our studio's identity meant asking ourselves the same questions we ask our clients.",
    "fr": "Créer l'identité de notre studio, c'était aussi se poser les questions que nous posons habituellement à nos clients."
   },
   {
    "es": "Quiénes somos, qué hacemos, cómo trabajamos y qué nos hace diferentes.",
    "en": "Who are we? What do we do? How do we work? What makes us different?",
    "fr": "Qui sommes-nous ? Que faisons-nous ? Comment travaillons-nous ? Qu'est-ce qui nous rend différents ?"
   },
   {
    "es": "La identidad y la web debían transmitir nuestra forma de entender el diseño: claridad, personalidad, colaboración y atención al detalle.",
    "en": "Our identity and website needed to reflect how we see design: clarity, character, collaboration and attention to detail.",
    "fr": "Notre identité et notre site devaient refléter notre vision du design : de la clarté, du caractère, de la collaboration et le souci du détail."
   },
   {
    "es": "No se trataba únicamente de tener una marca bonita, sino de construir una presencia capaz de mostrar nuestro trabajo y abrir nuevas conversaciones.",
    "en": "It wasn't just about creating a good-looking brand. It was about building a presence that could showcase our work and start new conversations.",
    "fr": "Il ne s'agissait pas seulement de créer une belle marque, mais de construire une présence capable de montrer notre travail et d'ouvrir de nouvelles conversations."
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
   "fr": "04 · De l'idée aux vrais projets"
  },
  "t": {
   "es": "Lo mejor empezó después del lanzamiento.",
   "en": "The best part came after launch.",
   "fr": "Le plus intéressant est venu après."
  },
  "p": [
   {
    "es": "Con el tiempo, Binōme dejó de ser solamente una idea entre dos personas.",
    "en": "Over time, Binōme became much more than an idea shared by two people.",
    "fr": "Avec le temps, Binōme est devenu bien plus qu'une idée partagée à deux."
   },
   {
    "es": "Hemos tenido la oportunidad de trabajar con empresas y startups, desarrollar proyectos de distintas escalas y colaborar con profesionales tanto del mundo del diseño como de otras disciplinas.",
    "en": "We've worked with companies and startups, taken on projects of different sizes and collaborated with professionals both inside and outside the design industry.",
    "fr": "Nous avons eu l'occasion de travailler avec des entreprises et des startups, de réaliser des projets de différentes tailles et de collaborer avec des professionnels du design comme d'autres univers."
   },
   {
    "es": "Cada colaboración nos ha permitido ampliar nuestra mirada, descubrir nuevas formas de trabajar y asumir retos que difícilmente abordaríamos de la misma manera por separado.",
    "en": "Each project has helped us broaden our perspective, explore different ways of working and take on challenges we might not have approached the same way alone.",
    "fr": "Chaque collaboration nous a permis d'élargir notre regard, d'explorer de nouvelles façons de travailler et de relever des défis que nous n'aurions peut-être pas abordés de la même manière seuls."
   },
   {
    "em": true,
    "es": "Un estudio pequeño no tiene por qué tener ideas pequeñas.",
    "en": "A small studio doesn't have to think small.",
    "fr": "Un petit studio peut avoir de grandes idées."
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
   "es": "Diseñar, construir y seguir aprendiendo.",
   "en": "Designing, building and always learning.",
   "fr": "Concevoir, construire et continuer à apprendre."
  },
  "p": [
   {
    "es": "Como cofundador de Binōme, participo en las decisiones creativas y estratégicas del estudio, conectando branding, diseño digital, producto y desarrollo web.",
    "en": "As a co-founder of Binōme, I'm involved in the studio's creative and strategic decisions, bringing together branding, digital design, product thinking and web development.",
    "fr": "En tant que cofondateur de Binōme, je participe aux décisions créatives et stratégiques du studio, en faisant le lien entre branding, design digital, produit et développement web."
   },
   {
    "es": "También implica algo que no siempre aparece en un portfolio: escuchar a los clientes, entender sus necesidades, organizar proyectos, colaborar con otros profesionales y convertir ideas en entregables reales.",
    "en": "It also means doing the work that doesn't always make it into a portfolio: listening to clients, understanding their needs, organising projects, collaborating with other professionals and turning ideas into real deliverables.",
    "fr": "C'est aussi tout ce qui ne se voit pas toujours dans un portfolio : écouter les clients, comprendre leurs besoins, organiser les projets, collaborer avec d'autres professionnels et transformer les idées en réalisations concrètes."
   },
   {
    "es": "Binōme es una extensión de mi forma de trabajar. Un lugar para explorar ideas, compartir responsabilidades y construir proyectos con intención.",
    "en": "Binōme is an extension of how I work. A place to explore ideas, share responsibilities and make thoughtful work happen.",
    "fr": "Binōme prolonge ma façon de travailler. Un espace pour explorer des idées, partager les responsabilités et créer des projets qui ont du sens."
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
   "es": "Lo que empieza entre dos puede llegar mucho más lejos.",
   "en": "What starts with two can go much further.",
   "fr": "Ce qui commence à deux peut aller bien plus loin."
  },
  "p": [
   {
    "es": "Binōme sigue creciendo con cada proyecto, cada cliente y cada persona que se suma al camino.",
    "en": "Binōme keeps growing with every project, every client and every new collaboration.",
    "fr": "Binōme continue de grandir au fil des projets, des rencontres et des collaborations."
   },
   {
    "em": true,
    "es": "¿Tienes algo en mente? Conozcamos qué podemos hacer juntos.",
    "en": "Got something in mind? Let's see what we can create together.",
    "fr": "Vous avez une idée en tête ? Voyons ce que nous pourrions créer ensemble."
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
  "es": "Después de años trabajando en diferentes estudios, empresas y equipos, decidimos unir nuestras experiencias para crear algo propio. Así nació Binōme, un estudio independiente donde las buenas ideas se encuentran con diferentes maneras de hacerlas realidad.",
  "en": "After years working across different studios, companies and teams, we decided to bring our experience together and build something of our own. That's how Binōme began: an independent design studio where different skills come together to bring good ideas to life.",
  "fr": "Après plusieurs années passées dans différentes entreprises, agences et équipes, nous avons décidé de réunir nos expériences pour créer quelque chose à nous. C'est comme ça qu'est né Binōme, un studio indépendant où les compétences se croisent pour donner vie aux bonnes idées."
 },
 "alt": {
  "es": "Portada de Binōme Studio: la web del estudio en un portátil junto a una página de caso, con el titular «Tu marca al nivel que tu negocio merece»",
  "en": "Binōme Studio cover: the studio website on a laptop next to a case study page, with the headline «Tu marca al nivel que tu negocio merece»",
  "fr": "Couverture de Binōme Studio : le site du studio sur un ordinateur portable à côté d'une page d'étude de cas, avec le titre « Tu marca al nivel que tu negocio merece »"
 }
};
SEO.es.proj.binome = {"t": "Binōme Studio: Branding, diseño web y estrategia | Tom Fabre", "d": "Binōme Studio es un estudio independiente de branding, diseño web y estrategia digital. Descubre cómo nació y mi trabajo como cofundador."};
SEO.en.proj.binome = {"t": "Binōme Studio: Branding, Web Design & Strategy | Tom Fabre", "d": "Discover Binōme Studio, an independent branding and digital design studio, and my role as co-founder in building its identity and projects."};
SEO.fr.proj.binome = {"t": "Binōme Studio : Branding, Design Web & Stratégie | Tom Fabre", "d": "Découvrez Binōme Studio, un studio indépendant de branding et de design digital, son histoire et mon rôle de cofondateur."};

/* Yaypegs: case study (sections), hero override and SEO. Copy approved by Tom. Period 2022 a 2023 as given; no metrics. */
SECTIONS.yaypegs = [
 {
  "type": "text",
  "id": "comienzo",
  "h": {
   "es": "01 · El comienzo",
   "en": "01 · The beginning",
   "fr": "01 · Le début"
  },
  "t": {
   "es": "Todo empezó con un universo de personajes.",
   "en": "It all started with a world of characters.",
   "fr": "Tout a commencé avec un univers de personnages."
  },
  "p": [
   {
    "es": "Yaypegs nació como una {coleccion} construidos a partir de elementos, rasgos y accesorios combinables.",
    "en": "Yaypegs began as a {coleccion} built from interchangeable traits, accessories and visual elements.",
    "fr": "Yaypegs est né comme une {coleccion} composés de traits, d'accessoires et d'éléments graphiques interchangeables.",
    "links": {
     "coleccion": {
      "href": "https://yaypegs.com/s1",
      "t": {
       "es": "colección de 10.000 personajes digitales",
       "en": "collection of 10,000 digital characters",
       "fr": "collection de 10 000 personnages numériques"
      }
     }
    }
   },
   {
    "es": "El trabajo artístico inicial sentó las bases de un lenguaje visual reconocible, con personajes que podían ser diferentes entre sí y seguir formando parte del mismo universo.",
    "en": "The initial artwork established a recognisable visual language, allowing every character to feel different while still belonging to the same universe.",
    "fr": "Le travail artistique initial a posé les bases d'un langage visuel reconnaissable, permettant à chaque personnage d'être différent tout en appartenant au même univers."
   },
   {
    "es": "Pero el proyecto tenía una segunda ambición: llevar ese mundo mucho más lejos.",
    "en": "But the project had another ambition: take that world even further.",
    "fr": "Mais le projet avait une autre ambition : aller encore plus loin."
   },
   {
    "em": true,
    "es": "No bastaba con que los personajes se vieran bien. También tenían que cobrar vida.",
    "en": "Looking good was only the beginning. The characters needed to come alive.",
    "fr": "Il ne suffisait pas que les personnages soient réussis visuellement. Il fallait aussi leur donner vie."
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
   "es": "Animar una capa es fácil. Hacer que todas funcionen juntas es otra historia.",
   "en": "Animating one layer is easy. Making every layer work together is another story.",
   "fr": "Animer un calque, c'est une chose. Faire fonctionner tous les calques ensemble, c'en est une autre."
  },
  "p": [
   {
    "es": "El gran reto llegó con la evolución animada de la colección.",
    "en": "The biggest challenge came with the animated evolution of the collection.",
    "fr": "Le plus grand défi est arrivé avec l'évolution animée de la collection."
   },
   {
    "es": "Cada personaje podía reunir distintas combinaciones de rasgos, accesorios y elementos gráficos. Y cada uno de ellos necesitaba moverse sin generar conflictos con los demás.",
    "en": "Each character could combine different traits, accessories and graphic elements. Every element needed to move without conflicting with the others.",
    "fr": "Chaque personnage pouvait réunir différentes combinaisons de traits, d'accessoires et d'éléments graphiques. Chaque élément devait pouvoir bouger sans entrer en conflit avec les autres."
   },
   {
    "es": "No servía animar un personaje completo y repetir la fórmula. Había que trabajar los elementos individualmente, teniendo siempre en cuenta cómo se comportarían al combinarse con otras capas.",
    "en": "Animating each completed character independently wasn't the answer. We needed to work with individual elements while considering how they would behave alongside different layers.",
    "fr": "Il ne suffisait pas d'animer un personnage complet et de reproduire le processus. Il fallait travailler chaque élément individuellement, en anticipant son comportement avec les autres calques."
   },
   {
    "es": "Un movimiento que funcionaba con un accesorio también debía funcionar con muchos otros.",
    "en": "An animation that worked with one accessory needed to work with many others.",
    "fr": "Une animation compatible avec un accessoire devait aussi fonctionner avec beaucoup d'autres."
   },
   {
    "em": true,
    "es": "Miles de resultados posibles. Un mismo sistema de animación.",
    "en": "Thousands of possible outcomes. One shared animation system.",
    "fr": "Des milliers de résultats possibles. Un seul système d'animation."
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
   "es": "El detalle importaba. La compatibilidad, todavía más.",
   "en": "Every detail mattered. Compatibility mattered even more.",
   "fr": "Chaque détail comptait. La compatibilité encore plus."
  },
  "p": [
   {
    "es": "El trabajo exigió animar y ajustar cientos de elementos para que pudieran combinarse manteniendo la coherencia del personaje.",
    "en": "The process involved animating and refining hundreds of elements so they could work together while preserving each character's visual consistency.",
    "fr": "Le travail demandait d'animer et d'ajuster des centaines d'éléments pour qu'ils puissent se combiner tout en conservant la cohérence visuelle des personnages."
   },
   {
    "es": "Cada capa debía respetar las proporciones, los tiempos y el movimiento del conjunto.",
    "en": "Every layer needed to follow the proportions, timing and movement of the whole.",
    "fr": "Chaque calque devait respecter les proportions, le rythme et les mouvements de l'ensemble."
   },
   {
    "es": "El objetivo era que las 10.000 composiciones pudieran cobrar vida a partir de un sistema compartido, sin tener que resolver cada personaje como una animación independiente.",
    "en": "The goal was to bring all 10,000 characters to life through a shared system, rather than treating each one as a separate animation.",
    "fr": "L'objectif était de donner vie aux 10 000 personnages grâce à un système commun, sans devoir traiter chacun comme une animation indépendante."
   },
   {
    "es": "Un trabajo minucioso donde creatividad, paciencia y precisión tenían que funcionar juntas.",
    "en": "A meticulous process where creativity, patience and precision had to work together.",
    "fr": "Un travail minutieux où créativité, patience et précision devaient avancer ensemble."
   },
   {
    "em": true,
    "es": "No se trataba de hacer 10.000 animaciones aisladas. Se trataba de hacer posible que 10.000 personajes se movieran.",
    "en": "It wasn't about creating 10,000 isolated animations. It was about making 10,000 characters move.",
    "fr": "Il ne s'agissait pas de créer 10 000 animations isolées, mais de permettre à 10 000 personnages de prendre vie."
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
   "en": "A universe that needed to communicate, too.",
   "fr": "Un univers qui devait aussi communiquer."
  },
  "p": [
   {
    "es": "El proyecto no terminaba en la colección.",
    "en": "The work didn't stop with the collection.",
    "fr": "Le projet ne s'arrêtait pas à la collection."
   },
   {
    "es": "También desarrollamos piezas animadas para acompañar las campañas previas al lanzamiento, generar expectación y dar continuidad a la comunicación después de la presentación.",
    "en": "We also created animated content for pre-launch campaigns, building anticipation and extending the project's communication after release.",
    "fr": "Nous avons également réalisé des contenus animés pour accompagner les campagnes précédant le lancement, susciter l'intérêt et prolonger la communication après la sortie."
   },
   {
    "es": "Vídeos, animaciones y contenidos para Twitter y otras redes sociales ayudaban a trasladar el lenguaje visual de Yaypegs a diferentes formatos.",
    "en": "Videos, motion graphics and content for Twitter and other social platforms helped bring Yaypegs' visual language into different formats.",
    "fr": "Vidéos, animations et contenus pour Twitter et d'autres réseaux sociaux permettaient d'adapter l'univers graphique de Yaypegs à différents formats."
   },
   {
    "es": "La animación no era solamente una característica de los personajes. También formaba parte de la manera en que el proyecto se presentaba y conectaba con su comunidad.",
    "en": "Animation wasn't just part of the characters. It was part of how the project presented itself and connected with its community.",
    "fr": "L'animation ne faisait pas seulement partie des personnages. Elle contribuait aussi à la manière dont le projet se présentait et échangeait avec sa communauté."
   },
   {
    "em": true,
    "es": "{video}",
    "en": "{video}",
    "fr": "{video}",
    "links": {
     "video": {
      "href": "https://www.youtube.com/watch?v=n0ZUEKcHY2k",
      "t": {
       "es": "Puedes ver una de las animaciones que creamos para las campañas de Yaypegs.",
       "en": "Watch one of the animations we created for the Yaypegs campaigns.",
       "fr": "Découvrez l'une des animations que nous avons créées pour les campagnes Yaypegs."
      }
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
   "en": "05 · My work",
   "fr": "05 · Mon travail"
  },
  "t": {
   "es": "Creatividad, sistema y muchas horas de detalle.",
   "en": "Creativity, consistency and a lot of attention to detail.",
   "fr": "Créativité, cohérence et beaucoup de précision."
  },
  "p": [
   {
    "es": "Mi participación, junto al equipo de {binome}, abarcó el trabajo artístico del proyecto, su evolución hacia la animación y la producción de contenidos audiovisuales para las campañas.",
    "en": "My contribution, alongside {binome}, included the project's artwork, its evolution into animation and the production of audiovisual content for its campaigns.",
    "fr": "Ma participation, aux côtés de {binome}, a couvert le travail artistique du projet, son évolution vers l'animation et la production de contenus audiovisuels pour les campagnes.",
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
    "es": "El mayor desafío fue construir un lenguaje de movimiento que pudiera adaptarse a cientos de elementos y miles de combinaciones, manteniendo la coherencia visual.",
    "en": "The biggest challenge was building a motion language that could adapt to hundreds of elements and thousands of combinations while maintaining visual consistency.",
    "fr": "Le plus grand défi était de construire un langage de mouvement capable de s'adapter à des centaines d'éléments et à des milliers de combinaisons tout en conservant une cohérence visuelle."
   },
   {
    "es": "Un trabajo donde la dirección de arte y el motion design tuvieron que pensar más allá de una pieza individual.",
    "en": "A project where art direction and motion design needed to look beyond any single piece.",
    "fr": "Un projet où la direction artistique et le motion design devaient penser bien au-delà d'une seule création."
   },
   {
    "em": true,
    "es": "Porque cuando todo puede combinarse, cada pequeño detalle cuenta.",
    "en": "Because when everything can be combined, every detail counts.",
    "fr": "Parce que lorsque tout peut se combiner, chaque détail compte."
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
   "en": "Thousands of characters. One world in motion.",
   "fr": "Des milliers de personnages. Un univers en mouvement."
  },
  "p": [
   {
    "es": "Yaypegs fue una experiencia de creatividad a escala, donde el verdadero logro estuvo en conseguir que todas las piezas funcionaran juntas.",
    "en": "Yaypegs was an exercise in creativity at scale, where the real achievement was making every piece work together.",
    "fr": "Yaypegs a été une expérience de création à grande échelle, où le véritable défi consistait à faire fonctionner toutes les pièces ensemble."
   },
   {
    "em": true,
    "es": "¿Tienes una idea que necesita cobrar vida?",
    "en": "Have an idea that needs to come alive?",
    "fr": "Vous avez une idée à faire vivre ?"
   },
   {
    "es": "Hablemos.",
    "en": "Let's talk.",
    "fr": "Parlons-en."
   }
  ]
 }
];
HERO.yaypegs = {
 "tag": {
  "es": "10.000 personajes. Infinitas formas de moverse.",
  "en": "10,000 characters. Endless ways to move.",
  "fr": "10 000 personnages. Mille façons de bouger."
 },
 "lead": {
  "es": "Un universo de personajes digitales donde el verdadero desafío era conseguir que miles de combinaciones cobraran vida, sin perder su personalidad ni romper la lógica visual del conjunto.",
  "en": "A universe of digital characters where the challenge was bringing thousands of combinations to life without losing their personality or visual consistency.",
  "fr": "Un univers de personnages numériques où le véritable défi consistait à donner vie à des milliers de combinaisons sans perdre leur personnalité ni la cohérence visuelle de l'ensemble."
 },
 "alt": {
  "es": "Composición de capas de un personaje de Yaypegs: fondo, cuerpo, ojos, capucha, boca y accesorio se apilan hasta formar el personaje final",
  "en": "Layer composition of a Yaypegs character: background, body, eyes, hood, mouth and accessory stack up into the final character",
  "fr": "Composition en calques d'un personnage Yaypegs : fond, corps, yeux, capuche, bouche et accessoire s'empilent pour former le personnage final"
 }
};
SEO.es.proj.yaypegs = {"t": "Yaypegs: Dirección de arte y Motion Design | Tom Fabre", "d": "Dirección de arte y motion design para Yaypegs, una colección de 10.000 personajes digitales desarrollada mediante un sistema de animación modular."};
SEO.en.proj.yaypegs = {"t": "Yaypegs: Art Direction & Motion Design | Tom Fabre", "d": "Art direction and motion design for Yaypegs, a collection of 10,000 digital characters brought to life through a modular animation system."};
SEO.fr.proj.yaypegs = {"t": "Yaypegs : Direction artistique & Motion Design | Tom Fabre", "d": "Direction artistique et motion design pour Yaypegs, une collection de 10 000 personnages numériques animés grâce à un système modulaire."};

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
   "en": "Making what was already there visible.",
   "fr": "Rendre visible ce qui était déjà là."
  },
  "p": [
   {
    "es": "{web} ya tenía lo más importante: un equipo con experiencia, una forma de trabajar sólida y proyectos que hablaban por sí solos.",
    "en": "{web} already had what mattered most: an experienced team, a solid approach to its work and projects that spoke for themselves.",
    "fr": "{web} avait déjà l'essentiel : une équipe expérimentée, une méthode de travail solide et des projets qui parlaient d'eux-mêmes.",
    "links": {
     "web": {
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
    "es": "El desafío era construir una identidad capaz de transmitir esas cualidades desde el primer contacto.",
    "en": "The challenge was to create an identity capable of communicating those qualities from the very first interaction.",
    "fr": "Le défi était de créer une identité capable de transmettre ces qualités dès le premier contact."
   },
   {
    "es": "Una marca que representara tanto la dimensión técnica de la arquitectura y la construcción como la mirada humana con la que el estudio aborda cada espacio.",
    "en": "A brand that reflected both the technical side of architecture and construction and the human perspective the studio brings to every space.",
    "fr": "Une marque qui reflète aussi bien la dimension technique de l'architecture et de la construction que le regard humain porté par le studio sur chaque espace."
   },
   {
    "em": true,
    "es": "No necesitábamos inventar quiénes eran. Necesitábamos encontrar la mejor manera de mostrarlo.",
    "en": "We didn't need to invent who they were. We needed to find the best way to show it.",
    "fr": "Nous n'avions pas besoin d'inventer qui ils étaient. Il fallait trouver la meilleure manière de le montrer."
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
   "es": "Todo empieza por encontrar una dirección.",
   "en": "Every good identity starts with a clear direction.",
   "fr": "Tout commence par une direction claire."
  },
  "p": [
   {
    "es": "Desarrollamos una identidad visual completa, pensada para funcionar en distintos contextos, desde las aplicaciones corporativas hasta la comunicación digital.",
    "en": "We developed a complete visual identity designed to work across different applications, from corporate materials to digital communication.",
    "fr": "Nous avons développé une identité visuelle complète, pensée pour fonctionner sur différents supports, des applications institutionnelles à la communication digitale."
   },
   {
    "es": "Cada decisión debía aportar coherencia, reconocimiento y personalidad, sin perder la claridad que necesita una empresa con un perfil técnico.",
    "en": "Every decision needed to bring consistency, recognition and character, while keeping the clarity expected from a technically focused business.",
    "fr": "Chaque choix devait apporter cohérence, reconnaissance et personnalité, sans perdre la clarté nécessaire à une entreprise au métier technique."
   },
   {
    "es": "El objetivo era que todos los elementos hablaran el mismo idioma, independientemente del formato o del canal.",
    "en": "The goal was to create a visual language that felt coherent wherever it appeared.",
    "fr": "L'objectif était de créer un langage visuel capable de rester cohérent, quel que soit le support."
   },
   {
    "em": true,
    "es": "Una marca reconocible, sin importar dónde aparezca.",
    "en": "A recognisable brand, wherever you find it.",
    "fr": "Une marque reconnaissable, partout où elle s'exprime."
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
   "en": "03 · From branding to web",
   "fr": "03 · Du branding au web"
  },
  "t": {
   "es": "Una identidad que también funciona en pantalla.",
   "en": "An identity that works on screen, too.",
   "fr": "Une identité qui fonctionne aussi à l'écran."
  },
  "p": [
   {
    "es": "La presencia digital debía continuar el trabajo de marca, pero también ayudar a explicar qué hace 360estudio y cómo aborda sus proyectos.",
    "en": "The digital experience needed to build on the brand while making 360estudio's services and projects easier to understand.",
    "fr": "L'expérience digitale devait prolonger le travail de marque tout en aidant à comprendre les services et les projets de 360estudio."
   },
   {
    "es": "Trabajamos una experiencia visual que permitiera presentar sus servicios, dar protagonismo a sus trabajos y conectar la identidad con su especialización en arquitectura y construcción.",
    "en": "We designed a visual experience that brought its work forward and connected the identity with the company's expertise in architecture and construction.",
    "fr": "Nous avons travaillé sur une expérience visuelle qui valorise ses réalisations et relie son identité à son expertise en architecture et en construction."
   },
   {
    "es": "La web se convirtió en otra expresión de la marca, con sus propias necesidades de navegación, contenido y comunicación.",
    "en": "The website became another expression of the brand, with its own needs around navigation, content and communication.",
    "fr": "Le site est devenu une autre expression de la marque, avec ses propres enjeux de navigation, de contenu et de communication."
   }
  ]
 },
 {
  "type": "text",
  "id": "espacio",
  "h": {
   "es": "04 · Más allá de lo gráfico",
   "en": "04 · Beyond graphics",
   "fr": "04 · Au-delà du graphisme"
  },
  "t": {
   "es": "Cuando la marca entra en el espacio.",
   "en": "When a brand becomes part of a space.",
   "fr": "Quand la marque prend place dans l'espace."
  },
  "p": [
   {
    "es": "Una de las partes más interesantes del proyecto fue poder llevar la identidad más allá de los soportes habituales.",
    "en": "One of the most interesting parts of the project was taking the identity beyond traditional applications.",
    "fr": "L'un des aspects les plus intéressants du projet a été de prolonger l'identité au-delà de ses supports habituels."
   },
   {
    "es": "También colaboramos en detalles del diseño interior de las oficinas, buscando que el lenguaje visual de 360estudio tuviera continuidad en su propio entorno de trabajo.",
    "en": "We also contributed to details of the office interior design, helping the visual language feel at home in the studio's physical environment.",
    "fr": "Nous avons également contribué à certains détails de l'aménagement intérieur des bureaux, pour créer une continuité entre le langage visuel de 360estudio et son environnement de travail."
   },
   {
    "es": "Fue una oportunidad para conectar branding y arquitectura, dos disciplinas que pueden enriquecerse cuando se piensan juntas.",
    "en": "An opportunity to bring branding and architecture together and explore how the two disciplines can complement each other.",
    "fr": "Une occasion de faire dialoguer branding et architecture, deux disciplines qui gagnent à être pensées ensemble."
   },
   {
    "em": true,
    "es": "Porque una identidad no solo se ve. También se puede vivir.",
    "en": "Because an identity isn't just something you see. It's something you can experience.",
    "fr": "Parce qu'une identité ne se regarde pas seulement. Elle se vit aussi."
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
   "es": "El buen hacer también merece verse bien.",
   "en": "Good work deserves to look the part.",
   "fr": "Le savoir-faire mérite aussi de se voir."
  },
  "p": [
   {
    "es": "360estudio ya contaba con el talento, la experiencia y el compromiso de su equipo. Nuestra aportación fue construir una identidad capaz de transmitir todo eso con claridad.",
    "en": "360estudio already had the talent, experience and commitment of its team. Our contribution was building an identity that could communicate those qualities clearly.",
    "fr": "360estudio possédait déjà le talent, l'expérience et l'engagement de son équipe. Notre contribution a été de créer une identité capable de rendre ces qualités visibles."
   },
   {
    "es": "Hoy, sus propios fundadores reconocen que la nueva imagen ha contribuido a reforzar la presencia y la percepción profesional del estudio.",
    "en": "Today, the founders themselves recognise that the new identity has helped strengthen the studio's presence and professional image.",
    "fr": "Aujourd'hui, les fondateurs eux-mêmes reconnaissent que la nouvelle image a contribué à renforcer la présence et la perception professionnelle du studio."
   },
   {
    "es": "Con proyectos en distintos lugares de España, la marca los acompaña allí donde trabajan, manteniendo una personalidad coherente en sus comunicaciones y aplicaciones.",
    "en": "With projects across Spain, the brand travels with the team, maintaining a consistent personality across communications and applications.",
    "fr": "Avec des projets dans différentes régions d'Espagne, la marque accompagne l'équipe partout où elle travaille, en conservant une personnalité cohérente dans ses communications et ses applications."
   },
   {
    "es": "Mi participación, junto a Binōme Studio, abarcó el desarrollo de la identidad, sus aplicaciones, el diseño web y la colaboración en detalles de interiorismo.",
    "en": "My contribution, alongside Binōme Studio, included the visual identity, its applications, web design and selected interior design details.",
    "fr": "Ma participation, aux côtés de Binōme Studio, a porté sur l'identité visuelle, ses déclinaisons, le design web et certains détails d'aménagement intérieur."
   },
   {
    "es": "Un trabajo que conectó diseño gráfico, comunicación y arquitectura alrededor de una misma visión.",
    "en": "A project that brought graphic design, communication and architecture together around a shared vision.",
    "fr": "Un projet où design graphique, communication et architecture se sont retrouvés autour d'une même vision."
   },
   {
    "em": true,
    "es": "El diseño no creó su profesionalismo. Lo hizo visible.",
    "en": "Design didn't create their professionalism. It made it visible.",
    "fr": "Le design n'a pas créé leur professionnalisme. Il l'a rendu visible."
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
   "es": "Una marca que crece con quienes la hacen posible.",
   "en": "A brand that grows with the people behind it.",
   "fr": "Une marque qui grandit avec celles et ceux qui la font vivre."
  },
  "p": [
   {
    "es": "Lo más bonito de este proyecto es ver cómo la identidad que construimos sigue acompañando a 360estudio en su evolución.",
    "en": "One of the most rewarding parts of this project is seeing how the identity we created continues to accompany 360estudio as it evolves.",
    "fr": "Ce qui me plaît le plus dans ce projet, c'est de voir comment l'identité que nous avons créée continue d'accompagner l'évolution de 360estudio."
   },
   {
    "es": "Hoy viaja con ellos a distintos lugares de España, llevando algo más que un logotipo: una forma de trabajar, una reputación y el esfuerzo de todo un equipo.",
    "en": "Today, it travels with the team across Spain, carrying more than a logo: a way of working, a reputation and the effort of everyone behind the business.",
    "fr": "Aujourd'hui, elle voyage avec l'équipe à travers l'Espagne, en portant bien plus qu'un logo : une manière de travailler, une réputation et le travail de toute une équipe."
   },
   {
    "em": true,
    "es": "Eso también es construir marca.",
    "en": "That's what building a brand is about, too.",
    "fr": "C'est aussi ça, construire une marque."
   },
   {
    "es": "¿Tienes una marca que merece mostrar todo lo que vale?",
    "en": "Have a brand that deserves to show what it's really worth?",
    "fr": "Vous avez une marque qui mérite de montrer toute sa valeur ?"
   },
   {
    "es": "Hablemos.",
    "en": "Let's talk.",
    "fr": "Parlons-en."
   }
  ]
 }
];
HERO["360estudio"] = {
 "tag": {
  "es": "Una identidad. Muchas formas de habitarla.",
  "en": "One identity. Many ways to experience it.",
  "fr": "Une identité. Plusieurs façons de la vivre."
 },
 "lead": {
  "es": "Una identidad creada para un estudio de arquitectura que entiende los espacios desde una mirada integral. De la marca a la web, pasando por los detalles de sus propias oficinas.",
  "en": "An identity created for an architecture studio that approaches spaces from every angle. From branding to digital design, with details extending into its own offices.",
  "fr": "Une identité créée pour un studio d'architecture qui aborde les espaces dans leur ensemble. Du branding au digital, jusque dans les détails de ses propres bureaux."
 },
 "alt": {
  "es": "Portada de 360estudio: la web del estudio en un portátil sobre una mesa, con el titular «Entornos que cuidan, usuarios que prosperan» y dos esferas amarillas",
  "en": "360estudio cover: the studio website on a laptop on a table, with the headline «Entornos que cuidan, usuarios que prosperan» and two yellow spheres",
  "fr": "Couverture de 360estudio : le site du studio sur un ordinateur portable posé sur une table, avec le titre « Entornos que cuidan, usuarios que prosperan » et deux sphères jaunes"
 }
};
SEO.es.proj["360estudio"] = {"t": "360estudio: Branding, diseño web e identidad visual | Tom Fabre", "d": "Branding integral y diseño web para 360estudio, una empresa de arquitectura cuya identidad también se trasladó al espacio físico."};
SEO.en.proj["360estudio"] = {"t": "360estudio: Branding, Web & Visual Identity | Tom Fabre", "d": "Complete branding and web design for 360estudio, an architecture company whose visual identity extends into its physical spaces."};
SEO.fr.proj["360estudio"] = {"t": "360estudio : Branding, Web & Identité visuelle | Tom Fabre", "d": "Branding et design web pour 360estudio, une entreprise d'architecture dont l'identité visuelle s'étend jusque dans ses espaces."};

/* Mobile Experiences: Apolo Launcher, Appy x Jojol and Mood Messenger in one case (chapters). Images are placeholders (ph) until img/mobile-experiences-{0,cover,1..5}.webp exist. */
SECTIONS["mobile-experiences"] = [
 {
  "type": "text",
  "id": "intro",
  "h": {
   "es": "Introducción",
   "en": "Introduction",
   "fr": "Introduction"
  },
  "t": {
   "es": "Diseñar para el mundo real.",
   "en": "Designing for the real world.",
   "fr": "Concevoir pour le monde réel."
  },
  "p": [
   {
    "es": "Hay proyectos que empiezan con una idea. Otros, con algo que ya funciona y puede funcionar mejor.",
    "en": "Some projects start with an idea. Others start with something that already works and could work better.",
    "fr": "Certains projets partent d'une idée. D'autres, de quelque chose qui fonctionne déjà et peut fonctionner mieux."
   },
   {
    "es": "Apolo Launcher y Appy fueron dos oportunidades de diseñar productos completos desde cero. Con Mood Messenger, el desafío fue diferente: participar en la evolución de una aplicación consolidada, repensar sus interfaces y contribuir a su estrategia de relanzamiento.",
    "en": "Apolo Launcher and Appy were two chances to design complete products from scratch. With Mood Messenger the challenge was different: taking part in the evolution of an established app, rethinking its interfaces and contributing to its relaunch strategy.",
    "fr": "Apolo Launcher et Appy ont été deux occasions de concevoir des produits complets de zéro. Avec Mood Messenger, le défi était différent : participer à l'évolution d'une application établie, repenser ses interfaces et contribuer à sa stratégie de relance."
   },
   {
    "es": "Tres experiencias que me permitieron explorar distintas maneras de resolver problemas, tomar decisiones y diseñar para personas reales.",
    "en": "Three experiences that let me explore different ways of solving problems, making decisions and designing for real people.",
    "fr": "Trois expériences qui m'ont permis d'explorer différentes façons de résoudre des problèmes, de prendre des décisions et de concevoir pour de vraies personnes."
   }
  ]
 },
 {
  "type": "chapter",
  "id": "apolo",
  "layout": "right",
  "h": {
   "es": "01 / Apolo Launcher",
   "en": "01 / Apolo Launcher",
   "fr": "01 / Apolo Launcher"
  },
  "t": {
   "es": "Tu Android. A tu manera.",
   "en": "Your Android. Your way.",
   "fr": "Votre Android. À votre façon."
  },
  "p": [
   {
    "es": "La pantalla de inicio es uno de los espacios que más utilizamos en nuestro teléfono. ¿Y si pudiera sentirse realmente nuestra?",
    "en": "The home screen is one of the spaces we use most on our phones. What if it could feel truly ours?",
    "fr": "L'écran d'accueil est l'un des espaces que nous utilisons le plus sur notre téléphone. Et s'il pouvait vraiment nous ressembler ?"
   },
   {
    "es": "Apolo Launcher nació con la idea de ofrecer una experiencia Android más personal, intuitiva y flexible.",
    "en": "Apolo Launcher was born to offer a more personal, intuitive and flexible Android experience.",
    "fr": "Apolo Launcher est né pour offrir une expérience Android plus personnelle, intuitive et flexible."
   },
   {
    "es": "Me encargué del diseño del producto de principio a fin, desde su concepto y la experiencia de navegación hasta las interfaces finales. El objetivo era combinar personalización, funcionalidad y una identidad visual reconocible en una experiencia fácil de utilizar.",
    "en": "I designed the product from start to finish, from the concept and navigation experience to the final interfaces. The goal was to combine personalisation, functionality and a recognisable visual identity in an experience that was easy to use.",
    "fr": "J'ai conçu le produit de bout en bout, du concept et de l'expérience de navigation jusqu'aux interfaces finales. L'objectif était de combiner personnalisation, fonctionnalité et identité visuelle reconnaissable dans une expérience facile à utiliser."
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
     "fr": "Conception produit de bout en bout · UX/UI · Design visuel"
    }
   }
  ],
  "metric": {
   "n": {
    "es": "1M+",
    "en": "1M+",
    "fr": "1M+"
   },
   "l": {
    "es": "instalaciones en Google Play",
    "en": "installs on Google Play",
    "fr": "installations sur Google Play"
   },
   "note": {
    "es": "Cifra documentada del producto, no un resultado atribuible solo al diseño.",
    "en": "Documented figure for the product, not a result attributable to design alone.",
    "fr": "Chiffre documenté du produit, pas un résultat attribuable au seul design."
   }
  },
  "links": [
   {
    "href": "https://apkcombo.com/apolo-launcher-boost-theme/co.madseven.launcher",
    "l": {
     "es": "Fuente de la métrica (referencia externa histórica)",
     "en": "Source of the figure (historical external reference)",
     "fr": "Source du chiffre (référence externe historique)"
    }
   }
  ],
  "media": [
   {
    "key": "mobile-experiences",
    "v": "1",
    "r": "1600/1200",
    "ph": true,
    "alt": {
     "es": "Interfaz de Apolo Launcher en un teléfono Android",
     "en": "Apolo Launcher interface on an Android phone",
     "fr": "Interface d'Apolo Launcher sur un téléphone Android"
    }
   },
   {
    "key": "mobile-experiences",
    "v": "2",
    "r": "1600/1200",
    "ph": true,
    "alt": {
     "es": "Distintas pantallas y elementos visuales de Apolo Launcher",
     "en": "Different screens and visual elements of Apolo Launcher",
     "fr": "Différents écrans et éléments visuels d'Apolo Launcher"
    }
   }
  ]
 },
 {
  "type": "chapter",
  "id": "appy",
  "layout": "left",
  "h": {
   "es": "02 / Appy × Jojol",
   "en": "02 / Appy × Jojol",
   "fr": "02 / Appy × Jojol"
  },
  "t": {
   "es": "Un poco de suerte. Mucho diseño.",
   "en": "A little luck. A lot of design.",
   "fr": "Un peu de chance. Beaucoup de design."
  },
  "p": [
   {
    "es": "¿Cómo transformar la relación entre un creador de contenido y su comunidad en una experiencia móvil?",
    "en": "How do you turn the relationship between a content creator and their community into a mobile experience?",
    "fr": "Comment transformer la relation entre un créateur de contenu et sa communauté en expérience mobile ?"
   },
   {
    "es": "Appy fue una aplicación de concursos y premios creada junto a Jojol, uno de los creadores de contenido tecnológico más reconocidos de Francia.",
    "en": "Appy was a contests and prizes app created with Jojol, one of the best-known tech content creators in France.",
    "fr": "Appy était une application de concours et de lots créée avec Jojol, l'un des créateurs de contenu tech les plus reconnus de France."
   },
   {
    "es": "Diseñé el producto completo desde cero para iOS y Android, trabajando en el concepto, la navegación, la experiencia de usuario y las interfaces.",
    "en": "I designed the whole product from scratch for iOS and Android, working on the concept, navigation, user experience and interfaces.",
    "fr": "J'ai conçu le produit complet de zéro pour iOS et Android, en travaillant sur le concept, la navigation, l'expérience utilisateur et les interfaces."
   },
   {
    "es": "El reto era convertir la participación diaria en una experiencia sencilla, atractiva y accesible, conectando a la comunidad con nuevos concursos y premios.",
    "en": "The challenge was to make daily participation simple, appealing and accessible, connecting the community with new contests and prizes.",
    "fr": "Le défi était de rendre la participation quotidienne simple, attrayante et accessible, en reliant la communauté à de nouveaux concours et lots."
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
     "es": "Diseño integral de producto · UX/UI · Diseño visual · iOS y Android",
     "en": "End-to-end product design · UX/UI · Visual design · iOS and Android",
     "fr": "Conception produit de bout en bout · UX/UI · Design visuel · iOS et Android"
    }
   },
   {
    "l": {
     "es": "Colaboración destacada",
     "en": "Featured collaboration",
     "fr": "Collaboration à retenir"
    },
    "v": {
     "es": "Jojol, creador de contenido tecnológico francés.",
     "en": "Jojol, French tech content creator.",
     "fr": "Jojol, créateur de contenu tech français."
    }
   },
   {
    "l": {
     "es": "Dato contextual",
     "en": "Context",
     "fr": "Pour situer"
    },
    "v": {
     "es": "2,7M+ suscriptores en el canal de YouTube de Jojol (2026). Es un dato sobre el creador, no sobre los usuarios de Appy.",
     "en": "2.7M+ subscribers on Jojol's YouTube channel (2026). This is a figure about the creator, not about Appy's users.",
     "fr": "2,7M+ abonnés sur la chaîne YouTube de Jojol (2026). C'est un chiffre sur le créateur, pas sur les utilisateurs d'Appy."
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
   }
  ],
  "media": [
   {
    "key": "mobile-experiences",
    "v": "3",
    "r": "1600/1200",
    "ph": true,
    "alt": {
     "es": "Pantallas de Appy para iOS y Android",
     "en": "Appy screens for iOS and Android",
     "fr": "Écrans d'Appy pour iOS et Android"
    }
   }
  ]
 },
 {
  "type": "chapter",
  "id": "mood",
  "layout": "wide",
  "h": {
   "es": "03 / Mood Messenger",
   "en": "03 / Mood Messenger",
   "fr": "03 / Mood Messenger"
  },
  "t": {
   "es": "Los mensajes de siempre. Otra experiencia.",
   "en": "The messages you know. A new experience.",
   "fr": "Les messages d'hier. Une autre expérience."
  },
  "p": [
   {
    "es": "Una aplicación de mensajería es parte de nuestra rutina. Precisamente por eso, cada detalle importa.",
    "en": "A messaging app is part of our daily routine. That is exactly why every detail matters.",
    "fr": "Une application de messagerie fait partie de notre quotidien. C'est précisément pour cela que chaque détail compte."
   },
   {
    "es": "Mood Messenger proponía una alternativa personalizable a la aplicación tradicional de SMS y MMS de Android.",
    "en": "Mood Messenger offered a customisable alternative to the traditional Android SMS and MMS app.",
    "fr": "Mood Messenger proposait une alternative personnalisable à l'application SMS et MMS traditionnelle d'Android."
   },
   {
    "es": "Participé en la evolución del producto, diseñando interfaces y trabajando en la estrategia y su relanzamiento.",
    "en": "I took part in the product's evolution, designing interfaces and working on its strategy and relaunch.",
    "fr": "J'ai participé à l'évolution du produit, en concevant des interfaces et en travaillant sur sa stratégie et sa relance."
   },
   {
    "es": "El desafío fue renovar la experiencia, mejorar su presentación y seguir construyendo sobre un producto que ya había encontrado su lugar entre millones de descargas.",
    "en": "The challenge was to renew the experience, improve how it was presented and keep building on a product that had already found its place among millions of downloads.",
    "fr": "Le défi était de renouveler l'expérience, d'améliorer sa présentation et de continuer à construire sur un produit qui avait déjà trouvé sa place parmi des millions de téléchargements."
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
     "es": "Evolución de producto · UI Design · Estrategia · Relanzamiento",
     "en": "Product evolution · UI design · Strategy · Relaunch",
     "fr": "Évolution du produit · UI design · Stratégie · Relance"
    }
   }
  ],
  "metric": {
   "n": {
    "es": "10M+",
    "en": "10M+",
    "fr": "10M+"
   },
   "l": {
    "es": "descargas históricas en todo el mundo",
    "en": "historical downloads worldwide",
    "fr": "téléchargements historiques dans le monde"
   },
   "note": {
    "es": "Cifra de la trayectoria global del producto según el comunicado de junio de 2020, no un resultado atribuible a mi trabajo.",
    "en": "Figure for the product's global history, per the June 2020 press release, not a result attributable to my work.",
    "fr": "Chiffre de la trajectoire globale du produit selon le communiqué de juin 2020, pas un résultat attribuable à mon travail."
   }
  },
  "links": [
   {
    "href": "https://cdn.nwe.io/files/x/79/f5/cadb7736c7ee1d815c25997aea20.pdf",
    "l": {
     "es": "Fuente de la métrica (comunicado oficial)",
     "en": "Source of the figure (official press release)",
     "fr": "Source du chiffre (communiqué officiel)"
    }
   },
   {
    "href": "https://www.sttinfo.fi/tiedote/69934335/calldorado-acquires-android-texting-app-mood-messenger?publisherId=58763726",
    "l": {
     "es": "Adquisición por Calldorado",
     "en": "Acquisition by Calldorado",
     "fr": "Rachat par Calldorado"
    }
   }
  ],
  "media": [
   {
    "key": "mobile-experiences",
    "v": "4",
    "r": "2400/1050",
    "ph": true,
    "alt": {
     "es": "Interfaz de mensajería de Mood Messenger",
     "en": "Mood Messenger messaging interface",
     "fr": "Interface de messagerie de Mood Messenger"
    }
   },
   {
    "key": "mobile-experiences",
    "v": "5",
    "r": "2400/1050",
    "ph": true,
    "alt": {
     "es": "Elementos de personalización y pantallas de Mood Messenger",
     "en": "Mood Messenger personalisation elements and screens",
     "fr": "Éléments de personnalisation et écrans de Mood Messenger"
    }
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
   "es": "Distintas ideas. Una misma forma de pensar.",
   "en": "Different ideas. One way of thinking.",
   "fr": "Des idées différentes. Une même façon de penser."
  },
  "p": [
   {
    "es": "Crear desde cero y hacer evolucionar un producto existente son retos muy diferentes. Ambos exigen entender a las personas, cuestionar decisiones y encontrar soluciones que tengan sentido.",
    "en": "Creating from scratch and evolving an existing product are very different challenges. Both require understanding people, questioning decisions and finding solutions that make sense.",
    "fr": "Créer de zéro et faire évoluer un produit existant sont des défis très différents. Les deux exigent de comprendre les gens, de remettre des décisions en question et de trouver des solutions qui ont du sens."
   },
   {
    "es": "Estos proyectos forman parte de mi recorrido y siguen influyendo en cómo abordo el diseño: con curiosidad, intención y atención a los detalles.",
    "en": "These projects are part of my path and still shape how I approach design: with curiosity, intention and attention to detail.",
    "fr": "Ces projets font partie de mon parcours et influencent encore ma façon d'aborder le design : avec curiosité, intention et sens du détail."
   },
   {
    "em": true,
    "es": "¿Tienes algo entre manos?",
    "en": "Got something in the works?",
    "fr": "Vous avez un projet en cours ?"
   },
   {
    "es": "Cuéntame tu idea.",
    "en": "Tell me your idea.",
    "fr": "Parlez-moi de votre idée."
   }
  ]
 }
];
HERO["mobile-experiences"] = {
 "tag": {
  "es": "Tres apps. Tres retos. Mucho más que pantallas.",
  "en": "Three apps. Three challenges. Far more than screens.",
  "fr": "Trois apps. Trois défis. Bien plus que des écrans."
 },
 "lead": {
  "es": "De diseñar productos desde cero a hacer evolucionar experiencias utilizadas por millones de personas. Tres proyectos móviles donde el diseño, la tecnología y la estrategia se encuentran.",
  "en": "From designing products from scratch to evolving experiences used by millions of people. Three mobile projects where design, technology and strategy meet.",
  "fr": "De la conception de produits de zéro à l'évolution d'expériences utilisées par des millions de personnes. Trois projets mobiles où design, technologie et stratégie se rencontrent."
 },
 "alt": {
  "es": "Composición de las tres aplicaciones móviles: Apolo Launcher, Appy y Mood Messenger",
  "en": "Composition of the three mobile apps: Apolo Launcher, Appy and Mood Messenger",
  "fr": "Composition des trois applications mobiles : Apolo Launcher, Appy et Mood Messenger"
 }
};
SEO.es.proj["mobile-experiences"] = {"t": "Mobile Experiences: Product Design y UX/UI | Tom Fabre", "d": "Tres aplicaciones móviles, tres retos de diseño. Descubre mi trabajo en Apolo Launcher, Appy × Jojol y Mood Messenger."};
SEO.en.proj["mobile-experiences"] = {"t": "Mobile Experiences: Product Design & UX/UI | Tom Fabre", "d": "Three mobile apps, three design challenges. Explore my work on Apolo Launcher, Appy × Jojol and Mood Messenger."};
SEO.fr.proj["mobile-experiences"] = {"t": "Mobile Experiences : Product Design & UX/UI | Tom Fabre", "d": "Trois applications mobiles, trois défis de design. Découvrez mon travail sur Apolo Launcher, Appy × Jojol et Mood Messenger."};
