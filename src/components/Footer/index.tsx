import { FaCreativeCommons, FaGithub } from "react-icons/fa6";

export function Footer() {
  return (
    <footer className="text-center bg-black text-white flex justify-center h-18">
      <div className="flex flex-col items-center justify-center w-fit lg:flex-row lg:gap-15 lg:ml-[300px]">
        <p className="flex gap-x-2 items-center">
          2025 <FaCreativeCommons />
          <b>WordHorizon</b>
        </p>
        <div className="flex flex-row gap-2 items-center">
          <i className="text-2xl">
            <FaGithub />
          </i>
          <div className="flex flex-row gap-1">
            Desenvolvido por
            <a
              href="https://github.com/MegMinnie/"
              target="_blank"
              className="text-blue-500 lg:hover:underline lg:hover:cursor-pointer"
            >
              Mirele Oliveira
            </a>
            ,
            <a
              href="https://github.com/zolppy"
              target="_blank"
              className="text-blue-500 lg:hover:underline lg:hover:cursor-pointer"
            >
              Gabriel Oliveira
            </a>
            e
            <a
              href="https://github.com/zolppy"
              target="_blank"
              className="text-blue-500 lg:hover:underline lg:hover:cursor-pointer"
            >
              Rulian Cruz
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
