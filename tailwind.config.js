/** @type { import('tailwindcss').Config } */

module.exports = {
  darkMode: 'class',

  content: [
    './src/**/*.{html,js,jsx}'
  ],

  theme: {
    extend: {
      fontFamily: {
        'Outfit': ['Outfit', 'Arial'],
      },

      colors: {
        'game-bg': '#0f172a',
        'game-surface': '#1e293b',
        'game-border': '#334155',
        'game-highlight': '#2563eb',
        'game-correct': '#16a34a',
        'game-partial': '#ea580c',
        'game-wrong': '#475569',

        'body-darkMidOne': '#0F172A',
        'body-darkMidTwo': '#273447',

        'button-normalMidOne': '#2E3B4E',
        'button-normalMidTwo': '#212C3E',
        'button-stroke': '#2E3A4D',

        'modal-midOne': '#293546',
        'modal-midTwo': '#19212E',

        'gameButton-midOne': '#313E52',
        'gameButton-midTwo': '#1F2A3F',
      },

      backgroundImage: {
        'gradient-to-r': 'linear-gradient(to right, var(--tw-gradient-stops))',
        'gradient-to-b': 'linear-gradient(to bottom, var(--tw-gradient-stops))',
        'gradient-to-t': 'linear-gradient(to top, var(--tw-gradient-stops))',
        'gradient-to-l': 'linear-gradient(to left, var(--tw-gradient-stops))',
        'gradient-to-tr': 'linear-gradient(to top right, var(--tw-gradient-stops))',
        'gradient-to-tl': 'linear-gradient(to top left, var(--tw-gradient-stops))',
        'gradient-to-br': 'linear-gradient(to bottom right, var(--tw-gradient-stops))',
        'gradient-to-bl': 'linear-gradient(to bottom left, var(--tw-gradient-stops))'
      }
    },
  },

  plugins: []
}