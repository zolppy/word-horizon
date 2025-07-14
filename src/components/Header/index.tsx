import { Logo } from "../Logo";
import { Btn } from "../Btn";
import { useMenu } from "../../contexts/MenuCtx";
import { FaBarsStaggered } from "react-icons/fa6";

export function Header() {
  const { menuIsOpen, openMenu } = useMenu();

  return (
    <header className="flex bg-black justify-center items-center p-4 h-20 fixed w-full top-0 z-10">
      {!menuIsOpen && (
        <Btn
          onClick={openMenu}
          className="text-2xl z-20 block lg:hidden text-white absolute -translate-x-1/2 -translate-y-1/2 left-7 top-1/2"
        >
          <FaBarsStaggered />
        </Btn>
      )}
      <Logo />
    </header>
  );
}

Header.displayName = "Header";
