/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "768px",
      md: "1024px",
      lg: "1280px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.slate,
      red: "rgb(var(--color-red))",
      rebeccapurple: "rgb(var(--color-rebeccapurple))",
      blue: "rgb(var(--color-blue))",
      outline: "rgb(var(--color-outline))",
    },
    extend: {},
  },
  plugins: [],
};
