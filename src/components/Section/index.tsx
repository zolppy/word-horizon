import type { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
}

export function Section({ children }: SectionProps) {
  return (
    /* header height: 80px */
    /* footer height: 72px */
    /* y main padding: 16px + 16px*/
    <section
      style={{ minHeight: "calc(100svh - 80px - 72px - 32px)" }}
      className="flex flex-col items-center"
    >
      {children}
    </section>
  );
}

Section.displayName = "Section";
