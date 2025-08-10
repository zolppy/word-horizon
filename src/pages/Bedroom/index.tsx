import { Section } from "../../components/Section";
import { WordList } from "../../components/WordList";
import { Word } from "../../components/Word";
import { bedroom } from "../../utils/data/words/bedroom";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import type { Word as WordType } from "../../utils/types/word";

export default function Bedroom() {
  useDocumentTitle("Word Horizon | Quarto");

  return (
    <Section>
      <WordList>
        {bedroom.map(
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

Bedroom.displayName = "Bedroom";
