/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        cube: 'cuberotate 8s linear infinite',
      },
      keyframes: {
        cuberotate: {
          '0%': {
            transform: 'rotateX(0deg)',
          },
          '20%,25% ': {
            transform: ' rotateX(90deg)',
          },
          '45%,50%': {
            transform: 'rotateX(180deg)',
          },
          ' 70%,75% ': {
            transform: 'rotateX(270deg)',
          },
          '95%,100%': {
            transform: 'rotateX(360deg)',
          },
        },
      },
    },
  },
  plugins: [],
}

