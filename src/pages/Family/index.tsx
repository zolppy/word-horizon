import { WordList } from "../../components/WordList";
import { Word } from "../../components/Word";
import { family } from "../../utils/data/family";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";

export default function Family() {
  useDocumentTitle("Word Horizon | Família");

  return (
    <WordList>
      {family.map(({ id, nome, traducao, img, som }) => (
        <Word key={id} nome={nome} traducao={traducao} img={img} som={som} />
      ))}
    </WordList>
  );
}

Family.displayName = "Family";
