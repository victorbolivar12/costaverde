import type { Config } from "tailwindcss";


const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        lato: ["var(--font-lato)"],
        rufina: ["var(--font-rufina)"]
      },
      colors: {
        'coston-gred': '#00461E',
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
};
export default config;
