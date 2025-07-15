import { WordList } from "../../components/WordList";
import { Word } from "../../components/Word";
import { kitchen } from "../../utils/data/kitchen";

export default function Kitchen() {
  return (
    <WordList>
      {kitchen.map(({ id, nome, traducao, img, som }) => (
        <Word key={id} nome={nome} traducao={traducao} img={img} som={som} />
      ))}
    </WordList>
  );
}

Kitchen.displayName = "Kitchen";
