import { v4 as uuid } from "uuid";
import type { Word } from "../types/word";
import afraid from "../../assets/images/words/emotions/afraid.jpeg";
import anxious from "../../assets/images/words/emotions/anxious.webp";
import ashamed from "../../assets/images/words/emotions/ashamed.jpg";
import bored from "../../assets/images/words/emotions/bored.png";
import confused from "../../assets/images/words/emotions/confused.avif";
import disappointed from "../../assets/images/words/emotions/disappointed.jpg";
import excited from "../../assets/images/words/emotions/excited.avif";
import guilty from "../../assets/images/words/emotions/guilty.avif";
import happy from "../../assets/images/words/emotions/happy.avif";
import jealous from "../../assets/images/words/emotions/jealous.png";
import lazy from "../../assets/images/words/emotions/lazy.avif";
import lonely from "../../assets/images/words/emotions/lonely.jpg";
import proud from "../../assets/images/words/emotions/proud.jpg";
import rage from "../../assets/images/words/emotions/rage.jpeg";
import regretful from "../../assets/images/words/emotions/regretful.jpg";
import relieved from "../../assets/images/words/emotions/relieved.jpeg";
import sad from "../../assets/images/words/emotions/sad.avif";
import scared from "../../assets/images/words/emotions/scared.jpg";
import shocked from "../../assets/images/words/emotions/shocked.jpg";
import tired from "../../assets/images/words/emotions/tired.webp";
import upset from "../../assets/images/words/emotions/upset.gif";
import worried from "../../assets/images/words/emotions/worried.jpeg";

const emotions: Word[] = [
  {
    id: uuid(),
    nome: "Afraid",
    img: afraid,
    som: "afraidSound",
    traducao: "Com medo",
  },
  {
    id: uuid(),
    nome: "Anxious",
    img: anxious,
    som: "anxiousSound",
    traducao: "Ansioso",
  },
  {
    id: uuid(),
    nome: "Ashamed",
    img: ashamed,
    som: "ashamedSound",
    traducao: "Envergonhado",
  },
  {
    id: uuid(),
    nome: "Bored",
    img: bored,
    som: "boredSound",
    traducao: "Entediado",
  },
  {
    id: uuid(),
    nome: "Confused",
    img: confused,
    som: "confusedSound",
    traducao: "Confuso",
  },
  {
    id: uuid(),
    nome: "Disappointed",
    img: disappointed,
    som: "disappointedSound",
    traducao: "Decepcionado",
  },
  {
    id: uuid(),
    nome: "Excited",
    img: excited,
    som: "excitedSound",
    traducao: "Animado",
  },
  {
    id: uuid(),
    nome: "Guilty",
    img: guilty,
    som: "guiltySound",
    traducao: "Culpado",
  },
  {
    id: uuid(),
    nome: "Happy",
    img: happy,
    som: "happySound",
    traducao: "Feliz",
  },
  {
    id: uuid(),
    nome: "Jealous",
    img: jealous,
    som: "jealousSound",
    traducao: "Com ciúmes",
  },
  {
    id: uuid(),
    nome: "Lazy",
    img: lazy,
    som: "lazySound",
    traducao: "Preguiçoso",
  },
  {
    id: uuid(),
    nome: "Lonely",
    img: lonely,
    som: "lonelySound",
    traducao: "Solitário",
  },
  {
    id: uuid(),
    nome: "Proud",
    img: proud,
    som: "proudSound",
    traducao: "Orgulhoso",
  },
  {
    id: uuid(),
    nome: "Rage",
    img: rage,
    som: "rageSound",
    traducao: "Raiva",
  },
  {
    id: uuid(),
    nome: "Regretful",
    img: regretful,
    som: "regretfulSound",
    traducao: "Arrependido",
  },
  {
    id: uuid(),
    nome: "Relieved",
    img: relieved,
    som: "relievedSound",
    traducao: "Aliviado",
  },
  {
    id: uuid(),
    nome: "Sad",
    img: sad,
    som: "sadSound",
    traducao: "Triste",
  },
  {
    id: uuid(),
    nome: "Scared",
    img: scared,
    som: "scaredSound",
    traducao: "Assustado",
  },
  {
    id: uuid(),
    nome: "Shocked",
    img: shocked,
    som: "shockedSound",
    traducao: "Chocado",
  },
  {
    id: uuid(),
    nome: "Tired",
    img: tired,
    som: "tiredSound",
    traducao: "Cansado",
  },
  {
    id: uuid(),
    nome: "Upset",
    img: upset,
    som: "upsetSound",
    traducao: "Chateado",
  },
  {
    id: uuid(),
    nome: "Worried",
    img: worried,
    som: "worriedSound",
    traducao: "Preocupado",
  },
];

export { emotions };
