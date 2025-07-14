import { v4 as uuid } from "uuid";
import type { WordCard as WordCardType } from "../types/wordCard";
import aunt from "../../assets/images/words/family/aunt.jpg";
import brotherInLaw from "../../assets/images/words/family/brother-in-law.avif";
import brother from "../../assets/images/words/family/brother.jpeg";
import child from "../../assets/images/words/family/child.avif";
import children from "../../assets/images/words/family/children.png";
import cousin from "../../assets/images/words/family/cousin.avif";
import daughterInLaw from "../../assets/images/words/family/daughter-in-law.jpg";
import daughter from "../../assets/images/words/family/daughter.png";
import fatherInLaw from "../../assets/images/words/family/father-in-law.jpg";
import father from "../../assets/images/words/family/father.jpg";
import grandfather from "../../assets/images/words/family/grandfather.avif";
import grandmother from "../../assets/images/words/family/grandmother.avif";
import husband from "../../assets/images/words/family/husband.jpeg";
import motherInLaw from "../../assets/images/words/family/mother-in-law.jpg";
import mother from "../../assets/images/words/family/mother.avif";
import nephew from "../../assets/images/words/family/nephew.avif";
import niece from "../../assets/images/words/family/niece.avif";
import parentsInLaw from "../../assets/images/words/family/parents-in-law.jpg";
import parents from "../../assets/images/words/family/parents.jpg";
import sisterInLaw from "../../assets/images/words/family/sister-in-law.jpg";
import sister from "../../assets/images/words/family/sister.webp";
import sonInLaw from "../../assets/images/words/family/son-in-law.jpg";
import son from "../../assets/images/words/family/son.jpg";
import uncle from "../../assets/images/words/family/uncle.avif";
import wife from "../../assets/images/words/family/wife.jpeg";

const Family: WordCardType[] = [
  { id: uuid(), nome: "aunt", img: aunt, som: "auntSound", traducao: "tia" },
  {
    id: uuid(),
    nome: "brother-in-law",
    img: brotherInLaw,
    som: "brotherInLawSound",
    traducao: "cunhado",
  },
  {
    id: uuid(),
    nome: "brother",
    img: brother,
    som: "brotherSound",
    traducao: "irmão",
  },
  {
    id: uuid(),
    nome: "child",
    img: child,
    som: "childSound",
    traducao: "criança",
  },
  {
    id: uuid(),
    nome: "children",
    img: children,
    som: "childrenSound",
    traducao: "crianças",
  },
  {
    id: uuid(),
    nome: "cousin",
    img: cousin,
    som: "cousinSound",
    traducao: "primo / prima",
  },
  {
    id: uuid(),
    nome: "daughter-in-law",
    img: daughterInLaw,
    som: "daughterInLawSound",
    traducao: "nora",
  },
  {
    id: uuid(),
    nome: "daughter",
    img: daughter,
    som: "daughterSound",
    traducao: "filha",
  },
  {
    id: uuid(),
    nome: "father-in-law",
    img: fatherInLaw,
    som: "fatherInLawSound",
    traducao: "sogro",
  },
  {
    id: uuid(),
    nome: "father",
    img: father,
    som: "fatherSound",
    traducao: "pai",
  },
  {
    id: uuid(),
    nome: "grandfather",
    img: grandfather,
    som: "grandfatherSound",
    traducao: "avô",
  },
  {
    id: uuid(),
    nome: "grandmother",
    img: grandmother,
    som: "grandmotherSound",
    traducao: "avó",
  },
  {
    id: uuid(),
    nome: "husband",
    img: husband,
    som: "husbandSound",
    traducao: "marido",
  },
  {
    id: uuid(),
    nome: "mother-in-law",
    img: motherInLaw,
    som: "motherInLawSound",
    traducao: "sogra",
  },
  {
    id: uuid(),
    nome: "mother",
    img: mother,
    som: "motherSound",
    traducao: "mãe",
  },
  {
    id: uuid(),
    nome: "nephew",
    img: nephew,
    som: "nephewSound",
    traducao: "sobrinho",
  },
  {
    id: uuid(),
    nome: "niece",
    img: niece,
    som: "nieceSound",
    traducao: "sobrinha",
  },
  {
    id: uuid(),
    nome: "parents-in-law",
    img: parentsInLaw,
    som: "parentsInLawSound",
    traducao: "sogros",
  },
  {
    id: uuid(),
    nome: "parents",
    img: parents,
    som: "parentsSound",
    traducao: "pais",
  },
  {
    id: uuid(),
    nome: "sister-in-law",
    img: sisterInLaw,
    som: "sisterInLawSound",
    traducao: "cunhada",
  },
  {
    id: uuid(),
    nome: "sister",
    img: sister,
    som: "sisterSound",
    traducao: "irmã",
  },
  {
    id: uuid(),
    nome: "son-in-law",
    img: sonInLaw,
    som: "sonInLawSound",
    traducao: "genro",
  },
  { id: uuid(), nome: "son", img: son, som: "sonSound", traducao: "filho" },

  { id: uuid(), nome: "uncle", img: uncle, som: "uncleSound", traducao: "tio" },

  { id: uuid(), nome: "wife", img: wife, som: "wifeSound", traducao: "esposa" },
];

export { Family };
