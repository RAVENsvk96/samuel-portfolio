import Link, { type LinkProps } from "next/link";
import type {
  AnchorHTMLAttributes,
  ReactNode,
} from "react";

type ButtonVariant = "primary" | "secondary";

type ButtonProps = LinkProps &
  Omit<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    keyof LinkProps | "href"
  > & {
    children: ReactNode;
    className?: string;
    variant?: ButtonVariant;
  };

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-blue-600/20",
  secondary:
    "border border-white/15 bg-white/[0.04] text-slate-100 hover:border-blue-400/45 hover:bg-white/[0.08] hover:shadow-blue-950/20",
};

export default function Button({
  href,
  children,
  className = "",
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <Link
      href={href}
      {...props}
      className={`
        inline-flex items-center justify-center
        whitespace-nowrap rounded-xl
        px-6 py-3 font-semibold
        transition-all duration-300 ease-out
        hover:-translate-y-0.5 hover:shadow-xl
        active:translate-y-0 active:scale-[0.98]
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2
        ${variantClasses[variant]}
        ${className}
      `}
    >
      {children}
    </Link>
  );
}
