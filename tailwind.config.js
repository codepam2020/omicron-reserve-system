/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        basic: "#000000",
        button: "#d4db18",
        name: "#748B9B",
      },
      fontSize: {
        title: 24,
      },
    },
  },
  plugins: [],
};