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

                boxShadow: {
                    'cell': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.25)',
                    'glow': '0 0 15px rgba(59, 130, 246, 0.5)'
                },

                animation: {
                    'float': 'float 3s ease-in-out infinite',
                    'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite'
                },

                keyframes: {
                    float: {
                        '0%, 100%': { transform: 'translateY(0)' },
                        '50%': { transform: 'translateY(-10px)' }
                    }
                },

                body: {
                    darkMidOne: '#0F172A',
                    darkMidTwo: '#273447'
                },

                button: {
                    normalMidOne: '#2E3B4E',
                    normalMidTwo: '#212C3E',
                    stroke: '#2E3A4D',

                    gradientMidOne: '#F2AB1B',
                    gradientMidTwo: '#DC7C08'
                },
                
                modal: {
                    midOne: '#293546',
                    midTwo: '#19212E'
                },

                gameButton: {
                    midOne: '#313E52',
                    midTwo: '#1F2A3F',
                }
            },
        },
    },

    plugins: []
}