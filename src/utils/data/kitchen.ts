import { v4 as uuid } from "uuid";
import type { Word } from "../types/word";

const kitchen: Word[] = [
  {
    id: uuid(),
    nome: "Plate",
    img: "https://www.lookandlearn.com/history-images/preview/YNK/YNK1/YNK1043/YNK1043976_Plate.jpg",
    som: "plateSound",
    traducao: "Prato",
  },
  {
    id: uuid(),
    nome: "Spoon",
    img: "https://5.imimg.com/data5/ANDROID/Default/2023/8/339123616/JW/TJ/VS/82591339/product-jpeg-500x500.jpeg",
    som: "SpoonSound",
    traducao: "Colher",
  },
  {
    id: uuid(),
    nome: "Stove",
    img: "https://upload.wikimedia.org/wikipedia/commons/d/d6/Gas_stove_%281%29.jpg",
    som: "stoveSound",
    traducao: "Fogão",
  },
];

export { kitchen };
