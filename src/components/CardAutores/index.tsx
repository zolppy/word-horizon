import { FaGithub } from "react-icons/fa6";
import type { AutoresCard } from "../../utils/types/autoresCard";

export function CardAutores({
  img,
  nome,
  descricao,
  link,
}: Omit<AutoresCard, "id">) {
  return (
    <div className="flex gap-2">
      <div className="flex flex-col gap-2 pb-8 p-2 mx-auto">
        <img
          className="w-[200px] h-[200px] rounded-[50%] border border-black mx-auto"
          src={img}
          alt=""
        />
        <h3 className="font-semibold text-blue-700">{nome}</h3>
        <p className="text-left">{descricao}</p>
        <a
          href={link}
          target="_blank"
          className="flex items-center gap-x-2 bg-blue-500 text-white py-3 px-6 w-fit rounded-lg transition-colors duration-200 active:bg-blue-600 lg:hover:cursor-pointer lg:hover:bg-blue-600"
        >
          <FaGithub /> Github
        </a>
      </div>
    </div>
  );
}
