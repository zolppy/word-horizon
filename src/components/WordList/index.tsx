import type { ReactNode } from "react";

interface WordListProps {
  children: ReactNode;
}

export function WordList({ children }: WordListProps) {
  return (
    <ul className="gap-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {children}
    </ul>
  );
}

WordList.displayName = "WordList";
