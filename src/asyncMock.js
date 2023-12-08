const products = [
  {
    id: "1",
    name: "StarWars - Jedi Survivor",
    price: 25000,
    category: "pc",
    img: "",
    stock: 5,
    description: "",
  },
  {
    id: "2",
    name: "Age of Empires II - Definitive Edition",
    price: 24000,
    category: "pc",
    img: "",
    stock: 5,
    description: "",
  },
  {
    id: "3",
    name: "Sims 4",
    price: 25500,
    category: "pc",
    img: "",
    stock: 5,
    description: "",
  },
  {
    id: "4",
    name: "Elden Ring",
    price: 26355,
    category: "pc",
    img: "",
    stock: 5,
    description: "",
  },
  {
    id: "5",
    name: "God Of War",
    price: 42156,
    category: "ps4",
    img: "",
    stock: 5,
    description: "",
  },
  {
    id: "6",
    name: "Injustice 2",
    price: 47852,
    category: "ps4",
    img: "",
    stock: 5,
    description: "",
  },
  {
    id: "7",
    name: "Mortal Kombat 11",
    price: 40123,
    category: "ps4",
    img: "",
    stock: 5,
    description: "",
  },
  {
    id: "8",
    name: "Uncharted 4 - ",
    price: 46953,
    category: "ps4",
    img: "",
    stock: 5,
    description: "",
  },
  {
    id: "9",
    name: "God Of War - Ragnarok",
    price: 76523,
    category: "ps5",
    img: "",
    stock: 5,
    description: "",
  },
  {
    id: "10",
    name: "Hogwarts Legacy",
    price: 78523,
    category: "ps5",
    img: "",
    stock: 5,
    description: "",
  },
  {
    id: "11",
    name: "Mortal Kombat 1",
    price: 78951,
    category: "ps5",
    img: "",
    stock: 5,
    description: "",
  },
  {
    id: "12",
    name: "Spider-Man 2",
    price: 74258,
    category: "ps5",
    img: "",
    stock: 5,
    description: "",
  },
  {
    id: "13",
    name: "Cyberpunk - ",
    price: 32569,
    category: "xboxsx",
    img: "",
    stock: 5,
    description: "",
  },
  {
    id: "14",
    name: "Halo Infinite",
    price: 31458,
    category: "xboxsx",
    img: "",
    stock: 5,
    description: "",
  },
  {
    id: "15",
    name: "Teenage Mutant Turtles - Shredders Revenge",
    price: 39281,
    category: "xboxsx",
    img: "",
    stock: 5,
    description: "",
  },
  {
    id: "16",
    name: "Assassins Creed - Valhalla",
    price: 37541,
    category: "xboxsx",
    img: "",
    stock: 5,
    description: "",
  },
  {
    id: "17",
    name: "Legend Of Zelda",
    price: 60587,
    category: "nintendoswitch",
    img: "",
    stock: 5,
    description: "",
  },
  {
    id: "18",
    name: "Sea Of Stars",
    price: 65200,
    category: "nintendoswitch",
    img: "",
    stock: 5,
    description: "",
  },
  {
    id: "19",
    name: "Super Mario Bros. Wonder",
    price: 62145,
    category: "nintendoswitch",
    img: "",
    stock: 5,
    description: "",
  },
  {
    id: "20",
    name: "Pokemon Scarlet & Violet",
    price: 69606,
    category: "nintendoswitch",
    img: "",
    stock: 5,
    description: "",
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
