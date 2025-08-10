import { Section } from "../../components/Section";
import { WordList } from "../../components/WordList";
import { Word } from "../../components/Word";
import { clothes } from "../../utils/data/words/clothes";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import type { Word as WordType } from "../../utils/types/word";

export default function Clothes() {
  useDocumentTitle("Word Horizon | Roupas");

  return (
    <Section>
      <WordList>
        {clothes.map(
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
    </Section>
  );
}

Clothes.displayName = "Clothes";
