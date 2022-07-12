/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}",
  './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {

    fontFamily: {
      'opensans': ['Open Sans'],
      'robot': ['Roboto']
    },
    extend: {},
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
