/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/**/*.{js,jsx}',
    ],
  
  theme: {
    extend: {
      screens: {
        'custom-sm': '300px',
      }
    },
  },
  plugins: [],
}

