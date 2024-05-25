"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// ------------------------------------------------------------------

interface NavLinkProps {
  path: string;
  label: string;
}

// ------------------------------------------------------------------

export const NavLink = ({ path, label }: NavLinkProps) => {
  const pathname = usePathname();

  return (
    <Link
      href={path}
      className={`border-b border-dotted font-mono text-sm transition-colors hover:text-zinc-200/80
      ${pathname === path ? "text-zinc-200" : "text-zinc-500"}
  `}
    >
      {label}
    </Link>
  );
};
