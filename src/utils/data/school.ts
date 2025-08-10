import { v4 as uuid } from "uuid";
import type { Word } from "../types/word";

const school: Word[] = [
  {
    id: uuid(),
    nome: "BackPack",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2l4i8IIVZNB9Put88b7AialkadPP-kVmTNg&s",
    som: "BackPackSound",
    traducao: "Bolsa",
  },
  {
    id: uuid(),
    nome: "Eraser",
    img: "https://source.roboflow.com/gt9mUinbz8VFo9buHpGCO1hvG6U2/7u0JTKOsMYCElJ9KOB9B/original.jpg",
    som: "eraserSound",
    traducao: "Borracha",
  },
  {
    id: uuid(),
    nome: "Pencil-case",
    img: "https://shop.tatsumura.co.jp/cdn/shop/files/pen_case04_3_659fc3f8-7182-4cb7-b7c5-3b397c2ebb4b.jpg?v=1705487143",
    som: "pencilCaseSound",
    traducao: "Estojo",
  },
];

export { school };
