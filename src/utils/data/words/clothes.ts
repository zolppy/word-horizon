import { v4 as uuid } from "uuid";
import { type Word } from "../../types/word";

const clothes: Word[] = [
  {
    id: uuid(),
    englishTerm: "Boot",
    portugueseTerm: "Bota",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSPQYu4pahSTdHk_rd-jS1hYpNYXjmFEeNVQ&s",
  },

  {
    id: uuid(),
    englishTerm: "Cap",
    portugueseTerm: "Boné",
    img: "https://s.alicdn.com/@sc04/kf/HTB1NDoBbPgy_uJjSZK9q6xvlFXan.jpg",
  },

  {
    id: uuid(),
    englishTerm: "Glove",
    portugueseTerm: "Luva",
    img: "  https://www.veloceclub.co.uk/cdn/shop/products/pando-moto-onyx-gloves-in-brown-682230.jpg?v=1753522218&width=320",
  },
];

export { clothes };
