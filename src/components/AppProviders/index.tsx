import type { ReactNode } from "react";
import { MenuProvider } from "../../contexts/MenuCtx.tsx";

interface AppProvidersPropers {
  children: ReactNode;
}

export function AppProviders({ children }: AppProvidersPropers) {
  return (
    <MenuProvider>
      {children}
    </MenuProvider>
  );
}

AppProviders.displayName = "AppProviders";
