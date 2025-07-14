import { Section } from "../../components/Section";
import { body } from "../../utils/data/body";
import { WordCard } from "../../components/WordCard";

export default function Body() {
  return (
    <Section>
      <ul className="flex flex-col  items-center justify-center w-full">
        {body.map(({ id, nome, traducao, img, som }) => (
          <WordCard
            key={id}
            nome={nome}
            traducao={traducao}
            img={img}
            som={som}
          />
        ))}
      </ul>
    </Section>
  );
}

Body.displayName = "Body";
