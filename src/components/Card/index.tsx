import type { Categoria } from "../utils/types/Categoria";

function Card({ img1, descricao1, som1 }: Omit<Categoria, "id">) {
    return (
        <>
            <div>
                <img className="img1" src={img1} alt="" />
                <p className="descricao1">{descricao1}</p>
                <p className="som1">{som1}</p>
            </div>
        </>
    );
}

export default Card;
