/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './app/helpers/**/*.rb',
    './app/assets/stylesheets/**/*.css',
    './app/views/**/*.{html,html.erb,erb}',
    './app/javascript/components/**/*.js',
    "./app/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'circular': ["CircularStd-Black", "sans-serif"],
      'inter': ["Inter-Regular", "sans-serif"],
    },
    colors: {
      'radical' : '#ff365e',
      'radical-hvr' : '#FF476C',
      'white' : '#ffffff',
      'black' : '#000000',
      'white' : '#ffffff',
      'black' : '#000000',
      'gray' : '#f5f5f5'
    },
    extend: {
      defaultTheme,
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
  ],
}
