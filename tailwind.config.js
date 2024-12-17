/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';
import preline from "preline/plugin";

module.exports = {
  darkMode: 'media',
  content: [
    
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/preline/dist/*.js",
    // Or if using `src` directory:
    // "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'green': '#13ce66',
      'gray': '#8492a6',
      black: colors.black,
      white: colors.white,
    },
    extend: {},
  },
  plugins: [
    preline
  ],
}

