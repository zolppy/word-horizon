import { v4 as uuid } from "uuid";
import type { AutoresCard } from "../types/autoresCard";

const autores: AutoresCard[] = [
  {
    id: uuid(),
    img: "https://avatars.githubusercontent.com/u/94535032?v=4",
    nome: "Gabriel Cavalcante",
    descricao: "Estudante de Licenciaciatura em Computação",
    link: "ggggg",
  },

  {
    id: uuid(),
    img: "https://avatars.githubusercontent.com/u/138227865?v=4",
    nome: "Mirele Oliveira",
    descricao: "Estudante de Licenciatura em Computação ",
    link: "gggggg",
  },

  {
    id: uuid(),
    img: "https://avatars.githubusercontent.com/u/75589284?v=4",
    nome: "Rulian Cruz",
    descricao: "Estudante  de Licenciatura em Computação",
    link: "Perfil do GitHub",
  },
];

export { autores };
