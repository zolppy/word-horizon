import type { ReactNode } from "react";

interface H2Props {
  children: ReactNode;
}

export default function H2({ children }: H2Props) {
  return <h2 className="font-bold text-3xl">{children}</h2>;
}

H2.displayName = "H2";
