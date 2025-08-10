import { v4 as uuid } from "uuid";
import { type Word } from "../../types/word";
import birdSound from "../../../assets/sounds/animals/bird.mp3";
import catSound from "../../../assets/sounds/animals/cat.mp3";
import dolphinSound from "../../../assets/sounds/animals/dolphin.mp3";

const animals: Word[] = [
  {
    id: uuid(),
    englishTerm: "Bird",
    portugueseTerm: "Passáro",
    img: "https://www.publicdomainpictures.net/pictures/40000/nahled/bird-robin-erithacus-rubecula.jpg",
    sound: birdSound,
  },

  {
    id: uuid(),
    englishTerm: "Cat",
    portugueseTerm: "Gato",
    img: "https://www.starwoodpet.com/hs-fs/hubfs/Tabby%20cat%20laying%20on%20carpet.jpg?width=500&height=333&name=Tabby%20cat%20laying%20on%20carpet.jpg",
    sound: catSound,
  },

  {
    id: uuid(),
    englishTerm: "Dolphin",
    portugueseTerm: "Golfinho",
    img: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Dark_Dolphin.jpg",
    sound: dolphinSound,
  },
];

export { animals };
