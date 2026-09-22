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
          red: "#FF202D",
          blue: "#0066FF",
          dark: "#080F1A",
          silver: "#AFB3C8",
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
