import { v4 as uuid } from "uuid";
import { type Word } from "../../types/word";

const body: Word[] = [
  {
    id: uuid(),
    englishTerm: "Foot",
    portugueseTerm: "Pé",
    img: "https://i.pinimg.com/474x/72/4c/d8/724cd863c13fbd450ca9669845d8100f.jpg",
  },
  {
    id: uuid(),
    englishTerm: "Knee",
    portugueseTerm: "Joelho",
    img: "https://live.staticflickr.com/1085/833394660_44cf80142e_b.jpg",
  },
  {
    id: uuid(),
    englishTerm: "Shoulder",
    portugueseTerm: "Ombro",
    img: "https://upload.wikimedia.org/wikipedia/commons/2/27/Shoulder_male.jpg",
  },
];

export { body };
