import { v4 as uuid } from "uuid";
import { type Word } from "../types/word";

import headboardSound from "../../assets/sounds/bedroom/headboard.mp3";
import dresserSound from "../../assets/sounds/bedroom/dresser.mp3";
import pillowSound from "../../assets/sounds/bedroom/pillow.mp3";

const bedroom: Word[] = [
  {
    id: uuid(),
    nome: "HeardBoard",
    traducao: "Cabeceira",
    img: "https://live.staticflickr.com/2718/4289785972_374fd41a3b_b.jpg",
    som: headboardSound,
  },

  {
    id: uuid(),
    nome: "Dresser",
    traducao: "Penteadeira",
    img: "https://eggersfurniture.com/wp-content/uploads/2022/10/2024-barkman-nitestand-1-300x300.jpg",
    som: dresserSound,
  },

  {
    id: uuid(),
    nome: "Pillow",
    traducao: "Travesseiro",
    img: "https://bambooisbetter.com/cdn/shop/files/white-bamboo-lumbar-pillow-on-bed.webp?v=1749068472&width=1080",
    som: pillowSound,
  },
];

export { bedroom };
