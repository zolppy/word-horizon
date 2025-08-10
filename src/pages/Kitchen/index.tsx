import { WordList } from "../../components/WordList";
import { Word } from "../../components/Word";
import { kitchen } from "../../utils/data/words/kitchen";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import type { Word as WordType } from "../../utils/types/word";

export default function Kitchen() {
  useDocumentTitle("Word Horizon | Cozinha");

  return (
    <WordList>
      {kitchen.map(({ id, englishTerm, portugueseTerm, img }: WordType) => (
        <Word
          key={id}
          englishTerm={englishTerm}
          portugueseTerm={portugueseTerm}
          img={img}
        />
      ))}
    </WordList>
  );
}

Kitchen.displayName = "Kitchen";
