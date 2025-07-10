import { useNavigate } from "react-router-dom";
import { Section } from "../../components/Section";
import { useSidebar } from "../../contexts/SidebarCtx";
import { Card } from "../../components/Card";
import { Categorias } from "../../utils/data/categorias";
import { Category } from "../../utils/enums/category";

export default function Home() {
  const { changeCategory } = useSidebar();
  const navigate = useNavigate();
  const paths = [
    "/animals",
    "/bedroom",
    "/body",
    "/clothes",
    "/emotions",
    "/family",
    "/kitchen",
    "/school",
  ];
  const selectedCategory = [
    Category.Animals,
    Category.Bedroom,
    Category.Body,
    Category.Clothes,
    Category.Emotions,
    Category.Family,
    Category.Kitchen,
    Category.School,
  ];

  return (
    <Section className="gap-y-8">
      <h1 className="uppercase font-extrabold text-4xl">Isto é um rascunho:</h1>
      <article className="flex flex-col gap-y-8">
        <p>
          Projeto desenvolvido como Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Quisquam hic, sit corporis provident soluta quod. In
          possimus adipisci incidunt accusantium doloremque vero! Quas porro
          nesciunt maiores minima, placeat nobis debitis.
        </p>
        <p>
          Vários estudos comprovam a eficácia de <strong>flashcards</strong>{" "}
          para o aprendizado. Essa estratégia/método de estudo é especialmente
          eficaz no contexto de aquisição de vocabulário de um idioma Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Quod laudantium
          saepe ipsam cupiditate molestiae unde sapiente laborum dolorum
          similique! Ducimus rerum ullam eius sit animi labore nihil nulla
          quibusdam atque.
        </p>
        <p>
          Tendo em mente o quão importante é ter um amplo vocabulário no idioma
          que se quer aprender, esta aplicação conta com 999 vocábulos da língua
          inglesa para impulsionar seu conhecimento do idioma Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Obcaecati aspernatur explicabo
          sequi quod quis modi magni veniam molestias quo reprehenderit a
          perspiciatis hic officia maiores, totam quidem eveniet commodi.
          Dolores.
        </p>
      </article>
      <article className="flex flex-col gap-y-8">
        <p>
          Esta aplicação foi desenvolvida como requisito parcial de conclusão da
          disciplina de <strong>Software educacional</strong> Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Nemo sint magnam dicta et,
          reprehenderit veritatis iusto qui optio nisi neque laborum tenetur
          possimus temporibus inventore? Vitae quos quisquam pariatur quod.
        </p>
        <p>Autores:</p>
        <ul>
          <li>
            <p>
              Gabriel Cavalcante de Jesus Oliveira{" "}
              <strong>
                <a href="">GitHub</a>
              </strong>
            </p>
          </li>
          <li>
            <p>
              Mirele Oliveira da Silva{" "}
              <strong>
                <a href="">GitHub</a>
              </strong>
            </p>
          </li>
          <li>
            <p>
              Rulian de Jesus Cruz{" "}
              <strong>
                <a href="">GitHub</a>
              </strong>
            </p>
          </li>
        </ul>
      </article>

      <ul className="grid grid-cols-1 items-center justify-center gap-8 w-[90%] md:grid-cols-2 md:w-[85%] lg:grid-cols-4 lg:w-[90%]">
        {Categorias.map(({ id, img, titulo }, index) => (
          <Card
            key={id}
            img={img}
            titulo={titulo}
            onClick={() => {
              navigate(paths[index]), changeCategory(selectedCategory[index]);
            }}
          />
        ))}
      </ul>
    </Section>
  );
}

Home.displayName = "Home";
