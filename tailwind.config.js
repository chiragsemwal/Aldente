/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'oneBg' : '#f3f2ed',
      }
    },
    
  },
  plugins: [],
}

