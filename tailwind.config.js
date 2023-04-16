/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors:{
        brand:'	#2E8B57',
      },
      backgroundImage: {
        banner: `url(../public/image/eco.jpg)`
      }
    },
  },
  plugins: [],
}
