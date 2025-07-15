import { Section } from "../../components/Section";
import { WordList } from "../../components/WordList";
import { Word } from "../../components/Word";
import { body } from "../../utils/data/body";

export default function Body() {
  return (
    <Section>
      <WordList>
        {body.map(({ id, nome, traducao, img, som }) => (
          <Word key={id} nome={nome} traducao={traducao} img={img} som={som} />
        ))}
      </WordList>
    </Section>
  );
}

Body.displayName = "Body";
