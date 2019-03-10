defaultTheme = require('tailwindcss/defaultTheme')()

module.exports = {
  theme: {
    colors: {
     'inherit': 'inherit',
      'black': '#22292f',
      'blue': '#018dc7',
      'blue-dark': '#0e68a7',
      'blue-darker': '#004f86',
      'blue-light': '#29aae1',
      'green': '#398002',
      'grey': '#B7B7B7',
      'grey-dark': '#888888',
      'grey-darker': '#555555',
      'grey-darkest': '#333333',
      'grey-light': '#DDDDDD',
      'grey-lighter': '#eeeeee',
      'grey-lightest': '#f8fafc',
      'orange': '#FA9903',
      'orange-light': '#FFB401',
      'purple': '#991FAF',
      'red-dark': '#cc1f1a',
      'teal': '#3F7B8F',
      'transparent': 'transparent',
      'white': '#ffffff',
      'yellow-lightest': '#FAF8DF'
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
        'sans': ['Proxima Nova', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        '2xs': '.625rem', // 10px
      },
      spacing: {
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
