import { WordList } from "../../components/WordList";
import { Word } from "../../components/Word";
import { emotions } from "../../utils/data/words/emotions";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import type { Word as WordType } from "../../utils/types/word";

export default function Emotions() {
  useDocumentTitle("Word Horizon | Emoções");

  return (
    <WordList>
      {emotions.map(
        ({ id, englishTerm, portugueseTerm, img, sound }: WordType) => (
          <Word
            key={id}
            englishTerm={englishTerm}
            portugueseTerm={portugueseTerm}
            img={img}
            sound={sound}
          />
        )
      )}
    </WordList>
  );
}

Emotions.displayName = "Emotions";
