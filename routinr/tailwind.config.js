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
    },
  },
  plugins: [],
}

