/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        defaultYellow: '#FFF621',
        defaultBlue: '#06ECDE',
        defaultOrange: '#FF9A03',
        defaultGray: '#D9D9D9',
      },
    },
  },
  plugins: [],
};
