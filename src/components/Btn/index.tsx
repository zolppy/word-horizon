import type { HTMLAttributes, ReactNode } from "react";
import { type ClassNameValue, twMerge } from "tailwind-merge";

interface Button extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  type?: "button" | "reset" | "submit";
}

export function Btn({
  children,
  type = "button",
  className,
  ...props
}: Button) {
  const baseStyles = "bg-transparent p-0";

  return (
    <button
      {...props}
      type={type}
      className={twMerge(baseStyles, className as ClassNameValue)}
    >
      {children}
    </button>
  );
}

Btn.displayName = "Btn";
