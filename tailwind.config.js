/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',

  content: [
    './src/pages/**/*.html',
    './src/components/**/*.html',
    './src/**/*.js'
  ],

  theme: {
    extend: {
      colors: {
        // <body class="dark">
        'body-darkMidOne': '#0F172A',
        'body-darkMidTwo': '#1E293B',

        // Buttons 
        'normalButton-midOne': '#2E3A4E',
        'normalButton-midTwo': '#1E283B',
      },
    },
  },

  plugins: [],
}