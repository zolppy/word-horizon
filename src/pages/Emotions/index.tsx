import { WordList } from "../../components/WordList";
import { Word } from "../../components/Word";
import { emotions } from "../../utils/data/emotions";

export default function Emotions() {
  return (
    <WordList>
      {emotions.map(({ id, nome, traducao, img, som }) => (
        <Word key={id} nome={nome} traducao={traducao} img={img} som={som} />
      ))}
    </WordList>
  );
}

Emotions.displayName = "Emotions";
