import { v4 as uuid } from "uuid";
import { type Word } from "../types/word";

import footSound from "../../assets/sounds/body/foot.mp3";
import kneeSound from "../../assets/sounds/body/knee.mp3";
import shoulderSound from "../../assets/sounds/body/shoulder.mp3";

const body: Word[] = [
  {
    id: uuid(),
    nome: "Foot",
    traducao: "Pé",
    img: "https://i.pinimg.com/474x/72/4c/d8/724cd863c13fbd450ca9669845d8100f.jpg",
    som: footSound,
  },
  {
    id: uuid(),
    nome: "Knee",
    traducao: "Joelho",
    img: "https://live.staticflickr.com/1085/833394660_44cf80142e_b.jpg",
    som: kneeSound,
  },
  {
    id: uuid(),
    nome: "Shoulder",
    traducao: "Ombro",
    img: "https://upload.wikimedia.org/wikipedia/commons/2/27/Shoulder_male.jpg",
    som: shoulderSound,
  },
];

export { body };
