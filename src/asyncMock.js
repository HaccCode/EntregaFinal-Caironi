const products = [
  {
    id: "1",
    name: "STAR WARS - JEDI SURVIVOR",
    price: 25000,
    category: "PC",
    format: "DIGITAL",
    img: "/public/images/pc-jedi.png",
    stock: 5,
    description:
      "La historia de Cal Kestis continúa en el juego aclamado por la crítica STAR WARS Jedi: Survivor™, una nueva aventura épica que lo llevará a nuevas fronteras en una lucha por proteger la galaxia y evitar que se suma en la oscuridad.",
  },
  {
    id: "2",
    name: "AGE OF EMPIRES II - DEFINITIVE EDITION",
    price: 24000,
    category: "PC",
    format: "DIGITAL",
    img: "/public/images/pc-age.png",
    stock: 5,
    description:
      "Celebra el 20º aniversario de uno de los juegos de estrategia más populares de la historia, con gráficos 4K Ultra HD, y una expansión totalmente nueva, con 3 campañas y 4 civilizaciones nuevas. Explora todas las campañas originales como nunca antes, que abarcan más de 200 horas de juego y 1000 años de historia de la humanidad.",
  },
  {
    id: "3",
    name: "SIMS 4",
    price: 25500,
    category: "PC",
    format: "DIGITAL",
    img: "/public/images/pc-sims4.png",
    stock: 5,
    description:
      "Con el mismo objetivo de dar vida a una comunidad, la cuarta entrega de este clásico innova con altos grados de personalización disponibles. Los jugadores verán a sus personajes desenvolviéndose en espacios más complejos, con personalidades mucho más elaboradas y un enorme abanico de opciones para decidir sobre su futuro.",
  },
  {
    id: "4",
    name: "ELDEN RING",
    price: 26355,
    category: "PC",
    format: "DIGITAL",
    img: "/public/images/pc-elden2.png",
    stock: 5,
    description:
      "Un drama épico donde el extenso mundo de las Tierras Intermedias espera ser descubierto. Los jugadores podrán personalizar el aspecto de su personaje y desarrollarlo según su estilo de juego, combinando libremente armas, armaduras y magia para enfrentar amenazas desconocidas.",
  },
  {
    id: "5",
    name: "GOD OF WAR",
    price: 42156,
    category: "PS4",
    format: "DIGITAL",
    img: "/public/images/ps4-gow.png",
    stock: 5,
    description:
      "Esta entrega está protagonizada por Kratos y Atreus, que deberán sobrevivir en un mundo habitado por dioses y criaturas nórdicas que los pondrán a prueba a cada instante. Ambientada en los entornos más increíbles y peligrosos de la saga, los jugadores podrán disfrutar de una apasionante historia.",
  },
  {
    id: "6",
    name: "INJUSTICE 2",
    price: 47852,
    category: "PS4",
    format: "DIGITAL",
    img: "/public/images/ps4-injustice2.png",
    stock: 5,
    description:
      "En esta entrega, los jugadores deberán luchar y evolucionar en varios modos de juego de la mano de su personaje favorito para salvar la Tierra. Podrán elegir entre clásicos como Batman, Superman, Supergirl, Flash, Aquaman o Wonder Woman y nuevos villanos como Atrocitus, Gorilla Grodd y Deadshot.",
  },
  {
    id: "7",
    name: "MORTAL KOMBAT 11",
    price: 40123,
    category: "PS4",
    format: "DIGITAL",
    img: "/public/images/ps4-mk11.png",
    stock: 5,
    description:
      "Con actualizaciones de su apartado visual y técnico, esta entrega muestra cada momento de la lucha, acercando a los jugadores tanto a la pelea que pueden sentirla. Presentando una lista de luchadores nuevos y clásicos, Mortal Kombat 11 mejora una saga épica de más de 25 años de historia.",
  },
  {
    id: "8",
    name: "UNCHARTED 4 - A THIEF'S END",
    price: 46953,
    category: "PS4",
    format: "DIGITAL",
    img: "/public/images/ps4-uncharted.png",
    stock: 5,
    description:
      "El cazafortunas Nathan Drake regresa junto con su hermano Sam en una aventura que incluye conspiraciones, tesoros piratas y robos. Los jugadores deben explorar islas, ciudades y montañas mientras ponen a prueba sus límites físicos para dar con la fortuna perdida del capitán Henry Avery.",
  },
  {
    id: "9",
    name: "GOD OF WAR - RAGNAROK",
    price: 76523,
    category: "PS5",
    format: "DIGITAL",
    img: "/public/images/ps5-gowragnarok.png",
    stock: 5,
    description:
      "En esta secuela, Kratos y Atreus iniciarán un viaje mítico en busca de respuestas antes de que llegue Ragnarök. Padre e hijo deberán arriesgarlo todo en cada uno de los Nueve Reinos. A lo largo de impresionantes paisajes mitológicos, se enfrentarán a temibles enemigos, desde dioses nórdicos hasta bestias salvajes.",
  },
  {
    id: "10",
    name: "HOGWARTS LEGACY",
    price: 78523,
    category: "PS5",
    format: "DIGITAL",
    img: "/public/images/ps5-hwlegacy.png",
    stock: 5,
    description:
      "En un mundo abierto ambientado en el universo de los libros de Harry Potter, los jugadores se embarcarán en lugares nuevos y ya conocidos de Hogwarts en el siglo XIX. Un estudiante que tiene la clave de un antiguo secreto deberá conseguir aliados, enfrentar magos tenebrosos y decidir el destino del mundo mágico.",
  },
  {
    id: "11",
    name: "MORTAL KOMBAT 1",
    price: 78951,
    category: "PS5",
    format: "DIGITAL",
    img: "/public/images/ps5-mk1.png",
    stock: 5,
    description:
      "Entrá en una nueva era liderada por el Dios del Fuego, Liu Kang, en un Mortal Kombat épico. Reviví la historia con guerreros legendarios en modos innovadores online y offline. Dominá un sistema de combate renovado con golpes fatales impactantes y Fatalities creativas. Superá límites en el próximo capítulo de la saga.",
  },
  {
    id: "12",
    name: "SPIDER-MAN 2",
    price: 74258,
    category: "PS5",
    format: "DIGITAL",
    img: "/public/images/ps5-spiderman2.png",
    stock: 5,
    description:
      "Únete a los Spider-Men Peter Parker y Miles Morales en una épica batalla contra el aterrador Venom y una nueva amenaza simbionte. Explora la Nueva York de Marvel con velocidad mejorada y cambia entre Peter y Miles para disfrutar de historias únicas y habilidades asombrosas. Enfréntate a icónicos supervillanos como Venom, Kraven y Lizard, utilizando sus poderes especiales para salvar la ciudad y a tus seres queridos.",
  },
  {
    id: "13",
    name: "CYBERPUNK - 2077",
    price: 32569,
    category: "XBOX XS",
    format: "DIGITAL",
    img: "/public/images/xbox-cyberpunk.png",
    stock: 5,
    description:
      "Esta historia de acción y aventura en mundo abierto se ambienta en Night City, una megalópolis obsesionada con el poder y la modificación corporal. Los jugadores estarán en la piel de un mercenario que busca un implante único que es la clave para la inmortalidad.",
  },
  {
    id: "14",
    name: "HALO INFINITE",
    price: 31458,
    category: "XBOX XS",
    format: "DIGITAL",
    img: "/public/images/xbox-halo.png",
    stock: 5,
    description:
      "Halo Infinite es un juego de acción en primera persona de ciencia ficción perteneciente a la mítica saga de título Halo. Con un nuevo motor gráfico, más potente, una iluminación realista y gráficos en 4K, el Jefe Maestro regresa para luchar contra los restos del Pacto y nuevos enemigos.",
  },
  {
    id: "15",
    name: "TEENAGE MUTANT TURTLES - SHREDDER'S REVENGE",
    price: 39281,
    category: "XBOX XS",
    format: "DIGITAL",
    img: "/public/images/xbox-tortugasninja.png",
    stock: 5,
    description:
      "Con el asalto de Bebop y Rocksteady al Canal 6, las tortugas tienen que pelear por escenarios clásicos de la franquicia. Ayuda a aplastar a soldados del Pie, guerreros triceratons y soldados de piedra para enviarlos de vuelta a la Dimensión X.",
  },
  {
    id: "16",
    name: "ASSASSINS CREED - VALHALLA",
    price: 37541,
    category: "XBOX XS",
    format: "DIGITAL",
    img: "/public/images/xbox-valhalla.png",
    stock: 5,
    description:
      "Ambientada en un mundo abierto de la Edad Oscura, que abarca desde las frías costas de Noruega hasta los hermosos reinos de Inglaterra, los jugadores se convertirán en un legendario guerrero vikingo que deberá vencer a sus enemigos en la búsqueda por ganarse un lugar entre los dioses en Valhalla.",
  },
  {
    id: "17",
    name: "THE LEGEND OF ZELDA - TEARS OF THE KINGDOM",
    price: 60587,
    category: "NINTENDO SWITCH",
    format: "DIGITAL",
    img: "/public/images/nintendo-zelda.png",
    stock: 5,
    description:
      "En esta secuela del juego The Legend of Zelda: Breath of the Wild, decidirás tu propio camino a través de los extensos paisajes de Hyrule y las islas que flotan en los vastos cielos. ¿Podrás aprovechar el poder de las nuevas habilidades de Link para luchar contra las malévolas fuerzas que amenazan al reino?",
  },
  {
    id: "18",
    name: "SEA OF STARS",
    price: 65200,
    category: "NINTENDO SWITCH",
    format: "DIGITAL",
    img: "/public/images/nintendo-seaofstars.png",
    stock: 5,
    description:
      "Sea of Stars cuenta la historia de dos Niños del Solsticio que combinan los poderes del sol y de la luna para realizar magia de eclipse, la única fuerza capaz de repeler a las monstruosas creaciones de un malvado alquimista conocido como El Fleshmancer.",
  },
  {
    id: "19",
    name: "SUPER MARIO BROS. WONDER",
    price: 62145,
    category: "NINTENDO SWITCH",
    format: "DIGITAL",
    img: "/public/images/nintendo-mariowonder.png",
    stock: 5,
    description:
      "El estilo de juego clásico será toda una locura con la adición de la Flor Maravilla. Mira cómo las tuberías cobran vida, crea caos como una enorme bola con picos y sé testigo de más eventos inesperados y maravillosos. Elige entre personajes como Mario, Luigi, Peach, Daisy, Yoshi y Toad. ¡Utiliza una nueva transformación y conviértete en Mario Elefante para usar tu trompa",
  },
  {
    id: "20",
    name: "POKEMON SCARLET & VIOLET",
    price: 69606,
    category: "NINTENDO SWITCH",
    format: "DIGITAL",
    img: "/public/images/nintendo-pokemon.png",
    stock: 5,
    description:
      "Atrapa, combate y entrena Pokémon en la región de Paldea, una vasta tierra llena de lagos, cimas montañosas, páramos, poblaciones pequeñas y grandes ciudades. Explora un mundo completamente abierto a tu propio paso y recorre a través de la tierra, el agua y el aire a lomos del Pokémon legendario Koraidon, en Pokémon Scarlet, o sobre el Pokémon legendario Miraidon, Pokémon Violet.",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
};

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((prod) => prod.category === categoryId));
    }, 1000);
  });
};

export const getProductById = (itemId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === itemId));
    }, 1000);
  });
};
