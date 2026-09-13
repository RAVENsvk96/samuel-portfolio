"use client";

import Link, { type LinkProps } from "next/link";
import type {
  AnchorHTMLAttributes,
  MouseEvent,
  ReactNode,
} from "react";

import {
  trackCtaClick,
  type CtaLocation,
} from "@/lib/analytics";

type TrackedLinkProps = LinkProps &
  Omit<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    keyof LinkProps | "href" | "onClick"
  > & {
    analyticsLocation: CtaLocation;
    children: ReactNode;
    onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
  };

export default function TrackedLink({
  analyticsLocation,
  children,
  onClick,
  ...props
}: TrackedLinkProps) {
  return (
    <Link
      {...props}
      onClick={(event) => {
        trackCtaClick(analyticsLocation);
        onClick?.(event);
      }}
    >
      {children}
    </Link>
  );
}
