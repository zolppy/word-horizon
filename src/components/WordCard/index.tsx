import { type WordCard as WordCardType } from "../../utils/types/wordCard";

export function WordCard({
  nome,
  traducao,
  img,
  som,
}: Omit<WordCardType, "id">) {
  function playSound() {
    if (som) {
      const audio = new Audio(som);
      audio.play().catch((e) => console.error("Error playing sound:", e));
    }
  }

  /* width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.8s;
  position: relative;
  border: 4px solid #260466;
  background-color: #260466;
  border-radius: 10px; */

  return (
    <li className="w-[90%] h-[380px] perspective-1000 m-auto rounded-[5px]">
      <div className="w-full h-full transform preserve-3d">
        <div className="flip-card-front">
          <p>{nome}</p>
          <button onClick={playSound}>
            <i></i>
          </button>
        </div>
        <div className="flip-card-back">
          <img className="w-full h-[350px]" src={img} alt="" />
          <p>{traducao}</p>
        </div>
      </div>
    </li>
  );
}

WordCard.displayName = "WordCard";
