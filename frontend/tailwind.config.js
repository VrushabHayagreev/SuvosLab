/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {

        primary: "#990000",
        secondary : '#EDEBEB',
      },
      backgroundImage: {
        'sample': "url('/src/Assets/samplegates.png')",

      },
      backdropOpacity: {
        '15': '0.15',
        '35': '0.35',
        '65': '0.65',
       }
    },
  },
  plugins: [],
}
