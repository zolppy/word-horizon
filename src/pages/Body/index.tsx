import { Section } from "../../components/Section";
import { WordList } from "../../components/WordList";
import { Word } from "../../components/Word";
import { body } from "../../utils/data/words/body";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import type { Word as WordType } from "../../utils/types/word";

export default function Body() {
  useDocumentTitle("Word Horizon | Corpo");

  return (
    <Section>
      <WordList>
        {body.map(
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

Body.displayName = "Body";
