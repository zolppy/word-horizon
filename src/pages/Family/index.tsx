import { WordList } from "../../components/WordList";
import { Word } from "../../components/Word";
import { family } from "../../utils/data/family";

export default function Family() {
  return (
    <WordList>
      {family.map(({ id, nome, traducao, img, som }) => (
        <Word key={id} nome={nome} traducao={traducao} img={img} som={som} />
      ))}
    </WordList>
  );
}

Family.displayName = "Family";
