import { Section } from "../../components/Section";
import { animals } from "../../utils/data/animals";
import { WordCard } from "../../components/WordCard";

export default function Animals() {
  return (
    <Section className="w-full">
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
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
