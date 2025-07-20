import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import { CardAutores } from "../../components/CardAutores";
import { autores } from "../../utils/data/autores";

export default function Home() {
  useDocumentTitle("Word Horizon | Home");

  return (
    // Se quiser ajustar o espaçamento da parte roxa, mude gap-y-2
    <section className="flex flex-col gap-y-2">
      <div className="flex flex-col gap-y-4">
        <h1 className="font-bold  text-3xl text-[#431861]">Sobre o projeto</h1>
        <div className="text-justify flex flex-col gap-2">
          <p>
            Word Horizon é um projeto de flashcards interativos com as palavras
            mais comuns e úteis da língua inglesa, organizadas por categorias
            temáticas: animais, quarto, corpo, roupas, emoções, família, cozinha
            e escola. O objetivo principal é auxiliar na aprendizagem e
            memorização do vocabulário, especialmente no contexto do ensino
            infantil, embora também possa ser empregado no ensino fundamental.
          </p>
          <p>
            A aplicação integra som, imagem e texto para promovendo um
            aprendizado mais completo e lúdico. Ao clicar na palavra, o usuário
            ouve sua pronúncia em inglês, visualiza a imagem correspondente e
            tem acesso à sua tradução. Esse recurso estimula múltiplas formas de
            aprendizagem, como auditiva e visual.
          </p>

          <p>
            Diversos estudos destacam a eficácia dos flashcards como estratégia
            para aquisição de vocabulário em novos idiomas. O uso desse recurso
            potencializa a aprendizagem ativa, promove a autonomia dos
            estudantes e oferece uma representação visual do conteúdo, o que
            favorece a fixação e a compreensão das palavras em diferentes
            contextos.
          </p>
          <p>
            Tendo em vista a importância de um vocabulário amplo para o domínio
            de uma nova língua, o Word Horizon oferece um conjunto de 999
            vocábulos em inglês, cuidadosamente selecionados para impulsionar o
            aprendizado do idioma de forma lúdica e eficiente.
          </p>
          <p>
            Por fim, a aplicação foi desenvolvida pelos estudantes do curso de
            Licenciatura em Computação do Instituito Federal de Educação e
            Tecnologia (IFBA) – Campus Jacobina, como parte das atividades da
            disciplina Software Educacional.
          </p>
        </div>
      </div>
      <div className=" mt-4 w-full">
        <h2 className="font-bold text-center text-2xl p-2">Desenvolvedores</h2>

        <ul className="w-full grid md:grid-cols-2 text-center itens-center m-auto lg:grid-cols-3">
          {autores.map(({ id, img, nome, descricao, link }) => (
            <CardAutores
              key={id}
              img={img}
              nome={nome}
              descricao={descricao}
              link={link}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

Home.displayName = "Home";
