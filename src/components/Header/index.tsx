import { Logo } from "../Logo";
import { Btn } from "../Btn";
import { useMenu } from "../../contexts/MenuCtx";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";

export function Header() {
  const { closeMenu, menuIsOpen, openMenu } = useMenu();

  return (
    <header className="flex bg-black justify-between lg:justify-center items-center p-4 h-20 fixed w-full top-0">
      {menuIsOpen ? (
        <Btn onClick={closeMenu}>
          <FaXmark className="text-2xl z-20 lg:hidden text-white" />
        </Btn>
      ) : (
        <Btn onClick={openMenu}>
          <FaBarsStaggered className="text-2xl z-20 lg:hidden text-white" />
        </Btn>
      )}
      <Logo />
    </header>
  );
}

Header.displayName = "Header";
