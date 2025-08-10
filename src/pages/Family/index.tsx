import { WordList } from "../../components/WordList";
import { Word } from "../../components/Word";
import { family } from "../../utils/data/words/family";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import type { Word as WordType } from "../../utils/types/word";

export default function Family() {
  useDocumentTitle("Word Horizon | Família");

  return (
    <WordList>
      {family.map(
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

Family.displayName = "Family";
