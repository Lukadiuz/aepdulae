/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        quickSand:["Quicksand", 'serif']
      },
      colors: {
        'main': '#55567e',
        'sub': '#d4d4d4',
        'btn-theme': '#0369a1',
        'btn-general': '#55567e',
        'btn-primary':'#3b82f6',
        'btn-danger':'#ef4444',
      },
    },
  },
  plugins: [],
  darkMode: "class"
}

