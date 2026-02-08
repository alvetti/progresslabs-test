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
    container: {
      center: true,
      padding: '20px',
      screens: {
        'sm': '300px',
        'md': '420px',
        'lg': '768px',
        'xl': '997px',
        '2xl': '1297px',
      },
    },
    extend: {
      colors: {
        'fulton-green': '#01483A',
        'fulton-light-green': '#ADC2BD',
        'fulton-yellow': '#FFBF3F',
        'fulton-grey': '#ADC2BD',
      },
      fontFamily: {
        'edufavoritregular': 'Edu Favorit Regular',
        'edufavoritmedium': 'Edu Favorit Medium',
      },
      backgroundImage: {
        'menu-icon': 'url("data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FtYWRhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzAgMTUiPgogIDxwYXRoIGQ9Ik0yNi41LjhsLTEsLjJjLTIuNi42LTUuMywyLTcuMywzLjctLjkuOC0xLjksMS44LTIuNywzLjItLjgtMS4zLTEuOC0yLjQtMi43LTMuMi0yLTEuNy00LjctMy4xLTcuMy0zLjdsLTEtLjItLjcsMywxLC4yaDBjMS42LjQsNC4xLDEuNCw2LDMuMSwxLjQsMS4yLDMsMy4yLDIuOSw1Ljh2MXMuNSwwLC41LDBoMy4xdi0xYy0uMi0yLjYsMS41LTQuNiwyLjktNS44LDItMS43LDQuNC0yLjcsNi0zLjFsMS0uMi0uNy0zWiIgc3R5bGU9ImZpbGw6ICNmNWMxNTg7Ii8+Cjwvc3ZnPg==")',
      },
      backgroundSize: {
        'menu-icon-size': '30px',
      },
      backgroundPosition: {
        'menu-icon-position': 'right 10px',
      }
    },
  },
  plugins: [],
}

