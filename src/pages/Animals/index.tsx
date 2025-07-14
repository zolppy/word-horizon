import { Section } from "../../components/Section";
import { animals } from "../../utils/data/animals";
import { WordCard } from "../../components/WordCard";

export default function Animals() {
  return (
    <Section>
      <ul className="flex flex-col  items-center justify-center w-full">
        {animals.map(({ id, nome, traducao, img, som }) => (
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

Animals.displayName = "Animals";
