import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      display: ["Poppins", "sans-serif"],
      body: ["UniversalSans", "sans-serif"],
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["dracula"],
  },
};
export default config;

// dracula: {
//   "color-scheme": "dark",
//   "primary": "#ff79c6",
//   "secondary": "#bd93f9",
//   "accent": "#ffb86c",
//   "neutral": "#414558",
//   "base-100": "#282a36",
//   "base-content": "#f8f8f2",
//   "info": "#8be9fd",
//   "success": "#50fa7b",
//   "warning": "#f1fa8c",
//   "error": "#ff5555",
// },
