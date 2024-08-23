/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {
      animation:{
        "loop-scroll":"loop-scroll 20s linear infinite"
      },
      keyframes:{
        "loop-scroll":{
          from:{transform:"translateX(0)"},
          to:{transform:"translateX(-100%)"}
        }
      }
    },
  },
  plugins: [],
}

