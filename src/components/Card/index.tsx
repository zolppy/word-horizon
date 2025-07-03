import type { Categoria } from "../../utils/types/categoria";

export function Card({ img, titulo }: Omit<Categoria, "id">) {
  return (
    <>
      <div>
        <img className="img1" src={img} alt="" />
        <p className="descricao1">{titulo}</p>
      </div>
    </>
  );
}
