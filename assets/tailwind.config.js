const colors = require('tailwindcss/colors')


module.exports = {
  mode: 'jit',
  purge: [
    './js/**/*.js',
    '../lib/*_web/**/*.*ex'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        sky: colors.sky,
        cyan: colors.amber,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
