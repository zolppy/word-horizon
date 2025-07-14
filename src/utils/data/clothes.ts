import { v4 as uuid } from "uuid";
import { type WordCard } from "../types/wordCard";

// Import images
import beltImg from "../../assets/images/words/clothes/belt.jpg";
import bootImg from "../../assets/images/words/clothes/boot.webp";
import braImg from "../../assets/images/words/clothes/bra.jpeg";
import braceletImg from "../../assets/images/words/clothes/bracelet.png";
import capImg from "../../assets/images/words/clothes/cap.jpeg";
import dressImg from "../../assets/images/words/clothes/dress.webp";
import earringImg from "../../assets/images/words/clothes/earring.webp";
import gloveImg from "../../assets/images/words/clothes/glove.webp";
import hatImg from "../../assets/images/words/clothes/hat.webp";
import jacketImg from "../../assets/images/words/clothes/jacket.webp";
import necklaceImg from "../../assets/images/words/clothes/necklace.webp";
import pantImg from "../../assets/images/words/clothes/pant.webp";
import pantiesImg from "../../assets/images/words/clothes/panties.jpeg";
import ringImg from "../../assets/images/words/clothes/ring.jpeg";
import scarfImg from "../../assets/images/words/clothes/scarf.jpeg";
import shirtImg from "../../assets/images/words/clothes/shirt.jpg";
import shoeImg from "../../assets/images/words/clothes/shoe.jpeg";
import skirtImg from "../../assets/images/words/clothes/skirt.avif";
import sockImg from "../../assets/images/words/clothes/sock.jpeg";
import suitImg from "../../assets/images/words/clothes/suit.jpg";
import tieImg from "../../assets/images/words/clothes/tie.jpg";
import tShirtImg from "../../assets/images/words/clothes/t-shirt.webp";
import underwearImg from "../../assets/images/words/clothes/underwear.jpeg";
import weddingRingImg from "../../assets/images/words/clothes/wedding-ring.jpeg";

// Import sounds
import beltSound from "../../assets/sounds/clothes/belt.mp3";
import bootSound from "../../assets/sounds/clothes/boot.mp3";
import braSound from "../../assets/sounds/clothes/bra.mp3";
import braceletSound from "../../assets/sounds/clothes/bracelet.mp3";
import capSound from "../../assets/sounds/clothes/cap.mp3";
import dressSound from "../../assets/sounds/clothes/dress.mp3";
import earringSound from "../../assets/sounds/clothes/earring.mp3";
import gloveSound from "../../assets/sounds/clothes/glove.mp3";
import hatSound from "../../assets/sounds/clothes/hat.mp3";
import jacketSound from "../../assets/sounds/clothes/jacket.mp3";
import necklaceSound from "../../assets/sounds/clothes/necklace.mp3";
import pantSound from "../../assets/sounds/clothes/pant.mp3";
import pantiesSound from "../../assets/sounds/clothes/panties.mp3";
import ringSound from "../../assets/sounds/clothes/ring.mp3";
import scarfSound from "../../assets/sounds/clothes/scarf.mp3";
import shirtSound from "../../assets/sounds/clothes/shirt.mp3";
import shoeSound from "../../assets/sounds/clothes/shoe.mp3";
import skirtSound from "../../assets/sounds/clothes/skirt.mp3";
import sockSound from "../../assets/sounds/clothes/sock.mp3";
import suitSound from "../../assets/sounds/clothes/suit.mp3";
import tieSound from "../../assets/sounds/clothes/tie.mp3";
import tshirtSound from "../../assets/sounds/clothes/t-shirt.mp3";
import underwearSound from "../../assets/sounds/clothes/underwear.mp3";
import weddingRingSound from "../../assets/sounds/clothes/weddingRing.mp3";

const clothes: WordCard[] = [
  {
    id: uuid(),
    nome: "Belt",
    traducao: "Cinto",
    img: beltImg,
    som: beltSound,
  },
  {
    id: uuid(),
    nome: "Boot",
    traducao: "Bota",
    img: bootImg,
    som: bootSound,
  },
  {
    id: uuid(),
    nome: "Bra",
    traducao: "Sutiã",
    img: braImg,
    som: braSound,
  },
  {
    id: uuid(),
    nome: "Bracelet",
    traducao: "Pulseira",
    img: braceletImg,
    som: braceletSound,
  },
  {
    id: uuid(),
    nome: "Cap",
    traducao: "Boné",
    img: capImg,
    som: capSound,
  },
  {
    id: uuid(),
    nome: "Dress",
    traducao: "Vestido",
    img: dressImg,
    som: dressSound,
  },
  {
    id: uuid(),
    nome: "Earring",
    traducao: "Brinco",
    img: earringImg,
    som: earringSound,
  },
  {
    id: uuid(),
    nome: "Glove",
    traducao: "Luva",
    img: gloveImg,
    som: gloveSound,
  },
  {
    id: uuid(),
    nome: "Hat",
    traducao: "Chapéu",
    img: hatImg,
    som: hatSound,
  },
  {
    id: uuid(),
    nome: "Jacket",
    traducao: "Jaqueta",
    img: jacketImg,
    som: jacketSound,
  },
  {
    id: uuid(),
    nome: "Necklace",
    traducao: "Colar",
    img: necklaceImg,
    som: necklaceSound,
  },
  {
    id: uuid(),
    nome: "Pant",
    traducao: "Calça",
    img: pantImg,
    som: pantSound,
  },
  {
    id: uuid(),
    nome: "Panties",
    traducao: "Calcinha",
    img: pantiesImg,
    som: pantiesSound,
  },
  {
    id: uuid(),
    nome: "Ring",
    traducao: "Anel",
    img: ringImg,
    som: ringSound,
  },
  {
    id: uuid(),
    nome: "Scarf",
    traducao: "Cachecol",
    img: scarfImg,
    som: scarfSound,
  },
  {
    id: uuid(),
    nome: "Shirt",
    traducao: "Camisa",
    img: shirtImg,
    som: shirtSound,
  },
  {
    id: uuid(),
    nome: "Shoe",
    traducao: "Sapato",
    img: shoeImg,
    som: shoeSound,
  },
  {
    id: uuid(),
    nome: "Skirt",
    traducao: "Saia",
    img: skirtImg,
    som: skirtSound,
  },
  {
    id: uuid(),
    nome: "Sock",
    traducao: "Meia",
    img: sockImg,
    som: sockSound,
  },
  {
    id: uuid(),
    nome: "Suit",
    traducao: "Terno",
    img: suitImg,
    som: suitSound,
  },
  {
    id: uuid(),
    nome: "T-shirt",
    traducao: "Camiseta",
    img: tShirtImg,
    som: tshirtSound,
  },
  {
    id: uuid(),
    nome: "Tie",
    traducao: "Gravata",
    img: tieImg,
    som: tieSound,
  },
  {
    id: uuid(),
    nome: "Underwear",
    traducao: "Cueca",
    img: underwearImg,
    som: underwearSound,
  },
  {
    id: uuid(),
    nome: "Wedding ring",
    traducao: "Aliança",
    img: weddingRingImg,
    som: weddingRingSound,
  },
];

export { clothes };
