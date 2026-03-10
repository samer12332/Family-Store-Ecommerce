"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

type SiteLogoProps = {
  className?: string;
  compact?: boolean;
  href?: string;
};

function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 220 160"
      aria-hidden="true"
      className={cn("h-10 w-auto", className)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M69 50C48 50 31 67 31 88V108"
        stroke="#B85A35"
        strokeWidth="14"
        strokeLinecap="round"
      />
      <path
        d="M151 50C172 50 189 67 189 88V108"
        stroke="#B85A35"
        strokeWidth="14"
        strokeLinecap="round"
      />
      <circle cx="69" cy="37" r="11" fill="#B85A35" />
      <circle cx="151" cy="37" r="11" fill="#B85A35" />

      <path
        d="M110 74C95 74 83 86 83 101V109"
        stroke="#EB9368"
        strokeWidth="14"
        strokeLinecap="round"
      />
      <path
        d="M110 74C125 74 137 86 137 101V109"
        stroke="#D5774E"
        strokeWidth="14"
        strokeLinecap="round"
      />
      <circle cx="110" cy="62" r="9" fill="#EB9368" />

      <path
        d="M89 23L110 4L131 23"
        stroke="#B85A35"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SiteLogo({ className, compact = false, href = "/" }: SiteLogoProps) {
  const content = (
    <span className={cn("flex items-center gap-3", className)}>
      <LogoMark className="h-10 sm:h-11" />
      {!compact ? (
        <span className="hidden sm:flex flex-col leading-none">
          <span className="text-base font-semibold tracking-[0.18em] uppercase text-foreground">
            FamilyStore
          </span>
          <span className="text-[11px] tracking-[0.28em] uppercase text-muted-foreground">
            Home For Every Generation
          </span>
        </span>
      ) : null}
    </span>
  );

  return (
    <Link href={href} className="inline-flex items-center">
      {content}
    </Link>
  );
}
