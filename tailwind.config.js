/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layout/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
    './templates/*.liquid',
    './assets/*.liquid',
  ],
  theme: {
    extend: {
      colors: {
        'fulton-green': '#01483A',
        'fulton-light-green': '#ADC2BD',
        'fulton-yellow': '#FFBF3F',
        'fulton-grey': '#ADC2BD',
      }
    },
  },
  plugins: [],
}

