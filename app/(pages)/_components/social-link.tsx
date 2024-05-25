import type { LucideIcon } from "lucide-react";

// ------------------------------------------------------------------

interface SocialLinkProps {
  path: string;
  label: string;
  icon: React.ReactNode;
}

// ------------------------------------------------------------------

export const SocialLink = ({ path, label, icon }: SocialLinkProps) => {
  return (
    <a
      href={path}
      rel="noopener noreferrer"
      target="_blank"
      title={label}
      className="text-zinc-500 transition-colors hover:hover:text-zinc-200/80"
    >
      {icon}
    </a>
  );
};
