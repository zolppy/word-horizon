import { Section } from "../../components/Section";
import { clothes } from "../../utils/data/clothes";
import { WordCard } from "../../components/WordCard";

export default function Clothes() {
  return (
    <Section>
      <ul className="flex flex-col  items-center justify-center w-full">
        {clothes.map(({ id, nome, traducao, img, som }) => (
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

Clothes.displayName = "Clothes";
