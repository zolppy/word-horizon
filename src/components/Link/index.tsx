import type { ReactNode } from "react";

interface LinkProps {
  children: ReactNode;
  href: string;
}

export function Link({ children, href }: LinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      className="text-[var(--primary-color)] lg:hover:underline lg:hover:cursor-pointer"
    >
      {children}
    </a>
  );
}

Link.displayName = "Link";
