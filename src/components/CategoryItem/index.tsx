import type { ReactNode } from "react";

interface CategoryItemProps {
  children: ReactNode;
}

export function CategoryItem({ children }: CategoryItemProps) {
  return (
    <li className="flex items-center text-4xl gap-x-4 whitespace-nowrap">
      {children}
    </li>
  );
}

CategoryItem.displayName = "CategoryItem";
