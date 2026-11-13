/* VERSION B · editorial direction — dual headlines, bio, quick facts, bento */
const TV = {
es:{
  pj_a1:"Cada reto,", pj_a2:"una solución.", pj_b1:"Cada marca,", pj_b2:"su identidad.",
  bio_a1:"Sin fórmulas.", bio_a2:"Con intención.", bio_b1:"Pensar primero.", bio_b2:"Crear después.",
  ct_a1:"Buenas charlas", ct_a2:"crean proyectos.", ct_b1:"Grandes metas", ct_b2:"piden acción.",
  bi_eyebrow:"Hola, soy Tom", bi_h:"Diseño para conectar ideas, personas y productos.",
  bi_p1:"Combino estrategia, branding, diseño digital y tecnología para convertir ideas complejas en experiencias claras, útiles y con personalidad.",
  bi_p2:"Mi recorrido entre Latinoamérica y Europa ha marcado mi manera de trabajar: escuchar, cuestionar, conectar perspectivas y encontrar soluciones que tengan sentido.",
  bi_role:"Product & Brand Designer", bi_links:"Enlaces", bi_soon:"Próximamente",
  qf_l:"Datos rápidos", qf_prev:"Dato anterior", qf_next:"Dato siguiente",
  qf:[["Tres idiomas","ES · FR · EN"],["Base actual","Madrid"],["Co-founder","Binōme"],["Enfoque","Product + Brand"]],
  bt_h:"Fuera de la pantalla", bt_p:"Algunas piezas del mapa personal.",
  bt_map:"Recorrido", bt_map_s:"Latinoamérica → Europa", bt_photo:"Galería", bt_photo_s:"Espacio para una foto real",
  bt_music:"Música", bt_music_s:"Música latina y un coro en Aix", bt_binome:"Binōme Studio", bt_binome_s:"El estudio que dirijo con mi socia.",
  bt_read:"Lecturas", bt_read_s:"Artículos y libros", bt_int:"Intereses creativos", bt_int_l:["Cine","Música","Viajes","Bicicleta","Camping","Caminar","Tecnología","Noticias","Productos","Arte","Cocina"], bt_soc:"Redes"
},
en:{
  pj_a1:"Every problem,", pj_a2:"a clear path.", pj_b1:"Every product,", pj_b2:"a smart move.",
  bio_a1:"No formulas.", bio_a2:"Just intention.", bio_b1:"Think first.", bio_b2:"Create second.",
  ct_a1:"Good talks", ct_a2:"spark ideas.", ct_b1:"Your vision,", ct_b2:"our next step.",
  bi_eyebrow:"Hi, I'm Tom", bi_h:"Design that connects ideas, people and products.",
  bi_p1:"I blend strategy, branding, digital design and technology to turn complex ideas into experiences that are clear, useful and full of personality.",
  bi_p2:"Moving between Latin America and Europe has shaped how I work: listening, questioning, connecting perspectives and finding solutions that make sense.",
  bi_role:"Product & Brand Designer", bi_links:"Links", bi_soon:"Coming soon",
  qf_l:"Quick facts", qf_prev:"Previous fact", qf_next:"Next fact",
  qf:[["Three languages","ES · FR · EN"],["Currently based in","Madrid"],["Co-founder","Binōme"],["Focus","Product + Brand"]],
  bt_h:"Off the screen", bt_p:"A few pieces of the personal map.",
  bt_map:"Route", bt_map_s:"Latin America → Europe", bt_photo:"Gallery", bt_photo_s:"Space for a real photo",
  bt_music:"Music", bt_music_s:"Latin music and a choir in Aix", bt_binome:"Binōme Studio", bt_binome_s:"The studio I run with my partner.",
  bt_read:"Reading", bt_read_s:"Articles and books", bt_int:"Creative interests", bt_int_l:["Film","Music","Travel","Cycling","Camping","Walking","Technology","News","Products","Art","Cooking"], bt_soc:"Elsewhere"
},
fr:{
  pj_a1:"Chaque défi,", pj_a2:"sa solution.", pj_b1:"Chaque marque,", pj_b2:"son identité.",
  bio_a1:"Sans recettes.", bio_a2:"Avec intention.", bio_b1:"Penser d'abord.", bio_b2:"Créer ensuite.",
  ct_a1:"Bonnes idées,", ct_a2:"bons projets.", ct_b1:"Ton projet,", ct_b2:"notre défi.",
  bi_eyebrow:"Salut, moi c'est Tom", bi_h:"Un design qui relie les idées, les gens et les produits.",
  bi_p1:"Je mêle stratégie, branding, design digital et technologie pour transformer des idées complexes en expériences claires, utiles et pleines de personnalité.",
  bi_p2:"Mon parcours entre l'Amérique latine et l'Europe a façonné ma façon de travailler : écouter, questionner, relier les points de vue et trouver des solutions qui ont du sens.",
  bi_role:"Product & Brand Designer", bi_links:"Liens", bi_soon:"Bientôt",
  qf_l:"En bref", qf_prev:"Fait précédent", qf_next:"Fait suivant",
  qf:[["Trois langues","ES · FR · EN"],["Basé à","Madrid"],["Co-fondateur","Binōme"],["Focus","Product + Brand"]],
  bt_h:"Hors écran", bt_p:"Quelques pièces de la carte personnelle.",
  bt_map:"Parcours", bt_map_s:"Amérique latine → Europe", bt_photo:"Galerie", bt_photo_s:"Place pour une vraie photo",
  bt_music:"Musique", bt_music_s:"Musique latine et une chorale à Aix", bt_binome:"Binōme Studio", bt_binome_s:"Le studio que je dirige avec mon associée.",
  bt_read:"Lectures", bt_read_s:"Articles et livres", bt_int:"Intérêts créatifs", bt_int_l:["Cinéma","Musique","Voyages","Vélo","Camping","Marche","Technologie","Actualités","Produits","Art","Cuisine"], bt_soc:"Ailleurs"
}};
Object.keys(TV).forEach(k => Object.assign(T[k], TV[k]));
