"use client";

import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export const PageWrapper = ({ children }: PageWrapperProps) => {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname}
      variants={{
        initial: {
          opacity: 0,
          x: 20,
        },
        enter: {
          opacity: 1,
          x: 0,
        },
      }}
      initial="initial"
      animate="enter"
    >
      {children}
    </motion.div>
  );
};

type PageWrapperProps = {
  children: React.ReactNode;
};
