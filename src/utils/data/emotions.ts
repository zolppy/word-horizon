import { v4 as uuid } from "uuid";
import type { WordCard as WordCardType } from "../types/wordCard";
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

const Emotions: WordCardType[] = [
  {
    id: uuid(),
    nome: "afraid",
    img: afraid,
    som: "afraidSound",
    traducao: "com medo",
  },
  {
    id: uuid(),
    nome: "anxious",
    img: anxious,
    som: "anxiousSound",
    traducao: "ansioso",
  },
  {
    id: uuid(),
    nome: "ashamed",
    img: ashamed,
    som: "ashamedSound",
    traducao: "envergonhado",
  },
  {
    id: uuid(),
    nome: "bored",
    img: bored,
    som: "boredSound",
    traducao: "entediado",
  },
  {
    id: uuid(),
    nome: "confused",
    img: confused,
    som: "confusedSound",
    traducao: "confuso",
  },
  {
    id: uuid(),
    nome: "disappointed",
    img: disappointed,
    som: "disappointedSound",
    traducao: "decepcionado",
  },
  {
    id: uuid(),
    nome: "excited",
    img: excited,
    som: "excitedSound",
    traducao: "animado",
  },
  {
    id: uuid(),
    nome: "guilty",
    img: guilty,
    som: "guiltySound",
    traducao: "culpado",
  },
  {
    id: uuid(),
    nome: "happy",
    img: happy,
    som: "happySound",
    traducao: "feliz",
  },
  {
    id: uuid(),
    nome: "jealous",
    img: jealous,
    som: "jealousSound",
    traducao: "com ciúmes",
  },
  {
    id: uuid(),
    nome: "lazy",
    img: lazy,
    som: "lazySound",
    traducao: "preguiçoso",
  },
  {
    id: uuid(),
    nome: "lonely",
    img: lonely,
    som: "lonelySound",
    traducao: "solitário",
  },
  {
    id: uuid(),
    nome: "proud",
    img: proud,
    som: "proudSound",
    traducao: "orgulhoso",
  },
  {
    id: uuid(),
    nome: "rage",
    img: rage,
    som: "rageSound",
    traducao: "raiva",
  },
  {
    id: uuid(),
    nome: "regretful",
    img: regretful,
    som: "regretfulSound",
    traducao: "arrependido",
  },
  {
    id: uuid(),
    nome: "relieved",
    img: relieved,
    som: "relievedSound",
    traducao: "aliviado",
  },
  {
    id: uuid(),
    nome: "sad",
    img: sad,
    som: "sadSound",
    traducao: "triste",
  },
  {
    id: uuid(),
    nome: "scared",
    img: scared,
    som: "scaredSound",
    traducao: "assustado",
  },
  {
    id: uuid(),
    nome: "shocked",
    img: shocked,
    som: "shockedSound",
    traducao: "chocado",
  },
  {
    id: uuid(),
    nome: "tired",
    img: tired,
    som: "tiredSound",
    traducao: "cansado",
  },
  {
    id: uuid(),
    nome: "upset",
    img: upset,
    som: "upsetSound",
    traducao: "chateado",
  },
  {
    id: uuid(),
    nome: "worried",
    img: worried,
    som: "worriedSound",
    traducao: "preocupado",
  },
];

export { Emotions };
