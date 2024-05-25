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
      className={`border-b border-dotted font-mono text-sm transition-opacity hover:opacity-80
      ${pathname === path ? "opacity-100" : "opacity-50"}
  `}
    >
      {label}
    </Link>
  );
};
