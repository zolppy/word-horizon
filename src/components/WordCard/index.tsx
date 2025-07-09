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

  return (
    /* you can remove these classes after, as long as it is proper */
    <li className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <p>{nome}</p>
          <button onClick={playSound}>
            {/* use a proper react icon */}
            <i></i>
          </button>
        </div>
        <div className="flip-card-back">
          <img src={img} alt="" />
          <p>{traducao}</p>
        </div>
      </div>
    </li>
  );
}

WordCard.displayName = "WordCard";
