import { Section } from "../../components/Section";
import { WordList } from "../../components/WordList";
import { Word } from "../../components/Word";
import { animals } from "../../utils/data/animals";

export default function Animals() {
  return (
    <Section className="w-full">
      <WordList>
        {animals.map(({ id, nome, traducao, img, som }) => (
          <Word key={id} nome={nome} traducao={traducao} img={img} som={som} />
        ))}
      </WordList>
    </Section>
  );
}

Animals.displayName = "Animals";
