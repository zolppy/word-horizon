import type { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
}

export function Section({ children }: SectionProps) {
  return (
    <section className="flex flex-col items-center min-h-svh">
      {children}
    </section>
  );
}

Section.displayName = "Section";
