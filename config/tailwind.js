/**
 * Dependencies
 */

const defaultConfig = require('tailwindcss/defaultConfig')();
const variables = require('./variables.js');

/**
 * Config
 */

module.exports = {
  colors: variables.colors,
  textColors: variables.colors,
  backgroundColors: variables.colors,
  borderColors: global.Object.assign({ default: '' }, variables.colors),
  screens: {
    'screen-desktop': {'raw': `screen and (min-width: ${variables.screens['screen-desktop']}px)`},
    'screen-tablet': {'raw': `screen and (min-width: ${variables.screens['screen-tablet']}px)`},
    'screen-mobile': {'raw': `screen and (min-width: ${variables.screens['screen-mobile']}px)`},
    'screen-sm-mobile': {'raw': `screen and (min-width: ${variables.screens['screen-sm-mobile']}px)`},
    'print': {'raw': 'print'}
  },
  fonts: variables.fonts,
  textSizes: variables.fontSizes,
  fontWeights: variables.fontWeights,
  leading: variables.leading,
  borderWidths: variables.borderWidths,
  margin: variables.margin,
  maxWidth: {
    '1/2': '50%',
    'full': '100%'
  },
  height: {
    'auto': 'auto',
    'full': '100%',
    '90vh': '90vh',
    '100vh': '100vh'
  },
  padding: variables.padding,
  modules: {
    backgroundColors: ['responsive', 'hover', 'focus'],
    borderColors: ['hover', 'focus'],
    borderStyle: ['hover', 'focus'],
    borderWidths: ['responsive', 'hover', 'focus'],
    display: ['responsive'],
    flexbox: ['responsive'],
    fonts: [],
    fontWeights: [],
    leading: [],
    margin: ['responsive'],
    maxWidth: ['responsive'],
    overflow: ['responsive'],
    padding: ['responsive'],
    textColors: ['hover'],
    textSizes: ['responsive'],
    textStyle: [],
    whitespace: ['responsive'],
    width: ['responsive'],
    height: ['responsive']
  },
  options: {
    prefix: '',
    important: true,
    separator: ':'
  }
};
