import { CategoryList } from "../CategoryList";

export function SidebarDesktop() {
  return (
    <nav className="h-screen bg-[#151b23] fixed hidden lg:block w-[300px] top-0 border-e-[20px] border-[#9c4994] z-20">
      <CategoryList />
    </nav>
  );
}

SidebarDesktop.displayName = "SidebarDesktop";
