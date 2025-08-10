import { v4 as uuid } from "uuid";
import type { Word } from "../../types/word";

const family: Word[] = [
  {
    id: uuid(),
    englishTerm: "Father",
    img: "https://freerangestock.com/sample/168813/father-and-child-enjoying-time-together.jpg",
    sound: "fatherSound",
    portugueseTerm: "Pai",
  },
  {
    id: uuid(),
    englishTerm: "Mother",
    img: "https://static.vecteezy.com/system/resources/thumbnails/040/013/288/small/affectionate-young-mom-establishes-emotional-contact-with-her-newborn-baby-smiling-mother-playing-with-her-child-photo.jpg",
    sound: "motherSound",
    portugueseTerm: "Mãe",
  },
  {
    id: uuid(),
    englishTerm: "Parents",
    img: "https://images.pexels.com/photos/19351511/pexels-photo-19351511/free-photo-of-portrait-of-parents-with-their-daughter.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    sound: "parentsSound",
    portugueseTerm: "Pais",
  },
];

export { family };
