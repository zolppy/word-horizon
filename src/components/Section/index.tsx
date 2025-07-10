import type { HTMLAttributes, ReactNode } from "react";
import { type ClassNameValue, twMerge } from "tailwind-merge";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

export function Section({ children, className = "" }: SectionProps) {
  const baseStyles = "flex flex-col items-center";

  return (
    /* header height: 80px */
    /* footer height: 72px */
    /* y main padding: 16px + 16px*/
    <section
      style={{ minHeight: "calc(100svh - 80px - 72px - 32px)" }}
      className={twMerge(baseStyles, className as ClassNameValue)}
    >
      {children}
    </section>
  );
}

Section.displayName = "Section";
