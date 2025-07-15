import { WordList } from "../../components/WordList";
import { Word } from "../../components/Word";
import { school } from "../../utils/data/school";

export default function School() {
  return (
    <WordList>
      {school.map(({ id, nome, traducao, img, som }) => (
        <Word key={id} nome={nome} traducao={traducao} img={img} som={som} />
      ))}
    </WordList>
  );
}

School.displayName = "School";
