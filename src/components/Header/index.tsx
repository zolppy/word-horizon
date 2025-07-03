import { Logo } from "../Logo";
import { Btn } from "../Btn";
import { useSidebar } from "../../contexts/SidebarCtx";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";

export function Header() {
  const { closeSidebar, openSidebar, sidebarIsOpen } = useSidebar();

  return (
    <header className="flex bg-black justify-between lg:justify-center items-center p-4 h-20">
      {sidebarIsOpen ? (
        <Btn onClick={closeSidebar}>
          <FaXmark className="text-2xl z-20 lg:hidden text-white" />
        </Btn>
      ) : (
        <Btn onClick={openSidebar}>
          <FaBarsStaggered className="text-2xl z-20 lg:hidden text-white" />
        </Btn>
      )}
      <Logo />
    </header>
  );
}

Header.displayName = "Header";
