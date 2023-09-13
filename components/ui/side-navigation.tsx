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

              <li className="py-2">
                <a
                  href="https://github.com/imCorfitz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full h-6 flex items-center justify-center relative text-slate-400 hover:text-slate-500 dark:text-slate-500 dark:hover:text-slate-400`}
                >
                  <span className="sr-only">GitHub</span>
                  <svg
                    className="fill-current w-5 h-5"
                    height="24"
                    width="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path
                        d="M12,0.3c-6.6,0-12,5.4-12,12c0,5.3,3.4,9.8,8.2,11.4 C8.8,23.8,9,23.4,9,23.1c0-0.3,0-1,0-2c-3.3,0.7-4-1.6-4-1.6c-0.5-1.4-1.3-1.8-1.3-1.8C2.5,17,3.7,17,3.7,17 c1.2,0.1,1.8,1.2,1.8,1.2c1.1,1.8,2.8,1.3,3.5,1c0.1-0.8,0.4-1.3,0.8-1.6c-2.7-0.3-5.5-1.3-5.5-5.9c0-1.3,0.5-2.4,1.2-3.2 C5.5,8.1,5,6.9,5.7,5.3c0,0,1-0.3,3.3,1.2c1-0.3,2-0.4,3-0.4c1,0,2,0.1,3,0.4c2.3-1.6,3.3-1.2,3.3-1.2c0.7,1.7,0.2,2.9,0.1,3.2 c0.8,0.8,1.2,1.9,1.2,3.2c0,4.6-2.8,5.6-5.5,5.9c0.4,0.4,0.8,1.1,0.8,2.2c0,1.6,0,2.9,0,3.3c0,0.3,0.2,0.7,0.8,0.6 c4.8-1.6,8.2-6.1,8.2-11.4C24,5.7,18.6,0.3,12,0.3z"
                        fillRule="evenodd"
                      />
                    </g>
                  </svg>
                </a>
              </li>
              <li className="py-2">
                <a
                  href="https://twitter.com/imCorfitz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full h-6 flex items-center justify-center relative text-slate-400 hover:text-slate-500 dark:text-slate-500 dark:hover:text-slate-400`}
                >
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="fill-current w-5 h-5"
                    height="24"
                    width="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                    </g>
                  </svg>
                </a>
              </li>
              {/* <li className="py-2">
                <a
                  href="https://corfitz.medium.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full h-6 flex items-center justify-center relative text-slate-400 hover:text-slate-500 dark:text-slate-500 dark:hover:text-slate-400`}
                >
                  <span className="sr-only">Medium</span>
                  <svg
                    className="fill-current w-5 h-5"
                    height="24"
                    width="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path d="M23,0H1A1,1,0,0,0,0,1V23a1,1,0,0,0,1,1H23a1,1,0,0,0,1-1V1A1,1,0,0,0,23,0ZM19.938,5.686,18.651,6.92a.376.376,0,0,0-.143.361v9.068a.376.376,0,0,0,.143.361l1.257,1.234v.271H13.586v-.271l1.3-1.264c.128-.128.128-.166.128-.361V8.99l-3.621,9.2h-.489L6.691,8.99v6.163a.85.85,0,0,0,.233.707l1.694,2.054v.271h-4.8v-.271L5.509,15.86a.82.82,0,0,0,.218-.707V8.027a.625.625,0,0,0-.2-.527L4.019,5.686V5.415H8.693l3.613,7.924,3.176-7.924h4.456Z" />
                    </g>
                  </svg>
                </a>
              </li> */}
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
