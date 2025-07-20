import { v4 as uuid } from "uuid";
import type { AutoresCard } from "../types/autoresCard";

const autores: AutoresCard[] = [
  {
    id: uuid(),
    img: "https://avatars.githubusercontent.com/u/94535032?v=4",
    nome: "Gabriel Cavalcante",
    descricao:
      "Graduando em Licenciatura de computação pelo IFBA (Instituto Federal da Bahia) - Campus Jacobina. ",
    link: "https://github.com/zolppy",
  },
  {
    id: uuid(),
    img: "https://avatars.githubusercontent.com/u/138227865?v=4",
    nome: "Mirele Oliveira",
    descricao:
      "Graduanda em Licenciatura de computação pelo IFBA (Instituto Federal da Bahia) - Campus Jacobina. ",
    link: "https://github.com/megminnie",
  },
  {
    id: uuid(),
    img: "https://avatars.githubusercontent.com/u/75589284?v=4",
    nome: "Rulian Cruz",
    descricao:
      "Graduando em Licenciatura de computação pelo IFBA (Instituto Federal da Bahia) - Campus Jacobina. ",
    link: "https://github.com/ruliancruz",
  },
];

export { autores };
