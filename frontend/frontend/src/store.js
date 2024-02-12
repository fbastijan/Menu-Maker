import { auth } from "./Warehouse/auth";
export let items = [];
export let paginated = {};

export let arhivirani = [
  {
    id: 1,
    naziv: "Pizza Margherita",
    opis: "Rajčice, Sir, tijesto",
    type: "hrana",
    subtype: "Glavno jelo",
    cijena: 42,
  },
  {
    id: 2,
    naziv: "Spaghetti Bolognese",
    opis: "Meso, Umak od rajčice, Tjestenina",
    type: "hrana",
    subtype: "Glavno jelo",
    cijena: 38,
  },
  {
    id: 3,
    naziv: "Chicken Caesar Salad",
    opis: "Pileće meso, Zelena salata, Caesar umak",
    type: "hrana",
    subtype: "Predjelo",
    cijena: 30,
  },
  {
    id: 4,
    naziv: "Margarita Cocktail",
    opis: "0.33",
    type: "pice",
    subtype: "Alkoholna pića",
    cijena: 15,
  },
  {
    id: 5,
    naziv: "Ginger Ale",
    opis: "Gazirani napitak s okusom đumbira",
    type: "pice",
    subtype: "Bezalkoholna pića",
    cijena: 7,
  },
  {
    id: 6,
    naziv: "Espresso",
    opis: "Mala, jaka kava",
    type: "pice",
    subtype: "Kava",
    cijena: 10,
  },
  {
    id: 7,
    naziv: "Chocolate Cake",
    opis: "Čokoladna torta sa sočnim punjenjem",
    type: "hrana",
    subtype: "Desert",
    cijena: 25,
  },
  {
    id: 8,
    naziv: "Pepperoni Pizza",
    opis: "Pepperoni, Sir, tijesto",
    type: "hrana",
    subtype: "Glavno jelo",
    cijena: 48,
  },
  {
    id: 9,
    naziv: "Carbonara",
    opis: "Špek, Jaja, Parmezan, Tjestenina",
    type: "hrana",
    subtype: "Glavno jelo",
    cijena: 40,
  },
  {
    id: 10,
    naziv: "Caprese Salad",
    opis: "Mozzarella, Rajčice, Bosiljak",
    type: "hrana",
    subtype: "Predjelo",
    cijena: 32,
  },
];
export let kategorije = {
  pice: [
    "Alkoholna pića",
    "Bezalkoholna pića",
    "Gazirana Bezalkoholna pića",
    "Kava",
  ],
  hrana: ["Predjelo", "Glavno jelo", "Desert"],
  ostalo: [],
};
export let userCred = {
  username: "",
  email: "",
  password: "",
  confirm_password: "",
};

import { reactive } from "vue";

export const flag = reactive({
  zast: "",
  change() {
    this.zast = auth.getUser();
  },
});
