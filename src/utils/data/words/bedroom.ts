import { v4 as uuid } from "uuid";
import { type Word } from "../../types/word";

const bedroom: Word[] = [
  {
    id: uuid(),
    englishTerm: "Heardboard",
    portugueseTerm: "Cabeceira",
    img: "https://live.staticflickr.com/2718/4289785972_374fd41a3b_b.jpg",
  },
  {
    id: uuid(),
    englishTerm: "Dresser",
    portugueseTerm: "Penteadeira",
    img: "https://eggersfurniture.com/wp-content/uploads/2022/10/2024-barkman-nitestand-1-300x300.jpg",
  },
  {
    id: uuid(),
    englishTerm: "Pillow",
    portugueseTerm: "Travesseiro",
    img: "https://bambooisbetter.com/cdn/shop/files/white-bamboo-lumbar-pillow-on-bed.webp?v=1749068472&width=1080",
  },
];

export { bedroom };
