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
    "flex items-center text-2xl gap-x-4 whitespace-nowrap p-2 lg:hover:cursor-pointer lg:hover:bg-[#9c4994] lg:hover:text-white transition-colors duration-200";
  const selectedStyle =
    "flex items-center text-2xl gap-x-4 whitespace-nowrap p-2 text-white bg-[#9c4994] lg:hover:cursor-pointer";

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
