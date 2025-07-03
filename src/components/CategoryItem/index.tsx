import type { HTMLAttributes, ReactNode } from "react";
import { type ClassNameValue, twMerge } from "tailwind-merge";

interface CategoryItemProps extends HTMLAttributes<HTMLLIElement> {
  children: ReactNode;
}

export function CategoryItem({ children, className = "" }: CategoryItemProps) {
  const baseStyles = "flex items-center text-4xl gap-x-4 whitespace-nowrap p-2";

  return (
    <li className={twMerge(baseStyles, className as ClassNameValue)}>
      {children}
    </li>
  );
}

CategoryItem.displayName = "CategoryItem";
