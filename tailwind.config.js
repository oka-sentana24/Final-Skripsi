const colors = require('tailwindcss/colors')
module.exports = {
//   purge: [],
//   darkMode: false, // or 'media' or 'class'
//   theme: {
//     maxHeight: {
//       '0': '0',
//       '1/4': '25vh',
//       '1/2': '50vh',
//       '3/4': '94vh',
//       'full': '100vh',
//      },
//     extend: {
//       'hero-pattern': "url('/img/hero-pattern.svg')",
//       'footer-texture': "url('/img/footer-texture.png')",
//     },
//   },
//   variants: {
//     extend: {},
//   },
//   plugins: [],
  theme: {
    height: {
      '94': '94vh',
     },
    colors: {
      gray: colors.coolGray,
      blue: colors.lightBlue,
      red: colors.rose,
      pink: colors.fuchsia,
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  variants: {
    extend: {
      borderColor: ['focus-visible'],
      opacity: ['disabled'],
    }
  }
}
