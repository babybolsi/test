
module.exports = {

  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
          'test':'1640px',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}