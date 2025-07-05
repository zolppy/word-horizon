import { FaGithub } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="text-center py-4 text- bg-black text-white flex flex-col lg:flex-row lg:justify-center lg:gap-15 items-center justify-center p-2">
      <p>
        2025 &copy; <b>Word Horizon</b>
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
    </footer>
  );
}
