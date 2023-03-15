/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "finsho-purple": '#8A56AC',
        "finsho-purple-dark": '#435dd1',
        "finsho-white": '#f5f5f5'
      },

      fontFamily:{
        sans: ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}
