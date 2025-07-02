import type { ReactNode } from "react";

interface CategoryListProps {
  children: ReactNode;
}

export function CategoryList({ children }: CategoryListProps) {
  return (
    <ul className="mt-[80px] lg:mt-0 p-8 flex flex-col gap-y-4">{children}</ul>
  );
}
