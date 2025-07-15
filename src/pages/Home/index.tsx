import { useDocumentTitle } from "../../hooks/useDocumentTitle";

export default function Home() {
  useDocumentTitle("Word Horizon | Home");

  return (
    <>
      <div className="flex flex-col gap-y-4">
        <div>
          Projeto desenvolvido como Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Quisquam hic, sit corporis provident soluta quod. In
          possimus adipisci incidunt accusantium doloremque vero! Quas porro
          nesciunt maiores minima, placeat nobis debitis.
        </div>
        <div>
          Vários estudos comprovam a eficácia de <strong>flashcards</strong>{" "}
          para o aprendizado. Essa estratégia/método de estudo é especialmente
          eficaz no contexto de aquisição de vocabulário de um idioma Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Quod laudantium
          saepe ipsam cupiditate molestiae unde sapiente laborum dolorum
          similique! Ducimus rerum ullam eius sit animi labore nihil nulla
          quibusdam atque.
        </div>
        <div>
          Tendo em mente o quão importante é ter um amplo vocabulário no idioma
          que se quer aprender, esta aplicação conta com 999 vocábulos da língua
          inglesa para impulsionar seu conhecimento do idioma Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Obcaecati aspernatur explicabo
          sequi quod quis modi magni veniam molestias quo reprehenderit a
          perspiciatis hic officia maiores, totam quidem eveniet commodi.
          Dolores.
        </div>
        <div>
          Esta aplicação foi desenvolvida como requisito parcial de conclusão da
          disciplina de <strong>Software educacional</strong> Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Nemo sint magnam dicta et,
          reprehenderit veritatis iusto qui optio nisi neque laborum tenetur
          possimus temporibus inventore? Vitae quos quisquam pariatur quod.
        </div>
        <div>Autores:</div>
        <div>
          <div>
            <div>
              Gabriel Cavalcante de Jesus Oliveira{" "}
              <strong>
                <a href="">GitHub</a>
              </strong>
            </div>
          </div>
          <div>
            <div>
              Mirele Oliveira da Silva{" "}
              <strong>
                <a href="">GitHub</a>
              </strong>
            </div>
          </div>
          <div>
            <div>
              Rulian de Jesus Cruz{" "}
              <strong>
                <a href="">GitHub</a>
              </strong>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Home.displayName = "Home";
