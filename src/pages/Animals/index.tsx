import { Section } from "../../components/Section";
import { WordList } from "../../components/WordList";
import { Word } from "../../components/Word";
import { animals } from "../../utils/data/animals";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";

export default function Animals() {
  useDocumentTitle("Word Horizon | Animais");

  return (
    <>
      <Section className="w-full">
        <WordList>
          {animals.map(({ id, nome, traducao, img, som }) => (
            <Word
              key={id}
              nome={nome}
              traducao={traducao}
              img={img}
              som={som}
            />
          ))}
        </WordList>
      </Section>
    </>
  );
}

Animals.displayName = "Animals";
