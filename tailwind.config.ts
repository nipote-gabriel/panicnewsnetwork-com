import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#E01E1E",
          blue: "#0066FF",
          dark: "#0B0F1A",
          silver: "#9FA7B9",
          pink: "#FF2DA8",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-archivo-black)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
