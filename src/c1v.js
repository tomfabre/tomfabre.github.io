/* VERSION B · editorial direction — dual headlines, bio, quick facts, bento */
const TV = {
es:{
  pj_a1:"Cada reto,", pj_a2:"una nueva mirada.", pj_b1:"Ideas que toman forma.", pj_b2:"Soluciones que funcionan.",
  bio_a1:"Diseño con cabeza.", bio_a2:"Y un poco de corazón.", bio_b1:"Curioso por naturaleza.", bio_b2:"Diseñador por vocación.",
  ct_a1:"Las buenas ideas", ct_a2:"empiezan hablando.", ct_b1:"Tú tienes una idea.", ct_b2:"Hagámosla realidad.",
  bi_eyebrow:"Hola, soy Álvaro", bi_h:"Diseño para conectar ideas, personas y productos.",
  bi_p1:"Combino estrategia, branding, diseño digital y tecnología para convertir ideas complejas en experiencias claras, útiles y con personalidad.",
  bi_p2:"Mi recorrido entre Latinoamérica y Europa ha marcado mi manera de trabajar: escuchar, cuestionar, conectar perspectivas y encontrar soluciones que tengan sentido.",
  bi_role:"Product & Brand Designer", bi_links:"Enlaces", bi_soon:"Próximamente",
  qf_l:"Datos rápidos", qf_prev:"Dato anterior", qf_next:"Dato siguiente",
  qf:[["Tres idiomas","ES · FR · EN"],["Base actual","Madrid"],["Co-founder","Binōme"],["Enfoque","Product + Brand"]],
  bt_h:"Fuera de la pantalla", bt_p:"Algunas piezas del mapa personal.",
  bt_map:"Recorrido", bt_map_s:"Latinoamérica → Europa", bt_photo:"Retrato", bt_photo_s:"Espacio para una foto real",
  bt_music:"Música", bt_music_s:"Música latina y un coro en Aix", bt_binome:"Binōme Studio", bt_binome_s:"El estudio que dirijo con mi socia.",
  bt_read:"Lecturas", bt_read_s:"Artículos y libros", bt_int:"Intereses creativos", bt_int_l:["Marca","Producto","Web","Estrategia","Tecnología","Personas"], bt_soc:"Redes"
},
en:{
  pj_a1:"Every challenge,", pj_a2:"a fresh look.", pj_b1:"Ideas taking shape.", pj_b2:"Solutions that work.",
  bio_a1:"Design with a head.", bio_a2:"And a little heart.", bio_b1:"Curious by nature.", bio_b2:"Designer by calling.",
  ct_a1:"Good ideas begin", ct_a2:"by talking.", ct_b1:"You bring the idea.", ct_b2:"Let's make it real.",
  bi_eyebrow:"Hi, I'm Álvaro", bi_h:"Design that connects ideas, people and products.",
  bi_p1:"I blend strategy, branding, digital design and technology to turn complex ideas into experiences that are clear, useful and full of personality.",
  bi_p2:"Moving between Latin America and Europe has shaped how I work: listening, questioning, connecting perspectives and finding solutions that make sense.",
  bi_role:"Product & Brand Designer", bi_links:"Links", bi_soon:"Coming soon",
  qf_l:"Quick facts", qf_prev:"Previous fact", qf_next:"Next fact",
  qf:[["Three languages","ES · FR · EN"],["Currently based in","Madrid"],["Co-founder","Binōme"],["Focus","Product + Brand"]],
  bt_h:"Off the screen", bt_p:"A few pieces of the personal map.",
  bt_map:"Route", bt_map_s:"Latin America → Europe", bt_photo:"Portrait", bt_photo_s:"Space for a real photo",
  bt_music:"Music", bt_music_s:"Latin music and a choir in Aix", bt_binome:"Binōme Studio", bt_binome_s:"The studio I run with my partner.",
  bt_read:"Reading", bt_read_s:"Articles and books", bt_int:"Creative interests", bt_int_l:["Brand","Product","Web","Strategy","Technology","People"], bt_soc:"Elsewhere"
},
fr:{
  pj_a1:"Chaque défi,", pj_a2:"un nouveau regard.", pj_b1:"Idées qui prennent forme.", pj_b2:"Solutions qui fonctionnent.",
  bio_a1:"Un design réfléchi.", bio_a2:"Et un peu de cœur.", bio_b1:"Curieux de nature.", bio_b2:"Designer par vocation.",
  ct_a1:"Les bonnes idées", ct_a2:"naissent d'un échange.", ct_b1:"Tu as une idée.", ct_b2:"Concrétisons-la.",
  bi_eyebrow:"Salut, moi c'est Álvaro", bi_h:"Un design qui relie les idées, les gens et les produits.",
  bi_p1:"Je mêle stratégie, branding, design digital et technologie pour transformer des idées complexes en expériences claires, utiles et pleines de personnalité.",
  bi_p2:"Mon parcours entre l'Amérique latine et l'Europe a façonné ma façon de travailler : écouter, questionner, relier les points de vue et trouver des solutions qui ont du sens.",
  bi_role:"Product & Brand Designer", bi_links:"Liens", bi_soon:"Bientôt",
  qf_l:"En bref", qf_prev:"Fait précédent", qf_next:"Fait suivant",
  qf:[["Trois langues","ES · FR · EN"],["Basé à","Madrid"],["Co-fondateur","Binōme"],["Focus","Product + Brand"]],
  bt_h:"Hors écran", bt_p:"Quelques pièces de la carte personnelle.",
  bt_map:"Parcours", bt_map_s:"Amérique latine → Europe", bt_photo:"Portrait", bt_photo_s:"Place pour une vraie photo",
  bt_music:"Musique", bt_music_s:"Musique latine et une chorale à Aix", bt_binome:"Binōme Studio", bt_binome_s:"Le studio que je dirige avec mon associée.",
  bt_read:"Lectures", bt_read_s:"Articles et livres", bt_int:"Intérêts créatifs", bt_int_l:["Marque","Produit","Web","Stratégie","Technologie","Gens"], bt_soc:"Ailleurs"
}};
Object.keys(TV).forEach(k => Object.assign(T[k], TV[k]));
