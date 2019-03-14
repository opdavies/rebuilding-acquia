defaultTheme = require('tailwindcss/defaultTheme')()

module.exports = {
  theme: {
    colors: {
      inherit: 'inherit',
      black: '#22292f',
      blue: {
        '1': '#29aae1',
        '2': '#018dc7',
        '3': '#0e68a7',
        '4': '#004f86',
      },
      green: '#398002',
      grey: {
        '1': '#f8fafc',
        '2': '#eee',
        '3': '#ddd',
        '4': '#b7b7b7',
        '5': '#888',
        '6': '#555',
        '7': '#333',
      },
      orange: {
        '1': '#fa9903',
        '2': '#ffb401',
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
        '3': '3px',
        '6': '6px',
        '10': '10px',
      },
      boxShadow: {
        md: '0 0 10px 0 rgba(0,0,0,0.1)',
      },
      fontFamily: {
        sans: ['Proxima Nova', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        '2xs': '.625rem', // 10px
      },
      spacing: {
        '2px': '2px',
        '48': '10rem',
        '56': '14rem',
        '64': '16rem',
      },
      width: {
        '56': '14rem',
      },
    },
  },
  plugins: [
    require('tailwindcss/plugins/container')(),
    require('tailwindcss-spaced-items')({ values: defaultTheme.spacing }),
    require('tailwindcss-visuallyhidden')(),
  ],
}
