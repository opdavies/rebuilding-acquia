let defaultConfig = require('tailwindcss/defaultConfig')()

var colors = {
  ...defaultConfig.colors,
  'inherit': 'inherit',
  'black': '#22292f',
  'blue': '#018dc7',
  'blue-dark': '#0e68a7',
  'blue-darker': '#002d64',
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
}

module.exports = {
  ...defaultConfig,
  colors: colors,
  textColors: colors,
  backgroundColors: colors,
  borderColors: Object.assign({ default: colors['grey-light'] }, colors),
  fonts: {
    ...defaultConfig.fonts,
    'sans': [
      'Proxima Nova',
      'system-ui',
      'BlinkMacSystemFont',
      '-apple-system',
      'Segoe UI',
      'Roboto',
      'Oxygen',
      'Ubuntu',
      'Cantarell',
      'Fira Sans',
      'Droid Sans',
      'Helvetica Neue',
      'sans-serif',
    ],
  },
  textSizes: {
    ...defaultConfig.textSizes,
    '2xs': '.625rem', // 10px
  },
  borderWidths: {
    ...defaultConfig.borderWidths,
    '6': '6px',
    '10': '10px',
  },
  margin: {
    ...defaultConfig.margin,
    '48': '10rem',
    '64': '16rem',
  },
  plugins: [
    require('tailwindcss/plugins/container')(),
    require('tailwindcss-visuallyhidden')(),
  ],
}
