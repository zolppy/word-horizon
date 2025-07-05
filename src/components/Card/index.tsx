import type { Categoria } from "../../utils/types/categoria";

export function Card({ img, titulo }: Omit<Categoria, "id">) {
  return (
    <>
      <div className="flex flex-col justify-center items-center border-2 w-[90%]border border-[#725dbd] rounded-[10px]  shadow-lg shadow-indigo-500/50 bg-white lg:hover:cursor-pointer lg:hover:shadow-2xl lg:hover:shadow-[#725dbd]">
        <img
          className="h-[300px] w-[100%] border border-[#725dbd] lg:h-[200px] rounded-[10px]"
          src={img}
          alt=""
          width={200}
          height={300}
        />
        <p className="p-2 text-xl font-semibold">{titulo}</p>
      </div>
    </>
  );
}
