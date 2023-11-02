/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/**/*.{js,jsx}',
    ],
  
  theme: {
    extend: {
       backgroundImage: {
        'mobilebg': "url('./src/assets/bg.png')",
      },
      screens: {
        'custom-sm': '300px',
      }
    },
  },
  plugins: [],
}

