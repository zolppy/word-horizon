import type { HTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

type Variant = "default" | "selected";

interface CategoryItemProps extends HTMLAttributes<HTMLLIElement> {
  children: ReactNode;
  variant?: Variant;
}

export function CategoryItem({
  children,
  variant = "default",
  ...props
}: CategoryItemProps) {
  const defaultStyle =
    "flex items-center text-2xl gap-x-4 whitespace-nowrap p-2 lg:hover:cursor-pointer lg:hover:bg-yellow-400 lg:hover:text-purple-700 transition-colors duration-200";
  const selectedStyle =
    "flex items-center text-2xl gap-x-4 whitespace-nowrap p-2 text-purple-700 bg-yellow-400 lg:hover:cursor-pointer";

  return (
    <li
      {...props}
      className={clsx(variant === "default" ? defaultStyle : selectedStyle)}
    >
      {children}
    </li>
  );
}

CategoryItem.displayName = "CategoryItem";
