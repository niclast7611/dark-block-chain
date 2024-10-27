import type { Config } from "tailwindcss";
// eslint-disable-next-line @typescript-eslint/no-require-imports
const typography = require("@tailwindcss/typography");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    fontFamily: {
      heading: "Inter, sans-serif",
      body: "Karla, sans-serif",
    },
    container: {
      center: true,
      padding: {
        sm: "1.5rem",
        md: "2rem",
        lg: "5.5rem",
      },
    },
    extend: {},
  },
  //  add plugins for typography
  plugins: [typography],
};
export default config;
