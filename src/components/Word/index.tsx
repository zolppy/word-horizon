import { useState } from "react";
import { motion } from "framer-motion";
import { FaVolumeHigh } from "react-icons/fa6";
import { type Word as WordType } from "../../utils/types/word";

export function Word({ nome, traducao, img, som }: Omit<WordType, "id">) {
  const [isFlipped, setIsFlipped] = useState(false);

  function playSound(e: React.MouseEvent) {
    e.stopPropagation();
    if (som) {
      const audio = new Audio(som);
      audio.play().catch((e) => console.error("Error playing sound:", e));
    }
  }

  return (
    <li
      onClick={() => setIsFlipped(!isFlipped)}
      className="min-w-[320px] w-full max-w-[480px] h-[300px] perspective-1000 lg:hover:cursor-pointer lg:min-w-[220px]"
    >
      <motion.div
        className="w-full h-full relative preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Front Card */}
        <div className="front absolute w-full h-full bg-white border-2 border-purple-500 rounded-[10px] shadow-md grid place-items-center font-bold whitespace-nowrap backface-hidden overflow-hidden">
          {nome}
          <button
            onClick={playSound}
            className="sound-btn border-none cursor-pointer text-blue-500 absolute right-0 top-5 -translate-x-1/2 -translate-y-1/2 text-2xl hover:text-3xl z-10"
          >
            <FaVolumeHigh />
          </button>
        </div>
        {/* Back Card */}
        <div className="back absolute w-full h-full bg-white border-2 border-purple-500 rounded-[10px] shadow-md flex flex-col backface-hidden overflow-hidden rotateY-180">
          <img
            src={img}
            className="w-full h-[85%] object-cover rounded-t-[10px]"
            alt={traducao}
          />
          <p className="font-bold text-center py-2 absolute bottom-0 left-0 right-0 bg-white">
            {traducao}
          </p>
        </div>
      </motion.div>
    </li>
  );
}

Word.displayName = "Word";
