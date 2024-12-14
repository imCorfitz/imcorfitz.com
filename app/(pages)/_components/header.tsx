import Link from "next/link";
import { NavLink } from "./nav-link";
import { SocialLink } from "./social-link";
import { Logo } from "@/components/icons";

// ------------------------------------------------------------------

const navItems = [
  //   {
  //     path: "/",
  //     label: "Thoughts",
  //   },
  {
    path: "/about",
    label: "About",
  },
];

const socialItems = [
  {
    path: "https://x.com/imcorfitz",
    label: "X",
    icon: <Logo.X size={16} />,
  },
  {
    path: "https://bsky.app/profile/imcorfitz.com",
    label: "Bluesky",
    icon: <Logo.Bluesky size={17} />,
  },
  {
    path: "https://github.com/imcorfitz",
    label: "GitHub",
    icon: <Logo.Github size={18} />,
  },
];

// ------------------------------------------------------------------

export const Header = () => {
  return (
    <header className="mb-16 flex items-center">
      <Link
        href="/"
        className="text-xl font-bold transition-colors hover:text-zinc-200/80"
      >
        Corfitz.
      </Link>
      <div className="ml-auto flex items-center gap-8">
        <div className="flex items-center gap-4">
          {navItems.map((item) => (
            <NavLink key={item.path} path={item.path} label={item.label} />
          ))}
        </div>
        <div className="flex items-center gap-4">
          {socialItems.map((item) => (
            <SocialLink
              key={item.path}
              path={item.path}
              label={item.label}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </header>
  );
};
