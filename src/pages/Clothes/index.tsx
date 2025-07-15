import { Section } from "../../components/Section";
import { WordList } from "../../components/WordList";
import { Word } from "../../components/Word";
import { clothes } from "../../utils/data/clothes";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";

export default function Clothes() {
  useDocumentTitle("Word Horizon | Roupas");

  return (
    <Section>
      <WordList>
        {clothes.map(({ id, nome, traducao, img, som }) => (
          <Word key={id} nome={nome} traducao={traducao} img={img} som={som} />
        ))}
      </WordList>
    </Section>
  );
}

Clothes.displayName = "Clothes";
