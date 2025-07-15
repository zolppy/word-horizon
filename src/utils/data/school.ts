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

const school: Word[] = [
  {
    id: uuid(),
    nome: "Agenda",
    img: agenda,
    som: "agendaSound",
    traducao: "Agenda",
  },
  {
    id: uuid(),
    nome: "Art paints",
    img: artPaints,
    som: "artPaintsSound",
    traducao: "Tintas de arte",
  },
  {
    id: uuid(),
    nome: "Backpack",
    img: backpack,
    som: "backpackSound",
    traducao: "Mochila",
  },
  {
    id: uuid(),
    nome: "Blackboard",
    img: blackboard,
    som: "blackboardSound",
    traducao: "Quadro negro",
  },
  {
    id: uuid(),
    nome: "Board",
    img: board,
    som: "boardSound",
    traducao: "Quadro",
  },
  { id: uuid(), nome: "Book", img: book, som: "bookSound", traducao: "Livro" },
  {
    id: uuid(),
    nome: "Calculator",
    img: calculator,
    som: "calculatorSound",
    traducao: "Calculadora",
  },
  {
    id: uuid(),
    nome: "Colouring pencils",
    img: colouringPencils,
    som: "colouringPencilsSound",
    traducao: "Lápis de cor",
  },
  {
    id: uuid(),
    nome: "Crayon",
    img: crayon,
    som: "crayonSound",
    traducao: "Giz de cera",
  },
  {
    id: uuid(),
    nome: "Desk",
    img: desk,
    som: "deskSound",
    traducao: "Carteira escolar",
  },
  {
    id: uuid(),
    nome: "Eraser",
    img: eraser,
    som: "eraserSound",
    traducao: "Borracha",
  },
  { id: uuid(), nome: "Glue", img: glue, som: "glueSound", traducao: "Cola" },
  {
    id: uuid(),
    nome: "Highlighter",
    img: highlighter,
    som: "highlighterSound",
    traducao: "Marca-texto",
  },
  {
    id: uuid(),
    nome: "Mechanical pencil",
    img: mechanicalPencil,
    som: "mechanicalPencilSound",
    traducao: "Lapiseira",
  },
  {
    id: uuid(),
    nome: "Paper",
    img: paper,
    som: "paperSound",
    traducao: "Papel",
  },
  {
    id: uuid(),
    nome: "Pencil case",
    img: pencilCase,
    som: "pencilCaseSound",
    traducao: "Estojo",
  },
  {
    id: uuid(),
    nome: "Pencil",
    img: pencil,
    som: "pencilSound",
    traducao: "Lápis",
  },
  {
    id: uuid(),
    nome: "Ruler",
    img: ruler,
    som: "rulerSound",
    traducao: "Régua",
  },
  {
    id: uuid(),
    nome: "School chair",
    img: schoolChair,
    som: "schoolChairSound",
    traducao: "Cadeira escolar",
  },
  {
    id: uuid(),
    nome: "Scissors",
    img: scissors,
    som: "scissorsSound",
    traducao: "Tesoura",
  },
  {
    id: uuid(),
    nome: "Sharpener",
    img: sharpener,
    som: "sharpenerSound",
    traducao: "Apontador",
  },
  {
    id: uuid(),
    nome: "Uniform",
    img: uniform,
    som: "uniformSound",
    traducao: "Uniforme",
  },
];

export { school };
