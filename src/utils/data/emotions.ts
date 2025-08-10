import { v4 as uuid } from "uuid";
import type { Word } from "../types/word";

const emotions: Word[] = [
  {
    id: uuid(),
    nome: "Bored",
    img: "https://www.publicdomainpictures.net/pictures/30000/nahled/bored-child.jpg",
    som: "boredSound",
    traducao: "Entediado",
  },
  {
    id: uuid(),
    nome: "Excited",
    img: "https://scrubbedin.wordpress.com/wp-content/uploads/2012/04/excited-kid1.jpg",
    som: "excitedSound",
    traducao: "Excitado",
  },
  {
    id: uuid(),
    nome: "Rage",
    img: "https://r2-us-west.photoai.com/1726220312-15ba884814ee28b2fbef255cb2686244-1.png",
    som: "rageSound",
    traducao: "Raiva",
  },
];

export { emotions };
