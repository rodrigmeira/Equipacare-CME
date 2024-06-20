import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        h1Banner: "0 0px 2px rgba(0, 0, 0, 1)",
      },
      colors: {
        "color-primary": "#91AB29",
        "color-primary-focus": "#b6d245",
        "color": "#031125",
      
      },
    },
  },
  plugins: [],
};
export default config;
