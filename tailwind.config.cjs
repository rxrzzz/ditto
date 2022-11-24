/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        grotesk: ["Clash Grotesk", "sans-serif"],
        alpino: ["Alpino", "sans-serif"],
      },
    },
  },
  plugins: [],
};
