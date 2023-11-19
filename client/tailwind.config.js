/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        lg: '2rem',
      },
      center: true,
    },
    extend: {
      fontFamily: {
        sacramento: ['Sacramento', 'cursive'],
        playfair: ['Playfair Display', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
