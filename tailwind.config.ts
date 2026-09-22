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
          red: "#FF2D2D",
          blue: "#0066FF",
          dark: "#0B0F1A",
          silver: "#9FA7B9",
          pink: "#FF2DA8",
        },
      },
    },
  },
  plugins: [],
};
export default config;
