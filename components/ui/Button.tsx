import Link, { type LinkProps } from "next/link";
import type {
  AnchorHTMLAttributes,
  ReactNode,
} from "react";

type ButtonProps = LinkProps &
  Omit<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    keyof LinkProps | "href"
  > & {
    children: ReactNode;
    className?: string;
  };

export default function Button({
  href,
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <Link
      href={href}
      {...props}
      className={`
        inline-flex items-center justify-center
        whitespace-nowrap rounded-xl
        bg-blue-600 px-6 py-3
        font-semibold text-white
        transition-all duration-300 ease-out
        hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/20
        active:translate-y-0 active:scale-[0.98]
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2
        ${className}
      `}
    >
      {children}
    </Link>
  );
}