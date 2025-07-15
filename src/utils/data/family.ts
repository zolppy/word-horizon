import { v4 as uuid } from "uuid";
import type { Word } from "../types/word";
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

const family: Word[] = [
  { id: uuid(), nome: "Aunt", img: aunt, som: "auntSound", traducao: "Tia" },
  {
    id: uuid(),
    nome: "Brother-in-law",
    img: brotherInLaw,
    som: "brotherInLawSound",
    traducao: "Cunhado",
  },
  {
    id: uuid(),
    nome: "Brother",
    img: brother,
    som: "brotherSound",
    traducao: "Irmão",
  },
  {
    id: uuid(),
    nome: "Child",
    img: child,
    som: "childSound",
    traducao: "Criança",
  },
  {
    id: uuid(),
    nome: "Children",
    img: children,
    som: "childrenSound",
    traducao: "Crianças",
  },
  {
    id: uuid(),
    nome: "Cousin",
    img: cousin,
    som: "cousinSound",
    traducao: "Primo / Prima",
  },
  {
    id: uuid(),
    nome: "Daughter-in-law",
    img: daughterInLaw,
    som: "daughterInLawSound",
    traducao: "Nora",
  },
  {
    id: uuid(),
    nome: "Daughter",
    img: daughter,
    som: "daughterSound",
    traducao: "Filha",
  },
  {
    id: uuid(),
    nome: "Father-in-law",
    img: fatherInLaw,
    som: "fatherInLawSound",
    traducao: "Sogro",
  },
  {
    id: uuid(),
    nome: "Father",
    img: father,
    som: "fatherSound",
    traducao: "Pai",
  },
  {
    id: uuid(),
    nome: "Grandfather",
    img: grandfather,
    som: "grandfatherSound",
    traducao: "Avô",
  },
  {
    id: uuid(),
    nome: "Grandmother",
    img: grandmother,
    som: "grandmotherSound",
    traducao: "Avó",
  },
  {
    id: uuid(),
    nome: "Husband",
    img: husband,
    som: "husbandSound",
    traducao: "Marido",
  },
  {
    id: uuid(),
    nome: "Mother-in-law",
    img: motherInLaw,
    som: "motherInLawSound",
    traducao: "Sogra",
  },
  {
    id: uuid(),
    nome: "Mother",
    img: mother,
    som: "motherSound",
    traducao: "Mãe",
  },
  {
    id: uuid(),
    nome: "Nephew",
    img: nephew,
    som: "nephewSound",
    traducao: "Sobrinho",
  },
  {
    id: uuid(),
    nome: "Niece",
    img: niece,
    som: "nieceSound",
    traducao: "Sobrinha",
  },
  {
    id: uuid(),
    nome: "Parents-in-law",
    img: parentsInLaw,
    som: "parentsInLawSound",
    traducao: "Sogros",
  },
  {
    id: uuid(),
    nome: "Parents",
    img: parents,
    som: "parentsSound",
    traducao: "Pais",
  },
  {
    id: uuid(),
    nome: "Sister-in-law",
    img: sisterInLaw,
    som: "sisterInLawSound",
    traducao: "Cunhada",
  },
  {
    id: uuid(),
    nome: "Sister",
    img: sister,
    som: "sisterSound",
    traducao: "Irmã",
  },
  {
    id: uuid(),
    nome: "Son-in-law",
    img: sonInLaw,
    som: "sonInLawSound",
    traducao: "Genro",
  },
  { id: uuid(), nome: "Son", img: son, som: "sonSound", traducao: "Filho" },
  { id: uuid(), nome: "Uncle", img: uncle, som: "uncleSound", traducao: "Tio" },
  { id: uuid(), nome: "Wife", img: wife, som: "wifeSound", traducao: "Esposa" },
];

export { family };
