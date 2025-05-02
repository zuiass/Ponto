/** @type { import('tailwindcss').Config } */

module.exports = {
    darkMode: 'class',
  
    content: [
      './src/pages/**/*.html',
      './src/components/**/*.html',
      './src/**/*.js'
    ],
  
    theme: {
      extend: {
        fontFamily: {
          'Outfit': ['Outfit', 'Arial'],
        },
  
        colors: {
            body: {
                darkMidOne: '#0F172A',
                darkMidTwo: '#1E293B',
            },
            
            button: {
                normalMidOne: '#2F3B4F',
                normalMidTwo: '#1E293C',
            },
            
            modal: {
                midOne: '#293546',
                midTwo: '#19212E',
            },
        },
      },
    },
  
    plugins: [],
}