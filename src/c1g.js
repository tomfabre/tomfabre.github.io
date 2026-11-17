/* UX writing del juego «Hundir la flota» + formulario de la revisión UX/UI gratuita (ES/EN/FR).
   Se carga después de c1m.js: pisa game_*, m_*, win_*, lose_*, claim, write y game_rules. El premio es el mismo al ganar y al perder. */
Object.assign(T.es, {
  game_lab: "Análisis UX/UI web gratis",
  game_h: "Una partida antes de seguir.",
  game_p: "Hay cuatro barcos escondidos en el tablero. Cada uno revela algo en lo que me fijo cuando analizo una web.",
  game_note: "Tienes 20 fallos para encontrarlos. Los aciertos son gratis.",
  game_prize: "¿El premio? Una revisión UX/UI gratuita de tu web. Ganes o pierdas.",
  m_start: "Elige una casilla. A ver qué encuentras.",
  m_miss: "Agua. Por aquí no era.",
  m_hit: "¡Tocado! Vas bien.",
  m_sunk: "¡Hundido! Un barco menos.",
  m_last: "Solo queda uno. Ya casi lo tienes.",
  m_five: "Te quedan 5 fallos. Se pone interesante.",
  m_one: "Última oportunidad.",
  m_win: "¡Flota hundida! Ya sabes en qué me fijo cuando analizo una web.",
  m_lose: "La flota sobrevivió. No encontraste todos los barcos, pero no te quedas sin premio.",
  kick_win: "Victoria", kick_lose: "Derrota", ships_n: "barcos",
  ships: [
    ["Primera impresión", "¿Se entiende qué haces nada más entrar? Me fijo en la claridad del mensaje, la jerarquía visual y lo que llama la atención primero."],
    ["Navegación", "¿Es fácil encontrar lo que buscas? Reviso cómo se organiza la información, los menús y los recorridos principales."],
    ["Diseño y experiencia", "¿La web resulta agradable y cómoda de utilizar? Observo la legibilidad, el diseño responsive y los pequeños detalles que hacen la diferencia."],
    ["Pasar a la acción", "¿Está claro cuál es el siguiente paso? Miro los botones, los formularios y si la web facilita que alguien te escriba o descubra tus servicios."]],
  win_h: "¡Flota hundida!",
  win_p: "Ya sabes en qué me fijo cuando analizo una web.",
  win_hl: "Ahora me toca mirar la tuya.",
  win_prize: "Te regalo una revisión UX/UI de tu home con tres ideas concretas para mejorarla.",
  claim: "Analizar mi web",
  lose_h: "La flota sobrevivió.",
  lose_p: "No encontraste todos los barcos, pero eso no significa que te quedes sin premio.",
  lose_hl: "Ahora me toca mirar tu web.",
  lose_prize: "Te regalo una revisión UX/UI de tu home con tres ideas concretas para mejorarla.",
  write: "Analizar mi web",
  game_rules: [
    "Hay 4 barcos escondidos en un tablero de 8×8: miden 4, 3, 3 y 2 casillas. Están en horizontal o en vertical, nunca en diagonal.",
    "Toca una casilla para disparar. Si hay un barco, es «Tocado»; si no, «Agua».",
    "Cada «Agua» gasta un intento y tienes 20. Los aciertos no cuestan nada.",
    "Cuando tocas todas las casillas de un barco, se hunde y revela algo en lo que me fijo al analizar una web.",
    "Ganes o pierdas, te llevas el regalo: una revisión UX/UI de tu home con tres ideas concretas. Puedes empezar una partida nueva cuando quieras."],
  gf_h: "Vamos a echarle un vistazo a tu web.",
  gf_sub: "Déjame el enlace y un email para enviarte el análisis. Si hay algo que te preocupa especialmente, también puedes contármelo.",
  gf_scope: "Una revisión breve de tu home con tres recomendaciones UX/UI. No es una auditoría completa.",
  gf_web: "Tu web", gf_web_ph: "tuweb.com",
  gf_mail: "Tu email",
  gf_more: "¿Hay algo que te gustaría mejorar? (opcional)",
  gf_more_ph: "Por ejemplo, la navegación, el diseño o la versión móvil...",
  gf_send: "Enviar mi web",
  gf_web_err: "Escribe la dirección de tu web, por ejemplo tuweb.com.",
  gf_ok_t: "¡Tu web ya está en la lista!",
  gf_ok_b1: "Gracias por jugar y compartir tu web conmigo.",
  gf_ok_b2: "Le echaré un vistazo y te enviaré tres ideas para mejorar su experiencia por email.",
  gf_close: "Cerrar"
});
Object.assign(T.en, {
  game_lab: "Free website UX/UI review",
  game_h: "One quick game before you go.",
  game_p: "Four ships are hidden on the board. Each one reveals something I look at when reviewing a website.",
  game_note: "You have 20 misses to find them. Hits don't count against you.",
  game_prize: "The prize? A free UX/UI review of your website. Win or lose.",
  m_start: "Pick a square. Let's see what you find.",
  m_miss: "Miss. Not this one.",
  m_hit: "Hit! Nice one.",
  m_sunk: "Sunk! One ship down.",
  m_last: "Just one ship left. Almost there.",
  m_five: "5 misses left. Things are getting interesting.",
  m_one: "Last chance.",
  m_win: "Fleet sunk! Now you know what I look for when reviewing a website.",
  m_lose: "The fleet survived. You didn't find every ship, but you're not leaving empty-handed.",
  kick_win: "Victory", kick_lose: "Defeat", ships_n: "ships",
  ships: [
    ["First impressions", "Is it clear what you do as soon as someone lands on your site? I look at your messaging, visual hierarchy and what catches the eye first."],
    ["Navigation", "Can visitors easily find what they're looking for? I look at how content is organised, the menus and the main user journeys."],
    ["Design & experience", "Is the site pleasant and easy to use? I look at readability, how it works on mobile and the small details that make a difference."],
    ["Taking action", "Is the next step obvious? I look at buttons, forms and how easy it is for someone to contact you or explore your services."]],
  win_h: "Fleet sunk!",
  win_p: "Now you know what I look for when reviewing a website.",
  win_hl: "My turn to look at yours.",
  win_prize: "I'll give your homepage a free UX/UI review with three practical ideas to improve it.",
  claim: "Review my website",
  lose_h: "The fleet survived.",
  lose_p: "You didn't find every ship, but you're not leaving empty-handed.",
  lose_hl: "My turn to look at your website.",
  lose_prize: "I'll give your homepage a free UX/UI review with three practical ideas to improve it.",
  write: "Review my website",
  game_rules: [
    "Four ships are hidden on an 8×8 board: they are 4, 3, 3 and 2 cells long. They sit horizontally or vertically, never diagonally.",
    "Tap a cell to fire. If there is a ship it's a \"Hit\"; if not, a \"Miss\".",
    "Every \"Miss\" uses up a try and you have 20. Hits cost nothing.",
    "When you hit every cell of a ship it sinks and reveals something I look at when reviewing a website.",
    "Win or lose, the gift is yours: a UX/UI review of your homepage with three practical ideas. You can start a new game whenever you like."],
  gf_h: "Let's take a look at your website.",
  gf_sub: "Share your website and email so I can send you my review. If there's something you're especially concerned about, feel free to mention it.",
  gf_scope: "A short review of your homepage with three UX/UI recommendations. Not a full website audit.",
  gf_web: "Your website", gf_web_ph: "yoursite.com",
  gf_mail: "Your email",
  gf_more: "Anything you'd like to improve? (optional)",
  gf_more_ph: "Navigation, design, mobile experience...",
  gf_send: "Send my website",
  gf_web_err: "Enter your website address, for example yoursite.com.",
  gf_ok_t: "Your website is on my list!",
  gf_ok_b1: "Thanks for playing and sharing your website.",
  gf_ok_b2: "I'll take a look and email you three practical ideas to improve the experience.",
  gf_close: "Close"
});
Object.assign(T.fr, {
  game_lab: "Mini-audit UX/UI gratuit",
  game_h: "Une petite partie avant de continuer.",
  game_p: "Quatre bateaux sont cachés sur la grille. Chacun te révèle un aspect auquel je fais attention quand j'analyse un site web.",
  game_note: "Tu as droit à 20 erreurs pour les trouver. Les bonnes réponses ne comptent pas.",
  game_prize: "Et à la clé ? Un mini-audit UX/UI gratuit de ton site. Que tu gagnes ou que tu perdes.",
  m_start: "Choisis une case. Voyons ce qui se cache là-dessous.",
  m_miss: "À l'eau. Pas par ici.",
  m_hit: "Touché ! Bien joué.",
  m_sunk: "Coulé ! Un bateau de moins.",
  m_last: "Plus qu'un bateau. Tu y es presque.",
  m_five: "Plus que 5 erreurs possibles. Ça se corse.",
  m_one: "Dernière chance.",
  m_win: "Toute la flotte est coulée ! Tu sais maintenant ce que je regarde quand j'analyse un site web.",
  m_lose: "La flotte a survécu. Tu n'as pas trouvé tous les bateaux, mais tu ne repars pas les mains vides.",
  kick_win: "Victoire", kick_lose: "Défaite", ships_n: "bateaux",
  ships: [
    ["Première impression", "Est-ce qu'on comprend ce que tu fais dès les premières secondes ? Je regarde si ton message est clair, si les informations sont bien hiérarchisées et ce qui attire l'œil en premier."],
    ["Navigation", "Est-ce qu'on trouve facilement ce qu'on cherche ? Je regarde comment les contenus sont organisés, les menus et les principaux parcours."],
    ["Design et expérience", "Est-ce que le site est agréable et facile à utiliser ? Je regarde la lisibilité, l'affichage sur mobile et les petits détails qui changent l'expérience."],
    ["Passer à l'action", "Est-ce qu'on sait quoi faire ensuite ? Je regarde les boutons, les formulaires et si le site donne envie de te contacter ou d'en découvrir plus sur tes services."]],
  win_h: "Toute la flotte est coulée !",
  win_p: "Tu sais maintenant ce que je regarde quand j'analyse un site web.",
  win_hl: "À mon tour de regarder le tien.",
  win_prize: "Je t'offre un mini-audit UX/UI de ta page d'accueil, avec trois pistes concrètes pour l'améliorer.",
  claim: "Analyser mon site",
  lose_h: "La flotte a survécu.",
  lose_p: "Tu n'as pas trouvé tous les bateaux, mais tu ne repars pas les mains vides.",
  lose_hl: "À mon tour de regarder ton site.",
  lose_prize: "Je t'offre un mini-audit UX/UI de ta page d'accueil, avec trois pistes concrètes pour l'améliorer.",
  write: "Analyser mon site",
  game_rules: [
    "4 bateaux sont cachés sur une grille de 8×8 : ils mesurent 4, 3, 3 et 2 cases. Ils sont à l'horizontale ou à la verticale, jamais en diagonale.",
    "Touche une case pour tirer. S'il y a un bateau, c'est « Touché » ; sinon, « À l'eau ».",
    "Chaque « À l'eau » use un essai et tu en as 20. Les touches ne coûtent rien.",
    "Quand tu touches toutes les cases d'un bateau, il coule et te révèle un aspect auquel je fais attention quand j'analyse un site web.",
    "Que tu gagnes ou que tu perdes, le cadeau est à toi : un mini-audit UX/UI de ta page d'accueil avec trois pistes concrètes. Tu peux relancer une partie quand tu veux."],
  gf_h: "On va jeter un œil à ton site.",
  gf_sub: "Laisse-moi son adresse et ton email pour que je puisse t'envoyer mon retour. Si quelque chose te préoccupe en particulier, dis-le-moi aussi.",
  gf_scope: "Un mini-audit de ta page d'accueil avec trois recommandations UX/UI. Ce n'est pas un audit complet.",
  gf_web: "Ton site", gf_web_ph: "tonsite.com",
  gf_mail: "Ton email",
  gf_more: "Quelque chose que tu aimerais améliorer ? (facultatif)",
  gf_more_ph: "La navigation, le design, la version mobile...",
  gf_send: "Envoyer mon site",
  gf_web_err: "Indique l'adresse de ton site, par exemple tonsite.com.",
  gf_ok_t: "Ton site est bien dans ma liste !",
  gf_ok_b1: "Merci d'avoir joué et de m'avoir envoyé ton site.",
  gf_ok_b2: "Je vais y jeter un œil et t'envoyer trois pistes concrètes pour améliorer l'expérience par email.",
  gf_close: "Fermer"
});

/* Bio · bento: galerías automáticas y anécdotas rotativas. Solo hay una anécdota real (coro); se añaden más a bx_ch.items cuando existan. */
Object.assign(T.es, { bx_ui: Object.assign({}, T.es.bx_ui, { v_pause: "Pausar", v_play: "Reanudar", v_open: "Ampliar foto", v_auto: "galería automática" }),
  bx_ch: Object.assign({}, T.es.bx_ch, { items: [T.es.bx_ch.q] }) });
Object.assign(T.en, { bx_ui: Object.assign({}, T.en.bx_ui, { v_pause: "Pause", v_play: "Resume", v_open: "Enlarge photo", v_auto: "automatic gallery" }),
  bx_ch: Object.assign({}, T.en.bx_ch, { items: [T.en.bx_ch.q] }) });
Object.assign(T.fr, { bx_ui: Object.assign({}, T.fr.bx_ui, { v_pause: "Pause", v_play: "Reprendre", v_open: "Agrandir la photo", v_auto: "galerie automatique" }),
  bx_ch: Object.assign({}, T.fr.bx_ch, { items: [T.fr.bx_ch.q] }) });

/* Bio · bento: calle con texto corto y pie de galería */
Object.assign(T.es, { bx_st: Object.assign({}, T.es.bx_st, { p: "Caminar, observar y fijarme en lo que suele pasar desapercibido.", cap: "Fachadas y reflejos." }) });
Object.assign(T.en, { bx_st: Object.assign({}, T.en.bx_st, { p: "Walking, looking, and noticing what usually goes unnoticed.", cap: "Facades and reflections." }) });
Object.assign(T.fr, { bx_st: Object.assign({}, T.fr.bx_st, { p: "Marcher, observer et remarquer ce qui passe d'ordinaire inaperçu.", cap: "Façades et reflets." }) });

/* Bio · bento: Spotify solo con título */
Object.assign(T.es, { bx_sp: Object.assign({}, T.es.bx_sp, { h: "Banda sonora.", p: "" }) });
Object.assign(T.en, { bx_sp: Object.assign({}, T.en.bx_sp, { h: "Soundtrack.", p: "" }) });
Object.assign(T.fr, { bx_sp: Object.assign({}, T.fr.bx_sp, { h: "Bande-son.", p: "" }) });

/* Bio · tarjeta de la calle: título nuevo */
Object.assign(T.es, { bx_st: Object.assign({}, T.es.bx_st, { h: "Lo que pasa desapercibido", sub: "", p: "" }) });
Object.assign(T.en, { bx_st: Object.assign({}, T.en.bx_st, { h: "What goes unnoticed", sub: "", p: "" }) });
Object.assign(T.fr, { bx_st: Object.assign({}, T.fr.bx_st, { h: "Ce qui passe inaperçu", sub: "", p: "" }) });

/* Contacto: orden y textos de la página (descripción · email · copiar email · CTA principal · CTA secundario) */
Object.assign(T.es, { ct_p: "Una marca, una web, un producto digital o una idea que todavía está tomando forma.\nCuéntame qué tienes en mente y vemos por dónde empezar.", ct_cta: "Cuéntame tu proyecto", ct_mail: "Escríbeme por email", copy: "Copiar email", copied: "Email copiado" });
Object.assign(T.en, { ct_p: "A brand, a website, a digital product or an idea that is still taking shape.\nTell me what you have in mind and we'll work out where to start.", ct_cta: "Tell me about your project", ct_mail: "Email me", copy: "Copy email", copied: "Email copied" });
Object.assign(T.fr, { ct_p: "Une marque, un site, un produit digital ou une idée qui prend encore forme.\nDis-moi ce que tu as en tête et on voit par où commencer.", ct_cta: "Raconte-moi ton projet", ct_mail: "Écris-moi par e-mail", copy: "Copier l'e-mail", copied: "E-mail copié" });

/* Bio · bento card 2: citas de diseño (rotan solas). Autor tal como lo indica Tom. */
Object.assign(T.es, { bx_ch: Object.assign({}, T.es.bx_ch, { h: "Citas de diseño.",
  items: ["«El diseño es, por naturaleza, interdisciplinario. No es lineal, y suele ser un poco caótico.»", "«La ausencia es muy importante en el diseño. Lo que no vemos también cuenta.»", "«La información solo es útil cuando se puede entender.»", "«La confianza y la libertad hacen que un proyecto funcione.»"],
  by: ["Ji Park", "Karel Martens", "Muriel Cooper", "Irma Boom"] }) });
Object.assign(T.en, { bx_ch: Object.assign({}, T.en.bx_ch, { h: "Design quotes.",
  items: ["“Design is inherently interdisciplinary. It's non-linear and messy by nature.”", "“Absence in design is very important. The things you don't see matter too.”", "“Information is only useful when it can be understood.”", "“It's trust and freedom that make a project work.”"],
  by: ["Ji Park", "Karel Martens", "Muriel Cooper", "Irma Boom"] }) });
Object.assign(T.fr, { bx_ch: Object.assign({}, T.fr.bx_ch, { h: "Citations de design.",
  items: ["«Le design est par nature interdisciplinaire. Il n'est pas linéaire, et souvent un peu chaotique.»", "«L'absence est essentielle en design. Ce qu'on ne voit pas compte aussi.»", "«L'information n'est utile que lorsqu'elle est compréhensible.»", "«C'est la confiance et la liberté qui font qu'un projet fonctionne.»"],
  by: ["Ji Park", "Karel Martens", "Muriel Cooper", "Irma Boom"] }) });

/* ---------- BIO · «Por si te interesa.» (antes «Pequeñas obsesiones.»): [título, descripción, etiqueta, detalle, enlace] ---------- */
Object.assign(T.es, { ob_h: "Por si te interesa.", ob_p: "Una revista, una web, un libro, una película y un documental.", ob_go: "Descubrir", ob_tab: "se abre en una pestaña nueva", ob_items: [
  ["Eye on Design", "Una revista que demuestra que el diseño es mucho más que hacer cosas bonitas. Ideas, cultura visual y perspectivas que vale la pena descubrir.", "Revista", "AIGA", "https://eyeondesign.aiga.org/"],
  ["It's Nice That", "Para perderme entre proyectos, descubrir artistas y terminar con veinte pestañas abiertas. Inspiración sin buscar nada en particular.", "Inspiración", "", "https://www.itsnicethat.com/"],
  ["The Creative Act: A Way of Being", "Un libro sobre creatividad que no te dice qué hacer, sino que te invita a mirar el mundo de otra manera. De esos que dan ganas de subrayar casi todo.", "Libro", "Rick Rubin · 2023 · Penguin Press / Canongate", "https://canongate.co.uk/books/4336-the-creative-act-a-way-of-being/"],
  ["The Royal Tenenbaums", "Una familia disfuncional, personajes inolvidables y una estética donde cada detalle cuenta. Humor, melancolía y mucho Wes Anderson.", "Película", "Wes Anderson · 2001", "https://www.criterion.com/films/230-the-royal-tenenbaums"],
  ["Helvetica", "Ochenta minutos hablando de una tipografía. Y, curiosamente, es mucho más interesante de lo que parece.", "Documental", "Gary Hustwit · 2007", "https://www.hustwit.com/helvetica/"]] });
Object.assign(T.en, { ob_h: "In case you're curious.", ob_p: "A magazine, a website, a book, a film and a documentary.", ob_go: "Discover", ob_tab: "opens in a new tab", ob_items: [
  ["Eye on Design", "A magazine that proves design is a lot more than making pretty things. Ideas, visual culture and perspectives worth discovering.", "Magazine", "AIGA", "https://eyeondesign.aiga.org/"],
  ["It's Nice That", "For getting lost in projects, finding artists and ending up with twenty tabs open. Inspiration without looking for anything in particular.", "Inspiration", "", "https://www.itsnicethat.com/"],
  ["The Creative Act: A Way of Being", "A book about creativity that doesn't tell you what to do, but invites you to look at the world differently. The kind where you want to underline almost everything.", "Book", "Rick Rubin · 2023 · Penguin Press / Canongate", "https://canongate.co.uk/books/4336-the-creative-act-a-way-of-being/"],
  ["The Royal Tenenbaums", "A dysfunctional family, unforgettable characters and an aesthetic where every detail counts. Humor, melancholy and plenty of Wes Anderson.", "Film", "Wes Anderson · 2001", "https://www.criterion.com/films/230-the-royal-tenenbaums"],
  ["Helvetica", "Eighty minutes talking about a typeface. And, oddly enough, it's a lot more interesting than it sounds.", "Documentary", "Gary Hustwit · 2007", "https://www.hustwit.com/helvetica/"]] });
Object.assign(T.fr, { ob_h: "Au cas où ça t'intéresse.", ob_p: "Une revue, un site, un livre, un film et un documentaire.", ob_go: "Découvrir", ob_tab: "s'ouvre dans un nouvel onglet", ob_items: [
  ["Eye on Design", "Une revue qui montre que le design, c'est bien plus que faire de jolies choses. Des idées, de la culture visuelle et des points de vue qui valent le détour.", "Revue", "AIGA", "https://eyeondesign.aiga.org/"],
  ["It's Nice That", "Pour se perdre entre les projets, découvrir des artistes et finir avec vingt onglets ouverts. De l'inspiration sans chercher quoi que ce soit.", "Inspiration", "", "https://www.itsnicethat.com/"],
  ["The Creative Act: A Way of Being", "Un livre sur la créativité qui ne te dit pas quoi faire, mais t'invite à regarder le monde autrement. Le genre où l'on a envie de tout souligner.", "Livre", "Rick Rubin · 2023 · Penguin Press / Canongate", "https://canongate.co.uk/books/4336-the-creative-act-a-way-of-being/"],
  ["The Royal Tenenbaums", "Une famille dysfonctionnelle, des personnages inoubliables et une esthétique où chaque détail compte. De l'humour, de la mélancolie et beaucoup de Wes Anderson.", "Film", "Wes Anderson · 2001", "https://www.criterion.com/films/230-the-royal-tenenbaums"],
  ["Helvetica", "Quatre-vingts minutes à parler d'une typographie. Et, curieusement, c'est bien plus intéressant qu'il n'y paraît.", "Documentaire", "Gary Hustwit · 2007", "https://www.hustwit.com/helvetica/"]] });

/* ---------- BIO · «¿Nos conocemos?»: 6 parejas con imagen [nombre, curiosidad] ---------- */
Object.assign(T.es, { mm_hint: "Encuentra una pareja y te cuento algo.", mm_pairs: [
  ["Carlos Cruz-Diez", "Conocí personalmente a Carlos Cruz-Diez."], ["Tomate", "El tomate y yo no nos llevamos muy bien."], ["Carlos Vives", "Crecí escuchando a Carlos Vives. Y todavía lo escucho."],
  ["Cámara de cine", "Antes de dedicarme al diseño, quería estudiar medios audiovisuales."], ["Forrest Gump", "He visto Forrest Gump ocho veces: 18 horas y 56 minutos de mi vida. Y probablemente habrá una novena."], ["Gabriel García Márquez", "Nací en 1990, ocho años después de que García Márquez recibiera el Nobel."]],
  mm_win_h: "Bueno, ahora ya sabes un poco más de mí.", mm_win_ps: ["Aunque quedan unas cuantas historias por contar."] });
Object.assign(T.en, { mm_hint: "Find a pair and I'll tell you something.", mm_pairs: [
  ["Carlos Cruz-Diez", "I met Carlos Cruz-Diez in person."], ["Tomato", "Tomatoes and I don't really get along."], ["Carlos Vives", "I grew up listening to Carlos Vives. And I still do."],
  ["Film camera", "Before getting into design, I wanted to study audiovisual media."], ["Forrest Gump", "I've seen Forrest Gump eight times: 18 hours and 56 minutes of my life. And there will probably be a ninth."], ["Gabriel García Márquez", "I was born in 1990, eight years after García Márquez won the Nobel Prize."]],
  mm_win_h: "Well, now you know a little more about me.", mm_win_ps: ["Though there are still a few stories left to tell."] });
Object.assign(T.fr, { mm_hint: "Trouve une paire et je te raconte quelque chose.", mm_pairs: [
  ["Carlos Cruz-Diez", "J'ai rencontré Carlos Cruz-Diez en personne."], ["Tomate", "Les tomates et moi, on ne s'entend pas très bien."], ["Carlos Vives", "J'ai grandi en écoutant Carlos Vives. Et je l'écoute encore."],
  ["Caméra de cinéma", "Avant de me tourner vers le design, je voulais étudier l'audiovisuel."], ["Forrest Gump", "J'ai vu Forrest Gump huit fois : 18 heures et 56 minutes de ma vie. Et il y aura probablement une neuvième."], ["Gabriel García Márquez", "Je suis né en 1990, huit ans après le prix Nobel de García Márquez."]],
  mm_win_h: "Voilà, tu en sais un peu plus sur moi.", mm_win_ps: ["Même s'il reste encore quelques histoires à raconter."] });

/* ---------- BIO · bento tarjeta 4: «Siempre hay espacio para…» (solo tipografía) ---------- */
Object.assign(T.es, { bx_ck: Object.assign({}, T.es.bx_ck, { h: "Siempre hay espacio para…", foods: ["Ajiaco", "Tacos", "Chilaquiles", "Empanadas", "Hamburguesas", "Camembert", "Bandeja paisa", "Patacones", "Arroz chino", "Pad thai", "Ramen"] }) });
Object.assign(T.en, { bx_ck: Object.assign({}, T.en.bx_ck, { h: "There's always room for…", foods: ["Ajiaco", "Tacos", "Chilaquiles", "Empanadas", "Burgers", "Camembert", "Bandeja paisa", "Patacones", "Chinese fried rice", "Pad thai", "Ramen"] }) });
Object.assign(T.fr, { bx_ck: Object.assign({}, T.fr.bx_ck, { h: "Il y a toujours de la place pour…", foods: ["Ajiaco", "Tacos", "Chilaquiles", "Empanadas", "Hamburgers", "Camembert", "Bandeja paisa", "Patacones", "Riz cantonais", "Pad thai", "Ramen"] }) });

/* ---------- bento tarjeta 4: «Comfort Food Club» + 4 comidas más ---------- */
Object.assign(T.es, { bx_ck: Object.assign({}, T.es.bx_ck, { h: "Comfort Food Club", foods: T.es.bx_ck.foods.concat(["Maracumango", "Chuzopán", "Sancocho", "Sopa de cebolla"]) }) });
Object.assign(T.en, { bx_ck: Object.assign({}, T.en.bx_ck, { h: "Comfort Food Club", foods: T.en.bx_ck.foods.concat(["Maracumango", "Chuzopán", "Sancocho", "Onion soup"]) }) });
Object.assign(T.fr, { bx_ck: Object.assign({}, T.fr.bx_ck, { h: "Comfort Food Club", foods: T.fr.bx_ck.foods.concat(["Maracumango", "Chuzopán", "Sancocho", "Soupe à l'oignon"]) }) });

/* ---------- HOME · titular y entradilla del hero ---------- */
Object.assign(T.es, { hm_a1: "Buenas ideas.", hm_a2: "Bien resueltas.", h_intro: "Diseño marcas, webs y productos digitales. Me involucro desde la primera idea hasta los detalles finales, combinando estrategia, diseño y tecnología." });
Object.assign(T.en, { hm_a1: "Good ideas.", hm_a2: "Well solved.", h_intro: "I design brands, websites and digital products. I get involved from the first idea to the final details, combining strategy, design and technology." });
Object.assign(T.fr, { hm_a1: "Bonnes idées.", hm_a2: "Bien résolues.", h_intro: "Je conçois des marques, des sites et des produits numériques. Je m'implique de la première idée jusqu'aux derniers détails, en alliant stratégie, design et technologie." });
