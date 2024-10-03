/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    screens: {
      xsm: "360px",
      sm: "550px",
      md: "770px",
      // => @media (min-width: 640px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      "2xl": "1580px",

      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      animation: {
        "loop-scroll": "loop-scroll 30s linear infinite",
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        appear: {
          from: { opacity: 0, scale: 0.5 },
          to: { opacity: 1, scale: 1 },
        },
      },
    },
  },
  plugins: [],
};
