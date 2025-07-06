import { CategoryList } from "../CategoryList";

export function SidebarDesktop() {
  return (
    <nav className="h-screen bg-purple-700 fixed hidden lg:block w-[300px] top-0">
      <CategoryList />
    </nav>
  );
}

SidebarDesktop.displayName = "SidebarDesktop";
