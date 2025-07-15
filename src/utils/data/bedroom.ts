import { v4 as uuid } from "uuid";
import { type Word } from "../types/word";

// Import images
import lampImg from "../../assets/images/words/bedroom/lamp.webp";
import bunkBedImg from "../../assets/images/words/bedroom/bunk-bed.jpg";
import cribImg from "../../assets/images/words/bedroom/crib.jpeg";
import headboardImg from "../../assets/images/words/bedroom/headboard.webp";
import bedImg from "../../assets/images/words/bedroom/bed.webp";
import laundryBasketImg from "../../assets/images/words/bedroom/laundry-basket.jpeg";
import slippersImg from "../../assets/images/words/bedroom/slippers.webp";
import blanketImg from "../../assets/images/words/bedroom/blanket.webp";
import mattressImg from "../../assets/images/words/bedroom/mattress.webp";
import mirrorImg from "../../assets/images/words/bedroom/mirror.jpg";
import pillowcaseImg from "../../assets/images/words/bedroom/pillowcase.jpeg";
import closetImg from "../../assets/images/words/bedroom/closet.webp";
import sheetImg from "../../assets/images/words/bedroom/sheet.jpg";
import nightstandImg from "../../assets/images/words/bedroom/nightstand.webp";
import dresserImg from "../../assets/images/words/bedroom/dresser.jpeg";
import pajamasImg from "../../assets/images/words/bedroom/pajamas.jpeg";
import shoeRackImg from "../../assets/images/words/bedroom/shoe-rack.jpg";
import pillowImg from "../../assets/images/words/bedroom/pillow.jpeg";

// Import sounds
import lampSound from "../../assets/sounds/bedroom/lamp.mp3";
import bunkBedSound from "../../assets/sounds/bedroom/bunk-bed.mp3";
import cribSound from "../../assets/sounds/bedroom/crib.mp3";
import headboardSound from "../../assets/sounds/bedroom/headboard.mp3";
import bedSound from "../../assets/sounds/bedroom/bed.mp3";
import laundryBasketSound from "../../assets/sounds/bedroom/laundry-basket.mp3";
import slippersSound from "../../assets/sounds/bedroom/slippers.mp3";
import blanketSound from "../../assets/sounds/bedroom/blanket.mp3";
import mattressSound from "../../assets/sounds/bedroom/mattress.mp3";
import mirrorSound from "../../assets/sounds/bedroom/mirror.mp3";
import pillowcaseSound from "../../assets/sounds/bedroom/pillowcase.mp3";
import closetSound from "../../assets/sounds/bedroom/closet.mp3";
import sheetSound from "../../assets/sounds/bedroom/sheet.mp3";
import nightstandSound from "../../assets/sounds/bedroom/nightstand.mp3";
import dresserSound from "../../assets/sounds/bedroom/dresser.mp3";
import pajamasSound from "../../assets/sounds/bedroom/pajamas.mp3";
import shoeRackSound from "../../assets/sounds/bedroom/shoe-rack.mp3";
import pillowSound from "../../assets/sounds/bedroom/pillow.mp3";

const bedroom: Word[] = [
  {
    id: uuid(),
    nome: "Lamp",
    traducao: "Abajur",
    img: lampImg,
    som: lampSound,
  },
  {
    id: uuid(),
    nome: "Bunk bed",
    traducao: "Beliche",
    img: bunkBedImg,
    som: bunkBedSound,
  },
  {
    id: uuid(),
    nome: "Crib",
    traducao: "Berço",
    img: cribImg,
    som: cribSound,
  },
  {
    id: uuid(),
    nome: "Headboard",
    traducao: "Cabeceira da cama",
    img: headboardImg,
    som: headboardSound,
  },
  {
    id: uuid(),
    nome: "Bed",
    traducao: "Cama",
    img: bedImg,
    som: bedSound,
  },
  {
    id: uuid(),
    nome: "Laundry basket",
    traducao: "Cesto de roupa suja",
    img: laundryBasketImg,
    som: laundryBasketSound,
  },
  {
    id: uuid(),
    nome: "Slippers",
    traducao: "Chinelo",
    img: slippersImg,
    som: slippersSound,
  },
  {
    id: uuid(),
    nome: "Blanket",
    traducao: "Cobertor",
    img: blanketImg,
    som: blanketSound,
  },
  {
    id: uuid(),
    nome: "Mattress",
    traducao: "Colchão",
    img: mattressImg,
    som: mattressSound,
  },
  {
    id: uuid(),
    nome: "Mirror",
    traducao: "Espelho",
    img: mirrorImg,
    som: mirrorSound,
  },
  {
    id: uuid(),
    nome: "Pillowcase",
    traducao: "Fronha",
    img: pillowcaseImg,
    som: pillowcaseSound,
  },
  {
    id: uuid(),
    nome: "Closet",
    traducao: "Guarda-roupa",
    img: closetImg,
    som: closetSound,
  },
  {
    id: uuid(),
    nome: "Sheet",
    traducao: "Lençol",
    img: sheetImg,
    som: sheetSound,
  },
  {
    id: uuid(),
    nome: "Nightstand",
    traducao: "Mesa de cabeceira",
    img: nightstandImg,
    som: nightstandSound,
  },
  {
    id: uuid(),
    nome: "Dresser",
    traducao: "Penteadeira",
    img: dresserImg,
    som: dresserSound,
  },
  {
    id: uuid(),
    nome: "Pajamas",
    traducao: "Pijama",
    img: pajamasImg,
    som: pajamasSound,
  },
  {
    id: uuid(),
    nome: "Shoe rack",
    traducao: "Sapateira",
    img: shoeRackImg,
    som: shoeRackSound,
  },
  {
    id: uuid(),
    nome: "Pillow",
    traducao: "Travesseiro",
    img: pillowImg,
    som: pillowSound,
  },
];

export { bedroom };
