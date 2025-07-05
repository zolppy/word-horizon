import type { Categoria } from "../../utils/types/categoria";

export function Card({ img, titulo }: Omit<Categoria, "id">) {
  return (
    <>
      <div className="flex flex-col justify-center items-center border-2 w-[90%]border border-[#725dbd] rounded-[10px]">
        <img
          className="img1 h-[300px] w-[100%] border border-[#725dbd] lg:h-[200px]"
          src={img}
          alt=""
          width={200}
          height={300}
        />
        <p className="descricao1 p-2 text-xl font-semibold">{titulo}</p>
      </div>
    </>
  );
}
