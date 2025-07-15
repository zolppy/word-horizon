import { v4 as uuid } from "uuid";
import type { Word } from "../types/word";
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

const kitchen: Word[] = [
  {
    id: uuid(),
    nome: "Blender",
    img: blender,
    som: "blenderSound",
    traducao: "Liquidificador",
  },
  { id: uuid(), nome: "Bowl", img: bowl, som: "bowlSound", traducao: "Tigela" },
  { id: uuid(), nome: "Can", img: can, som: "canSound", traducao: "Lata" },
  {
    id: uuid(),
    nome: "Coffee machine",
    img: coffeMachine,
    som: "coffeeMachineSound",
    traducao: "Cafeteira",
  },
  { id: uuid(), nome: "Cup", img: cup, som: "cupSound", traducao: "Xícara" },
  {
    id: uuid(),
    nome: "Dishes",
    img: dishes,
    som: "dishesSound",
    traducao: "Louça",
  },
  {
    id: uuid(),
    nome: "Dishwasher",
    img: dishwasher,
    som: "dishwasherSound",
    traducao: "Lava-louças",
  },
  {
    id: uuid(),
    nome: "Food mixer",
    img: foodMixer,
    som: "foodMixerSound",
    traducao: "Batedeira",
  },
  { id: uuid(), nome: "Fork", img: fork, som: "forkSound", traducao: "Garfo" },
  {
    id: uuid(),
    nome: "Freezer",
    img: freezer,
    som: "freezerSound",
    traducao: "Freezer",
  },
  {
    id: uuid(),
    nome: "Fridge",
    img: fridge,
    som: "fridgeSound",
    traducao: "Geladeira",
  },
  {
    id: uuid(),
    nome: "Frying pan",
    img: fryingPan,
    som: "fryingPanSound",
    traducao: "Frigideira",
  },
  {
    id: uuid(),
    nome: "Glass",
    img: glass,
    som: "glassSound",
    traducao: "Copo de vidro",
  },
  { id: uuid(), nome: "Jar", img: jar, som: "jarSound", traducao: "Pote" },
  {
    id: uuid(),
    nome: "Knife",
    img: knife,
    som: "knifeSound",
    traducao: "Faca",
  },
  {
    id: uuid(),
    nome: "Ladle",
    img: ladle,
    som: "ladleSound",
    traducao: "Concha",
  },
  { id: uuid(), nome: "Pan", img: pan, som: "panSound", traducao: "Panela" },
  {
    id: uuid(),
    nome: "Pitcher",
    img: pitcher,
    som: "pitcherSound",
    traducao: "Jarra",
  },
  {
    id: uuid(),
    nome: "Plate",
    img: plate,
    som: "plateSound",
    traducao: "Prato",
  },
  {
    id: uuid(),
    nome: "Spoon",
    img: spoon,
    som: "spoonSound",
    traducao: "Colher",
  },
  {
    id: uuid(),
    nome: "Stove",
    img: stove,
    som: "stoveSound",
    traducao: "Fogão",
  },
  {
    id: uuid(),
    nome: "Tablecloth",
    img: tablecloth,
    som: "tableclothSound",
    traducao: "Toalha de mesa",
  },
  {
    id: uuid(),
    nome: "Tin foil",
    img: tinFoll,
    som: "tinFoilSound",
    traducao: "Papel alumínio",
  },
  {
    id: uuid(),
    nome: "Toaster",
    img: toaster,
    som: "toasterSound",
    traducao: "Torradeira",
  },
];

export { kitchen };
