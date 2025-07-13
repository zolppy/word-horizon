import { v4 as uuid } from "uuid";
import { type WordCard } from "../types/wordCard";

// Import images
import alligatorImg from "../../assets/images/words/animals/alligator.webp";
import antImg from "../../assets/images/words/animals/ant.webp";
import bearImg from "../../assets/images/words/animals/bear.jpeg";
import beeImg from "../../assets/images/words/animals/bee.jpg";
import birdImg from "../../assets/images/words/animals/bird.jpg";
import butterflyImg from "../../assets/images/words/animals/butterfly.jpg";
import camelImg from "../../assets/images/words/animals/camel.jpg";
import catImg from "../../assets/images/words/animals/cat.jpg";
import chameleonImg from "../../assets/images/words/animals/chameleon.webp";
import cockroachImg from "../../assets/images/words/animals/cockroach.webp";
import cowImg from "../../assets/images/words/animals/cow.webp";
import dogImg from "../../assets/images/words/animals/dog.webp";
import dolphinImg from "../../assets/images/words/animals/dolphin.webp";
import duckImg from "../../assets/images/words/animals/duck.jpeg";
import eagleImg from "../../assets/images/words/animals/eagle.jpg";
import elephantImg from "../../assets/images/words/animals/elephant.jpg";
import fireflyImg from "../../assets/images/words/animals/firefly.webp";
import fishImg from "../../assets/images/words/animals/fish.jpg";
import flyImg from "../../assets/images/words/animals/fly.jpeg";
import foxImg from "../../assets/images/words/animals/fox.jpeg";
import frogImg from "../../assets/images/words/animals/frog.jpeg";
import goatImg from "../../assets/images/words/animals/goat.jpeg";
import guineaPigImg from "../../assets/images/words/animals/guinea-pig.webp";
import hummingbirdImg from "../../assets/images/words/animals/hammingbird.jpg";
import henImg from "../../assets/images/words/animals/hen.jpg";
import horseImg from "../../assets/images/words/animals/horse.webp";
import lionImg from "../../assets/images/words/animals/lion.jpg";
import monkeyImg from "../../assets/images/words/animals/monkey.jpg";
import octopusImg from "../../assets/images/words/animals/octopus.webp";
import owlImg from "../../assets/images/words/animals/owl.jpg";
import penguinImg from "../../assets/images/words/animals/penguin.jpg";
import pigImg from "../../assets/images/words/animals/pig.avif";
import rabbitImg from "../../assets/images/words/animals/rabbit.webp";
import ratImg from "../../assets/images/words/animals/rat.jpeg";
import roosterImg from "../../assets/images/words/animals/rooster.webp";
import sealImg from "../../assets/images/words/animals/seal.webp";
import sharkImg from "../../assets/images/words/animals/shark.webp";
import sheepImg from "../../assets/images/words/animals/sheep.jpg";
import squirrelImg from "../../assets/images/words/animals/squirrel.webp";
import turtleImg from "../../assets/images/words/animals/turtle.jpg";
import whaleImg from "../../assets/images/words/animals/whale.webp";
import wolfImg from "../../assets/images/words/animals/wolf.jpg";

// Import sounds
import alligatorSound from "../../assets/sounds/animals/alligator.mp3";
import antSound from "../../assets/sounds/animals/ant.mp3";
import bearSound from "../../assets/sounds/animals/bear.mp3";
import beeSound from "../../assets/sounds/animals/bee.mp3";
import birdSound from "../../assets/sounds/animals/bird.mp3";
import butterflySound from "../../assets/sounds/animals/butterfly.mp3";
import camelSound from "../../assets/sounds/animals/camel.mp3";
import catSound from "../../assets/sounds/animals/cat.mp3";
import chameleonSound from "../../assets/sounds/animals/chameleon.mp3";
import cockroachSound from "../../assets/sounds/animals/cockroach.mp3";
import cowSound from "../../assets/sounds/animals/cow.mp3";
import dolphinSound from "../../assets/sounds/animals/dolphin.mp3";
import dogSound from "../../assets/sounds/animals/dog.mp3";
import duckSound from "../../assets/sounds/animals/duck.mp3";
import eagleSound from "../../assets/sounds/animals/eagle.mp3";
import elephantSound from "../../assets/sounds/animals/elephant.mp3";
import fireflySound from "../../assets/sounds/animals/firefly.mp3";
import fishSound from "../../assets/sounds/animals/fish.mp3";
import flySound from "../../assets/sounds/animals/fly.mp3";
import foxSound from "../../assets/sounds/animals/fox.mp3";
import frogSound from "../../assets/sounds/animals/frog.mp3";
import goatSound from "../../assets/sounds/animals/goat.mp3";
import guineaPigSound from "../../assets/sounds/animals/guinea-pig.mp3";
import hummingbirdSound from "../../assets/sounds/animals/hummingbird.mp3";
import henSound from "../../assets/sounds/animals/hen.mp3";
import horseSound from "../../assets/sounds/animals/horse.mp3";
import lionSound from "../../assets/sounds/animals/lion.mp3";
import monkeySound from "../../assets/sounds/animals/monkey.mp3";
import octopusSound from "../../assets/sounds/animals/octopus.mp3";
import owlSound from "../../assets/sounds/animals/owl.mp3";
import penguinSound from "../../assets/sounds/animals/penguin.mp3";
import pigSound from "../../assets/sounds/animals/pig.mp3";
import rabbitSound from "../../assets/sounds/animals/rabbit.mp3";
import ratSound from "../../assets/sounds/animals/rat.mp3";
import roosterSound from "../../assets/sounds/animals/rooster.mp3";
import sealSound from "../../assets/sounds/animals/seal.mp3";
import sharkSound from "../../assets/sounds/animals/shark.mp3";
import sheepSound from "../../assets/sounds/animals/sheep.mp3";
import squirrelSound from "../../assets/sounds/animals/squirrel.mp3";
import turtleSound from "../../assets/sounds/animals/turtle.mp3";
import whaleSound from "../../assets/sounds/animals/whale.mp3";
import wolfSound from "../../assets/sounds/animals/wolf.mp3";

const animals: WordCard[] = [
  {
    id: uuid(),
    nome: "Ant",
    traducao: "Formiga",
    img: antImg,
    som: antSound,
  },
  {
    id: uuid(),
    nome: "Alligator",
    traducao: "Jacaré",
    img: alligatorImg,
    som: alligatorSound,
  },
  {
    id: uuid(),
    nome: "Bear",
    traducao: "Urso",
    img: bearImg,
    som: bearSound,
  },
  {
    id: uuid(),
    nome: "Bee",
    traducao: "Abelha",
    img: beeImg,
    som: beeSound,
  },
  {
    id: uuid(),
    nome: "Bird",
    traducao: "Pássaro",
    img: birdImg,
    som: birdSound,
  },
  {
    id: uuid(),
    nome: "Butterfly",
    traducao: "Borboleta",
    img: butterflyImg,
    som: butterflySound,
  },
  {
    id: uuid(),
    nome: "Camel",
    traducao: "Camelo",
    img: camelImg,
    som: camelSound,
  },
  {
    id: uuid(),
    nome: "Cat",
    traducao: "Gato",
    img: catImg,
    som: catSound,
  },
  {
    id: uuid(),
    nome: "Chameleon",
    traducao: "Camaleão",
    img: chameleonImg,
    som: chameleonSound,
  },
  {
    id: uuid(),
    nome: "Cockroach",
    traducao: "Barata",
    img: cockroachImg,
    som: cockroachSound,
  },
  {
    id: uuid(),
    nome: "Cow",
    traducao: "Vaca",
    img: cowImg,
    som: cowSound,
  },
  {
    id: uuid(),
    nome: "Dog",
    traducao: "Cachorro",
    img: dogImg,
    som: dogSound,
  },
  {
    id: uuid(),
    nome: "Dolphin",
    traducao: "Golfinho",
    img: dolphinImg,
    som: dolphinSound,
  },
  {
    id: uuid(),
    nome: "Duck",
    traducao: "Pato",
    img: duckImg,
    som: duckSound,
  },
  {
    id: uuid(),
    nome: "Eagle",
    traducao: "Águia",
    img: eagleImg,
    som: eagleSound,
  },
  {
    id: uuid(),
    nome: "Elephant",
    traducao: "Elefante",
    img: elephantImg,
    som: elephantSound,
  },
  {
    id: uuid(),
    nome: "Firefly",
    traducao: "Vagalume",
    img: fireflyImg,
    som: fireflySound,
  },
  {
    id: uuid(),
    nome: "Fish",
    traducao: "Peixe",
    img: fishImg,
    som: fishSound,
  },
  {
    id: uuid(),
    nome: "Fly",
    traducao: "Mosca",
    img: flyImg,
    som: flySound,
  },
  {
    id: uuid(),
    nome: "Fox",
    traducao: "Raposa",
    img: foxImg,
    som: foxSound,
  },
  {
    id: uuid(),
    nome: "Frog",
    traducao: "Sapo",
    img: frogImg,
    som: frogSound,
  },
  {
    id: uuid(),
    nome: "Goat",
    traducao: "Cabra",
    img: goatImg,
    som: goatSound,
  },
  {
    id: uuid(),
    nome: "Guinea pig",
    traducao: "Porquinho-da-índia",
    img: guineaPigImg,
    som: guineaPigSound,
  },
  {
    id: uuid(),
    nome: "Hen",
    traducao: "Galinha",
    img: henImg,
    som: henSound,
  },
  {
    id: uuid(),
    nome: "Horse",
    traducao: "Cavalo",
    img: horseImg,
    som: horseSound,
  },
  {
    id: uuid(),
    nome: "Hummingbird",
    traducao: "Beija-flor",
    img: hummingbirdImg,
    som: hummingbirdSound,
  },
  {
    id: uuid(),
    nome: "Lion",
    traducao: "Leão",
    img: lionImg,
    som: lionSound,
  },
  {
    id: uuid(),
    nome: "Monkey",
    traducao: "Macaco",
    img: monkeyImg,
    som: monkeySound,
  },
  {
    id: uuid(),
    nome: "Octopus",
    traducao: "Polvo",
    img: octopusImg,
    som: octopusSound,
  },
  {
    id: uuid(),
    nome: "Owl",
    traducao: "Coruja",
    img: owlImg,
    som: owlSound,
  },
  {
    id: uuid(),
    nome: "Penguin",
    traducao: "Pinguim",
    img: penguinImg,
    som: penguinSound,
  },
  {
    id: uuid(),
    nome: "Pig",
    traducao: "Porco",
    img: pigImg,
    som: pigSound,
  },
  {
    id: uuid(),
    nome: "Rabbit",
    traducao: "Coelho",
    img: rabbitImg,
    som: rabbitSound,
  },
  {
    id: uuid(),
    nome: "Rat",
    traducao: "Rato",
    img: ratImg,
    som: ratSound,
  },
  {
    id: uuid(),
    nome: "Rooster",
    traducao: "Galo",
    img: roosterImg,
    som: roosterSound,
  },
  {
    id: uuid(),
    nome: "Seal",
    traducao: "Foca",
    img: sealImg,
    som: sealSound,
  },
  {
    id: uuid(),
    nome: "Shark",
    traducao: "Tubarão",
    img: sharkImg,
    som: sharkSound,
  },
  {
    id: uuid(),
    nome: "Sheep",
    traducao: "Ovelha",
    img: sheepImg,
    som: sheepSound,
  },
  {
    id: uuid(),
    nome: "Squirrel",
    traducao: "Esquilo",
    img: squirrelImg,
    som: squirrelSound,
  },
  {
    id: uuid(),
    nome: "Turtle",
    traducao: "Tartaruga",
    img: turtleImg,
    som: turtleSound,
  },
  {
    id: uuid(),
    nome: "Whale",
    traducao: "Baleia",
    img: whaleImg,
    som: whaleSound,
  },
  {
    id: uuid(),
    nome: "Wolf",
    traducao: "Lobo",
    img: wolfImg,
    som: wolfSound,
  },
];

export { animals };
