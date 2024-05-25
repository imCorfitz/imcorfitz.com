import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
      container: {
        center: true,
        padding: "1rem",
      },
      colors: {
        primary: "rgba(var(--foreground-rgb))",
        secondary: "rgba(var(--background-rgb))",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
