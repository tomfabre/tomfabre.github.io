/* Case-study sections + per-project SEO overrides (optional per project; validated by validate_sections.py at build).
   SECTIONS[projectKey] = [section, ...]. Every visible string is {es, en, fr}.
   Types today: "text" {id,h,t?,p[],img?} and "metrics" {id,h,t?,p?[],items[{n,l}],after?[]}.
   A paragraph is {es,en,fr} (+ em:true for a bold line). To add a type: validate_sections.py TYPES + SECTION_RENDER in c2.js.
   Projects without an entry keep the classic layout. */
const SECTIONS = {
  contazara: [
    { type:"text", id:"caso",
      h:{es:"Contazara", en:"Contazara", fr:"Contazara"},
      t:{es:"Cambiar de imagen. Sin perder quién eres.", en:"A new look. The same identity at heart.", fr:"Changer d'image. Sans perdre son identité."},
      p:[{
        es:"¿Cómo renuevas la identidad de una empresa después de cuatro décadas sin perder todo lo que la hace reconocible? Con conversaciones, ideas compartidas y muchas ganas de hacer las cosas bien. Así empezó una nueva etapa para Contazara.",
        en:"How do you refresh a brand after more than four decades without losing what makes it familiar? By listening, bringing people into the process, and building something that feels right. That's how a new chapter began for Contazara.",
        fr:"Comment faire évoluer l'identité d'une entreprise après plus de quarante ans, sans perdre ce qui fait sa singularité ? En prenant le temps d'écouter, d'échanger et de construire ensemble. C'est comme ça qu'un nouveau chapitre a commencé pour Contazara."
      }] },

    { type:"text", id:"reto",
      h:{es:"El reto", en:"The challenge", fr:"Le défi"},
      t:{es:"40 años de historia. Y muchas cosas que cuidar.", en:"40 years of history. A lot worth keeping.", fr:"40 ans d'histoire. Et beaucoup à préserver."},
      p:[{
        es:"Contazara llevaba décadas innovando en tecnología para la medición del agua. Sin embargo, su identidad necesitaba evolucionar para acompañar lo que la empresa era hoy y hacia dónde quería ir.",
        en:"For decades, Contazara had been pushing water measurement technology forward. But its visual identity needed to catch up with the company it had become and the direction it was heading.",
        fr:"Depuis des décennies, Contazara fait avancer les technologies de mesure de l'eau. Mais son identité visuelle devait évoluer pour mieux refléter l'entreprise d'aujourd'hui et ses ambitions pour demain."
      },{
        es:"El reto no era solo visual. Había recuerdos, costumbres y una forma de reconocerse en aquella marca. Cambiarla generaba dudas, tanto dentro como fuera de la empresa. Y era completamente comprensible.",
        en:"The challenge went beyond design. The existing brand carried memories, habits, and a strong sense of belonging. Changing it naturally raised questions, both inside and outside the company.",
        fr:"Le défi allait bien au-delà du design. L'ancienne identité faisait partie du quotidien. Elle portait des habitudes, des souvenirs et un véritable sentiment d'appartenance. La faire évoluer soulevait forcément des questions, en interne comme à l'extérieur."
      },{
        es:"No se trataba de borrar su historia, sino de encontrar una nueva manera de contarla.",
        en:"The goal wasn't to erase its history. It was to find a better way to tell it.",
        fr:"L'idée n'était pas d'effacer son histoire. Mais de trouver une nouvelle manière de la raconter."
      }] },

    { type:"text", id:"proceso",
      h:{es:"El proceso", en:"The process", fr:"La démarche"},
      t:{es:"Antes de diseñar, había que escuchar.", en:"Good design starts with listening.", fr:"Avant de dessiner, il fallait écouter."},
      p:[{
        es:"Empezamos hablando. Con dirección, con los equipos y con las personas que conocen Contazara desde dentro.",
        en:"We started with conversations. With leadership, with teams, and with the people who knew Contazara best.",
        fr:"Nous avons commencé par échanger. Avec la direction, les équipes et les personnes qui connaissent le mieux Contazara."
      },{
        es:"Escuchar, observar, compartir ideas, probar y volver a conversar. El objetivo era entender qué debía cambiar, qué merecía quedarse y qué hacía que Contazara fuera Contazara.",
        en:"We listened, observed, explored ideas, tested directions, and kept talking. The aim was to understand what needed to evolve, what deserved to stay, and what truly made Contazara itself.",
        fr:"Écouter, observer, partager des idées, explorer des pistes, puis en discuter à nouveau. L'objectif était de comprendre ce qui devait changer, ce qui méritait de rester et ce qui faisait vraiment l'identité de Contazara."
      },{
        es:"El equipo participó en el proceso y pudo conocer cómo iba tomando forma la nueva identidad. Porque una marca funciona mucho mejor cuando las personas que conviven con ella también se reconocen en el resultado.",
        en:"Employees were involved throughout the process, getting to see and contribute to the identity as it took shape. Because a brand means more when the people behind it can see themselves in it.",
        fr:"Les collaborateurs ont participé à la démarche et ont pu voir la nouvelle identité prendre forme. Parce qu'une marque prend tout son sens quand celles et ceux qui la font vivre se reconnaissent en elle."
      }] },

    { type:"text", id:"identidad",
      h:{es:"Identidad", en:"The identity", fr:"L'identité"},
      t:{es:"Más que un nuevo logo. Todo un lenguaje.", en:"More than a new logo. A visual language.", fr:"Bien plus qu'un nouveau logo. Tout un langage visuel."},
      p:[{
        es:"La nueva identidad nació de una idea sencilla: representar mejor lo que Contazara ya era.",
        en:"The new identity started with a simple idea: better express what Contazara already stood for.",
        fr:"La nouvelle identité est née d'une idée simple : mieux exprimer ce que Contazara était déjà."
      },{
        es:"El símbolo combina las letras C y Z en una construcción geométrica que habla de precisión, tecnología y movimiento. A partir de ahí, desarrollamos un sistema visual con sus propias reglas, tipografías, colores y aplicaciones.",
        en:"The symbol brings the letters C and Z together through a geometric construction inspired by precision, technology, and movement. From there, we built a complete visual system, with its own typography, colour palette, rules, and applications.",
        fr:"Le symbole réunit les lettres C et Z dans une construction géométrique qui évoque la précision, la technologie et le mouvement. À partir de là, nous avons développé un véritable système visuel, avec ses typographies, ses couleurs, ses règles et ses applications."
      },{
        es:"El azul mantiene ese vínculo con la tecnología y la confianza. El amarillo introduce energía. Y juntos dan vida a un lenguaje gráfico reconocible, flexible y preparado para convivir en muchos formatos.",
        en:"Blue carries the sense of technology and trust. Yellow brings energy. Together, they create a recognisable, flexible identity that works across different formats.",
        fr:"Le bleu conserve le lien avec la technologie et la confiance. Le jaune apporte de l'énergie. Ensemble, ils donnent vie à une identité reconnaissable, souple et adaptée à de nombreux supports."
      },{
        es:"Pero lo más importante no está en el manual de marca. Está en que las personas de Contazara participaron en el cambio, lo vieron crecer y hoy lo sienten suyo.",
        en:"But the most important part isn't in the brand guidelines. It's the fact that Contazara's people helped shape the change, watched it evolve, and now feel that it belongs to them.",
        fr:"Mais le plus important ne se trouve pas dans la charte graphique. Il se trouve dans la façon dont les équipes ont participé au changement, l'ont vu prendre forme et se sont approprié le résultat."
      },{
        em:true,
        es:"No cambiamos su esencia. Le dimos nuevas formas de expresarse.",
        en:"We didn't change who they were. We gave them new ways to express it.",
        fr:"Nous n'avons pas changé leur essence. Nous lui avons donné de nouvelles façons de s'exprimer."
      }] },

    { type:"text", id:"web",
      h:{es:"Web", en:"The website", fr:"Le site web"},
      t:{es:"Una nueva imagen merecía una nueva experiencia.", en:"A new identity deserved a better digital experience.", fr:"Une nouvelle identité méritait une nouvelle expérience."},
      p:[{
        es:"La web tenía que acompañar el cambio.",
        en:"The website needed to move forward too.",
        fr:"Le site devait lui aussi évoluer."
      },{
        es:"Trabajamos en una experiencia digital más clara y actual, pensada para que la tecnología de Contazara sea más fácil de explorar y comprender, sin perder el rigor de su información técnica.",
        en:"We designed a clearer, more contemporary experience that makes Contazara's technology easier to explore and understand, without losing the rigour of its technical information.",
        fr:"Nous avons imaginé une expérience digitale plus claire et plus actuelle, pour que la technologie de Contazara soit plus facile à explorer et à comprendre, sans rien perdre de la rigueur de ses informations techniques."
      },{
        es:"Desde la arquitectura de la información y los contenidos hasta la experiencia completa, todo se ordenó en torno a la nueva identidad.",
        en:"From information architecture and content to the overall digital experience, everything was brought together around the new identity.",
        fr:"De l'architecture de l'information aux contenus et aux parcours, tout a été repensé autour de la nouvelle identité."
      },{
        es:"Un lugar donde descubrir sus soluciones, comprender mejor lo que hacen y acercarse a las personas que están detrás.",
        en:"A place to discover solutions, understand the business, and connect with the people behind the technology.",
        fr:"Un espace pour découvrir les solutions, mieux comprendre l'entreprise et rencontrer les personnes derrière la technologie."
      }] },

    { type:"text", id:"comunicacion",
      h:{es:"Comunicación", en:"Digital communications", fr:"Communication digitale"},
      t:{es:"Una marca también se construye conversando.", en:"A brand grows through conversations, too.", fr:"Une marque se construit aussi dans la conversation."},
      p:[{
        es:"Una identidad no termina cuando se entrega el logo. Empieza a vivir cuando la marca tiene algo que contar.",
        en:"A brand identity doesn't end with a logo. It starts living when the brand has something worth saying.",
        fr:"Une identité ne s'arrête pas à la livraison d'un logo. Elle commence à vivre lorsque la marque a quelque chose à raconter."
      },{
        es:"Trabajé la voz de Contazara para hacer su comunicación más clara, cercana y reconocible. Una manera de hablar que pudiera conectar la precisión técnica de sus productos con las personas que los utilizan y con los retos del agua.",
        en:"I worked on Contazara's tone of voice to make its communications clearer, more approachable, and more recognisable: a way of speaking that connects the technical precision of its products with the people who use them and the challenges around water.",
        fr:"J'ai travaillé le ton de Contazara pour rendre sa communication plus claire, plus accessible et plus reconnaissable : une façon de s'exprimer qui relie la précision technique de ses produits aux personnes qui les utilisent et aux enjeux de l'eau."
      },{
        es:"En LinkedIn e Instagram desarrollamos una línea editorial que combina tecnología, innovación, sostenibilidad, datos, actualidad, eventos y personas.",
        en:"Across LinkedIn and Instagram, we developed an editorial approach combining technology, innovation, sustainability, industry insights, events, and people.",
        fr:"Sur LinkedIn et Instagram, nous avons développé une ligne éditoriale qui mêle technologie, innovation, développement durable, données, actualité, événements et vie de l'entreprise."
      },{
        es:"No se trata solo de publicar más. Se trata de tener algo interesante que decir y saber cómo contarlo. De explicar qué hay detrás de sus soluciones, generar conversación y acercar la marca a profesionales, empresas e instituciones.",
        en:"It wasn't about publishing more for the sake of it. It was about sharing useful knowledge, telling better stories, and creating conversations with professionals, companies, and institutions.",
        fr:"L'objectif n'était pas de publier davantage pour publier. Il s'agissait de partager des connaissances, de raconter des histoires intéressantes et de créer des échanges avec des professionnels, des entreprises et des institutions."
      },{
        em:true,
        es:"Menos publicaciones por publicar. Más historias que vale la pena compartir.",
        en:"Less content for the sake of content. More stories worth sharing.",
        fr:"Moins de contenus pour remplir un calendrier. Plus d'histoires qui méritent d'être partagées."
      }] },

    { type:"metrics", id:"resultados",
      h:{es:"Resultados", en:"The results", fr:"Les résultats"},
      t:{es:"El cambio se ve. Y también se siente.", en:"A change you can see. And feel.", fr:"Un changement qui se voit. Et qui se ressent."},
      p:[{
        es:"El proyecto empezó con muchas preguntas. Hoy, Contazara tiene una identidad que acompaña su nueva etapa y con la que su equipo se siente identificado.",
        en:"The project started with questions and uncertainty. Today, Contazara has a brand identity that reflects its next chapter and feels genuinely connected to its people.",
        fr:"Le projet a commencé avec beaucoup de questions. Aujourd'hui, Contazara possède une identité qui accompagne sa nouvelle étape et dans laquelle ses équipes se reconnaissent."
      },{
        es:"El cambio pasó de un nuevo logo a un ecosistema visual completo: comunicación corporativa, materiales, presentaciones, web y redes sociales. Y, durante ese periodo, sus comunidades digitales también han crecido.",
        en:"What began as a new logo became a complete visual ecosystem, extending across corporate communications, presentations, the website, and social media. And, over that period, its digital communities have grown too.",
        fr:"Ce qui avait commencé par un nouveau logo est devenu un écosystème visuel complet : communication institutionnelle, supports, présentations, site web et réseaux sociaux. Et, sur cette période, ses communautés digitales ont elles aussi grandi."
      }],
      items:[
        { n:{es:"+77,2 %", en:"+77.2%", fr:"+77,2 %"},
          l:{es:"seguidores en LinkedIn · de\u00a0930\u00a0a\u00a01.648", en:"followers on LinkedIn · from\u00a0930\u00a0to\u00a01,648", fr:"abonnés sur LinkedIn · de\u00a0930\u00a0à\u00a01\u202f648"} },
        { n:{es:"+46 %", en:"+46%", fr:"+46 %"},
          l:{es:"seguidores en Instagram · de\u00a0250\u00a0a\u00a0365", en:"followers on Instagram · from\u00a0250\u00a0to\u00a0365", fr:"abonnés sur Instagram · de\u00a0250\u00a0à\u00a0365"} }
      ],
      after:[{
        es:"Crecimiento de seguidores observado entre septiembre de 2025, cuando se estrenó la nueva identidad, y el 13 de noviembre de 2026. No se atribuye solo al rebranding: en él influye todo el trabajo de comunicación digital de ese periodo.",
        en:"Follower growth observed between September 2025, when the new identity launched, and 13 November 2026. It isn't credited to the rebrand alone: all of the digital communications work over that period played a part.",
        fr:"Croissance d'abonnés observée entre septembre 2025, date de lancement de la nouvelle identité, et le 13 novembre 2026. Elle n'est pas attribuée au seul changement d'identité : tout le travail de communication digitale de la période y a contribué."
      },{
        es:"Los contenidos también han ayudado a abrir conversaciones y generar nuevas conexiones con profesionales, medios, empresas e instituciones relacionadas con el sector.",
        en:"The content has also helped create new conversations and professional connections with industry stakeholders, businesses, media, and institutions.",
        fr:"Les contenus ont également contribué à ouvrir de nouvelles conversations et à créer des liens avec des professionnels, des médias, des entreprises et des institutions du secteur."
      },{
        es:"Pero hay un resultado que no cabe en una gráfica: ver cómo las personas que al principio tenían dudas hoy reconocen la nueva identidad como algo propio.",
        en:"But there's another result that doesn't fit neatly into a chart: seeing the people who were initially unsure about the change now embrace the identity as their own.",
        fr:"Mais il y a aussi un résultat qui ne se mesure pas en chiffres : voir les personnes qui hésitaient au départ s'approprier aujourd'hui cette nouvelle identité."
      },{
        em:true,
        es:"Porque el mejor cambio no es el que más se nota. Es el que las personas hacen suyo.",
        en:"Because the best change isn't just the one people notice. It's the one they make their own.",
        fr:"Parce que le plus beau changement n'est pas seulement celui qui se voit. C'est celui qu'on s'approprie."
      }] },

    { type:"text", id:"papel",
      h:{es:"Papel y colaboradores", en:"Role and collaborators", fr:"Rôle et collaborateurs"},
      t:{es:"De la primera conversación al último detalle.", en:"From the first conversation to the final details.", fr:"Des premiers échanges aux derniers détails."},
      p:[{
        es:"Me involucré en todo el recorrido: desde las primeras reuniones con dirección para entender sus inquietudes, pasando por la escucha, la investigación y la definición de la nueva identidad, hasta la dirección creativa, el tono de voz y el copy, el proyecto web y la comunicación digital.",
        en:"I was involved throughout the journey: from the early meetings with leadership to understand their concerns, through listening, research and defining the new identity, to creative direction, tone of voice and copy, the website project and digital communications.",
        fr:"J'ai accompagné le projet de bout en bout : des premières réunions avec la direction, pour comprendre ses préoccupations, à l'écoute, la recherche et la définition de la nouvelle identité, jusqu'à la direction créative, le ton et les textes, le projet web et la communication digitale."
      },{
        es:"Binōme Studio y Betsabé, mi compañera y binōme profesional, colaboraron en las entrevistas con los equipos, en el diseño y desarrollo web y con apoyo creativo durante el proyecto. Una colaboración en la que combinamos nuestras formas de pensar y trabajar.",
        en:"Binōme Studio and Betsabé, my creative partner and professional other half, worked with me on the employee interviews and on web design and development, with creative support throughout the project. A collaboration where we combined our ways of thinking and working.",
        fr:"Binōme Studio et Betsabé, ma partenaire créative et mon binôme professionnel, ont collaboré aux entretiens avec les équipes et au design et développement web, avec un appui créatif tout au long du projet. Une collaboration où nous avons uni nos façons de penser et de travailler."
      },{
        es:"En paralelo, 360estudio se encargó del proyecto arquitectónico y la construcción de las nuevas oficinas. También colaboramos en aspectos del diseño interior para que la nueva identidad encontrara su lugar en los espacios de la empresa.",
        en:"In parallel, 360estudio led the architectural design and construction of Contazara's new offices. We also collaborated on aspects of the interior design, helping the identity find its place within the company's physical spaces.",
        fr:"En parallèle, 360estudio a pris en charge la conception architecturale et la construction des nouveaux bureaux de Contazara. Nous avons également collaboré sur certains aspects de l'aménagement intérieur pour intégrer la nouvelle identité dans les espaces de l'entreprise."
      },{
        es:"Al final, no se trataba de hacer muchas cosas por separado. Se trataba de conseguir que todas hablaran el mismo idioma.",
        en:"The goal was never to create a collection of disconnected pieces. It was to make everything feel like part of the same story.",
        fr:"L'idée n'était pas de créer une série d'éléments indépendants, mais de faire en sorte que tout raconte la même histoire."
      }] },

    { type:"text", id:"cierre",
      h:{es:"Cierre", en:"Closing", fr:"Conclusion"},
      t:{es:"Una nueva identidad. La misma esencia.", en:"A new identity. The same essence.", fr:"Une nouvelle identité. La même essence."},
      p:[{
        es:"Contazara no necesitaba convertirse en otra empresa. Necesitaba una identidad capaz de contar mejor quién es hoy, todo lo que ha conseguido y lo que todavía tiene por delante. Y, sobre todo, una marca en la que su gente pudiera seguir reconociéndose.",
        en:"Contazara didn't need to become a different company. It needed a brand that could better express who it is today, what it has achieved, and where it's going next. And, most importantly, something its people could truly call their own.",
        fr:"Contazara n'avait pas besoin de devenir une autre entreprise. Elle avait besoin d'une identité capable de mieux raconter ce qu'elle est aujourd'hui, ce qu'elle a construit et ce qu'il lui reste à accomplir. Et surtout, d'une marque dans laquelle ses équipes puissent continuer à se reconnaître."
      },{
        em:true,
        es:"¿Tu marca también está lista para su próxima etapa?",
        en:"Is your brand ready for its next chapter?",
        fr:"Votre marque est prête pour sa prochaine étape ?"
      },{
        es:"Hablemos de lo que tienes en mente.",
        en:"Let's talk about what's on your mind.",
        fr:"Parlons de ce que vous avez en tête."
      }] }
  ]
};

/* Per-project title/description (override the generic "name · Tom Fabre · category" pattern). Read by build.py and c3.js. */
SEO.es.proj = { contazara: {
  t:"Contazara: Rebranding, Web y Redes Sociales · Tom Fabre",
  d:"Rebranding, diseño web y comunicación digital para Contazara. Descubre cómo evolucionamos una identidad de 40 años junto a su equipo." } };
SEO.en.proj = { contazara: {
  t:"Contazara: Brand Identity, Web Design & Social · Tom Fabre",
  d:"Brand identity, website and digital communications for Contazara. Discover how we helped evolve a 40-year-old brand with its people." } };
SEO.fr.proj = { contazara: {
  t:"Contazara : Identité de marque, Web & Réseaux · Tom Fabre",
  d:"Identité visuelle, site web et communication digitale pour Contazara. Découvrez comment nous avons fait évoluer une marque de 40 ans avec ses équipes." } };
