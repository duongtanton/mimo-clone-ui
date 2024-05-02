import { nextui } from "@nextui-org/theme";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|input|ripple|spinner).js"
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(37, 39, 70)",
        secondary: "rgb(64, 66, 115)",
        primary: "rgb(136, 91, 222)",
      },
    },
  },
  plugins: [nextui()],
};
export default config;
