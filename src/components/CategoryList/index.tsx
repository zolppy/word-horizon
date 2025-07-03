import type { ReactNode } from "react";

interface CategoryListProps {
  children: ReactNode;
}

export function CategoryList({ children }: CategoryListProps) {
  return (
    <ul className="mt-20 lg:mt-0 p-4 flex flex-col gap-y-2 text-white">
      {children}
    </ul>
  );
}

CategoryList.displayName = "CategoryList";
