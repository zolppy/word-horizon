import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { MenuProvider } from "./contexts/MenuCtx.tsx";
import { SidebarProvider } from "./contexts/SidebarCtx.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MenuProvider>
      <SidebarProvider>
        <App />
      </SidebarProvider>
    </MenuProvider>
  </StrictMode>
);
