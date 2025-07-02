import { useSidebar } from "../../contexts/SidebarCtx";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";

export function Header() {
  const { closeSidebar, openSidebar, sidebarIsOpen } = useSidebar();

  return (
    <header className="flex bg-black justify-between lg:justify-center items-center p-4 h-20">
      {sidebarIsOpen ? (
        <FaXmark className="text-2xl z-20 lg:hidden" onClick={closeSidebar} />
      ) : (
        <FaBarsStaggered
          className="text-green-500 text-2xl z-20 lg:hidden"
          onClick={openSidebar}
        />
      )}
      <h1 className="font-bold text-4xl text-green-500">Jogo</h1>
    </header>
  );
}
