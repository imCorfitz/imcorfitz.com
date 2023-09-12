"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import HeroImage from "@/public/images/me.jpg";
import { AnimatePresence, motion } from "framer-motion";
import ThemeToggle from "./theme-toggle";

export default function SideNavigation() {
  const pathname = usePathname();

  return (
    <div className="sticky top-0 w-16 md:w-24 shrink-0 h-screen overflow-y-auto no-scrollbar border-r border-slate-200 dark:border-slate-800">
      <div className="h-full flex flex-col justify-between">
        <div className="flex-1">
          <AnimatePresence>
            {pathname !== "/" && (
              <motion.div
                variants={{
                  hidden: { opacity: 0, scale: 0 },
                  visible: { opacity: 1, scale: 1 },
                }}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="flex justify-center my-4"
              >
                <Link href="/">
                  <Image
                    className="rounded-full"
                    src={HeroImage}
                    width={32}
                    height={32}
                    priority
                    alt="Me"
                  />
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="flex-1 grow flex items-center">
          <nav className="w-full">
            <ul className="space-y-4">
              <li className="py-2">
                <Link
                  href="/"
                  className={`w-full h-6 flex items-center justify-center relative  ${
                    pathname !== "/about" &&
                    pathname !== "/subscribe" &&
                    pathname !== "/projects" &&
                    pathname !== "/resume"
                      ? "text-emerald-500 "
                      : "text-slate-400 hover:text-slate-500 dark:text-slate-500 dark:hover:text-slate-400"
                  }`}
                >
                  <span className="sr-only">Home</span>
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="19"
                  >
                    <path fillOpacity=".16" d="M4 7v11h13V7l-6.5-5z" />
                    <path d="m10.433 3.242-8.837 6.56L.404 8.198l10.02-7.44L20.59 8.194l-1.18 1.614-8.977-6.565ZM16 17V9h2v10H3V9h2v8h11Z" />
                  </svg>
                  {pathname !== "/about" &&
                    pathname !== "/subscribe" &&
                    pathname !== "/projects" &&
                    pathname !== "/resume" && (
                      <motion.div
                        layoutId="bar"
                        className="absolute w-0.5 right-0 top-0 bottom-0 bg-emerald-500"
                      />
                    )}
                </Link>
              </li>
              <li className="py-2">
                <Link
                  href="/about"
                  className={`w-full h-6 flex items-center justify-center relative  ${
                    pathname === "/about"
                      ? "text-emerald-500 "
                      : "text-slate-400 hover:text-slate-500 dark:text-slate-500 dark:hover:text-slate-400"
                  }`}
                >
                  <span className="sr-only">About</span>
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                  >
                    <path
                      fillOpacity=".16"
                      d="M10 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z"
                    />
                    <path d="M9 5h2v2H9V5Zm0 4h2v6H9V9Zm1-9C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z" />
                  </svg>

                  {pathname === "/about" && (
                    <motion.div
                      layoutId="bar"
                      className="absolute w-0.5 right-0 top-0 bottom-0 bg-emerald-500"
                    />
                  )}
                </Link>
              </li>
              {/* <li className="py-2">
                <Link
                  href="/projects"
                  className={`w-full h-6 flex items-center justify-center relative ${
                    pathname === "/projects"
                      ? "text-emerald-500"
                      : "text-slate-400 hover:text-slate-500 dark:text-slate-500 dark:hover:text-slate-400"
                  }`}
                >
                  <span className="sr-only">Projects</span>
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                  >
                    <path fillOpacity=".16" d="M1 4h18v10H1z" />
                    <path d="M8 3h4V2H8v1ZM6 3V0h8v3h6v12H0V3h6ZM2 5v8h16V5H2Zm14 13v-2h2v4H2v-4h2v2h12Z" />
                  </svg>
                  {pathname === "/projects" && (
                    <motion.div
                      layoutId="bar"
                      className="absolute w-0.5 right-0 top-0 bottom-0 bg-emerald-500"
                    />
                  )}
                </Link>
              </li> */}
              {/* <li className="py-2">
                <Link
                  href="/resume"
                  className={`w-full h-6 flex items-center justify-center relative  ${
                    pathname === "/resume"
                      ? "text-emerald-500 "
                      : "text-slate-400 hover:text-slate-500 dark:text-slate-500 dark:hover:text-slate-400"
                  }`}
                >
                  <span className="sr-only">Resume</span>
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="20"
                  >
                    <path
                      fillOpacity=".16"
                      fillRule="nonzero"
                      d="M1 5h16v14H1z"
                    />
                    <path
                      fillRule="nonzero"
                      d="M2 6v12h14V6H2Zm16-2v16H0V4h18ZM2 2V0h14v2H2Z"
                    />
                  </svg>
                  {pathname === "/resume" && (
                    <motion.div
                      layoutId="bar"
                      className="absolute w-0.5 right-0 top-0 bottom-0 bg-emerald-500"
                    />
                  )}
                </Link>
              </li> */}
              {/* <li className="py-2">
                <Link
                  href="/subscribe"
                  className={`w-full h-6 flex items-center justify-center relative  ${
                    pathname === "/subscribe"
                      ? "text-emerald-500 "
                      : "text-slate-400 hover:text-slate-500 dark:text-slate-500 dark:hover:text-slate-400"
                  }`}
                >
                  <span className="sr-only">Subscribe</span>
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                  >
                    <path fillOpacity=".16" d="m13.4 18-3-7.4-7.4-3L19 2z" />
                    <path d="M13.331 15.169 17.37 3.63 5.831 7.669l5.337 2.163 2.163 5.337Zm-3.699-3.801L.17 7.53 20.63.37l-7.161 20.461-3.837-9.463Z" />
                  </svg>
                  {pathname === "/subscribe" && (
                    <motion.div
                      layoutId="bar"
                      className="absolute w-0.5 right-0 top-0 bottom-0 bg-emerald-500"
                    />
                  )}
                </Link>
              </li> */}
            </ul>
          </nav>
        </div>
        <div className="flex-1 flex items-end mt-auto">
          <div className="flex justify-center w-full py-4">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </div>
  );
}
