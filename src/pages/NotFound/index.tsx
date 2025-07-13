import { useNavigate } from "react-router-dom";
import { Section } from "../../components/Section";
import { Btn } from "../../components/Btn";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <Section className="flex-1 p-8 flex items-center justify-center bg-white w-full text-center">
      <h1 className="text-8xl font-extrabold text-gray-800 mb-4">404</h1>
      <p className="text-3xl text-gray-700 mb-8">Página não Encontrada</p>
      <p className="text-lg text-gray-600 mb-12">
        Ops! A página a qual você está procurando não existe ou foi movida.
      </p>
      <Btn
        onClick={() => navigate("/")}
        className="inline-block bg-purple-700 text-white text-lg font-semibold py-3 px-8 rounded-lg shadow-md lg:hover:bg-purple-600 transition-colors duration-300 lg:hover:cursor-pointer active:bg-purple-700"
      >
        Voltar à Homepage
      </Btn>
    </Section>
  );
}

NotFound.displayName = "NotFound";
