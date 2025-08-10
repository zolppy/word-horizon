import { Section } from "../../components/Section";
import { WordList } from "../../components/WordList";
import { Word } from "../../components/Word";
import { animals } from "../../utils/data/words/animals";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import type { Word as WordType } from "../../utils/types/word";

export default function Animals() {
  useDocumentTitle("Word Horizon | Animais");

  return (
    <>
      <Section className="w-full">
        <WordList>
          {animals.map(
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
    </>
  );
}

Animals.displayName = "Animals";
