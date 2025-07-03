import { v4 as uuid } from "uuid";
import type { Categoria as CategoriaType } from "../types/categoria";
import animals from "../../assets/images/categories/animals.jpg";

const Categorias: CategoriaType[] = [
  {
    id: uuid(),
    img: animals,
    titulo: "Animais",
  },
  {
    id: uuid(),
    img: animals,
    titulo: "Transportes",
  },
];

export { Categorias };
