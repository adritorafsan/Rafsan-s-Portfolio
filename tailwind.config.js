/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#A500FF",
        secondary:"#f3f3f3"
      },
      container: {
        center:true,
        padding:{
          DEFAULT:"1rem",
          md:"3rem",
        }
      }
    },
  },
  plugins: [],
}

