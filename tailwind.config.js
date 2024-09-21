/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    screens: {
      xsm: '360px',
      sm: '550px',
      md: '770px',
      // => @media (min-width: 640px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      '2xl': '1580px',

      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      
    },
  },
  plugins: [],
}

