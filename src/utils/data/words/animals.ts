import { v4 as uuid } from "uuid";
import { type Word } from "../../types/word";

const animals: Word[] = [
  {
    id: uuid(),
    englishTerm: "Bird",
    portugueseTerm: "Passáro",
    img: "https://www.publicdomainpictures.net/pictures/40000/nahled/bird-robin-erithacus-rubecula.jpg",
  },
  {
    id: uuid(),
    englishTerm: "Cat",
    portugueseTerm: "Gato",
    img: "https://www.starwoodpet.com/hs-fs/hubfs/Tabby%20cat%20laying%20on%20carpet.jpg?width=500&height=333&name=Tabby%20cat%20laying%20on%20carpet.jpg",
  },
  {
    id: uuid(),
    englishTerm: "Dolphin",
    portugueseTerm: "Golfinho",
    img: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Dark_Dolphin.jpg",
  },
];

export { animals };
