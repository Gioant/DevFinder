/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    " ./src/js/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        'space-mono': ['"Space Mono"', 'monospace'],
      },

      colors: {
        blue: '#0077ff',
        'broken-blue': '#265f7d',
        'glaucous': '#697C9B',
        'true-blue': '#4B699B',
        'space-cadet': '#1E2B48',
        'gunmetal': '#2A3341',
        'oxford-blue': '#141D2E',
        white: '#ffffff',
        'ghost-white': '#f5f7ff',
      },

      boxShadow: {
        '3xl': '0 16px 30px -10px rgba(70, 96, 187, 0.2)',
      },
      
      gridTemplateColumns: {
        'auto2': 'repeat(2, auto)',
        'auto3': 'repeat(3, auto)',
      },

      gridTemplateRows: {
        'auto2': 'repeat(2, auto)',
        'auto3': 'auto 20px auto',
      }
      

    },
  },
  plugins: [],
}

