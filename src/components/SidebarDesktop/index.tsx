import { CategoryList } from "../CategoryList";

export function SidebarDesktop() {
  return (
    <nav className="h-screen bg-purple-700 fixed hidden lg:block w-[300px]">
      <CategoryList />
    </nav>
  );
}

SidebarDesktop.displayName = "SidebarDesktop";
