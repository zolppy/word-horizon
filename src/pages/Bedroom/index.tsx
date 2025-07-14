import { Section } from "../../components/Section";
import { bedroom } from "../../utils/data/bedroom";
import { WordCard } from "../../components/WordCard";

export default function Bedroom() {
  return (
    <Section>
      <ul className="flex flex-col  items-center justify-center w-full">
        {bedroom.map(({ id, nome, traducao, img, som }) => (
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

Bedroom.displayName = "Bedroom";
