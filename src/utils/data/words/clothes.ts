import { v4 as uuid } from "uuid";
import { type Word } from "../../types/word";

import bootSound from "../../../assets/sounds/clothes/boot.mp3";
import capSound from "../../../assets/sounds/clothes/cap.mp3";
import gloveSound from "../../../assets/sounds/clothes/glove.mp3";

const clothes: Word[] = [
  {
    id: uuid(),
    englishTerm: "Boot",
    portugueseTerm: "Bota",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSPQYu4pahSTdHk_rd-jS1hYpNYXjmFEeNVQ&s",
    sound: bootSound,
  },

  {
    id: uuid(),
    englishTerm: "Cap",
    portugueseTerm: "Boné",
    img: "https://s.alicdn.com/@sc04/kf/HTB1NDoBbPgy_uJjSZK9q6xvlFXan.jpg",
    sound: capSound,
  },

  {
    id: uuid(),
    englishTerm: "Glove",
    portugueseTerm: "Luva",
    img: "  https://www.veloceclub.co.uk/cdn/shop/products/pando-moto-onyx-gloves-in-brown-682230.jpg?v=1753522218&width=320",
    sound: gloveSound,
  },
];

export { clothes };
