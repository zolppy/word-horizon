import { v4 as uuid } from "uuid";
import type { Categoria as CategoriaType } from "../types/categoria";
import animals from "../../assets/images/categories/animals.jpg";
import school from "../../assets/images/categories/school.webp";
import familly from "../../assets/images/categories/familly.jpg";
import kitchen from "../../assets/images/categories/kitchen.png";
import closets from "../../assets/images/categories/closets.jpg";
import body from "../../assets/images/categories/body.jpg";
import bedroom from "../../assets/images/categories/bedroom.webp";
import emotions from "../../assets/images/categories/ emotions.webp";

const Categorias: CategoriaType[] = [
  {
    id: uuid(),
    img: animals,
    titulo: "Animais",
  },
  {
    id: uuid(),
    img: school,
    titulo: "Escola",
  },

  {
    id: uuid(),
    img: familly,
    titulo: "Família",
  },

  {
    id: uuid(),
    img: kitchen,
    titulo: "Conzinha",
  },

  {
    id: uuid(),
    img: closets,
    titulo: "Roupas",
  },

  {
    id: uuid(),
    img: body,
    titulo: "Corpo",
  },

  {
    id: uuid(),
    img: bedroom,
    titulo: "Quarto",
  },

  {
    id: uuid(),
    img: emotions,
    titulo: "Emoções",
  },
];

export { Categorias };
