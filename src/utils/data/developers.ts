import { v4 as uuid } from "uuid";
import type { Developer } from "../types/developer";

const developers: Developer[] = [
  {
    id: uuid(),
    img: "https://avatars.githubusercontent.com/u/94535032?v=4",
    name: "Gabriel Cavalcante",
    description:
      "Graduando em Licenciatura de computação pelo IFBA (Instituto Federal da Bahia) - Campus Jacobina. ",
    github: "https://github.com/zolppy",
  },
  {
    id: uuid(),
    img: "https://avatars.githubusercontent.com/u/138227865?v=4",
    name: "Mirele Oliveira",
    description:
      "Graduanda em Licenciatura de computação pelo IFBA (Instituto Federal da Bahia) - Campus Jacobina. ",
    github: "https://github.com/megminnie",
  },
  {
    id: uuid(),
    img: "https://avatars.githubusercontent.com/u/75589284?v=4",
    name: "Rulian Cruz",
    description:
      "Graduando em Licenciatura de computação pelo IFBA (Instituto Federal da Bahia) - Campus Jacobina. ",
    github: "https://github.com/ruliancruz",
  },
];

export { developers };
