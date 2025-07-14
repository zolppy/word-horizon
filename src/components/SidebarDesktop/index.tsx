import { CategoryList } from "../CategoryList";

export function SidebarDesktop() {
  return (
    <nav className="h-screen bg-purple-700 fixed hidden lg:block w-[300px] top-0 border-e-[20px] border-yellow-400 z-20">
      <CategoryList />
    </nav>
  );
}

SidebarDesktop.displayName = "SidebarDesktop";
