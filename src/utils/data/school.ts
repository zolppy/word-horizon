import { v4 as uuid } from "uuid";
import type { Word } from "../types/word";
import agenda from "../../assets/images/words/school/agenda.jpeg";
import artPaints from "../../assets/images/words/school/art-paints.jpeg";
import backpack from "../../assets/images/words/school/backpack.jpg";
import blackboard from "../../assets/images/words/school/blackboard.webp";
import board from "../../assets/images/words/school/board.jpg";
import book from "../../assets/images/words/school/book.jpg";
import calculator from "../../assets/images/words/school/calculator.webp";
import colouringPencils from "../../assets/images/words/school/colouring-pencils.webp";
import crayon from "../../assets/images/words/school/crayon.webp";
import desk from "../../assets/images/words/school/desk.avif";
import eraser from "../../assets/images/words/school/eraser.webp";
import glue from "../../assets/images/words/school/glue.jpeg";
import highlighter from "../../assets/images/words/school/highlighter.webp";
import mechanicalPencil from "../../assets/images/words/school/mechanical-pencil.webp";
import paper from "../../assets/images/words/school/paper.jpg";
import pencilCase from "../../assets/images/words/school/pencil-case.webp";
import pencil from "../../assets/images/words/school/pencil.webp";
import ruler from "../../assets/images/words/school/ruler.webp";
import schoolChair from "../../assets/images/words/school/school-chair.jpg";
import scissors from "../../assets/images/words/school/scissors.webp";
import sharpener from "../../assets/images/words/school/sharpener.webp";
import uniform from "../../assets/images/words/school/uniform.jpg";

const School: Word[] = [
  {
    id: uuid(),
    nome: "agenda",
    img: agenda,
    som: "agendaSound",
    traducao: "agenda",
  },
  {
    id: uuid(),
    nome: "art paints",
    img: artPaints,
    som: "artPaintsSound",
    traducao: "tintas de arte",
  },
  {
    id: uuid(),
    nome: "backpack",
    img: backpack,
    som: "backpackSound",
    traducao: "mochila",
  },
  {
    id: uuid(),
    nome: "blackboard",
    img: blackboard,
    som: "blackboardSound",
    traducao: "quadro negro",
  },
  {
    id: uuid(),
    nome: "board",
    img: board,
    som: "boardSound",
    traducao: "quadro",
  },
  { id: uuid(), nome: "book", img: book, som: "bookSound", traducao: "livro" },
  {
    id: uuid(),
    nome: "calculator",
    img: calculator,
    som: "calculatorSound",
    traducao: "calculadora",
  },
  {
    id: uuid(),
    nome: "colouring pencils",
    img: colouringPencils,
    som: "colouringPencilsSound",
    traducao: "lápis de cor",
  },
  {
    id: uuid(),
    nome: "crayon",
    img: crayon,
    som: "crayonSound",
    traducao: "giz de cera",
  },
  {
    id: uuid(),
    nome: "desk",
    img: desk,
    som: "deskSound",
    traducao: "carteira escolar",
  },
  {
    id: uuid(),
    nome: "eraser",
    img: eraser,
    som: "eraserSound",
    traducao: "borracha",
  },
  { id: uuid(), nome: "glue", img: glue, som: "glueSound", traducao: "cola" },
  {
    id: uuid(),
    nome: "highlighter",
    img: highlighter,
    som: "highlighterSound",
    traducao: "marca-texto",
  },
  {
    id: uuid(),
    nome: "mechanical pencil",
    img: mechanicalPencil,
    som: "mechanicalPencilSound",
    traducao: "lapiseira",
  },
  {
    id: uuid(),
    nome: "paper",
    img: paper,
    som: "paperSound",
    traducao: "papel",
  },
  {
    id: uuid(),
    nome: "pencil case",
    img: pencilCase,
    som: "pencilCaseSound",
    traducao: "estojo",
  },
  {
    id: uuid(),
    nome: "pencil",
    img: pencil,
    som: "pencilSound",
    traducao: "lápis",
  },
  {
    id: uuid(),
    nome: "ruler",
    img: ruler,
    som: "rulerSound",
    traducao: "régua",
  },
  {
    id: uuid(),
    nome: "school chair",
    img: schoolChair,
    som: "schoolChairSound",
    traducao: "cadeira escolar",
  },
  {
    id: uuid(),
    nome: "scissors",
    img: scissors,
    som: "scissorsSound",
    traducao: "tesoura",
  },
  {
    id: uuid(),
    nome: "sharpener",
    img: sharpener,
    som: "sharpenerSound",
    traducao: "apontador",
  },
  {
    id: uuid(),
    nome: "uniform",
    img: uniform,
    som: "uniformSound",
    traducao: "uniforme",
  },
];

export { School };
