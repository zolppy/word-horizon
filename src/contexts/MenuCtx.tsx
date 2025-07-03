import { createContext, useContext, useState, type ReactNode } from "react";

interface MenuCtxValue {
  menuIsOpen: boolean;
  openMenu(): void;
  closeMenu(): void;
}

interface MenuProviderProps {
  children: ReactNode;
}

const MenuCtx = createContext<MenuCtxValue | null>(null);

function MenuProvider({ children }: MenuProviderProps) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  function openMenu() {
    setMenuIsOpen(true);
  }

  function closeMenu() {
    setMenuIsOpen(false);
  }

  return (
    <MenuCtx.Provider
      value={{
        menuIsOpen,
        openMenu,
        closeMenu,
      }}
    >
      {children}
    </MenuCtx.Provider>
  );
}

function useMenu() {
  const ctx = useContext(MenuCtx);

  if (!ctx) {
    throw new Error("useMenu must be used within a MenuProvider");
  }

  return ctx;
}

export { MenuProvider, useMenu };
