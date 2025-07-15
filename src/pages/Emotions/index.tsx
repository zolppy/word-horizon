import { WordList } from "../../components/WordList";
import { Word } from "../../components/Word";
import { emotions } from "../../utils/data/emotions";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";

export default function Emotions() {
  useDocumentTitle("Word Horizon | Emoções");

  return (
    <WordList>
      {emotions.map(({ id, nome, traducao, img, som }) => (
        <Word key={id} nome={nome} traducao={traducao} img={img} som={som} />
      ))}
    </WordList>
  );
}

Emotions.displayName = "Emotions";
