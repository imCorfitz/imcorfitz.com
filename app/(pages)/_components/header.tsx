import Link from "next/link";
import { NavLink } from "./nav-link";
import { Twitter, Github } from "lucide-react";
import { SocialLink } from "./social-link";

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
    path: "https://twitter.com/imcorfitz",
    label: "Twitter",
    icon: <Twitter size={18} />,
  },
  {
    path: "https://github.com/imcorfitz",
    label: "GitHub",
    icon: <Github size={18} />,
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
