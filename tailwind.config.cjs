/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#f5f5f5",
          200: "#eeeeee",
          300: "#e0e0e0",
          400: "#bdbdbd",
        },
      },
      fontFamily: {
        sans: ["Inter var", "sans-serif"],
        mochi: ['Mochiy Pop One', 'sans-serif'],
      },
    },
  },
  plugins: [],
}