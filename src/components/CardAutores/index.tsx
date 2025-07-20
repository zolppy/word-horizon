import type { AutoresCard } from "../../utils/types/autoresCard";
export function CardAutores({
  img,
  nome,
  descricao,
  link,
}: Omit<AutoresCard, "id">) {
  return (
    <div className="w-full grid grid-cols-1 items-center justify-center  md:grid-cols-2 md:ml-[29%]  lg:ml-[26%]">
      <div className="grid flex-col items-center justify-center gap-2 pb-8  w-[100%] p-2">
        <img
          className="w-[200px] h-[200px] rounded-[50%] border border-black"
          src={img}
          alt=""
        />
        <h3 className="nome font-semibold text-purple-800">{nome}</h3>
        <p className="descricao ">{descricao}</p>
        <a className="link">{link}</a>
      </div>
    </div>
  );
}
