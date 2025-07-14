import { v4 as uuid } from "uuid";
import type { WordCard as WordCardType } from "../types/wordCard";
import blender from "../../assets/images/words/kitchen/blender.webp";
import bowl from "../../assets/images/words/kitchen/bowl.webp";
import can from "../../assets/images/words/kitchen/can.jpeg";
import coffeMachine from "../../assets/images/words/kitchen/coffee-machine.jpeg";
import cup from "../../assets/images/words/kitchen/cup.webp";
import dishes from "../../assets/images/words/kitchen/dishes.jpg";
import dishwasher from "../../assets/images/words/kitchen/dishwasher.webp";
import foodMixer from "../../assets/images/words/kitchen/food-mixer.webp";
import fork from "../../assets/images/words/kitchen/fork.jpg";
import freezer from "../../assets/images/words/kitchen/freezer.jpg";
import fridge from "../../assets/images/words/kitchen/fridge.webp";
import fryingPan from "../../assets/images/words/kitchen/frying-pan.webp";
import glass from "../../assets/images/words/kitchen/glass.jpg";
import jar from "../../assets/images/words/kitchen/jar.webp";
import knife from "../../assets/images/words/kitchen/knife.webp";
import ladle from "../../assets/images/words/kitchen/ladle.webp";
import pan from "../../assets/images/words/kitchen/pan.webp";
import pitcher from "../../assets/images/words/kitchen/pitcher.jpg";
import plate from "../../assets/images/words/kitchen/plate.webp";
import spoon from "../../assets/images/words/kitchen/spoon.jpeg";
import stove from "../../assets/images/words/kitchen/stove.avif";
import tablecloth from "../../assets/images/words/kitchen/tablecloth.jpg";
import tinFoll from "../../assets/images/words/kitchen/tin-foll.jpg";
import toaster from "../../assets/images/words/kitchen/toaster.jpg";

const Kitchen: WordCardType[] = [
  {
    id: uuid(),
    nome: "blender",
    img: blender,
    som: "blenderSound",
    traducao: "liquidificador",
  },
  { id: uuid(), nome: "bowl", img: bowl, som: "bowlSound", traducao: "tigela" },
  { id: uuid(), nome: "can", img: can, som: "canSound", traducao: "lata" },
  {
    id: uuid(),
    nome: "coffee machine",
    img: coffeMachine,
    som: "coffeeMachineSound",
    traducao: "cafeteira",
  },
  { id: uuid(), nome: "cup", img: cup, som: "cupSound", traducao: "xícara" },
  {
    id: uuid(),
    nome: "dishes",
    img: dishes,
    som: "dishesSound",
    traducao: "louça",
  },
  {
    id: uuid(),
    nome: "dishwasher",
    img: dishwasher,
    som: "dishwasherSound",
    traducao: "lava-louças",
  },
  {
    id: uuid(),
    nome: "food mixer",
    img: foodMixer,
    som: "foodMixerSound",
    traducao: "batedeira",
  },
  { id: uuid(), nome: "fork", img: fork, som: "forkSound", traducao: "garfo" },
  {
    id: uuid(),
    nome: "freezer",
    img: freezer,
    som: "freezerSound",
    traducao: "freezer",
  },
  {
    id: uuid(),
    nome: "fridge",
    img: fridge,
    som: "fridgeSound",
    traducao: "geladeira",
  },
  {
    id: uuid(),
    nome: "frying pan",
    img: fryingPan,
    som: "fryingPanSound",
    traducao: "frigideira",
  },
  {
    id: uuid(),
    nome: "glass",
    img: glass,
    som: "glassSound",
    traducao: "copo de vidro",
  },
  { id: uuid(), nome: "jar", img: jar, som: "jarSound", traducao: "pote" },
  {
    id: uuid(),
    nome: "knife",
    img: knife,
    som: "knifeSound",
    traducao: "faca",
  },
  {
    id: uuid(),
    nome: "ladle",
    img: ladle,
    som: "ladleSound",
    traducao: "concha",
  },
  { id: uuid(), nome: "pan", img: pan, som: "panSound", traducao: "panela" },
  {
    id: uuid(),
    nome: "pitcher",
    img: pitcher,
    som: "pitcherSound",
    traducao: "jarra",
  },
  {
    id: uuid(),
    nome: "plate",
    img: plate,
    som: "plateSound",
    traducao: "prato",
  },
  {
    id: uuid(),
    nome: "spoon",
    img: spoon,
    som: "spoonSound",
    traducao: "colher",
  },
  {
    id: uuid(),
    nome: "stove",
    img: stove,
    som: "stoveSound",
    traducao: "fogão",
  },
  {
    id: uuid(),
    nome: "tablecloth",
    img: tablecloth,
    som: "tableclothSound",
    traducao: "toalha de mesa",
  },
  {
    id: uuid(),
    nome: "tin foil",
    img: tinFoll,
    som: "tinFoilSound",
    traducao: "papel alumínio",
  },
  {
    id: uuid(),
    nome: "toaster",
    img: toaster,
    som: "toasterSound",
    traducao: "torradeira",
  },
];

export { Kitchen };
