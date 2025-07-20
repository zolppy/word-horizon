import type { AutoresCard } from "../../utils/types/autoresCard";
export function CardAutores({
  img,
  nome,
  descricao,
  link,
}: Omit<AutoresCard, "id">) {
  return (
    <div className="w-full flex flex-col items-center justify-center  text-white gap-4">
      <div className="flex flex-col items-center justify-center gap-2 pb-8">
        <img className="w-[200px] h-[200px] rounded-[50%]" src={img} alt="" />
        <h3 className="nome font-semibold">{nome}</h3>
        <p className="descricao">{descricao}</p>
        <a className="link">{link}</a>
      </div>
    </div>
  );
}
