import { WordList } from "../../components/WordList";
import { Word } from "../../components/Word";
import { school } from "../../utils/data/words/school";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import type { Word as WordType } from "../../utils/types/word";

export default function School() {
  useDocumentTitle("Word Horizon | Escola");

  return (
    <WordList>
      {school.map(
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

School.displayName = "School";
