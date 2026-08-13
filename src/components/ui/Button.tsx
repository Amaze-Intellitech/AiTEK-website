import Link from "next/link";
import { ReactNode } from "react";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors";

const variants = {
  primary: "bg-primary text-primary-foreground hover:bg-primary/90",
  secondary: "border border-border text-foreground hover:border-primary hover:text-primary",
};

type CommonProps = {
  children: ReactNode;
  variant?: keyof typeof variants;
  className?: string;
};

type ButtonProps =
  | (CommonProps & { href: string; onClick?: never })
  | (CommonProps & { href?: never; onClick: () => void; type?: "button" | "submit" });

export default function Button({ children, variant = "primary", className = "", ...rest }: ButtonProps) {
  const classes = `${base} hover:scale-[1.02] active:scale-[0.98] ${variants[variant]} ${className}`;

  if ("href" in rest && rest.href) {
    return (
      <Link href={rest.href} className={classes}>
        {children}
      </Link>
    );
  }

  const { onClick, type = "button" } = rest as Extract<ButtonProps, { onClick: () => void }>;
  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
