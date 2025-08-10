import { FaCreativeCommons, FaGithub } from "react-icons/fa6";
import { Link } from "../Link";

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
            <Link href="https://github.com/MegMinnie">Mirele Oliveira</Link>,
            <Link href="https://github.com/zolppy">Gabriel Oliveira</Link>e
            <Link href="https://github.com/zolppy">Rulian Cruz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

Footer.displayName = "Footer";
