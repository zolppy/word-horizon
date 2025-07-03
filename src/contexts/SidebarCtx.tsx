"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import { Category } from "../utils/enums/category";

interface SidebarCtxValue {
  currentCategory: Category;
  changeCategory(category: Category): void;
}

interface SidebarProviderProps {
  children: ReactNode;
}

const SidebarCtx = createContext<SidebarCtxValue | null>(null);

function SidebarProvider({ children }: SidebarProviderProps) {
  const [currentCategory, setCurrentCategory] = useState<Category>(
    Category.Home
  );

  function changeCategory(category: Category): void {
    setCurrentCategory(category);
  }

  return (
    <SidebarCtx.Provider value={{ currentCategory, changeCategory }}>
      {children}
    </SidebarCtx.Provider>
  );
}

function useSidebar(): SidebarCtxValue {
  const ctx = useContext(SidebarCtx);

  if (!ctx) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }

  return ctx;
}

export { SidebarProvider, useSidebar };
