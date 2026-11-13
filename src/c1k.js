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
        es:"Lideré el trabajo de identidad, tono de marca y comunicación digital, desde las primeras reuniones con dirección hasta su aplicación en distintos canales.",
        en:"I led the identity, brand voice, and digital communication work, from the first meetings with management through to its application across different channels.",
        fr:"J'ai piloté le travail d'identité, de ton de marque et de communication digitale, des premières réunions avec la direction jusqu'à son application sur différents canaux."
      },{
        es:"Para las entrevistas y el proyecto web trabajé junto a Betsabé y {binome}. En paralelo, {estudio360} desarrolló la arquitectura y construcción de las nuevas oficinas, y colaboramos en aspectos del interiorismo.",
        en:"For the interviews and the web project I worked alongside Betsabé and {binome}. In parallel, {estudio360} designed and built the new offices, and we collaborated on aspects of the interior design.",
        fr:"Pour les entretiens et le projet web, j'ai travaillé avec Betsabé et {binome}. En parallèle, {estudio360} a conçu et construit les nouveaux bureaux, et nous avons collaboré sur certains aspects de l'aménagement intérieur.",
        links:{
          binome:{ href:"https://binome.xyz/", t:{es:"Binōme Studio", en:"Binōme Studio", fr:"Binōme Studio"} },
          estudio360:{ href:"https://www.360estudio.io/", t:{es:"360estudio", en:"360estudio", fr:"360estudio"} } }
      },{ em:true,
        es:"Diferentes disciplinas. Una misma dirección.",
        en:"Different disciplines. One shared direction.",
        fr:"Des disciplines différentes. Une même direction."
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
