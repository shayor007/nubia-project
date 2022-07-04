module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          '100': '#001f23',
          '50':'#e4f6f7'
        },
      },

      height: theme => ({
        'screen-75' : '75vh',
        'screen-80' : '80vh'
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
