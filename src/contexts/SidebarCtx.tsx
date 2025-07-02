import { createContext, useContext, useState, type ReactNode } from "react";

interface SidebarCtxValue {
  sidebarIsOpen: boolean;
  openSidebar(): void;
  closeSidebar(): void;
}

const SidebarCtx = createContext<SidebarCtxValue | null>(null);

interface SidebarProviderProps {
  children: ReactNode;
}

function SidebarProvider({ children }: SidebarProviderProps) {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

  function openSidebar() {
    setSidebarIsOpen(true);
  }

  function closeSidebar() {
    setSidebarIsOpen(false);
  }

  return (
    <SidebarCtx.Provider
      value={{
        sidebarIsOpen,
        openSidebar,
        closeSidebar,
      }}
    >
      {children}
    </SidebarCtx.Provider>
  );
}

function useSidebar() {
  const ctx = useContext(SidebarCtx);

  if (!ctx) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }

  return ctx;
}

export { SidebarProvider, useSidebar };
