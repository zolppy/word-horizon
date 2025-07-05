import { FaGithub } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="text-center py-4 bg-black text-white p-2 flex justify-center">
      <div className="flex flex-col items-center justify-center w-fit lg:flex-row lg:gap-15 lg:ml-[300px]">
        <p>
          2025 &#127279; <b>Word Horizon</b>
        </p>
        <div className="flex flex-row gap-2 items-center">
          <i className="text-2xl">
            <FaGithub />
          </i>
          <div className="flex flex-row gap-1">
            <a href="https://github.com/MegMinnie/">
              {" "}
              Desenvolvido por Mirele Oliveira
            </a>
            <a href="https://github.com/zolppy">e Gabriel Oliveira</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
