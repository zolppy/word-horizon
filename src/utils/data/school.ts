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
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Faber_Castell_Erasers.jpg/220px-Faber_Castell_Erasers.jpg",
    som: "eraserSound",
    traducao: "Borracha",
  },
  {
    id: uuid(),
    nome: "Pencil-case",
    img: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Cloth_Pencil_Box.jpg",
    som: "pencilCaseSound",
    traducao: "Estojo",
  },
];

export { school };
