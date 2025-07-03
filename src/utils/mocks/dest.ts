import categoria1 from "../../assets/categoria1";
import type { Categoria } from "../types/categoria";
import { v4 as uuid } from "uuid";

const CategoriaDestaque: Categoria[] = [
    {
        id: uuid(),
        img1: categoria1,
        descricao1: "Animais",
        som1: som1,
    },
    {
        id: uuid(),
        img1: categoria1,
        descricao1: "Transportes",
        som1: som1,
    },
];

export { CategoriaDestaque };
