import { Section } from "../../components/Section";
import { WordList } from "../../components/WordList";
import { Word } from "../../components/Word";
import { bedroom } from "../../utils/data/bedroom";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";

export default function Bedroom() {
  useDocumentTitle("Word Horizon | Quarto");

  return (
    <Section>
      <WordList>
        {bedroom.map(({ id, nome, traducao, img, som }) => (
          <Word key={id} nome={nome} traducao={traducao} img={img} som={som} />
        ))}
      </WordList>
    </Section>
  );
}

Bedroom.displayName = "Bedroom";
