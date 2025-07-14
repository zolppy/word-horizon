import { v4 as uuid } from "uuid";
import { type WordCard } from "../types/wordCard";

// Import images
import armImg from "../../assets/images/words/body/arm.avif";
import backImg from "../../assets/images/words/body/back.jpg";
import cheekImg from "../../assets/images/words/body/cheek.jpeg";
import chestImg from "../../assets/images/words/body/chest.jpg";
import chinImg from "../../assets/images/words/body/chin.jpg";
import earImg from "../../assets/images/words/body/ear.jpg";
import eyebrowImg from "../../assets/images/words/body/eyebrow.jpeg";
import eyeImg from "../../assets/images/words/body/eye.jpg";
import fingerImg from "../../assets/images/words/body/finger.jpg";
import fingernailImg from "../../assets/images/words/body/fingernail.jpg";
import footImg from "../../assets/images/words/body/foot.png";
import hairImg from "../../assets/images/words/body/hair.jpg";
import handImg from "../../assets/images/words/body/hand.avif";
import headImg from "../../assets/images/words/body/head.avif";
import kneeImg from "../../assets/images/words/body/knee.jpg";
import legImg from "../../assets/images/words/body/leg.jpeg";
import mouthImg from "../../assets/images/words/body/mouth.jpg";
import noseImg from "../../assets/images/words/body/nose.jpeg";
import penisImg from "../../assets/images/words/body/penis.avif";
import shoulderImg from "../../assets/images/words/body/shoulder.jpg";
import thighImg from "../../assets/images/words/body/thigh.jpeg";
import toeImg from "../../assets/images/words/body/toe.png";
import toenailImg from "../../assets/images/words/body/toenail.jpg";
import tongueImg from "../../assets/images/words/body/tongue.jpg";
import toothImg from "../../assets/images/words/body/tooth.jpg";
import vaginaImg from "../../assets/images/words/body/vagina.jpg";
import waistImg from "../../assets/images/words/body/waist.webp";

// Import sounds
import armSound from "../../assets/sounds/body/arm.mp3";
import backSound from "../../assets/sounds/body/back.mp3";
import cheekSound from "../../assets/sounds/body/cheek.mp3";
import chestSound from "../../assets/sounds/body/chest.mp3";
import chinSound from "../../assets/sounds/body/chin.mp3";
import earSound from "../../assets/sounds/body/ear.mp3";
import eyebrowSound from "../../assets/sounds/body/eyebrow.mp3";
import eyeSound from "../../assets/sounds/body/eye.mp3";
import fingerSound from "../../assets/sounds/body/finger.mp3";
import fingernailSound from "../../assets/sounds/body/fingernail.mp3";
import footSound from "../../assets/sounds/body/foot.mp3";
import hairSound from "../../assets/sounds/body/hair.mp3";
import handSound from "../../assets/sounds/body/hand.mp3";
import headSound from "../../assets/sounds/body/head.mp3";
import kneeSound from "../../assets/sounds/body/knee.mp3";
import legSound from "../../assets/sounds/body/leg.mp3";
import mouthSound from "../../assets/sounds/body/mouth.mp3";
import noseSound from "../../assets/sounds/body/nose.mp3";
import penisSound from "../../assets/sounds/body/penis.mp3";
import shoulderSound from "../../assets/sounds/body/shoulder.mp3";
import thighSound from "../../assets/sounds/body/thigh.mp3";
import toeSound from "../../assets/sounds/body/toe.mp3";
import toenailSound from "../../assets/sounds/body/toenail.mp3";
import tongueSound from "../../assets/sounds/body/tongue.mp3";
import toothSound from "../../assets/sounds/body/tooth.mp3";
import vaginaSound from "../../assets/sounds/body/vagina.mp3";
import waistSound from "../../assets/sounds/body/waist.mp3";

const body: WordCard[] = [
  {
    id: uuid(),
    nome: "Arm",
    traducao: "Braço",
    img: armImg,
    som: armSound,
  },
  {
    id: uuid(),
    nome: "Back",
    traducao: "Costas",
    img: backImg,
    som: backSound,
  },
  {
    id: uuid(),
    nome: "Cheek",
    traducao: "Bochecha",
    img: cheekImg,
    som: cheekSound,
  },
  {
    id: uuid(),
    nome: "Chest",
    traducao: "Peito",
    img: chestImg,
    som: chestSound,
  },
  {
    id: uuid(),
    nome: "Chin",
    traducao: "Queixo",
    img: chinImg,
    som: chinSound,
  },
  {
    id: uuid(),
    nome: "Ear",
    traducao: "Orelha",
    img: earImg,
    som: earSound,
  },
  {
    id: uuid(),
    nome: "Eyebrow",
    traducao: "Sobrancelha",
    img: eyebrowImg,
    som: eyebrowSound,
  },
  {
    id: uuid(),
    nome: "Eye",
    traducao: "Olho",
    img: eyeImg,
    som: eyeSound,
  },
  {
    id: uuid(),
    nome: "Finger",
    traducao: "Dedo da mão",
    img: fingerImg,
    som: fingerSound,
  },
  {
    id: uuid(),
    nome: "Fingernail",
    traducao: "Unha da mão",
    img: fingernailImg,
    som: fingernailSound,
  },
  {
    id: uuid(),
    nome: "Foot",
    traducao: "Pé",
    img: footImg,
    som: footSound,
  },
  {
    id: uuid(),
    nome: "Hair",
    traducao: "Cabelo",
    img: hairImg,
    som: hairSound,
  },
  {
    id: uuid(),
    nome: "Hand",
    traducao: "Mão",
    img: handImg,
    som: handSound,
  },
  {
    id: uuid(),
    nome: "Head",
    traducao: "Cabeça",
    img: headImg,
    som: headSound,
  },
  {
    id: uuid(),
    nome: "Knee",
    traducao: "Joelho",
    img: kneeImg,
    som: kneeSound,
  },
  {
    id: uuid(),
    nome: "Leg",
    traducao: "Perna",
    img: legImg,
    som: legSound,
  },
  {
    id: uuid(),
    nome: "Mouth",
    traducao: "Boca",
    img: mouthImg,
    som: mouthSound,
  },
  {
    id: uuid(),
    nome: "Nose",
    traducao: "Nariz",
    img: noseImg,
    som: noseSound,
  },
  {
    id: uuid(),
    nome: "Penis",
    traducao: "Pênis",
    img: penisImg,
    som: penisSound,
  },
  {
    id: uuid(),
    nome: "Shoulder",
    traducao: "Ombro",
    img: shoulderImg,
    som: shoulderSound,
  },
  {
    id: uuid(),
    nome: "Thigh",
    traducao: "Coxa",
    img: thighImg,
    som: thighSound,
  },
  {
    id: uuid(),
    nome: "Toe",
    traducao: "Dedo do pé",
    img: toeImg,
    som: toeSound,
  },
  {
    id: uuid(),
    nome: "Toenail",
    traducao: "Unha do pé",
    img: toenailImg,
    som: toenailSound,
  },
  {
    id: uuid(),
    nome: "Tongue",
    traducao: "Língua",
    img: tongueImg,
    som: tongueSound,
  },
  {
    id: uuid(),
    nome: "Tooth",
    traducao: "Dente",
    img: toothImg,
    som: toothSound,
  },
  {
    id: uuid(),
    nome: "Vagina",
    traducao: "Vagina",
    img: vaginaImg,
    som: vaginaSound,
  },
  {
    id: uuid(),
    nome: "Waist",
    traducao: "Cintura",
    img: waistImg,
    som: waistSound,
  },
];

export { body };
