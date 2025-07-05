import { v4 as uuid } from "uuid";
import type { Categoria as CategoriaType } from "../types/categoria";
import animals from "../../assets/images/categories/animals.jpg";
import school from "../../assets/images/categories/school.webp";
import familly from "../../assets/images/categories/familly.jpg";
import cook from "../../assets/images/categories/cook.png";
import closets from "../../assets/images/categories/closets.jpg";
import body from "../../assets/images/categories/body.jpg";
import bedroom from "../../assets/images/categories/bedroom.webp";
import emotions from "../../assets/images/categories/ emotions.webp";

const Categorias: CategoriaType[] = [
  {
    id: uuid(),
    img: animals,
    titulo: "Animals",
  },
  {
    id: uuid(),
    img: school,
    titulo: "School",
  },

  {
    id: uuid(),
    img: familly,
    titulo: "Familly",
  },

  {
    id: uuid(),
    img: cook,
    titulo: "Cook",
  },

  {
    id: uuid(),
    img: closets,
    titulo: "Clothes",
  },

  {
    id: uuid(),
    img: body,
    titulo: "Body",
  },

  {
    id: uuid(),
    img: bedroom,
    titulo: "Bedrom",
  },

  {
    id: uuid(),
    img: emotions,
    titulo: "Emotions",
  },
];

export { Categorias };
