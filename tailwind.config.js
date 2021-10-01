const colors = require("tailwindcss/colors");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: colors.white,
      black: colors.black,
      pink: colors.pink,
      blue: colors.lightBlue,
      green: colors.green,
      violet: colors.violet,
      teal: colors.teal,
      lime: colors.lime,
      rose: colors.rose,
      orange: colors.orange,
      gray: colors.blueGray,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
