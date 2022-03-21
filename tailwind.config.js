const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./resources/**/*.{edge,js,ts,vue,jsx,tsx}' ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
