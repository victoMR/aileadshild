import Link from "next/link";
import type { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  target?: "_blank" | "_self";
  className?: string;
  onClick?: () => void;
}

export function Button({
  href,
  children,
  variant = "primary",
  target = "_self",
  className = "",
  onClick,
}: ButtonProps) {
  const baseStyles =
    "inline-block px-6 py-3 rounded-sm font-bold text-sm uppercase tracking-wider transition-all duration-300 text-center";

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-cyan-400 to-emerald-400 text-black hover:bg-transparent hover:border hover:border-cyan-400 hover:text-cyan-400 hover:-translate-y-0.5",
    ghost:
      "border-2 border-white/20 text-white hover:border-cyan-400 hover:text-cyan-400 hover:-translate-y-0.5",
  };

  return (
    <Link
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
