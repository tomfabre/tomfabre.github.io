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
        es:"Contazara llevaba décadas innovando en tecnología para la medición del agua. Su identidad, sin embargo, necesitaba acompañar esa evolución.",
        en:"Contazara had been innovating in water-measurement technology for decades. Its identity, though, needed to keep pace with that evolution.",
        fr:"Depuis des décennies, Contazara innove dans les technologies de mesure de l'eau. Son identité, elle, devait accompagner cette évolution."
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
        es:"Llevamos la nueva identidad a la web, creando una experiencia más clara para explorar sus productos, comprender su tecnología y descubrir a las personas detrás de Contazara.",
        en:"We brought the new identity to the web, creating a clearer experience for exploring their products, understanding their technology, and meeting the people behind Contazara.",
        fr:"Nous avons porté la nouvelle identité sur le web, avec une expérience plus claire pour explorer les produits, comprendre la technologie et découvrir les personnes derrière Contazara."
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
        es:"Para las entrevistas y el proyecto web trabajé junto a Betsabé y Binōme Studio. En paralelo, 360estudio desarrolló la arquitectura y construcción de las nuevas oficinas, y colaboramos en aspectos del interiorismo.",
        en:"For the interviews and the web project I worked alongside Betsabé and Binōme Studio. In parallel, 360estudio designed and built the new offices, and we collaborated on aspects of the interior design.",
        fr:"Pour les entretiens et le projet web, j'ai travaillé avec Betsabé et Binōme Studio. En parallèle, 360estudio a conçu et construit les nouveaux bureaux, et nous avons collaboré sur certains aspects de l'aménagement intérieur."
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
