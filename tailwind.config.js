/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        swatches: {
          100: "#222222",
          200: "#333333",
          300: "#666666",
          400: "#AAAAAA",
          500: "#EEEEEE",
        },
        screens: {
          "2xl": "1320px",
        },
      },
    },
  },
  plugins: [],
};
