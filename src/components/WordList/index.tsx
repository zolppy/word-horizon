import type { ReactNode } from "react";

interface WordListProps {
  children: ReactNode;
}

export function WordList({ children }: WordListProps) {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
      {children}
    </ul>
  );
}

WordList.displayName = "WordList";
