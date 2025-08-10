import { v4 as uuid } from "uuid";
import type { Word } from "../../types/word";

const emotions: Word[] = [
  {
    id: uuid(),
    englishTerm: "Bored",
    img: "https://www.publicdomainpictures.net/pictures/30000/nahled/bored-child.jpg",
    sound: "boredSound",
    portugueseTerm: "Entediado",
  },
  {
    id: uuid(),
    englishTerm: "Excited",
    img: "https://scrubbedin.wordpress.com/wp-content/uploads/2012/04/excited-kid1.jpg",
    sound: "excitedSound",
    portugueseTerm: "Excitado",
  },
  {
    id: uuid(),
    englishTerm: "Rage",
    img: "https://r2-us-west.photoai.com/1726220312-15ba884814ee28b2fbef255cb2686244-1.png",
    sound: "rageSound",
    portugueseTerm: "Raiva",
  },
];

export { emotions };
