const { fontFamily, spacing } = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    colors: {
      inherit: 'inherit',
      black: '#22292f',
      blue: {
        100: '#29aae1',
        200: '#018dc7',
        300: '#0e68a7',
        400: '#004f86'
      },
      green: '#398002',
      gray: {
        100: '#f8fafc', // lightest
        200: '#eee', // lighter
        300: '#ddd', // light
        400: '#bbb', // default
        500: '#888', // dark
        600: '#555', // darker
        700: '#333' // darkest
      },
      orange: {
        100: '#fa9903',
        200: '#ffb401'
      },
      purple: '#991faf',
      red: '#cc1f1a',
      teal: '#3f7b8f',
      transparent: 'transparent',
      white: '#fff',
      yellow: '#faf8df'
    },
    extend: {
      borderWidth: {
        3: '3px',
        6: '6px',
        10: '10px'
      },
      boxShadow: {
        md: '0 0 10px 0 rgba(0,0,0,0.1)'
      },
      fontFamily: {
        sans: ['Proxima Nova', ...fontFamily.sans]
      },
      fontSize: {
        '2xs': '.625rem' // 10px
      },
      spacing: {
        '2px': '2px',
        48: '10rem',
        56: '14rem',
        64: '16rem'
      },
      width: {
        56: '14rem'
      }
    }
  },
  plugins: [
    require('tailwindcss-spaced-items')({ values: spacing }),
    require('tailwindcss-visuallyhidden')()
  ]
}
