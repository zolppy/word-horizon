import type { ReactNode } from "react";
import { MenuProvider } from "../../contexts/MenuCtx.tsx";
import { SidebarProvider } from "../../contexts/SidebarCtx.tsx";

interface AppProvidersPropers {
  children: ReactNode;
}

export function AppProviders({ children }: AppProvidersPropers) {
  return (
    <MenuProvider>
      <SidebarProvider>{children}</SidebarProvider>
    </MenuProvider>
  );
}

AppProviders.displayName = "AppProviders";
