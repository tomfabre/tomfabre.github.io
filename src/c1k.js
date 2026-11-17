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
   "en": "A new look. The same identity at heart.",
   "fr": "Changer d'image. Sans perdre son identité."
  },
  "p": [
   {
    "langs": [
     "es"
    ],
    "es": "Renovar una marca con tanta historia no es simplemente cambiar su aspecto."
   },
   {
    "langs": [
     "es"
    ],
    "es": "Había que entender qué representaba Contazara para las personas que llevan años formando parte de ella, qué había cambiado en la empresa y cómo reflejar esa evolución."
   },
   {
    "langs": [
     "es"
    ],
    "es": "La idea era darle una nueva imagen sin perder todo lo que ya la hacía reconocible."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "en": "How do you refresh a company's identity after 40 years without losing what makes it unique? By listening, sharing ideas, and building the change together with the people who are part of it.",
    "fr": "Comment renouveler l'identité d'une entreprise après 40 ans sans perdre ce qui la rend unique ? En écoutant, en partageant des idées et en construisant le changement avec les personnes qui la font vivre."
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
   "en": "40 years of history. A lot worth keeping.",
   "fr": "40 ans d'histoire. Et beaucoup à préserver."
  },
  "p": [
   {
    "langs": [
     "es"
    ],
    "es": "Contazara lleva décadas desarrollando tecnología para la medición y gestión del agua. Durante ese tiempo, sus productos y su manera de trabajar han evolucionado."
   },
   {
    "langs": [
     "es"
    ],
    "es": "Su identidad visual necesitaba acompañar ese cambio."
   },
   {
    "langs": [
     "es"
    ],
    "es": "Pero había algo importante: no queríamos romper con su historia ni dejar atrás aquello con lo que sus equipos se identificaban."
   },
   {
    "langs": [
     "es"
    ],
    "es": "El reto era encontrar un equilibrio entre lo que Contazara había sido y lo que quería ser."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "en": "Contazara had been innovating in water-measurement technology for decades. Its identity, though, needed to keep pace with that evolution. You can see the result on {web}.",
    "fr": "Depuis des décennies, Contazara innove dans les technologies de mesure de l'eau. Son identité, elle, devait accompagner cette évolution. Vous pouvez voir le résultat sur {web}.",
    "links": {
     "web": {
      "href": "https://www.contazara.es/",
      "t": {
       "es": "la web de Contazara",
       "en": "Contazara's website",
       "fr": "le site web de Contazara"
      }
     }
    }
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "en": "Changing a brand so present in a company's history wasn't a simple decision. There were doubts, memories, and a lot to respect.",
    "fr": "Changer une marque aussi présente dans l'histoire d'une entreprise n'avait rien d'évident. Il y avait des doutes, des souvenirs et beaucoup à respecter."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "em": true,
    "en": "The challenge wasn't starting from scratch. It was evolving without ceasing to be Contazara.",
    "fr": "Le défi n'était pas de repartir de zéro. C'était d'évoluer sans cesser d'être Contazara."
   }
  ]
 },
 {
  "type": "text",
  "id": "proceso",
  "h": {
   "es": "02 · El proceso y la identidad",
   "en": "02 · Process and identity",
   "fr": "02 · La démarche et l'identité"
  },
  "t": {
   "es": "Antes de cambiar nada, había que escuchar.",
   "en": "Before designing, we had to listen.",
   "fr": "Avant de dessiner, il fallait écouter."
  },
  "p": [
   {
    "langs": [
     "es"
    ],
    "es": "Empezamos hablando con la dirección y con diferentes equipos de Contazara."
   },
   {
    "langs": [
     "es"
    ],
    "es": "Queríamos conocer sus puntos de vista, entender qué funcionaba, qué necesitaba cambiar y qué elementos de la marca merecía la pena conservar."
   },
   {
    "langs": [
     "es"
    ],
    "es": "Con todo eso sobre la mesa, empezamos a explorar una nueva dirección visual."
   },
   {
    "langs": [
     "es"
    ],
    "es": "El resultado fue una identidad construida alrededor de un símbolo que combina las letras C y Z, utilizando geometría, precisión y movimiento como parte de su lenguaje gráfico."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "en": "We started by talking with management and the teams. We wanted to understand what had to change, what deserved to stay, and how to make everyone feel part of the process.",
    "fr": "Nous avons commencé par échanger avec la direction et les équipes. Nous voulions comprendre ce qui devait changer, ce qui méritait de rester et comment faire en sorte que chacun se sente partie prenante."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "en": "A new identity came out of it, built around a symbol that joins the C and the Z through geometry, precision, and movement.",
    "fr": "Une nouvelle identité en est née, construite autour d'un symbole qui unit le C et le Z par la géométrie, la précision et le mouvement."
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
      "langs": [
       "es"
      ],
      "es": "Pero no queríamos quedarnos en un logotipo."
     },
     {
      "langs": [
       "es"
      ],
      "es": "Desarrollamos un sistema visual con sus propios colores, tipografías y aplicaciones, pensado para funcionar en distintos formatos y acompañar a la empresa durante esta nueva etapa."
     },
     {
      "langs": [
       "es"
      ],
      "es": "Una identidad renovada que los equipos también pudieran reconocer como suya."
     },
     {
      "langs": [
       "en",
       "fr"
      ],
      "en": "But the result was much more than a logo: a visual language with its own rules, colours, typefaces, and applications.",
      "fr": "Mais le résultat dépasse largement le logo : un langage visuel avec ses propres règles, couleurs, typographies et applications."
     },
     {
      "langs": [
       "en",
       "fr"
      ],
      "em": true,
      "en": "An identity that doesn't just represent them. They feel it's theirs.",
      "fr": "Une identité qui ne fait pas que les représenter. Ils se la sont appropriée."
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
   "en": "03 · Web and communication",
   "fr": "03 · Web et communication"
  },
  "t": {
   "es": "Una nueva imagen también necesita una nueva forma de contar las cosas.",
   "en": "A brand that works on and off the screen.",
   "fr": "Une marque qui vit dans et hors de l'écran."
  },
  "p": [
   {
    "langs": [
     "es"
    ],
    "es": "Una vez definida la identidad, tocaba llevarla a los lugares donde las personas se encuentran con Contazara."
   },
   {
    "langs": [
     "es"
    ],
    "es": "Uno de los principales fue {web}.",
    "links": {
     "web": {
      "href": "https://www.contazara.es/",
      "t": {
       "es": "su web",
       "en": "Contazara's website",
       "fr": "le site web de Contazara"
      }
     }
    }
   },
   {
    "langs": [
     "es"
    ],
    "es": "Trabajamos en su diseño y desarrollo para organizar mejor la información, facilitar la exploración de sus productos y explicar su tecnología de una manera más clara y accesible."
   },
   {
    "langs": [
     "es"
    ],
    "es": "También queríamos dar espacio a las personas y a la historia que hay detrás de la empresa."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "en": "We brought the new identity to {web}, creating a clearer experience for exploring its products, understanding its technology, and meeting the people behind the company.",
    "fr": "Nous avons porté la nouvelle identité sur {web}, avec une expérience plus claire pour explorer ses produits, comprendre sa technologie et découvrir les personnes derrière l'entreprise.",
    "links": {
     "web": {
      "href": "https://www.contazara.es/",
      "t": {
       "es": "la web de Contazara",
       "en": "Contazara's website",
       "fr": "le site web de Contazara"
      }
     }
    }
   }
  ],
  "flow": [
   {
    "p": [
     {
      "langs": [
       "es"
      ],
      "es": "En paralelo, desarrollamos su tono de voz y una línea de contenidos para LinkedIn e Instagram."
     },
     {
      "langs": [
       "es"
      ],
      "es": "Tecnología, sostenibilidad, actualidad y personas empezaron a convivir dentro de una comunicación más coherente con la nueva identidad."
     },
     {
      "langs": [
       "en",
       "fr"
      ],
      "en": "We also developed their tone of voice and an editorial line for LinkedIn and Instagram, combining innovation, sustainability, data, current affairs, and people.",
      "fr": "Nous avons aussi développé leur ton de voix et une ligne éditoriale pour LinkedIn et Instagram, mêlant innovation, durabilité, données, actualité et humain."
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
      "langs": [
       "es"
      ],
      "es": "El objetivo era que Contazara se reconociera igual en su web, en una publicación o en cualquier otro punto de contacto."
     },
     {
      "langs": [
       "en",
       "fr"
      ],
      "em": true,
      "en": "Because a brand isn't built only with what it shows. Also with what it tells.",
      "fr": "Car une marque ne se construit pas seulement avec ce qu'elle montre. Mais aussi avec ce qu'elle raconte."
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
   "fr": "04 · Résultats"
  },
  "t": {
   "es": "Una identidad que ya forma parte del día a día.",
   "en": "The change shows. And it's felt.",
   "fr": "Le changement se voit. Et se ressent."
  },
  "p": [
   {
    "langs": [
     "es"
    ],
    "es": "Lo más interesante de este proyecto es ver cómo la nueva identidad ha empezado a formar parte de la empresa."
   },
   {
    "langs": [
     "es"
    ],
    "es": "Hoy está presente en su web, sus materiales corporativos, sus comunicaciones y sus oficinas."
   },
   {
    "langs": [
     "es"
    ],
    "es": "También hemos visto evolucionar su presencia en redes sociales durante el periodo de trabajo."
   }
  ],
  "items": [
   {
    "n": {
     "es": "+77,2 %",
     "en": "+77.2%",
     "fr": "+77,2 %"
    },
    "l": {
     "es": "Seguidores en LinkedIn",
     "en": "LinkedIn followers",
     "fr": "abonnés sur LinkedIn"
    }
   },
   {
    "n": {
     "es": "+46 %",
     "en": "+46%",
     "fr": "+46 %"
    },
    "l": {
     "es": "Seguidores en Instagram",
     "en": "Instagram followers",
     "fr": "abonnés sur Instagram"
    }
   }
  ],
  "after": [
   {
    "langs": [
     "es"
    ],
    "es": "Entre septiembre de 2025 y noviembre de 2026, la comunidad de LinkedIn pasó de 930 a 1.648 seguidores, mientras que Instagram pasó de 250 a 365."
   },
   {
    "langs": [
     "es"
    ],
    "es": "Son cifras de crecimiento de audiencia durante este periodo, no resultados atribuibles únicamente al cambio de identidad."
   },
   {
    "langs": [
     "es"
    ],
    "es": "Más allá de los números, hay algo que me parece especialmente importante: ver que los equipos utilizan la nueva marca en su trabajo diario."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "en": "Between September 2025 and November 2026, Contazara went from 930 to 1,648 followers on LinkedIn and from 250 to 365 on Instagram.",
    "fr": "Entre septembre 2025 et novembre 2026, Contazara est passée de 930 à 1 648 abonnés sur LinkedIn et de 250 à 365 sur Instagram."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "en": "The new identity is now in the company's communication, corporate materials, website and offices. The Contazara teams use it every day.",
    "fr": "La nouvelle identité est déjà présente dans la communication, les supports corporate, le site web et les bureaux de l'entreprise. Les équipes de Contazara l'utilisent au quotidien."
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
   "en": "05 · Teamwork",
   "fr": "05 · Un travail d'équipe"
  },
  "t": {
   "es": "Muchas conversaciones. Una dirección compartida.",
   "en": "From the first conversation to the last detail.",
   "fr": "De la première conversation au dernier détail."
  },
  "p": [
   {
    "langs": [
     "es"
    ],
    "es": "Mi trabajo fue liderar la evolución de la identidad visual, la personalidad de marca y su comunicación digital."
   },
   {
    "langs": [
     "es"
    ],
    "es": "Desde las primeras conversaciones con la dirección hasta el desarrollo del nuevo lenguaje gráfico y sus aplicaciones, el proyecto fue tomando forma junto a las personas de Contazara."
   },
   {
    "langs": [
     "es"
    ],
    "es": "Para las entrevistas con los equipos y el diseño y desarrollo web, trabajé con {binome}, del que soy cofundador.",
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
    "langs": [
     "es"
    ],
    "es": "También colaboramos con {estudio360}, responsable de la arquitectura y construcción de las nuevas oficinas, para integrar la identidad en los espacios físicos.",
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
    "langs": [
     "es"
    ],
    "es": "Fue un proyecto en el que participaron personas de distintas disciplinas, con muchas decisiones compartidas por el camino."
   },
   {
    "langs": [
     "es"
    ],
    "es": "Y creo que eso también forma parte del resultado."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "en": "I led the evolution of Contazara's visual identity, brand personality and digital communication. The work began by listening to the concerns of its management team and took shape at every touchpoint of the brand.",
    "fr": "J'ai piloté l'évolution de l'identité visuelle, de la personnalité de marque et de la communication digitale de Contazara. Un travail qui a commencé par l'écoute des préoccupations de sa direction et qui a pris forme à chaque point de contact de la marque."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "en": "For the team interviews and the web design and development I had the collaboration of {binome}. In parallel, {estudio360} took care of the architecture and construction of the new offices, where we also worked together to bring the new identity into the spaces.",
    "fr": "Pour les entretiens avec les équipes et la conception et le développement web, j'ai pu compter sur la collaboration de {binome}. En parallèle, {estudio360} s'est chargé de l'architecture et de la construction des nouveaux bureaux, où nous avons aussi travaillé ensemble pour intégrer la nouvelle identité dans les espaces.",
    "links": {
     "binome": {
      "href": "https://binome.xyz/",
      "t": {
       "es": "Binōme Studio",
       "en": "Binōme Studio",
       "fr": "Binōme Studio"
      }
     },
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
    "langs": [
     "en",
     "fr"
    ],
    "em": true,
    "en": "Different disciplines. One shared vision.",
    "fr": "Des disciplines différentes. Une même vision."
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
   "en": "A new identity. The same essence.",
   "fr": "Une nouvelle identité. La même essence."
  },
  "p": [
   {
    "langs": [
     "es"
    ],
    "es": "Cambiar una marca con tanta historia requería entender qué debía evolucionar y qué merecía quedarse."
   },
   {
    "langs": [
     "es"
    ],
    "es": "Hoy Contazara tiene una identidad que refleja mejor su presente, respeta su recorrido y puede acompañarla en lo que viene."
   },
   {
    "langs": [
     "es"
    ],
    "em": true,
    "es": "¿Tu marca también está cambiando? Hablemos."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "en": "It was never about changing who they were, but about finding a new way to tell it.",
    "fr": "Il ne s'agissait pas de changer ce qu'ils étaient, mais de trouver une nouvelle façon de le raconter."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "em": true,
    "en": "Is your brand ready for its next chapter? Let's talk.",
    "fr": "Votre marque est-elle prête pour sa prochaine étape ? Parlons-en."
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
   "en": "Different people. One connected experience.",
   "fr": "Plusieurs acteurs. Une seule expérience."
  },
  "p": [
   {
    "langs": [
     "es"
    ],
    "es": "Un espectador quiere descubrir conciertos. Un artista busca nuevos lugares donde actuar. Una sala necesita llenar su programación."
   },
   {
    "langs": [
     "es"
    ],
    "es": "Los tres tienen algo en común, pero necesitan herramientas muy diferentes."
   },
   {
    "langs": [
     "es"
    ],
    "es": "El reto era diseñar una plataforma donde todos pudieran participar, sin que la complejidad del sistema complicara la experiencia."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "en": "How do you connect someone who wants to see a concert, an artist looking for new audiences and a venue with available dates?",
    "fr": "Comment faire se rencontrer quelqu'un qui rêve d'assister à un concert, un artiste qui cherche de nouvelles scènes et une salle avec des dates disponibles ?"
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "en": "That was one of the main challenges behind À2pas: designing a platform for two very different user ecosystems.",
    "fr": "C'était l'un des grands défis d'À2pas : concevoir une plateforme réunissant deux grands univers d'utilisateurs aux besoins très différents."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "en": "On one side, audiences discovering, suggesting, supporting and booking shows. On the other, artists, producers and venues managing opportunities, availability and events through dedicated dashboards, each with its own features and permissions.",
    "fr": "D'un côté, les spectateurs qui découvrent, proposent, soutiennent et réservent des spectacles. De l'autre, les artistes, producteurs et lieux culturels qui gèrent les opportunités, les disponibilités et les événements depuis des espaces dédiés, avec des fonctionnalités et des droits adaptés à leur profil."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "em": true,
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
    "langs": [
     "es"
    ],
    "es": "Imagina que vives en Aix-en-Provence y descubres un grupo que solo tiene conciertos programados en París."
   },
   {
    "langs": [
     "es"
    ],
    "es": "En lugar de esperar a que algún día llegue a tu ciudad, puedes buscar un espacio, elegir una fecha y proponer el espectáculo."
   },
   {
    "langs": [
     "es"
    ],
    "es": "Otras personas pueden apoyar tu propuesta. Si se alcanza el interés necesario, el evento se activa y comienza la venta de entradas."
   },
   {
    "langs": [
     "es"
    ],
    "es": "Así, una idea compartida puede terminar convirtiéndose en un concierto real."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "en": "Imagine living in Aix-en-Provence and discovering an emerging band playing in Paris.",
    "fr": "Imaginez que vous habitez à Aix-en-Provence et que vous découvrez un groupe émergent qui se produit à Paris."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "en": "You'd love to see them closer to home, but they might never make it to your city.",
    "fr": "Vous aimeriez le voir près de chez vous, mais il ne passera peut-être jamais dans votre ville."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "en": "With À2pas, you could find an available venue, choose a date and propose a show. Other people in Aix and nearby towns could vote to support the idea.",
    "fr": "Avec À2pas, vous pouviez chercher une salle disponible, choisir une date et proposer d'y faire venir le groupe. Les habitants d'Aix et des environs pouvaient ensuite soutenir cette proposition en votant."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "en": "Once the proposal reached the required level of interest, between 75% and 80% of the venue's capacity, the event was automatically activated and ticket sales could begin.",
    "fr": "Lorsque le niveau d'intérêt atteignait le seuil prévu, entre 75 % et 80 % de la capacité du lieu, l'événement était automatiquement activé et la billetterie pouvait ouvrir."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "en": "Early supporters could benefit from discounted tickets as a reward for getting involved.",
    "fr": "Les premiers participants pouvaient bénéficier de tarifs préférentiels pour avoir contribué au lancement du projet."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "em": true,
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
   "es": "Lo complicado tenía que quedarse detrás de la pantalla.",
   "en": "Complex behind the scenes. Simple on the surface.",
   "fr": "Complexe en coulisses. Simple côté utilisateur."
  },
  "p": [
   {
    "langs": [
     "es"
    ],
    "es": "Mi trabajo abarcó desde la investigación y la definición de los recorridos hasta las interfaces, los prototipos y el desarrollo."
   },
   {
    "langs": [
     "es"
    ],
    "es": "Por un lado, diseñé la experiencia del público: descubrir artistas, explorar eventos, hacer propuestas, participar y comprar entradas."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "en": "My work covered the full process: research, interviews, user personas, journeys, information architecture, wireframes, UX/UI, prototypes, visual identity, development and testing.",
    "fr": "J'ai travaillé sur l'ensemble du processus : recherche, entretiens, personas, parcours utilisateurs, architecture de l'information, wireframes, UX/UI, prototypes, identité visuelle, développement et tests."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "en": "The biggest challenge was bringing very different user journeys together within one product.",
    "fr": "Le plus grand défi consistait à faire cohabiter des parcours très différents au sein d'un même produit."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
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
      "langs": [
       "es"
      ],
      "es": "Por otro, los artistas y los espacios necesitaban gestionar sus perfiles, calendarios, propuestas y eventos."
     },
     {
      "langs": [
       "en",
       "fr"
      ],
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
      "langs": [
       "es"
      ],
      "es": "No se trataba de poner todas las funciones en un mismo sitio, sino de conseguir que cada persona encontrara lo que necesitaba."
     },
     {
      "langs": [
       "en",
       "fr"
      ],
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
   "es": "El público también podía decidir qué pasaba en el escenario.",
   "en": "Community first. Stage second.",
   "fr": "D'abord le public. Ensuite la scène."
  },
  "p": [
   {
    "langs": [
     "es"
    ],
    "es": "À2pas proponía otra manera de programar espectáculos."
   },
   {
    "langs": [
     "es"
    ],
    "es": "En lugar de decidir toda la programación de antemano, permitía conocer el interés real de una comunidad antes de organizar un evento."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "en": "À2pas challenged part of the traditional approach to cultural programming.",
    "fr": "À2pas proposait une autre manière de penser la programmation culturelle."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "en": "Instead of relying only on events planned in advance, it made it possible to measure local interest before activating a performance.",
    "fr": "Plutôt que de s'appuyer uniquement sur des spectacles programmés à l'avance, la plateforme permettait de mesurer l'intérêt local avant de déclencher un événement."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
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
      "langs": [
       "es"
      ],
      "es": "Los espectadores podían participar en las decisiones. Los artistas encontraban nuevas oportunidades y las salas podían aprovechar fechas disponibles."
     },
     {
      "langs": [
       "es"
      ],
      "es": "La plataforma llegó a lanzarse y utilizarse."
     },
     {
      "langs": [
       "en",
       "fr"
      ],
      "en": "We designed and tested the journeys to make discovering, proposing, voting and buying tickets feel like parts of one connected experience.",
      "fr": "Nous avons conçu et testé ces parcours pour relier naturellement découverte, proposition, vote et achat de billets."
     },
     {
      "langs": [
       "en",
       "fr"
      ],
      "en": "The platform was launched and used.",
      "fr": "La plateforme a été lancée et utilisée."
     },
     {
      "langs": [
       "en",
       "fr"
      ],
      "em": true,
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
   "es": "Diseñar mucho más que pantallas.",
   "en": "Designing connections, not just screens.",
   "fr": "Créer des liens, pas seulement des écrans."
  },
  "p": [
   {
    "langs": [
     "es"
    ],
    "es": "Participé en el proyecto de principio a fin: investigación, arquitectura de información, identidad visual, diseño UX/UI, prototipos, desarrollo y pruebas."
   },
   {
    "langs": [
     "es"
    ],
    "es": "El desafío estaba en hacer que distintas necesidades encajaran dentro de una experiencia sencilla."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "en": "I worked across the entire product lifecycle, from understanding users and organising their needs to designing, developing and testing the experience.",
    "fr": "J'ai participé à tout le cycle du produit, de la compréhension des utilisateurs et de leurs besoins jusqu'au design, au développement et aux tests."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
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
      "langs": [
       "es"
      ],
      "es": "Cada decisión tenía que ayudar a que espectadores, artistas y espacios pudieran hacer su parte sin complicaciones."
     },
     {
      "langs": [
       "en",
       "fr"
      ],
      "en": "And the digital experience had to make it work for very different audiences, without passing the system's complexity on to the people using it.",
      "fr": "Et l'expérience digitale devait rendre tout cela accessible à des publics très différents, sans leur faire subir la complexité du système."
     },
     {
      "langs": [
       "en",
       "fr"
      ],
      "em": true,
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
   "es": "La cultura también empieza con una buena idea.",
   "en": "Culture starts long before the curtain rises.",
   "fr": "La culture commence bien avant le lever de rideau."
  },
  "p": [
   {
    "langs": [
     "es"
    ],
    "es": "À2pas nació de una pregunta: ¿y si el público pudiera participar en los espectáculos que quiere ver?"
   },
   {
    "langs": [
     "es"
    ],
    "es": "Convertir esa idea en una plataforma real implicó entender a personas muy diferentes y diseñar una experiencia que las acercara."
   },
   {
    "langs": [
     "es"
    ],
    "em": true,
    "es": "¿Tienes un producto complejo que necesita hacerse más sencillo? Hablemos."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "en": "It starts when someone discovers an artist, shares an idea and finds others who want to make it happen.",
    "fr": "Elle commence quand quelqu'un découvre un artiste, propose une idée et rencontre d'autres personnes qui ont envie de la concrétiser."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "em": true,
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
   "es": "Imagina que descubres un artista que te encanta, pero nunca actúa cerca de ti. À2pas nació para cambiar eso. Una plataforma donde el público podía proponer espectáculos, encontrar a otras personas interesadas y ayudar a hacerlos realidad. Mi trabajo fue diseñar la experiencia completa, conectando espectadores, artistas y espacios culturales dentro de un mismo producto.",
   "en": "A participatory platform connecting artists, venues and audiences to bring live culture closer to the people who want to experience it.",
   "fr": "Une plateforme participative qui rapproche artistes, lieux et spectateurs pour faire vivre la culture là où les gens ont envie de la retrouver."
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
   "en": "40 years of history. A new identity shaped together.",
   "fr": "40 ans d'histoire. Une nouvelle identité construite ensemble."
  },
  "lead": {
   "es": "¿Cómo renuevas una marca que lleva 40 años acompañando a una empresa? En Contazara, todo empezó escuchando a las personas que mejor la conocen. A partir de ahí, trabajamos en una nueva identidad, una web y una forma de comunicar más acorde con la empresa de hoy.",
   "en": "Rebranding, website and digital communications for a company with 40 years of history, shaped together with its team.",
   "fr": "Identité, site web et communication digitale d'une entreprise forte de 40 ans d'histoire, construits avec ses équipes."
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
  d:"Une nouvelle identité, un site web et une communication digitale pour Contazara. Découvrez comment nous avons fait évoluer 40 ans d'histoire.",
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
   "en": "Designing an app people would want to put down.",
   "fr": "Concevoir une appli qu'on a envie de quitter."
  },
  "p": [
   {
    "langs": [
     "es"
    ],
    "es": "Después de la pandemia, una startup de Lyon llegó con una idea: ayudar a las personas a recuperar el contacto real."
   },
   {
    "langs": [
     "es"
    ],
    "es": "Conocer gente nueva no siempre es fácil. Y aunque existen muchas aplicaciones para hacerlo, a veces terminamos pasando más tiempo buscando planes que disfrutándolos."
   },
   {
    "langs": [
     "es"
    ],
    "es": "El reto era diseñar una experiencia que facilitara esos encuentros sin convertirse en otra aplicación en la que pasar horas."
   },
   {
    "langs": [
     "es"
    ],
    "es": "Queríamos que el móvil fuera el punto de partida, no el destino."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "en": "After the pandemic, a French startup from Lyon came to us with an idea: help people reconnect in real life.",
    "fr": "Après la pandémie, une startup lyonnaise est venue avec une idée : aider les gens à retrouver le plaisir de se rencontrer dans la vraie vie."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "en": "Loneliness wasn't new. Neither was spending hours looking at a screen while life happened somewhere else.",
    "fr": "La solitude n'avait pas attendu le Covid pour exister. Et cette habitude de passer des heures devant un écran non plus."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "en": "The challenge came with a contradiction. How do you design an app that brings people closer without making them more dependent on their phones?",
    "fr": "Le défi était presque paradoxal. Comment créer une application qui rapproche les personnes sans les rendre encore plus dépendantes de leur téléphone ?"
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "em": true,
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
    "langs": [
     "es"
    ],
    "es": "Imagina que tienes la tarde libre y te apetece hacer algo, pero no sabes muy bien qué ni con quién."
   },
   {
    "langs": [
     "es"
    ],
    "es": "En lugar de recorrer una lista interminable de actividades, HappyLife partía de tres cosas: tus intereses, tu disponibilidad y lo que te apetecía hacer."
   },
   {
    "langs": [
     "es"
    ],
    "es": "Con esa información, la aplicación podía mostrar planes que encajaran mejor contigo."
   },
   {
    "langs": [
     "es"
    ],
    "es": "Trabajamos en una navegación sencilla, filtros útiles y recorridos cortos para que descubrir una actividad no se convirtiera en una tarea más."
   },
   {
    "langs": [
     "es"
    ],
    "es": "La idea era dedicar menos tiempo a buscar y más a decidir qué hacer."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "en": "We wanted to avoid endless scrolling, hundreds of choices and the familiar feeling of closing an app without having decided anything.",
    "fr": "Nous voulions éviter le scroll sans fin, les centaines de propositions et ce moment où l'on ferme une appli sans avoir rien décidé."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "en": "HappyLife started with three simple things: what you enjoy, when you're free and what you'd like to share with others.",
    "fr": "HappyLife partait de trois choses simples : ce qu'on aime, quand on est disponible et ce qu'on a envie de partager."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "en": "Based on interests and availability, the app could surface relevant activities without making people browse through an endless catalogue.",
    "fr": "À partir des centres d'intérêt et des créneaux libres, l'application pouvait proposer des activités pertinentes sans obliger à parcourir un catalogue interminable."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "en": "The complexity belonged behind the interface, leaving people free to focus on what mattered.",
    "fr": "La complexité devait rester en coulisses, pour que l'utilisateur puisse se concentrer sur l'essentiel."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "em": true,
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
    "langs": [
     "es"
    ],
    "es": "HappyLife también incorporaba un sistema de recompensas. Pero había una diferencia importante respecto a muchas otras aplicaciones."
   },
   {
    "langs": [
     "es"
    ],
    "es": "No queríamos premiar el tiempo que pasabas mirando el móvil."
   },
   {
    "langs": [
     "es"
    ],
    "es": "Los puntos se conseguían participando en actividades, conociendo personas y compartiendo experiencias. Después podían canjearse por bonos y nuevas actividades."
   },
   {
    "langs": [
     "es"
    ],
    "es": "Era una forma de animar a las personas a dar el siguiente paso."
   },
   {
    "langs": [
     "es"
    ],
    "es": "Porque el objetivo no era que abrieras la aplicación más veces, sino que tuvieras más motivos para salir y hacer cosas."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "en": "HappyLife included a rewards system designed to encourage real participation.",
    "fr": "HappyLife intégrait un système de points pour encourager la participation."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "en": "Meeting people, joining activities and sharing experiences could earn points, redeemable for vouchers and new experiences.",
    "fr": "Rencontrer des personnes, prendre part à des activités et partager des moments permettait de gagner des points, échangeables contre des bons et de nouvelles expériences."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "en": "The goal wasn't to reward time spent using the app, but what happened after putting the phone away.",
    "fr": "L'idée n'était pas de récompenser le temps passé dans l'application, mais ce qui se passait une fois le téléphone rangé."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "en": "A small distinction that changed the logic of the product.",
    "fr": "Une nuance qui changeait toute la logique du produit."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "em": true,
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
   "es": "Hacerlo fácil también lleva trabajo.",
   "en": "Fewer taps. More time for people.",
   "fr": "Quelques clics. Et place aux rencontres."
  },
  "p": [
   {
    "langs": [
     "es"
    ],
    "es": "Detrás de una experiencia sencilla suele haber muchas decisiones pequeñas."
   },
   {
    "langs": [
     "es"
    ],
    "es": "¿Qué información necesita alguien antes de apuntarse a una actividad? ¿Qué filtros ayudan de verdad? ¿Cuántos pasos hacen falta para encontrar un plan?"
   },
   {
    "langs": [
     "es"
    ],
    "es": "El trabajo de UX/UI se centró en responder a esas preguntas."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "en": "Our UX/UI approach focused on making every decision simpler.",
    "fr": "Notre travail UX/UI visait à simplifier chaque décision."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "en": "Quick access, useful filters and short journeys helped people discover activities that matched their interests and free time.",
    "fr": "Des accès rapides, des filtres utiles et des parcours courts pour découvrir des activités adaptées à ses envies et à ses disponibilités."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "en": "Instead of showing every possible option, we focused on making the relevant ones easier to find.",
    "fr": "Plutôt que de multiplier les choix, nous voulions aider chacun à trouver ceux qui comptaient vraiment."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "en": "The product had to handle the complexity, not pass it on to the people using it.",
    "fr": "La complexité devait être gérée par le produit, pas par les personnes qui l'utilisaient."
   }
  ],
  "flow": [
   {
    "p": [
     {
      "langs": [
       "es"
      ],
      "es": "Diseñamos accesos rápidos, recorridos más cortos y una navegación que permitiera encontrar actividades según los intereses y el tiempo disponible."
     },
     {
      "langs": [
       "es"
      ],
      "es": "Desde la investigación y los primeros prototipos hasta el desarrollo del MVP, el objetivo fue el mismo: quitar complicaciones y facilitar que las personas llegaran a lo que estaban buscando."
     },
     {
      "langs": [
       "en",
       "fr"
      ],
      "en": "From UX/UI research and prototypes through to bringing the MVP into operation, we kept the same principle: help people find what they needed with less effort.",
      "fr": "De la recherche UX/UI aux prototypes, puis à la mise en œuvre du MVP, nous avons gardé le même principe : aider les gens à trouver ce dont ils avaient besoin avec le moins d'effort possible."
     },
     {
      "langs": [
       "en",
       "fr"
      ],
      "em": true,
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
   "es": "Del concepto a una primera versión real.",
   "en": "Designing for what happens after the tap.",
   "fr": "Penser à ce qui se passe après le clic."
  },
  "p": [
   {
    "langs": [
     "es"
    ],
    "es": "Participé en la investigación, la definición de la experiencia, el diseño UX/UI y el prototipado del producto."
   },
   {
    "langs": [
     "es"
    ],
    "es": "Trabajamos en convertir una idea bastante amplia, ayudar a las personas a conectar en la vida real, en decisiones concretas de diseño."
   },
   {
    "langs": [
     "es"
    ],
    "es": "Cómo descubrir actividades, qué información mostrar, cómo organizar los filtros y de qué manera utilizar las recompensas sin desviar la atención de lo importante."
   },
   {
    "langs": [
     "es"
    ],
    "es": "El proyecto avanzó hasta la puesta en marcha de su primera versión funcional, el MVP."
   },
   {
    "langs": [
     "es"
    ],
    "es": "Una aplicación pensada para facilitar encuentros, no para sustituirlos."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "en": "We worked on research, experience definition, UX/UI design and prototyping for an app created to make real connections easier.",
    "fr": "Nous avons travaillé sur la recherche, la définition de l'expérience, le design UX/UI et le prototypage d'une application destinée à faciliter les rencontres réelles."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "en": "The project progressed to the MVP implementation stage, bringing design decisions into the first functional version of the product.",
    "fr": "Le projet est allé jusqu'à la mise en œuvre du MVP, en traduisant les choix de design dans une première version fonctionnelle."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "en": "The challenge was to turn a social idea into practical product decisions: how to filter activities, what information to show, when to surface relevant opportunities and how to encourage participation without unnecessary friction or dependence.",
    "fr": "Le défi consistait à transformer une idée sociale en choix concrets de produit : comment filtrer, quelles informations présenter, quand proposer une activité et comment encourager la participation sans créer de friction inutile ni de dépendance."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
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
    "langs": [
     "es"
    ],
    "es": "HappyLife partía de una idea que me sigue gustando: la tecnología también puede ayudarnos a desconectar de ella."
   },
   {
    "langs": [
     "es"
    ],
    "es": "A veces, una buena experiencia digital es la que consigue que guardes el móvil y disfrutes de lo que viene después."
   },
   {
    "langs": [
     "es"
    ],
    "em": true,
    "es": "¿Tienes una idea que necesita convertirse en un producto real? Hablemos."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "en": "HappyLife was built around a simple idea: there might always be someone nearby who'd love to share a moment.",
    "fr": "HappyLife reposait sur une idée simple : il y a peut-être quelqu'un tout près qui aimerait partager un moment."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "en": "Design could help those people find each other.",
    "fr": "Le design devait aider ces personnes à se trouver."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "em": true,
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
  "es": "Una app para conocer personas y compartir actividades fuera del móvil. HappyLife nació con una idea sencilla: hacer que encontrar compañía para un plan fuera tan fácil como encontrar el plan en sí. Mi trabajo fue diseñar una experiencia que ayudara a las personas a descubrir actividades, conectar con otras y dar el paso de participar.",
  "en": "An app designed to bring people together through shared activities. Because sometimes what we need isn't another app, but someone to make plans with.",
  "fr": "Une application pensée pour rapprocher les gens autour d'activités à partager. Parce que parfois, ce dont on a besoin, ce n'est pas d'une appli de plus, mais de quelqu'un avec qui faire quelque chose."
 },
 "alt": {
  "es": "Portada de HappyLife: dos móviles con el logotipo y la pantalla de inicio con actividades locales y categorías",
  "en": "HappyLife cover: two phones showing the logo and the home screen with local activities and categories",
  "fr": "Couverture de HappyLife : deux téléphones avec le logo et l'écran d'accueil avec activités locales et catégories"
 }
};
SEO.es.proj.happylife = {"t": "HappyLife: Diseño UX/UI de una app social | Tom Fabre", "d": "Diseño UX/UI de HappyLife, una app para descubrir actividades, conocer personas y compartir experiencias reales. Del concepto al MVP."};
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
    "langs": [
     "es"
    ],
    "es": "Venimos de recorridos diferentes, con experiencias, disciplinas y formas distintas de trabajar."
   },
   {
    "langs": [
     "es"
    ],
    "es": "Después de pasar por varias empresas, equipos y proyectos, surgió la idea de construir algo juntos."
   },
   {
    "langs": [
     "es"
    ],
    "es": "Queríamos tener la libertad de implicarnos en cada proyecto, participar en las decisiones y combinar lo que cada uno sabía hacer."
   },
   {
    "langs": [
     "es"
    ],
    "es": "No se trataba de crear una agencia grande, sino de encontrar una forma de trabajar que nos representara."
   },
   {
    "langs": [
     "es"
    ],
    "es": "Así empezó Binōme."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "en": "We each came from different backgrounds, with our own experiences, disciplines and ways of looking at design.",
    "fr": "Nous venions chacun de parcours différents, avec nos expériences, nos disciplines et nos façons de voir le design."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "en": "After years of working with different teams and companies, we felt it was time to create something together.",
    "fr": "Après plusieurs années de projets, d'équipes et de bureaux différents, nous avons eu envie de construire quelque chose ensemble."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "en": "We didn't just want to work independently. We wanted the freedom to combine our skills, share decisions and approach projects from a broader perspective.",
    "fr": "Pas simplement travailler à notre compte. Créer un espace où partager nos compétences, prendre des décisions ensemble et aborder les projets avec une vision plus large."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "em": true,
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
   "es": "Diferentes miradas. Un mismo proyecto.",
   "en": "One plus one can go a lot further.",
   "fr": "À deux, on peut aller beaucoup plus loin."
  },
  "p": [
   {
    "langs": [
     "es"
    ],
    "es": "Una marca, una web o un producto digital pueden necesitar habilidades muy diferentes."
   },
   {
    "langs": [
     "es"
    ],
    "es": "A veces el reto está en definir una identidad. Otras, en organizar una experiencia, diseñar una interfaz o encontrar la mejor manera de desarrollarla."
   },
   {
    "langs": [
     "es"
    ],
    "es": "Con Binōme queríamos poder abordar esas necesidades de forma conjunta, sin tratar cada disciplina como un proyecto separado."
   },
   {
    "langs": [
     "es"
    ],
    "es": "El estudio reúne nuestras experiencias en branding, diseño digital, desarrollo y estrategia."
   },
   {
    "langs": [
     "es"
    ],
    "es": "Y cuando un proyecto necesita otras especialidades, podemos trabajar con profesionales de confianza."
   },
   {
    "langs": [
     "es"
    ],
    "es": "La idea es sencilla: reunir a las personas adecuadas alrededor de lo que queremos construir."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
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
    "langs": [
     "en",
     "fr"
    ],
    "en": "Branding, digital design, user experience, web development and strategy all come together without being treated as separate worlds.",
    "fr": "Branding, design digital, expérience utilisateur, développement web et stratégie se retrouvent au même endroit, sans avoir besoin de séparer chaque discipline."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "en": "We like looking at the whole picture, from the first questions to the details that make everything work.",
    "fr": "Nous aimons penser les projets dans leur ensemble, des premières questions jusqu'aux détails qui font la différence."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
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
   "es": "Diseñar para uno mismo tiene su gracia.",
   "en": "Designing for ourselves was part of the challenge.",
   "fr": "Se designer soi-même, tout un exercice."
  },
  "p": [
   {
    "langs": [
     "es"
    ],
    "es": "Cuando trabajas en la identidad de otra empresa, empiezas haciendo preguntas."
   },
   {
    "langs": [
     "es"
    ],
    "es": "¿Quiénes son? ¿Qué hacen? ¿Qué quieren transmitir?"
   },
   {
    "langs": [
     "es"
    ],
    "es": "Con Binōme nos tocó responderlas a nosotros."
   },
   {
    "langs": [
     "es"
    ],
    "es": "Teníamos que encontrar un nombre, una personalidad visual y una manera de presentar el estudio que reflejara cómo queríamos trabajar."
   },
   {
    "langs": [
     "es"
    ],
    "es": "Desarrollamos la identidad, su lenguaje gráfico y una web donde mostrar nuestros servicios, proyectos y forma de entender el diseño."
   },
   {
    "langs": [
     "es"
    ],
    "es": "Queríamos una marca con personalidad, flexible y capaz de acompañarnos a medida que el estudio fuera creciendo."
   },
   {
    "langs": [
     "es"
    ],
    "es": "Y, de paso, aprendimos que tomar decisiones sobre tu propia marca puede ser bastante más complicado de lo que parece."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "en": "Creating our studio's identity meant asking ourselves the same questions we ask our clients.",
    "fr": "Créer l'identité de notre studio, c'était aussi se poser les questions que nous posons habituellement à nos clients."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "en": "Who are we? What do we do? How do we work? What makes us different?",
    "fr": "Qui sommes-nous ? Que faisons-nous ? Comment travaillons-nous ? Qu'est-ce qui nous rend différents ?"
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "en": "Our identity and website needed to reflect how we see design: clarity, character, collaboration and attention to detail.",
    "fr": "Notre identité et notre site devaient refléter notre vision du design : de la clarté, du caractère, de la collaboration et le souci du détail."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
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
   "es": "Lo interesante empezó después.",
   "en": "The best part came after launch.",
   "fr": "Le plus intéressant est venu après."
  },
  "p": [
   {
    "langs": [
     "es"
    ],
    "es": "Crear la identidad y lanzar la web fue solo el comienzo."
   },
   {
    "langs": [
     "es"
    ],
    "es": "Con el tiempo, Binōme empezó a trabajar con empresas y proyectos de sectores muy distintos."
   },
   {
    "langs": [
     "es"
    ],
    "es": "Entre ellos, Contazara, donde participamos en la renovación de su identidad, web y comunicación digital; 360estudio, con un proyecto que conectó branding, diseño web y arquitectura; y Yaypegs, donde trabajamos con dirección de arte y animación."
   },
   {
    "langs": [
     "es"
    ],
    "es": "Cada uno nos ha permitido explorar nuevas maneras de colaborar y combinar nuestras habilidades."
   },
   {
    "langs": [
     "es"
    ],
    "es": "Porque una cosa es diseñar la identidad de un estudio. Y otra, bastante diferente, es darle vida con proyectos reales."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "en": "Over time, Binōme became much more than an idea shared by two people.",
    "fr": "Avec le temps, Binōme est devenu bien plus qu'une idée partagée à deux."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "en": "We've worked with companies and startups. Among other projects, with Contazara, 360estudio and Yaypegs.",
    "fr": "Nous avons travaillé avec des entreprises et des startups. Entre autres, avec Contazara, 360estudio et Yaypegs."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "en": "Each project has taught us something new. And we've taken on challenges we wouldn't have approached the same way alone.",
    "fr": "Chaque projet nous a appris quelque chose. Et nous avons relevé des défis que nous n'aurions pas abordés de la même manière seuls."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "em": true,
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
   "es": "Diseñar también es saber trabajar con otros.",
   "en": "Designing, building and always learning.",
   "fr": "Concevoir, construire et continuer à apprendre."
  },
  "p": [
   {
    "langs": [
     "es"
    ],
    "es": "Como cofundador de Binōme, participo en las decisiones creativas y estratégicas del estudio."
   },
   {
    "langs": [
     "es"
    ],
    "es": "Mi trabajo combina branding, diseño digital, producto y desarrollo web, pero también implica hablar con clientes, entender sus necesidades, organizar proyectos y colaborar con otros profesionales."
   },
   {
    "langs": [
     "es"
    ],
    "es": "Me gusta participar desde las primeras conversaciones hasta los detalles finales."
   },
   {
    "langs": [
     "es"
    ],
    "es": "Binōme me permite compartir esa responsabilidad, aprender de otras perspectivas y abordar proyectos que se benefician de diferentes maneras de pensar."
   },
   {
    "langs": [
     "es"
    ],
    "es": "Es una extensión de mi trabajo como diseñador, pero también una forma de construir algo en equipo."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "en": "As a co-founder of Binōme, I'm involved in the studio's creative and strategic decisions, bringing together branding, digital design, product thinking and web development.",
    "fr": "En tant que cofondateur de Binōme, je participe aux décisions créatives et stratégiques du studio, en faisant le lien entre branding, design digital, produit et développement web."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "en": "It also means doing the work that doesn't always make it into a portfolio: listening to clients, understanding their needs, organising projects, collaborating with other professionals and turning ideas into real deliverables.",
    "fr": "C'est aussi tout ce qui ne se voit pas toujours dans un portfolio : écouter les clients, comprendre leurs besoins, organiser les projets, collaborer avec d'autres professionnels et transformer les idées en réalisations concrètes."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
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
   "es": "Lo que empieza entre dos puede llegar más lejos.",
   "en": "What starts with two can go much further.",
   "fr": "Ce qui commence à deux peut aller bien plus loin."
  },
  "p": [
   {
    "langs": [
     "es"
    ],
    "es": "Binōme nació de las ganas de hacer proyectos a nuestra manera."
   },
   {
    "langs": [
     "es"
    ],
    "es": "Hoy seguimos diseñando marcas, webs y experiencias digitales, trabajando con personas y empresas que confían en nosotros para dar forma a sus ideas."
   },
   {
    "langs": [
     "es"
    ],
    "es": "Y lo mejor es que todavía queda mucho por hacer."
   },
   {
    "langs": [
     "es"
    ],
    "em": true,
    "es": "¿Tienes un proyecto en mente? Hablemos."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "en": "We keep making projects and learning from each one.",
    "fr": "Nous continuons à mener des projets et à apprendre de chacun."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "em": true,
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
  "es": "Después de años trabajando en distintos equipos, empresas y proyectos, decidimos crear un espacio propio donde combinar nuestras experiencias y maneras de entender el diseño. Así nació Binōme, un estudio independiente que reúne branding, diseño web, producto digital y estrategia. Una marca que también tuvimos que pensar, diseñar y construir desde cero.",
  "en": "After years working across different studios, companies and teams, we decided to bring our experience together and build something of our own. That's how Binōme began: an independent design studio where different skills come together to bring good ideas to life.",
  "fr": "Après plusieurs années passées dans différentes entreprises, agences et équipes, nous avons décidé de réunir nos expériences pour créer quelque chose à nous. C'est comme ça qu'est né Binōme, un studio indépendant où les compétences se croisent pour donner vie aux bonnes idées."
 },
 "alt": {
  "es": "Portada de Binōme Studio: la web del estudio en un portátil junto a una página de caso, con el titular «Tu marca al nivel que tu negocio merece»",
  "en": "Binōme Studio cover: the studio website on a laptop next to a case study page, with the headline «Tu marca al nivel que tu negocio merece»",
  "fr": "Couverture de Binōme Studio : le site du studio sur un ordinateur portable à côté d'une page d'étude de cas, avec le titre « Tu marca al nivel que tu negocio merece »"
 }
};
SEO.es.proj.binome = {"t": "Binōme Studio: Branding, diseño web y estrategia | Tom Fabre", "d": "La historia de Binōme Studio, un estudio independiente de branding, diseño web y UX/UI. Descubre cómo nació y mi papel como cofundador."};
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
    "langs": [
     "es"
    ],
    "es": "Yaypegs era una colección de 10.000 personajes digitales creados a partir de diferentes combinaciones de cuerpos, expresiones, accesorios y fondos."
   },
   {
    "langs": [
     "es"
    ],
    "es": "Cada personaje tenía su propia apariencia, pero todos compartían un mismo lenguaje visual."
   },
   {
    "langs": [
     "es"
    ],
    "es": "El proyecto ya contaba con una identidad reconocible. El siguiente paso era conseguir que esos personajes también pudieran moverse."
   },
   {
    "langs": [
     "es"
    ],
    "es": "Y ahí apareció un desafío bastante particular."
   },
   {
    "langs": [
     "es"
    ],
    "es": "No bastaba con crear una animación que funcionara bien para un personaje. Tenía que funcionar para miles de combinaciones diferentes."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
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
    "langs": [
     "en",
     "fr"
    ],
    "en": "The initial artwork established a recognisable visual language, allowing every character to feel different while still belonging to the same universe.",
    "fr": "Le travail artistique initial a posé les bases d'un langage visuel reconnaissable, permettant à chaque personnage d'être différent tout en appartenant au même univers."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "en": "But the project had another ambition: take that world even further.",
    "fr": "Mais le projet avait une autre ambition : aller encore plus loin."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "em": true,
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
   "es": "Animar uno es fácil. Animar 10.000 es otra historia.",
   "en": "Animating one layer is easy. Making every layer work together is another story.",
   "fr": "Animer un calque, c'est une chose. Faire fonctionner tous les calques ensemble, c'en est une autre."
  },
  "p": [
   {
    "langs": [
     "es"
    ],
    "es": "Cada personaje estaba construido por capas."
   },
   {
    "langs": [
     "es"
    ],
    "es": "Ojos, bocas, accesorios, prendas y otros elementos podían combinarse de muchas maneras."
   },
   {
    "langs": [
     "es"
    ],
    "es": "Eso significaba que un movimiento que funcionaba con un personaje podía generar problemas con otro."
   },
   {
    "langs": [
     "es"
    ],
    "es": "Una pieza podía tapar otra, cambiar las proporciones o romper la continuidad de la animación."
   },
   {
    "langs": [
     "es"
    ],
    "es": "Hacer una animación independiente para cada personaje no era una opción práctica."
   },
   {
    "langs": [
     "es"
    ],
    "es": "Necesitábamos encontrar una manera de trabajar con todos esos elementos sin perder el control sobre el resultado."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "en": "The biggest challenge came with the animated evolution of the collection.",
    "fr": "Le plus grand défi est arrivé avec l'évolution animée de la collection."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "en": "Each character could combine different traits, accessories and graphic elements. Every element needed to move without conflicting with the others.",
    "fr": "Chaque personnage pouvait réunir différentes combinaisons de traits, d'accessoires et d'éléments graphiques. Chaque élément devait pouvoir bouger sans entrer en conflit avec les autres."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "en": "Animating each completed character independently wasn't the answer. We needed to work with individual elements while considering how they would behave alongside different layers.",
    "fr": "Il ne suffisait pas d'animer un personnage complet et de reproduire le processus. Il fallait travailler chaque élément individuellement, en anticipant son comportement avec les autres calques."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "en": "An animation that worked with one accessory needed to work with many others.",
    "fr": "Une animation compatible avec un accessoire devait aussi fonctionner avec beaucoup d'autres."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "em": true,
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
   "es": "La solución estaba en las piezas.",
   "en": "Every detail mattered. Compatibility mattered even more.",
   "fr": "Chaque détail comptait. La compatibilité encore plus."
  },
  "p": [
   {
    "langs": [
     "es"
    ],
    "es": "En lugar de animar personajes completos, trabajamos con los elementos que los componían."
   },
   {
    "langs": [
     "es"
    ],
    "es": "Cada capa necesitaba tener su propio movimiento, pero también debía funcionar junto a las demás."
   },
   {
    "langs": [
     "es"
    ],
    "es": "Animamos y ajustamos cientos de elementos, teniendo en cuenta sus proporciones, tiempos y posibles combinaciones."
   },
   {
    "langs": [
     "es"
    ],
    "es": "El desafío estaba en conseguir que un mismo sistema permitiera generar miles de resultados diferentes sin perder la coherencia visual."
   },
   {
    "langs": [
     "es"
    ],
    "es": "Fue un trabajo de detalle, pruebas y muchos ajustes."
   },
   {
    "langs": [
     "es"
    ],
    "es": "Porque cuando todo se puede combinar, hasta el movimiento más pequeño importa."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "en": "The process involved animating and refining hundreds of elements so they could work together while preserving each character's visual consistency.",
    "fr": "Le travail demandait d'animer et d'ajuster des centaines d'éléments pour qu'ils puissent se combiner tout en conservant la cohérence visuelle des personnages."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "en": "Every layer needed to follow the proportions, timing and movement of the whole.",
    "fr": "Chaque calque devait respecter les proportions, le rythme et les mouvements de l'ensemble."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "en": "The goal was to bring all 10,000 characters to life through a shared system, rather than treating each one as a separate animation.",
    "fr": "L'objectif était de donner vie aux 10 000 personnages grâce à un système commun, sans devoir traiter chacun comme une animation indépendante."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "en": "A meticulous process where creativity, patience and precision had to work together.",
    "fr": "Un travail minutieux où créativité, patience et précision devaient avancer ensemble."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "em": true,
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
    "langs": [
     "es"
    ],
    "es": "El trabajo no terminaba con la colección animada."
   },
   {
    "langs": [
     "es"
    ],
    "es": "Yaypegs también necesitaba piezas para presentar el proyecto, comunicar novedades y acompañar sus campañas."
   },
   {
    "langs": [
     "es"
    ],
    "es": "Desarrollamos contenidos audiovisuales y animaciones para redes sociales, utilizando el mismo lenguaje visual de los personajes."
   },
   {
    "langs": [
     "es"
    ],
    "es": "La idea era que todo formara parte de un mismo universo, desde la colección hasta las publicaciones que la acompañaban."
   },
   {
    "langs": [
     "es"
    ],
    "es": "Así, la animación también se convirtió en una forma de presentar y comunicar el proyecto."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "en": "The work didn't stop with the collection.",
    "fr": "Le projet ne s'arrêtait pas à la collection."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "en": "We also created animated content for pre-launch campaigns, building anticipation and extending the project's communication after release.",
    "fr": "Nous avons également réalisé des contenus animés pour accompagner les campagnes précédant le lancement, susciter l'intérêt et prolonger la communication après la sortie."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "en": "Videos, motion graphics and content for Twitter and other social platforms helped bring Yaypegs' visual language into different formats.",
    "fr": "Vidéos, animations et contenus pour Twitter et d'autres réseaux sociaux permettaient d'adapter l'univers graphique de Yaypegs à différents formats."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "en": "Animation wasn't just part of the characters. It was part of how the project presented itself and connected with its community.",
    "fr": "L'animation ne faisait pas seulement partie des personnages. Elle contribuait aussi à la manière dont le projet se présentait et échangeait avec sa communauté."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "em": true,
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
   "es": "Dirección de arte, animación y muchos detalles.",
   "en": "Creativity, consistency and a lot of attention to detail.",
   "fr": "Créativité, cohérence et beaucoup de précision."
  },
  "p": [
   {
    "langs": [
     "es"
    ],
    "es": "Participé junto al equipo de Binōme Studio en el trabajo artístico del proyecto, su evolución hacia la animación y la creación de contenidos audiovisuales."
   },
   {
    "langs": [
     "es"
    ],
    "es": "Mi trabajo se centró en la dirección de arte y el motion design, buscando que cada elemento pudiera moverse y combinarse sin perder la identidad visual del conjunto."
   },
   {
    "langs": [
     "es"
    ],
    "es": "El mayor reto fue pensar más allá de una animación individual."
   },
   {
    "langs": [
     "es"
    ],
    "es": "Había que diseñar un sistema que funcionara con miles de combinaciones y que pudiera aplicarse de forma coherente a todo el universo de Yaypegs."
   },
   {
    "langs": [
     "es"
    ],
    "es": "Un proyecto donde la creatividad y la precisión tenían que ir de la mano."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
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
    "langs": [
     "en",
     "fr"
    ],
    "en": "The biggest challenge was building a motion language that could adapt to hundreds of elements and thousands of combinations while maintaining visual consistency.",
    "fr": "Le plus grand défi était de construire un langage de mouvement capable de s'adapter à des centaines d'éléments et à des milliers de combinaisons tout en conservant une cohérence visuelle."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "en": "A project where art direction and motion design needed to look beyond any single piece.",
    "fr": "Un projet où la direction artistique et le motion design devaient penser bien au-delà d'une seule création."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "em": true,
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
    "langs": [
     "es"
    ],
    "es": "Lo interesante de Yaypegs no fue únicamente conseguir que los personajes se movieran."
   },
   {
    "langs": [
     "es"
    ],
    "es": "Fue encontrar una manera de hacerlo a gran escala, sin tener que resolver cada animación desde cero."
   },
   {
    "langs": [
     "es"
    ],
    "es": "Un buen ejemplo de cómo un sistema bien pensado puede abrir muchas posibilidades creativas."
   },
   {
    "langs": [
     "es"
    ],
    "em": true,
    "es": "¿Tienes una idea que necesita cobrar vida? Hablemos."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "en": "In Yaypegs, the hard part was making every piece work together.",
    "fr": "Dans Yaypegs, le plus difficile était de faire fonctionner toutes les pièces ensemble."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "em": true,
    "en": "Have an idea that needs to come alive?",
    "fr": "Vous avez une idée à faire vivre ?"
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "en": "Let's talk.",
    "fr": "Parlons-en."
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
  "en": "A universe of digital characters where the challenge was bringing thousands of combinations to life without losing their personality or visual consistency.",
  "fr": "Un univers de personnages numériques où le véritable défi consistait à donner vie à des milliers de combinaisons sans perdre leur personnalité ni la cohérence visuelle de l'ensemble."
 },
 "alt": {
  "es": "Composición de capas de un personaje de Yaypegs: fondo, cuerpo, ojos, capucha, boca y accesorio se apilan hasta formar el personaje final",
  "en": "Layer composition of a Yaypegs character: background, body, eyes, hood, mouth and accessory stack up into the final character",
  "fr": "Composition en calques d'un personnage Yaypegs : fond, corps, yeux, capuche, bouche et accessoire s'empilent pour former le personnage final"
 }
};
SEO.es.proj.yaypegs = {"t": "Yaypegs: Dirección de arte y Motion Design | Tom Fabre", "d": "Dirección de arte y animación modular para Yaypegs. Descubre cómo diseñamos un sistema de movimiento para una colección de 10.000 personajes digitales."};
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
    "langs": [
     "es"
    ],
    "es": "360estudio tenía una trayectoria, un equipo con experiencia y una forma muy particular de abordar sus proyectos."
   },
   {
    "langs": [
     "es"
    ],
    "es": "Especializado en arquitectura y espacios sanitarios, su trabajo combinaba conocimiento técnico y atención a las personas que utilizan esos lugares."
   },
   {
    "langs": [
     "es"
    ],
    "es": "El reto era trasladar todo eso a una identidad visual."
   },
   {
    "langs": [
     "es"
    ],
    "es": "No necesitábamos inventar una personalidad para la empresa. Necesitábamos encontrar una manera de mostrar la que ya tenía."
   },
   {
    "langs": [
     "es"
    ],
    "es": "Una imagen que transmitiera confianza, reflejara su experiencia y funcionara en todos los lugares donde la marca estuviera presente."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
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
    "langs": [
     "en",
     "fr"
    ],
    "en": "The challenge was to create an identity capable of communicating those qualities from the very first interaction.",
    "fr": "Le défi était de créer une identité capable de transmettre ces qualités dès le premier contact."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "en": "A brand that reflected both the technical side of architecture and construction and the human perspective the studio brings to every space.",
    "fr": "Une marque qui reflète aussi bien la dimension technique de l'architecture et de la construction que le regard humain porté par le studio sur chaque espace."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "em": true,
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
   "es": "Encontrar una dirección. Y darle forma.",
   "en": "Every good identity starts with a clear direction.",
   "fr": "Tout commence par une direction claire."
  },
  "p": [
   {
    "langs": [
     "es"
    ],
    "es": "Empezamos por entender cómo trabajaba 360estudio, qué quería comunicar y qué debía transmitir su nueva imagen."
   },
   {
    "langs": [
     "es"
    ],
    "es": "A partir de ahí, desarrollamos una identidad visual que combinara el carácter técnico de la arquitectura con una expresión más cercana y contemporánea."
   },
   {
    "langs": [
     "es"
    ],
    "es": "Trabajamos en el logotipo, los colores, la tipografía y las aplicaciones de marca."
   },
   {
    "langs": [
     "es"
    ],
    "es": "Cada elemento debía funcionar por separado, pero también formar parte de un conjunto reconocible."
   },
   {
    "langs": [
     "es"
    ],
    "es": "El resultado fue un sistema visual pensado para adaptarse a distintos formatos, desde la papelería corporativa hasta las comunicaciones digitales."
   },
   {
    "langs": [
     "es"
    ],
    "es": "Una identidad que pudiera acompañar al estudio sin importar dónde apareciera."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "en": "We developed a complete visual identity designed to work across different applications, from corporate materials to digital communication.",
    "fr": "Nous avons développé une identité visuelle complète, pensée pour fonctionner sur différents supports, des applications institutionnelles à la communication digitale."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "en": "Every decision needed to bring consistency, recognition and character, while keeping the clarity expected from a technically focused business.",
    "fr": "Chaque choix devait apporter cohérence, reconnaissance et personnalité, sans perdre la clarté nécessaire à une entreprise au métier technique."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "en": "The goal was to create a visual language that felt coherent wherever it appeared.",
    "fr": "L'objectif était de créer un langage visuel capable de rester cohérent, quel que soit le support."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "em": true,
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
   "es": "La misma identidad, también en pantalla.",
   "en": "An identity that works on screen, too.",
   "fr": "Une identité qui fonctionne aussi à l'écran."
  },
  "p": [
   {
    "langs": [
     "es"
    ],
    "es": "La web tenía que hacer algo más que mostrar proyectos bonitos."
   },
   {
    "langs": [
     "es"
    ],
    "es": "Necesitábamos explicar qué hace 360estudio, presentar sus servicios y dar protagonismo a su experiencia en arquitectura y espacios sanitarios."
   },
   {
    "langs": [
     "es"
    ],
    "es": "Diseñamos una estructura que permitiera explorar sus proyectos, conocer sus especialidades y entender mejor su manera de trabajar."
   },
   {
    "langs": [
     "es"
    ],
    "es": "La identidad visual nos dio un punto de partida, pero cada decisión de diseño tenía que responder también a las necesidades de la web."
   },
   {
    "langs": [
     "es"
    ],
    "es": "Porque una marca puede reconocerse por cómo se ve, pero una buena web también debe ayudar a encontrar lo que buscas."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "en": "The digital experience needed to build on the brand while making 360estudio's services and projects easier to understand.",
    "fr": "L'expérience digitale devait prolonger le travail de marque tout en aidant à comprendre les services et les projets de 360estudio."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "en": "We designed a visual experience that brought its work forward and connected the identity with the company's expertise in architecture and construction.",
    "fr": "Nous avons travaillé sur une expérience visuelle qui valorise ses réalisations et relie son identité à son expertise en architecture et en construction."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
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
   "es": "Cuando la marca entra en su propio espacio.",
   "en": "When a brand becomes part of a space.",
   "fr": "Quand la marque prend place dans l'espace."
  },
  "p": [
   {
    "langs": [
     "es"
    ],
    "es": "Una de las partes más interesantes del proyecto fue llevar la identidad fuera de la pantalla."
   },
   {
    "langs": [
     "es"
    ],
    "es": "Mientras trabajábamos en el branding, 360estudio también estaba desarrollando sus propias oficinas."
   },
   {
    "langs": [
     "es"
    ],
    "es": "Eso abrió la posibilidad de aplicar algunos elementos de la nueva identidad al espacio físico."
   },
   {
    "langs": [
     "es"
    ],
    "es": "Colaboramos en detalles de interiorismo y aplicaciones gráficas, buscando que hubiera una relación entre la marca y el lugar donde trabaja su equipo."
   },
   {
    "langs": [
     "es"
    ],
    "es": "Fue una oportunidad para conectar dos disciplinas que normalmente vemos por separado: diseño gráfico y arquitectura."
   },
   {
    "langs": [
     "es"
    ],
    "es": "Y para comprobar cómo una identidad puede formar parte de un espacio, no solo aparecer sobre él."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "en": "One of the most interesting parts of the project was taking the identity beyond traditional applications.",
    "fr": "L'un des aspects les plus intéressants du projet a été de prolonger l'identité au-delà de ses supports habituels."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "en": "We also contributed to details of the office interior design, helping the visual language feel at home in the studio's physical environment.",
    "fr": "Nous avons également contribué à certains détails de l'aménagement intérieur des bureaux, pour créer une continuité entre le langage visuel de 360estudio et son environnement de travail."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "en": "An opportunity to bring branding and architecture together and explore how the two disciplines can complement each other.",
    "fr": "Une occasion de faire dialoguer branding et architecture, deux disciplines qui gagnent à être pensées ensemble."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "em": true,
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
   "es": "Una imagen que refleja mejor su trabajo.",
   "en": "Good work deserves to look the part.",
   "fr": "Le savoir-faire mérite aussi de se voir."
  },
  "p": [
   {
    "langs": [
     "es"
    ],
    "es": "360estudio ya tenía experiencia, proyectos y una forma de trabajar consolidada."
   },
   {
    "langs": [
     "es"
    ],
    "es": "Nuestra aportación fue desarrollar una identidad que ayudara a comunicar todo eso con más claridad."
   },
   {
    "langs": [
     "es"
    ],
    "es": "La nueva imagen se trasladó a su web, sus materiales corporativos y diferentes aplicaciones físicas y digitales."
   },
   {
    "langs": [
     "es"
    ],
    "es": "Sus fundadores también nos han compartido cómo este cambio ha contribuido a reforzar la imagen profesional del estudio."
   },
   {
    "langs": [
     "es"
    ],
    "es": "Mi trabajo, junto a Binōme Studio, abarcó la dirección creativa, el desarrollo de la identidad visual, sus aplicaciones, el diseño web y la colaboración en algunos detalles de las oficinas."
   },
   {
    "langs": [
     "es"
    ],
    "es": "Un proyecto en el que pudimos trabajar desde la primera idea hasta ver la identidad aplicada en lugares reales."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "en": "360estudio already had the talent, experience and commitment of its team. Our contribution was building an identity that could communicate those qualities clearly.",
    "fr": "360estudio possédait déjà le talent, l'expérience et l'engagement de son équipe. Notre contribution a été de créer une identité capable de rendre ces qualités visibles."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "en": "Today, the founders themselves recognise that the new identity has helped strengthen the studio's presence and professional image.",
    "fr": "Aujourd'hui, les fondateurs eux-mêmes reconnaissent que la nouvelle image a contribué à renforcer la présence et la perception professionnelle du studio."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "en": "With projects across Spain, the brand travels with the team, maintaining a consistent personality across communications and applications.",
    "fr": "Avec des projets dans différentes régions d'Espagne, la marque accompagne l'équipe partout où elle travaille, en conservant une personnalité cohérente dans ses communications et ses applications."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "en": "My contribution, alongside Binōme Studio, included the visual identity, its applications, web design and selected interior design details.",
    "fr": "Ma participation, aux côtés de Binōme Studio, a porté sur l'identité visuelle, ses déclinaisons, le design web et certains détails d'aménagement intérieur."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "en": "A project that brought graphic design, communication and architecture together around a shared vision.",
    "fr": "Un projet où design graphique, communication et architecture se sont retrouvés autour d'une même vision."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "em": true,
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
   "es": "Una marca que también se construye con el tiempo.",
   "en": "A brand that grows with the people behind it.",
   "fr": "Une marque qui grandit avec celles et ceux qui la font vivre."
  },
  "p": [
   {
    "langs": [
     "es"
    ],
    "es": "Lo que más me gusta de este proyecto es que la identidad no se quedó en una presentación."
   },
   {
    "langs": [
     "es"
    ],
    "es": "Hoy forma parte de la comunicación de 360estudio y acompaña a su equipo en diferentes formatos y espacios."
   },
   {
    "langs": [
     "es"
    ],
    "es": "Porque el trabajo de una empresa ya cuenta mucho sobre ella. A veces, el diseño solo tiene que ayudar a que los demás también lo vean."
   },
   {
    "langs": [
     "es"
    ],
    "em": true,
    "es": "¿Tienes una empresa cuya imagen ya no refleja lo que hace? Hablemos."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "en": "One of the most rewarding parts of this project is seeing how the identity we created continues to accompany 360estudio as it evolves.",
    "fr": "Ce qui me plaît le plus dans ce projet, c'est de voir comment l'identité que nous avons créée continue d'accompagner l'évolution de 360estudio."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "en": "Today, it travels with the team across Spain, carrying more than a logo: a way of working, a reputation and the effort of everyone behind the business.",
    "fr": "Aujourd'hui, elle voyage avec l'équipe à travers l'Espagne, en portant bien plus qu'un logo : une manière de travailler, une réputation et le travail de toute une équipe."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "em": true,
    "en": "That's what building a brand is about, too.",
    "fr": "C'est aussi ça, construire une marque."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "en": "Have a brand that deserves to show what it's really worth?",
    "fr": "Vous avez une marque qui mérite de montrer toute sa valeur ?"
   },
   {
    "langs": [
     "en",
     "fr"
    ],
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
  "es": "¿Cómo se traduce la experiencia de un estudio de arquitectura en una identidad visual? En 360estudio trabajamos para dar forma a una marca que reflejara su manera de entender los espacios. Desde el branding y la web hasta algunos detalles de sus propias oficinas.",
  "en": "An identity created for an architecture studio that approaches spaces from every angle. From branding to digital design, with details extending into its own offices.",
  "fr": "Une identité créée pour un studio d'architecture qui aborde les espaces dans leur ensemble. Du branding au digital, jusque dans les détails de ses propres bureaux."
 },
 "alt": {
  "es": "Portada de 360estudio: la web del estudio en un portátil sobre una mesa, con el titular «Entornos que cuidan, usuarios que prosperan» y dos esferas amarillas",
  "en": "360estudio cover: the studio website on a laptop on a table, with the headline «Entornos que cuidan, usuarios que prosperan» and two yellow spheres",
  "fr": "Couverture de 360estudio : le site du studio sur un ordinateur portable posé sur une table, avec le titre « Entornos que cuidan, usuarios que prosperan » et deux sphères jaunes"
 }
};
SEO.es.proj["360estudio"] = {"t": "360estudio: Branding y diseño web | Tom Fabre", "d": "Identidad visual y diseño web para 360estudio, especializado en arquitectura sanitaria. Un proyecto donde el branding también llegó a los espacios físicos."};
SEO.en.proj["360estudio"] = {"t": "360estudio: Branding, Web & Visual Identity | Tom Fabre", "d": "Complete branding and web design for 360estudio, an architecture company whose visual identity extends into its physical spaces."};
SEO.fr.proj["360estudio"] = {"t": "360estudio : Branding, Web & Identité visuelle | Tom Fabre", "d": "Branding et design web pour 360estudio, une entreprise d'architecture dont l'identité visuelle s'étend jusque dans ses espaces."};

/* Mobile Experiences: Apolo Launcher, Appy x Jojol and Mood Messenger in one case (chapters). Images are placeholders (ph) until img/mobile-experiences-{0,cover,1..5}.webp exist. */
SECTIONS["mobile-experiences"] = [
 {
  "type": "text",
  "id": "intro",
  "h": {
   "es": "Mobile Experiences",
   "en": "Introduction",
   "fr": "Introduction"
  },
  "t": {
   "es": "Cada aplicación tiene su propia historia.",
   "en": "Designing for the real world.",
   "fr": "Concevoir pour le monde réel."
  },
  "p": [
   {
    "langs": [
     "es"
    ],
    "es": "Diseñar un producto desde cero y mejorar uno que ya existe son dos retos bastante diferentes."
   },
   {
    "langs": [
     "es"
    ],
    "es": "En el primero hay que tomar decisiones sobre casi todo: qué hará la aplicación, cómo funcionará y cómo se verá."
   },
   {
    "langs": [
     "es"
    ],
    "es": "En el segundo hay que entender qué conocen ya sus usuarios, qué merece conservarse y qué puede funcionar mejor."
   },
   {
    "langs": [
     "es"
    ],
    "es": "Apolo Launcher, Appy y Mood Messenger me permitieron trabajar en ambos escenarios."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "en": "Some projects start with an idea. Others start with something that already works and could work better.",
    "fr": "Certains projets partent d'une idée. D'autres, de quelque chose qui fonctionne déjà et peut fonctionner mieux."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "en": "Apolo Launcher and Appy were two chances to design complete products from scratch. With Mood Messenger the challenge was different: taking part in the evolution of an established app, rethinking its interfaces and contributing to its relaunch strategy.",
    "fr": "Apolo Launcher et Appy ont été deux occasions de concevoir des produits complets de zéro. Avec Mood Messenger, le défi était différent : participer à l'évolution d'une application établie, repenser ses interfaces et contribuer à sa stratégie de relance."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "en": "Three experiences that let me explore different ways of solving problems, making decisions and designing for real people.",
    "fr": "Trois expériences qui m'ont permis d'explorer différentes façons de résoudre des problèmes, de prendre des décisions et de concevoir pour de vraies personnes."
   }
  ]
 },
 {
  "type": "chapter",
  "id": "apolo",
  "h": {
   "es": "01 · Apolo Launcher",
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
    "langs": [
     "es"
    ],
    "es": "La pantalla de inicio es uno de los lugares que más vemos en nuestro móvil. Pero no siempre podemos adaptarla a nuestra manera de utilizarlo."
   },
   {
    "langs": [
     "es"
    ],
    "es": "Apolo Launcher nació para ofrecer una experiencia Android más personalizable, con una interfaz clara y diferentes formas de organizar el teléfono."
   },
   {
    "langs": [
     "es"
    ],
    "es": "Mi trabajo fue diseñar el producto completo, desde el concepto y la navegación hasta las interfaces finales."
   },
   {
    "langs": [
     "es"
    ],
    "es": "El reto estaba en encontrar un equilibrio entre personalización y facilidad de uso. Dar más opciones sin hacer que las tareas cotidianas fueran más complicadas."
   },
   {
    "langs": [
     "es"
    ],
    "es": "Cada decisión debía ayudar a que las personas pudieran adaptar su móvil sin tener que aprender a utilizarlo de nuevo."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "en": "The home screen is one of the spaces we use most on our phones. What if it could feel truly ours?",
    "fr": "L'écran d'accueil est l'un des espaces que nous utilisons le plus sur notre téléphone. Et s'il pouvait vraiment nous ressembler ?"
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "en": "Apolo Launcher was born to offer a more personal, intuitive and flexible Android experience.",
    "fr": "Apolo Launcher est né pour offrir une expérience Android plus personnelle, intuitive et flexible."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "en": "I designed the product from start to finish, from the concept and navigation experience to the final interfaces. The goal was to combine personalisation, functionality and a recognisable visual identity in an experience that was easy to use.",
    "fr": "J'ai conçu le produit de bout en bout, du concept et de l'expérience de navigation jusqu'aux interfaces finales. L'objectif était de combiner personnalisation, fonctionnalité et identité visuelle reconnaissable dans une expérience facile à utiliser."
   }
  ],
  "layout": "right",
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
    "es": "+1 millón",
    "en": "1M+",
    "fr": "1M+"
   },
   "l": {
    "es": "de instalaciones en Google Play",
    "en": "installs on Google Play",
    "fr": "installations sur Google Play"
   },
   "note": {
    "es": "Cifra histórica del producto. No representa un resultado atribuible exclusivamente a mi trabajo de diseño.",
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
  "h": {
   "es": "02 · Appy × Jojol",
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
    "langs": [
     "es"
    ],
    "es": "¿Cómo conviertes la relación entre un creador de contenido y su comunidad en una aplicación?"
   },
   {
    "langs": [
     "es"
    ],
    "es": "Appy nació de una colaboración con Jojol, creador de contenido tecnológico francés, para ofrecer concursos y premios a su audiencia."
   },
   {
    "langs": [
     "es"
    ],
    "es": "La idea era sencilla: una aplicación donde descubrir nuevos sorteos, participar y seguir las oportunidades disponibles."
   },
   {
    "langs": [
     "es"
    ],
    "es": "Me encargué de diseñar el producto completo para iOS y Android, desde la estructura y los recorridos hasta las interfaces finales."
   },
   {
    "langs": [
     "es"
    ],
    "es": "Había que conseguir que participar fuera fácil, que las reglas se entendieran y que cada persona supiera qué estaba pasando en cada momento."
   },
   {
    "langs": [
     "es"
    ],
    "es": "El desafío no era añadir más funciones. Era conseguir que toda la experiencia resultara sencilla y atractiva desde el primer uso."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "en": "How do you turn the relationship between a content creator and their community into a mobile experience?",
    "fr": "Comment transformer la relation entre un créateur de contenu et sa communauté en expérience mobile ?"
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "en": "Appy was a contests and prizes app created with Jojol, one of the best-known tech content creators in France.",
    "fr": "Appy était une application de concours et de lots créée avec Jojol, l'un des créateurs de contenu tech les plus reconnus de France."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "en": "I designed the whole product from scratch for iOS and Android, working on the concept, navigation, user experience and interfaces.",
    "fr": "J'ai conçu le produit complet de zéro pour iOS et Android, en travaillant sur le concept, la navigation, l'expérience utilisateur et les interfaces."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "en": "The challenge was to make daily participation simple, appealing and accessible, connecting the community with new contests and prizes.",
    "fr": "Le défi était de rendre la participation quotidienne simple, attrayante et accessible, en reliant la communauté à de nouveaux concours et lots."
   }
  ],
  "layout": "left",
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
     "es": "Colaboración",
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
  "h": {
   "es": "03 · Mood Messenger",
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
    "langs": [
     "es"
    ],
    "es": "Hay aplicaciones que utilizamos tantas veces al día que dejamos de pensar en cómo funcionan."
   },
   {
    "langs": [
     "es"
    ],
    "es": "La mensajería es una de ellas."
   },
   {
    "langs": [
     "es"
    ],
    "es": "Mood Messenger ofrecía una alternativa a la aplicación tradicional de SMS y MMS de Android, con más posibilidades de personalización."
   },
   {
    "langs": [
     "es"
    ],
    "es": "A diferencia de Apolo y Appy, aquí el producto ya existía y tenía una comunidad de usuarios."
   },
   {
    "langs": [
     "es"
    ],
    "es": "Mi trabajo se centró en participar en su evolución, diseñar nuevas interfaces y colaborar en la estrategia y el relanzamiento de la aplicación."
   },
   {
    "langs": [
     "es"
    ],
    "es": "El reto era renovar la experiencia sin perder lo que ya hacía reconocible al producto."
   },
   {
    "langs": [
     "es"
    ],
    "es": "Había que trabajar sobre una base existente, entender sus posibilidades y encontrar maneras de mejorarla."
   },
   {
    "langs": [
     "es"
    ],
    "es": "Una experiencia diferente, donde el diseño no empieza con una pantalla en blanco."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "en": "A messaging app is part of our daily routine. That is exactly why every detail matters.",
    "fr": "Une application de messagerie fait partie de notre quotidien. C'est précisément pour cela que chaque détail compte."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "en": "Mood Messenger offered a customisable alternative to the traditional Android SMS and MMS app.",
    "fr": "Mood Messenger proposait une alternative personnalisable à l'application SMS et MMS traditionnelle d'Android."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "en": "I took part in the product's evolution, designing interfaces and working on its strategy and relaunch.",
    "fr": "J'ai participé à l'évolution du produit, en concevant des interfaces et en travaillant sur sa stratégie et sa relance."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "en": "The challenge was to renew the experience, improve how it was presented and keep building on a product that had already found its place among millions of downloads.",
    "fr": "Le défi était de renouveler l'expérience, d'améliorer sa présentation et de continuer à construire sur un produit qui avait déjà trouvé sa place parmi des millions de téléchargements."
   }
  ],
  "layout": "wide",
  "meta": [
   {
    "l": {
     "es": "Mi contribución",
     "en": "My contribution",
     "fr": "Ma contribution"
    },
    "v": {
     "es": "Evolución de producto · Diseño UI · Estrategia · Relanzamiento",
     "en": "Product evolution · UI design · Strategy · Relaunch",
     "fr": "Évolution du produit · UI design · Stratégie · Relance"
    }
   }
  ],
  "metric": {
   "n": {
    "es": "+10 millones",
    "en": "10M+",
    "fr": "10M+"
   },
   "l": {
    "es": "de descargas históricas",
    "en": "historical downloads worldwide",
    "fr": "téléchargements historiques dans le monde"
   },
   "note": {
    "es": "Cifra de la trayectoria global de Mood Messenger, recogida en un comunicado de 2020. No corresponde a un resultado generado únicamente por mi participación.",
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
   "es": "Diseñar desde cero. O encontrar qué puede funcionar mejor.",
   "en": "Different ideas. One way of thinking.",
   "fr": "Des idées différentes. Une même façon de penser."
  },
  "p": [
   {
    "langs": [
     "es"
    ],
    "es": "Estos tres proyectos me enseñaron que no existe una única manera de abordar el diseño de producto."
   },
   {
    "langs": [
     "es"
    ],
    "es": "A veces hay que construir una experiencia desde la primera idea. Otras, entender lo que ya existe y decidir qué merece evolucionar."
   },
   {
    "langs": [
     "es"
    ],
    "es": "En ambos casos, lo importante es hacer buenas preguntas, tomar decisiones con criterio y prestar atención a los detalles que las personas utilizan cada día."
   },
   {
    "langs": [
     "es"
    ],
    "em": true,
    "es": "¿Estás creando una aplicación o necesitas mejorar la que ya tienes? Hablemos."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "en": "Creating from scratch and evolving an existing product are very different challenges. Both require understanding people, questioning decisions and finding solutions that make sense.",
    "fr": "Créer de zéro et faire évoluer un produit existant sont des défis très différents. Les deux exigent de comprendre les gens, de remettre des décisions en question et de trouver des solutions qui ont du sens."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "en": "These projects are part of my path and still shape how I approach design: with curiosity, intention and attention to detail.",
    "fr": "Ces projets font partie de mon parcours et influencent encore ma façon d'aborder le design : avec curiosité, intention et sens du détail."
   },
   {
    "langs": [
     "en",
     "fr"
    ],
    "em": true,
    "en": "Got something in the works?",
    "fr": "Vous avez un projet en cours ?"
   },
   {
    "langs": [
     "en",
     "fr"
    ],
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
  "es": "Hay productos que empiezan con una idea y otros que ya tienen millones de descargas cuando llega el momento de mejorarlos. En estos tres proyectos trabajé en diferentes etapas del diseño de aplicaciones móviles: desde crear experiencias completas para iOS y Android hasta renovar interfaces y participar en decisiones de producto. Tres maneras diferentes de abordar el diseño, con algo en común: hacer que la tecnología resulte más fácil de utilizar.",
  "en": "From designing products from scratch to evolving experiences used by millions of people. Three mobile projects where design, technology and strategy meet.",
  "fr": "De la conception de produits de zéro à l'évolution d'expériences utilisées par des millions de personnes. Trois projets mobiles où design, technologie et stratégie se rencontrent."
 },
 "alt": {
  "es": "Composición de las tres aplicaciones móviles: Apolo Launcher, Appy y Mood Messenger",
  "en": "Composition of the three mobile apps: Apolo Launcher, Appy and Mood Messenger",
  "fr": "Composition des trois applications mobiles : Apolo Launcher, Appy et Mood Messenger"
 }
};
SEO.es.proj["mobile-experiences"] = {"t": "Diseño de apps móviles y UX/UI | Tom Fabre", "d": "Tres proyectos de diseño de aplicaciones móviles: Apolo Launcher, Appy × Jojol y Mood Messenger. UX/UI, interfaces y estrategia de producto."};
SEO.en.proj["mobile-experiences"] = {"t": "Mobile Experiences: Product Design & UX/UI | Tom Fabre", "d": "Three mobile apps, three design challenges. Explore my work on Apolo Launcher, Appy × Jojol and Mood Messenger."};
SEO.fr.proj["mobile-experiences"] = {"t": "Mobile Experiences : Product Design & UX/UI | Tom Fabre", "d": "Trois applications mobiles, trois défis de design. Découvrez mon travail sur Apolo Launcher, Appy × Jojol et Mood Messenger."};
