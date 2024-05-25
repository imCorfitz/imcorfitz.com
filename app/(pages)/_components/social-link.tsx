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
      className="opacity-50 transition-opacity hover:opacity-80"
    >
      {icon}
    </a>
  );
};
