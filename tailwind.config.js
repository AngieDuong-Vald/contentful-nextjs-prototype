/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.js", "./components/**/*.js"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        orange: "#ff7700",
        grey: "#7e7e7e",
        white: "#FFFFFF",
        blue: "#0000FF",
      },
    },
  },
  plugins: [],
};
