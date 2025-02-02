import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "selector",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./stories/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        mo: { max: "484px" },
        web: "485px",
      },
      colors: {
        primary: "#f9b4ab",
        "primary-dark": "#f29992",
        "primary-light": "#facec8",
        white: "#fff",
        black: "#232323",
        "black-light": "#333",
        "grey-light": "#eee",
        grey: "#9e9e9e",
        "grey-dark": "#5a5a5a",
        red: "#f55656",
        blue: "#2196f3",
        green: "#62c466",
        coral: "#f9b4ab",
        "coral-dark": "#f29992",
        beige: "#fdebd3",
        "dark-teel": "#264e70",
        "grayish-teel": "#679186",
        "pale-mint": "#679186",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundSize: {
        "50%": "50%",
      },
      keyframes: {
        grow: {
          "0%": { transform: "scale(0.2)" },
          "100%": { transform: "scale(1)" },
        },
        ripple: {
          "0%": { width: "0", height: "0", opacity: "0.8" },
          "100%": { width: "100px", height: "100px", opacity: "0" },
        },
      },
      animation: {
        grow: "grow 0.1s ease-in-out forwards",
        ripple: "ripple 1.5s infinite",
      },
    },
  },
  plugins: [],
};
export default config;
