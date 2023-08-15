/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#E8A0B2',
      },

      width: {
        100: '32rem',
        200: '26rem',
        300: '22rem',
        400: '44rem',
        500: '50rem',
        form: '52rem',
        0.75: '3px',
      },

      height: {
        100: '32rem',
        200: '26rem',
        280: '28rem',
        300: '22rem',
        400: '44rem',
        500: '55rem',
      },

      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}
